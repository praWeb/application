module.exports = function (grunt) {
    grunt.initConfig({
        typescript: {
		    base: {
		    	src: 'src/app/*.ts',
			    dest: 'dest/app/',
		      	options: {
			      references : ['typings/angular2/angular2.d.ts'],
			      module: 'commonjs',
			      target: 'es5',
			      experimentalDecorators : true
			    }
		    }
		}    
		  
    });

	grunt.loadNpmTasks('grunt-typescript');
    
    grunt.registerTask('default', ['typescript']);
    
};