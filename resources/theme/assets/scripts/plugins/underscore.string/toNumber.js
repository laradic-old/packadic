var trim=require("./trim"),parseNumber=function(e){return e*1||0};module.exports=function(t,n){if(t==null)return 0;var r=Math.pow(10,isFinite(n)?n:0);return Math.round(t*r)/r};