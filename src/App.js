import { useState, useEffect } from "react";

import useHttp from "./hooks/use-http";

import Header from "./components/Layout/Header";
import MoviesList from "./components/Movies/MoviesList";
import Footer from "./components/Layout/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    let url;
    let queryPage = "&page=" + currentPage.toString();

    const sendRequestHandler = async (url) => {
      let data = await sendRequest(url);
      console.log(data);
      setMovies(data.results);
      setMaxPage(data.total_pages);
    };

    if (isSearching) {
      let queryText = "&query=" + searchText;
      url = process.env.REACT_APP_SEARCH_API + queryText + queryPage;
    } else {
      url = process.env.REACT_APP_DISCOVER_API + queryPage;
    }

    sendRequestHandler(url);
  }, [currentPage, isSearching, searchText, sendRequest]);

  const navigatePageHandler = (increase) => {
    if (increase === true) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const submitSearchHandler = (text) => {
    if (text) {
      setIsSearching(true);
      setSearchText(text);
      setCurrentPage(1);
    }
  };

  return (
    <>
      <Header submitSearchHandler={submitSearchHandler} />
      <main>
        <MoviesList />
      </main>
      <Footer
        currentPage={currentPage}
        maxPage={maxPage}
        navigatePageHandler={navigatePageHandler}
      />
    </>
  );
}

export default App;
