const FizzBuzz = require('./fz.js');

test("returns 'fizz' if divisable by 3", function(){
  expect(FizzBuzz.method(3)).toBe("fizz");
})
