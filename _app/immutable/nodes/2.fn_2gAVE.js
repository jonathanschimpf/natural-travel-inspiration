import{s as se,d as ee,n as B,r as re,c as te,o as ce,e as ie}from"../chunks/scheduler.J7dZX9xK.js";import{S as ae,i as le,e as b,s as S,t as Y,c as g,a as O,d as w,f as L,k as A,b as J,l as a,g as T,h as _,z as K,j as W,A as oe,B as ue,n as G,o as de,p as Q,r as he,v as fe,w as pe,x as ve,y as me}from"../chunks/index.UhQ6_4fn.js";import{w as ne}from"../chunks/index.Kd--DfMh.js";function _e(l){let e,s='<p class="location ask-photographer svelte-davd7v">Location Unknown — <span class="smaller-down-arrow svelte-davd7v">⬇ </span>Ask The Photographer Below</p>';return{c(){e=b("div"),e.innerHTML=s,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),A(e)!=="svelte-9wmags"&&(e.innerHTML=s),this.h()},h(){a(e,"class","unknown-location svelte-davd7v")},m(t,o){T(t,e,o)},p:B,d(t){t&&w(e)}}}function we(l){let e,s=l[0].location.name+"",t;return{c(){e=b("p"),t=Y(s),this.h()},l(o){e=g(o,"P",{class:!0});var r=O(e);t=J(r,s),r.forEach(w),this.h()},h(){a(e,"class","location svelte-davd7v")},m(o,r){T(o,e,r),_(e,t)},p(o,r){r&1&&s!==(s=o[0].location.name+"")&&W(t,s)},d(o){o&&w(e)}}}function be(l){let e,s,t,o,r,v,d,U,h,f,V="Photo by",I,p,m=l[0].user.name+"",q,C,N,D,c="on",k,i,E="Unsplash",x,n,u="Download",M,j;function X(y,P){return y[0].location.name?we:_e}let z=X(l),R=z(l);return{c(){e=b("div"),s=b("div"),t=b("img"),v=S(),d=b("div"),R.c(),U=S(),h=b("div"),f=b("span"),f.textContent=V,I=S(),p=b("a"),q=Y(m),N=S(),D=b("span"),D.textContent=c,k=S(),i=b("a"),i.textContent=E,x=S(),n=b("button"),n.textContent=u,this.h()},l(y){e=g(y,"DIV",{class:!0});var P=O(e);s=g(P,"DIV",{class:!0});var Z=O(s);t=g(Z,"IMG",{src:!0,alt:!0,class:!0}),Z.forEach(w),v=L(P),d=g(P,"DIV",{class:!0});var F=O(d);R.l(F),U=L(F),h=g(F,"DIV",{class:!0});var H=O(h);f=g(H,"SPAN",{class:!0,"data-svelte-h":!0}),A(f)!=="svelte-b69ulm"&&(f.textContent=V),I=L(H),p=g(H,"A",{class:!0,href:!0,target:!0,rel:!0});var $=O(p);q=J($,m),$.forEach(w),N=L(H),D=g(H,"SPAN",{class:!0,"data-svelte-h":!0}),A(D)!=="svelte-16j78ur"&&(D.textContent=c),k=L(H),i=g(H,"A",{class:!0,href:!0,target:!0,rel:!0,"data-svelte-h":!0}),A(i)!=="svelte-1uiziu"&&(i.textContent=E),H.forEach(w),F.forEach(w),x=L(P),n=g(P,"BUTTON",{class:!0,"data-svelte-h":!0}),A(n)!=="svelte-64za16"&&(n.textContent=u),P.forEach(w),this.h()},h(){ee(t.src,o=l[0].urls.regular)||a(t,"src",o),a(t,"alt",r=l[0].alt_description||"Unsplash Photo"),a(t,"class","svelte-davd7v"),a(s,"class","image-container svelte-davd7v"),a(f,"class","credit-photo-by svelte-davd7v"),a(p,"class","credit-links svelte-davd7v"),a(p,"href",C=l[0].user.links.html),a(p,"target","_blank"),a(p,"rel","noopener noreferrer"),a(D,"class","credit-on svelte-davd7v"),a(i,"class","credit-links svelte-davd7v"),a(i,"href","https://unsplash.com"),a(i,"target","_blank"),a(i,"rel","noopener noreferrer"),a(h,"class","caption svelte-davd7v"),a(d,"class","photo-information svelte-davd7v"),a(n,"class","download-button svelte-davd7v"),a(e,"class","photo-card svelte-davd7v")},m(y,P){T(y,e,P),_(e,s),_(s,t),_(e,v),_(e,d),R.m(d,null),_(d,U),_(d,h),_(h,f),_(h,I),_(h,p),_(p,q),_(h,N),_(h,D),_(h,k),_(h,i),_(e,x),_(e,n),M||(j=K(n,"click",l[1]),M=!0)},p(y,[P]){P&1&&!ee(t.src,o=y[0].urls.regular)&&a(t,"src",o),P&1&&r!==(r=y[0].alt_description||"Unsplash Photo")&&a(t,"alt",r),z===(z=X(y))&&R?R.p(y,P):(R.d(1),R=z(y),R&&(R.c(),R.m(d,U))),P&1&&m!==(m=y[0].user.name+"")&&W(q,m),P&1&&C!==(C=y[0].user.links.html)&&a(p,"href",C)},i:B,o:B,d(y){y&&w(e),R.d(),M=!1,j()}}}function ge(l,e,s){let{photo:t}=e,{onDownload:o}=e;function r(){if(console.log("Triggering download for photo:",t),o&&typeof o=="function"){const v=`unsplash_image_${t.id}.jpg`;console.log("Filename:",v),o(t,v)}else console.error("Download function not provided!")}return l.$$set=v=>{"photo"in v&&s(0,t=v.photo),"onDownload"in v&&s(2,o=v.onDownload)},[t,r,o]}class ke extends ae{constructor(e){super(),le(this,e,ge,be,se,{photo:0,onDownload:2})}}var Ce={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function ye(l){let e,s="Loading...";return{c(){e=b("p"),e.textContent=s,this.h()},l(t){e=g(t,"P",{class:!0,"data-svelte-h":!0}),A(e)!=="svelte-qdsr2u"&&(e.textContent=s),this.h()},h(){a(e,"class","svelte-tvcfc8")},m(t,o){T(t,e,o)},p:B,i:B,o:B,d(t){t&&w(e)}}}function Pe(l){let e,s;return e=new ke({props:{photo:l[0],onDownload:l[5]}}),{c(){fe(e.$$.fragment)},l(t){pe(e.$$.fragment,t)},m(t,o){ve(e,t,o),s=!0},p(t,o){const r={};o&1&&(r.photo=t[0]),e.$set(r)},i(t){s||(Q(e.$$.fragment,t),s=!0)},o(t){G(e.$$.fragment,t),s=!1},d(t){me(e,t)}}}function De(l){let e,s;return{c(){e=b("p"),s=Y(l[1]),this.h()},l(t){e=g(t,"P",{class:!0});var o=O(e);s=J(o,l[1]),o.forEach(w),this.h()},h(){a(e,"class","svelte-tvcfc8")},m(t,o){T(t,e,o),_(e,s)},p(t,o){o&2&&W(s,t[1])},i:B,o:B,d(t){t&&w(e)}}}function Ee(l){let e,s="Natural Travel Inspiration ⛰️",t,o,r,v,d,U="Random Natural Inspiration",h,f,V='<span class="specific-smaller-down-arrow svelte-tvcfc8">⬇ </span>Search For A More Specific Random Image Below',I,p,m,q,C,N="Search",D,c,k;const i=[De,Pe,ye],E=[];function x(n,u){return n[1]?0:n[0]?1:2}return o=x(l),r=E[o]=i[o](l),{c(){e=b("h1"),e.textContent=s,t=S(),r.c(),v=S(),d=b("button"),d.textContent=U,h=S(),f=b("p"),f.innerHTML=V,I=S(),p=b("form"),m=b("input"),q=S(),C=b("button"),C.textContent=N,this.h()},l(n){e=g(n,"H1",{class:!0,"data-svelte-h":!0}),A(e)!=="svelte-dr4slq"&&(e.textContent=s),t=L(n),r.l(n),v=L(n),d=g(n,"BUTTON",{class:!0,"data-svelte-h":!0}),A(d)!=="svelte-1ujrdmr"&&(d.textContent=U),h=L(n),f=g(n,"P",{class:!0,"data-svelte-h":!0}),A(f)!=="svelte-7jy9bw"&&(f.innerHTML=V),I=L(n),p=g(n,"FORM",{class:!0});var u=O(p);m=g(u,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),q=L(u),C=g(u,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),A(C)!=="svelte-144da9z"&&(C.textContent=N),u.forEach(w),this.h()},h(){a(e,"class","svelte-tvcfc8"),a(d,"class","svelte-tvcfc8"),a(f,"class","svelte-tvcfc8"),a(m,"type","search"),a(m,"id","search-input"),a(m,"placeholder",""),a(m,"class","svelte-tvcfc8"),a(C,"type","submit"),a(C,"class","svelte-tvcfc8"),a(p,"class","pico-form svelte-tvcfc8")},m(n,u){T(n,e,u),T(n,t,u),E[o].m(n,u),T(n,v,u),T(n,d,u),T(n,h,u),T(n,f,u),T(n,I,u),T(n,p,u),_(p,m),oe(m,l[2]),_(p,q),_(p,C),D=!0,c||(k=[K(d,"click",l[6]),K(m,"input",l[8]),K(p,"submit",ue(l[7]))],c=!0)},p(n,[u]){let M=o;o=x(n),o===M?E[o].p(n,u):(he(),G(E[M],1,1,()=>{E[M]=null}),de(),r=E[o],r?r.p(n,u):(r=E[o]=i[o](n),r.c()),Q(r,1),r.m(v.parentNode,v)),u&4&&m.value!==n[2]&&oe(m,n[2])},i(n){D||(Q(r),D=!0)},o(n){G(r),D=!1},d(n){n&&(w(e),w(t),w(v),w(d),w(h),w(f),w(I),w(p)),E[o].d(n),c=!1,re(k)}}}const Te=50;function Ue(){const l=["mountain","hike","vista","cliff","forest","river"];return l[Math.floor(Math.random()*l.length)]}function Re(l,e,s){let t,o;const r=Ce.VITE_UNSPLASH_ACCESS_KEY,v=ne(new Set);te(l,v,c=>s(9,t=c));const d=ne([]);te(l,d,c=>s(10,o=c));let U,h="",f="";const V=3600*1e3;function I(){const c=Date.now();return ie(d,o=o.filter(k=>c-k<V),o),o.length<Te}function p(){o.push(Date.now())}async function m(c){if(!I())return s(1,h="Rate limit reached. Please wait."),null;const k=c.trim(),i=k.includes(" "),E=encodeURIComponent(i?`"${k}"`:k),x=`https://api.unsplash.com/photos/random?client_id=${r}&query=${E}`;try{const n=await fetch(x);if(!n.ok)throw new Error("Error fetching photo.");return p(),await n.json()}catch{return s(1,h="Error fetching new photo."),null}}async function q(c,k){try{const i=await fetch(`${c.links.download_location}?client_id=${r}`,{method:"GET",headers:{Authorization:`Client-ID ${r}`}});if(i.ok){const x=(await i.json()).url,n=await fetch(x);if(n.ok){const u=await n.blob(),M=URL.createObjectURL(u),j=document.createElement("a");j.href=M,j.download=k,document.body.appendChild(j),j.click(),document.body.removeChild(j),URL.revokeObjectURL(M)}else throw new Error("Failed to download the image from Unsplash")}else throw new Error("Unsplash download trigger failed")}catch(i){console.error("Download error:",i)}}async function C(){let c=null;for(;!c;){const k=Ue(),i=await m(k);i&&!t.has(i.id)&&(c=i,t.add(i.id))}s(0,U=c)}async function N(){if(f.trim()){const c=await m(f);c&&!t.has(c.id)&&(s(0,U=c),t.add(c.id)),s(2,f="")}}ce(async()=>{try{const c=await m("nature");c?s(0,U=c):s(1,h="Could not load initial photo.")}catch(c){s(1,h="There was an error during the initial photo fetch."),console.error(c)}});function D(){f=this.value,s(2,f)}return[U,h,f,v,d,q,C,N,D]}class qe extends ae{constructor(e){super(),le(this,e,Re,Ee,se,{})}}export{qe as component};
