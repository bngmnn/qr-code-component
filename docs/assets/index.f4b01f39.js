import{r as d,o as l,c as a,a as s,t as u,b as f,d as p}from"./vendor.d8fc1f75.js";const m=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};m();var _="assets/image-qr-code.c38c08d5.png";const h={class:"bg-white rounded-2xl shadow-2xl shadow-black/10 w-80 py-5 font-outfit"},g=s("div",{class:"px-5"},[s("img",{src:_,class:"rounded-xl"})],-1),y={class:"px-7 my-4"},x={class:"text-2xl font-bold text-headline text-center my-4"},v=s("p",{class:"text-base text-copy text-center"},"Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",-1),b={props:{msg:String},setup(r){return d(0),(o,n)=>(l(),a("div",h,[g,s("div",y,[s("h1",x,u(r.msg),1),v])]))}},w={class:"main w-screen h-screen flex justify-center items-center"},k={setup(r){return(o,n)=>(l(),a("div",w,[f(b,{msg:"Improve your front-end skills by building projects"})]))}};p(k).mount("#app");
