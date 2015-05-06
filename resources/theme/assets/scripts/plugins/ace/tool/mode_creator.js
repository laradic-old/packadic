define(["require","exports","module","ace/ext/language_tools","ace/config","ace/lib/net","ace/range","demo/kitchen-sink/util","demo/kitchen-sink/layout","ace/ext/modelist","demo/kitchen-sink/doclist","demo/kitchen-sink/token_tooltip","ace/edit_session","ace/undomanager","ace/tokenizer_dev","ace/tokenizer"],function(require,exports,module){function updateSaveButtonState(e,t){t.saveButton.disabled=t.session.getUndoManager().isClean()}function handleSaveResult(e,t){if(e)return log("Write access to this file is disabled.\nTo enable saving your changes to disk, clone the Ace repository\nand run the included web server with the --allow-write option\n`node static.js --allow-write` or `static.py --puttable=*`");t.session.getUndoManager().markClean(),updateSaveButtonState(null,t)}function getDeps(e,t){var n=[];return e.replace(/require\((['"])(.*?)\1/g,function(e,r,i){if(i[0]=="."){var s=t.split("/");i.split("/").forEach(function(e){e=="."?s.pop():e==".."?(s.pop(),s.pop()):s.push(e)}),i=s.join("/")}n.push('"'+i+'"')}),n}function run(){var src=editor1.getValue(),path="ace/mode/new",deps=getDeps(src,path);window.require.undef(path),src=src.replace("define(",'define("'+path+'", ["require","exports","module",'+deps+"],");try{eval(src),require(["ace/mode/new"],function(e){try{continueRun(e)}catch(e){log(e)}},function(e){log(e),window.require.undef(path)}),hideLog()}catch(e){log(e)}}function log(e){console.log(e),logEditor||(logEditor=util.createEditor(document.getElementById("consoleEditor")),logEditor.session.setMode("ace/mode/javascript"),logEditor.session.setUseWorker(!1)),logEditor.container.parentNode.style.display="",logEditor.resize(),logEditor.navigateFileEnd(e),logEditor.insert(e+"\n")}function hideLog(){logEditor&&(logEditor.container.parentNode.style.display="none")}require("ace/ext/language_tools"),require("ace/config").setDefaultValues("editor",{enableBasicAutocompletion:!0,enableSnippets:!0});var net=require("ace/lib/net"),Range=require("ace/range").Range,util=require("demo/kitchen-sink/util"),layout=require("demo/kitchen-sink/layout"),modelist=require("ace/ext/modelist"),doclist=require("demo/kitchen-sink/doclist"),TokenTooltip=require("demo/kitchen-sink/token_tooltip").TokenTooltip,EditSession=require("ace/edit_session").EditSession,UndoManager=require("ace/undomanager").UndoManager,DebugTokenizer=require("ace/tokenizer_dev").Tokenizer,Tokenizer=require("ace/tokenizer").Tokenizer,splitEditor=window.splitEditor=util.createSplitEditor("editor"),editor1=window.editor1=splitEditor.editor0,editor2=window.editor2=splitEditor.editor1;new TokenTooltip(editor2);var timeout=null,schedule=function(){timeout!=null&&clearTimeout(timeout),timeout=setTimeout(run,800)},setAutorunEnabled=function(e){e?editor1.on("change",schedule):editor1.removeEventListener("change",schedule)};util.bindCheckbox("autorunEl",setAutorunEnabled);var docEl=document.getElementById("doc");util.fillDropdown(docEl,doclist.docs),util.bindDropdown("doc",function(e){doclist.loadDoc(e,function(e){e&&(editor2.setSession(e),updateSaveButtonState(null,editor2))})});var modeEl=document.getElementById("modeEl");util.fillDropdown(modeEl,modelist.modes);var modeSessions={};util.bindDropdown(modeEl,function(e){if(modeSessions[e]){editor1.setSession(modeSessions[e]),schedule();return}var t="./lib/ace/mode/"+e+"_highlight_rules.js";net.get(t,function(t){var n=new EditSession(t);n.setUndoManager(new UndoManager),modeSessions[e]=n,n.setMode("ace/mode/javascript",function(){n.getLine(0).match(/^\s*\//)&&n.toggleFoldWidget(0)}),editor1.setSession(modeSessions[e]),updateSaveButtonState(null,editor1),schedule()})}),document.getElementById("syncToMode").onclick=function(){docEl.value=modelist.modesByName[modeEl.value].desc,docEl.onchange(),run()},editor1.saveButton=document.getElementById("saveButton1"),editor2.saveButton=document.getElementById("saveButton2"),editor1.saveButton.editor=editor1,editor2.saveButton.editor=editor2,editor1.saveButton.onclick=function(){doclist.saveDoc({path:"./lib/ace/mode/"+modeEl.value+"_highlight_rules.js",session:editor1.session},function(e){handleSaveResult(e,editor1)})},editor1.commands.bindKey({win:"Ctrl-S",mac:"Cmd-s"},editor1.saveButton.onclick),editor2.saveButton.onclick=function(){doclist.saveDoc(docEl.value,function(e){handleSaveResult(e,editor2)})},editor2.commands.bindKey({win:"Ctrl-S",mac:"Cmd-s"},editor2.saveButton.onclick),editor1.on("input",updateSaveButtonState),editor2.on("input",updateSaveButtonState),document.getElementById("perfTest").onclick=function(){var e=editor2.session.doc.getAllLines();if(!e.length)return;while(e.length<1e3)e=e.concat(e);var t=new Tokenizer(currentRules),n=function(e,t){var n="start";for(var r=0,i=e.length;r<i;r++)n=t.getLineTokens(e[r],n).state},r=performance.now();n(e,t),r-=performance.now(r),log("tokenized "+e.length+" lines in "+r+" ms")},util.fillDropdown("themeEl",{bright:["chrome","clouds","crimson_editor","dawn","dreamweaver","eclipse","github","solarized_light","textmate","tomorrow","xcode"],dark:["clouds_midnight","cobalt","idle_fingers","kr_theme","merbivore","merbivore_soft","mono_industrial","monokai","pastel_on_dark","solarized_dark","terminal","tomorrow_night","tomorrow_night_blue","tomorrow_night_bright","tomorrow_night_eighties","twilight","vibrant_ink"]}),util.bindDropdown("themeEl",function(e){if(!e)return;editor1.setTheme("ace/theme/"+e),editor2.setTheme("ace/theme/"+e)});var currentRules,continueRun=function(e){for(var t in e)if(typeof e[t]=="function"&&/rules/i.test(t)){e=e[t];break}currentRules=(new e).getRules();var n=DebugTokenizer,r=new n(currentRules);editor2.session.$mode.$tokenizer=r,editor2.session.bgTokenizer.setTokenizer(r),editor2.renderer.updateText()};editor1.commands.bindKey("ctrl-Return",run);var logEditor});