import React from 'react';

import useModal from './hooks/useModal';
import Login from './components/modals/Login';

const App = () => {
  const [show, dismiss] = useModal(<Login number={3} />);

  return (
    <>
      <button onClick={show}>Click me</button>
      <button onClick={dismiss}>Click me to hide</button>
    </>
  );
};

export default App;
