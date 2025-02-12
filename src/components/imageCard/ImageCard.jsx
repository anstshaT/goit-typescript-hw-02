import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} className={s.image} />
    </div>
  );
};

export default ImageCard;
