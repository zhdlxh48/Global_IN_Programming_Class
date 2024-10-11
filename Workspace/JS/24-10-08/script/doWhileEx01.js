/**
 * 초기값
 * do {
 *   반복 수행식
 *   증감식
 * } while (조건식)
 */

let from = 1, to = 10;

let i = from;
let sum = 0;

do {
    sum += i++;
} while (i <= to);


manager.print(tag.h1, `${from}부터 ${to}까지 합계: ${sum}`);