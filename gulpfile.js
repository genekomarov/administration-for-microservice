// Константы gulp
const gulp = require('gulp');
const ts = require('gulp-typescript');

// Константы yargs
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

// Константы проекты
const tsProject = ts.createProject('tsconfig.json');

function build(cb) {
    if (argv.file && typeof argv.file === 'string') {
        const file = argv.file;
        return gulp.src(file)
            .pipe(tsProject()).js
            .pipe(gulp.dest('dist'));
    }
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(gulp.dest('dist'));
    cb();
}

module.exports.build = build;
