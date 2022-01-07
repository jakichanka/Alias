import type { RouteObject } from 'react-router-dom'
import { Rules, Welcome } from '../pages'
import { WelcomeLayout } from '../layouts'

export const routes: RouteObject[] = [
  {
    path: '/ew dwejk fkjwefjknwejkfnwefmnlkewmfkjlwemfkjwqrngkjewrngljkrtnegljkfjkdefnslkjernfljke',
    element: <WelcomeLayout />,
    children: [
      { index: true, element: <Welcome /> },
      { path: 'rules', element: <Rules /> },
    ],
  },
  {
    path: '*',
    element: () => <div>Not Found</div>,
  },
]
