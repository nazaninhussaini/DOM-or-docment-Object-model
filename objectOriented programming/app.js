class Mobile {
constructor(color,model,brand,RAM){
    this.name = "mobile";
    this.color = color;
    this.model = model;
    this.brand = brand;
    this.RAM = RAM;
}
}
const mobile1 = new Mobile('black',"A12","Sumsung","5GB");
const mobile2 = new Mobile('With',"14 Pro","Iphon","8GB");
const mobile3 = new Mobile('Ston',"S22","S","16GB");

class User {
    constructor(name,email,eag){
        this.name = name;
        this.email = email;
        this.eag = eag 
    }
}
const user1 = new User ('Nazanin','Nazaninhussaini@gmail.com',18);
const user2 = new User ('Oumer','Oumer@gmail.com',23);
const user3 = new User ('Hamid','Hamid@gmail.com',27);