const sum = require('./sum.js');

test("sum adds two numbers adn returns correct value", function(){
  expect(sum(1, 3)).toBe(4);
})
