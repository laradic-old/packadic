define(["require","exports","module","../lib/oop","./javascript_highlight_rules","./xml_highlight_rules"],function(e,t,n){var r=e("../lib/oop"),i=e("./javascript_highlight_rules").JavaScriptHighlightRules,s=e("./xml_highlight_rules").XmlHighlightRules,o=function(){s.call(this),this.embedTagRules(i,"js-","script"),this.normalizeRules()};r.inherits(o,s),t.SvgHighlightRules=o});