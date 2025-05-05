import Modal from "react-modal";
import { Image } from "../../types";
import React from "react";

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

interface ImageModalProps {
  image: Image;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
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
