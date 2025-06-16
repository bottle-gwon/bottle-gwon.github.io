const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42";
const apiAllBreads = "https://dog.ceo/api/breeds/list/all";
const request1 = new XMLHttpRequest();      // 리셋 하려면 좋은 생각이 아니다.
const request2 = new XMLHttpRequest();


const header = document.getElementById("header");
const main = document.getElementById("main");
const input = document.getElementById("filter-text");
const button = document.getElementById("filter-button");
const select = document.getElementById("filter-select");
const more = document.getElementById("more");
const tothetop = document.getElementById("tothetop");
const resetBtn = document.getElementById("resetBtn");
const currentDogs = [];



const displayDogs = function(item){
    const dogImgDiv = document.createElement("div");
    dogImgDiv.classList.add("flex-item");
    dogImgDiv.innerHTML = `
        <img src=${item}>
    `;
    main.appendChild(dogImgDiv);
}

window.addEventListener("load",function(){

    //강아지 사진
    request1.open("get", apiRandomDogs);
    request1.addEventListener("load", function(){
        const response =JSON.parse(request1.response)
        response.message.forEach(item => {
            currentDogs.push(item);

            displayDogs(item);
        });
    })
    request1.send();

    //셀렉트에 견종 정보 추가 견종이 키값으로 되어있다
    request2.open("get", apiAllBreads)
    request2.addEventListener("load", function(){
        const response = JSON.parse(request2.response)
        Object.keys(response.message).forEach(function(item){
            const option = document.createElement("option");
            option.textContent = item;
            option.value = item;
            select.appendChild(option);
        })
    })
    request2.send()
},{once: true})


button.addEventListener("click", function(){
    main.innerHTML = ""
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(input.value) !== -1;
    });

    input.value = "";

    filteredDogs.forEach(function(item) {
            displayDogs(item);
        
        })
})


select.addEventListener("change", function(){
    main.innerHTML = ""
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(select.value) !== -1;
    });


    filteredDogs.forEach(function(item) {
            displayDogs(item);
        })
})


more.addEventListener("click", function(){

    request1.open("get", apiRandomDogs)

    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item);
            displayDogs(item);
        })
    })

    request1.send();
})

tothetop.addEventListener("click", function(){
    //scrollTo로 주어진 위치로 이동 할 수 있다.
    window.scrollTo({top : 0})
})


//reset   XMLHttpsREquest는 쓸수록 내부에 메시지가 쌓여서 리셋하려면 새로 만들어야한다.
resetBtn.addEventListener("click", function(){
    main.innerHTML = "";
    
    const reqGet = new XMLHttpRequest();
    currentDogs.splice(0,currentDogs.length);


    reqGet.open("get", apiRandomDogs)

    reqGet.addEventListener("load", function(){
        const response = JSON.parse(reqGet.response)
        response.message.forEach(item => {
            currentDogs.push(item);
            displayDogs(item);
        });
    })
    reqGet.send();
})







/*async/await 마이그레이션 해보기 */


