var Promise = require('bluebird');

var call = function(name, args, callback){
  if (!callback && typeof args === 'function'){
    callback = args;
    args = {};
  }
 
  return Promise.all([
      (function(){
         console.log('1');//这里会打印
         //var i = '5';
      })(),
      (function(){
         //console.log('2');//这里不会打印

         //throw '2';
      })(),
      (function(){
         console.log('6');//这里不会打印
      })()
    ]).then(function(){//数组里的都通过才会打印3
    console.log('3');
  }).nodeify(callback);
};

 call('new', '2',function(e){
  console.log('nodeify');
 	console.log(e);
 	console.log('callback'); //进入reject会调用callback

  //throw ;
 }).then(function() {
      	console.log('then');
    }).catch(function(err) {
      console.log('end');
      console.log(err);//进入reject会调用
 });

console.log('start');

输出如下：
```
1
6
start
3
nodeify
null
callback
then
```