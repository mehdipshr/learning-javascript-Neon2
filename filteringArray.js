const numbers = [1,2,3,4,5,6,7,8,9,0,1,22,44,56,77,88,-2,-4,-6,-8];

const filter =numbers.filter(function(value,index,array){ /* methode filter automatic yek array jadid dorost mikone va
 on meghdar haie ke sharayet ro daran daronesh gharar mide */
    return value >= 0;
})

console.log(filter);

// example array of objects
const  users = [
    {name: 'bob', age: 18},
    {name: 'bob', age: 10},
    {name: 'bob', age: 28},
    {name: 'bob', age: 38},
    {name: 'bob', age: 48},
    {name: 'bob', age: 58},
]

const result = users.filter(function(user){
    return user.age >=18
})

console.log(result);