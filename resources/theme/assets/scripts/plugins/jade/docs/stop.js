var url=require("url"),stop=require("stop"),rimraf=require("rimraf").sync,server=require("./server.js"),version=require("../package.json").version;rimraf(__dirname+"/out"),module.exports=stop.getWebsiteStream("http://localhost:3000",{filter:function(e){var t=url.parse(e);return t.hostname==="localhost"&&(!/^\/\d+\.\d+\.\d+\//.test(t.pathname)||t.pathname.substr(0,version.length+2)==="/"+version+"/")},parallel:1}).on("data",function(e){if(e.url!=="http://localhost:3000/style/files/1/glyphicons-halflings-regular.eot?"||e.statusCode!==404)if(e.statusCode!==200)throw new Error("Unexpected status code "+e.statusCode+" for "+e.url);console.log(e.statusCode+" - "+e.url)}).syphon(stop.writeFileSystem(__dirname+"/out")).wait().then(function(){server.close(),console.log("successfuly compiled website")});