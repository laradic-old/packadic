(function(){function t(t){test.mode(t,e,Array.prototype.slice.call(arguments,1))}var e=CodeMirror.getMode({tabSize:4,indentUnit:2},"slim");t("elementName","[tag h1] Hey There"),t("oneElementPerLine","[tag h1] Hey There .h2"),t("idShortcut","[attribute&def #test] Hey There"),t("tagWithIdShortcuts","[tag h1][attribute&def #test] Hey There"),t("classShortcut","[attribute&qualifier .hello] Hey There"),t("tagWithIdAndClassShortcuts","[tag h1][attribute&def #test][attribute&qualifier .hello] Hey There"),t("docType","[keyword doctype] xml"),t("comment","[comment / Hello WORLD]"),t("notComment","[tag h1] This is not a / comment "),t("attributes",'[tag a]([attribute title]=[string "test"]) [attribute href]=[string "link"]}'),t("multiLineAttributes",'[tag a]([attribute title]=[string "test"]','  ) [attribute href]=[string "link"]}'),t("htmlCode","[tag&bracket <][tag h1][tag&bracket >]Title[tag&bracket </][tag h1][tag&bracket >]"),t("rubyBlock","[operator&special =][variable-2 @item]"),t("selectorRubyBlock","[tag a][attribute&qualifier .test][operator&special =] [variable-2 @item]"),t("nestedRubyBlock","[tag a]",'  [operator&special =][variable puts] [string "test"]'),t("multilinePlaintext","[tag p]","  | Hello,","    World"),t("multilineRuby","[tag p]","  [comment /# this is a comment]","     [comment and this is a comment too]","  | Date/Time","  [operator&special -] [variable now] [operator =] [tag DateTime][operator .][property now]","  [tag strong][operator&special =] [variable now]",'  [operator&special -] [keyword if] [variable now] [operator >] [tag DateTime][operator .][property parse]([string "December 31, 2006"])','     [operator&special =][string "Happy"]','     [operator&special =][string "Belated"]','     [operator&special =][string "Birthday"]'),t("multilineComment","[comment /]","  [comment Multiline]","  [comment Comment]"),t("hamlAfterRubyTag","[attribute&qualifier .block]","  [tag strong][operator&special =] [variable now]","  [attribute&qualifier .test]","     [operator&special =][variable now]","  [attribute&qualifier .right]"),t("stretchedRuby",'[operator&special =] [variable puts] [string "Hello"],','   [string "World"]'),t("interpolationInHashAttribute",'[tag div]{[attribute id] = [string "]#{[variable test]}[string _]#{[variable ting]}[string "]} test'),t("interpolationInHTMLAttribute",'[tag div]([attribute title]=[string "]#{[variable test]}[string _]#{[variable ting]()}[string "]) Test')})();