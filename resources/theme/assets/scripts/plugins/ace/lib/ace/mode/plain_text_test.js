typeof process!="undefined"&&require("amd-loader"),define(["require","exports","module","../edit_session","./plain_text","../test/assertions"],function(e,t,n){var r=e("../edit_session").EditSession,i=e("./plain_text").Mode,s=e("../test/assertions");n.exports={setUp:function(){this.mode=new i},"test: lines should not be indented":function(){s.equal("",this.mode.getNextLineIndent("start","   abc","  "))}}}),typeof module!="undefined"&&module===require.main&&require("asyncjs").test.testcase(module.exports).exec();