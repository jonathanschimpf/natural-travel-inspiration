import{s as st,d as tt,n as O,r as rt,c as et,o as ct,e as it}from"../chunks/scheduler.J7dZX9xK.js";import{S as lt,i as at,e as b,s as L,t as X,c as g,a as B,d as w,f as q,k as j,b as W,l,g as U,h as _,z as K,j as J,A as ot,B as ut,n as G,o as dt,p as Q,r as ht,v as ft,w as pt,x as vt,y as mt}from"../chunks/index.UhQ6_4fn.js";import{w as nt}from"../chunks/index.Kd--DfMh.js";function _t(a){let t,s='<p class="location ask-photographer svelte-davd7v">Location Unknown — <span class="smaller-down-arrow svelte-davd7v">⬇ </span>Ask The Photographer Below</p>';return{c(){t=b("div"),t.innerHTML=s,this.h()},l(e){t=g(e,"DIV",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-9wmags"&&(t.innerHTML=s),this.h()},h(){l(t,"class","unknown-location svelte-davd7v")},m(e,o){U(e,t,o)},p:O,d(e){e&&w(t)}}}function wt(a){let t,s=a[0].location.name+"",e;return{c(){t=b("p"),e=X(s),this.h()},l(o){t=g(o,"P",{class:!0});var r=B(t);e=W(r,s),r.forEach(w),this.h()},h(){l(t,"class","location svelte-davd7v")},m(o,r){U(o,t,r),_(t,e)},p(o,r){r&1&&s!==(s=o[0].location.name+"")&&J(e,s)},d(o){o&&w(t)}}}function bt(a){let t,s,e,o,r,v,d,R,h,f,z="Photo by",I,p,m=a[0].user.name+"",S,C,N,D,c="on",k,i,T="Unsplash",x,n,u="Download",M,A;function Y(y,P){return y[0].location.name?wt:_t}let V=Y(a),E=V(a);return{c(){t=b("div"),s=b("div"),e=b("img"),v=L(),d=b("div"),E.c(),R=L(),h=b("div"),f=b("span"),f.textContent=z,I=L(),p=b("a"),S=X(m),N=L(),D=b("span"),D.textContent=c,k=L(),i=b("a"),i.textContent=T,x=L(),n=b("button"),n.textContent=u,this.h()},l(y){t=g(y,"DIV",{class:!0});var P=B(t);s=g(P,"DIV",{class:!0});var Z=B(s);e=g(Z,"IMG",{src:!0,alt:!0,class:!0}),Z.forEach(w),v=q(P),d=g(P,"DIV",{class:!0});var F=B(d);E.l(F),R=q(F),h=g(F,"DIV",{class:!0});var H=B(h);f=g(H,"SPAN",{class:!0,"data-svelte-h":!0}),j(f)!=="svelte-b69ulm"&&(f.textContent=z),I=q(H),p=g(H,"A",{class:!0,href:!0,target:!0,rel:!0});var $=B(p);S=W($,m),$.forEach(w),N=q(H),D=g(H,"SPAN",{class:!0,"data-svelte-h":!0}),j(D)!=="svelte-16j78ur"&&(D.textContent=c),k=q(H),i=g(H,"A",{class:!0,href:!0,target:!0,rel:!0,"data-svelte-h":!0}),j(i)!=="svelte-1uiziu"&&(i.textContent=T),H.forEach(w),F.forEach(w),x=q(P),n=g(P,"BUTTON",{class:!0,"data-svelte-h":!0}),j(n)!=="svelte-64za16"&&(n.textContent=u),P.forEach(w),this.h()},h(){tt(e.src,o=a[0].urls.regular)||l(e,"src",o),l(e,"alt",r=a[0].alt_description||"Unsplash Photo"),l(e,"class","svelte-davd7v"),l(s,"class","image-container svelte-davd7v"),l(f,"class","credit-photo-by svelte-davd7v"),l(p,"class","credit-links svelte-davd7v"),l(p,"href",C=a[0].user.links.html),l(p,"target","_blank"),l(p,"rel","noopener noreferrer"),l(D,"class","credit-on svelte-davd7v"),l(i,"class","credit-links svelte-davd7v"),l(i,"href","https://unsplash.com"),l(i,"target","_blank"),l(i,"rel","noopener noreferrer"),l(h,"class","caption svelte-davd7v"),l(d,"class","photo-information svelte-davd7v"),l(n,"class","download-button svelte-davd7v"),l(t,"class","photo-card svelte-davd7v")},m(y,P){U(y,t,P),_(t,s),_(s,e),_(t,v),_(t,d),E.m(d,null),_(d,R),_(d,h),_(h,f),_(h,I),_(h,p),_(p,S),_(h,N),_(h,D),_(h,k),_(h,i),_(t,x),_(t,n),M||(A=K(n,"click",a[1]),M=!0)},p(y,[P]){P&1&&!tt(e.src,o=y[0].urls.regular)&&l(e,"src",o),P&1&&r!==(r=y[0].alt_description||"Unsplash Photo")&&l(e,"alt",r),V===(V=Y(y))&&E?E.p(y,P):(E.d(1),E=V(y),E&&(E.c(),E.m(d,R))),P&1&&m!==(m=y[0].user.name+"")&&J(S,m),P&1&&C!==(C=y[0].user.links.html)&&l(p,"href",C)},i:O,o:O,d(y){y&&w(t),E.d(),M=!1,A()}}}function gt(a,t,s){let{photo:e}=t,{onDownload:o}=t;function r(){if(console.log("Triggering download for photo:",e),o&&typeof o=="function"){const v=`unsplash_image_${e.id}.jpg`;console.log("Filename:",v),o(e,v)}else console.error("Download function not provided!")}return a.$$set=v=>{"photo"in v&&s(0,e=v.photo),"onDownload"in v&&s(2,o=v.onDownload)},[e,r,o]}class kt extends lt{constructor(t){super(),at(this,t,gt,bt,st,{photo:0,onDownload:2})}}function Ct(a){let t,s="Loading...";return{c(){t=b("p"),t.textContent=s,this.h()},l(e){t=g(e,"P",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-qdsr2u"&&(t.textContent=s),this.h()},h(){l(t,"class","svelte-tvcfc8")},m(e,o){U(e,t,o)},p:O,i:O,o:O,d(e){e&&w(t)}}}function yt(a){let t,s;return t=new kt({props:{photo:a[0],onDownload:a[5]}}),{c(){ft(t.$$.fragment)},l(e){pt(t.$$.fragment,e)},m(e,o){vt(t,e,o),s=!0},p(e,o){const r={};o&1&&(r.photo=e[0]),t.$set(r)},i(e){s||(Q(t.$$.fragment,e),s=!0)},o(e){G(t.$$.fragment,e),s=!1},d(e){mt(t,e)}}}function Pt(a){let t,s;return{c(){t=b("p"),s=X(a[1]),this.h()},l(e){t=g(e,"P",{class:!0});var o=B(t);s=W(o,a[1]),o.forEach(w),this.h()},h(){l(t,"class","svelte-tvcfc8")},m(e,o){U(e,t,o),_(t,s)},p(e,o){o&2&&J(s,e[1])},i:O,o:O,d(e){e&&w(t)}}}function Dt(a){let t,s="Natural Travel Inspiration ⛰️",e,o,r,v,d,R="Random Natural Inspiration",h,f,z='<span class="specific-smaller-down-arrow svelte-tvcfc8">⬇ </span>Search For A More Specific Random Image Below',I,p,m,S,C,N="Search",D,c,k;const i=[Pt,yt,Ct],T=[];function x(n,u){return n[1]?0:n[0]?1:2}return o=x(a),r=T[o]=i[o](a),{c(){t=b("h1"),t.textContent=s,e=L(),r.c(),v=L(),d=b("button"),d.textContent=R,h=L(),f=b("p"),f.innerHTML=z,I=L(),p=b("form"),m=b("input"),S=L(),C=b("button"),C.textContent=N,this.h()},l(n){t=g(n,"H1",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-dr4slq"&&(t.textContent=s),e=q(n),r.l(n),v=q(n),d=g(n,"BUTTON",{class:!0,"data-svelte-h":!0}),j(d)!=="svelte-1ujrdmr"&&(d.textContent=R),h=q(n),f=g(n,"P",{class:!0,"data-svelte-h":!0}),j(f)!=="svelte-7jy9bw"&&(f.innerHTML=z),I=q(n),p=g(n,"FORM",{class:!0});var u=B(p);m=g(u,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),S=q(u),C=g(u,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),j(C)!=="svelte-144da9z"&&(C.textContent=N),u.forEach(w),this.h()},h(){l(t,"class","svelte-tvcfc8"),l(d,"class","svelte-tvcfc8"),l(f,"class","svelte-tvcfc8"),l(m,"type","search"),l(m,"id","search-input"),l(m,"placeholder",""),l(m,"class","svelte-tvcfc8"),l(C,"type","submit"),l(C,"class","svelte-tvcfc8"),l(p,"class","pico-form svelte-tvcfc8")},m(n,u){U(n,t,u),U(n,e,u),T[o].m(n,u),U(n,v,u),U(n,d,u),U(n,h,u),U(n,f,u),U(n,I,u),U(n,p,u),_(p,m),ot(m,a[2]),_(p,S),_(p,C),D=!0,c||(k=[K(d,"click",a[6]),K(m,"input",a[8]),K(p,"submit",ut(a[7]))],c=!0)},p(n,[u]){let M=o;o=x(n),o===M?T[o].p(n,u):(ht(),G(T[M],1,1,()=>{T[M]=null}),dt(),r=T[o],r?r.p(n,u):(r=T[o]=i[o](n),r.c()),Q(r,1),r.m(v.parentNode,v)),u&4&&m.value!==n[2]&&ot(m,n[2])},i(n){D||(Q(r),D=!0)},o(n){G(r),D=!1},d(n){n&&(w(t),w(e),w(v),w(d),w(h),w(f),w(I),w(p)),T[o].d(n),c=!1,rt(k)}}}const Tt=50;function Ut(){const a=["mountain","hike","vista","cliff","forest","river"];return a[Math.floor(Math.random()*a.length)]}function Rt(a,t,s){let e,o;const r="DhbwOlEXTWXSjSPsc0mBLHepnq6RtSt6boyDK-G50lw",v=nt(new Set);et(a,v,c=>s(9,e=c));const d=nt([]);et(a,d,c=>s(10,o=c));let R,h="",f="";const z=3600*1e3;function I(){const c=Date.now();return it(d,o=o.filter(k=>c-k<z),o),o.length<Tt}function p(){o.push(Date.now())}async function m(c){if(!I())return s(1,h="Rate limit reached. Please wait."),null;const k=c.trim(),i=k.includes(" "),T=encodeURIComponent(i?`"${k}"`:k),x=`https://api.unsplash.com/photos/random?client_id=${r}&query=${T}`;try{const n=await fetch(x);if(!n.ok)throw new Error("Error fetching photo.");return p(),await n.json()}catch{return s(1,h="Error fetching new photo."),null}}async function S(c,k){try{const i=await fetch(`${c.links.download_location}?client_id=${r}`,{method:"GET",headers:{Authorization:`Client-ID ${r}`}});if(i.ok){const x=(await i.json()).url,n=await fetch(x);if(n.ok){const u=await n.blob(),M=URL.createObjectURL(u),A=document.createElement("a");A.href=M,A.download=k,document.body.appendChild(A),A.click(),document.body.removeChild(A),URL.revokeObjectURL(M)}else throw new Error("Failed to download the image from Unsplash")}else throw new Error("Unsplash download trigger failed")}catch(i){console.error("Download error:",i)}}async function C(){let c=null;for(;!c;){const k=Ut(),i=await m(k);i&&!e.has(i.id)&&(c=i,e.add(i.id))}s(0,R=c)}async function N(){if(f.trim()){const c=await m(f);c&&!e.has(c.id)&&(s(0,R=c),e.add(c.id)),s(2,f="")}}ct(async()=>{try{const c=await m("nature");c?s(0,R=c):s(1,h="Could not load initial photo.")}catch(c){s(1,h="There was an error during the initial photo fetch."),console.error(c)}});function D(){f=this.value,s(2,f)}return[R,h,f,v,d,S,C,N,D]}class It extends lt{constructor(t){super(),at(this,t,Rt,Dt,st,{})}}export{It as component};