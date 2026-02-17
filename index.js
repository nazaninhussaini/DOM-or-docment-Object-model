// const h1 = document.getElementsByTagName("h1");
// const div = document.querySelector("section + div");
const h1 =document.querySelectorAll("section h1");
for (let i= 0; i<h1.length ; i++){
    if(i%2 !== 0 ){
        h1[i].classList.add("h1Style")
    }
    else{
        h1[i].classList.add("meStyle")
    }
}

const p = document.querySelector("div p");

const divClass = document.getElementsByClassName("one");
const ulList = document.querySelectorAll("section li");
for (let li of ulList){
    li.classList.add("li")
}

            
             