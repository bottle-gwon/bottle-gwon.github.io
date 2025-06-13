const displayDigit = document.querySelector("#calDigit"); //디스플레이 숫자
const displaySymbol = document.querySelector("#calSymbol");//디스플레이 부호

const one = document.querySelector("#num1");



//숫자 임시 저장 배열
const digit1 = [];
const digit2 = [];

/** 숫자 추가 함수
 * 
 * @param {숫자만} number 
 */

const addDigit = function(number){
    if(typeof number === 'number'){
        
        // 숫자 추가 알고리즘//
        const tmp = document.createElement("p")
        if(displayDigit.textContent === 0){

            

        }else{

        }

    }else{
        // alert("비정상적인 입력");
        console.log("비정상적인 입력");
    }
}



one.addEventListener('click', function(){
    console.log(displayDigit.textContent.length)
})

