import { IconX } from "@tabler/icons-react";
import { ReactNode } from "react";
import { useDrawer } from "../lib/hooks/useDrawer";

const Drawer = ({ children }: { children: ReactNode }) => {
  const { isOpen, closeDrawer } = useDrawer();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 overflow-y-auto ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
      />
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 max-w-lg w-full ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border border-b">
          <h3 className="text-lg font-bold">My Card</h3>
          <button
            onClick={closeDrawer}
            className="text-black transition-all duration-200 hover:text-blue-600"
          >
            <IconX className="size-6" />
          </button>
        </div>
        <div className="h-full p-4">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
