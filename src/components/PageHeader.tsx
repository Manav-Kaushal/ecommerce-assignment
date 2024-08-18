import { IconHome } from "@tabler/icons-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageHeader: React.FC<{ title: string }> = ({ title }) => {
  const location = useLocation();

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    return pathnames.map((_, index) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;
      const label = pathnames[index] || "Home";
      return { label, path: to };
    });
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <section className="bg-gray-100 border-b border-gray-200 rounded-lg">
      <div className="container p-4 mx-auto">
        <nav className="flex items-center text-gray-600">
          <Link to="/" className="hover:underline">
            <IconHome className="size-5" />
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <span className="mx-2">/</span>
              <Link
                to={crumb.path}
                className={`hover:underline ${
                  index === breadcrumbs.length - 1
                    ? "font-bold text-gray-800"
                    : ""
                }`}
              >
                {crumb.label}
              </Link>
            </React.Fragment>
          ))}
        </nav>
        <h1 className="mt-2 text-3xl font-bold text-gray-800">{title}</h1>
      </div>
    </section>
  );
};

export default PageHeader;
