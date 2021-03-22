module.exports = function() {
    $.gulp.task('svg', function() {
        return $.gulp.src('./app/img/svg/*.svg')
            .pipe($.plugins.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.plugins.replace('&gt;', '>'))
            .pipe($.gulp.dest('./dist/img/svg/'))
    });
};