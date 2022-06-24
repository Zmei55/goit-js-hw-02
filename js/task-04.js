const formatString = string => string.split('').slice(0, 41).join('');

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// Curabitur ligula sapien, tincidunt non.

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// Vestibulum facilisis, purus nec pulvinar

console.log(formatString('Curabitur ligula sapien.'));
// Curabitur ligula sapien.

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// Nunc sed turpis. Curabitur a felis in nun
