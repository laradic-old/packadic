(function(e){function t(e){this._wrapper=e,this._drawNow=!1,this._title={value:"",offset:25,settings:{textAnchor:"middle"}},this._area=[.1,.1,.8,.9],this._areaFormat={fill:"none",stroke:"black"},this._gridlines=[],this._equalXY=!0,this._functions=[],this._onstatus=null,this._uuid=(new Date).getTime(),this._plotCont=this._wrapper.svg(0,0,0,0,{class_:"svg-plot"}),this.xAxis=new i(this),this.xAxis.title("X",20),this.yAxis=new i(this),this.yAxis.title("Y",20),this.legend=new s(this),this._drawNow=!0}function n(t,n,i,s,o,u,a,f){typeof n!="string"&&(f=a,a=u,u=o,o=s,s=i,i=n,n=null),e.isArray(s)||(f=a,a=u,u=o,o=s,s=null),typeof o!="number"&&(f=a,a=u,u=o,o=null),typeof u!="string"&&(f=a,a=u,u=null),typeof a!="number"&&(f=a,a=null),this._plot=t,this._name=n||"",this._fn=i||r,this._range=s,this._points=o||100,this._stroke=u||"black",this._strokeWidth=a||1,this._settings=f||{}}function r(e){return e}function i(e,t,n,r,i,s){this._plot=e,this._title=t||"",this._titleFormat={},this._titleOffset=0,this._labelFormat={},this._lineFormat={stroke:"black",strokeWidth:1},this._ticks={major:i||10,minor:s||0,size:10,position:"both"},this._scale={min:n||0,max:r||100},this._crossAt=0}function s(e,t,n){this._plot=e,this._show=!0,this._area=[.9,.1,1,.9],this._sampleSize=15,this._bgSettings=t||{stroke:"gray"},this._textSettings=n||{}}e.svg.addExtension("plot",t),e.extend(t.prototype,{X:0,Y:1,W:2,H:3,L:0,T:1,R:2,B:3,container:function(e){return arguments.length===0?this._plotCont:(this._plotCont=e,this)},area:function(t,n,r,i){return arguments.length===0?this._area:(this._area=e.isArray(t)?t:[t,n,r,i],this._drawPlot(),this)},format:function(t,n,r){return arguments.length===0?this._areaFormat:(typeof n=="object"&&(r=n,n=null),this._areaFormat=e.extend({fill:t},n?{stroke:n}:{},r||{}),this._drawPlot(),this)},gridlines:function(e,t){return arguments.length===0?this._gridlines:(this._gridlines=[typeof e=="string"?{stroke:e}:e,typeof t=="string"?{stroke:t}:t],this._gridlines[0]==null&&this._gridlines[1]==null&&(this._gridlines=[]),this._drawPlot(),this)},equalXY:function(e){return arguments.length===0?this._equalXY:(this._equalXY=e,this)},title:function(t,n,r,i){return arguments.length===0?this._title:(typeof n!="number"&&(i=r,r=n,n=null),typeof r!="string"&&(i=r,r=null),this._title={value:t,offset:n||this._title.offset,settings:e.extend({textAnchor:"middle"},r?{fill:r}:{},i||{})},this._drawPlot(),this)},addFunction:function(e,t,r,i,s,o,u){return this._functions.push(new n(this,e,t,r,i,s,o,u)),this._drawPlot(),this},functions:function(e){return(arguments.length>0?this._functions[e]:null)||this._functions},noDraw:function(){return this._drawNow=!1,this},redraw:function(){return this._drawNow=!0,this._drawPlot(),this},status:function(e){return this._onstatus=e,this},_drawPlot:function(){if(!this._drawNow)return;while(this._plotCont.firstChild)this._plotCont.removeChild(this._plotCont.firstChild);this._plotCont.parent||this._wrapper._svg.appendChild(this._plotCont),this._plotCont.width?this._plotCont.width.baseVal?this._plotCont.width.baseVal.value=this._plotCont.width.baseVal.value||this._wrapper.width():this._plotCont.width=this._plotCont.width||this._wrapper.width():this._plotCont.setAttribute("width",parseInt(this._plotCont.getAttribute("width"),10)||this._wrapper.width()),this._plotCont.height?this._plotCont.height.baseVal?this._plotCont.height.baseVal.value=this._plotCont.height.baseVal.value||this._wrapper.height():this._plotCont.height=this._plotCont.height||this._wrapper.height():this._plotCont.setAttribute("height",parseInt(this._plotCont.getAttribute("height"),10)||this._wrapper.height()),this._drawChartBackground();var e=this._getDims(),t=this._wrapper.other(this._plotCont,"clipPath",{id:"clip"+this._uuid});this._wrapper.rect(t,e[this.X],e[this.Y],e[this.W],e[this.H]),this._plot=this._wrapper.group(this._plotCont,{class_:"foreground",clipPath:"url(#clip"+this._uuid+")"}),this._drawAxis(!0),this._drawAxis(!1);for(var n=0;n<this._functions.length;n++)this._plotFunction(this._functions[n],n);this._drawTitle(),this._drawLegend()},_getValue:function(e,t){return e[t]?e[t].baseVal?e[t].baseVal.value:e[t]:parseInt(e.getAttribute(t),10)},_getDims:function(e){var t=e!=null;e=e||this._area;var n=this._getValue(this._plotCont,"width"),r=this._getValue(this._plotCont,"height"),i=e[this.L]>1?e[this.L]:n*e[this.L],s=e[this.T]>1?e[this.T]:r*e[this.T],o=(e[this.R]>1?e[this.R]:n*e[this.R])-i,u=(e[this.B]>1?e[this.B]:r*e[this.B])-s;if(this._equalXY&&!t){var a=Math.min(o/(this.xAxis._scale.max-this.xAxis._scale.min),u/(this.yAxis._scale.max-this.yAxis._scale.min));o=a*(this.xAxis._scale.max-this.xAxis._scale.min),u=a*(this.yAxis._scale.max-this.yAxis._scale.min)}return[i,s,o,u]},_getScales:function(){var e=this._getDims();return[e[this.W]/(this.xAxis._scale.max-this.xAxis._scale.min),e[this.H]/(this.yAxis._scale.max-this.yAxis._scale.min)]},_drawChartBackground:function(e,t){var n=this._wrapper.group(this._plotCont,{class_:"background"}),r=this._getDims();return this._wrapper.rect(n,r[this.X],r[this.Y],r[this.W],r[this.H],this._areaFormat),this._gridlines[0]&&this.yAxis._ticks.major&&!t&&this._drawGridlines(n,!0,this._gridlines[0],r),this._gridlines[1]&&this.xAxis._ticks.major&&!e&&this._drawGridlines(n,!1,this._gridlines[1],r),n},_drawGridlines:function(e,t,n,r){var i=this._wrapper.group(e,n),s=t?this.yAxis:this.xAxis,o=this._getScales(),u=Math.floor(s._scale.min/s._ticks.major)*s._ticks.major;u+=u<=s._scale.min?s._ticks.major:0;while(u<s._scale.max){var a=(t?s._scale.max-u:u-s._scale.min)*o[t?1:0]+(t?r[this.Y]:r[this.X]);this._wrapper.line(i,t?r[this.X]:a,t?a:r[this.Y],t?r[this.X]+r[this.W]:a,t?a:r[this.Y]+r[this.H]),u+=s._ticks.major}},_drawAxis:function(t){var n=(t?"x":"y")+"Axis",r=t?this.xAxis:this.yAxis,i=t?this.yAxis:this.xAxis,s=this._getDims(),o=this._getScales(),u=this._wrapper.group(this._plot,e.extend({class_:n},r._lineFormat)),a=this._wrapper.group(this._plot,e.extend({class_:n+"Labels",textAnchor:t?"middle":"end"},r._labelFormat)),f=(t?i._scale.max:-i._scale.min)*o[t?1:0]+(t?s[this.Y]:s[this.X]);this._wrapper.line(u,t?s[this.X]:f,t?f:s[this.Y],t?s[this.X]+s[this.W]:f,t?f:s[this.Y]+s[this.H]);if(r._ticks.major){var l=r._ticks.size,c=Math.floor(r._scale.min/r._ticks.major)*r._ticks.major;c=c<r._scale.min?c+r._ticks.major:c;var h=r._ticks.minor?Math.floor(r._scale.min/r._ticks.minor)*r._ticks.minor:r._scale.max+1;h=h<r._scale.min?h+r._ticks.minor:h;var p=[r._ticks.position==="nw"||r._ticks.position==="both"?-1:0,r._ticks.position==="se"||r._ticks.position==="both"?1:0];while(c<=r._scale.max||h<=r._scale.max){var d=Math.min(c,h),v=d===c?l:l/2,m=(t?d-r._scale.min:r._scale.max-d)*o[t?0:1]+(t?s[this.X]:s[this.Y]);this._wrapper.line(u,t?m:f+v*p[0],t?f+v*p[0]:m,t?m:f+v*p[1],t?f+v*p[1]:m),d===c&&d!==0&&this._wrapper.text(a,t?m:f-l,t?f-l:m,""+d),c+=d===c?r._ticks.major:0,h+=d===h?r._ticks.minor:0}}r._title&&(t?this._wrapper.text(this._plotCont,s[this.X]-r._titleOffset,f,r._title,e.extend({textAnchor:"end"},r._titleFormat||{})):this._wrapper.text(this._plotCont,f,s[this.Y]+s[this.H]+r._titleOffset,r._title,e.extend({textAnchor:"middle"},r._titleFormat||{})))},_plotFunction:function(t,n){var r=this._getDims(),i=this._getScales(),s=this._wrapper.createPath(),o=t._range||[this.xAxis._scale.min,this.xAxis._scale.max],u=(o[1]-o[0])/t._points,a=!0;for(var f=0;f<=t._points;f++){var l=o[0]+f*u;if(l>this.xAxis._scale.max+u)break;if(l<this.xAxis._scale.min-u)continue;var c=(l-this.xAxis._scale.min)*i[0]+r[this.X],h=r[this.H]-(t._fn(l)-this.yAxis._scale.min)*i[1]+r[this.Y];s[(a?"move":"line")+"To"](c,h),a=!1}var p=this._wrapper.path(this._plot,s,e.extend({class_:"fn"+n,fill:"none",stroke:t._stroke,strokeWidth:t._strokeWidth},t._settings||{}));this._showStatus(p,t._name)},_drawTitle:function(){this._wrapper.text(this._plotCont,this._getValue(this._plotCont,"width")/2,this._title.offset,this._title.value,this._title.settings)},_drawLegend:function(){if(!this.legend._show)return;var e=this._wrapper.group(this._plotCont,{class_:"legend"}),t=this._getDims(this.legend._area);this._wrapper.rect(e,t[this.X],t[this.Y],t[this.W],t[this.H],this.legend._bgSettings);var n=t[this.W]>t[this.H],r=this._functions.length,i=(n?t[this.W]:t[this.H])/r,s=t[this.X]+5,o=t[this.Y]+((n?t[this.H]:i)+this.legend._sampleSize)/2;for(var u=0;u<r;u++){var a=this._functions[u];this._wrapper.rect(e,s+(n?u*i:0),o+(n?0:u*i)-this.legend._sampleSize,this.legend._sampleSize,this.legend._sampleSize,{fill:a._stroke}),this._wrapper.text(e,s+(n?u*i:0)+this.legend._sampleSize+5,o+(n?0:u*i),a._name,this.legend._textSettings)}},_showStatus:function(t,n){var r=this._onstatus;this._onstatus&&e(t).hover(function(e){r.apply(this,[n])},function(){r.apply(this,[""])})}}),e.extend(n.prototype,{name:function(e){return arguments.length===0?this._name:(this._name=e,this._plot._drawPlot(),this)},fn:function(e,t){return arguments.length===0?this._fn:(typeof e=="function"&&(t=e,e=null),this._name=e||this._name,this._fn=t,this._plot._drawPlot(),this)},range:function(e,t){return arguments.length===0?this._range:(this._range=e==null?null:[e,t],this._plot._drawPlot(),this)},points:function(e){return arguments.length===0?this._points:(this._points=e,this._plot._drawPlot(),this)},format:function(t,n,r){return arguments.length===0?e.extend({stroke:this._stroke,strokeWidth:this._strokeWidth},this._settings):(typeof n!="number"&&(r=n,n=null),this._stroke=t||this._stroke,this._strokeWidth=n||this._strokeWidth,e.extend(this._settings,r||{}),this._plot._drawPlot(),this)},end:function(){return this._plot}}),e.extend(i.prototype,{scale:function(e,t){return arguments.length===0?this._scale:(this._scale.min=e,this._scale.max=t,this._plot._drawPlot(),this)},ticks:function(e,t,n,r){return arguments.length===0?this._ticks:(typeof n=="string"&&(r=n,n=null),this._ticks.major=e,this._ticks.minor=t,this._ticks.size=n||this._ticks.size,this._ticks.position=r||this._ticks.position,this._plot._drawPlot(),this)},title:function(t,n,r,i){if(arguments.length===0)return{title:this._title,offset:this._titleOffset,format:this._titleFormat};typeof n!="number"&&(i=r,r=n,n=null),typeof r!="string"&&(i=r,r=null),this._title=t,this._titleOffset=n!=null?n:this._titleOffset;if(r||i)this._titleFormat=e.extend(i||{},r?{fill:r}:{});return this._plot._drawPlot(),this},format:function(t,n){return arguments.length===0?this._labelFormat:(typeof t!="string"&&(n=t,t=null),this._labelFormat=e.extend(n||{},t?{fill:t}:{}),this._plot._drawPlot(),this)},line:function(t,n,r){return arguments.length===0?this._lineFormat:(typeof n!="number"&&(r=n,n=null),e.extend(this._lineFormat,{stroke:t,strokeWidth:n||this._lineFormat.strokeWidth},r||{}),this._plot._drawPlot(),this)},end:function(){return this._plot}}),e.extend(s.prototype,{show:function(e){return arguments.length===0?this._show:(this._show=e,this._plot._drawPlot(),this)},area:function(t,n,r,i){return arguments.length===0?this._area:(this._area=e.isArray(t)?t:[t,n,r,i],this._plot._drawPlot(),this)},settings:function(e,t,n){return arguments.length===0?{sampleSize:this._sampleSize,bgSettings:this._bgSettings,textSettings:this._textSettings}:(typeof e=="object"&&(n=t,t=e,e=null),this._sampleSize=e||this._sampleSize,this._bgSettings=t,this._textSettings=n||this._textSettings,this._plot._drawPlot(),this)},end:function(){return this._plot}})})(jQuery);