(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror"),require("../fold/xml-fold")):typeof define=="function"&&define.amd?define(["../../lib/codemirror","../fold/xml-fold"],e):e(CodeMirror)})(function(e){function t(e){e.state.tagHit&&e.state.tagHit.clear(),e.state.tagOther&&e.state.tagOther.clear(),e.state.tagHit=e.state.tagOther=null}function n(n){n.state.failedTagMatch=!1,n.operation(function(){t(n);if(n.somethingSelected())return;var r=n.getCursor(),i=n.getViewport();i.from=Math.min(i.from,r.line),i.to=Math.max(r.line+1,i.to);var s=e.findMatchingTag(n,r,i);if(!s)return;if(n.state.matchBothTags){var o=s.at=="open"?s.open:s.close;o&&(n.state.tagHit=n.markText(o.from,o.to,{className:"CodeMirror-matchingtag"}))}var u=s.at=="close"?s.open:s.close;u?n.state.tagOther=n.markText(u.from,u.to,{className:"CodeMirror-matchingtag"}):n.state.failedTagMatch=!0})}function r(e){e.state.failedTagMatch&&n(e)}e.defineOption("matchTags",!1,function(i,s,o){o&&o!=e.Init&&(i.off("cursorActivity",n),i.off("viewportChange",r),t(i)),s&&(i.state.matchBothTags=typeof s=="object"&&s.bothTags,i.on("cursorActivity",n),i.on("viewportChange",r),n(i))}),e.commands.toMatchingTag=function(t){var n=e.findMatchingTag(t,t.getCursor());if(n){var r=n.at=="close"?n.open:n.close;r&&t.extendSelection(r.to,r.from)}}});