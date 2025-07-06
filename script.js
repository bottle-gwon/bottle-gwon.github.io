import { about, study, htmlCss, javaScript } from "./page.js";
const draw = document.querySelector(".list").children;
const dashBtn = document.querySelector(".dash-board").children;

const key = {
    1: about,
    2: htmlCss,
    3: javaScript,
    4: study
}

//처음 실행되면 about 페이지
// window.onload = () =>{
//     draw[0].innerHTML = about.title;
//     draw[1].innerHTML = about.text[0];
// }

for(let i =1; i< dashBtn.length; i++){
    dashBtn[i].addEventListener("click", ()=>{
        draw[0].innerHTML = key[i].title;
        draw[1].innerHTML = ""
        key[i].text.map((eliment)=>{
            draw[1].innerHTML +=  eliment;
        })

    })
}