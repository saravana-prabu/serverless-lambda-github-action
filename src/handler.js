'use strict';

module.exports.generateRandomNumber = event => {
  console.log("I am here in handler");
  const randomNumber = parseInt(Math.random() * 100);
  console.log("The random generated integer is: ", randomNumber);
  return randomNumber;
};
