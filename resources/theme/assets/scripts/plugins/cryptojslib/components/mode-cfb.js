CryptoJS.mode.CFB=function(){function t(e,t,n,r){var i=this._iv;if(i){var s=i.slice(0);this._iv=undefined}else var s=this._prevBlock;r.encryptBlock(s,0);for(var o=0;o<n;o++)e[t+o]^=s[o]}var e=CryptoJS.lib.BlockCipherMode.extend();return e.Encryptor=e.extend({processBlock:function(e,n){var r=this._cipher,i=r.blockSize;t.call(this,e,n,i,r),this._prevBlock=e.slice(n,n+i)}}),e.Decryptor=e.extend({processBlock:function(e,n){var r=this._cipher,i=r.blockSize,s=e.slice(n,n+i);t.call(this,e,n,i,r),this._prevBlock=s}}),e}();