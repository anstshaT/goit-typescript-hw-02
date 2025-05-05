import s from "./LoadMoreBtn.module.css";
import React from "react";

interface LoadMoreBthProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBthProps> = ({ onClick }) => {
  return (
    <button className={s.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
