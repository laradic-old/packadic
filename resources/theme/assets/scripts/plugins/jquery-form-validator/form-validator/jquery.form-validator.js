(function(e){var t=e(window),n=function(t){if(t.valAttr("error-msg-container"))return e(t.valAttr("error-msg-container"));var n=t.parent();if(!n.hasClass("form-group")){var r=n.closest(".form-group");if(r.length)return r.eq(0)}return n},r=function(e,t){e.addClass(t.errorElementClass).removeClass("valid"),n(e).addClass(t.inputParentClassOnError).removeClass(t.inputParentClassOnSuccess),t.borderColorOnError!==""&&e.css("border-color",t.borderColorOnError)},i=function(t,r){t.each(function(){var t=e(this);s(t,"",r,r.errorMessagePosition),t.removeClass("valid").removeClass(r.errorElementClass).css("border-color",""),n(t).removeClass(r.inputParentClassOnError).removeClass(r.inputParentClassOnSuccess).find("."+r.errorMessageClass).remove()})},s=function(t,r,i,s){var o=document.getElementById(t.attr("name")+"_err_msg");if(o)o.innerHTML=r;else if(typeof s=="object"){var u=!1;s.find("."+i.errorMessageClass).each(function(){if(this.inputReferer==t[0])return u=e(this),!1});if(u)r?u.html(r):u.remove();else{var a=e('<div class="'+i.errorMessageClass+'">'+r+"</div>");a[0].inputReferer=t[0],s.prepend(a)}}else{var f=n(t),a=f.find("."+i.errorMessageClass+".help-block");a.length==0&&(a=e("<span></span>").addClass("help-block").addClass(i.errorMessageClass),a.appendTo(f)),a.html(r)}},o=function(t,n,r,i){var s=i.errorMessageTemplate.messages.replace(/\{errorTitle\}/g,n),o=[],u;e.each(r,function(e,t){o.push(i.errorMessageTemplate.field.replace(/\{msg\}/g,t))}),s=s.replace(/\{fields\}/g,o.join("")),u=i.errorMessageTemplate.container.replace(/\{errorMessageClass\}/g,i.errorMessageClass),u=u.replace(/\{messages\}/g,s),t.children().eq(0).before(u)};e.fn.validateOnBlur=function(t,n){return this.find("input[data-validation],textarea[data-validation],select[data-validation]").bind("blur.validation",function(){e(this).validateInputOnBlur(t,n,!0,"blur")}),n.validateCheckboxRadioOnClick&&this.find("input[type=checkbox][data-validation],input[type=radio][data-validation]").bind("click.validation",function(){e(this).validateInputOnBlur(t,n,!0,"click")}),this},e.fn.validateOnEvent=function(t,n){return this.find("input[data-validation][data-validation-event],textarea[data-validation][data-validation-event],select[data-validation][data-validation-event]").each(function(){var r=e(this),i=r.valAttr("event");i&&r.bind(i+".validation",function(){e(this).validateInputOnBlur(t,n,!0,i)})}),this},e.fn.showHelpOnFocus=function(t){return t||(t="data-validation-help"),this.find(".has-help-txt").valAttr("has-keyup-event",!1).removeClass("has-help-txt"),this.find("textarea,input").each(function(){var n=e(this),r="jquery_form_help_"+(n.attr("name")||"").replace(/(:|\.|\[|\])/g,""),i=n.attr(t);i&&n.addClass("has-help-txt").unbind("focus.help").bind("focus.help",function(){var t=n.parent().find("."+r);t.length==0&&(t=e("<span />").addClass(r).addClass("help").addClass("help-block").text(i).hide(),n.after(t)),t.fadeIn()}).unbind("blur.help").bind("blur.help",function(){e(this).parent().find("."+r).fadeOut("slow")})}),this},e.fn.validateInputOnBlur=function(t,o,u,a){e.formUtils.eventType=a;if((this.valAttr("suggestion-nr")||this.valAttr("postpone")||this.hasClass("hasDatepicker"))&&!window.postponedValidation){var f=this,l=this.valAttr("postpone")||200;return window.postponedValidation=function(){f.validateInputOnBlur(t,o,u,a),window.postponedValidation=!1},setTimeout(function(){window.postponedValidation&&window.postponedValidation()},l),this}t=e.extend({},e.formUtils.LANG,t||{}),i(this,o);var c=this,h=c.closest("form"),p=c.attr(o.validationRuleAttribute),d=e.formUtils.validateInput(c,t,o,h,a);return d.isValid?d.shouldChangeDisplay&&(c.addClass("valid"),n(c).addClass(o.inputParentClassOnSuccess)):d.isValid||(r(c,o),s(c,d.errorMsg,o,o.errorMessagePosition),u&&c.unbind("keyup.validation").bind("keyup.validation",function(){e(this).validateInputOnBlur(t,o,!1,"keyup")})),this},e.fn.valAttr=function(e,t){return t===undefined?this.attr("data-validation-"+e):t===!1||t===null?this.removeAttr("data-validation-"+e):(e.length>0&&(e="-"+e),this.attr("data-validation"+e,t))},e.fn.isValid=function(u,a,f){if(e.formUtils.isLoadingModules){var l=this;return setTimeout(function(){l.isValid(u,a,f)},200),null}a=e.extend({},e.formUtils.defaultConfig(),a||{}),u=e.extend({},e.formUtils.LANG,u||{}),f=f!==!1,e.formUtils.errorDisplayPreventedWhenHalted&&(delete e.formUtils.errorDisplayPreventedWhenHalted,f=!1),e.formUtils.isValidatingEntireForm=!0,e.formUtils.haltValidation=!1;var c=function(t,n){e.inArray(t,p)<0&&p.push(t),d.push(n),n.attr("current-error",t),f&&r(n,a)},h=[],p=[],d=[],v=this,m=function(t,n){return n==="submit"||n==="button"||n=="reset"?!0:e.inArray(t,a.ignore||[])>-1};f&&(v.find("."+a.errorMessageClass+".alert").remove(),i(v.find("."+a.errorElementClass+",.valid"),a)),v.find("input,textarea,select").filter(':not([type="submit"],[type="button"])').each(function(){var t=e(this),r=t.attr("type"),i=r=="radio"||r=="checkbox",s=t.attr("name");if(!m(s,r)&&(!i||e.inArray(s,h)<0)){i&&h.push(s);var o=e.formUtils.validateInput(t,u,a,v,"submit");o.shouldChangeDisplay&&(o.isValid?o.isValid&&(t.valAttr("current-error",!1).addClass("valid"),n(t).addClass(a.inputParentClassOnSuccess)):c(o.errorMsg,t))}});if(typeof a.onValidate=="function"){var g=a.onValidate(v);e.isArray(g)?e.each(g,function(e,t){c(t.message,t.element)}):g&&g.element&&g.message&&c(g.message,g.element)}return e.formUtils.isValidatingEntireForm=!1,!e.formUtils.haltValidation&&d.length>0?(f&&(a.errorMessagePosition==="top"?o(v,u.errorTitle,p,a):a.errorMessagePosition==="custom"?typeof a.errorMessageCustom=="function"&&a.errorMessageCustom(v,u.errorTitle,p,a):e.each(d,function(e,t){s(t,t.attr("current-error"),a,a.errorMessagePosition)}),a.scrollToTopOnError&&t.scrollTop(v.offset().top-20)),!1):(!f&&e.formUtils.haltValidation&&(e.formUtils.errorDisplayPreventedWhenHalted=!0),!e.formUtils.haltValidation)},e.fn.validateForm=function(e,t){return window.console&&typeof window.console.warn=="function"&&window.console.warn("Use of deprecated function $.validateForm, use $.isValid instead"),this.isValid(e,t,!0)},e.fn.restrictLength=function(t){return new e.formUtils.lengthRestriction(this,t),this},e.fn.addSuggestions=function(t){var n=!1;return this.find("input").each(function(){var r=e(this);n=e.split(r.attr("data-suggestions")),n.length>0&&!r.hasClass("has-suggestions")&&(e.formUtils.suggest(r,n,t),r.addClass("has-suggestions"))}),this},e.split=function(t,n){if(typeof n!="function"){if(!t)return[];var r=[];return e.each(t.split(n?n:/[,|\-\s]\s*/g),function(t,n){n=e.trim(n),n.length&&r.push(n)}),r}t&&e.each(t.split(/[,|\-\s]\s*/g),function(t,r){r=e.trim(r);if(r.length)return n(r,t)})},e.validate=function(n){var r=e.extend(e.formUtils.defaultConfig(),{form:"form",validateOnEvent:!0,validateOnBlur:!0,validateCheckboxRadioOnClick:!0,showHelpOnFocus:!0,addSuggestions:!0,modules:"",onModulesLoaded:null,language:!1,onSuccess:!1,onError:!1,onElementValidate:!1});n=e.extend(r,n||{}),e(n.form).each(function(r,s){var o=e(s);t.trigger("formValidationSetup",[o]),o.find(".has-help-txt").unbind("focus.validation").unbind("blur.validation"),o.removeClass("has-validation-callback").unbind("submit.validation").unbind("reset.validation").find("input[data-validation],textarea[data-validation]").unbind("blur.validation"),o.bind("submit.validation",function(){var t=e(this);if(e.formUtils.haltValidation)return!1;if(e.formUtils.isLoadingModules)return setTimeout(function(){t.trigger("submit.validation")},200),!1;var r=t.isValid(n.language,n);if(e.formUtils.haltValidation)return!1;if(!r||typeof n.onSuccess!="function")return!r&&typeof n.onError=="function"?(n.onError(t),!1):r;var i=n.onSuccess(t);if(i===!1)return!1}).bind("reset.validation",function(){e(this).find("."+n.errorMessageClass+".alert").remove(),i(e(this).find("."+n.errorElementClass+",.valid"),n)}).addClass("has-validation-callback"),n.showHelpOnFocus&&o.showHelpOnFocus(),n.addSuggestions&&o.addSuggestions(),n.validateOnBlur&&(o.validateOnBlur(n.language,n),o.bind("html5ValidationAttrsFound",function(){o.validateOnBlur(n.language,n)})),n.validateOnEvent&&o.validateOnEvent(n.language,n)}),n.modules!=""&&(typeof n.onModulesLoaded=="function"&&t.one("validatorsLoaded",n.onModulesLoaded),e.formUtils.loadModules(n.modules))},e.formUtils={defaultConfig:function(){return{ignore:[],errorElementClass:"error",borderColorOnError:"red",errorMessageClass:"form-error",validationRuleAttribute:"data-validation",validationErrorMsgAttribute:"data-validation-error-msg",errorMessagePosition:"element",errorMessageTemplate:{container:'<div class="{errorMessageClass} alert alert-danger">{messages}</div>',messages:"<strong>{errorTitle}</strong><ul>{fields}</ul>",field:"<li>{msg}</li>"},errorMessageCustom:o,scrollToTopOnError:!0,dateFormat:"yyyy-mm-dd",addValidClassOnAll:!1,decimalSeparator:".",inputParentClassOnError:"has-error",inputParentClassOnSuccess:"has-success"}},validators:{},_events:{load:[],valid:[],invalid:[]},haltValidation:!1,isValidatingEntireForm:!1,addValidator:function(e){var t=e.name.indexOf("validate_")===0?e.name:"validate_"+e.name;e.validateOnKeyUp===undefined&&(e.validateOnKeyUp=!0),this.validators[t]=e},isLoadingModules:!1,loadedModules:{},loadModules:function(n,r,i){i===undefined&&(i=!0);if(e.formUtils.isLoadingModules){setTimeout(function(){e.formUtils.loadModules(n,r,i)});return}var s=!1,o=function(n,r){var o=e.split(n),u=o.length,a=function(){u--,u==0&&(e.formUtils.isLoadingModules=!1,i&&s&&t.trigger("validatorsLoaded"))};u>0&&(e.formUtils.isLoadingModules=!0);var f="?__="+(new Date).getTime(),l=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.each(o,function(t,n){n=e.trim(n);if(n.length==0)a();else{var i=r+n+(n.slice(-3)==".js"?"":".js"),o=document.createElement("SCRIPT");i in e.formUtils.loadedModules?a():(e.formUtils.loadedModules[i]=1,s=!0,o.type="text/javascript",o.onload=a,o.src=i+(i.slice(-7)==".dev.js"?f:""),o.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded")a(),this.onload=null,this.onreadystatechange=null},l.appendChild(o))}})};if(r)o(n,r);else{var u=function(){var t=!1;return e('script[src*="form-validator"]').each(function(){return t=this.src.substr(0,this.src.lastIndexOf("/"))+"/",t=="/"&&(t=""),!1}),t!==!1?(o(n,t),!0):!1};u()||e(u)}},validateInput:function(t,n,r,i,s){t.trigger("beforeValidation");var o=t.val()||"",u={isValid:!0,shouldChangeDisplay:!0,errorMsg:""},a=t.valAttr("optional"),f=!1,l=!1,c=!1,h=t.valAttr("if-checked");if(t.attr("disabled"))return u.shouldChangeDisplay=!1,u;h!=null&&(f=!0,c=i.find('input[name="'+h+'"]'),c.prop("checked")&&(l=!0));if(!o&&a==="true"||f&&!l)return u.shouldChangeDisplay=r.addValidClassOnAll,u;var p=t.attr(r.validationRuleAttribute),d=!0;return p?(e.split(p,function(u){u.indexOf("validate_")!==0&&(u="validate_"+u);var a=e.formUtils.validators[u];if(!a||typeof a["validatorFunction"]!="function")throw new Error('Using undefined validator "'+u+'"');u=="validate_checkbox_group"&&(t=i.find("[name='"+t.attr("name")+"']:eq(0)"));var f=null;if(s!="keyup"||a.validateOnKeyUp)f=a.validatorFunction(o,t,r,n,i);if(!f)return d=null,f!==null&&(d=t.attr(r.validationErrorMsgAttribute+"-"+u.replace("validate_","")),d||(d=t.attr(r.validationErrorMsgAttribute),d||(d=n[a.errorMessageKey],d||(d=a.errorMessage)))),!1}," "),typeof d=="string"?(t.trigger("validation",!1),u.errorMsg=d,u.isValid=!1,u.shouldChangeDisplay=!0):d===null?u.shouldChangeDisplay=r.addValidClassOnAll:(t.trigger("validation",!0),u.shouldChangeDisplay=!0),typeof r.onElementValidate=="function"&&u!==null&&r.onElementValidate(u.isValid,t,i,d),u):(u.shouldChangeDisplay=r.addValidClassOnAll,u)},parseDate:function(t,n){var r=n.replace(/[a-zA-Z]/gi,"").substring(0,1),i="^",s=n.split(r||null),o,u,a,f;e.each(s,function(e,t){i+=(e>0?"\\"+r:"")+"(\\d{"+t.length+"})"}),i+="$",o=t.match(new RegExp(i));if(o===null)return!1;var l=function(t,n,r){for(var i=0;i<n.length;i++)if(n[i].substring(0,1)===t)return e.formUtils.parseDateInt(r[i+1]);return-1};return a=l("m",s,o),u=l("d",s,o),f=l("y",s,o),a===2&&u>28&&(f%4!==0||f%100===0&&f%400!==0)||a===2&&u>29&&(f%4===0||f%100!==0&&f%400===0)||a>12||a===0?!1:this.isShortMonth(a)&&u>30||!this.isShortMonth(a)&&u>31||u===0?!1:[f,a,u]},parseDateInt:function(e){return e.indexOf("0")===0&&(e=e.replace("0","")),parseInt(e,10)},isShortMonth:function(e){return e%2===0&&e<7||e%2!==0&&e>7},lengthRestriction:function(t,n){var r=parseInt(n.text(),10),i=0,s=function(){var e=t.val().length;if(e>r){var s=t.scrollTop();t.val(t.val().substring(0,r)),t.scrollTop(s)}i=r-e,i<0&&(i=0),n.text(i)};e(t).bind("keydown keyup keypress focus blur",s).bind("cut paste",function(){setTimeout(s,100)}),e(document).bind("ready",s)},numericRangeCheck:function(t,n){var r=e.split(n),i=parseInt(n.substr(3),10);return r.length==2&&(t<parseInt(r[0],10)||t>parseInt(r[1],10))?["out",r[0],r[1]]:n.indexOf("min")===0&&t<i?["min",i]:n.indexOf("max")===0&&t>i?["max",i]:["ok"]},_numSuggestionElements:0,_selectedSuggestion:null,_previousTypedVal:null,suggest:function(n,r,i){var s={css:{maxHeight:"150px",background:"#FFF",lineHeight:"150%",textDecoration:"underline",overflowX:"hidden",overflowY:"auto",border:"#CCC solid 1px",borderTop:"none",cursor:"pointer"},activeSuggestionCSS:{background:"#E9E9E9"}},o=function(e,t){var n=t.offset();e.css({width:t.outerWidth(),left:n.left+"px",top:n.top+t.outerHeight()+"px"})};i&&e.extend(s,i),s.css.position="absolute",s.css["z-index"]=9999,n.attr("autocomplete","off"),this._numSuggestionElements===0&&t.bind("resize",function(){e(".jquery-form-suggestions").each(function(){var t=e(this),n=t.attr("data-suggest-container");o(t,e(".suggestions-"+n).eq(0))})}),this._numSuggestionElements++;var u=function(t){var n=t.valAttr("suggestion-nr");e.formUtils._selectedSuggestion=null,e.formUtils._previousTypedVal=null,e(".jquery-form-suggestion-"+n).fadeOut("fast")};return n.data("suggestions",r).valAttr("suggestion-nr",this._numSuggestionElements).unbind("focus.suggest").bind("focus.suggest",function(){e(this).trigger("keyup"),e.formUtils._selectedSuggestion=null}).unbind("keyup.suggest").bind("keyup.suggest",function(){var t=e(this),r=[],i=e.trim(t.val()).toLocaleLowerCase();if(i==e.formUtils._previousTypedVal)return;e.formUtils._previousTypedVal=i;var a=!1,f=t.valAttr("suggestion-nr"),l=e(".jquery-form-suggestion-"+f);l.scrollTop(0);if(i!=""){var c=i.length>2;e.each(t.data("suggestions"),function(e,t){var n=t.toLocaleLowerCase();if(n==i)return r.push("<strong>"+t+"</strong>"),a=!0,!1;(n.indexOf(i)===0||c&&n.indexOf(i)>-1)&&r.push(t.replace(new RegExp(i,"gi"),"<strong>$&</strong>"))})}a||r.length==0&&l.length>0?l.hide():r.length>0&&l.length==0?(l=e("<div></div>").css(s.css).appendTo("body"),n.addClass("suggestions-"+f),l.attr("data-suggest-container",f).addClass("jquery-form-suggestions").addClass("jquery-form-suggestion-"+f)):r.length>0&&!l.is(":visible")&&l.show(),r.length>0&&i.length!=r[0].length&&(o(l,t),l.html(""),e.each(r,function(n,r){e("<div></div>").append(r).css({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"5px"}).addClass("form-suggest-element").appendTo(l).click(function(){t.focus(),t.val(e(this).text()),u(t)})}))}).unbind("keydown.validation").bind("keydown.validation",function(t){var n=t.keyCode?t.keyCode:t.which,r,i,o=e(this);if(n==13&&e.formUtils._selectedSuggestion!==null){r=o.valAttr("suggestion-nr"),i=e(".jquery-form-suggestion-"+r);if(i.length>0){var a=i.find("div").eq(e.formUtils._selectedSuggestion).text();o.val(a),u(o),t.preventDefault()}}else{r=o.valAttr("suggestion-nr"),i=e(".jquery-form-suggestion-"+r);var f=i.children();if(f.length>0&&e.inArray(n,[38,40])>-1){n==38?(e.formUtils._selectedSuggestion===null?e.formUtils._selectedSuggestion=f.length-1:e.formUtils._selectedSuggestion--,e.formUtils._selectedSuggestion<0&&(e.formUtils._selectedSuggestion=f.length-1)):n==40&&(e.formUtils._selectedSuggestion===null?e.formUtils._selectedSuggestion=0:e.formUtils._selectedSuggestion++,e.formUtils._selectedSuggestion>f.length-1&&(e.formUtils._selectedSuggestion=0));var l=i.innerHeight(),c=i.scrollTop(),h=i.children().eq(0).outerHeight(),p=h*e.formUtils._selectedSuggestion;return(p<c||p>c+l)&&i.scrollTop(p),f.removeClass("active-suggestion").css("background","none").eq(e.formUtils._selectedSuggestion).addClass("active-suggestion").css(s.activeSuggestionCSS),t.preventDefault(),!1}}}).unbind("blur.suggest").bind("blur.suggest",function(){u(e(this))}),n},LANG:{errorTitle:"Form submission failed!",requiredFields:"You have not answered all required fields",badTime:"You have not given a correct time",badEmail:"You have not given a correct e-mail address",badTelephone:"You have not given a correct phone number",badSecurityAnswer:"You have not given a correct answer to the security question",badDate:"You have not given a correct date",lengthBadStart:"The input value must be between ",lengthBadEnd:" characters",lengthTooLongStart:"The input value is longer than ",lengthTooShortStart:"The input value is shorter than ",notConfirmed:"Input values could not be confirmed",badDomain:"Incorrect domain value",badUrl:"The input value is not a correct URL",badCustomVal:"The input value is incorrect",andSpaces:" and spaces ",badInt:"The input value was not a correct number",badSecurityNumber:"Your social security number was incorrect",badUKVatAnswer:"Incorrect UK VAT Number",badStrength:"The password isn't strong enough",badNumberOfSelectedOptionsStart:"You have to choose at least ",badNumberOfSelectedOptionsEnd:" answers",badAlphaNumeric:"The input value can only contain alphanumeric characters ",badAlphaNumericExtra:" and ",wrongFileSize:"The file you are trying to upload is too large (max %s)",wrongFileType:"Only files of type %s is allowed",groupCheckedRangeStart:"Please choose between ",groupCheckedTooFewStart:"Please choose at least ",groupCheckedTooManyStart:"Please choose a maximum of ",groupCheckedEnd:" item(s)",badCreditCard:"The credit card number is not correct",badCVV:"The CVV number was not correct"}},e.formUtils.addValidator({name:"email",validatorFunction:function(t){var n=t.toLowerCase().split("@");return n.length==2?e.formUtils.validators.validate_domain.validatorFunction(n[1])&&!/[^\w\+\.\-]/.test(n[0])&&n[0].length>0:!1},errorMessage:"",errorMessageKey:"badEmail"}),e.formUtils.addValidator({name:"domain",validatorFunction:function(e){return e.length>0&&e.length<=253&&!/[^a-zA-Z0-9]/.test(e.slice(-2))&&!/[^a-zA-Z]/.test(e.substr(0,1))&&!/[^a-zA-Z0-9\.\-]/.test(e)&&e.split("..").length==1&&e.split(".").length>1},errorMessage:"",errorMessageKey:"badDomain"}),e.formUtils.addValidator({name:"required",validatorFunction:function(t,n,r,i,s){switch(n.attr("type")){case"checkbox":return n.is(":checked");case"radio":return s.find('input[name="'+n.attr("name")+'"]').filter(":checked").length>0;default:return e.trim(t)!==""}},errorMessage:"",errorMessageKey:"requiredFields"}),e.formUtils.addValidator({name:"length",validatorFunction:function(t,n,r,i){var s=n.valAttr("length"),o=n.attr("type");if(s==undefined)return alert('Please add attribute "data-validation-length" to '+n[0].nodeName+" named "+n.attr("name")),!0;var u=o=="file"&&n.get(0).files!==undefined?n.get(0).files.length:t.length,a=e.formUtils.numericRangeCheck(u,s),f;switch(a[0]){case"out":this.errorMessage=i.lengthBadStart+s+i.lengthBadEnd,f=!1;break;case"min":this.errorMessage=i.lengthTooShortStart+a[1]+i.lengthBadEnd,f=!1;break;case"max":this.errorMessage=i.lengthTooLongStart+a[1]+i.lengthBadEnd,f=!1;break;default:f=!0}return f},errorMessage:"",errorMessageKey:""}),e.formUtils.addValidator({name:"url",validatorFunction:function(t){var n=/^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;if(n.test(t)){var r=t.split("://")[1],i=r.indexOf("/");return i>-1&&(r=r.substr(0,i)),e.formUtils.validators.validate_domain.validatorFunction(r)}return!1},errorMessage:"",errorMessageKey:"badUrl"}),e.formUtils.addValidator({name:"number",validatorFunction:function(e,t,n){if(e!==""){var r=t.valAttr("allowing")||"",i=t.valAttr("decimal-separator")||n.decimalSeparator,s=!1,o,u,a=t.valAttr("step")||"",f=!1;r.indexOf("number")==-1&&(r+=",number");if(r.indexOf("negative")==-1&&e.indexOf("-")===0)return!1;r.indexOf("range")>-1&&(o=parseFloat(r.substring(r.indexOf("[")+1,r.indexOf(";"))),u=parseFloat(r.substring(r.indexOf(";")+1,r.indexOf("]"))),s=!0),a!=""&&(f=!0);if(i==","){if(e.indexOf(".")>-1)return!1;e=e.replace(",",".")}if(r.indexOf("number")>-1&&e.replace(/[0-9-]/g,"")===""&&(!s||e>=o&&e<=u)&&(!f||e%a==0))return!0;if(r.indexOf("float")>-1&&e.match(new RegExp("^([0-9-]+)\\.([0-9]+)$"))!==null&&(!s||e>=o&&e<=u)&&(!f||e%a==0))return!0}return!1},errorMessage:"",errorMessageKey:"badInt"}),e.formUtils.addValidator({name:"alphanumeric",validatorFunction:function(t,n,r,i){var s="^([a-zA-Z0-9",o="]+)$",u=n.valAttr("allowing"),a="";if(u){a=s+u+o;var f=u.replace(/\\/g,"");f.indexOf(" ")>-1&&(f=f.replace(" ",""),f+=i.andSpaces||e.formUtils.LANG.andSpaces),this.errorMessage=i.badAlphaNumeric+i.badAlphaNumericExtra+f}else a=s+o,this.errorMessage=i.badAlphaNumeric;return(new RegExp(a)).test(t)},errorMessage:"",errorMessageKey:""}),e.formUtils.addValidator({name:"custom",validatorFunction:function(e,t,n){var r=new RegExp(t.valAttr("regexp"));return r.test(e)},errorMessage:"",errorMessageKey:"badCustomVal"}),e.formUtils.addValidator({name:"date",validatorFunction:function(t,n,r){var i=n.valAttr("format")||r.dateFormat||"yyyy-mm-dd";return e.formUtils.parseDate(t,i)!==!1},errorMessage:"",errorMessageKey:"badDate"}),e.formUtils.addValidator({name:"checkbox_group",validatorFunction:function(t,n,r,i,s){var o=!0,u=n.attr("name"),a=e("input[type=checkbox][name^='"+u+"']",s),f=a.filter(":checked").length,l=n.valAttr("qty");if(l==undefined){var c=n.get(0).nodeName;alert('Attribute "data-validation-qty" is missing from '+c+" named "+n.attr("name"))}var h=e.formUtils.numericRangeCheck(f,l);switch(h[0]){case"out":this.errorMessage=i.groupCheckedRangeStart+l+i.groupCheckedEnd,o=!1;break;case"min":this.errorMessage=i.groupCheckedTooFewStart+h[1]+i.groupCheckedEnd,o=!1;break;case"max":this.errorMessage=i.groupCheckedTooManyStart+h[1]+i.groupCheckedEnd,o=!1;break;default:o=!0}if(!o)var p=function(){a.unbind("click",p),a.filter("*[data-validation]").eq(0).validateInputOnBlur(i,r,!1,"blur")};return o}})})(jQuery);