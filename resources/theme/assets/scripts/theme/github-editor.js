define(["jquery","theme","plugins/async","plugins/oauth-io","Github","Codepad","plugins/bootbox","storage","plugins/mscrollbar"],function(e,t,n,r,i,s,o,u){function h(t){return _.isUndefined(t)&&(t="div"),e(document.createElement(t))}var a=window.packadic=window.packadic||{};window.theme=t,window.storage=u,r.initialize(a.config.oauth_io);var f={},l=null,c={$el:null,defaults:{codepadEditorId:"github-editor-codepad",contentsSelector:"#github-editor-contents",branchesSelector:"#github-editor-branches",repositoriesSelector:"#github-editor-repos"},currentFile:{},boxes:{}};return console.log("storage",u),function(){c.init=function(n,r){c.options=_.merge(c.defaults,r||{}),c.$el=e(n),c.$contents=e(c.options.contentsSelector),c.$branches=e(c.options.branchesSelector),c.$repositories=e(c.options.repositoriesSelector),f.isAuthorized()&&!l&&(l=new i({token:f.request().access_token,auth:"oauth"}),c.github=l);var u=window.codepad=c.codepad=new s(c.options.codepadEditorId);u.addToolbarButton("close","Close","btn-warning").on("click",function(e){e.preventDefault(),u.hide(),c.currentFile={},c.$contents.removeAttr("style"),c.$branches.removeAttr("style"),c.$repositories.removeAttr("style"),c.$contents.append(c.boxes.contents)}),u.addToolbarButton("commit","Commit/save","btn-success").on("click",function(e){e.preventDefault();var n=u.aceEditor.session.getValue(),r=c.github.getRepo(c.currentFile.owner,c.currentFile.repoName);o.prompt("Enter a commit message",function(e){if(e===!1||typeof e!="string")return;r.write(c.currentFile.branch,c.currentFile.path,n,e,function(e){t.alert({message:"File commited successfully."})})})})},c.getBox=function(n,r,i){t.getTemplate("github-editor/"+n,function(t){c.boxes[n]=e(t(r)),e("body").append(c.boxes[n].hide()),e.mCustomScrollbar.defaults.theme="dark",c.boxes[n].find(".scrollable").addClass("mCustomScrollbar").mCustomScrollbar(),i(c.boxes[n])})},c.showFileEditor=function(t,n,r,i){t.read(r,i,function(t,s){c.currentFile.repoName=n.name,c.currentFile.owner=n.owner.login,c.currentFile.path=i,c.currentFile.branch=r,codepad.init(function(){codepad.setValue(s),codepad.setModeForPath(i),console.log("path",i),c.$contents.hide(),c.$branches.hide(),c.$repositories.hide(),codepad.enableToolbar().show(),e("#github-editor-side-contents").append(c.boxes.contents)})})},c.showContent=function(t,n,r,i){i=i||"";var s=i.split("/"),o=s.length===0;console.log("show content branch",r,"path",i),t.contents(r,i,function(u,a){console.log(a),c.getBox("contents",{files:a,repo:n,branch:r},function(u){u.find("a[data-name]").on("click",function(i){i.preventDefault();var s=e(this).data();s.type==="dir"?c.showContent(t,n,r,s.path):c.showFileEditor(t,n,r,s.path)}),u.find("#github-editor-contents-path").html("").append(h("i").text(i));var a=u.find("#github-editor-contents-up");a.off("click").on("click",function(e){e.preventDefault(),c.showContent(t,n,r,o?"":s[s.length-2])}),e(c.options.contentsSelector).html("").append(u.show())})})},c.showBranches=function(r,i){c.$branches.html(t.createLoader()),c.$contents.html(t.createLoader());var s=c.github.getRepo(r,i);n.parallel({repo:function(e){s.show(function(t,n){c.showContent(s,n,n.default_branch),e(null,n)})},branches:function(e){s.listBranches(function(t,n){e(null,n)})}},function(t,n){c.getBox("branches",n,function(t){console.log("branches result",n),t.find("a[data-branch]").on("click",function(t){t.preventDefault(),c.showContent(s,n.repo,e(this).data("branch"))}),e(c.options.branchesSelector).html("").append(t.show())})})},c.showRepositories=function(){c.$repositories.html(t.createLoader()),n.waterfall([function(e){c.getAll(function(t){e(null,t)})},function(e,t){c.getBox("repos",{repos:[].concat.apply([],_.merge(_.values(e.repos)))},function(n){t(null,e,n)})},function(t,n,r){n.find("a[data-repo-name]").on("click",function(t){t.preventDefault();var n=e(this).data();c.showBranches(n.owner,n.repoName)}),e(c.options.repositoriesSelector).html("").append(n.show()),r()}])},c.getAuthButton=function(e){if(!_.isUndefined(this.btnAuth))return this.btnAuth;var t={$el:e||h("a").addClass("btn btn-sm blue-light hide").attr("id","github-auth").attr("href","#").text("Login")};return t.setLogin=function(){t.$el.off("click").text("Login").on("click",function(e){e.preventDefault(),c.api.authorize(),t.setLogout()})},t.setLogout=function(){t.$el.off("click").text("Logout").on("click",function(e){e.preventDefault(),c.api.logout(),t.setLogin()})},c.api.isAuthorized()?t.setLogout():t.setLogin(),t.$el.removeClass("hide"),this.btnAuth=t},c.getAll=function(t){n.waterfall([function(e){data={},l.getUser().orgs(function(t,n,r){console.log("xhr",r),data.orgs=n,e(null,data)})},function(t,r){repoRequests={},e.each(t.orgs,function(e,t){repoRequests[t.login]=function(e){l.getUser().orgRepos(t.login,function(t,n){e(null,n)})}}),n.parallel(repoRequests,function(e,n){t.repos=n,r(null,t)})},function(e,t){l.getUser().repos(function(n,r){e.repos.user=r,t(null,e)})}],function(e,n){console.log("all results",n),t(n)})}}.call(),function(){f.authorize=function(e){r.popup("github",{cache:!0}).done(function(t){l||(l=new i({token:f.request().access_token,auth:"oauth"})),_.isFunction(e)&&e(t),window.location.href=window.location.href}).fail(function(e){console.log(e)})},f.logout=function(){r.clearCache("github"),l=c.github=null},f.isAuthorized=function(){return _.isObject(r.create("github"))},f.request=function(){return r.create("github")}}.call(),c.api=f,c});