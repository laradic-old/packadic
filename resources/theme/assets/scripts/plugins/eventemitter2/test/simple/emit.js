var simpleEvents=require("nodeunit").testCase,file="../../lib/eventemitter2",EventEmitter2;typeof require!="undefined"?EventEmitter2=require(file).EventEmitter2:EventEmitter2=window.EventEmitter2,module.exports=simpleEvents({"1. Add two listeners on a single event and emit the event.":function(e){function n(){e.ok(!0,"The event was raised")}function r(){e.ok(!0,"The event was raised")}var t=new EventEmitter2({verbose:!0});t.on("test2",n),t.on("test2",r),t.emit("test2"),e.expect(2),e.done()},"2. Add two listeners on a single event and emit the event twice.":function(e){function n(){e.ok(!0,"The event was raised")}function r(){e.ok(!0,"The event was raised")}var t=new EventEmitter2({verbose:!0});t.on("test2",n),t.on("test2",r),t.emit("test2"),t.emit("test2"),e.expect(4),e.done()},"3. Add two listeners on a single event and emit the event with a parameter.":function(e){function n(t){e.ok(!0,"The event was raised"),e.equal(typeof t,"string","The event was raised")}function r(t){e.ok(!0,"The event was raised"),e.equal(typeof t,"string","The event was raised")}var t=new EventEmitter2({verbose:!0});t.on("test2",n),t.on("test2",r),t.emit("test2","Hello, Node"),e.expect(4),e.done()},"4. Add two listeners on an single event and emit the event twice with a parameter.":function(e){function n(t){e.ok(!0,"The event was raised"),e.equal(typeof t,"string","The event was raised")}function r(t){e.ok(!0,"The event was raised"),e.equal(typeof t,"string","The event was raised")}var t=new EventEmitter2({verbose:!0});t.on("test2",n),t.on("test2",r),t.emit("test2","Hello, Node1"),t.emit("test2","Hello, Node2"),e.expect(8),e.done()},"5. Add two listeners on an single event and emit the event twice with multiple parameters.":function(e){function n(t,n,r){e.ok(!0,"The event was raised"),e.equal(typeof t,"string",'The value named "value1" is OK'),e.equal(typeof n,"string",'The value named "value2" is OK'),e.equal(typeof r,"string",'The value named "value3" is OK')}function r(t,n,r){e.ok(!0,"The event was raised"),e.equal(typeof t,"string",'The value named "value1" is OK'),e.equal(typeof n,"string",'The value named "value2" is OK'),e.equal(typeof r,"string",'The value named "value3" is OK')}var t=new EventEmitter2({verbose:!0});t.on("test2",n),t.on("test2",r),t.emit("test2","Hello, Node1","Hello, Node2","Hello, Node3"),t.emit("test2","Hello, Node1","Hello, Node2","Hello, Node3"),e.expect(16),e.done()},"6. Check return values of emit.":function(e){function n(){e.ok(!0,"The event was raised")}var t=new EventEmitter2({verbose:!0});t.on("test6",n),e.ok(t.emit("test6"),"emit should return true after calling a listener"),e.ok(!t.emit("other"),"emit should return false when no listener was called"),t.onAny(n),e.ok(t.emit("other"),"emit should return true after calling an onAny() listener"),e.expect(5),e.done()}});