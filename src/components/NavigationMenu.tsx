import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export type NavigationItem = {
  label: string;
  href: string;
};

const NavigationMenu = ({ data }: { data: NavigationItem[] }) => {
  const { pathname } = useLocation();

  return (
    <ul className="flex items-center space-x-8">
      {data.map((nav) => (
        <li key={nav.label}>
          <Link
            to={nav.href}
            className={cn("font-semibold", {
              "link-active font-bold": pathname === nav.href,
            })}
          >
            {nav.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
