import { useState } from "react";
import { cn } from "../lib/utils";

type ImageProps = {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  placeholderSrc?: string;
  srcSet?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
};

const Image = ({
  src,
  alt = "",
  width = "100%",
  height = "auto",
  className = "",
  placeholderSrc,
  srcSet,
  sizes,
  loading = "lazy",
}: ImageProps) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || src);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    if (placeholderSrc) {
      setImageSrc(src);
    }
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        "transition-opacity duration-500 object-cover",
        {
          "opacity-100": imageLoaded,
          "opacity-0": !imageLoaded,
        },
        className
      )}
      srcSet={srcSet}
      sizes={sizes}
      loading={loading}
      onLoad={handleImageLoad}
      onError={() => setImageSrc(placeholderSrc || "")}
    />
  );
};

export default Image;
