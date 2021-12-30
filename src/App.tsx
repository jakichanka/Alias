import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes as routerList } from './routes';

interface AppProps {}

function App({}: AppProps) {

  return useRoutes(routerList)

}

export default App;
