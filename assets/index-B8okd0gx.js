const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-DVk1Q1f-.js","assets/Login-DK6Bytgc.css","assets/AgentsList-BYP--0uz.js","assets/AgentsList-D2SBiCCx.css","assets/NewAgent-DGf5jWg8.js","assets/modifiers-BfF6OfeI.js","assets/DiceRoller-BSrPIokk.js","assets/DiceRoller-DHsps-2N.css","assets/NewAgent-B9uEZIhm.css","assets/ViewAgent-DG0BBbTR.js","assets/ViewAgent-DLAZ8hl_.css","assets/MissionView-DFXcxPjl.js","assets/MissionView-rekUkYUh.css","assets/PublicSheets-tRWWrm2l.js","assets/PublicSheets-1NamK2n_.css","assets/Rules-C6_1_X68.js","assets/Rules-uRNVW9dJ.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function iu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},ys=[],hn=()=>{},eg=()=>!1,La=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fa=t=>t.startsWith("onUpdate:"),at=Object.assign,ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sv=Object.prototype.hasOwnProperty,be=(t,e)=>Sv.call(t,e),se=Array.isArray,vs=t=>Yi(t)==="[object Map]",Ms=t=>Yi(t)==="[object Set]",df=t=>Yi(t)==="[object Date]",pe=t=>typeof t=="function",Ue=t=>typeof t=="string",Wt=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",tg=t=>(Pe(t)||pe(t))&&pe(t.then)&&pe(t.catch),ng=Object.prototype.toString,Yi=t=>ng.call(t),Pv=t=>Yi(t).slice(8,-1),rg=t=>Yi(t)==="[object Object]",Ua=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_i=iu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ba=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Cv=/-\w/g,Rt=Ba(t=>t.replace(Cv,e=>e.slice(1).toUpperCase())),kv=/\B([A-Z])/g,Qr=Ba(t=>t.replace(kv,"-$1").toLowerCase()),ja=Ba(t=>t.charAt(0).toUpperCase()+t.slice(1)),xc=Ba(t=>t?`on${ja(t)}`:""),un=(t,e)=>!Object.is(t,e),qo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},sg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},qa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pf;const $a=()=>pf||(pf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function au(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?Vv(r):au(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Pe(t))return t}const Ov=/;(?![^(]*\))/g,Nv=/:([^]+)/,Dv=/\/\*[^]*?\*\//g;function Vv(t){const e={};return t.replace(Dv,"").split(Ov).forEach(n=>{if(n){const r=n.split(Nv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Di(t){let e="";if(Ue(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=Di(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mv=iu(xv);function ig(t){return!!t||t===""}function Lv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=gr(t[r],e[r]);return n}function gr(t,e){if(t===e)return!0;let n=df(t),r=df(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Wt(t),r=Wt(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?Lv(t,e):!1;if(n=Pe(t),r=Pe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!gr(t[o],e[o]))return!1}}return String(t)===String(e)}function cu(t,e){return t.findIndex(n=>gr(n,e))}const og=t=>!!(t&&t.__v_isRef===!0),na=t=>Ue(t)?t:t==null?"":se(t)||Pe(t)&&(t.toString===ng||!pe(t.toString))?og(t)?na(t.value):JSON.stringify(t,ag,2):String(t),ag=(t,e)=>og(e)?ag(t,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Mc(r,i)+" =>"]=s,n),{})}:Ms(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Mc(n))}:Wt(e)?Mc(e):Pe(e)&&!se(e)&&!rg(e)?String(e):e,Mc=(t,e="")=>{var n;return Wt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let et;class cg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=et,!e&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=et;try{return et=this,e()}finally{et=n}}}on(){++this._on===1&&(this.prevScope=et,et=this)}off(){if(this._on>0&&--this._on===0){if(et===this)et=this.prevScope;else{let e=et;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function lg(t){return new cg(t)}function ug(){return et}function Fv(t,e=!1){et&&et.cleanups.push(t)}let Ne;const Lc=new WeakSet;class hg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,et&&et.active&&et.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Lc.has(this)&&(Lc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gf(this),pg(this);const e=Ne,n=Zt;Ne=this,Zt=!0;try{return this.fn()}finally{gg(this),Ne=e,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hu(e);this.deps=this.depsTail=void 0,gf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Lc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dl(this)&&this.run()}get dirty(){return dl(this)}}let fg=0,yi,vi;function dg(t,e=!1){if(t.flags|=8,e){t.next=vi,vi=t;return}t.next=yi,yi=t}function lu(){fg++}function uu(){if(--fg>0)return;if(vi){let e=vi;for(vi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;yi;){let e=yi;for(yi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function pg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),hu(r),Uv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function dl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function mg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Vi)||(t.globalVersion=Vi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!dl(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=Zt;Ne=t,Zt=!0;try{pg(t);const s=t.fn(t._value);(e.version===0||un(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,Zt=r,gg(t),t.flags&=-3}}function hu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)hu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Uv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zt=!0;const _g=[];function Bn(){_g.push(Zt),Zt=!1}function jn(){const t=_g.pop();Zt=t===void 0?!0:t}function gf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let Vi=0;class Bv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!Zt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new Bv(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,yg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,Vi++,this.notify(e)}notify(e){lu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{uu()}}}function yg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)yg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ra=new WeakMap,Ur=Symbol(""),pl=Symbol(""),xi=Symbol("");function pt(t,e,n){if(Zt&&Ne){let r=ra.get(t);r||ra.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new fu),s.map=r,s.key=n),s.track()}}function On(t,e,n,r,s,i){const o=ra.get(t);if(!o){Vi++;return}const c=l=>{l&&l.trigger()};if(lu(),e==="clear")o.forEach(c);else{const l=se(t),u=l&&Ua(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===xi||!Wt(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(xi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Ur)),vs(t)&&c(o.get(pl)));break;case"delete":l||(c(o.get(Ur)),vs(t)&&c(o.get(pl)));break;case"set":vs(t)&&c(o.get(Ur));break}}uu()}function jv(t,e){const n=ra.get(t);return n&&n.get(e)}function cs(t){const e=we(t);return e===t?e:(pt(e,"iterate",xi),Lt(t)?e:e.map(en))}function Ha(t){return pt(t=we(t),"iterate",xi),t}function cn(t,e){return qn(t)?Rs(Mn(t)?en(e):e):en(e)}const qv={__proto__:null,[Symbol.iterator](){return Fc(this,Symbol.iterator,t=>cn(this,t))},concat(...t){return cs(this).concat(...t.map(e=>se(e)?cs(e):e))},entries(){return Fc(this,"entries",t=>(t[1]=cn(this,t[1]),t))},every(t,e){return Sn(this,"every",t,e,void 0,arguments)},filter(t,e){return Sn(this,"filter",t,e,n=>n.map(r=>cn(this,r)),arguments)},find(t,e){return Sn(this,"find",t,e,n=>cn(this,n),arguments)},findIndex(t,e){return Sn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Sn(this,"findLast",t,e,n=>cn(this,n),arguments)},findLastIndex(t,e){return Sn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Sn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Uc(this,"includes",t)},indexOf(...t){return Uc(this,"indexOf",t)},join(t){return cs(this).join(t)},lastIndexOf(...t){return Uc(this,"lastIndexOf",t)},map(t,e){return Sn(this,"map",t,e,void 0,arguments)},pop(){return ri(this,"pop")},push(...t){return ri(this,"push",t)},reduce(t,...e){return mf(this,"reduce",t,e)},reduceRight(t,...e){return mf(this,"reduceRight",t,e)},shift(){return ri(this,"shift")},some(t,e){return Sn(this,"some",t,e,void 0,arguments)},splice(...t){return ri(this,"splice",t)},toReversed(){return cs(this).toReversed()},toSorted(t){return cs(this).toSorted(t)},toSpliced(...t){return cs(this).toSpliced(...t)},unshift(...t){return ri(this,"unshift",t)},values(){return Fc(this,"values",t=>cn(this,t))}};function Fc(t,e,n){const r=Ha(t),s=r[e]();return r!==t&&!Lt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const $v=Array.prototype;function Sn(t,e,n,r,s,i){const o=Ha(t),c=o!==t&&!Lt(t),l=o[e];if(l!==$v[e]){const p=l.apply(t,i);return c?en(p):p}let u=n;o!==t&&(c?u=function(p,g){return n.call(this,cn(t,p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function mf(t,e,n,r){const s=Ha(t),i=s!==t&&!Lt(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,f,p){return c&&(c=!1,u=cn(t,u)),n.call(this,u,cn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const l=s[e](o,...r);return c?cn(t,l):l}function Uc(t,e,n){const r=we(t);pt(r,"iterate",xi);const s=r[e](...n);return(s===-1||s===!1)&&Wa(n[0])?(n[0]=we(n[0]),r[e](...n)):s}function ri(t,e,n=[]){Bn(),lu();const r=we(t)[e].apply(t,n);return uu(),jn(),r}const Hv=iu("__proto__,__v_isRef,__isVue"),vg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wt));function Wv(t){Wt(t)||(t=String(t));const e=we(this);return pt(e,"has",t),e.hasOwnProperty(t)}class Eg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?tE:Ag:i?wg:Ig).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){let l;if(o&&(l=qv[n]))return l;if(n==="hasOwnProperty")return Wv}const c=Reflect.get(e,n,$e(e)?e:r);if((Wt(n)?vg.has(n):Hv(n))||(s||pt(e,"get",n),i))return c;if($e(c)){const l=o&&Ua(n)?c:c.value;return s&&Pe(l)?ml(l):l}return Pe(c)?s?ml(c):Xi(c):c}}class Tg extends Eg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=se(e)&&Ua(n);if(!this._isShallow){const u=qn(i);if(!Lt(r)&&!qn(r)&&(i=we(i),r=we(r)),!o&&$e(i)&&!$e(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:be(e,n),l=Reflect.set(e,n,r,$e(e)?e:s);return e===we(s)&&(c?un(r,i)&&On(e,"set",n,r):On(e,"add",n,r)),l}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&On(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Wt(n)||!vg.has(n))&&pt(e,"has",n),r}ownKeys(e){return pt(e,"iterate",se(e)?"length":Ur),Reflect.ownKeys(e)}}class Gv extends Eg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zv=new Tg,Kv=new Gv,Qv=new Tg(!0);const gl=t=>t,ko=t=>Reflect.getPrototypeOf(t);function Jv(t,e,n){return function(...r){const s=this.__v_raw,i=we(s),o=vs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?gl:e?Rs:en;return!e&&pt(i,"iterate",l?pl:Ur),at(Object.create(u),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function Oo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Yv(t,e){const n={get(s){const i=this.__v_raw,o=we(i),c=we(s);t||(un(s,c)&&pt(o,"get",s),pt(o,"get",c));const{has:l}=ko(o),u=e?gl:t?Rs:en;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pt(we(s),"iterate",Ur),s.size},has(s){const i=this.__v_raw,o=we(i),c=we(s);return t||(un(s,c)&&pt(o,"has",s),pt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=we(c),u=e?gl:t?Rs:en;return!t&&pt(l,"iterate",Ur),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return at(n,t?{add:Oo("add"),set:Oo("set"),delete:Oo("delete"),clear:Oo("clear")}:{add(s){const i=we(this),o=ko(i),c=we(s),l=!e&&!Lt(s)&&!qn(s)?c:s;return o.has.call(i,l)||un(s,l)&&o.has.call(i,s)||un(c,l)&&o.has.call(i,c)||(i.add(l),On(i,"add",l,l)),this},set(s,i){!e&&!Lt(i)&&!qn(i)&&(i=we(i));const o=we(this),{has:c,get:l}=ko(o);let u=c.call(o,s);u||(s=we(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?un(i,f)&&On(o,"set",s,i):On(o,"add",s,i),this},delete(s){const i=we(this),{has:o,get:c}=ko(i);let l=o.call(i,s);l||(s=we(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&On(i,"delete",s,void 0),u},clear(){const s=we(this),i=s.size!==0,o=s.clear();return i&&On(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Jv(s,t,e)}),n}function du(t,e){const n=Yv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const Xv={get:du(!1,!1)},Zv={get:du(!1,!0)},eE={get:du(!0,!1)};const Ig=new WeakMap,wg=new WeakMap,Ag=new WeakMap,tE=new WeakMap;function nE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rE(t){return t.__v_skip||!Object.isExtensible(t)?0:nE(Pv(t))}function Xi(t){return qn(t)?t:pu(t,!1,zv,Xv,Ig)}function Rg(t){return pu(t,!1,Qv,Zv,wg)}function ml(t){return pu(t,!0,Kv,eE,Ag)}function pu(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=rE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Mn(t){return qn(t)?Mn(t.__v_raw):!!(t&&t.__v_isReactive)}function qn(t){return!!(t&&t.__v_isReadonly)}function Lt(t){return!!(t&&t.__v_isShallow)}function Wa(t){return t?!!t.__v_raw:!1}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function gu(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&sg(t,"__v_skip",!0),t}const en=t=>Pe(t)?Xi(t):t,Rs=t=>Pe(t)?ml(t):t;function $e(t){return t?t.__v_isRef===!0:!1}function ms(t){return bg(t,!1)}function sE(t){return bg(t,!0)}function bg(t,e){return $e(t)?t:new iE(t,e)}class iE{constructor(e,n){this.dep=new fu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:we(e),this._value=n?e:en(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Lt(e)||qn(e);e=r?e:we(e),un(e,n)&&(this._rawValue=e,this._value=r?e:en(e),this.dep.trigger())}}function At(t){return $e(t)?t.value:t}const oE={get:(t,e,n)=>e==="__v_raw"?t:At(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Sg(t){return Mn(t)?t:new Proxy(t,oE)}function aE(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=lE(t,n);return e}class cE{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Wt(n)?n:String(n),this._raw=we(e);let s=!0,i=e;if(!se(e)||Wt(this._key)||!Ua(this._key))do s=!Wa(i)||Lt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=At(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&$e(this._raw[this._key])){const n=this._object[this._key];if($e(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return jv(this._raw,this._key)}}function lE(t,e,n){return new cE(t,e,n)}class uE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new fu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return dg(this,!0),!0}get value(){const e=this.dep.track();return mg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function hE(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new uE(r,s,n)}const No={},sa=new WeakMap;let Vr;function fE(t,e=!1,n=Vr){if(n){let r=sa.get(n);r||sa.set(n,r=[]),r.push(t)}}function dE(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=q=>s?q:Lt(q)||s===!1||s===0?Nn(q,1):Nn(q);let f,p,g,y,b=!1,S=!1;if($e(t)?(p=()=>t.value,b=Lt(t)):Mn(t)?(p=()=>u(t),b=!0):se(t)?(S=!0,b=t.some(q=>Mn(q)||Lt(q)),p=()=>t.map(q=>{if($e(q))return q.value;if(Mn(q))return u(q);if(pe(q))return l?l(q,2):q()})):pe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){Bn();try{g()}finally{jn()}}const q=Vr;Vr=f;try{return l?l(t,3,[y]):t(y)}finally{Vr=q}}:p=hn,e&&s){const q=p,Z=s===!0?1/0:s;p=()=>Nn(q(),Z)}const O=ug(),j=()=>{f.stop(),O&&O.active&&ou(O.effects,f)};if(i&&e){const q=e;e=(...Z)=>{q(...Z),j()}}let D=S?new Array(t.length).fill(No):No;const B=q=>{if(!(!(f.flags&1)||!f.dirty&&!q))if(e){const Z=f.run();if(s||b||(S?Z.some((le,I)=>un(le,D[I])):un(Z,D))){g&&g();const le=Vr;Vr=f;try{const I=[Z,D===No?void 0:S&&D[0]===No?[]:D,y];D=Z,l?l(e,3,I):e(...I)}finally{Vr=le}}}else f.run()};return c&&c(B),f=new hg(p),f.scheduler=o?()=>o(B,!1):B,y=q=>fE(q,!1,f),g=f.onStop=()=>{const q=sa.get(f);if(q){if(l)l(q,4);else for(const Z of q)Z();sa.delete(f)}},e?r?B(!0):D=f.run():o?o(B.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function Nn(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,$e(t))Nn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)Nn(t[r],e,n);else if(Ms(t)||vs(t))t.forEach(r=>{Nn(r,e,n)});else if(rg(t)){for(const r in t)Nn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Nn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ga(s,e,n)}}function En(t,e,n,r){if(pe(t)){const s=Zi(t,e,n,r);return s&&tg(s)&&s.catch(i=>{Ga(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(En(t[i],e,n,r));return s}}function Ga(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Bn(),Zi(i,null,10,[t,l,u]),jn();return}}pE(t,n,s,r,o)}function pE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let on=-1;const Es=[];let rr=null,us=0;const Pg=Promise.resolve();let ia=null;function za(t){const e=ia||Pg;return t?e.then(this?t.bind(this):t):e}function gE(t){let e=on+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=Mi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function mu(t){if(!(t.flags&1)){const e=Mi(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=Mi(n)?wt.push(t):wt.splice(gE(e),0,t),t.flags|=1,Cg()}}function Cg(){ia||(ia=Pg.then(Og))}function mE(t){se(t)?Es.push(...t):rr&&t.id===-1?rr.splice(us+1,0,t):t.flags&1||(Es.push(t),t.flags|=1),Cg()}function _f(t,e,n=on+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function kg(t){if(Es.length){const e=[...new Set(Es)].sort((n,r)=>Mi(n)-Mi(r));if(Es.length=0,rr){rr.push(...e);return}for(rr=e,us=0;us<rr.length;us++){const n=rr[us];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}rr=null,us=0}}const Mi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Og(t){try{for(on=0;on<wt.length;on++){const e=wt[on];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;on<wt.length;on++){const e=wt[on];e&&(e.flags&=-2)}on=-1,wt.length=0,kg(),ia=null,(wt.length||Es.length)&&Og()}}let xt=null,Ng=null;function oa(t){const e=xt;return xt=t,Ng=t&&t.type.__scopeId||null,e}function aa(t,e=xt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ua(-1);const i=oa(e);let o;try{o=t(...s)}finally{oa(i),r._d&&ua(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function U1(t,e){if(xt===null)return t;const n=Ya(xt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=ke]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Nn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Nr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Bn(),En(l,n,8,[t.el,c,t,e]),jn())}}function $o(t,e){if(mt){let n=mt.provides;const r=mt.parent&&mt.parent.provides;r===n&&(n=mt.provides=Object.create(r)),n[t]=e}}function $t(t,e,n=!1){const r=im();if(r||Br){let s=Br?Br._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function _E(){return!!(im()||Br)}const yE=Symbol.for("v-scx"),vE=()=>$t(yE);function Ei(t,e,n){return Dg(t,e,n)}function Dg(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:o}=n,c=at({},n),l=e&&r||!e&&i!=="post";let u;if(Ui){if(i==="sync"){const y=vE();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=hn,y.resume=hn,y.pause=hn,y}}const f=mt;c.call=(y,b,S)=>En(y,f,b,S);let p=!1;i==="post"?c.scheduler=y=>{Tt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,b)=>{b?y():mu(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const g=dE(t,e,c);return Ui&&(u?u.push(g):l&&g()),g}function EE(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?Vg(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=eo(this),c=Dg(s,i.bind(r),n);return o(),c}function Vg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const tr=new WeakMap,xg=Symbol("_vte"),TE=t=>t.__isTeleport,Mr=t=>t&&(t.disabled||t.disabled===""),IE=t=>t&&(t.defer||t.defer===""),yf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,vf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,_l=(t,e)=>{const n=t&&t.to;return Ue(n)?e?e(n):null:n},wE={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:f,pc:p,pbc:g,o:{insert:y,querySelector:b,createText:S,createComment:O,parentNode:j}}=u,D=Mr(e.props);let{dynamicChildren:B}=e;const q=(I,_,v)=>{I.shapeFlag&16&&f(I.children,_,v,s,i,o,c,l)},Z=(I=e)=>{const _=Mr(I.props),v=I.target=_l(I.props,b),A=yl(v,I,S,y);v&&(o!=="svg"&&yf(v)?o="svg":o!=="mathml"&&vf(v)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(v),_||(q(I,v,A),ci(I,!1)))},le=I=>{const _=()=>{if(tr.get(I)===_){if(tr.delete(I),Mr(I.props)){const v=j(I.el)||n;q(I,v,I.anchor),ci(I,!0)}Z(I)}};tr.set(I,_),Tt(_,i)};if(t==null){const I=e.el=S(""),_=e.anchor=S("");if(y(I,n,r),y(_,n,r),IE(e.props)||i&&i.pendingBranch){le(e);return}D&&(q(e,n,_),ci(e,!0)),Z()}else{e.el=t.el;const I=e.anchor=t.anchor,_=tr.get(t);if(_){_.flags|=8,tr.delete(t),le(e);return}e.targetStart=t.targetStart;const v=e.target=t.target,A=e.targetAnchor=t.targetAnchor,R=Mr(t.props),P=R?n:v,T=R?I:A;if(o==="svg"||yf(v)?o="svg":(o==="mathml"||vf(v))&&(o="mathml"),B?(g(t.dynamicChildren,B,P,s,i,o,c),Eu(t,e,!0)):l||p(t,e,P,T,s,i,o,c,!1),D)R?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Do(e,n,I,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Ge=e.target=_l(e.props,b);Ge&&Do(e,Ge,null,u,0)}else R&&Do(e,v,A,u,1);ci(e,D)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:u,targetAnchor:f,target:p,props:g}=t;let y=i||!Mr(g);const b=tr.get(t);if(b&&(b.flags|=8,tr.delete(t),y=!1),p&&(s(u),s(f)),i&&s(l),o&16)for(let S=0;S<c.length;S++){const O=c[S];r(O,e,n,y,!!O.dynamicChildren)}},move:Do,hydrate:AE};function Do(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:f}=t,p=i===2;if(p&&r(o,e,n),!tr.has(t)&&(!p||Mr(f))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);p&&r(c,e,n)}function AE(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:u,createText:f}},p){function g(O,j){let D=j;for(;D;){if(D&&D.nodeType===8){if(D.data==="teleport start anchor")e.targetStart=D;else if(D.data==="teleport anchor"){e.targetAnchor=D,O._lpa=e.targetAnchor&&o(e.targetAnchor);break}}D=o(D)}}function y(O,j){j.anchor=p(o(O),j,c(O),n,r,s,i)}const b=e.target=_l(e.props,l),S=Mr(e.props);if(b){const O=b._lpa||b.firstChild;e.shapeFlag&16&&(S?(y(t,e),g(b,O),e.targetAnchor||yl(b,e,f,u,c(t)===b?t:null)):(e.anchor=o(t),g(b,O),e.targetAnchor||yl(b,e,f,u),p(O&&o(O),e,b,n,r,s,i))),ci(e,S)}else S&&e.shapeFlag&16&&(y(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const B1=wE;function ci(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function yl(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[xg]=o,t&&(r(i,t,s),r(o,t,s)),o}const RE=Symbol("_leaveCb");function _u(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_u(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ls(t,e){return pe(t)?at({name:t.name},e,{setup:t}):t}function Mg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ef(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ca=new WeakMap;function Ti(t,e,n,r,s=!1){if(se(t)){t.forEach((S,O)=>Ti(S,e&&(se(e)?e[O]:e),n,r,s));return}if(Ii(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ti(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ya(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===ke?c.refs={}:c.refs,p=c.setupState,g=we(p),y=p===ke?eg:S=>Ef(f,S)?!1:be(g,S),b=(S,O)=>!(O&&Ef(f,O));if(u!=null&&u!==l){if(Tf(e),Ue(u))f[u]=null,y(u)&&(p[u]=null);else if($e(u)){const S=e;b(u,S.k)&&(u.value=null),S.k&&(f[S.k]=null)}}if(pe(l))Zi(l,c,12,[o,f]);else{const S=Ue(l),O=$e(l);if(S||O){const j=()=>{if(t.f){const D=S?y(l)?p[l]:f[l]:b()||!t.k?l.value:f[t.k];if(s)se(D)&&ou(D,i);else if(se(D))D.includes(i)||D.push(i);else if(S)f[l]=[i],y(l)&&(p[l]=f[l]);else{const B=[i];b(l,t.k)&&(l.value=B),t.k&&(f[t.k]=B)}}else S?(f[l]=o,y(l)&&(p[l]=o)):O&&(b(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const D=()=>{j(),ca.delete(t)};D.id=-1,ca.set(t,D),Tt(D,n)}else Tf(t),j()}}}function Tf(t){const e=ca.get(t);e&&(e.flags|=8,ca.delete(t))}$a().requestIdleCallback;$a().cancelIdleCallback;const Ii=t=>!!t.type.__asyncLoader,Lg=t=>t.type.__isKeepAlive;function bE(t,e){Fg(t,"a",e)}function SE(t,e){Fg(t,"da",e)}function Fg(t,e,n=mt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ka(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Lg(s.parent.vnode)&&PE(r,e,n,s),s=s.parent}}function PE(t,e,n,r){const s=Ka(e,t,r,!0);Ug(()=>{ou(r[e],s)},n)}function Ka(t,e,n=mt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Bn();const c=eo(n),l=En(e,n,t,o);return c(),jn(),l});return r?s.unshift(i):s.push(i),i}}const zn=t=>(e,n=mt)=>{(!Ui||t==="sp")&&Ka(t,(...r)=>e(...r),n)},CE=zn("bm"),kE=zn("m"),OE=zn("bu"),NE=zn("u"),DE=zn("bum"),Ug=zn("um"),VE=zn("sp"),xE=zn("rtg"),ME=zn("rtc");function LE(t,e=mt){Ka("ec",t,e)}const FE="components";function Bg(t,e){return BE(FE,t,!0,e)||t}const UE=Symbol.for("v-ndc");function BE(t,e,n=!0,r=!1){const s=xt||mt;if(s){const i=s.type;{const c=RT(i,!1);if(c&&(c===e||c===Rt(e)||c===ja(Rt(e))))return i}const o=If(s[t]||i[t],e)||If(s.appContext[t],e);return!o&&r?i:o}}function If(t,e){return t&&(t[e]||t[Rt(e)]||t[ja(Rt(e))])}function jE(t,e,n,r){let s;const i=n,o=se(t);if(o||Ue(t)){const c=o&&Mn(t);let l=!1,u=!1;c&&(l=!Lt(t),u=qn(t),t=Ha(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?Rs(en(t[f])):en(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Pe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const vl=t=>t?om(t)?Ya(t):vl(t.parent):null,wi=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vl(t.parent),$root:t=>vl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qg(t),$forceUpdate:t=>t.f||(t.f=()=>{mu(t.update)}),$nextTick:t=>t.n||(t.n=za.bind(t.proxy)),$watch:t=>EE.bind(t)}),Bc=(t,e)=>t!==ke&&!t.__isScriptSetup&&be(t,e),qE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Bc(r,e))return o[e]=1,r[e];if(s!==ke&&be(s,e))return o[e]=2,s[e];if(be(i,e))return o[e]=3,i[e];if(n!==ke&&be(n,e))return o[e]=4,n[e];El&&(o[e]=0)}}const u=wi[e];let f,p;if(u)return e==="$attrs"&&pt(t.attrs,"get",""),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==ke&&be(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,be(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Bc(s,e)?(s[e]=n,!0):r!==ke&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==ke&&c[0]!=="$"&&be(t,c)||Bc(e,c)||be(i,c)||be(r,c)||be(wi,c)||be(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wf(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let El=!0;function $E(t){const e=qg(t),n=t.proxy,r=t.ctx;El=!1,e.beforeCreate&&Af(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:y,updated:b,activated:S,deactivated:O,beforeDestroy:j,beforeUnmount:D,destroyed:B,unmounted:q,render:Z,renderTracked:le,renderTriggered:I,errorCaptured:_,serverPrefetch:v,expose:A,inheritAttrs:R,components:P,directives:T,filters:Ge}=e;if(u&&HE(u,r,null),o)for(const ue in o){const ye=o[ue];pe(ye)&&(r[ue]=ye.bind(n))}if(s){const ue=s.call(n,n);Pe(ue)&&(t.data=Xi(ue))}if(El=!0,i)for(const ue in i){const ye=i[ue],Ot=pe(ye)?ye.bind(n,n):pe(ye.get)?ye.get.bind(n,n):hn,zt=!pe(ye)&&pe(ye.set)?ye.set.bind(n):hn,Ft=kt({get:Ot,set:zt});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:Me=>Ft.value=Me})}if(c)for(const ue in c)jg(c[ue],r,n,ue);if(l){const ue=pe(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(ye=>{$o(ye,ue[ye])})}f&&Af(f,t,"c");function Oe(ue,ye){se(ye)?ye.forEach(Ot=>ue(Ot.bind(n))):ye&&ue(ye.bind(n))}if(Oe(CE,p),Oe(kE,g),Oe(OE,y),Oe(NE,b),Oe(bE,S),Oe(SE,O),Oe(LE,_),Oe(ME,le),Oe(xE,I),Oe(DE,D),Oe(Ug,q),Oe(VE,v),se(A))if(A.length){const ue=t.exposed||(t.exposed={});A.forEach(ye=>{Object.defineProperty(ue,ye,{get:()=>n[ye],set:Ot=>n[ye]=Ot,enumerable:!0})})}else t.exposed||(t.exposed={});Z&&t.render===hn&&(t.render=Z),R!=null&&(t.inheritAttrs=R),P&&(t.components=P),T&&(t.directives=T),v&&Mg(t)}function HE(t,e,n=hn){se(t)&&(t=Tl(t));for(const r in t){const s=t[r];let i;Pe(s)?"default"in s?i=$t(s.from||r,s.default,!0):i=$t(s.from||r):i=$t(s),$e(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Af(t,e,n){En(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function jg(t,e,n,r){let s=r.includes(".")?Vg(n,r):()=>n[r];if(Ue(t)){const i=e[t];pe(i)&&Ei(s,i)}else if(pe(t))Ei(s,t.bind(n));else if(Pe(t))if(se(t))t.forEach(i=>jg(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Ei(s,i,t)}}function qg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>la(l,u,o,!0)),la(l,e,o)),Pe(e)&&i.set(e,l),l}function la(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&la(t,i,n,!0),s&&s.forEach(o=>la(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=WE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const WE={data:Rf,props:bf,emits:bf,methods:li,computed:li,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:li,directives:li,watch:zE,provide:Rf,inject:GE};function Rf(t,e){return e?t?function(){return at(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function GE(t,e){return li(Tl(t),Tl(e))}function Tl(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function li(t,e){return t?at(Object.create(null),t,e):e}function bf(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:at(Object.create(null),wf(t),wf(e??{})):e}function zE(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=Et(t[r],e[r]);return n}function $g(){return{app:null,config:{isNativeTag:eg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let KE=0;function QE(t,e){return function(r,s=null){pe(r)||(r=at({},r)),s!=null&&!Pe(s)&&(s=null);const i=$g(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:KE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ST,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...p)):pe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!l){const y=u._ceVNode||ot(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(y,f,g),l=!0,u._container=f,f.__vue_app__=u,Ya(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(En(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Br;Br=u;try{return f()}finally{Br=p}}};return u}}let Br=null;const JE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Rt(e)}Modifiers`]||t[`${Qr(e)}Modifiers`];function YE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&JE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ue(f)?f.trim():f)),o.number&&(s=n.map(qa)));let c,l=r[c=xc(e)]||r[c=xc(Rt(e))];!l&&i&&(l=r[c=xc(Qr(e))]),l&&En(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,En(u,t,6,s)}}const XE=new WeakMap;function Hg(t,e,n=!1){const r=n?XE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const f=Hg(u,e,!0);f&&(c=!0,at(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Pe(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):at(o,i),Pe(t)&&r.set(t,o),o)}function Qa(t,e){return!t||!La(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Qr(e))||be(t,e))}function Sf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:g,setupState:y,ctx:b,inheritAttrs:S}=t,O=oa(t);let j,D;try{if(n.shapeFlag&4){const q=s||r,Z=q;j=ln(u.call(Z,q,f,p,y,g,b)),D=c}else{const q=e;j=ln(q.length>1?q(p,{attrs:c,slots:o,emit:l}):q(p,null)),D=e.props?c:ZE(c)}}catch(q){Ai.length=0,Ga(q,t,1),j=ot(mr)}let B=j;if(D&&S!==!1){const q=Object.keys(D),{shapeFlag:Z}=B;q.length&&Z&7&&(i&&q.some(Fa)&&(D=eT(D,i)),B=bs(B,D,!1,!0))}return n.dirs&&(B=bs(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&_u(B,n.transition),j=B,oa(O),j}const ZE=t=>{let e;for(const n in t)(n==="class"||n==="style"||La(n))&&((e||(e={}))[n]=t[n]);return e},eT=(t,e)=>{const n={};for(const r in t)(!Fa(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Pf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(Wg(o,r,g)&&!Qa(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Pf(r,o,u):!0:!!o;return!1}function Pf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Wg(e,t,i)&&!Qa(n,i))return!0}return!1}function Wg(t,e,n){const r=t[n],s=e[n];return n==="style"&&Pe(r)&&Pe(s)?!gr(r,s):r!==s}function nT({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Gg={},zg=()=>Object.create(Gg),Kg=t=>Object.getPrototypeOf(t)===Gg;function rT(t,e,n,r=!1){const s={},i=zg();t.propsDefaults=Object.create(null),Qg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Rg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=we(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Qa(t.emitsOptions,g))continue;const y=e[g];if(l)if(be(i,g))y!==i[g]&&(i[g]=y,u=!0);else{const b=Rt(g);s[b]=Il(l,c,b,y,t,!1)}else y!==i[g]&&(i[g]=y,u=!0)}}}else{Qg(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!be(e,p)&&((f=Qr(p))===p||!be(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Il(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!be(e,p))&&(delete i[p],u=!0)}u&&On(t.attrs,"set","")}function Qg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(_i(l))continue;const u=e[l];let f;s&&be(s,f=Rt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Qa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=we(n),u=c||ke;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Il(s,l,p,u[p],t,!be(u,p))}}return o}function Il(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=be(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=eo(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Qr(n))&&(r=!0))}return r}const iT=new WeakMap;function Jg(t,e,n=!1){const r=n?iT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const f=p=>{l=!0;const[g,y]=Jg(p,e,!0);at(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Pe(t)&&r.set(t,ys),ys;if(se(i))for(let f=0;f<i.length;f++){const p=Rt(i[f]);Cf(p)&&(o[p]=ke)}else if(i)for(const f in i){const p=Rt(f);if(Cf(p)){const g=i[f],y=o[p]=se(g)||pe(g)?{type:g}:at({},g),b=y.type;let S=!1,O=!0;if(se(b))for(let j=0;j<b.length;++j){const D=b[j],B=pe(D)&&D.name;if(B==="Boolean"){S=!0;break}else B==="String"&&(O=!1)}else S=pe(b)&&b.name==="Boolean";y[0]=S,y[1]=O,(S||be(y,"default"))&&c.push(p)}}const u=[o,c];return Pe(t)&&r.set(t,u),u}function Cf(t){return t[0]!=="$"&&!_i(t)}const yu=t=>t==="_"||t==="_ctx"||t==="$stable",vu=t=>se(t)?t.map(ln):[ln(t)],oT=(t,e,n)=>{if(e._n)return e;const r=aa((...s)=>vu(e(...s)),n);return r._c=!1,r},Yg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yu(s))continue;const i=t[s];if(pe(i))e[s]=oT(s,i,r);else if(i!=null){const o=vu(i);e[s]=()=>o}}},Xg=(t,e)=>{const n=vu(e);t.slots.default=()=>n},Zg=(t,e,n)=>{for(const r in e)(n||!yu(r))&&(t[r]=e[r])},aT=(t,e,n)=>{const r=t.slots=zg();if(t.vnode.shapeFlag&32){const s=e._;s?(Zg(r,e,n),n&&sg(r,"_",s,!0)):Yg(e,r)}else e&&Xg(t,e)},cT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Zg(s,e,n):(i=!e.$stable,Yg(e,s)),o=e}else e&&(Xg(t,e),o={default:1});if(i)for(const c in s)!yu(c)&&o[c]==null&&delete s[c]},Tt=dT;function lT(t){return uT(t)}function uT(t,e){const n=$a();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:y=hn,insertStaticContent:b}=t,S=(E,w,C,V=null,U=null,M=null,z=void 0,G=null,H=!!w.dynamicChildren)=>{if(E===w)return;E&&!si(E,w)&&(V=x(E),Me(E,U,M,!0),E=null),w.patchFlag===-2&&(H=!1,w.dynamicChildren=null);const{type:$,ref:re,shapeFlag:Q}=w;switch($){case Ja:O(E,w,C,V);break;case mr:j(E,w,C,V);break;case Ho:E==null&&D(w,C,V,z);break;case Qt:P(E,w,C,V,U,M,z,G,H);break;default:Q&1?Z(E,w,C,V,U,M,z,G,H):Q&6?T(E,w,C,V,U,M,z,G,H):(Q&64||Q&128)&&$.process(E,w,C,V,U,M,z,G,H,ee)}re!=null&&U?Ti(re,E&&E.ref,M,w||E,!w):re==null&&E&&E.ref!=null&&Ti(E.ref,null,M,E,!0)},O=(E,w,C,V)=>{if(E==null)r(w.el=c(w.children),C,V);else{const U=w.el=E.el;w.children!==E.children&&u(U,w.children)}},j=(E,w,C,V)=>{E==null?r(w.el=l(w.children||""),C,V):w.el=E.el},D=(E,w,C,V)=>{[E.el,E.anchor]=b(E.children,w,C,V,E.el,E.anchor)},B=({el:E,anchor:w},C,V)=>{let U;for(;E&&E!==w;)U=g(E),r(E,C,V),E=U;r(w,C,V)},q=({el:E,anchor:w})=>{let C;for(;E&&E!==w;)C=g(E),s(E),E=C;s(w)},Z=(E,w,C,V,U,M,z,G,H)=>{if(w.type==="svg"?z="svg":w.type==="math"&&(z="mathml"),E==null)le(w,C,V,U,M,z,G,H);else{const $=E.el&&E.el._isVueCE?E.el:null;try{$&&$._beginPatch(),v(E,w,U,M,z,G,H)}finally{$&&$._endPatch()}}},le=(E,w,C,V,U,M,z,G)=>{let H,$;const{props:re,shapeFlag:Q,transition:te,dirs:ie}=E;if(H=E.el=o(E.type,M,re&&re.is,re),Q&8?f(H,E.children):Q&16&&_(E.children,H,null,V,U,jc(E,M),z,G),ie&&Nr(E,null,V,"created"),I(H,E,E.scopeId,z,V),re){for(const de in re)de!=="value"&&!_i(de)&&i(H,de,null,re[de],M,V);"value"in re&&i(H,"value",null,re.value,M),($=re.onVnodeBeforeMount)&&sn($,V,E)}ie&&Nr(E,null,V,"beforeMount");const oe=hT(U,te);oe&&te.beforeEnter(H),r(H,w,C),(($=re&&re.onVnodeMounted)||oe||ie)&&Tt(()=>{try{$&&sn($,V,E),oe&&te.enter(H),ie&&Nr(E,null,V,"mounted")}finally{}},U)},I=(E,w,C,V,U)=>{if(C&&y(E,C),V)for(let M=0;M<V.length;M++)y(E,V[M]);if(U){let M=U.subTree;if(w===M||nm(M.type)&&(M.ssContent===w||M.ssFallback===w)){const z=U.vnode;I(E,z,z.scopeId,z.slotScopeIds,U.parent)}}},_=(E,w,C,V,U,M,z,G,H=0)=>{for(let $=H;$<E.length;$++){const re=E[$]=G?kn(E[$]):ln(E[$]);S(null,re,w,C,V,U,M,z,G)}},v=(E,w,C,V,U,M,z)=>{const G=w.el=E.el;let{patchFlag:H,dynamicChildren:$,dirs:re}=w;H|=E.patchFlag&16;const Q=E.props||ke,te=w.props||ke;let ie;if(C&&Dr(C,!1),(ie=te.onVnodeBeforeUpdate)&&sn(ie,C,w,E),re&&Nr(w,E,C,"beforeUpdate"),C&&Dr(C,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&f(G,""),$?A(E.dynamicChildren,$,G,C,V,jc(w,U),M):z||ye(E,w,G,null,C,V,jc(w,U),M,!1),H>0){if(H&16)R(G,Q,te,C,U);else if(H&2&&Q.class!==te.class&&i(G,"class",null,te.class,U),H&4&&i(G,"style",Q.style,te.style,U),H&8){const oe=w.dynamicProps;for(let de=0;de<oe.length;de++){const Ae=oe[de],Fe=Q[Ae],ze=te[Ae];(ze!==Fe||Ae==="value")&&i(G,Ae,Fe,ze,U,C)}}H&1&&E.children!==w.children&&f(G,w.children)}else!z&&$==null&&R(G,Q,te,C,U);((ie=te.onVnodeUpdated)||re)&&Tt(()=>{ie&&sn(ie,C,w,E),re&&Nr(w,E,C,"updated")},V)},A=(E,w,C,V,U,M,z)=>{for(let G=0;G<w.length;G++){const H=E[G],$=w[G],re=H.el&&(H.type===Qt||!si(H,$)||H.shapeFlag&198)?p(H.el):C;S(H,$,re,null,V,U,M,z,!0)}},R=(E,w,C,V,U)=>{if(w!==C){if(w!==ke)for(const M in w)!_i(M)&&!(M in C)&&i(E,M,w[M],null,U,V);for(const M in C){if(_i(M))continue;const z=C[M],G=w[M];z!==G&&M!=="value"&&i(E,M,G,z,U,V)}"value"in C&&i(E,"value",w.value,C.value,U)}},P=(E,w,C,V,U,M,z,G,H)=>{const $=w.el=E?E.el:c(""),re=w.anchor=E?E.anchor:c("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:ie}=w;ie&&(G=G?G.concat(ie):ie),E==null?(r($,C,V),r(re,C,V),_(w.children||[],C,re,U,M,z,G,H)):Q>0&&Q&64&&te&&E.dynamicChildren&&E.dynamicChildren.length===te.length?(A(E.dynamicChildren,te,C,U,M,z,G),(w.key!=null||U&&w===U.subTree)&&Eu(E,w,!0)):ye(E,w,C,re,U,M,z,G,H)},T=(E,w,C,V,U,M,z,G,H)=>{w.slotScopeIds=G,E==null?w.shapeFlag&512?U.ctx.activate(w,C,V,z,H):Ge(w,C,V,U,M,z,H):bt(E,w,H)},Ge=(E,w,C,V,U,M,z)=>{const G=E.component=ET(E,V,U);if(Lg(E)&&(G.ctx.renderer=ee),TT(G,!1,z),G.asyncDep){if(U&&U.registerDep(G,Oe,z),!E.el){const H=G.subTree=ot(mr);j(null,H,w,C),E.placeholder=H.el}}else Oe(G,E,w,C,U,M,z)},bt=(E,w,C)=>{const V=w.component=E.component;if(tT(E,w,C))if(V.asyncDep&&!V.asyncResolved){ue(V,w,C);return}else V.next=w,V.update();else w.el=E.el,V.vnode=w},Oe=(E,w,C,V,U,M,z)=>{const G=()=>{if(E.isMounted){let{next:Q,bu:te,u:ie,parent:oe,vnode:de}=E;{const lt=em(E);if(lt){Q&&(Q.el=de.el,ue(E,Q,z)),lt.asyncDep.then(()=>{Tt(()=>{E.isUnmounted||$()},U)});return}}let Ae=Q,Fe;Dr(E,!1),Q?(Q.el=de.el,ue(E,Q,z)):Q=de,te&&qo(te),(Fe=Q.props&&Q.props.onVnodeBeforeUpdate)&&sn(Fe,oe,Q,de),Dr(E,!0);const ze=Sf(E),Ut=E.subTree;E.subTree=ze,S(Ut,ze,p(Ut.el),x(Ut),E,U,M),Q.el=ze.el,Ae===null&&nT(E,ze.el),ie&&Tt(ie,U),(Fe=Q.props&&Q.props.onVnodeUpdated)&&Tt(()=>sn(Fe,oe,Q,de),U)}else{let Q;const{el:te,props:ie}=w,{bm:oe,m:de,parent:Ae,root:Fe,type:ze}=E,Ut=Ii(w);Dr(E,!1),oe&&qo(oe),!Ut&&(Q=ie&&ie.onVnodeBeforeMount)&&sn(Q,Ae,w),Dr(E,!0);{Fe.ce&&Fe.ce._hasShadowRoot()&&Fe.ce._injectChildStyle(ze,E.parent?E.parent.type:void 0);const lt=E.subTree=Sf(E);S(null,lt,C,V,E,U,M),w.el=lt.el}if(de&&Tt(de,U),!Ut&&(Q=ie&&ie.onVnodeMounted)){const lt=w;Tt(()=>sn(Q,Ae,lt),U)}(w.shapeFlag&256||Ae&&Ii(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&E.a&&Tt(E.a,U),E.isMounted=!0,w=C=V=null}};E.scope.on();const H=E.effect=new hg(G);E.scope.off();const $=E.update=H.run.bind(H),re=E.job=H.runIfDirty.bind(H);re.i=E,re.id=E.uid,H.scheduler=()=>mu(re),Dr(E,!0),$()},ue=(E,w,C)=>{w.component=E;const V=E.vnode.props;E.vnode=w,E.next=null,sT(E,w.props,V,C),cT(E,w.children,C),Bn(),_f(E),jn()},ye=(E,w,C,V,U,M,z,G,H=!1)=>{const $=E&&E.children,re=E?E.shapeFlag:0,Q=w.children,{patchFlag:te,shapeFlag:ie}=w;if(te>0){if(te&128){zt($,Q,C,V,U,M,z,G,H);return}else if(te&256){Ot($,Q,C,V,U,M,z,G,H);return}}ie&8?(re&16&&St($,U,M),Q!==$&&f(C,Q)):re&16?ie&16?zt($,Q,C,V,U,M,z,G,H):St($,U,M,!0):(re&8&&f(C,""),ie&16&&_(Q,C,V,U,M,z,G,H))},Ot=(E,w,C,V,U,M,z,G,H)=>{E=E||ys,w=w||ys;const $=E.length,re=w.length,Q=Math.min($,re);let te;for(te=0;te<Q;te++){const ie=w[te]=H?kn(w[te]):ln(w[te]);S(E[te],ie,C,null,U,M,z,G,H)}$>re?St(E,U,M,!0,!1,Q):_(w,C,V,U,M,z,G,H,Q)},zt=(E,w,C,V,U,M,z,G,H)=>{let $=0;const re=w.length;let Q=E.length-1,te=re-1;for(;$<=Q&&$<=te;){const ie=E[$],oe=w[$]=H?kn(w[$]):ln(w[$]);if(si(ie,oe))S(ie,oe,C,null,U,M,z,G,H);else break;$++}for(;$<=Q&&$<=te;){const ie=E[Q],oe=w[te]=H?kn(w[te]):ln(w[te]);if(si(ie,oe))S(ie,oe,C,null,U,M,z,G,H);else break;Q--,te--}if($>Q){if($<=te){const ie=te+1,oe=ie<re?w[ie].el:V;for(;$<=te;)S(null,w[$]=H?kn(w[$]):ln(w[$]),C,oe,U,M,z,G,H),$++}}else if($>te)for(;$<=Q;)Me(E[$],U,M,!0),$++;else{const ie=$,oe=$,de=new Map;for($=oe;$<=te;$++){const nt=w[$]=H?kn(w[$]):ln(w[$]);nt.key!=null&&de.set(nt.key,$)}let Ae,Fe=0;const ze=te-oe+1;let Ut=!1,lt=0;const Qn=new Array(ze);for($=0;$<ze;$++)Qn[$]=0;for($=ie;$<=Q;$++){const nt=E[$];if(Fe>=ze){Me(nt,U,M,!0);continue}let Bt;if(nt.key!=null)Bt=de.get(nt.key);else for(Ae=oe;Ae<=te;Ae++)if(Qn[Ae-oe]===0&&si(nt,w[Ae])){Bt=Ae;break}Bt===void 0?Me(nt,U,M,!0):(Qn[Bt-oe]=$+1,Bt>=lt?lt=Bt:Ut=!0,S(nt,w[Bt],C,null,U,M,z,G,H),Fe++)}const Hs=Ut?fT(Qn):ys;for(Ae=Hs.length-1,$=ze-1;$>=0;$--){const nt=oe+$,Bt=w[nt],po=w[nt+1],rs=nt+1<re?po.el||tm(po):V;Qn[$]===0?S(null,Bt,C,rs,U,M,z,G,H):Ut&&(Ae<0||$!==Hs[Ae]?Ft(Bt,C,rs,2):Ae--)}}},Ft=(E,w,C,V,U=null)=>{const{el:M,type:z,transition:G,children:H,shapeFlag:$}=E;if($&6){Ft(E.component.subTree,w,C,V);return}if($&128){E.suspense.move(w,C,V);return}if($&64){z.move(E,w,C,ee);return}if(z===Qt){r(M,w,C);for(let Q=0;Q<H.length;Q++)Ft(H[Q],w,C,V);r(E.anchor,w,C);return}if(z===Ho){B(E,w,C);return}if(V!==2&&$&1&&G)if(V===0)G.beforeEnter(M),r(M,w,C),Tt(()=>G.enter(M),U);else{const{leave:Q,delayLeave:te,afterLeave:ie}=G,oe=()=>{E.ctx.isUnmounted?s(M):r(M,w,C)},de=()=>{M._isLeaving&&M[RE](!0),Q(M,()=>{oe(),ie&&ie()})};te?te(M,oe,de):de()}else r(M,w,C)},Me=(E,w,C,V=!1,U=!1)=>{const{type:M,props:z,ref:G,children:H,dynamicChildren:$,shapeFlag:re,patchFlag:Q,dirs:te,cacheIndex:ie,memo:oe}=E;if(Q===-2&&(U=!1),G!=null&&(Bn(),Ti(G,null,C,E,!0),jn()),ie!=null&&(w.renderCache[ie]=void 0),re&256){w.ctx.deactivate(E);return}const de=re&1&&te,Ae=!Ii(E);let Fe;if(Ae&&(Fe=z&&z.onVnodeBeforeUnmount)&&sn(Fe,w,E),re&6)Nt(E.component,C,V);else{if(re&128){E.suspense.unmount(C,V);return}de&&Nr(E,null,w,"beforeUnmount"),re&64?E.type.remove(E,w,C,ee,V):$&&!$.hasOnce&&(M!==Qt||Q>0&&Q&64)?St($,w,C,!1,!0):(M===Qt&&Q&384||!U&&re&16)&&St(H,w,C),V&&Le(E)}const ze=oe!=null&&ie==null;(Ae&&(Fe=z&&z.onVnodeUnmounted)||de||ze)&&Tt(()=>{Fe&&sn(Fe,w,E),de&&Nr(E,null,w,"unmounted"),ze&&(E.el=null)},C)},Le=E=>{const{type:w,el:C,anchor:V,transition:U}=E;if(w===Qt){Kn(C,V);return}if(w===Ho){q(E);return}const M=()=>{s(C),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(E.shapeFlag&1&&U&&!U.persisted){const{leave:z,delayLeave:G}=U,H=()=>z(C,M);G?G(E.el,M,H):H()}else M()},Kn=(E,w)=>{let C;for(;E!==w;)C=g(E),s(E),E=C;s(w)},Nt=(E,w,C)=>{const{bum:V,scope:U,job:M,subTree:z,um:G,m:H,a:$}=E;kf(H),kf($),V&&qo(V),U.stop(),M&&(M.flags|=8,Me(z,E,w,C)),G&&Tt(G,w),Tt(()=>{E.isUnmounted=!0},w)},St=(E,w,C,V=!1,U=!1,M=0)=>{for(let z=M;z<E.length;z++)Me(E[z],w,C,V,U)},x=E=>{if(E.shapeFlag&6)return x(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=g(E.anchor||E.el),C=w&&w[xg];return C?g(C):w};let X=!1;const K=(E,w,C)=>{let V;E==null?w._vnode&&(Me(w._vnode,null,null,!0),V=w._vnode.component):S(w._vnode||null,E,w,null,null,null,C),w._vnode=E,X||(X=!0,_f(V),kg(),X=!1)},ee={p:S,um:Me,m:Ft,r:Le,mt:Ge,mc:_,pc:ye,pbc:A,n:x,o:t};return{render:K,hydrate:void 0,createApp:QE(K)}}function jc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function hT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Eu(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=kn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Eu(o,c)),c.type===Ja&&(c.patchFlag===-1&&(c=s[i]=kn(c)),c.el=o.el),c.type===mr&&!c.el&&(c.el=o.el)}}function fT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function em(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:em(e)}function kf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function tm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?tm(e.subTree):null}const nm=t=>t.__isSuspense;function dT(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):mE(t)}const Qt=Symbol.for("v-fgt"),Ja=Symbol.for("v-txt"),mr=Symbol.for("v-cmt"),Ho=Symbol.for("v-stc"),Ai=[];let Mt=null;function Xe(t=!1){Ai.push(Mt=t?null:[])}function pT(){Ai.pop(),Mt=Ai[Ai.length-1]||null}let Li=1;function ua(t,e=!1){Li+=t,t<0&&Mt&&e&&(Mt.hasOnce=!0)}function rm(t){return t.dynamicChildren=Li>0?Mt||ys:null,pT(),Li>0&&Mt&&Mt.push(t),t}function Pt(t,e,n,r,s,i){return rm(me(t,e,n,r,s,i,!0))}function Fi(t,e,n,r,s){return rm(ot(t,e,n,r,s,!0))}function ha(t){return t?t.__v_isVNode===!0:!1}function si(t,e){return t.type===e.type&&t.key===e.key}const sm=({key:t})=>t??null,Wo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||$e(t)||pe(t)?{i:xt,r:t,k:e,f:!!n}:t:null);function me(t,e=null,n=null,r=0,s=null,i=t===Qt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sm(e),ref:e&&Wo(e),scopeId:Ng,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xt};return c?(Tu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),Li>0&&!o&&Mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Mt.push(l),l}const ot=gT;function gT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===UE)&&(t=mr),ha(t)){const c=bs(t,e,!0);return n&&Tu(c,n),Li>0&&!i&&Mt&&(c.shapeFlag&6?Mt[Mt.indexOf(t)]=c:Mt.push(c)),c.patchFlag=-2,c}if(bT(t)&&(t=t.__vccOpts),e){e=mT(e);let{class:c,style:l}=e;c&&!Ue(c)&&(e.class=Di(c)),Pe(l)&&(Wa(l)&&!se(l)&&(l=at({},l)),e.style=au(l))}const o=Ue(t)?1:nm(t)?128:TE(t)?64:Pe(t)?4:pe(t)?2:0;return me(t,e,n,r,s,o,i,!0)}function mT(t){return t?Wa(t)||Kg(t)?at({},t):t:null}function bs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?_T(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&sm(u),ref:e&&e.ref?n&&i?se(i)?i.concat(Wo(e)):[i,Wo(e)]:Wo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bs(t.ssContent),ssFallback:t.ssFallback&&bs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&_u(f,l.clone(f)),f}function fa(t=" ",e=0){return ot(Ja,null,t,e)}function j1(t,e){const n=ot(Ho,null,t);return n.staticCount=e,n}function Of(t="",e=!1){return e?(Xe(),Fi(mr,null,t)):ot(mr,null,t)}function ln(t){return t==null||typeof t=="boolean"?ot(mr):se(t)?ot(Qt,null,t.slice()):ha(t)?kn(t):ot(Ja,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bs(t)}function Tu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Tu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Kg(e)?e._ctx=xt:s===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:xt},n=32):(e=String(e),r&64?(n=16,e=[fa(e)]):n=8);t.children=e,t.shapeFlag|=n}function _T(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Di([e.class,r.class]));else if(s==="style")e.style=au([e.style,r.style]);else if(La(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Fa(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){En(t,e,7,[n,r])}const yT=$g();let vT=0;function ET(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||yT,i={uid:vT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jg(r,s),emitsOptions:Hg(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=YE.bind(null,i),t.ce&&t.ce(i),i}let mt=null;const im=()=>mt||xt;let da,wl;{const t=$a(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};da=e("__VUE_INSTANCE_SETTERS__",n=>mt=n),wl=e("__VUE_SSR_SETTERS__",n=>Ui=n)}const eo=t=>{const e=mt;return da(t),t.scope.on(),()=>{t.scope.off(),da(e)}},Nf=()=>{mt&&mt.scope.off(),da(null)};function om(t){return t.vnode.shapeFlag&4}let Ui=!1;function TT(t,e=!1,n=!1){e&&wl(e);const{props:r,children:s}=t.vnode,i=om(t);rT(t,r,i,e),aT(t,s,n||e);const o=i?IT(t,e):void 0;return e&&wl(!1),o}function IT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qE);const{setup:r}=n;if(r){Bn();const s=t.setupContext=r.length>1?AT(t):null,i=eo(t),o=Zi(r,t,0,[t.props,s]),c=tg(o);if(jn(),i(),(c||t.sp)&&!Ii(t)&&Mg(t),c){if(o.then(Nf,Nf),e)return o.then(l=>{Df(t,l)}).catch(l=>{Ga(l,t,0)});t.asyncDep=o}else Df(t,o)}else am(t)}function Df(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=Sg(e)),am(t)}function am(t,e,n){const r=t.type;t.render||(t.render=r.render||hn);{const s=eo(t);Bn();try{$E(t)}finally{jn(),s()}}}const wT={get(t,e){return pt(t,"get",""),t[e]}};function AT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wT),slots:t.slots,emit:t.emit,expose:e}}function Ya(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Sg(gu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in wi)return wi[n](t)},has(e,n){return n in e||n in wi}})):t.proxy}function RT(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function bT(t){return pe(t)&&"__vccOpts"in t}const kt=(t,e)=>hE(t,e,Ui);function cm(t,e,n){try{ua(-1);const r=arguments.length;return r===2?Pe(e)&&!se(e)?ha(e)?ot(t,null,[e]):ot(t,e):ot(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ha(n)&&(n=[n]),ot(t,e,n))}finally{ua(1)}}const ST="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Al;const Vf=typeof window<"u"&&window.trustedTypes;if(Vf)try{Al=Vf.createPolicy("vue",{createHTML:t=>t})}catch{}const lm=Al?t=>Al.createHTML(t):t=>t,PT="http://www.w3.org/2000/svg",CT="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,xf=Cn&&Cn.createElement("template"),kT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Cn.createElementNS(PT,t):e==="mathml"?Cn.createElementNS(CT,t):n?Cn.createElement(t,{is:n}):Cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{xf.innerHTML=lm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=xf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},OT=Symbol("_vtc");function NT(t,e,n){const r=t[OT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pa=Symbol("_vod"),um=Symbol("_vsh"),q1={name:"show",beforeMount(t,{value:e},{transition:n}){t[pa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ii(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ii(t,!0),r.enter(t)):r.leave(t,()=>{ii(t,!1)}):ii(t,e))},beforeUnmount(t,{value:e}){ii(t,e)}};function ii(t,e){t.style.display=e?t[pa]:"none",t[um]=!e}const DT=Symbol(""),VT=/(?:^|;)\s*display\s*:/;function xT(t,e,n){const r=t.style,s=Ue(n);let i=!1;if(n&&!s){if(e)if(Ue(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ui(r,c,"")}else for(const o in e)n[o]==null&&ui(r,o,"");for(const o in n){o==="display"&&(i=!0);const c=n[o];c!=null?LT(t,o,!Ue(e)&&e?e[o]:void 0,c)||ui(r,o,c):ui(r,o,"")}}else if(s){if(e!==n){const o=r[DT];o&&(n+=";"+o),r.cssText=n,i=VT.test(n)}}else e&&t.removeAttribute("style");pa in t&&(t[pa]=i?r.display:"",t[um]&&(r.display="none"))}const Mf=/\s*!important$/;function ui(t,e,n){if(se(n))n.forEach(r=>ui(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=MT(t,e);Mf.test(n)?t.setProperty(Qr(r),n.replace(Mf,""),"important"):t[r]=n}}const Lf=["Webkit","Moz","ms"],qc={};function MT(t,e){const n=qc[e];if(n)return n;let r=Rt(e);if(r!=="filter"&&r in t)return qc[e]=r;r=ja(r);for(let s=0;s<Lf.length;s++){const i=Lf[s]+r;if(i in t)return qc[e]=i}return e}function LT(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ue(r)&&n===r}const Ff="http://www.w3.org/1999/xlink";function Uf(t,e,n,r,s,i=Mv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ff,e.slice(6,e.length)):t.setAttributeNS(Ff,e,n):n==null||i&&!ig(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Wt(n)?String(n):n)}function Bf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?lm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ig(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Dn(t,e,n,r){t.addEventListener(e,n,r)}function FT(t,e,n,r){t.removeEventListener(e,n,r)}const jf=Symbol("_vei");function UT(t,e,n,r,s=null){const i=t[jf]||(t[jf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=BT(e);if(r){const u=i[e]=$T(r,s);Dn(t,c,u,l)}else o&&(FT(t,c,o,l),i[e]=void 0)}}const qf=/(?:Once|Passive|Capture)$/;function BT(t){let e;if(qf.test(t)){e={};let r;for(;r=t.match(qf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qr(t.slice(2)),e]}let $c=0;const jT=Promise.resolve(),qT=()=>$c||(jT.then(()=>$c=0),$c=Date.now());function $T(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;En(HT(r,n.value),e,5,[r])};return n.value=t,n.attached=qT(),n}function HT(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $f=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,WT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?NT(t,r,o):e==="style"?xT(t,n,r):La(e)?Fa(e)||UT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):GT(t,e,r,o))?(Bf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Uf(t,e,r,o,i,e!=="value")):t._isVueCE&&(zT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ue(r)))?Bf(t,Rt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Uf(t,e,r,o))};function GT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&$f(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $f(e)&&Ue(n)?!1:e in t}function zT(t,e){const n=t._def.props;if(!n)return!1;const r=Rt(e);return Array.isArray(n)?n.some(s=>Rt(s)===r):Object.keys(n).some(s=>Rt(s)===r)}const _r=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>qo(e,n):e};function KT(t){t.target.composing=!0}function Hf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ht=Symbol("_assign");function Wf(t,e,n){return e&&(t=t.trim()),n&&(t=qa(t)),t}const $1={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ht]=_r(s);const i=r||s.props&&s.props.type==="number";Dn(t,e?"change":"input",o=>{o.target.composing||t[Ht](Wf(t.value,n,i))}),(n||i)&&Dn(t,"change",()=>{t.value=Wf(t.value,n,i)}),e||(Dn(t,"compositionstart",KT),Dn(t,"compositionend",Hf),Dn(t,"change",Hf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ht]=_r(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?qa(t.value):t.value,l=e??"";if(c===l)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},H1={deep:!0,created(t,e,n){t[Ht]=_r(n),Dn(t,"change",()=>{const r=t._modelValue,s=Ss(t),i=t.checked,o=t[Ht];if(se(r)){const c=cu(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(Ms(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(hm(t,i))})},mounted:Gf,beforeUpdate(t,e,n){t[Ht]=_r(n),Gf(t,e,n)}};function Gf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(se(e))s=cu(e,r.props.value)>-1;else if(Ms(e))s=e.has(r.props.value);else{if(e===n)return;s=gr(e,hm(t,!0))}t.checked!==s&&(t.checked=s)}const W1={created(t,{value:e},n){t.checked=gr(e,n.props.value),t[Ht]=_r(n),Dn(t,"change",()=>{t[Ht](Ss(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Ht]=_r(r),e!==n&&(t.checked=gr(e,r.props.value))}},G1={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ms(e);Dn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?qa(Ss(o)):Ss(o));t[Ht](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,za(()=>{t._assigning=!1})}),t[Ht]=_r(r)},mounted(t,{value:e}){zf(t,e)},beforeUpdate(t,e,n){t[Ht]=_r(n)},updated(t,{value:e}){t._assigning||zf(t,e)}};function zf(t,e){const n=t.multiple,r=se(e);if(!(n&&!r&&!Ms(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Ss(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=cu(e,c)>-1}else o.selected=e.has(c);else if(gr(Ss(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ss(t){return"_value"in t?t._value:t.value}function hm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const QT=["ctrl","shift","alt","meta"],JT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>QT.some(n=>t[`${n}Key`]&&!e.includes(n))},z1=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=JT[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},YT=at({patchProp:WT},kT);let Kf;function XT(){return Kf||(Kf=lT(YT))}const ZT=((...t)=>{const e=XT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=tI(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,eI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function eI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tI(t){return Ue(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let fm;const Xa=t=>fm=t,dm=Symbol();function Rl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ri;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ri||(Ri={}));function nI(){const t=lg(!0),e=t.run(()=>ms({}));let n=[],r=[];const s=gu({install(i){Xa(s),s._a=i,i.provide(dm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const pm=()=>{};function Qf(t,e,n,r=pm){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&ug()&&Fv(s),s}function ls(t,...e){t.forEach(n=>{n(...e)})}const rI=t=>t(),Jf=Symbol(),Hc=Symbol();function bl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Rl(s)&&Rl(r)&&t.hasOwnProperty(n)&&!$e(r)&&!Mn(r)?t[n]=bl(s,r):t[n]=r}return t}const sI=Symbol();function iI(t){return!Rl(t)||!Object.prototype.hasOwnProperty.call(t,sI)}const{assign:nr}=Object;function oI(t){return!!($e(t)&&t.effect)}function aI(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=aE(n.state.value[t]);return nr(f,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=gu(kt(()=>{Xa(n);const y=n._s.get(t);return o[g].call(y,y)})),p),{}))}return l=gm(t,u,e,n,r,!0),l}function gm(t,e,n={},r,s,i){let o;const c=nr({actions:{}},n),l={deep:!0};let u,f,p=new Set,g=new Set,y;const b=r.state.value[t];!i&&!b&&(r.state.value[t]={});let S;function O(_){let v;u=f=!1,typeof _=="function"?(_(r.state.value[t]),v={type:Ri.patchFunction,storeId:t,events:y}):(bl(r.state.value[t],_),v={type:Ri.patchObject,payload:_,storeId:t,events:y});const A=S=Symbol();za().then(()=>{S===A&&(u=!0)}),f=!0,ls(p,v,r.state.value[t])}const j=i?function(){const{state:v}=n,A=v?v():{};this.$patch(R=>{nr(R,A)})}:pm;function D(){o.stop(),p.clear(),g.clear(),r._s.delete(t)}const B=(_,v="")=>{if(Jf in _)return _[Hc]=v,_;const A=function(){Xa(r);const R=Array.from(arguments),P=new Set,T=new Set;function Ge(ue){P.add(ue)}function bt(ue){T.add(ue)}ls(g,{args:R,name:A[Hc],store:Z,after:Ge,onError:bt});let Oe;try{Oe=_.apply(this&&this.$id===t?this:Z,R)}catch(ue){throw ls(T,ue),ue}return Oe instanceof Promise?Oe.then(ue=>(ls(P,ue),ue)).catch(ue=>(ls(T,ue),Promise.reject(ue))):(ls(P,Oe),Oe)};return A[Jf]=!0,A[Hc]=v,A},q={_p:r,$id:t,$onAction:Qf.bind(null,g),$patch:O,$reset:j,$subscribe(_,v={}){const A=Qf(p,_,v.detached,()=>R()),R=o.run(()=>Ei(()=>r.state.value[t],P=>{(v.flush==="sync"?f:u)&&_({storeId:t,type:Ri.direct,events:y},P)},nr({},l,v)));return A},$dispose:D},Z=Xi(q);r._s.set(t,Z);const I=(r._a&&r._a.runWithContext||rI)(()=>r._e.run(()=>(o=lg()).run(()=>e({action:B}))));for(const _ in I){const v=I[_];if($e(v)&&!oI(v)||Mn(v))i||(b&&iI(v)&&($e(v)?v.value=b[_]:bl(v,b[_])),r.state.value[t][_]=v);else if(typeof v=="function"){const A=B(v,_);I[_]=A,c.actions[_]=v}}return nr(Z,I),nr(we(Z),I),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:_=>{O(v=>{nr(v,_)})}}),r._p.forEach(_=>{nr(Z,o.run(()=>_({store:Z,app:r._a,pinia:r,options:c})))}),b&&i&&n.hydrate&&n.hydrate(Z.$state,b),u=!0,f=!0,Z}/*! #__NO_SIDE_EFFECTS__ */function cI(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=_E();return o=o||(l?$t(dm,null):null),o&&Xa(o),o=fm,o._s.has(t)||(s?gm(t,e,r,o):aI(t,r,o)),o._s.get(t)}return i.$id=t,i}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const hs=typeof document<"u";function mm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&mm(t.default)}const Re=Object.assign;function Wc(t,e){const n={};for(const r in e){const s=e[r];n[r]=tn(s)?s.map(t):t(s)}return n}const bi=()=>{},tn=Array.isArray;function Yf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const _m=/#/g,uI=/&/g,hI=/\//g,fI=/=/g,dI=/\?/g,ym=/\+/g,pI=/%5B/g,gI=/%5D/g,vm=/%5E/g,mI=/%60/g,Em=/%7B/g,_I=/%7C/g,Tm=/%7D/g,yI=/%20/g;function Iu(t){return t==null?"":encodeURI(""+t).replace(_I,"|").replace(pI,"[").replace(gI,"]")}function vI(t){return Iu(t).replace(Em,"{").replace(Tm,"}").replace(vm,"^")}function Sl(t){return Iu(t).replace(ym,"%2B").replace(yI,"+").replace(_m,"%23").replace(uI,"%26").replace(mI,"`").replace(Em,"{").replace(Tm,"}").replace(vm,"^")}function EI(t){return Sl(t).replace(fI,"%3D")}function TI(t){return Iu(t).replace(_m,"%23").replace(dI,"%3F")}function II(t){return TI(t).replace(hI,"%2F")}function Bi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const wI=/\/$/,AI=t=>t.replace(wI,"");function Gc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=PI(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Bi(o)}}function RI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ps(e.matched[r],n.matched[s])&&Im(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ps(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Im(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!SI(t[n],e[n]))return!1;return!0}function SI(t,e){return tn(t)?Zf(t,e):tn(e)?Zf(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Zf(t,e){return tn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function PI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Pl=(function(t){return t.pop="pop",t.push="push",t})({}),zc=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function CI(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),AI(t)}const kI=/^[^#]+#/;function OI(t,e){return t.replace(kI,"#")+e}function NI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Za=()=>({left:window.scrollX,top:window.scrollY});function DI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=NI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ed(t,e){return(history.state?history.state.position-e:-1)+t}const Cl=new Map;function VI(t,e){Cl.set(t,e)}function xI(t){const e=Cl.get(t);return Cl.delete(t),e}function MI(t){return typeof t=="string"||t&&typeof t=="object"}function wm(t){return typeof t=="string"||typeof t=="symbol"}let qe=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Am=Symbol("");qe.MATCHER_NOT_FOUND+"",qe.NAVIGATION_GUARD_REDIRECT+"",qe.NAVIGATION_ABORTED+"",qe.NAVIGATION_CANCELLED+"",qe.NAVIGATION_DUPLICATED+"";function Cs(t,e){return Re(new Error,{type:t,[Am]:!0},e)}function Pn(t,e){return t instanceof Error&&Am in t&&(e==null||!!(t.type&e))}const LI=["params","query","hash"];function FI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of LI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function UI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(ym," "),i=s.indexOf("="),o=Bi(i<0?s:s.slice(0,i)),c=i<0?null:Bi(s.slice(i+1));if(o in e){let l=e[o];tn(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function td(t){let e="";for(let n in t){const r=t[n];if(n=EI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(tn(r)?r.map(s=>s&&Sl(s)):[r&&Sl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function BI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=tn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const jI=Symbol(""),nd=Symbol(""),ec=Symbol(""),wu=Symbol(""),kl=Symbol("");function oi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Cs(qe.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):MI(g)?l(Cs(qe.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function Kc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(mm(l)){const u=(l.__vccOpts||l)[e];u&&i.push(sr(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=lI(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const g=(p.__vccOpts||p)[e];return g&&sr(g,n,r,o,c,s)()}))}}return i}function qI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ps(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ps(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $I=()=>location.protocol+"//"+location.host;function Rm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),Xf(c,"")}return Xf(n,t)+r+s}function HI(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=Rm(t,location),b=n.value,S=e.value;let O=0;if(g){if(n.value=y,e.value=g,o&&o===b){o=null;return}O=S?g.position-S.position:0}else r(y);s.forEach(j=>{j(n.value,b,{delta:O,type:Pl.pop,direction:O?O>0?zc.forward:zc.back:zc.unknown})})};function l(){o=n.value}function u(g){s.push(g);const y=()=>{const b=s.indexOf(g);b>-1&&s.splice(b,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Re({},g.state,{scroll:Za()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:p}}function rd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Za():null}}function WI(t){const{history:e,location:n}=window,r={value:Rm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:$I()+t+l;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](g)}}function o(l,u){i(l,Re({},e.state,rd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Re({},s.value,e.state,{forward:l,scroll:Za()});i(f.current,f,!0),i(l,Re({},rd(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function GI(t){t=CI(t);const e=WI(t),n=HI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:OI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Lr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Ye=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Ye||{});const zI={type:Lr.Static,value:""},KI=/[a-zA-Z0-9_]/;function QI(t){if(!t)return[[]];if(t==="/")return[[zI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=Ye.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===Ye.Static?i.push({type:Lr.Static,value:u}):n===Ye.Param||n===Ye.ParamRegExp||n===Ye.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Lr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Ye.ParamRegExp){r=n,n=Ye.EscapeNext;continue}switch(n){case Ye.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=Ye.Param):g();break;case Ye.EscapeNext:g(),n=r;break;case Ye.Param:l==="("?n=Ye.ParamRegExp:KI.test(l)?g():(p(),n=Ye.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Ye.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Ye.ParamRegExpEnd:f+=l;break;case Ye.ParamRegExpEnd:p(),n=Ye.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===Ye.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const sd="[^/]+?",JI={sensitive:!1,strict:!1,start:!0,end:!0};var It=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(It||{});const YI=/[.+*?^${}()[\]/\\]/g;function XI(t,e){const n=Re({},JI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[It.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let y=It.Segment+(n.sensitive?It.BonusCaseSensitive:0);if(g.type===Lr.Static)p||(s+="/"),s+=g.value.replace(YI,"\\$&"),y+=It.Static;else if(g.type===Lr.Param){const{value:b,repeatable:S,optional:O,regexp:j}=g;i.push({name:b,repeatable:S,optional:O});const D=j||sd;if(D!==sd){y+=It.BonusCustomRegExp;try{`${D}`}catch(q){throw new Error(`Invalid custom RegExp for param "${b}" (${D}): `+q.message)}}let B=S?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;p||(B=O&&u.length<2?`(?:/${B})`:"/"+B),O&&(B+="?"),s+=B,y+=It.Dynamic,O&&(y+=It.BonusOptional),S&&(y+=It.BonusRepeatable),D===".*"&&(y+=It.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=It.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const y=f[g]||"",b=i[g-1];p[b.name]=y&&b.repeatable?y.split("/"):y}return p}function l(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of g)if(y.type===Lr.Static)f+=y.value;else if(y.type===Lr.Param){const{value:b,repeatable:S,optional:O}=y,j=b in u?u[b]:"";if(tn(j)&&!S)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const D=tn(j)?j.join("/"):j;if(!D)if(O)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);f+=D}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function ZI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===It.Static+It.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===It.Static+It.Segment?1:-1:0}function bm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ZI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(id(r))return 1;if(id(s))return-1}return s.length-r.length}function id(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ew={strict:!1,end:!0,sensitive:!1};function tw(t,e,n){const r=XI(QI(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function nw(t,e){const n=[],r=new Map;e=Yf(ew,e);function s(p){return r.get(p)}function i(p,g,y){const b=!y,S=ad(p);S.aliasOf=y&&y.record;const O=Yf(e,p),j=[S];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of q)j.push(ad(Re({},S,{components:y?y.record.components:S.components,path:Z,aliasOf:y?y.record:S})))}let D,B;for(const q of j){const{path:Z}=q;if(g&&Z[0]!=="/"){const le=g.record.path,I=le[le.length-1]==="/"?"":"/";q.path=g.record.path+(Z&&I+Z)}if(D=tw(q,g,O),y?y.alias.push(D):(B=B||D,B!==D&&B.alias.push(D),b&&p.name&&!cd(D)&&o(p.name)),Sm(D)&&l(D),S.children){const le=S.children;for(let I=0;I<le.length;I++)i(le[I],D,y&&y.children[I])}y=y||D}return B?()=>{o(B)}:bi}function o(p){if(wm(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=iw(p,n);n.splice(g,0,p),p.record.name&&!cd(p)&&r.set(p.record.name,p)}function u(p,g){let y,b={},S,O;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Cs(qe.MATCHER_NOT_FOUND,{location:p});O=y.record.name,b=Re(od(g.params,y.keys.filter(B=>!B.optional).concat(y.parent?y.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),p.params&&od(p.params,y.keys.map(B=>B.name))),S=y.stringify(b)}else if(p.path!=null)S=p.path,y=n.find(B=>B.re.test(S)),y&&(b=y.parse(S),O=y.record.name);else{if(y=g.name?r.get(g.name):n.find(B=>B.re.test(g.path)),!y)throw Cs(qe.MATCHER_NOT_FOUND,{location:p,currentLocation:g});O=y.record.name,b=Re({},g.params,p.params),S=y.stringify(b)}const j=[];let D=y;for(;D;)j.unshift(D.record),D=D.parent;return{name:O,path:S,params:b,matched:j,meta:sw(j)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function od(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ad(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:rw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function rw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function cd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sw(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function iw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;bm(t,e[i])<0?r=i:n=i+1}const s=ow(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function ow(t){let e=t;for(;e=e.parent;)if(Sm(e)&&bm(t,e)===0)return e}function Sm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ld(t){const e=$t(ec),n=$t(wu),r=kt(()=>{const l=At(t.to);return e.resolve(l)}),s=kt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(Ps.bind(null,f));if(g>-1)return g;const y=ud(l[u-2]);return u>1&&ud(f)===y&&p[p.length-1].path!==y?p.findIndex(Ps.bind(null,l[u-2])):g}),i=kt(()=>s.value>-1&&uw(n.params,r.value.params)),o=kt(()=>s.value>-1&&s.value===n.matched.length-1&&Im(n.params,r.value.params));function c(l={}){if(lw(l)){const u=e[At(t.replace)?"replace":"push"](At(t.to)).catch(bi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:kt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function aw(t){return t.length===1?t[0]:t}const cw=Ls({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ld,setup(t,{slots:e}){const n=Xi(ld(t)),{options:r}=$t(ec),s=kt(()=>({[hd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[hd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&aw(e.default(n));return t.custom?i:cm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ol=cw;function lw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function uw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!tn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function ud(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hd=(t,e,n)=>t??e??n,hw=Ls({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$t(kl),s=kt(()=>t.route||r.value),i=$t(nd,0),o=kt(()=>{let u=At(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=kt(()=>s.value.matched[o.value]);$o(nd,kt(()=>o.value+1)),$o(jI,c),$o(kl,s);const l=ms();return Ei(()=>[l.value,c.value,t.name],([u,f,p],[g,y,b])=>{f&&(f.instances[p]=u,y&&y!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!Ps(f,y)||!g)&&(f.enterCallbacks[p]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return fd(n.default,{Component:g,route:u});const y=p.props[f],b=y?y===!0?u.params:typeof y=="function"?y(u):y:null,O=cm(g,Re({},b,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return fd(n.default,{Component:O,route:u})||O}}});function fd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Pm=hw;function fw(t){const e=nw(t.routes,t),n=t.parseQuery||UI,r=t.stringifyQuery||td,s=t.history,i=oi(),o=oi(),c=oi(),l=sE(Zn);let u=Zn;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Wc.bind(null,x=>""+x),p=Wc.bind(null,II),g=Wc.bind(null,Bi);function y(x,X){let K,ee;return wm(x)?(K=e.getRecordMatcher(x),ee=X):ee=x,e.addRoute(ee,K)}function b(x){const X=e.getRecordMatcher(x);X&&e.removeRoute(X)}function S(){return e.getRoutes().map(x=>x.record)}function O(x){return!!e.getRecordMatcher(x)}function j(x,X){if(X=Re({},X||l.value),typeof x=="string"){const C=Gc(n,x,X.path),V=e.resolve({path:C.path},X),U=s.createHref(C.fullPath);return Re(C,V,{params:g(V.params),hash:Bi(C.hash),redirectedFrom:void 0,href:U})}let K;if(x.path!=null)K=Re({},x,{path:Gc(n,x.path,X.path).path});else{const C=Re({},x.params);for(const V in C)C[V]==null&&delete C[V];K=Re({},x,{params:p(C)}),X.params=p(X.params)}const ee=e.resolve(K,X),ge=x.hash||"";ee.params=f(g(ee.params));const E=RI(r,Re({},x,{hash:vI(ge),path:ee.path})),w=s.createHref(E);return Re({fullPath:E,hash:ge,query:r===td?BI(x.query):x.query||{}},ee,{redirectedFrom:void 0,href:w})}function D(x){return typeof x=="string"?Gc(n,x,l.value.path):Re({},x)}function B(x,X){if(u!==x)return Cs(qe.NAVIGATION_CANCELLED,{from:X,to:x})}function q(x){return I(x)}function Z(x){return q(Re(D(x),{replace:!0}))}function le(x,X){const K=x.matched[x.matched.length-1];if(K&&K.redirect){const{redirect:ee}=K;let ge=typeof ee=="function"?ee(x,X):ee;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=D(ge):{path:ge},ge.params={}),Re({query:x.query,hash:x.hash,params:ge.path!=null?{}:x.params},ge)}}function I(x,X){const K=u=j(x),ee=l.value,ge=x.state,E=x.force,w=x.replace===!0,C=le(K,ee);if(C)return I(Re(D(C),{state:typeof C=="object"?Re({},ge,C.state):ge,force:E,replace:w}),X||K);const V=K;V.redirectedFrom=X;let U;return!E&&bI(r,ee,K)&&(U=Cs(qe.NAVIGATION_DUPLICATED,{to:V,from:ee}),Ft(ee,ee,!0,!1)),(U?Promise.resolve(U):A(V,ee)).catch(M=>Pn(M)?Pn(M,qe.NAVIGATION_GUARD_REDIRECT)?M:zt(M):ye(M,V,ee)).then(M=>{if(M){if(Pn(M,qe.NAVIGATION_GUARD_REDIRECT))return I(Re({replace:w},D(M.to),{state:typeof M.to=="object"?Re({},ge,M.to.state):ge,force:E}),X||V)}else M=P(V,ee,!0,w,ge);return R(V,ee,M),M})}function _(x,X){const K=B(x,X);return K?Promise.reject(K):Promise.resolve()}function v(x){const X=Kn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(x):x()}function A(x,X){let K;const[ee,ge,E]=qI(x,X);K=Kc(ee.reverse(),"beforeRouteLeave",x,X);for(const C of ee)C.leaveGuards.forEach(V=>{K.push(sr(V,x,X))});const w=_.bind(null,x,X);return K.push(w),St(K).then(()=>{K=[];for(const C of i.list())K.push(sr(C,x,X));return K.push(w),St(K)}).then(()=>{K=Kc(ge,"beforeRouteUpdate",x,X);for(const C of ge)C.updateGuards.forEach(V=>{K.push(sr(V,x,X))});return K.push(w),St(K)}).then(()=>{K=[];for(const C of E)if(C.beforeEnter)if(tn(C.beforeEnter))for(const V of C.beforeEnter)K.push(sr(V,x,X));else K.push(sr(C.beforeEnter,x,X));return K.push(w),St(K)}).then(()=>(x.matched.forEach(C=>C.enterCallbacks={}),K=Kc(E,"beforeRouteEnter",x,X,v),K.push(w),St(K))).then(()=>{K=[];for(const C of o.list())K.push(sr(C,x,X));return K.push(w),St(K)}).catch(C=>Pn(C,qe.NAVIGATION_CANCELLED)?C:Promise.reject(C))}function R(x,X,K){c.list().forEach(ee=>v(()=>ee(x,X,K)))}function P(x,X,K,ee,ge){const E=B(x,X);if(E)return E;const w=X===Zn,C=hs?history.state:{};K&&(ee||w?s.replace(x.fullPath,Re({scroll:w&&C&&C.scroll},ge)):s.push(x.fullPath,ge)),l.value=x,Ft(x,X,K,w),zt()}let T;function Ge(){T||(T=s.listen((x,X,K)=>{if(!Nt.listening)return;const ee=j(x),ge=le(ee,Nt.currentRoute.value);if(ge){I(Re(ge,{replace:!0,force:!0}),ee).catch(bi);return}u=ee;const E=l.value;hs&&VI(ed(E.fullPath,K.delta),Za()),A(ee,E).catch(w=>Pn(w,qe.NAVIGATION_ABORTED|qe.NAVIGATION_CANCELLED)?w:Pn(w,qe.NAVIGATION_GUARD_REDIRECT)?(I(Re(D(w.to),{force:!0}),ee).then(C=>{Pn(C,qe.NAVIGATION_ABORTED|qe.NAVIGATION_DUPLICATED)&&!K.delta&&K.type===Pl.pop&&s.go(-1,!1)}).catch(bi),Promise.reject()):(K.delta&&s.go(-K.delta,!1),ye(w,ee,E))).then(w=>{w=w||P(ee,E,!1),w&&(K.delta&&!Pn(w,qe.NAVIGATION_CANCELLED)?s.go(-K.delta,!1):K.type===Pl.pop&&Pn(w,qe.NAVIGATION_ABORTED|qe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),R(ee,E,w)}).catch(bi)}))}let bt=oi(),Oe=oi(),ue;function ye(x,X,K){zt(x);const ee=Oe.list();return ee.length?ee.forEach(ge=>ge(x,X,K)):console.error(x),Promise.reject(x)}function Ot(){return ue&&l.value!==Zn?Promise.resolve():new Promise((x,X)=>{bt.add([x,X])})}function zt(x){return ue||(ue=!x,Ge(),bt.list().forEach(([X,K])=>x?K(x):X()),bt.reset()),x}function Ft(x,X,K,ee){const{scrollBehavior:ge}=t;if(!hs||!ge)return Promise.resolve();const E=!K&&xI(ed(x.fullPath,0))||(ee||!K)&&history.state&&history.state.scroll||null;return za().then(()=>ge(x,X,E)).then(w=>w&&DI(w)).catch(w=>ye(w,x,X))}const Me=x=>s.go(x);let Le;const Kn=new Set,Nt={currentRoute:l,listening:!0,addRoute:y,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:S,resolve:j,options:t,push:q,replace:Z,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Oe.add,isReady:Ot,install(x){x.component("RouterLink",Ol),x.component("RouterView",Pm),x.config.globalProperties.$router=Nt,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>At(l)}),hs&&!Le&&l.value===Zn&&(Le=!0,q(s.location).catch(ee=>{}));const X={};for(const ee in Zn)Object.defineProperty(X,ee,{get:()=>l.value[ee],enumerable:!0});x.provide(ec,Nt),x.provide(wu,Rg(X)),x.provide(kl,l);const K=x.unmount;Kn.add(x),x.unmount=function(){Kn.delete(x),Kn.size<1&&(u=Zn,T&&T(),T=null,l.value=Zn,Le=!1,ue=!1),K()}}};function St(x){return x.reduce((X,K)=>X.then(()=>v(K)),Promise.resolve())}return Nt}function dw(){return $t(ec)}function pw(t){return $t(wu)}const gw=Ls({__name:"App",setup(t){return(e,n)=>(Xe(),Fi(At(Pm)))}}),mw="modulepreload",_w=function(t){return"/Jujutsu-Windows/"+t},dd={},Gt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(u=>{if(u=_w(u),u in dd)return;dd[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":mw,f||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((y,b)=>{g.addEventListener("load",y),g.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},yw=()=>{};var pd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},km={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(g=64)),r.push(n[f],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Ew;const g=i<<2|c>>4;if(r.push(g),u!==64){const y=c<<4&240|u>>2;if(r.push(y),p!==64){const b=u<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ew extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tw=function(t){const e=Cm(t);return km.encodeByteArray(e,!0)},ga=function(t){return Tw(t).replace(/\./g,"")},Om=function(t){try{return km.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=()=>Iw().__FIREBASE_DEFAULTS__,Aw=()=>{if(typeof process>"u"||typeof pd>"u")return;const t=pd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Om(t[1]);return e&&JSON.parse(e)},tc=()=>{try{return yw()||ww()||Aw()||Rw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nm=t=>{var e,n;return(n=(e=tc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bw=t=>{const e=Nm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dm=()=>{var t;return(t=tc())===null||t===void 0?void 0:t.config},Vm=t=>{var e;return(e=tc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xm(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ga(JSON.stringify(n)),ga(JSON.stringify(o)),""].join(".")}const Si={};function Cw(){const t={prod:[],emulator:[]};for(const e of Object.keys(Si))Si[e]?t.emulator.push(e):t.prod.push(e);return t}function kw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let gd=!1;function Mm(t,e){if(typeof window>"u"||typeof document>"u"||!Fs(window.location.host)||Si[t]===e||Si[t]||gd)return;Si[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Cw().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,y){g.setAttribute("width","24"),g.setAttribute("id",y),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{gd=!0,o()},g}function f(g,y){g.setAttribute("id",y),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=kw(r),y=n("text"),b=document.getElementById(y)||document.createElement("span"),S=n("learnmore"),O=document.getElementById(S)||document.createElement("a"),j=n("preprendIcon"),D=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const B=g.element;c(B),f(O,S);const q=u();l(D,j),B.append(D,b,O,q),document.body.appendChild(B)}i?(b.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ow(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function Nw(){var t;const e=(t=tc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mw(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lw(){return!Nw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fw(){try{return typeof indexedDB=="object"}catch{return!1}}function Uw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bw,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,to.prototype.create)}}class to{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?jw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new wn(s,c,r)}}function jw(t,e){return t.replace(qw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qw=/\{\$([^}]+)}/g;function $w(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(md(i)&&md(o)){if(!$r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function md(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Hw(t,e){const n=new Ww(t,e);return n.subscribe.bind(n)}class Ww{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Qc),s.error===void 0&&(s.error=Qc),s.complete===void 0&&(s.complete=Qc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Sw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qw(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kw(t){return t===xr?void 0:t}function Qw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const Yw={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},Xw=ve.INFO,Zw={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},eA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Zw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Au{constructor(e){this.name=e,this._logLevel=Xw,this._logHandler=eA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const tA=(t,e)=>e.some(n=>t instanceof n);let _d,yd;function nA(){return _d||(_d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rA(){return yd||(yd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lm=new WeakMap,Nl=new WeakMap,Fm=new WeakMap,Jc=new WeakMap,Ru=new WeakMap;function sA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lm.set(n,t)}).catch(()=>{}),Ru.set(e,t),e}function iA(t){if(Nl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Nl.set(t,e)}let Dl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oA(t){Dl=t(Dl)}function aA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yc(this),e,...n);return Fm.set(r,e.sort?e.sort():[e]),hr(r)}:rA().includes(t)?function(...e){return t.apply(Yc(this),e),hr(Lm.get(this))}:function(...e){return hr(t.apply(Yc(this),e))}}function cA(t){return typeof t=="function"?aA(t):(t instanceof IDBTransaction&&iA(t),tA(t,nA())?new Proxy(t,Dl):t)}function hr(t){if(t instanceof IDBRequest)return sA(t);if(Jc.has(t))return Jc.get(t);const e=cA(t);return e!==t&&(Jc.set(t,e),Ru.set(e,t)),e}const Yc=t=>Ru.get(t);function lA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hr(o.result),l.oldVersion,l.newVersion,hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const uA=["get","getKey","getAll","getAllKeys","count"],hA=["put","add","delete","clear"],Xc=new Map;function vd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xc.get(e))return Xc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=hA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||uA.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Xc.set(e,i),i}oA(t=>({...t,get:(e,n,r)=>vd(e,n)||t.get(e,n,r),has:(e,n)=>!!vd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vl="@firebase/app",Ed="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Au("@firebase/app"),pA="@firebase/app-compat",gA="@firebase/analytics-compat",mA="@firebase/analytics",_A="@firebase/app-check-compat",yA="@firebase/app-check",vA="@firebase/auth",EA="@firebase/auth-compat",TA="@firebase/database",IA="@firebase/data-connect",wA="@firebase/database-compat",AA="@firebase/functions",RA="@firebase/functions-compat",bA="@firebase/installations",SA="@firebase/installations-compat",PA="@firebase/messaging",CA="@firebase/messaging-compat",kA="@firebase/performance",OA="@firebase/performance-compat",NA="@firebase/remote-config",DA="@firebase/remote-config-compat",VA="@firebase/storage",xA="@firebase/storage-compat",MA="@firebase/firestore",LA="@firebase/ai",FA="@firebase/firestore-compat",UA="firebase",BA="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="[DEFAULT]",jA={[Vl]:"fire-core",[pA]:"fire-core-compat",[mA]:"fire-analytics",[gA]:"fire-analytics-compat",[yA]:"fire-app-check",[_A]:"fire-app-check-compat",[vA]:"fire-auth",[EA]:"fire-auth-compat",[TA]:"fire-rtdb",[IA]:"fire-data-connect",[wA]:"fire-rtdb-compat",[AA]:"fire-fn",[RA]:"fire-fn-compat",[bA]:"fire-iid",[SA]:"fire-iid-compat",[PA]:"fire-fcm",[CA]:"fire-fcm-compat",[kA]:"fire-perf",[OA]:"fire-perf-compat",[NA]:"fire-rc",[DA]:"fire-rc-compat",[VA]:"fire-gcs",[xA]:"fire-gcs-compat",[MA]:"fire-fst",[FA]:"fire-fst-compat",[LA]:"fire-vertex","fire-js":"fire-js",[UA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Map,qA=new Map,Ml=new Map;function Td(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hr(t){const e=t.name;if(Ml.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;Ml.set(e,t);for(const n of ma.values())Td(n,t);for(const n of qA.values())Td(n,t);return!0}function bu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new to("app","Firebase",$A);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=BA;function Um(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw fr.create("bad-app-name",{appName:String(s)});if(n||(n=Dm()),!n)throw fr.create("no-options");const i=ma.get(s);if(i){if($r(n,i.options)&&$r(r,i.config))return i;throw fr.create("duplicate-app",{appName:s})}const o=new Jw(s);for(const l of Ml.values())o.addComponent(l);const c=new HA(n,r,o);return ma.set(s,c),c}function Bm(t=xl){const e=ma.get(t);if(!e&&t===xl&&Dm())return Um();if(!e)throw fr.create("no-app",{appName:t});return e}function fn(t,e,n){var r;let s=(r=jA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(c.join(" "));return}Hr(new yr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="firebase-heartbeat-database",GA=1,ji="firebase-heartbeat-store";let Zc=null;function jm(){return Zc||(Zc=lA(WA,GA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ji)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),Zc}async function zA(t){try{const n=(await jm()).transaction(ji),r=await n.objectStore(ji).get(qm(t));return await n.done,r}catch(e){if(e instanceof wn)$n.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function Id(t,e){try{const r=(await jm()).transaction(ji,"readwrite");await r.objectStore(ji).put(e,qm(t)),await r.done}catch(n){if(n instanceof wn)$n.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function qm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=1024,QA=30;class JA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>QA){const o=ZA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wd(),{heartbeatsToSend:r,unsentEntries:s}=YA(this._heartbeatsCache.heartbeats),i=ga(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $n.warn(n),""}}}function wd(){return new Date().toISOString().substring(0,10)}function YA(t,e=KA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ad(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ad(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fw()?Uw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Id(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ad(t){return ga(JSON.stringify({version:2,heartbeats:t})).length}function ZA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(t){Hr(new yr("platform-logger",e=>new fA(e),"PRIVATE")),Hr(new yr("heartbeat",e=>new JA(e),"PRIVATE")),fn(Vl,Ed,t),fn(Vl,Ed,"esm2017"),fn("fire-js","")}eR("");function Su(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $m(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tR=$m,Hm=new to("auth","Firebase",$m());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new Au("@firebase/auth");function nR(t,...e){_a.logLevel<=ve.WARN&&_a.warn(`Auth (${Jr}): ${t}`,...e)}function Go(t,...e){_a.logLevel<=ve.ERROR&&_a.error(`Auth (${Jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw Pu(t,...e)}function dn(t,...e){return Pu(t,...e)}function Wm(t,e,n){const r=Object.assign(Object.assign({},tR()),{[e]:n});return new to("auth","Firebase",r).create(e,{appName:t.name})}function Ln(t){return Wm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hm.create(t,...e)}function ae(t,e,...n){if(!t)throw Pu(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Go(e),new Error(e)}function Hn(t,e){t||Vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rR(){return Rd()==="http:"||Rd()==="https:"}function Rd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rR()||Vw()||"connection"in navigator)?navigator.onLine:!0}function iR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ow()||xw()}get(){return sR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cR=new ro(3e4,6e4);function br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sr(t,e,n,r,s={}){return zm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=no(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return Dw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Fs(t.emulatorConfig.host)&&(u.credentials="include"),Gm.fetch()(await Km(t,t.config.apiHost,n,c),u)})}async function zm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},oR),e);try{const s=new uR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Vo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Vo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Vo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wm(t,f,u);nn(t,f)}}catch(s){if(s instanceof wn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function so(t,e,n,r,s={}){const i=await Sr(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Km(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Cu(t.config,s):`${t.config.apiScheme}://${s}`;return aR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function lR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),cR.get())})}}function Vo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}function bd(t){return t!==void 0&&t.enterprise!==void 0}class hR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return lR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fR(t,e){return Sr(t,"GET","/v2/recaptchaConfig",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(t,e){return Sr(t,"POST","/v1/accounts:delete",e)}async function ya(t,e){return Sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pR(t,e=!1){const n=yt(t),r=await n.getIdToken(e),s=ku(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pi(el(s.auth_time)),issuedAtTime:Pi(el(s.iat)),expirationTime:Pi(el(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function el(t){return Number(t)*1e3}function ku(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Go("JWT malformed, contained fewer than 3 sections"),null;try{const s=Om(n);return s?JSON.parse(s):(Go("Failed to decode base64 JWT payload"),null)}catch(s){return Go("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sd(t){const e=ku(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&gR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pi(this.lastLoginAt),this.creationTime=Pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(t){var e;const n=t.auth,r=await t.getIdToken(),s=await qi(t,ya(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Qm(i.providerUserInfo):[],c=yR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Fl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function _R(t){const e=yt(t);await va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qm(t){return t.map(e=>{var{providerId:n}=e,r=Su(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR(t,e){const n=await zm(t,{},async()=>{const r=no({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Km(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Fs(t.emulatorConfig.host)&&(l.credentials="include"),Gm.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ER(t,e){return Sr(t,"POST","/v2/accounts:revokeToken",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Sd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ts;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ts,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Su(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await qi(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pR(this,e)}reload(){return _R(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await qi(this,dR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,j=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:q,isAnonymous:Z,providerData:le,stsTokenManager:I}=n;ae(B&&I,e,"internal-error");const _=Ts.fromJSON(this.name,I);ae(typeof B=="string",e,"internal-error"),er(p,e.name),er(g,e.name),ae(typeof q=="boolean",e,"internal-error"),ae(typeof Z=="boolean",e,"internal-error"),er(y,e.name),er(b,e.name),er(S,e.name),er(O,e.name),er(j,e.name),er(D,e.name);const v=new Jt({uid:B,auth:e,email:g,emailVerified:q,displayName:p,isAnonymous:Z,photoURL:b,phoneNumber:y,tenantId:S,stsTokenManager:_,createdAt:j,lastLoginAt:D});return le&&Array.isArray(le)&&(v.providerData=le.map(A=>Object.assign({},A))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ts;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await va(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ts;c.updateFromIdToken(r);const l=new Jt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new Map;function xn(t){Hn(t instanceof Function,"Expected a class definition");let e=Pd.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jm.type="NONE";const Cd=Jm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=zo(this.userKey,s.apiKey,i),this.fullPersistenceKey=zo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ya(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Is(xn(Cd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||xn(Cd);const o=zo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const g=await ya(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Jt._fromGetAccountInfoResponse(e,g,f)}else p=Jt._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Is(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Is(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ym(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n_(e))return"Blackberry";if(r_(e))return"Webos";if(Xm(e))return"Safari";if((e.includes("chrome/")||Zm(e))&&!e.includes("edge/"))return"Chrome";if(t_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ym(t=_t()){return/firefox\//i.test(t)}function Xm(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zm(t=_t()){return/crios\//i.test(t)}function e_(t=_t()){return/iemobile/i.test(t)}function t_(t=_t()){return/android/i.test(t)}function n_(t=_t()){return/blackberry/i.test(t)}function r_(t=_t()){return/webos/i.test(t)}function Ou(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TR(t=_t()){var e;return Ou(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IR(){return Mw()&&document.documentMode===10}function s_(t=_t()){return Ou(t)||t_(t)||r_(t)||n_(t)||/windows phone/i.test(t)||e_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t,e=[]){let n;switch(t){case"Browser":n=kd(_t());break;case"Worker":n=`${kd(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e={}){return Sr(t,"GET","/v2/passwordPolicy",br(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=6;class bR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:RR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Od(this),this.idTokenSubscription=new Od(this),this.beforeStateQueue=new wR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ya(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await va(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(Ln(this));const n=e?yt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AR(this),n=new bR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new to("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ER(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yr(t){return yt(t)}class Od{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hw(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PR(t){nc=t}function o_(t){return nc.loadJS(t)}function CR(){return nc.recaptchaEnterpriseScript}function kR(){return nc.gapiScript}function OR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class NR{constructor(){this.enterprise=new DR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class DR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const VR="recaptcha-enterprise",a_="NO_RECAPTCHA";class xR{constructor(e){this.type=VR,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{fR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new hR(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;bd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(a_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new NR().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&bd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=CR();l.length!==0&&(l+=c),o_(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Nd(t,e,n,r=!1,s=!1){const i=new xR(t);let o;if(s)o=a_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ul(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Nd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Nd(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t,e){const n=bu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($r(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function LR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FR(t,e,n){const r=Yr(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=c_(e),{host:o,port:c}=UR(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae($r(u,r.config.emulator)&&$r(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Fs(o)?(xm(`${i}//${o}${l}`),Mm("Auth",!0)):BR()}function c_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UR(t){const e=c_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Dd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Dd(o)}}}function Dd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}async function jR(t,e){return Sr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qR(t,e){return so(t,"POST","/v1/accounts:signInWithPassword",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){return so(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}async function HR(t,e){return so(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends Nu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $i(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $i(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ul(e,n,"signInWithPassword",qR);case"emailLink":return $R(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ul(e,r,"signUpPassword",jR);case"emailLink":return HR(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(t,e){return so(t,"POST","/v1/accounts:signInWithIdp",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR="http://localhost";class Wr extends Nu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Su(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ws(e,n)}buildRequest(){const e={requestUri:WR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=no(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zR(t){const e=hi(fi(t)).link,n=e?hi(fi(e)).deep_link_id:null,r=hi(fi(t)).deep_link_id;return(r?hi(fi(r)).link:null)||r||n||e||t}class Du{constructor(e){var n,r,s,i,o,c;const l=hi(fi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=GR((s=l.mode)!==null&&s!==void 0?s:null);ae(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=zR(e);try{return new Du(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.providerId=Us.PROVIDER_ID}static credential(e,n){return $i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Du.parseLink(n);return ae(r,"argument-error"),$i._fromEmailAndCode(e,r.code,r.tenantId)}}Us.PROVIDER_ID="password";Us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends l_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends io{constructor(){super("facebook.com")}static credential(e){return Wr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends io{constructor(){super("github.com")}static credential(e){return Wr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends io{constructor(){super("twitter.com")}static credential(e,n){return Wr._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(t,e){return so(t,"POST","/v1/accounts:signUp",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),o=Vd(r);return new Gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Vd(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Vd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ea.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ea(e,n,r,s)}}function u_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ea._fromErrorAndOperation(t,i,e,r):i})}async function QR(t,e,n=!1){const r=await qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(t,e,n=!1){const{auth:r}=t;if(Vt(r.app))return Promise.reject(Ln(r));const s="reauthenticate";try{const i=await qi(t,u_(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=ku(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),Gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(t,e,n=!1){if(Vt(t.app))return Promise.reject(Ln(t));const r="signIn",s=await u_(t,r,e),i=await Gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function YR(t,e){return h_(Yr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function XR(t,e,n){if(Vt(t.app))return Promise.reject(Ln(t));const r=Yr(t),o=await Ul(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&f_(t),l}),c=await Gr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function ZR(t,e,n){return Vt(t.app)?Promise.reject(Ln(t)):YR(yt(t),Us.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&f_(t),r})}function e0(t,e,n,r){return yt(t).onIdTokenChanged(e,n,r)}function t0(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}function n0(t,e,n,r){return yt(t).onAuthStateChanged(e,n,r)}function r0(t){return yt(t).signOut()}const Ta="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ta,"1"),this.storage.removeItem(Ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=1e3,i0=10;class p_ extends d_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);IR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,i0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},s0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}p_.type="LOCAL";const o0=p_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_ extends d_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}g_.type="SESSION";const m_=g_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await a0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Vu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function l0(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function u0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function f0(){return __()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="firebaseLocalStorageDb",d0=1,Ia="firebaseLocalStorage",v_="fbase_key";class oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sc(t,e){return t.transaction([Ia],e?"readwrite":"readonly").objectStore(Ia)}function p0(){const t=indexedDB.deleteDatabase(y_);return new oo(t).toPromise()}function Bl(){const t=indexedDB.open(y_,d0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ia,{keyPath:v_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ia)?e(r):(r.close(),await p0(),e(await Bl()))})})}async function xd(t,e,n){const r=sc(t,!0).put({[v_]:e,value:n});return new oo(r).toPromise()}async function g0(t,e){const n=sc(t,!1).get(e),r=await new oo(n).toPromise();return r===void 0?null:r.value}function Md(t,e){const n=sc(t,!0).delete(e);return new oo(n).toPromise()}const m0=800,_0=3;class E_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return __()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(f0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await u0(),!this.activeServiceWorker)return;this.sender=new c0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bl();return await xd(e,Ta,"1"),await Md(e,Ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>g0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Md(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=sc(s,!1).getAll();return new oo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),m0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E_.type="LOCAL";const y0=E_;new ro(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t,e){return e?xn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends Nu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function E0(t){return h_(t.auth,new xu(t),t.bypassAuthState)}function T0(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),JR(n,new xu(t),t.bypassAuthState)}async function I0(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),QR(n,new xu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E0;case"linkViaPopup":case"linkViaRedirect":return I0;case"reauthViaPopup":case"reauthViaRedirect":return T0;default:nn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=new ro(2e3,1e4);class _s extends T_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,w0.get())};e()}}_s.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="pendingRedirect",Ko=new Map;class R0 extends T_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ko.get(this.auth._key());if(!e){try{const r=await b0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ko.set(this.auth._key(),e)}return this.bypassAuthState||Ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function b0(t,e){const n=C0(e),r=P0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function S0(t,e){Ko.set(t._key(),e)}function P0(t){return xn(t._redirectPersistence)}function C0(t){return zo(A0,t.config.apiKey,t.name)}async function k0(t,e,n=!1){if(Vt(t.app))return Promise.reject(Ln(t));const r=Yr(t),s=v0(r,e),o=await new R0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=600*1e3;class N0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!I_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=O0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ld(e))}saveEventToCache(e){this.cachedEventUids.add(Ld(e)),this.lastProcessedEventTime=Date.now()}}function Ld(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function I_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V0(t,e={}){return Sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,M0=/^https?/;async function L0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await V0(t);for(const n of e)try{if(F0(n))return}catch{}nn(t,"unauthorized-domain")}function F0(t){const e=Ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!M0.test(n))return!1;if(x0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=new ro(3e4,6e4);function Fd(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function B0(t){return new Promise((e,n)=>{var r,s,i;function o(){Fd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fd(),n(dn(t,"network-request-failed"))},timeout:U0.get()})}if(!((s=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const c=OR("iframefcb");return pn()[c]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},o_(`${kR()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Qo=null,e})}let Qo=null;function j0(t){return Qo=Qo||B0(t),Qo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=new ro(5e3,15e3),$0="__/auth/iframe",H0="emulator/auth/iframe",W0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},G0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function z0(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cu(e,H0):`https://${t.config.authDomain}/${$0}`,r={apiKey:e.apiKey,appName:t.name,v:Jr},s=G0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${no(r).slice(1)}`}async function K0(t){const e=await j0(t),n=pn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:z0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:W0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),c=pn().setTimeout(()=>{i(o)},q0.get());function l(){pn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},J0=500,Y0=600,X0="_blank",Z0="http://localhost";class Ud{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eb(t,e,n,r=J0,s=Y0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Q0),{width:r.toString(),height:s.toString(),top:i,left:o}),u=_t().toLowerCase();n&&(c=Zm(u)?X0:n),Ym(u)&&(e=e||Z0,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[y,b])=>`${g}${y}=${b},`,"");if(TR(u)&&c!=="_self")return tb(e||"",c),new Ud(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Ud(p)}function tb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb="__/auth/handler",rb="emulator/auth/handler",sb=encodeURIComponent("fac");async function Bd(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jr,eventId:s};if(e instanceof l_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$w(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof io){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${sb}=${encodeURIComponent(l)}`:"";return`${ib(t)}?${no(c).slice(1)}${u}`}function ib({config:t}){return t.emulator?Cu(t,rb):`https://${t.authDomain}/${nb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="webStorageSupport";class ob{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=m_,this._completeRedirectFn=k0,this._overrideRedirectResult=S0}async _openPopup(e,n,r,s){var i;Hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Bd(e,n,r,Ll(),s);return eb(e,o,Vu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Bd(e,n,r,Ll(),s);return l0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await K0(e),r=new N0(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tl,{type:tl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[tl];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return s_()||Xm()||Ou()}}const ab=ob;var jd="@firebase/auth",qd="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ub(t){Hr(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i_(t)},u=new SR(r,s,i,l);return LR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new yr("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new cb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(jd,qd,lb(t)),fn(jd,qd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=300,fb=Vm("authIdTokenMaxAge")||hb;let $d=null;const db=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fb)return;const s=n==null?void 0:n.token;$d!==s&&($d=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pb(t=Bm()){const e=bu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MR(t,{popupRedirectResolver:ab,persistence:[y0,o0,m_]}),r=Vm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=db(i.toString());t0(n,o,()=>o(n.currentUser)),e0(n,c=>o(c))}}const s=Nm("auth");return s&&FR(n,`http://${s}`),n}function gb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}PR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ub("Browser");var Hd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,w_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function v(){}v.prototype=_.prototype,I.D=_.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(A,R,P){for(var T=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)T[Ge-2]=arguments[Ge];return _.prototype[R].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,v){v||(v=0);var A=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)A[R]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(R=0;16>R;++R)A[R]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=I.g[0],v=I.g[1],R=I.g[2];var P=I.g[3],T=_+(P^v&(R^P))+A[0]+3614090360&4294967295;_=v+(T<<7&4294967295|T>>>25),T=P+(R^_&(v^R))+A[1]+3905402710&4294967295,P=_+(T<<12&4294967295|T>>>20),T=R+(v^P&(_^v))+A[2]+606105819&4294967295,R=P+(T<<17&4294967295|T>>>15),T=v+(_^R&(P^_))+A[3]+3250441966&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(P^v&(R^P))+A[4]+4118548399&4294967295,_=v+(T<<7&4294967295|T>>>25),T=P+(R^_&(v^R))+A[5]+1200080426&4294967295,P=_+(T<<12&4294967295|T>>>20),T=R+(v^P&(_^v))+A[6]+2821735955&4294967295,R=P+(T<<17&4294967295|T>>>15),T=v+(_^R&(P^_))+A[7]+4249261313&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(P^v&(R^P))+A[8]+1770035416&4294967295,_=v+(T<<7&4294967295|T>>>25),T=P+(R^_&(v^R))+A[9]+2336552879&4294967295,P=_+(T<<12&4294967295|T>>>20),T=R+(v^P&(_^v))+A[10]+4294925233&4294967295,R=P+(T<<17&4294967295|T>>>15),T=v+(_^R&(P^_))+A[11]+2304563134&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(P^v&(R^P))+A[12]+1804603682&4294967295,_=v+(T<<7&4294967295|T>>>25),T=P+(R^_&(v^R))+A[13]+4254626195&4294967295,P=_+(T<<12&4294967295|T>>>20),T=R+(v^P&(_^v))+A[14]+2792965006&4294967295,R=P+(T<<17&4294967295|T>>>15),T=v+(_^R&(P^_))+A[15]+1236535329&4294967295,v=R+(T<<22&4294967295|T>>>10),T=_+(R^P&(v^R))+A[1]+4129170786&4294967295,_=v+(T<<5&4294967295|T>>>27),T=P+(v^R&(_^v))+A[6]+3225465664&4294967295,P=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(P^_))+A[11]+643717713&4294967295,R=P+(T<<14&4294967295|T>>>18),T=v+(P^_&(R^P))+A[0]+3921069994&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(R^P&(v^R))+A[5]+3593408605&4294967295,_=v+(T<<5&4294967295|T>>>27),T=P+(v^R&(_^v))+A[10]+38016083&4294967295,P=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(P^_))+A[15]+3634488961&4294967295,R=P+(T<<14&4294967295|T>>>18),T=v+(P^_&(R^P))+A[4]+3889429448&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(R^P&(v^R))+A[9]+568446438&4294967295,_=v+(T<<5&4294967295|T>>>27),T=P+(v^R&(_^v))+A[14]+3275163606&4294967295,P=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(P^_))+A[3]+4107603335&4294967295,R=P+(T<<14&4294967295|T>>>18),T=v+(P^_&(R^P))+A[8]+1163531501&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(R^P&(v^R))+A[13]+2850285829&4294967295,_=v+(T<<5&4294967295|T>>>27),T=P+(v^R&(_^v))+A[2]+4243563512&4294967295,P=_+(T<<9&4294967295|T>>>23),T=R+(_^v&(P^_))+A[7]+1735328473&4294967295,R=P+(T<<14&4294967295|T>>>18),T=v+(P^_&(R^P))+A[12]+2368359562&4294967295,v=R+(T<<20&4294967295|T>>>12),T=_+(v^R^P)+A[5]+4294588738&4294967295,_=v+(T<<4&4294967295|T>>>28),T=P+(_^v^R)+A[8]+2272392833&4294967295,P=_+(T<<11&4294967295|T>>>21),T=R+(P^_^v)+A[11]+1839030562&4294967295,R=P+(T<<16&4294967295|T>>>16),T=v+(R^P^_)+A[14]+4259657740&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(v^R^P)+A[1]+2763975236&4294967295,_=v+(T<<4&4294967295|T>>>28),T=P+(_^v^R)+A[4]+1272893353&4294967295,P=_+(T<<11&4294967295|T>>>21),T=R+(P^_^v)+A[7]+4139469664&4294967295,R=P+(T<<16&4294967295|T>>>16),T=v+(R^P^_)+A[10]+3200236656&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(v^R^P)+A[13]+681279174&4294967295,_=v+(T<<4&4294967295|T>>>28),T=P+(_^v^R)+A[0]+3936430074&4294967295,P=_+(T<<11&4294967295|T>>>21),T=R+(P^_^v)+A[3]+3572445317&4294967295,R=P+(T<<16&4294967295|T>>>16),T=v+(R^P^_)+A[6]+76029189&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(v^R^P)+A[9]+3654602809&4294967295,_=v+(T<<4&4294967295|T>>>28),T=P+(_^v^R)+A[12]+3873151461&4294967295,P=_+(T<<11&4294967295|T>>>21),T=R+(P^_^v)+A[15]+530742520&4294967295,R=P+(T<<16&4294967295|T>>>16),T=v+(R^P^_)+A[2]+3299628645&4294967295,v=R+(T<<23&4294967295|T>>>9),T=_+(R^(v|~P))+A[0]+4096336452&4294967295,_=v+(T<<6&4294967295|T>>>26),T=P+(v^(_|~R))+A[7]+1126891415&4294967295,P=_+(T<<10&4294967295|T>>>22),T=R+(_^(P|~v))+A[14]+2878612391&4294967295,R=P+(T<<15&4294967295|T>>>17),T=v+(P^(R|~_))+A[5]+4237533241&4294967295,v=R+(T<<21&4294967295|T>>>11),T=_+(R^(v|~P))+A[12]+1700485571&4294967295,_=v+(T<<6&4294967295|T>>>26),T=P+(v^(_|~R))+A[3]+2399980690&4294967295,P=_+(T<<10&4294967295|T>>>22),T=R+(_^(P|~v))+A[10]+4293915773&4294967295,R=P+(T<<15&4294967295|T>>>17),T=v+(P^(R|~_))+A[1]+2240044497&4294967295,v=R+(T<<21&4294967295|T>>>11),T=_+(R^(v|~P))+A[8]+1873313359&4294967295,_=v+(T<<6&4294967295|T>>>26),T=P+(v^(_|~R))+A[15]+4264355552&4294967295,P=_+(T<<10&4294967295|T>>>22),T=R+(_^(P|~v))+A[6]+2734768916&4294967295,R=P+(T<<15&4294967295|T>>>17),T=v+(P^(R|~_))+A[13]+1309151649&4294967295,v=R+(T<<21&4294967295|T>>>11),T=_+(R^(v|~P))+A[4]+4149444226&4294967295,_=v+(T<<6&4294967295|T>>>26),T=P+(v^(_|~R))+A[11]+3174756917&4294967295,P=_+(T<<10&4294967295|T>>>22),T=R+(_^(P|~v))+A[2]+718787259&4294967295,R=P+(T<<15&4294967295|T>>>17),T=v+(P^(R|~_))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+P&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var v=_-this.blockSize,A=this.B,R=this.h,P=0;P<_;){if(R==0)for(;P<=v;)s(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<_;)if(A[R++]=I.charCodeAt(P++),R==this.blockSize){s(this,A),R=0;break}}else for(;P<_;)if(A[R++]=I[P++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var v=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=v&255,v/=256;for(this.u(I),I=Array(16),_=v=0;4>_;++_)for(var A=0;32>A;A+=8)I[v++]=this.g[_]>>>A&255;return I};function i(I,_){var v=c;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=_(I)}function o(I,_){this.h=_;for(var v=[],A=!0,R=I.length-1;0<=R;R--){var P=I[R]|0;A&&P==_||(v[R]=P,A=!1)}this.g=v}var c={};function l(I){return-128<=I&&128>I?i(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return O(u(-I));for(var _=[],v=1,A=0;I>=v;A++)_[A]=I/v|0,v*=4294967296;return new o(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return O(f(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(_,8)),A=p,R=0;R<I.length;R+=8){var P=Math.min(8,I.length-R),T=parseInt(I.substring(R,R+P),_);8>P?(P=u(Math.pow(_,P)),A=A.j(P).add(u(T))):(A=A.j(v),A=A.add(u(T)))}return A}var p=l(0),g=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(S(this))return-O(this).m();for(var I=0,_=1,v=0;v<this.g.length;v++){var A=this.i(v);I+=(0<=A?A:4294967296+A)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(b(this))return"0";if(S(this))return"-"+O(this).toString(I);for(var _=u(Math.pow(I,6)),v=this,A="";;){var R=q(v,_).g;v=j(v,R.j(_));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=R,b(v))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function b(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function S(I){return I.h==-1}t.l=function(I){return I=j(this,I),S(I)?-1:b(I)?0:1};function O(I){for(var _=I.g.length,v=[],A=0;A<_;A++)v[A]=~I.g[A];return new o(v,~I.h).add(g)}t.abs=function(){return S(this)?O(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],A=0,R=0;R<=_;R++){var P=A+(this.i(R)&65535)+(I.i(R)&65535),T=(P>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);A=T>>>16,P&=65535,T&=65535,v[R]=T<<16|P}return new o(v,v[v.length-1]&-2147483648?-1:0)};function j(I,_){return I.add(O(_))}t.j=function(I){if(b(this)||b(I))return p;if(S(this))return S(I)?O(this).j(O(I)):O(O(this).j(I));if(S(I))return O(this.j(O(I)));if(0>this.l(y)&&0>I.l(y))return u(this.m()*I.m());for(var _=this.g.length+I.g.length,v=[],A=0;A<2*_;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<I.g.length;R++){var P=this.i(A)>>>16,T=this.i(A)&65535,Ge=I.i(R)>>>16,bt=I.i(R)&65535;v[2*A+2*R]+=T*bt,D(v,2*A+2*R),v[2*A+2*R+1]+=P*bt,D(v,2*A+2*R+1),v[2*A+2*R+1]+=T*Ge,D(v,2*A+2*R+1),v[2*A+2*R+2]+=P*Ge,D(v,2*A+2*R+2)}for(A=0;A<_;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=_;A<2*_;A++)v[A]=0;return new o(v,0)};function D(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function B(I,_){this.g=I,this.h=_}function q(I,_){if(b(_))throw Error("division by zero");if(b(I))return new B(p,p);if(S(I))return _=q(O(I),_),new B(O(_.g),O(_.h));if(S(_))return _=q(I,O(_)),new B(O(_.g),_.h);if(30<I.g.length){if(S(I)||S(_))throw Error("slowDivide_ only works with positive integers.");for(var v=g,A=_;0>=A.l(I);)v=Z(v),A=Z(A);var R=le(v,1),P=le(A,1);for(A=le(A,2),v=le(v,2);!b(A);){var T=P.add(A);0>=T.l(I)&&(R=R.add(v),P=T),A=le(A,1),v=le(v,1)}return _=j(I,R.j(_)),new B(R,_)}for(R=p;0<=I.l(_);){for(v=Math.max(1,Math.floor(I.m()/_.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=u(v),T=P.j(_);S(T)||0<T.l(I);)v-=A,P=u(v),T=P.j(_);b(P)&&(P=g),R=R.add(P),I=j(I,T)}return new B(R,I)}t.A=function(I){return q(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],A=0;A<_;A++)v[A]=this.i(A)&I.i(A);return new o(v,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],A=0;A<_;A++)v[A]=this.i(A)|I.i(A);return new o(v,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],A=0;A<_;A++)v[A]=this.i(A)^I.i(A);return new o(v,this.h^I.h)};function Z(I){for(var _=I.g.length+1,v=[],A=0;A<_;A++)v[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(v,I.h)}function le(I,_){var v=_>>5;_%=32;for(var A=I.g.length-v,R=[],P=0;P<A;P++)R[P]=0<_?I.i(P+v)>>>_|I.i(P+v+1)<<32-_:I.i(P+v);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,w_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,dr=o}).apply(typeof Hd<"u"?Hd:typeof self<"u"?self:typeof window<"u"?window:{});var xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var A_,di,R_,Jo,jl,b_,S_,P_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof xo=="object"&&xo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var k=a[m];if(!(k in d))break e;d=d[k]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,m=!1,k={next:function(){if(!m&&d<a.length){var N=d++;return{value:h(N,a[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,m),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function y(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function b(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,k,N){for(var W=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)W[Ce-2]=arguments[Ce];return h.prototype[k].apply(m,W)}}function S(a){const h=a.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function O(a,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const k=a.length||0,N=m.length||0;a.length=k+N;for(let W=0;W<N;W++)a[k+W]=m[W]}else a.push(m)}}class j{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var Z=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function le(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function I(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function _(a){const h={};for(const d in a)h[d]=a[d];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(d in m)a[d]=m[d];for(let N=0;N<v.length;N++)d=v[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function P(a){c.setTimeout(()=>{throw a},0)}function T(){var a=Ot;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ge{constructor(){this.h=this.g=null}add(h,d){const m=bt.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var bt=new j(()=>new Oe,a=>a.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ye=!1,Ot=new Ge,zt=()=>{const a=c.Promise.resolve(void 0);ue=()=>{a.then(Ft)}};var Ft=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){P(d)}var h=bt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ye=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var Kn=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a})();function Nt(a,h){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{q(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:St[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Nt.aa.h.call(this)}}b(Nt,Le);var St={2:"touch",3:"pen",4:"mouse"};Nt.prototype.h=function(){Nt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),X=0;function K(a,h,d,m,k){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=k,this.key=++X,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ge(a){this.src=a,this.g={},this.h=0}ge.prototype.add=function(a,h,d,m,k){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var W=w(a,h,m,k);return-1<W?(h=a[W],d||(h.fa=!1)):(h=new K(h,this.src,N,!!m,k),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var m=a.g[d],k=Array.prototype.indexOf.call(m,h,void 0),N;(N=0<=k)&&Array.prototype.splice.call(m,k,1),N&&(ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function w(a,h,d,m){for(var k=0;k<a.length;++k){var N=a[k];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==m)return k}return-1}var C="closure_lm_"+(1e6*Math.random()|0),V={};function U(a,h,d,m,k){if(Array.isArray(h)){for(var N=0;N<h.length;N++)U(a,h[N],d,m,k);return null}return d=ie(d),a&&a[x]?a.K(h,d,u(m)?!!m.capture:!1,k):M(a,h,d,!1,m,k)}function M(a,h,d,m,k,N){if(!h)throw Error("Invalid event type");var W=u(k)?!!k.capture:!!k,Ce=Q(a);if(Ce||(a[C]=Ce=new ge(a)),d=Ce.add(h,d,m,W,N),d.proxy)return d;if(m=z(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Kn||(k=W),k===void 0&&(k=!1),a.addEventListener(h.toString(),m,k);else if(a.attachEvent)a.attachEvent($(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function z(){function a(d){return h.call(a.src,a.listener,d)}const h=re;return a}function G(a,h,d,m,k){if(Array.isArray(h))for(var N=0;N<h.length;N++)G(a,h[N],d,m,k);else m=u(m)?!!m.capture:!!m,d=ie(d),a&&a[x]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],d=w(N,d,m,k),-1<d&&(ee(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,d,m,k)),(d=-1<a?h[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[x])E(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent($(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=Q(h))?(E(d,a),d.h==0&&(d.src=null,h[C]=null)):ee(a)}}}function $(a){return a in V?V[a]:V[a]="on"+a}function re(a,h){if(a.da)a=!0;else{h=new Nt(h,this);var d=a.listener,m=a.ha||a.src;a.fa&&H(a),a=d.call(m,h)}return a}function Q(a){return a=a[C],a instanceof ge?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function oe(){Me.call(this),this.i=new ge(this),this.M=this,this.F=null}b(oe,Me),oe.prototype[x]=!0,oe.prototype.removeEventListener=function(a,h,d,m){G(this,a,h,d,m)};function de(a,h){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new Le(h,a);else if(h instanceof Le)h.target=h.target||a;else{var k=h;h=new Le(m,a),A(h,k)}if(k=!0,d)for(var N=d.length-1;0<=N;N--){var W=h.g=d[N];k=Ae(W,m,!0,h)&&k}if(W=h.g=a,k=Ae(W,m,!0,h)&&k,k=Ae(W,m,!1,h)&&k,d)for(N=0;N<d.length;N++)W=h.g=d[N],k=Ae(W,m,!1,h)&&k}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],m=0;m<d.length;m++)ee(d[m]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},oe.prototype.L=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function Ae(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,N=0;N<h.length;++N){var W=h[N];if(W&&!W.da&&W.capture==d){var Ce=W.listener,rt=W.ha||W.src;W.fa&&E(a.i,W),k=Ce.call(rt,m)!==!1&&k}}return k&&!m.defaultPrevented}function Fe(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function ze(a){a.g=Fe(()=>{a.g=null,a.i&&(a.i=!1,ze(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ut extends Me{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ze(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(a){Me.call(this),this.h=a,this.g={}}b(lt,Me);var Qn=[];function Hs(a){le(a.g,function(h,d){this.g.hasOwnProperty(d)&&H(h)},a),a.g={}}lt.prototype.N=function(){lt.aa.N.call(this),Hs(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nt=c.JSON.stringify,Bt=c.JSON.parse,po=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function rs(){}rs.prototype.h=null;function Th(a){return a.h||(a.h=a.i())}function Ih(){}var Ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Tc(){Le.call(this,"d")}b(Tc,Le);function Ic(){Le.call(this,"c")}b(Ic,Le);var Pr={},wh=null;function go(){return wh=wh||new oe}Pr.La="serverreachability";function Ah(a){Le.call(this,Pr.La,a)}b(Ah,Le);function Gs(a){const h=go();de(h,new Ah(h))}Pr.STAT_EVENT="statevent";function Rh(a,h){Le.call(this,Pr.STAT_EVENT,a),this.stat=h}b(Rh,Le);function vt(a){const h=go();de(h,new Rh(h,a))}Pr.Ma="timingevent";function bh(a,h){Le.call(this,Pr.Ma,a),this.size=h}b(bh,Le);function zs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Ks(){this.g=!0}Ks.prototype.xa=function(){this.g=!1};function sv(a,h,d,m,k,N){a.info(function(){if(a.g)if(N)for(var W="",Ce=N.split("&"),rt=0;rt<Ce.length;rt++){var Ie=Ce[rt].split("=");if(1<Ie.length){var ut=Ie[0];Ie=Ie[1];var ht=ut.split("_");W=2<=ht.length&&ht[1]=="type"?W+(ut+"="+Ie+"&"):W+(ut+"=redacted&")}}else W=null;else W=N;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+h+`
`+d+`
`+W})}function iv(a,h,d,m,k,N,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+h+`
`+d+`
`+N+" "+W})}function ss(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+av(a,d)+(m?" "+m:"")})}function ov(a,h){a.info(function(){return"TIMEOUT: "+h})}Ks.prototype.info=function(){};function av(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var k=m[1];if(Array.isArray(k)&&!(1>k.length)){var N=k[0];if(N!="noop"&&N!="stop"&&N!="close")for(var W=1;W<k.length;W++)k[W]=""}}}}return nt(d)}catch{return h}}var mo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wc;function _o(){}b(_o,rs),_o.prototype.g=function(){return new XMLHttpRequest},_o.prototype.i=function(){return{}},wc=new _o;function Jn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.R=m||1,this.U=new lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ph}function Ph(){this.i=null,this.g="",this.h=!1}var Ch={},Ac={};function Rc(a,h,d){a.L=1,a.v=To(Rn(h)),a.m=d,a.P=!0,kh(a,null)}function kh(a,h){a.F=Date.now(),yo(a),a.A=Rn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Hh(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Ph,a.g=lf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Ut(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,m=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Qn[0]=k.toString()),k=Qn);for(var N=0;N<k.length;N++){var W=U(d,k[N],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Gs(),sv(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&bn(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const ht=bn(this.g);var h=this.g.Ba();const as=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Yh(this.g)))){this.J||ht!=4||h==7||(h==8||0>=as?Gs(3):Gs(2)),bc(this);var d=this.g.Z();this.X=d;t:if(Oh(this)){var m=Yh(this.g);a="";var k=m.length,N=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),Qs(this);var W="";break t}this.h.i=new c.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(N&&h==k-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,iv(this.i,this.u,this.A,this.l,this.R,ht,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,rt=this.g;if((Ce=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(Ce)){var Ie=Ce;break t}}Ie=null}if(d=Ie)ss(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sc(this,d);else{this.o=!1,this.s=3,vt(12),Cr(this),Qs(this);break e}}if(this.P){d=!0;let Kt;for(;!this.J&&this.C<W.length;)if(Kt=cv(this,W),Kt==Ac){ht==4&&(this.s=4,vt(14),d=!1),ss(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==Ch){this.s=4,vt(15),ss(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else ss(this.i,this.l,Kt,null),Sc(this,Kt);if(Oh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||W.length!=0||this.h.h||(this.s=1,vt(16),d=!1),this.o=this.o&&d,!d)ss(this.i,this.l,W,"[Invalid Chunked Response]"),Cr(this),Qs(this);else if(0<W.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Dc(ut),ut.M=!0,vt(11))}}else ss(this.i,this.l,W,null),Sc(this,W);ht==4&&Cr(this),this.o&&!this.J&&(ht==4?sf(this.j,this):(this.o=!1,yo(this)))}else Rv(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Cr(this),Qs(this)}}}catch{}finally{}};function Oh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function cv(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?Ac:(d=Number(h.substring(d,m)),isNaN(d)?Ch:(m+=1,m+d>h.length?Ac:(h=h.slice(m,m+d),a.C=m+d,h)))}Jn.prototype.cancel=function(){this.J=!0,Cr(this)};function yo(a){a.S=Date.now()+a.I,Nh(a,a.I)}function Nh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zs(g(a.ba,a),h)}function bc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ov(this.i,this.A),this.L!=2&&(Gs(),vt(17)),Cr(this),this.s=2,Qs(this)):Nh(this,this.S-a)};function Qs(a){a.j.G==0||a.J||sf(a.j,a)}function Cr(a){bc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Hs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Sc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Pc(d.h,a))){if(!a.K&&Pc(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)So(d),Ro(d);else break e;Nc(d),vt(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=zs(g(d.Za,d),6e3));if(1>=xh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Or(d,11)}else if((a.K||d.g==a)&&So(d),!D(h))for(k=d.Da.g.parse(h),h=0;h<k.length;h++){let Ie=k[h];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const ut=Ie[3];ut!=null&&(d.la=ut,d.j.info("VER="+d.la));const ht=Ie[4];ht!=null&&(d.Aa=ht,d.j.info("SVER="+d.Aa));const as=Ie[5];as!=null&&typeof as=="number"&&0<as&&(m=1.5*as,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Kt=a.g;if(Kt){const Co=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var N=m.h;N.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Cc(N,N.h),N.h=null))}if(m.D){const Vc=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Vc&&(m.ya=Vc,Ve(m.I,m.D,Vc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var W=a;if(m.qa=cf(m,m.J?m.ia:null,m.W),W.K){Mh(m.h,W);var Ce=W,rt=m.L;rt&&(Ce.I=rt),Ce.B&&(bc(Ce),yo(Ce)),m.g=W}else nf(m);0<d.i.length&&bo(d)}else Ie[0]!="stop"&&Ie[0]!="close"||Or(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?Or(d,7):Oc(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}Gs(4)}catch{}}var lv=class{constructor(a,h){this.g=a,this.map=h}};function Dh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function xh(a){return a.h?1:a.g?a.g.size:0}function Pc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Cc(a,h){a.g?a.g.add(h):a.h=h}function Mh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Dh.prototype.cancel=function(){if(this.i=Lh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Lh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return S(a.i)}function uv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,m=0;m<d;m++)h.push(a[m]);return h}h=[],d=0;for(m in a)h[d++]=a[m];return h}function hv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const m in a)h[d++]=m;return h}}}function Fh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=hv(a),m=uv(a),k=m.length,N=0;N<k;N++)h.call(void 0,m[N],d&&d[N],a)}var Uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fv(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),k=null;if(0<=m){var N=a[d].substring(0,m);k=a[d].substring(m+1)}else N=a[d];h(N,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof kr){this.h=a.h,vo(this,a.j),this.o=a.o,this.g=a.g,Eo(this,a.s),this.l=a.l;var h=a.i,d=new Xs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Bh(this,d),this.m=a.m}else a&&(h=String(a).match(Uh))?(this.h=!1,vo(this,h[1]||"",!0),this.o=Js(h[2]||""),this.g=Js(h[3]||"",!0),Eo(this,h[4]),this.l=Js(h[5]||"",!0),Bh(this,h[6]||"",!0),this.m=Js(h[7]||"")):(this.h=!1,this.i=new Xs(null,this.h))}kr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ys(h,jh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ys(h,jh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ys(d,d.charAt(0)=="/"?gv:pv,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ys(d,_v)),a.join("")};function Rn(a){return new kr(a)}function vo(a,h,d){a.j=d?Js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Eo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Bh(a,h,d){h instanceof Xs?(a.i=h,yv(a.i,a.h)):(d||(h=Ys(h,mv)),a.i=new Xs(h,a.h))}function Ve(a,h,d){a.i.set(h,d)}function To(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ys(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,dv),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function dv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var jh=/[#\/\?@]/g,pv=/[#\?:]/g,gv=/[#\?]/g,mv=/[#\?@]/g,_v=/#/g;function Xs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yn(a){a.g||(a.g=new Map,a.h=0,a.i&&fv(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Xs.prototype,t.add=function(a,h){Yn(this),this.i=null,a=is(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function qh(a,h){Yn(a),h=is(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function $h(a,h){return Yn(a),h=is(a,h),a.g.has(h)}t.forEach=function(a,h){Yn(this),this.g.forEach(function(d,m){d.forEach(function(k){a.call(h,k,m,this)},this)},this)},t.na=function(){Yn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const k=a[m];for(let N=0;N<k.length;N++)d.push(h[m])}return d},t.V=function(a){Yn(this);let h=[];if(typeof a=="string")$h(this,a)&&(h=h.concat(this.g.get(is(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Yn(this),this.i=null,a=is(this,a),$h(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Hh(a,h,d){qh(a,h),0<d.length&&(a.i=null,a.g.set(is(a,h),S(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const N=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var k=N;W[m]!==""&&(k+="="+encodeURIComponent(String(W[m]))),a.push(k)}}return this.i=a.join("&")};function is(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function yv(a,h){h&&!a.j&&(Yn(a),a.i=null,a.g.forEach(function(d,m){var k=m.toLowerCase();m!=k&&(qh(this,m),Hh(this,k,d))},a)),a.j=h}function vv(a,h){const d=new Ks;if(c.Image){const m=new Image;m.onload=y(Xn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=y(Xn,d,"TestLoadImage: error",!1,h,m),m.onabort=y(Xn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=y(Xn,d,"TestLoadImage: timeout",!1,h,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Ev(a,h){const d=new Ks,m=new AbortController,k=setTimeout(()=>{m.abort(),Xn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(k),N.ok?Xn(d,"TestPingServer: ok",!0,h):Xn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),Xn(d,"TestPingServer: error",!1,h)})}function Xn(a,h,d,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(d)}catch{}}function Tv(){this.g=new po}function Iv(a,h,d){const m=d||"";try{Fh(a,function(k,N){let W=k;u(k)&&(W=nt(k)),h.push(m+N+"="+encodeURIComponent(W))})}catch(k){throw h.push(m+"type="+encodeURIComponent("_badmap")),k}}function Io(a){this.l=a.Ub||null,this.j=a.eb||!1}b(Io,rs),Io.prototype.g=function(){return new wo(this.l,this.j)},Io.prototype.i=(function(a){return function(){return a}})({});function wo(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(wo,oe),t=wo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ei(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Zs(this):ei(this),this.readyState==3&&Wh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Zs(this))},t.Qa=function(a){this.g&&(this.response=a,Zs(this))},t.ga=function(){this.g&&Zs(this)};function Zs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ei(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ei(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Gh(a){let h="";return le(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function kc(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Gh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ve(a,h,d))}function je(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(je,oe);var wv=/^https?$/i,Av=["POST","PUT"];t=je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wc.g(),this.v=this.o?Th(this.o):Th(wc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){zh(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)d.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),k=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Av,h,void 0))||m||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of d)this.g.setRequestHeader(N,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){zh(this,N)}};function zh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Kh(a),Ao(a)}function Kh(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),Ao(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ao(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qh(this):this.bb())},t.bb=function(){Qh(this)};function Qh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||bn(a)!=4||a.Z()!=2)){if(a.u&&bn(a)==4)Fe(a.Ea,0,a);else if(de(a,"readystatechange"),bn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=W===0){var k=String(a.D).match(Uh)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),m=!wv.test(k?k.toLowerCase():"")}d=m}if(d)de(a,"complete"),de(a,"success");else{a.m=6;try{var N=2<bn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Kh(a)}}finally{Ao(a)}}}}function Ao(a,h){if(a.g){Jh(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||de(a,"ready");try{d.onreadystatechange=m}catch{}}}function Jh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Bt(h)}};function Yh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Rv(a){const h={};a=(a.g&&2<=bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(D(a[m]))continue;var d=R(a[m]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[k]||[];h[k]=N,N.push(d)}I(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Xh(a){this.Aa=0,this.i=[],this.j=new Ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ti("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ti("baseRetryDelayMs",5e3,a),this.cb=ti("retryDelaySeedMs",1e4,a),this.Wa=ti("forwardChannelMaxRetries",2,a),this.wa=ti("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Dh(a&&a.concurrentRequestLimit),this.Da=new Tv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xh.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,m){vt(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=cf(this,null,this.W),bo(this)};function Oc(a){if(Zh(a),a.G==3){var h=a.U++,d=Rn(a.I);if(Ve(d,"SID",a.K),Ve(d,"RID",h),Ve(d,"TYPE","terminate"),ni(a,d),h=new Jn(a,a.j,h),h.L=2,h.v=To(Rn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=lf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),yo(h)}af(a)}function Ro(a){a.g&&(Dc(a),a.g.cancel(),a.g=null)}function Zh(a){Ro(a),a.u&&(c.clearTimeout(a.u),a.u=null),So(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function bo(a){if(!Vh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ue||zt(),ye||(ue(),ye=!0),Ot.add(h,a),a.B=0}}function bv(a,h){return xh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zs(g(a.Ga,a,h),of(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Jn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=_(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(k.H=N,N=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=tf(this,k,h),d=Rn(this.I),Ve(d,"RID",a),Ve(d,"CVER",22),this.D&&Ve(d,"X-HTTP-Session-Id",this.D),ni(this,d),N&&(this.O?h="headers="+encodeURIComponent(String(Gh(N)))+"&"+h:this.m&&kc(d,this.m,N)),Cc(this.h,k),this.Ua&&Ve(d,"TYPE","init"),this.P?(Ve(d,"$req",h),Ve(d,"SID","null"),k.T=!0,Rc(k,d,null)):Rc(k,d,h),this.G=2}}else this.G==3&&(a?ef(this,a):this.i.length==0||Vh(this.h)||ef(this))};function ef(a,h){var d;h?d=h.l:d=a.U++;const m=Rn(a.I);Ve(m,"SID",a.K),Ve(m,"RID",d),Ve(m,"AID",a.T),ni(a,m),a.m&&a.o&&kc(m,a.m,a.o),d=new Jn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=tf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Cc(a.h,d),Rc(d,m,h)}function ni(a,h){a.H&&le(a.H,function(d,m){Ve(h,m,d)}),a.l&&Fh({},function(d,m){Ve(h,m,d)})}function tf(a,h,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let N=-1;for(;;){const W=["count="+d];N==-1?0<d?(N=k[0].g,W.push("ofs="+N)):N=0:W.push("ofs="+N);let Ce=!0;for(let rt=0;rt<d;rt++){let Ie=k[rt].g;const ut=k[rt].map;if(Ie-=N,0>Ie)N=Math.max(0,k[rt].g-100),Ce=!1;else try{Iv(ut,W,"req"+Ie+"_")}catch{m&&m(ut)}}if(Ce){m=W.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,m}function nf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ue||zt(),ye||(ue(),ye=!0),Ot.add(h,a),a.v=0}}function Nc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zs(g(a.Fa,a),of(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,rf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Ro(this),rf(this))};function Dc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function rf(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Rn(a.qa);Ve(h,"RID","rpc"),Ve(h,"SID",a.K),Ve(h,"AID",a.T),Ve(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(h,"TO",a.ja),Ve(h,"TYPE","xmlhttp"),ni(a,h),a.m&&a.o&&kc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=To(Rn(h)),d.m=null,d.P=!0,kh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ro(this),Nc(this),vt(19))};function So(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function sf(a,h){var d=null;if(a.g==h){So(a),Dc(a),a.g=null;var m=2}else if(Pc(a.h,h))d=h.D,Mh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;m=go(),de(m,new bh(m,d)),bo(a)}else nf(a);else if(k=h.s,k==3||k==0&&0<h.X||!(m==1&&bv(a,h)||m==2&&Nc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),k){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function of(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Or(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),m=a.Xa;const k=!m;m=new kr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||vo(m,"https"),To(m),k?vv(m.toString(),d):Ev(m.toString(),d)}else vt(2);a.G=0,a.l&&a.l.sa(h),af(a),Zh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function af(a){if(a.G=0,a.ka=[],a.l){const h=Lh(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.ra()}}function cf(a,h,d){var m=d instanceof kr?Rn(d):new kr(d);if(m.g!="")h&&(m.g=h+"."+m.g),Eo(m,m.s);else{var k=c.location;m=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var N=new kr(null);m&&vo(N,m),h&&(N.g=h),k&&Eo(N,k),d&&(N.l=d),m=N}return d=a.D,h=a.ya,d&&h&&Ve(m,d,h),Ve(m,"VER",a.la),ni(a,m),m}function lf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new je(new Io({eb:d})):new je(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function uf(){}t=uf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Po(){}Po.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){oe.call(this),this.g=new Xh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!D(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!D(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new os(this)}b(Dt,oe),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Oc(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=nt(a),a=d);h.i.push(new lv(h.Ya++,a)),h.G==3&&bo(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Oc(this.g),delete this.g,Dt.aa.N.call(this)};function hf(a){Tc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}b(hf,Tc);function ff(){Ic.call(this),this.status=1}b(ff,Ic);function os(a){this.g=a}b(os,uf),os.prototype.ua=function(){de(this.g,"a")},os.prototype.ta=function(a){de(this.g,new hf(a))},os.prototype.sa=function(a){de(this.g,new ff)},os.prototype.ra=function(){de(this.g,"b")},Po.prototype.createWebChannel=Po.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,P_=function(){return new Po},S_=function(){return go()},b_=Pr,jl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mo.NO_ERROR=0,mo.TIMEOUT=8,mo.HTTP_ERROR=6,Jo=mo,Sh.COMPLETE="complete",R_=Sh,Ih.EventType=Ws,Ws.OPEN="a",Ws.CLOSE="b",Ws.ERROR="c",Ws.MESSAGE="d",oe.prototype.listen=oe.prototype.K,di=Ih,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,A_=je}).apply(typeof xo<"u"?xo:typeof self<"u"?self:typeof window<"u"?window:{});const Wd="@firebase/firestore",Gd="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Au("@firebase/firestore");function fs(){return zr.logLevel}function Y(t,...e){if(zr.logLevel<=ve.DEBUG){const n=e.map(Mu);zr.debug(`Firestore (${Bs}): ${t}`,...n)}}function Wn(t,...e){if(zr.logLevel<=ve.ERROR){const n=e.map(Mu);zr.error(`Firestore (${Bs}): ${t}`,...n)}}function vr(t,...e){if(zr.logLevel<=ve.WARN){const n=e.map(Mu);zr.warn(`Firestore (${Bs}): ${t}`,...n)}}function Mu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,C_(t,r,n)}function C_(t,e,n){let r=`FIRESTORE (${Bs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Wn(r),new Error(r)}function Se(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||C_(e,s,r)}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(dt.UNAUTHENTICATED)))}shutdown(){}}class _b{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class yb{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new k_(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class vb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Eb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new vb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(dt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class zd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new zd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new zd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ib(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function ql(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return _e(r,s);{const i=O_(),o=wb(i.encode(Kd(t,n)),i.encode(Kd(e,n)));return o!==0?o:_e(r,s)}}n+=r>65535?2:1}return _e(t.length,e.length)}function Kd(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function wb(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return _e(t[n],e[n]);return _e(t.length,e.length)}function ks(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="__name__";class an{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ce(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=an.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=an.isNumericId(e),s=an.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?an.extractNumericId(e).compare(an.extractNumericId(n)):ql(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class De extends an{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new De(n)}static emptyPath(){return new De([])}}const Ab=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends an{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return Ab.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qd}static keyField(){return new it([Qd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new J(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(De.fromString(e))}static fromName(e){return new ne(De.fromString(e).popFirst(5))}static empty(){return new ne(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new De(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t,e,n){if(!n)throw new J(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Rb(t,e,n,r){if(e===!0&&r===!0)throw new J(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jd(t){if(!ne.isDocumentKey(t))throw new J(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yd(t){if(ne.isDocumentKey(t))throw new J(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function D_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ic(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce(12329,{type:typeof t})}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ic(t);throw new J(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,e){const n={typeString:t};return e&&(n.value=e),n}function ao(t,e){if(!D_(t))throw new J(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new J(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=-62135596800,Zd=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Zd);return new xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Xd)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zd}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ao(e,xe._jsonSchema))return new xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xe._jsonSchemaVersion="firestore/timestamp/1.0",xe._jsonSchema={type:Je("string",xe._jsonSchemaVersion),seconds:Je("number"),nanoseconds:Je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new xe(0,0))}static max(){return new he(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=-1;function bb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new Er(s,ne.empty(),e)}function Sb(t){return new Er(t.readTime,t.key,Hi)}class Er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Er(he.min(),ne.empty(),Hi)}static max(){return new Er(he.max(),ne.empty(),Hi)}}function Pb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==Cb)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):F.reject(n)}static resolve(e){return new F(((n,r)=>{n(e)}))}static reject(e){return new F(((n,r)=>{r(e)}))}static waitFor(e){return new F(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next((s=>s?F.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new F(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new F(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function Ob(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}oc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=-1;function ac(t){return t==null}function wa(t){return t===0&&1/t==-1/0}function Nb(t){return typeof t=="number"&&Number.isInteger(t)&&!wa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="";function Db(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ep(e)),e=Vb(t.get(n),e);return ep(e)}function Vb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case V_:n+="";break;default:n+=i}}return n}function ep(t){return t+V_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function x_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mo(this.root,e,this.comparator,!0)}}class Mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new np(this.data.getIterator())}getIteratorFrom(e){return new np(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class np{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new Ze(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ks(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new M_("Invalid base64 string: "+i):i}})(e);return new ct(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const xb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=xb.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="server_timestamp",F_="__type__",U_="__previous_value__",B_="__local_write_time__";function Uu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[F_])===null||n===void 0?void 0:n.stringValue)===L_}function cc(t){const e=t.mapValue.fields[U_];return Uu(e)?cc(e):e}function Wi(t){const e=Tr(t.mapValue.fields[B_].timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const Aa="(default)";class Gi{constructor(e,n){this.projectId=e,this.database=n||Aa}static empty(){return new Gi("","")}get isDefaultDatabase(){return this.database===Aa}isEqual(e){return e instanceof Gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="__type__",Lb="__max__",Lo={mapValue:{}},q_="__vector__",Ra="value";function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uu(t)?4:Ub(t)?9007199254740991:Fb(t)?10:11:ce(28295,{value:t})}function Tn(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wi(t).isEqual(Wi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Tr(s.timestampValue),c=Tr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Ir(s.bytesValue).isEqual(Ir(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),c=He(i.doubleValue);return o===c?wa(o)===wa(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return ks(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(tp(o)!==tp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Tn(o[l],c[l])))return!1;return!0})(t,e);default:return ce(52216,{left:t})}}function zi(t,e){return(t.values||[]).find((n=>Tn(n,e)))!==void 0}function Os(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=He(i.integerValue||i.doubleValue),l=He(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return rp(t.timestampValue,e.timestampValue);case 4:return rp(Wi(t),Wi(e));case 5:return ql(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=Ir(i),l=Ir(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=_e(c[u],l[u]);if(f!==0)return f}return _e(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=_e(He(i.latitude),He(o.latitude));return c!==0?c:_e(He(i.longitude),He(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return sp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var c,l,u,f;const p=i.fields||{},g=o.fields||{},y=(c=p[Ra])===null||c===void 0?void 0:c.arrayValue,b=(l=g[Ra])===null||l===void 0?void 0:l.arrayValue,S=_e(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return S!==0?S:sp(y,b)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Lo.mapValue&&o===Lo.mapValue)return 0;if(i===Lo.mapValue)return 1;if(o===Lo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=ql(l[p],f[p]);if(g!==0)return g;const y=Os(c[l[p]],u[f[p]]);if(y!==0)return y}return _e(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ce(23264,{le:n})}}function rp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Tr(t),r=Tr(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function sp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Os(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function Ns(t){return $l(t)}function $l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Ir(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ne.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$l(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$l(n.fields[o])}`;return s+"}"})(t.mapValue):ce(61005,{value:t})}function Yo(t){switch(wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cc(t);return e?16+Yo(e):16;case 5:return 2*t.stringValue.length;case 6:return Ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Yo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Xr(r.fields,((i,o)=>{s+=i.length+Yo(o)})),s})(t.mapValue);default:throw ce(13486,{value:t})}}function ip(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hl(t){return!!t&&"integerValue"in t}function Bu(t){return!!t&&"arrayValue"in t}function op(t){return!!t&&"nullValue"in t}function ap(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xo(t){return!!t&&"mapValue"in t}function Fb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[j_])===null||n===void 0?void 0:n.stringValue)===q_}function Ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ci(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ub(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Lb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ci(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Xo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Xo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Xr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new jt(Ci(this.value))}}function $_(t){const e=[];return Xr(t.fields,((n,r)=>{const s=new it([n]);if(Xo(r)){const i=$_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new gt(e,0,he.min(),he.min(),he.min(),jt.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,he.min(),he.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,he.min(),he.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.position=e,this.inclusive=n}}function cp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=Os(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function lp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{}class Qe extends H_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qb(e,n,r):n==="array-contains"?new Wb(e,r):n==="in"?new Gb(e,r):n==="not-in"?new zb(e,r):n==="array-contains-any"?new Kb(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $b(e,r):new Hb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Os(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(Os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends H_{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new rn(e,n)}matches(e){return W_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function W_(t){return t.op==="and"}function G_(t){return jb(t)&&W_(t)}function jb(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function Wl(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+Ns(t.value);if(G_(t))return t.filters.map((e=>Wl(e))).join(",");{const e=t.filters.map((n=>Wl(n))).join(",");return`${t.op}(${e})`}}function z_(t,e){return t instanceof Qe?(function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&Tn(r.value,s.value)})(t,e):t instanceof rn?(function(r,s){return s instanceof rn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&z_(o,s.filters[c])),!0):!1})(t,e):void ce(19439)}function K_(t){return t instanceof Qe?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ns(n.value)}`})(t):t instanceof rn?(function(n){return n.op.toString()+" {"+n.getFilters().map(K_).join(" ,")+"}"})(t):"Filter"}class qb extends Qe{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class $b extends Qe{constructor(e,n){super(e,"in",n),this.keys=Q_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class Hb extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=Q_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Q_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>ne.fromName(r.referenceValue)))}class Wb extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bu(n)&&zi(n.arrayValue,this.value)}}class Gb extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zi(this.value.arrayValue,n)}}class zb extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!zi(this.value.arrayValue,n)}}class Kb extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>zi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Pe=null}}function up(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Qb(t,e,n,r,s,i,o)}function ju(t){const e=fe(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Wl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ns(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ns(r))).join(",")),e.Pe=n}return e.Pe}function qu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Bb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!z_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lp(t.startAt,e.startAt)&&lp(t.endAt,e.endAt)}function Gl(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Jb(t,e,n,r,s,i,o,c){return new co(t,e,n,r,s,i,o,c)}function lc(t){return new co(t)}function hp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function J_(t){return t.collectionGroup!==null}function ki(t){const e=fe(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ze(it.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Sa(i,r))})),n.has(it.keyField().canonicalString())||e.Te.push(new Sa(it.keyField(),r))}return e.Te}function mn(t){const e=fe(t);return e.Ie||(e.Ie=Yb(e,ki(t))),e.Ie}function Yb(t,e){if(t.limitType==="F")return up(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Sa(s.field,i)}));const n=t.endAt?new ba(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ba(t.startAt.position,t.startAt.inclusive):null;return up(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zl(t,e){const n=t.filters.concat([e]);return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Kl(t,e,n){return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uc(t,e){return qu(mn(t),mn(e))&&t.limitType===e.limitType}function Y_(t){return`${ju(mn(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>K_(s))).join(", ")}]`),ac(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ns(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ns(s))).join(",")),`Target(${r})`})(mn(t))}; limitType=${t.limitType})`}function hc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of ki(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=cp(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,ki(r),s)||r.endAt&&!(function(o,c,l){const u=cp(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,ki(r),s))})(t,e)}function Xb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function X_(t){return(e,n)=>{let r=!1;for(const s of ki(t)){const i=Zb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Zb(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Os(l,u):ce(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Xr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return x_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=new Be(ne.comparator);function Gn(){return eS}const Z_=new Be(ne.comparator);function pi(...t){let e=Z_;for(const n of t)e=e.insert(n.key,n);return e}function ey(t){let e=Z_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Fr(){return Oi()}function ty(){return Oi()}function Oi(){return new Zr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const tS=new Be(ne.comparator),nS=new Ze(ne.comparator);function Ee(...t){let e=nS;for(const n of t)e=e.add(n);return e}const rS=new Ze(_e);function sS(){return rS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wa(e)?"-0":e}}function ny(t){return{integerValue:""+t}}function iS(t,e){return Nb(e)?ny(e):$u(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this._=void 0}}function oS(t,e,n){return t instanceof Ki?(function(s,i){const o={fields:{[F_]:{stringValue:L_},[B_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uu(i)&&(i=cc(i)),i&&(o.fields[U_]=i),{mapValue:o}})(n,e):t instanceof Qi?sy(t,e):t instanceof Ji?iy(t,e):(function(s,i){const o=ry(s,i),c=fp(o)+fp(s.Ee);return Hl(o)&&Hl(s.Ee)?ny(c):$u(s.serializer,c)})(t,e)}function aS(t,e,n){return t instanceof Qi?sy(t,e):t instanceof Ji?iy(t,e):n}function ry(t,e){return t instanceof Pa?(function(r){return Hl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ki extends fc{}class Qi extends fc{constructor(e){super(),this.elements=e}}function sy(t,e){const n=oy(e);for(const r of t.elements)n.some((s=>Tn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Ji extends fc{constructor(e){super(),this.elements=e}}function iy(t,e){let n=oy(e);for(const r of t.elements)n=n.filter((s=>!Tn(s,r)));return{arrayValue:{values:n}}}class Pa extends fc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function fp(t){return He(t.integerValue||t.doubleValue)}function oy(t){return Bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n){this.field=e,this.transform=n}}function lS(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Qi&&s instanceof Qi||r instanceof Ji&&s instanceof Ji?ks(r.elements,s.elements,Tn):r instanceof Pa&&s instanceof Pa?Tn(r.Ee,s.Ee):r instanceof Ki&&s instanceof Ki})(t.transform,e.transform)}class uS{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dc{}function ay(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ly(t.key,Un.none()):new lo(t.key,t.data,Un.none());{const n=t.data,r=jt.empty();let s=new Ze(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new es(t.key,r,new Yt(s.toArray()),Un.none())}}function hS(t,e,n){t instanceof lo?(function(s,i,o){const c=s.value.clone(),l=pp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof es?(function(s,i,o){if(!Zo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=pp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(cy(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Ni(t,e,n,r){return t instanceof lo?(function(i,o,c,l){if(!Zo(i.precondition,o))return c;const u=i.value.clone(),f=gp(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof es?(function(i,o,c,l){if(!Zo(i.precondition,o))return c;const u=gp(i.fieldTransforms,l,o),f=o.data;return f.setAll(cy(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Zo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function fS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ry(r.transform,s||null);i!=null&&(n===null&&(n=jt.empty()),n.set(r.field,i))}return n||null}function dp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ks(r,s,((i,o)=>lS(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class lo extends dc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class es extends dc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cy(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function pp(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,aS(o,c,n[s]))}return r}function gp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,oS(i,o,e))}return r}class ly extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dS extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ni(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ni(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ty();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=ay(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ee())}isEqual(e){return this.batchId===e.batchId&&ks(this.mutations,e.mutations,((n,r)=>dp(n,r)))&&ks(this.baseMutations,e.baseMutations,((n,r)=>dp(n,r)))}}class Hu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return tS})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,Te;function _S(t){switch(t){case L.OK:return ce(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return ce(15467,{code:t})}}function uy(t){if(t===void 0)return Wn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ke.OK:return L.OK;case Ke.CANCELLED:return L.CANCELLED;case Ke.UNKNOWN:return L.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return L.INTERNAL;case Ke.UNAVAILABLE:return L.UNAVAILABLE;case Ke.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ke.NOT_FOUND:return L.NOT_FOUND;case Ke.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ke.ABORTED:return L.ABORTED;case Ke.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ke.DATA_LOSS:return L.DATA_LOSS;default:return ce(39323,{code:t})}}(Te=Ke||(Ke={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=new dr([4294967295,4294967295],0);function mp(t){const e=O_().encode(t),n=new w_;return n.update(e),new Uint8Array(n.digest())}function _p(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([n,r],0),new dr([s,i],0)]}class Wu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new gi(`Invalid padding: ${n}`);if(r<0)throw new gi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new gi(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=dr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(dr.fromNumber(r)));return s.compare(yS)===1&&(s=new dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=mp(e),[r,s]=_p(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Wu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.fe===0)return;const n=mp(e),[r,s]=_p(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pc(he.min(),s,new Be(_e),Gn(),Ee())}}class uo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new uo(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class hy{constructor(e,n){this.targetId=e,this.De=n}}class fy{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class yp{constructor(){this.ve=0,this.Ce=vp(),this.Fe=ct.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ee(),n=Ee(),r=Ee();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}})),new uo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=vp()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Se(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class vS{constructor(e){this.We=e,this.Ge=new Map,this.ze=Gn(),this.je=Fo(),this.Je=Fo(),this.He=new Be(_e)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Gl(i))if(r===0){const o=new ne(i.path);this.Xe(n,o,gt.newNoDocument(o,he.min()))}else Se(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Ir(r).toUint8Array()}catch(l){if(l instanceof M_)return vr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Wu(o,s,i)}catch(l){return vr(l instanceof gi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const c=this.st(o);if(c){if(i.current&&Gl(c.target)){const l=new ne(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,gt.newNoDocument(l,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=Ee();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new pc(e,n,this.He,this.ze,r);return this.ze=Gn(),this.je=Fo(),this.Je=Fo(),this.He=new Be(_e),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new yp,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Ze(_e),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Ze(_e),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new yp),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Fo(){return new Be(ne.comparator)}function vp(){return new Be(ne.comparator)}const ES={asc:"ASCENDING",desc:"DESCENDING"},TS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IS={and:"AND",or:"OR"};class wS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ql(t,e){return t.useProto3Json||ac(e)?e:{value:e}}function Ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AS(t,e){return Ca(t,e.toTimestamp())}function _n(t){return Se(!!t,49232),he.fromTimestamp((function(n){const r=Tr(n);return new xe(r.seconds,r.nanos)})(t))}function Gu(t,e){return Jl(t,e).canonicalString()}function Jl(t,e){const n=(function(s){return new De(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function py(t){const e=De.fromString(t);return Se(vy(e),10190,{key:e.toString()}),e}function Yl(t,e){return Gu(t.databaseId,e.path)}function nl(t,e){const n=py(e);if(n.get(1)!==t.databaseId.projectId)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(my(n))}function gy(t,e){return Gu(t.databaseId,e)}function RS(t){const e=py(t);return e.length===4?De.emptyPath():my(e)}function Xl(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function my(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ep(t,e,n){return{name:Yl(t,e),fields:n.value.mapValue.fields}}function bS(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Se(f===void 0||typeof f=="string",58123),ct.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ct.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?L.UNKNOWN:uy(u.code);return new J(f,u.message||"")})(o);n=new fy(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=nl(t,r.document.name),i=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):he.min(),c=new jt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new ea(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=nl(t,r.document),i=r.readTime?_n(r.readTime):he.min(),o=gt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ea([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=nl(t,r.document),i=r.removedTargetIds||[];n=new ea([],i,s,null)}else{if(!("filter"in e))return ce(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new mS(s,i),c=r.targetId;n=new hy(c,o)}}return n}function SS(t,e){let n;if(e instanceof lo)n={update:Ep(t,e.key,e.value)};else if(e instanceof ly)n={delete:Yl(t,e.key)};else if(e instanceof es)n={update:Ep(t,e.key,e.data),updateMask:MS(e.fieldMask)};else{if(!(e instanceof dS))return ce(16599,{Rt:e.type});n={verify:Yl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Ki)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Qi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ji)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Pa)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw ce(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:AS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)})(t,e.precondition)),n}function PS(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?_n(s.updateTime):_n(i);return o.isEqual(he.min())&&(o=_n(i)),new uS(o,s.transformResults||[])})(n,e)))):[]}function CS(t,e){return{documents:[gy(t,e.path)]}}function kS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=gy(t,s);const i=(function(u){if(u.length!==0)return yy(rn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(g){return{field:ps(g.field),direction:DS(g.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Ql(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function OS(t){let e=RS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const g=_y(p);return g instanceof rn&&G_(g)?g.getFilters():[g]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((g=>(function(b){return new Sa(gs(b.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(b.direction))})(g)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let g;return g=typeof p=="object"?p.value:p,ac(g)?null:g})(n.limit));let l=null;n.startAt&&(l=(function(p){const g=!!p.before,y=p.values||[];return new ba(y,g)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const g=!p.before,y=p.values||[];return new ba(y,g)})(n.endAt)),Jb(e,s,o,i,c,"F",l,u)}function NS(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function _y(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gs(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gs(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gs(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gs(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Qe.create(gs(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return rn.create(n.compositeFilter.filters.map((r=>_y(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(n.compositeFilter.op))})(t):ce(30097,{filter:t})}function DS(t){return ES[t]}function VS(t){return TS[t]}function xS(t){return IS[t]}function ps(t){return{fieldPath:t.canonicalString()}}function gs(t){return it.fromServerFormat(t.fieldPath)}function yy(t){return t instanceof Qe?(function(n){if(n.op==="=="){if(ap(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NAN"}};if(op(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ap(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NAN"}};if(op(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(n.field),op:VS(n.op),value:n.value}}})(t):t instanceof rn?(function(n){const r=n.getFilters().map((s=>yy(s)));return r.length===1?r[0]:{compositeFilter:{op:xS(n.op),filters:r}}})(t):ce(54877,{filter:t})}function MS(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function vy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,s,i=he.min(),o=he.min(),c=ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.gt=e}}function FS(t){const e=OS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.Dn=new BS}addToCollectionParentIndex(e,n){return this.Dn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Er.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class BS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ey=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(Ey,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ds(0)}static ur(){return new Ds(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="LruGarbageCollector",jS=1048576;function wp([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class qS{constructor(e){this.Tr=e,this.buffer=new Ze(wp),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();wp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $S{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){Y(Ip,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qs(n)?Y(Ip,"Ignoring IndexedDB error during garbage collection: ",n):await js(n)}await this.Rr(3e5)}))}}class HS{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return F.resolve(oc.ue);const r=new qS(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Tp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tp):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),fs()<=ve.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function WS(t,e){return new HS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.changes=new Zr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Ni(r.mutation,s,Yt.empty(),xe.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ee()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Fr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=pi();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ee())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Gn();const o=Oi(),c=(function(){return Oi()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof es)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ni(f.mutation,u,f.mutation.getFieldMask(),xe.now())):o.set(u.key,Yt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return c.set(u,new zS(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,n){const r=Oi();let s=new Be(((o,c)=>o-c)),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Yt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Ee()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=ty();f.forEach((g=>{if(!i.has(g)){const y=ay(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):J_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Fr());let c=Hi,l=i;return o.next((u=>F.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{l=l.insert(f,g)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Ee()))).next((f=>({batchId:c,changes:ey(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next((r=>{let s=pi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=pi();return this.indexManager.getCollectionParents(e,i).next((c=>F.forEach(c,(l=>{const u=(function(p,g){return new co(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,gt.newInvalidDocument(f)))}));let c=pi();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Ni(f.mutation,u,Yt.empty(),xe.now()),hc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return F.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:_n(s.createTime)}})(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:FS(s.bundledQuery),readTime:_n(s.readTime)}})(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(){this.overlays=new Be(ne.comparator),this.kr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return F.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Fr(),i=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Fr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Fr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return F.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new gS(n,r));let i=this.kr.get(n);i===void 0&&(i=Ee(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.qr=new Ze(tt.Qr),this.$r=new Ze(tt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new tt(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new ne(new De([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new ne(new De([])),r=new tt(n,e),s=new tt(n,e+1);let i=Ee();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new tt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return ne.comparator(e.key,n.key)||_e(e.Hr,n.Hr)}static Ur(e,n){return _e(e.Hr,n.Hr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ze(tt.Qr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pS(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Yr=this.Yr.add(new tt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Fu:this.er-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(_e);return n.forEach((s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),F.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new tt(new ne(i),0);let c=new Ze(_e);return this.Yr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)}),o),F.resolve(this.ei(c))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Se(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return F.forEach(n.mutations,(s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new tt(n,0),s=this.Yr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.ni=e,this.docs=(function(){return new Be(ne.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Gn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))})),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Gn();const o=n.path,c=new ne(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Pb(Sb(f),r)<=0||(s.has(f.key)||hc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce(9500)}ri(e,n){return F.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new eP(this)}getSize(e){return F.resolve(this.size)}}class eP extends GS{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),F.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.persistence=e,this.ii=new Zr((n=>ju(n)),qu),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.si=0,this.oi=new zu,this.targetCount=0,this._i=Ds.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),F.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.hr(n),F.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),F.waitFor(i).next((()=>s))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n){this.ai={},this.overlays={},this.ui=new oc(0),this.ci=!1,this.ci=!0,this.li=new YS,this.referenceDelegate=e(this),this.hi=new tP(this),this.indexManager=new US,this.remoteDocumentCache=(function(s){return new ZS(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new LS(n),this.Ti=new QS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new XS(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new nP(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return F.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class nP extends kb{constructor(e){super(),this.currentSequenceNumber=e}}class Ku{constructor(e){this.persistence=e,this.Ai=new zu,this.Ri=null}static Vi(e){return new Ku(e)}get mi(){if(this.Ri)return this.Ri;throw ce(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.mi,(r=>{const s=ne.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,he.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return F.or([()=>F.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class ka{constructor(e,n){this.persistence=e,this.gi=new Zr((r=>Db(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=WS(this,n)}static Vi(e,n){return new ka(e,n)}Ii(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return F.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?F.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((c=>{c||(r++,i.removeEntry(o,he.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),F.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Yo(e.data.value)),n}Sr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Qu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Lw()?8:Ob(_t())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new rP;return this.ws(e,n,o).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,n,o,c.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(fs()<=ve.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(fs()<=ve.DEBUG&&Y("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(fs()<=ve.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):F.resolve())}ps(e,n){if(hp(n))return F.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Kl(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ee(...i);return this.gs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.bs(n,c);return this.Ds(n,u,o,l.readTime)?this.ps(e,Kl(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ys(e,n,r,s){return hp(n)||s.isEqual(he.min())?F.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?F.resolve(null):(fs()<=ve.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ds(n)),this.vs(e,o,n,bb(s,Hi)).next((c=>c)))}))}bs(e,n){let r=new Ze(X_(e));return n.forEach(((s,i)=>{hc(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return fs()<=ve.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ds(n)),this.gs.getDocumentsMatchingQuery(e,n,Er.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="LocalStore",iP=3e8;class oP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new Be(_e),this.Ms=new Zr((i=>ju(i)),qu),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KS(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function aP(t,e,n,r){return new oP(t,e,n,r)}async function Iy(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Ee();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function cP(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,g=p.keys();let y=F.resolve();return g.forEach((b=>{y=y.next((()=>f.getEntry(l,b))).next((S=>{const O=u.docVersions.get(b);Se(O!==null,48541),S.version.compareTo(O)<0&&(p.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),f.addEntry(S)))}))})),y.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Ee();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function wy(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function lP(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach(((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ct.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),(function(S,O,j){return S.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=iP?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(g,y,f)&&c.push(n.hi.updateTargetData(i,y))}));let l=Gn(),u=Ee();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(uP(i,o,e.documentUpdates).next((f=>{l=f.Ls,u=f.ks}))),!r.isEqual(he.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return F.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Fs=s,i)))}function uP(t,e,n){let r=Ee(),s=Ee();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Gn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Y(Ju,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Ls:o,ks:s}}))}function hP(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Fu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function fP(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,F.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function Zl(t,e,n){const r=fe(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!qs(o))throw o;Y(Ju,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Ap(t,e,n){const r=fe(t);let s=he.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=fe(l),g=p.Ms.get(f);return g!==void 0?F.resolve(p.Fs.get(g)):p.hi.getTargetData(u,f)})(r,o,mn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:Ee()))).next((c=>(dP(r,Xb(e),c),{documents:c,qs:i})))))}function dP(t,e,n){let r=t.xs.get(e)||he.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class Rp{constructor(){this.activeTargetIds=sS()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pP{constructor(){this.Fo=new Rp,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Rp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="ConnectivityMonitor";class Sp{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){Y(bp,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){Y(bp,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo=null;function eu(){return Uo===null?Uo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Uo++,"0x"+Uo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="RestConnection",mP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _P{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Aa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=eu(),c=this.Go(e,n.toUriEncodedString());Y(rl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:u}=new URL(c),f=Fs(u);return this.jo(e,c,l,r,f).then((p=>(Y(rl,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw vr(rl,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=mP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class vP extends _P{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=eu();return new Promise(((c,l)=>{const u=new A_;u.setWithCredentials(!0),u.listenOnce(R_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Jo.NO_ERROR:const p=u.getResponseJson();Y(ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Jo.TIMEOUT:Y(ft,`RPC '${e}' ${o} timed out`),l(new J(L.DEADLINE_EXCEEDED,"Request time out"));break;case Jo.HTTP_ERROR:const g=u.getStatus();if(Y(ft,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const b=y==null?void 0:y.error;if(b&&b.status&&b.message){const S=(function(j){const D=j.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(D)>=0?D:L.UNKNOWN})(b.status);l(new J(S,b.message))}else l(new J(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new J(L.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{Y(ft,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);Y(ft,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=eu(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=P_(),c=S_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Y(ft,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.T_(p);let g=!1,y=!1;const b=new yP({Ho:O=>{y?Y(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(Y(ft,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Y(ft,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Yo:()=>p.close()}),S=(O,j,D)=>{O.listen(j,(B=>{try{D(B)}catch(q){setTimeout((()=>{throw q}),0)}}))};return S(p,di.EventType.OPEN,(()=>{y||(Y(ft,`RPC '${e}' stream ${s} transport opened.`),b.s_())})),S(p,di.EventType.CLOSE,(()=>{y||(y=!0,Y(ft,`RPC '${e}' stream ${s} transport closed`),b.__(),this.I_(p))})),S(p,di.EventType.ERROR,(O=>{y||(y=!0,vr(ft,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),b.__(new J(L.UNAVAILABLE,"The operation could not be completed")))})),S(p,di.EventType.MESSAGE,(O=>{var j;if(!y){const D=O.data[0];Se(!!D,16349);const B=D,q=(B==null?void 0:B.error)||((j=B[0])===null||j===void 0?void 0:j.error);if(q){Y(ft,`RPC '${e}' stream ${s} received error:`,q);const Z=q.status;let le=(function(v){const A=Ke[v];if(A!==void 0)return uy(A)})(Z),I=q.message;le===void 0&&(le=L.INTERNAL,I="Unknown error status: "+Z+" with message "+q.message),y=!0,b.__(new J(le,I)),p.close()}else Y(ft,`RPC '${e}' stream ${s} received:`,D),b.a_(D)}})),S(c,b_.STAT_EVENT,(O=>{O.stat===jl.PROXY?Y(ft,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===jl.NOPROXY&&Y(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{b.o_()}),0),b}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function sl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t){return new wS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="PersistentStream";class Ry{constructor(e,n,r,s,i,o,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Ay(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new J(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return Y(Pp,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(Y(Pp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class EP extends Ry{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=bS(this.serializer,e),r=(function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?_n(o.readTime):he.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Xl(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=Gl(l)?{documents:CS(i,l)}:{query:kS(i,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=dy(i,o.resumeToken);const u=Ql(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=Ca(i,o.snapshotVersion.toTimestamp());const u=Ql(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=NS(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Xl(this.serializer),n.removeTarget=e,this.k_(n)}}class TP extends Ry{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=PS(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Xl(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>SS(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{}class wP extends IP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Jl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(L.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Jo(e,Jl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(L.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class AP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Wn(n),this._a=!1):Y("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="RemoteStore";class RP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{ts(this)&&(Y(Kr,"Restarting streams for network reachability change."),await(async function(l){const u=fe(l);u.Ia.add(4),await ho(u),u.Aa.set("Unknown"),u.Ia.delete(4),await mc(u)})(this))}))})),this.Aa=new AP(r,s)}}async function mc(t){if(ts(t))for(const e of t.da)await e(!0)}async function ho(t){for(const e of t.da)await e(!1)}function by(t,e){const n=fe(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),eh(n)?Zu(n):$s(n).x_()&&Xu(n,e))}function Yu(t,e){const n=fe(t),r=$s(n);n.Ta.delete(e),r.x_()&&Sy(n,e),n.Ta.size===0&&(r.x_()?r.B_():ts(n)&&n.Aa.set("Unknown"))}function Xu(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$s(t).H_(e)}function Sy(t,e){t.Ra.$e(e),$s(t).Y_(e)}function Zu(t){t.Ra=new vS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),$s(t).start(),t.Aa.aa()}function eh(t){return ts(t)&&!$s(t).M_()&&t.Ta.size>0}function ts(t){return fe(t).Ia.size===0}function Py(t){t.Ra=void 0}async function bP(t){t.Aa.set("Online")}async function SP(t){t.Ta.forEach(((e,n)=>{Xu(t,e)}))}async function PP(t,e){Py(t),eh(t)?(t.Aa.la(e),Zu(t)):t.Aa.set("Unknown")}async function CP(t,e,n){if(t.Aa.set("Online"),e instanceof fy&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ta.delete(c),s.Ra.removeTarget(c))})(t,e)}catch(r){Y(Kr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oa(t,r)}else if(e instanceof ea?t.Ra.Ye(e):e instanceof hy?t.Ra.it(e):t.Ra.et(e),!n.isEqual(he.min()))try{const r=await wy(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Ra.Pt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ta.get(l);if(!f)return;i.Ta.set(l,f.withResumeToken(ct.EMPTY_BYTE_STRING,f.snapshotVersion)),Sy(i,l);const p=new ur(f.target,l,u,f.sequenceNumber);Xu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){Y(Kr,"Failed to raise snapshot:",r),await Oa(t,r)}}async function Oa(t,e,n){if(!qs(e))throw e;t.Ia.add(1),await ho(t),t.Aa.set("Offline"),n||(n=()=>wy(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Y(Kr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await mc(t)}))}function Cy(t,e){return e().catch((n=>Oa(t,n,e)))}async function _c(t){const e=fe(t),n=Ar(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Fu;for(;kP(e);)try{const s=await hP(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,OP(e,s)}catch(s){await Oa(e,s)}ky(e)&&Oy(e)}function kP(t){return ts(t)&&t.Pa.length<10}function OP(t,e){t.Pa.push(e);const n=Ar(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function ky(t){return ts(t)&&!Ar(t).M_()&&t.Pa.length>0}function Oy(t){Ar(t).start()}async function NP(t){Ar(t).na()}async function DP(t){const e=Ar(t);for(const n of t.Pa)e.X_(n.mutations)}async function VP(t,e,n){const r=t.Pa.shift(),s=Hu.from(r,e,n);await Cy(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await _c(t)}async function xP(t,e){e&&Ar(t).Z_&&await(async function(r,s){if((function(o){return _S(o)&&o!==L.ABORTED})(s.code)){const i=r.Pa.shift();Ar(r).N_(),await Cy(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await _c(r)}})(t,e),ky(t)&&Oy(t)}async function Cp(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),Y(Kr,"RemoteStore received new credentials");const r=ts(n);n.Ia.add(3),await ho(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await mc(n)}async function MP(t,e){const n=fe(t);e?(n.Ia.delete(2),await mc(n)):e||(n.Ia.add(2),await ho(n),n.Aa.set("Unknown"))}function $s(t){return t.Va||(t.Va=(function(n,r,s){const i=fe(n);return i.ia(),new EP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:bP.bind(null,t),e_:SP.bind(null,t),n_:PP.bind(null,t),J_:CP.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),eh(t)?Zu(t):t.Aa.set("Unknown")):(await t.Va.stop(),Py(t))}))),t.Va}function Ar(t){return t.ma||(t.ma=(function(n,r,s){const i=fe(n);return i.ia(),new TP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:NP.bind(null,t),n_:xP.bind(null,t),ea:DP.bind(null,t),ta:VP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await _c(t)):(await t.ma.stop(),t.Pa.length>0&&(Y(Kr,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new th(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nh(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),qs(t))return new J(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{static emptySet(e){return new As(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=pi(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof As)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new As;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.fa=new Be(ne.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ce(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Vs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Vs(e,n,As.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class FP{constructor(){this.queries=Op(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Op(),i.forEach(((o,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new J(L.ABORTED,"Firestore shutting down"))}}function Op(){return new Zr((t=>Y_(t)),uc)}async function rh(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new LP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=nh(o,`Initialization of query '${ds(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&ih(n)}async function sh(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UP(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.wa)c.Ca(s)&&(r=!0);o.ya=s}}r&&ih(n)}function BP(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function ih(t){t.Da.forEach((e=>{e.next()}))}var tu,Np;(Np=tu||(tu={})).Fa="default",Np.Cache="cache";class oh{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==tu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.key=e}}class Dy{constructor(e){this.key=e}}class jP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ee(),this.mutatedKeys=Ee(),this.Xa=X_(e),this.eu=new As(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new kp,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const g=s.get(f),y=hc(this.query,p)?p:null,b=!!g&&this.mutatedKeys.has(g.key),S=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let O=!1;g&&y?g.data.isEqual(y.data)?b!==S&&(r.track({type:3,doc:y}),O=!0):this.iu(g,y)||(r.track({type:2,doc:y}),O=!0,(l&&this.Xa(y,l)>0||u&&this.Xa(y,u)<0)&&(c=!0)):!g&&y?(r.track({type:0,doc:y}),O=!0):g&&!y&&(r.track({type:1,doc:g}),O=!0,(l||u)&&(c=!0)),O&&(y?(o=o.add(y),i=S?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(y,b){const S=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{At:O})}};return S(y)-S(b)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,u=l!==this.Ya;return this.Ya=l,o.length!==0||u?{snapshot:new Vs(this.query,e.eu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new kp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ee(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Dy(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new Ny(r))})),n}uu(e){this.Ha=e.qs,this.Za=Ee();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Vs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ah="SyncEngine";class qP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $P{constructor(e){this.key=e,this.lu=!1}}class HP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Zr((c=>Y_(c)),uc),this.Tu=new Map,this.Iu=new Set,this.du=new Be(ne.comparator),this.Eu=new Map,this.Au=new zu,this.Ru={},this.Vu=new Map,this.mu=Ds.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function WP(t,e,n=!0){const r=Uy(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Vy(r,e,n,!0),s}async function GP(t,e){const n=Uy(t);await Vy(n,e,!0,!1)}async function Vy(t,e,n,r){const s=await fP(t.localStore,mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await zP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&by(t.remoteStore,s),c}async function zP(t,e,n,r,s){t.gu=(p,g,y)=>(async function(S,O,j,D){let B=O.view.nu(j);B.Ds&&(B=await Ap(S.localStore,O.query,!1).then((({documents:I})=>O.view.nu(I,B))));const q=D&&D.targetChanges.get(O.targetId),Z=D&&D.targetMismatches.get(O.targetId)!=null,le=O.view.applyChanges(B,S.isPrimaryClient,q,Z);return Vp(S,O.targetId,le._u),le.snapshot})(t,p,g,y);const i=await Ap(t.localStore,e,!0),o=new jP(e,i.qs),c=o.nu(i.documents),l=uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Vp(t,n,u._u);const f=new qP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function KP(t,e,n){const r=fe(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!uc(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Zl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Yu(r.remoteStore,s.targetId),nu(r,s.targetId)})).catch(js)):(nu(r,s.targetId),await Zl(r.localStore,s.targetId,!0))}async function QP(t,e){const n=fe(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yu(n.remoteStore,r.targetId))}async function JP(t,e,n){const r=rC(t);try{const s=await(function(o,c){const l=fe(o),u=xe.now(),f=c.reduce(((y,b)=>y.add(b.key)),Ee());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let b=Gn(),S=Ee();return l.Os.getEntries(y,f).next((O=>{b=O,b.forEach(((j,D)=>{D.isValidDocument()||(S=S.add(j))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,b))).next((O=>{p=O;const j=[];for(const D of c){const B=fS(D,p.get(D.key).overlayedDocument);B!=null&&j.push(new es(D.key,B,$_(B.value.mapValue),Un.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,j,c)})).next((O=>{g=O;const j=O.applyToLocalDocumentSet(p,S);return l.documentOverlayCache.saveOverlays(y,O.batchId,j)}))})).then((()=>({batchId:g.batchId,changes:ey(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Ru[o.currentUser.toKey()];u||(u=new Be(_e)),u=u.insert(c,l),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await fo(r,s.changes),await _c(r.remoteStore)}catch(s){const i=nh(s,"Failed to persist write");n.reject(i)}}async function xy(t,e){const n=fe(t);try{const r=await lP(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Se(o.lu,14607):s.removedDocuments.size>0&&(Se(o.lu,42227),o.lu=!1))})),await fo(n,r,e)}catch(r){await js(r)}}function Dp(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=fe(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const g of p.wa)g.va(c)&&(u=!0)})),u&&ih(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YP(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Be(ne.comparator);o=o.insert(i,gt.newNoDocument(i,he.min()));const c=Ee().add(i),l=new pc(he.min(),new Map,new Be(_e),o,c);await xy(r,l),r.du=r.du.remove(i),r.Eu.delete(e),ch(r)}else await Zl(r.localStore,e,!1).then((()=>nu(r,e,n))).catch(js)}async function XP(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await cP(n.localStore,e);Ly(n,r,null),My(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fo(n,s)}catch(s){await js(s)}}async function ZP(t,e,n){const r=fe(t);try{const s=await(function(o,c){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Se(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);Ly(r,e,n),My(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fo(r,s)}catch(s){await js(s)}}function My(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function Ly(t,e,n){const r=fe(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function nu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||Fy(t,r)}))}function Fy(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Yu(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),ch(t))}function Vp(t,e,n){for(const r of n)r instanceof Ny?(t.Au.addReference(r.key,e),eC(t,r)):r instanceof Dy?(Y(ah,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Fy(t,r.key)):ce(19791,{yu:r})}function eC(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(Y(ah,"New document in limbo: "+n),t.Iu.add(r),ch(t))}function ch(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new ne(De.fromString(e)),r=t.mu.next();t.Eu.set(r,new $P(n)),t.du=t.du.insert(n,r),by(t.remoteStore,new ur(mn(lc(n.path)),r,"TargetPurposeLimboResolution",oc.ue))}}async function fo(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{o.push(r.gu(l,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Qu.Es(l.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(l,u){const f=fe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>F.forEach(u,(g=>F.forEach(g.Is,(y=>f.persistence.referenceDelegate.addReference(p,g.targetId,y))).next((()=>F.forEach(g.ds,(y=>f.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))))))}catch(p){if(!qs(p))throw p;Y(Ju,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const y=f.Fs.get(g),b=y.snapshotVersion,S=y.withLastLimboFreeSnapshotVersion(b);f.Fs=f.Fs.insert(g,S)}}})(r.localStore,i))}async function tC(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){Y(ah,"User change. New user:",e.toKey());const r=await Iy(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new J(L.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fo(n,r.Bs)}}function nC(t,e){const n=fe(t),r=n.Eu.get(e);if(r&&r.lu)return Ee().add(r.key);{let s=Ee();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const c=n.Pu.get(o);s=s.unionWith(c.view.tu)}return s}}function Uy(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YP.bind(null,e),e.hu.J_=UP.bind(null,e.eventManager),e.hu.pu=BP.bind(null,e.eventManager),e}function rC(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZP.bind(null,e),e}class Na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return aP(this.persistence,new sP,e.initialUser,this.serializer)}Du(e){return new Ty(Ku.Vi,this.serializer)}bu(e){return new pP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Na.provider={build:()=>new Na};class sC extends Na{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Se(this.persistence.referenceDelegate instanceof ka,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $S(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new Ty((r=>ka.Vi(r,n)),this.serializer)}}class ru{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tC.bind(null,this.syncEngine),await MP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new FP})()}createDatastore(e){const n=gc(e.databaseInfo.databaseId),r=(function(i){return new vP(i)})(e.databaseInfo);return(function(i,o,c,l){return new wP(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new RP(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Dp(this.syncEngine,n,0)),(function(){return Sp.C()?new Sp:new gP})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new HP(s,i,o,c,l,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=fe(s);Y(Kr,"RemoteStore shutting down."),i.Ia.add(5),await ho(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ru.provider={build:()=>new ru};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="FirestoreClient";class iC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=Lu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Y(Rr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Y(Rr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=nh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function il(t,e){t.asyncQueue.verifyOperationInProgress(),Y(Rr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Iy(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{vr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{Y("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{vr("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function xp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oC(t);Y(Rr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Cp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Cp(e.remoteStore,s))),t._onlineComponents=e}async function oC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(Rr,"Using user provided OfflineComponentProvider");try{await il(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;vr("Error using user provided cache. Falling back to memory cache: "+n),await il(t,new Na)}}else Y(Rr,"Using default OfflineComponentProvider"),await il(t,new sC(void 0));return t._offlineComponents}async function By(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(Rr,"Using user provided OnlineComponentProvider"),await xp(t,t._uninitializedComponentsProvider._online)):(Y(Rr,"Using default OnlineComponentProvider"),await xp(t,new ru))),t._onlineComponents}function aC(t){return By(t).then((e=>e.syncEngine))}async function Da(t){const e=await By(t),n=e.eventManager;return n.onListen=WP.bind(null,e.syncEngine),n.onUnlisten=KP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QP.bind(null,e.syncEngine),n}function cC(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new lh({next:g=>{f.Ou(),o.enqueueAndForget((()=>sh(i,p)));const y=g.docs.has(c);!y&&g.fromCache?u.reject(new J(L.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&l&&l.source==="server"?u.reject(new J(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new oh(lc(c.path),f,{includeMetadataChanges:!0,ka:!0});return rh(i,p)})(await Da(t),t.asyncQueue,e,n,r))),r.promise}function lC(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new lh({next:g=>{f.Ou(),o.enqueueAndForget((()=>sh(i,p))),g.fromCache&&l.source==="server"?u.reject(new J(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new oh(c,f,{includeMetadataChanges:!0,ka:!0});return rh(i,p)})(await Da(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="firestore.googleapis.com",Lp=!0;class Fp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qy,this.ssl=Lp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Lp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ey;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jS)throw new J(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Rb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new mb;switch(r.type){case"firstParty":return new Eb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Mp.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Mp.delete(n),r.terminate())})(this),Promise.resolve()}}function uC(t,e,n,r={}){var s;t=gn(t,yc);const i=Fs(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(xm(`https://${l}`),Mm("Firestore",!0)),o.host!==qy&&o.host!==l&&vr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!$r(u,c)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=dt.MOCK_USER;else{f=Pw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new J(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new dt(g)}t._authCredentials=new _b(new k_(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ns(this.firestore,e,this._query)}}class We{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}toJSON(){return{type:We._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ao(n,We._jsonSchema))return new We(e,r||null,new ne(De.fromString(n.referencePath)))}}We._jsonSchemaVersion="firestore/documentReference/1.0",We._jsonSchema={type:Je("string",We._jsonSchemaVersion),referencePath:Je("string")};class pr extends ns{constructor(e,n,r){super(e,n,lc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new ne(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function Q1(t,e,...n){if(t=yt(t),N_("collection","path",e),t instanceof yc){const r=De.fromString(e,...n);return Yd(r),new pr(t,null,r)}{if(!(t instanceof We||t instanceof pr))throw new J(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Yd(r),new pr(t.firestore,null,r)}}function Up(t,e,...n){if(t=yt(t),arguments.length===1&&(e=Lu.newId()),N_("doc","path",e),t instanceof yc){const r=De.fromString(e,...n);return Jd(r),new We(t,null,new ne(r))}{if(!(t instanceof We||t instanceof pr))throw new J(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Jd(r),new We(t.firestore,t instanceof pr?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="AsyncQueue";class jp{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ay(this,"async_queue_retry"),this.oc=()=>{const r=sl();r&&Y(Bp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=sl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=sl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Fn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!qs(e))throw e;Y(Bp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Wn("INTERNAL UNHANDLED ERROR: ",qp(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=th.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ce(47125,{hc:qp(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function qp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class xs extends yc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new jp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jp(e),this._firestoreClient=void 0,await e}}}function hC(t,e){const n=typeof t=="object"?t:Bm(),r=typeof t=="string"?t:Aa,s=bu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bw("firestore");i&&uC(s,...i)}return s}function vc(t){if(t._terminated)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fC(t),t._firestoreClient}function fC(t){var e,n,r;const s=t._freezeSettings(),i=(function(c,l,u,f){return new Mb(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,jy(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new iC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qt(ct.fromBase64String(e))}catch(n){throw new J(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qt(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ao(e,qt._jsonSchema))return qt.fromBase64String(e.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:Je("string",qt._jsonSchemaVersion),bytes:Je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yn._jsonSchemaVersion}}static fromJSON(e){if(ao(e,yn._jsonSchema))return new yn(e.latitude,e.longitude)}}yn._jsonSchemaVersion="firestore/geoPoint/1.0",yn._jsonSchema={type:Je("string",yn._jsonSchemaVersion),latitude:Je("number"),longitude:Je("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:vn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ao(e,vn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new vn(e.vectorValues);throw new J(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vn._jsonSchemaVersion="firestore/vectorValue/1.0",vn._jsonSchema={type:Je("string",vn._jsonSchemaVersion),vectorValues:Je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=/^__.*__$/;class pC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new es(e,this.data,this.fieldMask,n,this.fieldTransforms):new lo(e,this.data,n,this.fieldTransforms)}}function $y(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ec:t})}}class fh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new fh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Va(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if($y(this.Ec)&&dC.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class gC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gc(e)}Dc(e,n,r,s=!1){return new fh({Ec:e,methodName:n,bc:r,path:it.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hy(t){const e=t._freezeSettings(),n=gc(t._databaseId);return new gC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mC(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);zy("Data must be an object, but it was:",o,r);const c=Wy(r,o);let l,u;if(i.merge)l=new Yt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=yC(e,p,n);if(!o.contains(g))throw new J(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);EC(f,g)||f.push(g)}l=new Yt(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new pC(new jt(c),l,u)}class dh extends hh{_toFieldTransform(e){return new cS(e.path,new Ki)}isEqual(e){return e instanceof dh}}function _C(t,e,n,r=!1){return ph(n,t.Dc(r?4:3,e))}function ph(t,e){if(Gy(t=yt(t)))return zy("Unsupported field value:",e,t),Wy(t,e);if(t instanceof hh)return(function(r,s){if(!$y(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=ph(c,s.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:Ca(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ca(s.serializer,i)}}if(r instanceof yn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qt)return{bytesValue:dy(s.serializer,r._byteString)};if(r instanceof We){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof vn)return(function(o,c){return{mapValue:{fields:{[j_]:{stringValue:q_},[Ra]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.wc("VectorValues must only contain numeric values.");return $u(c.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${ic(r)}`)})(t,e)}function Wy(t,e){const n={};return x_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xr(t,((r,s)=>{const i=ph(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Gy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof yn||t instanceof qt||t instanceof We||t instanceof hh||t instanceof vn)}function zy(t,e,n){if(!Gy(n)||!D_(n)){const r=ic(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function yC(t,e,n){if((e=yt(e))instanceof uh)return e._internalPath;if(typeof e=="string")return Ky(t,e);throw Va("Field path arguments must be of type string or ",t,!1,void 0,n)}const vC=new RegExp("[~\\*/\\[\\]]");function Ky(t,e,n){if(e.search(vC)>=0)throw Va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uh(...e.split("."))._internalPath}catch{throw Va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Va(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(L.INVALID_ARGUMENT,c+t+l)}function EC(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TC extends Qy{data(){return super.data()}}function gh(t,e){return typeof e=="string"?Ky(t,e):e instanceof uh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mh{}class IC extends mh{}function J1(t,e,...n){let r=[];e instanceof mh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof _h)).length,c=i.filter((l=>l instanceof Ec)).length;if(o>1||o>0&&c>0)throw new J(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Ec extends IC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ec(e,n,r)}_apply(e){const n=this._parse(e);return Yy(e._query,n),new ns(e.firestore,e.converter,zl(e._query,n))}_parse(e){const n=Hy(e.firestore);return(function(i,o,c,l,u,f,p){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Wp(p,f);const b=[];for(const S of p)b.push(Hp(l,i,S));g={arrayValue:{values:b}}}else g=Hp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Wp(p,f),g=_C(c,o,p,f==="in"||f==="not-in");return Qe.create(u,f,g)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Y1(t,e,n){const r=e,s=gh("where",t);return Ec._create(s,r,n)}class _h extends mh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _h(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Yy(o,l),o=zl(o,l)})(e._query,n),new ns(e.firestore,e.converter,zl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Hp(t,e,n){if(typeof(n=yt(n))=="string"){if(n==="")throw new J(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!J_(e)&&n.indexOf("/")!==-1)throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!ne.isDocumentKey(r))throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ip(t,new ne(r))}if(n instanceof We)return ip(t,n._key);throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ic(n)}.`)}function Wp(t,e){if(!Array.isArray(t)||t.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Yy(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class wC{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Ra].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>He(o.doubleValue)));return new vn(i)}convertGeoPoint(e){return new yn(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wi(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Se(vy(r),9688,{name:e});const s=new Gi(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||Wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class mi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jr extends Qy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=jr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}jr._jsonSchemaVersion="firestore/documentSnapshot/1.0",jr._jsonSchema={type:Je("string",jr._jsonSchemaVersion),bundleSource:Je("string","DocumentSnapshot"),bundleName:Je("string"),bundle:Je("string")};class ta extends jr{data(e={}){return super.data(e)}}class qr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new mi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new ta(this._firestore,this._userDataWriter,r.key,r,new mi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new ta(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new ta(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:RC(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=qr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function RC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t){t=gn(t,We);const e=gn(t.firestore,xs);return cC(vc(e),t._key).then((n=>Xy(e,t,n)))}qr._jsonSchemaVersion="firestore/querySnapshot/1.0",qr._jsonSchema={type:Je("string",qr._jsonSchemaVersion),bundleSource:Je("string","QuerySnapshot"),bundleName:Je("string"),bundle:Je("string")};class yh extends wC{constructor(e){super(),this.firestore=e}convertBytes(e){return new qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,n)}}function X1(t){t=gn(t,ns);const e=gn(t.firestore,xs),n=vc(e),r=new yh(e);return Jy(t._query),lC(n,t._query).then((s=>new qr(e,r,t,s)))}function Gp(t,e,n){t=gn(t,We);const r=gn(t.firestore,xs),s=AC(t.converter,e,n);return SC(r,[mC(Hy(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Un.none())])}function Z1(t,...e){var n,r,s;t=yt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||$p(e[o])||(i=e[o++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if($p(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,u,f;if(t instanceof We)u=gn(t.firestore,xs),f=lc(t._key.path),l={next:p=>{e[o]&&e[o](Xy(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=gn(t,ns);u=gn(p.firestore,xs),f=p._query;const g=new yh(u);l={next:y=>{e[o]&&e[o](new qr(u,g,p,y))},error:e[o+1],complete:e[o+2]},Jy(t._query)}return(function(g,y,b,S){const O=new lh(S),j=new oh(y,O,b);return g.asyncQueue.enqueueAndForget((async()=>rh(await Da(g),j))),()=>{O.Ou(),g.asyncQueue.enqueueAndForget((async()=>sh(await Da(g),j)))}})(vc(u),f,c,l)}function SC(t,e){return(function(r,s){const i=new Fn;return r.asyncQueue.enqueueAndForget((async()=>JP(await aC(r),s,i))),i.promise})(vc(t),e)}function Xy(t,e,n){const r=n.docs.get(e._key),s=new yh(t);return new jr(t,s,e._key,r,new mi(n.hasPendingWrites,n.fromCache),e.converter)}function zp(){return new dh("serverTimestamp")}(function(e,n=!0){(function(s){Bs=s})(Jr),Hr(new yr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new xs(new yb(r.getProvider("auth-internal")),new Tb(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new J(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gi(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),fn(Wd,Gd,e),fn(Wd,Gd,"esm2017")})();var PC="firebase",CC="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(PC,CC,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="firebasestorage.googleapis.com",kC="storageBucket",OC=120*1e3,NC=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends wn{constructor(e,n,r=0){super(ol(e),`Firebase Storage: ${n} (${ol(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,An.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ol(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var In;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(In||(In={}));function ol(t){return"storage/"+t}function DC(){const t="An unknown error occurred, please check the error payload for server response.";return new An(In.UNKNOWN,t)}function VC(){return new An(In.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xC(){return new An(In.CANCELED,"User canceled the upload/download.")}function MC(t){return new An(In.INVALID_URL,"Invalid URL '"+t+"'.")}function LC(t){return new An(In.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Kp(t){return new An(In.INVALID_ARGUMENT,t)}function ev(){return new An(In.APP_DELETED,"The Firebase app was deleted.")}function FC(t){return new An(In.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xt.makeFromUrl(e,n)}catch{return new Xt(e,"")}if(r.path==="")return r;throw LC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(q){q.path_=decodeURIComponent(q.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),b={bucket:1,path:3},S=n===Zy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",j=new RegExp(`^https?://${S}/${s}/${O}`,"i"),B=[{regex:c,indices:l,postModify:i},{regex:y,indices:b,postModify:u},{regex:j,indices:{bucket:1,path:2},postModify:u}];for(let q=0;q<B.length;q++){const Z=B[q],le=Z.regex.exec(e);if(le){const I=le[Z.indices.bucket];let _=le[Z.indices.path];_||(_=""),r=new Xt(I,_),Z.postModify(r);break}}if(r==null)throw MC(e);return r}}class UC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function f(...O){u||(u=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(y,l())},O)}function g(){i&&clearTimeout(i)}function y(O,...j){if(u){g();return}if(O){g(),f.call(null,O,...j);return}if(l()||o){g(),f.call(null,O,...j);return}r<64&&(r*=2);let B;c===1?(c=2,B=0):B=(r+Math.random())*1e3,p(B)}let b=!1;function S(O){b||(b=!0,g(),!u&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,S(!0)},n),S}function jC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){return t!==void 0}function Qp(t,e,n,r){if(r<e)throw Kp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Kp(`Invalid value for '${t}'. Expected ${n} or less.`)}function $C(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var xa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xa||(xa={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n,r,s,i,o,c,l,u,f,p,g=!0,y=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,S)=>{this.resolve_=b,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Bo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===xa.NO_ERROR,l=i.getStatus();if(!c||HC(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===xa.ABORT;r(!1,new Bo(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Bo(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());qC(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=DC();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?ev():xC();o(l)}else{const l=VC();o(l)}};this.canceled_?n(!1,new Bo(!1,null,!0)):this.backoffId_=BC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Bo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function GC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function zC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function KC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function QC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function JC(t,e,n,r,s,i,o=!0,c=!1){const l=$C(t.urlParams),u=t.url+l,f=Object.assign({},t.headers);return KC(f,e),GC(f,n),zC(f,i),QC(f,r),new WC(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function XC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this._service=e,n instanceof Xt?this._location=n:this._location=Xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ma(e,n)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return XC(this._location.path)}get storage(){return this._service}get parent(){const e=YC(this._location.path);if(e===null)return null;const n=new Xt(this._location.bucket,e);return new Ma(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw FC(e)}}function Jp(t,e){const n=e==null?void 0:e[kC];return n==null?null:Xt.makeFromBucketSpec(n,t)}class ZC{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Zy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=OC,this._maxUploadRetryTime=NC,this._requests=new Set,s!=null?this._bucket=Xt.makeFromBucketSpec(s,this._host):this._bucket=Jp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=Jp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ma(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new UC(ev());{const o=JC(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Yp="@firebase/storage",Xp="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="storage";function t1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ZC(n,r,s,e,Jr)}function n1(){Hr(new yr(e1,t1,"PUBLIC").setMultipleInstances(!0)),fn(Yp,Xp,""),fn(Yp,Xp,"esm2017")}n1();const ir="configure-no-env",su={apiKey:ir,authDomain:ir,projectId:ir,storageBucket:ir,messagingSenderId:ir,appId:ir};let al=null,cl=null,ll=null;function tv(){return al||(al=Um(su)),al}function jo(){return cl||(cl=pb(tv())),cl}function Zp(){return ll||(ll=hC(tv())),ll}function ai(){return su.apiKey!==ir&&su.projectId!==ir}const ul="cris_local_uid",hl="cris_local_email",fl="cris_local_display",vh=cI("auth",()=>{const t=ms(null),e=ms(!1),n=ms(""),r=ms(null),s=kt(()=>!!t.value||!!r.value&&!ai());function i(){const g=localStorage.getItem(ul),y=localStorage.getItem(hl),b=localStorage.getItem(fl);g&&y&&(r.value=g,n.value=b||y.split("@")[0]||"Agente")}function o(){if(!ai())return i(),e.value=!0,Promise.resolve();const g=jo();return new Promise(y=>{let b=!1;n0(g,S=>{var O;t.value=S,r.value=null,n.value=(S==null?void 0:S.displayName)||((O=S==null?void 0:S.email)==null?void 0:O.split("@")[0])||"",e.value=!0,b||(b=!0,y())})})}function c(g,y,b){localStorage.setItem(ul,g),localStorage.setItem(hl,y),localStorage.setItem(fl,b),r.value=g,n.value=b}async function l(g,y){var B;if(!ai()){const q=`local-${g.replace(/[^a-z0-9]/gi,"").slice(0,24)||"user"}`;return c(q,g,g.split("@")[0]||"Agente"),{uid:q,email:g}}const b=jo(),S=await ZR(b,g,y),O=Zp(),j=Up(O,"users",S.user.uid);return(await bC(j)).exists()||await Gp(j,{uid:S.user.uid,email:S.user.email,displayName:S.user.displayName||((B=S.user.email)==null?void 0:B.split("@")[0])||"Agente",createdAt:zp(),settings:{defaultSheet:""}}),S.user}async function u(g,y,b){if(!ai()){const D=`local-${g.replace(/[^a-z0-9]/gi,"").slice(0,24)||"user"}`;return c(D,g,b),{uid:D,email:g}}const S=jo(),O=await XR(S,g,y),j=Zp();return await Gp(Up(j,"users",O.user.uid),{uid:O.user.uid,email:O.user.email,displayName:b,createdAt:zp(),settings:{defaultSheet:""}}),O.user}async function f(){if(!ai()){localStorage.removeItem(ul),localStorage.removeItem(hl),localStorage.removeItem(fl),r.value=null,t.value=null,n.value="";return}await r0(jo()),t.value=null}function p(){var g;return((g=t.value)==null?void 0:g.uid)??r.value}return{user:t,ready:e,displayName:n,isAuthenticated:s,init:o,login:l,register:u,logout:f,currentUid:p}}),r1={class:"sidebar"},s1={class:"nav"},i1={class:"ico","aria-hidden":"true"},o1={key:0,viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},a1={key:1,viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},c1={key:2,viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},l1={key:3,viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},u1={key:4,viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},h1={key:5,viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},f1={key:6,viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},d1={key:7,viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},p1={key:8,viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},g1=Ls({__name:"Sidebar",setup(t){const e=pw(),n=vh(),r=kt(()=>{const i=[{to:"/",label:"Painel",icon:"home",auth:!1},{to:"/fichas-publicas",label:"Fichas públicas",icon:"globe",auth:!1},{to:"/regras",label:"Regras",icon:"book",auth:!1}],o=[{to:"/agentes",label:"Agentes",icon:"users",auth:!0},{to:"/novo-agente",label:"Novo agente",icon:"plus",auth:!0},{to:"/missoes",label:"Missões",icon:"map",auth:!0},{to:"/tecnicas",label:"Técnicas",icon:"spark",auth:!0},{to:"/homebrew",label:"Homebrew",icon:"flask",auth:!0},{to:"/configuracoes",label:"Configurações",icon:"gear",auth:!0}];return[...i,...n.isAuthenticated?o:[]]});function s(i){return i==="/"?e.path==="/":e.path===i||e.path.startsWith(i+"/")}return(i,o)=>(Xe(),Pt("aside",r1,[o[10]||(o[10]=me("div",{class:"brand"},[me("span",{class:"brand-mark"},"CRIS"),me("span",{class:"brand-sub"},"Feiticeiros & Maldições")],-1)),me("nav",s1,[(Xe(!0),Pt(Qt,null,jE(r.value,c=>(Xe(),Fi(At(Ol),{key:c.to,to:c.to,class:Di(["nav-link",{active:s(c.to)}])},{default:aa(()=>[me("span",i1,[c.icon==="home"?(Xe(),Pt("svg",o1,[...o[0]||(o[0]=[me("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},null,-1),me("polyline",{points:"9 22 9 12 15 12 15 22"},null,-1)])])):c.icon==="globe"?(Xe(),Pt("svg",a1,[...o[1]||(o[1]=[me("circle",{cx:"12",cy:"12",r:"10"},null,-1),me("line",{x1:"2",y1:"12",x2:"22",y2:"12"},null,-1),me("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},null,-1)])])):c.icon==="users"?(Xe(),Pt("svg",c1,[...o[2]||(o[2]=[me("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},null,-1),me("circle",{cx:"9",cy:"7",r:"4"},null,-1),me("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"},null,-1),me("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"},null,-1)])])):c.icon==="plus"?(Xe(),Pt("svg",l1,[...o[3]||(o[3]=[me("line",{x1:"12",y1:"5",x2:"12",y2:"19"},null,-1),me("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1)])])):c.icon==="map"?(Xe(),Pt("svg",u1,[...o[4]||(o[4]=[me("polygon",{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},null,-1),me("line",{x1:"8",y1:"2",x2:"8",y2:"18"},null,-1),me("line",{x1:"16",y1:"6",x2:"16",y2:"22"},null,-1)])])):c.icon==="spark"?(Xe(),Pt("svg",h1,[...o[5]||(o[5]=[me("path",{d:"M12 2L9 9 2 12l7 3 3 7 3-7 7-3-7-3-3-7z"},null,-1)])])):c.icon==="flask"?(Xe(),Pt("svg",f1,[...o[6]||(o[6]=[me("path",{d:"M9 3h6M10 9v8a4 4 0 0 0 8 0V9M6 21h12"},null,-1)])])):c.icon==="gear"?(Xe(),Pt("svg",d1,[...o[7]||(o[7]=[me("circle",{cx:"12",cy:"12",r:"3"},null,-1),me("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"},null,-1)])])):c.icon==="book"?(Xe(),Pt("svg",p1,[...o[8]||(o[8]=[me("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"},null,-1),me("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"},null,-1)])])):Of("",!0)]),fa(" "+na(c.label),1)]),_:2},1032,["to","class"]))),128)),At(n).isAuthenticated?Of("",!0):(Xe(),Fi(At(Ol),{key:0,to:"/login",class:Di(["nav-link login-link",{active:At(e).path==="/login"}])},{default:aa(()=>[...o[9]||(o[9]=[me("span",{class:"ico","aria-hidden":"true"},[me("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-width":"2"},[me("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),me("polyline",{points:"10 17 15 12 10 7"}),me("line",{x1:"15",y1:"12",x2:"3",y2:"12"})])],-1),fa(" Entrar ",-1)])]),_:1},8,["class"]))])]))}}),nv=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},m1=nv(g1,[["__scopeId","data-v-8175398b"]]),_1={class:"topbar"},y1={class:"user"},v1={class:"avatar","aria-hidden":"true"},E1={class:"name"},T1=Ls({__name:"TopBar",setup(t){const e=vh(),n=dw();async function r(){await e.logout(),n.push("/login")}return(s,i)=>{const o=Bg("RouterLink");return Xe(),Pt("header",_1,[i[1]||(i[1]=me("div",{class:"spacer"},null,-1)),At(e).isAuthenticated?(Xe(),Pt(Qt,{key:0},[me("div",y1,[me("div",v1,na((At(e).displayName||"?").slice(0,1).toUpperCase()),1),me("span",E1,na(At(e).displayName||"Agente"),1)]),me("button",{type:"button",class:"btn btn-ghost btn-sm",onClick:r},"Sair")],64)):(Xe(),Fi(o,{key:1,to:"/login",class:"btn btn-primary btn-sm"},{default:aa(()=>[...i[0]||(i[0]=[fa("Entrar",-1)])]),_:1}))])}}}),I1=nv(T1,[["__scopeId","data-v-71af42da"]]),w1={class:"layout-main"},A1={class:"layout-content"},R1={class:"layout-body"},b1=Ls({__name:"MainLayout",setup(t){return(e,n)=>{const r=Bg("RouterView");return Xe(),Pt("div",w1,[ot(m1),me("div",A1,[ot(I1),me("main",R1,[ot(r)])])])}}}),S1=()=>Gt(()=>import("./Dashboard-D1d7ozEA.js"),[]),P1=()=>Gt(()=>import("./Login-DVk1Q1f-.js"),__vite__mapDeps([0,1])),C1=()=>Gt(()=>import("./AgentsList-BYP--0uz.js"),__vite__mapDeps([2,3])),k1=()=>Gt(()=>import("./NewAgent-DGf5jWg8.js"),__vite__mapDeps([4,5,6,7,8])),O1=()=>Gt(()=>import("./ViewAgent-DG0BBbTR.js"),__vite__mapDeps([9,5,6,7,10])),N1=()=>Gt(()=>import("./MissionsList-B9vUhuDW.js"),[]),D1=()=>Gt(()=>import("./MissionView-DFXcxPjl.js"),__vite__mapDeps([11,6,7,12])),V1=()=>Gt(()=>import("./Techniques-BiiAhiDA.js"),[]),x1=()=>Gt(()=>import("./Homebrew-DQKRQ77M.js"),[]),M1=()=>Gt(()=>import("./PublicSheets-tRWWrm2l.js"),__vite__mapDeps([13,14])),L1=()=>Gt(()=>import("./Settings-DBSZPb6E.js"),[]),F1=()=>Gt(()=>import("./Rules-C6_1_X68.js"),__vite__mapDeps([15,16])),rv=fw({history:GI("/Jujutsu-Windows/"),routes:[{path:"/",component:b1,children:[{path:"",name:"dashboard",component:S1,meta:{public:!0}},{path:"agentes",name:"agents",component:C1,meta:{requiresAuth:!0}},{path:"novo-agente",name:"new-agent",component:k1,meta:{requiresAuth:!0}},{path:"agente/:id",name:"view-agent",component:O1,meta:{requiresAuth:!0}},{path:"missoes",name:"missions",component:N1,meta:{requiresAuth:!0}},{path:"missao/:id",name:"mission",component:D1,meta:{requiresAuth:!0}},{path:"tecnicas",name:"techniques",component:V1,meta:{requiresAuth:!0}},{path:"homebrew",name:"homebrew",component:x1,meta:{requiresAuth:!0}},{path:"fichas-publicas",name:"public-sheets",component:M1,meta:{public:!0}},{path:"configuracoes",name:"settings",component:L1,meta:{requiresAuth:!0}},{path:"regras",name:"rules",component:F1,meta:{public:!0}}]},{path:"/login",name:"login",component:P1,meta:{guestOnly:!0}}]});rv.beforeEach(async t=>{const e=vh();e.ready||await e.init();const n=t.matched.some(i=>i.meta.requiresAuth),r=t.matched.some(i=>i.meta.guestOnly),s=e.isAuthenticated;return n&&!s?{name:"login",query:{redirect:t.fullPath}}:r&&s?{name:"dashboard"}:!0});const Eh=ZT(gw);Eh.use(nI());Eh.use(rv);Eh.mount("#app");export{Di as A,kt as B,cI as C,Xi as D,Up as E,Qt as F,Gp as G,bC as H,zp as I,Ei as J,za as K,W1 as L,G1 as M,H1 as N,q1 as O,Ug as P,Z1 as Q,Ol as R,j1 as S,B1 as T,nv as _,me as a,fa as b,Pt as c,Ls as d,At as e,Fi as f,ot as g,Of as h,ai as i,z1 as j,U1 as k,pw as l,dw as m,kE as n,Xe as o,jE as p,Zp as q,ms as r,J1 as s,na as t,vh as u,$1 as v,aa as w,Y1 as x,Q1 as y,X1 as z};
