import { createBrowserRouter } from 'react-router-dom';

import Profile from '../pages/Profile';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import RegisterCar from '../pages/RegisterCar';
import DetailCar from '../pages/DetailCar';
import ChinhSach from '../pages/ChinhSach';

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
      {
        path: '/register_car',
        element: <RegisterCar />,
      },
      // {
      //   path: '/register_car_form',
      //   element: <RegisterCarForm />,
      // },
      {
        path: '/about',
        element: <Home />,
      },
      {
        path: '/car/:id',
        element: <DetailCar />,
      },
      {
        path: '/chinh-sach',
        element: <ChinhSach />,
      },
    ],
  },
]);

export default router;
