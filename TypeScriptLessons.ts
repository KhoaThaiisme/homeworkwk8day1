import { isClassExpression } from "typescript"

let anyType
let stringType:string
let numberType:number
let booleanType:boolean
let objType:object
let typeNull:null
let undefinedType:undefined
let arrayType: string[] = []

arrayType.push('10')
// arrayType.push(23) error // array need to have element of string to be pushed into array


// typeString=123 //Error
typeString = 'helloWorld'

// typeNull = 'anything' error
typeNull = null

/* 
    
*/
let iceString:string
let iceBoolean:boolean
let iceNumber:number

iceString = 'this is a string'
iceBoolean = true
iceNumber = 2

console.log(iceString)

// implicit type declaration
let stringVar = 'matrix'
// stringVar = 23 error
stringVar = 'new String'

const stringArray = ['1', '2', '3']

// stringArray.push(10) error

let numVar = 10
// numVar = 'astring' error
numVar += 2
console.log(numVar)
let numArray: number[]

// numArray = ['2', '10'] error

numArray = [10,4,19]

/* 
    one declare an array which will be filled with null assign value of array with
*/

let array: null[] = []
array = []

let newString: string
let undefinedVar: undefined // it is different from null

// newString = null // it the lack of value // error because it assiged to string

let mixedArray: [string, number, number, string]
mixedArray = ['12', 5,4,'as']

let anyArray: any[]
anyArray = [1,'12', {a: 1}, [12]]

let mixedArray2: [string, string, ...number[]]

mixedArray2 = ['12', 'matrix', 1, 10, 101, 100]

// create an array with one number, any number of booleans array name stringBoolsArray
let stringBoolsArray: [number, ...boolean[]] = [5, true, false]

function lowerCaseName(name:string) {
    name = name.toLowerCase()
    return name
}

function nameLength(name:string){
    return name + 2
}

console.log(nameLength('sean').length)

function lowerCaseName2(name:string):string{
    name = name.toLowerCase()
    return name
}
lowerCaseName2('sean').length

/* 
    Create a function which takes in 2 parameters both numbers
    return a string ex: <firstNumber> plus <secondNumber> equals <num1+num2>
*/

function sumNumber(num1:number, num2:number):string {
    return `${num1} plus ${num2} equals ${num1 + num2}`
}

console.log(sumNumber(2,3))

const upperName = (name:string, age:number):string => {
    return `${name} is ${age} years old`
}

console.log(upperName('sean', 30).length)

function greeting(name:string):void{ // return void so it won't return any result
    console.log('Hello ', name)
}

greeting('sean')

/* 
    Create an arrow function just going to console log(your favorite joke) /w void data type
*/

const joke = (joke:string):void => {
    console.log(`this ${joke} is really funny`)
}

joke('haha')

let myTuple:[number, string]

myTuple = [1, 'a']
myTuple.push('astring')

console.log(myTuple)

// in class excersise
let hw:[boolean, undefined] = [true, undefined]

function anyParam(person:any){
    person.talk()
}

class Person{
    talk(){
        console.log("I have something to say")
    }
}

function unknownParam(person:unknown){
        if(person instanceof Person){
            person.talk()
    }
}

let person = new Person()

unknownParam(person)

/* 
    create a func takes unknown param
    implement type guard
    if param == number square num
    if string return uppercased 
    if boolean return boolean 
*/

function transform(pa:any) {
    if (typeof pa === 'number'){
        return pa**pa
    } else if (typeof pa === 'string'){
        return pa.toUpperCase()
    } else if(typeof pa === 'boolean'){
        return pa
    } else {
        return 'Invalid input'
    }
}

console.log(transform(2))

// function anyParam2(data:unknown){
//     data.push()
// }

const student = {id: 1};

// student.name = 'chris'
// student.id = '1' error

const student2 = {
    id:2,
    name: 'chris'
}

student2.name = 'christopher'

const student3 : {
    id: number,
    name:string
} = {
    id:3,
    name:'karina'
}

let student4: {
    id:number,
    name:string
}

student4 = {
    id: 5,
    name:'Vinh'
}

/* 
    Create an object /w 3 key, value pairs:
    id -> number, name ->, wasFrozen -> boolean
*/

const classEx:{
    id: number,
    name: string, 
    wasFrozen: boolean
} = {
    id:1,
    name: 'Khoa',
    wasFrozen: false
}

console.log(classEx)

const student5 : {
    readonly id : number,
    name: string,
} = {
    id: 5,
    name: 'gian'
}

// student5.id = 10 error because it is readonly

type Student = {
    readonly id:number, // readonly will make this id cannot be changed or reassign or update it
    name: string
}

const student6 : Student = {
    id : 10,
    name : 'alec',
    // email: 'test@gmail.com' error because it is not assigned to the original set of type
}

console.log(student6.id)

// optional key value pairs with ?
type StudentInfo = {
    readonly id: number,
    name: string,
    email? : string
}

let student7 : StudentInfo
let student8 : StudentInfo

student7 = {
    id:12,
    name: 'andy'
}

student8 = {
    id:13,
    email:'khoa@gmail.com',
    name:'khoa'
}


student7.email = 'andy@gmail.com'
console.log(student7.email)

type StudentMethod = {
    readonly id: number,
    name: string,
    email?: string,
    sayHello: (school:string)=> string
}

const student9: StudentMethod = {
    id: 14 ,
    name:'david' ,
    sayHello: function(school:string):string{
        return `${this.name} is going to ${school}`
    }
}

console.log(student9.sayHello('Coding Temple'))

/* 
type -IceShopeType
create instance of type
readonly id -> number
size -> number
name -> string
description -> string
optionvalue wideShoe -> boolean
*/

type IceShopeType = {
    readonly id: number,
    size: number,
    name: string,
    description: string,
    wideShoe?: boolean
}

const big : IceShopeType = {
    id: 1,
    size: 10,
    name: 'big ice',
    description: 'this is a big ice',
    // wideShoe: true
}

console.log(big)

type LooseType = {
    name: string, 
    [key: string]: any
}

const randomOb : LooseType = {
    name: 'tood',
    age: 24,
    email: 'todd@gmail.com',
    favoriteTeams: ['bear', 'bulls']
}