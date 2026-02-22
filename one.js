const elements = document.getElementsByClassName("a");
// console.log(elements);
// elements[0].innerHTML = "Hi";
// elements[0].outerHTML = "<p>How are you</p>";
// const old = document.querySelector("section > h1");
// elements[1].replaceChild(p,old);
// elements[1].replaceWith(p);
const p = document.createElement("p");
p.textContent = "Good afternoon teacher";
const h1 = document.createElement("h1");
h1.innerHTML = "In the name of Allah";
elements[1].append(p);
const button = document.createElement("button");
button.textContent = "change the elements";
button.addEventListener("click",()=>{
    // p.replaceWith(h1);
    // p.outerHTML = "<span>In the name of Allah</span>";
    elements[1].replaceChild("h1,p");
    // elements[1].classList.toggle("h1 , p")
}) 
elements[1].append(button)



