/*
Make a function “Person” which you will be using as a class,
This must have the basic properties:
1. First Name
2. Last Name
3. Email
4. Password
5. getFullName, a function which returns full name
6. Add a prototype getFullName

*/

function Person(firstName, lastName, email, password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  // this.getFullName = function () {
  //   return firstName + ' ' + lastName;
  // };
}

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
const person1 = new Person("Akshay", "saini", "ls@gmail.com", "123");
const person2 = new Person("Lakshay", "saini", "ls@gmail.com", "123");
// console.log(person1.__proto__.__proto__);
console.log(person2);
