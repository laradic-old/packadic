(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){function l(e){for(var t in f)f.hasOwnProperty(t)&&(e.attrs[t]=f[t])}function h(t,n){var r={schemaInfo:a};if(n)for(var i in n)r[i]=n[i];return e.hint.xml(t,r)}var t="ab aa af ak sq am ar an hy as av ae ay az bm ba eu be bn bh bi bs br bg my ca ch ce ny zh cv kw co cr hr cs da dv nl dz en eo et ee fo fj fi fr ff gl ka de el gn gu ht ha he hz hi ho hu ia id ie ga ig ik io is it iu ja jv kl kn kr ks kk km ki rw ky kv kg ko ku kj la lb lg li ln lo lt lu lv gv mk mg ms ml mt mi mr mh mn na nv nb nd ne ng nn no ii nr oc oj cu om or os pa pi fa pl ps pt qu rm rn ro ru sa sc sd se sm sg sr gd sn si sk sl so st es su sw ss sv ta te tg th ti bo tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa cy wo fy xh yi yo za zu".split(" "),n=["_blank","_self","_top","_parent"],r=["ascii","utf-8","utf-16","latin1","latin1"],i=["get","post","put","delete"],s=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],o=["all","screen","print","embossed","braille","handheld","print","projection","screen","tty","tv","speech","3d-glasses","resolution [>][<][=] [X]","device-aspect-ratio: X/Y","orientation:portrait","orientation:landscape","device-height: [X]","device-width: [X]"],u={attrs:{}},a={a:{attrs:{href:null,ping:null,type:null,media:o,target:n,hreflang:t}},abbr:u,acronym:u,address:u,applet:u,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:o,hreflang:t,type:null,shape:["default","rect","circle","poly"]}},article:u,aside:u,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["","autoplay"],loop:["","loop"],controls:["","controls"]}},b:u,base:{attrs:{href:null,target:n}},basefont:u,bdi:u,bdo:u,big:u,blockquote:{attrs:{cite:null}},body:u,br:u,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["","autofocus"],disabled:["","autofocus"],formenctype:s,formmethod:i,formnovalidate:["","novalidate"],formtarget:n,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:u,center:u,cite:u,code:u,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["","disabled"],checked:["","checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["","disabled"],multiple:["","multiple"]}},datalist:{attrs:{data:null}},dd:u,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["","open"]}},dfn:u,dir:u,div:u,dl:u,dt:u,em:u,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["","disabled"],form:null,name:null}},figcaption:u,figure:u,font:u,footer:u,form:{attrs:{action:null,name:null,"accept-charset":r,autocomplete:["on","off"],enctype:s,method:i,novalidate:["","novalidate"],target:n}},frame:u,frameset:u,h1:u,h2:u,h3:u,h4:u,h5:u,h6:u,head:{attrs:{},children:["title","base","link","style","meta","script","noscript","command"]},header:u,hgroup:u,hr:u,html:{attrs:{manifest:null},children:["head","body"]},i:u,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["","seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["","autofocus"],checked:["","checked"],disabled:["","disabled"],formenctype:s,formmethod:i,formnovalidate:["","novalidate"],formtarget:n,multiple:["","multiple"],readonly:["","readonly"],required:["","required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:u,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["","autofocus"],disabled:["","disabled"],keytype:["RSA"]}},label:{attrs:{"for":null,form:null}},legend:u,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:t,media:o,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:u,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:r,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:u,noframes:u,noscript:u,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["","typemustmatch"]}},ol:{attrs:{reversed:["","reversed"],start:null,type:["1","a","A","i","I"]}},optgroup:{attrs:{disabled:["","disabled"],label:null}},option:{attrs:{disabled:["","disabled"],label:null,selected:["","selected"],value:null}},output:{attrs:{"for":null,form:null,name:null}},p:u,param:{attrs:{name:null,value:null}},pre:u,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:u,rt:u,ruby:u,s:u,samp:u,script:{attrs:{type:["text/javascript"],src:null,async:["","async"],defer:["","defer"],charset:r}},section:u,select:{attrs:{form:null,name:null,size:null,autofocus:["","autofocus"],disabled:["","disabled"],multiple:["","multiple"]}},small:u,source:{attrs:{src:null,type:null,media:null}},span:u,strike:u,strong:u,style:{attrs:{type:["text/css"],media:o,scoped:null}},sub:u,summary:u,sup:u,table:u,tbody:u,td:{attrs:{colspan:null,rowspan:null,headers:null}},textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["","autofocus"],disabled:["","disabled"],readonly:["","readonly"],required:["","required"],wrap:["soft","hard"]}},tfoot:u,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:u,time:{attrs:{datetime:null}},title:u,tr:u,track:{attrs:{src:null,label:null,"default":null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:t}},tt:u,u:u,ul:u,"var":u,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["","autoplay"],mediagroup:["movie"],muted:["","muted"],controls:["","controls"]}},wbr:u},f={accesskey:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"],"class":null,contenteditable:["true","false"],contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["en","es"],spellcheck:["true","false"],style:null,tabindex:["1","2","3","4","5","6","7","8","9"],title:null,translate:["yes","no"],onclick:null,rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"]};l(u);for(var c in a)a.hasOwnProperty(c)&&a[c]!=u&&l(a[c]);e.htmlSchema=a,e.registerHelper("hint","html",h)});