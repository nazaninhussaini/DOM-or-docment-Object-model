const icon = document.querySelector( "div.one > div >i");
const button = document.querySelector("div.one >div>button");
button.addEventListener("click",()=>{
    icon.classList.toggle()
})