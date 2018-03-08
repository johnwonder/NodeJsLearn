function makeFunc() {

	var x =  function() { 


    };
 	console.log(this);
    //console.log(this.double());

    return x;
}
function protofunc() { 

}
protofunc.double = function() {

	console.log("ss")
}

makeFunc.__proto__ = protofunc;
//Object.setPrototypeOf(makeFunc, protofunc);
//makeFunc.prototype = protofunc;
// var x =   makeFunc();

// x.double();

makeFunc.double();