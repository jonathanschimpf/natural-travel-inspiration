function k(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function S(){return Object.create(null)}function E(t){t.forEach(j)}function A(t){return typeof t=="function"}function B(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function C(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function F(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const r of n)r(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function P(t,n,e){t.$$.on_destroy.push(v(n,e))}function U(t,n,e,r){if(t){const o=m(t,n,e,r);return t[0](o)}}function m(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function D(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|o[s];return l}return n.dirty|o}return n.dirty}function G(t,n,e,r,o,l){if(o){const _=m(n,e,r,l);t.p(_,o)}}function H(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function I(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function J(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function K(t,n,e){return t.set(e),n}let f;function h(t){f=t}function y(){if(!f)throw new Error("Function called outside component initialization");return f}function L(t){y().$$.on_mount.push(t)}function N(t){y().$$.after_update.push(t)}const a=[],g=[];let u=[];const p=[],x=Promise.resolve();let b=!1;function q(){b||(b=!0,x.then(z))}function Q(){return q(),x}function O(t){u.push(t)}function R(t){p.push(t)}const d=new Set;let c=0;function z(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,h(n),M(n.$$)}}catch(n){throw a.length=0,c=0,n}for(h(null),a.length=0,c=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(a.length);for(;p.length;)p.pop()();b=!1,d.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function T(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{J as A,I as B,R as C,N as a,g as b,P as c,C as d,K as e,U as f,H as g,D as h,S as i,z as j,A as k,F as l,O as m,k as n,L as o,T as p,f as q,E as r,B as s,Q as t,G as u,h as v,j as w,a as x,q as y,w as z};