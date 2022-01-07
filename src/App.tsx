import React from 'react'
import { useRoutes } from 'react-router-dom'
import { routes as routerList } from './routes'

interface AppProps {}

function App({}: AppProps) {
  const appRoutes = useRoutes(routerList)

  return (
    <>
      {appRoutes}
    </>
  )
}

export default App
