var abbrev = require('abbrev');

var store = {

	'new' : function(){},
	'deploy' : function(){},
	'publish': function(){}
};

// console.log(Object.keys(store));
//print array 
//[ 'new', 'deploy', 'publish' ]

var alias = abbrev(Object.keys(store));

//console.log(alias);

//print 

// { d: 'deploy',
//   de: 'deploy',
//   dep: 'deploy',
//   depl: 'deploy',
//   deplo: 'deploy',
//   deploy: 'deploy',
//   n: 'new',
//   ne: 'new',
//   new: 'new',
//   p: 'publish',
//   pu: 'publish',
//   pub: 'publish',
//   publ: 'publish',
//   publi: 'publish',
//   publis: 'publish',
//   publish: 'publish' }