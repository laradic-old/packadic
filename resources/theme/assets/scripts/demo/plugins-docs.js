define(["jquery","gfm"],function(e,t){function n(n){this.$el=n,this.$docLinks=n.find(".plugin-doc-link"),this.$docBoxes=n.find(".plugin-doc-box");var r=this;this.$docBoxes.each(function(){var n=e(this),r=n.find(".plugin-doc-body"),i=n.find(".plugin-doc-toc"),s=n.find(".plugin-doc-generated");r.length>0&&s.append(t(r.text()));if(i.length>0){var o=t(i.text());s.find("h1").first().after(o)}}),this.$docLinks.on("click",function(t){t.preventDefault();var n=e(this),i="doc-"+n.data("filename"),s=e("#"+i);r.$docBoxes.removeClass("hide").addClass("hide"),s.removeClass("hide")})}return function(t){console.log("button-icon-showcase",t),t.each(function(){return new n(e(this))})}});