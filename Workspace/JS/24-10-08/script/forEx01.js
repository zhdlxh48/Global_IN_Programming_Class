let sum = 0;
let from = 1, to = 1000

/**
 * for (초기값; 조건식; 증감식)
 * {
 *   반복 수행문
 * }
 */

for (let i = from; i <= to; i++) {
    sum += i;
}

manager.print(tag.h1, `${from}부터 ${to}까지 합계: ${sum}`);