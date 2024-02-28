var Q=Object.defineProperty;var X=(t,e,n)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var h=(t,e,n)=>(X(t,typeof e!="symbol"?e+"":e,n),n);import{n as v,r as b,j as M,b as H,i as Y,k as R,l as Z,m as tt,p as et,q as nt,v as I,w as it,x as st,y as rt}from"./scheduler.xP9QEsb2.js";const z=typeof window<"u";let lt=z?()=>window.performance.now():()=>Date.now(),P=z?t=>requestAnimationFrame(t):v;const x=new Set;function G(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&P(G)}function at(t){let e;return x.size===0&&P(G),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let S=!1;function ot(){S=!0}function ct(){S=!1}function ft(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function ut(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:ft(1,s,d=>e[n[d]].claim_order,a))-1;i[l]=n[u]+1;const f=u+1;n[f]=l,s=Math.max(f,s)}const o=[],r=[];let c=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);c>=l;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);o.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<o.length&&r[l].claim_order>=o[a].claim_order;)a++;const u=a<o.length?o[a]:null;t.insertBefore(r[l],u)}}function dt(t,e){t.appendChild(e)}function F(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function _t(t){const e=D("style");return e.textContent="/* empty */",ht(F(t),e),e.sheet}function ht(t,e){return dt(t.head||t,e),e.sheet}function mt(t,e){if(S){for(ut(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){t.insertBefore(e,n||null)}function $t(t,e,n){S&&!n?mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function D(t){return document.createElement(t)}function J(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function Bt(){return j(" ")}function Rt(){return j("")}function It(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ot(t){return function(e){return e.preventDefault(),t.call(this,e)}}function yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t,e){for(const n in e)yt(t,n,e[n])}function qt(t){return t.dataset.svelteH}function gt(t){return Array.from(t.childNodes)}function U(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,e,n,i,s=!1){U(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function W(t,e,n,i){return V(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const c=s.attributes[r];n[c.name]||o.push(c.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function zt(t,e,n){return W(t,e,n,D)}function Gt(t,e,n){return W(t,e,n,J)}function xt(t,e){return V(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function Ft(t){return xt(t," ")}function O(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Jt(t,e){const n=O(t,"HTML_TAG_START",0),i=O(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new L(e);U(t);const s=t.splice(n,i-n+1);N(s[0]),N(s[s.length-1]);const o=s.slice(1,s.length-1);if(o.length===0)return new L(e);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(e,o)}function Ut(t,e){e=""+e,t.data!==e&&(t.data=e)}function Vt(t,e){t.value=e??""}function Wt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Kt(t,e,n){t.classList.toggle(e,!!n)}function wt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class vt{constructor(e=!1){h(this,"is_svg",!1);h(this,"e");h(this,"n");h(this,"t");h(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=J(n.nodeName):this.e=D(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)pt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class L extends vt{constructor(n=!1,i){super(n);h(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)$t(this.t,this.n[i],n)}}function Qt(t,e){return new t(e)}const T=new Map;let A=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Et(t,e){const n={stylesheet:_t(e),rules:{}};return T.set(t,n),n}function Tt(t,e,n,i,s,o,r,c=0){const l=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*o(p);a+=p*100+`%{${r(g,1-g)}}
`}const u=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Nt(u)}_${c}`,d=F(t),{stylesheet:_,rules:m}=T.get(d)||Et(d,t);m[f]||(m[f]=!0,_.insertRule(`@keyframes ${f} ${u}`,_.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${s}ms 1 both`,A+=1,f}function k(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),A-=s,A||At())}function At(){P(()=>{A||(T.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&N(e)}),T.clear())})}let w;function bt(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function q(t,e,n){t.dispatchEvent(wt(`${e?"intro":"outro"}${n}`))}const E=new Set;let $;function Xt(){$={r:0,c:[],p:$}}function Yt(){$.r||b($.c),$=$.p}function St(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Zt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),$.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ct={duration:0};function te(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,c,l=0;function a(){r&&k(t,r)}function u(){const{delay:d=0,duration:_=300,easing:m=Y,tick:y=v,css:p}=s||Ct;p&&(r=Tt(t,0,1,_,d,m,p,l++)),y(0,1);const g=lt()+d,K=g+_;c&&c.abort(),o=!0,H(()=>q(t,!0,"start")),c=at(C=>{if(o){if(C>=K)return y(1,0),q(t,!0,"end"),a(),o=!1;if(C>=g){const B=m((C-g)/_);y(B,1-B)}}return o})}let f=!1;return{start(){f||(f=!0,k(t),M(s)?(s=s(i),bt().then(u)):u())},invalidate(){f=!1},end(){o&&(a(),o=!1)}}}function ee(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ne(t){t&&t.c()}function ie(t,e){t&&t.l(e)}function Lt(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),H(()=>{const o=t.$$.on_mount.map(it).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...o):b(o),t.$$.on_mount=[]}),s.forEach(H)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(et(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mt(t,e){t.$$.dirty[0]===-1&&(st.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function se(t,e,n,i,s,o,r=null,c=[-1]){const l=nt;I(t);const a=t.$$={fragment:null,ctx:[],props:o,update:v,not_equal:s,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:R(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let u=!1;if(a.ctx=n?n(t,e.props||{},(f,d,..._)=>{const m=_.length?_[0]:d;return a.ctx&&s(a.ctx[f],a.ctx[f]=m)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](m),u&&Mt(t,f)),d}):[],a.update(),u=!0,b(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){ot();const f=gt(e.target);a.fragment&&a.fragment.l(f),f.forEach(N)}else a.fragment&&a.fragment.c();e.intro&&St(t.$$.fragment),Lt(t,e.target,e.anchor),ct(),Z()}I(l)}class re{constructor(){h(this,"$$");h(this,"$$set")}$destroy(){Ht(this,1),this.$destroy=v}$on(e,n){if(!M(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Pt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Pt);export{It as A,Vt as B,Ot as C,Kt as D,J as E,Gt as F,Jt as G,L as H,kt as I,ee as J,re as S,gt as a,xt as b,zt as c,N as d,D as e,Ft as f,$t as g,mt as h,se as i,Ut as j,qt as k,yt as l,te as m,Rt as n,Zt as o,Yt as p,St as q,Wt as r,Bt as s,j as t,Xt as u,Qt as v,ne as w,ie as x,Lt as y,Ht as z};
