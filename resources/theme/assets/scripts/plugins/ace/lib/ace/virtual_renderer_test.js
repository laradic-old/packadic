typeof process!="undefined"&&(require("amd-loader"),require("./test/mockdom")),define(["require","exports","module","./edit_session","./virtual_renderer","./test/assertions"],function(e,t,n){var r=e("./edit_session").EditSession,i=e("./virtual_renderer").VirtualRenderer,s=e("./test/assertions");n.exports={"test: screen2text the column should be rounded to the next character edge":function(){function o(e,r,i,o){s.position(t.screenToTextCoordinates(e+n.left,r+n.top),i,o)}var e=document.createElement("div");if(!e.getBoundingClientRect){console.log("Skipping test: This test only runs in the browser");return}e.style.left="20px",e.style.top="30px",e.style.width="300px",e.style.height="100px",document.body.appendChild(e);var t=new i(e);t.setPadding(0),t.setSession(new r("1234"));var n=t.scroller.getBoundingClientRect();t.characterWidth=10,t.lineHeight=15,o(4,0,0,0),o(5,0,0,1),o(9,0,0,1),o(10,0,0,1),o(14,0,0,1),o(15,0,0,2),document.body.removeChild(e)}}}),typeof module!="undefined"&&module===require.main&&require("asyncjs").test.testcase(module.exports).exec();