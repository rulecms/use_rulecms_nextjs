# RuleCMS Widget Integration - Next.js Demo

A comprehensive demonstration showing how to integrate **RuleCMS widgets** into any Next.js application. This project serves as both a working example and a tutorial for developers who want to add RuleCMS widgets to their own Next.js applications.

## 🚀 Live Demo

**[View the live demo](#)** *(Deployment URL will be added after hosting)*

Experience the RuleCMS widget integration in action with this deployed Next.js example.

## 🔗 Quick Links - Try All Rendering Methods

**Start the development server (`npm run dev`) and visit these routes:**

| 🎯 Method | 🌐 Route | 📝 Description | 🔧 Implementation |
|-----------|----------|-----------------|-------------------|
| **[CSR](http://localhost:3000)** | `/` | Client-Side Rendering | `'use client'` components |
| **[SSR](http://localhost:3000/ssr)** | `/ssr` | Server-Side Rendering | `dynamic = 'force-dynamic'` |
| **[SSG](http://localhost:3000/ssg)** | `/ssg` | Static Site Generation | `dynamic = 'force-static'` |
| **[ISR](http://localhost:3000/isr)** | `/isr` | Incremental Static Regeneration | `revalidate = 30` |

> 💡 **Navigate between examples**: Each page includes a beautiful navigation component to switch between all rendering methods!

## ⚡ Quick Start

```bash
# Clone and run immediately
git clone <repository-url>
cd use_rulecms_nextjs
npm install
npm run dev

# Visit http://localhost:3000 and click through all the examples!
```

### 🎨 Explore the Examples

Once running, use the **interactive navigation** on each page to switch between:
- **CSR** - See client-side rendering in action  
- **SSR** - Watch server data change on each refresh
- **SSG** - Experience lightning-fast static pages
- **ISR** - Observe automatic regeneration every 30 seconds

## What is RuleCMS?

**RuleCMS** is a powerful visual content management system that lets you:

- 🎨 **Build widgets visually** using a drag-and-drop composer interface
- 📱 **Create responsive content** that works across all devices
- 🚀 **Publish instantly** and get a unique published key for each widget
- 🔗 **Integrate anywhere** with just a few lines of code

Think of it as a visual page builder that generates widgets you can embed in any Next.js application.

## How RuleCMS Widget Integration Works

### The Complete Workflow

1. **Design Phase** 🎨
   - Log into your RuleCMS account at [rulecms.com](https://rulecms.com)
   - Use the visual composer to create your widget
   - Add text, images, buttons, forms, and interactive elements
   - Preview your widget and make adjustments

2. **Publish Phase** 📤
   - Click "Publish" when your widget is ready
   - RuleCMS generates a unique **Published Key** for your widget
   - Copy this key - you'll need it for integration

3. **Integration Phase** ⚡
   - Install the `@rulecms/widget-react` package in your Next.js app
   - Use the `RuleCMSWidget` component with your published key
   - Your widget appears in your Next.js app with all functionality intact

4. **Authentication** 🔐
   - Generate an **App Token** from your RuleCMS project settings
   - This token authorizes your Next.js app to fetch your published widgets

## Adding RuleCMS Widgets to Your Own Next.js App

Follow these steps to integrate RuleCMS widgets into any Next.js application:

### Step 1: Install the Package

Add the RuleCMS widget package to your Next.js project:

```bash
npm install @rulecms/widget-react
```

**Note**: If you encounter peer dependency warnings with newer React versions, use:
```bash
npm install @rulecms/widget-react --legacy-peer-deps
```

### Step 2: Set Up Environment Variables

Create a `.env.local` file in your project root:

```env
# Your RuleCMS App Token (required)
NEXT_PUBLIC_RULECMS_TOKEN=your_app_token_here

# RuleCMS API Endpoint (optional - defaults to https://rulecms.com)
NEXT_PUBLIC_RULECMS_ENDPOINT=https://rulecms.com

# Your widget's published key
NEXT_PUBLIC_PUBLISHED_KEY=your_published_key_here
```

### Step 3: Create the Provider Component

Create `src/app/providers.tsx` (or `components/providers.tsx`):

```jsx
'use client';

import { ReactNode } from 'react';
import { RuleCMSWidgetProvider } from '@rulecms/widget-react';

interface RuleCMSProviderProps {
  children: ReactNode;
}

export function RuleCMSProvider({ children }: RuleCMSProviderProps) {
  const appToken = process.env.NEXT_PUBLIC_RULECMS_TOKEN;
  const endpoint = process.env.NEXT_PUBLIC_RULECMS_ENDPOINT || "https://rulecms.com";

  return (
    <RuleCMSWidgetProvider token={appToken} endpoint={endpoint}>
      {children}
    </RuleCMSWidgetProvider>
  );
}
```

### Step 4: Update Your Root Layout

Update `src/app/layout.tsx` to include the provider:

```jsx
import { RuleCMSProvider } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RuleCMSProvider>
          {children}
        </RuleCMSProvider>
      </body>
    </html>
  );
}
```

### Step 5: Create a Widget Component

Create `src/app/components/RuleCMSWidget.tsx`:

```jsx
'use client';

import { RuleCMSWidget } from '@rulecms/widget-react';

export function RuleCMSWidgetComponent() {
  const publishedKey = process.env.NEXT_PUBLIC_PUBLISHED_KEY;

  return (
    <RuleCMSWidget publishedKey={publishedKey} />
  );
}
```

### Step 6: Use in Your Pages

In any page or component:

```jsx
import { RuleCMSWidgetComponent } from './components/RuleCMSWidget';

export default function HomePage() {
  return (
    <div>
      <h1>My Next.js App</h1>
      
      {/* Your RuleCMS widget */}
      <RuleCMSWidgetComponent />
      
      <p>More content...</p>
    </div>
  );
}
```

### Step 7: Get Your Credentials

#### Get Your App Token:
1. Visit [rulecms.com](https://rulecms.com) and log into your account
2. Navigate to your project settings
3. Find "API Tokens" or "App Tokens" section
4. Generate a new token with widget access permissions
5. Copy the token and add it to your environment variables

#### Get Your Published Key:
1. In RuleCMS, create or edit a widget using the visual composer
2. Design your widget with text, images, buttons, forms, etc.
3. Click "Publish" when ready
4. Copy the generated published key
5. Use this key in your `RuleCMSWidget` component

### Step 8: Test Your Integration

Start your Next.js development server:
```bash
npm run dev
```

Your RuleCMS widget should now appear in your Next.js application with all its interactive features working!

## Running This Demo Project

To run this specific demo project:

### Prerequisites

- Node.js 18+
- npm or yarn
- A RuleCMS account (optional - demo works with placeholder values)

### Installation

```bash
# Clone this repository
git clone <repository-url>
cd use_rulecms_nextjs

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Edit .env.local with your actual tokens (optional for demo)
# Start the development server
npm run dev
```

The demo will open at `http://localhost:3000`

## Understanding the Integration Components

### Required Components

The `@rulecms/widget-react` package provides two essential components:

#### 1. `RuleCMSWidgetProvider`

This is a context provider that must wrap your entire app (or the section where you use RuleCMS widgets):

```jsx
<RuleCMSWidgetProvider token={appToken} endpoint={endpoint}>
  {/* Your app content */}
</RuleCMSWidgetProvider>
```

**Props:**
- `token` (required): Your app token from RuleCMS project settings
- `endpoint` (optional): API endpoint URL (defaults to https://rulecms.com)

#### 2. `RuleCMSWidget`

This component renders your actual widget:

```jsx
<RuleCMSWidget publishedKey="your-widget-published-key" />
```

**Props:**
- `publishedKey` (required): The unique key generated when you publish a widget

### Multiple Widgets

You can render multiple widgets in the same app:

```jsx
<RuleCMSWidgetProvider token={appToken}>
  <div className="app">
    <header>
      <RuleCMSWidget publishedKey="header-widget-key" />
    </header>

    <main>
      <RuleCMSWidget publishedKey="main-content-widget-key" />
    </main>

    <footer>
      <RuleCMSWidget publishedKey="footer-widget-key" />
    </footer>
  </div>
</RuleCMSWidgetProvider>
```

## Next.js Rendering Methods

This demo showcases **all four major Next.js rendering methods** with dedicated routes and examples:

### ✅ Available Examples:
- 🖥️ **[Client-Side Rendering (CSR)](http://localhost:3000)** - `/` - Default Next.js client-side rendering
- 🔄 **[Server-Side Rendering (SSR)](http://localhost:3000/ssr)** - `/ssr` - Dynamic rendering on each request  
- ⚡ **[Static Site Generation (SSG)](http://localhost:3000/ssg)** - `/ssg` - Pre-rendered at build time
- 🌊 **[Incremental Static Regeneration (ISR)](http://localhost:3000/isr)** - `/isr` - Static with periodic updates (30s)

Each rendering method demonstrates the same RuleCMS widget integration with method-specific optimizations and explanations.

## Environment Variables Reference

For this demo project, create a `.env.local` file:

```env
# Your RuleCMS App Token (required)
NEXT_PUBLIC_RULECMS_TOKEN=your_app_token_here

# RuleCMS API Endpoint (optional)
# Defaults to https://rulecms.com if not provided
NEXT_PUBLIC_RULECMS_ENDPOINT=https://rulecms.com

# Your widget's published key
NEXT_PUBLIC_PUBLISHED_KEY=your_published_key_here
```

**Security Note**: Never commit actual app tokens to version control. Always use environment variables.

## What You Can Build with RuleCMS Widgets

RuleCMS widgets can contain any combination of:

- 📝 **Rich Text Content** - Formatted text, headings, paragraphs
- 🖼️ **Images & Media** - Photos, videos, galleries
- 🔘 **Interactive Elements** - Buttons, forms, links
- 📋 **Data Collections** - Lists, tables, cards
- 🎨 **Custom Styling** - Colors, fonts, layouts
- 📱 **Responsive Design** - Automatic mobile optimization
- ⚡ **Dynamic Content** - Real-time updates and interactions

## Features This Demo Shows

- ✅ **Easy Package Installation** - Simple npm install process
- ✅ **Environment Configuration** - Secure token management with Next.js
- ✅ **Provider Setup** - Proper context configuration for app router
- ✅ **Client Component Architecture** - Optimal Next.js 13+ patterns
- ✅ **Widget Rendering** - Display published widgets
- ✅ **Error Handling** - Graceful handling of missing credentials
- ✅ **Responsive Design** - Works on all device sizes
- ✅ **Professional UI** - Clean, modern interface
- ✅ **TypeScript Support** - Full type safety

## Next.js Specific Features

This integration is optimized for Next.js 13+ with:

- 🏗️ **App Router** - Latest Next.js routing system
- 🔧 **Client Components** - Proper 'use client' boundaries
- ⚡ **Fast Refresh** - Instant updates during development
- 📦 **Bundle Optimization** - Efficient code splitting
- 🎯 **Environment Variables** - NEXT_PUBLIC_ prefix support
- 🔍 **SEO Ready** - Proper metadata and OpenGraph tags

## Framework Compatibility

This integration method works with all popular React frameworks:

| Framework | Package Version | Environment Variable Prefix | This Demo |
|-----------|----------------|------------------------------|-----------|
| **Next.js** | `@rulecms/widget-react@1.0.6` | `NEXT_PUBLIC_` | ✅ **Current** |
| **Create React App** | `@rulecms/widget-react@1.0.6` | `REACT_APP_` | [Separate Demo](../use_rulecms_create_react_app) |
| **Vite** | `@rulecms/widget-react@1.0.6` | `VITE_` | 🔄 Coming Soon |
| **Remix** | `@rulecms/widget-react@1.0.6` | No prefix needed | 🔄 Coming Soon |

## Next.js Rendering Methods Deep Dive

This application includes comprehensive examples of all four Next.js rendering strategies:

### 🖥️ Client-Side Rendering (CSR) - Route: `/`

**How it works:**
- Component marked with `'use client'`
- Renders in the browser after JavaScript loads
- Widget data fetched on the client-side

**When to use:**
- Interactive dashboards and admin panels
- User-specific content that changes frequently
- When SEO is not a primary concern

**Code example:**
```jsx
'use client';
import { RuleCMSWidget } from '@rulecms/widget-react';

export function ClientWidget() {
  return <RuleCMSWidget publishedKey="your-key" />;
}
```

### 🔄 Server-Side Rendering (SSR) - Route: `/ssr`

**How it works:**
- Uses `export const dynamic = 'force-dynamic'`
- Renders on server for each request
- Fresh data on every page load

**When to use:**
- Personalized content
- Real-time data that changes frequently
- When you need fresh data on every request

**Code example:**
```jsx
export const dynamic = 'force-dynamic';

export default async function SSRPage() {
  const data = await getServerData();
  return (
    <div>
      <RuleCMSWidget publishedKey="your-key" />
      <p>Server data: {data.timestamp}</p>
    </div>
  );
}
```

### ⚡ Static Site Generation (SSG) - Route: `/ssg`

**How it works:**
- Uses `export const dynamic = 'force-static'`
- Pre-rendered at build time
- Served as static HTML

**When to use:**
- Content that doesn't change often
- Marketing pages, blogs, documentation
- Maximum performance requirements

**Code example:**
```jsx
export const dynamic = 'force-static';

export default async function SSGPage() {
  const buildData = await getBuildTimeData();
  return (
    <div>
      <RuleCMSWidget publishedKey="your-key" />
      <p>Built at: {buildData.timestamp}</p>
    </div>
  );
}
```

### 🌊 Incremental Static Regeneration (ISR) - Route: `/isr`

**How it works:**
- Uses `export const revalidate = 30` (30 seconds)
- Static generation with automatic updates
- Best of both static and dynamic

**When to use:**
- E-commerce product pages
- Content that updates periodically
- When you need static performance with fresh data

**Code example:**
```jsx
export const revalidate = 30; // Revalidate every 30 seconds

export default async function ISRPage() {
  const freshData = await getUpdatedData();
  return (
    <div>
      <RuleCMSWidget publishedKey="your-key" />
      <p>Last updated: {freshData.timestamp}</p>
    </div>
  );
}
```

### Navigation Between Examples

The app includes a beautiful navigation component that lets you switch between all rendering methods to see the differences in real-time. Each example includes:

- 📊 **Real-time data** showing when/how the page was rendered
- 📝 **Detailed explanations** of the rendering method
- 🛠️ **Code examples** showing the implementation
- ✅ **Use case recommendations** for when to use each method

### Build Output Analysis

When you run `npm run build`, you'll see different symbols for each route:

```
Route (app)                    Size    First Load JS  Revalidate
┌ ○ /                           0 B         134 kB           (CSR)
├ ○ /ssg                        0 B         134 kB           (SSG)
├ ○ /isr                        0 B         134 kB    30s    (ISR)
└ ƒ  /ssr                        0 B         134 kB           (SSR)

○  (Static)   - Pre-rendered as static content
ƒ  (Dynamic)  - Server-rendered on demand
```

## Troubleshooting

### Common Issues

**1. "Module not found" errors**
```bash
# Try installing with legacy peer deps
npm install @rulecms/widget-react --legacy-peer-deps
```

**2. Widget not displaying**
- Verify your published key is correct
- Check that your app token has proper permissions
- Ensure the RuleCMSWidgetProvider wraps your widget components
- Check browser console for error messages

**3. Environment variables not loading**
- Ensure proper prefix for Next.js (`NEXT_PUBLIC_`)
- Restart your development server after adding environment variables
- Check that .env.local file is in the project root
- Verify no typos in variable names

**4. Hydration errors**
- Ensure RuleCMS components are marked with 'use client'
- Check for mismatched HTML between server and client
- Consider using dynamic imports for complex widgets

## Available Scripts

In this demo project directory, you can run:

### `npm run dev`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000) with Turbopack for faster builds

### `npm run build`
Builds the app for production to the `.next` folder

### `npm start`
Runs the production build

### `npm run lint`
Runs the linter to check code quality

## Demo Project Structure

```
use_rulecms_nextjs/
├── public/                    # Static assets
├── src/
│   └── app/
│       ├── components/
│       │   ├── Navigation.tsx     # Route navigation component
│       │   ├── RuleCMSWidget.tsx  # Client widget component
│       │   └── RuleCMSWidgetSSR.tsx # Server widget component
│       ├── isr/
│       │   └── page.tsx           # ISR example (30s revalidate)
│       ├── ssg/
│       │   └── page.tsx           # SSG example (build-time)
│       ├── ssr/
│       │   └── page.tsx           # SSR example (per-request)
│       ├── globals.css        # Global styles + navigation
│       ├── layout.tsx         # Root layout with provider
│       ├── page.tsx           # CSR example (main page)
│       └── providers.tsx      # RuleCMS provider wrapper
├── .env.example              # Environment variables template
├── .env.local               # Local environment (not committed)
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies including @rulecms/widget-react
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This comprehensive guide
```

## Learn More

- 🌐 **RuleCMS Platform**: [rulecms.com](https://rulecms.com)
- 📦 **NPM Package**: [@rulecms/widget-react](https://www.npmjs.com/package/@rulecms/widget-react)
- 📚 **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- ⚛️ **React Documentation**: [react.dev](https://react.dev)
- 💬 **Community Support**: [Coming Soon]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Get Started Today

1. **Sign up** at [rulecms.com](https://rulecms.com)
2. **Create your first widget** using the visual composer
3. **Publish** and get your keys
4. **Follow this guide** to integrate into your Next.js app

**Built with ❤️ by the RuleCMS team**

*Transform your Next.js applications with powerful, visual content management. No backend required!*
