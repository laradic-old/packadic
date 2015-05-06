define(["require","exports","module","../lib/oop","./html_highlight_rules"],function(e,t,n){var r=e("../lib/oop"),i=e("./html_highlight_rules").HtmlHighlightRules,s=function(){i.call(this);var e={start:[{include:"#template"},{include:"#if"},{include:"#comment-line"},{include:"#comment-block"},{include:"#comment-doc"},{include:"#call"},{include:"#css"},{include:"#param"},{include:"#print"},{include:"#msg"},{include:"#for"},{include:"#foreach"},{include:"#switch"},{include:"#tag"},{include:"text.html.basic"}],"#call":[{token:["punctuation.definition.tag.begin.soy","meta.tag.call.soy"],regex:"(\\{/?)(\\s*)(?=call|delcall)",push:[{token:"punctuation.definition.tag.end.soy",regex:"\\}",next:"pop"},{include:"#string-quoted-single"},{include:"#string-quoted-double"},{token:["entity.name.tag.soy","variable.parameter.soy"],regex:"(call|delcall)(\\s+[\\.\\w]+)"},{token:["entity.other.attribute-name.soy","text","keyword.operator.soy"],regex:"\\b(data)(\\s*)(=)"},{defaultToken:"meta.tag.call.soy"}]}],"#comment-line":[{token:["comment.line.double-slash.soy","punctuation.definition.comment.soy","comment.line.double-slash.soy"],regex:"(\\s+)(//)(.*$)"}],"#comment-block":[{token:"punctuation.definition.comment.begin.soy",regex:"/\\*(?!\\*)",push:[{token:"punctuation.definition.comment.end.soy",regex:"\\*/",next:"pop"},{defaultToken:"comment.block.soy"}]}],"#comment-doc":[{token:"punctuation.definition.comment.begin.soy",regex:"/\\*\\*(?!/)",push:[{token:"punctuation.definition.comment.end.soy",regex:"\\*/",next:"pop"},{token:["support.type.soy","text","variable.parameter.soy"],regex:"(@param|@param\\?)(\\s+)(\\w+)"},{defaultToken:"comment.block.documentation.soy"}]}],"#css":[{token:["punctuation.definition.tag.begin.soy","meta.tag.css.soy","entity.name.tag.soy"],regex:"(\\{/?)(\\s*)(css)\\b",push:[{token:"punctuation.definition.tag.end.soy",regex:"\\}",next:"pop"},{token:"support.constant.soy",regex:"\\b(?:LITERAL|REFERENCE|BACKEND_SPECIFIC|GOOG)\\b"},{defaultToken:"meta.tag.css.soy"}]}],"#for":[{token:["punctuation.definition.tag.begin.soy","meta.tag.for.soy","entity.name.tag.soy"],regex:"(\\{/?)(\\s*)(for)\\b",push:[{token:"punctuation.definition.tag.end.soy",regex:"\\}",next:"pop"},{token:"keyword.operator.soy",regex:"\\bin\\b"},{token:"support.function.soy",regex:"\\brange\\b"},{include:"#variable"},{include:"#number"},{include:"#primitive"},{defaultToken:"meta.tag.for.soy"}]}],"#foreach":[{token:["punctuation.definition.tag.begin.soy","meta.tag.foreach.soy","entity.name.tag.soy"],regex:"(\\{/?)(\\s*)(foreach)\\b",push:[{token:"punctuation.definition.tag.end.soy",regex:"\\}",next:"pop"},{token:"keyword.operator.soy",regex:"\\bin\\b"},{include:"#variable"},{defaultToken:"meta.tag.foreach.soy"}]}],"#function":[{token:"support.function.soy",regex:"\\b(?:isFirst|isLast|index|hasData|length|keys|round|floor|ceiling|min|max|randomInt)\\b"}],"#if":[{token:["punctuation.definition.tag.begin.soy","meta.tag.if.soy","entity.name.tag.soy"],regex:"(\\{/?)(\\s*)(if|elseif)\\b",push:[{token:"punctuation.definition.tag.end.soy",regex:"\\}",next:"pop"},{include:"#variable"},{include:"#operator"},{include:"#function"},{include:"#string-quoted-single"},{include:"#string-quoted-double"},{defaultToken:"meta.tag.if.soy"}]}],"#namespace":[{token:["entity.name.tag.soy","text","variable.parameter.soy"],regex:"(namespace|delpackage)(\\s+)([\\w\\.]+)"}],"#number":[{token:"constant.numeric",regex:"[\\d]+"}],"#operator":[{token:"keyword.operator.soy",regex:"==|!=|\\band\\b|\\bor\\b|\\bnot\\b|-|\\+|/|\\?:"}],"#param":[{token:["punctuation.definition.tag.begin.soy","meta.tag.param.soy","entity.name.tag.soy"],regex:"(\\{/?)(\\s*)(param)",push:[{token:"punctuation.definition.tag.end.soy",regex:"\\}",next:"pop"},{include:"#variable"},{token:["entity.other.attribute-name.soy","text","keyword.operator.soy"],regex:"\\b([\\w]+)(\\s*)((?::)?)"},{defaultToken:"meta.tag.param.soy"}]}],"#primitive":[{token:"constant.language.soy",regex:"\\b(?:null|false|true)\\b"}],"#msg":[{token:["punctuation.definition.tag.begin.soy","meta.tag.msg.soy","entity.name.tag.soy"],regex:"(\\{/?)(\\s*)(msg)\\b",push:[{token:"punctuation.definition.tag.end.soy",regex:"\\}",next:"pop"},{include:"#string-quoted-single"},{include:"#string-quoted-double"},{token:["entity.other.attribute-name.soy","text","keyword.operator.soy"],regex:"\\b(meaning|desc)(\\s*)(=)"},{defaultToken:"meta.tag.msg.soy"}]}],"#print":[{token:["punctuation.definition.tag.begin.soy","meta.tag.print.soy","entity.name.tag.soy"],regex:"(\\{/?)(\\s*)(print)\\b",push:[{token:"punctuation.definition.tag.end.soy",regex:"\\}",next:"pop"},{include:"#variable"},{include:"#print-parameter"},{include:"#number"},{include:"#primitive"},{include:"#attribute-lookup"},{defaultToken:"meta.tag.print.soy"}]}],"#print-parameter":[{token:"keyword.operator.soy",regex:"\\|"},{token:"variable.parameter.soy",regex:"noAutoescape|id|escapeHtml|escapeJs|insertWorkBreaks|truncate"}],"#special-character":[{token:"support.constant.soy",regex:"\\bsp\\b|\\bnil\\b|\\\\r|\\\\n|\\\\t|\\blb\\b|\\brb\\b"}],"#string-quoted-double":[{token:"string.quoted.double",regex:'"[^"]*"'}],"#string-quoted-single":[{token:"string.quoted.single",regex:"'[^']*'"}],"#switch":[{token:["punctuation.definition.tag.begin.soy","meta.tag.switch.soy","entity.name.tag.soy"],regex:"(\\{/?)(\\s*)(switch|case)\\b",push:[{token:"punctuation.definition.tag.end.soy",regex:"\\}",next:"pop"},{include:"#variable"},{include:"#function"},{include:"#number"},{include:"#string-quoted-single"},{include:"#string-quoted-double"},{defaultToken:"meta.tag.switch.soy"}]}],"#attribute-lookup":[{token:"punctuation.definition.attribute-lookup.begin.soy",regex:"\\[",push:[{token:"punctuation.definition.attribute-lookup.end.soy",regex:"\\]",next:"pop"},{include:"#variable"},{include:"#function"},{include:"#operator"},{include:"#number"},{include:"#primitive"},{include:"#string-quoted-single"},{include:"#string-quoted-double"}]}],"#tag":[{token:"punctuation.definition.tag.begin.soy",regex:"\\{",push:[{token:"punctuation.definition.tag.end.soy",regex:"\\}",next:"pop"},{include:"#namespace"},{include:"#variable"},{include:"#special-character"},{include:"#tag-simple"},{include:"#function"},{include:"#operator"},{include:"#attribute-lookup"},{include:"#number"},{include:"#primitive"},{include:"#print-parameter"}]}],"#tag-simple":[{token:"entity.name.tag.soy",regex:"{{\\s*(?:literal|else|ifempty|default)\\s*(?=\\})"}],"#template":[{token:["punctuation.definition.tag.begin.soy","meta.tag.template.soy"],regex:"(\\{/?)(\\s*)(?=template|deltemplate)",push:[{token:"punctuation.definition.tag.end.soy",regex:"\\}",next:"pop"},{token:["entity.name.tag.soy","text","entity.name.function.soy"],regex:"(template|deltemplate)(\\s+)([\\.\\w]+)",originalRegex:"(?<=template|deltemplate)\\s+([\\.\\w]+)"},{token:["entity.other.attribute-name.soy","text","keyword.operator.soy","text","string.quoted.double.soy"],regex:'\\b(private)(\\s*)(=)(\\s*)("true"|"false")'},{token:["entity.other.attribute-name.soy","text","keyword.operator.soy","text","string.quoted.single.soy"],regex:"\\b(private)(\\s*)(=)(\\s*)('true'|'false')"},{token:["entity.other.attribute-name.soy","text","keyword.operator.soy","text","string.quoted.double.soy"],regex:'\\b(autoescape)(\\s*)(=)(\\s*)("true"|"false"|"contextual")'},{token:["entity.other.attribute-name.soy","text","keyword.operator.soy","text","string.quoted.single.soy"],regex:"\\b(autoescape)(\\s*)(=)(\\s*)('true'|'false'|'contextual')"},{defaultToken:"meta.tag.template.soy"}]}],"#variable":[{token:"variable.other.soy",regex:"\\$[\\w\\.]+"}]};for(var t in e)this.$rules[t]?this.$rules[t].unshift.call(this.$rules[t],e[t]):this.$rules[t]=e[t];this.normalizeRules()};s.metaData={comment:"SoyTemplate",fileTypes:["soy"],firstLineMatch:"\\{\\s*namespace\\b",foldingStartMarker:"\\{\\s*template\\s+[^\\}]*\\}",foldingStopMarker:"\\{\\s*/\\s*template\\s*\\}",name:"SoyTemplate",scopeName:"source.soy"},r.inherits(s,i),t.SoyTemplateHighlightRules=s});