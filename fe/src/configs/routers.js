import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Layout from '../layouts/Layout';
import OTP from '../pages/OTP';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <OTP />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

export default router;
