import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDrawer } from "../lib/hooks/useDrawer";
import { RootState } from "../pages/Shop";
import Button from "./Button";
import CartSummary from "./CartSummary";
import Drawer from "./Drawer";
import Logo from "./Logo";
import MaxWidthContainer from "./MaxWidthContainer";
import NavigationMenu, { NavigationItem } from "./NavigationMenu";

const navigation: NavigationItem[] = [{ label: "Shop", href: "/shop" }];

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { openDrawer } = useDrawer();

  return (
    <header className="bg-white shadow-md">
      <MaxWidthContainer>
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 md:hidden">
          <Link to="/" className="text-2xl font-bold text-blue-">
            RCommerce
          </Link>

          {/* Navigation */}
          <ul className="flex items-center space-x-4">
            {navigation.map((nav) => (
              <li key={nav.label}>
                <a
                  href={nav.href}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {nav.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600">
              {/* Cart Icon Placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l1.4-8H6.4M7 13l-1.5 6h11L17 13M7 13h10M7 13l1.4-8H6.4M7 13h10M5 21h14a1 1 0 001-1H4a1 1 0 001 1z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="items-center justify-between hidden p-2 md:flex">
          <div className="flex items-center space-x-4">
            <Logo />
            <NavigationMenu data={navigation} />
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => {
                openDrawer(
                  <Drawer>
                    <CartSummary />
                  </Drawer>
                );
              }}
            >
              Cart ({cartItems.length})
            </Button>
          </div>
        </div>
      </MaxWidthContainer>
    </header>
  );
};

export default Header;
