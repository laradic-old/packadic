(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.registerHelper("lint","yaml",function(t){var n=[];try{jsyaml.load(t)}catch(r){var i=r.mark;n.push({from:e.Pos(i.line,i.column),to:e.Pos(i.line,i.column),message:r.message})}return n})});