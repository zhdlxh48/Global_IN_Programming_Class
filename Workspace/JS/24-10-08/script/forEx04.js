manager.openTag(tag.table);

for (let i = 1; i <= 9; i++) {
    manager.print(tag.h1, `${i}단`);
    manager.openTag(tag.div, {name: "style", value: `display: flex; flex-direction: column; align-items: left; padding: 0 0 0 50px`})
    for (let j = 1; j <= 9; j++) {
        manager.openTag(tag.div, [{name: "style", value: `display: flex; justify-content: space-between; align-items: center; width: 100px; padding: 4px 12px`}])
        manager.print(tag.span, `${i} * ${j}`);
        manager.print(tag.span, `= ${i * j}`);
        manager.closeTag();
    }
    manager.closeTag();
}

manager.closeTag();