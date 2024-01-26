/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const ordAlf = pets.slice().sort();
console.log(ordAlf);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const reversedPets = pets.slice().reverse();
console.log(reversedPets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstEl = pets.shift();
pets.push(firstEl);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
const licensePlate = "AB1234";

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlate + i;
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: "Fiat",
  model: "500",
  color: "white",
  trims: ["lounge", "urban"],
};
cars.push(newCar);

for (let i = 0; i < cars.length; i++) {
  const lastTrim = cars[i].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  if (cars[i].trims.length > 0) {
    const firstTrim = cars[i].trims[0];
    justTrims.push(firstTrim);
  }
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const firstLetter = cars[i].color.charAt(0);

  if (firstLetter === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let i = 0;

while (numericArray[i] !== 32 && i < numericArray.length) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const alphabet = "abcdefghijklmnopqrstuvwxyz";

const positionsArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const currentChar = charactersArray[i];
  switch (currentChar) {
    case "a":
      positionsArray.push(1);
      break;
    case "b":
      positionsArray.push(2);
      break;
    case "c":
      positionsArray.push(3);
    case "e":
      positionsArray.push(4);
      break;
    case "d":
      positionsArray.push(5);
      break;
    case "e":
      positionsArray.push(6);
      break;
    case "f":
      positionsArray.push(7);
      break;
    case "g":
      positionsArray.push(8);
      break;
    case "h":
      positionsArray.push(9);
      break;
    case "i":
      positionsArray.push(10);
      break;
    case "l":
      positionsArray.push(11);
      break;
    case "m":
      positionsArray.push(12);
      break;
    case "n":
      positionsArray.push(13);
      break;
    case "o":
      positionsArray.push(14);
      break;
    case "p":
      positionsArray.push(15);
      break;
    case "q":
      positionsArray.push(16);
      break;
    case "r":
      positionsArray.push(17);
      break;
    case "s":
      positionsArray.push(18);
      break;
    case "t":
      positionsArray.push(19);
      break;
    case "u":
      positionsArray.push(20);
      break;
    case "v":
      positionsArray.push(21);
      break;
    case "z":
      positionsArray.push(22);
      break;
    default:
      positionsArray.push(null);
  }
}

console.log(positionsArray);
