import{s as I,n as M,c as N,f as S,u as q,g as U,h as V}from"../chunks/scheduler.J7dZX9xK.js";import{S as w,i as A,e as v,s as y,c as h,a as C,k as b,f as L,d,l as p,C as _,g as E,h as $,v as j,w as z,x as B,p as T,n as k,y as D}from"../chunks/index.UhQ6_4fn.js";import{b as c}from"../chunks/paths.HFiIr-9V.js";import{p as F}from"../chunks/stores.Sv18Foa-.js";function G(l){let t,n,a,r=`<a href="${`${c}/`}" class="svelte-1r4yu2n">Home</a>`,s,e,o=`<a href="${`${c}/about`}" class="svelte-1r4yu2n">About</a>`,g,i,H=`<a href="${`${c}/contact`}" class="svelte-1r4yu2n">Contact</a>`;return{c(){t=v("nav"),n=v("ul"),a=v("li"),a.innerHTML=r,s=y(),e=v("li"),e.innerHTML=o,g=y(),i=v("li"),i.innerHTML=H,this.h()},l(u){t=h(u,"NAV",{"aria-label":!0,class:!0});var f=C(t);n=h(f,"UL",{class:!0});var m=C(n);a=h(m,"LI",{class:!0,"data-svelte-h":!0}),b(a)!=="svelte-tomkru"&&(a.innerHTML=r),s=L(m),e=h(m,"LI",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1p7m5a4"&&(e.innerHTML=o),g=L(m),i=h(m,"LI",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-k8ih6b"&&(i.innerHTML=H),m.forEach(d),f.forEach(d),this.h()},h(){p(a,"class","svelte-1r4yu2n"),_(a,"active",l[0].url.pathname===`${c}/`),p(e,"class","svelte-1r4yu2n"),_(e,"active",l[0].url.pathname===`${c}/about`),p(i,"class","svelte-1r4yu2n"),_(i,"active",l[0].url.pathname===`${c}/contact`),p(n,"class","menu svelte-1r4yu2n"),p(t,"aria-label","Main navigation"),p(t,"class","svelte-1r4yu2n")},m(u,f){E(u,t,f),$(t,n),$(n,a),$(n,s),$(n,e),$(n,g),$(n,i)},p(u,[f]){f&1&&_(a,"active",u[0].url.pathname===`${c}/`),f&1&&_(e,"active",u[0].url.pathname===`${c}/about`),f&1&&_(i,"active",u[0].url.pathname===`${c}/contact`)},i:M,o:M,d(u){u&&d(t)}}}function J(l,t,n){let a;return N(l,F,r=>n(0,a=r)),[a]}class K extends w{constructor(t){super(),A(this,t,J,G,I,{})}}function O(l){let t,n,a;t=new K({});const r=l[1].default,s=S(r,l,l[0],null);return{c(){j(t.$$.fragment),n=y(),s&&s.c()},l(e){z(t.$$.fragment,e),n=L(e),s&&s.l(e)},m(e,o){B(t,e,o),E(e,n,o),s&&s.m(e,o),a=!0},p(e,[o]){s&&s.p&&(!a||o&1)&&q(s,r,e,e[0],a?V(r,e[0],o,null):U(e[0]),null)},i(e){a||(T(t.$$.fragment,e),T(s,e),a=!0)},o(e){k(t.$$.fragment,e),k(s,e),a=!1},d(e){e&&d(n),D(t,e),s&&s.d(e)}}}function P(l,t,n){let{$$slots:a={},$$scope:r}=t;return l.$$set=s=>{"$$scope"in s&&n(0,r=s.$$scope)},[r,a]}class Y extends w{constructor(t){super(),A(this,t,P,O,I,{})}}export{Y as component};
