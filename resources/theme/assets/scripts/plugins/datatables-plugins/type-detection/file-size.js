jQuery.fn.dataTable.ext.type.detect.unshift(function(e){if(typeof e!="string")return null;var t=e.replace(/[\d\.]/g,"").toLowerCase();return t!==""&&t!=="b"&&t!=="kb"&&t!=="mb"&&t!=="gb"?null:isNaN(parseFloat(e))?null:"file-size"});