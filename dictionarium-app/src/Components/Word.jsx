import "./Word.css";
import getWordDefinition from "../api";
import { useEffect, useState } from "react";
import MeaningCard from "./MeaningCard";

const Word = ({ selectedWord }) => {
  const [definition, setDefinition] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getWordDefinition(selectedWord)
      .then((response) => {
        setDefinition(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [selectedWord]);

  console.log(definition);

  if (isLoading) return <h3>Loading...</h3>;
  return (
    <div>
      <h3>{definition.word}</h3>
      { <h4>{definition.phonetics.filter((element) => element.hasOwnProperty("text"))[0].text}</h4>}
      {definition.meanings.map(meaning => <MeaningCard meaning={meaning}/>)}
      <h5>Want to know more about the word '{definition.word}'? <a href={definition.sourceUrls}>Click here!</a></h5>
    </div>
  );
};

export default Word;
