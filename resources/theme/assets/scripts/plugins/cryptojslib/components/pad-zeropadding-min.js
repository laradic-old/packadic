CryptoJS.pad.ZeroPadding={pad:function(e,t){var n=4*t;e.clamp(),e.sigBytes+=n-(e.sigBytes%n||n)},unpad:function(e){for(var t=e.words,n=e.sigBytes-1;!(t[n>>>2]>>>24-8*(n%4)&255);)n--;e.sigBytes=n+1}};