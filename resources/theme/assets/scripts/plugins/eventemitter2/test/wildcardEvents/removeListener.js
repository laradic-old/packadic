var simpleEvents=require("nodeunit").testCase,file="../../lib/eventemitter2",EventEmitter2;typeof require!="undefined"?EventEmitter2=require(file).EventEmitter2:EventEmitter2=window.EventEmitter2,module.exports=simpleEvents({"1. add a single event and then remove the event.":function(e){var t=new EventEmitter2({wildcard:!0,verbose:!0}),n="remove.foo.bar",r,i=function(){e.ok(!0,"event was raised")};t.on(n,i),r=t.listeners(n),e.equal(r.length,1,"should only have 1"),t.removeListener(n,i),r=t.listeners(n),e.equal(r.length,0,"should be 0"),e.expect(2),e.done()},"2. Add two events and then remove only one of those events.":function(e){var t=new EventEmitter2({wildcard:!0,verbose:!0}),n="remove.foo.bar",r,i=function(){e.ok(!0,"event was raised")};t.on(n,i),t.on(n,i),r=t.listeners(n),e.equal(r.length,2,"should only have 2"),t.removeListener(n,i),r=t.listeners(n),e.equal(r.length,1,"should be 1"),e.expect(2),e.done()},"3. Add three events and remove only one of the events that was added.":function(e){var t=new EventEmitter2({wildcard:!0,verbose:!0}),n="remove.foo.bar",r,i=function(){e.ok(!0,"event was raised")};t.on(n,i),t.on(n,i),t.on(n,i),r=t.listeners(n),e.equal(r.length,3,"should only have 3"),t.removeListener(n,i),r=t.listeners(n),e.equal(r.length,2,"should be 2"),e.expect(2),e.done()},"4. Should error if we don't pass a function to the emit method.":function(e){var t=new EventEmitter2({wildcard:!0,verbose:!0}),n="remove.foo.bar",r,i=function(){e.ok(!0,"event was raised")};t.on(n,i),r=t.listeners(n),e.equal(r.length,1,"should only have 1"),e.throws(function(){t.removeListener(n,n)},Error,"should throw an Error"),r=t.listeners(n),e.equal(r.length,1,"should be 1"),e.expect(3),e.done()},"5. Removing one listener should not affect another listener.":function(e){var t=new EventEmitter2({wildcard:!0,verbose:!0}),n="remove.foo.bar",r,i=function(){e.ok(!0,"event was raised")},s=function(){e.ok(!0,"event was raised")};t.on(n,i),r=t.listeners(n),e.equal(r.length,1,"should only have 1"),t.removeListener(n,s),r=t.listeners(n),e.equal(r.length,1,"should be 1"),e.expect(2),e.done()},"6. Remove all listener functions.":function(e){var t=new EventEmitter2({wildcard:!0,verbose:!0}),n="remove.foo.bar",r,i=function(){e.ok(!0,"event was raised")};for(var s=0;s<10;s++)t.on(n,i);r=t.listeners(n),e.equal(r.length,10,"should only have 10"),t.removeListener(n,i),r=t.listeners(n),e.equal(r.length,9,"should be 9"),t.removeAllListeners(n),r=t.listeners(n),e.equal(r.length,0,"should be 0"),e.expect(3),e.done()},"7. Removing listeners for one event should not affect another event's listeners.":function(e){var t=new EventEmitter2({wildcard:!0,verbose:!0}),n="remove.foo.bar",r,i=function(){e.ok(!0,"event was raised")};for(var s=0;s<10;s++)t.on(n,i);r=t.listeners(n),e.equal(r.length,10,"should only have 10"),t.removeListener(n+n,i),r=t.listeners(n),e.equal(r.length,10,"should be 10"),t.removeAllListeners(n+n),r=t.listeners(n),e.equal(r.length,10,"should be 10"),t.removeAllListeners(n+"."+n),r=t.listeners(n),e.equal(r.length,10,"should be 10"),t.removeAllListeners(n),r=t.listeners(n),e.equal(r.length,0,"should be 0"),e.expect(5),e.done()},"8. Its ok to listen on wildcard, so it is ok to remove it.":function(e){var t=new EventEmitter2({wildcard:!0,verbose:!0}),n="*.wild.card",r="just.another.event",i,s=function(){e.ok(!0,"event was raised")};t.on(r,s),t.on(n,s),t.removeListener(n,s),i=t.listeners(n),e.equal(i.length,0,"should be 0"),e.expect(1),e.done()},"9. And (8) should not depend on order of listening.":function(e){var t=new EventEmitter2({wildcard:!0,verbose:!0}),n="*.wild.card",r="just.another.event",i,s=function(){e.ok(!0,"event was raised")};t.on(n,s),t.on(r,s),t.removeListener(n,s),i=t.listeners(n),e.equal(i.length,0,"should be 0"),e.expect(1),e.done()},"10. Reporting many listeners on wildcard all should removed.":function(e){var t=new EventEmitter2({wildcard:!0,verbose:!0}),n="*.wild.card",r="exact.wild.card",i,s=function(){e.ok(!0,"event was raised")};t.on(n,s),t.on(r,s),i=t.listeners(n),e.equal(i.length,2,"should only have 2"),t.removeListener(n,s),i=t.listeners(n),e.equal(i.length,0,"should be 0"),e.expect(2),e.done()},"11. Add some listeners with wildcards and remove only the wildcard":function(e){var t=new EventEmitter2({wildcard:!0,verbose:!0}),n=0,r=function(){n+=1},i=function(){n+=1};t.on("foo.bar.baz",r),t.on("foo.bar.baz",r),t.on("foo.*.*",i);var s=t.off("foo.*.*",i);t.emit("foo.bar.baz"),e.equal(n,2,"should call only good callbacks"),e.equal(s,t,"should allow chaining"),e.expect(2),e.done()}});