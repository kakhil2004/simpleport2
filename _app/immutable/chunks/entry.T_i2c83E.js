import{n as it,s as re,t as oe}from"./scheduler.BfJEPAwo.js";import{a as se,b as I}from"./paths.xBPC1DQv.js";new URL("sveltekit-internal://");function ie(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function ce(t){return t.split("%25").map(decodeURI).join("%25")}function le(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function ct({href:t}){return t.split("#")[0]}const fe=["href","pathname","search","toString","toJSON"];function ue(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of fe)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const de="/__data.json",he=".html__data.json";function pe(t){return t.endsWith(".html")?t.replace(/\.html$/,he):t.replace(/\/$/,"")+de}function ge(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function me(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const Ot=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&F.delete(pt(t)),Ot(t,n));const F=new Map;function _e(t,n){const e=pt(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&F.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=me(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function ye(t,n,e){if(F.size>0){const r=pt(t,e),a=F.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);F.delete(r)}}return window.fetch(n,e)}function pt(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${ge(...a)}"]`}return r}const we=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ve(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ee(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return lt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return lt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=we.exec(c),[,h,g,d,m]=u;return n.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return lt(c)}).join("")}).join("")}/?$`),params:n}}function be(t){return!/^\([^)]+\)$/.test(t)}function Ee(t){return t.slice(1).split("/").filter(be)}function ke(t,n,e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function lt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Se({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=ve(s),d={id:s,exec:m=>{const f=h.exec(m);if(f)return ke(f,g,r)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function jt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function It(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const N=[];function gt(t,n=it){let e;const r=new Set;function a(s){if(re(t,s)&&(t=s,e)){const c=!N.length;for(const l of r)l[1](),N.push(l,t);if(c){for(let l=0;l<N.length;l+=2)N[l][0](N[l+1]);N.length=0}}}function o(s){a(s(t))}function i(s,c=it){const l=[s,c];return r.add(l),r.size===1&&(e=n(a,o)||it),s(t),()=>{r.delete(l),r.size===0&&e&&(e(),e=null)}}return{set:a,update:o,subscribe:i}}const Ae="1718634003853",$t="sveltekit:snapshot",Dt="sveltekit:scroll",Ct="sveltekit:states",Re="sveltekit:pageurl",$="sveltekit:history",q="sveltekit:navigation",z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},B=location.origin;function Vt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function mt(){return{x:pageXOffset,y:pageYOffset}}function O(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Lt={...z,"":z.hover};function Ft(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function qt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Ft(t)}}function ut(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||et(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===B&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function Y(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=O(s,"preload-code")),a===null&&(a=O(s,"preload-data")),n===null&&(n=O(s,"keepfocus")),e===null&&(e=O(s,"noscroll")),o===null&&(o=O(s,"reload")),i===null&&(i=O(s,"replacestate")),s=Ft(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Lt[r??"off"],preload_data:Lt[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Pt(t){const n=gt(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Ie(){const{set:t,subscribe:n}=gt(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${se}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Ae;return i&&(t(!0),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function et(t,n){return t.origin!==B||!t.pathname.startsWith(n)}const Le=-1,Pe=-2,Ue=-3,xe=-4,Te=-5,Ne=-6;function Oe(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,i=!1){if(o===Le)return;if(o===Ue)return NaN;if(o===xe)return 1/0;if(o===Te)return-1/0;if(o===Ne)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==Pe&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const Gt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Gt];const je=new Set([...Gt]);[...je];function $e(t){return t.filter(n=>n!=null)}class nt{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Mt{constructor(n,e){this.status=n,this.location=e}}class _t extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const De="x-sveltekit-invalidated",Ce="x-sveltekit-trailing-slash";function J(t){return t instanceof nt||t instanceof _t?t.status:500}function Ve(t){return t instanceof _t?t.text:"Internal Error"}const T=jt(Dt)??{},G=jt($t)??{},U={url:Pt({}),page:Pt({}),navigating:gt(null),updated:Ie()};function yt(t){T[t]=mt()}function Fe(t,n){let e=t+1;for(;T[e];)delete T[e],e+=1;for(e=n+1;G[e];)delete G[e],e+=1}function D(t){return location.href=t.href,new Promise(()=>{})}function Ut(){}let at,dt,W,L,ht,C;const Ht=[],X=[];let P=null;const Bt=[],qe=[];let j=[],w={branch:[],error:null,url:null},wt=!1,Z=!1,xt=!0,M=!1,V=!1,Kt=!1,vt=!1,bt,k,A,R,Q;async function Qe(t,n,e){var a,o;document.URL!==location.href&&(location.href=location.href),C=t,at=Se(t),L=document.documentElement,ht=n,dt=t.nodes[0],W=t.nodes[1],dt(),W(),k=(a=history.state)==null?void 0:a[$],A=(o=history.state)==null?void 0:o[q],k||(k=A=Date.now(),history.replaceState({...history.state,[$]:k,[q]:A},""));const r=T[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await Je(ht,e):ze(location.href,{replaceState:!0}),Ye()}function Ge(){Ht.length=0,vt=!1}function zt(t){X.some(n=>n==null?void 0:n.snapshot)&&(G[t]=X.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function Yt(t){var n;(n=G[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=X[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function Tt(){yt(k),It(Dt,T),zt(A),It($t,G)}async function Jt(t,n,e,r){return K({type:"goto",url:Vt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(vt=!0)}})}async function Me(t){return P={id:t.id,promise:Xt(t).then(n=>(n.type==="loaded"&&n.state.error&&(P=null),n))},P.promise}async function ft(t){const n=at.find(e=>e.exec(Zt(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function Wt(t,n){var a;w=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),R=t.props.page,bt=new C.root({target:n,props:{...t.props,stores:U,components:X},hydrate:!0}),Yt(A);const r={from:null,to:{params:w.params,route:{id:((a=w.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(o=>o(r)),Z=!0}async function tt({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(I&&(t.pathname===I||t.pathname===I+"/"))s="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);t.pathname=ie(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:$e(e).map(d=>d.node.component),page:R}};i!==void 0&&(c.props.form=i);let l={},u=!R,h=0;for(let d=0;d<Math.max(e.length,w.branch.length);d+=1){const m=e[d],f=w.branch[d];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!w.url||t.href!==w.url.href||w.error!==a||i!==void 0&&i!==R.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?l:R.data}),c}async function Et({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){const{href:v}=new URL(_,e);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(f,_)=>(s&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(s&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:ue(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,_){let v;f instanceof Request?(v=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):v=f;const S=new URL(v,e);return s&&d(S.href),S.origin===e.origin&&(v=S.href.slice(e.origin.length)),Z?ye(v,S.href,_):_e(v,_)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Nt(t,n,e,r,a,o){if(vt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(Ht.some(s=>s(new URL(i))))return!0;return!1}function kt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function He(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}async function Xt({id:t,invalidating:n,url:e,params:r,route:a}){if((P==null?void 0:P.id)===t)return P.promise;const{errors:o,layouts:i,leaf:s}=a,c=[...i,s];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let l=null;const u=w.url?t!==w.url.pathname+w.url.search:!1,h=w.route?a.id!==w.route.id:!1,g=He(w.url,e);let d=!1;const m=c.map((p,y)=>{var x;const b=w.branch[y],E=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||Nt(d,h,u,g,(x=b.server)==null?void 0:x.uses,r));return E&&(d=!0),E});if(m.some(Boolean)){try{l=await ee(e,m)}catch(p){return rt({status:J(p),error:await H(p,{url:e,params:r,route:{id:a.id}}),url:e,route:a})}if(l.type==="redirect")return l}const f=l==null?void 0:l.nodes;let _=!1;const v=c.map(async(p,y)=>{var ot;if(!p)return;const b=w.branch[y],E=f==null?void 0:f[y];if((!E||E.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!Nt(_,h,u,g,(ot=b.universal)==null?void 0:ot.uses,r))return b;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return Et({loader:p[1],url:e,params:r,route:a,parent:async()=>{var Rt;const At={};for(let st=0;st<y;st+=1)Object.assign(At,(Rt=await v[st])==null?void 0:Rt.data);return At},server_data_node:kt(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const S=[];for(let p=0;p<c.length;p+=1)if(c[p])try{S.push(await v[p])}catch(y){if(y instanceof Mt)return{type:"redirect",location:y.location};let b=J(y),E;if(f!=null&&f.includes(y))b=y.status??b,E=y.error;else if(y instanceof nt)E=y.body;else{if(await U.updated.check())return await D(e);E=await H(y,{params:r,url:e,route:{id:a.id}})}const x=await Be(p,S,o);return x?await tt({url:e,params:r,branch:S.slice(0,x.idx).concat(x.node),status:b,error:E,route:a}):await te(e,{id:a.id},E,b)}else S.push(void 0);return await tt({url:e,params:r,branch:S,status:200,error:null,route:a,form:n?void 0:null})}async function Be(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function rt({status:t,error:n,url:e,route:r}){const a={};let o=null;if(C.server_loads[0]===0)try{const l=await ee(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==B||e.pathname!==location.pathname||wt)&&await D(e)}const s=await Et({loader:dt,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:kt(o)}),c={node:await W(),loader:W,universal:null,server:null,data:null};return await tt({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}function St(t,n){if(!t||et(t,I))return;let e;try{e=C.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=Zt(e);for(const a of at){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:le(o),url:t}}}function Zt(t){return ce(t.slice(I.length)||"/")}function Qt({url:t,type:n,intent:e,delta:r}){let a=!1;const o=ae(w,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return M||Bt.forEach(s=>s(i)),a?null:o}async function K({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ut,block:u=Ut}){const h=St(n,!1),g=Qt({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=k,m=A;l(),M=!0,Z&&U.navigating.set(g.navigation),Q=c;let f=h&&await Xt(h);if(!f){if(et(n,I))return await D(n);f=await te(n,{id:null},await H(new _t(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,Q!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await rt({status:500,error:await H(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Jt(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await U.updated.check()&&await D(n);if(Ge(),yt(d),zt(m),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const p=o?0:1,y={[$]:k+=p,[q]:A+=p,[Ct]:i};(o?history.replaceState:history.pushState).call(history,y,"",n),o||Fe(k,A)}if(P=null,f.props.page.state=i,Z){w=f.state,f.props.page&&(f.props.page.url=n);const p=(await Promise.all(qe.map(y=>y(g.navigation)))).filter(y=>typeof y=="function");if(p.length>0){let y=function(){j=j.filter(b=>!p.includes(b))};p.push(y),j.push(...p)}bt.$set(f.props),Kt=!0}else Wt(f,ht);const{activeElement:_}=document;await oe();const v=e?e.scroll:a?mt():null;if(xt){const p=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==_&&document.activeElement!==document.body;!r&&!S&&We(),xt=!0,f.props.page&&(R=f.props.page),M=!1,t==="popstate"&&Yt(A),g.fulfil(void 0),j.forEach(p=>p(g.navigation)),U.navigating.set(null)}async function te(t,n,e,r){return t.origin===B&&t.pathname===location.pathname&&!wt?await rt({status:r,error:e,url:t,route:n}):await D(t)}function Ke(){let t;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(ft(i.target.href),e.unobserve(i.target))},{threshold:0});function r(o,i){const s=qt(o,L);if(!s)return;const{url:c,external:l,download:u}=ut(s,I);if(l||u)return;const h=Y(s);if(!h.reload)if(i<=h.preload_data){const g=St(c,!1);g&&Me(g)}else i<=h.preload_code&&ft(c.pathname)}function a(){e.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=ut(o,I);if(s||c)continue;const l=Y(o);l.reload||(l.preload_code===z.viewport&&e.observe(o),l.preload_code===z.eager&&ft(i.pathname))}}j.push(a),a()}function H(t,n){if(t instanceof nt)return t.body;const e=J(t),r=Ve(t);return C.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function ze(t,n={}){return t=Vt(t),t.origin!==B?Promise.reject(new Error("goto: invalid URL")):Jt(t,n,0)}function Ye(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(Tt(),!M){const a=ae(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Bt.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Tt()}),(n=navigator.connection)!=null&&n.saveData||Ke(),L.addEventListener("click",e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=qt(e.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:i,download:s}=ut(r,I);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Y(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){Qt({url:a,type:"link"})?M=!0:e.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===ct(location)){const[,d]=w.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(V=!0,yt(k),t(a),!c.replace_state)return;V=!1}e.preventDefault(),K({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(et(i,I))return;const s=e.target,c=Y(s);if(c.reload)return;e.preventDefault(),e.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),K({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[$]){const a=e.state[$];if(Q={},a===k)return;const o=T[a],i=e.state[Ct]??{},s=new URL(e.state[Re]??location.href),c=e.state[q],l=ct(location)===ct(w.url);if(c===A&&(Kt||l)){t(s),T[k]=mt(),o&&scrollTo(o.x,o.y),i!==R.state&&(R={...R,state:i},bt.$set({page:R})),k=a;return}const h=a-k;await K({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{k=a,A=c},block:()=>{history.go(-h)},nav_token:Q})}else if(!V){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[$]:++k,[q]:A},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&U.navigating.set(null)});function t(e){w.url=e,U.page.set({...R,url:e}),U.page.notify()}}async function Je(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){wt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=St(c,!1)||{});let l;try{const u=r.map(async(d,m)=>{const f=i[m];return f!=null&&f.uses&&(f.uses=ne(f.uses)),Et({loader:C.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let v=0;v<m;v+=1)Object.assign(_,(await u[v]).data);return _},server_data_node:kt(f)})}),h=await Promise.all(u),g=at.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let m=0;m<d.length;m++)d[m]||h.splice(m,0,void 0)}l=await tt({url:c,params:a,branch:h,status:n,error:e,form:s,route:g??null})}catch(u){if(u instanceof Mt){await D(new URL(u.location,location.href));return}l=await rt({status:J(u),error:await H(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),Wt(l,t)}async function ee(t,n){var a;const e=new URL(t);e.pathname=pe(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(Ce,"1"),e.searchParams.append(De,n.map(o=>o?"1":"0").join(""));const r=await Ot(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new nt(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(g){return Oe(g,{Promise:d=>new Promise((m,f)=>{i.set(d,{fulfil:m,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const m=u.indexOf(`
`);if(m===-1)break;const f=JSON.parse(u.slice(0,m));if(u=u.slice(m+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=ne(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:v,error:S}=f,p=i.get(_);i.delete(_),S?p.reject(l(S)):p.fulfil(l(v))}}}})}function ne(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function We(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ae(t,n,e,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{Qe as a,U as s};
