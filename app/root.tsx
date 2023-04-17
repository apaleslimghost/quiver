import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import * as typography from './components/typography/typography.css'
import * as container from './components/layout/container.css'
import * as background from './components/brand/background.css'
import * as colours from './components/brand/colours.css'
import './components/global.css'

import { cssBundleHref } from "@remix-run/css-bundle";

export function links() {
  return [
    { rel: "stylesheet", href: cssBundleHref },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={[
        typography.main,
        background.main,
        colours.themeClass
      ].join(' ')}>
        <main className={container.main}>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
