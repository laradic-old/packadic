(function(){var e=CryptoJS,t=e.lib,n=t.Base,r=t.WordArray,t=e.algo,i=t.EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:t.MD5,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,i=n.hasher.create(),s=r.create(),o=s.words,u=n.keySize,n=n.iterations;o.length<u;){a&&i.update(a);var a=i.update(e).finalize(t);i.reset();for(var f=1;f<n;f++)a=i.finalize(a),i.reset();s.concat(a)}return s.sigBytes=4*u,s}});e.EvpKDF=function(e,t,n){return i.create(n).compute(e,t)}})();