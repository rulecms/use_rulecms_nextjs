import { RuleCMSWidgetComponent } from "./components/RuleCMSWidget";
import { Navigation } from "./components/Navigation";
import { CollapsibleCard } from "./components/CollapsibleCard";

export default function Home() {
  return (
    <div className="rulecms-app">
      <header className="rulecms-header">
        <div className="implementation-badge">
          🖥️ Client-Side Rendering (CSR)
        </div>
        <h1>RuleCMS Widget Demo</h1>
        <p className="rulecms-description">
          This page uses <strong>Client-Side Rendering (CSR)</strong> - the default Next.js behavior with <span className="code-snippet">&apos;use client&apos;</span> components
        </p>
      </header>

      <main className="rulecms-main">
        <Navigation />
        
        <section className="widget-demo-section">
          <h2>Client-Side Rendering (CSR) Demo</h2>
          <p>
            The widget below is rendered using <strong>Client-Side Rendering</strong> with the <span className="code-snippet">RuleCMSWidget</span> component
            from the <span className="code-snippet">@rulecms/widget-react</span> package. This is the default Next.js behavior for client components.
          </p>

          <CollapsibleCard title="Getting Started">
            <p>
              If you&apos;re seeing an error below, you need to replace the demo values with your actual published key and app token.
              Log into your <a href="https://rulecms.com" target="_blank" rel="noopener noreferrer">RuleCMS.com</a> account to get them.
            </p>
          </CollapsibleCard>

          <div className="widget-container">
            <RuleCMSWidgetComponent />
          </div>
        </section>

        <CollapsibleCard title="Integration Steps">
          <ol>
            <li>Install the package: <span className="code-snippet">npm install @rulecms/widget-react</span></li>
            <li>Wrap your app with <span className="code-snippet">RuleCMSWidgetProvider</span></li>
            <li>Add <span className="code-snippet">RuleCMSWidget</span> component with your published key and app token</li>
            <li>That&apos;s it! Your widget is now integrated and ready to display</li>
          </ol>
        </CollapsibleCard>

        <CollapsibleCard title="Next Steps">
          <ul>
            <li>Replace the demo published key with your actual widget&apos;s published key</li>
            <li>Set your app token in the <span className="code-snippet">.env.local</span> file</li>
            <li>Create and publish more widgets in your RuleCMS composer</li>
            <li>Explore the full power of RuleCMS for your Next.js applications</li>
          </ul>
        </CollapsibleCard>
      </main>

      <footer className="rulecms-footer">
        <p>
          Built with <span className="heart">❤️</span> using{' '}
          <a href="https://rulecms.com" target="_blank" rel="noopener noreferrer">
            RuleCMS
          </a>{' '}
          and Next.js
        </p>
      </footer>
    </div>
  );
}
