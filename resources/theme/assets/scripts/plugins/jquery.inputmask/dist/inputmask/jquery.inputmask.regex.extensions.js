!function(e){"function"==typeof define&&define.amd?define(["jquery","./jquery.inputmask"],e):e(jQuery)}(function(e){return e.extend(e.inputmask.defaults.aliases,{Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(e,t){return(new RegExp(t.regex)).test(e.join(""))},definitions:{r:{validator:function(t,n,r,i,s){function o(e,t){this.matches=[],this.isGroup=e||!1,this.isQuantifier=t||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function u(){var e,t,n=new o,r=[];for(s.regexTokens=[];e=s.tokenizer.exec(s.regex);)switch(t=e[0],t.charAt(0)){case"(":r.push(new o(!0));break;case")":var i=r.pop();r.length>0?r[r.length-1].matches.push(i):n.matches.push(i);break;case"{":case"+":case"*":var u=new o(!1,!0);t=t.replace(/[{}]/g,"");var a=t.split(","),f=isNaN(a[0])?a[0]:parseInt(a[0]),l=1==a.length?f:isNaN(a[1])?a[1]:parseInt(a[1]);if(u.quantifier={min:f,max:l},r.length>0){var c=r[r.length-1].matches;if(e=c.pop(),!e.isGroup){var i=new o(!0);i.matches.push(e),e=i}c.push(e),c.push(u)}else{if(e=n.matches.pop(),!e.isGroup){var i=new o(!0);i.matches.push(e),e=i}n.matches.push(e),n.matches.push(u)}break;default:r.length>0?r[r.length-1].matches.push(t):n.matches.push(t)}n.matches.length>0&&s.regexTokens.push(n)}function a(t,n){var r=!1;n&&(l+="(",h++);for(var i=0;i<t.matches.length;i++){var s=t.matches[i];if(1==s.isGroup)r=a(s,!0);else if(1==s.isQuantifier){var o=e.inArray(s,t.matches),u=t.matches[o-1],f=l;if(isNaN(s.quantifier.max)){for(;s.repeaterPart&&s.repeaterPart!=l&&s.repeaterPart.length>l.length&&!(r=a(u,!0)););r=r||a(u,!0),r&&(s.repeaterPart=l),l=f+s.quantifier.max}else{for(var c=0,d=s.quantifier.max-1;d>c&&!(r=a(u,!0));c++);l=f+"{"+s.quantifier.min+","+s.quantifier.max+"}"}}else if(void 0!=s.matches)for(var v=0;v<s.length&&!(r=a(s[v],n));v++);else{var m;if("["==s.charAt(0)){m=l,m+=s;for(var g=0;h>g;g++)m+=")";var y=new RegExp("^("+m+")$");r=y.test(p)}else for(var b=0,w=s.length;w>b;b++)if("\\"!=s.charAt(b)){m=l,m+=s.substr(0,b+1),m=m.replace(/\|$/,"");for(var g=0;h>g;g++)m+=")";var y=new RegExp("^("+m+")$");if(r=y.test(p))break}l+=s}if(r)break}return n&&(l+=")",h--),r}null==s.regexTokens&&u();var f=n.buffer.slice(),l="",c=!1,h=0;f.splice(r,0,t);for(var p=f.join(""),d=0;d<s.regexTokens.length;d++){var o=s.regexTokens[d];if(c=a(o,o.isGroup))break}return c},cardinality:1}}}}),e.fn.inputmask});