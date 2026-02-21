const div = document.querySelector("div");
const image = document.querySelector("img");
const btn = document.querySelector("button");
const UrlList = ["./image/p1.webp","./image/p2.jpg","./image/p3.jpeg","./image/p4.jpeg"
   ,"./image/p5.jpeg", "./image/p6.jpeg"
];
btn.addEventListener("click",chenger);
let counter = 0;
function chenger(){
    if(counter< UrlList.length-1){
        counter++
    }
    else{
        counter = 0;
    }
    image.setAttribute("src",UrlList[counter])
}

