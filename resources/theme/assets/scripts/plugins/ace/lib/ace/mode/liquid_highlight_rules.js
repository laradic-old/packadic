define(["require","exports","module","../lib/oop","./text_highlight_rules","./html_highlight_rules"],function(e,t,n){var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=e("./html_highlight_rules").HtmlHighlightRules,o=function(){s.call(this);var e="date|capitalize|downcase|upcase|first|last|join|sort|map|size|escape|escape_once|strip_html|strip_newlines|newline_to_br|replace|replace_first|truncate|truncatewords|prepend|append|minus|plus|times|divided_by|split",t="capture|endcapture|case|endcase|when|comment|endcomment|cycle|for|endfor|in|reversed|if|endif|else|elsif|include|endinclude|unless|endunless|style|text|image|widget|plugin|marker|endmarker|tablerow|endtablerow",n="forloop|tablerowloop",r="assign",i=this.createKeywordMapper({"variable.language":n,keyword:t,"support.function":e,"keyword.definition":r},"identifier");for(var o in this.$rules)this.$rules[o].unshift({token:"variable",regex:"{%",push:"liquid-start"},{token:"variable",regex:"{{",push:"liquid-start"});this.addRules({"liquid-start":[{token:"variable",regex:"}}",next:"pop"},{token:"variable",regex:"%}",next:"pop"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:i,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"/|\\*|\\-|\\+|=|!=|\\?\\:"},{token:"paren.lparen",regex:/[\[\({]/},{token:"paren.rparen",regex:/[\])}]/},{token:"text",regex:"\\s+"}]}),this.normalizeRules()};r.inherits(o,i),t.LiquidHighlightRules=o});