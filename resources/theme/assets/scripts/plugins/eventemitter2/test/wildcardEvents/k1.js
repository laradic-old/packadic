var common=require("../common"),assert=require("assert"),EventEmitter=require("../../lib/eventemitter2").EventEmitter2,e=new EventEmitter({wildcard:!0}),countWildcard=0,counMultiLevelWildcard=0,countAny=0;e.on("foo",function(){e.emit("bar","bar")}),e.on("*",function(e){++countWildcard,console.log(this.event,e),assert.equal(this.event,e)}),e.on("**",function(e){++counMultiLevelWildcard,console.log(this.event,e),assert.equal(this.event,e)}),e.onAny(function(e){++countAny,assert.equal(this.event,e)}),e.emit("foo","foo"),process.on("exit",function(){assert.equal(countWildcard,2),assert.equal(counMultiLevelWildcard,2),assert.equal(countAny,2)});