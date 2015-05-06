(function(e){function t(){this._settings=[],this._extensions=[],this.regional=[],this.regional[""]={errorLoadingText:"Error loading"},this.local=this.regional[""],this._uuid=(new Date).getTime(),this._ie=!!window.ActiveXObject}function n(t,n){this._svg=t,this._container=n;for(var r=0;r<e.svg._extensions.length;r++){var i=e.svg._extensions[r];this[i[0]]=new i[1](this)}}function r(){this._path=""}function i(){this._parts=[]}e.extend(t.prototype,{markerClassName:"hasSVG",propertyName:"svgwrapper",svgNS:"http://www.w3.org/2000/svg",xlinkNS:"http://www.w3.org/1999/xlink",_wrapperClass:n,_attrNames:{class_:"class",in_:"in",alignmentBaseline:"alignment-baseline",baselineShift:"baseline-shift",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",underlinePosition:"underline-position",underlineThickness:"underline-thickness",vertAdvY:"vert-adv-y",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode"},_attachSVG:function(t,n){var r=t.namespaceURI===this.svgNS?t:null,t=r?null:t;if(e(t||r).hasClass(this.markerClassName))return;typeof n=="string"?n={loadURL:n}:typeof n=="function"&&(n={onLoad:n}),e(t||r).addClass(this.markerClassName);try{r||(r=document.createElementNS(this.svgNS,"svg"),r.setAttribute("version","1.1"),t.clientWidth>0&&r.setAttribute("width",t.clientWidth),t.clientHeight>0&&r.setAttribute("height",t.clientHeight),t.appendChild(r)),this._afterLoad(t,r,n||{})}catch(i){e(t).html("<p>SVG is not supported natively on this browser</p>")}},_afterLoad:function(t,n,r){var r=r||this._settings[t.id];this._settings[t?t.id:""]=null;var i=new this._wrapperClass(n,t);e.data(t||n,e.svg.propertyName,i);try{r.loadURL&&i.load(r.loadURL,r),r.settings&&i.configure(r.settings),r.onLoad&&!r.loadURL&&r.onLoad.apply(t||n,[i])}catch(s){alert(s)}},_getSVG:function(t){return e(t).data(this.propertyName)},_destroySVG:function(t){t=e(t);if(!t.hasClass(this.markerClassName))return;t.removeClass(this.markerClassName).removeData(this.propertyName),t[0].namespaceURI!==this.svgNS&&t.empty()},addExtension:function(e,t){this._extensions.push([e,t])},isSVGElem:function(t){return t.nodeType===1&&t.namespaceURI===e.svg.svgNS}}),e.extend(n.prototype,{width:function(){return this._container?this._container.clientWidth:this._svg.width},height:function(){return this._container?this._container.clientHeight:this._svg.height},root:function(){return this._svg},configure:function(t,n,r){t.nodeName||(r=n,n=t,t=this._svg);if(r)for(var i=t.attributes.length-1;i>=0;i--){var s=t.attributes.item(i);s.nodeName!=="onload"&&s.nodeName!=="version"&&s.nodeName.substring(0,5)!=="xmlns"&&t.attributes.removeNamedItem(s.nodeName)}for(var o in n)t.setAttribute(e.svg._attrNames[o]||o,n[o]);return this},getElementById:function(e){return this._svg.ownerDocument.getElementById(e)},change:function(t,n){if(t)for(var r in n)n[r]==null?t.removeAttribute(e.svg._attrNames[r]||r):t.setAttribute(e.svg._attrNames[r]||r,n[r]);return this},_args:function(t,n,r){n.splice(0,0,"parent"),n.splice(n.length,0,"settings");var i={},s=0;t[0]!=null&&t[0].jquery&&(t[0]=t[0][0]),t[0]!=null&&(typeof t[0]!="object"||!t[0].nodeName)&&(i.parent=null,s=1);for(var o=0;o<t.length;o++)i[n[o+s]]=t[o];return r&&e.each(r,function(e,t){typeof i[t]=="object"&&(i.settings=i[t],i[t]=null)}),i},title:function(e,t,n){var r=this._args(arguments,["text"]),i=this._makeNode(r.parent,"title",r.settings||{});return i.appendChild(this._svg.ownerDocument.createTextNode(r.text)),i},describe:function(e,t,n){var r=this._args(arguments,["text"]),i=this._makeNode(r.parent,"desc",r.settings||{});return i.appendChild(this._svg.ownerDocument.createTextNode(r.text)),i},defs:function(t,n,r){var i=this._args(arguments,["id"],["id"]);return this._makeNode(i.parent,"defs",e.extend(i.id?{id:i.id}:{},i.settings||{}))},symbol:function(t,n,r,i,s,o,u){var a=this._args(arguments,["id","x1","y1","width","height"]);return this._makeNode(a.parent,"symbol",e.extend({id:a.id,viewBox:a.x1+" "+a.y1+" "+a.width+" "+a.height},a.settings||{}))},marker:function(t,n,r,i,s,o,u,a){var f=this._args(arguments,["id","refX","refY","mWidth","mHeight","orient"],["orient"]);return this._makeNode(f.parent,"marker",e.extend({id:f.id,refX:f.refX,refY:f.refY,markerWidth:f.mWidth,markerHeight:f.mHeight,orient:f.orient||"auto"},f.settings||{}))},style:function(t,n,r){var i=this._args(arguments,["styles"]),s=this._makeNode(i.parent,"style",e.extend({type:"text/css"},i.settings||{}));return s.appendChild(this._svg.ownerDocument.createTextNode(i.styles)),s},script:function(t,n,r,i){var s=this._args(arguments,["script","type"],["type"]),o=this._makeNode(s.parent,"script",e.extend({type:s.type||"text/javascript"},s.settings||{}));return o.appendChild(this._svg.ownerDocument.createTextNode(s.script)),e.svg._ie&&e.globalEval(s.script),o},linearGradient:function(t,n,r,i,s,o,u,a){var f=this._args(arguments,["id","stops","x1","y1","x2","y2"],["x1"]),l=e.extend({id:f.id},f.x1!=null?{x1:f.x1,y1:f.y1,x2:f.x2,y2:f.y2}:{});return this._gradient(f.parent,"linearGradient",e.extend(l,f.settings||{}),f.stops)},radialGradient:function(t,n,r,i,s,o,u,a,f){var l=this._args(arguments,["id","stops","cx","cy","r","fx","fy"],["cx"]),c=e.extend({id:l.id},l.cx!=null?{cx:l.cx,cy:l.cy,r:l.r,fx:l.fx,fy:l.fy}:{});return this._gradient(l.parent,"radialGradient",e.extend(c,l.settings||{}),l.stops)},_gradient:function(t,n,r,i){var s=this._makeNode(t,n,r);for(var o=0;o<i.length;o++){var u=i[o];this._makeNode(s,"stop",e.extend({offset:u[0],stopColor:u[1]},u[2]!=null?{stopOpacity:u[2]}:{}))}return s},pattern:function(t,n,r,i,s,o,u,a,f,l,c){var h=this._args(arguments,["id","x","y","width","height","vx","vy","vwidth","vheight"],["vx"]),p=e.extend({id:h.id,x:h.x,y:h.y,width:h.width,height:h.height},h.vx!=null?{viewBox:h.vx+" "+h.vy+" "+h.vwidth+" "+h.vheight}:{});return this._makeNode(h.parent,"pattern",e.extend(p,h.settings||{}))},clipPath:function(t,n,r,i){var s=this._args(arguments,["id","units"]);return s.units=s.units||"userSpaceOnUse",this._makeNode(s.parent,"clipPath",e.extend({id:s.id,clipPathUnits:s.units},s.settings||{}))},mask:function(t,n,r,i,s,o,u){var a=this._args(arguments,["id","x","y","width","height"]);return this._makeNode(a.parent,"mask",e.extend({id:a.id,x:a.x,y:a.y,width:a.width,height:a.height},a.settings||{}))},createPath:function(){return new r},createText:function(){return new i},svg:function(t,n,r,i,s,o,u,a,f,l){var c=this._args(arguments,["x","y","width","height","vx","vy","vwidth","vheight"],["vx"]),h=e.extend({x:c.x,y:c.y,width:c.width,height:c.height},c.vx!=null?{viewBox:c.vx+" "+c.vy+" "+c.vwidth+" "+c.vheight}:{});return this._makeNode(c.parent,"svg",e.extend(h,c.settings||{}))},group:function(t,n,r){var i=this._args(arguments,["id"],["id"]);return this._makeNode(i.parent,"g",e.extend({id:i.id},i.settings||{}))},use:function(t,n,r,i,s,o,u){var a=this._args(arguments,["x","y","width","height","ref"]);typeof a.x=="string"&&(a.ref=a.x,a.settings=a.y,a.x=a.y=a.width=a.height=null);var f=this._makeNode(a.parent,"use",e.extend({x:a.x,y:a.y,width:a.width,height:a.height},a.settings||{}));return f.setAttributeNS(e.svg.xlinkNS,"href",a.ref),f},link:function(t,n,r){var i=this._args(arguments,["ref"]),s=this._makeNode(i.parent,"a",i.settings);return s.setAttributeNS(e.svg.xlinkNS,"href",i.ref),s},image:function(t,n,r,i,s,o,u){var a=this._args(arguments,["x","y","width","height","ref"]),f=this._makeNode(a.parent,"image",e.extend({x:a.x,y:a.y,width:a.width,height:a.height},a.settings||{}));return f.setAttributeNS(e.svg.xlinkNS,"href",a.ref),f},path:function(t,n,r){var i=this._args(arguments,["path"]);return this._makeNode(i.parent,"path",e.extend({d:i.path.path?i.path.path():i.path},i.settings||{}))},rect:function(t,n,r,i,s,o,u,a){var f=this._args(arguments,["x","y","width","height","rx","ry"],["rx"]);return this._makeNode(f.parent,"rect",e.extend({x:f.x,y:f.y,width:f.width,height:f.height},f.rx?{rx:f.rx,ry:f.ry}:{},f.settings||{}))},circle:function(t,n,r,i,s){var o=this._args(arguments,["cx","cy","r"]);return this._makeNode(o.parent,"circle",e.extend({cx:o.cx,cy:o.cy,r:o.r},o.settings||{}))},ellipse:function(t,n,r,i,s,o){var u=this._args(arguments,["cx","cy","rx","ry"]);return this._makeNode(u.parent,"ellipse",e.extend({cx:u.cx,cy:u.cy,rx:u.rx,ry:u.ry},u.settings||{}))},line:function(t,n,r,i,s,o){var u=this._args(arguments,["x1","y1","x2","y2"]);return this._makeNode(u.parent,"line",e.extend({x1:u.x1,y1:u.y1,x2:u.x2,y2:u.y2},u.settings||{}))},polyline:function(e,t,n){var r=this._args(arguments,["points"]);return this._poly(r.parent,"polyline",r.points,r.settings)},polygon:function(e,t,n){var r=this._args(arguments,["points"]);return this._poly(r.parent,"polygon",r.points,r.settings)},_poly:function(t,n,r,i){var s="";for(var o=0;o<r.length;o++)s+=r[o].join()+" ";return this._makeNode(t,n,e.extend({points:e.trim(s)},i||{}))},text:function(t,n,r,i,s){var o=this._args(arguments,["x","y","value"]);return typeof o.x=="string"&&arguments.length<4&&(o.value=o.x,o.settings=o.y,o.x=o.y=null),this._text(o.parent,"text",o.value,e.extend({x:o.x&&e.isArray(o.x)?o.x.join(" "):o.x,y:o.y&&e.isArray(o.y)?o.y.join(" "):o.y},o.settings||{}))},textpath:function(t,n,r,i){var s=this._args(arguments,["path","value"]),o=this._text(s.parent,"textPath",s.value,s.settings||{});return o.setAttributeNS(e.svg.xlinkNS,"href",s.path),o},_text:function(t,n,r,i){var s=this._makeNode(t,n,i);if(typeof r=="string")s.appendChild(s.ownerDocument.createTextNode(r));else for(var o=0;o<r._parts.length;o++){var u=r._parts[o];if(u[0]==="tspan"){var a=this._makeNode(s,u[0],u[2]);a.appendChild(s.ownerDocument.createTextNode(u[1])),s.appendChild(a)}else if(u[0]==="tref"){var a=this._makeNode(s,u[0],u[2]);a.setAttributeNS(e.svg.xlinkNS,"href",u[1]),s.appendChild(a)}else if(u[0]==="textpath"){var f=e.extend({},u[2]);f.href=null;var a=this._makeNode(s,u[0],f);a.setAttributeNS(e.svg.xlinkNS,"href",u[2].href),a.appendChild(s.ownerDocument.createTextNode(u[1])),s.appendChild(a)}else s.appendChild(s.ownerDocument.createTextNode(u[1]))}return s},other:function(e,t,n){var r=this._args(arguments,["name"]);return this._makeNode(r.parent,r.name,r.settings||{})},_makeNode:function(t,n,r){t=t||this._svg;var i=this._svg.ownerDocument.createElementNS(e.svg.svgNS,n);for(var n in r){var s=r[n];s!=null&&(typeof s!="string"||s!=="")&&i.setAttribute(e.svg._attrNames[n]||n,s)}return t.appendChild(i),i},add:function(t,n){var r=this._args(arguments.length===1?[null,t]:arguments,["node"]),i=this;r.parent=r.parent||this._svg,r.node=r.node.jquery?r.node:e(r.node);try{r.parent.appendChild(r.node.cloneNode(!0))}catch(s){r.node.each(function(){var e=i._cloneAsSVG(this);e&&r.parent.appendChild(e)})}return this},clone:function(t,n){var r=this,i=this._args(arguments.length===1?[null,t]:arguments,["node"]);i.parent=i.parent||this._svg,i.node=i.node.jquery?i.node:e(i.node);var s=[];return i.node.each(function(){var e=r._cloneAsSVG(this);e&&(e.id="",i.parent.appendChild(e),s.push(e))}),s},_cloneAsSVG:function(t){var n=null;if(t.nodeType===1){n=this._svg.ownerDocument.createElementNS(e.svg.svgNS,this._checkName(t.nodeName));for(var r=0;r<t.attributes.length;r++){var i=t.attributes.item(r);i.nodeName!=="xmlns"&&i.nodeValue&&(i.prefix==="xlink"?n.setAttributeNS(e.svg.xlinkNS,i.localName||i.baseName,i.nodeValue):n.setAttribute(this._checkName(i.nodeName),i.nodeValue))}for(var r=0;r<t.childNodes.length;r++){var s=this._cloneAsSVG(t.childNodes[r]);s&&n.appendChild(s)}}else if(t.nodeType===3)e.trim(t.nodeValue)&&(n=this._svg.ownerDocument.createTextNode(t.nodeValue));else if(t.nodeType===4&&e.trim(t.nodeValue))try{n=this._svg.ownerDocument.createCDATASection(t.nodeValue)}catch(o){n=this._svg.ownerDocument.createTextNode(t.nodeValue.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"))}return n},_checkName:function(e){return e=e.substring(0,1)>="A"&&e.substring(0,1)<="Z"?e.toLowerCase():e,e.substring(0,4)==="svg:"?e.substring(4):e},load:function(t,n){n=typeof n=="boolean"?{addTo:n}:typeof n=="function"?{onLoad:n}:typeof n=="string"?{parent:n}:typeof n=="object"&&n.nodeName?{parent:n}:typeof n=="object"&&n.jquery?{parent:n}:n||{},!n.parent&&!n.addTo&&this.clear(!1);var r=[this._svg.getAttribute("width"),this._svg.getAttribute("height")],i=this,s=function(t){t=e.svg.local.errorLoadingText+": "+t,n.onLoad?n.onLoad.apply(i._container||i._svg,[i,t]):i.text(null,10,20,t)},o=function(e){var t=new ActiveXObject("Microsoft.XMLDOM");return t.validateOnParse=!1,t.resolveExternals=!1,t.async=!1,t.loadXML(e),t.parseError.errorCode!==0?(s(t.parseError.reason),null):t},u=function(o){if(!o)return;if(o.documentElement.nodeName!=="svg"){var u=o.getElementsByTagName("parsererror"),a=u.length?u[0].getElementsByTagName("div"):[];s(u.length?(a.length?a[0]:u[0]).firstChild.nodeValue:"???");return}var f=n.parent?e(n.parent)[0]:i._svg,l={};for(var c=0;c<o.documentElement.attributes.length;c++){var h=o.documentElement.attributes.item(c);h.nodeName!=="version"&&h.nodeName.substring(0,5)!=="xmlns"&&(l[h.nodeName]=h.nodeValue)}i.configure(f,l,!n.parent);var p=o.documentElement.childNodes;for(var c=0;c<p.length;c++)try{f.appendChild(i._svg.ownerDocument.importNode(p[c],!0)),p[c].nodeName==="script"&&e.globalEval(p[c].textContent)}catch(d){i.add(f,p[c])}if(!n.keepRelativeLinks&&t.match("/")){var v=t.replace(/\/[^\/]*$/,"/");e("*",f).each(function(){var t=e(this).attr("xlink:href");t&&!t.match(/(^[a-z][-a-z0-9+.]*:.*$)|(^\/.*$)|(^#.*$)/i)&&e(this).attr("xlink:href",v+t)})}n.changeSize||i.configure(f,{width:r[0],height:r[1]}),n.onLoad&&n.onLoad.apply(i._container||i._svg,[i])};if(t.match("<svg"))try{u((new DOMParser).parseFromString(t,"text/xml"))}catch(a){s(a)}else e.ajax({url:t,dataType:"xml",success:function(e){u(e)},error:function(e,t,n){s(t+(n?" "+n.message:""))}});return this},remove:function(e){return e=e.jquery?e[0]:e,e.parentNode.removeChild(e),this},clear:function(e){e&&this.configure({},!0);while(this._svg.firstChild)this._svg.removeChild(this._svg.firstChild);return this},toSVG:function(e){return e=e||this._svg,typeof XMLSerializer=="undefined"?this._toSVG(e):(new XMLSerializer).serializeToString(e)},_toSVG:function(t){var n="";if(!t)return n;if(t.nodeType===3)n=t.nodeValue;else if(t.nodeType===4)n="<![CDATA["+t.nodeValue+"]]>";else{n="<"+t.nodeName;if(t.attributes)for(var r=0;r<t.attributes.length;r++){var i=t.attributes.item(r);e.trim(i.nodeValue)!==""&&!i.nodeValue.match(/^\[object/)&&!i.nodeValue.match(/^function/)&&(n+=" "+(i.namespaceURI===e.svg.xlinkNS?"xlink:":"")+i.nodeName+'="'+i.nodeValue+'"')}if(t.firstChild){n+=">";var s=t.firstChild;while(s)n+=this._toSVG(s),s=s.nextSibling;n+="</"+t.nodeName+">"}else n+="/>"}return n}}),e.extend(r.prototype,{reset:function(){return this._path="",this},move:function(t,n,r){return r=e.isArray(t)?n:r,this._coords(r?"m":"M",t,n)},line:function(t,n,r){return r=e.isArray(t)?n:r,this._coords(r?"l":"L",t,n)},horiz:function(t,n){return this._path+=(n?"h":"H")+(e.isArray(t)?t.join(" "):t),this},vert:function(t,n){return this._path+=(n?"v":"V")+(e.isArray(t)?t.join(" "):t),this},curveC:function(t,n,r,i,s,o,u){return u=e.isArray(t)?n:u,this._coords(u?"c":"C",t,n,r,i,s,o)},smoothC:function(t,n,r,i,s){return s=e.isArray(t)?n:s,this._coords(s?"s":"S",t,n,r,i)},curveQ:function(t,n,r,i,s){return s=e.isArray(t)?n:s,this._coords(s?"q":"Q",t,n,r,i)},smoothQ:function(t,n,r){return r=e.isArray(t)?n:r,this._coords(r?"t":"T",t,n)},_coords:function(t,n,r,i,s,o,u){if(e.isArray(n))for(var a=0;a<n.length;a++){var f=n[a];this._path+=(a===0?t:" ")+f[0]+","+f[1]+(f.length<4?"":" "+f[2]+","+f[3]+(f.length<6?"":" "+f[4]+","+f[5]))}else this._path+=t+n+","+r+(i==null?"":" "+i+","+s+(o==null?"":" "+o+","+u));return this},arc:function(t,n,r,i,s,o,u,a){a=e.isArray(t)?n:a,this._path+=a?"a":"A";if(e.isArray(t))for(var f=0;f<t.length;f++){var l=t[f];this._path+=(f===0?"":" ")+l[0]+","+l[1]+" "+l[2]+" "+(l[3]?"1":"0")+","+(l[4]?"1":"0")+" "+l[5]+","+l[6]}else this._path+=t+","+n+" "+r+" "+(i?"1":"0")+","+(s?"1":"0")+" "+o+","+u;return this},close:function(){return this._path+="z",this},path:function(){return this._path}}),r.prototype.moveTo=r.prototype.move,r.prototype.lineTo=r.prototype.line,r.prototype.horizTo=r.prototype.horiz,r.prototype.vertTo=r.prototype.vert,r.prototype.curveCTo=r.prototype.curveC,r.prototype.smoothCTo=r.prototype.smoothC,r.prototype.curveQTo=r.prototype.curveQ,r.prototype.smoothQTo=r.prototype.smoothQ,r.prototype.arcTo=r.prototype.arc,e.extend(i.prototype,{reset:function(){return this._parts=[],this},string:function(e){return this._parts.push(["text",e]),this},span:function(e,t){return this._parts.push(["tspan",e,t]),this},ref:function(e,t){return this._parts.push(["tref",e,t]),this},path:function(t,n,r){return this._parts.push(["textpath",n,e.extend({href:t},r||{})]),this}}),e.fn.svg=function(t){var n=Array.prototype.slice.call(arguments,1);return typeof t=="string"&&t==="get"?e.svg["_"+t+"SVG"].apply(e.svg,[this[0]].concat(n)):this.each(function(){typeof t=="string"?e.svg["_"+t+"SVG"].apply(e.svg,[this].concat(n)):e.svg._attachSVG(this,t||{})})},e.svg=new t})(jQuery);