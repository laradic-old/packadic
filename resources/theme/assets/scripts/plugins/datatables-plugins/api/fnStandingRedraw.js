jQuery.fn.dataTableExt.oApi.fnStandingRedraw=function(e){if(e.oFeatures.bServerSide===!1){var t=e._iDisplayStart;e.oApi._fnReDraw(e),e._iDisplayStart=t,e.oApi._fnCalculateEnd(e)}e.oApi._fnDraw(e)};