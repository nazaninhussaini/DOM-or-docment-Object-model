// import {list} from "./app.js"
// import greeting from "./app.js"

// list.map(person =>{
//     console.log(person.name)
// })
// greeting()
const person = {
    name: "Nazanin",
    lastName: "Hussaini",
    age: 18,
    score : 98
}
const{name , lastName , age,score} = person



let Name = "Nazanin";
Name.includes("z") && console.log("Hi theer");

function User (name,lastName){
    this.name = name;
    this.lastName = lastName;
}
const user1 = new User("Mohammad","Hussaini");
const user2 = new User("Mohammad Ali","Mohammadi");
const user3 = new User("Mohammad Javad","Khaliqi");
User.prototype.field = "Computer Science"