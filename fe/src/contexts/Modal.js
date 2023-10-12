import {
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useState,
} from "react";

export const Context = createContext();

export function useModalContext() {
  const value = useContext(Context);
  if (!value) {
    throw new Error("Must wrap component by context provider!");
  }

  return value;
}

const Provider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState(null);

  const handleDismiss = () => {
    setIsVisible(false);
    setContent(null);
  };

  const handleVisible = (content) => {
    setIsVisible(true);
    setContent(content);
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);

  return (
    <Context.Provider
      value={{ isVisible, handleVisible, content, setContent, handleDismiss }}
    >
      {children}
      {content && isVisible && isValidElement(content) && (
        <>
          {cloneElement(content, {
            onDismiss: handleDismiss,
          })}
          <div className="backdrop" onClick={handleDismiss} />
        </>
      )}
    </Context.Provider>
  );
};

export default Provider;
