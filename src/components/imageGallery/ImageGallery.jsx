import ImageCard from "../imageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard src={image.urls.small} alt={image.alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
