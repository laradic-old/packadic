define(["require","exports","module","../lib/oop","./c_cpp","./glsl_highlight_rules","./matching_brace_outdent","../range","./behaviour/cstyle","./folding/cstyle"],function(e,t,n){var r=e("../lib/oop"),i=e("./c_cpp").Mode,s=e("./glsl_highlight_rules").glslHighlightRules,o=e("./matching_brace_outdent").MatchingBraceOutdent,u=e("../range").Range,a=e("./behaviour/cstyle").CstyleBehaviour,f=e("./folding/cstyle").FoldMode,l=function(){this.HighlightRules=s,this.$outdent=new o,this.$behaviour=new a,this.foldingRules=new f};r.inherits(l,i),function(){this.$id="ace/mode/glsl"}.call(l.prototype),t.Mode=l});