function jsFileList(e,t){return t||(t=/_test/),fs.readdirSync(e).map(function(e){if(e.slice(-3)==".js"&&!t.test(e)&&!/\s/.test(e))return e.slice(0,-3)}).filter(Boolean)}function modeList(){return jsFileList(cwd+"../",/_highlight_rules|_test|_worker|xml_util|_outdent|behaviour|completions/)}function checkModes(){function e(e,t,n){var r=e.getLineTokens(t+" ","start").tokens;/comment/.test(r[0].type)||console.warn("broken lineCommentStart in "+n)}modeList().forEach(function(t){try{var n=require("../"+t).Mode}catch(r){console.warn("Can't load mode :"+t,r);return}var i=new n;!i.lineCommentStart&&!i.blockComment&&console.warn("missing comment in "+t),i.$id||console.warn("missing id in "+t);var s=(new n).getTokenizer();i.lineCommentStart&&(Array.isArray(i.lineCommentStart)?i.lineCommentStart.forEach(function(n){e(s,n,t)}):e(s,i.lineCommentStart,t))})}function generateTestData(){var e=root+"/demo/kitchen-sink/docs",t=fs.readdirSync(e),n=fs.readdirSync(cwd),r=modeList();t.forEach(function(t){var i=t.toLowerCase().split(".");if(!i[1])return;var s;r.indexOf(i[0])!=-1?s=i[0]:r.indexOf(i[1])!=-1?s=i[1]:s={txt:"text",cpp:"c_cpp"}[i[1]];var o="text_"+s+".txt";n.indexOf(o)==-1?o=e+"/"+t:o=cwd+o;var u=fs.readFileSync(o,"utf8");try{var a=require("../"+s).Mode}catch(f){console.warn("Can't load mode :"+s,i,f);return}console.log(s);var l=(new a).getTokenizer(),c="start",h=u.split(/\r\n|\r|\n/).map(function(e){var t=l.getLineTokens(e,c),n=[];n.push(JSON.stringify(t.state));var r="";return t.tokens.forEach(function(e){r+=e.value,n.push(JSON.stringify([e.type,e.value]))}),r!=e&&n.push(JSON.stringify(e)),c=t.state,n.join(",\n  ")}),p="[[\n   "+h.join("\n],[\n   ")+"\n]]";fs.writeFileSync(cwd+"tokens_"+s+".json",p,"utf8")})}function test(e){var t=fs.readdirSync(cwd).map(function(e){return(e.match(/tokens_(.*).json/)||{})[1]}).filter(function(e){return!!e});for(var n=Math.max(0,e||0);n<t.length;n++)testMode(t[n],n);console.log("[32mall ok[0m")}function testMode(e,t){console.log(padNumber(t+1,3)+") testing: [33m"+e+"[0m");var n=fs.readFileSync(cwd+"tokens_"+e+".json","utf8"),r=JSON.parse(n),i=require("../"+e).Mode,s=(new i).getTokenizer(),o="start";r.forEach(function(e){e.values=[],e.types=[],e.state=e.shift();var t=null;typeof e[e.length-1]=="string"&&(t=e.pop()),e.forEach(function(t){e.types.push(t[0]),e.values.push(t[1])}),typeof t!="string"&&(t=e.values.join(""));var n=s.getLineTokens(t,o),r=n.tokens.map(function(e){return e.value}),i=n.tokens.map(function(e){return e.type}),u=testEqual([JSON.stringify(e.state),JSON.stringify(n.state),e.types,i,e.values,r]);if(u)throw console.log(t),"error";o=n.state})}function testEqual(e){var t;e[0]+""!=e[1]+""&&(console.log(e[0],e[1]),t=1);if(e[2]+""!=e[3]+""||e[4]+""!=e[5]+"")arrayDiff(e[2],e[3]),arrayDiff(e[4],e[5]),t=1;return t}function arrayDiff(e,t){var n=Math.max(e.length,t.length),r=[];for(var i=0;i<n;i++)r.push("\n",padNumber(i+1,3),") "),e[i]!==t[i]?r.push("[31m",e[i],"[0m != [32m",t[i],"[0m"):r.push(e[i]);console.log(r.join(""))}function padNumber(e,t){return("      "+e).slice(-t)}var fs=require("fs"),path=require("path");fs.existsSync||(fs.existsSync=path.existsSync),require("amd-loader");var cwd=__dirname+"/",root=path.normalize(cwd+Array(5).join("../")),arg=process.argv[2];arg?/--?g(en)?/.test(arg)?generateTestData(process.argv.splice(3)):/--?c(heck)?/.test(arg)?checkModes(process.argv.splice(3)):/\d+/.test(arg)?test(parseInt(process.argv[2],10)||0):testMode(arg,-1):test();