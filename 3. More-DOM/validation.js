// const number = '23';

const number = 23;
// string, number, boolean
if(typeof number === 'number') {
    // console.log('value is a number');
}
else {
    // console.log('value is not a number');
}


const numbers = [3, 12, 45, 65];
const student = {name: 'jamil khan', job: 'khawadawa kora'};
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(student));
// console.log(typeof student);


// NaN --> Not A Number
// isNaN
console.log(isNaN('2'));
console.log(isNaN('ab'));
console.log(isNaN(56));

console.log(isNaN({}));
console.log(isNaN([]));
console.log(isNaN([5]));

