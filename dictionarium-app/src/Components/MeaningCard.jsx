
const MeaningCard = ({meaning}) => {

    return (
        <div>
        <h5>{meaning.partOfSpeech}</h5>
        {meaning.definitions.map((definition) => {
            return (
                <p id={meaning.definitions.indexOf(definition)}>
                <h5>Definition: {definition.definition}</h5>
                {definition.hasOwnProperty("example") ? <h5>Example: "{definition.example}"</h5> : null}
                </p>
            )
        })}
        {meaning.synonyms.length > 0? <h5>Synonims: {meaning.synonyms.join(", ")}</h5> : null} 
        {meaning.antonyms.length > 0? <h5>Antonyms: {meaning.antonyms.join(", ")}</h5> : null}
        
        </div>
    )
}

export default MeaningCard; 