define(["jade"],function(a){return a&&void 0!==a.runtime&&(a=a.runtime),function(b){var c,d=[],e={},f=b||{};return function(b){e["box-body"]=function(b){var c=this&&this.block,e=this&&this.attributes||{};if(b=b||!1){var f="max-height: "+b+"px;";d.push("<section"+a.attrs(a.merge([{"data-mcs-axis":"y",style:a.escape(a.style(f)),"class":"scrollable"},e]),!1)+">"),c&&c(),d.push("</section>")}else d.push("<section"+a.attrs(a.merge([e]),!1)+">"),c&&c(),d.push("</section>")},e.box=function(b,f,g){var h=this&&this.block,i=this&&this.attributes||{};f=f||!1,b=b||!1,b?(d.push('<div class="box"><header>'),f&&d.push("<i"+a.cls(["fa fa-"+f],[!0])+"></i>"),d.push("<h3>"+a.escape(null==(c=b)?"":c)+"</h3></header>"),e["box-body"].call({block:function(){h&&h()},attributes:a.merge([i])},g),d.push("</div>")):(d.push("<div"+a.attrs(a.merge([{"class":"box"},i]),!1)+">"),h&&h(),d.push("</div>"))},e["gh-table"]=function(a,b,c){{var f=this&&this.block;this&&this.attributes||{}}b=b||"fa fa-list",c=c||!1,e.box.call({block:function(){d.push('<table class="table table-bordered table-condensed table-hover table-light table-striped no-margin-bottom">'),f&&f(),d.push("</table>")},attributes:{"class":"box-table"}},a,b,c)},e["gh-table"].call({block:function(){d.push('<thead><th class="text-center">Name</th></thead><tbody>'),function(){var e=b;if("number"==typeof e.length)for(var f=0,g=e.length;g>f;f++){var h=e[f];d.push("<tr><td><img"+a.attr("src",h.avatar_url,!0,!1)+' width="20" height="20"/><a href="#"'+a.attr("data-org",h.login,!0,!1)+a.attr("data-org-id",h.id,!0,!1)+' class="margin-left"><strong>'+a.escape(null==(c=h.login)?"":c)+"</strong></a></td></tr>")}else{var g=0;for(var f in e){g++;var h=e[f];d.push("<tr><td><img"+a.attr("src",h.avatar_url,!0,!1)+' width="20" height="20"/><a href="#"'+a.attr("data-org",h.login,!0,!1)+a.attr("data-org-id",h.id,!0,!1)+' class="margin-left"><strong>'+a.escape(null==(c=h.login)?"":c)+"</strong></a></td></tr>")}}}.call(this),d.push("</tbody>")}},"Organisations","fa fa-list",250)}.call(this,"orgs"in f?f.orgs:"undefined"!=typeof orgs?orgs:void 0),d.join("")}});