(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("gas",function(e,t){function o(e){r="#",s.ax="variable",s.eax="variable-2",s.rax="variable-3",s.bx="variable",s.ebx="variable-2",s.rbx="variable-3",s.cx="variable",s.ecx="variable-2",s.rcx="variable-3",s.dx="variable",s.edx="variable-2",s.rdx="variable-3",s.si="variable",s.esi="variable-2",s.rsi="variable-3",s.di="variable",s.edi="variable-2",s.rdi="variable-3",s.sp="variable",s.esp="variable-2",s.rsp="variable-3",s.bp="variable",s.ebp="variable-2",s.rbp="variable-3",s.ip="variable",s.eip="variable-2",s.rip="variable-3",s.cs="keyword",s.ds="keyword",s.ss="keyword",s.es="keyword",s.fs="keyword",s.gs="keyword"}function u(e){r="@",i.syntax="builtin",s.r0="variable",s.r1="variable",s.r2="variable",s.r3="variable",s.r4="variable",s.r5="variable",s.r6="variable",s.r7="variable",s.r8="variable",s.r9="variable",s.r10="variable",s.r11="variable",s.r12="variable",s.sp="variable-2",s.lr="variable-2",s.pc="variable-2",s.r13=s.sp,s.r14=s.lr,s.r15=s.pc,n.push(function(e,t){if(e==="#")return t.eatWhile(/\w/),"number"})}function f(e,t){var n=!1,r;while((r=e.next())!=null){if(r===t&&!n)return!1;n=!n&&r==="\\"}return n}function l(e,t){var n=!1,r;while((r=e.next())!=null){if(r==="/"&&n){t.tokenize=null;break}n=r==="*"}return"comment"}var n=[],r="",i={".abort":"builtin",".align":"builtin",".altmacro":"builtin",".ascii":"builtin",".asciz":"builtin",".balign":"builtin",".balignw":"builtin",".balignl":"builtin",".bundle_align_mode":"builtin",".bundle_lock":"builtin",".bundle_unlock":"builtin",".byte":"builtin",".cfi_startproc":"builtin",".comm":"builtin",".data":"builtin",".def":"builtin",".desc":"builtin",".dim":"builtin",".double":"builtin",".eject":"builtin",".else":"builtin",".elseif":"builtin",".end":"builtin",".endef":"builtin",".endfunc":"builtin",".endif":"builtin",".equ":"builtin",".equiv":"builtin",".eqv":"builtin",".err":"builtin",".error":"builtin",".exitm":"builtin",".extern":"builtin",".fail":"builtin",".file":"builtin",".fill":"builtin",".float":"builtin",".func":"builtin",".global":"builtin",".gnu_attribute":"builtin",".hidden":"builtin",".hword":"builtin",".ident":"builtin",".if":"builtin",".incbin":"builtin",".include":"builtin",".int":"builtin",".internal":"builtin",".irp":"builtin",".irpc":"builtin",".lcomm":"builtin",".lflags":"builtin",".line":"builtin",".linkonce":"builtin",".list":"builtin",".ln":"builtin",".loc":"builtin",".loc_mark_labels":"builtin",".local":"builtin",".long":"builtin",".macro":"builtin",".mri":"builtin",".noaltmacro":"builtin",".nolist":"builtin",".octa":"builtin",".offset":"builtin",".org":"builtin",".p2align":"builtin",".popsection":"builtin",".previous":"builtin",".print":"builtin",".protected":"builtin",".psize":"builtin",".purgem":"builtin",".pushsection":"builtin",".quad":"builtin",".reloc":"builtin",".rept":"builtin",".sbttl":"builtin",".scl":"builtin",".section":"builtin",".set":"builtin",".short":"builtin",".single":"builtin",".size":"builtin",".skip":"builtin",".sleb128":"builtin",".space":"builtin",".stab":"builtin",".string":"builtin",".struct":"builtin",".subsection":"builtin",".symver":"builtin",".tag":"builtin",".text":"builtin",".title":"builtin",".type":"builtin",".uleb128":"builtin",".val":"builtin",".version":"builtin",".vtable_entry":"builtin",".vtable_inherit":"builtin",".warning":"builtin",".weak":"builtin",".weakref":"builtin",".word":"builtin"},s={},a=(t.architecture||"x86").toLowerCase();return a==="x86"?o(t):(a==="arm"||a==="armv6")&&u(t),{startState:function(){return{tokenize:null}},token:function(e,t){if(t.tokenize)return t.tokenize(e,t);if(e.eatSpace())return null;var o,u,a=e.next();if(a==="/"&&e.eat("*"))return t.tokenize=l,l(e,t);if(a===r)return e.skipToEnd(),"comment";if(a==='"')return f(e,'"'),"string";if(a===".")return e.eatWhile(/\w/),u=e.current().toLowerCase(),o=i[u],o||null;if(a==="=")return e.eatWhile(/\w/),"tag";if(a==="{")return"braket";if(a==="}")return"braket";if(/\d/.test(a))return a==="0"&&e.eat("x")?(e.eatWhile(/[0-9a-fA-F]/),"number"):(e.eatWhile(/\d/),"number");if(/\w/.test(a))return e.eatWhile(/\w/),e.eat(":")?"tag":(u=e.current().toLowerCase(),o=s[u],o||null);for(var c=0;c<n.length;c++){o=n[c](a,e,t);if(o)return o}},lineComment:r,blockCommentStart:"/*",blockCommentEnd:"*/"}})});