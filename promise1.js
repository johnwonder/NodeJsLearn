var Promise = require('bluebird');

Promise.each([
    'update_package', // Update package.json
    'load_config', // Load config
    'load_plugins' // Load external plugins & scripts
  ], function(name){
     if(name == 'load_config')
     	throw 'ss';
     console.log(name);
  }).catch(function(e){

  		console.log(e);
  });