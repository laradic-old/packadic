jQuery.fn.dataTableExt.oApi.fnDataUpdate=function(e,t,n){jQuery(t).find("TD").each(function(t){var r=e.oApi._fnVisibleToColumnIndex(e,t);e.oApi._fnSetCellData(e,n,r,jQuery(this).html())})};