var jade=require("../"),locals={users:{tj:{age:23,email:"tj@vision-media.ca",isA:"human"},tobi:{age:1,email:"tobi@is-amazing.com",isA:"ferret"}}},fn=jade.compileFile(__dirname+"/dynamicscript.jade");console.log(fn(locals));