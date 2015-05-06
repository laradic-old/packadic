(function(e){typeof exports=="object"&&typeof module=="object"?e(require("../../lib/codemirror")):typeof define=="function"&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("puppet",function(){function n(t,n){var r=n.split(" ");for(var i=0;i<r.length;i++)e[r[i]]=t}function r(e,t){var n,r,i=!1;while(!e.eol()&&(n=e.next())!=t.pending){if(n==="$"&&r!="\\"&&t.pending=='"'){i=!0;break}r=n}return i&&e.backUp(1),n==t.pending?t.continueString=!1:t.continueString=!0,"string"}function i(n,i){var s=n.match(/[\w]+/,!1),o=n.match(/(\s+)?\w+\s+=>.*/,!1),u=n.match(/(\s+)?[\w:_]+(\s+)?{/,!1),a=n.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/,!1),f=n.next();if(f==="$")return n.match(t)?i.continueString?"variable-2":"variable":"error";if(i.continueString)return n.backUp(1),r(n,i);if(i.inDefinition){if(n.match(/(\s+)?[\w:_]+(\s+)?/))return"def";n.match(/\s+{/),i.inDefinition=!1}return i.inInclude?(n.match(/(\s+)?\S+(\s+)?/),i.inInclude=!1,"def"):n.match(/(\s+)?\w+\(/)?(n.backUp(1),"def"):o?(n.match(/(\s+)?\w+/),"tag"):s&&e.hasOwnProperty(s)?(n.backUp(1),n.match(/[\w]+/),n.match(/\s+\S+\s+{/,!1)&&(i.inDefinition=!0),s=="include"&&(i.inInclude=!0),e[s]):/(\s+)?[A-Z]/.test(s)?(n.backUp(1),n.match(/(\s+)?[A-Z][\w:_]+/),"def"):u?(n.match(/(\s+)?[\w:_]+/),"def"):a?(n.match(/(\s+)?[@]{1,2}/),"special"):f=="#"?(n.skipToEnd(),"comment"):f=="'"||f=='"'?(i.pending=f,r(n,i)):f=="{"||f=="}"?"bracket":f=="/"?(n.match(/.*\//),"variable-3"):f.match(/[0-9]/)?(n.eatWhile(/[0-9]+/),"number"):f=="="?(n.peek()==">"&&n.next(),"operator"):(n.eatWhile(/[\w-]/),null)}var e={},t=/({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;return n("keyword","class define site node include import inherits"),n("keyword","case if else in and elsif default or"),n("atom","false true running present absent file directory undef"),n("builtin","action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool"),{startState:function(){var e={};return e.inDefinition=!1,e.inInclude=!1,e.continueString=!1,e.pending=!1,e},token:function(e,t){return e.eatSpace()?null:i(e,t)}}}),e.defineMIME("text/x-puppet","puppet")});