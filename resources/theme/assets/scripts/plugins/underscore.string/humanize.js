var capitalize=require("./capitalize"),underscored=require("./underscored"),trim=require("./trim");module.exports=function(t){return capitalize(trim(underscored(t).replace(/_id$/,"").replace(/_/g," ")))};