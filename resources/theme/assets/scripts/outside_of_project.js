(function(){var e=window.packadic=window.packadic||{};e.mergeConfig({debug:!0,demo:!0,oauth_io:"UpFevf23G2O93iSlMOQ5PRL4zq0"}).onPreBoot(function(){console.warn("("+e.getElapsedTime()+"s) PRE-BOOT")}).onBoot(function(){console.warn("("+e.getElapsedTime()+"s) BOOTING")}).onBooted(["jquery","theme","theme/sidebar","autoload"],function(t,n,r,i){console.warn("("+e.getElapsedTime()+"s) BOOTED"),n.init(),r.init({hidden:!1,items:e.site.data.navigation.sidebar}),i.scan(t("body"),function(){e.config.pageLoadedOnAutoloaded===!0&&e.removePageLoader()})}).onStart(function(){console.warn("("+e.getElapsedTime()+"s) STARTING")}).onStarted(function(){console.warn("("+e.getElapsedTime()+"s) STARTED")}),e.onBooted(["jquery","demo/component-editor","demo/metro"],function(e,t){var n=window.ceditors=new t(e("#layout-editor"),{target:"#layout-editor",editables:[{id:"section-top-toggle",name:"Display top","default":!0,type:"switch",options:{isEnabled:function(){return e("body").hasClass("without-section-top")===!1},toggle:function(){console.log("toggle","is enabled",this.isEnabled()),e("body")[(this.isEnabled()?"add":"remove")+"Class"]("without-section-top")}}},{id:"page-boxed",name:"Boxed page","default":!1,type:"switch",options:{isEnabled:function(){return window.theme.opts["layout-option"]==="boxed"},toggle:function(){console.log("toggle","is enabled",this.isEnabled()),window.theme.opts["layout-option"]=window.theme.opts["layout-option"]==="boxed"?"fluid":"boxed",window.theme.apply()}}},{id:"header-fixed",name:"Fixed header","default":!0,type:"switch",options:{isEnabled:function(){return window.theme.opts["page-header-option"]==="fixed"},toggle:function(){console.log("header fix","is enabled",this.isEnabled()),window.theme.opts["page-header-option"]=window.theme.opts["page-header-option"]==="fixed"?"default":"fixed",window.theme.apply()}}},{id:"footer-fixed",name:"Fixed footer","default":!0,type:"switch",options:{isEnabled:function(){return window.theme.opts["page-footer-option"]==="boxed"},toggle:function(){console.log("footer fix","is enabled",this.isEnabled()),window.theme.opts["page-footer-option"]=window.theme.opts["page-footer-option"]==="fixed"?"default":"fixed",window.theme.apply()}}},{id:"sidebar-fixed",name:"Fixed sidebar","default":!1,type:"switch",options:{isEnabled:function(){return window.theme.opts["sidebar-option"]==="boxed"},toggle:function(){console.log("sidebar fix","is enabled",this.isEnabled()),window.theme.opts["sidebar-option"]=window.theme.opts["sidebar-option"]==="fixed"?"default":"fixed",window.theme.apply()}}}]})})}).call();