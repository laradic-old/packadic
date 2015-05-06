(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("dtd",function(e){function r(e,t){return n=t,e}function i(e,t){var n=e.next();if(n!="<"||!e.eat("!")){if(n=="<"&&e.eat("?"))return t.tokenize=u("meta","?>"),r("meta",n);if(n=="#"&&e.eatWhile(/[\w]/))return r("atom","tag");if(n=="|")return r("keyword","seperator");if(n.match(/[\(\)\[\]\-\.,\+\?>]/))return r(null,n);if(n.match(/[\[\]]/))return r("rule",n);if(n=='"'||n=="'")return t.tokenize=o(n),t.tokenize(e,t);if(e.eatWhile(/[a-zA-Z\?\+\d]/)){var i=e.current();return i.substr(i.length-1,i.length).match(/\?|\+/)!==null&&e.backUp(1),r("tag","tag")}return n=="%"||n=="*"?r("number","number"):(e.eatWhile(/[\w\\\-_%.{,]/),r(null,null))}if(e.eatWhile(/[\-]/))return t.tokenize=s,s(e,t);if(e.eatWhile(/[\w]/))return r("keyword","doindent")}function s(e,t){var n=0,s;while((s=e.next())!=null){if(n>=2&&s==">"){t.tokenize=i;break}n=s=="-"?n+1:0}return r("comment","comment")}function o(e){return function(t,n){var s=!1,o;while((o=t.next())!=null){if(o==e&&!s){n.tokenize=i;break}s=!s&&o=="\\"}return r("string","tag")}}function u(e,t){return function(n,r){while(!n.eol()){if(n.match(t)){r.tokenize=i;break}n.next()}return e}}var t=e.indentUnit,n;return{startState:function(e){return{tokenize:i,baseIndent:e||0,stack:[]}},token:function(e,t){if(e.eatSpace())return null;var r=t.tokenize(e,t),i=t.stack[t.stack.length-1];return e.current()=="["||n==="doindent"||n=="["?t.stack.push("rule"):n==="endtag"?t.stack[t.stack.length-1]="endtag":e.current()=="]"||n=="]"||n==">"&&i=="rule"?t.stack.pop():n=="["&&t.stack.push("["),r},indent:function(e,r){var i=e.stack.length;return r.match(/\]\s+|\]/)?i-=1:r.substr(r.length-1,r.length)===">"&&(r.substr(0,1)==="<"?i:n=="doindent"&&r.length>1?i:n=="doindent"?i--:n==">"&&r.length>1?i:n=="tag"&&r!==">"?i:n=="tag"&&e.stack[e.stack.length-1]=="rule"?i--:n=="tag"?i++:r===">"&&e.stack[e.stack.length-1]=="rule"&&n===">"?i--:r===">"&&e.stack[e.stack.length-1]=="rule"?i:r.substr(0,1)!=="<"&&r.substr(0,1)===">"?i-=1:r===">"?i:i-=1,(n==null||n=="]")&&i--),e.baseIndent+i*t},electricChars:"]>"}}),e.defineMIME("application/xml-dtd","dtd")});