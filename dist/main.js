!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,(function(){return(()=>{"use strict";var e={866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d,downloadPng:()=>a,downloadSvg:()=>u});const o="http://www.w3.org/2000/xmlns/",r="http://www.w3.org/2000/svg",i=function(e,{css:t="inline"}={}){if(!(e instanceof SVGElement))throw new Error("SVG element is required");e.setAttribute("version","1.1"),e.removeAttribute("xmlns"),e.removeAttribute("xlink"),e.hasAttributeNS(o,"xmlns")||e.setAttributeNS(o,"xmlns",r),e.hasAttributeNS(o,"xmlns:xlink")||e.setAttributeNS(o,"xmlns:xlink","http://www.w3.org/1999/xlink"),"inline"===t?function(e,t){function n(e){const n=getComputedStyle(e);let o,r,i="";for(let e=0,l=n.length;e<l;e++)o=n[e],r=n.getPropertyValue(o),r!==t.getPropertyValue(o)&&(i+=`${o}:${r};`);e.setAttribute("style",i)}const o=function(e){const t=[];return t.push(e),function e(n){if(n&&n.hasChildNodes()){let o=n.firstChild;for(;o;)1===o.nodeType&&"SCRIPT"!==o.nodeName&&(t.push(o),e(o)),o=o.nextSibling}}(e),t}(e);let r=o.length;for(;r--;)n(o[r])}(e,function(){let e=document.createElementNS(r,"svg");document.body.appendChild(e),e.style.all="initial";const t=getComputedStyle(e);return document.body.removeChild(e),e=null,t}()):"internal"===t&&function(e){const t=document.createElement("style");t.innerHTML=Array.from(document.styleSheets).map((e=>Array.from(e.cssRules).map((e=>e.cssText)).join(" "))).join(" "),e.prepend(t)}(e);const n=(new XMLSerializer).serializeToString(e),i=e.getBoundingClientRect();return{top:i.top,left:i.left,width:e.width.baseVal.value,height:e.height.baseVal.value,class:e.getAttribute("class"),id:e.getAttribute("id"),name:e.getAttribute("name"),childElementCount:e.childElementCount,source:'<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'+n}};function l(e){if(!(e instanceof SVGElement))throw new Error("SVG Element is required");return e.getAttribute("id")||e.getAttribute("class")||document.title.replace(/[^a-z0-9]/gi,"-").toLowerCase()||"untitled"}function s(e,t,n){const o=document.createElement("a");document.body.appendChild(o),o.setAttribute("class","svg-crowbar"),o.setAttribute("download",e),o.setAttribute("href",t),o.style.display="none",o.click(),setTimeout((()=>{n&&n(),document.body.removeChild(o)}),10)}const u=(e,t,n)=>function(e,t="untitled"){const n=URL.createObjectURL(new Blob([e.source],{type:"text/xml"}));s(`${t}.svg`,n,(()=>URL.revokeObjectURL(n)))}(i(e,n),t||l(e)),d=u,a=(e,t,n)=>function(e,t="untitled"){const n=document.createElement("canvas"),o=window.devicePixelRatio||1;document.body.appendChild(n),n.setAttribute("id","svg-image"),n.setAttribute("width",e.width*o),n.setAttribute("height",e.height*o),n.style.display="none";const r=n.getContext("2d"),i=e.source.replace(/[\u00A0-\u2666]/g,(e=>`&#${e.charCodeAt(0)};`)),l=`data:image/svg+xml;base64,${btoa(i)}`,u=new Image;u.onload=function(){r.scale(o,o),r.drawImage(u,0,0);const e=n.toDataURL("image/png");s(`${t}.png`,e,(()=>document.body.removeChild(n)))},u.src=l}(i(e,n),t||l(e))}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}return n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(866)})()}));