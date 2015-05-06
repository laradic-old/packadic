+function(e,t,n){t.spiedEventsKey=function(e,t){return[n(e).selector,t].toString()},t.getFixtures=function(){return t.currentFixtures_=t.currentFixtures_||new t.Fixtures},t.getStyleFixtures=function(){return t.currentStyleFixtures_=t.currentStyleFixtures_||new t.StyleFixtures},t.Fixtures=function(){this.containerId="jasmine-fixtures",this.fixturesCache_={},this.fixturesPath="spec/javascripts/fixtures"},t.Fixtures.prototype.set=function(e){return this.cleanUp(),this.createContainer_(e)},t.Fixtures.prototype.appendSet=function(e){this.addToContainer_(e)},t.Fixtures.prototype.preload=function(){this.read.apply(this,arguments)},t.Fixtures.prototype.load=function(){this.cleanUp(),this.createContainer_(this.read.apply(this,arguments))},t.Fixtures.prototype.appendLoad=function(){this.addToContainer_(this.read.apply(this,arguments))},t.Fixtures.prototype.read=function(){var e=[],t=arguments;for(var n=t.length,r=0;r<n;r++)e.push(this.getFixtureHtml_(t[r]));return e.join("")},t.Fixtures.prototype.clearCache=function(){this.fixturesCache_={}},t.Fixtures.prototype.cleanUp=function(){n("#"+this.containerId).remove()},t.Fixtures.prototype.sandbox=function(e){var t=e||{};return n('<div id="sandbox" />').attr(t)},t.Fixtures.prototype.createContainer_=function(e){var t=n("<div>").attr("id",this.containerId).html(e);return n(document.body).append(t),t},t.Fixtures.prototype.addToContainer_=function(e){var t=n(document.body).find("#"+this.containerId).append(e);t.length||this.createContainer_(e)},t.Fixtures.prototype.getFixtureHtml_=function(e){return typeof this.fixturesCache_[e]=="undefined"&&this.loadFixtureIntoCache_(e),this.fixturesCache_[e]},t.Fixtures.prototype.loadFixtureIntoCache_=function(e){var t=this,r=this.makeFixtureUrl_(e),i="",s=n.ajax({async:!1,cache:!1,url:r,success:function(e,t,n){i=n.responseText}}).fail(function(e,t,n){throw new Error("Fixture could not be loaded: "+r+" (status: "+t+", message: "+n.message+")")}),o=n(n.parseHTML(i,!0)).find("script[src]")||[];o.each(function(){n.ajax({async:!1,cache:!1,dataType:"script",url:n(this).attr("src"),success:function(e,t,n){i+="<script>"+n.responseText+"</script>"},error:function(e,t,n){throw new Error("Script could not be loaded: "+scriptSrc+" (status: "+t+", message: "+n.message+")")}})}),t.fixturesCache_[e]=i},t.Fixtures.prototype.makeFixtureUrl_=function(e){return this.fixturesPath.match("/$")?this.fixturesPath+e:this.fixturesPath+"/"+e},t.Fixtures.prototype.proxyCallTo_=function(e,t){return this[e].apply(this,t)},t.StyleFixtures=function(){this.fixturesCache_={},this.fixturesNodes_=[],this.fixturesPath="spec/javascripts/fixtures"},t.StyleFixtures.prototype.set=function(e){this.cleanUp(),this.createStyle_(e)},t.StyleFixtures.prototype.appendSet=function(e){this.createStyle_(e)},t.StyleFixtures.prototype.preload=function(){this.read_.apply(this,arguments)},t.StyleFixtures.prototype.load=function(){this.cleanUp(),this.createStyle_(this.read_.apply(this,arguments))},t.StyleFixtures.prototype.appendLoad=function(){this.createStyle_(this.read_.apply(this,arguments))},t.StyleFixtures.prototype.cleanUp=function(){while(this.fixturesNodes_.length)this.fixturesNodes_.pop().remove()},t.StyleFixtures.prototype.createStyle_=function(e){var t=n("<div></div>").html(e).text(),r=n("<style>"+t+"</style>");this.fixturesNodes_.push(r),n("head").append(r)},t.StyleFixtures.prototype.clearCache=t.Fixtures.prototype.clearCache,t.StyleFixtures.prototype.read_=t.Fixtures.prototype.read,t.StyleFixtures.prototype.getFixtureHtml_=t.Fixtures.prototype.getFixtureHtml_,t.StyleFixtures.prototype.loadFixtureIntoCache_=t.Fixtures.prototype.loadFixtureIntoCache_,t.StyleFixtures.prototype.makeFixtureUrl_=t.Fixtures.prototype.makeFixtureUrl_,t.StyleFixtures.prototype.proxyCallTo_=t.Fixtures.prototype.proxyCallTo_,t.getJSONFixtures=function(){return t.currentJSONFixtures_=t.currentJSONFixtures_||new t.JSONFixtures},t.JSONFixtures=function(){this.fixturesCache_={},this.fixturesPath="spec/javascripts/fixtures/json"},t.JSONFixtures.prototype.load=function(){return this.read.apply(this,arguments),this.fixturesCache_},t.JSONFixtures.prototype.read=function(){var e=arguments;for(var t=e.length,n=0;n<t;n++)this.getFixtureData_(e[n]);return this.fixturesCache_},t.JSONFixtures.prototype.clearCache=function(){this.fixturesCache_={}},t.JSONFixtures.prototype.getFixtureData_=function(e){return this.fixturesCache_[e]||this.loadFixtureIntoCache_(e),this.fixturesCache_[e]},t.JSONFixtures.prototype.loadFixtureIntoCache_=function(e){var t=this,r=this.fixturesPath.match("/$")?this.fixturesPath+e:this.fixturesPath+"/"+e;n.ajax({async:!1,cache:!1,dataType:"json",url:r,success:function(n){t.fixturesCache_[e]=n},error:function(e,t,n){throw new Error("JSONFixture could not be loaded: "+r+" (status: "+t+", message: "+n.message+")")}})},t.JSONFixtures.prototype.proxyCallTo_=function(e,t){return this[e].apply(this,t)},t.jQuery=function(){},t.jQuery.browserTagCaseIndependentHtml=function(e){return n("<div/>").append(e).html()},t.jQuery.elementToString=function(e){return n(e).map(function(){return this.outerHTML}).toArray().join(", ")};var r={spiedEvents:{},handlers:[]};t.jQuery.events={spyOn:function(e,i){var s=function(n){r.spiedEvents[t.spiedEventsKey(e,i)]=t.util.argsToArray(arguments)};return n(e).on(i,s),r.handlers.push(s),{selector:e,eventName:i,handler:s,reset:function(){delete r.spiedEvents[t.spiedEventsKey(e,i)]}}},args:function(e,n){var i=r.spiedEvents[t.spiedEventsKey(e,n)];if(!i)throw"There is no spy for "+n+" on "+e.toString()+". Make sure to create a spy using spyOnEvent.";return i},wasTriggered:function(e,n){return!!r.spiedEvents[t.spiedEventsKey(e,n)]},wasTriggeredWith:function(e,n,r,i,s){var o=t.jQuery.events.args(e,n).slice(1);return Object.prototype.toString.call(r)!=="[object Array]"&&(o=o[0]),i.equals(r,o,s)},wasPrevented:function(e,n){var i=r.spiedEvents[t.spiedEventsKey(e,n)],s=i?i[0]:undefined;return s&&s.isDefaultPrevented()},wasStopped:function(e,n){var i=r.spiedEvents[t.spiedEventsKey(e,n)],s=i?i[0]:undefined;return s&&s.isPropagationStopped()},cleanUp:function(){r.spiedEvents={},r.handlers=[]}};var i=function(e,t){return t===undefined?e!==undefined:e===t};beforeEach(function(){t.addMatchers({toHaveClass:function(){return{compare:function(e,t){return{pass:n(e).hasClass(t)}}}},toHaveCss:function(){return{compare:function(e,t){for(var r in t){var i=t[r];if(i==="auto"&&n(e).get(0).style[r]==="auto")continue;if(n(e).css(r)!==i)return{pass:!1}}return{pass:!0}}}},toBeVisible:function(){return{compare:function(e){return{pass:n(e).is(":visible")}}}},toBeHidden:function(){return{compare:function(e){return{pass:n(e).is(":hidden")}}}},toBeSelected:function(){return{compare:function(e){return{pass:n(e).is(":selected")}}}},toBeChecked:function(){return{compare:function(e){return{pass:n(e).is(":checked")}}}},toBeEmpty:function(){return{compare:function(e){return{pass:n(e).is(":empty")}}}},toBeInDOM:function(){return{compare:function(e){return{pass:n.contains(document.documentElement,n(e)[0])}}}},toExist:function(){return{compare:function(e){return{pass:n(e).length}}}},toHaveLength:function(){return{compare:function(e,t){return{pass:n(e).length===t}}}},toHaveAttr:function(){return{compare:function(e,t,r){return{pass:i(n(e).attr(t),r)}}}},toHaveProp:function(){return{compare:function(e,t,r){return{pass:i(n(e).prop(t),r)}}}},toHaveId:function(){return{compare:function(e,t){return{pass:n(e).attr("id")==t}}}},toHaveHtml:function(){return{compare:function(e,r){return{pass:n(e).html()==t.jQuery.browserTagCaseIndependentHtml(r)}}}},toContainHtml:function(){return{compare:function(e,r){var i=n(e).html(),s=t.jQuery.browserTagCaseIndependentHtml(r);return{pass:i.indexOf(s)>=0}}}},toHaveText:function(){return{compare:function(e,t){var r=n(e).text(),i=n.trim(r);return t&&n.isFunction(t.test)?{pass:t.test(r)||t.test(i)}:{pass:r==t||i==t}}}},toContainText:function(){return{compare:function(e,t){var r=n.trim(n(e).text());return t&&n.isFunction(t.test)?{pass:t.test(r)}:{pass:r.indexOf(t)!=-1}}}},toHaveValue:function(){return{compare:function(e,t){return{pass:n(e).val()===t}}}},toHaveData:function(){return{compare:function(e,t,r){return{pass:i(n(e).data(t),r)}}}},toContainElement:function(){return{compare:function(t,r){if(e.debug)debugger;return{pass:n(t).find(r).length}}}},toBeMatchedBy:function(){return{compare:function(e,t){return{pass:n(e).filter(t).length}}}},toBeDisabled:function(){return{compare:function(e,t){return{pass:n(e).is(":disabled")}}}},toBeFocused:function(e){return{compare:function(e,t){return{pass:n(e)[0]===n(e)[0].ownerDocument.activeElement}}}},toHandle:function(){return{compare:function(e,t){var r=n._data(n(e).get(0),"events");if(!r||!t||typeof t!="string")return{pass:!1};var i=t.split("."),s=i.shift(),o=i.slice(0).sort(),u=new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.)?")+"(\\.|$)");if(!r[s]||!i.length)return{pass:r[s]&&r[s].length>0};for(var a=0;a<r[s].length;a++){var f=r[s][a].namespace;if(u.test(f))return{pass:!0}}return{pass:!1}}}},toHandleWith:function(){return{compare:function(e,t,r){var i=t.split(".")[0],s=n._data(n(e).get(0),"events")[i];for(var o=0;o<s.length;o++)if(s[o].handler==r)return{pass:!0};return{pass:!1}}}},toHaveBeenTriggeredOn:function(){return{compare:function(e,r){var i={pass:t.jQuery.events.wasTriggered(r,e)};return i.message=i.pass?"Expected event "+n(e)+" not to have been triggered on "+r:"Expected event "+n(e)+" to have been triggered on "+r,i}}},toHaveBeenTriggered:function(){return{compare:function(e){var n=e.eventName,r=e.selector,i={pass:t.jQuery.events.wasTriggered(r,n)};return i.message=i.pass?"Expected event "+n+" not to have been triggered on "+r:"Expected event "+n+" to have been triggered on "+r,i}}},toHaveBeenTriggeredOnAndWith:function(e,n){return{compare:function(r,i,s){var o=t.jQuery.events.wasTriggered(i,r),u={pass:o&&t.jQuery.events.wasTriggeredWith(i,r,s,e,n)};if(o){var a=t.jQuery.events.args(i,r,s)[1];u.message=u.pass?"Expected event "+r+" not to have been triggered with "+t.pp(s)+" but it was triggered with "+t.pp(a):"Expected event "+r+" to have been triggered with "+t.pp(s)+"  but it was triggered with "+t.pp(a)}else u.message=u.pass?"Expected event "+r+" not to have been triggered on "+i:"Expected event "+r+" to have been triggered on "+i;return u}}},toHaveBeenPreventedOn:function(){return{compare:function(e,n){var r={pass:t.jQuery.events.wasPrevented(n,e)};return r.message=r.pass?"Expected event "+e+" not to have been prevented on "+n:"Expected event "+e+" to have been prevented on "+n,r}}},toHaveBeenPrevented:function(){return{compare:function(e){var n=e.eventName,r=e.selector,i={pass:t.jQuery.events.wasPrevented(r,n)};return i.message=i.pass?"Expected event "+n+" not to have been prevented on "+r:"Expected event "+n+" to have been prevented on "+r,i}}},toHaveBeenStoppedOn:function(){return{compare:function(e,n){var r={pass:t.jQuery.events.wasStopped(n,e)};return r.message=r.pass?"Expected event "+e+" not to have been stopped on "+n:"Expected event "+e+" to have been stopped on "+n,r}}},toHaveBeenStopped:function(){return{compare:function(e){var n=e.eventName,r=e.selector,i={pass:t.jQuery.events.wasStopped(r,n)};return i.message=i.pass?"Expected event "+n+" not to have been stopped on "+r:"Expected event "+n+" to have been stopped on "+r,i}}}}),t.getEnv().addCustomEqualityTester(function(e,r){if(e&&r){if(e instanceof n||t.isDomNode(e)){var i=n(e);return r instanceof n?i.length==r.length&&e.is(r):i.is(r)}if(r instanceof n||t.isDomNode(r)){var s=n(r);return e instanceof n?e.length==s.length&&s.is(e):n(r).is(e)}}}),t.getEnv().addCustomEqualityTester(function(e,t){if(e instanceof n&&t instanceof n&&e.size()==t.size())return e.is(t)})}),afterEach(function(){t.getFixtures().cleanUp(),t.getStyleFixtures().cleanUp(),t.jQuery.events.cleanUp()}),e.readFixtures=function(){return t.getFixtures().proxyCallTo_("read",arguments)},e.preloadFixtures=function(){t.getFixtures().proxyCallTo_("preload",arguments)},e.loadFixtures=function(){t.getFixtures().proxyCallTo_("load",arguments)},e.appendLoadFixtures=function(){t.getFixtures().proxyCallTo_("appendLoad",arguments)},e.setFixtures=function(e){return t.getFixtures().proxyCallTo_("set",arguments)},e.appendSetFixtures=function(){t.getFixtures().proxyCallTo_("appendSet",arguments)},e.sandbox=function(e){return t.getFixtures().sandbox(e)},e.spyOnEvent=function(e,n){return t.jQuery.events.spyOn(e,n)},e.preloadStyleFixtures=function(){t.getStyleFixtures().proxyCallTo_("preload",arguments)},e.loadStyleFixtures=function(){t.getStyleFixtures().proxyCallTo_("load",arguments)},e.appendLoadStyleFixtures=function(){t.getStyleFixtures().proxyCallTo_("appendLoad",arguments)},e.setStyleFixtures=function(e){t.getStyleFixtures().proxyCallTo_("set",arguments)},e.appendSetStyleFixtures=function(e){t.getStyleFixtures().proxyCallTo_("appendSet",arguments)},e.loadJSONFixtures=function(){return t.getJSONFixtures().proxyCallTo_("load",arguments)},e.getJSONFixture=function(e){return t.getJSONFixtures().proxyCallTo_("read",arguments)[e]}}(window,window.jasmine,window.jQuery);