var gulp=require("gulp"),config=require("../config");gulp.task("watch",["setWatch","browserSync"],function(){gulp.watch(config.less.watch,["less"]),gulp.watch(config.markup.src,["markup"])});