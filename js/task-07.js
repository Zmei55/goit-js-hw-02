const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
console.log(logins);

const isLoginValid = function (login) {
  if (login.length > 3 && login.length < 17) {
    return true;
  }

  return false;
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.indexOf(login) === -1) {
    return true;
  }

  return false;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) === true) {
    if (isLoginUnique(allLogins, login) === true) {
      allLogins.push(login);
      return 'Логин успешно добавлен!';
    }

    return 'Такой логин уже используется!';
  }

  return 'Ошибка! Логин должен быть от 4 до 16 символов';
};

console.log(addLogin(logins, 'Ajax'));
console.log(addLogin(logins, 'robotGoogles'));
console.log(addLogin(logins, 'Zod'));
console.log(addLogin(logins, 'jqueryisextremelyfast'));

console.log(logins);
