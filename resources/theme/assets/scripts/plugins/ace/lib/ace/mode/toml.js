define(["require","exports","module","../lib/oop","./text","./toml_highlight_rules","./folding/ini"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("./toml_highlight_rules").TomlHighlightRules,o=e("./folding/ini").FoldMode,u=function(){this.HighlightRules=s,this.foldingRules=new o};r.inherits(u,i),function(){this.lineCommentStart="#",this.$id="ace/mode/toml"}.call(u.prototype),t.Mode=u});