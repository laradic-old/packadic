(function(e,t,n){n(t).on("init.dt",function(e,t){if(e.namespace!=="dt")return;var r=t.oInit.conditionalPaging;if(n.isPlainObject(r)||r===!0){var i=n.isPlainObject(r)?r:{},s=new n.fn.dataTable.Api(t),o="slow",u=function(e){var t=n(s.table().container()).find("div.dataTables_paginate"),r=s.page.info().pages;n.isPlainObject(e)?r<=1?i.style==="fade"?t.stop().fadeTo(o,0):t.css("visibility","hidden"):i.style==="fade"?t.stop().fadeTo(o,1):t.css("visibility",""):r<=1&&(i.style==="fade"?t.css("opacity",0):t.css("visibility","hidden"))};if(n.isNumeric(i.speed)||n.type(i.speed)==="string")o=i.speed;u(),s.on("draw.dt",u)}})})(window,document,jQuery);