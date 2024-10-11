let point = -1;
let grade = "N";

do {
    point = parseInt(prompt("점수를 입력하세요"));
    if (isNaN(point))
    {
        alert("다시 입력하세요.");
    }
} while (isNaN(point));

switch (Math.floor(point / 10)) {
    case 10:
    case 9:
        grade = "A";
        break;
    case 8:
        grade = "B";
        break;
    case 7:
        grade = "C";
        break;
    case 6:
        grade = "D";
        break;

    default:
        grade = "F";
        break;
}

var msg = `${point}점으로 ${grade}등급 입니다.`;
manager.print(tag.h1, msg);