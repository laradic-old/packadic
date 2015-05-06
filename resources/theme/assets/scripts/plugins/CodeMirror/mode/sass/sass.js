(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("sass",function(e){var t=function(e){return new RegExp("^"+e.join("|"))},n=["true","false","null","auto"],r=new RegExp("^"+n.join("|")),i=["\\(","\\)","=",">","<","==",">=","<=","\\+","-","\\!=","/","\\*","%","and","or","not"],s=t(i),o=/^::?[\w\-]+/,u=function(e,t){var n=e.peek();return n===")"?(e.next(),t.tokenizer=p,"operator"):n==="("?(e.next(),e.eatSpace(),"operator"):n==="'"||n==='"'?(t.tokenizer=f(e.next()),"string"):(t.tokenizer=f(")",!1),"string")},a=function(e,t){return e.skipTo("*/")?(e.next(),e.next(),t.tokenizer=p):e.next(),"comment"},f=function(e,t){function n(r,i){var s=r.next(),o=r.peek(),u=r.string.charAt(r.pos-2),a=s!=="\\"&&o===e||s===e&&u!=="\\";return a?(s!==e&&t&&r.next(),i.tokenizer=p,"string"):s==="#"&&o==="{"?(i.tokenizer=l(n),r.next(),"operator"):"string"}return t==null&&(t=!0),n},l=function(e){return function(t,n){return t.peek()==="}"?(t.next(),n.tokenizer=e,"operator"):p(t,n)}},c=function(t){if(t.indentCount==0){t.indentCount++;var n=t.scopes[0].offset,r=n+e.indentUnit;t.scopes.unshift({offset:r})}},h=function(e){if(e.scopes.length==1)return;e.scopes.shift()},p=function(e,t){var n=e.peek();if(e.match("//"))return e.skipToEnd(),"comment";if(e.match("/*"))return t.tokenizer=a,t.tokenizer(e,t);if(e.match("#{"))return t.tokenizer=l(p),"operator";if(n===".")return e.next(),e.match(/^[\w-]+/)?(c(t),"atom"):e.peek()==="#"?(c(t),"atom"):"operator";if(n==="#"){e.next();if(e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/))return"number";if(e.match(/^[\w-]+/))return c(t),"atom";if(e.peek()==="#")return c(t),"atom"}return e.match(/^-?[0-9\.]+/)?"number":e.match(/^(px|em|in)\b/)?"unit":e.match(r)?"keyword":e.match(/^url/)&&e.peek()==="("?(t.tokenizer=u,"atom"):n==="$"?(e.next(),e.eatWhile(/[\w-]/),e.peek()===":"?(e.next(),"variable-2"):"variable-3"):n==="!"?(e.next(),e.match(/^[\w]+/)?"keyword":"operator"):n==="="?(e.next(),e.match(/^[\w-]+/)?(c(t),"meta"):"operator"):n==="+"?(e.next(),e.match(/^[\w-]+/)?"variable-3":"operator"):e.match(/^@(else if|if|media|else|for|each|while|mixin|function)/)?(c(t),"meta"):n==="@"?(e.next(),e.eatWhile(/[\w-]/),"meta"):n==='"'||n==="'"?(e.next(),t.tokenizer=f(n),"string"):n==":"&&e.match(o)?"keyword":e.eatWhile(/[\w-&]/)?e.peek()===":"&&!e.match(o,!1)?"property":"atom":e.match(s)?"operator":(e.next(),null)},d=function(t,n){t.sol()&&(n.indentCount=0);var r=n.tokenizer(t,n),i=t.current();i==="@return"&&h(n),r==="atom"&&c(n);if(r!==null){var s=t.pos-i.length,o=s+e.indentUnit*n.indentCount,u=[];for(var a=0;a<n.scopes.length;a++){var f=n.scopes[a];f.offset<=o&&u.push(f)}n.scopes=u}return r};return{startState:function(){return{tokenizer:p,scopes:[{offset:0,type:"sass"}],definedVars:[],definedMixins:[]}},token:function(e,t){var n=d(e,t);return t.lastToken={style:n,content:e.current()},n},indent:function(e){return e.scopes[0].offset}}}),e.defineMIME("text/x-sass","sass")});