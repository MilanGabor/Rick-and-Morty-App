import React, { useEffect, useState } from "react";

import axios from "axios";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import CardSkeleton from "../components/CardSkeleton";
import CharacterCard from "../components/CharacterCard";

import "../styles/Home.scss";

interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
  url: string;
}

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info | null>(null);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [scrollToTop, setScrollToTop] = useState<boolean>(false);

  const fetchCharacters = async (page: number, searchQuery: string = "") => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:80/api/characters?page=${page}&name=${searchQuery}`
      );
      setCharacters(response.data.results);
      setInfo(response.data.info);
      setError("");
    } catch (error) {
      setError("No match found");
      console.error("Error fetching characters", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage, search);
  }, [currentPage, search]);

  useEffect(() => {
    scrollToTopHandler();
  }, [scrollToTop]);

  const handleNextPage = () => {
    if (info?.next) {
      setCurrentPage((prevPage) => prevPage + 1);
      setScrollToTop((prev) => !prev);
    }
  };

  const handlePrevPage = () => {
    if (info?.prev) {
      setCurrentPage((prevPage) => prevPage - 1);
      setScrollToTop((prev) => !prev);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearch("");
    setCurrentPage(1);
  };

  const scrollToTopHandler = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="main-page">
      <h1 className="title">Rick and Morty Characters</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search characters"
          value={search}
          onChange={handleSearchChange}
          className="search-input"
        />
        {search && (
          <button className="clear-button" onClick={clearSearch}>
            &times;
          </button>
        )}
      </div>
      {isLoading ? (
        <div className="character-list">
          {Array.from({ length: 20 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          {characters && (
            <div className="character-list">
              {characters.map((character) => (
                <CharacterCard
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  species={character.species}
                  status={character.status}
                  url={character.url}
                />
              ))}
            </div>
          )}
          <div className="pagination">
            <FaArrowLeft
              className={`button ${currentPage === 1 ? "disabled" : null}`}
              onClick={handlePrevPage}
            />
            <span>
              Page {currentPage} of {info?.pages}
            </span>
            <FaArrowRight
              className={`button ${
                currentPage === info?.pages ? "disabled" : null
              }`}
              onClick={handleNextPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
