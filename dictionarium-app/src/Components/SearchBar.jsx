import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setSelectedWord, setShowWord }) => {
  const [error, setError] = useState(false);
  const [chosenWord, setChosenWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chosenWord === "") {
      setError(true);
      setShowWord(false);
    } else {
      setSelectedWord(chosenWord);
      setShowWord(true);
      setError(false);
    }
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a word..."
          value={chosenWord}
          onChange={(e) => setChosenWord(e.target.value)}></input>
        <button type="submit">Search</button>
      </form>
      {error && <h4>Please type a word</h4>}
    </div>
  );
};

export default SearchBar;
