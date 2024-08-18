import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MaxWidthContainer = ({ children }: Props) => {
  return (
    <div className="w-full px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default MaxWidthContainer;
