const numbers = [
    {id:1, name: 'a'},
    {id:2, name: 'b'}
];
// exampl 1
/* dar arrow function agar ma yek parametr darim mitonim parantez nazarim () */

const result = numbers.find(number => {   
    return number.id === 2
})
console.log(result);

// exampl 2
/* agar 2 prametr darim bayad dar parantez bashan */
const result = numbers.find((number,exam ) => {   
    return number.id === 2
})
console.log(result);

// exampl 3
/* va agar parametr nadashte bashim bayad parantez ro khali negah darim */
const result = numbers.find(() => {   
    return number.id === 2
})
console.log(result);

// exampl 4
/* dar sorate tak bodan parametr va khoroji mitonim {hazf konim} va haminto (hazf konim) va sevom niyaz ham be kalameye Return nadarim va khidesh automatic return anjam mide */
const result = numbers.find(number => number.id === 2
)
console.log(result);