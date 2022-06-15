const blacklist = ['spam', 'sale'];

const checkForSpam = function (message) {
  for (let i = 0; i < message.length; i += 1) {
    if (message.toLowerCase().indexOf(blacklist[i]) !== -1) {
      return 'Нашли';
    }
  }

  return 'Не нашли';
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
