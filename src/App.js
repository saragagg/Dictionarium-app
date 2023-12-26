import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import HomePage from "./Components/HomePage";
import Word from "./Components/Word";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [selectedWord, setSelectedWord] = useState("");

  return (
    <div className="bg-sky-50 h-full min-h-screen font-serif text-center ">
      <Header />
      <SearchBar
        selectedWord={selectedWord}
        setSelectedWord={setSelectedWord} 
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/word" element={<Word selectedWord={selectedWord} />} />
      </Routes>
    </div>
  );
}

export default App;
