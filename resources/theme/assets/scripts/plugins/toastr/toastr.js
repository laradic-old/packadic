(function(e){e(["jquery"],function(e){return function(){function u(e,t,n){return w({type:i.error,iconClass:E().iconClasses.error,message:e,optionsOverride:n,title:t})}function a(n,r){return n||(n=E()),t=e("#"+n.containerId),t.length?t:(r&&(t=g(n)),t)}function f(e,t,n){return w({type:i.info,iconClass:E().iconClasses.info,message:e,optionsOverride:n,title:t})}function l(e){n=e}function c(e,t,n){return w({type:i.success,iconClass:E().iconClasses.success,message:e,optionsOverride:n,title:t})}function h(e,t,n){return w({type:i.warning,iconClass:E().iconClasses.warning,message:e,optionsOverride:n,title:t})}function p(e){var n=E();t||a(n),m(e,n)||v(n)}function d(n){var r=E();t||a(r);if(n&&e(":focus",n).length===0){S(n);return}t.children().length&&t.remove()}function v(n){var r=t.children();for(var i=r.length-1;i>=0;i--)m(e(r[i]),n)}function m(t,n){return t&&e(":focus",t).length===0?(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){S(t)}}),!0):!1}function g(n){return t=e("<div/>").attr("id",n.containerId).addClass(n.positionClass).attr("aria-live","polite").attr("role","alert"),t.appendTo(e(n.target)),t}function y(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:undefined,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:undefined,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:"<button>&times;</button>",newestOnTop:!0,preventDuplicates:!1,progressBar:!1}}function b(e){if(!n)return;n(e)}function w(n){function m(t){if(e(":focus",f).length&&!t)return;return clearTimeout(d.intervalId),f[i.hideMethod]({duration:i.hideDuration,easing:i.hideEasing,complete:function(){S(f),i.onHidden&&v.state!=="hidden"&&i.onHidden(),v.state="hidden",v.endTime=new Date,b(v)}})}function g(){if(i.timeOut>0||i.extendedTimeOut>0)u=setTimeout(m,i.extendedTimeOut),d.maxHideTime=parseFloat(i.extendedTimeOut),d.hideEta=(new Date).getTime()+d.maxHideTime}function y(){clearTimeout(u),d.hideEta=0,f.stop(!0,!0)[i.showMethod]({duration:i.showDuration,easing:i.showEasing})}function w(){var e=(d.hideEta-(new Date).getTime())/d.maxHideTime*100;h.width(e+"%")}var i=E(),s=n.iconClass||i.iconClass;if(i.preventDuplicates){if(n.message===o)return;o=n.message}typeof n.optionsOverride!="undefined"&&(i=e.extend(i,n.optionsOverride),s=n.optionsOverride.iconClass||s),r++,t=a(i,!0);var u=null,f=e("<div/>"),l=e("<div/>"),c=e("<div/>"),h=e("<div/>"),p=e(i.closeHtml),d={intervalId:null,hideEta:null,maxHideTime:null},v={toastId:r,state:"visible",startTime:new Date,options:i,map:n};return n.iconClass&&f.addClass(i.toastClass).addClass(s),n.title&&(l.append(n.title).addClass(i.titleClass),f.append(l)),n.message&&(c.append(n.message).addClass(i.messageClass),f.append(c)),i.closeButton&&(p.addClass("toast-close-button").attr("role","button"),f.prepend(p)),i.progressBar&&(h.addClass("toast-progress"),f.prepend(h)),f.hide(),i.newestOnTop?t.prepend(f):t.append(f),f[i.showMethod]({duration:i.showDuration,easing:i.showEasing,complete:i.onShown}),i.timeOut>0&&(u=setTimeout(m,i.timeOut),d.maxHideTime=parseFloat(i.timeOut),d.hideEta=(new Date).getTime()+d.maxHideTime,i.progressBar&&(d.intervalId=setInterval(w,10))),f.hover(y,g),!i.onclick&&i.tapToDismiss&&f.click(m),i.closeButton&&p&&p.click(function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble!==undefined&&e.cancelBubble!==!0&&(e.cancelBubble=!0),m(!0)}),i.onclick&&f.click(function(){i.onclick(),m()}),b(v),i.debug&&console&&console.log(v),f}function E(){return e.extend({},y(),s.options)}function S(e){t||(t=a());if(e.is(":visible"))return;e.remove(),e=null,t.children().length===0&&t.remove()}var t,n,r=0,i={error:"error",info:"info",success:"success",warning:"warning"},s={clear:p,remove:d,error:u,getContainer:a,info:f,options:{},subscribe:l,success:c,version:"2.1.0",warning:h},o;return s}()})})(typeof define=="function"&&define.amd?define:function(e,t){typeof module!="undefined"&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});