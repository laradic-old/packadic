var isPromise=function(e){return e&&typeof e.then=="function"},defer=function(){var e=[],t;return{resolve:function(n){if(e){t=ref(n);for(var r=0,i=e.length;r<i;r++)t.then.apply(t,e[r]);e=undefined}},promise:{then:function(n,r){var i=defer();n=n||function(e){return e},r=r||function(e){return reject(e)};var s=function(e){i.resolve(n(e))},o=function(e){i.resolve(r(e))};return e?e.push([s,o]):t.then(s,o),i.promise}}}},ref=function(e){return e&&typeof e.then=="function"?e:{then:function(t){return ref(t(e))}}},reject=function(e){return{then:function(t,n){return ref(n(e))}}};