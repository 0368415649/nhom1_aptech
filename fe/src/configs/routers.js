import { createBrowserRouter } from 'react-router-dom';

import Profile from '../pages/Profile';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

export default router;
