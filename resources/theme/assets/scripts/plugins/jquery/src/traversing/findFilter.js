define(["../core","../var/indexOf","./var/rneedsContext","../selector"],function(e,t,n){function i(t,n,i){if(e.isFunction(n))return e.grep(t,function(e,t){return!!n.call(e,t,e)!==i});if(n.nodeType)return e.grep(t,function(e){return e===n!==i});if(typeof n=="string"){if(r.test(n))return e.filter(n,t,i);n=e.filter(n,t)}return e.grep(t,function(t){return e.inArray(t,n)>=0!==i})}var r=/^.[^:#\[\.,]*$/;e.filter=function(t,n,r){var i=n[0];return r&&(t=":not("+t+")"),n.length===1&&i.nodeType===1?e.find.matchesSelector(i,t)?[i]:[]:e.find.matches(t,e.grep(n,function(e){return e.nodeType===1}))},e.fn.extend({find:function(t){var n,r=[],i=this,s=i.length;if(typeof t!="string")return this.pushStack(e(t).filter(function(){for(n=0;n<s;n++)if(e.contains(i[n],this))return!0}));for(n=0;n<s;n++)e.find(t,i[n],r);return r=this.pushStack(s>1?e.unique(r):r),r.selector=this.selector?this.selector+" "+t:t,r},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(t){return!!i(this,typeof t=="string"&&n.test(t)?e(t):t||[],!1).length}})});