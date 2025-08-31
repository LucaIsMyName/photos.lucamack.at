import{h as N,c as z,r as R,u as E,a as C,j as i}from"./index-CHvF8oBg.js";import{C as $}from"./check-fzTiXkNG.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],I=N("copy",B);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]],K=N("copyright",L),V=b=>{const e=z.c(21),{textToCopy:p,className:x,children:h,ariaLabel:w,iconToRight:g}=b,T=g===void 0?!1:g,[m,j]=R.useState(!1),{theme:_}=E();let r;e[0]!==p?(r=async()=>{try{await navigator.clipboard.writeText(p),j(!0),setTimeout(()=>j(!1),2e3)}catch(v){console.error("Failed to copy text: ",v)}},e[0]=p,e[1]=r):r=e[1];const d=r;let n;e[2]===Symbol.for("react.memo_cache_sentinel")?(n=C("min-w-[16px] w-[16px] h-[16px] min-h-[16px]"),e[2]=n):n=e[2];const k=n,y=`text-xs p-1 bg-transparent flex ${T?"flex-row-reverse":""} items-center gap-2`;let t;e[3]!==x||e[4]!==y?(t=C(y,x),e[3]=x,e[4]=y,e[5]=t):t=e[5];const f=w||"Kopieren",u=_==="dark"?"text-red-300":"text-red-600";let s;e[6]!==u?(s=C(u),e[6]=u,e[7]=s):s=e[7];let o;e[8]!==m?(o=m?i.jsx($,{size:16,strokeWidth:2,className:k}):i.jsx(I,{className:k,size:16}),e[8]=m,e[9]=o):o=e[9];let c;e[10]!==s||e[11]!==o?(c=i.jsx("div",{className:s,children:o}),e[10]=s,e[11]=o,e[12]=c):c=e[12];let a;e[13]!==h?(a=i.jsx("span",{children:h}),e[13]=h,e[14]=a):a=e[14];let l;return e[15]!==d||e[16]!==c||e[17]!==a||e[18]!==t||e[19]!==f?(l=i.jsxs("button",{onClick:d,className:t,"aria-label":f,children:[c,a]}),e[15]=d,e[16]=c,e[17]=a,e[18]=t,e[19]=f,e[20]=l):l=e[20],l};export{V as C,K as a};
