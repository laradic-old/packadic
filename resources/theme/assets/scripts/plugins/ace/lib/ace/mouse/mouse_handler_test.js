typeof process!="undefined"&&(require("amd-loader"),require("../test/mockdom")),define(["require","exports","module","../editor","../test/mockrenderer","../test/assertions"],function(e,t,n){var r=e("../editor").Editor,i=e("../test/mockrenderer").MockRenderer,s=e("../test/assertions"),o=function(e,t){var n=document.createEvent("MouseEvents");return n.initMouseEvent("mouse"+e,!0,!0,window,t.detail,t.x,t.y,t.x,t.y,t.ctrl,t.alt,t.shift,t.meta,t.button||0,t.relatedTarget),n};n.exports={setUp:function(e){this.editor=new r(new i),this.editor.setValue("Juhu kinners!"),e()},"test: double tap. issue #956":function(){var e=this.editor.renderer.getMouseEventTarget();e.dispatchEvent(o("down",{x:1,y:1})),e.dispatchEvent(o("up",{x:1,y:1})),e.dispatchEvent(o("down",{x:1,y:1,detail:2})),e.dispatchEvent(o("up",{x:1,y:1,detail:2})),s.equal(this.editor.getSelectedText(),"Juhu")}}}),typeof module!="undefined"&&module===require.main&&require("asyncjs").test.testcase(module.exports).exec();