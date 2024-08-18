import { createContext, ReactNode, useContext, useState } from "react";

type DrawerData = {
  isOpen: boolean;
  openDrawer: (modal: ReactNode) => void;
  closeDrawer: () => void;
};

const DrawerContext = createContext<DrawerData>({
  isOpen: false,
  openDrawer: () => {},
  closeDrawer: () => {},
});

export const useDrawer = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showingDrawer, setShowingDrawer] = useState<ReactNode>(null);

  const openDrawer = (modal: ReactNode) => {
    if (modal) {
      setShowingDrawer(modal);
      setIsOpen(true);
    }
  };
  const closeDrawer = () => setIsOpen(false);

  return (
    <DrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer }}>
      {children}
      {showingDrawer}
    </DrawerContext.Provider>
  );
};
