(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("groovy",function(e){function t(e){var t={},n=e.split(" ");for(var r=0;r<n.length;++r)t[n[r]]=!0;return t}function o(e,t){var o=e.next();if(o=='"'||o=="'")return u(o,e,t);if(/[\[\]{}\(\),;\:\.]/.test(o))return s=o,null;if(/\d/.test(o))return e.eatWhile(/[\w\.]/),e.eat(/eE/)&&(e.eat(/\+\-/),e.eatWhile(/\d/)),"number";if(o=="/"){if(e.eat("*"))return t.tokenize.push(f),f(e,t);if(e.eat("/"))return e.skipToEnd(),"comment";if(l(t.lastToken))return u(o,e,t)}if(o=="-"&&e.eat(">"))return s="->",null;if(/[+\-*&%=<>!?|\/~]/.test(o))return e.eatWhile(/[+\-*&%=<>|~]/),"operator";e.eatWhile(/[\w\$_]/);if(o=="@")return e.eatWhile(/[\w\$_\.]/),"meta";if(t.lastToken==".")return"property";if(e.eat(":"))return s="proplabel","property";var a=e.current();return i.propertyIsEnumerable(a)?"atom":n.propertyIsEnumerable(a)?(r.propertyIsEnumerable(a)&&(s="newstatement"),"keyword"):"variable"}function u(e,t,n){function i(t,n){var i=!1,s,o=!r;while((s=t.next())!=null){if(s==e&&!i){if(!r)break;if(t.match(e+e)){o=!0;break}}if(e=='"'&&s=="$"&&!i&&t.eat("{"))return n.tokenize.push(a()),"string";i=!i&&s=="\\"}return o&&n.tokenize.pop(),"string"}var r=!1;if(e!="/"&&t.eat(e)){if(!t.eat(e))return"string";r=!0}return n.tokenize.push(i),i(t,n)}function a(){function t(t,n){if(t.peek()=="}"){e--;if(e==0)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)}else t.peek()=="{"&&e++;return o(t,n)}var e=1;return t.isBase=!0,t}function f(e,t){var n=!1,r;while(r=e.next()){if(r=="/"&&n){t.tokenize.pop();break}n=r=="*"}return"comment"}function l(e){return!e||e=="operator"||e=="->"||/[\.\[\{\(,;:]/.test(e)||e=="newstatement"||e=="keyword"||e=="proplabel"}function c(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function h(e,t,n){return e.context=new c(e.indented,t,n,null,e.context)}function p(e){var t=e.context.type;if(t==")"||t=="]"||t=="}")e.indented=e.context.indented;return e.context=e.context.prev}var n=t("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws transient try void volatile while"),r=t("catch class do else finally for if switch try while enum interface def"),i=t("null true false this"),s;return o.isBase=!0,{startState:function(t){return{tokenize:[o],context:new c((t||0)-e.indentUnit,0,"top",!1),indented:0,startOfLine:!0,lastToken:null}},token:function(e,t){var n=t.context;e.sol()&&(n.align==null&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0,n.type=="statement"&&!l(t.lastToken)&&(p(t),n=t.context));if(e.eatSpace())return null;s=null;var r=t.tokenize[t.tokenize.length-1](e,t);if(r=="comment")return r;n.align==null&&(n.align=!0);if(s!=";"&&s!=":"||n.type!="statement")if(s=="->"&&n.type=="statement"&&n.prev.type=="}")p(t),t.context.align=!1;else if(s=="{")h(t,e.column(),"}");else if(s=="[")h(t,e.column(),"]");else if(s=="(")h(t,e.column(),")");else if(s=="}"){while(n.type=="statement")n=p(t);n.type=="}"&&(n=p(t));while(n.type=="statement")n=p(t)}else s==n.type?p(t):(n.type=="}"||n.type=="top"||n.type=="statement"&&s=="newstatement")&&h(t,e.column(),"statement");else p(t);return t.startOfLine=!1,t.lastToken=s||r,r},indent:function(t,n){if(!t.tokenize[t.tokenize.length-1].isBase)return 0;var r=n&&n.charAt(0),i=t.context;i.type=="statement"&&!l(t.lastToken)&&(i=i.prev);var s=r==i.type;return i.type=="statement"?i.indented+(r=="{"?0:e.indentUnit):i.align?i.column+(s?0:1):i.indented+(s?0:e.indentUnit)},electricChars:"{}",fold:"brace"}}),e.defineMIME("text/x-groovy","groovy")});