let point = 75;

manager.print(tag.hr);

if (70 <= point && point <= 80) {
    if (point > 77) {
        manager.print(tag.h1, "C+ 입니다.");
    }
    else if (point < 74) {
        manager.print(tag.h1, "C- 입니다.");
    }
    else {
        manager.print(tag.h1, "C0 입니다.")
    }
}

manager.print(tag.hr);