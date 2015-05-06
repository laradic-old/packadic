module("Keyboard Navigation 2012",{setup:function(){this.input=$('<input type="text" value="31-03-2012">').appendTo("#qunit-fixture").datepicker({format:"dd-mm-yyyy"}).focus(),this.dp=this.input.data("datepicker"),this.picker=this.dp.picker},teardown:function(){this.picker.remove()}}),test("by day (right/left arrows)",function(){var e;equal(this.dp.viewMode,0),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),this.input.trigger({type:"keydown",keyCode:37}),datesEqual(this.dp.viewDate,UTCDate(2012,2,30)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2012,2,30)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"');for(var t=0;t<2;t++)this.input.trigger({type:"keydown",keyCode:39});datesEqual(this.dp.viewDate,UTCDate(2012,3,1)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2012,3,1)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"April 2012",'Title is "April 2012"')}),test("by week (up/down arrows)",function(){var e;equal(this.dp.viewMode,0),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),this.input.trigger({type:"keydown",keyCode:38}),datesEqual(this.dp.viewDate,UTCDate(2012,2,24)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2012,2,24)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"');for(var t=0;t<2;t++)this.input.trigger({type:"keydown",keyCode:40});datesEqual(this.dp.viewDate,UTCDate(2012,3,7)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2012,3,7)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"April 2012",'Title is "April 2012"')}),test("by month, v1 (shift + left/right arrows)",function(){var e;equal(this.dp.viewMode,0),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),this.input.trigger({type:"keydown",keyCode:37,shiftKey:!0}),datesEqual(this.dp.viewDate,UTCDate(2012,1,29)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2012,1,29)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"February 2012",'Title is "February 2012"');for(var t=0;t<2;t++)this.input.trigger({type:"keydown",keyCode:39,shiftKey:!0});datesEqual(this.dp.viewDate,UTCDate(2012,3,29)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2012,3,29)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"April 2012",'Title is "April 2012"')}),test("by month, v2 (shift + up/down arrows)",function(){var e;equal(this.dp.viewMode,0),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),this.input.trigger({type:"keydown",keyCode:38,shiftKey:!0}),datesEqual(this.dp.viewDate,UTCDate(2012,1,29)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2012,1,29)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"February 2012",'Title is "February 2012"');for(var t=0;t<2;t++)this.input.trigger({type:"keydown",keyCode:40,shiftKey:!0});datesEqual(this.dp.viewDate,UTCDate(2012,3,29)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2012,3,29)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"April 2012",'Title is "April 2012"')}),test("by year, v1 (ctrl + left/right arrows)",function(){var e;equal(this.dp.viewMode,0),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),this.input.trigger({type:"keydown",keyCode:37,ctrlKey:!0}),datesEqual(this.dp.viewDate,UTCDate(2011,2,31)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2011,2,31)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2011",'Title is "March 2011"');for(var t=0;t<2;t++)this.input.trigger({type:"keydown",keyCode:39,ctrlKey:!0});datesEqual(this.dp.viewDate,UTCDate(2013,2,31)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2013,2,31)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2013",'Title is "March 2013"')}),test("by year, v2 (ctrl + up/down arrows)",function(){var e;equal(this.dp.viewMode,0),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),this.input.trigger({type:"keydown",keyCode:38,ctrlKey:!0}),datesEqual(this.dp.viewDate,UTCDate(2011,2,31)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2011,2,31)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2011",'Title is "March 2011"');for(var t=0;t<2;t++)this.input.trigger({type:"keydown",keyCode:40,ctrlKey:!0});datesEqual(this.dp.viewDate,UTCDate(2013,2,31)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2013,2,31)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2013",'Title is "March 2013"')}),test("by year, v3 (ctrl + shift + left/right arrows)",function(){var e;equal(this.dp.viewMode,0),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),this.input.trigger({type:"keydown",keyCode:37,ctrlKey:!0,shiftKey:!0}),datesEqual(this.dp.viewDate,UTCDate(2011,2,31)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2011,2,31)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2011",'Title is "March 2011"');for(var t=0;t<2;t++)this.input.trigger({type:"keydown",keyCode:39,ctrlKey:!0,shiftKey:!0});datesEqual(this.dp.viewDate,UTCDate(2013,2,31)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2013,2,31)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2013",'Title is "March 2013"')}),test("by year, v4 (ctrl + shift + up/down arrows)",function(){var e;equal(this.dp.viewMode,0),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),this.input.trigger({type:"keydown",keyCode:38,ctrlKey:!0,shiftKey:!0}),datesEqual(this.dp.viewDate,UTCDate(2011,2,31)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2011,2,31)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2011",'Title is "March 2011"');for(var t=0;t<2;t++)this.input.trigger({type:"keydown",keyCode:40,ctrlKey:!0,shiftKey:!0});datesEqual(this.dp.viewDate,UTCDate(2013,2,31)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2013,2,31)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2013",'Title is "March 2013"')}),test("by year, from leap day",function(){var e;equal(this.dp.viewMode,0),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),this.input.val("29-02-2012").datepicker("update"),datesEqual(this.dp.viewDate,UTCDate(2012,1,29)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,1,29)),equal(this.dp.focusDate,null),equal(e.text(),"February 2012",'Title is "February 2012"'),this.input.trigger({type:"keydown",keyCode:37,ctrlKey:!0}),datesEqual(this.dp.viewDate,UTCDate(2011,1,28)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,1,29)),datesEqual(this.dp.focusDate,UTCDate(2011,1,28)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"February 2011",'Title is "February 2011"'),this.input.trigger({type:"keydown",keyCode:39,ctrlKey:!0}),datesEqual(this.dp.viewDate,UTCDate(2012,1,28)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,1,29)),datesEqual(this.dp.focusDate,UTCDate(2012,1,28)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"February 2012",'Title is "February 2012"'),this.input.trigger({type:"keydown",keyCode:39,ctrlKey:!0}),datesEqual(this.dp.viewDate,UTCDate(2013,1,28)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,1,29)),datesEqual(this.dp.focusDate,UTCDate(2013,1,28)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"February 2013",'Title is "February 2013"')}),test("Selection (enter)",function(){var e;equal(this.dp.viewMode,0),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),this.input.trigger({type:"keydown",keyCode:37}),datesEqual(this.dp.viewDate,UTCDate(2012,2,30)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2012,2,30)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),this.input.trigger({type:"keydown",keyCode:13}),datesEqual(this.dp.viewDate,UTCDate(2012,2,30)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,30)),equal(this.dp.focusDate,null),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),ok(this.picker.is(":visible"),"Picker is not hidden")}),test("Selection + hide (enter)",function(){var e;this.dp._process_options({autoclose:!0}),equal(this.dp.viewMode,0),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),this.input.trigger({type:"keydown",keyCode:37}),datesEqual(this.dp.viewDate,UTCDate(2012,2,30)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),datesEqual(this.dp.focusDate,UTCDate(2012,2,30)),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),this.input.trigger({type:"keydown",keyCode:13}),datesEqual(this.dp.viewDate,UTCDate(2012,2,30)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,30)),equal(this.dp.focusDate,null),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),ok(this.picker.is(":not(:visible)"),"Picker is hidden")}),test("Toggle hide/show (escape); navigation while hidden is suppressed",function(){var e;equal(this.dp.viewMode,0),e=this.picker.find(".datepicker-days thead th.datepicker-switch"),equal(e.text(),"March 2012",'Title is "March 2012"'),ok(this.picker.is(":visible"),"Picker is visible"),this.input.trigger({type:"keydown",keyCode:27}),ok(this.picker.is(":not(:visible)"),"Picker is hidden"),datesEqual(this.dp.viewDate,UTCDate(2012,2,31)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),this.input.trigger({type:"keydown",keyCode:37}),datesEqual(this.dp.viewDate,UTCDate(2012,2,31)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31)),this.input.trigger({type:"keydown",keyCode:27}),ok(this.picker.is(":visible"),"Picker is visible"),datesEqual(this.dp.viewDate,UTCDate(2012,2,31)),datesEqual(this.dp.dates.get(-1),UTCDate(2012,2,31))});