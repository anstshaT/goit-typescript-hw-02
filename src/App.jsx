import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import { fetchImagesWithTopic } from "./services/api";
import ImageGallery from "./components/imageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        const data = await fetchImagesWithTopic(query, page);
        console.log("Fetched images:", data);
        /* setImages((prevImages) => [...prevImages, ...data]); */
        setImages(data);
      } catch (error) {
        console.log(`Problem: ${error}`);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSearch = (topic) => {
    setQuery(topic);
    setImages([]);
    setPage(1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
    </>
  );
}

export default App;
