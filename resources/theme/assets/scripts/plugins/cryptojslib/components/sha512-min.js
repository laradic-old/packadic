(function(){function e(){return i.create.apply(i,arguments)}for(var t=CryptoJS,n=t.lib.Hasher,r=t.x64,i=r.Word,s=r.WordArray,r=t.algo,o=[e(1116352408,3609767458),e(1899447441,602891725),e(3049323471,3964484399),e(3921009573,2173295548),e(961987163,4081628472),e(1508970993,3053834265),e(2453635748,2937671579),e(2870763221,3664609560),e(3624381080,2734883394),e(310598401,1164996542),e(607225278,1323610764),e(1426881987,3590304994),e(1925078388,4068182383),e(2162078206,991336113),e(2614888103,633803317),e(3248222580,3479774868),e(3835390401,2666613458),e(4022224774,944711139),e(264347078,2341262773),e(604807628,2007800933),e(770255983,1495990901),e(1249150122,1856431235),e(1555081692,3175218132),e(1996064986,2198950837),e(2554220882,3999719339),e(2821834349,766784016),e(2952996808,2566594879),e(3210313671,3203337956),e(3336571891,1034457026),e(3584528711,2466948901),e(113926993,3758326383),e(338241895,168717936),e(666307205,1188179964),e(773529912,1546045734),e(1294757372,1522805485),e(1396182291,2643833823),e(1695183700,2343527390),e(1986661051,1014477480),e(2177026350,1206759142),e(2456956037,344077627),e(2730485921,1290863460),e(2820302411,3158454273),e(3259730800,3505952657),e(3345764771,106217008),e(3516065817,3606008344),e(3600352804,1432725776),e(4094571909,1467031594),e(275423344,851169720),e(430227734,3100823752),e(506948616,1363258195),e(659060556,3750685593),e(883997877,3785050280),e(958139571,3318307427),e(1322822218,3812723403),e(1537002063,2003034995),e(1747873779,3602036899),e(1955562222,1575990012),e(2024104815,1125592928),e(2227730452,2716904306),e(2361852424,442776044),e(2428436474,593698344),e(2756734187,3733110249),e(3204031479,2999351573),e(3329325298,3815920427),e(3391569614,3928383900),e(3515267271,566280711),e(3940187606,3454069534),e(4118630271,4000239992),e(116418474,1914138554),e(174292421,2731055270),e(289380356,3203993006),e(460393269,320620315),e(685471733,587496836),e(852142971,1086792851),e(1017036298,365543100),e(1126000580,2618297676),e(1288033470,3409855158),e(1501505948,4234509866),e(1607167915,987167468),e(1816402316,1246189591)],u=[],a=0;80>a;a++)u[a]=e();r=r.SHA512=n.extend({_doReset:function(){this._hash=new s.init([new i.init(1779033703,4089235720),new i.init(3144134277,2227873595),new i.init(1013904242,4271175723),new i.init(2773480762,1595750129),new i.init(1359893119,2917565137),new i.init(2600822924,725511199),new i.init(528734635,4215389547),new i.init(1541459225,327033209)])},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],s=n[2],a=n[3],f=n[4],l=n[5],c=n[6],n=n[7],h=r.high,p=r.low,d=i.high,m=i.low,g=s.high,y=s.low,b=a.high,w=a.low,E=f.high,S=f.low,x=l.high,T=l.low,N=c.high,C=c.low,k=n.high,L=n.low,A=h,O=p,M=d,_=m,D=g,P=y,H=b,B=w,j=E,F=S,I=x,q=T,R=N,U=C,z=k,W=L,X=0;80>X;X++){var V=u[X];if(16>X)var $=V.high=e[t+2*X]|0,J=V.low=e[t+2*X+1]|0;else{var $=u[X-15],J=$.high,K=$.low,$=(J>>>1|K<<31)^(J>>>8|K<<24)^J>>>7,K=(K>>>1|J<<31)^(K>>>8|J<<24)^(K>>>7|J<<25),Q=u[X-2],J=Q.high,G=Q.low,Q=(J>>>19|G<<13)^(J<<3|G>>>29)^J>>>6,G=(G>>>19|J<<13)^(G<<3|J>>>29)^(G>>>6|J<<26),J=u[X-7],Y=J.high,Z=u[X-16],et=Z.high,Z=Z.low,J=K+J.low,$=$+Y+(J>>>0<K>>>0?1:0),J=J+G,$=$+Q+(J>>>0<G>>>0?1:0),J=J+Z,$=$+et+(J>>>0<Z>>>0?1:0);V.high=$,V.low=J}var Y=j&I^~j&R,Z=F&q^~F&U,V=A&M^A&D^M&D,tt=O&_^O&P^_&P,K=(A>>>28|O<<4)^(A<<30|O>>>2)^(A<<25|O>>>7),Q=(O>>>28|A<<4)^(O<<30|A>>>2)^(O<<25|A>>>7),G=o[X],nt=G.high,rt=G.low,G=W+((F>>>14|j<<18)^(F>>>18|j<<14)^(F<<23|j>>>9)),et=z+((j>>>14|F<<18)^(j>>>18|F<<14)^(j<<23|F>>>9))+(G>>>0<W>>>0?1:0),G=G+Z,et=et+Y+(G>>>0<Z>>>0?1:0),G=G+rt,et=et+nt+(G>>>0<rt>>>0?1:0),G=G+J,et=et+$+(G>>>0<J>>>0?1:0),J=Q+tt,V=K+V+(J>>>0<Q>>>0?1:0),z=R,W=U,R=I,U=q,I=j,q=F,F=B+G|0,j=H+et+(F>>>0<B>>>0?1:0)|0,H=D,B=P,D=M,P=_,M=A,_=O,O=G+J|0,A=et+V+(O>>>0<G>>>0?1:0)|0}p=r.low=p+O,r.high=h+A+(p>>>0<O>>>0?1:0),m=i.low=m+_,i.high=d+M+(m>>>0<_>>>0?1:0),y=s.low=y+P,s.high=g+D+(y>>>0<P>>>0?1:0),w=a.low=w+B,a.high=b+H+(w>>>0<B>>>0?1:0),S=f.low=S+F,f.high=E+j+(S>>>0<F>>>0?1:0),T=l.low=T+q,l.high=x+I+(T>>>0<q>>>0?1:0),C=c.low=C+U,c.high=N+R+(C>>>0<U>>>0?1:0),L=n.low=L+W,n.high=k+z+(L>>>0<W>>>0?1:0)},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,r=8*e.sigBytes;return t[r>>>5]|=128<<24-r%32,t[(r+128>>>10<<5)+30]=Math.floor(n/4294967296),t[(r+128>>>10<<5)+31]=n,e.sigBytes=4*t.length,this._process(),this._hash.toX32()},clone:function(){var e=n.clone.call(this);return e._hash=this._hash.clone(),e},blockSize:32}),t.SHA512=n._createHelper(r),t.HmacSHA512=n._createHmacHelper(r)})();