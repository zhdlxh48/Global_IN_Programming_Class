import * as fs from "fs";
import * as path from "path";

const htmlPath = "./Workspace/HTML";
const jsPath = "./Workspace/JS";
const practicePath = "./Practices";

function getInfoArray(dir) {
    let dateInfoArr = [];
    const dateDirs = fs.readdirSync(dir, { withFileTypes: true });
    for (const dateDir of dateDirs) {
        let dateInfo = { date: dateDir.name, files: [] };
        let datePath = path.join(dir, dateDir.name);

        console.log("====================");
        console.log(`Searching "${dateInfo.date}" date from "${datePath}"`);
        console.log("====================");

        var htmlFiles = getHTMLFileArray(datePath);

        console.log("====================");
        console.log(`Found "${htmlFiles.length}" files`);
        if (htmlFiles.length == 0) {
            console.log(`Nothing found in "${datePath}" ...Skipping`);
            continue;
        }
        console.log("====================");

        dateInfo.files = htmlFiles;
        dateInfoArr = [...dateInfoArr, dateInfo];

        console.log("------------------------------");
    }

    console.log("====================");
    console.log(`Found "${dateInfoArr.length}" dates from "${dir}"`);
    console.log("====================");
    return dateInfoArr;
}

function getHTMLFileArray(dir) {
    let htmlFiles = [];
    const infoArr = fs.readdirSync(dir, { withFileTypes: true });
    for (const info of infoArr) {
        if (info.isDirectory()) {
            var subFiles = getHTMLFileArray(path.join(dir, info.name));
            if (subFiles.length > 0) {
                subFiles = subFiles.map(elem => path.join(info.name, elem))
                htmlFiles = [...htmlFiles, ...subFiles];
            }
        }

        if (info.name.endsWith(".html") && !info.name.endsWith(".page.html")) {
            console.log(`Add "${info.name}" file`);
            htmlFiles = [...htmlFiles, info.name];
        }
    }
    return htmlFiles;
}

function buildHtml(title, workspaceArray, practiceArray) {
    var header = '';
    var body = '';

    // concatenate header string
    header = `<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>${title}</title>\n`;

    // concatenate body string
    body += `<h1>글로벌 인 프로그래밍 HTML 클래스</h1>\n`;

    body += `<hr>\n`;
    body += `<h2>Links</h2>\n`;
    body += `<ul>\n`;
    body += `<li><a href="https://github.com/zhdlxh48/Global_IN_Programming_Class">Github</a></li>\n<li><a href="#workspace">수업 자료</a></li>\n<li><a href="#practice">과제</a></li>\n`;
    body += `</ul>\n`;

    body += `<hr>\n`;
    body += `<h2 id="workspace">수업 자료</h2>\n`;
    let workspaceList = '';
    workspaceList += "<ul>\n";
    workspaceList += workspaceArray.map((elem, i) => {
        return `
        <li>
        <h3>${elem.part}</h3>
        <ul>
        ${elem.dates.map((dateElem, i2) => {
            return `
            <li>
            <h4>${dateElem.date}</h4>
            <ul>
                ${dateElem.files.map((file, i3) => {
                return `
                <li>
                <a href="./Workspace/${elem.part}/${dateElem.date}/${file}">${file}</a>
                </li > `
            }).join('')}
            </ul>
            </li>`
        }).join('')}
        </ul>
        </li>`
    }).join('');
    workspaceList += "</ul>\n";
    body += workspaceList;

    body += `<hr>\n`;
    body += `<h2 id="practice">과제</h2>\n`;
    let practiceList = '';
    practiceList += "<ul>\n";
    practiceList += practiceArray.map((dateElem, i2) => {
        return `
        <li>
        <h4>${dateElem.date}</h4>
        <ul>
            ${dateElem.files.map((file, i3) => {
            return `
            <li>
            <a href="./Practices/${dateElem.date}/${file}">${file}</a>
            </li > `
        }).join('')}
        </ul>
        </li>`
    }).join('');
    practiceList += "</ul>\n";
    body += practiceList;

    return '<!DOCTYPE html>\n'
        + '<html lang="ko">\n<head>\n' + header + '</head>\n<body>\n' + body + '</body>\n</html>';
};

let htmlInfoArray = getInfoArray(htmlPath);
let jsInfoArray = getInfoArray(jsPath);
let practiceInfoArray = getInfoArray(practicePath);

var fileName = './index.html';
var stream = fs.createWriteStream(fileName);

stream.once('open', function (fd) {
    var html = buildHtml(
        "Main",
        [
            { part: "HTML", dates: htmlInfoArray },
            { part: "JS", dates: jsInfoArray }
        ],
        practiceInfoArray);

    stream.end(html);
});