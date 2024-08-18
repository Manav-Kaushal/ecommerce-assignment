import { Link } from "react-router-dom";
import { appConfig } from "../lib/config";

type LogoProps = {
  src?: string;
  alt?: string;
  href?: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackText?: string;
};

const Logo = ({
  src,
  alt = "Logo",
  href = "/",
  width = 150,
  height = 50,
  className = "",
  fallbackText = appConfig.appName,
}: LogoProps) => {
  const logoImage = src ? (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`h-auto ${className}`}
    />
  ) : (
    <span
      className={`inline-block text-xl font-bold ${className}`}
      style={{ lineHeight: `${height}px`, minWidth: `${width}px` }}
    >
      {fallbackText}
    </span>
  );

  return href ? (
    <Link to={href} className="inline-block">
      {logoImage}
    </Link>
  ) : (
    <div className="inline-block">{logoImage}</div>
  );
};

export default Logo;
