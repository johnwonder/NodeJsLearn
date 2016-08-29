function* run() {
console.log("step in child generator")
var b = yield 'running';
console.log(b);
console.log("step out child generator")
return 'ss';
}


var runGenerator = run();
function* start(){
	var a = yield 'start';
	console.log(a);//输入为undefined
	var b = yield *runGenerator;
	console.log(b);
	var c = yield 'end';
	console.log(c);
	return 'over';
}

console.log(start.constructor.name);

var it = start();
console.log(it.next());//等待 start返回  
console.log(it.next());//等待runGenerator返回
console.log(it.next(333));//等待running返回
console.log(it.next(44));