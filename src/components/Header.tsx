import MaxWidthContainer from "./MaxWidthContainer";

const navigation = [{ label: "shop", href: "/shop" }];

const Header = () => {
  return (
    <header>
      <MaxWidthContainer>
        {/* Mobile Header */}
        <div className="flex items-center justify-between">
          {/* logo */}
          {/* navigation */}
          <ul className="flex items-center space-x-2">
            {navigation.map((nav) => (
              <li key={nav.label}>{nav.label}</li>
            ))}
          </ul>{" "}
          {/* actions */}
        </div>
        
        {/* Desktop Header */}
      </MaxWidthContainer>
    </header>
  );
};

export default Header;
