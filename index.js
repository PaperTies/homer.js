var quotes = [
  'Hijos míos, os habéis esforzado, ¿y para qué? Para hacer el ridículo. La moraleja es: ¡no os esforcéis!',
  'Marge, ¿dónde está...? esa cosa... eso que se usa... ¡taca, y a comer!',
  'Bueno, tendrá todo el dinero del mundo, pero hay algo que nunca podrá comprar Marge. ¡Un dinosaurio!',
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function homer() {
  return quotes[getRandomInt(0, quotes.length)];
}

console.log(homer());
