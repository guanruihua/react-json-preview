import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { MainContainer, MenuObject } from 'unit-testing-react'

const menu: MenuObject[] = [
	{
		path: '/',
		// name: 'demo',
		element: <Suspense fallback={<div>Loading</div>}>
			{React.createElement(lazy(() => import(`../src/demo/index`)))}
		</Suspense>
	},
	{
		path: '/demo',
		name: 'demo',
		element: <Suspense fallback={<div>Loading</div>}>
			{React.createElement(lazy(() => import(`../src/demo/index`)))}
		</Suspense>
	},
]

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!)
	.render(<MainContainer menu={menu} />);