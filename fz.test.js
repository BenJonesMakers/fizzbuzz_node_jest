const FizzBuzz = require('./fz.js');

test("returns 'fizz' if divisable by 3", function(){
  expect(FizzBuzz.method(3)).toBe("fizz");
});

test("returns 'buzz' if divisible by 5", function() {
  expect(FizzBuzz.method(5)).toBe("buzz");
});

test("returns the number by default", function() {
  expect(FizzBuzz.method(7)).toBe(7);
});

test("returns the 'fizzbuzz' if divisible by 15", function() {
  expect(FizzBuzz.method(60)).toBe('fizzbuzz');
});
