const displayDigit = document.querySelector("#calDigit"); //디스플레이 숫자
const displaySymbol = document.querySelector("#calSymbol");//디스플레이 부호

const one = document.querySelector("#num1");
const two = document.querySelector("#num2");
const three = document.querySelector("#num3");
const four = document.querySelector("#num4");
const five = document.querySelector("#num5");
const six = document.querySelector("#num6");
const seven = document.querySelector("#num7");
const eight = document.querySelector("#num8");
const nine = document.querySelector("#num9");
const zero = document.querySelector("#num0");
const dot = document.querySelector("#symbolDot");


//숫자 임시 저장 배열
let digit1;
let digit2;
let symbol;

/** 숫자 추가 함수
 * 
 * @param {숫자만} number 
 */

const addDigit = function(number){

    const tmp = document.createElement("p")
    tmp.id = 'calDigit';

    if(typeof number === 'number'){
        // 숫자 추가 알고리즘//
        
        if(displayDigit.textContent === '0'){
            tmp.textContent = number;
        }else{
            tmp.textContent = displayDigit.textContent;
            tmp.textContent += number.toString();
        }
        displayDigit.replaceChildren(tmp)

    }else if(number === '.'){
        //소수점 알고리즘//
        if(displayDigit.textContent ==='0' || displayDigit.textContent.indexOf('.') === -1){
            tmp.textContent = displayDigit.textContent;
            tmp.textContent += number;
            displayDigit.replaceChildren(tmp);
        }


    }else{
        // alert("비정상적인 입력");
        console.log("비정상적인 입력");
    }
}

/**
 * 
 * @param {기호추가} symbol 
 */
const addSymbol = function(symbol){
    const tmp = document.createElement("p")
    tmp.id = 'calSymbol';

    if(symbol ==='+' || symbol === '-'|| symbol === '*' || symbol === '/'){

    }else if(symbol === 'pm' && displayDigit.textContent !== '0'){
        const tmpDigit = document.createElement('p')
        tmp.id = 'calDigit'
        tmp.textContent = displayDigit.textContent;

        // displayDigit.textContent.indexOf('-') === -1?

    }
}




one.addEventListener('click', function(){
    console.log(typeof displayDigit.textContent)
    addDigit(1);
})


two.addEventListener('click', function(){
    addDigit(2);
} )

three.addEventListener('click', function(){
    addDigit(3);
})

four.addEventListener('click', function(){
    addDigit(4);
})

five.addEventListener('click', function(){
    addDigit(5);
})

six.addEventListener('click', function(){
    addDigit(6);
})

seven.addEventListener('click', function(){
    addDigit(7);
})

eight.addEventListener('click', function(){
    addDigit(8);
})

nine.addEventListener('click', function(){
    addDigit(9);
})

zero.addEventListener('click', function(){
    addDigit(0);
})

dot.addEventListener('click', function(){
    addDigit('.');
})
