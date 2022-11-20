// React
import React from 'react';

// Components
import { Layout } from 'components';

// Pages
import Characters from './Characters/Characters';
import Comics from './Comics/Comics';
import Series from './Series/Series';
import CardDetails from './CardDetails/CardDetails';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Characters />
      },
      { path: '/characters/:id', element: <CardDetails /> },
      {
        path: '/comics',
        element: <Comics />
      },
      { path: '/comics/:id', element: <CardDetails /> },
      { path: '/series', element: <Series /> },
      { path: '/series/:id', element: <CardDetails /> },
      { path: '*', element: <div>Page not found</div> }
    ]
  }
];
