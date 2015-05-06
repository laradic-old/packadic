define(["require","exports","module","./lsl_highlight_rules","./matching_brace_outdent","../range","./text","./behaviour/cstyle","./folding/cstyle","../lib/oop"],function(e,t,n){var r=e("./lsl_highlight_rules").LSLHighlightRules,i=e("./matching_brace_outdent").MatchingBraceOutdent,s=e("../range").Range,o=e("./text").Mode,u=e("./behaviour/cstyle").CstyleBehaviour,a=e("./folding/cstyle").FoldMode,f=e("../lib/oop"),l=function(){this.HighlightRules=r,this.$outdent=new i,this.$behaviour=new u,this.foldingRules=new a};f.inherits(l,o),function(){this.lineCommentStart=["//"],this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e),s=i.tokens,o=i.state;if(s.length&&s[s.length-1].type==="comment.block.lsl")return r;if(e==="start"){var u=t.match(/^.*[\{\(\[]\s*$/);u&&(r+=n)}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/lsl"}.call(l.prototype),t.Mode=l});