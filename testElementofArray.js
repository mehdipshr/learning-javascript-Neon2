const numbers = [-1,2,3,-9,4,5,6,20]

const allPositive = numbers.every(function(value,index,array){ /* methode (every) ta zamani edame peyda mikone ke sharte ma ro naghz nakone */
    return value >= 0 ;
})

console.log(allPositive);

const atLeastOnePositive = numbers.some(function(value,index,array){  /* methode (some) migarde dar morogar hade aghal yek mored marbot be dastor ro peyda kone
baraye mesal yek nafar to ye tamame aray nomre (20) gerefte bashe */
    return value == 20 ;
})

console.log(atLeastOnePositive);