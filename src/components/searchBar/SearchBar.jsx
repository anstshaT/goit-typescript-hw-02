import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    console.log(query);

    onSubmit(query);
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
          value={query}
          className={s.input}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={s.formBtn}>
          <CiSearch />
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
