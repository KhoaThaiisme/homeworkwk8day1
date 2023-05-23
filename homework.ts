// Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values

import { EnumType } from "typescript"

// ```
// let student1 = {
//     id: 'GMK435&g62L00',
//     name: 'John Smith',
//     age: 24,
//     isTired: true,
//     projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
//     pet: 'dog'
// }

// let student2= {
//     id: '6KGS%54GmlY76',
//     name: 'Jenny Hawthorne',
//     age: 28,
//     isTired: false,
//     projectsCompleted:["HTML Portfolio"],
// }

// let student3 = {
//     id: '6KGS%54GmlY76',
//     name: 'Neo',
//     age: 57,
//     isTired: true,
//     projectsCompleted:["Matrix","Biological Interface Program"],
//     pet:'cat'
// }
// ```

type CTStudent = {
    readonly id: string,
    name: string,
    age: number,
    isTired: boolean,
    projectsCompleted: string[],
    pet?: string
}

const student1 : CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

const student2 : CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

const student3 : CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}

// Question #2
// Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  If their is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annoate the return type of the function
// //
// //Given
type Fruit={
    color:string,
    shape:string
} | null;
​
let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit=null
// ​
// //Answer

function objectModel(pam: Fruit) {
    if (pam) {
        console.log(`${pam.color}`)
    } else {
    console.log('you already ate my fruit')
    }
}

objectModel(apple)

// Create a Union Type named Ebook for Book and DigitalBook and create one instance of the new union type

// //Given 
type Book={
    isbn:string,
    title:string,
    author:string
}
​
type DigitalBook={
    fileType:string,
}
// ​
// //Answer

type Ebook = Book | DigitalBook
const homoSapien : Ebook = {
    title: 'Homo Sapiens',
    author: 'Yuval Noah Harari'
}

// Create a Type to represent a ShopItem that will fit the following rules. You may need to create additional structures

// All ShopItems have an numeric id that can not be edited
// All ShopItems have a price
// All ShopItems have a description
// Some ShopItems have a color
// All ShopItems have a Category represented with an enum
// Possible Categories are Shirts Shoes Pants Hats
// All ShopItems have a list of keywords used to help search for the ShopItem
// For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]
// After Creating the ShopItem type create 3 items using this type

type ShopItem = {
    readonly id : number,
    price: number,
    description: string,
    color?: string,
    keywords: string[],

}

enum Category {
    Shirts,
    Shoes,
    Pants,
    Hats
}

const ironManTshirt : ShopItem = {
    id : 1,
    price : 20,
    description : 'This tshirt was sold by iran man himself',
    color: 'red',
    keywords: ['Marvel', 'IronMan', 'Civil War']
}
const animeTshirt : ShopItem = {
    id : 2,
    price : 20,
    description : 'This tshirt is license purchase from Halal food',
    color: 'blue',
    keywords: ['anime', 'shonen', 'other']
}
const tomAndJerry : ShopItem = {
    id : 1,
    price : 20,
    description : 'This tshirt was almost torn by a cat and a mouse',
    color: 'red',
    keywords: ['cartoon', 'cat', 'mouse']
}