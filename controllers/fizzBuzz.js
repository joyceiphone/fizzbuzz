const fizzBuzzService = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const num = parseInt(arr[i]);
    //data validation, if the input is not a number, show Invalid Item
    if (isNaN(parseInt(num))) {
      res.push('Invalid Item');
    } else if (
      //If the value is divisible by both 3 and 5 then output the word “FizzBuzz”
      num % 3 === 0 &&
      num % 5 === 0
    ) {
      res.push('FizzBuzz');
      //If the value is a multiple of 3 then output the word “Fizz”
    } else if (num % 3 === 0) {
      res.push('Fizz');
      //If the value is a multiple of 5 then output the word “Buzz”
    } else if (num % 5 === 0) {
      res.push('Buzz');
      //At the end of the run the program should display each division that was performed. See Sample Output below.
    } else {
      res.push(`Divided ${num} by 3`);
      res.push(`Divided ${num} by 5`);
    }
  }
  return res;
};

module.exports = { fizzBuzzService };
