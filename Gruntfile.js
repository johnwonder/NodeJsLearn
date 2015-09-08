module.exports = function(grunt){

grunt.initConfig({
	pkg:grunt.file.readJSON('package.json')
});

grunt.registerTask('default','Hello,world task description',function(){

	grunt.log.writeln('Hello,world.');
});

};