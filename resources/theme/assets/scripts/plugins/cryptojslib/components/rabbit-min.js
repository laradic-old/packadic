(function(){function e(){for(var e=this._X,t=this._C,n=0;8>n;n++)i[n]=t[n];t[0]=t[0]+1295307597+this._b|0,t[1]=t[1]+3545052371+(t[0]>>>0<i[0]>>>0?1:0)|0,t[2]=t[2]+886263092+(t[1]>>>0<i[1]>>>0?1:0)|0,t[3]=t[3]+1295307597+(t[2]>>>0<i[2]>>>0?1:0)|0,t[4]=t[4]+3545052371+(t[3]>>>0<i[3]>>>0?1:0)|0,t[5]=t[5]+886263092+(t[4]>>>0<i[4]>>>0?1:0)|0,t[6]=t[6]+1295307597+(t[5]>>>0<i[5]>>>0?1:0)|0,t[7]=t[7]+3545052371+(t[6]>>>0<i[6]>>>0?1:0)|0,this._b=t[7]>>>0<i[7]>>>0?1:0;for(n=0;8>n;n++){var r=e[n]+t[n],o=r&65535,u=r>>>16;s[n]=((o*o>>>17)+o*u>>>15)+u*u^((r&4294901760)*r|0)+((r&65535)*r|0)}e[0]=s[0]+(s[7]<<16|s[7]>>>16)+(s[6]<<16|s[6]>>>16)|0,e[1]=s[1]+(s[0]<<8|s[0]>>>24)+s[7]|0,e[2]=s[2]+(s[1]<<16|s[1]>>>16)+(s[0]<<16|s[0]>>>16)|0,e[3]=s[3]+(s[2]<<8|s[2]>>>24)+s[1]|0,e[4]=s[4]+(s[3]<<16|s[3]>>>16)+(s[2]<<16|s[2]>>>16)|0,e[5]=s[5]+(s[4]<<8|s[4]>>>24)+s[3]|0,e[6]=s[6]+(s[5]<<16|s[5]>>>16)+(s[4]<<16|s[4]>>>16)|0,e[7]=s[7]+(s[6]<<8|s[6]>>>24)+s[5]|0}var t=CryptoJS,n=t.lib.StreamCipher,r=[],i=[],s=[],o=t.algo.Rabbit=n.extend({_doReset:function(){for(var t=this._key.words,n=this.cfg.iv,r=0;4>r;r++)t[r]=(t[r]<<8|t[r]>>>24)&16711935|(t[r]<<24|t[r]>>>8)&4278255360;for(var i=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],t=this._C=[t[2]<<16|t[2]>>>16,t[0]&4294901760|t[1]&65535,t[3]<<16|t[3]>>>16,t[1]&4294901760|t[2]&65535,t[0]<<16|t[0]>>>16,t[2]&4294901760|t[3]&65535,t[1]<<16|t[1]>>>16,t[3]&4294901760|t[0]&65535],r=this._b=0;4>r;r++)e.call(this);for(r=0;8>r;r++)t[r]^=i[r+4&7];if(n){var r=n.words,n=r[0],r=r[1],n=(n<<8|n>>>24)&16711935|(n<<24|n>>>8)&4278255360,r=(r<<8|r>>>24)&16711935|(r<<24|r>>>8)&4278255360,i=n>>>16|r&4294901760,s=r<<16|n&65535;t[0]^=n,t[1]^=i,t[2]^=r,t[3]^=s,t[4]^=n,t[5]^=i,t[6]^=r,t[7]^=s;for(r=0;4>r;r++)e.call(this)}},_doProcessBlock:function(t,n){var i=this._X;e.call(this),r[0]=i[0]^i[5]>>>16^i[3]<<16,r[1]=i[2]^i[7]>>>16^i[5]<<16,r[2]=i[4]^i[1]>>>16^i[7]<<16,r[3]=i[6]^i[3]>>>16^i[1]<<16;for(i=0;4>i;i++)r[i]=(r[i]<<8|r[i]>>>24)&16711935|(r[i]<<24|r[i]>>>8)&4278255360,t[n+i]^=r[i]},blockSize:4,ivSize:2});t.Rabbit=n._createHelper(o)})();