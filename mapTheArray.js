// example 1
const array = [1,7,2,3,45,54,64];
const result = array.map(function(value){
    return value * 2;
})

console.log(result);


// example 2
// const products = ['html', 'css', 'js'];

// const items = products.map(function(product){
//     return `<li>${product} </li>`
// })

// console.log(items);
// const html = `<ul> ${items.join(' ')}  </ul>`;
// console.log(html);

// example 3
const products = ['html', 'css', 'js'];

const items = products.map(function(product){
    const obj = {value: product}
    return obj
})

console.log(items);