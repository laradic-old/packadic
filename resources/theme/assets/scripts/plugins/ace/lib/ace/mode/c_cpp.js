define(["require","exports","module","../lib/oop","./text","./c_cpp_highlight_rules","./matching_brace_outdent","../range","./behaviour/cstyle","./folding/cstyle"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("./c_cpp_highlight_rules").c_cppHighlightRules,o=e("./matching_brace_outdent").MatchingBraceOutdent,u=e("../range").Range,a=e("./behaviour/cstyle").CstyleBehaviour,f=e("./folding/cstyle").FoldMode,l=function(){this.HighlightRules=s,this.$outdent=new o,this.$behaviour=new a,this.foldingRules=new f};r.inherits(l,i),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e),s=i.tokens,o=i.state;if(s.length&&s[s.length-1].type=="comment")return r;if(e=="start"){var u=t.match(/^.*[\{\(\[]\s*$/);u&&(r+=n)}else if(e=="doc-start"){if(o=="start")return"";var u=t.match(/^\s*(\/?)\*/);u&&(u[1]&&(r+=" "),r+="* ")}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/c_cpp"}.call(l.prototype),t.Mode=l});