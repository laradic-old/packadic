function s(e){if(!(this instanceof s))return new s(e);this._wrapped=e}function fn2method(e,t){if(typeof t!="function")return;s.prototype[e]=function(){var e=[this._wrapped].concat(Array.prototype.slice.call(arguments)),n=t.apply(null,e);return typeof n=="string"?new s(n):n}}function prototype2method(e){fn2method(e,function(t){var n=Array.prototype.slice.call(arguments,1);return String.prototype[e].apply(t,n)})}s.VERSION="3.0.3",s.isBlank=require("./isBlank"),s.stripTags=require("./stripTags"),s.capitalize=require("./capitalize"),s.decapitalize=require("./decapitalize"),s.chop=require("./chop"),s.trim=require("./trim"),s.clean=require("./clean"),s.count=require("./count"),s.chars=require("./chars"),s.swapCase=require("./swapCase"),s.escapeHTML=require("./escapeHTML"),s.unescapeHTML=require("./unescapeHTML"),s.splice=require("./splice"),s.insert=require("./insert"),s.replaceAll=require("./replaceAll"),s.include=require("./include"),s.join=require("./join"),s.lines=require("./lines"),s.dedent=require("./dedent"),s.reverse=require("./reverse"),s.startsWith=require("./startsWith"),s.endsWith=require("./endsWith"),s.pred=require("./pred"),s.succ=require("./succ"),s.titleize=require("./titleize"),s.camelize=require("./camelize"),s.underscored=require("./underscored"),s.dasherize=require("./dasherize"),s.classify=require("./classify"),s.humanize=require("./humanize"),s.ltrim=require("./ltrim"),s.rtrim=require("./rtrim"),s.truncate=require("./truncate"),s.prune=require("./prune"),s.words=require("./words"),s.pad=require("./pad"),s.lpad=require("./lpad"),s.rpad=require("./rpad"),s.lrpad=require("./lrpad"),s.sprintf=require("./sprintf"),s.vsprintf=require("./vsprintf"),s.toNumber=require("./toNumber"),s.numberFormat=require("./numberFormat"),s.strRight=require("./strRight"),s.strRightBack=require("./strRightBack"),s.strLeft=require("./strLeft"),s.strLeftBack=require("./strLeftBack"),s.toSentence=require("./toSentence"),s.toSentenceSerial=require("./toSentenceSerial"),s.slugify=require("./slugify"),s.surround=require("./surround"),s.quote=require("./quote"),s.unquote=require("./unquote"),s.repeat=require("./repeat"),s.naturalCmp=require("./naturalCmp"),s.levenshtein=require("./levenshtein"),s.toBoolean=require("./toBoolean"),s.exports=require("./exports"),s.escapeRegExp=require("./helper/escapeRegExp"),s.strip=s.trim,s.lstrip=s.ltrim,s.rstrip=s.rtrim,s.center=s.lrpad,s.rjust=s.lpad,s.ljust=s.rpad,s.contains=s.include,s.q=s.quote,s.toBool=s.toBoolean,s.camelcase=s.camelize,s.prototype={value:function(){return this._wrapped}};for(var key in s)fn2method(key,s[key]);fn2method("tap",function(t,n){return n(t)});var prototypeMethods=["toUpperCase","toLowerCase","split","replace","slice","substring","substr","concat"];for(var key in prototypeMethods)prototype2method(prototypeMethods[key]);module.exports=s;