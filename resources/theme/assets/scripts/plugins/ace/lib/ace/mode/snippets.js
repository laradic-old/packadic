define(["require","exports","module","../lib/oop","./text","./text_highlight_rules","./folding/coffee"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("./text_highlight_rules").TextHighlightRules,o=function(){var e="SELECTION|CURRENT_WORD|SELECTED_TEXT|CURRENT_LINE|LINE_INDEX|LINE_NUMBER|SOFT_TABS|TAB_SIZE|FILENAME|FILEPATH|FULLNAME";this.$rules={start:[{token:"constant.language.escape",regex:/\\[\$}`\\]/},{token:"keyword",regex:"\\$(?:TM_)?(?:"+e+")\\b"},{token:"variable",regex:"\\$\\w+"},{onMatch:function(e,t,n){return n[1]?n[1]++:n.unshift(t,1),this.tokenName},tokenName:"markup.list",regex:"\\${",next:"varDecl"},{onMatch:function(e,t,n){return n[1]?(n[1]--,n[1]||n.splice(0,2),this.tokenName):"text"},tokenName:"markup.list",regex:"}"},{token:"doc.comment",regex:/^\${2}-{5,}$/}],varDecl:[{regex:/\d+\b/,token:"constant.numeric"},{token:"keyword",regex:"(?:TM_)?(?:"+e+")\\b"},{token:"variable",regex:"\\w+"},{regex:/:/,token:"punctuation.operator",next:"start"},{regex:/\//,token:"string.regex",next:"regexp"},{regex:"",next:"start"}],regexp:[{regex:/\\./,token:"escape"},{regex:/\[/,token:"regex.start",next:"charClass"},{regex:"/",token:"string.regex",next:"format"},{token:"string.regex",regex:"."}],charClass:[{regex:"\\.",token:"escape"},{regex:"\\]",token:"regex.end",next:"regexp"},{token:"string.regex",regex:"."}],format:[{regex:/\\[ulULE]/,token:"keyword"},{regex:/\$\d+/,token:"variable"},{regex:"/[gim]*:?",token:"string.regex",next:"start"},{token:"string",regex:"."}]}};r.inherits(o,s),t.SnippetHighlightRules=o;var u=function(){this.$rules={start:[{token:"text",regex:"^\\t",next:"sn-start"},{token:"invalid",regex:/^ \s*/},{token:"comment",regex:/^#.*/},{token:"constant.language.escape",regex:"^regex ",next:"regex"},{token:"constant.language.escape",regex:"^(trigger|endTrigger|name|snippet|guard|endGuard|tabTrigger|key)\\b"}],regex:[{token:"text",regex:"\\."},{token:"keyword",regex:"/"},{token:"empty",regex:"$",next:"start"}]},this.embedRules(o,"sn-",[{token:"text",regex:"^\\t",next:"sn-start"},{onMatch:function(e,t,n){return n.splice(n.length),this.tokenName},tokenName:"text",regex:"^(?!	)",next:"start"}])};r.inherits(u,s),t.SnippetGroupHighlightRules=u;var a=e("./folding/coffee").FoldMode,f=function(){this.HighlightRules=u,this.foldingRules=new a};r.inherits(f,i),function(){this.$indentWithTabs=!0,this.lineCommentStart="#",this.$id="ace/mode/snippets"}.call(f.prototype),t.Mode=f});