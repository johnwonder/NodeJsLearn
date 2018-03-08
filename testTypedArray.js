var TYPED_ARRAY_REGEXP = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/;


function isNumber(value) {return typeof value === 'number';}

function isTypedArray(value) {
  return value && isNumber(value.length) && TYPED_ARRAY_REGEXP.test(toString.call(value));
}

//http://blog.csdn.net/cuixiping/article/details/42270561
//对于负数来说，由于负数的二进制存储形式是补码形式的，其转换后得到的值与输入值的联系就不直观了。
//－23，二进制是11101001即得233 （23的二进制是00010111，它的补码就是11101001）

//http://www.360doc.com/content/12/0801/17/6828497_227700914.shtml
var _typedArray= new Uint8Array([-23]);

console.log(isTypedArray(_typedArray));