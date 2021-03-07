```js
const hereAreAllOfTheLettersINeed = [
  "H",
  "e",
  "l",
  "l",
  "o",
  " ",
  "W",
  "o",
  "r",
  "l",
  "d",
];
let thisWillEventuallyBeTheFinalResult = "";

function thisIsAReallyLongHelloWorldApp(unnecessaryButHelpfulIndex = 0) {
  if (unnecessaryButHelpfulIndex < hereAreAllOfTheLettersINeed.length) {
    thisWillEventuallyBeTheFinalResult +=
      hereAreAllOfTheLettersINeed[unnecessaryButHelpfulIndex];
    thisIsAReallyLongHelloWorldApp(unnecessaryButHelpfulIndex + 1);
  } else {
    nowWeCanFinallyConsoleLogIt(thisWillEventuallyBeTheFinalResult);
  }
}

function generateSomeRandomColours(aNumberWeAlsoDidNotNeed) {
  const arrayOfVeryPrettyColours = [];
  for (let i = 0; i <= aNumberWeAlsoDidNotNeed; i++) {
    const thisIsARandomHex = Math.floor(Math.random() * 16777215).toString(16);
    arrayOfVeryPrettyColours.push(`color: #${thisIsARandomHex};`);
  }
  return arrayOfVeryPrettyColours;
}

function nowWeCanFinallyConsoleLogIt(aStringWeDidNotReallyNeed) {
  const thisIsOurNewFormattedString = aStringWeDidNotReallyNeed
    .split("")
    .map((el) => (el !== " " ? `%c${el}` : el))
    .join("");
  const letsMakeThisReallyPretty = generateSomeRandomColours(
    aStringWeDidNotReallyNeed.length
  );
  console.log(
    thisIsOurNewFormattedString,
    letsMakeThisReallyPretty[0],
    letsMakeThisReallyPretty[1],
    letsMakeThisReallyPretty[2],
    letsMakeThisReallyPretty[3],
    letsMakeThisReallyPretty[4],
    letsMakeThisReallyPretty[5],
    letsMakeThisReallyPretty[6],
    letsMakeThisReallyPretty[7],
    letsMakeThisReallyPretty[8],
    letsMakeThisReallyPretty[9]
  );
}

thisIsAReallyLongHelloWorldApp();
```
