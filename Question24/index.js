// Question 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least 
// one True and one False result for each of the following:

// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

console.log('"eggs" == "eggs"', 'eggs' == 'eggs');

console.log('"eggs" == "egg"', 'eggs' == 'egg');

console.log('"eggs"=="EGGS".toLowerCase()', 'eggs' == 'EGGS'.toLowerCase());

console.log('"Eggs"=="Eggs".toLowerCase()', 'Eggs' == 'Eggs'.toLowerCase());

console.log('"147"=="147"', '147' == '147');

console.log('"147"=="147"', '147' == '148');

console.log('false || true', false || true);

console.log('false && true', false && true);

const check = ['A', 'L', 'I'];

console.log("const check = ['Ali']");

console.log('check.includes(A)', check.includes('A'));

console.log('check.includes(b)', check.includes('b'));