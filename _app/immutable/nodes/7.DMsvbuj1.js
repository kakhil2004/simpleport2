import{s as dt,n as et,a as ft}from"../chunks/scheduler.BfJEPAwo.js";import{S as pt,i as mt,e as o,h as Z,s as a,c as r,a as R,j as tt,d as e,k as u,b as S,f as l,g,l as ct,o as _t,n as d,p as Ct,q as vt,t as xt,r as wt,u as yt}from"../chunks/index.Cqvjk_UP.js";const bt=!0,Ft=Object.freeze(Object.defineProperty({__proto__:null,prerender:bt},Symbol.toStringTag,{value:"Module"}));function gt(_){let n,C,p,h,v,T,x,b,w,f,M;return{c(){n=o("details"),C=o("summary"),p=o("b"),h=Z(_[1]),v=a(),T=o("br"),x=a(),b=o("pre"),w=o("code"),f=Z(_[0]),M=Z(`\r
`),this.h()},l(m){n=r(m,"DETAILS",{});var s=R(n);C=r(s,"SUMMARY",{});var D=R(C);p=r(D,"B",{});var W=R(p);h=tt(W,_[1]),W.forEach(e),D.forEach(e),v=u(s),T=r(s,"BR",{}),x=u(s),b=r(s,"PRE",{class:!0});var y=R(b);w=r(y,"CODE",{class:!0});var N=R(w);f=tt(N,_[0]),N.forEach(e),M=tt(y,`\r
`),y.forEach(e),s.forEach(e),this.h()},h(){S(w,"class","language-'''"),S(b,"class","language-'''")},m(m,s){l(m,n,s),g(n,C),g(C,p),g(p,h),g(n,v),g(n,T),g(n,x),g(n,b),g(b,w),g(w,f),g(b,M)},p(m,[s]){s&2&&ct(h,m[1]),s&1&&ct(f,m[0])},i:et,o:et,d(m){m&&e(n)}}}function St(_,n,C){let{data:p}=n,{sum:h}=n;return _.$$set=v=>{"data"in v&&C(0,p=v.data),"sum"in v&&C(1,h=v.sum)},[p,h]}class Tt extends pt{constructor(n){super(),mt(this,n,St,gt,dt,{data:0,sum:1})}}function Wt(_){let n,C="Self-Gardener",p,h,v='<a href="https://github.com/kakhil2004/esp32-testing" rel="nofollow">Click me for GitHub Link</a>',T,x,b="Still in progress (Will add updates as I go)",w,f,M="Why?",m,s,D="I bought a google home assistant and some lights and could control them using my voice. Why not try to use the same thing to water my garden and get some stats about it?",W,y,N="High Level Process",z,I,it='<li>Decide which communicaiton system to use (WiFi, Bluetooth, NRF24L01 etc.)</li> <li>Wire up the electronics</li> <li>Connect it to <a href="https://sinric.pro/" rel="nofollow">Sinric Pro</a></li> <li>Complete!</li>',j,E,lt="Step 1",B,P,nt="The device",G,F,ot="Immediately I knew that an ESP32 is the way to go since it is tiny, uses much less power than a Raspberry PI but comes with in-built WiFi unlike a regular Arduino. There is also one more advantage that I discovered later.",U,L,rt="Using the standard WiFi protocol 802.11 b/g/n",$,H,st="These protocols were super simple to use and after I connected it to my network. I could easily transmit data. The problem was the range was absolutely terrible. If I went more than 5 meters away while having a direct line from the ESP32 to the router, it would lose connection. This was extremely frustrating because it had already taken me so long to figure out everything to this point due to the lack of documentation.",Y,k,J,A,at="Research the LoRa protocol",K,O,ut="After some research and realizing that the ESP’s antenna was just too small, I found the LoRa protocol. Apparently ESP32s without an external antenna could communicate with one another over huge ranges (500 meters). I could not believe it since the regular protocols performed so terribly.",Q,q,V,c,ht,X;return k=new Tt({props:{sum:"Look here for the code for WiFi protocols 802.11 b/g/n",data:_[0]}}),{c(){n=o("h1"),n.textContent=C,p=a(),h=o("p"),h.innerHTML=v,T=a(),x=o("h5"),x.textContent=b,w=a(),f=o("h2"),f.textContent=M,m=a(),s=o("p"),s.textContent=D,W=a(),y=o("h2"),y.textContent=N,z=a(),I=o("ol"),I.innerHTML=it,j=a(),E=o("h2"),E.textContent=lt,B=a(),P=o("h4"),P.textContent=nt,G=a(),F=o("p"),F.textContent=ot,U=a(),L=o("h4"),L.textContent=rt,$=a(),H=o("p"),H.textContent=st,Y=a(),_t(k.$$.fragment),J=a(),A=o("h4"),A.textContent=at,K=a(),O=o("p"),O.textContent=ut,Q=a(),q=o("h4"),V=a(),c=o("iframe"),this.h()},l(t){n=r(t,"H1",{"data-svelte-h":!0}),d(n)!=="svelte-1vm0idr"&&(n.textContent=C),p=u(t),h=r(t,"P",{"data-svelte-h":!0}),d(h)!=="svelte-1okoqye"&&(h.innerHTML=v),T=u(t),x=r(t,"H5",{"data-svelte-h":!0}),d(x)!=="svelte-ewv9e9"&&(x.textContent=b),w=u(t),f=r(t,"H2",{"data-svelte-h":!0}),d(f)!=="svelte-lerqz1"&&(f.textContent=M),m=u(t),s=r(t,"P",{"data-svelte-h":!0}),d(s)!=="svelte-vwb3wt"&&(s.textContent=D),W=u(t),y=r(t,"H2",{"data-svelte-h":!0}),d(y)!=="svelte-1wzzish"&&(y.textContent=N),z=u(t),I=r(t,"OL",{"data-svelte-h":!0}),d(I)!=="svelte-zmsgjg"&&(I.innerHTML=it),j=u(t),E=r(t,"H2",{"data-svelte-h":!0}),d(E)!=="svelte-ushnq7"&&(E.textContent=lt),B=u(t),P=r(t,"H4",{"data-svelte-h":!0}),d(P)!=="svelte-14i9luh"&&(P.textContent=nt),G=u(t),F=r(t,"P",{"data-svelte-h":!0}),d(F)!=="svelte-kxq196"&&(F.textContent=ot),U=u(t),L=r(t,"H4",{"data-svelte-h":!0}),d(L)!=="svelte-bb08dg"&&(L.textContent=rt),$=u(t),H=r(t,"P",{"data-svelte-h":!0}),d(H)!=="svelte-1eg3mdf"&&(H.textContent=st),Y=u(t),Ct(k.$$.fragment,t),J=u(t),A=r(t,"H4",{"data-svelte-h":!0}),d(A)!=="svelte-y0f5is"&&(A.textContent=at),K=u(t),O=r(t,"P",{"data-svelte-h":!0}),d(O)!=="svelte-dfbnfi"&&(O.textContent=ut),Q=u(t),q=r(t,"H4",{}),R(q).forEach(e),V=u(t),c=r(t,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0,referrerpolicy:!0}),R(c).forEach(e),this.h()},h(){S(c,"width","560"),S(c,"height","315"),ft(c.src,ht="https://www.youtube.com/embed/oz0a7Ur7nko?si=TRT9Fx0RM0AYx2Ty")||S(c,"src",ht),S(c,"title","YouTube video player"),S(c,"frameborder","0"),S(c,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),S(c,"referrerpolicy","strict-origin-when-cross-origin"),c.allowFullscreen=!0},m(t,i){l(t,n,i),l(t,p,i),l(t,h,i),l(t,T,i),l(t,x,i),l(t,w,i),l(t,f,i),l(t,m,i),l(t,s,i),l(t,W,i),l(t,y,i),l(t,z,i),l(t,I,i),l(t,j,i),l(t,E,i),l(t,B,i),l(t,P,i),l(t,G,i),l(t,F,i),l(t,U,i),l(t,L,i),l(t,$,i),l(t,H,i),l(t,Y,i),vt(k,t,i),l(t,J,i),l(t,A,i),l(t,K,i),l(t,O,i),l(t,Q,i),l(t,q,i),l(t,V,i),l(t,c,i),X=!0},p:et,i(t){X||(xt(k.$$.fragment,t),X=!0)},o(t){wt(k.$$.fragment,t),X=!1},d(t){t&&(e(n),e(p),e(h),e(T),e(x),e(w),e(f),e(m),e(s),e(W),e(y),e(z),e(I),e(j),e(E),e(B),e(P),e(G),e(F),e(U),e(L),e($),e(H),e(Y),e(J),e(A),e(K),e(O),e(Q),e(q),e(V),e(c)),yt(k,t)}}}function It(_){return[`#include <WiFi.h>;
#include <HTTPClient.h>;
#include <ArduinoJson.h>;
#include <esp_wifi.h>;

const char* ssid  = "WiFi Name";
const char* password = "Password";

#define LED 2

IPAddress server(); // put server ip in the parenthesis 

void setup() {
  Serial.begin(9600);
  WiFi.setTxPower(WIFI_POWER_19_5dBm);
  WiFi.mode(WIFI_AP_STA);
  esp_wifi_set_protocol(WIFI_IF_STA, WIFI_PROTOCOL_11N);   //Change the N to B or G to try those protocols
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  pinMode(LED, OUTPUT);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(5000);
  }
  Serial.println("\\nConnected to Wifi");
  Serial.println(WiFi.localIP());
}


void loop() {
  if ((WiFi.status() == WL_CONNECTED)) {
    Serial.println("Accessing Server");

    HTTPClient client;

    client.begin(" route to server ");
    int httpCode = client.GET();
    Serial.println(httpCode);
    String payload = client.getString();
    payload.trim();
    Serial.println(payload);
    if (payload == "\\"On\\"") { 
      digitalWrite(LED, HIGH);
      Serial.println("Tried to turn on");
    } else {
      digitalWrite(LED, LOW);
      Serial.println("Tried to turn off");
    }

  } else {
    Serial.println("Connection lost");
  }   
  delay(5000);
}`]}class Lt extends pt{constructor(n){super(),mt(this,n,It,Wt,dt,{})}}export{Lt as component,Ft as universal};
