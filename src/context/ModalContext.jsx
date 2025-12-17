import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ formOpen, setFormOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModalContext() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("ModalContext was used out of the ModalProvider");
  }

  return context;
}

export { ModalProvider, useModalContext };
