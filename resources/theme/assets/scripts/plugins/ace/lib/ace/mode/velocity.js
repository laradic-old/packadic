define(["require","exports","module","../lib/oop","./html","./velocity_highlight_rules","./folding/velocity"],function(e,t,n){var r=e("../lib/oop"),i=e("./html").Mode,s=e("./velocity_highlight_rules").VelocityHighlightRules,o=e("./folding/velocity").FoldMode,u=function(){i.call(this),this.HighlightRules=s,this.foldingRules=new o};r.inherits(u,i),function(){this.lineCommentStart="##",this.blockComment={start:"#*",end:"*#"},this.$id="ace/mode/velocity"}.call(u.prototype),t.Mode=u});