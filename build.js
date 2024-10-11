import * as fs from "fs";
import * as path from "path";

const wkspDirPath = "./Workspace";
const prtcDirPath = "./Practices";

function* getFileInfoRcsv(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            yield* getFileInfoRcsv(path.join(dir, file.name));
        } else {
            yield path.join(dir, file.name);
        }
    }
}

let wkspArr = [];
let prtcArr = [];

for (const filePath of getFileInfoRcsv(wkspDirPath)) {
    if (!filePath.endsWith(".html"))
        continue;
    if (filePath.endsWith(".page.html"))
        continue;

    let splitedPath = filePath.split("/");
    let part = splitedPath[1];
    let date = splitedPath[2];
    let name = splitedPath[splitedPath.length - 1];

    wkspArr = [...wkspArr, { part, date, name }];

}

for (const filePath of getFileInfoRcsv(prtcDirPath)) {
    if (!filePath.endsWith(".html"))
        continue;
    if (filePath.endsWith(".page.html"))
        continue;

    let splitedPath = filePath.split("/");
    let course = splitedPath[1];
    let name = splitedPath[splitedPath.length - 1];

    prtcArr = [...prtcArr, { course, name }];
}

wkspArr.forEach(elem => {
    console.log(`[${elem.part}][${elem.date}] ${elem.name}`);
});
prtcArr.forEach(elem => {
    console.log(`[${elem.course}] ${elem.name}`);
});

function buildHtml(title, wksp_arr, prtc_arr) {
    var header = '';
    var body = '';

    // concatenate header string
    header = `<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>${title}</title>\n`;

    // concatenate body string
    body += `<h1>글로벌 인 프로그래밍 HTML 클래스</h1>\n`;

    body += `<hr>\n`;
    body += `<h2>Links</h2>\n`;
    body += `<ul>\n`;
    body += `<li><a href="https://github.com/zhdlxh48/Global_IN_Programming_Class">Github</a></li>\n<li><a href="#workspace">수업 자료</a></li>\n<li><a href="#subject">과제</a></li>\n`;
    body += `</ul>\n`;

    body += `<hr>\n`;
    body += `<h2 id="workspace">수업 자료</h2>\n`;
    let wksp_list = '';
    wksp_list += "<ul>\n";
    wksp_list += wksp_arr.map((elem, i) => {
        return `<li><a href="./Workspace/${elem.part}/${elem.date}/${elem.name}">[${elem.part}][${elem.date}] ${elem.name}</a></li>\n`;
    }).join('');
    wksp_list += "</ul>\n";
    body += wksp_list;

    body += `<hr>\n`;
    body += `<h2 id="subject">과제</h2>\n`;
    let prtc_list = '';
    prtc_list += "<ul>\n";
    prtc_list += prtc_arr.map((elem, i) => {
        return `<li><a href="./Practices/${elem.course}/${elem.name}">[${elem.course}] ${elem.name}</a></li>\n`;
    }).join('');
    prtc_list += "</ul>\n";
    body += prtc_list;

    return '<!DOCTYPE html>\n'
        + '<html lang="ko">\n<head>\n' + header + '</head>\n<body>\n' + body + '</body>\n</html>';
};

var fileName = './index.html';
var stream = fs.createWriteStream(fileName);

stream.once('open', function (fd) {
    var html = buildHtml("Main", wkspArr, prtcArr);

    stream.end(html);
});