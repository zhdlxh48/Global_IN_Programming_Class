let evenSum = 0, oddSum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        evenSum += i;
    }
    else
    {
        oddSum += i;
    }
}

manager.openTag(tag.table, [{name: "border", value: 1}]);

manager.openTag(tag.tr);

manager.print(tag.td, "짝수의 합계");
manager.print(tag.td, evenSum);

manager.closeTag();

manager.openTag(tag.tr);

manager.print(tag.td, "홀수의 합계");
manager.print(tag.td, oddSum);

manager.closeTag();

manager.closeTag();