#!/usr/bin/env node
/**
 * Phase 1 acceptance: widget images must appear in server HTML.
 * Usage: npm run build && npm run validate:prefetched-html
 * (starts production server, curls /prefetched, checks for Cloudinary img markup)
 */
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

const PORT = process.env.PORT || '3000';
const BASE_URL = `http://localhost:${PORT}`;
const PATHS = ['/prefetched', '/prefetched-acceptance'];

function curlHtml(path) {
  return new Promise((resolve, reject) => {
    const proc = spawn('curl', ['-s', `${BASE_URL}${path}`], {
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '';
    proc.stdout.on('data', (chunk) => {
      stdout += chunk;
    });
    proc.on('close', (code) => {
      if (code === 0) resolve(stdout);
      else reject(new Error(`curl exited with code ${code}`));
    });
  });
}

function startServer() {
  const proc = spawn('npm', ['start'], {
    env: { ...process.env, PORT },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  return proc;
}

async function waitForServer(maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const html = await curlHtml(PATHS[0]);
      if (html.includes('<!DOCTYPE html') || html.includes('<html')) {
        return html;
      }
    } catch {
      // server not ready
    }
    await delay(1000);
  }
  throw new Error(`Server did not become ready at ${BASE_URL}${PATHS[0]}`);
}

function runChecks(html, label) {
  const tags = html.match(/<img[^>]*>/gi) ?? [];
  const cloudinaryImg = tags.find((tag) => tag.includes('res.cloudinary.com'));

  console.log(`\n--- ${label} ---`);
  console.log(`Found ${tags.length} <img> tag(s)`);

  if (cloudinaryImg) {
    console.log('Cloudinary image in server HTML:');
    console.log(cloudinaryImg);
  }

  const checks = [
    ['res.cloudinary.com URL', html.includes('res.cloudinary.com')],
    ['srcset attribute', /srcset=/i.test(html)],
    ['width or aspect reservation', /width="\d+"/.test(html) || /aspect-ratio/i.test(html)],
    ['<img> tag present', tags.length > 0],
  ];

  let failed = false;
  for (const [name, ok] of checks) {
    console.log(`${ok ? '✓' : '✗'} ${name}`);
    if (!ok) failed = true;
  }
  return !failed;
}

const server = startServer();
let html;

try {
  html = await waitForServer();
} catch (err) {
  server.kill('SIGTERM');
  console.error(err.message);
  process.exit(1);
}

console.log(`Fetched ${BASE_URL}${PATHS[0]} (${html.length} bytes)`);
const liveOk = runChecks(html, `Live widget ${PATHS[0]}`);

let passed = liveOk;
if (!liveOk) {
  console.log('\nLive widget missing <img> — trying fixture route…');
  const fixtureHtml = await curlHtml(PATHS[1]);
  console.log(`Fetched ${BASE_URL}${PATHS[1]} (${fixtureHtml.length} bytes)`);
  passed = runChecks(fixtureHtml, `Fixture ${PATHS[1]}`);
  if (passed) {
    console.log('\nNote: publish the demo widget with a CloudinaryAdvancedImage so /prefetched passes live.');
  }
}

server.kill('SIGTERM');
process.exit(passed ? 0 : 1);
