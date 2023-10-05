import React from 'react';

import useModal from './hooks/useModal';
import Login from './components/modals/Login';
import Button from './components/Button';
import Register from './components/modals/Register';

const App = () => {
  const [showLogin] = useModal(<Login />);
  const [showRegister] = useModal(<Register />);

  return (
    <>
      <Button onClick={showLogin}>Login</Button>
      <Button onClick={showRegister}>Register</Button>
    </>
  );
};

export default App;
