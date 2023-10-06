import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Layout from '../layouts/Layout';

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
