import { about, study, htmlCss, javaScript } from "./page.js";
const draw = document.querySelector(".list").children;
const dashBtn = document.querySelector(".dash-board").children;

const key = {
    1: about,
    2: htmlCss,
    3: javaScript,
    4: study
}

console.log(draw)

console.log(about)

console.log(dashBtn[1]);

//처음 실행되면 about 페이지
window.onload = () =>{
    draw[0].innerHTML = about.title;
    draw[1].innerHTML = about.text;
}

for(let i =1; i< dashBtn.length; i++){
    dashBtn[i].addEventListener("click", ()=>{
        draw[0].innerHTML = key[i].title;
        draw[1].innerHTML = key[i].text;
    })
}

// for (const [index, btn] of dashBtn){
//     if(btn.className === 'dash-board-btn'){
//         btn.addEventListener("click", ()=>{
//             draw[0].textContent = key[index].title;
//             console.log(key[index].title)
//         })
//     }
// }