var Promise = require('bluebird');



var fn = require("fs").readFile;
 //函数的 length 得到的是形参个数
 if (fn.length > 1){
 	//http://www.tuicool.com/articles/VnYrem
 	//console.log(fn[0]); //得不到的
 	//http://www.tuicool.com/articles/jIjQn2Q
    //http://bluebirdjs.com/docs/api/promise.promisify.html
    //Returns a function that will wrap the given nodeFunction. Instead of taking a callback, the returned function will return a promise whose fate is decided by the callback behavior of the given node function.
    fn = Promise.promisify(fn);
  } else {
  	//Returns a new function that wraps the given function fn. The new function will always return a promise that is fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
	//This method is convenient when a function can sometimes return synchronously or throw synchronously.
    fn = Promise.method(fn);
  }