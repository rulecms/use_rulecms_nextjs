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
const PATH = '/prefetched-acceptance';

function curlHtml() {
  return new Promise((resolve, reject) => {
    const proc = spawn('curl', ['-s', `${BASE_URL}${PATH}`], {
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
      const html = await curlHtml();
      if (html.includes('<!DOCTYPE html') || html.includes('<html')) {
        return html;
      }
    } catch {
      // server not ready
    }
    await delay(1000);
  }
  throw new Error(`Server did not become ready at ${BASE_URL}${PATH}`);
}

const imgTags = (html) => html.match(/<img[^>]*>/gi) ?? [];

const server = startServer();
let html;

try {
  html = await waitForServer();
} catch (err) {
  server.kill('SIGTERM');
  console.error(err.message);
  process.exit(1);
}

const tags = imgTags(html);
const cloudinaryImg = tags.find((tag) => tag.includes('res.cloudinary.com'));

console.log(`Fetched ${BASE_URL}${PATH} (${html.length} bytes)`);
console.log(`Found ${tags.length} <img> tag(s)`);

if (cloudinaryImg) {
  console.log('\nCloudinary image in server HTML:');
  console.log(cloudinaryImg);
}

const checks = [
  ['res.cloudinary.com URL', html.includes('res.cloudinary.com')],
  ['srcset attribute', /srcset=/i.test(html)],
  ['width or aspect reservation', /width="\d+"/.test(html) || /aspect-ratio/i.test(html)],
];

let failed = false;
for (const [label, ok] of checks) {
  console.log(`${ok ? '✓' : '✗'} ${label}`);
  if (!ok) failed = true;
}

server.kill('SIGTERM');
process.exit(failed ? 1 : 0);
