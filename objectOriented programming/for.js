const continer = document.getElementById("continer");
async function getDeta(){
    const info = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await info.json();
    for(let user of response){
        const elementForNames = document.createElement("h1"); 
        const elementForEmails = document.createElement("p"); 
        const elementForPhone= document.createElement("a");
        elementForPhone.setAttribute("href",`tel:${user.phone}`);
        elementForNames.textContent = user.name;
        elementForEmails.textContent = user.email;
        elementForPhone.textContent = user.phone;
        const div = document.createElement("div");
        div.append(elementForNames,elementForEmails,elementForPhone);
        div.style.cssText = "width:70%; margin:10px auto ; border:1px solid black; box-shado: 2px 2px 10px black; padding:10px; ";
        continer.appendChild(div);
    }
}
getDeta();