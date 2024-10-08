let danNum = prompt("출력 할 구구단의 단 숫자를 입력하세요.");

let i = 1;
do {
    document.write(`
        <div style='display: flex; justify-content: space-between; align-items: center; width: 100px; padding: 4px 12px'>
            <span>${danNum} * ${i}</span>
            <span>= ${danNum * i}</span>
        </div>`);
    
    i++;
} while (i <= 9);