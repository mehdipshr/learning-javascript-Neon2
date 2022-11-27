//finfing premitive 
// const numbers = [1,2,3,4,5,1];
// console.log(numbers.lastIndexOf(1));
// if(numbers.includes(1)){

//     console.log('yes');
// }
    // console.log(numbers.indexOf(1,1)); /* vorodi aval indexi ke donbalesh hastim , vorodi dovom -az koja shoro kone be jostejo */

// finding Refrence Array

const numbers = [
    {id:1, name: 'a'},
    {id:2, name: 'b'}
];


const result = numbers.find(function(number){
    return number.id === 2
})
console.log(result);


const result = numbers.findIndex(function(number){
    return number.id === 2
})
console.log(result);