var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyInline = require('gulp-minify-inline'),
	minifyCSS = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	minifyhtml = require('gulp-minify-html');

// Minifies the js and outputs to dist/js/*.js
gulp.task('scripts', function() {
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
	gulp.src('views/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/views/js'));
});

// Minifies the css and outputs to dist/css/*.css
gulp.task('styles', function(){
	gulp.src('css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css'));
	gulp.src('views/css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/views/css'));
});

// Minifies the images and outputs them to dist/img
gulp.task('imagemin', function(){
	gulp.src('img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/img'));
	gulp.src('views/img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/views/img'));
});

// Minifies the HTML, minifies inline JS and CSS, outputs it to dist/*.html
gulp.task('content', function() {
    gulp.src('*.html')
        .pipe(minifyhtml())
        .pipe(minifyInline())
        .pipe(gulp.dest('dist/'));
    gulp.src('views/*.html')
        .pipe(minifyhtml())
        .pipe(minifyInline())
        .pipe(gulp.dest('dist/views/'));
});

// Watches for changes in files
gulp.task('watch', function(){
	gulp.watch('js/perfmatter.js', ['scripts']);
	gulp.watch('css/style.css', ['styles']);

});

// Sets default gulp
gulp.task('default', ['content', 'styles', 'scripts', 'imagemin']);