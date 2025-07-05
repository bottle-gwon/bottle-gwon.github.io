import { about, study, htmlCss, javaScript } from "./page.js";
const draw = document.querySelector(".list").children;

console.log(draw)

console.log(about)


//처음 실행되면 about 페이지
window.onload = () =>{
    draw[0].textContent = about.title;
    draw[1].innerHTML = about.text;
}