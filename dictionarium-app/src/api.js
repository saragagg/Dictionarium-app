import axios from "axios";

const getWordDefinition = (word) => {
  return axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(({ data }) => {
      return data[0];
    });
};

export default getWordDefinition;

