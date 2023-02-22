import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";

import styles from '~/css/main.css';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

const isLayoutHandle = (handle?: Record<string, any>): handle is {layout: string} => {
  if(handle && 'layout' in handle) {
    return true
  }

  return false
}

export default function App() {
  const currentPage = useMatches().pop()
  const handle = currentPage && isLayoutHandle(currentPage.handle) ? currentPage.handle : undefined
  const layout = handle?.layout ?? 'docs'

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className={`o-layout o-layout--${layout}`}>
          <div className="o-layout__main o-layout-typography">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
