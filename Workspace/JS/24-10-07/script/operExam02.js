document.write("<h1>문자열 연산</h1><hr>");

// 문자열 끼리 연산
var msg1 = "Hello, ";
var msg2 = "World!";
var msg3 = msg1 + msg2;
document.write("<h2>" + msg3 + "</h2>");

// 문자열과 숫자 연산
var msg = "Hello";
var num = 1234;
var result = msg + num;
document.write("<h2>" + result + "</h2>");

document.write("<table>");
for (let i = 1; i <= 9; i++) {
    document.write("<tr>");
    for (let j = 1; j <= 9; j++) {
        document.write(`
            <td style='min-width: 100px; max-width: 120px;'>
                <div style='display: flex; justify-content: space-between; align-items: center; padding: 4px 12px'>
                    <span>${i} * ${j}</span>
                    <span>= ${i * j}</span>
                </div>
            </td>`);
    }
    document.write("</tr>")
}
document.write("</table>");