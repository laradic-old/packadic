(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror"),require("diff_match_patch")):typeof define=="function"&&define.amd?define(["../../lib/codemirror","diff_match_patch"],e):e(CodeMirror,diff_match_patch)})(function(e,t){function i(e,t){this.mv=e,this.type=t,this.classes=t=="left"?{chunk:"CodeMirror-merge-l-chunk",start:"CodeMirror-merge-l-chunk-start",end:"CodeMirror-merge-l-chunk-end",insert:"CodeMirror-merge-l-inserted",del:"CodeMirror-merge-l-deleted",connect:"CodeMirror-merge-l-connect"}:{chunk:"CodeMirror-merge-r-chunk",start:"CodeMirror-merge-r-chunk-start",end:"CodeMirror-merge-r-chunk-end",insert:"CodeMirror-merge-r-inserted",del:"CodeMirror-merge-r-deleted",connect:"CodeMirror-merge-r-connect"},e.options.connect=="align"&&(this.aligners=[])}function s(t){t.diffOutOfDate&&(t.diff=x(t.orig.getValue(),t.edit.getValue()),t.diffOutOfDate=!1,e.signal(t.edit,"updateDiff",t.diff))}function o(e){function i(r){r=="full"&&(e.svg&&D(e.svg),e.copyButtons&&D(e.copyButtons),c(e.edit,t.marked,e.classes),c(e.orig,n.marked,e.classes),t.from=t.to=n.from=n.to=0),s(e),e.showDifferences&&(h(e.edit,e.diff,t,DIFF_INSERT,e.classes),h(e.orig,e.diff,n,DIFF_DELETE,e.classes)),d(e)}function o(e){clearTimeout(r),r=setTimeout(i,e==1?250:100)}function u(){e.diffOutOfDate||(e.diffOutOfDate=!0,t.from=t.to=n.from=n.to=0),o(!0)}var t={from:0,to:0,marked:[]},n={from:0,to:0,marked:[]},r;return e.edit.on("change",u),e.orig.on("change",u),e.edit.on("markerAdded",o),e.edit.on("markerCleared",o),e.orig.on("markerAdded",o),e.orig.on("markerCleared",o),e.edit.on("viewportChange",o),e.orig.on("viewportChange",o),i(),i}function u(e){e.edit.on("scroll",function(){a(e,DIFF_INSERT)&&d(e)}),e.orig.on("scroll",function(){a(e,DIFF_DELETE)&&d(e)})}function a(e,t){if(e.diffOutOfDate)return!1;if(!e.lockScroll)return!0;var n,r,i=+(new Date);t==DIFF_INSERT?(n=e.edit,r=e.orig):(n=e.orig,r=e.edit);if(n.state.scrollSetBy==e&&(n.state.scrollSetAt||0)+50>i)return!1;var s=n.getScrollInfo();if(e.mv.options.connect=="align")d=s.top;else{var o=.5*s.clientHeight,u=s.top+o,a=n.lineAtHeight(u,"local"),l=L(e.diff,a,t==DIFF_INSERT),c=f(n,t==DIFF_INSERT?l.edit:l.orig),h=f(r,t==DIFF_INSERT?l.orig:l.edit),p=(u-c.top)/(c.bot-c.top),d=h.top-o+p*(h.bot-h.top),v,m;if(d>s.top&&(m=s.top/o)<1)d=d*m+s.top*(1-m);else if((v=s.height-s.clientHeight-s.top)<o){var g=r.getScrollInfo(),y=g.height-g.clientHeight-d;y>v&&(m=v/o)<1&&(d=d*m+(g.height-g.clientHeight-v)*(1-m))}}return r.scrollTo(s.left,d),r.state.scrollSetAt=i,r.state.scrollSetBy=e,!0}function f(e,t){var n=t.after;return n==null&&(n=e.lastLine()+1),{top:e.heightAtLine(t.before||0,"local"),bot:e.heightAtLine(n,"local")}}function l(e,t,n){e.lockScroll=t,t&&n!=0&&a(e,DIFF_INSERT)&&d(e),e.lockButton.innerHTML=t?"⇛⇚":"⇛&nbsp;&nbsp;⇚"}function c(t,n,r){for(var i=0;i<n.length;++i){var s=n[i];s instanceof e.TextMarker?s.clear():s.parent&&(t.removeLineClass(s,"background",r.chunk),t.removeLineClass(s,"background",r.start),t.removeLineClass(s,"background",r.end))}n.length=0}function h(e,t,n,r,i){var s=e.getViewport();e.operation(function(){n.from==n.to||s.from-n.to>20||n.from-s.to>20?(c(e,n.marked,i),p(e,t,r,n.marked,s.from,s.to,i),n.from=s.from,n.to=s.to):(s.from<n.from&&(p(e,t,r,n.marked,s.from,n.from,i),n.from=s.from),s.to>n.to&&(p(e,t,r,n.marked,n.to,s.to,i),n.to=s.to))})}function p(e,t,r,i,s,o,u){function h(t,n){var r=Math.max(s,t),a=Math.min(o,n);for(var f=r;f<a;++f){var l=e.addLineClass(f,"background",u.chunk);f==t&&e.addLineClass(l,"background",u.start),f==n-1&&e.addLineClass(l,"background",u.end),i.push(l)}t==n&&r==n&&a==n&&(r?i.push(e.addLineClass(r-1,"background",u.end)):i.push(e.addLineClass(r,"background",u.start)))}var a=n(0,0),f=n(s,0),l=e.clipPos(n(o-1)),c=r==DIFF_DELETE?u.del:u.insert,p=0;for(var d=0;d<t.length;++d){var v=t[d],m=v[0],g=v[1];if(m==DIFF_EQUAL){var y=a.line+(k(t,d)?0:1);B(a,g);var b=a.line+(C(t,d)?1:0);b>y&&(d&&h(p,y),p=b)}else if(m==r){var w=B(a,g,!0),E=F(f,a),S=j(l,w);I(E,S)||i.push(e.markText(E,S,{className:c})),a=w}}p<=a.line&&h(p,a.line+1)}function d(e){if(!e.showDifferences)return;var t=e.mv.options.connect=="align",n,r;if(t){if(!e.orig.curOp)return e.orig.operation(function(){d(e)});n=e.edit.getScrollInfo().top,r=e.orig.getScrollInfo().top;for(var i=0;i<e.aligners.length;i++)e.aligners[i].clear();e.aligners.length=0;var s={edit:0,orig:0}}if(e.svg){D(e.svg);var o=e.gap.offsetWidth;P(e.svg,"width",o,"height",e.gap.offsetHeight)}e.copyButtons&&D(e.copyButtons);var u=e.edit.getViewport(),a=e.orig.getViewport(),f=e.edit.getScrollInfo().top,l=e.orig.getScrollInfo().top;T(e.diff,function(n,r,i,c){i<=u.to&&c>=u.from&&n<=a.to&&r>=a.from&&v(e,n,r,i,c,l,f,o);if(t&&(i<=u.to||n<=a.to)){var h=c<u.from&&r<a.from;m(e,n,r,i,c,h&&s)}}),t&&(s.edit&&e.aligners.push(g(e.edit,0,s.edit)),s.orig&&e.aligners.push(g(e.orig,0,s.orig)),e.edit.scrollTo(null,n),e.orig.scrollTo(null,r))}function v(e,t,n,i,s,o,u,a){var f=e.type=="left",l=e.orig.heightAtLine(t,"local")-o;if(e.svg){var c=l,h=e.edit.heightAtLine(i,"local")-u;if(f){var p=c;c=h,h=p}var d=e.orig.heightAtLine(n,"local")-o,v=e.edit.heightAtLine(s,"local")-u;if(f){var p=d;d=v,v=p}var m=" C "+a/2+" "+h+" "+a/2+" "+c+" "+(a+2)+" "+c,g=" C "+a/2+" "+d+" "+a/2+" "+v+" -1 "+v;P(e.svg.appendChild(document.createElementNS(r,"path")),"d","M -1 "+h+m+" L "+(a+2)+" "+d+g+" z","class",e.classes.connect)}if(e.copyButtons){var y=e.copyButtons.appendChild(_("div",e.type=="left"?"⇝":"⇜","CodeMirror-merge-copy")),b=e.mv.options.allowEditingOriginals;y.title=b?"Push to left":"Revert chunk",y.chunk={topEdit:i,botEdit:s,topOrig:t,botOrig:n},y.style.top=l+"px";if(b){var w=e.orig.heightAtLine(i,"local")-u,E=e.copyButtons.appendChild(_("div",e.type=="right"?"⇝":"⇜","CodeMirror-merge-copy-reverse"));E.title="Push to right",E.chunk={topEdit:t,botEdit:n,topOrig:i,botOrig:s},E.style.top=w+"px",e.type=="right"?E.style.left="2px":E.style.right="2px"}}}function m(e,t,n,r,i,s){var o=e.orig.heightAtLine(t,"local"),u=e.orig.heightAtLine(n,"local"),a=e.edit.heightAtLine(r,"local"),f=e.edit.heightAtLine(i,"local"),l=u-o,c=f-a,h=c-l;return h>1?s?s.orig+=h:e.aligners.push(g(e.orig,n-1,h)):h<-1&&(s?s.edit-=h:e.aligners.push(g(e.edit,i-1,-h))),0}function g(e,t,n){var r=document.createElement("div");return r.style.height=n+"px",r.style.minWidth="1px",e.addLineWidget(t,r,{height:n})}function y(e,t,r,i){if(e.diffOutOfDate)return;t.replaceRange(r.getRange(n(i.topOrig,0),n(i.botOrig,0)),n(i.topEdit,0),n(i.botEdit,0))}function w(t){var n=t.lockButton=_("div",null,"CodeMirror-merge-scrolllock");n.title="Toggle locked scrolling";var i=_("div",[n],"CodeMirror-merge-scrolllock-wrap");e.on(n,"click",function(){l(t,!t.lockScroll)});var s=[i];t.mv.options.revertButtons!==!1&&(t.copyButtons=_("div",null,"CodeMirror-merge-copybuttons-"+t.type),e.on(t.copyButtons,"click",function(e){var n=e.target||e.srcElement;if(!n.chunk)return;if(n.className=="CodeMirror-merge-copy-reverse"){y(t,t.orig,t.edit,n.chunk);return}y(t,t.edit,t.orig,n.chunk)}),s.unshift(t.copyButtons));if(t.mv.options.connect!="align"){var o=document.createElementNS&&document.createElementNS(r,"svg");o&&!o.createSVGRect&&(o=null),t.svg=o,o&&s.push(o)}return t.gap=_("div",s,"CodeMirror-merge-gap")}function E(e){return typeof e=="string"?e:e.getValue()}function x(e,t){var n=S.diff_main(e,t);S.diff_cleanupSemantic(n);for(var r=0;r<n.length;++r){var i=n[r];i[1]?r&&n[r-1][0]==i[0]&&(n.splice(r--,1),n[r][1]+=i[1]):n.splice(r--,1)}return n}function T(e,t){var r=0,i=0,s=n(0,0),o=n(0,0);for(var u=0;u<e.length;++u){var a=e[u],f=a[0];if(f==DIFF_EQUAL){var l=k(e,u)?0:1,c=s.line+l,h=o.line+l;B(s,a[1],null,o);var p=C(e,u)?1:0,d=s.line+p,v=o.line+p;d>c&&(u&&t(i,h,r,c),r=d,i=v)}else B(f==DIFF_INSERT?s:o,a[1])}(r<=s.line||i<=o.line)&&t(i,o.line+1,r,s.line+1)}function N(e){s(e);var t=[];return T(e.diff,function(e,n,r,i){t.push({origFrom:e,origTo:n,editFrom:r,editTo:i})}),t}function C(e,t){if(t==e.length-1)return!0;var n=e[t+1][1];return n.length==1||n.charCodeAt(0)!=10?!1:t==e.length-2?!0:(n=e[t+2][1],n.length>1&&n.charCodeAt(0)==10)}function k(e,t){if(t==0)return!0;var n=e[t-1][1];return n.charCodeAt(n.length-1)!=10?!1:t==1?!0:(n=e[t-2][1],n.charCodeAt(n.length-1)==10)}function L(e,t,n){var r,i,s,o;return T(e,function(e,u,a,f){var l=n?a:e,c=n?f:u;i==null&&(l>t?(i=a,o=e):c>t&&(i=f,o=u)),c<=t?(r=f,s=u):l<=t&&(r=a,s=e)}),{edit:{before:r,after:i},orig:{before:s,after:o}}}function A(e,t,r){function o(){s.clear(),e.removeLineClass(t,"wrap","CodeMirror-merge-collapsed-line")}e.addLineClass(t,"wrap","CodeMirror-merge-collapsed-line");var i=document.createElement("span");i.className="CodeMirror-merge-collapsed-widget",i.title="Identical text collapsed. Click to expand.";var s=e.markText(n(t,0),n(r-1),{inclusiveLeft:!0,inclusiveRight:!0,replacedWith:i,clearOnEnter:!0});return i.addEventListener("click",o),{mark:s,clear:o}}function O(e,t,n,r){var i=A(e.orig,t,t+r),s=A(e.edit,n,n+r);i.mark.on("clear",function(){s.clear()}),s.mark.on("clear",function(){i.clear()})}function M(e,t){typeof t!="number"&&(t=2);var n=e.orig.firstLine(),r=e.edit.firstLine();T(e.diff,function(i,s,o,u){var a=i-t-n;a>t&&O(e,n,r,a),n=s+t,r=u+t});var i=e.orig.lastLine()+1-n;i>t&&O(e,n,r,i)}function _(e,t,n,r){var i=document.createElement(e);n&&(i.className=n),r&&(i.style.cssText=r);if(typeof t=="string")i.appendChild(document.createTextNode(t));else if(t)for(var s=0;s<t.length;++s)i.appendChild(t[s]);return i}function D(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)}function P(e){for(var t=1;t<arguments.length;t+=2)e.setAttribute(arguments[t],arguments[t+1])}function H(e,t){t||(t={});for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function B(e,t,r,i){var s=r?n(e.line,e.ch):e,o=0;for(;;){var u=t.indexOf("\n",o);if(u==-1)break;++s.line,i&&++i.line,o=u+1}return s.ch=(o?0:s.ch)+(t.length-o),i&&(i.ch=(o?0:i.ch)+(t.length-o)),s}function j(e,t){return(e.line-t.line||e.ch-t.ch)<0?e:t}function F(e,t){return(e.line-t.line||e.ch-t.ch)>0?e:t}function I(e,t){return e.line==t.line&&e.ch==t.ch}var n=e.Pos,r="http://www.w3.org/2000/svg";i.prototype={constructor:i,init:function(t,n,r){this.edit=this.mv.edit,this.orig=e(t,H({value:n,readOnly:!this.mv.options.allowEditingOriginals},H(r))),this.diff=x(E(n),E(r.value)),this.diffOutOfDate=!1,this.showDifferences=r.showDifferences!==!1,this.forceUpdate=o(this),l(this,!0,!1),u(this)},setShowDifferences:function(e){e=e!==!1,e!=this.showDifferences&&(this.showDifferences=e,this.forceUpdate("full"))}};var b=e.MergeView=function(t,n){if(!(this instanceof b))return new b(t,n);this.options=n;var r=n.origLeft,s=n.origRight==null?n.orig:n.origRight;if(r&&s){if(n.connect=="align")throw new Error('connect: "align" is not supported for three-way merge views');if(n.collapseIdentical)throw new Error("collapseIdentical option is not supported for three-way merge views")}var o=r!=null,u=s!=null,a=1+(o?1:0)+(u?1:0),f=[],l=this.left=null,c=this.right=null;if(o){l=this.left=new i(this,"left");var h=_("div",null,"CodeMirror-merge-pane");f.push(h),f.push(w(l))}var p=_("div",null,"CodeMirror-merge-pane");f.push(p);if(u){c=this.right=new i(this,"right"),f.push(w(c));var v=_("div",null,"CodeMirror-merge-pane");f.push(v)}(u?v:p).className+=" CodeMirror-merge-pane-rightmost",f.push(_("div",null,null,"height: 0; clear: both;"));var m=this.wrap=t.appendChild(_("div",f,"CodeMirror-merge CodeMirror-merge-"+a+"pane"));this.edit=e(p,H(n)),l&&l.init(h,r,n),c&&c.init(v,s,n),n.collapseIdentical&&M(l||c,n.collapseIdentical);var g=function(){l&&d(l),c&&d(c)};e.on(window,"resize",g);var y=setInterval(function(){for(var t=m.parentNode;t&&t!=document.body;t=t.parentNode);t||(clearInterval(y),e.off(window,"resize",g))},5e3)};b.prototype={constuctor:b,editor:function(){return this.edit},rightOriginal:function(){return this.right&&this.right.orig},leftOriginal:function(){return this.left&&this.left.orig},setShowDifferences:function(e){this.right&&this.right.setShowDifferences(e),this.left&&this.left.setShowDifferences(e)},rightChunks:function(){return this.right&&N(this.right)},leftChunks:function(){return this.left&&N(this.left)}};var S=new t});