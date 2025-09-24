import { RuleCMSWidgetComponent } from "./components/RuleCMSWidget";

export default function Home() {
  return (
    <div className="rulecms-app">
      <header className="rulecms-header">
        <h1>RuleCMS Widget Demo</h1>
        <p className="rulecms-description">
          This is a demonstration of how to integrate RuleCMS widgets into a Next.js application
        </p>
      </header>

      <main className="rulecms-main">
        <section className="widget-demo-section">
          <h2>Demo RuleCMS Widget</h2>
          <p>
            The widget below is rendered using the <span className="code-snippet">RuleCMSWidget</span> component
            from the <span className="code-snippet">@rulecms/widget-react</span> package.
          </p>

          <div className="info-card">
            <div className="info-card-content">
              <strong>Getting Started</strong>
              <p>
                If you&apos;re seeing an error below, you need to replace the demo values with your actual published key and app token.
                Log into your <a href="https://rulecms.com" target="_blank" rel="noopener noreferrer">RuleCMS.com</a> account to get them.
              </p>
            </div>
          </div>

          <div className="widget-container">
            <RuleCMSWidgetComponent />
          </div>
        </section>

        <section className="integration-info">
          <h2>Integration Steps</h2>
          <ol>
            <li>Install the package: <span className="code-snippet">npm install @rulecms/widget-react</span></li>
            <li>Wrap your app with <span className="code-snippet">RuleCMSWidgetProvider</span></li>
            <li>Add <span className="code-snippet">RuleCMSWidget</span> component with your published key and app token</li>
            <li>That&apos;s it! Your widget is now integrated and ready to display</li>
          </ol>
        </section>

        <section className="next-steps">
          <h2>Next Steps</h2>
          <ul>
            <li>Replace the demo published key with your actual widget&apos;s published key</li>
            <li>Set your app token in the <span className="code-snippet">.env.local</span> file</li>
            <li>Create and publish more widgets in your RuleCMS composer</li>
            <li>Explore the full power of RuleCMS for your Next.js applications</li>
          </ul>
        </section>
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
