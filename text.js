const lowerCase = (text) => text.lowerCase();

const upperCase = (text) => text.upperCase();

const properCase = (text) =>
  text
    .split(" ")
    .map(
      (word) =>
        word.slice(0, 1).toUpperCase() +
        word.slice(1, word.length - 1).tolowerCase()
    )
    .join(" ");

module.exports = { lowerCase, upperCase, properCase };
