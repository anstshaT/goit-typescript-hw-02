import ImageCard from "../imageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.galleryUl}>
      {images.map((image) => {
        return (
          <li key={image.id} className={s.galleryLi}>
            <ImageCard src={image.urls.small} alt={image.alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
