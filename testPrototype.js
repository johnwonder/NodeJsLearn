function hello(x) {
	return "Hello" +x;
}

function goodbye(x) {
	return "goodbye" +x;
}

function double() {
	var that = this;

	return function(x) {
		console.log(that(x) + ", " + that(x));
	};
}

hello.double = double;

goodbye.double = double;


goodbye.double()('joe')