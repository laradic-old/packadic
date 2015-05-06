(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("ebnf",function(t){var n={slash:0,parenthesis:1},r={comment:0,_string:1,characterClass:2},i=null;return t.bracesMode&&(i=e.getMode(t,t.bracesMode)),{startState:function(){return{stringType:null,commentType:null,braced:0,lhs:!0,localState:null,stack:[],inDefinition:!1}},token:function(e,t){if(!e)return;t.stack.length===0&&(e.peek()=='"'||e.peek()=="'"?(t.stringType=e.peek(),e.next(),t.stack.unshift(r._string)):e.match(/^\/\*/)?(t.stack.unshift(r.comment),t.commentType=n.slash):e.match(/^\(\*/)&&(t.stack.unshift(r.comment),t.commentType=n.parenthesis));switch(t.stack[0]){case r._string:while(t.stack[0]===r._string&&!e.eol())e.peek()===t.stringType?(e.next(),t.stack.shift()):e.peek()==="\\"?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return t.lhs?"property string":"string";case r.comment:while(t.stack[0]===r.comment&&!e.eol())t.commentType===n.slash&&e.match(/\*\//)?(t.stack.shift(),t.commentType=null):t.commentType===n.parenthesis&&e.match(/\*\)/)?(t.stack.shift(),t.commentType=null):e.match(/^.[^\*]*/);return"comment";case r.characterClass:while(t.stack[0]===r.characterClass&&!e.eol())!e.match(/^[^\]\\]+/)&&!e.match(/^\\./)&&t.stack.shift();return"operator"}var s=e.peek();if(i===null||!t.braced&&s!=="{"){switch(s){case"[":return e.next(),t.stack.unshift(r.characterClass),"bracket";case":":case"|":case";":return e.next(),"operator";case"%":if(e.match("%%"))return"header";if(e.match(/[%][A-Za-z]+/))return"keyword";if(e.match(/[%][}]/))return"matchingbracket";break;case"/":if(e.match(/[\/][A-Za-z]+/))return"keyword";case"\\":if(e.match(/[\][a-z]+/))return"string-2";case".":if(e.match("."))return"atom";case"*":case"-":case"+":case"^":if(e.match(s))return"atom";case"$":if(e.match("$$"))return"builtin";if(e.match(/[$][0-9]+/))return"variable-3";case"<":if(e.match(/<<[a-zA-Z_]+>>/))return"builtin"}if(e.match(/^\/\//))return e.skipToEnd(),"comment";if(e.match(/return/))return"operator";if(e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/))return e.match(/(?=[\(.])/)?"variable":e.match(/(?=[\s\n]*[:=])/)?"def":"variable-2";return["[","]","(",")"].indexOf(e.peek())!=-1?(e.next(),"bracket"):(e.eatSpace()||e.next(),null)}t.localState===null&&(t.localState=i.startState());var o=i.token(e,t.localState),u=e.current();if(!o)for(var a=0;a<u.length;a++)u[a]==="{"?(t.braced===0&&(o="matchingbracket"),t.braced++):u[a]==="}"&&(t.braced--,t.braced===0&&(o="matchingbracket"));return o}}}),e.defineMIME("text/x-ebnf","ebnf")});