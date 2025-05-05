import ImageCard from "../imageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Image } from "../../types";
import React from "react";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={s.galleryUl}>
      {images.map((image) => {
        return (
          <li
            key={image.id}
            className={s.galleryLi}
            onClick={() => onImageClick(image)}
          >
            <ImageCard src={image.urls.small} alt={image.alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
