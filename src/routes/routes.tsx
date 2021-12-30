import React from 'react';
import { Rules, Welcome } from '../pages';
import { WelcomeLayout } from '../layouts';
import type { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <WelcomeLayout />,
    children: [
      { index: true, element: <Welcome /> },
      { path: 'rules', element: <Rules /> },
    ],

  },
];
