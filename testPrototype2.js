var defineProps = Object.defineProperties;


var styles  = (function()  {

	console.log("styles");

	return {

		styles1 : function(){

			console.log("styles1")
		}
	};
})();

var o   = {};
var proto = Object.defineProperties(o, {

	'age': {
                value: 24,
                writable: true,
                enumerable: true,
                configurable: true
            }
});

Object.defineProperty(o, 'sex', {
            get :function (){
            	  return {

	            	  	value: 'male',
		            writable: false,
		            enumerable: false,
		            configurable: false
            	  }
            }
        });

console.log(o.sex.writable)

var proto1 = defineProps(function chalk1() {}, {

	'ss':  {
				get: function () {
				return  "ssssss";
				},
				set:function(){

					console.log("set trigger")
				}

		}
});

console.log(proto1.ss);

proto1.ss= "testSet"; //触发 set方法

function build(_styles) {
	var builder = function () {
	
	};
 
	// __proto__ is used because we must return a function, but there is
	// no way to create a function with a different prototype.
	/* eslint-disable no-proto */
	builder.__proto__ = proto1;

	return builder;
}

var _b = build();
console.log(_b.ss);

function prototype() { }
prototype.double = function() { console.log("double"); };

function myfunc() {

	var builder = function(){

	};
//Object.setPrototypeOf(builder, prototype);
	return builder;
 }
Object.setPrototypeOf(myfunc, prototype);

myfunc.double();


//var _builder = myfunc();
//console.log(_builder.double());