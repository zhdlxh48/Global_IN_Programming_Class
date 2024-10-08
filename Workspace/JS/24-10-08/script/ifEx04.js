var point = -1;
var grade = "N";

do {
    point = prompt("점수를 입력하세요");
    if (isNaN(parseInt(point)))
    {
        alert("다시 입력하세요.");
    }
} while (isNaN(parseInt(point)));

if (90 < point && point <= 100) {
    grade = "A";
} else if (80 < point && point <= 90) {
    grade = "B";
} else if (70 < point && point <= 80) {
    grade = "C";
} else if (60 < point && point <= 70) {
    grade = "D";
} else {
    grade = "F";
}

var msg = `${point}점으로 ${grade}등급 입니다.`;
manager.print(tag.h1, msg);