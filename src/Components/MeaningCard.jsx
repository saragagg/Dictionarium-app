const MeaningCard = ({ meaning }) => {
  return (
    <div className="mt-5 bg-white mx-1 md:mx-64 ld:mx-90 rounded-md pt-1">
      <h5 className="underline text-2xl font-semibold">
        {meaning.partOfSpeech}
      </h5>
      <ul className="list-disc list-outside">
        {meaning.definitions.map((definition) => {
          return (
            <p
              id={meaning.definitions.indexOf(definition)}
              className="pt-2 text-base md:text-lg ld:text-xl">
              <li className="list-inside"><h5>
                <span className="font-bold underline">Definition:</span>{" "}
                {definition.definition}
              </h5></li>
              {definition.hasOwnProperty("example") ? (
                <h5>
                  <span className="font-bold italic underline">Example:</span> "
                  {definition.example}"
                </h5>
              ) : null}
            </p>
          );
        })}
      </ul>

      {meaning.synonyms.length > 0 ? (
        <h5>
          <span className="font-bold">Synonims: </span>
          {meaning.synonyms.join(", ")}
        </h5>
      ) : null}
      {meaning.antonyms.length > 0 ? (
        <h5>
          <span className="font-bold">Antonyms: </span>
          {meaning.antonyms.join(", ")}
        </h5>
      ) : null}
    </div>
  );
};

export default MeaningCard;
