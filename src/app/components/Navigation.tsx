'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationItems = [
  {
    href: '/',
    label: 'CSR',
    title: 'Client-Side Rendering',
    description: 'Default Next.js client-side rendering'
  },
  {
    href: '/ssr',
    label: 'SSR',
    title: 'Server-Side Rendering',
    description: 'Dynamic rendering on each request'
  },
  {
    href: '/ssg',
    label: 'SSG',
    title: 'Static Site Generation',
    description: 'Pre-rendered at build time'
  },
  {
    href: '/isr',
    label: 'ISR',
    title: 'Incremental Static Regeneration',
    description: 'Static with periodic updates'
  }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="navigation-container">
      <div className="nav-header">
        <h3>Next.js Rendering Methods</h3>
        <p>Choose a rendering method to see RuleCMS widgets in action:</p>
      </div>
      
      <div className="nav-grid">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-card ${isActive ? 'nav-card-active' : ''}`}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-title">{item.title}</div>
              <div className="nav-card-description">{item.description}</div>
              {isActive && <div className="nav-card-badge">Current</div>}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}