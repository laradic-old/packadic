require("amd-loader"),define(["require","exports","module","../test/assertions","./worker","depA","depB","depA","depB","depB"],function(e,t,n){var r=e("../test/assertions"),i=e("./worker");n.exports={setUp:function(){i.define("depA",[],function(e,t,n){n.exports="dependency A"}),i.define("depB",[],function(e,t,n){n.exports="dependency B"})},"test: define() with no dependencies, and CommonJS-compatability require()-calls":function(){i.require.id="test1",i.define(function(e,t,n){var i=e("depA"),s=e("depB");r.equal("dependency A",i),r.equal("dependency B",s),n.exports="test 1"});var e=i.require("test1");r.equal("test 1",e)},"test: define() with dependencies":function(){i.require.id="test2",i.define(["depA","depB"],function(e,t){return r.equal("dependency A",e),r.equal("dependency B",t),"test 2"});var e=i.require("test2");r.equal("test 2",e)},"test: define() used require, exports and module as a dependency":function(){i.require.id="test3",i.define(["require","exports","module","depA","depB"],function(e,t,n){var i=e("depA"),s=e("depB");r.equal("dependency A",i),r.equal("dependency B",s),n.exports="test 3"});var e=i.require("test3");r.equal("test 3",e)},"test: define() with a mix of require and actual dependecies":function(){i.require.id="test4",i.define(["depA","require"],function(e,t){var n=t("depB");return r.equal("dependency A",e),r.equal("dependency B",n),"test 4"});var e=i.require("test4");r.equal("test 4",e)}}}),typeof module!="undefined"&&module===require.main&&require("asyncjs").test.testcase(module.exports).exec();