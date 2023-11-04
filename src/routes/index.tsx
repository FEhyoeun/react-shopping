import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { PATH } from '../constants/path';

import { Root } from '../pages/Root';
import { Home } from '../pages/Home';
import { Layout } from '../components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: `/${PATH.HOME}`,
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
