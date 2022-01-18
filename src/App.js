import { useState, useEffect } from "react";

import useHttp from "./hooks/use-http";

import Header from "./components/Header/Header";
import MoviesList from "./components/Movies/MoviesList";

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

    const sendRequestFunc = async (url) => {
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

    sendRequestFunc(url);
  }, [currentPage]);

  return (
    <>
      <Header />
      <main>
        <MoviesList />
      </main>
    </>
  );
}

export default App;
