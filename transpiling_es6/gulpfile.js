
//Import the modules for use
var gulp = require('gulp'),
    traceur = require('gulp-traceur'),
    babel = require('gulp-babel'),
    plumber = require('gulp-plumber'),
    es6Path = 'es6_files/*/*.js',
    compilePath = './compiled';
    
 //this first task binds plumber to check on the piping 
//process and also binds the tasks to tracer transpiler
gulp.task('traceur', function () {
  gulp.src([es6Path])
        .pipe(plumber())
        // blockBinding defines block level definitions 
        //to be used in the ES6 code via a new let keyword
        .pipe(traceur({ blockBinding: true }))
        .pipe(gulp.dest(compilePath + '/traceur'));
        
        });
        
    //We can achieve the same task automation with babel
    //But we will use both to see the difference between them
         gulp.task('babel', function () {
         gulp.src([es6Path])
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(compilePath + '/babel'));

    });
        
        //We also want these tasks to run anytime there is js file change
    gulp.task('watch', function() { 
                  gulp.watch([es6Path], ['traceur', 'babel']);
        });
                  
       //This default task all the above task when we start gulp
       gulp.task('default', ['traceur', 'babel', 'watch']);



