import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import { fetchImagesWithTopic } from "./services/api";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/imageModal/ImageModal";
import Modal from "react-modal";
import { Element, scroller } from "react-scroll";
import { Image } from "./types";

Modal.setAppElement("#root");

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImagesWithTopic(query, page);
        console.log("Fetched images:", data);
        setImages((prevData) => [...prevData, ...data]);
      } catch (error) {
        console.log(`Problem: ${error}`);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSearch = (topic: string): void => {
    setQuery(topic);
    setImages([]);
    setPage(1);
  };

  const loadMore = (): void => {
    setPage((lastPage) => lastPage + 1);
    smoothScrollToBottom();
  };

  const smoothScrollToBottom = (): void => {
    scroller.scrollTo("endOfPage", {
      duration: 1200,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      <Element name="endOfPage" />
      {loading && <Loader />}
      {images.length > 0 && images.length % 12 === 0 && (
        <LoadMoreBtn onClick={loadMore} />
      )}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
