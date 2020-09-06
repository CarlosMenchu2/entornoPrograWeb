//importar funciones específicas  de la API de gulp
const { src, dest, series, watch } = require('gulp');

//importar paquetes
const sass = require('gulp-sass');
const { reload } = require('browser-sync');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifycss =require('gulp-minify-css');

//Constante de trabajo
const files = {
    scssPath: 'src/scss/**/*.scss',
    htmlPath: 'dist/**/*.html',
    cssPath: 'dist/css/*.css',
    jsPath: 'src/js/*.js'
}

/**
 * Compilar los archivos de sass en estios en cascada para el navegador (CSS)
 */

function scssTask(d) {
    return src(files.scssPath)
        .pipe(sass())
        .pipe(dest('dist/css'))
}

/**
 * Observar cambios en los archivos de sass para compilar automáticamente
 */
function watchTask() {
    watch(
        [files.scssPath, files.htmlPath],
        series(scssTask, reloadTask)
    )
}

function serveTask(d) {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
    d();
}

function reloadTask(d) {
    browserSync.reload();
    d();
}

/* Minidicar los archivos css */
function minifycssTask(d) {
    return src(files.cssPath)
        .pipe(concat('appcss.css'))
        .pipe(minifycss())
        .pipe(dest('build/css/'))
}

/* Minificar los archivos js */
function minifyjsTask(d) {
    return src(files.jsPath)
        .pipe(concat('appjs.js'))
        .pipe(uglify())
        .pipe(dest('build/js/'))
}


exports.default = series(scssTask,minifycssTask,minifyjsTask, serveTask, watchTask);