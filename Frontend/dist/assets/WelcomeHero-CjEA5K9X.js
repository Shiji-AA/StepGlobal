import{r as n,j as r}from"./index-CGccgC0W.js";import{g as i,S as y}from"./ScrollTrigger-CKx49QUS.js";const j="/assets/hero6-BZzD1j78.jpg";/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let p=typeof document<"u"?n.useLayoutEffect:n.useEffect,d=e=>e&&!Array.isArray(e)&&typeof e=="object",a=[],w={},g=i;const l=(e,o=a)=>{let s=w;d(e)?(s=e,e=null,o="dependencies"in s?s.dependencies:a):d(o)&&(s=o,o="dependencies"in s?s.dependencies:a),e&&typeof e!="function"&&console.warn("First parameter must be a function or config object");const{scope:u,revertOnUpdate:f}=s,c=n.useRef(!1),t=n.useRef(g.context(()=>{},u)),x=n.useRef(h=>t.current.add(null,h)),m=o&&o.length&&!f;return m&&p(()=>(c.current=!0,()=>t.current.revert()),a),p(()=>{if(e&&t.current.add(e,u),!m||!c.current)return()=>t.current.revert()},o),{context:t.current,contextSafe:x.current}};l.register=e=>{g=e};l.headless=!0;i.registerPlugin(y);function N(){const e=n.useRef(null),o=n.useRef(null),s=n.useRef(null),u=n.useRef(null),f=n.useRef(null),c=n.useRef(null);return l(()=>{const t=i.timeline();t.from(s.current,{scale:1.3,duration:2,ease:"power2.out"}),t.from(e.current,{opacity:0,y:100,duration:1.5,ease:"power2.out"},"-=1.5"),t.from(o.current.children,{opacity:0,y:50,duration:1,ease:"power2.out",stagger:.3},"-=1")}),l(()=>{const t=i.timeline({scrollTrigger:{trigger:u.current,start:"top 80%",toggleActions:"play none none none"}});t.from(f.current,{opacity:0,y:50,duration:1.2,ease:"power2.out"}),t.from(c.current,{opacity:0,y:30,duration:1,ease:"power2.out"},"-=0.5")}),r.jsx(r.Fragment,{children:r.jsx("section",{ref:e,className:" relative bg-white overflow-hidden",children:r.jsxs("div",{className:"relative pt-16 pb-24 flex content-center items-center justify-center min-h-[130vh]",children:[r.jsx("div",{ref:s,className:"absolute top-0 w-full h-full bg-center bg-cover",style:{backgroundImage:`url(${j})`},children:r.jsx("span",{className:"w-full h-full absolute opacity-80 bg-black"})}),r.jsx("div",{className:"container relative mx-auto",children:r.jsx("div",{className:"items-center flex flex-wrap",children:r.jsx("div",{className:"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center",children:r.jsxs("div",{ref:o,className:"pr-12",children:[r.jsx("h1",{className:"text-white font-normal text-5xl",children:"Empower Your Future with Us"}),r.jsx("p",{className:"mt-4 text-lg text-gray-200 font-normal",children:"Explore tailored solutions in architecture, career development, and education support that empower your future."})]})})})})]})})})}export{N as default};
