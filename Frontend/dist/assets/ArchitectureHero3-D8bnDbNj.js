import{r,j as e}from"./index-CGccgC0W.js";import{S as u,N as p,A as g,a as v}from"./swiper-BD-b569q.js";import{i as n,a,b as o}from"./3-aKqynF8W.js";import{e as N,f}from"./index-Bqx__Q1t.js";function C(){const[s,l]=r.useState(),[c,d]=r.useState(1),t=[{id:1,img:n},{id:2,img:a},{id:3,img:o},{id:4,img:n},{id:5,img:a},{id:6,img:o}],m=()=>e.jsx("button",{className:"swiper-button-next",children:e.jsx(f,{})}),x=()=>e.jsx("button",{className:"swiper-button-prev",children:e.jsx(N,{})}),h=()=>{s==null||s.slidePrev()},j=()=>{s==null||s.slideNext()};return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"p-20",children:[e.jsxs("div",{className:"flex items-center justify-around mb-10",children:[e.jsx("h1",{className:"font-custom text-4xl",children:"StepGlobal Gallery"}),e.jsxs("div",{className:"custom-navigation ",children:[e.jsx("div",{onClick:h,children:e.jsx(x,{})}),e.jsxs("span",{children:[c," / ",t.length]}),e.jsx("div",{onClick:j,children:e.jsx(m,{})})]})]}),e.jsx("div",{children:e.jsxs(u,{className:"h-[500px] px-20 ml-40",modules:[p,g],spaceBetween:50,slidesPerView:1,navigation:{prevE1:".swiper-button-prev",nextE1:".swiper-button-next"},onSwiper:l,onSlideChange:i=>d(i.activeIndex+1),children:[t.map(i=>e.jsx("div",{children:e.jsx(v,{children:e.jsx("img",{className:"h-full object-cover  w-[100%] rounded-xl",src:i.img,alt:""})})},i.id)),"..."]})})]})})}export{C as default};
