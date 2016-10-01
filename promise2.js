var Promise = require('bluebird');

var call = function(name, args, callback){
  if (!callback && typeof args === 'function'){
    callback = args;
    args = {};
  }

 return new Promise(function(resolve, reject){
    var c = 1;

    if (!c){
       console.log('done');
    } else {
    	//进入reject
      reject(new Error('Console `` has not been registered yet!'));
    }
  }).nodeify(callback);
};

 call('new', '2',function(e){
 	console.log(e);
 	console.log('callback'); //进入reject会调用callback
 }).then(function() {
      	console.log('then');
    }).catch(function(err) {
      console.log(err);//进入reject会调用
 });