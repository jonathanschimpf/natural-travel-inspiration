import{s as y,n as T,c as E,f as N,u as S,g as z,h as D}from"../chunks/scheduler.xP9QEsb2.js";import{S as k,i as w,e as v,s as L,c as h,a as C,k as b,f as M,d,l as p,D as _,g as A,h as $,w as U,x as V,y as j,q as I,o as q,z as B}from"../chunks/index.DQMJZU2g.js";import{b as c}from"../chunks/paths.B9m2imvv.js";import{p as F}from"../chunks/stores.w_IFoVrW.js";function G(l){let t,n,a,r=`<a href="${`${c}/`}" class="svelte-9mu8a">+Inspiration</a>`,s,e,i=`<a href="${`${c}/about`}" class="svelte-9mu8a">About</a>`,g,o,H=`<a href="${`${c}/contact`}" class="svelte-9mu8a">Contact</a>`;return{c(){t=v("nav"),n=v("ul"),a=v("li"),a.innerHTML=r,s=L(),e=v("li"),e.innerHTML=i,g=L(),o=v("li"),o.innerHTML=H,this.h()},l(u){t=h(u,"NAV",{"aria-label":!0,class:!0});var m=C(t);n=h(m,"UL",{class:!0});var f=C(n);a=h(f,"LI",{class:!0,"data-svelte-h":!0}),b(a)!=="svelte-li74aq"&&(a.innerHTML=r),s=M(f),e=h(f,"LI",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1p7m5a4"&&(e.innerHTML=i),g=M(f),o=h(f,"LI",{class:!0,"data-svelte-h":!0}),b(o)!=="svelte-k8ih6b"&&(o.innerHTML=H),f.forEach(d),m.forEach(d),this.h()},h(){p(a,"class","svelte-9mu8a"),_(a,"active",l[0].url.pathname===`${c}/`),p(e,"class","svelte-9mu8a"),_(e,"active",l[0].url.pathname===`${c}/about`),p(o,"class","svelte-9mu8a"),_(o,"active",l[0].url.pathname===`${c}/contact`),p(n,"class","menu svelte-9mu8a"),p(t,"aria-label","Main navigation"),p(t,"class","svelte-9mu8a")},m(u,m){A(u,t,m),$(t,n),$(n,a),$(n,s),$(n,e),$(n,g),$(n,o)},p(u,[m]){m&1&&_(a,"active",u[0].url.pathname===`${c}/`),m&1&&_(e,"active",u[0].url.pathname===`${c}/about`),m&1&&_(o,"active",u[0].url.pathname===`${c}/contact`)},i:T,o:T,d(u){u&&d(t)}}}function J(l,t,n){let a;return E(l,F,r=>n(0,a=r)),[a]}class K extends k{constructor(t){super(),w(this,t,J,G,y,{})}}function O(l){let t,n,a;t=new K({});const r=l[1].default,s=N(r,l,l[0],null);return{c(){U(t.$$.fragment),n=L(),s&&s.c()},l(e){V(t.$$.fragment,e),n=M(e),s&&s.l(e)},m(e,i){j(t,e,i),A(e,n,i),s&&s.m(e,i),a=!0},p(e,[i]){s&&s.p&&(!a||i&1)&&S(s,r,e,e[0],a?D(r,e[0],i,null):z(e[0]),null)},i(e){a||(I(t.$$.fragment,e),I(s,e),a=!0)},o(e){q(t.$$.fragment,e),q(s,e),a=!1},d(e){e&&d(n),B(t,e),s&&s.d(e)}}}function P(l,t,n){let{$$slots:a={},$$scope:r}=t;return l.$$set=s=>{"$$scope"in s&&n(0,r=s.$$scope)},[r,a]}class Y extends k{constructor(t){super(),w(this,t,P,O,y,{})}}export{Y as component};
