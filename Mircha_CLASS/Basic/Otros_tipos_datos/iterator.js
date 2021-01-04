
let iterable = [31,35,3,38,89]

let ORIiterador = iterable[Symbol.iterator]()

/* console.log(ORIiterador.next())
console.log(ORIiterador.next())
console.log(ORIiterador.next())
console.log(ORIiterador.next())
console.log(ORIiterador.next())
 */

let next = ORIiterador.next()
/* 
while(!next.done){
    console.log(next.value)
    next = ORIiterador.next()
} */