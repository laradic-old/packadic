!function(e){"function"==typeof define&&define.amd?define(["jquery","./jquery.inputmask"],e):e(jQuery)}(function(e){return e.extend(e.inputmask.defaults.aliases,{phone:{url:"phone-codes/phone-codes.js",maskInit:"+pp(pp)pppppppp",countrycode:"",mask:function(t){t.definitions={p:{validator:function(){return!1},cardinality:1},"#":{validator:"[0-9]",cardinality:1}};var n=[];return e.ajax({url:t.url,async:!1,dataType:"json",success:function(e){n=e},error:function(e,n,r){alert(r+" - "+t.url)}}),n=n.sort(function(e,t){return(e.mask||e)<(t.mask||t)?-1:1}),""!=t.countrycode&&(t.maskInit="+"+t.countrycode+t.maskInit.substring(3)),n.splice(0,0,t.maskInit),n},nojumps:!0,nojumpsThreshold:1,onBeforeMask:function(e,t){var n=e.replace(/^0/g,"");return(n.indexOf(t.countrycode)>1||-1==n.indexOf(t.countrycode))&&(n="+"+t.countrycode+n),n}},phonebe:{alias:"phone",url:"phone-codes/phone-be.js",countrycode:"32",nojumpsThreshold:4}}),e.fn.inputmask});