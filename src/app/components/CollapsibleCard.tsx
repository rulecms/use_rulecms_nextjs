'use client';

import { useState } from 'react';

interface CollapsibleCardProps {
  title: string;
  children: React.ReactNode;
  defaultCollapsed?: boolean;
}

export function CollapsibleCard({ 
  title, 
  children, 
  defaultCollapsed = true 
}: CollapsibleCardProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  return (
    <div className="collapsible-card">
      <div className="collapsible-header" onClick={() => setIsCollapsed(!isCollapsed)}>
        <div className="collapsible-title-row">
          <strong className="collapsible-title">{title}</strong>
          <button className="collapsible-toggle" aria-label={isCollapsed ? 'Expand' : 'Collapse'}>
            <svg 
              className={`collapsible-icon ${isCollapsed ? 'collapsed' : 'expanded'}`}
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="currentColor"
            >
              <path d="M8 12L3 7h10l-5 5z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className={`collapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <div className="collapsible-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
}