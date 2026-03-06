class Humen {
    setName(name){
        if(isNaN(name) && name.length >= 3){
            this.name = name;
        }
        else{
            console.log("the name is inualid");
        }
    }
    getName(){
        return this.name;
    }
    setAge(age){
        if(!isNaN(age) && age>=1){
            this.age = age;
        }
        else{
            console.log("the age not a number");
        }
    }
    getAge(){
        return this.age;
    }
    setEmail(email){
        if(email.includes("@") && isNaN(email)){
            this.email = email
        }
    }
    getEmail (){
        return this.email;
    }
}
const Nazanin = new Humen();
Nazanin.setName("Nazanin");
console.log(Nazanin.getName());
Nazanin.setEmail("Nazaninhussaini@gmail.com");
console.log(Nazanin.getEmail());
Nazanin.setAge(18);
console.log(Nazanin.getAge());


class Animal {
    name; 
    age;
    wieght;
    constructor(name,age,wieght){
        this.name = name;
        this.age = age;
        this.wieght = wieght;
    }
    eat(){
        console.log (`${this.name} can eat`);
    }
    sound(){
        console.log(`${this.name} can sound`);
    }
}
class Human extends Animal{
    lastName ; 
    constructor(name,age,wieght,lastName){
        super(Animal)
        this.name = name;
        this.age = age;
        this.wieght = wieght;
        this.lastName = lastName;
    }
    think(){
        console.log(`${this.name} can think`);
    }
    static work(){
        console.log(`Human can work`);
    }
}
const person2 = new Human("Nazanin" , 18 , 48,"Hussini");
person2.eat();
person2.sound();
person2.think();