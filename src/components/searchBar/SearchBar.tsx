import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import { FormEvent, useState, FC } from "react";

interface SearchBarProps {
  onSubmit: (topic: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target;

    if (query.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    console.log("Search bar", query);

    onSubmit(query);
    setQuery("");
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
