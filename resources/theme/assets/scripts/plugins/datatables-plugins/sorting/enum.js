jQuery.extend(jQuery.fn.dataTableExt.oSort,{"enum-pre":function(e){switch(e){case"High":return 1;case"Medium":return 2;case"Low":return 3;default:return 4}},"enum-asc":function(e,t){return e<t?-1:e>t?1:0},"enum-desc":function(e,t){return e<t?1:e>t?-1:0}});