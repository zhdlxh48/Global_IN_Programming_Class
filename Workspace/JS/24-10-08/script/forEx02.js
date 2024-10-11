let danNum = prompt("출력 할 구구단의 단 숫자를 입력하세요.");

for (let i = 1; i <= 9; i++) {
    document.write(`
        <div style='display: flex; justify-content: space-between; align-items: center; width: 100px; padding: 4px 12px'>
            <span>${danNum} * ${i}</span>
            <span>= ${danNum * i}</span>
        </div>`);
}

/*
manager.openTag(tag.table);

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

manager.closeTag();
*/