const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(' ');
  const numberOfWord = words.length;
  let total = 0;

  for (let i = 0; i < words.length; i += 1) {
    total = numberOfWord * pricePerWord;
  }

  return total;
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
