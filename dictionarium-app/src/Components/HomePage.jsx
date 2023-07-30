const HomePage = () => {
  return (
    <div className="pb-10 mx-1 md:mx-64 ld:mx-90">
      <div className="bg-white mt-11 p-4 md:p-11 lg:p-22 drop-shadow-xl rounded-md">
        <h3 className="font-sans text-base md:text-lg ld:text-xl italic">
          “Words are pale shadows of forgotten names. As names have power, words
          have power. Words can light fires in the minds of men. Words can wring
          tears from the hardest hearts.”
          <p className="font-medium">
            - Patrick Rothfuss, The Name of the Wind
          </p>
        </h3>
      </div>

      <div className="my-11 drop-shadow-xl text-center text-blue-900">
        <h3>
          <p className="text-3xl md:text-5xl ld:text-8xl w-max font-extrabold overflow-hidden whitespace-nowrap animate-typing mx-auto border-r-4">
            Introducing <span className="italic">Dictionarium</span>:
          </p>
          <p className="text-2xl md:text-4xl ld:text-7xl font-semibold underline">
            Your Ultimate Dictionary Website
          </p>
        </h3>
      </div>

      <div className="bg-white mt-5 p-4 md:p-11 lg:p-22 drop-shadow-xl rounded-md">
        <h4 className="font-sans text-base md:text-lg ld:text-xl">
          Welcome to Dictionarium, the dynamic and comprehensive dictionary
          website that is set to revolutionize the way you interact with words.
          With its extensive word database, precise definitions, and innovative
          features, Dictionarium empowers you to explore languages, expand your
          vocabulary, and access accurate information anytime, anywhere.{" "}
          <p className="mt-5">
            Discover a World of Words: Dictionarium opens the doors to a vast
            universe of words and their meanings.
          </p>
        </h4>
      </div>

      <div className="bg-white mt-11 p-4 md:p-11 lg:p-22 drop-shadow-xl rounded-md">
        <h4 className="font-sans text-base md:text-lg ld:text-xl">
          Unparalleled Accuracy and Depth: When it comes to definitions,
          synonyms, antonyms, and examples, Dictionarium strives for unrivaled
          accuracy and depth. Our website draws from reputable sources and
          linguistic experts to provide you with the most precise and up-to-date
          information. We ensure that you grasp the full meaning and usage of
          every word, enabling you to communicate effectively and confidently.
          Dictionarium invites you to embark on a linguistic adventure like no
          other.
          <p className="mt-5">
            Empower yourself with knowledge, communicate with precision, and let
            Dictionarium be your trusted language companion on the exciting
            journey of discovery and learning.
          </p>
        </h4>
      </div>
    </div>
  );
};

export default HomePage;
