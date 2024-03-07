import{r as se,s as le,b as V,n as G,a as de,e as ve,o as Ee}from"../chunks/scheduler.xP9QEsb2.js";import{q as W,S as be,i as ye,e as E,c as I,a as j,d as k,l as h,g as C,h as g,m as Z,n as B,s as S,t as X,f as T,k as q,b as x,B as $,j as ae,o as J,p as Ae,u as Qe,w as Ie,x as Ue,y as Re,z as Me}from"../chunks/index.B4ohFuCl.js";import{f as L}from"../chunks/index.BQMALu5r.js";function he(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Ye(r,e){r.d(1),e.delete(r.key)}function Ce(r,e,o,t,l,n,s,a,c,u,p,f){let d=r.length,v=n.length,w=d;const b={};for(;w--;)b[r[w].key]=w;const m=[],Q=new Map,i=new Map,y=[];for(w=v;w--;){const _=f(l,n,w),M=o(_);let Y=s.get(M);Y?t&&y.push(()=>Y.p(_,e)):(Y=u(M,_),Y.c()),Q.set(M,m[w]=Y),M in b&&i.set(M,Math.abs(w-b[M]))}const A=new Set,z=new Set;function P(_){W(_,1),_.m(a,p),s.set(_.key,_),p=_.first,v--}for(;d&&v;){const _=m[v-1],M=r[d-1],Y=_.key,N=M.key;_===M?(p=_.first,d--,v--):Q.has(N)?!s.has(Y)||A.has(Y)?P(_):z.has(N)?d--:i.get(Y)>i.get(N)?(z.add(Y),P(_)):(A.add(N),d--):(c(M,s),d--)}for(;d--;){const _=r[d];Q.has(_.key)||c(_,s)}for(;v;)P(m[v-1]);return se(y),m}function _e(r,e,o){const t=r.slice();return t[8]=e[o].id,t[9]=e[o].urls,t[10]=e[o].alt_description,t[11]=e[o].user,t}function pe(r){let e=[],o=new Map,t,l=he([r[0]]);const n=s=>s[3];for(let s=0;s<1;s+=1){let a=_e(r,l,s),c=n(a);o.set(c,e[s]=ke(c,a))}return{c(){for(let s=0;s<1;s+=1)e[s].c();t=B()},l(s){for(let a=0;a<1;a+=1)e[a].l(s);t=B()},m(s,a){for(let c=0;c<1;c+=1)e[c]&&e[c].m(s,a);C(s,t,a)},p(s,a){a&63&&(l=he([s[0]]),e=Ce(e,a,n,1,s,l,o,t.parentNode,Ye,ke,t,_e))},d(s){s&&k(t);for(let a=0;a<1;a+=1)e[a].d(s)}}}function me(r){let e,o=r[0].location.name+"",t;return{c(){e=E("p"),t=X(o),this.h()},l(l){e=I(l,"P",{class:!0});var n=j(e);t=x(n,o),n.forEach(k),this.h()},h(){h(e,"class","location svelte-lshyn2")},m(l,n){C(l,e,n),g(e,t)},p(l,n){n&1&&o!==(o=l[0].location.name+"")&&ae(t,o)},d(l){l&&k(e)}}}function ke(r,e){let o,t,l,n,s,a,c,u,p,f,d,v="Photo by",w,b,m=e[11].name+"",Q,i,y,A,z="on",P,_,M,Y,N,D,re="Download",ee,te,O,oe,ie,U=e[0].location&&e[0].location.name&&me(e);return{key:r,first:null,c(){o=E("div"),t=E("div"),l=E("img"),c=S(),u=E("div"),U&&U.c(),p=S(),f=E("div"),d=E("span"),d.textContent=v,w=S(),b=E("a"),Q=X(m),y=S(),A=E("span"),A.textContent=z,P=S(),_=E("a"),M=X("Unsplash"),N=S(),D=E("button"),D.textContent=re,te=S(),this.h()},l(K){o=I(K,"DIV",{class:!0});var R=j(o);t=I(R,"DIV",{class:!0});var ce=j(t);l=I(ce,"IMG",{src:!0,alt:!0,class:!0}),ce.forEach(k),c=T(R),u=I(R,"DIV",{class:!0});var H=j(u);U&&U.l(H),p=T(H),f=I(H,"DIV",{class:!0});var F=j(f);d=I(F,"SPAN",{class:!0,"data-svelte-h":!0}),q(d)!=="svelte-b69ulm"&&(d.textContent=v),w=T(F),b=I(F,"A",{class:!0,href:!0,target:!0,rel:!0});var ue=j(b);Q=x(ue,m),ue.forEach(k),y=T(F),A=I(F,"SPAN",{class:!0,"data-svelte-h":!0}),q(A)!=="svelte-16j78ur"&&(A.textContent=z),P=T(F),_=I(F,"A",{class:!0,href:!0,target:!0,rel:!0});var fe=j(_);M=x(fe,"Unsplash"),fe.forEach(k),F.forEach(k),H.forEach(k),N=T(R),D=I(R,"BUTTON",{class:!0,"data-svelte-h":!0}),q(D)!=="svelte-1lul0at"&&(D.textContent=re),te=T(R),R.forEach(k),this.h()},h(){de(l.src,n=e[9].regular)||h(l,"src",n),h(l,"alt",s=e[10]||"Unsplash Photo"),h(l,"class","svelte-lshyn2"),h(t,"class","image-container svelte-lshyn2"),h(d,"class","credit-photo-by svelte-lshyn2"),h(b,"class","credit-links svelte-lshyn2"),h(b,"href",i=ne(e[11].links.html)),h(b,"target","_blank"),h(b,"rel","noopener noreferrer"),h(A,"class","credit-on svelte-lshyn2"),h(_,"class","credit-links svelte-lshyn2"),h(_,"href",ne("https://unsplash.com")),h(_,"target","_blank"),h(_,"rel","noopener noreferrer"),h(f,"class","caption svelte-lshyn2"),h(u,"class","photo-information svelte-lshyn2"),h(D,"class","download-button svelte-lshyn2"),h(o,"class",O="photo-card "+(e[1]?"loaded":"")+" svelte-lshyn2"),this.first=o},m(K,R){C(K,o,R),g(o,t),g(t,l),g(o,c),g(o,u),U&&U.m(u,null),g(u,p),g(u,f),g(f,d),g(f,w),g(f,b),g(b,Q),g(f,y),g(f,A),g(f,P),g(f,_),g(_,M),g(o,N),g(o,D),e[7](D),g(o,te),oe||(ie=[$(D,"click",e[4]),$(D,"mouseup",e[5])],oe=!0)},p(K,R){e=K,R&1&&!de(l.src,n=e[9].regular)&&h(l,"src",n),R&1&&s!==(s=e[10]||"Unsplash Photo")&&h(l,"alt",s),e[0].location&&e[0].location.name?U?U.p(e,R):(U=me(e),U.c(),U.m(u,p)):U&&(U.d(1),U=null),R&1&&m!==(m=e[11].name+"")&&ae(Q,m),R&1&&i!==(i=ne(e[11].links.html))&&h(b,"href",i),R&2&&O!==(O="photo-card "+(e[1]?"loaded":"")+" svelte-lshyn2")&&h(o,"class",O)},i(K){K&&(a||V(()=>{a=Z(l,L,{delay:250,duration:500}),a.start()})),K&&(Y||V(()=>{Y=Z(u,L,{delay:500,duration:500}),Y.start()})),K&&(ee||V(()=>{ee=Z(D,L,{delay:500,duration:500}),ee.start()}))},o:G,d(K){K&&k(o),U&&U.d(),e[7](null),oe=!1,se(ie)}}}function De(r){let e,o,t,l,n=r[0]&&r[0].urls&&r[0].urls.regular&&pe(r);return{c(){e=E("div"),o=E("div"),n&&n.c(),this.h()},l(s){e=I(s,"DIV",{class:!0});var a=j(e);o=I(a,"DIV",{class:!0});var c=j(o);n&&n.l(c),c.forEach(k),a.forEach(k),this.h()},h(){h(o,"class","image-container svelte-lshyn2"),h(e,"class",t="photo-card "+(r[1]?"loaded":"")+" svelte-lshyn2")},m(s,a){C(s,e,a),g(e,o),n&&n.m(o,null)},p(s,[a]){s[0]&&s[0].urls&&s[0].urls.regular?n?n.p(s,a):(n=pe(s),n.c(),n.m(o,null)):n&&(n.d(1),n=null),a&2&&t!==(t="photo-card "+(s[1]?"loaded":"")+" svelte-lshyn2")&&h(e,"class",t)},i(s){s&&(l||V(()=>{l=Z(e,L,{delay:500,duration:500}),l.start()}))},o:G,d(s){s&&k(e),n&&n.d()}}}const Ke="Natural Travel Inspiration",Se="referral";function ne(r){return`${r}?utm_source=${Ke}&utm_medium=${Se}`}function Te(r,e,o){let{photo:t}=e,{onDownload:l}=e,n=!1;function s(){if(console.log("Triggering download for photo:",t),l&&typeof l=="function"){const f=`unsplash_image_${t.id}.jpg`;console.log("Filename:",f),l(t,f)}else console.error("Download function not provided!")}let a;function c(){a&&a.blur()}let u=0;function p(f){ve[f?"unshift":"push"](()=>{a=f,o(2,a)})}return r.$$set=f=>{"photo"in f&&o(0,t=f.photo),"onDownload"in f&&o(6,l=f.onDownload)},r.$$.update=()=>{r.$$.dirty&1&&t&&t.urls&&t.urls.regular&&o(1,n=!0),r.$$.dirty&1&&t&&t.urls&&t.urls.regular&&(o(1,n=!0),o(3,u=t.id))},[t,n,a,u,s,c,l,p]}class je extends be{constructor(e){super(),ye(this,e,Te,De,le,{photo:0,onDownload:6})}}const Ne=new Set(["UOkZT4JT8fw","parczv2B-ZM","xRr9Lz3xfYs","uYoVf9I6ANI","mmzuZhihp30","jqgsM3B9Fpo","tMzCrBkM99Y","IicyiaPYGGI","jAjvbh7vw9g","6c5ZTHnUUzA","OdBFUurPHjo","PSFfI7vbS3c","9JxubXPaidg","uNliRqlmBdg","jnJ89cuXMcs","F6Da4r2x5to","z8ct_Q3oCqM","RwHv7LgeC7s","2JwQoi-RBiI","3W9buupDI2k","10TSKDfW8X8","TkrRvwxjb_8","fsJB3KT2rj8","bBiuSdck8tU","h6zMgghzZr0","7AcMUSYRZpU","jin4W1HqgL4","El-egS_h_N4","MMJx78V7xS8","h5eLbyHzAcE","ITfHPUy0x9k","s0vFLLZzOrs","v4e3JI7DDHI","vngzm4P2BTs","koy6FlCCy5s","sx6n_hgSmOc","9Z1KRIfpBTM","JP23z_-dA74","jt6QxZwSOCQ","8mCMQSq41gQ","Dqzsti6Fonc","KhsuK_wq-o4","rCFAY4WrbUY","4rDCa5hBlCs","hPxKmyCZ-Bs","KMYCSLP8uiU","jWv1ILisuSc","OOE4xAnBhKo","rleYWWVY4Pc","GVnUVP8cs1o","T8-kfC8W4b8","yjEt-n0qUl8","LNYdZutqsi0","d2aXuZD2kUc","OS0D-aJ54CY","6ArTTluciuA","6loxuv3aXkg","XxvXRmsH860","qPPWNeFVLFQ","pmhoQj3Ce1E","6-C0VRsagUw","8SXaMMWCTGc","h5wvMCdOV3w","CoIqQVwEGY0","I3jSS2YfmcU","0uO6qhd6Bi8","gofWd3XkKo0","NliTYm_jD5o","zPCj7SKoub8","gvb84QdErNs","-N_UwPdUs7E","choc7LYd98I","Tw_rTjWMuGo","WgT_B4mN0BA","yZNGVL_fWj8","pT8mKX61STI","NjT4O7WYmwk","wQImoykAwGs","cS6YoRIAK2w","_EMkxLdko9k","vzVGHfxZIZ8","F5zoQfoWtbM","U86FnrpRR0k","fG4PYBDmAkI","9Gs0qk9Z3WU","h3ki3bbJWk0","xjhgZCuvg3k","fMIsAL72P3U","5-jtsfuaLBw","AnKC9klnyKk","Ee0894MAyok","gyIRjKPXupE","jFCViYFYcus","eOpewngf68w","Rfflri94rs8","Lh2qwkppkf8","RdouF_LXaYI","049M_crau5k","IVbFRSEYGuA","sNVE_h_7naU","7KLa-xLbSXA","poXhq_-eANA","utoPXPPr5zc","jCL98LGaeoE","rFn64K0YQrI","vpkCTrnV2eE","JiphyElpixM","ciHYaPb8lUA","c1Jp-fo53U8","WK4lhYGRIzw","JWa5jZ1LkJY","MPKFmy_Xc_A","NEqEC7qa9FM","vUNQaTtZeOo","c4cWawGBFv8","rckx2mE9rOw","cCthPLHmrzI","dhw3LSuWyks","3U3Qegatt2o","QsWG0kjPQRY","42MaenKbPe0","9K9ipjhDdks","sFLVTqNzG2I","7ne3hNnojvU","j6dqEl13is4","hpTH5b6mo2s","19SC2oaVZW0","u4fWwlBhHJ8","ugnrXk1129g","Yl9YFBtZFcQ","SaWeuWtLQqE","NP_GHS5Bb-s","yu2Ay7LQmnY","_ReQ6GSqSaM","wxZBV8GiPlc","1OtUkD_8svc","PXXtq6bp6cs","qN8AMtHZ2nY","J2xHOsMNIn0","SDoMyyylpnc","SDoMyyylpnc","3Kv48NS4WUU","3Ltn2aWVNcM","vgazHbc0XWg","8UVZHt8AUoQ","Ed_DchxFfrU","uilVSfUGnWk","dSxAggoqPAk","F_moKY91WYc","2ZjJ7T6EeOg","mLXmJb3In8Q","T69h1_YfR-w","kIR55P1eXJI","mFbrMEVKCkc","UFnHt94r91w","pt7QzB4ZLWw","6xh7H5tWj9c","bnUXhIyf0i0","WJkc3xZjSXw","5S6_c_yCIwE","d4feocYfzAM","nTRDnDdDYk8","Rr3B0LH7W3k","7NBO76G5JsE","0D8_tYHIy0o","lsGWd4KgCD4","JiuVoQd-ZLk","qzgN45hseN0","ZeNABWS-k4Q","Dm-qxdynoEc","__0Yg6-lvP8","qd-dvtbS45Q","4ooRozrZdLM","wKjIeK4QSnk","4QWR5geRC9I","PjjMG6VyHs4","TMNyU2MFTGw","lIat5Z-N3JA","QMnYC8WVFM8","SBiVq9eWEtQ","uaO9cd5BQPc","sp-p7uuT0tw","sp-p7uuT0tw","Yh6K2eTr_FY","GzcI_rMNclY","CtxRK04XMKs","mppuJZUzhI0","AqXqL_V9qpM","6csuZQ9oZcI","TRhGEGdw-YY","NQSWvyVRIJk","FMWXjhIkmO0","VHUbeZMH6Yg","uJnUhGtI_Pk","hry9juw-x5k","50bzI1F6urA","J2jtcRbiL-4","zK049OFP4uI","enXOyujvTXQ","z_HDrTQxNEI","z_HDrTQxNEI","zXVk8mNl9M0","a0nbRUHimZw","a0nbRUHimZw","S9miGKjxmb4","uyNMxCFYMvo","gzMvo6cR6J0","b4l3Mn4pRKk","D4TooCIEyF4","2JuKK2ticlk","buF62ewDLcQ","Fz77XHwFYg0","WVEBqXRGcy8","xY_6ZENqcfo","TBl1-EKYFjs","KYTT8L5JLDs","XAmgFP_GvVA","5VDFTgpwV2g","whDrFMucHkc","G8rRItjrwkA","HkNKkRoiGk8","igX2deuD9lc","xg8z_KhSorQ","5G2G59V6IXg","LMq1gYdygxo","Qdi8UvGd1Ww","-BZc9Ee1qo0","RkBTPqPEGDo","RhjVGxILcqE","UnKqaCtnHwE","9YubwxAIpw0","Kvc5x3Bvfd4","jwTvCQQJXh0","0Kyp7uO-3RQ","3okHTqD9yUA","i9Q9bc-WgfE","a47qPRbHx7g","3LwMyv3FiUE","KRAazAqquaQ","OsMWWAL0saQ","a2zdgkDzFo8","9pvTSsNV2T4","hfLsVDvnKwY","-KdfxdUEVv0","XxDJ6bgq7Pw","P3DxOe-OJGA","-IZ2sgQKIhM","uzwTVzXqZcg","HgQOh4s_M-U","ap6baZcbAho","T7s_TnKO-dk","FO7bKvgETgQ","NWleDEFmYDg","gcOMSDzWvR8","Ke-ENe3ByiQ","4-KqFyHKRdo","oj8XzDDpK40","e6f8IaRQY7M","hnw3Al47-KE","ipH70OUZDrk","1awcLzy32Dg","FAn-NWH8Bzw","d6kSvT2xZQo","DuiPYwz3CBA","gd3t5Dtbwkw","JoH60FhTp50","SvdVrpLiocU","gMqBIvJfP0E","htNpsGOMQL8","2WBVLTKNo1k","hom1seYgTQQ","cfKC0UOZHJo","eGD69I3ODC4","02a4DSekRVg","G_1V58E0TyM","5P91SF0zNsI","NrN5Rvl89Lo","cOMpDHi3fsM","8jQFXXSTvbw","tSZZ2NBj1eE","-rSka4Bw-EU","TsMXK2W9hV0","J4aLKW3T0FE","ntA_kfsJQjw","REKXJ7JhwiI","SqBK8g4g_ug","zAQoZwidDbs","Jzery_MafWQ","H8vhhepiiaU","A0P3qTZcjJw","RaEFRWLy9ME","KT3WlrL_bsg","RtTxZBbJe6A","baTtO8UODDo","3MNzGlQM7qs","yrBbY1ljUYc","zqIOvV-D3JQ","IbLZjKcelpM","RsRpw1rvkJs","sTVYoJHXKv8","hji142JdgRw","iiLQN9P6Irc","ZRdSZeVKBaE","Ceuh97A6OYM","HG5QX-GXV5A","DD1fSz2HF1s","AHWrFYvRBuk","8Ogfqvw15Rg","8bsvwFWVcvE","VS1uBhwf8a4","tNDvFkxkBHo","ofuctQNpnk4","C7jBZEGciCU","6YmzwamGzCg","Sl1GrFYrQ1E","IfTKequW2Mk","ln5drpv_ImI","JjYhagSxnOU","KMn4VEeEPR8","jeIRRRu6dbE","L_uyuJzJAxc","qb14VmiCjBA","uOtPQtKI_A8","HDd-NQ_AMNQ","cbPh8sfpP70","50HS3AzJsvQ","iuqmGmst5Po","jp0Qlyv389g","1rQs3661lq4","lsoogGC_5dg","VyqvPLMSZrc","kGSapVfg8Kw","C6gxT-N56ns","eCqA-col90Q","4igCpD-Lnfg","1sim8ojvCbE","8H5kNkYmJYQ","4r_tHA3gsUY","Kl8S7XbWbzM","_3DI_vx2ygg","mBQIfKlvowM","b_wN4QemTzU","BXasVMRGsuo","odxB5oIG_iA","pBgnT4KH8d4","s7fVceSaiiw","EwKXn5CapA4","BvijLrkWcHA","KHrwWI5rdo8","S_IV6KqGeso","PmPZkRQYTyI","zhqD0tw1peA","jUCQRQeRs3k","dGmUuyZo_c4","qWJcROZIeec","2tvkoVK8prc","pRRSpbCFUOM","TkBhnAUm74M","VV2_XVEjg5w","oWRVjFQIwAY","3nQ1BT_rC3U","m6FGop1tliQ","upldea-3F4w","bIybKPVJW8M","2cwEJy-0hfw","lX9NstRMiDU","741MfdrVr_I","cf2QWjRd4IE","y1qOT82fd8k","D9gWibH5_kY","Eek6SLvyNYU","lsDJyu_uJhw","uCqu7KVacG8","W-CuqaebiNY","PT4xBct05I0","rVbl6qgDPa8","jp0Qlyv389g","tZ5v_SFQJlU","E2ZLXsMeO0M","Gg5HsvkIxyY","LdAFYZ4RXFo","kkEaqgJnskU","G3tCAeR9TT8","5lRxNLHfZOY","MS7gba4eE3Q","wm9OmdN_Ig","Mt5jVH-8tYo","fO2_22eSy7U","ua0SnGdN-m8","kH3gdVjLMvo","QxHJ9lkXYNk","Zm2n2O7Fph4","tGTVxeOr_Rs","5c8fczgvar0","00i0u7CUPro","c0I4ahyGIkA","vxTpVxYCZjA","mawU2PoJWfU","78kaMQmUUq4","RZ9h94Q4LhA","8JCLpX_9R00","EPy0gBJzzZU","O0Keat5bB2E","5i0GnoTTjSE","-wm9OmdN_Ig","LQljh7f5aC8","Udx2XvTIHpg","VrvByPe3jPk","sYffw0LNr7s","JoRoy500nCc","tfPofukAy3Y","baAmKnZ6QMA","Sk5FRDD71_U","Tcy-WFizDHg","fPwlA536orM","SvqXfV_NBgA","s23xDAYQBCo","OrRZp6-d8zU","Cu3LwxsKpvw","JnmkSNU8QGE","-r2i9eOg9mA","hAb_8YM2kJw","fPV4Q-rQ-1E","Ue5ih3Vfhy4","vouy8AF8JuM","8mqOw4DBBSg","S9OCBwRFV_k","4ByFHyNdoD4","FqeAEnurVG0","oaCD9WYdNlU","KoCpBWbeo1o","GyDktTa0Nmw","K2g57zApkdY","I8uA8kG4O1g","bPYg2hFBHbY","lLOv39aK4gM","HuNQV09iHpg","9g0pzZhT1tQ","LGDF_tLnuWk","gF72XRmDjiQ","dua2Zf0UKZo","KP6kRs5al6E","MR4bYvEudus","i1xZ2OfZxW8","ysA6qL8j-OI","4rAXAEZT7uE","wJwx_jSgZuA","5uzpOW9tobM","7geRQ5YhtEc","aHwo1mqo-C4","dGMcpbzcq1I","H7JiEU8Slnw","P0PIMhhKNAk","tzQNLAYVDRQ","xiOWplnJESQ","rf5R1qXwlDU","3QqHymF8Gtw","lDy1K7RkLeA","MY0SItU_jIk","AVzByhROPbs","7zg5bnhm2X0","RRNHdU2JoKQ","NNZtpKFFqE8","NNZtpKFFqE8","vW1TR9cBcSg","fIoQ-aRycys","RvV6qccrbkA","xNSCi_K179c","kdsA7f3WmFQ","2i0_OwlZ_K4","adLo80F_9P0","3IzKtuKdGuE","7Meg9wWgAos","0A4dACGfatY","1xeTGKmdv74","qoitlf98K44","wE2NUjp-I8s","3MuXumZc-8Q","e9G1rz-0rLU","DsSk4ZP6iSI","2CJ88u5Waw","XsqC0vwafxI","JBqorhyN0","4F3InkU7F2A","u6Md3UE_6yA","8rTRs1pDESA","8tY7wHckcM8","WK8kpaL6ahQ","X48rXN33qZg","9BFKBPCG83w","xImPXD6bn9U","kEuew3XMeEA","SFkv16V_09c","cGKsM3ZTUs8","66PlNZqPawQ","yNfDBAu_8wo","cO9_joZ1FdA","qLW70Aoo8BE","TKjzQKl1e4Y","-TYvt5pmKng","GQgNsynD14A","qF0iZeEdt8Q","SiROKv5xKOw","xljtGZ2-P3Y","GMsu5-mw7Bs","3qucB7U2l7I","F_hft1Wiyj8","xXbaTOP31M4","3wFRlwS91yk","p4cGZMcog4c","1M3YrxFe4Cc","lszypRm8AkY","7HYgJL1ldMo","3BlVILvh9hM","06DO5x5tSbg","Enhs8UrXEb0","H_mYBHcLEbk","yKjURf1u7EY","Z5dKUnRJIiY","XHnSJV2pBkc","j3CjZYckM88","uSrhXQ-hen8","B8y6uvTnEvU","a_K7R1kugUE","t5A_uCgQXdA","iJe6mNWgbOw","hxEAE88Onv0","rnlesQiCDrs","JBi-VC-UUfs","2KWVuQvYWhA","fluZrqtmkbo","fluZrqtmkbo","2ShvY8Lf6l0","KVpj2keOwIk","AeqlmVWtzFA","XQKd1UN7gUU","COnonhVjy58","lY86nIeUbQA","niRdRVqN4NE","5SOTm1RlCmg","vc-Ay3y23AQ","7HRuGK6MCo","3h3Sa1rcpyo","c4Stt0rvQ8o","eTxtF3z2Taw","LXtbAmq8AoQ","OJj8S01B2T4","1zbc8sXTjVc","e9QrzGxPvrI","8xznAGy4HcY","lR64CdOHZhg","Q39-ZRDAcsk","2IcEgpibVug","8w2V8Joe-H0","waAAaeC9hns","9l5aySnwfpU","AAFH_AADpRg","xwjxddCxK-A","_5yFO_jXsVQ","zlV1Ksvifvs","Co0Szz08LeI","CCq1ikLON0A","JaOeuy9mzzc","uHU5fblbVJg","JjWa0WuQDJE","frmovOarYdE","PxQ_jfrBvq4","_A0FcwFh7DE","Y1ocPK_oSCw","4D953R0aRUo","0IGhARplNzY","-A2IuOZnmHs","HJhNACkD6c","Dbyj6kB33pk","j59euRsEDTk","b0XSjnITSoA","FZvVnYkmd_Q","ykY6XTJ3aRc","WbOn78k-ywU","abiZaxJcxWc","BHJhNACkD6c","abDPQtcEtUQ","fU2Mus9qmN8","tY8AJdPsI70","be5B3YGDmtc","na4f8-yPPiM","0ZdWshZeCc0","jgDf1GrJ6zk","rz7A9NYll4g","PfQ8OAjYzRY","_qZ0us4az20","InOgamK2cuY","2n3tcXLZjxg"]);function Fe(r){let e=r[0],o,t,l,n=we(r),s=!r[0]&&ge();return{c(){n.c(),o=S(),s&&s.c(),t=B()},l(a){n.l(a),o=T(a),s&&s.l(a),t=B()},m(a,c){n.m(a,c),C(a,o,c),s&&s.m(a,c),C(a,t,c),l=!0},p(a,c){c&1&&le(e,e=a[0])?(Qe(),J(n,1,1,G),Ae(),n=we(a),n.c(),W(n,1),n.m(o.parentNode,o)):n.p(a,c),a[0]?s&&(s.d(1),s=null):s||(s=ge(),s.c(),s.m(t.parentNode,t))},i(a){l||(W(n),l=!0)},o(a){J(n),l=!1},d(a){a&&(k(o),k(t)),n.d(a),s&&s.d(a)}}}function Pe(r){let e,o;return{c(){e=E("p"),o=X(r[1]),this.h()},l(t){e=I(t,"P",{class:!0});var l=j(e);o=x(l,r[1]),l.forEach(k),this.h()},h(){h(e,"class","svelte-9o5ifd")},m(t,l){C(t,e,l),g(e,o)},p(t,l){l&2&&ae(o,t[1])},i:G,o:G,d(t){t&&k(e)}}}function we(r){let e,o;return e=new je({props:{photo:r[0],onDownload:r[3]}}),{c(){Ie(e.$$.fragment)},l(t){Ue(e.$$.fragment,t)},m(t,l){Re(e,t,l),o=!0},p(t,l){const n={};l&1&&(n.photo=t[0]),e.$set(n)},i(t){o||(W(e.$$.fragment,t),o=!0)},o(t){J(e.$$.fragment,t),o=!1},d(t){Me(e,t)}}}function ge(r){let e,o="🔍 Searching For Inspiration...";return{c(){e=E("p"),e.textContent=o,this.h()},l(t){e=I(t,"P",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-1kvjshd"&&(e.textContent=o),this.h()},h(){h(e,"class","searching-for-inspiration svelte-9o5ifd")},m(t,l){C(t,e,l)},d(t){t&&k(e)}}}function Ve(r){let e,o="Natural Travel Inspiration ⛰️",t,l,n,s="+Random Natural Inspiration",a,c,u,p,f,d,v,w;const b=[Pe,Fe],m=[];function Q(i,y){return i[1]?0:1}return u=Q(r),p=m[u]=b[u](r),{c(){e=E("h1"),e.textContent=o,l=S(),n=E("button"),n.textContent=s,c=S(),p.c(),f=B(),this.h()},l(i){e=I(i,"H1",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-1w7bs9d"&&(e.textContent=o),l=T(i),n=I(i,"BUTTON",{class:!0,"data-svelte-h":!0}),q(n)!=="svelte-mikinv"&&(n.textContent=s),c=T(i),p.l(i),f=B(),this.h()},h(){h(e,"class","svelte-9o5ifd"),h(n,"class","random-natural-button svelte-9o5ifd")},m(i,y){C(i,e,y),C(i,l,y),C(i,n,y),r[6](n),C(i,c,y),m[u].m(i,y),C(i,f,y),d=!0,v||(w=[$(n,"click",r[4]),$(n,"mouseup",r[5])],v=!0)},p(i,[y]){let A=u;u=Q(i),u===A?m[u].p(i,y):(Qe(),J(m[A],1,1,()=>{m[A]=null}),Ae(),p=m[u],p?p.p(i,y):(p=m[u]=b[u](i),p.c()),W(p,1),p.m(f.parentNode,f))},i(i){d||(i&&(t||V(()=>{t=Z(e,L,{delay:100,duration:1e3}),t.start()})),i&&(a||V(()=>{a=Z(n,L,{delay:100,duration:1e3}),a.start()})),W(p),d=!0)},o(i){J(p),d=!1},d(i){i&&(k(e),k(l),k(n),k(c),k(f)),r[6](null),m[u].d(i),v=!1,se(w)}}}function Ze(){const r=["mountain","hike","vista","cliff","forest","rainforest","river","natural","island","desert","canyon","glacier","volcano","waterfall","valley","fjord","plateau","geyser","dune"];return r[Math.floor(Math.random()*r.length)]}function qe(r,e,o){const t="DhbwOlEXTWXSjSPsc0mBLHepnq6RtSt6boyDK-G50lw";let l,n="";async function s(d){const v=d.trim(),w=v.includes(" "),b=encodeURIComponent(w?`"${v}"`:v),m=`https://api.unsplash.com/photos/random?client_id=${t}&query=${b}`;try{const Q=await fetch(m);if(!Q.ok)throw new Error("Error fetching photo.");const i=await Q.json();return Ne.has(i.id)||!i.location||!i.location.name?(console.log("Photo blacklisted or without location, fetching another one."),s(d)):i}catch(Q){return o(1,n="Error fetching new photo."),console.error("Fetch error:",Q),null}}async function a(d,v){try{const w=await fetch(`${d.links.download_location}?client_id=${t}`,{method:"GET",headers:{Authorization:`Client-ID ${t}`}});if(w.ok){const m=(await w.json()).url,Q=await fetch(m);if(Q.ok){const i=await Q.blob(),y=URL.createObjectURL(i),A=document.createElement("a");A.href=y,A.download=v,document.body.appendChild(A),A.click(),document.body.removeChild(A),URL.revokeObjectURL(y)}else throw new Error("Failed to download the image from Unsplash")}else throw new Error("Unsplash download trigger failed")}catch(w){console.error("Download error:",w)}}async function c(){const d=Ze();o(0,l=await s(d)),l||o(1,n="Could not fetch a new photo. Please try again.")}Ee(()=>{c()});let u;function p(){u&&u.blur()}function f(d){ve[d?"unshift":"push"](()=>{u=d,o(2,u)})}return[l,n,u,a,c,p,f]}class ze extends be{constructor(e){super(),ye(this,e,qe,Ve,le,{})}}export{ze as component};
