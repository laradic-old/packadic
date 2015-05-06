(function(){function t(t){test.mode(t,e,Array.prototype.slice.call(arguments,1))}function n(e,t,n){var r=[t];for(var i=1;i<=n;++i)r[i]=e.join(r[i-1]);return r}function s(e,t,n,r,i){var s=[r];for(var o=1;o<=i;++o)s[o]=n[0]+e[o-1]+n[1]+t[o-1]+n[2]+s[o-1]+n[3];return s}var e=CodeMirror.getMode({indentUnit:2},"php");t("simple_test",'[meta <?php] [keyword echo] [string "aaa"]; [meta ?>]'),t("variable_interpolation_non_alphanumeric","[meta <?php]",'[keyword echo] [string "aaa$~$!$@$#$$$%$^$&$*$($)$.$<$>$/$\\$}$\\"$:$;$?$|$[[$]]$+$=aaa"]',"[meta ?>]"),t("variable_interpolation_digits","[meta <?php]",'[keyword echo] [string "aaa$1$2$3$4$5$6$7$8$9$0aaa"]',"[meta ?>]"),t("variable_interpolation_simple_syntax_1","[meta <?php]",'[keyword echo] [string "aaa][variable-2 $aaa][string .aaa"];',"[meta ?>]"),t("variable_interpolation_simple_syntax_2","[meta <?php]",'[keyword echo] [string "][variable-2 $aaaa][[',"[number 2]",']][string aa"];','[keyword echo] [string "][variable-2 $aaaa][[',"[number 2345]",']][string aa"];','[keyword echo] [string "][variable-2 $aaaa][[',"[number 2.3]",']][string aa"];','[keyword echo] [string "][variable-2 $aaaa][[',"[variable aaaaa]",']][string aa"];','[keyword echo] [string "][variable-2 $aaaa][[',"[variable-2 $aaaaa]",']][string aa"];','[keyword echo] [string "1aaa][variable-2 $aaaa][[',"[number 2]",']][string aa"];','[keyword echo] [string "aaa][variable-2 $aaaa][[',"[number 2345]",']][string aa"];','[keyword echo] [string "aaa][variable-2 $aaaa][[',"[number 2.3]",']][string aa"];','[keyword echo] [string "aaa][variable-2 $aaaa][[',"[variable aaaaa]",']][string aa"];','[keyword echo] [string "aaa][variable-2 $aaaa][[',"[variable-2 $aaaaa]",']][string aa"];',"[meta ?>]"),t("variable_interpolation_simple_syntax_3","[meta <?php]",'[keyword echo] [string "aaa][variable-2 $aaaa]->[variable aaaaa][string .aaaaaa"];','[keyword echo] [string "aaa][variable-2 $aaaa][string ->][variable-2 $aaaaa][string .aaaaaa"];','[keyword echo] [string "aaa][variable-2 $aaaa]->[variable aaaaa][string [[2]].aaaaaa"];','[keyword echo] [string "aaa][variable-2 $aaaa]->[variable aaaaa][string ->aaaa2.aaaaaa"];',"[meta ?>]"),t("variable_interpolation_escaping","[meta <?php] [comment /* Escaping */]",'[keyword echo] [string "aaa\\$aaaa->aaa.aaa"];','[keyword echo] [string "aaa\\$aaaa[[2]]aaa.aaa"];','[keyword echo] [string "aaa\\$aaaa[[asd]]aaa.aaa"];','[keyword echo] [string "aaa{\\$aaaa->aaa.aaa"];','[keyword echo] [string "aaa{\\$aaaa[[2]]aaa.aaa"];','[keyword echo] [string "aaa{\\aaaaa[[asd]]aaa.aaa"];','[keyword echo] [string "aaa\\${aaaa->aaa.aaa"];','[keyword echo] [string "aaa\\${aaaa[[2]]aaa.aaa"];','[keyword echo] [string "aaa\\${aaaa[[asd]]aaa.aaa"];',"[meta ?>]"),t("variable_interpolation_complex_syntax_1","[meta <?php]",'[keyword echo] [string "aaa][variable-2 $]{[variable aaaa]}[string ->aaa.aaa"];','[keyword echo] [string "aaa][variable-2 $]{[variable-2 $aaaa]}[string ->aaa.aaa"];','[keyword echo] [string "aaa][variable-2 $]{[variable-2 $aaaa][[',"  [number 42]",']]}[string ->aaa.aaa"];','[keyword echo] [string "aaa][variable-2 $]{[variable aaaa][meta ?>]aaaaaa'),t("variable_interpolation_complex_syntax_2","[meta <?php] [comment /* Monsters */]",'[keyword echo] [string "][variable-2 $]{[variable aaa][comment /*}?>} $aaa<?php } */]}[string ->aaa.aaa"];','[keyword echo] [string "][variable-2 $]{[variable aaa][comment /*}?>*/][[','  [string "aaa][variable-2 $aaa][string {}][variable-2 $]{[variable aaa]}[string "]',']]}[string ->aaa.aaa"];','[keyword echo] [string "][variable-2 $]{[variable aaa][comment /*} } $aaa } */]}[string ->aaa.aaa"];');var r=n(['[string "][variable-2 $]{[variable aaa] [operator +] ','}[string "]'],'[comment /* }?>} */] [string "aaa][variable-2 $aaa][string .aaa"]',10);t("variable_interpolation_complex_syntax_3_1","[meta <?php] [comment /* Recursive monsters */]","[keyword echo] "+r[4]+";","[keyword echo] "+r[7]+";","[keyword echo] "+r[8]+";","[keyword echo] "+r[5]+";","[keyword echo] "+r[1]+";","[keyword echo] "+r[6]+";","[keyword echo] "+r[9]+";","[keyword echo] "+r[0]+";","[keyword echo] "+r[10]+";","[keyword echo] "+r[2]+";","[keyword echo] "+r[3]+";",'[keyword echo] [string "end"];',"[meta ?>]");var i=n(['[string "a][variable-2 $]{[variable aaa] [operator +] '," [operator +] ",'}[string .a"]'],'[comment /* }?>{{ */] [string "a?>}{{aa][variable-2 $aaa][string .a}a?>a"]',5);t("variable_interpolation_complex_syntax_3_2","[meta <?php] [comment /* Recursive monsters 2 */]","[keyword echo] "+i[0]+";","[keyword echo] "+i[1]+";","[keyword echo] "+i[5]+";","[keyword echo] "+i[4]+";","[keyword echo] "+i[2]+";","[keyword echo] "+i[3]+";",'[keyword echo] [string "end"];',"[meta ?>]");var o=s(r,i,['[string "a][variable-2 $]{[variable aaa] [operator +] '," [operator +] "," [operator +] ",'}[string .a"]'],'[comment /* }?>{{ */] [string "a?>}{{aa][variable-2 $aaa][string .a}a?>a"]',4);t("variable_interpolation_complex_syntax_3_3","[meta <?php] [comment /* Recursive monsters 2 */]","[keyword echo] "+o[4]+";","[keyword echo] "+o[0]+";","[keyword echo] "+o[3]+";","[keyword echo] "+o[1]+";","[keyword echo] "+o[2]+";",'[keyword echo] [string "end"];',"[meta ?>]"),t("variable_interpolation_heredoc","[meta <?php]","[string <<<here]","[string doc ][variable-2 $]{[variable yay]}[string more]","[string here]; [comment // normal]")})();