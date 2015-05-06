ace.define("ace/mode/c9search_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(e,t,n){function r(e,t){try{return new RegExp(e,t)}catch(n){}}var i=e("../lib/oop"),s=e("../lib/lang"),o=e("./text_highlight_rules").TextHighlightRules,u=function(){this.$rules={start:[{tokenNames:["c9searchresults.constant.numeric","c9searchresults.text","c9searchresults.text","c9searchresults.keyword"],regex:"(^\\s+[0-9]+)(:\\s)(.+)",onMatch:function(e,t,n){var r=this.splitRegex.exec(e),i=this.tokenNames,s=[{type:i[0],value:r[1]},{type:i[1],value:r[2]}],o=n[1],u=r[3],a,f=0;if(o&&o.exec){o.lastIndex=0;while(a=o.exec(u)){var l=u.substring(f,a.index);f=o.lastIndex,l&&s.push({type:i[2],value:l});if(a[0])s.push({type:i[3],value:a[0]});else if(!l)break}}return f<u.length&&s.push({type:i[2],value:u.substr(f)}),s}},{token:["string","text"],regex:"(\\S.*)(:$)"},{regex:"Searching for .*$",onMatch:function(e,t,n){var i=e.split("");if(i.length<3)return"text";var o,u,a,f=0,l=[{value:i[f++]+"'",type:"text"},{value:u=i[f++],type:"text"},{value:"'"+i[f++],type:"text"}];i[2]!==" in"&&(a=i[f],l.push({value:"'"+i[f++]+"'",type:"text"},{value:i[f++],type:"text"})),l.push({value:" "+i[f++]+" ",type:"text"}),i[f+1]?(o=i[f+1],l.push({value:"("+i[f+1]+")",type:"text"}),f+=1):f-=1;while(f++<i.length)i[f]&&l.push({value:i[f],type:"text"});a&&(u=a,o=""),u&&(/regex/.test(o)||(u=s.escapeRegExp(u)),/whole/.test(o)&&(u="\\b"+u+"\\b"));var c=u&&r("("+u+")",/ sensitive/.test(o)?"g":"ig");return c&&(n[0]=t,n[1]=c),l}},{regex:"\\d+",token:"constant.numeric"}]}};i.inherits(u,o),t.C9SearchHighlightRules=u}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){var r=e("../range").Range,i=function(){};(function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var n=e.getLine(t),i=n.match(/^(\s*\})/);if(!i)return 0;var s=i[1].length,o=e.findMatchingBracket({row:t,column:s});if(!o||o.row==t)return 0;var u=this.$getIndent(e.getLine(o.row));e.replace(new r(t,0,t,s-1),u)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i}),ace.define("ace/mode/folding/c9search",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){var r=e("../../lib/oop"),i=e("../../range").Range,s=e("./fold_mode").FoldMode,o=t.FoldMode=function(){};r.inherits(o,s),function(){this.foldingStartMarker=/^(\S.*\:|Searching for.*)$/,this.foldingStopMarker=/^(\s+|Found.*)$/,this.getFoldWidgetRange=function(e,t,n){var r=e.doc.getAllLines(n),s=r[n],o=/^(Found.*|Searching for.*)$/,u=/^(\S.*\:|\s*)$/,a=o.test(s)?o:u,f=n,l=n;if(this.foldingStartMarker.test(s)){for(var c=n+1,h=e.getLength();c<h;c++)if(a.test(r[c]))break;l=c}else if(this.foldingStopMarker.test(s)){for(var c=n-1;c>=0;c--){s=r[c];if(a.test(s))break}f=c}if(f!=l){var p=s.length;return a===o&&(p=s.search(/\(Found[^)]+\)$|$/)),new i(f,p,l,0)}}}.call(o.prototype)}),ace.define("ace/mode/c9search",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/c9search_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/c9search"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("./c9search_highlight_rules").C9SearchHighlightRules,o=e("./matching_brace_outdent").MatchingBraceOutdent,u=e("./folding/c9search").FoldMode,a=function(){this.HighlightRules=s,this.$outdent=new o,this.foldingRules=new u};r.inherits(a,i),function(){this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t);return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/c9search"}.call(a.prototype),t.Mode=a});