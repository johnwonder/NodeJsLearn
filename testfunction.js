var ss= 1;

var makeAction = ( console.log("sa"),function (type) {
    
    return function (_ref) {
         console.log(_ref);
    };
});

console.log(ss);
console.log(makeAction('1')("ss"));