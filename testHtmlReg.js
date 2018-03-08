var HTML_REGEXP = /<|&#?\w+;/;

console.log(HTML_REGEXP.test("<ass"));

console.log(HTML_REGEXP.test("&ss;"));


var SINGLE_TAG_REGEXP = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;


console.log(SINGLE_TAG_REGEXP.test("<ss  /><\\ss>"));//输出false