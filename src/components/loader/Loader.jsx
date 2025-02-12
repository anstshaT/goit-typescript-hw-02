import BeatLoader from "react-spinners/BeatLoader";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <BeatLoader color="#a1938b" size={20} />
    </div>
  );
};

export default Loader;
