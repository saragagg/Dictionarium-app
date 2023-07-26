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
    <div className="mt-5 mx-1">
      <h3 className="text-4xl md:text-6xl lg:9xl">{definition.word}</h3>
      {
        <h4 className="italic text-lg md:text-xl lg:text-2xl">
          {
            definition.phonetics.filter((element) =>
              element.hasOwnProperty("text")
            )[0].text
          }
        </h4>
      }
      {definition.meanings.map((meaning) => (
        <MeaningCard meaning={meaning} />
      ))}
      <h5 className="mt-6 text-blue-900 text-ld md:text-xl ld:text-2xl font-semibold ">
        Want to know more about the word '{definition.word}'?
        <p>
          <a href={definition.sourceUrls} className="font-bold text-blue-700 italic underline">
            Click here!
          </a>
        </p>
      </h5>
    </div>
  );
};

export default Word;
