import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";

const LetterDensity = () => {
  const {
    displayAllLetterDensities,
    letterDensitySet,
    setDisplayAllLetterDensities,
  } = useContext(CharacterContext);

  return (
    <div className="w-full">
      <div className="text-2xl font-bold"> Letter Density</div>
      <div className="densitySection">
        {letterDensitySet?.length > 0 ? (
          displayAllLetterDensities ? (
            letterDensitySet.map((letter, index) => {
              return (
                <div
                  className="flex justify-evenly h-5 m-3"
                  key={`${letter}-${index}`}
                >
                  <div>{letter.letter[0].toUpperCase()}</div>
                  <div className="rounded-2xl border-1 m-1 bg-gray-300 w-full">
                    <div
                      className={`rounded-2xl border-2 m-1 bg-purple-400 w-${letter.percentage.replace(
                        "%",
                        ""
                      )}`}
                    ></div>
                  </div>
                  <div>{letter.percentage}</div>
                </div>
              );
            })
          ) : (
            letterDensitySet.slice(0, 5).map((letter, index) => {
              return (
                <div
                  className="flex justify-evenly h-5 m-3"
                  key={`${letter}-${index}`}
                >
                  <div>{letter.letter[0].toUpperCase()}</div>
                  <div className="rounded-2xl border-1 m-1 bg-gray-300 w-full">
                    <div
                      className={`w-full rounded-2xl border-2 m-1 bg-purple-400 w-${letter.percentage.replace(
                        "%",
                        ""
                      )}`}
                      style={{ width: `${letter.percentage}` }}
                    ></div>
                  </div>
                  <div>{letter.percentage}</div>
                </div>
              );
            })
          )
        ) : (
          <div className="flex justify-center items-center text-2xl font-semibold p-5">
            No text entered
          </div>
        )}
      </div>
      {letterDensitySet?.length > 5 && (
        <button
          onClick={() =>
            setDisplayAllLetterDensities(!displayAllLetterDensities)
          }
          className="rounded-lg border-1 p-1 w-30 text-lg"
        >
          {displayAllLetterDensities ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default LetterDensity;
