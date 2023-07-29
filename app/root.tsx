import { type MetaFunction } from '@remix-run/node'
import {
	Form,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import { cssBundleHref } from '@remix-run/css-bundle'

import * as typography from './components/typography/typography.css'
import * as container from './components/layout/container.css'
import * as background from './components/brand/background.css'
import * as colours from './components/brand/colours.css'
import { SearchInput } from './components/form/form'
import './components/global.css'

export function links() {
	return [{ rel: 'stylesheet', href: cssBundleHref }]
}

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
	return (
		<html lang='en'>
			<head>
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
