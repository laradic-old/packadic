(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror"),require("../../addon/mode/simple")):typeof define=="function"&&define.amd?define(["../../lib/codemirror","../../addon/mode/simple"],e):e(CodeMirror)})(function(e){var t=["from","maintainer","run","cmd","expose","env","add","copy","entrypoint","volume","user","workdir","onbuild"],n="("+t.join("|")+")",r=new RegExp(n+"\\s*$","i"),i=new RegExp(n+"(\\s+)","i");e.defineSimpleMode("dockerfile",{start:[{regex:/#.*$/,token:"comment"},{regex:r,token:"variable-2"},{regex:i,token:["variable-2",null],next:"arguments"},{regex:/./,token:null}],arguments:[{regex:/#.*$/,token:"error",next:"start"},{regex:/[^#]+\\$/,token:null},{regex:/[^#]+/,token:null,next:"start"},{regex:/$/,token:null,next:"start"},{token:null,next:"start"}]}),e.defineMIME("text/x-dockerfile","dockerfile")});