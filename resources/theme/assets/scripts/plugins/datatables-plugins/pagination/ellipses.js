$.extend($.fn.dataTableExt.oStdClasses,{sPageEllipsis:"paginate_ellipsis",sPageNumber:"paginate_number",sPageNumbers:"paginate_numbers"}),$.fn.dataTableExt.oPagination.ellipses={oDefaults:{iShowPages:5},fnClickHandler:function(e){var t=e.data.fnCallbackDraw,n=e.data.oSettings,r=e.data.sPage;return $(this).is("[disabled]")?!1:(n.oApi._fnPageChange(n,r),t(n),!0)},fnInit:function(e,t,n){var r=e.oClasses,i=e.oLanguage.oPaginate,s=this,o=e.oInit.iShowPages||this.oDefaults.iShowPages,u=Math.floor(o/2);$.extend(e,{_iShowPages:o,_iShowPagesHalf:u});var a=$('<a class="'+r.sPageButton+" "+r.sPageFirst+'">'+i.sFirst+"</a>"),f=$('<a class="'+r.sPageButton+" "+r.sPagePrevious+'">'+i.sPrevious+"</a>"),l=$('<span class="'+r.sPageNumbers+'"></span>'),c=$('<a class="'+r.sPageButton+" "+r.sPageNext+'">'+i.sNext+"</a>"),h=$('<a class="'+r.sPageButton+" "+r.sPageLast+'">'+i.sLast+"</a>");a.click({fnCallbackDraw:n,oSettings:e,sPage:"first"},s.fnClickHandler),f.click({fnCallbackDraw:n,oSettings:e,sPage:"previous"},s.fnClickHandler),c.click({fnCallbackDraw:n,oSettings:e,sPage:"next"},s.fnClickHandler),h.click({fnCallbackDraw:n,oSettings:e,sPage:"last"},s.fnClickHandler),$(t).append(a,f,l,c,h)},fnUpdate:function(e,t){var n=e.oClasses,r=this,i=e.nTableWrapper;this.fnUpdateState(e),e._iCurrentPage===1?($("."+n.sPageFirst,i).attr("disabled",!0),$("."+n.sPagePrevious,i).attr("disabled",!0)):($("."+n.sPageFirst,i).removeAttr("disabled"),$("."+n.sPagePrevious,i).removeAttr("disabled")),e._iTotalPages===0||e._iCurrentPage===e._iTotalPages?($("."+n.sPageNext,i).attr("disabled",!0),$("."+n.sPageLast,i).attr("disabled",!0)):($("."+n.sPageNext,i).removeAttr("disabled"),$("."+n.sPageLast,i).removeAttr("disabled"));var s,o,u=$("."+n.sPageNumbers,i);u.html("");for(s=e._iFirstPage;s<=e._iLastPage;s++)o=$('<a class="'+n.sPageButton+" "+n.sPageNumber+'">'+e.fnFormatNumber(s)+"</a>"),e._iCurrentPage===s?o.attr("active",!0).attr("disabled",!0):o.click({fnCallbackDraw:t,oSettings:e,sPage:s-1},r.fnClickHandler),u.append(o);1<e._iFirstPage&&u.prepend('<span class="'+n.sPageEllipsis+'">...</span>'),e._iLastPage<e._iTotalPages&&u.append('<span class="'+n.sPageEllipsis+'">...</span>')},fnUpdateState:function(e){var t=Math.ceil((e._iDisplayStart+1)/e._iDisplayLength),n=Math.ceil(e.fnRecordsDisplay()/e._iDisplayLength),r=t-e._iShowPagesHalf,i=t+e._iShowPagesHalf;n<e._iShowPages?(r=1,i=n):r<1?(r=1,i=e._iShowPages):i>n&&(r=n-e._iShowPages+1,i=n),$.extend(e,{_iCurrentPage:t,_iTotalPages:n,_iFirstPage:r,_iLastPage:i})}};