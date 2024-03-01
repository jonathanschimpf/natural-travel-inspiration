import{r as $,s as me,n as N,a as ae,b as ge,e as we,c as be,o as ye}from"../chunks/scheduler.xP9QEsb2.js";import{q as G,S as ke,i as ve,e as b,c as y,a as S,d as w,l as h,g as P,h as v,n as Z,s as Y,t as B,f as K,k as q,b as J,B as z,j as ee,m as Me,o as X,p as Ie,u as Ee,w as Qe,x as Ue,y as Re,z as Te}from"../chunks/index.B4ohFuCl.js";import{f as De}from"../chunks/index.BQMALu5r.js";import{w as Ce}from"../chunks/index.Bo7oGp4d.js";function re(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function Ae(l,e){l.d(1),e.delete(l.key)}function Pe(l,e,n,o,t,a,s,r,f,_,g,d){let k=l.length,Q=a.length,c=k;const p={};for(;c--;)p[l[c].key]=c;const i=[],u=new Map,M=new Map,R=[];for(c=Q;c--;){const m=d(t,a,c),T=n(m);let D=s.get(T);D?o&&R.push(()=>D.p(m,e)):(D=_(T,m),D.c()),u.set(T,i[c]=D),T in p&&M.set(T,Math.abs(c-p[T]))}const C=new Set,j=new Set;function A(m){G(m,1),m.m(r,g),s.set(m.key,m),g=m.first,Q--}for(;k&&Q;){const m=i[Q-1],T=l[k-1],D=m.key,U=T.key;m===T?(g=m.first,k--,Q--):u.has(U)?!s.has(D)||C.has(D)?A(m):j.has(U)?k--:M.get(D)>M.get(U)?(j.add(D),A(m)):(C.add(U),k--):(f(T,s),k--)}for(;k--;){const m=l[k];u.has(m.key)||f(m,s)}for(;Q;)A(i[Q-1]);return $(R),i}function ie(l,e,n){const o=l.slice();return o[8]=e[n].id,o[9]=e[n].urls,o[10]=e[n].alt_description,o[11]=e[n].user,o}function ce(l){let e=[],n=new Map,o,t=re([l[0]]);const a=s=>s[3];for(let s=0;s<1;s+=1){let r=ie(l,t,s),f=a(r);n.set(f,e[s]=fe(f,r))}return{c(){for(let s=0;s<1;s+=1)e[s].c();o=Z()},l(s){for(let r=0;r<1;r+=1)e[r].l(s);o=Z()},m(s,r){for(let f=0;f<1;f+=1)e[f]&&e[f].m(s,r);P(s,o,r)},p(s,r){r&63&&(t=re([s[0]]),e=Pe(e,r,a,1,s,t,n,o.parentNode,Ae,fe,o,ie))},d(s){s&&w(o);for(let r=0;r<1;r+=1)e[r].d(s)}}}function ue(l){let e,n=l[0].location.name+"",o;return{c(){e=b("p"),o=B(n),this.h()},l(t){e=y(t,"P",{class:!0});var a=S(e);o=J(a,n),a.forEach(w),this.h()},h(){h(e,"class","location svelte-kixro1")},m(t,a){P(t,e,a),v(e,o)},p(t,a){a&1&&n!==(n=t[0].location.name+"")&&ee(o,n)},d(t){t&&w(e)}}}function fe(l,e){let n,o,t,a,s,r,f,_,g,d,k,Q="Photo by",c,p,i=e[11].name+"",u,M,R,C,j="on",A,m,T,D,U,te="Download",H,F,x,oe,I=e[0].location&&e[0].location.name&&ue(e);return{key:l,first:null,c(){n=b("div"),o=b("div"),t=b("img"),f=Y(),_=b("div"),I&&I.c(),g=Y(),d=b("div"),k=b("span"),k.textContent=Q,c=Y(),p=b("a"),u=B(i),R=Y(),C=b("span"),C.textContent=j,A=Y(),m=b("a"),T=B("Unsplash"),D=Y(),U=b("button"),U.textContent=te,H=Y(),this.h()},l(V){n=y(V,"DIV",{class:!0});var E=S(n);o=y(E,"DIV",{class:!0});var se=S(o);t=y(se,"IMG",{src:!0,alt:!0,class:!0}),se.forEach(w),f=K(E),_=y(E,"DIV",{class:!0});var W=S(_);I&&I.l(W),g=K(W),d=y(W,"DIV",{class:!0});var L=S(d);k=y(L,"SPAN",{class:!0,"data-svelte-h":!0}),q(k)!=="svelte-b69ulm"&&(k.textContent=Q),c=K(L),p=y(L,"A",{class:!0,href:!0,target:!0,rel:!0});var ne=S(p);u=J(ne,i),ne.forEach(w),R=K(L),C=y(L,"SPAN",{class:!0,"data-svelte-h":!0}),q(C)!=="svelte-16j78ur"&&(C.textContent=j),A=K(L),m=y(L,"A",{class:!0,href:!0,target:!0,rel:!0});var le=S(m);T=J(le,"Unsplash"),le.forEach(w),L.forEach(w),W.forEach(w),D=K(E),U=y(E,"BUTTON",{class:!0,"data-svelte-h":!0}),q(U)!=="svelte-1hohs58"&&(U.textContent=te),H=K(E),E.forEach(w),this.h()},h(){ae(t.src,a=e[9].regular)||h(t,"src",a),h(t,"alt",s=e[10]||"Unsplash Photo"),h(t,"class","svelte-kixro1"),h(o,"class","image-container svelte-kixro1"),h(k,"class","credit-photo-by svelte-kixro1"),h(p,"class","credit-links svelte-kixro1"),h(p,"href",M=O(e[11].links.html)),h(p,"target","_blank"),h(p,"rel","noopener noreferrer"),h(C,"class","credit-on svelte-kixro1"),h(m,"class","credit-links svelte-kixro1"),h(m,"href",O("https://unsplash.com")),h(m,"target","_blank"),h(m,"rel","noopener noreferrer"),h(d,"class","caption svelte-kixro1"),h(_,"class","photo-information svelte-kixro1"),h(U,"class","download-button svelte-kixro1"),h(n,"class",F="photo-card "+(e[1]?"loaded":"")+" svelte-kixro1"),this.first=n},m(V,E){P(V,n,E),v(n,o),v(o,t),v(n,f),v(n,_),I&&I.m(_,null),v(_,g),v(_,d),v(d,k),v(d,c),v(d,p),v(p,u),v(d,R),v(d,C),v(d,A),v(d,m),v(m,T),v(n,D),v(n,U),e[7](U),v(n,H),x||(oe=[z(U,"click",e[4]),z(U,"mouseup",e[5])],x=!0)},p(V,E){e=V,E&1&&!ae(t.src,a=e[9].regular)&&h(t,"src",a),E&1&&s!==(s=e[10]||"Unsplash Photo")&&h(t,"alt",s),e[0].location&&e[0].location.name?I?I.p(e,E):(I=ue(e),I.c(),I.m(_,g)):I&&(I.d(1),I=null),E&1&&i!==(i=e[11].name+"")&&ee(u,i),E&1&&M!==(M=O(e[11].links.html))&&h(p,"href",M),E&2&&F!==(F="photo-card "+(e[1]?"loaded":"")+" svelte-kixro1")&&h(n,"class",F)},i(V){V&&(r||ge(()=>{r=Me(t,De,{delay:500,duration:500}),r.start()}))},o:N,d(V){V&&w(n),I&&I.d(),e[7](null),x=!1,$(oe)}}}function Se(l){let e,n,o,t=l[0]&&l[0].urls&&l[0].urls.regular&&ce(l);return{c(){e=b("div"),n=b("div"),t&&t.c(),this.h()},l(a){e=y(a,"DIV",{class:!0});var s=S(e);n=y(s,"DIV",{class:!0});var r=S(n);t&&t.l(r),r.forEach(w),s.forEach(w),this.h()},h(){h(n,"class","image-container svelte-kixro1"),h(e,"class",o="photo-card "+(l[1]?"loaded":"")+" svelte-kixro1")},m(a,s){P(a,e,s),v(e,n),t&&t.m(n,null)},p(a,[s]){a[0]&&a[0].urls&&a[0].urls.regular?t?t.p(a,s):(t=ce(a),t.c(),t.m(n,null)):t&&(t.d(1),t=null),s&2&&o!==(o="photo-card "+(a[1]?"loaded":"")+" svelte-kixro1")&&h(e,"class",o)},i:N,o:N,d(a){a&&w(e),t&&t.d()}}}const Ye="Natural Travel Inspiration",Ke="referral";function O(l){return`${l}?utm_source=${Ye}&utm_medium=${Ke}`}function Ve(l,e,n){let{photo:o}=e,{onDownload:t}=e,a=!1;function s(){if(console.log("Triggering download for photo:",o),t&&typeof t=="function"){const d=`unsplash_image_${o.id}.jpg`;console.log("Filename:",d),t(o,d)}else console.error("Download function not provided!")}let r;function f(){r&&r.blur()}let _=0;function g(d){we[d?"unshift":"push"](()=>{r=d,n(2,r)})}return l.$$set=d=>{"photo"in d&&n(0,o=d.photo),"onDownload"in d&&n(6,t=d.onDownload)},l.$$.update=()=>{l.$$.dirty&1&&o&&o.urls&&o.urls.regular&&n(1,a=!0),l.$$.dirty&1&&o&&o.urls&&o.urls.regular&&(n(1,a=!0),n(3,_=o.id))},[o,a,r,_,s,f,t,g]}class je extends ke{constructor(e){super(),ve(this,e,Ve,Se,me,{photo:0,onDownload:6})}}const de=new Set(["UOkZT4JT8fw","parczv2B-ZM","xRr9Lz3xfYs","uYoVf9I6ANI","mmzuZhihp30","jqgsM3B9Fpo","tMzCrBkM99Y","IicyiaPYGGI","jAjvbh7vw9g","6c5ZTHnUUzA","OdBFUurPHjo","PSFfI7vbS3c","9JxubXPaidg","uNliRqlmBdg","jnJ89cuXMcs","F6Da4r2x5to","z8ct_Q3oCqM","RwHv7LgeC7s","2JwQoi-RBiI","3W9buupDI2k","10TSKDfW8X8","TkrRvwxjb_8","fsJB3KT2rj8","bBiuSdck8tU","h6zMgghzZr0","7AcMUSYRZpU","jin4W1HqgL4","El-egS_h_N4","MMJx78V7xS8","h5eLbyHzAcE","ITfHPUy0x9k","s0vFLLZzOrs","v4e3JI7DDHI","vngzm4P2BTs","koy6FlCCy5s","sx6n_hgSmOc","9Z1KRIfpBTM","JP23z_-dA74","jt6QxZwSOCQ","8mCMQSq41gQ","Dqzsti6Fonc","KhsuK_wq-o4","rCFAY4WrbUY","4rDCa5hBlCs","hPxKmyCZ-Bs","KMYCSLP8uiU","jWv1ILisuSc","OOE4xAnBhKo","rleYWWVY4Pc","GVnUVP8cs1o","T8-kfC8W4b8","yjEt-n0qUl8","LNYdZutqsi0","d2aXuZD2kUc","OS0D-aJ54CY","6ArTTluciuA","6loxuv3aXkg","XxvXRmsH860","qPPWNeFVLFQ","pmhoQj3Ce1E","6-C0VRsagUw","8SXaMMWCTGc","h5wvMCdOV3w","CoIqQVwEGY0","I3jSS2YfmcU","0uO6qhd6Bi8","gofWd3XkKo0","NliTYm_jD5o","zPCj7SKoub8","gvb84QdErNs","-N_UwPdUs7E","choc7LYd98I","Tw_rTjWMuGo","WgT_B4mN0BA","yZNGVL_fWj8","pT8mKX61STI","NjT4O7WYmwk","wQImoykAwGs","cS6YoRIAK2w","_EMkxLdko9k","vzVGHfxZIZ8","F5zoQfoWtbM","U86FnrpRR0k","fG4PYBDmAkI","9Gs0qk9Z3WU","h3ki3bbJWk0","xjhgZCuvg3k","fMIsAL72P3U","5-jtsfuaLBw","AnKC9klnyKk","Ee0894MAyok","gyIRjKPXupE","jFCViYFYcus","eOpewngf68w","Rfflri94rs8","Lh2qwkppkf8","RdouF_LXaYI","049M_crau5k","IVbFRSEYGuA","sNVE_h_7naU","7KLa-xLbSXA","poXhq_-eANA","utoPXPPr5zc","jCL98LGaeoE","rFn64K0YQrI","vpkCTrnV2eE","JiphyElpixM","ciHYaPb8lUA","c1Jp-fo53U8","WK4lhYGRIzw","JWa5jZ1LkJY","MPKFmy_Xc_A","NEqEC7qa9FM","vUNQaTtZeOo","c4cWawGBFv8","rckx2mE9rOw","cCthPLHmrzI","dhw3LSuWyks","3U3Qegatt2o","QsWG0kjPQRY","42MaenKbPe0","9K9ipjhDdks","sFLVTqNzG2I","7ne3hNnojvU","j6dqEl13is4","hpTH5b6mo2s","19SC2oaVZW0","u4fWwlBhHJ8","ugnrXk1129g","Yl9YFBtZFcQ","SaWeuWtLQqE","NP_GHS5Bb-s","yu2Ay7LQmnY","_ReQ6GSqSaM","wxZBV8GiPlc","1OtUkD_8svc","PXXtq6bp6cs","qN8AMtHZ2nY","J2xHOsMNIn0","SDoMyyylpnc","SDoMyyylpnc","3Kv48NS4WUU","3Ltn2aWVNcM","vgazHbc0XWg","8UVZHt8AUoQ","Ed_DchxFfrU","uilVSfUGnWk","dSxAggoqPAk","F_moKY91WYc","2ZjJ7T6EeOg","mLXmJb3In8Q","T69h1_YfR-w","kIR55P1eXJI","mFbrMEVKCkc","UFnHt94r91w","pt7QzB4ZLWw","6xh7H5tWj9c","bnUXhIyf0i0","WJkc3xZjSXw","5S6_c_yCIwE","d4feocYfzAM","nTRDnDdDYk8","Rr3B0LH7W3k","7NBO76G5JsE","0D8_tYHIy0o","lsGWd4KgCD4","JiuVoQd-ZLk","qzgN45hseN0","ZeNABWS-k4Q","Dm-qxdynoEc","__0Yg6-lvP8","qd-dvtbS45Q","4ooRozrZdLM","wKjIeK4QSnk","4QWR5geRC9I","PjjMG6VyHs4","TMNyU2MFTGw","lIat5Z-N3JA","QMnYC8WVFM8","SBiVq9eWEtQ","uaO9cd5BQPc","sp-p7uuT0tw","sp-p7uuT0tw","Yh6K2eTr_FY","GzcI_rMNclY","CtxRK04XMKs","mppuJZUzhI0","AqXqL_V9qpM","6csuZQ9oZcI","TRhGEGdw-YY","NQSWvyVRIJk","FMWXjhIkmO0","VHUbeZMH6Yg","uJnUhGtI_Pk","hry9juw-x5k","50bzI1F6urA","J2jtcRbiL-4","zK049OFP4uI","enXOyujvTXQ","z_HDrTQxNEI","z_HDrTQxNEI","zXVk8mNl9M0","a0nbRUHimZw","a0nbRUHimZw","S9miGKjxmb4","uyNMxCFYMvo","gzMvo6cR6J0","b4l3Mn4pRKk","D4TooCIEyF4","2JuKK2ticlk","buF62ewDLcQ","Fz77XHwFYg0","WVEBqXRGcy8","xY_6ZENqcfo","TBl1-EKYFjs","KYTT8L5JLDs","XAmgFP_GvVA","5VDFTgpwV2g","whDrFMucHkc","G8rRItjrwkA","HkNKkRoiGk8","igX2deuD9lc","xg8z_KhSorQ","5G2G59V6IXg","LMq1gYdygxo","Qdi8UvGd1Ww","-BZc9Ee1qo0","RkBTPqPEGDo","RhjVGxILcqE","UnKqaCtnHwE","9YubwxAIpw0","Kvc5x3Bvfd4","jwTvCQQJXh0","0Kyp7uO-3RQ","3okHTqD9yUA","i9Q9bc-WgfE","a47qPRbHx7g","3LwMyv3FiUE","KRAazAqquaQ","OsMWWAL0saQ","a2zdgkDzFo8","9pvTSsNV2T4","hfLsVDvnKwY","-KdfxdUEVv0","XxDJ6bgq7Pw","P3DxOe-OJGA","-IZ2sgQKIhM","uzwTVzXqZcg","HgQOh4s_M-U","ap6baZcbAho","T7s_TnKO-dk","FO7bKvgETgQ","NWleDEFmYDg","gcOMSDzWvR8","Ke-ENe3ByiQ","4-KqFyHKRdo","oj8XzDDpK40","e6f8IaRQY7M","hnw3Al47-KE","ipH70OUZDrk","1awcLzy32Dg","FAn-NWH8Bzw","d6kSvT2xZQo","DuiPYwz3CBA","gd3t5Dtbwkw","JoH60FhTp50","SvdVrpLiocU","gMqBIvJfP0E","htNpsGOMQL8","2WBVLTKNo1k","hom1seYgTQQ","cfKC0UOZHJo","eGD69I3ODC4","02a4DSekRVg","G_1V58E0TyM","5P91SF0zNsI","NrN5Rvl89Lo","cOMpDHi3fsM","8jQFXXSTvbw","tSZZ2NBj1eE","-rSka4Bw-EU","TsMXK2W9hV0","J4aLKW3T0FE","ntA_kfsJQjw","REKXJ7JhwiI","SqBK8g4g_ug","zAQoZwidDbs","Jzery_MafWQ","H8vhhepiiaU","A0P3qTZcjJw","RaEFRWLy9ME","KT3WlrL_bsg","RtTxZBbJe6A","baTtO8UODDo","3MNzGlQM7qs","yrBbY1ljUYc","zqIOvV-D3JQ","IbLZjKcelpM","RsRpw1rvkJs","sTVYoJHXKv8","hji142JdgRw","iiLQN9P6Irc","ZRdSZeVKBaE","Ceuh97A6OYM","HG5QX-GXV5A","DD1fSz2HF1s","AHWrFYvRBuk","8Ogfqvw15Rg","8bsvwFWVcvE","VS1uBhwf8a4","tNDvFkxkBHo","ofuctQNpnk4","C7jBZEGciCU","6YmzwamGzCg","Sl1GrFYrQ1E","IfTKequW2Mk","ln5drpv_ImI","JjYhagSxnOU","KMn4VEeEPR8","jeIRRRu6dbE","L_uyuJzJAxc","qb14VmiCjBA","uOtPQtKI_A8","HDd-NQ_AMNQ","cbPh8sfpP70","50HS3AzJsvQ","iuqmGmst5Po","jp0Qlyv389g","1rQs3661lq4","lsoogGC_5dg","VyqvPLMSZrc","kGSapVfg8Kw","C6gxT-N56ns","eCqA-col90Q","4igCpD-Lnfg","1sim8ojvCbE","8H5kNkYmJYQ","4r_tHA3gsUY","Kl8S7XbWbzM","_3DI_vx2ygg","mBQIfKlvowM","b_wN4QemTzU","BXasVMRGsuo","odxB5oIG_iA","pBgnT4KH8d4","s7fVceSaiiw","EwKXn5CapA4","BvijLrkWcHA","KHrwWI5rdo8","S_IV6KqGeso","PmPZkRQYTyI","zhqD0tw1peA","jUCQRQeRs3k","dGmUuyZo_c4","qWJcROZIeec","2tvkoVK8prc","pRRSpbCFUOM","TkBhnAUm74M","VV2_XVEjg5w","oWRVjFQIwAY","3nQ1BT_rC3U","m6FGop1tliQ","upldea-3F4w","bIybKPVJW8M","2cwEJy-0hfw","lX9NstRMiDU","741MfdrVr_I","cf2QWjRd4IE","y1qOT82fd8k","D9gWibH5_kY","Eek6SLvyNYU","lsDJyu_uJhw","uCqu7KVacG8","W-CuqaebiNY","PT4xBct05I0","rVbl6qgDPa8","jp0Qlyv389g","tZ5v_SFQJlU","E2ZLXsMeO0M","Gg5HsvkIxyY","LdAFYZ4RXFo","kkEaqgJnskU","G3tCAeR9TT8","5lRxNLHfZOY","MS7gba4eE3Q","wm9OmdN_Ig","Mt5jVH-8tYo","fO2_22eSy7U","ua0SnGdN-m8","kH3gdVjLMvo","QxHJ9lkXYNk","Zm2n2O7Fph4","tGTVxeOr_Rs","5c8fczgvar0","00i0u7CUPro","c0I4ahyGIkA","vxTpVxYCZjA","mawU2PoJWfU","78kaMQmUUq4","RZ9h94Q4LhA","8JCLpX_9R00","EPy0gBJzzZU","O0Keat5bB2E","5i0GnoTTjSE","-wm9OmdN_Ig","LQljh7f5aC8","Udx2XvTIHpg","VrvByPe3jPk","sYffw0LNr7s","JoRoy500nCc","tfPofukAy3Y","baAmKnZ6QMA","Sk5FRDD71_U","Tcy-WFizDHg","fPwlA536orM","SvqXfV_NBgA","s23xDAYQBCo","OrRZp6-d8zU","Cu3LwxsKpvw","JnmkSNU8QGE","-r2i9eOg9mA","hAb_8YM2kJw","fPV4Q-rQ-1E","Ue5ih3Vfhy4"]);function Le(l){let e,n,o,t;e=new je({props:{photo:l[0],onDownload:l[4]}});let a=!l[0]&&he();return{c(){Qe(e.$$.fragment),n=Y(),a&&a.c(),o=Z()},l(s){Ue(e.$$.fragment,s),n=K(s),a&&a.l(s),o=Z()},m(s,r){Re(e,s,r),P(s,n,r),a&&a.m(s,r),P(s,o,r),t=!0},p(s,r){const f={};r&1&&(f.photo=s[0]),e.$set(f),s[0]?a&&(a.d(1),a=null):a||(a=he(),a.c(),a.m(o.parentNode,o))},i(s){t||(G(e.$$.fragment,s),t=!0)},o(s){X(e.$$.fragment,s),t=!1},d(s){s&&(w(n),w(o)),Te(e,s),a&&a.d(s)}}}function qe(l){let e,n;return{c(){e=b("p"),n=B(l[1]),this.h()},l(o){e=y(o,"P",{class:!0});var t=S(e);n=J(t,l[1]),t.forEach(w),this.h()},h(){h(e,"class","svelte-tp4p7f")},m(o,t){P(o,e,t),v(e,n)},p(o,t){t&2&&ee(n,o[1])},i:N,o:N,d(o){o&&w(e)}}}function he(l){let e,n="🔍 Searching for inspiration...";return{c(){e=b("p"),e.textContent=n,this.h()},l(o){e=y(o,"P",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-126u2lt"&&(e.textContent=n),this.h()},h(){h(e,"class","searching-for-inspiration svelte-tp4p7f")},m(o,t){P(o,e,t)},d(o){o&&w(e)}}}function Ne(l){let e,n="Natural Travel Inspiration ⛰️",o,t,a="+Random Natural Inspiration",s,r,f,_,g,d,k;const Q=[qe,Le],c=[];function p(i,u){return i[1]?0:1}return f=p(l),_=c[f]=Q[f](l),{c(){e=b("h1"),e.textContent=n,o=Y(),t=b("button"),t.textContent=a,s=Y(),r=b("div"),_.c(),this.h()},l(i){e=y(i,"H1",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-dr4slq"&&(e.textContent=n),o=K(i),t=y(i,"BUTTON",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-1euvgqd"&&(t.textContent=a),s=K(i),r=y(i,"DIV",{class:!0});var u=S(r);_.l(u),u.forEach(w),this.h()},h(){h(e,"class","svelte-tp4p7f"),h(t,"class","random-natural-button svelte-tp4p7f"),h(r,"class","image-container-on-page svelte-tp4p7f")},m(i,u){P(i,e,u),P(i,o,u),P(i,t,u),l[7](t),P(i,s,u),P(i,r,u),c[f].m(r,null),g=!0,d||(k=[z(t,"click",l[5]),z(t,"mouseup",l[6])],d=!0)},p(i,[u]){let M=f;f=p(i),f===M?c[f].p(i,u):(Ee(),X(c[M],1,1,()=>{c[M]=null}),Ie(),_=c[f],_?_.p(i,u):(_=c[f]=Q[f](i),_.c()),G(_,1),_.m(r,null))},i(i){g||(G(_),g=!0)},o(i){X(_),g=!1},d(i){i&&(w(e),w(o),w(t),w(s),w(r)),l[7](null),c[f].d(),d=!1,$(k)}}}const pe=20,_e=1e3;function Fe(){const l=["mountain","hike","vista","cliff","forest","river","natural","island"];return l[Math.floor(Math.random()*l.length)]}function We(l,e,n){let o;const t="DhbwOlEXTWXSjSPsc0mBLHepnq6RtSt6boyDK-G50lw",a=Ce(new Set);be(l,a,c=>n(8,o=c));let s,r="";async function f(c){const p=c.trim(),i=p.includes(" "),u=encodeURIComponent(i?`"${p}"`:p),M=`https://api.unsplash.com/photos/random?client_id=${t}&query=${u}`;try{const R=await fetch(M);if(!R.ok)throw new Error("Error fetching photo.");return await R.json()}catch(R){return n(1,r="Error fetching new photo."),console.error("Fetch error:",R),null}}async function _(c,p){try{const i=await fetch(`${c.links.download_location}?client_id=${t}`,{method:"GET",headers:{Authorization:`Client-ID ${t}`}});if(i.ok){const M=(await i.json()).url,R=await fetch(M);if(R.ok){const C=await R.blob(),j=URL.createObjectURL(C),A=document.createElement("a");A.href=j,A.download=p,document.body.appendChild(A),A.click(),document.body.removeChild(A),URL.revokeObjectURL(j)}else throw new Error("Failed to download the image from Unsplash")}else throw new Error("Unsplash download trigger failed")}catch(i){console.error("Download error:",i)}}async function g(){let c=0,p=!1;for(;!p&&c<pe;){c++;const i=Fe(),u=await f(i);u&&!de.has(u.id)&&u.location&&u.location.name&&(o.has(u.id)||(n(0,s=u),o.add(u.id),p=!0))}p||setTimeout(g,_e)}ye(async()=>{let c=!1,p=0;for(;!c&&p<pe;){p++;try{const i=await f("nature");i&&!de.has(i.id)&&i.location&&i.location.name?(n(0,s=i),a.update(u=>(u.add(i.id),u)),c=!0):await new Promise(u=>setTimeout(u,_e))}catch(i){n(1,r="Whoops! Refresh your browser, please."),console.error(i)}}c||n(1,r="Please try again. Refresh your browser!")});let d;function k(){d&&d.blur()}function Q(c){we[c?"unshift":"push"](()=>{d=c,n(2,d)})}return[s,r,d,a,_,g,k,Q]}class ze extends ke{constructor(e){super(),ve(this,e,We,Ne,me,{})}}export{ze as component};