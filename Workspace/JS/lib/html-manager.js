class HTMLManager {
    constructor() {
        this.openedTags = [];
        this.lastOpenedTag = null;
    }

    toStringFromProps(props) {
        return props.map(elem => {
            return elem.name + "=\"" + elem.value.toString() + "\"";
        });
    }

    print(tag, contents = "", props = null) {
        if (props == null) {
            document.write(`<${tag}>${contents}</${tag}>`);
        }
        else {
            document.write(`<${tag} ${this.toStringFromProps(props)}>${contents}</${tag}>`);
        }
    }

    println(tag, contents = "", props = null) {
        this.print(tag, contents, props);
        document.write(`<br>`);
    }

    printSingle(tag, props = null) {
        if (props == null) {
            document.writeln(`<${tag}>`);
        }
        else {
            document.writeln(`<${tag} ${this.toStringFromProps(props)}>`);
        }
    }

    openTag(tag, props = null)
    {
        this.openedTags.push(tag);
        this.lastOpenedTag = tag;
        console.log(`Tag opened: ${tag}`);
        console.log("[DEBUG][TAG OPEN] " + this.openedTags.toString());

        this.printSingle(tag, props);
    }

    closeTag()
    {
        let popTag = this.openedTags.pop();
        if (popTag == undefined)
        {
            console.log(`There's no tag to close`);
            return;
        }

        console.log(`Tag closed: ${popTag}`);
        console.log("[DEBUG][TAG CLOSE] " + this.openedTags.toString());
        let len = this.openedTags.length;
        if (len == 0) {
            console.log(`All tags are closed`);
            this.lastOpenedTag = null;
        }
        else {
            this.lastOpenedTag = this.openedTags[len - 1];
        }
        
        document.writeln(`</${popTag}>`);
    }
}

const manager = new HTMLManager();

const tag = {
    a: "a",
    abbr: "abbr",
    acronym: "acronym",
    address: "address",
    applet: "applet",
    area: "area",
    article: "article",
    aside: "aside",
    audio: "audio",
    b: "b",
    base: "base",
    basefont: "basefont",
    bdi: "bdi",
    bdo: "bdo",
    big: "big",
    blockquote: "blockquote",
    body: "body",
    br: "br",
    button: "button",
    canvas: "canvas",
    caption: "caption",
    center: "center",
    cite: "cite",
    code: "code",
    col: "col",
    colgroup: "colgroup",
    data: "data",
    datalist: "datalist",
    dd: "dd",
    del: "del",
    details: "details",
    dfn: "dfn",
    dialog: "dialog",
    dir: "dir",
    div: "div",
    dl: "dl",
    dt: "dt",
    em: "em",
    embed: "embed",
    fieldset: "fieldset",
    figcaption: "figcaption",
    figure: "figure",
    font: "font",
    footer: "footer",
    form: "form",
    frame: "frame",
    frameset: "frameset",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    head: "head",
    header: "header",
    hgroup: "hgroup",
    hr: "hr",
    html: "html",
    i: "i",
    iframe: "iframe",
    img: "img",
    input: "input",
    ins: "ins",
    kbd: "kbd",
    label: "label",
    legend: "legend",
    li: "li",
    link: "link",
    main: "main",
    map: "map",
    mark: "mark",
    menu: "menu",
    meta: "meta",
    meter: "meter",
    nav: "nav",
    noframes: "noframes",
    noscript: "noscript",
    object: "object",
    ol: "ol",
    optgroup: "optgroup",
    option: "option",
    output: "output",
    p: "p",
    param: "param",
    picture: "picture",
    pre: "pre",
    progress: "progress",
    q: "q",
    rp: "rp",
    rt: "rt",
    ruby: "ruby",
    s: "s",
    samp: "samp",
    script: "script",
    search: "search",
    section: "section",
    select: "select",
    small: "small",
    source: "source",
    span: "span",
    strike: "strike",
    strong: "strong",
    style: "style",
    sub: "sub",
    summary: "summary",
    sup: "sup",
    svg: "svg",
    table: "table",
    tbody: "tbody",
    td: "td",
    template: "template",
    textarea: "textarea",
    tfoot: "tfoot",
    th: "th",
    thead: "thead",
    time: "time",
    title: "title",
    tr: "tr",
    track: "track",
    tt: "tt",
    u: "u",
    ul: "ul",
    var: "var",
    video: "video",
    wbr: "wbr"
};