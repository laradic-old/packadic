(function(){var e=CryptoJS,t=e.lib,n=t.WordArray,r=t.Hasher,i=e.algo,s=[],o=i.SHA1=r.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){var n=this._hash.words,r=n[0],i=n[1],o=n[2],u=n[3],a=n[4];for(var f=0;f<80;f++){if(f<16)s[f]=e[t+f]|0;else{var l=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=l<<1|l>>>31}var c=(r<<5|r>>>27)+a+s[f];f<20?c+=(i&o|~i&u)+1518500249:f<40?c+=(i^o^u)+1859775393:f<60?c+=(i&o|i&u|o&u)-1894007588:c+=(i^o^u)-899497514,a=u,u=o,o=i<<30|i>>>2,i=r,r=c}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+o|0,n[3]=n[3]+u|0,n[4]=n[4]+a|0},_doFinalize:function(){var e=this._data,t=e.words,n=this._nDataBytes*8,r=e.sigBytes*8;return t[r>>>5]|=128<<24-r%32,t[(r+64>>>9<<4)+14]=Math.floor(n/4294967296),t[(r+64>>>9<<4)+15]=n,e.sigBytes=t.length*4,this._process(),this._hash},clone:function(){var e=r.clone.call(this);return e._hash=this._hash.clone(),e}});e.SHA1=r._createHelper(o),e.HmacSHA1=r._createHmacHelper(o)})();