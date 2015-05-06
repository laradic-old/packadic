(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("julia",function(e,t){function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function b(e){var t=w(e);return t=="["||t=="{"?!0:!1}function w(e){return e.scopes.length==0?null:e.scopes[e.scopes.length-1]}function E(e,t){var r=t.leaving_expr;e.sol()&&(r=!1),t.leaving_expr=!1;if(r&&e.match(/^'+/))return"operator";if(e.match(/^\.{2,3}/))return"operator";if(e.eatSpace())return null;var u=e.peek();if(u==="#")return e.skipToEnd(),"comment";u==="["&&t.scopes.push("["),u==="{"&&t.scopes.push("{");var a=w(t);a==="["&&u==="]"&&(t.scopes.pop(),t.leaving_expr=!0),a==="{"&&u==="}"&&(t.scopes.pop(),t.leaving_expr=!0),u===")"&&(t.leaving_expr=!0);var f;!b(t)&&(f=e.match(d,!1))&&t.scopes.push(f),!b(t)&&e.match(v,!1)&&t.scopes.pop();if(b(t)&&e.match(/^end/))return"number";if(e.match(/^=>/))return"operator";if(e.match(/^[0-9\.]/,!1)){var l=RegExp(/^im\b/),y=!1;e.match(/^\d*\.(?!\.)\d+([ef][\+\-]?\d+)?/i)&&(y=!0),e.match(/^\d+\.(?!\.)\d*/)&&(y=!0),e.match(/^\.\d+/)&&(y=!0);if(y)return e.match(l),t.leaving_expr=!0,"number";var E=!1;e.match(/^0x[0-9a-f]+/i)&&(E=!0),e.match(/^0b[01]+/i)&&(E=!0),e.match(/^0o[0-7]+/i)&&(E=!0),e.match(/^[1-9]\d*(e[\+\-]?\d+)?/)&&(E=!0),e.match(/^0(?![\dx])/i)&&(E=!0);if(E)return e.match(l),t.leaving_expr=!0,"number"}return e.match(/^(::)|(<:)/)?"operator":!r&&e.match(g)?"string":e.match(i)?"operator":e.match(c)?(t.tokenize=S(e.current()),t.tokenize(e,t)):e.match(m)?"meta":e.match(s)?null:e.match(h)?"keyword":e.match(p)?"builtin":e.match(o)?(t.leaving_expr=!0,"variable"):(e.next(),n)}function S(e){function s(s,o){while(!s.eol()){s.eatWhile(/[^'"\\]/);if(s.eat("\\")){s.next();if(r&&s.eol())return i}else{if(s.match(e))return o.tokenize=E,i;s.eat(/['"]/)}}if(r){if(t.singleLineStringErrors)return n;o.tokenize=E}return i}while("rub".indexOf(e.charAt(0).toLowerCase())>=0)e=e.substr(1);var r=e.length==1,i="string";return s.isString=!0,s}function x(e,t){y=null;var r=t.tokenize(e,t),i=e.current();return i==="."?(r=e.match(o,!1)?null:n,r===null&&t.lastStyle==="meta"&&(r="meta"),r):r}var n="error",i=t.operators||/^\.?[|&^\\%*+\-<>!=\/]=?|\?|~|:|\$|\.[<>]|<<=?|>>>?=?|\.[<>=]=|->?|\/\/|\bin\b/,s=t.delimiters||/^[;,()[\]{}]/,o=t.identifiers||/^[_A-Za-z][_A-Za-z0-9]*!*/,u=["begin","function","type","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"],a=["end","else","elseif","catch","finally"],f=["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","macro","module","baremodule","type","immutable","quote","typealias","abstract","bitstype","ccall"],l=["true","false","enumerate","open","close","nothing","NaN","Inf","print","println","Int","Int8","Uint8","Int16","Uint16","Int32","Uint32","Int64","Uint64","Int128","Uint128","Bool","Char","Float16","Float32","Float64","Array","Vector","Matrix","String","UTF8String","ASCIIString","error","warn","info","@printf"],c=/^(`|'|"{3}|([br]?"))/,h=r(f),p=r(l),d=r(u),v=r(a),m=/^@[_A-Za-z][_A-Za-z0-9]*/,g=/^:[_A-Za-z][_A-Za-z0-9]*/,y=null,T={startState:function(){return{tokenize:E,scopes:[],leaving_expr:!1}},token:function(e,t){var n=x(e,t);return t.lastStyle=n,n},indent:function(e,t){var n=0;if(t=="end"||t=="]"||t=="}"||t=="else"||t=="elseif"||t=="catch"||t=="finally")n=-1;return(e.scopes.length+n)*4},lineComment:"#",fold:"indent",electricChars:"edlsifyh]}"};return T}),e.defineMIME("text/x-julia","julia")});