// alert("Hello, World!");

/*
document.write("Hello, World!");
*/

// 변수 선언
var num1;
var msg1;

// 값 할당 (대입)
num1 = 12345;
msg1 = "Hello, JavaScript!"

// 변수 선언 및 값 할당 (초기화)
var num2 = 3.14;
var msg2 = "Hello, World!";

// DOM 에 write
document.write(num1 + "<br>");
document.write("<h2>" + msg1 + "</h2>");
document.write(num2 + "<br>");
// Template Literal
document.write(`<h2>${msg2}</h2>`);

// boolean 값의 활용
var isMan = true;
document.write(`<h2>${isMan}</h2>`);

// 의도적으로 null 값 대입
var nullVal = null;

// 의도적으로 undefined 값 대입 (선언만 된 상태)
var undefVal = undefined;

document.write(`
    <p>nullVal: ${nullVal}<br>
    undefVal: ${undefVal}</p>
    `);

// 사칙 연산자
var opNum = 100 % 30;
document.write(`
    <h3>나머지 연산</h3>
    <p>100 % 30 = ${opNum}</p>
    `);