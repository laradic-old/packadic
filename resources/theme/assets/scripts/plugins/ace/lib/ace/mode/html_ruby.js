define(["require","exports","module","../lib/oop","./html_ruby_highlight_rules","./html","./javascript","./css","./ruby"],function(e,t,n){var r=e("../lib/oop"),i=e("./html_ruby_highlight_rules").HtmlRubyHighlightRules,s=e("./html").Mode,o=e("./javascript").Mode,u=e("./css").Mode,a=e("./ruby").Mode,f=function(){s.call(this),this.HighlightRules=i,this.createModeDelegates({"js-":o,"css-":u,"ruby-":a})};r.inherits(f,s),function(){this.$id="ace/mode/html_ruby"}.call(f.prototype),t.Mode=f});