define(["require","exports","module","../lib/oop","./text","./yaml_highlight_rules","./matching_brace_outdent","./folding/coffee"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("./yaml_highlight_rules").YamlHighlightRules,o=e("./matching_brace_outdent").MatchingBraceOutdent,u=e("./folding/coffee").FoldMode,a=function(){this.HighlightRules=s,this.$outdent=new o,this.foldingRules=new u};r.inherits(a,i),function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t);if(e=="start"){var i=t.match(/^.*[\{\(\[]\s*$/);i&&(r+=n)}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/yaml"}.call(a.prototype),t.Mode=a});