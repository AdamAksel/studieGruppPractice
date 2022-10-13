export function calculate(num) {
  let start = 26000
  let born = start * 0.007
  let dead = start * 0.006

  for (let i = 0; i < num; i++) {
    start = start + born - dead + 300 - 325
  }
  return console.log(
    `Efter ${num} år har befolkningen ändrats från 26000 till ${start}.`
  )
}

/*
// 38.  En kommun har gjort följande prognos för befolkningsutvecklingen de närmaste åren:
Vid början av 2016 hade kommunen 26000 invånare.
Antalet födda och avlidna under ett år uppskattas var 0.7% resp 0.6% av befolkningen vid årets början.
Antalet inflyttade och antalet utflyttade uppskattas till 300 resp 325 varje år.
Skriv en funktion som beräknar kommunens uppskattade invånarantal i början av ett visst år. Vilket år det gäller ska läsas in som indata till funktionen.
*/
