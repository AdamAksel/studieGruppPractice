/*
// 1.   Vad är det för skillnad på funktioner inom matematik och
        funktioner inom programmering?
*/

/*
// 2.   Vad är det för skillnad mellan objekt och funktioner?
*/

/*
// 3.   Vad är det för funktionell skillnad på metoder och funktioner?
*/

/*
// 4.    Vad är det för skillnad på variabler och parametrar?
*/

/*
// 5.   Vad är det för skillnad på argument och parametrar?
*/

/*
// 6.   Varför har funktioner namn?
*/

/*
// 7.   En parameter fungerar likt en variabel,
        men varför måste man inte deklarera parametrar med ’let’ eller ’const’?
*/

/*
// 8.   Vad kommer outputten vara för följande program?

 function run(value) {
  if (value === 5) {
    return run(value - 1);
  }

  if (value === 7) {
    return 7 + run(value - 3);
  }

  return 4;
}

console.log(run(3));
console.log(run(7));
console.log(run(5));     

*/

/*
// 9.   Vad kommer returneras från funktionen när den körs på sista raden?

function calculateArea(a, b) {
  console.log(a * b);
}

calculateArea();

*/

/*
// 10.  Vad kommer värdet av ’a’ på näst sista raden att vara?

function run(a) {
  return a + 9;
}

function run2(a) {
  return a + 7;
}

function run3(call) {
  return 5;
}

let a = run(run2(run3()));
console.log(a);

*/

/*
// 11.  Följande kod är väldigt lik koden från förra övningen men
        det finns några skillnader.
        Vad kommer värdet av ’a’ vara för denna kod?

        function run(a) {
  return a + 9;
}

function run2(a) {
  return a(1) + 7;
}

function run3(call) {
  return call / 2;
}

let a = run(run2(run3));
console.log(a);

*/

/*
// 12.  Vad kommer outputten vara för följande program?

let a = 10;
function modify(a) {
  a += 10;
}

modify(a);
console.log(a);

*/

/*
// 13.  Vad kommer outputten vara för följande program?

let a = {
  a: 10
};
function modify(a) {
  a += 10;
}

modify(a);
console.log(a);

*/

/*
// 14. Vad kommer outputten vara för följande program?

let a = {
  a: 10
};
function modify(a) {
  a.a += 10;
}

modify(a);
console.log(a);

*/

/*
// 15.  Följande kod saknar kod. Baserat på funktionens namn,
        vad tror du saknas? Här finns inget rätt svar utan bara ett
        svar som är sannolikt

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
}

*/

/*
// 16.  Om följande funktion körs med argumentvärde 3 på ’b’
        parametern och den returnerar 20, vad måste parameter ’a’ haft för värde?

function doSomething(a, b) {
  if (b <= 0) {
    return a;
  } else if (b === 1) {
    return doSomething(a + 10, b - 1);
  } else if (b === 2) {
    return doSomething(a * 4, b - 1);
  } else if (b === 3) {
    return doSomething(a / 2, b - 1);
  } else {
    return doSomething(a, b - 1);
  }
}

*/
