define(["require","exports","module"],function(e,t,n){var r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},x=[].slice;m=function(e,t){var n;return n=[e,t],n.generated=!0,n},t.Rewriter=function(){function e(){}return e.prototype.rewrite=function(e){return this.tokens=e,this.removeLeadingNewlines(),this.closeOpenCalls(),this.closeOpenIndexes(),this.normalizeLines(),this.tagPostfixConditionals(),this.addImplicitBracesAndParens(),this.addLocationDataToGeneratedTokens(),this.tokens},e.prototype.scanTokens=function(e){var t,n,r;r=this.tokens,t=0;while(n=r[t])t+=e.call(this,n,t,r);return!0},e.prototype.detectEnd=function(e,t,n){var r,i,s,a,f;s=this.tokens,r=0;while(i=s[e]){if(r===0&&t.call(this,i,e))return n.call(this,i,e);if(!i||r<0)return n.call(this,i,e-1);if(a=i[0],S.call(u,a)>=0)r+=1;else if(f=i[0],S.call(o,f)>=0)r-=1;e+=1}return e-1},e.prototype.removeLeadingNewlines=function(){var e,t,n,r,i;i=this.tokens;for(e=n=0,r=i.length;n<r;e=++n){t=i[e][0];if(t!=="TERMINATOR")break}if(e)return this.tokens.splice(0,e)},e.prototype.closeOpenCalls=function(){var e,t;return t=function(e,t){var n;return(n=e[0])===")"||n==="CALL_END"||e[0]==="OUTDENT"&&this.tag(t-1)===")"},e=function(e,t){return this.tokens[e[0]==="OUTDENT"?t-1:t][0]="CALL_END"},this.scanTokens(function(n,r){return n[0]==="CALL_START"&&this.detectEnd(r+1,t,e),1})},e.prototype.closeOpenIndexes=function(){var e,t;return t=function(e,t){var n;return(n=e[0])==="]"||n==="INDEX_END"},e=function(e,t){return e[0]="INDEX_END"},this.scanTokens(function(n,r){return n[0]==="INDEX_START"&&this.detectEnd(r+1,t,e),1})},e.prototype.matchTags=function(){var e,t,n,r,i,s,o;t=arguments[0],r=2<=arguments.length?x.call(arguments,1):[],e=0;for(n=i=0,s=r.length;0<=s?i<s:i>s;n=0<=s?++i:--i){while(this.tag(t+n+e)==="HERECOMMENT")e+=2;if(r[n]==null)continue;typeof r[n]=="string"&&(r[n]=[r[n]]);if(o=this.tag(t+n+e),S.call(r[n],o)<0)return!1}return!0},e.prototype.looksObjectish=function(e){return this.matchTags(e,"@",null,":")||this.matchTags(e,null,":")},e.prototype.findTagsBackwards=function(e,t){var n,r,i,s,a,f,l;n=[];while(e>=0&&(n.length||(s=this.tag(e),S.call(t,s)<0)&&((a=this.tag(e),S.call(u,a)<0)||this.tokens[e].generated)&&(f=this.tag(e),S.call(p,f)<0)))(r=this.tag(e),S.call(o,r)>=0)&&n.push(this.tag(e)),(i=this.tag(e),S.call(u,i)>=0)&&n.length&&n.pop(),e-=1;return l=this.tag(e),S.call(t,l)>=0},e.prototype.addImplicitBracesAndParens=function(){var e;return e=[],this.scanTokens(function(t,n,r){var s,h,d,v,g,y,b,w,E,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R;H=t[0],T=(N=n>0?r[n-1]:[])[0],E=(n<r.length-1?r[n+1]:[])[0],O=function(){return e[e.length-1]},M=n,v=function(e){return n-M+e},g=function(){var e,t;return(e=O())!=null?(t=e[2])!=null?t.ours:void 0:void 0},y=function(){var e;return g()&&((e=O())!=null?e[0]:void 0)==="("},w=function(){var e;return g()&&((e=O())!=null?e[0]:void 0)==="{"},b=function(){var e;return g&&((e=O())!=null?e[0]:void 0)==="CONTROL"},_=function(t){var i;i=t!=null?t:n,e.push(["(",i,{ours:!0}]),r.splice(i,0,m("CALL_START","("));if(t==null)return n+=1},h=function(){return e.pop(),r.splice(n,0,m("CALL_END",")")),n+=1},s=function(){while(y())h()},D=function(t,i){var s;i==null&&(i=!0),s=t!=null?t:n,e.push(["{",s,{sameLine:!0,startsLine:i,ours:!0}]),r.splice(s,0,m("{",m(new String("{"))));if(t==null)return n+=1},d=function(t){return t=t!=null?t:n,e.pop(),r.splice(t,0,m("}","}")),n+=1};if(!y()||H!=="IF"&&H!=="TRY"&&H!=="FINALLY"&&H!=="CATCH"&&H!=="CLASS"&&H!=="SWITCH"){if(H==="INDENT"&&g()){if(T!=="=>"&&T!=="->"&&T!=="["&&T!=="("&&T!==","&&T!=="{"&&T!=="TRY"&&T!=="ELSE"&&T!=="=")while(y())h();return b()&&e.pop(),e.push([H,n]),v(1)}if(S.call(u,H)>=0)return e.push([H,n]),v(1);if(S.call(o,H)>=0){while(g())y()?h():w()?d():e.pop();e.pop()}if((S.call(l,H)>=0&&t.spaced&&!t.stringEnd||H==="?"&&n>0&&!r[n-1].spaced)&&(S.call(a,E)>=0||S.call(c,E)>=0&&((B=r[n+1])!=null?!B.spaced:!void 0)&&((j=r[n+1])!=null?!j.newLine:!void 0)))return H==="?"&&(H=t[0]="FUNC_EXIST"),_(n+1),v(2);if(S.call(l,H)>=0&&this.matchTags(n+1,"INDENT",null,":")&&!this.findTagsBackwards(n,["CLASS","EXTENDS","IF","CATCH","SWITCH","LEADING_WHEN","FOR","WHILE","UNTIL"]))return _(n+1),e.push(["INDENT",n+2]),v(3);if(H===":"){this.tag(n-2)==="@"?C=n-2:C=n-1;while(this.tag(C-2)==="HERECOMMENT")C-=2;P=C===0||(F=this.tag(C-1),S.call(p,F)>=0)||r[C-1].newLine;if(O()){I=O(),A=I[0],L=I[1];if((A==="{"||A==="INDENT"&&this.tag(L-1)==="{")&&(P||this.tag(C-1)===","||this.tag(C-1)==="{"))return v(1)}return D(C,!!P),v(2)}if(y()&&S.call(i,H)>=0){if(T==="OUTDENT")return h(),v(1);if(N.newLine)return s(),v(1)}w()&&S.call(p,H)>=0&&(O()[2].sameLine=!1);if(S.call(f,H)>=0)while(g()){q=O(),A=q[0],L=q[1],R=q[2],k=R.sameLine,P=R.startsLine;if(y()&&T!==",")h();else if(w()&&k&&!P)d();else{if(!w()||H!=="TERMINATOR"||T===","||!!P&&!!this.looksObjectish(n+1))break;d()}}if(H===","&&!this.looksObjectish(n+1)&&w()&&(E!=="TERMINATOR"||!this.looksObjectish(n+2))){x=E==="OUTDENT"?1:0;while(w())d(n+x)}return v(1)}return e.push(["CONTROL",n,{ours:!0}]),v(1)})},e.prototype.addLocationDataToGeneratedTokens=function(){return this.scanTokens(function(e,t,n){var r,i,s,o,u,a;return e[2]?1:!e.generated&&!e.explicit?1:(e[0]==="{"&&(s=(u=n[t+1])!=null?u[2]:void 0)?(i=s.first_line,r=s.first_column):(o=(a=n[t-1])!=null?a[2]:void 0)?(i=o.last_line,r=o.last_column):i=r=0,e[2]={first_line:i,first_column:r,last_line:i,last_column:r},1)})},e.prototype.normalizeLines=function(){var e,t,n,r,o;return o=n=r=null,t=function(e,t){var n,r,u,a;return e[1]!==";"&&(n=e[0],S.call(d,n)>=0)&&!(e[0]==="TERMINATOR"&&(r=this.tag(t+1),S.call(s,r)>=0))&&(e[0]!=="ELSE"||o==="THEN")&&((u=e[0])!=="CATCH"&&u!=="FINALLY"||o!=="->"&&o!=="=>")||(a=e[0],S.call(i,a)>=0)&&this.tokens[t-1].newLine},e=function(e,t){return this.tokens.splice(this.tag(t-1)===","?t-1:t,0,r)},this.scanTokens(function(i,u,a){var f,l,c,h,p,d;l=i[0];if(l==="TERMINATOR"){if(this.tag(u+1)==="ELSE"&&this.tag(u-1)!=="OUTDENT")return a.splice.apply(a,[u,1].concat(x.call(this.indentation()))),1;if(h=this.tag(u+1),S.call(s,h)>=0)return a.splice(u,1),0}if(l==="CATCH")for(f=c=1;c<=2;f=++c){if((p=this.tag(u+f))!=="OUTDENT"&&p!=="TERMINATOR"&&p!=="FINALLY")continue;return a.splice.apply(a,[u+f,0].concat(x.call(this.indentation()))),2+f}return S.call(v,l)>=0&&this.tag(u+1)!=="INDENT"&&(l!=="ELSE"||this.tag(u+1)!=="IF")?(o=l,d=this.indentation(!0),n=d[0],r=d[1],o==="THEN"&&(n.fromThen=!0),a.splice(u+1,0,n),this.detectEnd(u+2,t,e),l==="THEN"&&a.splice(u,1),1):1})},e.prototype.tagPostfixConditionals=function(){var e,t,n;return n=null,t=function(e,t){var n,r;return r=e[0],n=this.tokens[t-1][0],r==="TERMINATOR"||r==="INDENT"&&S.call(v,n)<0},e=function(e,t){if(e[0]!=="INDENT"||e.generated&&!e.fromThen)return n[0]="POST_"+n[0]},this.scanTokens(function(r,i){return r[0]!=="IF"?1:(n=r,this.detectEnd(i+1,t,e),1)})},e.prototype.indentation=function(e){var t,n;return e==null&&(e=!1),t=["INDENT",2],n=["OUTDENT",2],e&&(t.generated=n.generated=!0),e||(t.explicit=n.explicit=!0),[t,n]},e.prototype.generate=m,e.prototype.tag=function(e){var t;return(t=this.tokens[e])!=null?t[0]:void 0},e}(),r=[["(",")"],["[","]"],["{","}"],["INDENT","OUTDENT"],["CALL_START","CALL_END"],["PARAM_START","PARAM_END"],["INDEX_START","INDEX_END"]],t.INVERSES=h={},u=[],o=[];for(b=0,w=r.length;b<w;b++)E=r[b],g=E[0],y=E[1],u.push(h[y]=g),o.push(h[g]=y);s=["CATCH","THEN","ELSE","FINALLY"].concat(o),l=["IDENTIFIER","SUPER",")","CALL_END","]","INDEX_END","@","THIS"],a=["IDENTIFIER","NUMBER","STRING","JS","REGEX","NEW","PARAM_START","CLASS","IF","TRY","SWITCH","THIS","BOOL","NULL","UNDEFINED","UNARY","SUPER","THROW","@","->","=>","[","(","{","--","++"],c=["+","-"],f=["POST_IF","FOR","WHILE","UNTIL","WHEN","BY","LOOP","TERMINATOR"],v=["ELSE","->","=>","TRY","FINALLY","THEN"],d=["TERMINATOR","CATCH","FINALLY","ELSE","OUTDENT","LEADING_WHEN"],p=["TERMINATOR","INDENT","OUTDENT"],i=[".","?.","::","?::"]});