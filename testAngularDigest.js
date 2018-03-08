var _ = require('lodash');

function initWatchVal() { }
function Scope() {
 this.$$watchers = [];
}

Scope.prototype.$watch = function(watchFn, listenerFn) {
   var watcher = {
   watchFn: watchFn,
   listenerFn: listenerFn,
   last: initWatchVal
   };
   this.$$watchers.push(watcher);
}

Scope.prototype.$digest = function() {
 var dirty;
 do {
 dirty = this.$$digestOnce();
 } while (dirty);
};


Scope.prototype.$$digestOnce = function() {
 var self = this;
 var newValue, oldValue, dirty;
 _.forEach(this.$$watchers, function(watcher) {
 newValue = watcher.watchFn(self);
 oldValue = watcher.last;
 if (newValue !== oldValue) {
 watcher.last = newValue;
 watcher.listenerFn(newValue,
 (oldValue === initWatchVal ? newValue : oldValue),self);
 dirty = true;
 }
 });
 return dirty;
}

var scope = new Scope();
//  scope.name = 'Jane';
// scope.$watch(
//  function(scope) { return scope.nameUpper; },
//  function(newValue, oldValue, scope) {
//  if (newValue) {
//  scope.initial = newValue.substring(0, 1) + '.';
//  }
//  }
//  );

// scope.$watch(
//  function(scope) { return scope.name; },
//  function(newValue, oldValue, scope) {
//  if (newValue) {
//  scope.nameUpper = newValue.toUpperCase();
//  }
//  }
//  );

//scope.$digest();

scope.array = _.range(100);
 var watchExecutions = 0;
 _.times(100, function(i) {
 scope.$watch(
 function(scope) {
 watchExecutions++;
 return scope.array[i];
 },
 function(newValue, oldValue, scope) {
 }
 );
 });

 scope.$digest();
 console.log(watchExecutions);
 scope.array[0] = 420;
 scope.$digest();
 console.log(watchExecutions);