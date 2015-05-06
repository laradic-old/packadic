typeof process!="undefined"&&(require("amd-loader"),require("../test/mockdom")),define(["require","exports","module","../test/assertions","../edit_session","./text","../mode/javascript"],function(e,t,n){var r=e("../test/assertions"),i=e("../edit_session").EditSession,s=e("./text").Text,o=e("../mode/javascript").Mode;n.exports={setUp:function(e){this.session=new i(""),this.session.setMode(new o),this.textLayer=new s(document.createElement("div")),this.textLayer.setSession(this.session),this.textLayer.config={characterWidth:10,lineHeight:20},e()},"test: render line with hard tabs should render the same as lines with soft tabs":function(){this.session.setValue("a	a	a	\na   a   a   \n"),this.textLayer.$computeTabString();var e=[];this.textLayer.$renderLine(e,0);var t=[];this.textLayer.$renderLine(t,1),r.equal(e.join(""),t.join(""))},"test rendering width of ideographic space (U+3000)":function(){this.session.setValue("　");var e=[];this.textLayer.$renderLine(e,0,!0),r.equal(e.join(""),"<span class='ace_cjk' style='width:20px'></span>"),this.textLayer.setShowInvisibles(!0);var e=[];this.textLayer.$renderLine(e,0,!0),r.equal(e.join(""),"<span class='ace_cjk ace_invisible ace_invisible_space' style='width:20px'>"+this.textLayer.SPACE_CHAR+"</span>"+"<span class='ace_invisible ace_invisible_eol'>¶</span>")},"test rendering of indent guides":function(){function o(t){for(var n=t.length;n--;){var i=[];e.$renderLine(i,n,!0),r.equal(i.join(""),t[n])}}var e=this.textLayer,t="<span class='ace_invisible ace_invisible_eol'>"+e.EOL_CHAR+"</span>",n=function(e){return Array(e+1).join(" ")},i=function(t){return Array(t+1).join(e.SPACE_CHAR)},s=function(t){return e.TAB_CHAR+n(t-1)};this.session.setValue("      \n		f\n   "),o(["<span class='ace_indent-guide'>"+n(4)+"</span>"+n(2),"<span class='ace_indent-guide'>"+n(4)+"</span>"+n(4)+"<span class='ace_identifier'>f</span>",n(3)]),this.textLayer.setShowInvisibles(!0),o(["<span class='ace_indent-guide ace_invisible ace_invisible_space'>"+i(4)+"</span><span class='ace_invisible ace_invisible_space'>"+i(2)+"</span>"+t,"<span class='ace_indent-guide ace_invisible ace_invisible_tab'>"+s(4)+"</span><span class='ace_invisible ace_invisible_tab'>"+s(4)+"</span><span class='ace_identifier'>f</span>"+t]),this.textLayer.setDisplayIndentGuides(!1),o(["<span class='ace_invisible ace_invisible_space'>"+i(6)+"</span>"+t,"<span class='ace_invisible ace_invisible_tab'>"+s(4)+"</span><span class='ace_invisible ace_invisible_tab'>"+s(4)+"</span><span class='ace_identifier'>f</span>"+t])}}}),typeof module!="undefined"&&module===require.main&&require("asyncjs").test.testcase(module.exports).exec();