define(["require","exports","module","../lib/oop","./html","./handlebars_highlight_rules","./behaviour/html","./folding/html"],function(e,t,n){var r=e("../lib/oop"),i=e("./html").Mode,s=e("./handlebars_highlight_rules").HandlebarsHighlightRules,o=e("./behaviour/html").HtmlBehaviour,u=e("./folding/html").FoldMode,a=function(){i.call(this),this.HighlightRules=s,this.$behaviour=new o,this.foldingRules=new u};r.inherits(a,i),function(){this.blockComment={start:"{!--",end:"--}"},this.$id="ace/mode/handlebars"}.call(a.prototype),t.Mode=a});