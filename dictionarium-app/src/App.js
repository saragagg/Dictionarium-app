import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import HomePage from './Components/HomePage';
import Word from './Components/Word';
import { useState } from 'react';

function App() {

  const [selectedWord, setSelectedWord] = useState("")
  const [showWord, setShowWord] = useState(false)
  
  return (
    <div className="h-screen bg-sky-50 font-serif text-center">
        <Header />
        <SearchBar selectedWord={selectedWord} setSelectedWord={setSelectedWord} setShowWord={setShowWord}/>
        {!showWord && <HomePage />}
        {showWord && <Word selectedWord={selectedWord}/>}
    </div>
  );
}

export default App;
