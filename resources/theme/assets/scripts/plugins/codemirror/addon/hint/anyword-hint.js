(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){var t=/[\w$]+/,n=500;e.registerHelper("hint","anyword",function(r,i){var s=i&&i.word||t,o=i&&i.range||n,u=r.getCursor(),a=r.getLine(u.line),f=u.ch,l=f;while(l&&s.test(a.charAt(l-1)))--l;var c=l!=f&&a.slice(l,f),h=[],p={},d=new RegExp(s.source,"g");for(var v=-1;v<=1;v+=2){var m=u.line,g=Math.min(Math.max(m+v*o,r.firstLine()),r.lastLine())+v;for(;m!=g;m+=v){var y=r.getLine(m),b;while(b=d.exec(y)){if(m==u.line&&b[0]===c)continue;(!c||b[0].lastIndexOf(c,0)==0)&&!Object.prototype.hasOwnProperty.call(p,b[0])&&(p[b[0]]=!0,h.push(b[0]))}}}return{list:h,from:e.Pos(u.line,l),to:e.Pos(u.line,f)}})});