define(["require","exports","module","../lib/oop","../lib/lang","../worker/mirror","./html/saxparser"],function(e,t,n){var r=e("../lib/oop"),i=e("../lib/lang"),s=e("../worker/mirror").Mirror,o=e("./html/saxparser").SAXParser,u={"expected-doctype-but-got-start-tag":"info","expected-doctype-but-got-chars":"info","non-html-root":"info"},a=t.Worker=function(e){s.call(this,e),this.setTimeout(400),this.context=null};r.inherits(a,s),function(){this.setOptions=function(e){this.context=e.context},this.onUpdate=function(){var e=this.doc.getValue();if(!e)return;var t=new o,n=[],r=function(){};t.contentHandler={startDocument:r,endDocument:r,startElement:r,endElement:r,characters:r},t.errorHandler={error:function(e,t,r){n.push({row:t.line,column:t.column,text:e,type:u[r]||"error"})}},this.context?t.parseFragment(e,this.context):t.parse(e),this.sender.emit("error",n)}}.call(a.prototype)});