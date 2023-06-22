import { useState } from "react";

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
    <div className="py-2">
      <div className="drop-shadow-xl bg-sky-100 py-4 mx-20">
        <form onSubmit={handleSubmit}>
          <input
            className="p-2 mr-0.5 rounded-l-lg w-4/6"
            type="text"
            placeholder="Search for a word..."
            value={chosenWord}
            onChange={(e) => setChosenWord(e.target.value)}></input>
          <button
            className="p-2 px-4 text-white font-bold rounded-r-lg bg-blue-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800/75 duration-300 w-0.5/6"
            type="submit">
            Search
          </button>
        </form>
        {error && <h4 className="text-red-600/75">Please type a word</h4>}
      </div>
    </div>
  );
};

export default SearchBar;
