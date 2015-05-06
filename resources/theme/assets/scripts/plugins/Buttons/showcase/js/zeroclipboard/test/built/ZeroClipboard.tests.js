(function(e,t){var n,r,i={getHtmlBridge:function(){return document.getElementById(ZeroClipboard.config("containerId"))}};e("ZeroClipboard.js (built) unit tests - Core",{setup:function(){n=ZeroClipboard.config(),r=ZeroClipboard.isFlashUnusable,ZeroClipboard.isFlashUnusable=function(){return!1},ZeroClipboard.config({swfPath:n.swfPath.replace(/\/(?:src|test)\/.*$/i,"/dist/ZeroClipboard.swf")})},teardown:function(){ZeroClipboard.destroy(),ZeroClipboard.config(n),ZeroClipboard.isFlashUnusable=r}}),t("`swfPath` finds the expected default URL",function(e){e.expect(1);var t=window.location.protocol+"//"+window.location.host+"/",n=window.location.pathname.toLowerCase().indexOf("/test/"),r=window.location.pathname.slice(1,n+1),i=t+r,s=i+"dist/ZeroClipboard.swf";e.strictEqual(ZeroClipboard.config("swfPath"),s)}),t("`destroy` destroys the bridge",function(e){e.expect(3),ZeroClipboard.isFlashUnusable=function(){return!1},e.equal(i.getHtmlBridge(),null,"The bridge does not exist before creating a client"),new ZeroClipboard,e.notEqual(i.getHtmlBridge(),null,"The bridge does exist after creating a client"),ZeroClipboard.destroy(),e.equal(i.getHtmlBridge(),null,"The bridge does not exist after calling `destroy`")}),e("ZeroClipboard.js (built) unit tests - Client",{setup:function(){n=ZeroClipboard.config(),r=ZeroClipboard.isFlashUnusable,ZeroClipboard.isFlashUnusable=function(){return!1},ZeroClipboard.config({swfPath:n.swfPath.replace(/\/(?:src|test)\/.*$/i,"/dist/ZeroClipboard.swf")})},teardown:function(){ZeroClipboard.destroy(),ZeroClipboard.config(n),ZeroClipboard.isFlashUnusable=r}}),t("`ZeroClipboard` exists",function(e){e.expect(1),e.ok(ZeroClipboard)}),t("Client is created properly",function(e){e.expect(2);var t=new ZeroClipboard;e.ok(t),e.ok(t.id)}),t("Client without selector doesn't have elements",function(e){e.expect(2);var t=new ZeroClipboard;e.ok(t),e.deepEqual(t.elements(),[])}),t("Object has a title",function(e){e.expect(1);var t=new ZeroClipboard,n=document.getElementById("d_clip_button");t.clip(n),ZeroClipboard.activate(n),e.strictEqual(i.getHtmlBridge().getAttribute("title"),"Click me to copy to clipboard."),ZeroClipboard.deactivate()}),t("Object has no title",function(e){e.expect(1);var t=new ZeroClipboard,n=document.getElementById("d_clip_button_no_title");t.clip(n),ZeroClipboard.activate(n),e.ok(!i.getHtmlBridge().getAttribute("title"))}),t("Object doesn't have data-clipboard-text",function(e){e.expect(1);var t=new ZeroClipboard,n=document.getElementById("d_clip_button_no_text");t.clip(n),ZeroClipboard.activate(n),e.ok(!i.getHtmlBridge().getAttribute("data-clipboard-text"))}),t("New client is not the same client (no singleton) but does share the same bridge",function(e){e.expect(6);var t="."+ZeroClipboard.config("containerClass");e.strictEqual($(t).length,0);var n=new ZeroClipboard;e.ok(n.id),e.strictEqual($(t).length,1);var r=new ZeroClipboard;e.strictEqual($(t).length,1),e.notEqual(r.id,n.id),e.notEqual(r,n)}),t("Calculations based on borderWidth never return NaN",function(e){e.expect(4);var t=new ZeroClipboard,n=document.getElementById("d_clip_button");t.clip(n),ZeroClipboard.activate(n);var r=i.getHtmlBridge();e.strictEqual(/^-?[0-9\.]+px$/.test(r.style.top),!0),e.strictEqual(/^-?[0-9\.]+px$/.test(r.style.left),!0),e.strictEqual(/^-?[0-9\.]+px$/.test(r.style.width),!0),e.strictEqual(/^-?[0-9\.]+px$/.test(r.style.height),!0)}),t("No more client singleton!",function(e){e.expect(7),ZeroClipboard.isFlashUnusable=function(){return!1},e.ok(!ZeroClipboard.prototype._singleton,"The client singleton does not exist on the prototype before creating a client");var t=new ZeroClipboard;e.ok(!ZeroClipboard.prototype._singleton,"The client singleton does not exist on the prototype after creating a client"),e.ok(!t._singleton,"The client singleton does not exist on the client instance after creating a client");var n=new ZeroClipboard;e.ok(!ZeroClipboard.prototype._singleton,"The client singleton does not exist on the prototype after creating a second client"),e.ok(!t._singleton,"The client singleton does not exist on the first client instance after creating a second client"),e.ok(!n._singleton,"The client singleton does not exist on the second client instance after creating a second client"),ZeroClipboard.destroy(),e.ok(!ZeroClipboard.prototype._singleton,"The client singleton does not exist on the prototype after calling `destroy`")})})(QUnit.module,QUnit.test);