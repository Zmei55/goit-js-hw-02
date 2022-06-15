const logItems = function (array) {
  let element = '';

  for (let i = 0; i < array.length; i += 1) {
    element = `${i + 1} - ${array[i]}`;
    console.log(element);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
