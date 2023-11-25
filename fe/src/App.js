import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './configs/routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useScrollToTop from './hooks/useScrollToTop';

const App = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
