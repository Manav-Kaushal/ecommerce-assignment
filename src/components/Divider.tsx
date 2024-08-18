import { cn } from "../lib/utils";

const Divider = () => {
  return (
    <div className={cn(`flex items-center my-4`)}>
      <div className={`flex-grow border-t border-gray-300`} />
    </div>
  );
};

export default Divider;
