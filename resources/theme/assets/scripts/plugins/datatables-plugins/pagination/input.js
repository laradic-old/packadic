$.fn.dataTableExt.oPagination.input={fnInit:function(e,t,n){var r=document.createElement("span"),i=document.createElement("span"),s=document.createElement("span"),o=document.createElement("span"),u=document.createElement("input"),a=document.createElement("span"),f=document.createElement("span");r.innerHTML=e.oLanguage.oPaginate.sFirst,i.innerHTML=e.oLanguage.oPaginate.sPrevious,s.innerHTML=e.oLanguage.oPaginate.sNext,o.innerHTML=e.oLanguage.oPaginate.sLast,r.className="paginate_button first disabled",i.className="paginate_button previous disabled",s.className="paginate_button next",o.className="paginate_button last",f.className="paginate_of",a.className="paginate_page",u.className="paginate_input",e.sTableId!==""&&(t.setAttribute("id",e.sTableId+"_paginate"),i.setAttribute("id",e.sTableId+"_previous"),i.setAttribute("id",e.sTableId+"_previous"),s.setAttribute("id",e.sTableId+"_next"),o.setAttribute("id",e.sTableId+"_last")),u.type="text",a.innerHTML="Page ",t.appendChild(r),t.appendChild(i),t.appendChild(a),t.appendChild(u),t.appendChild(f),t.appendChild(s),t.appendChild(o),$(r).click(function(){var t=Math.ceil(e._iDisplayStart/e._iDisplayLength)+1;t!=1&&(e.oApi._fnPageChange(e,"first"),n(e),$(r).addClass("disabled"),$(i).addClass("disabled"),$(s).removeClass("disabled"),$(o).removeClass("disabled"))}),$(i).click(function(){var t=Math.ceil(e._iDisplayStart/e._iDisplayLength)+1;t!=1&&(e.oApi._fnPageChange(e,"previous"),n(e),t==2&&($(r).addClass("disabled"),$(i).addClass("disabled")),$(s).removeClass("disabled"),$(o).removeClass("disabled"))}),$(s).click(function(){var t=Math.ceil(e._iDisplayStart/e._iDisplayLength)+1;t!=Math.ceil(e.fnRecordsDisplay()/e._iDisplayLength)&&(e.oApi._fnPageChange(e,"next"),n(e),t==Math.ceil((e.fnRecordsDisplay()-1)/e._iDisplayLength)-1&&($(s).addClass("disabled"),$(o).addClass("disabled")),$(r).removeClass("disabled"),$(i).removeClass("disabled"))}),$(o).click(function(){var t=Math.ceil(e._iDisplayStart/e._iDisplayLength)+1;t!=Math.ceil(e.fnRecordsDisplay()/e._iDisplayLength)&&(e.oApi._fnPageChange(e,"last"),n(e),$(r).removeClass("disabled"),$(i).removeClass("disabled"),$(s).addClass("disabled"),$(o).addClass("disabled"))}),$(u).keyup(function(t){t.which==38||t.which==39?this.value++:(t.which==37||t.which==40)&&this.value>1&&this.value--;if(this.value===""||this.value.match(/[^0-9]/)){this.value=this.value.replace(/[^\d]/g,"");return}var u=e._iDisplayLength*(this.value-1);u<0&&(u=0),u>e.fnRecordsDisplay()&&(u=(Math.ceil((e.fnRecordsDisplay()-1)/e._iDisplayLength)-1)*e._iDisplayLength),u===0?($(r).addClass("disabled"),$(i).addClass("disabled"),$(s).removeClass("disabled"),$(o).removeClass("disabled")):u==(Math.ceil((e.fnRecordsDisplay()-1)/e._iDisplayLength)-1)*e._iDisplayLength?($(s).addClass("disabled"),$(o).addClass("disabled"),$(r).removeClass("disabled"),$(i).removeClass("disabled")):($(r).removeClass("disabled"),$(i).removeClass("disabled"),$(s).removeClass("disabled"),$(o).removeClass("disabled")),e._iDisplayStart=u,n(e)}),$("span",t).bind("mousedown",function(){return!1}),$("span",t).bind("selectstart",function(){return!1});var l=Math.ceil(e.fnRecordsDisplay()/e._iDisplayLength);l<=1&&$(t).hide()},fnUpdate:function(e,t){if(!e.aanFeatures.p)return;var n=Math.ceil(e.fnRecordsDisplay()/e._iDisplayLength),r=Math.ceil(e._iDisplayStart/e._iDisplayLength)+1,i=e.aanFeatures.p;if(n<=1)$(i).hide();else for(var s=0,o=i.length;s<o;s++){var u=i[s].getElementsByTagName("span"),a=i[s].getElementsByTagName("input");u[3].innerHTML=" of "+n,a[0].value=r}}};