const ImageCard = ({ src, alt }) => {
  if (!src) {
    console.log("Problem with src in ImageCard");
  }
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
