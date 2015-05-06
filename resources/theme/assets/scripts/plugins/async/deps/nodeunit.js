nodeunit=function(){this.JSON||(this.JSON={}),function(){function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)r=rep[n],typeof r=="string"&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();var assert=this.assert={},types={},core={},nodeunit={},reporter={};return function(){var e={},t=this,n=t.async;typeof module!="undefined"&&module.exports?module.exports=e:t.async=e,e.noConflict=function(){return t.async=n,e};var r=function(e,t){if(e.forEach)return e.forEach(t);for(var n=0;n<e.length;n+=1)t(e[n],n,e)},i=function(e,t){if(e.map)return e.map(t);var n=[];return r(e,function(e,r,i){n.push(t(e,r,i))}),n},s=function(e,t,n){return e.reduce?e.reduce(t,n):(r(e,function(e,r,i){n=t(n,e,r,i)}),n)},o=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},u=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n+=1)if(e[n]===t)return n;return-1};e.nextTick=function(e){typeof process=="undefined"||!process.nextTick?setTimeout(e,0):process.nextTick(e)},e.forEach=function(e,t,n){if(!e.length)return n();var i=0;r(e,function(r){t(r,function(t){t?(n(t),n=function(){}):(i+=1,i===e.length&&n())})})},e.forEachSeries=function(e,t,n){if(!e.length)return n();var r=0,i=function(){t(e[r],function(t){t?(n(t),n=function(){}):(r+=1,r===e.length?n():i())})};i()};var a=function(t){return function(){var n=Array.prototype.slice.call(arguments);return t.apply(null,[e.forEach].concat(n))}},f=function(t){return function(){var n=Array.prototype.slice.call(arguments);return t.apply(null,[e.forEachSeries].concat(n))}},l=function(e,t,n,r){var s=[];t=i(t,function(e,t){return{index:t,value:e}}),e(t,function(e,t){n(e.value,function(n,r){s[e.index]=r,t(n)})},function(e){r(e,s)})};e.map=a(l),e.mapSeries=f(l),e.reduce=function(t,n,r,i){e.forEachSeries(t,function(e,t){r(n,e,function(e,r){n=r,t(e)})},function(e){i(e,n)})},e.inject=e.reduce,e.foldl=e.reduce,e.reduceRight=function(t,n,r,s){var o=i(t,function(e){return e}).reverse();e.reduce(o,n,r,s)},e.foldr=e.reduceRight;var c=function(e,t,n,r){var s=[];t=i(t,function(e,t){return{index:t,value:e}}),e(t,function(e,t){n(e.value,function(n){n&&s.push(e),t()})},function(e){r(i(s.sort(function(e,t){return e.index-t.index}),function(e){return e.value}))})};e.filter=a(c),e.filterSeries=f(c),e.select=e.filter,e.selectSeries=e.filterSeries;var h=function(e,t,n,r){var s=[];t=i(t,function(e,t){return{index:t,value:e}}),e(t,function(e,t){n(e.value,function(n){n||s.push(e),t()})},function(e){r(i(s.sort(function(e,t){return e.index-t.index}),function(e){return e.value}))})};e.reject=a(h),e.rejectSeries=f(h);var p=function(e,t,n,r){e(t,function(e,t){n(e,function(n){n?r(e):t()})},function(e){r()})};e.detect=a(p),e.detectSeries=f(p),e.some=function(t,n,r){e.forEach(t,function(e,t){n(e,function(e){e&&(r(!0),r=function(){}),t()})},function(e){r(!1)})},e.any=e.some,e.every=function(t,n,r){e.forEach(t,function(e,t){n(e,function(e){e||(r(!1),r=function(){}),t()})},function(e){r(!0)})},e.all=e.every,e.sortBy=function(t,n,r){e.map(t,function(e,t){n(e,function(n,r){n?t(n):t(null,{value:e,criteria:r})})},function(e,t){if(e)return r(e);var n=function(e,t){var n=e.criteria,r=t.criteria;return n<r?-1:n>r?1:0};r(null,i(t.sort(n),function(e){return e.value}))})},e.auto=function(e,t){t=t||function(){};var n=o(e);if(!n.length)return t(null);var i=[],a=[],f=function(e){a.unshift(e)},l=function(e){for(var t=0;t<a.length;t+=1)if(a[t]===e){a.splice(t,1);return}},c=function(){r(a,function(e){e()})};f(function(){i.length===n.length&&t(null)}),r(n,function(n){var r=e[n]instanceof Function?[e[n]]:e[n],o=function(e){e?(t(e),t=function(){}):(i.push(n),c())},a=r.slice(0,Math.abs(r.length-1))||[],h=function(){return s(a,function(e,t){return e&&u(i,t)!==-1},!0)};if(h())r[r.length-1](o);else{var p=function(){h()&&(l(p),r[r.length-1](o))};f(p)}})},e.waterfall=function(t,n){if(!t.length)return n();n=n||function(){};var r=function(t){return function(i){if(i)n(i),n=function(){};else{var s=Array.prototype.slice.call(arguments,1),o=t.next();o?s.push(r(o)):s.push(n),e.nextTick(function(){t.apply(null,s)})}}};r(e.iterator(t))()},e.parallel=function(t,n){n=n||function(){};if(t.constructor===Array)e.map(t,function(e,t){e&&e(function(e){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),t.call(null,e,n||null)})},n);else{var r={};e.forEach(o(t),function(e,n){t[e](function(t){var i=Array.prototype.slice.call(arguments,1);i.length<=1&&(i=i[0]),r[e]=i,n(t)})},function(e){n(e,r)})}},e.series=function(t,n){n=n||function(){};if(t.constructor===Array)e.mapSeries(t,function(e,t){e&&e(function(e){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),t.call(null,e,n||null)})},n);else{var r={};e.forEachSeries(o(t),function(e,n){t[e](function(t){var i=Array.prototype.slice.call(arguments,1);i.length<=1&&(i=i[0]),r[e]=i,n(t)})},function(e){n(e,r)})}},e.iterator=function(e){var t=function(n){var r=function(){return e.length&&e[n].apply(null,arguments),r.next()};return r.next=function(){return n<e.length-1?t(n+1):null},r};return t(0)},e.apply=function(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t.concat(Array.prototype.slice.call(arguments)))}};var d=function(e,t,n,r){var i=[];e(t,function(e,t){n(e,function(e,n){i=i.concat(n||[]),t(e)})},function(e){r(e,i)})};e.concat=a(d),e.concatSeries=f(d),e.whilst=function(t,n,r){t()?n(function(i){if(i)return r(i);e.whilst(t,n,r)}):r()},e.until=function(t,n,r){t()?r():n(function(i){if(i)return r(i);e.until(t,n,r)})},e.queue=function(t,n){var r=0,i=[],s={concurrency:n,push:function(t,n){i.push({data:t,callback:n}),e.nextTick(s.process)},process:function(){if(r<s.concurrency&&i.length){var e=i.splice(0,1)[0];r+=1,t(e.data,function(){r-=1,e.callback&&e.callback.apply(e,arguments),s.process()})}},length:function(){return i.length}};return s};var v=function(e){return function(t){var n=Array.prototype.slice.call(arguments,1);t.apply(null,n.concat([function(t){var n=Array.prototype.slice.call(arguments,1);typeof console!="undefined"&&(t?console.error&&console.error(t):console[e]&&r(n,function(t){console[e](t)}))}]))}};e.log=v("log"),e.dir=v("dir")}(),function(e){function s(e,t,n,i,s){throw new r.AssertionError({message:n,actual:e,expected:t,operator:i,stackStartFunction:s})}function o(e,t){return e===t?!0:e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():typeof e!="object"&&typeof t!="object"?e==t:f(e,t)}function u(e){return e===null||e===undefined}function a(e){return Object.prototype.toString.call(e)=="[object Arguments]"}function f(e,r){if(u(e)||u(r))return!1;if(e.prototype!==r.prototype)return!1;if(a(e))return a(r)?(e=n.call(e),r=n.call(r),o(e,r)):!1;try{var i=t(e),s=t(r),f,l}catch(c){return!1}if(i.length!=s.length)return!1;i.sort(),s.sort();for(l=i.length-1;l>=0;l--)if(i[l]!=s[l])return!1;for(l=i.length-1;l>=0;l--){f=i[l];if(!o(e[f],r[f]))return!1}return!0}function l(e,t,n,r){var i=null,o=!1,u=!0;r=r||"",arguments.length==3?typeof n=="string"&&(r=n,u=!1):arguments.length==2&&(u=!1);try{t()}catch(a){o=!0,i=a}e&&!o&&s("Missing expected exception"+(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"")),!e&&o&&u&&i instanceof n&&s("Got unwanted exception"+(n&&n.name?" ("+n.name+").":".")+(r?" "+r:""));if(e&&o&&u&&!(i instanceof n)||!e&&o)throw i}var t=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},n=Array.prototype.slice,r=e;r.AssertionError=function(t){this.name="AssertionError",this.message=t.message,this.actual=t.actual,this.expected=t.expected,this.operator=t.operator;var n=t.stackStartFunction||s;Error.captureStackTrace&&Error.captureStackTrace(this,n)},r.AssertionError.super_=Error;var i=function(){this.constructor=r.AssertionError};i.prototype=Error.prototype,r.AssertionError.prototype=new i,r.AssertionError.prototype.toString=function(){return this.message?[this.name+":",this.message].join(" "):[this.name+":",JSON.stringify(this.expected),this.operator,JSON.stringify(this.actual)].join(" ")},r.AssertionError.__proto__=Error.prototype,r.fail=s,r.ok=function(t,n){t||s(t,!0,n,"==",r.ok)},r.equal=function(t,n,i){t!=n&&s(t,n,i,"==",r.equal)},r.notEqual=function(t,n,i){t==n&&s(t,n,i,"!=",r.notEqual)},r.deepEqual=function(t,n,i){o(t,n)||s(t,n,i,"deepEqual",r.deepEqual)},r.notDeepEqual=function(t,n,i){o(t,n)&&s(t,n,i,"notDeepEqual",r.notDeepEqual)},r.strictEqual=function(t,n,i){t!==n&&s(t,n,i,"===",r.strictEqual)},r.notStrictEqual=function(t,n,i){t===n&&s(t,n,i,"!==",r.notStrictEqual)},r.throws=function(e,t,r){l.apply(this,[!0].concat(n.call(arguments)))},r.doesNotThrow=function(e,t,r){l.apply(this,[!1].concat(n.call(arguments)))},r.ifError=function(e){if(e)throw e}}(assert),function(e){e.assertion=function(e){return{method:e.method||"",message:e.message||e.error&&e.error.message||"",error:e.error,passed:function(){return!this.error},failed:function(){return Boolean(this.error)}}},e.assertionList=function(e,t){var n=e||[];return n.failures=function(){var e=0;for(var t=0;t<this.length;t++)this[t].failed()&&e++;return e},n.passes=function(){return n.length-n.failures()},n.duration=t||0,n};var t=function(t){return function(n,r,i){return function(){var s=arguments[i-1],o=e.assertion({method:n,message:s});try{assert[r].apply(null,arguments)}catch(u){o.error=u}t(o)}}};e.test=function(n,r,i,s){var o,u=[],a=t(function(e){u.push(e),i.log&&async.nextTick(function(){i.log(e)})}),f={done:function(t){if(o!==undefined&&o!==u.length){var a=new Error("Expected "+o+" assertions, "+u.length+" ran"),f=e.assertion({method:"expect",error:a});u.push(f),i.log&&async.nextTick(function(){i.log(f)})}if(t){var l=e.assertion({error:t});u.push(l),i.log&&async.nextTick(function(){i.log(l)})}var c=(new Date).getTime();async.nextTick(function(){var t=e.assertionList(u,c-r);i.testDone(n,t),s(null,u)})},ok:a("ok","ok",2),same:a("same","deepEqual",3),equals:a("equals","equal",3),expect:function(e){o=e},_assertion_list:u};for(var l in assert)assert.hasOwnProperty(l)&&(f[l]=a(l,l,assert[l].length));return f},e.options=function(e){var t=function(t){e[t]=e[t]||function(){}};return t("moduleStart"),t("moduleDone"),t("testStart"),t("testDone"),e}}(types),function(e){var t=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t};e.runTest=function(e,t,n,r){var i=types.options(n);i.testStart(e);var s=(new Date).getTime(),o=types.test(e,s,i,r);try{t(o)}catch(u){o.done(u)}},e.runSuite=function(n,r,i,s){var o=t(r);async.concatSeries(o,function(t,s){var o=r[t],u;u=n?[].concat(n,t):[t],u.toString=function(){return this.join(" - ")},typeof o=="function"?e.runTest(u,r[t],i,s):e.runSuite(u,r[t],i,s)},s)},e.runModule=function(t,n,r,i){var s=types.options(r);s.moduleStart(t);var o=(new Date).getTime();e.runSuite(null,n,r,function(e,n){var r=(new Date).getTime(),u=types.assertionList(n,r-o);s.moduleDone(t,u),i(null,n)})},e.runModules=function(n,r){var i=[],s=types.options(r),o=(new Date).getTime();async.concatSeries(t(n),function(t,r){e.runModule(t,n[t],s,r)},function(e,t){var n=(new Date).getTime();s.done(types.assertionList(t,n-o))})};var n=function(e,t,n){return function(r){var i={};if(t){var s=r.done;r.done=function(e){try{t.call(i,function(t){if(e&&t)return r._assertion_list.push(types.assertion({error:e})),s(t);s(e||t)})}catch(n){s(n)}}}e?e.call(i,function(e){if(e)return r.done(e);n.call(i,r)}):n.call(i,r)}},r=function(e,i,s){var o={},u=t(s);for(var a=0;a<u.length;a++){var f=u[a];typeof s[f]=="function"?o[f]=n(e,i,s[f]):typeof s[f]=="object"&&(o[f]=r(e,i,s[f]))}return o};e.testCase=function(e){var t=e.setUp,n=e.tearDown;return delete e.setUp,delete e.tearDown,r(t,n,e)}}(core),function(e){e.info="Browser-based test reporter",e.run=function(e,t){function r(e,t){"innerText"in e?e.innerText=t:"textContent"in e&&(e.textContent=t)}function i(e,t){var n=document.getElementById(t);return n||(n=document.createElement(e),n.id=t,document.body.appendChild(n)),n}var n=(new Date).getTime(),s=i("h1","nodeunit-header"),o=i("h2","nodeunit-banner"),u=i("h2","nodeunit-userAgent"),a=i("ol","nodeunit-tests"),f=i("p","nodeunit-testresult");r(u,navigator.userAgent),nodeunit.runModules(e,{moduleStart:function(e){},testDone:function(e,t){var n=document.createElement("li"),r=document.createElement("strong");r.innerHTML=e+' <b style="color: black;">('+'<b class="fail">'+t.failures()+"</b>, "+'<b class="pass">'+t.passes()+"</b>, "+t.length+")</b>",n.className=t.failures()?"fail":"pass",n.appendChild(r);var i=document.createElement("ol");i.style.display="none",n.onclick=function(){var e=i.style.display;i.style.display=e=="none"?"block":"none"};for(var s=0;s<t.length;s++){var o=document.createElement("li"),u=t[s];u.failed()?(o.innerHTML=(u.message||u.method||"no message")+"<pre>"+(u.error.stack||u.error)+"</pre>",o.className="fail"):(o.innerHTML=u.message||u.method||"no message",o.className="pass"),i.appendChild(o)}n.appendChild(i),a.appendChild(n)},done:function(e){var t=(new Date).getTime(),r=t-n,i=e.failures();o.className=i?"fail":"pass",f.innerHTML="Tests completed in "+r+' milliseconds.<br/><span class="passed">'+e.passes()+"</span> assertions of "+'<span class="all">'+e.length+"<span> passed, "+e.failures()+" failed."}})}}(reporter),nodeunit=core,nodeunit.assert=assert,nodeunit.reporter=reporter,nodeunit.run=reporter.run,nodeunit}();