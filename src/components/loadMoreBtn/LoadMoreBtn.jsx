import s from "./LoadMoreBtn.module.css";

// eslint-disable-next-line react/prop-types
const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={s.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
