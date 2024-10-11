/**
 * 초기값
 * while (조건식) {
 *   반복 수행식
 *   증감식
 * }
 */

let from = 1, to = 10;

let i = from;
let sum = 0;

while (i <= to) {
    sum += i++;
}

manager.print(tag.h1, `${from}부터 ${to}까지 합계: ${sum}`);