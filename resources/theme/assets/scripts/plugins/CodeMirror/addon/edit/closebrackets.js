(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){function i(t,n){var r=t.getRange(e.Pos(n.line,n.ch-1),e.Pos(n.line,n.ch+1));return r.length==2?r:null}function s(t){var n={name:"autoCloseBrackets",Backspace:function(n){if(n.getOption("disableInput"))return e.Pass;var r=n.listSelections();for(var s=0;s<r.length;s++){if(!r[s].empty())return e.Pass;var o=i(n,r[s].head);if(!o||t.indexOf(o)%2!=0)return e.Pass}for(var s=r.length-1;s>=0;s--){var u=r[s].head;n.replaceRange("",e.Pos(u.line,u.ch-1),e.Pos(u.line,u.ch+1))}}},s="";for(var o=0;o<t.length;o+=2)(function(t,i){t!=i&&(s+=i),n["'"+t+"'"]=function(n){if(n.getOption("disableInput"))return e.Pass;var o=n.listSelections(),u,a;for(var f=0;f<o.length;f++){var l=o[f],c=l.head,h;if(t=="'"&&n.getTokenTypeAt(c)=="comment")return e.Pass;var a=n.getRange(c,e.Pos(c.line,c.ch+1));if(!l.empty())h="surround";else if(t==i&&a==i)h="skip";else{if(t==i&&e.isWordChar(a))return e.Pass;if(!(n.getLine(c.line).length==c.ch||s.indexOf(a)>=0||r.test(a)))return e.Pass;h="both"}if(!u)u=h;else if(u!=h)return e.Pass}if(u=="skip")n.execCommand("goCharRight");else if(u=="surround"){var p=n.getSelections();for(var f=0;f<p.length;f++)p[f]=t+p[f]+i;n.replaceSelections(p,"around")}else u=="both"&&(n.replaceSelection(t+i,null),n.execCommand("goCharLeft"))},t!=i&&(n["'"+i+"'"]=function(t){var n=t.listSelections();for(var r=0;r<n.length;r++){var s=n[r];if(!s.empty()||t.getRange(s.head,e.Pos(s.head.line,s.head.ch+1))!=i)return e.Pass}t.execCommand("goCharRight")})})(t.charAt(o),t.charAt(o+1));return n}function o(t){return function(n){if(n.getOption("disableInput"))return e.Pass;var r=n.listSelections();for(var s=0;s<r.length;s++){if(!r[s].empty())return e.Pass;var o=i(n,r[s].head);if(!o||t.indexOf(o)%2!=0)return e.Pass}n.operation(function(){n.replaceSelection("\n\n",null),n.execCommand("goCharLeft"),r=n.listSelections();for(var e=0;e<r.length;e++){var t=r[e].head.line;n.indentLine(t,null,!0),n.indentLine(t+1,null,!0)}})}}var t="()[]{}''\"\"",n="[]{}",r=/\s/;e.defineOption("autoCloseBrackets",!1,function(r,i,u){u!=e.Init&&u&&r.removeKeyMap("autoCloseBrackets");if(!i)return;var a=t,f=n;typeof i=="string"?a=i:typeof i=="object"&&(i.pairs!=null&&(a=i.pairs),i.explode!=null&&(f=i.explode));var l=s(a);f&&(l.Enter=o(f)),r.addKeyMap(l)})});