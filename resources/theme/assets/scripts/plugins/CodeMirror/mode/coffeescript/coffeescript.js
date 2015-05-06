(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("coffeescript",function(e){function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function v(e,n){if(e.sol()){n.scope.align===null&&(n.scope.align=!1);var a=n.scope.offset;if(e.eatSpace()){var f=e.indentation();return f>a&&n.scope.type=="coffee"?"indent":f<a?"dedent":null}a>0&&b(e,n)}if(e.eatSpace())return null;var p=e.peek();if(e.match("####"))return e.skipToEnd(),"comment";if(e.match("###"))return n.tokenize=g,n.tokenize(e,n);if(p==="#")return e.skipToEnd(),"comment";if(e.match(/^-?[0-9\.]/,!1)){var v=!1;e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)&&(v=!0),e.match(/^-?\d+\.\d*/)&&(v=!0),e.match(/^-?\.\d+/)&&(v=!0);if(v)return e.peek()=="."&&e.backUp(1),"number";var y=!1;e.match(/^-?0x[0-9a-f]+/i)&&(y=!0),e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)&&(y=!0),e.match(/^-?0(?![\dx])/i)&&(y=!0);if(y)return"number"}if(e.match(c))return n.tokenize=m(e.current(),!1,"string"),n.tokenize(e,n);if(e.match(h)){if(e.current()!="/"||e.match(/^.*\//,!1))return n.tokenize=m(e.current(),!0,"string-2"),n.tokenize(e,n);e.backUp(1)}return e.match(r)||e.match(u)?"operator":e.match(i)?"punctuation":e.match(d)?"atom":e.match(l)?"keyword":e.match(s)?"variable":e.match(o)?"property":(e.next(),t)}function m(n,r,i){return function(s,o){while(!s.eol()){s.eatWhile(/[^'"\/\\]/);if(s.eat("\\")){s.next();if(r&&s.eol())return i}else{if(s.match(n))return o.tokenize=v,i;s.eat(/['"\/]/)}}return r&&(e.mode.singleLineStringErrors?i=t:o.tokenize=v),i}}function g(e,t){while(!e.eol()){e.eatWhile(/[^#]/);if(e.match("###")){t.tokenize=v;break}e.eatWhile("#")}return"comment"}function y(t,n,r){r=r||"coffee";var i=0,s=!1,o=null;for(var u=n.scope;u;u=u.prev)if(u.type==="coffee"){i=u.offset+e.indentUnit;break}r!=="coffee"?(s=null,o=t.column()+t.current().length):n.scope.align&&(n.scope.align=!1),n.scope={offset:i,type:r,prev:n.scope,align:s,alignOffset:o}}function b(e,t){if(!t.scope.prev)return;if(t.scope.type==="coffee"){var n=e.indentation(),r=!1;for(var i=t.scope;i;i=i.prev)if(n===i.offset){r=!0;break}if(!r)return!0;while(t.scope.prev&&t.scope.offset!==n)t.scope=t.scope.prev;return!1}return t.scope=t.scope.prev,!1}function w(e,n){var r=n.tokenize(e,n),i=e.current();if(i===".")return r=n.tokenize(e,n),i=e.current(),/^\.[\w$]+$/.test(i)?"variable":t;i==="return"&&(n.dedent+=1),((i==="->"||i==="=>")&&!n.lambda&&!e.peek()||r==="indent")&&y(e,n);var s="[({".indexOf(i);s!==-1&&y(e,n,"])}".slice(s,s+1)),a.exec(i)&&y(e,n),i=="then"&&b(e,n);if(r==="dedent"&&b(e,n))return t;s="])}".indexOf(i);if(s!==-1){while(n.scope.type=="coffee"&&n.scope.prev)n.scope=n.scope.prev;n.scope.type==i&&(n.scope=n.scope.prev)}return n.dedent>0&&e.eol()&&n.scope.type=="coffee"&&(n.scope.prev&&(n.scope=n.scope.prev),n.dedent-=1),r}var t="error",r=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?)/,i=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/,s=/^[_A-Za-z$][_A-Za-z$0-9]*/,o=/^(@|this\.)[_A-Za-z$][_A-Za-z$0-9]*/,u=n(["and","or","not","is","isnt","in","instanceof","typeof"]),a=["for","while","loop","if","unless","else","switch","try","catch","finally","class"],f=["break","by","continue","debugger","delete","do","in","of","new","return","then","this","throw","when","until"],l=n(a.concat(f));a=n(a);var c=/^('{3}|\"{3}|['\"])/,h=/^(\/{3}|\/)/,p=["Infinity","NaN","undefined","null","true","false","on","off","yes","no"],d=n(p),E={startState:function(e){return{tokenize:v,scope:{offset:e||0,type:"coffee",prev:null,align:!1},lastToken:null,lambda:!1,dedent:0}},token:function(e,t){var n=t.scope.align===null&&t.scope;n&&e.sol()&&(n.align=!1);var r=w(e,t);return n&&r&&r!="comment"&&(n.align=!0),t.lastToken={style:r,content:e.current()},e.eol()&&e.lambda&&(t.lambda=!1),r},indent:function(e,t){if(e.tokenize!=v)return 0;var n=e.scope,r=t&&"])}".indexOf(t.charAt(0))>-1;if(r)while(n.type=="coffee"&&n.prev)n=n.prev;var i=r&&n.type===t.charAt(0);return n.align?n.alignOffset-(i?1:0):(i?n.prev:n).offset},lineComment:"#",fold:"indent"};return E}),e.defineMIME("text/x-coffeescript","coffeescript")});