var sprintf=require("./sprintf");module.exports=function(t,n){return n.unshift(t),sprintf.apply(null,n)};