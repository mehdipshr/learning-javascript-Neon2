const numbers = [
    {id : 1,name: 'html'},
    {id: 3, name: 'css'}
];

numbers.sort(function(a,b){
    let nameA = a.name.toLowerCase(); /* baraye in ke bozorg ya kochik bodane harf ha moshkel ijad nakone */
    let nameB = b.name.toLowerCase();
    if(nameA<nameB) return -1; /* agar -1 return beshe a ro aval gharar mide */
    if(nameB>nameA) return 1; /* agar 1 return beshe b ro aval gharar mide */
    return 0;
}); 

// const reverse = numbers.reverse();
// console.log(reverse);
console.log(numbers);