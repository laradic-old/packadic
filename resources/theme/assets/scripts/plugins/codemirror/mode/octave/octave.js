(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("octave",function(){function e(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function l(e,t){return!e.sol()&&e.peek()==="'"?(e.next(),t.tokenize=h,"operator"):(t.tokenize=h,h(e,t))}function c(e,t){return e.match(/^.*%}/)?(t.tokenize=h,"comment"):(e.skipToEnd(),"comment")}function h(p,d){if(p.eatSpace())return null;if(p.match("%{"))return d.tokenize=c,p.skipToEnd(),"comment";if(p.match(/^[%#]/))return p.skipToEnd(),"comment";if(p.match(/^[0-9\.+-]/,!1)){if(p.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/))return p.tokenize=h,"number";if(p.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/))return"number";if(p.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/))return"number"}return p.match(e(["nan","NaN","inf","Inf"]))?"number":p.match(/^"([^"]|(""))*"/)?"string":p.match(/^'([^']|(''))*'/)?"string":p.match(f)?"keyword":p.match(a)?"builtin":p.match(u)?"variable":p.match(t)||p.match(r)?"operator":p.match(n)||p.match(i)||p.match(s)?null:p.match(o)?(d.tokenize=l,null):(p.next(),"error")}var t=new RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]"),n=new RegExp("^[\\(\\[\\{\\},:=;]"),r=new RegExp("^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))"),i=new RegExp("^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))"),s=new RegExp("^((>>=)|(<<=))"),o=new RegExp("^[\\]\\)]"),u=new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*"),a=e(["error","eval","function","abs","acos","atan","asin","cos","cosh","exp","log","prod","sum","log10","max","min","sign","sin","sinh","sqrt","tan","reshape","break","zeros","default","margin","round","ones","rand","syn","ceil","floor","size","clear","zeros","eye","mean","std","cov","det","eig","inv","norm","rank","trace","expm","logm","sqrtm","linspace","plot","title","xlabel","ylabel","legend","text","grid","meshgrid","mesh","num2str","fft","ifft","arrayfun","cellfun","input","fliplr","flipud","ismember"]),f=e(["return","case","switch","else","elseif","end","endif","endfunction","if","otherwise","do","for","while","try","catch","classdef","properties","events","methods","global","persistent","endfor","endwhile","printf","sprintf","disp","until","continue","pkg"]);return{startState:function(){return{tokenize:h}},token:function(e,t){var n=t.tokenize(e,t);if(n==="number"||n==="variable")t.tokenize=l;return n}}}),e.defineMIME("text/x-octave","octave")});