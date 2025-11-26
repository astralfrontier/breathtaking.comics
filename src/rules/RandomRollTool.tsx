import { useCallback, useState } from "react";
import { randomValue } from "../traits";

function RandomRollTool() {
  const [rolls, setRolls] = useState<number[]>([randomValue(6) + 1]);

  function addRoll(newRoll: number) {
    setRolls((rolls) => {
      const newRolls = [newRoll, ...rolls];
      while (newRolls.length > 5) {
        newRolls.pop();
      }
      return newRolls;
    });
  }

  const rolld4 = useCallback(() => addRoll(randomValue(4) + 1), []);
  const rolld6 = useCallback(() => addRoll(randomValue(6) + 1), []);
  const rolld8 = useCallback(() => addRoll(randomValue(8) + 1), []);
  const rolld10 = useCallback(() => addRoll(randomValue(10) + 1), []);

  return (
    <article>
      <p>
        <button onClick={rolld4}>d4</button>{" "}
        <button onClick={rolld6}>d6</button>{" "}
        <button onClick={rolld8}>d8</button>{" "}
        <button onClick={rolld10}>d10</button>
      </p>
      <p>
        {rolls[0] == 0 && <p>Click on a die to roll it</p>}
        {rolls[0] > 0 && (
          <>
            <strong>Result:</strong> {rolls.join(", ")}
          </>
        )}
        {rolls[0] >= 1 && rolls[0] <= 2 && (
          <p>
            <strong>1-2</strong>: one Drive flips to Red - explain what went
            wrong!
          </p>
        )}
        {rolls[0] >= 3 && rolls[0] <= 4 && (
          <p>
            <strong>3-4</strong>: one Drive flips to Red, another Drive flips to
            Green - mixed success
          </p>
        )}
        {rolls[0] >= 5 && rolls[0] <= 9 && (
          <p>
            <strong>5-9</strong>: one Drive flips to Green - success!
          </p>
        )}
        {rolls[0] >= 10 && (
          <p>
            <strong>10+</strong>: two Drives flip to Green - great success!
          </p>
        )}
      </p>
    </article>
  );
}

export default RandomRollTool;
