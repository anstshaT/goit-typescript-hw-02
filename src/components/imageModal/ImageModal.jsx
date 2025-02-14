import ImageCard from "../imageCard/ImageCard";
import Modal from "react-modal";

const customStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.57)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    border: "none",
  },
};

const ImageModal = ({ image, onClose }) => {
  return (
    <div>
      <Modal style={customStyle} isOpen={!!image} onRequestClose={onClose}>
        <div>
          <img src={image.urls.regular}></img>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
