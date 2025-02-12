import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";

const notify = () => toast("Please enter search term!");

const SearchBar = ({ onClick, onChange }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    if (topic.trim() === "") {
      return;
    }

    onClick(topic);
  };

  return (
    <div>
      <header className={s.header}>
        <form onSubmit={handleSubmit} className={s.form}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="topic"
            className={s.input}
            onChange={onChange}
          />
          <button onClick={notify} type="submit" className={s.formBtn}>
            <CiSearch />
          </button>
          <Toaster />
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
