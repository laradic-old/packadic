jQuery.extend(jQuery.fn.dataTableExt.oSort,{"scientific-pre":function(e){return parseFloat(e)},"scientific-asc":function(e,t){return e<t?-1:e>t?1:0},"scientific-desc":function(e,t){return e<t?1:e>t?-1:0}});