var destinations = ['sajek', 'coxbazar', 'nepal', 'bali', 'singapur'];

console.log(destinations[2]);

destinations[2] = 'thailand';
console.log(destinations);

var index = destinations.indexOf('bali');
console.log(index);

destinations.push('bankok');
console.log(destinations);

destinations.pop();
console.log(destinations);


if (destinations[1] == 'sajek') {
    console.log('Lets go to Sajek');
}
else if (destinations[3] == 'bali') {
    console.log('lets go for Bali');
}
else if (destinations.length != 5) {
    console.log('Lets go for Sweden');
}
else {
    console.log('I am tired to go anywhere.');
}