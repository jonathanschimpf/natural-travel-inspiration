import{i as j,s as T,a as x,n as w,b as H}from"../chunks/scheduler.xP9QEsb2.js";import{S as M,i as P,e as c,s as _,c as u,a as k,f as I,k as S,d as v,l as i,g as C,h as o,m as L}from"../chunks/index.DluVGltP.js";import{b as G}from"../chunks/paths.ZRpinR9y.js";function K(d,{delay:e=0,duration:t=400,easing:a=j}={}){const b=+getComputedStyle(d).opacity;return{delay:e,duration:t,easing:a,css:h=>`opacity: ${h*b}`}}function N(d){let e,t,a,b,h,m,s,g=`South Kaibab Trail @ Grand Canyon National Park. Arizona, USA. Photo by
			<a class="link-to-my-dev-page-tiny svelte-18nbl1b" href="https://jonathanschimpf.dev" rel="noreferrer" target="_blank" aria-label="JonathanSchimpf.dev">Jonathan Schimpf (me)</a>.`,f,r,y=`<span class="natural-span svelte-18nbl1b">Natural Travel Inspiration</span> — We all live in cities or suburbs
		and we work from businesses, offices or work from home. Having manmade structures be the main
		setting where many of us spend most of our time, we should take the time to explore. Given the
		beauty of nature and the shortness of our lifetimes, we should enjoy it while we can. I&#39;ve lived
		and worked in and around a city for a long time, but in the evenings or on weekends I have
		always sought out opportunities to get out and enjoy what was here before I was born. Many of my
		travels have revolved around it. So I made this web project as a way to inspire myself and
		others. It pulls random images from the
		<a class="unsplash-link svelte-18nbl1b" href="https://www.unsplash.com" rel="noreferrer" target="_blank" aria-label="Unsplash Link">Unsplash<span class="copyright-span svelte-18nbl1b">©</span></a>
		API that were created by photographers from all over the world that contribute their images to that
		platform. Each random image presented credits them below it if you&#39;re curious. If you would prefer
		to be slightly more specific about a random image you can hit the form at the bottom to search. No guarantees! This simple web project was the first time that I have
		built anything using
		<a class="svelte-link svelte-18nbl1b" href="https://kit.svelte.dev/" rel="noreferrer" target="_blank" aria-label="SvelteKit">SvelteKit</a>
		 (a powerful and flexible framework for building web applications) and I don&#39;t believe it will be the last. I really enjoy it. You can check out the GitHub repository
		<a class="natural-travel-repository svelte-18nbl1b" href="https://github.com/jonathanschimpf/natural-travel-inspiration" rel="noreferrer" target="_blank" aria-label="Natural Travel Inspiration Repository">here</a>.

		<br/> <br/> - Jonathan Schimpf`;return{c(){e=c("div"),t=c("div"),a=c("img"),m=_(),s=c("p"),s.innerHTML=g,f=_(),r=c("p"),r.innerHTML=y,this.h()},l(n){e=u(n,"DIV",{class:!0});var l=k(e);t=u(l,"DIV",{class:!0});var p=k(t);a=u(p,"IMG",{src:!0,class:!0,alt:!0}),m=I(p),s=u(p,"P",{class:!0,"data-svelte-h":!0}),S(s)!=="svelte-3jopso"&&(s.innerHTML=g),p.forEach(v),f=I(l),r=u(l,"P",{class:!0,"data-svelte-h":!0}),S(r)!=="svelte-ff9a9w"&&(r.innerHTML=y),l.forEach(v),this.h()},h(){x(a.src,b=`${G}/assets/south_kaibab_day-hike.png`)||i(a,"src",b),i(a,"class","about-south_kaibab_image svelte-18nbl1b"),i(a,"alt","South Kaibab Day Hike"),i(s,"class","giving-yourself-credit svelte-18nbl1b"),i(t,"class","image-and-self-credit-container svelte-18nbl1b"),i(r,"class","about-writeup svelte-18nbl1b"),i(e,"class","about-container svelte-18nbl1b")},m(n,l){C(n,e,l),o(e,t),o(t,a),o(t,m),o(t,s),o(e,f),o(e,r)},p:w,i(n){n&&(h||H(()=>{h=L(a,K,{delay:0,duration:750}),h.start()}))},o:w,d(n){n&&v(e)}}}class J extends M{constructor(e){super(),P(this,e,null,N,T,{})}}export{J as component};
