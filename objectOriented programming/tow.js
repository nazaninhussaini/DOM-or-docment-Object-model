class Human{
    name;
    email;
    age;
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
    getAge (){
        console.log(`${this.name} is ${this.age} years old`)
    }
    talk(){
        console.log(this.name + "can talk");
    }
}
const person1 = new Human("Nazanin",18,"banonazaninhussaini@gmail.com");

class Weather{
    constructor(degree){
        this.degree = degree;
    }
    celciusToFarnhit(){
        const convert = this.degree *9/5 +32
        return convert;
    }
}
const convertWeather = new Weather(21);
console.log(convertWeather.celciusToFarnhit());


class Animal{
    name;
    age;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    move(){
        return this.name +" can walk"
    }
}
class Cat extends Animal{
    constructor(name,age,isPet){
        this.name = name;
        this.age = age;
        this.isPet = isPet;
    }
    move(){
        return `${this.name} move with 4 legs`
    }
}
class person extends Animal{
    constructor(name, age,lastName,isPet){
        this.name = name;
        this.age = age;
        this.lastName = lastName;
        this.isPet = isPet;
    }
    move(){
        return `${this.name} walk with 2 legs`
    }
}
const cat = new Cat("Cat" ,3 ,true)
console.log(cat.move());
const preson2 = new Human("Farid",20,"Hussaini");
console.log(preson2.move());