define(["require","exports","module","../lib/oop","./text","./text_highlight_rules","./tex_highlight_rules","./matching_brace_outdent"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("./text_highlight_rules").TextHighlightRules,o=e("./tex_highlight_rules").TexHighlightRules,u=e("./matching_brace_outdent").MatchingBraceOutdent,a=function(e){e?this.HighlightRules=s:this.HighlightRules=o,this.$outdent=new u};r.inherits(a,i),function(){this.getNextLineIndent=function(e,t,n){return this.$getIndent(t)},this.allowAutoInsert=function(){return!1},this.$id="ace/mode/tex"}.call(a.prototype),t.Mode=a});