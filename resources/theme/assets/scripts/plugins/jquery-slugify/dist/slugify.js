(function(e){e.fn.slugify=function(t,n){return this.each(function(){var r=e(this),i=e(t);r.on("keyup change",function(){r.val()!==""&&r.val()!==undefined?r.data("locked",!0):r.data("locked",!1)}),i.on("keyup change",function(){if(!0===r.data("locked"))return;r.is("input")||r.is("textarea")?r.val(e.slugify(i.val(),n)):r.text(e.slugify(i.val(),n))})})},e.slugify=function(t,n){return n=e.extend({},e.slugify.options,n),n.lang=n.lang||e("html").prop("lang"),typeof n.preSlug=="function"&&(t=n.preSlug(t)),t=n.slugFunc(t,n),typeof n.postSlug=="function"&&(t=n.postSlug(t)),t},e.slugify.options={preSlug:null,postSlug:null,slugFunc:function(e,t){return window.getSlug(e,t)}}})(jQuery);