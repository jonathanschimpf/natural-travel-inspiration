import{s as le,d as oe,n as O,r as ce,c as ne,o as ue,e as de}from"../chunks/scheduler.aRr4IY4D.js";import{S as re,i as ie,e as b,s as L,t as G,c as g,a as N,d as v,f as I,k as x,b as Q,l,g as U,h as m,z as K,j as Y,A as se,B as he,n as W,o as fe,p as J,r as pe,v as me,w as ve,x as _e,y as we}from"../chunks/index.c-bVlinL.js";import{w as ae}from"../chunks/index.CiRpDZXj.js";function be(a){let e,s='<p class="location ask-photographer svelte-davd7v">Location Unknown — <span class="smaller-down-arrow svelte-davd7v">⬇ </span>Ask The Photographer Below</p>';return{c(){e=b("div"),e.innerHTML=s,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-9wmags"&&(e.innerHTML=s),this.h()},h(){l(e,"class","unknown-location svelte-davd7v")},m(t,o){U(t,e,o)},p:O,d(t){t&&v(e)}}}function ge(a){let e,s=a[0].location.name+"",t;return{c(){e=b("p"),t=G(s),this.h()},l(o){e=g(o,"P",{class:!0});var r=N(e);t=Q(r,s),r.forEach(v),this.h()},h(){l(e,"class","location svelte-davd7v")},m(o,r){U(o,e,r),m(e,t)},p(o,r){r&1&&s!==(s=o[0].location.name+"")&&Y(t,s)},d(o){o&&v(e)}}}function ke(a){let e,s,t,o,r,_,d,E,h,f,V="Photo by",S,p,w=a[0].user.name+"",q,C,A,T,i="on",k,u,y,M,n,c="Download",j,H;function Z(P,D){return P[0].location.name?ge:be}let z=Z(a),R=z(a);return{c(){e=b("div"),s=b("div"),t=b("img"),_=L(),d=b("div"),R.c(),E=L(),h=b("div"),f=b("span"),f.textContent=V,S=L(),p=b("a"),q=G(w),A=L(),T=b("span"),T.textContent=i,k=L(),u=b("a"),y=G("Unsplash"),M=L(),n=b("button"),n.textContent=c,this.h()},l(P){e=g(P,"DIV",{class:!0});var D=N(e);s=g(D,"DIV",{class:!0});var $=N(s);t=g($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(v),_=I(D),d=g(D,"DIV",{class:!0});var F=N(d);R.l(F),E=I(F),h=g(F,"DIV",{class:!0});var B=N(h);f=g(B,"SPAN",{class:!0,"data-svelte-h":!0}),x(f)!=="svelte-b69ulm"&&(f.textContent=V),S=I(B),p=g(B,"A",{class:!0,href:!0,target:!0,rel:!0});var ee=N(p);q=Q(ee,w),ee.forEach(v),A=I(B),T=g(B,"SPAN",{class:!0,"data-svelte-h":!0}),x(T)!=="svelte-16j78ur"&&(T.textContent=i),k=I(B),u=g(B,"A",{class:!0,href:!0,target:!0,rel:!0});var te=N(u);y=Q(te,"Unsplash"),te.forEach(v),B.forEach(v),F.forEach(v),M=I(D),n=g(D,"BUTTON",{class:!0,"data-svelte-h":!0}),x(n)!=="svelte-64za16"&&(n.textContent=c),D.forEach(v),this.h()},h(){oe(t.src,o=a[0].urls.regular)||l(t,"src",o),l(t,"alt",r=a[0].alt_description||"Unsplash Photo"),l(t,"class","svelte-davd7v"),l(s,"class","image-container svelte-davd7v"),l(f,"class","credit-photo-by svelte-davd7v"),l(p,"class","credit-links svelte-davd7v"),l(p,"href",C=X(a[0].user.links.html)),l(p,"target","_blank"),l(p,"rel","noopener noreferrer"),l(T,"class","credit-on svelte-davd7v"),l(u,"class","credit-links svelte-davd7v"),l(u,"href",X("https://unsplash.com")),l(u,"target","_blank"),l(u,"rel","noopener noreferrer"),l(h,"class","caption svelte-davd7v"),l(d,"class","photo-information svelte-davd7v"),l(n,"class","download-button svelte-davd7v"),l(e,"class","photo-card svelte-davd7v")},m(P,D){U(P,e,D),m(e,s),m(s,t),m(e,_),m(e,d),R.m(d,null),m(d,E),m(d,h),m(h,f),m(h,S),m(h,p),m(p,q),m(h,A),m(h,T),m(h,k),m(h,u),m(u,y),m(e,M),m(e,n),j||(H=K(n,"click",a[1]),j=!0)},p(P,[D]){D&1&&!oe(t.src,o=P[0].urls.regular)&&l(t,"src",o),D&1&&r!==(r=P[0].alt_description||"Unsplash Photo")&&l(t,"alt",r),z===(z=Z(P))&&R?R.p(P,D):(R.d(1),R=z(P),R&&(R.c(),R.m(d,E))),D&1&&w!==(w=P[0].user.name+"")&&Y(q,w),D&1&&C!==(C=X(P[0].user.links.html))&&l(p,"href",C)},i:O,o:O,d(P){P&&v(e),R.d(),j=!1,H()}}}const Ce="Natural Travel Inspiration",ye="referral";function X(a){return`${a}?utm_source=${Ce}&utm_medium=${ye}`}function Pe(a,e,s){let{photo:t}=e,{onDownload:o}=e;function r(){if(console.log("Triggering download for photo:",t),o&&typeof o=="function"){const _=`unsplash_image_${t.id}.jpg`;console.log("Filename:",_),o(t,_)}else console.error("Download function not provided!")}return a.$$set=_=>{"photo"in _&&s(0,t=_.photo),"onDownload"in _&&s(2,o=_.onDownload)},[t,r,o]}class De extends re{constructor(e){super(),ie(this,e,Pe,ke,le,{photo:0,onDownload:2})}}function Te(a){let e,s="Loading...";return{c(){e=b("p"),e.textContent=s,this.h()},l(t){e=g(t,"P",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-qdsr2u"&&(e.textContent=s),this.h()},h(){l(e,"class","svelte-10wh568")},m(t,o){U(t,e,o)},p:O,i:O,o:O,d(t){t&&v(e)}}}function Ue(a){let e,s;return e=new De({props:{photo:a[0],onDownload:a[5]}}),{c(){me(e.$$.fragment)},l(t){ve(e.$$.fragment,t)},m(t,o){_e(e,t,o),s=!0},p(t,o){const r={};o&1&&(r.photo=t[0]),e.$set(r)},i(t){s||(J(e.$$.fragment,t),s=!0)},o(t){W(e.$$.fragment,t),s=!1},d(t){we(e,t)}}}function Ee(a){let e,s;return{c(){e=b("p"),s=G(a[1]),this.h()},l(t){e=g(t,"P",{class:!0});var o=N(e);s=Q(o,a[1]),o.forEach(v),this.h()},h(){l(e,"class","svelte-10wh568")},m(t,o){U(t,e,o),m(e,s)},p(t,o){o&2&&Y(s,t[1])},i:O,o:O,d(t){t&&v(e)}}}function Re(a){let e,s="Natural Travel Inspiration ⛰️",t,o,r,_,d,E="Random Natural Inspiration",h,f,V='<span class="specific-smaller-down-arrow svelte-10wh568">⬇ </span>Search For A More Specific Random Image Below',S,p,w,q,C,A="Search",T,i,k;const u=[Ee,Ue,Te],y=[];function M(n,c){return n[1]?0:n[0]?1:2}return o=M(a),r=y[o]=u[o](a),{c(){e=b("h1"),e.textContent=s,t=L(),r.c(),_=L(),d=b("button"),d.textContent=E,h=L(),f=b("p"),f.innerHTML=V,S=L(),p=b("form"),w=b("input"),q=L(),C=b("button"),C.textContent=A,this.h()},l(n){e=g(n,"H1",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-dr4slq"&&(e.textContent=s),t=I(n),r.l(n),_=I(n),d=g(n,"BUTTON",{class:!0,"data-svelte-h":!0}),x(d)!=="svelte-1ujrdmr"&&(d.textContent=E),h=I(n),f=g(n,"P",{class:!0,"data-svelte-h":!0}),x(f)!=="svelte-7jy9bw"&&(f.innerHTML=V),S=I(n),p=g(n,"FORM",{class:!0});var c=N(p);w=g(c,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),q=I(c),C=g(c,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),x(C)!=="svelte-144da9z"&&(C.textContent=A),c.forEach(v),this.h()},h(){l(e,"class","svelte-10wh568"),l(d,"class","svelte-10wh568"),l(f,"class","svelte-10wh568"),l(w,"type","search"),l(w,"id","search-input"),l(w,"placeholder",""),l(w,"class","svelte-10wh568"),l(C,"type","submit"),l(C,"class","svelte-10wh568"),l(p,"class","pico-form svelte-10wh568")},m(n,c){U(n,e,c),U(n,t,c),y[o].m(n,c),U(n,_,c),U(n,d,c),U(n,h,c),U(n,f,c),U(n,S,c),U(n,p,c),m(p,w),se(w,a[2]),m(p,q),m(p,C),T=!0,i||(k=[K(d,"click",a[6]),K(w,"input",a[8]),K(p,"submit",he(a[7]))],i=!0)},p(n,[c]){let j=o;o=M(n),o===j?y[o].p(n,c):(pe(),W(y[j],1,1,()=>{y[j]=null}),fe(),r=y[o],r?r.p(n,c):(r=y[o]=u[o](n),r.c()),J(r,1),r.m(_.parentNode,_)),c&4&&w.value!==n[2]&&se(w,n[2])},i(n){T||(J(r),T=!0)},o(n){W(r),T=!1},d(n){n&&(v(e),v(t),v(_),v(d),v(h),v(f),v(S),v(p)),y[o].d(n),i=!1,ce(k)}}}const Le=50;function Ie(){const a=["mountain","hike","vista","cliff","forest","river"];return a[Math.floor(Math.random()*a.length)]}function Se(a,e,s){let t,o;const r="DhbwOlEXTWXSjSPsc0mBLHepnq6RtSt6boyDK-G50lw",_=ae(new Set);ne(a,_,i=>s(9,t=i));const d=ae([]);ne(a,d,i=>s(10,o=i));let E,h="",f="";const V=3600*1e3;function S(){const i=Date.now();return de(d,o=o.filter(k=>i-k<V),o),o.length<Le}function p(){o.push(Date.now())}async function w(i){if(!S())return s(1,h="Rate limit reached. Please wait."),null;const k=i.trim(),u=k.includes(" "),y=encodeURIComponent(u?`"${k}"`:k),M=`https://api.unsplash.com/photos/random?client_id=${r}&query=${y}`;try{const n=await fetch(M);if(!n.ok)throw new Error("Error fetching photo.");return p(),await n.json()}catch{return s(1,h="Error fetching new photo."),null}}async function q(i,k){try{const u=await fetch(`${i.links.download_location}?client_id=${r}`,{method:"GET",headers:{Authorization:`Client-ID ${r}`}});if(u.ok){const M=(await u.json()).url,n=await fetch(M);if(n.ok){const c=await n.blob(),j=URL.createObjectURL(c),H=document.createElement("a");H.href=j,H.download=k,document.body.appendChild(H),H.click(),document.body.removeChild(H),URL.revokeObjectURL(j)}else throw new Error("Failed to download the image from Unsplash")}else throw new Error("Unsplash download trigger failed")}catch(u){console.error("Download error:",u)}}async function C(){let i=null;for(;!i;){const k=Ie(),u=await w(k);u&&!t.has(u.id)&&(i=u,t.add(u.id))}s(0,E=i)}async function A(){if(f.trim()){const i=await w(f);i&&!t.has(i.id)&&(s(0,E=i),t.add(i.id)),s(2,f="")}}ue(async()=>{try{const i=await w("nature");i?s(0,E=i):s(1,h="Could not load initial photo.")}catch(i){s(1,h="There was an error during the initial photo fetch."),console.error(i)}});function T(){f=this.value,s(2,f)}return[E,h,f,_,d,q,C,A,T]}class Ne extends re{constructor(e){super(),ie(this,e,Se,Re,le,{})}}export{Ne as component};