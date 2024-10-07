document.write(`
    <h1>복합 대입 연산자</h1>
    <hr>
    `);

var num = 100;
document.write(`<p>num => ${num}</p>`);

// 덧셈 단항연산자
num += 50; // num = num + 50
document.write(`<p>num => ${num}</p>`);

// 뺄셈 단항연산자
num -= 50; // num = num - 50
document.write(`<p>num => ${num}</p>`);

// 곱셈 단항연산자
num *= 50; // num = num * 50
document.write(`<p>num => ${num}</p>`);


// 나눗셈 단항연산자
num /= 50; // num = num / 50
document.write(`<p>num => ${num}</p>`);


// 나머지 단항연산자
num %= 50; // num = num % 50
document.write(`<p>num => ${num}</p>`);

