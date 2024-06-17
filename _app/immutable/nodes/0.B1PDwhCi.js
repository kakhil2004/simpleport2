import{s as S,n as x,e as Y,u as G,g as U,f as W}from"../chunks/scheduler.BfJEPAwo.js";import{S as F,i as N,e as y,h as J,s as E,c as w,a as A,j as Z,d as m,k as H,n as B,b as u,f as $,g as h,o as X,m as ee,p as te,q as ne,t as O,r as j,u as ae}from"../chunks/index.Cqvjk_UP.js";import{b as _}from"../chunks/paths.xBPC1DQv.js";var r={};function T(){return typeof navigator.userAgentData=="object"&&"mobile"in navigator.userAgentData?navigator.userAgentData.mobile:function(t){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.slice(0,4))}(navigator.userAgent||navigator.vendor||window.opera)}function q(){if(T()){var t=window.innerWidth,e=window.innerHeight,n=Math.min(t,e),a=Math.max(t,e);return n<=480&&a<=896}else return!1}function C(){return r.AppRunsOnLegacyTouchDevice==null&&(r.AppRunsOnLegacyTouchDevice=!k("(pointer:fine)")&&!k("(pointer:coarse)")&&!k("-moz-touch-enabled")&&("ontouchstart"in Window||(navigator.maxTouchPoints||0)>0||/touch|android|iphone|ipod|ipad/i.test(navigator.userAgent))),r.AppRunsOnLegacyTouchDevice}function ie(){return r.DevicePointingAccuracy==null&&(D(),!L()&&!r.waitingForLoaded&&(r.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",D))),r.DeviceCanHover}function M(){return r.DevicePointingAccuracy==null&&(D(),!L()&&!r.waitingForLoaded&&(r.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",D))),r.DevicePointingAccuracy}function D(){r.DeviceCanHover=k("(hover:hover)");var t="fine";switch(!0){case k("(pointer:none)"):t="none";break;case k("(pointer:coarse)"):case k("-moz-touch-enabled"):case C():t="coarse";break}if(r.DevicePointingAccuracy=t,L()){var e=document.body.classList;if(t==="none"!==e.contains("noPointer")||t==="fine"!==e.contains("finePointer")||t==="coarse"!==e.contains("coarsePointer"))switch(document.body.classList.remove("noPointer","finePointer","coarsePointer"),t){case"none":document.body.classList.add("noPointer");break;case"fine":document.body.classList.add("finePointer");break;case"coarse":document.body.classList.add("coarsePointer");break}}}function re(t){K(t,!1)}function oe(t){K(t,!0)}function ce(t){V(t)}function L(){return document.readyState==="interactive"||document.readyState==="complete"}function k(t){var e=window.matchMedia||window.webkitMatchmedia||window.mozMatchmedia||window.oMatchmedia;return e!=null&&e(t).matches}function se(t,e){return typeof t.item=="function"?t.item(e):t[e]}function le(t,e){for(var n=0,a=t.length;n<a;n++)if(e.test(se(t,n)))return!0;return!1}function Q(){if(!r.MediaQueriesHaveBeenRewritten&&C())if(L()){for(var t=document.styleSheets,e=0,n=t.length;e<n;e++)for(var a=t[e].cssRules||t[e].rules,i=0,o=a.length;i<o;i++){var c=a[i];if(c.type===CSSRule.MEDIA_RULE&&le(c.media,/handheld/i)){var l=c.media;l.mediaText=l.mediaText.replace("handheld","screen")}}for(var f=document.getElementsByTagName("link"),e=0,n=f.length;e<n;e++){var d=f[e];/handheld/i.test(d.media)&&(d.media=d.media.replace("handheld","screen"))}r.MediaQueriesHaveBeenRewritten=!0}else window.addEventListener("DOMContentLoaded",Q)}function K(t,e){if(typeof t!="function")throw new Error("handler function expected");r.EventHandlerRegistry==null&&(r.EventHandlerRegistry=[]);for(var n=r.EventHandlerRegistry,a=0,i=n.length;a<i;a++)if(n[a].Handler===t){n[a].onceOnly=e;return}n.push({Handler:t,onceOnly:e}),n.length===1&&de()}function V(t){r.EventHandlerRegistry==null&&(r.EventHandlerRegistry=[]);for(var e=r.EventHandlerRegistry,n=0,a=e.length;n<a;n++)if(e[n].Handler===t){e.splice(n,1);break}e.length===0&&ue()}function de(){r.AccuracyPoller=setInterval(function(){var t=M();D(),M()!==t&&ve()},500)}function ue(){clearInterval(r.AccuracyPoller),r.AccuracyPoller=void 0}function ve(){r.EventHandlerRegistry==null&&(r.EventHandlerRegistry=[]);for(var t=r.EventHandlerRegistry,e=0,n=t.length;e<n;e++){var a=t[e],i=a.Handler,o=a.onceOnly;try{i(M())}catch(c){console.warn("PointingAccuracy observation function failed with",c)}o&&V(i)}}var fe={get isMobile(){return T()},get isPhone(){return q()},get isTablet(){return T()&&!q()},get isLegacyTouchDevice(){return C()},rewriteMediaQueriesOnLegacyTouchDevices:Q,get PointingAccuracy(){return M()},get canHover(){return ie()},onPointingAccuracyChanged:re,oncePointingAccuracyChanged:oe,offPointingAccuracyChanged:ce,get observesPointingAccuracy(){return r.AccuracyPoller!=null}};function me(t){let e,n,a,i,o,c,l=`<a href="${_}/#proj" class="svelte-39akck">Projects</a> <a href="${_}/#skill" class="svelte-39akck">Skills</a> <a href="${_}/attributions" class="svelte-39akck">Attributions</a>`;return{c(){e=y("header"),n=y("div"),a=y("h2"),i=J(z),o=E(),c=y("div"),c.innerHTML=l,this.h()},l(f){e=w(f,"HEADER",{});var d=A(e);n=w(d,"DIV",{class:!0});var b=A(n);a=w(b,"H2",{class:!0});var g=A(a);i=Z(g,z),g.forEach(m),o=H(b),c=w(b,"DIV",{class:!0,"data-svelte-h":!0}),B(c)!=="svelte-jwo2rj"&&(c.innerHTML=l),b.forEach(m),d.forEach(m),this.h()},h(){u(a,"class","brand svelte-39akck"),u(c,"class","topnav-right svelte-39akck"),u(n,"class","topnav svelte-39akck")},m(f,d){$(f,e,d),h(e,n),h(n,a),h(a,i),h(n,o),h(n,c)},p:x,i:x,o:x,d(f){f&&m(e)}}}let z="Akhil Kothapalli";{let t=function(a,i){const c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:a})};fetch(i,c).then(l=>{if(!l.ok)throw new Error(`Error sending message: ${l.statusText}`);console.log("Message sent successfully!")}).catch(l=>{console.error("Error:",l)})};fe.isMobile&&(z="AK");let e=new URLSearchParams(window.location.search);e.has("comp")&&t("Visited by - "+e.get("comp"),"https://discord.com/api/webhooks/1211865773082157127/tjYNjMYFupGBIdmGQqDIVVzApp3ZzsvRHvxwgVi_OCLPg4RWISiIqL7cYtFrPY8scqkh")}class he extends F{constructor(e){super(),N(this,e,null,me,S,{})}}function ge(t){let e,n,a,i,o,c,l,f,d,b=`<div><p>©2023 Akhil, Powered by SvelteKit. <a href="${_}/about">More about this site</a>  - 1.2.1</p></div>`,g;o=new he({});const R=t[1].default,v=Y(R,t,t[0],null);return{c(){e=y("link"),n=y("link"),a=E(),i=y("div"),X(o.$$.fragment),c=E(),l=y("main"),v&&v.c(),f=E(),d=y("footer"),d.innerHTML=b,this.h()},l(s){const p=ee("svelte-ze56aw",document.head);e=w(p,"LINK",{rel:!0,href:!0,type:!0}),n=w(p,"LINK",{rel:!0,href:!0,type:!0}),p.forEach(m),a=H(s),i=w(s,"DIV",{id:!0,class:!0});var P=A(i);te(o.$$.fragment,P),c=H(P),l=w(P,"MAIN",{id:!0,class:!0});var I=A(l);v&&v.l(I),I.forEach(m),f=H(P),d=w(P,"FOOTER",{id:!0,class:!0,"data-svelte-h":!0}),B(d)!=="svelte-1kei9k0"&&(d.innerHTML=b),P.forEach(m),this.h()},h(){u(e,"rel","stylesheet"),u(e,"href","https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css"),u(e,"type","text/css"),u(n,"rel","stylesheet"),u(n,"href",_+"/style.css"),u(n,"type","text/css"),u(l,"id","content-wrap"),u(l,"class","svelte-1qf80bv"),u(d,"id","footer"),u(d,"class","svelte-1qf80bv"),u(i,"id","page-container"),u(i,"class","svelte-1qf80bv")},m(s,p){h(document.head,e),h(document.head,n),$(s,a,p),$(s,i,p),ne(o,i,null),h(i,c),h(i,l),v&&v.m(l,null),h(i,f),h(i,d),g=!0},p(s,[p]){v&&v.p&&(!g||p&1)&&G(v,R,s,s[0],g?W(R,s[0],p,null):U(s[0]),null)},i(s){g||(O(o.$$.fragment,s),O(v,s),g=!0)},o(s){j(o.$$.fragment,s),j(v,s),g=!1},d(s){s&&(m(a),m(i)),m(e),m(n),ae(o),v&&v.d(s)}}}function pe(t,e,n){let{$$slots:a={},$$scope:i}=e;return t.$$set=o=>{"$$scope"in o&&n(0,i=o.$$scope)},[i,a]}class ke extends F{constructor(e){super(),N(this,e,pe,ge,S,{})}}export{ke as component};
