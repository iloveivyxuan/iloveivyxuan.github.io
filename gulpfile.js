var gulp = require('gulp'),
	slim = require('gulp-slim'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	coffee = require('gulp-coffee'),
	uglify = require('gulp-uglify'),
	notify = require('gulp-notify'),
	imagemin = require('gulp-imagemin'),
	inlineimage = require('gulp-inline-image'),
	livereload = require('gulp-livereload'),
	jshint = require('gulp-jshint'),
	rename = require('gulp-rename'),
	connect = require('gulp-connect');

gulp.task('default', function() {
	gulp.run('server');
	gulp.run("generate");
	gulp.run("watch");
});

gulp.task('server', [], function() {
	return connect.server({
		root: ['public'],
		livereload: true
	});
});

gulp.task('html', function() {
	gulp.src(['./src/views/*.html', './src/views/**/*.html'])
		.pipe(gulp.dest('./'))
		.pipe(notify({message: 'HTML Complete'}));
});

gulp.task('slim', function () {
    gulp.src(['./src/views/*.slim', './src/views/**/*.slim'])
    	.pipe(slim({pretty: true, options: ["encoding='utf-8'", "use_html_safe=false"]}))
    	.pipe(gulp.dest('./'))
    	.pipe(notify({ message: 'Slim task complete' }));//
});

var paths = {
    sassSrcPath: ['src/stylesheets/*.scss'],
    sassDestPath: ['./assets/css/'],
    sassImportsPath: ['src/stylesheets/']
};

gulp.task('scss', function() {
  gulp.src(paths.sassSrcPath)
      //.pipe(autoprefixer({
      //          browsers: ['last 5 Chrome versions', 'iOS > 0', 'Android > 0', '> 5%'],
      //          cascade: true,
      //          remove:true
      //      }))
    sass(paths.sassSrcPath,{precision: 5, loadPath: [paths.sassImportsPath]} )
    
    //.pipe(uncss({html: ['./*.html']}))
    .pipe(gulp.dest('./assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./assets/css'))
    .pipe(notify({ message: 'Stylesheets task complete!' }));
});

gulp.task('css', function() {
  gulp.src('src/stylesheets/*.css')
    
    .pipe(autoprefixer({
            browsers: ['last 5 Chrome versions', 'iOS > 0', 'Android > 0', '> 5%'],
            cascade: true,
            remove: true
        }))
    .pipe(inlineimage())
    .pipe(gulp.dest('./assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./assets/css'))
    .pipe(notify({ message: 'CSS Stylesheets task complete!' }));
});

gulp.task('coffee', function() {
    gulp.src(['./src/javascripts/*.coffee','./src/javascripts/**/*.coffee'])
	    .pipe(coffee({bare: true}).on('error', console.log))
	    .pipe(jshint('.jshintrc'))
	    .pipe(jshint.reporter('default'))
	    .pipe(gulp.dest('./assets/js'))
	    .pipe(rename({suffix: '.min'}))
	    .pipe(uglify())
	    .pipe(gulp.dest('./assets/js'))
	    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('js', function() {
    gulp.src(['./src/javascripts/*.js','./src/javascripts/**/*.js'])
	    .pipe(gulp.dest('./assets/js'))
	    .pipe(rename({suffix: '.min'}))
	    .pipe(uglify())
	    .pipe(gulp.dest('./assets/js'))
	    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task("copyfiles", function() {
    gulp.src(['./bower_components/binnng/slip/src/*.js'])
        .pipe(gulp.dest('./assets/js'));

});

gulp.task('image', function() {
    gulp.src('./src/images/*.*')
	    .pipe(gulp.dest('./assets/images'))
	    .pipe(notify({ message: 'Images task complete' }));
    gulp.src(['./src/images/*.jpg', './src/images/*.png'])
	    .pipe(gulp.dest('./assets/images'))
	    .pipe(notify({ message: 'Images MINI task complete' }));
});

gulp.task('generate', ['slim', 'html', 'scss', 'css', 'coffee', 'js', 'image'])

var libs = {
    js: [
        "vendor/assets/js/*.js",
    ],
    css: [
        "vendor/assets/css/*.css"
    ],
    font: [
        "vendor/fonts/**"
    ]
};

gulp.task("libs", function() {
    gulp.src(libs.css)
        //.pipe(uncss({html: ['./*.html']}))
        //.pipe(gulp.dest('./assets/css'))
        //.pipe(rename({suffix: '.min'}))
        //.pipe(minifycss())
        //.pipe(concat('vendor.css'))
        .pipe(gulp.dest('./assets/css/lib'))
        .pipe(notify({ message: 'Libs-Stylesheets task complete!' }));
    gulp.src(libs.js)
        //.pipe(gulp.dest('./assets/js'))
        //.pipe(rename({suffix: '.min'}))
        //.pipe(uglify())
        //.pipe(concat('vendor.js'))
        .pipe(gulp.dest('./assets/js/lib'))
        .pipe(notify({ message: 'Libs-Scripts task complete' }));
    gulp.src(libs.font)
        .pipe(gulp.dest('./assets/fonts'))
        .pipe(notify({ message: 'Libs-Fonts task complete!' }));
});

gulp.task('watch', function() {

    livereload.listen();
    gulp.watch(['src/**']).on('change', livereload.changed);

    gulp.watch('src/images/*.*', ['image']);
    gulp.watch('src/data/*.*', ['data']);

    // Watch .scss files/
    gulp.watch('src/stylesheets/**/*.css', ['css']);
    gulp.watch('src/stylesheets/*.css', ['css']);
    gulp.watch('src/stylesheets/**/*.scss', ['scss']);
    gulp.watch('src/stylesheets/*.scss', ['scss']);

    // Watch .coffee files
    gulp.watch(['src/javascripts/*.coffee', './src/javascripts/**/*.coffee'], ['coffee']);

    // Watch .js files
    gulp.watch('src/javascripts/*.js', ['js']);
    gulp.watch('src/javascripts/**/*.js', ['js']);

    // Watch .slim files
    gulp.watch('src/views/*.html', ['html']);
    gulp.watch('src/views/**/*.html', ['html']);
    gulp.watch('src/views/*.slim', ['slim']);
    gulp.watch('src/views/**/*.slim', ['slim']);

});

require("jsdom").env("", function(err, window) {
	if (err) {
		console.error(err);
		return;
	}
 
	var $ = require("jquery")(window);
});