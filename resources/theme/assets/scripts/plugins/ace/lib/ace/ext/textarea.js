define(["require","exports","module","../lib/event","../lib/useragent","../lib/net","../ace","../theme/textmate"],function(e,t,n){function a(e,t){for(var n in t)e.style[n]=t[n]}function f(e,t){if(e.type!="textarea")throw new Error("Textarea required!");var n=e.parentNode,i=document.createElement("div"),s=function(){var t="position:relative;";["margin-top","margin-left","margin-right","margin-bottom"].forEach(function(n){t+=n+":"+u(e,i,n)+";"});var n=u(e,i,"width")||e.clientWidth+"px",r=u(e,i,"height")||e.clientHeight+"px";t+="height:"+r+";width:"+n+";",t+="display:inline-block;",i.setAttribute("style",t)};r.addListener(window,"resize",s),s(),n.insertBefore(i,e.nextSibling);while(n!==document){if(n.tagName.toUpperCase()==="FORM"){var o=n.onsubmit;n.onsubmit=function(n){e.value=t(),o&&o.call(this,n)};break}n=n.parentNode}return i}function l(t,n,r){s.loadScript(t,function(){e([n],r)})}function c(e,t,n,r,i,s){function a(e){return e==="true"||e==1}var o=e.getSession(),u=e.renderer;return s=s||l,e.setDisplaySettings=function(t){t==null&&(t=n.style.display=="none"),t?(n.style.display="block",n.hideButton.focus(),e.on("focus",function r(){e.removeListener("focus",r),n.style.display="none"})):e.focus()},e.$setOption=e.setOption,e.$getOption=e.getOption,e.setOption=function(t,n){switch(t){case"mode":e.$setOption("mode","ace/mode/"+n);break;case"theme":e.$setOption("theme","ace/theme/"+n);break;case"keybindings":switch(n){case"vim":e.setKeyboardHandler("ace/keyboard/vim");break;case"emacs":e.setKeyboardHandler("ace/keyboard/emacs");break;default:e.setKeyboardHandler(null)}break;case"softWrap":case"fontSize":e.$setOption(t,n);break;default:e.$setOption(t,a(n))}},e.getOption=function(t){switch(t){case"mode":return e.$getOption("mode").substr("ace/mode/".length);case"theme":return e.$getOption("theme").substr("ace/theme/".length);case"keybindings":var n=e.getKeyboardHandler();switch(n&&n.$id){case"ace/keyboard/vim":return"vim";case"ace/keyboard/emacs":return"emacs";default:return"ace"}break;default:return e.$getOption(t)}},e.setOptions(i),e}function h(e,n,i){function f(e,t,n,r){if(!n){e.push("<input type='checkbox' title='",t,"' ",r+""=="true"?"checked='true'":"","'></input>");return}e.push("<select title='"+t+"'>");for(var i in n)e.push("<option value='"+i+"' "),r==i&&e.push(" selected "),e.push(">",n[i],"</option>");e.push("</select>")}var s=null,o={mode:"Mode:",wrap:"Soft Wrap:",theme:"Theme:",fontSize:"Font Size:",showGutter:"Display Gutter:",keybindings:"Keyboard",showPrintMargin:"Show Print Margin:",useSoftTabs:"Use Soft Tabs:",showInvisibles:"Show Invisibles"},u={mode:{text:"Plain",javascript:"JavaScript",xml:"XML",html:"HTML",css:"CSS",scss:"SCSS",python:"Python",php:"PHP",java:"Java",ruby:"Ruby",c_cpp:"C/C++",coffee:"CoffeeScript",json:"json",perl:"Perl",clojure:"Clojure",ocaml:"OCaml",csharp:"C#",haxe:"haXe",svg:"SVG",textile:"Textile",groovy:"Groovy",liquid:"Liquid",Scala:"Scala"},theme:{clouds:"Clouds",clouds_midnight:"Clouds Midnight",cobalt:"Cobalt",crimson_editor:"Crimson Editor",dawn:"Dawn",eclipse:"Eclipse",idle_fingers:"Idle Fingers",kr_theme:"Kr Theme",merbivore:"Merbivore",merbivore_soft:"Merbivore Soft",mono_industrial:"Mono Industrial",monokai:"Monokai",pastel_on_dark:"Pastel On Dark",solarized_dark:"Solarized Dark",solarized_light:"Solarized Light",textmate:"Textmate",twilight:"Twilight",vibrant_ink:"Vibrant Ink"},showGutter:s,fontSize:{"10px":"10px","11px":"11px","12px":"12px","14px":"14px","16px":"16px"},wrap:{off:"Off",40:"40",80:"80",free:"Free"},keybindings:{ace:"ace",vim:"vim",emacs:"emacs"},showPrintMargin:s,useSoftTabs:s,showInvisibles:s},a=[];a.push("<table><tr><th>Setting</th><th>Value</th></tr>");for(var l in t.defaultOptions)a.push("<tr><td>",o[l],"</td>"),a.push("<td>"),f(a,l,u[l],i.getOption(l)),a.push("</td></tr>");a.push("</table>"),e.innerHTML=a.join("");var c=function(e){var t=e.currentTarget;i.setOption(t.title,t.value)},h=function(e){var t=e.currentTarget;i.setOption(t.title,t.checked)},p=e.getElementsByTagName("select");for(var d=0;d<p.length;d++)p[d].onchange=c;var v=e.getElementsByTagName("input");for(var d=0;d<v.length;d++)v[d].onclick=h;var m=document.createElement("input");m.type="button",m.value="Hide",r.addListener(m,"click",function(){i.setDisplaySettings(!1)}),e.appendChild(m),e.hideButton=m}var r=e("../lib/event"),i=e("../lib/useragent"),s=e("../lib/net"),o=e("../ace");e("../theme/textmate"),n.exports=t=o;var u=function(e,t,n){var r=e.style[n];r||(window.getComputedStyle?r=window.getComputedStyle(e,"").getPropertyValue(n):r=e.currentStyle[n]);if(!r||r=="auto"||r=="intrinsic")r=t.style[n];return r};t.transformTextarea=function(e,n){var s,u=f(e,function(){return s.getValue()});e.style.display="none",u.style.background="white";var p=document.createElement("div");a(p,{top:"0px",left:"0px",right:"0px",bottom:"0px",border:"1px solid gray",position:"absolute"}),u.appendChild(p);var d=document.createElement("div");a(d,{position:"absolute",right:"0px",bottom:"0px",background:"red",cursor:"nw-resize",borderStyle:"solid",borderWidth:"9px 8px 10px 9px",width:"2px",borderColor:"lightblue gray gray lightblue",zIndex:101});var v=document.createElement("div"),m={top:"0px",left:"20%",right:"0px",bottom:"0px",position:"absolute",padding:"5px",zIndex:100,color:"white",display:"none",overflow:"auto",fontSize:"14px",boxShadow:"-5px 2px 3px gray"};i.isOldIE?m.backgroundColor="#333":m.backgroundColor="rgba(0, 0, 0, 0.6)",a(v,m),u.appendChild(v),n=n||t.defaultOptions;var g=o.edit(p);s=g.getSession(),s.setValue(e.value||e.innerHTML),g.focus(),u.appendChild(d),c(g,p,v,o,n,l),h(v,d,g);var y="";return r.addListener(d,"mousemove",function(e){var t=this.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;n+r<(t.width+t.height)/2?(this.style.cursor="pointer",y="toggle"):(y="resize",this.style.cursor="nw-resize")}),r.addListener(d,"mousedown",function(e){if(y=="toggle"){g.setDisplaySettings();return}u.style.zIndex=1e5;var t=u.getBoundingClientRect(),n=t.width+t.left-e.clientX,i=t.height+t.top-e.clientY;r.capture(d,function(e){u.style.width=e.clientX-t.left+n+"px",u.style.height=e.clientY-t.top+i+"px",g.resize()},function(){})}),g},t.defaultOptions={mode:"javascript",theme:"textmate",wrap:"off",fontSize:"12px",showGutter:"false",keybindings:"ace",showPrintMargin:"false",useSoftTabs:"true",showInvisibles:"false"}});