var fs=require("fs"),pr=require("pull-request"),readdirp=require("lsr").sync,TOKEN=JSON.parse(fs.readFileSync(__dirname+"/.release.json","utf8")),version=require("./package.json").version,compiledWebsite=require("./docs/stop.js");compiledWebsite.then(function(){var e=readdirp(__dirname+"/docs/out").filter(function(e){return e.isFile()}).map(function(e){return{path:e.path.replace(/^\.\//,""),content:fs.readFileSync(e.fullPath)}});return pr.commit("jadejs","jade",{branch:"gh-pages",message:"Update website for "+version,updates:e},{auth:{type:"oauth",token:TOKEN}})}).then(function(){}).done(function(){console.log("website published")});