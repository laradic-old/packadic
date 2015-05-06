define(["require","exports","module","../lib/oop","./text","./perl_highlight_rules","./matching_brace_outdent","../range","./folding/cstyle"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("./perl_highlight_rules").PerlHighlightRules,o=e("./matching_brace_outdent").MatchingBraceOutdent,u=e("../range").Range,a=e("./folding/cstyle").FoldMode,f=function(){this.HighlightRules=s,this.$outdent=new o,this.foldingRules=new a({start:"^=(begin|item)\\b",end:"^=(cut)\\b"})};r.inherits(f,i),function(){this.lineCommentStart="#",this.blockComment=[{start:"=begin",end:"=cut"},{start:"=item",end:"=cut"}],this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e),s=i.tokens;if(s.length&&s[s.length-1].type=="comment")return r;if(e=="start"){var o=t.match(/^.*[\{\(\[\:]\s*$/);o&&(r+=n)}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/perl"}.call(f.prototype),t.Mode=f});