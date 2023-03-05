import type { Location } from "@prisma/client";
import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";
import type { FC } from "react";

import { Breadcrumbs } from "./components/location/breadcrumbs";

export function links() {
  return [
  ];
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

const isAncestorData = (data?: Record<string, any>): data is {ancestors: Location[]} => {
  if(data && 'ancestors' in data) {
    return true
  }

  return false
}

const Header: FC<{ ancestors: Location[] }> = ({ ancestors }) => <header className="o-header-services">
  <div className="o-header-services__top">
    <div className="o-header-services__logo"></div>
    <div className="o-header-services__title">
      <Link className="o-header-services__product-name" to="/">Quiver</Link>
    </div>
    {/* <ul className="o-header-services__related-content">
      <li>
        <a href>XXXX</a>
      </li>
      <li>
        <a href>Sign in</a>
      </li>
    </ul> */}
  </div>

  <nav className="o-header-services__secondary-nav">
    <div className="o-header-services__secondary-nav-content">
      <Breadcrumbs ancestors={ancestors} className="o-header-services__secondary-nav-list o-header-services__secondary-nav-list--ancestors" />

      {/* <ul className="o-header-services__secondary-nav-list o-header-services__secondary-nav-list--children" aria-label="Child sections">
        <li>
          <a href>Build Service</a>
        </li>
        <li>
          <a aria-current="page" href>The manual build process</a>
        </li>
      </ul> */}
    </div>
  </nav>
</header>

export default function App() {
  const currentPage = useMatches().pop()
  const handle = currentPage && isLayoutHandle(currentPage.handle) ? currentPage.handle : undefined
  const layout = handle?.layout ?? 'docs'
  const ancestors = currentPage && isAncestorData(currentPage.data) ? currentPage.data.ancestors : []

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header ancestors={ancestors} />
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
