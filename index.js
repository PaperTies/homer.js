var quotes = [
  'Hijos míos, os habéis esforzado, ¿y para qué? Para hacer el ridículo. La moraleja es: ¡no os esforcéis!',
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function homer() {
  return quotes[getRandomInt(0, quotes.length)];
}

console.log(homer());
