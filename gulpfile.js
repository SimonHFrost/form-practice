var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var browserify = require('browserify')
var watchify = require('watchify')
var uglify = require('gulp-uglify')

function compile (watch) {
  var bundler = watchify(
    browserify('./javascript/main.js', {
      debug: true
    }))

  function rebundle () {
    bundler.bundle()
      .on('error', function (err) {
        console.error(err)
        this.emit('end')
      })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe( uglify() )
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'))
  }

  if (watch) {
    bundler.on('update', function (fileChanged) {
      console.log(Date.now() + ': ' + fileChanged + ' changed')
      rebundle()
    })
  }

  rebundle()
}

gulp.task('bundle', function () { return compile(false) })
gulp.task('watch', function () { return compile(true) })

gulp.task('default', ['watch'])
