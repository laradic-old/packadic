var packageName="fezvrasta:bootstrap-material-design-fullpalette",where="client",packageJson=JSON.parse(Npm.require("fs").readFileSync("package.json"));Package.describe({name:packageName,summary:"FezVrasta's Bootstrap theme implementing Google's Material (Paper) Design",version:packageJson.version,git:"https://github.com/fezvrasta/bootstrap-material-design.git"}),Package.onUse(function(e){e.versionsFrom(["METEOR@0.9.0","METEOR@1.0"]),e.use("twbs:bootstrap@3.3.1"),e.use("jquery"),e.addFiles(["dist/fonts/Material-Design-Icons.eot","dist/fonts/Material-Design-Icons.svg","dist/fonts/Material-Design-Icons.ttf","dist/fonts/Material-Design-Icons.woff","dist/css/material-fullpalette.css","dist/css/ripples.css","dist/js/material.js","dist/js/ripples.js","meteor/init.js"],where)}),Package.onTest(function(e){e.use(packageName,where),e.use(["tinytest","http"],where),e.addFiles("meteor/test.js",where)});