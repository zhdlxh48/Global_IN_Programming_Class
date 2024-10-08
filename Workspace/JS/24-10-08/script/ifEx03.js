var isKor = true;

if (isKor == true) {
    manager.print(tag.h1, "한국사람입니다.");
}
if (isKor == false) {
    manager.print(tag.h1, "한국사람이 아닙니다.");
}

// 값 자체가 참 (변수가 boolean 이고 값이 true)
if (isKor) {
    manager.print(tag.h1, "한국사람입니다.");
}
/* if (!isKor) */ else {
    manager.print(tag.h1, "한국사람이 아닙니다.");
}