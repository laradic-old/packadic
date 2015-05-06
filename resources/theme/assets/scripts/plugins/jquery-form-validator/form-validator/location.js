(function(e){e.formUtils.addValidator({name:"country",validatorFunction:function(t){return e.inArray(t.toLowerCase(),this.countries)>-1},countries:["afghanistan","albania","algeria","american samoa","andorra","angola","anguilla","antarctica","antigua and barbuda","arctic ocean","argentina","armenia","aruba","ashmore and cartier islands","atlantic ocean","australia","austria","azerbaijan","bahamas","bahrain","baltic sea","baker island","bangladesh","barbados","bassas da india","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","borneo","bosnia and herzegovina","botswana","bouvet island","brazil","british virgin islands","brunei","bulgaria","burkina faso","burundi","cambodia","cameroon","canada","cape verde","cayman islands","central african republic","chad","chile","china","christmas island","clipperton island","cocos islands","colombia","comoros","cook islands","coral sea islands","costa rica","croatia","cuba","cyprus","czech republic","democratic republic of the congo","denmark","djibouti","dominica","dominican republic","east timor","ecuador","egypt","el salvador","equatorial guinea","eritrea","estonia","ethiopia","europa island","falkland islands","faroe islands","fiji","finland","france","french guiana","french polynesia","french southern and antarctic lands","gabon","gambia","gaza strip","georgia","germany","ghana","gibraltar","glorioso islands","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guinea-bissau","guyana","haiti","heard island and mcdonald islands","honduras","hong kong","howland island","hungary","iceland","india","indian ocean","indonesia","iran","iraq","ireland","isle of man","israel","italy","jamaica","jan mayen","japan","jarvis island","jersey","johnston atoll","jordan","juan de nova island","kazakhstan","kenya","kerguelen archipelago","kingman reef","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macau","macedonia","madagascar","malawi","malaysia","maldives","mali","malta","marshall islands","martinique","mauritania","mauritius","mayotte","mediterranean sea","mexico","micronesia","midway islands","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","navassa island","nepal","netherlands","netherlands antilles","new caledonia","new zealand","nicaragua","niger","nigeria","niue","norfolk island","north korea","north sea","northern mariana islands","norway","oman","pacific ocean","pakistan","palau","palmyra atoll","panama","papua new guinea","paracel islands","paraguay","peru","philippines","pitcairn islands","poland","portugal","puerto rico","qatar","republic of the congo","reunion","romania","ross sea","russia","rwanda","saint helena","saint kitts and nevis","saint lucia","saint pierre and miquelon","saint vincent and the grenadines","samoa","san marino","sao tome and principe","saudi arabia","senegal","serbia","seychelles","sierra leone","singapore","slovakia","slovenia","solomon islands","somalia","south africa","south georgia and the south sandwich islands","south korea","southern ocean","spain","spratly islands","sri lanka","sudan","suriname","svalbard","swaziland","sweden","switzerland","syria","taiwan","tajikistan","tanzania","tasman sea","thailand","togo","tokelau","tonga","trinidad and tobago","tromelin island","tunisia","turkey","turkmenistan","turks and caicos islands","tuvalu","uganda","ukraine","united arab emirates","united kingdom","uruguay","usa","uzbekistan","vanuatu","venezuela","viet nam","virgin islands","wake island","wallis and futuna","west bank","western sahara","yemen","zambia","zimbabwe"],errorMessage:"",errorMessageKey:"badCustomVal"}),e.formUtils.addValidator({name:"federatestate",validatorFunction:function(t){return e.inArray(t.toLowerCase(),this.states)>-1},states:["alabama","alaska","arizona","arkansas","california","colorado","connecticut","delaware","florida","georgia","hawaii","idaho","illinois","indiana","iowa","kansas","kentucky","louisiana","maine","maryland","district of columbia","massachusetts","michigan","minnesota","mississippi","missouri","montana","nebraska","nevada","new hampshire","new jersey","new mexico","new york","north carolina","north dakota","ohio","oklahoma","oregon","pennsylvania","rhode island","south carolina","south dakota","tennessee","texas","utah","vermont","virginia","washington","west virginia","wisconsin","wyoming"],errorMessage:"",errorMessageKey:"badCustomVal"}),e.formUtils.addValidator({name:"longlat",validatorFunction:function(e){var t=/^[+-]?\d+\.\d+, ?[+-]?\d+\.\d+$/;return t.test(e)},errorMessage:"",errorMessageKey:"badCustomVal"});var t=function(t){var n=[];return e.each(t,function(e,t){n.push(t.substr(0,1).toUpperCase()+t.substr(1,t.length))}),n.sort(),n};e.fn.suggestCountry=function(n){var r=t(e.formUtils.validators.validate_country.countries);return e.formUtils.suggest(this,r,n)},e.fn.suggestState=function(n){var r=t(e.formUtils.validators.validate_federatestate.states);return e.formUtils.suggest(this,r,n)}})(jQuery);