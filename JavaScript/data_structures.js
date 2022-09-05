const set = new Set()

set.add(1)              // Set(1) { 1 }
set.add(1)              // Set(1) { 1 }
set.add('joanna')       // Set(2) { 1, 'joanna' }
let obj1 = {a: 1, b: 2}
set.add(obj1)           // Set(3) { 1, 'joanna', { a: 1, b: 2 } }
let obj2 = {a: 1, b: 2}
set.add(obj2)           // Set(4) { 1, 'joanna', { a: 1, b: 2 }, { a: 1, b: 2 } }
                        // o2 is referencing a different object 

console.log(set.has(1))                         // true
console.log(set.has(3))                         // false
console.log(set.has('Joanna'.toLowerCase()))    // true
console.log(set.has(obj1))                      // true

console.log(set.size)                           // 4

console.log(set.delete('joanna'))               // removes 'joanna' from the set
console.log(set.has('joanna'))                  // false, value has been removed

console.log(set.size)                           // 3
