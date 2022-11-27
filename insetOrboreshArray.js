const first = [{id:3}]; /* ...first = ...[{id:3}] */
const second = [4,5,6,7];   /* ...secobd = ...[4,5,6,7] */

const combined = ['a',...first,...second] /* tarkib kardan 2 array ba methode spread (...) 3 dot ... */

// const combined = first.concat(second); /* baraye tarkibe 2 array az methode (concat) estefade mikonim */
first[0].id =10;
console.log(combined);

// const Slice = combined.slice(2,4); /* methode slice vorodie aval az che andisi shoro kone va 2ovomi mige che andisi tamom kone */

// console.log(Slice);