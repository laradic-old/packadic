function protoCtrChain(e){var t=[];for(;e;e=e.__proto__)t.push(e.constructor);return t.join()}var path=require("path"),assert=require("assert");exports.testDir=path.dirname(__filename),exports.fixturesDir=path.join(exports.testDir,"fixtures"),exports.libDir=path.join(exports.testDir,"../lib"),exports.tmpDir=path.join(exports.testDir,"tmp"),exports.PORT=12346,process.platform=="win32"?exports.PIPE="\\\\.\\pipe\\libuv-test":exports.PIPE=exports.tmpDir+"/test.sock";var util=require("util");for(var i in util)exports[i]=util[i];exports.indirectInstanceOf=function(e,t){if(e instanceof t)return!0;var n=protoCtrChain(t.prototype),r=protoCtrChain(e);return r.slice(-n.length)===n},exports.globalCheck=!0,process.on("exit",function(){if(!exports.globalCheck)return;var e=[setTimeout,setInterval,clearTimeout,clearInterval,console,Buffer,process,testFullSpec_param_found,TAP_Global_Harness,global.ArrayBuffer!==undefined?ArrayBuffer:null,global.Int8Array!==undefined?Int8Array:null,global.Uint8Array!==undefined?Uint8Array:null,global.Int16Array!==undefined?Int16Array:null,global.Uint16Array!==undefined?Uint16Array:null,global.Int32Array!==undefined?Int32Array:null,global.Uint32Array!==undefined?Uint32Array:null,global.Float32Array!==undefined?Float32Array:null,global.Float64Array!==undefined?Float64Array:null,global.DataView!==undefined?DataView:null,global.Uint8ClampedArray!==undefined?Uint8ClampedArray:null,AssertionError,global];global.setImmediate&&e.push(setImmediate,clearImmediate),global.errno&&e.push(errno),global.gc&&e.push(gc),global.DTRACE_HTTP_SERVER_RESPONSE&&(e.push(DTRACE_HTTP_SERVER_RESPONSE),e.push(DTRACE_HTTP_SERVER_REQUEST),e.push(DTRACE_HTTP_CLIENT_RESPONSE),e.push(DTRACE_HTTP_CLIENT_REQUEST),e.push(DTRACE_NET_STREAM_END),e.push(DTRACE_NET_SERVER_CONNECTION),e.push(DTRACE_NET_SOCKET_READ),e.push(DTRACE_NET_SOCKET_WRITE));for(var t in global){var n=!1;for(var r in e)if(global[t]===e[r]){n=!0;break}n||(console.error("Unknown global: %s",t),assert.ok(!1,"Unknown global founded"))}}),exports.httpTest=function(t){};