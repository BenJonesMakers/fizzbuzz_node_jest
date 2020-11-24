class FizzBuzz {
  static method(num){
    if (num % 3 === 0) {
      return "fizz";
    } else if (num % 5 === 0) {
      return "buzz";
    } else {
      return num;
    }
  }
}

module.exports = FizzBuzz;
