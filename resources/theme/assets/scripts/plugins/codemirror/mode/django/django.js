(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../../addon/mode/overlay")):typeof define=="function"&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../../addon/mode/overlay"],e):e(CodeMirror)})(function(e){e.defineMode("django:inner",function(){function t(e,t){e.eatWhile(/[^\{]/);var r=e.next();if(r=="{")if(r=e.eat(/\{|%|#/))return t.tokenize=n(r),"tag"}function n(n){return n=="{"&&(n="}"),function(r,i){var s=r.next();return s==n&&r.eat("}")?(i.tokenize=t,"tag"):r.match(e)?"keyword":n=="#"?"comment":"string"}}var e=["block","endblock","for","endfor","in","true","false","loop","none","self","super","if","endif","as","not","and","else","import","with","endwith","without","context","ifequal","endifequal","ifnotequal","endifnotequal","extends","include","load","length","comment","endcomment","empty"];return e=new RegExp("^(("+e.join(")|(")+"))\\b"),{startState:function(){return{tokenize:t}},token:function(e,t){return t.tokenize(e,t)}}}),e.defineMode("django",function(t){var n=e.getMode(t,"text/html"),r=e.getMode(t,"django:inner");return e.overlayMode(n,r)}),e.defineMIME("text/x-django","django")});