//import your modules
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var injectOptions = {
	ignorePath: '/public'
};
// we need gulp to operate on our javaScript files 
//So we need them
var jsFiles = ['*.js', 'src/**/*.js'];
//gulp operates through tasks
//task for checking style
gulp.task('style', function () {
	return gulp.src(jsFiles).pipe(jshint()).pipe(jshint.reporter('jshint-stylish', {
		verbose: true
	})).pipe(jscs());
});
//task for locale resource injection
gulp.task('inject', function () {
	//for local resources
	var inject = require('gulp-inject');
	var wiredep = require('wiredep').stream;
	var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js']
		, {
			read: 'fasle'
		});
	var options = {
		bowerJson: require('./bower.json')
		, directory: './public/lib'
		, ignorePath: '../../public'
	}
	return gulp.src('./src/views/*.ejs').pipe(wiredep(options)).pipe(inject(injectSrc, injectOptions)) //local- injection
		.pipe(gulp.dest('./src/views'));
});
//tsaks for binding nodemon
gulp.task('serve', ['style', 'inject'], function () {
	var options = {
		script: 'app.js'
		, delayTime: 1
		, env: {
			'PORT': 4000
		}
		, watch: jsFiles
	}
	return nodemon(options).on('restart', function (err) {
		console.log('Restarting......');
	});
});