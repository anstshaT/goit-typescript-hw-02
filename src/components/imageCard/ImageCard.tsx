import s from "./ImageCard.module.css";
import React from "react";

interface ImageCardProps {
  src: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} className={s.image} />
    </div>
  );
};

export default ImageCard;
