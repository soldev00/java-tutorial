
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

var job =
console.log(job);