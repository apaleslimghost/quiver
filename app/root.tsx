import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction, V2_MetaFunction } from '@remix-run/node'
import {
	Form,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'

import * as background from '~/components/brand/background.css'
import * as colours from '~/components/brand/colours.css'
import { SearchInput } from '~/components/form/form'
import * as container from '~/components/layout/container.css'
import * as typography from '~/components/typography/typography.css'

import '~/components/global.css'

export const links: LinksFunction = () =>
	cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []

export const meta: V2_MetaFunction = () => [{ title: 'Quiver' }]

export default function App() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body
				className={[typography.main, background.main, colours.themeClass].join(
					' ',
				)}
			>
				<main className={container.main}>
					<header className={container.area.content}>
						<Form method='get' action='/search'>
							<SearchInput name='q' />
							<button type='submit'>search</button>
						</Form>
					</header>
					<Outlet />
				</main>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
