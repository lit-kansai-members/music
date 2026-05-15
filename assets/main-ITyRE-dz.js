var It=Object.defineProperty;var Rt=(r,e,t)=>e in r?It(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var g=(r,e,t)=>Rt(r,typeof e!="symbol"?e+"":e,t);import"./modulepreload-polyfill-B5Qt9EMX.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=globalThis,Ce=ue.ShadowRoot&&(ue.ShadyCSS===void 0||ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Le=Symbol(),Ge=new WeakMap;let gt=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ce&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=Ge.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ge.set(t,e))}return e}toString(){return this.cssText}};const zt=r=>new gt(typeof r=="string"?r:r+"",void 0,Le),V=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((o,s,i)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[i+1],r[0]);return new gt(t,r,Le)},Ot=(r,e)=>{if(Ce)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),s=ue.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,r.appendChild(o)}},Qe=Ce?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return zt(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:qt,defineProperty:Bt,getOwnPropertyDescriptor:Vt,getOwnPropertyNames:Ht,getOwnPropertySymbols:Jt,getPrototypeOf:Dt}=Object,C=globalThis,Fe=C.trustedTypes,Yt=Fe?Fe.emptyScript:"",Se=C.reactiveElementPolyfillSupport,ee=(r,e)=>r,me={toAttribute(r,e){switch(e){case Boolean:r=r?Yt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ie=(r,e)=>!qt(r,e),et={attribute:!0,type:String,converter:me,reflect:!1,useDefault:!1,hasChanged:Ie};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);let Y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=et){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&Bt(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){const{get:s,set:i}=Vt(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){const a=s==null?void 0:s.call(this);i==null||i.call(this,n),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??et}static _$Ei(){if(this.hasOwnProperty(ee("elementProperties")))return;const e=Dt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ee("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee("properties"))){const t=this.properties,o=[...Ht(t),...Jt(t)];for(const s of o)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)t.unshift(Qe(s))}else e!==void 0&&t.push(Qe(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ot(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostDisconnected)==null?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){var i;const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const n=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:me).toAttribute(t,o.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var i,n;const o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=o.getPropertyOptions(s),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:me;this._$Em=s;const l=c.fromAttribute(t,a.type);this[s]=l??((n=this._$Ej)==null?void 0:n.get(s))??l,this._$Em=null}}requestUpdate(e,t,o,s=!1,i){var n;if(e!==void 0){const a=this.constructor;if(s===!1&&(i=this[e]),o??(o=a.getPropertyOptions(e)),!((o.hasChanged??Ie)(i,t)||o.useDefault&&o.reflect&&i===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:s,wrapped:i},n){o&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),i!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s){const{wrapped:a}=n,c=this[i];a!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,n,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$EO)==null||o.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[ee("elementProperties")]=new Map,Y[ee("finalized")]=new Map,Se==null||Se({ReactiveElement:Y}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=globalThis,tt=r=>r,de=te.trustedTypes,rt=de?de.createPolicy("lit-html",{createHTML:r=>r}):void 0,wt="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,ft="?"+M,Wt=`<${ft}>`,z=document,oe=()=>z.createComment(""),se=r=>r===null||typeof r!="object"&&typeof r!="function",Re=Array.isArray,Kt=r=>Re(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",je=`[ 	
\f\r]`,G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,st=/>/g,L=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,nt=/"/g,kt=/^(?:script|style|textarea|title)$/i,Xt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=Xt(1),W=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),at=new WeakMap,I=z.createTreeWalker(z,129);function vt(r,e){if(!Re(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(e):e}const Zt=(r,e)=>{const t=r.length-1,o=[];let s,i=e===2?"<svg>":e===3?"<math>":"",n=G;for(let a=0;a<t;a++){const c=r[a];let l,h,p=-1,u=0;for(;u<c.length&&(n.lastIndex=u,h=n.exec(c),h!==null);)u=n.lastIndex,n===G?h[1]==="!--"?n=ot:h[1]!==void 0?n=st:h[2]!==void 0?(kt.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=L):h[3]!==void 0&&(n=L):n===L?h[0]===">"?(n=s??G,p=-1):h[1]===void 0?p=-2:(p=n.lastIndex-h[2].length,l=h[1],n=h[3]===void 0?L:h[3]==='"'?nt:it):n===nt||n===it?n=L:n===ot||n===st?n=G:(n=L,s=void 0);const w=n===L&&r[a+1].startsWith("/>")?" ":"";i+=n===G?c+Wt:p>=0?(o.push(l),c.slice(0,p)+wt+c.slice(p)+M+w):c+M+(p===-2?a:w)}return[vt(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class ie{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let i=0,n=0;const a=e.length-1,c=this.parts,[l,h]=Zt(e,t);if(this.el=ie.createElement(l,o),I.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=I.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(wt)){const u=h[n++],w=s.getAttribute(p).split(M),d=/([.?@])?(.*)/.exec(u);c.push({type:1,index:i,name:d[2],strings:w,ctor:d[1]==="."?Qt:d[1]==="?"?Ft:d[1]==="@"?er:fe}),s.removeAttribute(p)}else p.startsWith(M)&&(c.push({type:6,index:i}),s.removeAttribute(p));if(kt.test(s.tagName)){const p=s.textContent.split(M),u=p.length-1;if(u>0){s.textContent=de?de.emptyScript:"";for(let w=0;w<u;w++)s.append(p[w],oe()),I.nextNode(),c.push({type:2,index:++i});s.append(p[u],oe())}}}else if(s.nodeType===8)if(s.data===ft)c.push({type:2,index:i});else{let p=-1;for(;(p=s.data.indexOf(M,p+1))!==-1;)c.push({type:7,index:i}),p+=M.length-1}i++}}static createElement(e,t){const o=z.createElement("template");return o.innerHTML=e,o}}function K(r,e,t=r,o){var n,a;if(e===W)return e;let s=o!==void 0?(n=t._$Co)==null?void 0:n[o]:t._$Cl;const i=se(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),i===void 0?s=void 0:(s=new i(r),s._$AT(r,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=s:t._$Cl=s),s!==void 0&&(e=K(r,s._$AS(r,e.values),s,o)),e}class Gt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,s=((e==null?void 0:e.creationScope)??z).importNode(t,!0);I.currentNode=s;let i=I.nextNode(),n=0,a=0,c=o[0];for(;c!==void 0;){if(n===c.index){let l;c.type===2?l=new ne(i,i.nextSibling,this,e):c.type===1?l=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(l=new tr(i,this,e)),this._$AV.push(l),c=o[++a]}n!==(c==null?void 0:c.index)&&(i=I.nextNode(),n++)}return I.currentNode=z,s}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ne{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),se(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==W&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Kt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==N&&se(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ie.createElement(vt(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(t);else{const n=new Gt(s,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=at.get(e.strings);return t===void 0&&at.set(e.strings,t=new ie(e)),t}k(e){Re(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const i of e)s===t.length?t.push(o=new ne(this.O(oe()),this.O(oe()),this,this.options)):o=t[s],o._$AI(i),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,t);e!==this._$AB;){const s=tt(e).nextSibling;tt(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class fe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,i){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=N}_$AI(e,t=this,o,s){const i=this.strings;let n=!1;if(i===void 0)e=K(this,e,t,0),n=!se(e)||e!==this._$AH&&e!==W,n&&(this._$AH=e);else{const a=e;let c,l;for(e=i[0],c=0;c<i.length-1;c++)l=K(this,a[o+c],t,c),l===W&&(l=this._$AH[c]),n||(n=!se(l)||l!==this._$AH[c]),l===N?e=N:e!==N&&(e+=(l??"")+i[c+1]),this._$AH[c]=l}n&&!s&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Qt extends fe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}}class Ft extends fe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}}class er extends fe{constructor(e,t,o,s,i){super(e,t,o,s,i),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??N)===W)return;const o=this._$AH,s=e===N&&o!==N||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==N&&(o===N||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class tr{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const _e=te.litHtmlPolyfillSupport;_e==null||_e(ie,ne),(te.litHtmlVersions??(te.litHtmlVersions=[])).push("3.3.2");const rr=(r,e,t)=>{const o=(t==null?void 0:t.renderBefore)??e;let s=o._$litPart$;if(s===void 0){const i=(t==null?void 0:t.renderBefore)??null;o._$litPart$=s=new ne(e.insertBefore(oe(),i),i,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis;class _ extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return W}}var bt;_._$litElement$=!0,_.finalized=!0,(bt=R.litElementHydrateSupport)==null||bt.call(R,{LitElement:_});const $e=R.litElementPolyfillSupport;$e==null||$e({LitElement:_});(R.litElementVersions??(R.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const or={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:Ie},sr=(r=or,e,t)=>{const{kind:o,metadata:s}=t;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),o==="setter"&&((r=Object.create(r)).wrapped=!0),i.set(t.name,r),o==="accessor"){const{name:n}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,c,r,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,r,a),a}}}if(o==="setter"){const{name:n}=t;return function(a){const c=this[n];e.call(this,a),this.requestUpdate(n,c,r,!0,a)}}throw Error("Unsupported decorator location: "+o)};function k(r){return(e,t)=>typeof t=="object"?sr(r,e,t):((o,s,i)=>{const n=s.hasOwnProperty(i);return s.constructor.createProperty(i,o),n?Object.getOwnPropertyDescriptor(s,i):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f(r){return k({...r,state:!0,attribute:!1})}function ze(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var J=ze();function Nt(r){J=r}var re={exec:()=>null};function b(r,e=""){let t=typeof r=="string"?r:r.source;const o={replace:(s,i)=>{let n=typeof i=="string"?i:i.source;return n=n.replace(x.caret,"$1"),t=t.replace(s,n),o},getRegex:()=>new RegExp(t,e)};return o}var x={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:r=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}#`),htmlBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}<(?:[a-z].*>|!--)`,"i")},ir=/^(?:[ \t]*(?:\n|$))+/,nr=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ar=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ae=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,lr=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Oe=/(?:[*+-]|\d{1,9}[.)])/,Ut=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,xt=b(Ut).replace(/bull/g,Oe).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),cr=b(Ut).replace(/bull/g,Oe).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),qe=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,hr=/^[^\n]+/,Be=/(?!\s*\])(?:\\.|[^\[\]\\])+/,ur=b(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Be).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),pr=b(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Oe).getRegex(),ke="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ve=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,mr=b("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ve).replace("tag",ke).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),St=b(qe).replace("hr",ae).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ke).getRegex(),dr=b(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",St).getRegex(),He={blockquote:dr,code:nr,def:ur,fences:ar,heading:lr,hr:ae,html:mr,lheading:xt,list:pr,newline:ir,paragraph:St,table:re,text:hr},lt=b("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ae).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ke).getRegex(),yr={...He,lheading:cr,table:lt,paragraph:b(qe).replace("hr",ae).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",lt).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ke).getRegex()},br={...He,html:b(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ve).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:re,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:b(qe).replace("hr",ae).replace("heading",` *#{1,6} *[^
]`).replace("lheading",xt).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},gr=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,wr=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,jt=/^( {2,}|\\)\n(?!\s*$)/,fr=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ve=/[\p{P}\p{S}]/u,Je=/[\s\p{P}\p{S}]/u,_t=/[^\s\p{P}\p{S}]/u,kr=b(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Je).getRegex(),$t=/(?!~)[\p{P}\p{S}]/u,vr=/(?!~)[\s\p{P}\p{S}]/u,Nr=/(?:[^\s\p{P}\p{S}]|~)/u,Ur=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,At=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,xr=b(At,"u").replace(/punct/g,ve).getRegex(),Sr=b(At,"u").replace(/punct/g,$t).getRegex(),Tt="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",jr=b(Tt,"gu").replace(/notPunctSpace/g,_t).replace(/punctSpace/g,Je).replace(/punct/g,ve).getRegex(),_r=b(Tt,"gu").replace(/notPunctSpace/g,Nr).replace(/punctSpace/g,vr).replace(/punct/g,$t).getRegex(),$r=b("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,_t).replace(/punctSpace/g,Je).replace(/punct/g,ve).getRegex(),Ar=b(/\\(punct)/,"gu").replace(/punct/g,ve).getRegex(),Tr=b(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Er=b(Ve).replace("(?:-->|$)","-->").getRegex(),Pr=b("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Er).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ye=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Mr=b(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ye).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Et=b(/^!?\[(label)\]\[(ref)\]/).replace("label",ye).replace("ref",Be).getRegex(),Pt=b(/^!?\[(ref)\](?:\[\])?/).replace("ref",Be).getRegex(),Cr=b("reflink|nolink(?!\\()","g").replace("reflink",Et).replace("nolink",Pt).getRegex(),De={_backpedal:re,anyPunctuation:Ar,autolink:Tr,blockSkip:Ur,br:jt,code:wr,del:re,emStrongLDelim:xr,emStrongRDelimAst:jr,emStrongRDelimUnd:$r,escape:gr,link:Mr,nolink:Pt,punctuation:kr,reflink:Et,reflinkSearch:Cr,tag:Pr,text:fr,url:re},Lr={...De,link:b(/^!?\[(label)\]\((.*?)\)/).replace("label",ye).getRegex(),reflink:b(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ye).getRegex()},Te={...De,emStrongRDelimAst:_r,emStrongLDelim:Sr,url:b(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ir={...Te,br:b(jt).replace("{2,}","*").getRegex(),text:b(Te.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},he={normal:He,gfm:yr,pedantic:br},Q={normal:De,gfm:Te,breaks:Ir,pedantic:Lr},Rr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ct=r=>Rr[r];function A(r,e){if(e){if(x.escapeTest.test(r))return r.replace(x.escapeReplace,ct)}else if(x.escapeTestNoEncode.test(r))return r.replace(x.escapeReplaceNoEncode,ct);return r}function ht(r){try{r=encodeURI(r).replace(x.percentDecode,"%")}catch{return null}return r}function ut(r,e){var i;const t=r.replace(x.findPipe,(n,a,c)=>{let l=!1,h=a;for(;--h>=0&&c[h]==="\\";)l=!l;return l?"|":" |"}),o=t.split(x.splitPipe);let s=0;if(o[0].trim()||o.shift(),o.length>0&&!((i=o.at(-1))!=null&&i.trim())&&o.pop(),e)if(o.length>e)o.splice(e);else for(;o.length<e;)o.push("");for(;s<o.length;s++)o[s]=o[s].trim().replace(x.slashPipe,"|");return o}function F(r,e,t){const o=r.length;if(o===0)return"";let s=0;for(;s<o&&r.charAt(o-s-1)===e;)s++;return r.slice(0,o-s)}function zr(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let o=0;o<r.length;o++)if(r[o]==="\\")o++;else if(r[o]===e[0])t++;else if(r[o]===e[1]&&(t--,t<0))return o;return t>0?-2:-1}function pt(r,e,t,o,s){const i=e.href,n=e.title||null,a=r[1].replace(s.other.outputLinkReplace,"$1");o.state.inLink=!0;const c={type:r[0].charAt(0)==="!"?"image":"link",raw:t,href:i,title:n,text:a,tokens:o.inlineTokens(a)};return o.state.inLink=!1,c}function Or(r,e,t){const o=r.match(t.other.indentCodeCompensation);if(o===null)return e;const s=o[1];return e.split(`
`).map(i=>{const n=i.match(t.other.beginningSpace);if(n===null)return i;const[a]=n;return a.length>=s.length?i.slice(s.length):i}).join(`
`)}var be=class{constructor(r){g(this,"options");g(this,"rules");g(this,"lexer");this.options=r||J}space(r){const e=this.rules.block.newline.exec(r);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(r){const e=this.rules.block.code.exec(r);if(e){const t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:F(t,`
`)}}}fences(r){const e=this.rules.block.fences.exec(r);if(e){const t=e[0],o=Or(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:o}}}heading(r){const e=this.rules.block.heading.exec(r);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){const o=F(t,"#");(this.options.pedantic||!o||this.rules.other.endingSpaceChar.test(o))&&(t=o.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(r){const e=this.rules.block.hr.exec(r);if(e)return{type:"hr",raw:F(e[0],`
`)}}blockquote(r){const e=this.rules.block.blockquote.exec(r);if(e){let t=F(e[0],`
`).split(`
`),o="",s="";const i=[];for(;t.length>0;){let n=!1;const a=[];let c;for(c=0;c<t.length;c++)if(this.rules.other.blockquoteStart.test(t[c]))a.push(t[c]),n=!0;else if(!n)a.push(t[c]);else break;t=t.slice(c);const l=a.join(`
`),h=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");o=o?`${o}
${l}`:l,s=s?`${s}
${h}`:h;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,i,!0),this.lexer.state.top=p,t.length===0)break;const u=i.at(-1);if((u==null?void 0:u.type)==="code")break;if((u==null?void 0:u.type)==="blockquote"){const w=u,d=w.raw+`
`+t.join(`
`),S=this.blockquote(d);i[i.length-1]=S,o=o.substring(0,o.length-w.raw.length)+S.raw,s=s.substring(0,s.length-w.text.length)+S.text;break}else if((u==null?void 0:u.type)==="list"){const w=u,d=w.raw+`
`+t.join(`
`),S=this.list(d);i[i.length-1]=S,o=o.substring(0,o.length-u.raw.length)+S.raw,s=s.substring(0,s.length-w.raw.length)+S.raw,t=d.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:i,text:s}}}list(r){let e=this.rules.block.list.exec(r);if(e){let t=e[1].trim();const o=t.length>1,s={type:"list",raw:"",ordered:o,start:o?+t.slice(0,-1):"",loose:!1,items:[]};t=o?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=o?t:"[*+-]");const i=this.rules.other.listItemRegex(t);let n=!1;for(;r;){let c=!1,l="",h="";if(!(e=i.exec(r))||this.rules.block.hr.test(r))break;l=e[0],r=r.substring(l.length);let p=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,Ue=>" ".repeat(3*Ue.length)),u=r.split(`
`,1)[0],w=!p.trim(),d=0;if(this.options.pedantic?(d=2,h=p.trimStart()):w?d=e[1].length+1:(d=e[2].search(this.rules.other.nonSpaceChar),d=d>4?1:d,h=p.slice(d),d+=e[1].length),w&&this.rules.other.blankLine.test(u)&&(l+=u+`
`,r=r.substring(u.length+1),c=!0),!c){const Ue=this.rules.other.nextBulletRegex(d),Ke=this.rules.other.hrRegex(d),Xe=this.rules.other.fencesBeginRegex(d),Ze=this.rules.other.headingBeginRegex(d),Lt=this.rules.other.htmlBeginRegex(d);for(;r;){const xe=r.split(`
`,1)[0];let Z;if(u=xe,this.options.pedantic?(u=u.replace(this.rules.other.listReplaceNesting,"  "),Z=u):Z=u.replace(this.rules.other.tabCharGlobal,"    "),Xe.test(u)||Ze.test(u)||Lt.test(u)||Ue.test(u)||Ke.test(u))break;if(Z.search(this.rules.other.nonSpaceChar)>=d||!u.trim())h+=`
`+Z.slice(d);else{if(w||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Xe.test(p)||Ze.test(p)||Ke.test(p))break;h+=`
`+u}!w&&!u.trim()&&(w=!0),l+=xe+`
`,r=r.substring(xe.length+1),p=Z.slice(d)}}s.loose||(n?s.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(n=!0));let S=null,We;this.options.gfm&&(S=this.rules.other.listIsTask.exec(h),S&&(We=S[0]!=="[ ] ",h=h.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:l,task:!!S,checked:We,loose:!1,text:h,tokens:[]}),s.raw+=l}const a=s.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let c=0;c<s.items.length;c++)if(this.lexer.state.top=!1,s.items[c].tokens=this.lexer.blockTokens(s.items[c].text,[]),!s.loose){const l=s.items[c].tokens.filter(p=>p.type==="space"),h=l.length>0&&l.some(p=>this.rules.other.anyLine.test(p.raw));s.loose=h}if(s.loose)for(let c=0;c<s.items.length;c++)s.items[c].loose=!0;return s}}html(r){const e=this.rules.block.html.exec(r);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(r){const e=this.rules.block.def.exec(r);if(e){const t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),o=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:o,title:s}}}table(r){var n;const e=this.rules.block.table.exec(r);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const t=ut(e[1]),o=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(n=e[3])!=null&&n.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===o.length){for(const a of o)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<t.length;a++)i.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:i.align[a]});for(const a of s)i.rows.push(ut(a,i.header.length).map((c,l)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:i.align[l]})));return i}}lheading(r){const e=this.rules.block.lheading.exec(r);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(r){const e=this.rules.block.paragraph.exec(r);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(r){const e=this.rules.block.text.exec(r);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(r){const e=this.rules.inline.escape.exec(r);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(r){const e=this.rules.inline.tag.exec(r);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(r){const e=this.rules.inline.link.exec(r);if(e){const t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;const i=F(t.slice(0,-1),"\\");if((t.length-i.length)%2===0)return}else{const i=zr(e[2],"()");if(i===-2)return;if(i>-1){const a=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let o=e[2],s="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(o);i&&(o=i[1],s=i[3])}else s=e[3]?e[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?o=o.slice(1):o=o.slice(1,-1)),pt(e,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(r,e){let t;if((t=this.rules.inline.reflink.exec(r))||(t=this.rules.inline.nolink.exec(r))){const o=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[o.toLowerCase()];if(!s){const i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return pt(t,s,t[0],this.lexer,this.rules)}}emStrong(r,e,t=""){let o=this.rules.inline.emStrongLDelim.exec(r);if(!o||o[3]&&t.match(this.rules.other.unicodeAlphaNumeric))return;if(!(o[1]||o[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const i=[...o[0]].length-1;let n,a,c=i,l=0;const h=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*r.length+i);(o=h.exec(e))!=null;){if(n=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!n)continue;if(a=[...n].length,o[3]||o[4]){c+=a;continue}else if((o[5]||o[6])&&i%3&&!((i+a)%3)){l+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+l);const p=[...o[0]][0].length,u=r.slice(0,i+o.index+p+a);if(Math.min(i,a)%2){const d=u.slice(1,-1);return{type:"em",raw:u,text:d,tokens:this.lexer.inlineTokens(d)}}const w=u.slice(2,-2);return{type:"strong",raw:u,text:w,tokens:this.lexer.inlineTokens(w)}}}}codespan(r){const e=this.rules.inline.code.exec(r);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," ");const o=this.rules.other.nonSpaceChar.test(t),s=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return o&&s&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(r){const e=this.rules.inline.br.exec(r);if(e)return{type:"br",raw:e[0]}}del(r){const e=this.rules.inline.del.exec(r);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(r){const e=this.rules.inline.autolink.exec(r);if(e){let t,o;return e[2]==="@"?(t=e[1],o="mailto:"+t):(t=e[1],o=t),{type:"link",raw:e[0],text:t,href:o,tokens:[{type:"text",raw:t,text:t}]}}}url(r){var t;let e;if(e=this.rules.inline.url.exec(r)){let o,s;if(e[2]==="@")o=e[0],s="mailto:"+o;else{let i;do i=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(i!==e[0]);o=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:o,href:s,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(r){const e=this.rules.inline.text.exec(r);if(e){const t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},T=class Ee{constructor(e){g(this,"tokens");g(this,"options");g(this,"state");g(this,"tokenizer");g(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||J,this.options.tokenizer=this.options.tokenizer||new be,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:x,block:he.normal,inline:Q.normal};this.options.pedantic?(t.block=he.pedantic,t.inline=Q.pedantic):this.options.gfm&&(t.block=he.gfm,this.options.breaks?t.inline=Q.breaks:t.inline=Q.gfm),this.tokenizer.rules=t}static get rules(){return{block:he,inline:Q}}static lex(e,t){return new Ee(t).lex(e)}static lexInline(e,t){return new Ee(t).inlineTokens(e)}lex(e){e=e.replace(x.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const o=this.inlineQueue[t];this.inlineTokens(o.src,o.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],o=!1){var s,i,n;for(this.options.pedantic&&(e=e.replace(x.tabCharGlobal,"    ").replace(x.spaceLine,""));e;){let a;if((i=(s=this.options.extensions)==null?void 0:s.block)!=null&&i.some(l=>(a=l.call({lexer:this},e,t))?(e=e.substring(a.raw.length),t.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);const l=t.at(-1);a.raw.length===1&&l!==void 0?l.raw+=`
`:t.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);const l=t.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=`
`+a.raw,l.text+=`
`+a.text,this.inlineQueue.at(-1).src=l.text):t.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);const l=t.at(-1);(l==null?void 0:l.type)==="paragraph"||(l==null?void 0:l.type)==="text"?(l.raw+=`
`+a.raw,l.text+=`
`+a.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),t.push(a);continue}let c=e;if((n=this.options.extensions)!=null&&n.startBlock){let l=1/0;const h=e.slice(1);let p;this.options.extensions.startBlock.forEach(u=>{p=u.call({lexer:this},h),typeof p=="number"&&p>=0&&(l=Math.min(l,p))}),l<1/0&&l>=0&&(c=e.substring(0,l+1))}if(this.state.top&&(a=this.tokenizer.paragraph(c))){const l=t.at(-1);o&&(l==null?void 0:l.type)==="paragraph"?(l.raw+=`
`+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):t.push(a),o=c.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);const l=t.at(-1);(l==null?void 0:l.type)==="text"?(l.raw+=`
`+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):t.push(a);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var a,c,l;let o=e,s=null;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)h.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,s.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,n="";for(;e;){i||(n=""),i=!1;let h;if((c=(a=this.options.extensions)==null?void 0:a.inline)!=null&&c.some(u=>(h=u.call({lexer:this},e,t))?(e=e.substring(h.raw.length),t.push(h),!0):!1))continue;if(h=this.tokenizer.escape(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.tag(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.link(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(h.raw.length);const u=t.at(-1);h.type==="text"&&(u==null?void 0:u.type)==="text"?(u.raw+=h.raw,u.text+=h.text):t.push(h);continue}if(h=this.tokenizer.emStrong(e,o,n)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.codespan(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.br(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.del(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.autolink(e)){e=e.substring(h.raw.length),t.push(h);continue}if(!this.state.inLink&&(h=this.tokenizer.url(e))){e=e.substring(h.raw.length),t.push(h);continue}let p=e;if((l=this.options.extensions)!=null&&l.startInline){let u=1/0;const w=e.slice(1);let d;this.options.extensions.startInline.forEach(S=>{d=S.call({lexer:this},w),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(p=e.substring(0,u+1))}if(h=this.tokenizer.inlineText(p)){e=e.substring(h.raw.length),h.raw.slice(-1)!=="_"&&(n=h.raw.slice(-1)),i=!0;const u=t.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=h.raw,u.text+=h.text):t.push(h);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}},ge=class{constructor(r){g(this,"options");g(this,"parser");this.options=r||J}space(r){return""}code({text:r,lang:e,escaped:t}){var i;const o=(i=(e||"").match(x.notSpaceStart))==null?void 0:i[0],s=r.replace(x.endingNewline,"")+`
`;return o?'<pre><code class="language-'+A(o)+'">'+(t?s:A(s,!0))+`</code></pre>
`:"<pre><code>"+(t?s:A(s,!0))+`</code></pre>
`}blockquote({tokens:r}){return`<blockquote>
${this.parser.parse(r)}</blockquote>
`}html({text:r}){return r}heading({tokens:r,depth:e}){return`<h${e}>${this.parser.parseInline(r)}</h${e}>
`}hr(r){return`<hr>
`}list(r){const e=r.ordered,t=r.start;let o="";for(let n=0;n<r.items.length;n++){const a=r.items[n];o+=this.listitem(a)}const s=e?"ol":"ul",i=e&&t!==1?' start="'+t+'"':"";return"<"+s+i+`>
`+o+"</"+s+`>
`}listitem(r){var t;let e="";if(r.task){const o=this.checkbox({checked:!!r.checked});r.loose?((t=r.tokens[0])==null?void 0:t.type)==="paragraph"?(r.tokens[0].text=o+" "+r.tokens[0].text,r.tokens[0].tokens&&r.tokens[0].tokens.length>0&&r.tokens[0].tokens[0].type==="text"&&(r.tokens[0].tokens[0].text=o+" "+A(r.tokens[0].tokens[0].text),r.tokens[0].tokens[0].escaped=!0)):r.tokens.unshift({type:"text",raw:o+" ",text:o+" ",escaped:!0}):e+=o+" "}return e+=this.parser.parse(r.tokens,!!r.loose),`<li>${e}</li>
`}checkbox({checked:r}){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:r}){return`<p>${this.parser.parseInline(r)}</p>
`}table(r){let e="",t="";for(let s=0;s<r.header.length;s++)t+=this.tablecell(r.header[s]);e+=this.tablerow({text:t});let o="";for(let s=0;s<r.rows.length;s++){const i=r.rows[s];t="";for(let n=0;n<i.length;n++)t+=this.tablecell(i[n]);o+=this.tablerow({text:t})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+o+`</table>
`}tablerow({text:r}){return`<tr>
${r}</tr>
`}tablecell(r){const e=this.parser.parseInline(r.tokens),t=r.header?"th":"td";return(r.align?`<${t} align="${r.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:r}){return`<strong>${this.parser.parseInline(r)}</strong>`}em({tokens:r}){return`<em>${this.parser.parseInline(r)}</em>`}codespan({text:r}){return`<code>${A(r,!0)}</code>`}br(r){return"<br>"}del({tokens:r}){return`<del>${this.parser.parseInline(r)}</del>`}link({href:r,title:e,tokens:t}){const o=this.parser.parseInline(t),s=ht(r);if(s===null)return o;r=s;let i='<a href="'+r+'"';return e&&(i+=' title="'+A(e)+'"'),i+=">"+o+"</a>",i}image({href:r,title:e,text:t,tokens:o}){o&&(t=this.parser.parseInline(o,this.parser.textRenderer));const s=ht(r);if(s===null)return A(t);r=s;let i=`<img src="${r}" alt="${t}"`;return e&&(i+=` title="${A(e)}"`),i+=">",i}text(r){return"tokens"in r&&r.tokens?this.parser.parseInline(r.tokens):"escaped"in r&&r.escaped?r.text:A(r.text)}},Ye=class{strong({text:r}){return r}em({text:r}){return r}codespan({text:r}){return r}del({text:r}){return r}html({text:r}){return r}text({text:r}){return r}link({text:r}){return""+r}image({text:r}){return""+r}br(){return""}},E=class Pe{constructor(e){g(this,"options");g(this,"renderer");g(this,"textRenderer");this.options=e||J,this.options.renderer=this.options.renderer||new ge,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ye}static parse(e,t){return new Pe(t).parse(e)}static parseInline(e,t){return new Pe(t).parseInline(e)}parse(e,t=!0){var s,i;let o="";for(let n=0;n<e.length;n++){const a=e[n];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[a.type]){const l=a,h=this.options.extensions.renderers[l.type].call({parser:this},l);if(h!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){o+=h||"";continue}}const c=a;switch(c.type){case"space":{o+=this.renderer.space(c);continue}case"hr":{o+=this.renderer.hr(c);continue}case"heading":{o+=this.renderer.heading(c);continue}case"code":{o+=this.renderer.code(c);continue}case"table":{o+=this.renderer.table(c);continue}case"blockquote":{o+=this.renderer.blockquote(c);continue}case"list":{o+=this.renderer.list(c);continue}case"html":{o+=this.renderer.html(c);continue}case"paragraph":{o+=this.renderer.paragraph(c);continue}case"text":{let l=c,h=this.renderer.text(l);for(;n+1<e.length&&e[n+1].type==="text";)l=e[++n],h+=`
`+this.renderer.text(l);t?o+=this.renderer.paragraph({type:"paragraph",raw:h,text:h,tokens:[{type:"text",raw:h,text:h,escaped:!0}]}):o+=h;continue}default:{const l='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return o}parseInline(e,t=this.renderer){var s,i;let o="";for(let n=0;n<e.length;n++){const a=e[n];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[a.type]){const l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){o+=l||"";continue}}const c=a;switch(c.type){case"escape":{o+=t.text(c);break}case"html":{o+=t.html(c);break}case"link":{o+=t.link(c);break}case"image":{o+=t.image(c);break}case"strong":{o+=t.strong(c);break}case"em":{o+=t.em(c);break}case"codespan":{o+=t.codespan(c);break}case"br":{o+=t.br(c);break}case"del":{o+=t.del(c);break}case"text":{o+=t.text(c);break}default:{const l='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return o}},Ae,pe=(Ae=class{constructor(r){g(this,"options");g(this,"block");this.options=r||J}preprocess(r){return r}postprocess(r){return r}processAllTokens(r){return r}provideLexer(){return this.block?T.lex:T.lexInline}provideParser(){return this.block?E.parse:E.parseInline}},g(Ae,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Ae),qr=class{constructor(...r){g(this,"defaults",ze());g(this,"options",this.setOptions);g(this,"parse",this.parseMarkdown(!0));g(this,"parseInline",this.parseMarkdown(!1));g(this,"Parser",E);g(this,"Renderer",ge);g(this,"TextRenderer",Ye);g(this,"Lexer",T);g(this,"Tokenizer",be);g(this,"Hooks",pe);this.use(...r)}walkTokens(r,e){var o,s;let t=[];for(const i of r)switch(t=t.concat(e.call(this,i)),i.type){case"table":{const n=i;for(const a of n.header)t=t.concat(this.walkTokens(a.tokens,e));for(const a of n.rows)for(const c of a)t=t.concat(this.walkTokens(c.tokens,e));break}case"list":{const n=i;t=t.concat(this.walkTokens(n.items,e));break}default:{const n=i;(s=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&s[n.type]?this.defaults.extensions.childTokens[n.type].forEach(a=>{const c=n[a].flat(1/0);t=t.concat(this.walkTokens(c,e))}):n.tokens&&(t=t.concat(this.walkTokens(n.tokens,e)))}}return t}use(...r){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return r.forEach(t=>{const o={...t};if(o.async=this.defaults.async||o.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const i=e.renderers[s.name];i?e.renderers[s.name]=function(...n){let a=s.renderer.apply(this,n);return a===!1&&(a=i.apply(this,n)),a}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=e[s.level];i?i.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),o.extensions=e),t.renderer){const s=this.defaults.renderer||new ge(this.defaults);for(const i in t.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const n=i,a=t.renderer[n],c=s[n];s[n]=(...l)=>{let h=a.apply(s,l);return h===!1&&(h=c.apply(s,l)),h||""}}o.renderer=s}if(t.tokenizer){const s=this.defaults.tokenizer||new be(this.defaults);for(const i in t.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const n=i,a=t.tokenizer[n],c=s[n];s[n]=(...l)=>{let h=a.apply(s,l);return h===!1&&(h=c.apply(s,l)),h}}o.tokenizer=s}if(t.hooks){const s=this.defaults.hooks||new pe;for(const i in t.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const n=i,a=t.hooks[n],c=s[n];pe.passThroughHooks.has(i)?s[n]=l=>{if(this.defaults.async)return Promise.resolve(a.call(s,l)).then(p=>c.call(s,p));const h=a.call(s,l);return c.call(s,h)}:s[n]=(...l)=>{let h=a.apply(s,l);return h===!1&&(h=c.apply(s,l)),h}}o.hooks=s}if(t.walkTokens){const s=this.defaults.walkTokens,i=t.walkTokens;o.walkTokens=function(n){let a=[];return a.push(i.call(this,n)),s&&(a=a.concat(s.call(this,n))),a}}this.defaults={...this.defaults,...o}}),this}setOptions(r){return this.defaults={...this.defaults,...r},this}lexer(r,e){return T.lex(r,e??this.defaults)}parser(r,e){return E.parse(r,e??this.defaults)}parseMarkdown(r){return(t,o)=>{const s={...o},i={...this.defaults,...s},n=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return n(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return n(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return n(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=r);const a=i.hooks?i.hooks.provideLexer():r?T.lex:T.lexInline,c=i.hooks?i.hooks.provideParser():r?E.parse:E.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(t):t).then(l=>a(l,i)).then(l=>i.hooks?i.hooks.processAllTokens(l):l).then(l=>i.walkTokens?Promise.all(this.walkTokens(l,i.walkTokens)).then(()=>l):l).then(l=>c(l,i)).then(l=>i.hooks?i.hooks.postprocess(l):l).catch(n);try{i.hooks&&(t=i.hooks.preprocess(t));let l=a(t,i);i.hooks&&(l=i.hooks.processAllTokens(l)),i.walkTokens&&this.walkTokens(l,i.walkTokens);let h=c(l,i);return i.hooks&&(h=i.hooks.postprocess(h)),h}catch(l){return n(l)}}}onError(r,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,r){const o="<p>An error occurred:</p><pre>"+A(t.message+"",!0)+"</pre>";return e?Promise.resolve(o):o}if(e)return Promise.reject(t);throw t}}},O=new qr;function y(r,e){return O.parse(r,e)}y.options=y.setOptions=function(r){return O.setOptions(r),y.defaults=O.defaults,Nt(y.defaults),y};y.getDefaults=ze;y.defaults=J;y.use=function(...r){return O.use(...r),y.defaults=O.defaults,Nt(y.defaults),y};y.walkTokens=function(r,e){return O.walkTokens(r,e)};y.parseInline=O.parseInline;y.Parser=E;y.parser=E.parse;y.Renderer=ge;y.TextRenderer=Ye;y.Lexer=T;y.lexer=T.lex;y.Tokenizer=be;y.Hooks=pe;y.parse=y;y.options;y.setOptions;y.use;y.walkTokens;y.parseInline;E.parse;T.lex;const Br="./schema.json",Vr={2012:[{name:"Xmas Camp 2012",isBefore2024:!0,songs:[{title:"ハピネス",author:"AI",description:"コカ・コーラ 冬期CMソング",spotify:"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI",damNumber:"6484-08",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08",joyNumber:"29625",joyUrl:"https://www.joysound.com/web/search/song/186425",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a001bf4/l027392.html",youtubeUrl:"//youtu.be/uKgmu8g-kXE"}]},{name:"Summer Camp 2012",isBefore2024:!0,songs:[{title:"君の知らない物語",author:"supercell",description:"TVアニメ「化物語」エンディングテーマ",spotify:"https://open.spotify.com/track/434YBNY61Y9sqBSp7OINBa",damNumber:"3318-21",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3318-21",joyNumber:"136606",joyUrl:"https://www.joysound.com/web/search/song/133769",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a054f0a/l024c87.html",youtubeUrl:"//youtu.be/rZZzlY8vUf8"},{title:"Overture of the Summer Wars",author:"松本晃彦",description:"アニメ映画「サマーウォーズ」挿入歌",spotify:"https://open.spotify.com/track/6F9xsyceOyTl3qHSxfXYXP",damNumber:"",damUrl:"",joyNumber:"",joyUrl:"",lyricsSiteName:"",lyricsUrl:"",youtubeUrl:"//youtu.be/RbpDRk_OAPU"}]}],2013:[{name:"Xmas Camp 2013",isBefore2024:!0,songs:[{title:"恋するフォーチュンクッキー",author:"AKB48",description:"東京地下鉄日比谷線 秋葉原駅 (H16) 発車サイン音",spotify:"https://open.spotify.com/track/3Tw2WaAaeRj0YKtTUogJVz",damNumber:"6572-52",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6572-52",joyNumber:"119131",joyUrl:"https://www.joysound.com/web/search/song/99643",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04cb7c/l02e06a.html",youtubeUrl:"//youtu.be/dFf4AgBNR1E"},{title:"ハピネス",author:"AI",description:"コカ・コーラ 冬期CMソング",spotify:"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI",damNumber:"6484-08",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08",joyNumber:"29625",joyUrl:"https://www.joysound.com/web/search/song/186425",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a001bf4/l027392.html",youtubeUrl:"//youtu.be/uKgmu8g-kXE"}]},{name:"Summer Camp 2013",theme:"きっと忘れられない夏になる。",isBefore2024:!0,songs:[{title:"RPG",author:"SEKAI NO OWARI",description:"映画「クレヨンしんちゃん バカうまっ!B級グルメサバイバル!!」主題歌",spotify:"https://open.spotify.com/track/7facNrW6VRW8s3ICZ8G1uW",damNumber:"5847-34",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5847-34",joyNumber:"724236",joyUrl:"https://www.joysound.com/web/search/song/251945",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a055790/l02cbdb.html",youtubeUrl:"//youtu.be/Mi9uNu35Gmk"}]},{name:"Spring Camp 2013",isBefore2024:!0,songs:[{title:"Boom!",author:"Maia Hirasawa",description:"「JR九州/祝！九州キャンペーン」CMソング",spotify:"https://open.spotify.com/track/6kQipOaCBqGWwRMKBCJVW0",damNumber:"3819-51",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3819-51",joyNumber:"94720",joyUrl:"https://www.joysound.com/web/search/song/167564",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a054d2c/l025022.html",youtubeUrl:"//youtu.be/tmRoVUcJpOc"},{title:"ODDS&ENDS",author:"ryo(supercell) feat. 初音ミク",description:"ゲーム「初音ミク -Project Diva- f」テーマソング",spotify:"https://open.spotify.com/track/4Q30IhZ7CO9HEOk4PzVHOg",damNumber:"3612-33",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3612-33",joyNumber:"730048",joyUrl:"https://www.joysound.com/web/search/song/233518",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/134511/",youtubeUrl:"//youtu.be/HUzLUGKwQJc"},{title:"さよならメモリーズ",author:"supercell",description:"",spotify:"https://open.spotify.com/track/30eaJSKH0UiTyH6d9JRHS6",damNumber:"5667-78",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5667-78",joyNumber:"139943",joyUrl:"https://www.joysound.com/web/search/song/147099",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a051979/l01e2e0.html",youtubeUrl:"//youtu.be/fhkYsNfbIPE"}]}],2014:[{name:"Xmas Camp 2014",background:"../../res/img/backgrounds/camp_2014_xmas.webp",theme:"一年に一度だけ、魔法のような4日間",songs:[{title:"Dragon Night",author:"SEKAI NO OWARI",description:"映画 TOKYO FANTASY SEKAI NO OWARI ED",spotify:"https://open.spotify.com/track/4XdzCpY4Ekv5SezuuFpBDG",damNumber:"5847-43",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5847-43",joyNumber:"119777",joyUrl:"https://www.joysound.com/web/search/song/411426",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a055790/l033358.html",youtubeUrl:"//youtu.be/gsVGf1T2Hfs"},{title:"I Won't Let You Down",author:"OK Go",description:"",spotify:"https://open.spotify.com/track/6tDR5V2dFKzXzOkjxY7dgR",damNumber:"3931-37",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3931-37",joyNumber:"671324",joyUrl:"https://www.joysound.com/web/search/song/417497",lyricsSiteName:"AZLyrics",lyricsUrl:"https://www.azlyrics.com/lyrics/okgo/iwontletyoudown.html",youtubeUrl:"//youtu.be/u1ZB_rGFyeU"},{title:"ハピネス",author:"AI",description:"コカ・コーラ 冬期CMソング",spotify:"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI",damNumber:"6484-08",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08",joyNumber:"29625",joyUrl:"https://www.joysound.com/web/search/song/186425",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a001bf4/l027392.html",youtubeUrl:"//youtu.be/uKgmu8g-kXE"}]},{name:"Summer Camp 2014",background:"../../res/img/backgrounds/camp_2014_summer.webp",theme:"夏のすべてが詰まってる",poem:`冒険。驚き。きっかけ。感動。涙。
夏は、さまざまな物語を君に見せる。
夏のすべてが詰まってる。
`,songs:[{title:"ray",author:"BUMP OF CHICKEN feat. HATSUNE MIKU",description:"",spotify:"https://open.spotify.com/track/1EMx7JyFeH6IPFni6XQCAI",damNumber:"6873-58",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6873-58",joyNumber:"737711",joyUrl:"",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a000673/l030b34.html",youtubeUrl:"//youtu.be/yT_ylSCgY6Q"},{title:"ミラクル",author:"miwa",description:"資生堂 SEA BREEZE 2013 CMSong",spotify:"https://open.spotify.com/track/0WWhdc9npUQ9BCAAnUOCDz",damNumber:"4729-87",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4729-87",joyNumber:"724525",joyUrl:"https://www.joysound.com/web/search/song/252647",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04e594/l02ca67.html",youtubeUrl:"//youtu.be/HlDo8qEPbNg"}]},{name:"English × IT Camp  2014",isBefore2024:!0,songs:[{title:"Happy",author:"Pharrell Williams",description:`[Life is Tech ! Ver.](//youtu.be/rYH8exdFYro)
Movie Despicable Me 2 insert song`,spotify:"https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH",damNumber:"5635-09",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5635-09",joyNumber:"738399",joyUrl:"https://www.joysound.com/web/search/song/406080",lyricsSiteName:"AZLyrics",lyricsUrl:"https://www.azlyrics.com/lyrics/pharrellwilliams/happy.html",youtubeUrl:"//youtu.be/y6Sxv-sUYtM"}]},{name:"Spring Camp 2014",theme:"出会い、別れ、はじまり",isBefore2024:!0,songs:[{title:"スターラブレイション",author:"ケラケラ",description:"フジテレビ木曜ドラマ2013/2Q ラスト・シンデレラEDSong",spotify:"https://open.spotify.com/track/0PTGYdQvnVQ1YJ65jxBNoT",damNumber:"4331-86",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4331-86",joyNumber:"725137",joyUrl:"https://www.joysound.com/web/search/song/253436",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05751d/l02cddb.html",youtubeUrl:"//youtu.be/JQowMIY2bOw"},{title:"変わらないもの",author:"奥華子",description:"アニメ映画「時をかける少女」挿入歌",spotify:"https://open.spotify.com/track/6i8mvhA9dAHil8tMzuMdMw",damNumber:"2889-23",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=2889-23",joyNumber:"161753",joyUrl:"https://www.joysound.com/web/search/song/99643",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04c9e3/l00af88.html",youtubeUrl:"//youtu.be/SqANEGZ6Ty0"}]}],2015:[{name:"Xmas Camp 2015",background:"../../res/img/backgrounds/camp_2015_xmas.webp",theme:"5日間だけの魔法の世界へ、ようこそ -Make with Magic-",songs:[{title:"新宝島",author:"サカナクション",description:"映画 バクマン。 主題歌",spotify:"https://open.spotify.com/track/4a48lWUd64bZgHUDx0GZlj",damNumber:"5449-28",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5449-28",joyNumber:"156414",joyUrl:"https://www.joysound.com/web/search/song/530711",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04d6c9/l037b92.html",youtubeUrl:"//youtu.be/LIlZCmETvsY"},{title:"ハピネス",author:"AI",description:"コカ・コーラ 冬期CMソング",spotify:"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI",damNumber:"6484-08",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08",joyNumber:"29625",joyUrl:"https://www.joysound.com/web/search/song/186425",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a001bf4/l027392.html",youtubeUrl:"//youtu.be/uKgmu8g-kXE"},{title:"Share The Love",author:"三代目 J Soul Brothers",description:"Pocky CMソング",spotify:"https://open.spotify.com/track/1qWEBBmhX8A8eTEYyRJpK8",damNumber:"6854-25",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6854-25",joyNumber:"156497",joyUrl:"https://www.joysound.com/web/search/song/547165",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05b271/l03a1e5.html",youtubeUrl:"//youtu.be/MxHIFZp7Uek"},{title:"ハレ晴レユカイ",author:"涼宮ハルヒ(平野綾)/長門有希(茅原実里)/朝比奈みくる(後藤邑子)",description:"TVアニメ「涼宮ハルヒの憂鬱」エンディングテーマ",spotify:"https://open.spotify.com/track/7ugsistwEp0PhP4Ddj9cra",damNumber:"4461-05",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4461-05",joyNumber:"55206",joyUrl:"https://www.joysound.com/web/search/song/87172",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04cfa4/l00a8e0.html",youtubeUrl:"//youtu.be/a6iZKNfDuh4"},{title:"あたりまえ体操",author:"COWCOW",description:`注意点体操
[注意点体操歌詞](original-lyrics/注意点体操2015Xmas.md)`,spotify:"https://open.spotify.com/track/5oHSEsaU6eXaeBeYfzwa0o",damNumber:"6857-88",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6857-88",joyNumber:"721576",joyUrl:"https://www.joysound.com/web/search/song/247565",lyricsSiteName:"UtaTen",lyricsUrl:"https://utaten.com/lyric/pt15102702/",youtubeUrl:"//youtu.be/G0zRBRUQils"}]},{name:"Summer Camp 2015",background:"../../res/img/backgrounds/camp_2015_summer.webp",theme:"世界で一番、ココロ踊る「夏」を。 -A SUMMER THAT ROCKS YOUR HEART-",songs:[{title:"Come On! Come On! -Happy with Smile-",author:"THE UNITED",description:"",spotify:"",damNumber:"3923-19",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3923-19",joyNumber:"",joyUrl:"",lyricsSiteName:"musiXmatch",lyricsUrl:"https://www.musixmatch.com/ja/lyrics/The-United/Come-On-Come-On-~Happy-with-Smile~",youtubeUrl:"//youtu.be/xii1jKIbHH8"},{title:"Beautiful",author:"Superfly",description:"TBS 火曜ドラマ 2015/2Q マザー・ゲーム～彼女たちの階級～ 主題歌",spotify:"https://open.spotify.com/track/2ruHYPN3a77Ra8WvvPyfwb",damNumber:"4989-58",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4989-58",joyNumber:"156180",joyUrl:"https://www.joysound.com/web/search/song/423556",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04cdbd/l036081.html",youtubeUrl:"//youtu.be/tfeSwQ-iU0U"},{title:"あたりまえ体操",author:"COWCOW",description:`注意点体操
[注意点体操歌詞](original-lyrics/注意点体操2015Summer.md)`,spotify:"https://open.spotify.com/track/5oHSEsaU6eXaeBeYfzwa0o",damNumber:"6857-88",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6857-88",joyNumber:"721576",joyUrl:"https://www.joysound.com/web/search/song/247565",lyricsSiteName:"UtaTen",lyricsUrl:"https://utaten.com/lyric/pt15102702/",youtubeUrl:"//youtu.be/G0zRBRUQils"}]},{name:"YOSHIMOTO TECHDAY",background:"../../res/img/backgrounds/sp_camp_2015_yoshimoto.webp",songs:[{title:"LAUGH! LAUGH! LAUGH!",author:"槇原敬之",description:"LIVE STAND Theme Song",spotify:"",damNumber:"",damUrl:"",joyNumber:"",joyUrl:"",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/167194/",youtubeUrl:"//youtu.be/1yy4kxA_UVU"}]},{name:"Life 伊豆 Tech ! 2015",background:"../../res/img/backgrounds/sp_camp_2015_izu.webp",theme:"一年に一度だけ、地獄のような３日間",songs:[{title:"バリバリ最強No.1",author:"FEEL SO BAD",description:"テレビ朝日 アニメ 地獄先生ぬ〜べ〜 OP",spotify:"https://open.spotify.com/track/13AxywtjydRCxwtfY0pmua",damNumber:"3206-03",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3206-03",joyNumber:"14246",joyUrl:"https://www.joysound.com/web/search/song/14238",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a01176a/l0011d8.html",youtubeUrl:"//youtu.be/W3r_wFIGjHU"}]},{name:"Spring Camp 2015",background:"../../res/img/backgrounds/camp_2015_spring.webp",theme:"すべてがサプライズの春キャンプへ -Surprise Everything-",songs:[{title:"超特急ライン",author:"もっぴーさうんど",description:"[DOVA-SYNDROME](//dova-s.jp/bgm/play2260.html)",spotify:"",damNumber:"",damUrl:"",joyNumber:"",joyUrl:"",lyricsSiteName:"",lyricsUrl:"",youtubeUrl:"//youtu.be/5FOBkm0ibWI"},{title:"ひまわりの約束",author:"秦基博",description:"STAND BY ME ドラえもん 主題歌",spotify:"https://open.spotify.com/track/45jGOHwYKgsRYbAJ8DR61d",damNumber:"5617-21",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5617-21",joyNumber:"119667",joyUrl:"https://www.joysound.com/web/search/song/408793",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04c9d1/l032376.html",youtubeUrl:"//youtu.be/rKsQ-3N-Bks"},{title:"Happily",author:"One Direction",description:"映画 好きっていいなよ。 主題歌",spotify:"https://open.spotify.com/track/5Lf9rCqReE9Ri4tZvLRLuy",damNumber:"3925-07",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3925-07",joyNumber:"738409",joyUrl:"https://www.joysound.com/web/search/song/405263",lyricsSiteName:"AZLyrics",lyricsUrl:"https://www.azlyrics.com/lyrics/onedirection/happily.html",youtubeUrl:"//youtu.be/fTgJx-zmpM0"},{title:"さくら体操",author:"NHK",description:"",spotify:"",damNumber:"4630-01",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4630-01",joyNumber:"28584",joyUrl:"https://www.joysound.com/web/search/song/26476",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a0006b5/l001e01.html",youtubeUrl:"//youtu.be/pnBnu5v8KTw"}]}],2016:[{name:"Xmas Camp 2016",background:"../../res/img/backgrounds/camp_2016_xmas.webp",theme:"一年に一度だけ、特別な数日間。-Leep into a magic story.-",songs:[{title:"Hey Ho",author:"SEKAI NO OWARI",description:"[動物殺処分ゼロ支援プロジェクト「ブレーメン」支援Song](https://bremen-project.net/mob/index.php)",spotify:"https://open.spotify.com/track/2xsxP0EzcSWF96jdITaQxE",damNumber:"5847-57",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5847-57",joyNumber:"156923",joyUrl:"https://www.joysound.com/web/search/song/581126",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a055790/l03c659.html",youtubeUrl:"//youtu.be/qfsr0S_QGOU"},{title:"PPAP(ペンパイナッポーアッポーペン)",author:"ピコ太郎",description:`注意点太郎 元曲
[注意点太郎歌詞](original-lyrics/注意点太郎2016Xmas.md)`,spotify:"https://open.spotify.com/track/1ORkFlSSZwpReXTUXfMI0i",damNumber:"6018-17",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6018-17",joyNumber:"689757",joyUrl:"https://www.joysound.com/web/search/song/596832",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/216737/",youtubeUrl:"//youtu.be/0E00Zuayv9Q"}]},{name:"Summer Camp 2016",background:"../../res/img/backgrounds/camp_2016_summer.webp",theme:"世界なんて、ひと夏で変わる。 -LIVE AN ADVENTUROUS-",songs:[{title:"CAN'T STOP THE FEELING!",author:"JUSTIN TIMBERLAKE",description:"",spotify:"https://open.spotify.com/track/6JV2JOEocMgcZxYSZelKcc",damNumber:"3946-09",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3946-09",joyNumber:"686425",joyUrl:"https://www.joysound.com/web/search/song/571726",lyricsSiteName:"AZLyrics",lyricsUrl:"https://www.azlyrics.com/lyrics/justintimberlake/cantstopthefeeling.html",youtubeUrl:"//youtu.be/ru0K8uYEZWw"},{title:"シュガーソングとビターステップ",author:"UNISON SQUARE GARDEN",description:"TVアニメ「血界戦線」エンディングテーマ",spotify:"https://open.spotify.com/track/4at8MHaxe5hFxcXiO2PPd4",damNumber:"5902-52",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5902-52",joyNumber:"673982",joyUrl:"https://www.joysound.com/web/search/song/420975",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04e406/l035ee5.html",youtubeUrl:"//youtu.be/3exsRhw3xt8"},{title:"宝石になった日",author:"BUMP OF CHICKEN",description:"",spotify:"https://open.spotify.com/track/3WMBq28h9MGPE7U8ctiqqd",damNumber:"6873-68",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6873-68",joyNumber:"681904",joyUrl:"https://www.joysound.com/web/search/song/556019",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a000673/l0396dd.html",youtubeUrl:"//youtu.be/4Sd3iIdM4Co"},{title:"Green Bird",author:"フジファブリック",description:"TBS月曜ドラマ2015/3Q となりの関くん 主題歌",spotify:"https://open.spotify.com/track/7iqN8SaVVy3WcNeXCGRWNv",damNumber:"7048-50",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7048-50",joyNumber:"675813",joyUrl:"https://www.joysound.com/web/search/song/491590",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a033e7f/l0365c3.html",youtubeUrl:"//youtu.be/PcFaBM_3Ucc"},{title:"MUSIC VIDEO",author:"岡崎体育",description:`注意点 VIDEO 元曲
[注意点VIDEO歌詞](original-lyrics/注意点VIDEO2016Summer.md)`,spotify:"https://open.spotify.com/track/1qK7Y8HxbRFNzSIh3NRZIQ",damNumber:"6001-91",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6001-91",joyNumber:"685245",joyUrl:"https://www.joysound.com/web/search/song/570589",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05b49f/l03a993.html",youtubeUrl:"//youtu.be/fTwAz1JC4yI"}]},{name:"Spring Camp 2016",background:"../../res/img/backgrounds/camp_2016_spring.webp",theme:"まだ見ぬ世界に全力でワクワクしよう。 -Next World-",songs:[{title:"シルエット",author:"KANA-BOON",description:"TVアニメ「NARUTO -ナルト- 疾風伝」オープニングテーマ",spotify:"https://open.spotify.com/track/1di1C0QI6Y92yZPYn6XYAZ",damNumber:"5980-09",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5980-09",joyNumber:"119897",joyUrl:"https://www.joysound.com/web/search/song/414532",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05808c/l033c07.html",youtubeUrl:"//youtu.be/ZFoJYI7Q4iA"},{title:"Tell The World",author:"Eric Hutchinson",description:"",spotify:"https://open.spotify.com/track/0ifc4mq2mVNefgQFmtXQpt",damNumber:"3954-38",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3954-38",joyNumber:"",joyUrl:"",lyricsSiteName:"AZLyrics",lyricsUrl:"https://www.azlyrics.com/lyrics/hillsongunited/telltheworld.html",youtubeUrl:"//youtu.be/vZ2_tOoefyU"},{title:"ランアンドラン",author:"KANA-BOON",description:"",spotify:"https://open.spotify.com/track/3U7hgUytI4Gd1fcHvC6Mpf",damNumber:"5980-36",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5980-36",joyNumber:"156559",joyUrl:"https://www.joysound.com/web/search/song/552408",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05808c/l0391c1.html",youtubeUrl:"//youtu.be/JbyQOzRANYs"},{title:"PERFECT HUMAN",author:"RADIOFISH",description:`注意点HUMAN
[注意点HUMAN歌詞](original-lyrics/注意点HUMAN2016Spring.md)`,spotify:"https://open.spotify.com/track/2Mm0S1T5lgPy0YTXUxeIJQ",damNumber:"5994-97",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5994-97",joyNumber:"156697",joyUrl:"https://www.joysound.com/web/search/song/562610",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05b4f4/l03ab42.html",youtubeUrl:"//youtu.be/4Bh1nm7Ir8c"},{title:"さくら体操",author:"NHK",description:"",spotify:"",damNumber:"4630-01",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4630-01",joyNumber:"28584",joyUrl:"https://www.joysound.com/web/search/song/26476",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a0006b5/l001e01.html",youtubeUrl:"//youtu.be/pnBnu5v8KTw"}]}],2017:[{name:"Xmas Camp 2017",background:"../../res/img/backgrounds/camp_2017_xmas.webp",theme:"さあ、とっておきの世にも素敵な魔法の世界へ -MAKE WITH MAGIC-",songs:[{title:"ONE",author:"Aimer",description:"2018 PyeongChang Olympic JAL CMSong",spotify:"https://open.spotify.com/track/01jAlHee4psROggfWjk8hp",damNumber:"3914-52",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3914-52",joyNumber:"698510",joyUrl:"https://www.joysound.com/web/search/song/642264",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05570f/l04307e.html",youtubeUrl:"//youtu.be/IvKIiRKmnSY"},{title:"ハピネス",author:"AI",description:"コカ・コーラ 冬期CMソング",spotify:"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI",damNumber:"6484-08",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08",joyNumber:"29625",joyUrl:"https://www.joysound.com/web/search/song/186425",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a001bf4/l027392.html",youtubeUrl:"//youtu.be/uKgmu8g-kXE"},{title:"ようこそジャパリパークへ",author:"どうぶつビスケッツ×PPP",description:"けものフレンズ 主題歌（MC紹介映像BGM）",spotify:"https://open.spotify.com/track/7z0HnNeAREuJmRvQtpQIz0",damNumber:"3776-80",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3776-80",joyNumber:"692747",joyUrl:"https://www.joysound.com/web/search/song/604068",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05c47f/l03e218.html",youtubeUrl:"//youtu.be/xkMdLcB_vNU"}]},{name:"Summer Camp 2017",background:"../../res/img/backgrounds/camp_2017_summer.webp",theme:"夏が君を動かす。君が世界を動かす。-Move-",poem:`Summer moves your heart. You inspire the World .

夏は不思議な力を持っている。

何かに夢中になりたくなる。
誰かとはしゃぎたくなる。
秘密を語り合いたくなる。
新しい自分を見たくなる。

夏が君を突き動かす。
そこからすべてが始まる。

君が動くことで、世界は動き始める。
この夏のテーマは「Move」

世界を動かす、感動させる特別な夏へようこそ！
`,songs:[{title:"明日も",author:"SHISHAMO",description:'NTTドコモ"ドコモの学割「ししゃも？」篇" CMソング',spotify:"https://open.spotify.com/track/2GICOigS4ByugDisRegs3M",damNumber:"1083-19",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1083-19",joyNumber:"692522",joyUrl:"https://www.joysound.com/web/search/song/608842",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a056dae/l03e5dd.html",youtubeUrl:"//youtu.be/zhCtzmDWsN0"},{title:"鱗",author:"秦基博",description:"",spotify:"https://open.spotify.com/track/4IubwxgmXeZtDtYjTaT9gN",damNumber:"5022-68",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5022-68",joyNumber:"163318",joyUrl:"https://www.joysound.com/web/search/song/104055",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04c9d1/l00a8ba.html",youtubeUrl:"//youtu.be/x2WP1ZSQVlQ"},{title:"SHINY",author:"夜の本気ダンス",description:"NHK Eテレ テレビアニメ「境界のRINNE」第3シリーズ OPテーマソング",spotify:"https://open.spotify.com/track/1WBbfTpuB5GKPRY34YuK6U",damNumber:"6024-24",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6024-24",joyNumber:"694521",joyUrl:"https://www.joysound.com/web/search/song/616682",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05b135/l03f540.html",youtubeUrl:"//youtu.be/6idlVhWIWAE"},{title:"By My Side",author:"夜の本気ダンス",description:"",spotify:"https://open.spotify.com/track/2dQlCAu1Rbm5la3RyG2PUf",damNumber:"3896-62",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3896-62",joyNumber:"680561",joyUrl:"https://www.joysound.com/web/search/song/534505",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05b135/l039db9.html",youtubeUrl:"//youtu.be/JHFZeM5z0K4"}]},{name:"Life 那須 Tech ! 2017",background:"../../res/img/backgrounds/sp_camp_2017_nasu.webp",theme:"一年に一度だけ、地獄のような3日間",songs:[{title:"見たこともない景色",author:"菅田将暉",description:"au「au BLUE CHALLENGE」「応援」編 CMソング",spotify:"https://open.spotify.com/track/7r2BkaNy5vNFgfU39W5AkZ",damNumber:"7020-61",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7020-61",joyNumber:"692579",joyUrl:"https://www.joysound.com/web/search/song/607478",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05c7bf/l03ee0e.html",youtubeUrl:"//youtu.be/YPd6RV0odtM"},{title:"Stay",author:"Zedd & Alessia Cara",description:"",spotify:"https://open.spotify.com/track/6uBhi9gBXWjanegOb2Phh0",damNumber:"3968-12",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3968-12",joyNumber:"695098",joyUrl:"https://www.joysound.com/web/search/song/616290",lyricsSiteName:"AZLyrics",lyricsUrl:"https://www.azlyrics.com/lyrics/zedd/stay.html",youtubeUrl:"//youtu.be/h--P8HzYZ74"}]},{name:"Spring Camp 2017",background:"../../res/img/backgrounds/camp_2017_spring.webp",theme:"閃け！春！Spark -Spark! Spring!-",songs:[{title:"Next Stage with YOU",author:"Perfume",description:"メルセデス・ベンツ × Perfume コラボレーションCMソング",spotify:"https://open.spotify.com/track/6EcyUMdCYXLsv9gfNXGx9U",damNumber:"6271-62",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6271-62",joyNumber:"683507",joyUrl:"https://www.joysound.com/web/search/song/562986",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04cc66/l03a371.html",youtubeUrl:"//youtu.be/3j77uK8hu5A"},{title:"さよならバイスタンダー",author:"YUKI",description:"TVアニメ「3月のライオン」オープニングテーマ",spotify:"https://open.spotify.com/track/3pCDdB7qVRlXNTIwUtbSUF",damNumber:"6697-77",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6697-77",joyNumber:"691901",joyUrl:"https://www.joysound.com/web/search/song/605414",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a00067b/l03e0d1.html",youtubeUrl:"//youtu.be/Ai0fjnvGFX8"},{title:"やってみよう",author:"WANIMA",description:"au 冬期CMソング",spotify:"https://open.spotify.com/track/6ahKnsl2tuTCyaBwt45WAz",damNumber:"1104-48",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1104-48",joyNumber:"693346",joyUrl:"https://www.joysound.com/web/search/song/610926",lyricsSiteName:"プチリリ",lyricsUrl:"https://petitlyrics.com/lyrics/2554503",youtubeUrl:"//youtu.be/T383N0Qsk7g"},{title:"キャリア・ウーマン",author:"ブルゾンちえみ",description:`注意点ヒューマン元ネタ
[注意点ヒューマン歌詞](original-lyrics/注意点ヒューマン2017Spring.md)`,spotify:"",damNumber:"5069-97",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5069-97",joyNumber:"696618",joyUrl:"https://www.joysound.com/web/search/song/632964",lyricsSiteName:"",lyricsUrl:"",youtubeUrl:"//youtu.be/Y0JbtAJ8Hgo"},{title:"さくら体操",author:"NHK",description:"",spotify:"",damNumber:"4630-01",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4630-01",joyNumber:"28584",joyUrl:"https://www.joysound.com/web/search/song/26476",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a0006b5/l001e01.html",youtubeUrl:"//youtu.be/pnBnu5v8KTw"}]}],2018:[{name:"Xmas Camp 2018",background:"../../res/img/backgrounds/camp_2018_xmas.webp",theme:"一年に一度だけ、魔法のような数日間。 -Make with magic-",songs:[{title:"ループ",author:"edda",description:"テレビ東京土曜ドラマ ドラマ24 2018/4Q 忘却のサチコEDSong",spotify:"https://open.spotify.com/track/4yGMw00rlZtFRcBW77dljA",damNumber:"5176-32",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5176-32",joyNumber:"433711",joyUrl:"https://www.joysound.com/web/search/song/716232",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05cfc3/l04926a.html",youtubeUrl:"//youtu.be/-0-fVutBn38"},{title:"予感",author:"SUPER BEAVER",description:`テックな予感ぷろじぇくと
[Movie created by とき。](https://youtu.be/4tvJNJ0dsDY)
[Movie created by あおい](https://youtu.be/XZNGn_0geRU)
[Movie created by わくわくさん](https://youtu.be/3edebFRRC40)
フジテレビ火曜ドラマ 2018/4Q 僕らは奇跡でできているEDSong`,spotify:"https://open.spotify.com/track/2CzPCgj02ZAf6iugJoc9G0",damNumber:"5153-16",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5153-16",joyNumber:"433195",joyUrl:"https://www.joysound.com/web/search/song/713175",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a050f66/l049c98.html",youtubeUrl:"//youtu.be/XnYwwyXPt70"}]},{name:"Global IT Camp 2018",background:"../../res/img/backgrounds/global_camp_2018_nus.webp",theme:"Think globally, Change the world!",songs:[{title:"はじまり feat. キヨサク from MONGOL800",author:"Mrs. GREEN APPLE",description:"オープニング楽曲",spotify:"https://open.spotify.com/track/0teqQ0PYqVDyyXJuPOyMhu",damNumber:"6093-89",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6093-89",joyNumber:"428173",joyUrl:"https://www.joysound.com/web/search/song/685515",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05a2d6/l045f78.html",youtubeUrl:"//youtu.be/YH1aOeTX7Vs"},{title:"Classic",author:"MKTO",description:"",spotify:"https://open.spotify.com/track/6FE2iI43OZnszFLuLtvvmg",damNumber:"3947-95",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3947-95",joyNumber:"",joyUrl:"",lyricsSiteName:"azlyrics",lyricsUrl:"https://www.azlyrics.com/lyrics/mkto/classic.html",youtubeUrl:"//youtu.be/4Ba_qTPA4Ds"},{title:"Somebody to you",author:"The Vamps",description:"",spotify:"https://open.spotify.com/track/7ahubBqIp4T7WMXdBEuJYB",damNumber:"3932-86",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3932-86",joyNumber:"678565",joyUrl:"https://www.joysound.com/web/search/song/489534",lyricsSiteName:"azlyrics",lyricsUrl:"https://www.azlyrics.com/lyrics/vamps/somebodytoyou.html",youtubeUrl:"//youtu.be/0go2nfVXFgA"}]},{name:"Summer Camp 2018",background:"../../res/img/backgrounds/camp_2018_summer.webp",theme:"世界にひとつだけ、あなただけの夏の「物語」へ。 -Only one Your own Summer Story-",songs:[{title:"はじまり feat. キヨサク from MONGOL800",author:"Mrs. GREEN APPLE",description:"",spotify:"https://open.spotify.com/track/0teqQ0PYqVDyyXJuPOyMhu",damNumber:"6093-89",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6093-89",joyNumber:"428173",joyUrl:"https://www.joysound.com/web/search/song/685515",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05a2d6/l045f78.html",youtubeUrl:"//youtu.be/YH1aOeTX7Vs"},{title:"I WANT YOU BACK",author:" TWICE feat.The Jackson 5",description:"映画 センセイ君主 主題歌",spotify:"",damNumber:"7343-72",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7343-72",joyNumber:"428173",joyUrl:"https://www.joysound.com/web/search/song/695732",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04f8f9/l048610.html",youtubeUrl:"//youtu.be/X3H-4crGD6k"}]},{name:"Spring Camp 2018",background:"../../res/img/backgrounds/camp_2018_spring.webp",theme:"始まりの春。 -STARTING-",songs:[{title:"始まりの朝",author:"Official髭男dism",description:"",spotify:"https://open.spotify.com/track/27ZIwGuQ4dapegDtkDF421",damNumber:"7416-55",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7416-55",joyNumber:"697374",joyUrl:"https://www.joysound.com/web/search/song/615796",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a059eab/l03f34e.html",youtubeUrl:"//youtu.be/EusUvmUi2Xk"},{title:"Hollow",author:"DNCE",description:"",spotify:"",damNumber:"",damUrl:"",joyNumber:"424097",joyUrl:"https://www.joysound.com/web/search/song/659520",lyricsSiteName:"Genius Lyrics",lyricsUrl:"https://genius.com/Dnce-hollow-lyrics",youtubeUrl:"//youtu.be/hTnQBehHcgk"},{title:"さくら体操",author:"NHK",description:"",spotify:"",damNumber:"4630-01",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4630-01",joyNumber:"28584",joyUrl:"https://www.joysound.com/web/search/song/26476",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a0006b5/l001e01.html",youtubeUrl:"//youtu.be/pnBnu5v8KTw"}]}],2019:[{name:"Xmas Camp 2019",background:"../../res/img/backgrounds/camp_2019_xmas.webp",theme:"一年に一度だけ、特別な数日間。",songs:[{title:"lovin'",author:"Mrs. GREEN APPLE",description:"フジテレビ系「めざましどようび」テーマソング",spotify:"https://open.spotify.com/track/19kF4PkH9RmZlMSEOhSgdQ",damNumber:"6233-06",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6233-06",joyNumber:"442282",joyUrl:"https://www.joysound.com/web/search/song/773560",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05a2d6/l04d234.html",youtubeUrl:"//youtu.be/Ff7kdaIQvQM"},{title:"ハピネス",author:"AI",description:"コカ・コーラ 冬期CMソング",spotify:"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI",damNumber:"6484-08",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08",joyNumber:"29625",joyUrl:"https://www.joysound.com/web/search/song/186425",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a001bf4/l027392.html",youtubeUrl:"//youtu.be/uKgmu8g-kXE"}]},{name:"GLOBAL IT Camp 2019",background:"../../res/img/backgrounds/common_global.webp",theme:"THINK GLOBALLY,CHANGE THE WORLD",songs:[{title:"High Hopes",author:"Panic! At The Disco",description:"",spotify:"https://open.spotify.com/track/1rqqCSm0Qe4I9rUvWncaom",damNumber:"3844-71",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3844-71",joyNumber:"437459",joyUrl:"https://www.joysound.com/web/search/song/735036",lyricsSiteName:"AZLyrics",lyricsUrl:"https://www.azlyrics.com/lyrics/panicatthedisco/highhopes.html",youtubeUrl:"//youtu.be/IPXIgEAGe4U"}]},{name:"Summer Camp 2019",background:"../../res/img/backgrounds/camp_2019_summer.webp",theme:"『夏』が、好きだああああああああああああ。",songs:[{title:"雀ノ欠伸",author:"Saucy Dog",description:"サントリー天然水 GREEN TEA「徒然なる トリビュート」 参加楽曲",spotify:"https://open.spotify.com/track/093PMBsGoUGQp7FeHth4OV",damNumber:"5233-56",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5223-56",joyNumber:"441325",joyUrl:"https://www.joysound.com/web/search/song/767816",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05fdb9/l04c4cf.html",youtubeUrl:"//youtu.be/IJRdeZA05OE"},{title:"Player",author:"chelmico",description:"Apple Watch Series4 CMソング",spotify:"https://open.spotify.com/track/6ZgrQlvRIPKVTCLV02hnMt",damNumber:"5171-58",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5171-58",joyNumber:"431254",joyUrl:"https://www.joysound.com/web/search/song/697127",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05e5c8/l04828c.html",youtubeUrl:"//youtu.be/P7ds78eOLjU"}]},{name:"English×IT Camp 2019",theme:"THINK GLOBALLY,CHANGE THE WORLD",isBefore2024:!0,songs:[{title:"BrandNew",author:"Ben Rector",description:"",spotify:"https://open.spotify.com/track/07m8PuXxxv5J4qPEDq6ZkK",damNumber:"",damUrl:"",joyNumber:"",joyUrl:"",lyricsSiteName:"AZLyrics",lyricsUrl:"https://www.azlyrics.com/lyrics/benrector/brandnew.htmls",youtubeUrl:"//youtu.be/D7I8-bS7vBs"}]},{name:"Life 伊豆 Tech ! 2019",background:"../../res/img/backgrounds/sp_camp_2019_izu.webp",theme:"社会が抱える実課題をIT×Teamで解決!",songs:[{title:"オーバーライト",author:"フジファブリック",description:"J SPORTS STADIUM2019 野球中継テーマソング",spotify:"https://open.spotify.com/track/6IBRw9dEbMyjGlrqld0bx3",damNumber:"7048-85",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7048-85",joyNumber:"",joyUrl:"",lyricsSiteName:"プチリリ",lyricsUrl:"https://petitlyrics.com/lyrics/2793901",youtubeUrl:"//youtu.be/mFEU5s6FmP0"}]},{name:"Spring Camp 2019",background:"../../res/img/backgrounds/camp_2019_spring.webp",theme:"この春よ、止まれ",poem:`この春よ、
止まれ
この時間が、止まっていてほしいと思うことがある。
この時間が、ずっと続くならどんなにいいかと思う。
かけがえのない時間こそ、すぐに過ぎ去り、儚くも思える。
ただ、大きく違うのは、その記憶のある、自分。
そんな記憶の積み重ねが、今をつくっている。
記憶は過去の”足跡”、記憶は現在の”座標”。
だからこそ、叫びたい！
「この春よ、止まれ！」
この瞬間を、思いっきり楽しもう。
この記憶を、特別な君のものにしよう。
そう、この記憶は、君の未来をつくる、”道しるべ”だから。
さあ、春キャンプをはじめよう。
`,songs:[{title:"拝啓、少年よ",author:"Hump Back",description:"",spotify:"https://open.spotify.com/track/0aaZG5azeJei81A2WptwC8",damNumber:"5125-35",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5125-35",joyNumber:"430817",joyUrl:"https://www.joysound.com/web/search/song/691615",lyricsSiteName:"プチリリ",lyricsUrl:"https://petitlyrics.com/lyrics/2747881",youtubeUrl:"//youtu.be/d6i4AtCxrDo"},{title:"チェンジユアワールド",author:"go!go!vanillas",description:"[レコチョク](//recochoku.jp/song/S1007179020/)",spotify:"https://open.spotify.com/track/7KFTYTKIslK4CXqP4dOkDe",damNumber:"6207-48",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6207-48",joyNumber:"432931",joyUrl:"https://www.joysound.com/web/search/song/710938",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a059479/l0481b6.html",youtubeUrl:"//youtu.be/8C5BPH1_4Uk"},{title:"Tを探そう",author:"TT兄弟",description:"注意点「Tを探そう・Cを探そう」元ネタ",spotify:"",damNumber:"",damUrl:"",joyNumber:"",joyUrl:"",lyricsSiteName:"",lyricsUrl:"",youtubeUrl:"//youtu.be/yir2I0X6siA"}]}],2020:[{name:"Winter Camp 2020",background:"../../res/img/backgrounds/camp_2020_winter.webp",theme:"かつてないオンラインの祭典が、この冬",songs:[{title:"群青",author:"YOASOBI",description:"ブルボン「アルフォート×YOASOBI Special Movie inspired by ブルーピリオド」CMソング",spotify:"https://open.spotify.com/track/1zd35Y44Blc1CwwVbW3Qnk",damNumber:"5285-69",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5285-69",joyNumber:"486218",joyUrl:"https://www.joysound.com/web/search/song/486218",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a061652/l051a48.html",youtubeUrl:"//youtu.be/Y4nEEZwckuU"}]},{name:"Summer Camp 2020",background:"../../res/img/backgrounds/camp_2020_summer.webp",theme:"走れ。夏。",poem:`走る。全速力で。無我夢中で。
まわりが見えなくなったっていい。
のめりこめ、今この瞬間に。

自分だけの「世界」よ、もっともっとひろがれ。

さあ、無限大の夏が今始まる。
`,songs:[{title:"あの夢をなぞって",author:"YOASOBI",description:"フジテレビ 「情報プレゼンター とくダネ!」 2020Jun お天気コーナー Monthly Song",spotify:"https://open.spotify.com/track/5ptl2PXkiSth54HCuGO7vN",damNumber:"5267-36",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5267-36",joyNumber:"446885",joyUrl:"https://www.joysound.com/web/search/song/822624",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a061652/l050f8b.html",youtubeUrl:"//youtu.be/sAuEeM_6zpk"},{title:"怪獣の花唄",author:"Vaundy",description:"",spotify:"https://open.spotify.com/track/7dTW21YAJxnAOiUh7Rtu9S",damNumber:"5277-09",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5277-09",joyNumber:"485151",joyUrl:"https://www.joysound.com/web/search/song/830943",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a060fc4/l0506e5.html",youtubeUrl:"//youtu.be/UM9XNpgrqVk"}]},{name:"Spring Camp 2020",background:"../../res/img/backgrounds/camp_2020_spring.webp",theme:"Spring is Comming -はじまりの合図は「春」-",songs:[{title:"旅は道連れ",author:"Official髭男dism",description:"Suzuki SWIFT TVCM Song",spotify:"https://open.spotify.com/track/4vrCxIPGj6nUdvm1zsiKxO",damNumber:"6223-79",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6223-79",joyNumber:"443149",joyUrl:"https://www.joysound.com/web/search/song/791332",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a059eab/l04dc0f.html",youtubeUrl:"//youtu.be/uXMsI4yTSeM"},{title:"Party All Night",author:"FAITH",description:"TBS 王様のブランチ 2020Jan ED Theme songh",spotify:"https://open.spotify.com/track/6kphW6COHjqknjAAelZxd4",damNumber:"5231-48",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5231-48",joyNumber:"803513",joyUrl:"https://www.joysound.com/web/search/song/816397",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04acbe/l04ef90.html",youtubeUrl:"//youtu.be/t5noRnkNy4E"}]}],2021:[{name:"Winter Camp 2021",background:"../../res/img/backgrounds/camp_2021_winter.webp",songs:[{title:"BLUE SOULS",author:"A_o",description:"",spotify:"https://open.spotify.com/track/4oDAokMtC6RRme0DFQlg79",damNumber:"5375-18",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5375-18",joyNumber:"490641",joyUrl:"https://www.joysound.com/web/search/song/878603",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a062d4e/l05562d.html",youtubeUrl:"//youtu.be/33ZWA1GrrXY"}]},{name:"Summer Camp 2021",background:"../../res/img/backgrounds/camp_2021_summer.webp",songs:[{title:"しわあわせ",author:"Vaundy",description:"",spotify:"https://open.spotify.com/track/4GvJskA0Jn4NorP2YWxuaf",damNumber:"5351-39",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5351-39",joyNumber:"490361",joyUrl:"https://www.joysound.com/web/search/song/876689",lyricsSiteName:"Lyrical Nonsense",lyricsUrl:"https://www.lyrical-nonsense.com/lyrics/vaundy/shiaawase/",youtubeUrl:"//youtu.be/JwmGruvGt_I"},{title:"シュガーハイウェイ",author:"神山羊",description:"",spotify:"https://open.spotify.com/track/2J5yL2noo3SK9pQzv9lcSP",damNumber:"5226-38",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5226-38",joyNumber:"438157",joyUrl:"https://www.joysound.com/web/search/song/745741",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05f5f3/l04b632.html",youtubeUrl:"//youtu.be/IqrbCSiJCA4"}]},{name:"Spring Camp 2021",background:"../../res/img/backgrounds/camp_2021_spring.webp",theme:"この春も、やまないYELLを君に",songs:[{title:"ティーンエイジサンセット",author:"Hump Back",description:"",spotify:"https://open.spotify.com/track/4GdaElLBtrEfFGVNUlWroI",damNumber:"5238-32",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5238-32",joyNumber:"485874",joyUrl:"https://www.joysound.com/web/search/song/843867",lyricsSiteName:"Lyrical Nonsense",lyricsUrl:"https://www.lyrical-nonsense.com/lyrics/hump-back/teenage-sunset/",youtubeUrl:"//youtu.be/8fMem5-ONEg"},{title:"ココロノナカ",author:"RADWIMPS",description:"",spotify:"https://open.spotify.com/track/3gBzYFtF0BATGZFUKKOP1b",damNumber:"7096-74",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7096-74",joyNumber:"485392",joyUrl:"https://www.joysound.com/web/search/song/841935",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04ac97/l051b90.html",youtubeUrl:"//youtu.be/SbGFpis3hiw"}]}],2022:[{name:"Xmas Camp 2022",background:"../../res/img/backgrounds/camp_2022_xmas.webp",songs:[{title:"ONE",author:"Aimer",description:"",spotify:"https://open.spotify.com/track/01jAlHee4psROggfWjk8hp",damNumber:"3914-52",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3914-52",joyNumber:"698510",joyUrl:"https://www.joysound.com/web/search/song/642264",lyricsSiteName:"Lyrical Nonsense",lyricsUrl:"https://www.lyrical-nonsense.com/lyrics/aimer/one",youtubeUrl:"//youtu.be/IvKIiRKmnSY"},{title:"ハピネス",author:"AI",description:"コカ・コーラ 冬期CMソング",spotify:"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI",damNumber:"6484-08",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08",joyNumber:"29625",joyUrl:"https://www.joysound.com/web/search/song/186425",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a001bf4/l027392.html",youtubeUrl:"//youtu.be/uKgmu8g-kXE"}]},{name:"Summer Camp 2022",background:"../../res/img/backgrounds/camp_2022_summer.webp",songs:[{title:"ばかまじめ",author:"Creepy Nuts＆Ayase＆幾田りら",description:"",spotify:"https://open.spotify.com/track/7FiTlLKW0Knj8rm7lMa9N7",damNumber:"1278-23",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1278-23",joyNumber:"497072",joyUrl:"https://www.joysound.com/web/search/song/920053",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a063b01/l0580da.html",youtubeUrl:"//youtu.be/zNOe2fK1hM0"},{title:"突破口",author:"SUPER BEAVER",description:"",spotify:"https://open.spotify.com/track/2JNl3zf7dLaK3ceN12RTOW",damNumber:"6836-84",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6836-84",joyNumber:"486786",joyUrl:"https://www.joysound.com/web/search/song/850101",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a050f66/l05235f.html",youtubeUrl:"//youtu.be/AT2tulhSprE"}]},{name:"Spring Camp 2022",background:"../../res/img/backgrounds/camp_2022_spring.webp",songs:[{title:"HAVE A NICE DAY",author:"imase",description:"",spotify:"https://open.spotify.com/track/5SWxyVd5Q5c1jzPpdL9olt",damNumber:"6993-21",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6993-21",joyNumber:"494769",joyUrl:"https://www.joysound.com/web/search/song/905072",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a063583/l056e9e.html",youtubeUrl:"//youtu.be/pRlzN2I9Knw"},{title:"光るとき",author:"羊文学",description:"",spotify:"https://open.spotify.com/track/7Aflm6F9jMApKat1tjvhxT",damNumber:"5306-93",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5306-93",joyNumber:"495717",joyUrl:"https://www.joysound.com/web/search/song/897823",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05d579/l0573ec.html",youtubeUrl:"//youtu.be/qknDI1k39Ic"}]}],2023:[{name:"Xmas Camp 2023",background:"../../res/img/backgrounds/camp_2023_xmas.webp",songs:[{title:"最高到達点",author:"SEKAI NO OWARI",description:"TVアニメ「ONE PIECE」主題歌",spotify:"https://open.spotify.com/track/2hXPmiqKdXcbV0L1VKnTDN",damNumber:"5848-22",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5848-22",joyNumber:"620689",joyUrl:"https://www.joysound.com/web/search/song/985197",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a055790/l05e0db.html",youtubeUrl:"//youtu.be/BNguaY5exIk"},{title:"ハピネス",author:"AI",description:"コカ・コーラ 冬期CMソング",spotify:"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI",damNumber:"6484-08",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08",joyNumber:"29625",joyUrl:"https://www.joysound.com/web/search/song/186425",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a001bf4/l027392.html",youtubeUrl:"//youtu.be/uKgmu8g-kXE"}]},{name:"Summer Camp 2023",background:"../../res/img/backgrounds/camp_2023_summer.webp",songs:[{title:"夏は巡る",author:"PEOPLE1",description:"",spotify:"https://open.spotify.com/track/2EHUDtTMLscFB0DKXp03A7",damNumber:"5481-43",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5481-43",joyNumber:"620760",joyUrl:"https://www.joysound.com/web/search/song/992263",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a064b0d/l05cc7e.html",youtubeUrl:"//youtu.be/K7h1WF73YwM"},{title:"ことほぎ",author:"Tele",description:"",spotify:"https://open.spotify.com/track/5bNzSOlYpTNdTm5aZMgi8F",damNumber:"5470-24",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5470-24",joyNumber:"617027",joyUrl:"https://www.joysound.com/web/search/song/971877",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a064687/l05c9d6.html",youtubeUrl:"//youtu.be/bcTRLCpId7o"}]},{name:"Spring Camp 2023",background:"../../res/img/backgrounds/camp_2023_spring.webp",songs:[{title:"現在を生きるのだ。",author:"Saucy Dog",description:"第101回 全国高校サッカー選手権大会応援歌",spotify:"https://open.spotify.com/track/71LvsWD50UELzZYywx9BWe",damNumber:"1427-11",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1427-11",joyNumber:"613455",joyUrl:"https://www.joysound.com/web/search/song/951401",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05fdb9/l05b431.html",youtubeUrl:"//youtu.be/tbLMacyYZb8"},{title:"ミラーチューン",author:"ずっと真夜中でいいのに。",description:"",spotify:"https://open.spotify.com/track/6KB2OPefadupVDnVNYq23A",damNumber:"5306-93",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1127-07",joyNumber:"498201",joyUrl:"https://www.joysound.com/web/search/song/923685",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05f6e2/l058572.html",youtubeUrl:"//youtu.be/BVvvUGP0MFw"}]}],2024:[{name:"Xmas Camp 2024",background:"../../res/img/backgrounds/camp_2024_xmas.webp",songs:[{title:"ユートピア",author:"imase",description:"映画 SAND LAND 主題歌",spotify:"https://open.spotify.com/track/2ALfxGK9zPIkTvJbCjkSeI",damNumber:"1317-96",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1317-96",joyNumber:"618349",joyUrl:"https://www.joysound.com/web/search/song/976666",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a063583/l05d485.html",youtubeUrl:"//youtu.be/ePuwo3lYwgc"},{title:"ハピネス",author:"AI",description:"コカ・コーラ 冬期CMソング",spotify:"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI",damNumber:"6484-08",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08",joyNumber:"29625",joyUrl:"https://www.joysound.com/web/search/song/186425",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a001bf4/l027392.html",youtubeUrl:"//youtu.be/uKgmu8g-kXE"}]},{name:"Summer Camp 2024",background:"../../res/img/backgrounds/camp_2024_summer.webp",songs:[{title:"君のいる方へ",author:"オレンジスパイニクラブ",description:"",spotify:"https://open.spotify.com/track/4n4e4TBbELSpb2P9pk1Y0t",damNumber:"1384-26",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1384-26",joyNumber:"499721",joyUrl:"https://www.joysound.com/web/search/song/911692",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a061b57/l059659.html",youtubeUrl:"//youtu.be/tfchdsRncZk"},{title:"世界 feat. Moto from Chilli Beans. & Who-ya Extended",author:"KERENMI",description:"Honda VEZEL CMソング",spotify:"https://open.spotify.com/track/1ov4hpi6AicHhPvkr2qHXj",damNumber:"1412-67",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1412-67",joyNumber:"627533",joyUrl:"https://www.joysound.com/web/search/song/1039359",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a06120b/l0607ef.html",youtubeUrl:"//youtu.be/uXhL_a0hfLU"}]},{name:"Spring Camp 2024",background:"../../res/img/backgrounds/camp_2024_spring.webp",songs:[{title:"好きなものは手のひらの中",author:"Conton Candy",description:"",spotify:"https://open.spotify.com/track/3FrwPF0EFJFLE9yVprrbd5",damNumber:"5443-66",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5443-66",joyNumber:"",joyUrl:"",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/334372/",youtubeUrl:"//youtu.be/WoduRoHslg0"},{title:"鈴々",author:"PEOPLE 1",description:"",spotify:"https://open.spotify.com/track/6IfLdaA77asZvofXazYibP",damNumber:"5486-98",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5486-98",joyNumber:"623365",joyUrl:"https://www.joysound.com/web/search/song/999873",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a064b0d/l05f438.html",youtubeUrl:"//youtu.be/7synqOiMORc"}]}],2025:[{name:"Xmas Camp 2025",background:"../../res/img/backgrounds/camp_2025_xmas.webp",songs:[{title:"PLAYERS",author:"YOASOBI",description:"PlayStation CMソング",spotify:"https://open.spotify.com/track/0zsPR5FPw60WXokejB9UI8",damNumber:"1060-71",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1060-71",joyNumber:"635895",joyUrl:"https://www.joysound.com/web/search/song/1079168",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a061652/l063f06.html",youtubeUrl:"//youtu.be/ZfR_FP_7w00"},{title:"ハピネス",author:"AI",description:"コカ・コーラ 冬期CMソング",spotify:"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI",damNumber:"6484-08",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08",joyNumber:"29625",joyUrl:"https://www.joysound.com/web/search/song/186425",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a001bf4/l027392.html",youtubeUrl:"//youtu.be/uKgmu8g-kXE"}]},{name:"Summer Camp 2025",background:"../../res/img/backgrounds/camp_2025_summer.webp",songs:[{title:"バイマイフレンド",author:"bokula.",description:"",spotify:"https://open.spotify.com/track/73qkznNMToO2Xfa7VzyBvm",damNumber:"5423-40",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5423-40",joyNumber:"812225",joyUrl:"https://www.joysound.com/web/search/song/919640",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a063048/l058ac7.html",youtubeUrl:"//youtu.be/IOBny9KrdMg"},{title:"月面着陸計画",author:"tuki.",description:"スズキ「ソリオバンディット」CMソング",spotify:"https://open.spotify.com/track/2mqSMiMiL36K7vTyU4K0Vc",damNumber:"5553-14",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5553-14",joyNumber:"633169",joyUrl:"https://www.joysound.com/web/search/song/1077783",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a067492/l063283.html",youtubeUrl:"//youtu.be/mX9IJ7Urn28"}]},{name:"Spring Camp 2025",background:"../../res/img/backgrounds/camp_2025_spring.webp",songs:[{title:"ひとりぼっちと廊下の窓",author:"サバシスター",description:"ブルボン 濃厚チョコブラウニー CMソング",spotify:"https://open.spotify.com/track/5tDnrXI3oowmppw6Zl6FTy",damNumber:"5512-83",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5512-83",joyNumber:"630673",joyUrl:"https://www.joysound.com/web/search/song/1059552",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a066254/l061e70.html",youtubeUrl:"//youtu.be/-zmfWs7CAIk"},{title:"アタシのドレス",author:"ねぐせ。",description:"TVアニメ「メダリスト」エンディングテーマ",spotify:"https://open.spotify.com/track/7dQovfNtTx042gZErs0bdq",damNumber:"5587-14",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5587-14",joyNumber:"634020",joyUrl:"https://www.joysound.com/web/search/song/1075134",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a062d50/l063303.html",youtubeUrl:"//youtu.be/8wZw9HePP-I"}]}],2026:[{name:"Spring Camp 2026",background:"../../res/img/backgrounds/camp_2026_spring.webp",songs:[{title:"偉星人",author:"Vaundy",description:"NHK大河ドラマ『青天を衝け』インスパイアードソング",spotify:"https://open.spotify.com/track/0v4WBsVrgpPIsiMPM6b7eI",damNumber:"1279-96",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1279-96",joyNumber:"642661",joyUrl:"https://www.joysound.com/web/search/song/901166",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/382470/",youtubeUrl:"//youtu.be/aDaWuvpB_Kw"},{title:"赤春花 (feat.幾田りら)",author:"Sumika",description:"",spotify:"https://open.spotify.com/track/2n5t3h4lXpMMEnBt7PSJEp",damNumber:"",damUrl:"",joyNumber:"",joyUrl:"",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/388543/",youtubeUrl:"//youtu.be/PZ3CB2vmGYo"}]}]},Hr={2020:[{name:"LiT! School 2020 Spring",background:"../../res/img/backgrounds/school.webp",songs:[{title:"スターマーカー",author:"KANA-BOON",description:"アニメ「僕のヒーローアカデミア」第4期文化祭編 OPテーマ",spotify:"https://open.spotify.com/track/6NAtVhZ5LrvoKy2Gijr5gj",damNumber:"5980-99",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5980-99",joyNumber:"716301",joyUrl:"https://www.joysound.com/web/search/song/819000",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05808c/l04f540.html",youtubeUrl:"//youtu.be/vk0iPWFxQ9w"}]},{name:"LiT! School 2020 Autumn",background:"../../res/img/backgrounds/school.webp",songs:[{title:"青すぎる空",author:"the peggies",description:"映画「アルプススタンドのはしの方」主題歌",spotify:"https://open.spotify.com/track/7hxTHH9roB4VafPocZ0Gov",damNumber:"5244-40",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5244-40",joyNumber:"449264",joyUrl:"https://www.joysound.com/web/search/song/827980",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/283897/",youtubeUrl:"//youtu.be/o813X9efcU4"}]}],2021:[{name:"LiT! School 2021 Spring",background:"../../res/img/backgrounds/school.webp",songs:[{title:"シアターライフ",author:"Mr.FanTastiC",description:"",spotify:"https://open.spotify.com/track/5zB6jCoumWJzFyiqeIup5c",damNumber:"",damUrl:"",joyNumber:"",joyUrl:"",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/300056/",youtubeUrl:"//youtu.be/cU3y0Bja-6Y"}]},{name:"LiT! School 2021 Autumn",background:"../../res/img/backgrounds/school.webp",songs:[{title:"ナイトダンサー",author:"秋山黄色",description:"TVCM「Splash ボートレーサーになりたい！」イメージソング",spotify:"https://open.spotify.com/track/7sTR8auuaZfamoooIssjiX",damNumber:"6955-94",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6955-94",joyNumber:"492925",joyUrl:"https://www.joysound.com/web/search/song/894674",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05f804/l055cd6.html",youtubeUrl:"//youtu.be/J3PTrz_Ngko"}]}],2022:[{name:"LiT! School 2022 Spring",background:"../../res/img/backgrounds/school.webp",songs:[{title:"春",author:"Sundae May Club",description:"",spotify:"https://open.spotify.com/track/0V3lFWFAEoyYEznvuCCEsr",damNumber:"",damUrl:"",joyNumber:"",joyUrl:"",lyricsSiteName:"Eggs",lyricsUrl:"https://eggs.mu/artist/SundaeMayClub/song/d5223914-9724-43d8-a59b-00b425c00d3f",youtubeUrl:"//youtu.be/ypOd7kRMgBU"}]},{name:"LiT! School 2022 Autumn",background:"../../res/img/backgrounds/school.webp",songs:[{title:"再生",author:"ハンブレッダーズ",description:"",spotify:"https://open.spotify.com/track/60d5nF0QF1iTOlFLT37uWb",damNumber:"6993-29",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6993-29",joyNumber:"613536",joyUrl:"https://www.joysound.com/web/search/song/899227",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05ddf7/l056bed.html",youtubeUrl:"//youtu.be/6cKj4VCfdhI"}]}],2023:[{name:"LiT! School 2023 Spring",background:"../../res/img/backgrounds/school.webp",songs:[{title:"サマーブルーム",author:"リュックと添い寝ごはん",description:"「爽快系目薬 ロートZ!」CMソング",spotify:"https://open.spotify.com/track/6b7PLhYnmxUXZepngv875O",damNumber:"1337-68",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1337-68",joyNumber:"612210",joyUrl:"https://www.joysound.com/web/search/song/932839",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a0613be/l0596b4.html",youtubeUrl:"//youtu.be/fLJx2auUR-Y"}]},{name:"LiT! School 2023 Autumn",background:"../../res/img/backgrounds/school.webp",songs:[{title:"tour",author:"Hump Back",description:"",spotify:"https://open.spotify.com/track/27pulCzerpyS7LeivohwM2",damNumber:"5492-08",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5492-08",joyNumber:"617682",joyUrl:"https://www.joysound.com/web/search/song/974351",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/369949/",youtubeUrl:"//youtu.be/GTCdfgJV1tc"}]}],2024:[{name:"LiT! School 2024 Spring",background:"../../res/img/backgrounds/school.webp",songs:[{title:"スーパーソニックガール",author:"ズーカラデル",description:"",spotify:"https://open.spotify.com/track/5fNRcSdGa4tmEWwPtGPL9p",damNumber:"1131-68",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1131-68",joyNumber:"624419",joyUrl:"https://www.joysound.com/web/search/song/1013744",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05f3fc/l05f8f2.html",youtubeUrl:"//youtu.be/G1AKAQo1DaE"}]},{name:"LiT! School 2024 Autumn",background:"../../res/img/backgrounds/school.webp",songs:[{title:"⚡️",author:"ハンブレッダーズ",description:"MBSベースボールパーク2025 テーマソング",spotify:"https://open.spotify.com/track/2l2JbsZwpWVsAMiScxTBfA",damNumber:"1422-82",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1422-82",joyNumber:"629646",joyUrl:"https://www.joysound.com/web/search/song/1052363",lyricsSiteName:"UtaTen",lyricsUrl:"https://utaten.com/lyric/ma24071211/",youtubeUrl:"//youtu.be/XkbHAjmTVUo"}]}],2025:[{name:"LiT! School 2025 Spring",background:"../../res/img/backgrounds/school.webp",songs:[{title:"ハッピーをちょうだい",author:"パーカーズ",description:"",spotify:"https://open.spotify.com/track/0UBh9doZhpZVfUBfv4r0sU",damNumber:"5469-95",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5469-95",joyNumber:"813662",joyUrl:"https://www.joysound.com/web/search/song/972788",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/336358/",youtubeUrl:"//youtu.be/PWzbtOEe25k"}]},{name:"LiT! School 2025 Autumn",background:"../../res/img/backgrounds/school.webp",songs:[{title:"才能",author:"サバシスター",description:"森永製菓「学校にinゼリー」CMソング",spotify:"https://open.spotify.com/track/7n8LLb5Mu0OL0E6XmaXOt2",damNumber:"1230-97",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1230-97",joyNumber:"641253",joyUrl:"https://www.joysound.com/web/search/song/1133292",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/379491/",youtubeUrl:"//youtu.be/caD2cphuURY"}]}],2026:[{name:"LiT! School 2026 Spring",background:"../../res/img/backgrounds/school.webp",songs:[{title:"yummy goodday",author:"CENT",description:"アニメ「とんでもスキルで異世界放浪メシ2」OPテーマ",spotify:"https://open.spotify.com/track/11nZ6Nr5ZBaV9pftKXWXau",damNumber:"1233-91",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1233-91",joyNumber:"641514",joyUrl:"https://www.joysound.com/web/search/song/1132294",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a067489/l06627d.html",youtubeUrl:"//youtu.be/rxAM0ncKB9Q"}]}]},Jr={2015:[{name:"Be Startup Coca-Cola Camp",background:"../../res/img/backgrounds/sp_camp_2015_cocacola.webp",theme:"世の中にないもの、『私』が生み出す。",songs:[{title:"ハピネス",author:"AI",description:"コカ・コーラ 冬期CMソング",spotify:"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI",damNumber:"6484-08",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08",joyNumber:"29625",joyUrl:"https://www.joysound.com/web/search/song/186425",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a001bf4/l027392.html",youtubeUrl:"//youtu.be/uKgmu8g-kXE"},{title:"螢のテーマ",author:"さだまさし",description:"北の国から 遥かなる大地より",spotify:"https://open.spotify.com/track/7vpt8PXSDlgxpeyDqyBOSC",damNumber:"",damUrl:"",joyNumber:"23551",joyUrl:"https://www.joysound.com/web/search/song/22777",lyricsSiteName:"",lyricsUrl:"",youtubeUrl:"//youtu.be/hsSAnsrQvLk"}]}],2016:[{name:"メンター/コース紹介",isBefore2024:!0,songs:[{title:"Wings",author:"Little Mix",description:"",spotify:"https://open.spotify.com/track/3180WDzph4WrS4sLSNcGfa",damNumber:"3904-34",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3904-34",joyNumber:"728198",joyUrl:"https://www.joysound.com/web/search/song/297971",lyricsSiteName:"AZLyrics",lyricsUrl:"https://www.azlyrics.com/lyrics/littlemix/wings.html",youtubeUrl:"//youtu.be/cOQDsmEqVt8"}]},{name:"スクール夏期講習(2016)",isBefore2024:!0,songs:[{title:"PERFECT BLUE",author:"Base Ball Bear",description:"",spotify:"https://open.spotify.com/track/2Yv1CaDviRziwTxCDiaRtr",damNumber:"5503-13",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5503-13",joyNumber:"721856",joyUrl:"https://www.joysound.com/web/search/song/249017",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04c8a1/l02bdf5.html",youtubeUrl:"//youtu.be/jgofbf8Q_-Y"}]}],2019:[{name:"テックなオフ会",background:"../../res/img/backgrounds/event_2019_off_party.webp",theme:"ピクニック気分で集まっちゃう秋2019",songs:[{title:"群青",author:"サイダーガール",description:"",spotify:"https://open.spotify.com/track/0dElTp6tFt1ji0fAfEdVYe",damNumber:"6031-80",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6031-80",joyNumber:"693475",joyUrl:"https://www.joysound.com/web/search/song/581417",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05bd82/l045db0.html",youtubeUrl:"//youtu.be/5zZSfXiyTvA"}]},{name:"Happy Graduation(関西卒業サプライズ2019)",background:"../../res/img/backgrounds/event_2019_surprise_kansai.webp",theme:"桜とキミとぼくらと",songs:[{title:"桜のあと (all quartets lead to the?)",author:"UNISON SQUARE GARDEN",description:"TBS アニメ 2013/4Q 夜桜四重奏 〜ヨザクラカルテット〜 OP",spotify:"https://open.spotify.com/track/2Hvedz2AA3YjULUhiLPHJu",damNumber:"5902-22",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5902-22",joyNumber:"729880",joyUrl:"https://www.joysound.com/web/search/song/300120",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04e406/l02eeeb.html",youtubeUrl:"//youtu.be/9zluQwPBMWM"},{title:"桜ノ雨",author:"absorb feat 初音ミク",description:"",spotify:"https://open.spotify.com/track/4ZGtmdmWbBch2EDvMonofe",damNumber:"5315-90",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5315-90",joyNumber:"177230",joyUrl:"https://www.joysound.com/web/search/song/125582",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04f309/l0141af.html",youtubeUrl:"//youtu.be/Bc283_Ic79g"}]},{name:"Graduation 2019(関東卒業サプライズ2019）",background:"../../res/img/backgrounds/event_2019_surprise_kanto.webp",songs:[{title:"パープル",author:"コレサワ",description:"ロート製薬 肌ラボ 恋する肌キュンmovie 第4弾 キャンペーンソング",spotify:"https://open.spotify.com/track/4EqX2L0k0t4N1RJ3LaL80p",damNumber:"5174-75",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5174-75",joyNumber:"433153",joyUrl:"https://www.joysound.com/web/search/song/705468",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05acb3/l048b31.html",youtubeUrl:"//youtu.be/qnLJk_WoPto"},{title:"アウトフォーカス",author:"Half time Old",description:"",spotify:"https://open.spotify.com/track/053jdHo91r8b3smvDljIcM",damNumber:"7396-14",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7396-14",joyNumber:"428373",joyUrl:"https://www.joysound.com/web/search/song/659403",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05d9ce/l043dca.html",youtubeUrl:"//youtu.be/3W1JzN1rkWU"}]}],2020:[{name:"SONY ENTERTAINMENT CAMP 2020",background:"../../res/img/backgrounds/sp_camp_2020_entertainment.webp",theme:"君にしかつくれないエンタテインメントを世界へ",poem:`誰もがエンタテインメントを創りだすクリエイターになれる。
私たちはそう信じている。

例えば、ダンスが好きな人、音楽が好きな人、ゲームが好きな人、
写真や動画を撮るのが好きな人、物語をつくるのが好きな人。

君が好きなことを通じて、誰かを笑顔にしたり、世界中を楽しませたりする力が、君にはきっとある。

私たちは、技術やノウハウ、環境など、ソニーが持つ様々な資源を最大限に使って、君の無限の可能性を引き出したい。
そして、君の好きなことから広がる、エンタテインメントの世界を一緒に創りだしたい。

クリエイターをテクノロジーでサポートし、ゲームや音楽、映画、アニメなど、さまざまなエンタテインメントを生み出しているソニーが提供する「ENTERTAINMENT CAMP 2020」。

オーディションを経て、シナリオライティング、ダンス、映像制作、音楽制作のそれぞれのジャンルに分かれ、プロのレッスンを受けながらスキルを育むプログラム。
各ジャンルの4人が1つのチームとなり、最高の作品を創り出す。

君の中に眠るクリエイティビティに磨きを掛けるために、ゲームや音楽を創りだしているプロのクリエイターが講師となり、最先端の知見を君に注ぎ込む。
最高の作品を創りあげるにあたって、プロと同じ開発環境も用意する。

ぜひこの扉を叩いて欲しい。
ソニーは君の挑戦を待っている。
`,songs:[{title:"バニラ",author:"蒼山幸子",description:"",spotify:"https://open.spotify.com/track/7EbRJkr8eGRRy8AlVjCUIE",damNumber:"",damUrl:"",joyNumber:"",joyUrl:"",lyricsSiteName:"Lyrical Nonsense",lyricsUrl:"https://www.lyrical-nonsense.com/lyrics/sachiko-aoyama/vanilla/",youtubeUrl:"//youtu.be/2TDx_XNQ5QU"}]},{name:"Life is Hack !",background:"../../res/img/backgrounds/event_lifeishack.webp",theme:"Hello, World!!・Online#1",songs:[{title:"スタートライン",author:"ベリーグッドマン",description:"TBS アニメ 新幹線変形ロボ シンカリオン ED",spotify:"https://open.spotify.com/track/5sM8xMEIgnIzJJipep3Tzn",damNumber:"6211-82",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6211-82",joyNumber:"",joyUrl:"",lyricsSiteName:"J-Lyrics.net",lyricsUrl:"https://j-lyric.net/artist/a058dc1/l04bf0b.html",youtubeUrl:"//youtu.be/MKKgw3X49Bc"}]},{name:"Departure '20 (関西卒業サプライズ2020)",background:"../../res/img/backgrounds/event_2020_surprise_kansai.webp",songs:[{title:"ハイヤーグラウンド",author:"sumika",description:"テレビ朝日土曜ドラマ2019/4Q おっさんずラブ-in the sky- 主題歌 僕のヒーローアカデミア THE MOVIE ヒーローズ:ライジング 主題歌",spotify:"https://open.spotify.com/track/6kRLCygHi8SvEL2MWbfzcg",damNumber:"6244-23",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6244-23",joyNumber:"444410",joyUrl:"https://www.joysound.com/web/search/song/802364",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04b3e1/l04ea8c.html",youtubeUrl:"//youtu.be/xQS6sE5K0pY"},{title:"愛をこめて花束を",author:"Superfly",description:"TBS金曜ドラマ2008/1Q エジソンの母EDSong",spotify:"https://open.spotify.com/track/7CmWXD3w1xOO53AAO4LRVQ",damNumber:"4190-04",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4190-04",joyNumber:"85897",joyUrl:"https://www.joysound.com/web/search/song/113523",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a04cdbd/l00c3b4.html",youtubeUrl:"//youtu.be/gU5oN0KVofU"}]}],2021:[{name:"関東卒業サプライズ2021 〜つながり〜",background:"../../res/img/backgrounds/event_2021_surprise_kanto.webp",songs:[{title:"醒めないで、青春",author:"三月のパンタシア",description:"",spotify:"https://open.spotify.com/track/15BGlIqVN3BAtLuknVNJco",damNumber:"5242-47",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5242-47",joyNumber:"486489",joyUrl:"https://www.joysound.com/web/search/song/831413",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05b552/l051cd4.html",youtubeUrl:"//youtu.be/elNm5EMCz0o"},{title:"Cultivate",author:"(K)NoW_NAME",description:"『灰と幻想のグリムガル』第12話挿入歌",spotify:"https://open.spotify.com/track/5Hu1N7iBqMt9ig24RWsbkg",damNumber:"3762-46",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3762-46",joyNumber:"685712",joyUrl:"https://www.joysound.com/web/search/song/567976",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a054972/l03afba.html",youtubeUrl:"//youtu.be/L1DQFIBVDYk"}]}],2024:[{name:"関東卒業サプライズ2024",background:"../../res/img/backgrounds/event_2024_surprise_kanto.webp",songs:[{title:"はじまり feat. キヨサク from MONGOL800",author:"Mrs. GREEN APPLE",description:"",spotify:"https://open.spotify.com/track/0teqQ0PYqVDyyXJuPOyMhu",damNumber:"6093-89",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6093-89",joyNumber:"428173",joyUrl:"https://www.joysound.com/web/search/song/685515",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05a2d6/l045f78.html",youtubeUrl:"//youtu.be/YH1aOeTX7Vs"},{title:"春が過ぎたら",author:"ケプラ",description:"",spotify:"https://open.spotify.com/track/4bDSl7SY5qGo7KNbNY5mfM",damNumber:"6994-21",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6994-21",joyNumber:"808310",joyUrl:"https://www.joysound.com/web/search/song/895643",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/309236/",youtubeUrl:"//youtu.be/m6uLTHLcc0A"}]},{name:"関西卒業サプライズ2024",theme:"〜Life is Tech ! 20XX〜",background:"../../res/img/backgrounds/event_2024_surprise_kansai.webp",songs:[{title:"バイマイフレンド",author:"bokula.",description:"",spotify:"https://open.spotify.com/track/73qkznNMToO2Xfa7VzyBvm",damNumber:"5423-40",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5423-40",joyNumber:"812225",joyUrl:"https://www.joysound.com/web/search/song/919640",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a063048/l058ac7.html",youtubeUrl:"//youtu.be/IOBny9KrdMg"}]},{name:"Futurealise with Tech !",isBefore2024:!0,songs:[{title:"Letters to me",author:"天月 -あまつき-",description:"",spotify:"",damNumber:"6836-77",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6836-77",joyNumber:"486062",joyUrl:"https://www.joysound.com/web/search/song/848751",lyricsSiteName:"KKBOX",lyricsUrl:"https://www.kkbox.com/jp/ja/song/5ZaL6ATBsZjzv_A3gc",youtubeUrl:"//youtu.be/3iPU-wuB-CE"}]}],2025:[{name:"関東卒業サプライズ2025",background:"../../res/img/backgrounds/event_2025_surprise_kanto.webp",theme:"青春の1ページの続きを",songs:[{title:"風の噂",author:"トンボコープ",description:"Opening movie",spotify:"https://open.spotify.com/track/2IDnT0YKrbBY2ylrJ7Qgva",damNumber:"5479-89",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5479-89",joyNumber:"621406",joyUrl:"https://www.joysound.com/web/search/song/997078",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a06597c/l0602ad.html/",youtubeUrl:"//youtu.be/uz1VrmbfeYs"},{title:"閃光",author:"SUPER BEAVER",description:"Ending movie",spotify:"https://open.spotify.com/track/0yd1s8ZV1jSNc6NDeLfDmz",damNumber:"7397-32",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7397-32",joyNumber:"431023",joyUrl:"https://www.joysound.com/web/search/song/693429",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a050f66/l04985b.html/",youtubeUrl:"//youtu.be/CxTtwJ2yG_E"}]},{name:"関西卒業サプライズ2025",background:"../../res/img/backgrounds/event_2025_surprise_kansai.webp",songs:[{title:"たいせつ",author:"Arakezuri",description:"",spotify:"https://open.spotify.com/track/3gAcEOe1ThH4SI3vBp1ovo",damNumber:"5519-92",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5519-92",joyNumber:"820457",joyUrl:"https://www.joysound.com/web/search/song/1079016",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/337408/",youtubeUrl:"//youtu.be/KgfYofStI64"},{title:"夢でみたような",author:"まなつ",description:"",spotify:"https://open.spotify.com/track/0BJtFZlpRBMwFXKyeqBBkI",damNumber:"",damUrl:"",joyNumber:"",joyUrl:"",lyricsSiteName:"UtaTen",lyricsUrl:"https://utaten.com/lyric/mi20030604/",youtubeUrl:"//youtu.be/ko29ZW-7ylo"}]}],2026:[{name:"関西卒業サプライズ2026",background:"../../res/img/backgrounds/event_2026_surprise_kansai.webp",theme:"どこかで逢いましょう",songs:[{title:"じゃなくて",author:"帝国喫茶",description:"",spotify:"https://open.spotify.com/track/1dQW94DG4BmOyi1MbZgKLz",damNumber:"5392-86",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5392-86",joyNumber:"",joyUrl:"",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/323034/",youtubeUrl:"//youtu.be/9UHSIKEvp1A"},{title:"ハッピーなんて",author:"サバシスター",description:"",spotify:"https://open.spotify.com/track/6YGtuOcwhsWCfbmkyKvQZo",damNumber:"5569-04",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5569-04",joyNumber:"633908",joyUrl:"https://www.joysound.com/web/search/song/1081391",lyricsSiteName:"歌ネット",lyricsUrl:"https://www.uta-net.com/song/366095/",youtubeUrl:"//youtu.be/MV2ki0QdSp0"}]},{name:"関東卒業サプライズ2026",theme:"春を超えてゆけ僕らの青",background:"../../res/img/backgrounds/event_2026_surprise_kanto.webp",songs:[{title:"光を探している",author:"postman",description:"",spotify:"https://open.spotify.com/track/2cRdkIMpEdAZpontqOtS2T",damNumber:"7394-31",damUrl:"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7394-31",joyNumber:"891699",joyUrl:"https://www.joysound.com/web/search/song/785669",lyricsSiteName:"J-Lyric.net",lyricsUrl:"https://j-lyric.net/artist/a05e32c/l045c69.html",youtubeUrl:"//youtu.be/9bvPTYquU0M"},{title:"OURBLUE",author:"漣音 feat.YiXi",description:"運営メンバーのオリジナル曲",spotify:"",damNumber:"",damUrl:"",joyNumber:"",joyUrl:"",lyricsSiteName:"Life is Tech ! Music",lyricsUrl:"original-lyrics/OURBLUE.md",youtubeUrl:""}]}]},Dr={"//":"エラーが出たときは、discriptionに従って修正してください。",$schema:Br,camp:Vr,school:Hr,event:Jr},Yr=["なんと！　ななんと！　なななんと！","Life is Tech ! は気が利くので〜","さすが～ 知らなかった～ すご～い センスあるね〜 そくらてすみたい〜","おおっ！？","I'm a 注意点 Human.","探さない、待つの。","勝手に水分摂らないで","①かわく ②疲れる ③おひるま眠る ④深夜に目覚める ⑤いなくなる"],Me=m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.31c-.223.364-.698.482-1.063.258-2.846-1.74-6.425-2.132-10.643-1.168-.415.094-.83-.16-.926-.575-.094-.415.16-.83.575-.926 4.615-1.056 8.56-.604 11.796 1.375.364.223.482.698.26 1.062zm1.47-3.262c-.28.455-.878.6-1.332.32-3.257-2-8.222-2.583-12.072-1.414-.515.157-1.06-.142-1.217-.657-.156-.514.142-1.06.657-1.217 4.403-1.336 9.873-.687 13.614 1.614.454.28.598.878.35 1.354zm.135-3.41c-3.903-2.318-10.334-2.53-14.1-1.388-.598.182-1.226-.16-1.408-.758-.182-.598.16-1.226.758-1.408 4.316-1.308 11.41-1.055 15.937 1.632.538.318.718 1.01.4 1.547-.32.538-1.01.718-1.587.375z"
    />
  </svg>
`,Mt=m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
`;m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
`;m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
`;const Wr=m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="16 3 21 3 21 8"></polyline>
    <line x1="4" y1="20" x2="21" y2="3"></line>
    <polyline points="21 16 21 21 16 21"></polyline>
    <line x1="15" y1="15" x2="21" y2="21"></line>
    <line x1="4" y1="4" x2="9" y2="9"></line>
  </svg>
`,Kr=m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="17 1 21 5 17 9"></polyline>
    <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
    <polyline points="7 23 3 19 7 15"></polyline>
    <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
  </svg>
`,mt=m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
    <line x1="7" y1="2" x2="7" y2="22"></line>
    <line x1="17" y1="2" x2="17" y2="22"></line>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <line x1="2" y1="7" x2="7" y2="7"></line>
    <line x1="2" y1="17" x2="7" y2="17"></line>
    <line x1="17" y1="17" x2="22" y2="17"></line>
    <line x1="17" y1="7" x2="22" y2="7"></line>
  </svg>
`,Xr=m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
  </svg>
`,Zr=m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
  </svg>
`,Gr=m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
`,Qr=m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
`,Fr=m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
`,eo=m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="23" y1="9" x2="17" y2="15"></line>
    <line x1="17" y1="9" x2="23" y2="15"></line>
  </svg>
`,to=m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    ></polygon>
  </svg>
`,ro=m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
`;m`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
`;var oo=Object.defineProperty,so=Object.getOwnPropertyDescriptor,Ne=(r,e,t,o)=>{for(var s=o>1?void 0:o?so(e,t):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(e,t,s):n(s))||s);return o&&s&&oo(e,t,s),s};let X=class extends _{constructor(){super(...arguments),this.isPlaying=!1,this.isMobile=!1,this.handleResize=()=>{this.isPlaying&&this.reportPlaceholderPosition()}}handlePlay(){this.dispatchEvent(new CustomEvent("play-song",{detail:{song:this.song},bubbles:!0,composed:!0}))}handleLinkClick(r){const t=r.target.closest("a");if(t){r.stopPropagation();const o=t.getAttribute("href");o&&o.toLowerCase().endsWith(".md")&&(r.preventDefault(),this.dispatchEvent(new CustomEvent("open-markdown",{detail:{url:o},bubbles:!0,composed:!0})))}}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.handleResize)}updated(r){r.has("isPlaying")&&this.isPlaying&&setTimeout(()=>this.reportPlaceholderPosition(),50)}reportPlaceholderPosition(){var e;const r=(e=this.shadowRoot)==null?void 0:e.getElementById("video-placeholder");if(r){const o=r.getBoundingClientRect().top+window.scrollY;this.dispatchEvent(new CustomEvent("video-position-changed",{detail:{top:o},bubbles:!0,composed:!0}))}}render(){var i;const r=this.song.description||"",e=(i=this.song.youtubeUrl)==null?void 0:i.match(/(?:\/\/|https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/),t=e?e[1]:null,o=this.isMobile&&this.isPlaying&&t,s=t?`https://www.youtube.com/embed/${t}?autoplay=1&playsinline=1&rel=0&modestbranding=1`:"";return m`
      <div
        class="lit-song ${t?"lit-song--playable":""}"
        @click=${t&&!this.isMobile?this.handlePlay:null}
      >
        <div class="lit-song__header">
          <div class="lit-song__title-wrap">
            ${this.isMobile?m`
                  <div class="lit-song__title-row">
                    <h4 class="lit-song__title">${this.song.title}</h4>
                    ${this.song.spotify?m`
                          <a
                            href="${this.song.spotify}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="lit-btn-action lit-btn-action--spotify"
                            title="Play on Spotify"
                            @click=${n=>n.stopPropagation()}
                          >
                            ${Me}
                          </a>
                        `:""}
                  </div>
                `:m`
                  <h4 class="lit-song__title">${this.song.title}</h4>
                  ${this.song.spotify?m`
                        <a
                          href="${this.song.spotify}"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="lit-btn-action lit-btn-action--spotify"
                          title="Play on Spotify"
                          @click=${n=>n.stopPropagation()}
                        >
                          ${Me}
                        </a>
                      `:""}
                `}
            <span class="lit-song__author">${this.song.author}</span>
          </div>
          <div class="lit-song__actions">
            ${t&&!o?m`
                  <button
                    class="lit-btn-action lit-btn-action--play"
                    title="Play on YouTube"
                    @click=${n=>{n.stopPropagation(),this.handlePlay()}}
                  >
                    ${Mt}
                  </button>
                `:""}
          </div>
        </div>
        <div class="lit-song__desc" @click=${this.handleLinkClick}>
          ${r?m`<div .innerHTML=${y.parse(r,{breaks:!0})}></div>`:""}
          <div
            style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; font-size: 0.8rem; color: var(--color-text-secondary);"
          >
            <div>
              [DAM]
              ${this.song.damNumber?this.song.damUrl?m`<a href="${this.song.damUrl}" target="_blank" rel="noopener"
                      >${this.song.damNumber}</a
                    >`:this.song.damNumber:"404 NotFound"}
              [JOYSOUND]
              ${this.song.joyNumber?this.song.joyUrl?m`<a href="${this.song.joyUrl}" target="_blank" rel="noopener"
                      >${this.song.joyNumber}</a
                    >`:this.song.joyNumber:"404 NotFound"}
            </div>
            ${this.song.lyricsUrl?m`
                  <div>
                    [歌詞]
                    <a href="${this.song.lyricsUrl}" target="_blank" rel="noopener"
                      >${this.song.lyricsSiteName||"歌詞サイト"}</a
                    >
                  </div>
                `:""}
            ${this.song.youtubeUrl&&!t?m`
                  <div>
                    [動画]
                    <a href="${this.song.youtubeUrl}" target="_blank" rel="noopener">YouTube</a>
                  </div>
                `:""}
          </div>
        </div>
        ${o?m`
              <div class="lit-song__embed">
                <iframe
                  src="${s}"
                  title="${this.song.title}"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            `:""}
      </div>
    `}};X.styles=V`
    :host {
      display: block;
      position: relative;
      transition: margin-bottom 0.3s ease;
    }

    .lit-song {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      transition: var(--transition-fast);
      background: #fafafa;
      position: relative;
    }

    .lit-song--playable {
      cursor: pointer;
    }

    .lit-song:hover {
      background: var(--color-surface);
      box-shadow: var(--shadow-sm);
      border-color: var(--color-blue);
    }

    .lit-song__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .lit-song__title-wrap {
      display: flex;
      align-items: baseline;
      gap: 0.8rem;
    }

    .lit-song__title-row {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      min-width: 0;
    }

    .lit-song__title {
      font-size: 1.25rem;
      font-weight: bold;
      margin: 0;
      color: var(--color-text-primary);
    }

    .lit-song__author {
      font-size: 0.9rem;
      color: var(--color-text-secondary);
      margin: 0;
    }

    .lit-song__actions {
      display: flex;
      gap: 8px;
    }

    .lit-btn-action {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--color-text-secondary);
      transition: var(--transition-fast);
    }

    .lit-btn-action:hover {
      transform: scale(1.1);
    }

    .lit-btn-action--play:hover {
      color: var(--color-red);
    }

    /* No mobile-specific play-button overrides — use base .lit-btn-action styles */

    .lit-btn-action--spotify {
      color: #1ed760;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
    }

    .lit-btn-action--spotify:hover {
      color: #1fdf64;
    }

    .lit-song__desc {
      font-size: 0.85rem;
      color: var(--color-text-secondary);
    }

    .lit-song__desc p {
      margin: 0.2rem 0;
    }

    .lit-song__desc a {
      color: var(--color-blue);
      text-decoration: none;
    }

    .lit-song__desc a:hover {
      text-decoration: underline;
    }

    .lit-song__embed {
      margin-top: 1rem;
      width: 100%;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      border-radius: var(--radius-sm);
      background: #000;
    }

    .lit-song__embed iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
    }

    @media (max-width: 768px) {
      .lit-song__title {
        font-size: 1.1rem; /* Reduced from 1.25rem */
      }
      .lit-song__author {
        font-size: 0.85rem;
      }
      .lit-song__title-wrap {
        flex-direction: column;
        gap: 0.25rem;
        align-items: flex-start;
      }
      .lit-song__title-row {
        width: 100%;
      }
    }
    :host([mobile]) .lit-song {
      border: none;
      background: transparent;
      border-radius: 0;
      padding: 0.75rem 0;
      box-shadow: none;
    }

    :host([mobile]) .lit-song:hover {
      background: transparent;
      box-shadow: none;
      border-color: var(--color-border);
    }

    /* Mobile: enclose play button in a circular border */
    :host([mobile]) .lit-btn-action--play {
      border-radius: 50%;
      border: 1px solid var(--color-text-secondary);
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      background: transparent;
      color: var(--color-text-secondary);
    }
  `;Ne([k({type:Object})],X.prototype,"song",2);Ne([k({type:Boolean,attribute:"is-playing"})],X.prototype,"isPlaying",2);Ne([k({type:Boolean})],X.prototype,"isMobile",2);X=Ne([H("lit-song-item")],X);var io=Object.defineProperty,no=Object.getOwnPropertyDescriptor,le=(r,e,t,o)=>{for(var s=o>1?void 0:o?no(e,t):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(e,t,s):n(s))||s);return o&&s&&io(e,t,s),s};let q=class extends _{constructor(){super(...arguments),this.playingSongTitle="",this.playingEventName="",this.isMobile=!1}render(){const r="/music/";let e="";return this.event.background?e=this.event.background.replace("../../res/",`${r}res/`):e=this.event.isBefore2024===!0?`${r}res/img/backgrounds/common_v1.webp`:`${r}res/img/backgrounds/common_v2.webp`,m`
      <article class="lit-event-card">
        <header
          class="lit-event-card__header"
          style=${e?`background-image: url('${e}')`:""}
        >
          <div class="lit-event-card__title-wrap">
            <h3 class="lit-event-card__year">${this.event.year}</h3>
            <h2 class="lit-event-card__title">${this.event.name}</h2>
            ${this.event.theme?m`<p class="lit-event-card__theme">${this.event.theme}</p>`:""}
          </div>
        </header>
        <div class="lit-event-card__body">
          ${this.event.songs.map(t=>m`
              <lit-song-item
                .song=${t}
                .isMobile=${this.isMobile}
                ?mobile=${this.isMobile}
                ?is-playing=${this.playingSongTitle===t.title&&this.playingEventName===this.event.name}
                @play-song=${o=>this.handlePlaySongInEvent(o,t)}
              >
              </lit-song-item>
            `)}
        </div>
      </article>
    `}handlePlaySongInEvent(r,e){r.stopPropagation(),this.dispatchEvent(new CustomEvent("play-song-queue",{detail:{song:e,queue:this.event.songs,eventName:this.event.name},bubbles:!0,composed:!0}))}};q.styles=V`
    :host {
      display: block;
      margin-bottom: 3rem;
    }

    .lit-event-card {
      background: var(--color-surface);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-md);
      overflow: hidden;
    }

    .lit-event-card__header {
      aspect-ratio: 16 / 9;
      background-size: cover;
      background-position: center;
      position: relative;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 2rem;
      width: 100%;
      box-sizing: border-box;
    }

    .lit-event-card__header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 1;
    }

    .lit-event-card__title-wrap {
      position: relative;
      z-index: 2;
      border-left: 4px solid white;
      padding-left: 1rem;
      margin-left: 1rem;
    }

    .lit-event-card__year {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--color-yellow);
      margin: 0;
    }

    .lit-event-card__title {
      font-size: 2rem;
      margin: 0;
      font-weight: 900;
    }

    .lit-event-card__theme {
      font-size: 1rem;
      font-style: italic;
      margin-top: 0.5rem;
      opacity: 0.9;
    }

    .lit-event-card__body {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    @media (max-width: 768px) {
      .lit-event-card__title {
        font-size: 1.5rem; /* Reduced from 2rem for mobile */
      }
      .lit-event-card__theme {
        font-size: 0.85rem;
      }
      .lit-event-card__year {
        font-size: 1rem;
      }
      .lit-event-card__header {
        padding: 1.5rem 0;
      }
    }
    @media (max-width: 768px) {
      lit-song-item {
        display: block;
        padding: 0; /* let inner component control its vertical spacing */
      }
      lit-song-item:not(:last-child) {
        border-bottom: 1px solid var(--color-border);
      }
    }
  `;le([k({type:Object})],q.prototype,"event",2);le([k({type:String})],q.prototype,"playingSongTitle",2);le([k({type:String})],q.prototype,"playingEventName",2);le([k({type:Boolean})],q.prototype,"isMobile",2);q=le([H("lit-event-card")],q);var ao=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,$=(r,e,t,o)=>{for(var s=o>1?void 0:o?lo(e,t):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(e,t,s):n(s))||s);return o&&s&&ao(e,t,s),s};let j=class extends _{constructor(){super(),this.eventName="",this.queue=[],this.currentIndex=0,this.isPlaying=!1,this.isMVMode=!1,this.isShuffle=!1,this.isRepeat=!1,this.volume=100,this.currentTime=0,this.duration=0,this.ytPlayer=null,this.skipNextUpdateLoad=!1,this.isSeeking=!1,this.handleKeyDown=r=>{r.code==="Space"&&(r.preventDefault(),this.togglePlay())},this.isMVMode=window.innerWidth<=768,this.handleResize=this.handleResize.bind(this)}handleResize(){window.innerWidth<=768&&!this.isMVMode&&(this.isMVMode=!0,this.dispatchEvent(new CustomEvent("mv-mode-changed",{detail:{active:!0},bubbles:!0,composed:!0})))}playSongImmediately(r,e){this.queue=r,this.currentIndex=e,this.skipNextUpdateLoad=!0,this.requestUpdate(),this.loadCurrentSong()}async updated(r){r.has("isMVMode")&&(this.updatePlayerSize(),this.updateIframeAllow()),(r.has("queue")||r.has("currentIndex"))&&(this.skipNextUpdateLoad?this.skipNextUpdateLoad=!1:this.queue.length>0?this.loadCurrentSong():this.ytPlayer&&this.ytPlayer.stopVideo&&this.ytPlayer.stopVideo())}updatePlayerSize(){this.ytPlayer&&typeof this.ytPlayer.setSize=="function"&&(this.isMVMode?this.ytPlayer.setSize(640,360):this.ytPlayer.setSize(0,0))}updateIframeAllow(){var e;const r=(e=this.shadowRoot)==null?void 0:e.querySelector("iframe");r&&(this.isMVMode?r.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"):r.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"))}toggleMVMode(){this.isMVMode=!this.isMVMode,this.dispatchEvent(new CustomEvent("mv-mode-changed",{detail:{active:this.isMVMode},bubbles:!0,composed:!0}))}loadCurrentSong(){this.currentTime=0,this.duration=0,this.progressInterval&&clearInterval(this.progressInterval);const r=this.queue[this.currentIndex];if(!r)return;const t=(r.youtubeUrl||"").match(/(?:\/\/|https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/),o=t?t[1]:null;o?(this.ytPlayer?this.ytPlayer.loadVideoById(o):this.initYouTubePlayer(o),this.isPlaying=!0):(this.ytPlayer&&typeof this.ytPlayer.pauseVideo=="function"&&this.ytPlayer.pauseVideo(),this.isPlaying=!1)}initYouTubePlayer(r){var t;if(!window.YT||!window.YT.Player){setTimeout(()=>this.initYouTubePlayer(r),500);return}const e=(t=this.shadowRoot)==null?void 0:t.querySelector("#yt-player-container");e&&(this.ytPlayer=new window.YT.Player(e,{height:"0",width:"0",videoId:r,playerVars:{autoplay:1,controls:1,rel:0,playsinline:1},events:{onReady:this.onPlayerReady.bind(this),onStateChange:this.onPlayerStateChange.bind(this)}}))}onPlayerReady(r){this.updatePlayerSize(),r.target.setVolume(this.volume),r.target.playVideo()}onPlayerStateChange(r){r.data===1?(this.isPlaying=!0,r.target.setVolume(this.volume),this.duration=this.ytPlayer.getDuration(),this.progressInterval=setInterval(()=>{this.isSeeking||(this.currentTime=this.ytPlayer.getCurrentTime())},250)):r.data===2?(this.isPlaying=!1,clearInterval(this.progressInterval)):r.data===0&&(this.isPlaying=!1,clearInterval(this.progressInterval),this.isRepeat?this.ytPlayer.playVideo():this.handleNext())}togglePlay(){this.ytPlayer&&(this.isPlaying?this.ytPlayer.pauseVideo():this.ytPlayer.playVideo(),this.updatePlayerSize())}isSongPlayable(r){const e=this.queue[r];return e?!!(e.youtubeUrl||"").match(/(?:\/\/|https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/):!1}handleNext(){if(this.isShuffle&&!this.isRepeat){const t=this.queue.map((o,s)=>s).filter(o=>this.isSongPlayable(o)&&o!==this.currentIndex);if(t.length>0){const o=t[Math.floor(Math.random()*t.length)];this.dispatchEvent(new CustomEvent("index-changed",{detail:{index:o},bubbles:!0,composed:!0}))}return}let r=this.currentIndex;const e=this.currentIndex;for(;;){if(r++,r>=this.queue.length)if(this.isRepeat)r=0;else{this.isPlaying=!1,this.ytPlayer&&this.ytPlayer.stopVideo&&this.ytPlayer.stopVideo();return}if(r===e)return;if(this.isSongPlayable(r)){this.dispatchEvent(new CustomEvent("index-changed",{detail:{index:r},bubbles:!0,composed:!0}));return}}}handlePrev(){if(this.ytPlayer&&this.ytPlayer.getCurrentTime&&this.ytPlayer.getCurrentTime()>3){this.ytPlayer.seekTo(0);return}if(this.isShuffle){this.handleNext();return}let r=this.currentIndex;const e=this.currentIndex;for(;;){if(r--,r<0)if(this.isRepeat)r=this.queue.length-1;else return;if(r===e)return;if(this.isSongPlayable(r)){this.dispatchEvent(new CustomEvent("index-changed",{detail:{index:r},bubbles:!0,composed:!0}));return}}}handleVolumeChange(r){const e=parseInt(r.target.value);this.volume=e,this.ytPlayer&&this.ytPlayer.setVolume&&this.ytPlayer.setVolume(this.volume)}formatTime(r){if(isNaN(r)||r===0)return"0:00";const e=Math.round(r),t=Math.floor(e/60),o=e%60;return`${t}:${o.toString().padStart(2,"0")}`}handleSeek(r){if(!this.duration)return;const e=parseFloat(r.target.value);this.currentTime=e,this.ytPlayer.seekTo(e)}handleSeekStart(){this.isSeeking=!0}handleSeekEnd(r){this.isSeeking=!1,this.handleSeek(r)}firstUpdated(){this.dispatchEvent(new CustomEvent("mv-mode-changed",{detail:{active:this.isMVMode},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("resize",this.handleResize),this.progressInterval&&(clearInterval(this.progressInterval),this.progressInterval=void 0),this.ytPlayer&&(typeof this.ytPlayer.stopVideo=="function"&&this.ytPlayer.stopVideo(),typeof this.ytPlayer.destroy=="function"&&this.ytPlayer.destroy(),this.ytPlayer=null)}render(){var s;const r=this.queue[this.currentIndex],e=(s=r==null?void 0:r.youtubeUrl)==null?void 0:s.match(/(?:\/\/|https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/),t=e?e[1]:null,o=t?`https://img.youtube.com/vi/${t}/0.jpg`:"";return m`
      <div class="lit-player ${this.isMVMode?"mv-mode":""}">
        <!-- YT Container FIRST (TOP) -->
        <div
          class="lit-player__yt ${this.isMVMode&&this.queue.length>0?"lit-player__yt--visible":""}"
        >
          <div id="yt-player-container"></div>
        </div>

        <div class="lit-player__container">
          <div class="lit-player__info">
            ${o?m`<img class="lit-player__thumb" src="${o}" alt="Thumbnail" />`:""}
            <div class="lit-player__text">
              <p class="lit-player__event">${(r==null?void 0:r.eventName)||""}</p>
              <p class="lit-player__title">${(r==null?void 0:r.title)||""}</p>
              <p class="lit-player__author">${(r==null?void 0:r.author)||""}</p>
            </div>
            ${r!=null&&r.spotify?m`
                  <a
                    href="${r.spotify}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="lit-player__spotify"
                    title="Open on Spotify"
                  >
                    ${Me}
                  </a>
                `:""}
          </div>

          <div class="lit-player__controls">
            <div class="lit-player__control-buttons">
              <button
                class="lit-btn-control"
                @click=${()=>this.isShuffle=!this.isShuffle}
                style="color: ${this.isShuffle?"var(--color-blue)":""}"
                title="Shuffle"
              >
                ${Wr}
              </button>
              <button
                class="lit-btn-control"
                @click=${this.handlePrev}
                ?disabled=${this.currentIndex===0&&!this.isShuffle}
              >
                ${Xr}
              </button>
              <button
                class="lit-btn-control lit-btn-control--play"
                @click=${this.togglePlay}
                title=${this.isPlaying?"Pause":"Play"}
              >
                ${this.isPlaying?Gr:Mt}
              </button>
              <button
                class="lit-btn-control"
                @click=${this.handleNext}
                ?disabled=${this.currentIndex>=this.queue.length-1&&!this.isRepeat&&!this.isShuffle}
              >
                ${Zr}
              </button>
              <button
                class="lit-btn-control"
                @click=${()=>this.isRepeat=!this.isRepeat}
                style="color: ${this.isRepeat?"var(--color-blue)":""}"
                title="Repeat One"
              >
                ${Kr}
              </button>
              <!-- Show MV button in controls on mobile only (since volume is hidden) -->
              <button
                class="lit-btn-control lit-btn-control--mv ${this.isMVMode?"active":""} mobile-only-mv"
                @click=${this.toggleMVMode}
                title="Toggle MV Mode"
                style="display: none;"
              >
                ${mt}
              </button>
            </div>
            <div class="lit-player__progress-container">
              <span class="time">${this.formatTime(this.currentTime)}</span>
              <input
                type="range"
                class="progress-bar"
                min="0"
                max=${this.duration||1}
                .value=${this.currentTime}
                @input=${this.handleSeek}
                @mousedown=${this.handleSeekStart}
                @mouseup=${this.handleSeekEnd}
                @touchstart=${this.handleSeekStart}
                @touchend=${this.handleSeekEnd}
                style="background: linear-gradient(to right, var(--color-text-primary) ${this.duration?this.currentTime/this.duration*100:0}%, var(--color-border) ${this.duration?this.currentTime/this.duration*100:0}%);"
              />
              <span class="time">${this.formatTime(this.duration)}</span>
            </div>
          </div>
          <div class="lit-player__volume">
            <button
              class="lit-btn-control lit-btn-control--mv ${this.isMVMode?"active":""}"
              @click=${this.toggleMVMode}
              title="Toggle MV Mode"
              style="width: 32px; height: 32px;"
            >
              ${mt}
            </button>
            <div style="display: flex; align-items: center; gap: 8px;">
              ${this.volume===0?eo:this.volume<50?Fr:Qr}
              <input
                type="range"
                min="0"
                max="100"
                .value=${this.volume}
                @input=${this.handleVolumeChange}
              />
            </div>
          </div>
        </div>
      </div>
    `}};j.styles=V`
    :host {
      display: block;
    }

    .lit-player {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      pointer-events: none;
      /* Main container is now a transparent overlay to allow fixed positioning of children */
    }

    .lit-player__container {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 80px;
      background: var(--color-surface);
      box-shadow: var(--shadow-lg);
      border-top: 1px solid var(--color-border);
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      padding: 0 16px;
      gap: 24px;
      pointer-events: auto;
    }

    .lit-player__info {
      display: flex;
      align-items: center;
      gap: 16px;
      overflow: hidden;
      min-width: 0;
    }

    .lit-player__thumb {
      width: 60px;
      height: 45px;
      border-radius: 4px;
      object-fit: cover;
      background: #000;
    }

    .lit-player__text {
      display: flex;
      flex-direction: column;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .lit-player__title {
      font-weight: bold;
      font-size: 1rem;
      color: var(--color-text-primary);
      margin: 0;
    }

    .lit-player__author {
      font-size: 0.8rem;
      color: var(--color-text-secondary);
      margin: 0;
    }

    .lit-player__controls {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      width: 420px;
    }

    .lit-player__control-buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .lit-btn-control {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--color-text-secondary);
      transition: var(--transition-fast);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .lit-btn-control:hover {
      background: rgba(0, 0, 0, 0.05);
      color: var(--color-text-primary);
    }

    .lit-btn-control--play {
      font-size: 2rem;
      color: var(--color-red);
      background-color: transparent;
      border-radius: 0;
      width: auto;
      height: auto;
    }
    .lit-btn-control--play {
      animation: color-fade 12s infinite;
    }
    @keyframes color-fade {
      0% {
        color: var(--color-red);
      }
      20% {
        color: var(--color-yellow);
      }
      40% {
        color: var(--color-green);
      }
      60% {
        color: var(--color-blue);
      }
      80% {
        color: var(--color-purple);
      }
      100% {
        color: var(--color-red);
      }
    }
    .lit-btn-control--play:hover {
      opacity: 0.8;
      transform: scale(1.1);
      background-color: transparent;
    }

    .lit-player__progress-container {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 8px;
    }

    .progress-bar {
      flex: 1;
      -webkit-appearance: none;
      appearance: none;
      height: 4px;
      background: transparent; /* The gradient will be applied via inline style */
      border-radius: 2px;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .progress-bar:hover {
      opacity: 0.9;
    }

    .progress-bar::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      height: 4px;
    }
    .progress-bar::-moz-range-track {
      -moz-appearance: none;
      height: 4px;
    }

    .progress-bar::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      margin-top: -4px; /* (track-height - thumb-height) / 2 */
      width: 12px;
      height: 12px;
      background: var(--color-text-primary);
      border-radius: 50%;
      border: none;
      transition: transform 0.2s;
    }
    .progress-bar:hover::-webkit-slider-thumb {
      transform: scale(1.2);
    }

    .progress-bar::-moz-range-thumb {
      width: 12px;
      height: 12px;
      background: var(--color-text-primary);
      border-radius: 50%;
      border: none;
      transition: transform 0.2s;
    }
    .progress-bar:hover::-moz-range-thumb {
      transform: scale(1.2);
    }

    .time {
      font-size: 0.75rem;
      color: var(--color-text-secondary);
      min-width: 35px;
      text-align: center;
    }

    .lit-player__yt {
      display: none;
      width: 100%;
      height: calc(100vh - 120px);
      background: #000;
    }
    .lit-player__yt--visible {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: calc(100vh - 80px);
      z-index: 100;
      box-shadow: -4px 0 16px rgba(0, 0, 0, 0.2);
      pointer-events: auto;
      background: #000;
    }
    @media (max-width: 768px) {
      .lit-player {
        position: absolute; /* Scroll with the document */
        height: 100%;
      }
      .lit-player__yt--visible {
        width: 100vw;
        height: calc(100vw * 9 / 16);
        top: var(--video-offset-top, 0px);
        bottom: auto;
        box-shadow: none;
      }
    }
    .lit-player__yt--visible iframe {
      width: 100%;
      height: 100%;
    }

    .lit-btn-control--mv {
      font-size: 1.25rem;
      width: auto;
    }
    .lit-btn-control--mv.active {
      color: var(--color-blue);
    }
    .lit-player__volume {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      color: var(--color-text-secondary);
      min-width: 0;
    }
    .lit-player__volume input {
      width: 80px;
      cursor: pointer;
    }
    .active-toggle {
      color: var(--color-blue) !important;
    }

    .lit-player__event {
      font-size: 0.75rem;
      color: var(--color-text-secondary);
      margin: 0;
      opacity: 0.8;
    }
    .lit-player__spotify {
      color: #1db954;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      margin-left: 0.5rem;
      transition: transform 0.2s;
      text-decoration: none;
    }
    .lit-player__spotify:hover {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      .lit-player__container {
        display: none !important; /* Hide player bar completely on mobile */
      }
    }
  `;$([k({type:String})],j.prototype,"eventName",2);$([k({type:Array})],j.prototype,"queue",2);$([k({type:Number})],j.prototype,"currentIndex",2);$([f()],j.prototype,"isPlaying",2);$([f()],j.prototype,"isMVMode",2);$([f()],j.prototype,"isShuffle",2);$([f()],j.prototype,"isRepeat",2);$([f()],j.prototype,"volume",2);$([f()],j.prototype,"currentTime",2);$([f()],j.prototype,"duration",2);j=$([H("lit-player")],j);var co=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,Ct=(r,e,t,o)=>{for(var s=o>1?void 0:o?ho(e,t):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(e,t,s):n(s))||s);return o&&s&&co(e,t,s),s};let we=class extends _{constructor(){super(...arguments),this.isMVMode=!1}render(){const r="/music/";return m`
      <footer class="lit-footer ${this.isMVMode?"mv-active":""}">
        <div class="lit-footer__inner">
          <p id="thanks">
            ${Array.from("Thanks for visiting!").map(e=>m`
                <span class="colorful" style="${e===" "?"margin-right:0.5em;":""}"
                  >${e}</span
                >
              `)}
          </p>
          <p>
            Do you have any information?<br />
            Please tell us on
            <a
              href="https://www.facebook.com/LiTmusic-182225395894104"
              target="_blank"
              rel="noopener"
              >Facebook</a
            >,<br />
            or<br />
            You can check it on
            <a href="https://github.com/lit-kansai-members/music" target="_blank" rel="noopener">
              <img src="${r}res/img/github-mark.svg" alt="GitHub" class="icon-gh" /> GitHub </a
            >.<br />
            <br />
            <a href="${r}post/">曲の掲載をリクエストする</a><br />
            <span style="color: var(--color-gray)">(Githubアカウントが必要です)</span><br />
            <br />
            <small>This project is unofficial.</small>
          </p>
          <p class="copyright">&copy; Life is Tech ! Kansai Members</p>
        </div>
      </footer>
    `}};we.styles=V`
    :host {
      display: block;
    }

    .lit-footer {
      background: #f1f5f9;
      padding: 3rem 1rem;
      text-align: center;
      margin-top: 4rem;
      border-top: 1px solid #e2e8f0;
      color: var(--color-text-secondary);
      width: 100%;
      box-sizing: border-box;
      transition:
        width 0.3s ease,
        padding-right 0.3s ease;
    }

    .lit-footer.mv-active {
      width: 50%;
      padding-right: 1rem;
    }

    @media (max-width: 768px) {
      .lit-footer.mv-active {
        width: 100%;
        padding-right: 1rem;
      }
    }

    .lit-footer__inner {
      max-width: 800px;
      margin: 0 auto;
    }

    #thanks {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 2rem;
      text-transform: uppercase;
      letter-spacing: 0;
    }

    .copyright {
      font-size: 0.8rem;
      margin-top: 2rem;
    }

    .colorful {
      display: inline-block;
      transition: transform 0.3s;
    }

    .colorful:hover {
      transform: translateY(-5px);
    }

    .colorful:nth-child(6n + 1) {
      color: var(--color-red);
    }
    .colorful:nth-child(6n + 2) {
      color: var(--color-yellow);
    }
    .colorful:nth-child(6n + 3) {
      color: var(--color-green);
    }
    .colorful:nth-child(6n + 4) {
      color: var(--color-blue);
    }
    .colorful:nth-child(6n + 5) {
      color: var(--color-orange);
    }
    .colorful:nth-child(6n + 0) {
      color: var(--color-purple);
    }

    .icon-gh {
      height: 1.2em;
      vertical-align: middle;
    }

    .lit-footer a {
      color: var(--color-blue);
      text-decoration: none;
      font-weight: bold;
    }

    .lit-footer a:hover {
      text-decoration: underline;
    }
  `;Ct([k({type:Boolean})],we.prototype,"isMVMode",2);we=Ct([H("lit-footer")],we);var uo=Object.defineProperty,po=Object.getOwnPropertyDescriptor,D=(r,e,t,o)=>{for(var s=o>1?void 0:o?po(e,t):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(e,t,s):n(s))||s);return o&&s&&uo(e,t,s),s};let P=class extends _{constructor(){super(...arguments),this.introProgress=0,this.activeTab="camp",this.isMobile=!1,this.splashActive=!0,this.isAtPageTop=!0,this.isMVMode=!1}render(){const r="/music/",e=this.isAtPageTop;return m`
      <header
        class="lit-header ${this.isMVMode?"mv-active":""}"
        style="--intro-progress: ${this.introProgress};"
      >
        <div class="lit-header__inner">
          <div class="lit-header__logos ${this.splashActive?"splash-active":""}">
            <img src="${r}res/img/mark.svg" alt="Mark" id="mark" />
            <img src="${r}res/img/logo.svg" alt="Life is Tech!" id="logo" />
            <img src="${r}res/img/music.svg" alt="music" id="music" />
          </div>

          <div class="lit-tabs">
            <button
              class="lit-tabs__button ${this.activeTab==="camp"?"lit-tabs__button--active":""}"
              @click=${()=>this.dispatchEvent(new CustomEvent("tab-changed",{detail:"camp"}))}
            >
              Camp
            </button>
            <button
              class="lit-tabs__button ${this.activeTab==="school"?"lit-tabs__button--active":""}"
              @click=${()=>this.dispatchEvent(new CustomEvent("tab-changed",{detail:"school"}))}
            >
              School
            </button>
            <button
              class="lit-tabs__button ${this.activeTab==="event"?"lit-tabs__button--active":""}"
              @click=${()=>this.dispatchEvent(new CustomEvent("tab-changed",{detail:"event"}))}
            >
              Event
            </button>
          </div>

          <button
            class="lit-scroll-down ${e?"":"lit-scroll-down--hidden"}"
            @click=${()=>this.dispatchEvent(new CustomEvent("scroll-click"))}
            aria-label="Scroll down"
          >
            <span>Scroll Down</span>
            <span class="lit-scroll-down__chevron" aria-hidden="true">
              <span class="lit-scroll-down__chevron-line"></span>
              <span class="lit-scroll-down__chevron-line"></span>
            </span>
          </button>
        </div>
      </header>
    `}};P.styles=V`
    :host {
      display: block;
    }

    .lit-header {
      background: var(--color-surface);
      box-shadow: var(--shadow-sm);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      height: calc((1 - var(--intro-progress, 0)) * 100vh + var(--intro-progress, 0) * 128px);
      transition:
        box-shadow var(--transition-fast),
        width 0.3s ease,
        padding-right 0.3s ease;
      overflow: hidden;
    }

    .lit-header.mv-active {
      width: 50%;
      padding-right: 1rem;
      box-sizing: border-box;
    }

    @media (max-width: 768px) {
      .lit-header.mv-active {
        width: 100%;
        padding-right: 0;
      }
    }

    :host([mobile]) .lit-header__inner {
      justify-content: center;
      padding-top: 0;
    }

    .lit-header__inner {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .lit-header__logos {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      padding: 0;
      height: 56px;
      max-width: 90vw;
      transform: scale(calc(1 - (var(--intro-progress, 0) * 0.28)));
      transform-origin: center;
      margin-bottom: calc(
        (1 - var(--intro-progress, 0)) * 1.5rem + var(--intro-progress, 0) * 0.35rem
      );
    }

    .lit-header__logos img {
      height: 100%;
    }

    .lit-header__logos #logo,
    .lit-header__logos #music {
      transition:
        opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1),
        transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
      opacity: 1;
      transform: translateX(0);
    }

    .lit-header__logos.splash-active #logo {
      opacity: 0;
      transform: translateX(-20px);
    }

    .lit-header__logos.splash-active #music {
      opacity: 0;
      transform: translateX(20px);
    }

    .lit-scroll-down {
      position: absolute;
      bottom: 150px;
      left: 50%;
      transform: translateX(-50%);
      border: none;
      background: transparent;
      color: var(--color-text-secondary);
      padding: 0.2rem 0.4rem;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 0.1rem;
      cursor: pointer;
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.03em;
      line-height: 1;
      transition:
        opacity var(--transition-fast),
        transform var(--transition-fast);
      opacity: 0.62;
    }

    .lit-scroll-down:hover {
      transform: translateX(-50%) translateY(-1px);
      opacity: calc((1 - var(--intro-progress, 0)) * 0.82);
    }

    .lit-scroll-down__chevron {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 1px;
      margin-top: 1px;
    }

    .lit-scroll-down__chevron-line {
      width: 6px;
      height: 6px;
      border-right: 1px solid currentColor;
      border-bottom: 1px solid currentColor;
      transform: rotate(45deg);
    }

    .lit-scroll-down--hidden {
      opacity: 0;
      pointer-events: none;
      transform: translateX(-50%);
    }

    .lit-tabs {
      display: flex;
      gap: 8px;
      background: #f1f5f9;
      padding: 4px;
      border-radius: var(--radius-full);
    }

    .lit-tabs__button {
      border: none;
      background: transparent;
      padding: 8px 24px;
      font-size: 1rem;
      font-weight: bold;
      color: var(--color-text-secondary);
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: var(--transition-fast);
    }

    .lit-tabs__button--active {
      background: var(--color-surface);
      color: var(--color-blue);
      box-shadow: var(--shadow-sm);
    }

    .lit-tabs__button:hover:not(.lit-tabs__button--active) {
      color: var(--color-text-primary);
    }

    @media (max-width: 768px) {
      :host([mobile]) .lit-header__logos {
        height: 56px;
        max-width: 84vw;
        transform: scale(0.72);
        margin-bottom: 0.35rem;
      }

      :host([mobile]) .lit-header__logos img {
        height: 100%;
      }

      :host([mobile]) .lit-header__logos.splash-active #mark,
      :host([mobile]) .lit-header__logos.splash-active #logo,
      :host([mobile]) .lit-header__logos.splash-active #music {
        /* Allow default splash animation (opacity and translateX) to work on mobile */
      }

      :host([mobile]) .lit-scroll-down {
        position: relative;
        bottom: auto;
        left: auto;
        transform: none;
        margin-top: 2.5rem;
        display: inline-flex;
      }

      :host([mobile]) .lit-scroll-down--hidden {
        display: none;
      }
    }
  `;D([k({type:Number})],P.prototype,"introProgress",2);D([k({type:String})],P.prototype,"activeTab",2);D([k({type:Boolean,reflect:!0,attribute:"mobile"})],P.prototype,"isMobile",2);D([k({type:Boolean})],P.prototype,"splashActive",2);D([k({type:Boolean})],P.prototype,"isAtPageTop",2);D([k({type:Boolean})],P.prototype,"isMVMode",2);P=D([H("lit-header")],P);var mo=Object.defineProperty,yo=Object.getOwnPropertyDescriptor,ce=(r,e,t,o)=>{for(var s=o>1?void 0:o?yo(e,t):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(e,t,s):n(s))||s);return o&&s&&mo(e,t,s),s};const dt=["var(--color-red)","var(--color-yellow)","var(--color-green)","var(--color-blue)","var(--color-orange)","var(--color-purple)"];function bo(r){return"a-"+r.toString().replace(/[!-/:-@\\[-`{-~ \s]/g,"-")}let B=class extends _{constructor(){super(...arguments),this.years=[],this.isMobile=!1,this.navigationTop=0,this.isVisible=!1}render(){return this.isMobile?m``:m`
      <ul
        id="navigations"
        style="${this.navigationTop?`--nav-top: ${this.navigationTop}px;`:""} opacity: ${this.isVisible?1:0}; pointer-events: ${this.isVisible?"auto":"none"};"
      >
        <li class="nav-year no-panel" style="--theme-color: #333;">
          <a
            class="year-main-link"
            href="#"
            @click=${r=>{r.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}}
          >
            <span class="label">TOP</span>
            <span class="short-label">${ro}</span>
          </a>
        </li>
        ${this.years.map(([r,e],t)=>{const o=dt[t%dt.length],s=[...e].sort((i,n)=>{const a=c=>c.includes("Winter")?4:c.includes("Autumn")?3:c.includes("Summer")?2:c.includes("Spring")?1:0;return a(n.name)-a(i.name)});return m`
            <li class="nav-year" style="--theme-color: ${o};">
              <a
                class="year-main-link"
                href="#"
                @click=${i=>{this.dispatchEvent(new CustomEvent("year-click",{detail:{event:i,id:bo("year-"+r)}}))}}
              >
                <span class="label">${r}</span>
                <span class="short-label">${isNaN(Number(r))?to:r.slice(-2)}</span>
              </a>
              <div class="sub-nav-panel">
                ${s.map(i=>m`
                    <a
                      href="#"
                      @click=${n=>{n.preventDefault(),n.stopPropagation(),this.dispatchEvent(new CustomEvent("event-click",{detail:{event:n,name:i.name}}))}}
                    >
                      ${i.name}
                    </a>
                  `)}
              </div>
            </li>
          `})}
        <li class="nav-year no-panel" style="--theme-color: #333;">
          <a
            class="year-main-link"
            href="#"
            @click=${r=>{r.preventDefault(),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}}
          >
            <span class="label">Thanks!</span>
            <span class="short-label">!</span>
          </a>
        </li>
      </ul>
    `}};B.styles=V`
    #navigations {
      position: fixed;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      top: 50%;
      transform: translateY(-50%);
      right: 1em;
      z-index: 110;
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: 0.8em;
      transition: opacity 0.3s ease;
    }

    .nav-year {
      cursor: pointer;
      position: relative;
      margin: 0.5em 0;
      display: grid;
      grid-template-columns: min-content;
      grid-template-rows: 2em;
      z-index: 1;
    }

    .nav-year:hover {
      z-index: 10;
    }

    .nav-year > a.year-main-link {
      grid-column: 1;
      grid-row: 1;
      background: var(--theme-color);
      border: solid 2px var(--theme-color);
      color: #fff;
      border-radius: 2em;
      text-decoration: none;
      display: flex;
      align-items: center;
      height: 2em;
      min-width: 2em;
      box-sizing: border-box;
      transition:
        background 0.4s,
        color 0.4s,
        border-radius 0.4s ease;
      position: relative;
      z-index: 2;
    }

    .nav-year > a.year-main-link .label {
      display: none;
      padding: 0.5em;
      flex: 1;
      text-align: left;
      font-weight: bold;
    }

    .nav-year > a.year-main-link .short-label {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-weight: bold;
    }

    .nav-year:hover > a.year-main-link {
      background: #fff;
      color: var(--theme-color);
      border-radius: 2em 2em 2em 0;
    }

    .nav-year.no-panel:hover > a.year-main-link {
      border-radius: 2em;
    }

    .nav-year:hover > a.year-main-link .label {
      display: block;
    }

    .nav-year:hover > a.year-main-link .short-label {
      display: none;
    }

    .nav-year .sub-nav-panel {
      grid-column: 1;
      grid-row: 1;
      align-self: start;
      justify-self: stretch;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      max-width: 0;
      max-height: 0;
      opacity: 0;
      background: var(--theme-color);
      border-radius: 0 0 0.5em 0.5em;
      margin-right: 2em;
      margin-top: calc(2em - 2px);
      transition:
        max-width 0.4s ease,
        max-height 0.4s ease,
        opacity 0.3s ease,
        margin-right 0.4s ease;
      white-space: nowrap;
      z-index: 1;
    }

    .nav-year:hover .sub-nav-panel {
      max-width: 500px;
      max-height: 500px;
      opacity: 1;
      margin-right: 2.8em;
    }

    .nav-year .sub-nav-panel a {
      color: #fff;
      text-decoration: none;
      font-size: 0.85em;
      font-weight: 500;
      padding: 0.4em 1em;
      transition: background 0.2s;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      text-align: left;
    }

    .nav-year .sub-nav-panel a:last-child {
      border-bottom: none;
    }

    .nav-year .sub-nav-panel a:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  `;ce([k({type:Array})],B.prototype,"years",2);ce([k({type:Boolean})],B.prototype,"isMobile",2);ce([k({type:Number})],B.prototype,"navigationTop",2);ce([k({type:Boolean})],B.prototype,"isVisible",2);B=ce([H("lit-nav-years")],B);var go=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,U=(r,e,t,o)=>{for(var s=o>1?void 0:o?wo(e,t):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(s=(o?n(e,t,s):n(s))||s);return o&&s&&go(e,t,s),s};const yt=Dr;function fo(r){return"a-"+r.toString().replace(/[!-/:-@\\[-`{-~ \s]/g,"-")}let v=class extends _{constructor(){super(),this.activeTab="camp",this.playerQueue=[],this.currentSongIndex=0,this.currentEventName="",this.playerQueueTab="",this.videoOffsetTop=0,this.isLoaded=!1,this.splashActive=window.innerWidth>768,this.loadingWord="",this.isMarkdownModalOpen=!1,this.markdownModalContent="",this.markdownModalTitle="",this.isMVMode=!1,this.isMobile=window.innerWidth<=768,this.navigationTop=0,this.introProgress=0,this.isAtPageTop=!0,this.handleResize=()=>{this.syncResponsiveMode(),this.updateIntroProgress(),this.updateNavigationTop()},this.handleScroll=()=>{this.updateIntroProgress()},this.handleVideoPositionChanged=e=>{const o=this.getBoundingClientRect().top+window.scrollY;this.videoOffsetTop=e.detail.top-o};const r=Yr||["なんと！　ななんと！　なななんと！"];this.loadingWord=r[Math.floor(Math.random()*r.length)]}get currentPlayingSong(){return this.playerQueue[this.currentSongIndex]}syncResponsiveMode(){const r=window.innerWidth<=768;r!==this.isMobile&&(this.isMobile=r),this.isMobile?this.classList.remove("mv-active"):this.isMVMode?this.classList.add("mv-active"):this.classList.remove("mv-active")}updateIntroProgress(){const r=Math.min(window.scrollY/window.innerHeight,1);r!==this.introProgress&&(this.introProgress=r);const e=window.scrollY<=1;e!==this.isAtPageTop&&(this.isAtPageTop=e)}updateNavigationTop(){this.navigationTop=184}firstUpdated(){this.updateIntroProgress(),this.updateNavigationTop(),setTimeout(()=>{var e;const r=(e=this.shadowRoot)==null?void 0:e.querySelector("#mark");if(r&&!this.isMobile){const t=r.getBoundingClientRect();r.style.transform=`translateX(${window.innerWidth/2-t.left}px) translateX(-50%)`}setTimeout(()=>{this.isLoaded=!0,setTimeout(()=>{r&&!this.isMobile&&(r.style.transition="transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)",r.style.transform="none"),this.splashActive=!1},300)},2e3)},50)}setTab(r){this.activeTab=r,this.scrollToContentStart()}handlePlayRandom(){var t,o;const r=this.buildTabQueue();for(let s=r.length-1;s>0;s--){const i=Math.floor(Math.random()*(s+1));[r[s],r[i]]=[r[i],r[s]]}const e=r.filter(s=>s.youtubeUrl&&s.youtubeUrl.match(/(?:\/\/|https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/));if(e.length>0){this.playerQueue=e,this.currentSongIndex=0,this.playerQueueTab=this.activeTab,this.currentEventName=((t=this.playerQueue[0])==null?void 0:t.eventName)||"";const s=(o=this.shadowRoot)==null?void 0:o.querySelector("lit-player");!this.isMobile&&s&&typeof s.playSongImmediately=="function"&&s.playSongImmediately(this.playerQueue,this.currentSongIndex)}else alert("No playable songs found in this category.")}async updated(r){r.has("currentSongIndex")&&(await this.updateComplete,this.isMobile||this.scrollToCurrentSong())}scrollToCurrentSong(){var t;if(this.activeTab!==this.playerQueueTab)return;const r=this.playerQueue[this.currentSongIndex];if(!r||!r.eventName)return;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(`[data-event="${r.eventName}"]`);e&&e.scrollIntoView({behavior:"smooth",block:"center"})}buildTabQueue(){const r=[],e=yt[this.activeTab],t=Object.entries(e).sort(([o],[s])=>o==="番外編"?1:s==="番外編"?-1:parseInt(s)-parseInt(o));for(const[o,s]of t){const i=[...s].sort((n,a)=>{const c=l=>l.includes("Winter")?4:l.includes("Autumn")?3:l.includes("Summer")?2:l.includes("Spring")?1:0;return c(a.name)-c(n.name)});for(const n of i)for(const a of n.songs)r.push({...a,eventName:n.name})}return r}handlePlaySongWithQueue(r){var o;const e=this.buildTabQueue();this.playerQueue=e,this.playerQueueTab=this.activeTab,this.currentSongIndex=e.findIndex(s=>s.title===r.detail.song.title&&s.eventName===r.detail.eventName),this.currentSongIndex===-1&&(this.currentSongIndex=0),this.currentEventName=r.detail.eventName;const t=(o=this.shadowRoot)==null?void 0:o.querySelector("lit-player");!this.isMobile&&t&&typeof t.playSongImmediately=="function"&&t.playSongImmediately(this.playerQueue,this.currentSongIndex)}scrollToId(r,e){var o,s;r.preventDefault();const t=(o=this.shadowRoot)==null?void 0:o.querySelector("#"+e);if(t){const i=(s=this.shadowRoot)==null?void 0:s.querySelector(".lit-header"),n=i?Math.ceil(i.getBoundingClientRect().height):128,c=t.getBoundingClientRect().top+window.scrollY-n-24;window.scrollTo({top:c,behavior:"smooth"})}}scrollToEvent(r,e){var o,s;r.preventDefault();const t=(o=this.shadowRoot)==null?void 0:o.querySelector(`[data-event="${e}"]`);if(t){const i=(s=this.shadowRoot)==null?void 0:s.querySelector(".lit-header"),n=i?Math.ceil(i.getBoundingClientRect().height):128,c=t.getBoundingClientRect().top+window.scrollY-n-24;window.scrollTo({top:c,behavior:"smooth"})}}async handleOpenMarkdown(r){const e=r.detail.url,t=e.split("/").pop()||"Markdown";this.markdownModalTitle=decodeURIComponent(t.replace(/\.md$/i,"")),this.isMarkdownModalOpen=!0,this.markdownModalContent="<p>Loading...</p>";try{const o=await fetch(e);if(!o.ok)throw new Error("Network error");const s=await o.text();this.markdownModalContent=await y.parse(s,{breaks:!0})}catch{this.markdownModalContent='<p style="color:var(--color-red)">Failed to load content.</p>'}}closeMarkdownModal(){this.isMarkdownModalOpen=!1}scrollToContentStart(){window.scrollTo({top:window.innerHeight,behavior:"smooth"})}connectedCallback(){super.connectedCallback(),this.syncResponsiveMode(),this.addEventListener("video-position-changed",this.handleVideoPositionChanged),window.addEventListener("scroll",this.handleScroll,{passive:!0}),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("video-position-changed",this.handleVideoPositionChanged),window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)}render(){const r=yt[this.activeTab],e=Object.entries(r).sort(([s],[i])=>s==="番外編"?1:i==="番外編"?-1:parseInt(i)-parseInt(s));this.isAtPageTop;const t=this.introProgress>.92;return m`
      <div id="loading" class="${this.isLoaded?"loaded":""}">
        <p id="loading-message">${this.loadingWord}</p>
        <img src="${"/music/"}res/img/loading.svg" alt="Loading" />
      </div>

      <lit-header
        .introProgress=${this.introProgress}
        .activeTab=${this.activeTab}
        .isMobile=${this.isMobile}
        .splashActive=${this.splashActive}
        .isAtPageTop=${this.isAtPageTop}
        .isMVMode=${this.isMVMode}
        @tab-changed=${s=>this.setTab(s.detail)}
        @scroll-click=${this.scrollToContentStart}
      ></lit-header>

      <div class="lit-intro-spacer"></div>

      <lit-nav-years
        .years=${e}
        .isMobile=${this.isMobile}
        .navigationTop=${this.navigationTop}
        .isVisible=${t}
        @year-click=${s=>this.scrollToId(s.detail.event,s.detail.id)}
        @event-click=${s=>this.scrollToEvent(s.detail.event,s.detail.name)}
      ></lit-nav-years>

      <main class="lit-main" @open-markdown=${this.handleOpenMarkdown}>
        ${e.map(([s,i])=>{const n=[...i].sort((a,c)=>{const l=h=>h.includes("Winter")?4:h.includes("Autumn")?3:h.includes("Summer")?2:h.includes("Spring")?1:0;return l(c.name)-l(a.name)});return m`
            <h2
              id="${fo("year-"+s)}"
              style="text-align:center; font-size: 2rem; margin: 3rem 0 1rem; color: var(--color-blue);"
            >
              ${s}
            </h2>
            ${n.map(a=>{var c,l;return m`
                <div data-event="${a.name}">
                  <lit-event-card
                    .event=${{...a,year:s}}
                    .playingSongTitle=${((c=this.currentPlayingSong)==null?void 0:c.title)||""}
                    .playingEventName=${((l=this.currentPlayingSong)==null?void 0:l.eventName)||this.currentEventName}
                    .isMobile=${this.isMobile}
                    @play-song-queue=${this.handlePlaySongWithQueue}
                  ></lit-event-card>
                </div>
              `})}
          `})}
      </main>

      ${this.isMarkdownModalOpen?m`
            <div class="lit-modal-overlay" @click=${this.closeMarkdownModal}>
              <div class="lit-modal-content" @click=${s=>s.stopPropagation()}>
                <div class="lit-modal-header">
                  <h3>${this.markdownModalTitle}</h3>
                  <button class="lit-modal-close" @click=${this.closeMarkdownModal}>&times;</button>
                </div>
                <div class="lit-modal-body" .innerHTML=${this.markdownModalContent}></div>
              </div>
            </div>
          `:""}

      <lit-footer .isMVMode=${this.isMVMode}></lit-footer>

      ${this.isMobile?"":m`
            <lit-player
              style="--video-offset-top: ${this.videoOffsetTop}px;"
              .queue=${this.playerQueue}
              .currentIndex=${this.currentSongIndex}
              .eventName=${this.currentEventName}
              @index-changed=${s=>{this.currentSongIndex=s.detail.index}}
              @mv-mode-changed=${s=>{this.isMVMode=s.detail.active,this.isMVMode?this.classList.add("mv-active"):this.classList.remove("mv-active")}}
            ></lit-player>
          `}
    `}};v.styles=V`
    :host {
      display: block;
      min-height: 100vh;
      padding-bottom: 100px; /* space for player */
      transition: padding-right 0.3s ease;
    }

    :host(.mv-active) {
      /* Padding moved to children to avoid squashing the whole container */
    }

    :host(.mv-active) .lit-main {
      max-width: none;
      margin: 0;
      width: 50%;
      padding-right: 1rem;
      box-sizing: border-box;
    }

    @media (max-width: 768px) {
      :host {
        padding-bottom: 0; /* Player bar is hidden on mobile */
        position: relative; /* Ensure absolute positioning works for lit-player */
      }
      :host(.mv-active) {
        padding-bottom: 0;
      }
      :host(.mv-active) .lit-main {
        width: 100%;
        padding-right: 0;
        box-sizing: border-box;
      }
      :host(.mv-active) #navigations {
        display: none;
      }

      .lit-main {
        padding-right: 0;
        box-sizing: border-box;
      }
    }

    .lit-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    .lit-modal-content {
      background: var(--color-surface);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      width: 100%;
      max-width: 600px;
      max-height: 80vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      animation: modalFadeIn 0.2s ease-out;
    }
    @keyframes modalFadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .lit-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid var(--color-border);
      background: var(--color-background);
    }
    .lit-modal-header h3 {
      margin: 0;
      font-size: 1.25rem;
      color: var(--color-text-primary);
    }
    .lit-modal-close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--color-text-secondary);
    }
    .lit-modal-close:hover {
      color: var(--color-text-primary);
    }
    .lit-modal-body {
      padding: 1.5rem;
      overflow-y: auto;
      color: var(--color-text-primary);
      line-height: 1.6;
    }
    .lit-modal-body p {
      margin-top: 0;
    }

    .lit-main {
      max-width: 800px;
      margin: 0 auto;
      padding: 128px 1rem 2rem;
    }

    .lit-controls {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 2rem;
    }

    .lit-btn-random {
      background: var(--color-blue);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: var(--radius-full);
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: var(--shadow-sm);
      transition: var(--transition-fast);
    }

    .lit-btn-random:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
      background: #004ecc;
    }

    /* Splash & Loading Animations */
    #loading {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: #fff;
      z-index: 9999;
      transition:
        opacity 0.5s,
        visibility 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #loading.loaded {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    #loading img {
      height: 60px;
    }

    #loading-message {
      position: absolute;
      bottom: 20%;
      font-weight: bold;
      text-align: center;
      width: 100%;
      opacity: 0.5;
      color: #333;
    }

    .lit-intro-spacer {
      width: 100%;
      height: 100vh;
    }
  `;U([f()],v.prototype,"activeTab",2);U([f()],v.prototype,"playerQueue",2);U([f()],v.prototype,"currentSongIndex",2);U([f()],v.prototype,"currentEventName",2);U([f()],v.prototype,"playerQueueTab",2);U([f()],v.prototype,"videoOffsetTop",2);U([f()],v.prototype,"isLoaded",2);U([f()],v.prototype,"splashActive",2);U([f()],v.prototype,"loadingWord",2);U([f()],v.prototype,"isMarkdownModalOpen",2);U([f()],v.prototype,"markdownModalContent",2);U([f()],v.prototype,"markdownModalTitle",2);U([f()],v.prototype,"isMVMode",2);U([f()],v.prototype,"isMobile",2);U([f()],v.prototype,"navigationTop",2);U([f()],v.prototype,"introProgress",2);U([f()],v.prototype,"isAtPageTop",2);v=U([H("lit-music-app")],v);
