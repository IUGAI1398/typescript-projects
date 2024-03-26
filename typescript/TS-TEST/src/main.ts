let hello: string = 'hello'
let num: number = 123

let fruits: string[] = ['Apple', 'Banana']
let numberarra: number[] = [1, 2,3]
let union: (string|number)[] = [12, 'Apple', 13, 'banana']

const add: (x: number, y: number) => void = function(x, y){

    if (x+y === 5){
        return "test"
    }
    return x+ y;
}



let test = add(3, 2)
console.log(test);

const obj: object = {}
const arr: object = []
const funcExecut: object = function(){}
console.log(hello);


const a: any = 123;
const w: unknown = 233;


interface User {
 name:string,
 age: number,
}

interface Validation {
    isValid: boolean
 }


 const heropy: User & Validation = {
    name: 'Neo',
    age: 86,
    isValid: false
 }


