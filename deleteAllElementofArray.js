let number = [1,2,3,4,5,56];
let another = number;

// number = [] ; /* in ravesh baraye pak kardan array eshtebah hast */

number.splice(0,number.length);
number.length = 0;

number = [];
console.log(number);
console.log(another);

