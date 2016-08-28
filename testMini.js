#!/usr/bin/env node

//node testMini.js help
var parseArgs = require('minimist')(process.argv.slice(2));//提取第二个 { _: [ 'help' ] }

console.log(process.argv.slice(2));//输出当前运行的命令，如[ 'E:\\nodejs\\node.exe', 'F:\\nodejs\\testMini.js', 'help' ]
console.log(parseArgs);