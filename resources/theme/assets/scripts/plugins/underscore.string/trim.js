var makeString=require("./helper/makeString"),defaultToWhiteSpace=require("./helper/defaultToWhiteSpace"),nativeTrim=String.prototype.trim;module.exports=function(t,n){return t=makeString(t),!n&&nativeTrim?nativeTrim.call(t):(n=defaultToWhiteSpace(n),t.replace(new RegExp("^"+n+"+|"+n+"+$","g"),""))};