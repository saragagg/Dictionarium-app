const WordNotFound = () => {
  return (
    <div className="pt-5 pb-10 md:py-20 flex-col space-y-6">
      <h2 className="text-2xl md:text-4xl ld:text-7xl text-blue-900 font-bold mx-4">
        Oops! Page not found.
      </h2>
      <div className="mt-5 bg-white mx-3 md:mx-64 ld:mx-90 rounded-lg p-4">
        <h3>
          <p className="underline text-2xl font-semibold text-blue-900">
            Don't worry, we're here to help you find what you need 📚
          </p>
          <p className="mt-2 text-xl italic">
            We're sorry, but the word you're looking for could not be found in
            our dictionary.
          </p>
        </h3>
      </div>
      <div className="mt-5 bg-white mx-3 md:mx-64 ld:mx-90 rounded-lg p-4">
        <h4>
          <p className="mt-5 text-xl font-semibold italic text-blue-900">
            Here are a few suggestions to help you find the word you need:
          </p>
          <p className="mt-5 md:mx-20 text-lg text-left">
            <ul>
              <li>
                <span className="font-bold text-blue-900">Check your spelling:</span>
                Sometimes, a simple typo can lead to a word not being found.
                Please double-check the spelling and try again.
              </li>
              <li>
                <span className="font-bold text-blue-900">Use different word forms:</span> If
                you were searching for a specific form of the word e.g., noun,
                verb, adjective, try searching for the base form or vice versa.
              </li>
              <li>
                <span className="font-bold text-blue-900">Try a synonym:</span> If the word
                you're looking for is not found, it might have synonyms that we
                do have in our dictionary. Search for a similar word that
                conveys the same meaning.
              </li>
              <li>
                <span className="font-bold text-blue-900">Explore related terms:</span> The
                word you're looking for could be part of a larger group of
                related terms. Try searching for broader categories that might
                include the word you need.
              </li>
              <li>
                <span className="font-bold text-blue-900">
                  Submit the word for consideration:
                </span>
                If you believe the word should be in our dictionary but isn't,
                please let us know! We are continually updating and expanding
                our database, and your input is valuable to us.
              </li>
            </ul>
          </p>
          <p className="mt-10 text-xl font-semibold italic text-blue-900 hover:underline">
            Try your search again
          </p>
        </h4>
      </div>
    </div>
  );
};

export default WordNotFound;
