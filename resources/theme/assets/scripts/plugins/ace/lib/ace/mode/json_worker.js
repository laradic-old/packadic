define(["require","exports","module","../lib/oop","../worker/mirror","./json/json_parse"],function(e,t,n){var r=e("../lib/oop"),i=e("../worker/mirror").Mirror,s=e("./json/json_parse"),o=t.JsonWorker=function(e){i.call(this,e),this.setTimeout(200)};r.inherits(o,i),function(){this.onUpdate=function(){var e=this.doc.getValue(),t=[];try{e&&s(e)}catch(n){var r=this.doc.indexToPosition(n.at-1);t.push({row:r.row,column:r.column,text:n.message,type:"error"})}this.sender.emit("annotate",t)}}.call(o.prototype)});