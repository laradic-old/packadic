typeof process!="undefined"&&require("amd-loader"),define(["require","exports","module","../edit_session","./ruby","../test/assertions"],function(e,t,n){var r=e("../edit_session").EditSession,i=e("./ruby").Mode,s=e("../test/assertions");n.exports={setUp:function(){this.mode=new i},"test getNextLineIndent":function(){s.equal(this.mode.getNextLineIndent("start","class Foo","  "),"  "),s.equal(this.mode.getNextLineIndent("start","  def thing(wut)","  "),"    "),s.equal(this.mode.getNextLineIndent("start","  fork do","  "),"    "),s.equal(this.mode.getNextLineIndent("start","  fork do |wut| ","  "),"    "),s.equal(this.mode.getNextLineIndent("start","  something = :ruby","  "),"  "),s.equal(this.mode.getNextLineIndent("start","  if something == 3","  "),"    "),s.equal(this.mode.getNextLineIndent("start","  else","  "),"    ")},"test: checkOutdent":function(){s.ok(this.mode.checkOutdent("start","        en","d")),s.ok(this.mode.checkOutdent("start","        els","e")),s.ok(this.mode.checkOutdent("start","        ","}")),s.equal(this.mode.checkOutdent("start","  end","\n"),!1),s.equal(this.mode.checkOutdent("start","foo = ba","r"),!1)},"test: auto outdent":function(){var e=new r(["class Phil","  Foo = 'bar'","  end"]);this.mode.autoOutdent("start",e,2),s.equal("  end",e.getLine(2))}}}),typeof module!="undefined"&&module===require.main&&require("asyncjs").test.testcase(module.exports).exec();