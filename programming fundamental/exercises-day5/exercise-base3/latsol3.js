/*
Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor. a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
*/
function tandingSuit(suitAku, suitRandom) {
  let acak = Math.floor(Math.random() * suitRandom.length);
  let suitAi = suitRandom[acak];

  console.log(`oke.. kamu pili ${suitAi}`);
  console.log(`oke.. aku pilih ${suitAku}`);

  if (suitAku === suitAi) {
    return "draw";
  } else if (
    (suitAku === "batu" && suitAi === "gunting") ||
    (suitAku === "gunting" && suitAi === "kertas") ||
    (suitAku === "kertas" && suitAi === "batu")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

let suit = ["batu", "gunting", "kertas"];
let suitPilihanAku = "gunting";

console.log(tandingSuit(suitPilihanAku, suit));
