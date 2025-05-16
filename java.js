
let book = {
  title: "javaScript Guide",
  author: "SolDev",
  yearPublished: 2025,
  isAvailable: true,
  borrowBook: function() {
    this.isAvailable = false;
    console.log(`"${this.title}" has been borrowed.`);
  },
}

console.log(book.isAvailable);
book.borrowBook();
console.log(book.isAvailable);


let person = {
  name: "james",
  age: 20,
  city: "Enugu",
  introduce: function() {
    console.log(`My name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}.`);
  }
};

var firstName = 'man';
console.log(firstName);

var lastName = 'woman';
console.log(lastName);

var age = 30;
console.log(age);

dirverLicense = true
console.log(dirverLicense)

var year = 1991;
console.log(typeof year); // logs "number"

var johnAge = 10;
var markAge = 10;
var averageAge = (markAge + markAge) / 2;
console.log ("The average age is : " + averageAge);


var sol = 10;
var dev = 20;

console.log('sol < dev:', sol < dev);
console.log('sol > dev:', sol > dev);
console.log('sol !== dev:', sol !== dev);
console.log('sol === dev:', sol === dev);
console.log('sol <= dev:', sol <= dev);
console.log('sol >= dev:', sol >= dev);

// BMI calculation for Mark and John
function calculateBMI(weight, height) {
    return weight / (height * height);
}

let johnWeight = 92;
let johnHeight = 1.69;
let markWeight = 78;
let markHeight = 1.69;


 let johnBMI = calculateBMI(johnWeight, johnHeight);
 let markBMI = calculateBMI(markWeight, markHeight);

 console.log ('John BMI is : ' + johnBMI.toFixed(2));