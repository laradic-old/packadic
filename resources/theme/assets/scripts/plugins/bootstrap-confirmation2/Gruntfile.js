module.exports=function(e){e.initConfig({pkg:e.file.readJSON("package.json"),banner:'/*!\n * Bootstrap Confirmation <%= pkg.version %>\n * Copyright 2013 Nimit Suwannagate <ethaizone@hotmail.com>\n * Copyright <%= grunt.template.today("yyyy") %> Damien "Mistic" Sorel <http://www.strangeplanet.fr>\n * Licensed under the Apache License, Version 2.0 (the "License")\n */',uglify:{options:{banner:"<%= banner %>\n"},dist:{files:{"bootstrap-confirmation.min.js":["bootstrap-confirmation.js"]}}},jshint:{lib:{files:{src:["bootstrap-confirmation.js"]}}}}),e.loadNpmTasks("grunt-contrib-uglify"),e.loadNpmTasks("grunt-contrib-jshint"),e.registerTask("default",["uglify"]),e.registerTask("test",["jshint"])};