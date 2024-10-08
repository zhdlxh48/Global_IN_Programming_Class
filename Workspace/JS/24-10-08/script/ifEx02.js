var point = 75;

// AND(&&), 비트(&)
// 두 조건이 모두 참이어야 전체가 참
if (point > 70 && point <= 80) {
    writer.write("h1", "당신의 학점은 C 입니다.");
}

// OR
// 두 조건 중 하나라도 참이면 전체가 참
if (point <= 70 || point > 80) {
    writer.write("h1", "범위를 벗어났습니다.");
}