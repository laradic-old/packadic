var fs=require("fs"),assert=require("assert"),jade=require("../"),uglify=require("uglify-js");jade.filters["custom-filter"]=function(e,t){return assert(e==="foo bar"),assert(t.foo==="bar"),"bar baz"};var cases=fs.readdirSync("test/cases").filter(function(e){return~e.indexOf(".jade")}).map(function(e){return e.replace(".jade","")});try{fs.mkdirSync(__dirname+"/output")}catch(ex){if(ex.code!=="EEXIST")throw ex}cases.forEach(function(e){var t=e.replace(/[-.]/g," ");it(t,function(){var t="test/cases/"+e+".jade",n=fs.readFileSync(t,"utf8"),r=fs.readFileSync("test/cases/"+e+".html","utf8").trim().replace(/\r/g,""),i=jade.compile(n,{filename:t,pretty:!0,basedir:"test/cases"}),s=i({title:"Jade"});fs.writeFileSync(__dirname+"/output/"+e+".html",s);var o=uglify.minify(jade.compileClient(n,{filename:t,pretty:!0,compileDebug:!1,basedir:"test/cases"}),{output:{beautify:!0},mangle:!1,compress:!1,fromString:!0}).code,u=uglify.minify(jade.compileClient(n,{filename:t,pretty:!0,compileDebug:!0,basedir:"test/cases"}),{output:{beautify:!0},mangle:!1,compress:!1,fromString:!0}).code;fs.writeFileSync(__dirname+"/output/"+e+".js",uglify.minify(jade.compileClient(n,{filename:t,pretty:!1,compileDebug:!1,basedir:"test/cases"}),{output:{beautify:!0},mangle:!1,compress:!1,fromString:!0}).code),/filter/.test(e)&&(s=s.replace(/\n| /g,""),r=r.replace(/\n| /g,"")),/mixins-unused/.test(e)&&(assert(/never-called/.test(n),"never-called is in the jade file for mixins-unused"),assert(!/never-called/.test(o),"never-called should be removed from the code")),JSON.stringify(s.trim()).should.equal(JSON.stringify(r)),s=Function("jade",o+"\nreturn template;")(jade.runtime)({title:"Jade"}),/filter/.test(e)&&(s=s.replace(/\n| /g,"")),JSON.stringify(s.trim()).should.equal(JSON.stringify(r)),s=Function("jade",u+"\nreturn template;")(jade.runtime)({title:"Jade"}),/filter/.test(e)&&(s=s.replace(/\n| /g,"")),JSON.stringify(s.trim()).should.equal(JSON.stringify(r))})});var anti=fs.readdirSync("test/anti-cases").filter(function(e){return~e.indexOf(".jade")}).map(function(e){return e.replace(".jade","")});describe("certain syntax is not allowed and will throw a compile time error",function(){anti.forEach(function(e){var t=e.replace(/[-.]/g," ");it(t,function(){var t="test/anti-cases/"+e+".jade",n=fs.readFileSync(t,"utf8");try{var r=jade.compile(n,{filename:t,pretty:!0,basedir:"test/anti-cases"})}catch(i){assert(i instanceof Error,"Should throw a real Error"),assert(i.message.replace(/\\/g,"/").indexOf(t)===0,"it should start with the path"),assert(/:\d+$/m.test(i.message.replace(/\\/g,"/")),"it should include a line number.");return}throw new Error(e+" should have thrown an error")})})});