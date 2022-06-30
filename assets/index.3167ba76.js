const b=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}};b();const x=e=>e*Math.PI/180,w=()=>`#${Math.floor(Math.random()*16777215).toString(16)}`,M=(e,t,o,i="#dc3545")=>{e.beginPath(),e.arc(t,o,1,0,2*Math.PI),e.fillStyle=i,e.fill()},d=9.8,L=(e,t)=>2*e*Math.sin(t)/d,F=(e,t)=>Math.pow(e*Math.sin(t),2)/(2*d),S=(e,t)=>Math.pow(e,2)/d*Math.sin(t*2),P=(e,t,o)=>({x:e*o*Math.cos(t),y:e*o*Math.sin(t)-d*Math.pow(o,2)/2}),a=document.getElementById("canvas"),p=a.getContext("2d"),l=document.querySelector("[data-start]"),q=document.querySelector("[data-reset]"),g=document.querySelector('[name="angle"]'),h=document.querySelector('[name="velocity"]'),c=document.querySelector("[data-results]"),f=c.querySelector("[data-time]"),y=c.querySelector("[data-height]"),v=c.querySelector("[data-distance]");document.addEventListener("DOMContentLoaded",()=>{l.addEventListener("click",H),q.addEventListener("click",u),window.addEventListener("resize",m),m(),u()});const H=()=>{const e=+g.value,t=+h.value;if(e>90||e<0||t<0)return alert("Invalid input");const o=x(e),i=L(t,o),n=F(t,o),r=S(t,o);f.innerHTML=`Flight time: ${i.toFixed(2)}s`,y.innerHTML=`Max height: ${n.toFixed(2)}m`,v.innerHTML=`Distance: ${r.toFixed(2)}m`,I(o,t,i),l.setAttribute("disabled",!0)},I=(e,t,o)=>{let i=0;const n=w();window.interval=setInterval(()=>{const{x:r,y:s}=P(t,e,i);M(p,r,a.height-s,n),i+=.01,i>=o&&(clearInterval(window.interval),l.removeAttribute("disabled"))},10)},u=()=>{window.clearInterval(window==null?void 0:window.interval),l.removeAttribute("disabled"),g.value=h.value="",p.clearRect(0,0,a.width,a.height),f.innerHTML="Flight time: 0.00s",y.innerHTML="Max height: 0.00m",v.innerHTML="Distance: 0.00m"},m=()=>{a.width=window.innerWidth*.8,a.height=window.innerHeight/2};