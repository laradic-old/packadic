jQuery.fn.dataTableExt.oApi.fnGetAdjacentTr=function(e,t,n){var r=e.oApi._fnNodeToDataIndex(e,t),i=$.inArray(r,e.aiDisplay);return i==-1?null:(i+=typeof n=="undefined"||n?1:-1,i<0||i>=e.aiDisplay.length?null:e.aoData[e.aiDisplay[i]].nTr)};