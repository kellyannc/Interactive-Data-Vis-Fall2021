// console.log('hello world');

// //Strings//
// const FirstName = "Kelly"
// const neighborhood = "Great Neck"
// console.log("My First Name:", FirstName, "My Neighborhood:", neighborhood)

// // numbers //
// const FavNumber = 13;
// console.log(FavNumber)

// // Boolean //
// const cool = true;

// if (cool) console.log("right on")

// // Arrays //
// const myArray = [1, 2, 3, 4] //set collection of things //
// const mixed = [1, "thing", 2]
// console.log(mixed)
// console.log(myArray)

// const myObject = {
//     key: "value",
//     other: "value2"
// } //dictionary
// console.log(myObject)

// const myObject2 = {
//     name: "Kelly",
//     other: "11024"
// } //dictionary
// console.log(myObject2)

// var apple = 0
// let boat = 1
// const car = 2
// console.log('before tests;  ',apple, boat, car)

// //redeclaration testing
// var apple = 'a'
// console.log('after declaration:', apple, boat, car)

// //reassignment testing
// apple = 'a'
// boat = 'b'
// console.log('after reassigments', apple, boat, car)

const array = ["one", "two", "three"]
console.log(array)

const Newarray = array.map(d => d + " Thing")
const newArray = array.forEach(d => console.log(d))
console.log(Newarray)

array.filter(d => d === "two")
const Newfilter = array.filter(d => d === "two")
console.log(Newfilter)

array.length
const length = array.length
console.log(length)
 

// const filtered = array.filter(d => d === 2 || d === 3)
// console.log(filtered :> ', filtered');

const object = {
    name: 'Kelly',
    Zip: 11024,
    colors: ['yellow', 'mint', 'lavender']
}

const key = Object.keys(object)
const values = Object.values(object)
const entries = Object.entries(object)
console.log (object)
console.log('----')
console.log (key)
console.log('----')
console.log (values)
console.log('----')
console.log (entries)

// const label = document.getElementById("name-label")
// const input = document.getElementById("name-input")
// const submit = document.getElementById("name-submit")

// function updateName() {
//     const username = document.getElementById("name-input").value
// //    window.alert("Hello " + document.getElementById("name-input").value + "welcome ot class")
// window.alert(`Hello ${username}, welcome to class`)
// document.getElementById("name-label").innerText = `Your name is ${username}. Change it here:`
// // label.innerText = `Your name is ${username}. Change it here:`
// document.getElementById("name-submit").innerText = "Change"
// // submit.innerText = "Change"
// }

// let counterlabel = document.getElementById("counter")
// let number = document.getElementById(number-input)
// let submit = document.getElementById(counter-button)

// function updateCounter() {

// }

var count=0

document.getElementById("Counter-button").onclick=function(){
    count=count+1;
    this.innerHTML=count}

document.getElementById("reset").onclick=function(){
    count=0
    document.getElementById("Counter-button").innerHTML=count;
}
