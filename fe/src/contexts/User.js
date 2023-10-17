import { createContext, useContext, useState } from 'react';

export const Context = createContext();

export function useUserContext() {
  const value = useContext(Context);
  if (!value) {
    throw new Error('Must wrap component by context provider!');
  }

  return value;
}

const Provider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  console.log('>> Check | userInfo:', userInfo);

  return (
    <Context.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
