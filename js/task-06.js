let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число:');

  if (input !== null) {
    numbers.push(Number(input));
  }

  if (input === null && numbers.length > 0) {
    for (const number of numbers) {
      total += number;
    }

    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }

  if (input === null && numbers.length === 0) {
    break;
  }
}
