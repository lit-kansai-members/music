import"./modulepreload-polyfill-Dezn_h7o.js";var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:ee}=Object,te=globalThis,ne=te.trustedTypes,re=ne?ne.emptyScript:``,ie=te.reactiveElementPolyfillSupport,m=(e,t)=>e,ae={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},oe=(e,t)=>!l(e,t),se={attribute:!0,type:String,converter:ae,reflect:!1,useDefault:!1,hasChanged:oe};Symbol.metadata??=Symbol(`metadata`),te.litPropertyMetadata??=new WeakMap;var h=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...f(e),...p(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ae:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ae:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??oe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};h.elementStyles=[],h.shadowRootOptions={mode:`open`},h[m(`elementProperties`)]=new Map,h[m(`finalized`)]=new Map,ie?.({ReactiveElement:h}),(te.reactiveElementVersions??=[]).push(`2.1.2`);var ce=globalThis,le=e=>e,g=ce.trustedTypes,ue=g?g.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,_=`lit$${Math.random().toFixed(9).slice(2)}$`,fe=`?`+_,pe=`<${fe}>`,v=document,y=()=>v.createComment(``),b=e=>e===null||typeof e!=`object`&&typeof e!=`function`,me=Array.isArray,he=e=>me(e)||typeof e?.[Symbol.iterator]==`function`,ge=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,ve=/>/g,S=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ye=/'/g,be=/"/g,xe=/^(?:script|style|textarea|title)$/i,C=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),w=Symbol.for(`lit-noChange`),T=Symbol.for(`lit-nothing`),Se=new WeakMap,E=v.createTreeWalker(v,129);function Ce(e,t){if(!me(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}var we=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=x;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===x?c[1]===`!--`?o=_e:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=S):(xe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=S):o=ve:o===S?c[0]===`>`?(o=i??x,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?S:c[3]===`"`?be:ye):o===be||o===ye?o=S:o===_e||o===ve?o=x:(o=S,i=void 0);let d=o===S&&e[t+1].startsWith(`/>`)?` `:``;a+=o===x?n+pe:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+_+d):n+_+(l===-2?t:d)}return[Ce(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Te=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=we(t,n);if(this.el=e.createElement(l,r),E.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=E.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(_),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ke:r[1]===`?`?Ae:r[1]===`@`?je:Oe}),i.removeAttribute(e)}else e.startsWith(_)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(xe.test(i.tagName)){let e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=g?g.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],y()),E.nextNode(),c.push({type:2,index:++a});i.append(e[t],y())}}}else if(i.nodeType===8)if(i.data===fe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(_,e+1))!==-1;)c.push({type:7,index:a}),e+=_.length-1}a++}}static createElement(e,t){let n=v.createElement(`template`);return n.innerHTML=e,n}};function D(e,t,n=e,r){if(t===w)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=b(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=D(e,i._$AS(e,t.values),i,r)),t}var Ee=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??v).importNode(t,!0);E.currentNode=r;let i=E.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new De(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Me(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=E.nextNode(),a++)}return E.currentNode=v,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},De=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),b(e)?e===T||e==null||e===``?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==w&&this._(e):e._$litType$===void 0?e.nodeType===void 0?he(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&b(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Te.createElement(Ce(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ee(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new Te(e)),t}k(t){me(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(y()),this.O(y()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=le(e).nextSibling;le(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Oe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=D(this,e,t,0),a=!b(e)||e!==this._$AH&&e!==w,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=D(this,r[n+o],t,o),s===w&&(s=this._$AH[o]),a||=!b(s)||s!==this._$AH[o],s===T?e=T:e!==T&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ke=class extends Oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},Ae=class extends Oe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},je=class extends Oe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=D(this,e,t,0)??T)===w)return;let n=this._$AH,r=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==T&&(n===T||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Me=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}},Ne=ce.litHtmlPolyfillSupport;Ne?.(Te,De),(ce.litHtmlVersions??=[]).push(`3.3.3`);var Pe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new De(t.insertBefore(y(),e),e,void 0,n??{})}return i._$AI(e),i},Fe=globalThis,O=class extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};O._$litElement$=!0,O.finalized=!0,Fe.litElementHydrateSupport?.({LitElement:O});var Ie=Fe.litElementPolyfillSupport;Ie?.({LitElement:O}),(Fe.litElementVersions??=[]).push(`4.2.2`);var k=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Le={attribute:!0,type:String,converter:ae,reflect:!1,hasChanged:oe},Re=(e=Le,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function A(e){return(t,n)=>typeof n==`object`?Re(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function j(e){return A({...e,state:!0,attribute:!1})}function ze(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var M=ze();function Be(e){M=e}var N={exec:()=>null};function P(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(F.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var F={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`)},Ve=/^(?:[ \t]*(?:\n|$))+/,He=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ue=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,I=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,We=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ge=/(?:[*+-]|\d{1,9}[.)])/,Ke=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,qe=P(Ke).replace(/bull/g,Ge).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Je=P(Ke).replace(/bull/g,Ge).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ye=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Xe=/^[^\n]+/,Ze=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Qe=P(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Ze).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),$e=P(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ge).getRegex(),et=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,tt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,nt=P(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,tt).replace(`tag`,et).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),rt=P(Ye).replace(`hr`,I).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,et).getRegex(),it={blockquote:P(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,rt).getRegex(),code:He,def:Qe,fences:Ue,heading:We,hr:I,html:nt,lheading:qe,list:$e,newline:Ve,paragraph:rt,table:N,text:Xe},at=P(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,I).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,et).getRegex(),ot={...it,lheading:Je,table:at,paragraph:P(Ye).replace(`hr`,I).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,at).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,et).getRegex()},st={...it,html:P(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,tt).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:N,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:P(Ye).replace(`hr`,I).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,qe).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},ct=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,lt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ut=/^( {2,}|\\)\n(?!\s*$)/,dt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,L=/[\p{P}\p{S}]/u,ft=/[\s\p{P}\p{S}]/u,pt=/[^\s\p{P}\p{S}]/u,mt=P(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,ft).getRegex(),ht=/(?!~)[\p{P}\p{S}]/u,gt=/(?!~)[\s\p{P}\p{S}]/u,_t=/(?:[^\s\p{P}\p{S}]|~)/u,vt=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,yt=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,bt=P(yt,`u`).replace(/punct/g,L).getRegex(),xt=P(yt,`u`).replace(/punct/g,ht).getRegex(),St=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Ct=P(St,`gu`).replace(/notPunctSpace/g,pt).replace(/punctSpace/g,ft).replace(/punct/g,L).getRegex(),wt=P(St,`gu`).replace(/notPunctSpace/g,_t).replace(/punctSpace/g,gt).replace(/punct/g,ht).getRegex(),Tt=P(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,pt).replace(/punctSpace/g,ft).replace(/punct/g,L).getRegex(),Et=P(/\\(punct)/,`gu`).replace(/punct/g,L).getRegex(),Dt=P(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ot=P(tt).replace(`(?:-->|$)`,`-->`).getRegex(),kt=P(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Ot).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),R=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,At=P(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace(`label`,R).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),jt=P(/^!?\[(label)\]\[(ref)\]/).replace(`label`,R).replace(`ref`,Ze).getRegex(),Mt=P(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Ze).getRegex(),Nt={_backpedal:N,anyPunctuation:Et,autolink:Dt,blockSkip:vt,br:ut,code:lt,del:N,emStrongLDelim:bt,emStrongRDelimAst:Ct,emStrongRDelimUnd:Tt,escape:ct,link:At,nolink:Mt,punctuation:mt,reflink:jt,reflinkSearch:P(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,jt).replace(`nolink`,Mt).getRegex(),tag:kt,text:dt,url:N},Pt={...Nt,link:P(/^!?\[(label)\]\((.*?)\)/).replace(`label`,R).getRegex(),reflink:P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,R).getRegex()},Ft={...Nt,emStrongRDelimAst:wt,emStrongLDelim:xt,url:P(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,`i`).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},It={...Ft,br:P(ut).replace(`{2,}`,`*`).getRegex(),text:P(Ft.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},z={normal:it,gfm:ot,pedantic:st},B={normal:Nt,gfm:Ft,breaks:It,pedantic:Pt},Lt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Rt=e=>Lt[e];function V(e,t){if(t){if(F.escapeTest.test(e))return e.replace(F.escapeReplace,Rt)}else if(F.escapeTestNoEncode.test(e))return e.replace(F.escapeReplaceNoEncode,Rt);return e}function zt(e){try{e=encodeURI(e).replace(F.percentDecode,`%`)}catch{return null}return e}function Bt(e,t){let n=e.replace(F.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(F.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(F.slashPipe,`|`);return n}function H(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Vt(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Ht(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Ut(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var Wt=class{options;rules;lexer;constructor(e){this.options=e||M}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:H(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Ut(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=H(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:H(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=H(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,e=>` `.repeat(3*e.length)),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=t[2].search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d);for(;e;){let f=e.split(`
`,1)[0],p;if(l=f,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),p=l):p=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||t.test(l)||n.test(l))break;if(p.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+p.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}!u&&!l.trim()&&(u=!0),r+=f+`
`,e=e.substring(f.length+1),c=p.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0));let f=null,p;this.options.gfm&&(f=this.rules.other.listIsTask.exec(s),f&&(p=f[0]!==`[ ] `,s=s.replace(this.rules.other.listReplaceTask,``))),i.items.push({type:`list_item`,raw:r,task:!!f,checked:p,loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e=0;e<i.items.length;e++)if(this.lexer.state.top=!1,i.items[e].tokens=this.lexer.blockTokens(i.items[e].text,[]),!i.loose){let t=i.items[e].tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}if(i.loose)for(let e=0;e<i.items.length;e++)i.items[e].loose=!0;return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:`html`,block:!0,raw:t[0],pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Bt(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Bt(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=H(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Vt(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Ht(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Ht(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(r&&!(r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:`del`,raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},U=class e{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||M,this.options.tokenizer=this.options.tokenizer||new Wt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:F,block:z.normal,inline:B.normal};this.options.pedantic?(t.block=z.pedantic,t.inline=B.pedantic):this.options.gfm&&(t.block=z.gfm,this.options.breaks?t.inline=B.breaks:t.inline=B.gfm),this.tokenizer.rules=t}static get rules(){return{block:z,inline:B}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(F.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.options.pedantic&&(e=e.replace(F.tabCharGlobal,`    `).replace(F.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=`
`+r.raw,n.text+=`
`+r.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){let a=t.at(-1);n&&a?.type===`paragraph`?(a.raw+=`
`+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r),n=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,a=``;for(;e;){i||(a=``),i=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,a)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let o=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(o=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(a=r.raw.slice(-1)),i=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},Gt=class{options;parser;constructor(e){this.options=e||M}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(F.notSpaceStart)?.[0],i=e.replace(F.endingNewline,``)+`
`;return r?`<pre><code class="language-`+V(r)+`">`+(n?i:V(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:V(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){let t=``;if(e.task){let n=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type===`paragraph`?(e.tokens[0].text=n+` `+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type===`text`&&(e.tokens[0].tokens[0].text=n+` `+V(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:`text`,raw:n+` `,text:n+` `,escaped:!0}):t+=n+` `}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox">`}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${V(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=zt(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+V(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=zt(e);if(i===null)return V(n);e=i;let a=`<img src="${e}" alt="${n}"`;return t&&(a+=` title="${V(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:V(e.text)}},Kt=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}},W=class e{options;renderer;textRenderer;constructor(e){this.options=e||M,this.options.renderer=this.options.renderer||new Gt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Kt}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e,t=!0){let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=i,t=this.options.extensions.renderers[e.type].call({parser:this},e);if(t!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`paragraph`,`text`].includes(e.type)){n+=t||``;continue}}let a=i;switch(a.type){case`space`:n+=this.renderer.space(a);continue;case`hr`:n+=this.renderer.hr(a);continue;case`heading`:n+=this.renderer.heading(a);continue;case`code`:n+=this.renderer.code(a);continue;case`table`:n+=this.renderer.table(a);continue;case`blockquote`:n+=this.renderer.blockquote(a);continue;case`list`:n+=this.renderer.list(a);continue;case`html`:n+=this.renderer.html(a);continue;case`paragraph`:n+=this.renderer.paragraph(a);continue;case`text`:{let i=a,o=this.renderer.text(i);for(;r+1<e.length&&e[r+1].type===`text`;)i=e[++r],o+=`
`+this.renderer.text(i);t?n+=this.renderer.paragraph({type:`paragraph`,raw:o,text:o,tokens:[{type:`text`,raw:o,text:o,escaped:!0}]}):n+=o;continue}default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}parseInline(e,t=this.renderer){let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},qt=class{options;block;constructor(e){this.options=e||M}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?U.lex:U.lexInline}provideParser(){return this.block?W.parse:W.parseInline}},G=new class{defaults=ze();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=W;Renderer=Gt;TextRenderer=Kt;Lexer=U;Tokenizer=Wt;Hooks=qt;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Gt(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Wt(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new qt;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];qt.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async)return Promise.resolve(i.call(t,e)).then(e=>a.call(t,e));let n=i.call(t,e);return a.call(t,n)}:t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return U.lex(e,t??this.defaults)}parser(e,t){return W.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(t==null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));i.hooks&&(i.hooks.options=i,i.hooks.block=e);let o=i.hooks?i.hooks.provideLexer():e?U.lex:U.lexInline,s=i.hooks?i.hooks.provideParser():e?W.parse:W.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(t):t).then(e=>o(e,i)).then(e=>i.hooks?i.hooks.processAllTokens(e):e).then(e=>i.walkTokens?Promise.all(this.walkTokens(e,i.walkTokens)).then(()=>e):e).then(e=>s(e,i)).then(e=>i.hooks?i.hooks.postprocess(e):e).catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let e=o(t,i);i.hooks&&(e=i.hooks.processAllTokens(e)),i.walkTokens&&this.walkTokens(e,i.walkTokens);let n=s(e,i);return i.hooks&&(n=i.hooks.postprocess(n)),n}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+V(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function K(e,t){return G.parse(e,t)}K.options=K.setOptions=function(e){return G.setOptions(e),K.defaults=G.defaults,Be(K.defaults),K},K.getDefaults=ze,K.defaults=M,K.use=function(...e){return G.use(...e),K.defaults=G.defaults,Be(K.defaults),K},K.walkTokens=function(e,t){return G.walkTokens(e,t)},K.parseInline=G.parseInline,K.Parser=W,K.parser=W.parse,K.Renderer=Gt,K.TextRenderer=Kt,K.Lexer=U,K.lexer=U.lex,K.Tokenizer=Wt,K.Hooks=qt,K.parse=K,K.options,K.setOptions,K.use,K.walkTokens,K.parseInline,W.parse,U.lex;var Jt={"//":`エラーが出たときは、discriptionに従って修正してください。`,$schema:`./schema.json`,camp:JSON.parse(`{"2012":[{"name":"Xmas Camp 2012","isBefore2024":true,"songs":[{"title":"ハピネス","author":"AI","description":"コカ・コーラ 冬期CMソング","spotify":"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI","damNumber":"6484-08","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08","joyNumber":"29625","joyUrl":"https://www.joysound.com/web/search/song/186425","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a001bf4/l027392.html","youtubeUrl":"//youtu.be/uKgmu8g-kXE"}]},{"name":"Summer Camp 2012","isBefore2024":true,"songs":[{"title":"君の知らない物語","author":"supercell","description":"TVアニメ「化物語」エンディングテーマ","spotify":"https://open.spotify.com/track/434YBNY61Y9sqBSp7OINBa","damNumber":"3318-21","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3318-21","joyNumber":"136606","joyUrl":"https://www.joysound.com/web/search/song/133769","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a054f0a/l024c87.html","youtubeUrl":"//youtu.be/rZZzlY8vUf8"},{"title":"Overture of the Summer Wars","author":"松本晃彦","description":"アニメ映画「サマーウォーズ」挿入歌","spotify":"https://open.spotify.com/track/6F9xsyceOyTl3qHSxfXYXP","damNumber":"","damUrl":"","joyNumber":"","joyUrl":"","lyricsSiteName":"","lyricsUrl":"","youtubeUrl":"//youtu.be/RbpDRk_OAPU"}]}],"2013":[{"name":"Xmas Camp 2013","isBefore2024":true,"songs":[{"title":"恋するフォーチュンクッキー","author":"AKB48","description":"東京地下鉄日比谷線 秋葉原駅 (H16) 発車サイン音","spotify":"https://open.spotify.com/track/3Tw2WaAaeRj0YKtTUogJVz","damNumber":"6572-52","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6572-52","joyNumber":"119131","joyUrl":"https://www.joysound.com/web/search/song/99643","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04cb7c/l02e06a.html","youtubeUrl":"//youtu.be/dFf4AgBNR1E"},{"title":"ハピネス","author":"AI","description":"コカ・コーラ 冬期CMソング","spotify":"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI","damNumber":"6484-08","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08","joyNumber":"29625","joyUrl":"https://www.joysound.com/web/search/song/186425","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a001bf4/l027392.html","youtubeUrl":"//youtu.be/uKgmu8g-kXE"}]},{"name":"Summer Camp 2013","theme":"きっと忘れられない夏になる。","isBefore2024":true,"songs":[{"title":"RPG","author":"SEKAI NO OWARI","description":"映画「クレヨンしんちゃん バカうまっ!B級グルメサバイバル!!」主題歌","spotify":"https://open.spotify.com/track/7facNrW6VRW8s3ICZ8G1uW","damNumber":"5847-34","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5847-34","joyNumber":"724236","joyUrl":"https://www.joysound.com/web/search/song/251945","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a055790/l02cbdb.html","youtubeUrl":"//youtu.be/Mi9uNu35Gmk"}]},{"name":"Spring Camp 2013","isBefore2024":true,"songs":[{"title":"Boom!","author":"Maia Hirasawa","description":"「JR九州/祝！九州キャンペーン」CMソング","spotify":"https://open.spotify.com/track/6kQipOaCBqGWwRMKBCJVW0","damNumber":"3819-51","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3819-51","joyNumber":"94720","joyUrl":"https://www.joysound.com/web/search/song/167564","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a054d2c/l025022.html","youtubeUrl":"//youtu.be/tmRoVUcJpOc"},{"title":"ODDS&ENDS","author":"ryo(supercell) feat. 初音ミク","description":"ゲーム「初音ミク -Project Diva- f」テーマソング","spotify":"https://open.spotify.com/track/4Q30IhZ7CO9HEOk4PzVHOg","damNumber":"3612-33","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3612-33","joyNumber":"730048","joyUrl":"https://www.joysound.com/web/search/song/233518","lyricsSiteName":"歌ネット","lyricsUrl":"https://www.uta-net.com/song/134511/","youtubeUrl":"//youtu.be/HUzLUGKwQJc"},{"title":"さよならメモリーズ","author":"supercell","description":"","spotify":"https://open.spotify.com/track/30eaJSKH0UiTyH6d9JRHS6","damNumber":"5667-78","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5667-78","joyNumber":"139943","joyUrl":"https://www.joysound.com/web/search/song/147099","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a051979/l01e2e0.html","youtubeUrl":"//youtu.be/fhkYsNfbIPE"}]}],"2014":[{"name":"Xmas Camp 2014","background":"../../res/img/backgrounds/camp_2014_xmas.webp","theme":"一年に一度だけ、魔法のような4日間","songs":[{"title":"Dragon Night","author":"SEKAI NO OWARI","description":"映画 TOKYO FANTASY SEKAI NO OWARI ED","spotify":"https://open.spotify.com/track/4XdzCpY4Ekv5SezuuFpBDG","damNumber":"5847-43","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5847-43","joyNumber":"119777","joyUrl":"https://www.joysound.com/web/search/song/411426","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a055790/l033358.html","youtubeUrl":"//youtu.be/gsVGf1T2Hfs"},{"title":"I Won't Let You Down","author":"OK Go","description":"","spotify":"https://open.spotify.com/track/6tDR5V2dFKzXzOkjxY7dgR","damNumber":"3931-37","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3931-37","joyNumber":"671324","joyUrl":"https://www.joysound.com/web/search/song/417497","lyricsSiteName":"AZLyrics","lyricsUrl":"https://www.azlyrics.com/lyrics/okgo/iwontletyoudown.html","youtubeUrl":"//youtu.be/u1ZB_rGFyeU"},{"title":"ハピネス","author":"AI","description":"コカ・コーラ 冬期CMソング","spotify":"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI","damNumber":"6484-08","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08","joyNumber":"29625","joyUrl":"https://www.joysound.com/web/search/song/186425","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a001bf4/l027392.html","youtubeUrl":"//youtu.be/uKgmu8g-kXE"}]},{"name":"Summer Camp 2014","background":"../../res/img/backgrounds/camp_2014_summer.webp","theme":"夏のすべてが詰まってる","poem":"冒険。驚き。きっかけ。感動。涙。\\n夏は、さまざまな物語を君に見せる。\\n夏のすべてが詰まってる。\\n","songs":[{"title":"ray","author":"BUMP OF CHICKEN feat. HATSUNE MIKU","description":"映画超かぐや姫! エンディングテーマ","spotify":"https://open.spotify.com/track/1EMx7JyFeH6IPFni6XQCAI","damNumber":"6873-58","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6873-58","joyNumber":"737711","joyUrl":"","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a000673/l030b34.html","youtubeUrl":"//youtu.be/yT_ylSCgY6Q"},{"title":"ミラクル","author":"miwa","description":"資生堂 SEA BREEZE 2013 CMSong","spotify":"https://open.spotify.com/track/0WWhdc9npUQ9BCAAnUOCDz","damNumber":"4729-87","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4729-87","joyNumber":"724525","joyUrl":"https://www.joysound.com/web/search/song/252647","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04e594/l02ca67.html","youtubeUrl":"//youtu.be/HlDo8qEPbNg"}]},{"name":"English × IT Camp  2014","isBefore2024":true,"songs":[{"title":"Happy","author":"Pharrell Williams","description":"[Life is Tech ! Ver.](//youtu.be/rYH8exdFYro)\\nMovie Despicable Me 2 insert song","spotify":"https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH","damNumber":"5635-09","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5635-09","joyNumber":"738399","joyUrl":"https://www.joysound.com/web/search/song/406080","lyricsSiteName":"AZLyrics","lyricsUrl":"https://www.azlyrics.com/lyrics/pharrellwilliams/happy.html","youtubeUrl":"//youtu.be/y6Sxv-sUYtM"}]},{"name":"Spring Camp 2014","theme":"出会い、別れ、はじまり","isBefore2024":true,"songs":[{"title":"スターラブレイション","author":"ケラケラ","description":"フジテレビ木曜ドラマ2013/2Q ラスト・シンデレラEDSong","spotify":"https://open.spotify.com/track/0PTGYdQvnVQ1YJ65jxBNoT","damNumber":"4331-86","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4331-86","joyNumber":"725137","joyUrl":"https://www.joysound.com/web/search/song/253436","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05751d/l02cddb.html","youtubeUrl":"//youtu.be/JQowMIY2bOw"},{"title":"変わらないもの","author":"奥華子","description":"アニメ映画「時をかける少女」挿入歌","spotify":"https://open.spotify.com/track/6i8mvhA9dAHil8tMzuMdMw","damNumber":"2889-23","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=2889-23","joyNumber":"161753","joyUrl":"https://www.joysound.com/web/search/song/99643","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04c9e3/l00af88.html","youtubeUrl":"//youtu.be/SqANEGZ6Ty0"}]}],"2015":[{"name":"Xmas Camp 2015","background":"../../res/img/backgrounds/camp_2015_xmas.webp","theme":"5日間だけの魔法の世界へ、ようこそ -Make with Magic-","songs":[{"title":"新宝島","author":"サカナクション","description":"映画 バクマン。 主題歌","spotify":"https://open.spotify.com/track/4a48lWUd64bZgHUDx0GZlj","damNumber":"5449-28","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5449-28","joyNumber":"156414","joyUrl":"https://www.joysound.com/web/search/song/530711","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04d6c9/l037b92.html","youtubeUrl":"//youtu.be/LIlZCmETvsY"},{"title":"ハピネス","author":"AI","description":"コカ・コーラ 冬期CMソング","spotify":"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI","damNumber":"6484-08","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08","joyNumber":"29625","joyUrl":"https://www.joysound.com/web/search/song/186425","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a001bf4/l027392.html","youtubeUrl":"//youtu.be/uKgmu8g-kXE"},{"title":"Share The Love","author":"三代目 J Soul Brothers","description":"Pocky CMソング","spotify":"https://open.spotify.com/track/1qWEBBmhX8A8eTEYyRJpK8","damNumber":"6854-25","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6854-25","joyNumber":"156497","joyUrl":"https://www.joysound.com/web/search/song/547165","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05b271/l03a1e5.html","youtubeUrl":"//youtu.be/MxHIFZp7Uek"},{"title":"ハレ晴レユカイ","author":"涼宮ハルヒ(平野綾)/長門有希(茅原実里)/朝比奈みくる(後藤邑子)","description":"TVアニメ「涼宮ハルヒの憂鬱」エンディングテーマ","spotify":"https://open.spotify.com/track/7ugsistwEp0PhP4Ddj9cra","damNumber":"4461-05","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4461-05","joyNumber":"55206","joyUrl":"https://www.joysound.com/web/search/song/87172","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04cfa4/l00a8e0.html","youtubeUrl":"//youtu.be/a6iZKNfDuh4"},{"title":"あたりまえ体操","author":"COWCOW","description":"注意点体操\\n[注意点体操歌詞](original-lyrics/注意点体操2015Xmas.md)","spotify":"https://open.spotify.com/track/5oHSEsaU6eXaeBeYfzwa0o","damNumber":"6857-88","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6857-88","joyNumber":"721576","joyUrl":"https://www.joysound.com/web/search/song/247565","lyricsSiteName":"UtaTen","lyricsUrl":"https://utaten.com/lyric/pt15102702/","youtubeUrl":"//youtu.be/G0zRBRUQils"}]},{"name":"Summer Camp 2015","background":"../../res/img/backgrounds/camp_2015_summer.webp","theme":"世界で一番、ココロ踊る「夏」を。 -A SUMMER THAT ROCKS YOUR HEART-","songs":[{"title":"Come On! Come On! -Happy with Smile-","author":"THE UNITED","description":"","spotify":"","damNumber":"3923-19","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3923-19","joyNumber":"","joyUrl":"","lyricsSiteName":"musiXmatch","lyricsUrl":"https://www.musixmatch.com/ja/lyrics/The-United/Come-On-Come-On-~Happy-with-Smile~","youtubeUrl":"//youtu.be/xii1jKIbHH8"},{"title":"Beautiful","author":"Superfly","description":"TBS 火曜ドラマ 2015/2Q マザー・ゲーム～彼女たちの階級～ 主題歌","spotify":"https://open.spotify.com/track/2ruHYPN3a77Ra8WvvPyfwb","damNumber":"4989-58","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4989-58","joyNumber":"156180","joyUrl":"https://www.joysound.com/web/search/song/423556","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04cdbd/l036081.html","youtubeUrl":"//youtu.be/tfeSwQ-iU0U"},{"title":"あたりまえ体操","author":"COWCOW","description":"注意点体操\\n[注意点体操歌詞](original-lyrics/注意点体操2015Summer.md)","spotify":"https://open.spotify.com/track/5oHSEsaU6eXaeBeYfzwa0o","damNumber":"6857-88","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6857-88","joyNumber":"721576","joyUrl":"https://www.joysound.com/web/search/song/247565","lyricsSiteName":"UtaTen","lyricsUrl":"https://utaten.com/lyric/pt15102702/","youtubeUrl":"//youtu.be/G0zRBRUQils"}]},{"name":"YOSHIMOTO TECHDAY","background":"../../res/img/backgrounds/sp_camp_2015_yoshimoto.webp","songs":[{"title":"LAUGH! LAUGH! LAUGH!","author":"槇原敬之","description":"LIVE STAND Theme Song","spotify":"","damNumber":"","damUrl":"","joyNumber":"","joyUrl":"","lyricsSiteName":"歌ネット","lyricsUrl":"https://www.uta-net.com/song/167194/","youtubeUrl":"//youtu.be/1yy4kxA_UVU"}]},{"name":"Life 伊豆 Tech ! 2015","background":"../../res/img/backgrounds/sp_camp_2015_izu.webp","theme":"一年に一度だけ、地獄のような３日間","songs":[{"title":"バリバリ最強No.1","author":"FEEL SO BAD","description":"テレビ朝日 アニメ 地獄先生ぬ〜べ〜 OP","spotify":"https://open.spotify.com/track/13AxywtjydRCxwtfY0pmua","damNumber":"3206-03","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3206-03","joyNumber":"14246","joyUrl":"https://www.joysound.com/web/search/song/14238","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a01176a/l0011d8.html","youtubeUrl":"//youtu.be/W3r_wFIGjHU"}]},{"name":"Spring Camp 2015","background":"../../res/img/backgrounds/camp_2015_spring.webp","theme":"すべてがサプライズの春キャンプへ -Surprise Everything-","songs":[{"title":"超特急ライン","author":"もっぴーさうんど","description":"[DOVA-SYNDROME](//dova-s.jp/bgm/play2260.html)","spotify":"","damNumber":"","damUrl":"","joyNumber":"","joyUrl":"","lyricsSiteName":"","lyricsUrl":"","youtubeUrl":"//youtu.be/5FOBkm0ibWI"},{"title":"ひまわりの約束","author":"秦基博","description":"STAND BY ME ドラえもん 主題歌","spotify":"https://open.spotify.com/track/45jGOHwYKgsRYbAJ8DR61d","damNumber":"5617-21","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5617-21","joyNumber":"119667","joyUrl":"https://www.joysound.com/web/search/song/408793","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04c9d1/l032376.html","youtubeUrl":"//youtu.be/rKsQ-3N-Bks"},{"title":"Happily","author":"One Direction","description":"映画 好きっていいなよ。 主題歌","spotify":"https://open.spotify.com/track/5Lf9rCqReE9Ri4tZvLRLuy","damNumber":"3925-07","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3925-07","joyNumber":"738409","joyUrl":"https://www.joysound.com/web/search/song/405263","lyricsSiteName":"AZLyrics","lyricsUrl":"https://www.azlyrics.com/lyrics/onedirection/happily.html","youtubeUrl":"//youtu.be/fTgJx-zmpM0"},{"title":"さくら体操","author":"NHK","description":"","spotify":"","damNumber":"4630-01","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4630-01","joyNumber":"28584","joyUrl":"https://www.joysound.com/web/search/song/26476","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a0006b5/l001e01.html","youtubeUrl":"//youtu.be/pnBnu5v8KTw"}]}],"2016":[{"name":"Xmas Camp 2016","background":"../../res/img/backgrounds/camp_2016_xmas.webp","theme":"一年に一度だけ、特別な数日間。-Leep into a magic story.-","songs":[{"title":"Hey Ho","author":"SEKAI NO OWARI","description":"[動物殺処分ゼロ支援プロジェクト「ブレーメン」支援Song](https://bremen-project.net/mob/index.php)","spotify":"https://open.spotify.com/track/2xsxP0EzcSWF96jdITaQxE","damNumber":"5847-57","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5847-57","joyNumber":"156923","joyUrl":"https://www.joysound.com/web/search/song/581126","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a055790/l03c659.html","youtubeUrl":"//youtu.be/qfsr0S_QGOU"},{"title":"PPAP(ペンパイナッポーアッポーペン)","author":"ピコ太郎","description":"注意点太郎 元曲\\n[注意点太郎歌詞](original-lyrics/注意点太郎2016Xmas.md)","spotify":"https://open.spotify.com/track/1ORkFlSSZwpReXTUXfMI0i","damNumber":"6018-17","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6018-17","joyNumber":"689757","joyUrl":"https://www.joysound.com/web/search/song/596832","lyricsSiteName":"歌ネット","lyricsUrl":"https://www.uta-net.com/song/216737/","youtubeUrl":"//youtu.be/0E00Zuayv9Q"}]},{"name":"Summer Camp 2016","background":"../../res/img/backgrounds/camp_2016_summer.webp","theme":"世界なんて、ひと夏で変わる。 -LIVE AN ADVENTUROUS-","songs":[{"title":"CAN'T STOP THE FEELING!","author":"JUSTIN TIMBERLAKE","description":"","spotify":"https://open.spotify.com/track/6JV2JOEocMgcZxYSZelKcc","damNumber":"3946-09","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3946-09","joyNumber":"686425","joyUrl":"https://www.joysound.com/web/search/song/571726","lyricsSiteName":"AZLyrics","lyricsUrl":"https://www.azlyrics.com/lyrics/justintimberlake/cantstopthefeeling.html","youtubeUrl":"//youtu.be/ru0K8uYEZWw"},{"title":"シュガーソングとビターステップ","author":"UNISON SQUARE GARDEN","description":"TVアニメ「血界戦線」エンディングテーマ","spotify":"https://open.spotify.com/track/4at8MHaxe5hFxcXiO2PPd4","damNumber":"5902-52","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5902-52","joyNumber":"673982","joyUrl":"https://www.joysound.com/web/search/song/420975","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04e406/l035ee5.html","youtubeUrl":"//youtu.be/3exsRhw3xt8"},{"title":"宝石になった日","author":"BUMP OF CHICKEN","description":"","spotify":"https://open.spotify.com/track/3WMBq28h9MGPE7U8ctiqqd","damNumber":"6873-68","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6873-68","joyNumber":"681904","joyUrl":"https://www.joysound.com/web/search/song/556019","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a000673/l0396dd.html","youtubeUrl":"//youtu.be/4Sd3iIdM4Co"},{"title":"Green Bird","author":"フジファブリック","description":"TBS月曜ドラマ2015/3Q となりの関くん 主題歌","spotify":"https://open.spotify.com/track/7iqN8SaVVy3WcNeXCGRWNv","damNumber":"7048-50","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7048-50","joyNumber":"675813","joyUrl":"https://www.joysound.com/web/search/song/491590","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a033e7f/l0365c3.html","youtubeUrl":"//youtu.be/PcFaBM_3Ucc"},{"title":"MUSIC VIDEO","author":"岡崎体育","description":"注意点 VIDEO 元曲\\n[注意点VIDEO歌詞](original-lyrics/注意点VIDEO2016Summer.md)","spotify":"https://open.spotify.com/track/1qK7Y8HxbRFNzSIh3NRZIQ","damNumber":"6001-91","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6001-91","joyNumber":"685245","joyUrl":"https://www.joysound.com/web/search/song/570589","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05b49f/l03a993.html","youtubeUrl":"//youtu.be/fTwAz1JC4yI"}]},{"name":"Spring Camp 2016","background":"../../res/img/backgrounds/camp_2016_spring.webp","theme":"まだ見ぬ世界に全力でワクワクしよう。 -Next World-","songs":[{"title":"シルエット","author":"KANA-BOON","description":"TVアニメ「NARUTO -ナルト- 疾風伝」オープニングテーマ","spotify":"https://open.spotify.com/track/1di1C0QI6Y92yZPYn6XYAZ","damNumber":"5980-09","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5980-09","joyNumber":"119897","joyUrl":"https://www.joysound.com/web/search/song/414532","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05808c/l033c07.html","youtubeUrl":"//youtu.be/ZFoJYI7Q4iA"},{"title":"Tell The World","author":"Eric Hutchinson","description":"","spotify":"https://open.spotify.com/track/0ifc4mq2mVNefgQFmtXQpt","damNumber":"3954-38","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3954-38","joyNumber":"","joyUrl":"","lyricsSiteName":"AZLyrics","lyricsUrl":"https://www.azlyrics.com/lyrics/hillsongunited/telltheworld.html","youtubeUrl":"//youtu.be/vZ2_tOoefyU"},{"title":"ランアンドラン","author":"KANA-BOON","description":"","spotify":"https://open.spotify.com/track/3U7hgUytI4Gd1fcHvC6Mpf","damNumber":"5980-36","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5980-36","joyNumber":"156559","joyUrl":"https://www.joysound.com/web/search/song/552408","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05808c/l0391c1.html","youtubeUrl":"//youtu.be/JbyQOzRANYs"},{"title":"PERFECT HUMAN","author":"RADIOFISH","description":"注意点HUMAN\\n[注意点HUMAN歌詞](original-lyrics/注意点HUMAN2016Spring.md)","spotify":"https://open.spotify.com/track/2Mm0S1T5lgPy0YTXUxeIJQ","damNumber":"5994-97","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5994-97","joyNumber":"156697","joyUrl":"https://www.joysound.com/web/search/song/562610","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05b4f4/l03ab42.html","youtubeUrl":"//youtu.be/4Bh1nm7Ir8c"},{"title":"さくら体操","author":"NHK","description":"","spotify":"","damNumber":"4630-01","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4630-01","joyNumber":"28584","joyUrl":"https://www.joysound.com/web/search/song/26476","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a0006b5/l001e01.html","youtubeUrl":"//youtu.be/pnBnu5v8KTw"}]}],"2017":[{"name":"Xmas Camp 2017","background":"../../res/img/backgrounds/camp_2017_xmas.webp","theme":"さあ、とっておきの世にも素敵な魔法の世界へ -MAKE WITH MAGIC-","songs":[{"title":"ONE","author":"Aimer","description":"2018 PyeongChang Olympic JAL CMSong","spotify":"https://open.spotify.com/track/01jAlHee4psROggfWjk8hp","damNumber":"3914-52","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3914-52","joyNumber":"698510","joyUrl":"https://www.joysound.com/web/search/song/642264","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05570f/l04307e.html","youtubeUrl":"//youtu.be/IvKIiRKmnSY"},{"title":"ハピネス","author":"AI","description":"コカ・コーラ 冬期CMソング","spotify":"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI","damNumber":"6484-08","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08","joyNumber":"29625","joyUrl":"https://www.joysound.com/web/search/song/186425","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a001bf4/l027392.html","youtubeUrl":"//youtu.be/uKgmu8g-kXE"},{"title":"ようこそジャパリパークへ","author":"どうぶつビスケッツ×PPP","description":"けものフレンズ 主題歌（MC紹介映像BGM）","spotify":"https://open.spotify.com/track/7z0HnNeAREuJmRvQtpQIz0","damNumber":"3776-80","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3776-80","joyNumber":"692747","joyUrl":"https://www.joysound.com/web/search/song/604068","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05c47f/l03e218.html","youtubeUrl":"//youtu.be/xkMdLcB_vNU"}]},{"name":"Summer Camp 2017","background":"../../res/img/backgrounds/camp_2017_summer.webp","theme":"夏が君を動かす。君が世界を動かす。-Move-","poem":"Summer moves your heart. You inspire the World .\\n\\n夏は不思議な力を持っている。\\n\\n何かに夢中になりたくなる。\\n誰かとはしゃぎたくなる。\\n秘密を語り合いたくなる。\\n新しい自分を見たくなる。\\n\\n夏が君を突き動かす。\\nそこからすべてが始まる。\\n\\n君が動くことで、世界は動き始める。\\nこの夏のテーマは「Move」\\n\\n世界を動かす、感動させる特別な夏へようこそ！\\n","songs":[{"title":"明日も","author":"SHISHAMO","description":"NTTドコモ\\"ドコモの学割「ししゃも？」篇\\" CMソング","spotify":"https://open.spotify.com/track/2GICOigS4ByugDisRegs3M","damNumber":"1083-19","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1083-19","joyNumber":"692522","joyUrl":"https://www.joysound.com/web/search/song/608842","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a056dae/l03e5dd.html","youtubeUrl":"//youtu.be/zhCtzmDWsN0"},{"title":"鱗","author":"秦基博","description":"","spotify":"https://open.spotify.com/track/4IubwxgmXeZtDtYjTaT9gN","damNumber":"5022-68","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5022-68","joyNumber":"163318","joyUrl":"https://www.joysound.com/web/search/song/104055","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04c9d1/l00a8ba.html","youtubeUrl":"//youtu.be/x2WP1ZSQVlQ"},{"title":"SHINY","author":"夜の本気ダンス","description":"NHK Eテレ テレビアニメ「境界のRINNE」第3シリーズ OPテーマソング","spotify":"https://open.spotify.com/track/1WBbfTpuB5GKPRY34YuK6U","damNumber":"6024-24","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6024-24","joyNumber":"694521","joyUrl":"https://www.joysound.com/web/search/song/616682","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05b135/l03f540.html","youtubeUrl":"//youtu.be/6idlVhWIWAE"},{"title":"By My Side","author":"夜の本気ダンス","description":"","spotify":"https://open.spotify.com/track/2dQlCAu1Rbm5la3RyG2PUf","damNumber":"3896-62","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3896-62","joyNumber":"680561","joyUrl":"https://www.joysound.com/web/search/song/534505","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05b135/l039db9.html","youtubeUrl":"//youtu.be/JHFZeM5z0K4"}]},{"name":"Life 那須 Tech ! 2017","background":"../../res/img/backgrounds/sp_camp_2017_nasu.webp","theme":"一年に一度だけ、地獄のような3日間","songs":[{"title":"見たこともない景色","author":"菅田将暉","description":"au「au BLUE CHALLENGE」「応援」編 CMソング","spotify":"https://open.spotify.com/track/7r2BkaNy5vNFgfU39W5AkZ","damNumber":"7020-61","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7020-61","joyNumber":"692579","joyUrl":"https://www.joysound.com/web/search/song/607478","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05c7bf/l03ee0e.html","youtubeUrl":"//youtu.be/YPd6RV0odtM"},{"title":"Stay","author":"Zedd & Alessia Cara","description":"","spotify":"https://open.spotify.com/track/6uBhi9gBXWjanegOb2Phh0","damNumber":"3968-12","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3968-12","joyNumber":"695098","joyUrl":"https://www.joysound.com/web/search/song/616290","lyricsSiteName":"AZLyrics","lyricsUrl":"https://www.azlyrics.com/lyrics/zedd/stay.html","youtubeUrl":"//youtu.be/h--P8HzYZ74"}]},{"name":"Spring Camp 2017","background":"../../res/img/backgrounds/camp_2017_spring.webp","theme":"閃け！春！Spark -Spark! Spring!-","songs":[{"title":"Next Stage with YOU","author":"Perfume","description":"メルセデス・ベンツ × Perfume コラボレーションCMソング","spotify":"https://open.spotify.com/track/6EcyUMdCYXLsv9gfNXGx9U","damNumber":"6271-62","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6271-62","joyNumber":"683507","joyUrl":"https://www.joysound.com/web/search/song/562986","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04cc66/l03a371.html","youtubeUrl":"//youtu.be/3j77uK8hu5A"},{"title":"さよならバイスタンダー","author":"YUKI","description":"TVアニメ「3月のライオン」オープニングテーマ","spotify":"https://open.spotify.com/track/3pCDdB7qVRlXNTIwUtbSUF","damNumber":"6697-77","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6697-77","joyNumber":"691901","joyUrl":"https://www.joysound.com/web/search/song/605414","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a00067b/l03e0d1.html","youtubeUrl":"//youtu.be/Ai0fjnvGFX8"},{"title":"やってみよう","author":"WANIMA","description":"au 冬期CMソング","spotify":"https://open.spotify.com/track/6ahKnsl2tuTCyaBwt45WAz","damNumber":"1104-48","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1104-48","joyNumber":"693346","joyUrl":"https://www.joysound.com/web/search/song/610926","lyricsSiteName":"プチリリ","lyricsUrl":"https://petitlyrics.com/lyrics/2554503","youtubeUrl":"//youtu.be/T383N0Qsk7g"},{"title":"キャリア・ウーマン","author":"ブルゾンちえみ","description":"注意点ヒューマン元ネタ\\n[注意点ヒューマン歌詞](original-lyrics/注意点ヒューマン2017Spring.md)","spotify":"","damNumber":"5069-97","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5069-97","joyNumber":"696618","joyUrl":"https://www.joysound.com/web/search/song/632964","lyricsSiteName":"","lyricsUrl":"","youtubeUrl":"//youtu.be/Y0JbtAJ8Hgo"},{"title":"さくら体操","author":"NHK","description":"","spotify":"","damNumber":"4630-01","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4630-01","joyNumber":"28584","joyUrl":"https://www.joysound.com/web/search/song/26476","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a0006b5/l001e01.html","youtubeUrl":"//youtu.be/pnBnu5v8KTw"}]}],"2018":[{"name":"Xmas Camp 2018","background":"../../res/img/backgrounds/camp_2018_xmas.webp","theme":"一年に一度だけ、魔法のような数日間。 -Make with magic-","songs":[{"title":"ループ","author":"edda","description":"テレビ東京土曜ドラマ ドラマ24 2018/4Q 忘却のサチコEDSong","spotify":"https://open.spotify.com/track/4yGMw00rlZtFRcBW77dljA","damNumber":"5176-32","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5176-32","joyNumber":"433711","joyUrl":"https://www.joysound.com/web/search/song/716232","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05cfc3/l04926a.html","youtubeUrl":"//youtu.be/-0-fVutBn38"},{"title":"予感","author":"SUPER BEAVER","description":"テックな予感ぷろじぇくと\\n[Movie created by とき。](https://youtu.be/4tvJNJ0dsDY)\\n[Movie created by あおい](https://youtu.be/XZNGn_0geRU)\\n[Movie created by わくわくさん](https://youtu.be/3edebFRRC40)\\nフジテレビ火曜ドラマ 2018/4Q 僕らは奇跡でできているEDSong","spotify":"https://open.spotify.com/track/2CzPCgj02ZAf6iugJoc9G0","damNumber":"5153-16","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5153-16","joyNumber":"433195","joyUrl":"https://www.joysound.com/web/search/song/713175","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a050f66/l049c98.html","youtubeUrl":"//youtu.be/XnYwwyXPt70"}]},{"name":"Global IT Camp 2018","background":"../../res/img/backgrounds/global_camp_2018_nus.webp","theme":"Think globally, Change the world!","songs":[{"title":"はじまり feat. キヨサク from MONGOL800","author":"Mrs. GREEN APPLE","description":"オープニング楽曲","spotify":"https://open.spotify.com/track/0teqQ0PYqVDyyXJuPOyMhu","damNumber":"6093-89","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6093-89","joyNumber":"428173","joyUrl":"https://www.joysound.com/web/search/song/685515","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05a2d6/l045f78.html","youtubeUrl":"//youtu.be/YH1aOeTX7Vs"},{"title":"Classic","author":"MKTO","description":"","spotify":"https://open.spotify.com/track/6FE2iI43OZnszFLuLtvvmg","damNumber":"3947-95","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3947-95","joyNumber":"","joyUrl":"","lyricsSiteName":"azlyrics","lyricsUrl":"https://www.azlyrics.com/lyrics/mkto/classic.html","youtubeUrl":"//youtu.be/4Ba_qTPA4Ds"},{"title":"Somebody to you","author":"The Vamps","description":"","spotify":"https://open.spotify.com/track/7ahubBqIp4T7WMXdBEuJYB","damNumber":"3932-86","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3932-86","joyNumber":"678565","joyUrl":"https://www.joysound.com/web/search/song/489534","lyricsSiteName":"azlyrics","lyricsUrl":"https://www.azlyrics.com/lyrics/vamps/somebodytoyou.html","youtubeUrl":"//youtu.be/0go2nfVXFgA"}]},{"name":"Summer Camp 2018","background":"../../res/img/backgrounds/camp_2018_summer.webp","theme":"世界にひとつだけ、あなただけの夏の「物語」へ。 -Only one Your own Summer Story-","songs":[{"title":"はじまり feat. キヨサク from MONGOL800","author":"Mrs. GREEN APPLE","description":"","spotify":"https://open.spotify.com/track/0teqQ0PYqVDyyXJuPOyMhu","damNumber":"6093-89","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6093-89","joyNumber":"428173","joyUrl":"https://www.joysound.com/web/search/song/685515","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05a2d6/l045f78.html","youtubeUrl":"//youtu.be/YH1aOeTX7Vs"},{"title":"I WANT YOU BACK","author":" TWICE feat.The Jackson 5","description":"映画 センセイ君主 主題歌","spotify":"","damNumber":"7343-72","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7343-72","joyNumber":"428173","joyUrl":"https://www.joysound.com/web/search/song/695732","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04f8f9/l048610.html","youtubeUrl":"//youtu.be/X3H-4crGD6k"}]},{"name":"Spring Camp 2018","background":"../../res/img/backgrounds/camp_2018_spring.webp","theme":"始まりの春。 -STARTING-","songs":[{"title":"始まりの朝","author":"Official髭男dism","description":"","spotify":"https://open.spotify.com/track/27ZIwGuQ4dapegDtkDF421","damNumber":"7416-55","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7416-55","joyNumber":"697374","joyUrl":"https://www.joysound.com/web/search/song/615796","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a059eab/l03f34e.html","youtubeUrl":"//youtu.be/EusUvmUi2Xk"},{"title":"Hollow","author":"DNCE","description":"","spotify":"","damNumber":"","damUrl":"","joyNumber":"424097","joyUrl":"https://www.joysound.com/web/search/song/659520","lyricsSiteName":"Genius Lyrics","lyricsUrl":"https://genius.com/Dnce-hollow-lyrics","youtubeUrl":"//youtu.be/hTnQBehHcgk"},{"title":"さくら体操","author":"NHK","description":"","spotify":"","damNumber":"4630-01","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4630-01","joyNumber":"28584","joyUrl":"https://www.joysound.com/web/search/song/26476","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a0006b5/l001e01.html","youtubeUrl":"//youtu.be/pnBnu5v8KTw"}]}],"2019":[{"name":"Xmas Camp 2019","background":"../../res/img/backgrounds/camp_2019_xmas.webp","theme":"一年に一度だけ、特別な数日間。","songs":[{"title":"lovin'","author":"Mrs. GREEN APPLE","description":"フジテレビ系「めざましどようび」テーマソング","spotify":"https://open.spotify.com/track/19kF4PkH9RmZlMSEOhSgdQ","damNumber":"6233-06","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6233-06","joyNumber":"442282","joyUrl":"https://www.joysound.com/web/search/song/773560","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05a2d6/l04d234.html","youtubeUrl":"//youtu.be/Ff7kdaIQvQM"},{"title":"ハピネス","author":"AI","description":"コカ・コーラ 冬期CMソング","spotify":"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI","damNumber":"6484-08","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08","joyNumber":"29625","joyUrl":"https://www.joysound.com/web/search/song/186425","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a001bf4/l027392.html","youtubeUrl":"//youtu.be/uKgmu8g-kXE"}]},{"name":"GLOBAL IT Camp 2019","background":"../../res/img/backgrounds/common_global.webp","theme":"THINK GLOBALLY,CHANGE THE WORLD","songs":[{"title":"High Hopes","author":"Panic! At The Disco","description":"","spotify":"https://open.spotify.com/track/1rqqCSm0Qe4I9rUvWncaom","damNumber":"3844-71","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3844-71","joyNumber":"437459","joyUrl":"https://www.joysound.com/web/search/song/735036","lyricsSiteName":"AZLyrics","lyricsUrl":"https://www.azlyrics.com/lyrics/panicatthedisco/highhopes.html","youtubeUrl":"//youtu.be/IPXIgEAGe4U"}]},{"name":"Summer Camp 2019","background":"../../res/img/backgrounds/camp_2019_summer.webp","theme":"『夏』が、好きだああああああああああああ。","songs":[{"title":"雀ノ欠伸","author":"Saucy Dog","description":"サントリー天然水 GREEN TEA「徒然なる トリビュート」 参加楽曲","spotify":"https://open.spotify.com/track/093PMBsGoUGQp7FeHth4OV","damNumber":"5233-56","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5223-56","joyNumber":"441325","joyUrl":"https://www.joysound.com/web/search/song/767816","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05fdb9/l04c4cf.html","youtubeUrl":"//youtu.be/IJRdeZA05OE"},{"title":"Player","author":"chelmico","description":"Apple Watch Series4 CMソング","spotify":"https://open.spotify.com/track/6ZgrQlvRIPKVTCLV02hnMt","damNumber":"5171-58","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5171-58","joyNumber":"431254","joyUrl":"https://www.joysound.com/web/search/song/697127","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05e5c8/l04828c.html","youtubeUrl":"//youtu.be/P7ds78eOLjU"}]},{"name":"English×IT Camp 2019","theme":"THINK GLOBALLY,CHANGE THE WORLD","isBefore2024":true,"songs":[{"title":"BrandNew","author":"Ben Rector","description":"","spotify":"https://open.spotify.com/track/07m8PuXxxv5J4qPEDq6ZkK","damNumber":"","damUrl":"","joyNumber":"","joyUrl":"","lyricsSiteName":"AZLyrics","lyricsUrl":"https://www.azlyrics.com/lyrics/benrector/brandnew.htmls","youtubeUrl":"//youtu.be/D7I8-bS7vBs"}]},{"name":"Life 伊豆 Tech ! 2019","background":"../../res/img/backgrounds/sp_camp_2019_izu.webp","theme":"社会が抱える実課題をIT×Teamで解決!","songs":[{"title":"オーバーライト","author":"フジファブリック","description":"J SPORTS STADIUM2019 野球中継テーマソング","spotify":"https://open.spotify.com/track/6IBRw9dEbMyjGlrqld0bx3","damNumber":"7048-85","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7048-85","joyNumber":"","joyUrl":"","lyricsSiteName":"プチリリ","lyricsUrl":"https://petitlyrics.com/lyrics/2793901","youtubeUrl":"//youtu.be/mFEU5s6FmP0"}]},{"name":"Spring Camp 2019","background":"../../res/img/backgrounds/camp_2019_spring.webp","theme":"この春よ、止まれ","poem":"この春よ、\\n止まれ\\nこの時間が、止まっていてほしいと思うことがある。\\nこの時間が、ずっと続くならどんなにいいかと思う。\\nかけがえのない時間こそ、すぐに過ぎ去り、儚くも思える。\\nただ、大きく違うのは、その記憶のある、自分。\\nそんな記憶の積み重ねが、今をつくっている。\\n記憶は過去の”足跡”、記憶は現在の”座標”。\\nだからこそ、叫びたい！\\n「この春よ、止まれ！」\\nこの瞬間を、思いっきり楽しもう。\\nこの記憶を、特別な君のものにしよう。\\nそう、この記憶は、君の未来をつくる、”道しるべ”だから。\\nさあ、春キャンプをはじめよう。\\n","songs":[{"title":"拝啓、少年よ","author":"Hump Back","description":"","spotify":"https://open.spotify.com/track/0aaZG5azeJei81A2WptwC8","damNumber":"5125-35","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5125-35","joyNumber":"430817","joyUrl":"https://www.joysound.com/web/search/song/691615","lyricsSiteName":"プチリリ","lyricsUrl":"https://petitlyrics.com/lyrics/2747881","youtubeUrl":"//youtu.be/d6i4AtCxrDo"},{"title":"チェンジユアワールド","author":"go!go!vanillas","description":"[レコチョク](//recochoku.jp/song/S1007179020/)","spotify":"https://open.spotify.com/track/7KFTYTKIslK4CXqP4dOkDe","damNumber":"6207-48","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6207-48","joyNumber":"432931","joyUrl":"https://www.joysound.com/web/search/song/710938","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a059479/l0481b6.html","youtubeUrl":"//youtu.be/8C5BPH1_4Uk"},{"title":"Tを探そう","author":"TT兄弟","description":"注意点「Tを探そう・Cを探そう」元ネタ","spotify":"","damNumber":"","damUrl":"","joyNumber":"","joyUrl":"","lyricsSiteName":"","lyricsUrl":"","youtubeUrl":"//youtu.be/yir2I0X6siA"}]}],"2020":[{"name":"Winter Camp 2020","background":"../../res/img/backgrounds/camp_2020_winter.webp","theme":"かつてないオンラインの祭典が、この冬","songs":[{"title":"群青","author":"YOASOBI","description":"ブルボン「アルフォート×YOASOBI Special Movie inspired by ブルーピリオド」CMソング","spotify":"https://open.spotify.com/track/1zd35Y44Blc1CwwVbW3Qnk","damNumber":"5285-69","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5285-69","joyNumber":"486218","joyUrl":"https://www.joysound.com/web/search/song/486218","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a061652/l051a48.html","youtubeUrl":"//youtu.be/Y4nEEZwckuU"}]},{"name":"Summer Camp 2020","background":"../../res/img/backgrounds/camp_2020_summer.webp","theme":"走れ。夏。","poem":"走る。全速力で。無我夢中で。\\nまわりが見えなくなったっていい。\\nのめりこめ、今この瞬間に。\\n\\n自分だけの「世界」よ、もっともっとひろがれ。\\n\\nさあ、無限大の夏が今始まる。\\n","songs":[{"title":"あの夢をなぞって","author":"YOASOBI","description":"フジテレビ 「情報プレゼンター とくダネ!」 2020Jun お天気コーナー Monthly Song","spotify":"https://open.spotify.com/track/5ptl2PXkiSth54HCuGO7vN","damNumber":"5267-36","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5267-36","joyNumber":"446885","joyUrl":"https://www.joysound.com/web/search/song/822624","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a061652/l050f8b.html","youtubeUrl":"//youtu.be/sAuEeM_6zpk"},{"title":"怪獣の花唄","author":"Vaundy","description":"","spotify":"https://open.spotify.com/track/7dTW21YAJxnAOiUh7Rtu9S","damNumber":"5277-09","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5277-09","joyNumber":"485151","joyUrl":"https://www.joysound.com/web/search/song/830943","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a060fc4/l0506e5.html","youtubeUrl":"//youtu.be/UM9XNpgrqVk"}]},{"name":"Spring Camp 2020","background":"../../res/img/backgrounds/camp_2020_spring.webp","theme":"Spring is Comming -はじまりの合図は「春」-","songs":[{"title":"旅は道連れ","author":"Official髭男dism","description":"Suzuki SWIFT TVCM Song","spotify":"https://open.spotify.com/track/4vrCxIPGj6nUdvm1zsiKxO","damNumber":"6223-79","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6223-79","joyNumber":"443149","joyUrl":"https://www.joysound.com/web/search/song/791332","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a059eab/l04dc0f.html","youtubeUrl":"//youtu.be/uXMsI4yTSeM"},{"title":"Party All Night","author":"FAITH","description":"TBS 王様のブランチ 2020Jan ED Theme songh","spotify":"https://open.spotify.com/track/6kphW6COHjqknjAAelZxd4","damNumber":"5231-48","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5231-48","joyNumber":"803513","joyUrl":"https://www.joysound.com/web/search/song/816397","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04acbe/l04ef90.html","youtubeUrl":"//youtu.be/t5noRnkNy4E"}]}],"2021":[{"name":"Winter Camp 2021","background":"../../res/img/backgrounds/camp_2021_winter.webp","songs":[{"title":"BLUE SOULS","author":"A_o","description":"","spotify":"https://open.spotify.com/track/4oDAokMtC6RRme0DFQlg79","damNumber":"5375-18","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5375-18","joyNumber":"490641","joyUrl":"https://www.joysound.com/web/search/song/878603","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a062d4e/l05562d.html","youtubeUrl":"//youtu.be/33ZWA1GrrXY"}]},{"name":"Summer Camp 2021","background":"../../res/img/backgrounds/camp_2021_summer.webp","songs":[{"title":"しわあわせ","author":"Vaundy","description":"","spotify":"https://open.spotify.com/track/4GvJskA0Jn4NorP2YWxuaf","damNumber":"5351-39","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5351-39","joyNumber":"490361","joyUrl":"https://www.joysound.com/web/search/song/876689","lyricsSiteName":"Lyrical Nonsense","lyricsUrl":"https://www.lyrical-nonsense.com/lyrics/vaundy/shiaawase/","youtubeUrl":"//youtu.be/JwmGruvGt_I"},{"title":"シュガーハイウェイ","author":"神山羊","description":"","spotify":"https://open.spotify.com/track/2J5yL2noo3SK9pQzv9lcSP","damNumber":"5226-38","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5226-38","joyNumber":"438157","joyUrl":"https://www.joysound.com/web/search/song/745741","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05f5f3/l04b632.html","youtubeUrl":"//youtu.be/IqrbCSiJCA4"}]},{"name":"Spring Camp 2021","background":"../../res/img/backgrounds/camp_2021_spring.webp","theme":"この春も、やまないYELLを君に","songs":[{"title":"ティーンエイジサンセット","author":"Hump Back","description":"","spotify":"https://open.spotify.com/track/4GdaElLBtrEfFGVNUlWroI","damNumber":"5238-32","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5238-32","joyNumber":"485874","joyUrl":"https://www.joysound.com/web/search/song/843867","lyricsSiteName":"Lyrical Nonsense","lyricsUrl":"https://www.lyrical-nonsense.com/lyrics/hump-back/teenage-sunset/","youtubeUrl":"//youtu.be/8fMem5-ONEg"},{"title":"ココロノナカ","author":"RADWIMPS","description":"","spotify":"https://open.spotify.com/track/3gBzYFtF0BATGZFUKKOP1b","damNumber":"7096-74","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7096-74","joyNumber":"485392","joyUrl":"https://www.joysound.com/web/search/song/841935","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04ac97/l051b90.html","youtubeUrl":"//youtu.be/SbGFpis3hiw"}]}],"2022":[{"name":"Xmas Camp 2022","background":"../../res/img/backgrounds/camp_2022_xmas.webp","songs":[{"title":"ONE","author":"Aimer","description":"","spotify":"https://open.spotify.com/track/01jAlHee4psROggfWjk8hp","damNumber":"3914-52","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3914-52","joyNumber":"698510","joyUrl":"https://www.joysound.com/web/search/song/642264","lyricsSiteName":"Lyrical Nonsense","lyricsUrl":"https://www.lyrical-nonsense.com/lyrics/aimer/one","youtubeUrl":"//youtu.be/IvKIiRKmnSY"},{"title":"ハピネス","author":"AI","description":"コカ・コーラ 冬期CMソング","spotify":"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI","damNumber":"6484-08","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08","joyNumber":"29625","joyUrl":"https://www.joysound.com/web/search/song/186425","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a001bf4/l027392.html","youtubeUrl":"//youtu.be/uKgmu8g-kXE"}]},{"name":"Summer Camp 2022","background":"../../res/img/backgrounds/camp_2022_summer.webp","songs":[{"title":"ばかまじめ","author":"Creepy Nuts＆Ayase＆幾田りら","description":"","spotify":"https://open.spotify.com/track/7FiTlLKW0Knj8rm7lMa9N7","damNumber":"1278-23","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1278-23","joyNumber":"497072","joyUrl":"https://www.joysound.com/web/search/song/920053","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a063b01/l0580da.html","youtubeUrl":"//youtu.be/zNOe2fK1hM0"},{"title":"突破口","author":"SUPER BEAVER","description":"","spotify":"https://open.spotify.com/track/2JNl3zf7dLaK3ceN12RTOW","damNumber":"6836-84","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6836-84","joyNumber":"486786","joyUrl":"https://www.joysound.com/web/search/song/850101","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a050f66/l05235f.html","youtubeUrl":"//youtu.be/AT2tulhSprE"}]},{"name":"Spring Camp 2022","background":"../../res/img/backgrounds/camp_2022_spring.webp","songs":[{"title":"HAVE A NICE DAY","author":"imase","description":"","spotify":"https://open.spotify.com/track/5SWxyVd5Q5c1jzPpdL9olt","damNumber":"6993-21","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6993-21","joyNumber":"494769","joyUrl":"https://www.joysound.com/web/search/song/905072","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a063583/l056e9e.html","youtubeUrl":"//youtu.be/pRlzN2I9Knw"},{"title":"光るとき","author":"羊文学","description":"","spotify":"https://open.spotify.com/track/7Aflm6F9jMApKat1tjvhxT","damNumber":"5306-93","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5306-93","joyNumber":"495717","joyUrl":"https://www.joysound.com/web/search/song/897823","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05d579/l0573ec.html","youtubeUrl":"//youtu.be/qknDI1k39Ic"}]}],"2023":[{"name":"Xmas Camp 2023","background":"../../res/img/backgrounds/camp_2023_xmas.webp","songs":[{"title":"最高到達点","author":"SEKAI NO OWARI","description":"TVアニメ「ONE PIECE」主題歌","spotify":"https://open.spotify.com/track/2hXPmiqKdXcbV0L1VKnTDN","damNumber":"5848-22","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5848-22","joyNumber":"620689","joyUrl":"https://www.joysound.com/web/search/song/985197","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a055790/l05e0db.html","youtubeUrl":"//youtu.be/BNguaY5exIk"},{"title":"ハピネス","author":"AI","description":"コカ・コーラ 冬期CMソング","spotify":"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI","damNumber":"6484-08","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08","joyNumber":"29625","joyUrl":"https://www.joysound.com/web/search/song/186425","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a001bf4/l027392.html","youtubeUrl":"//youtu.be/uKgmu8g-kXE"}]},{"name":"Summer Camp 2023","background":"../../res/img/backgrounds/camp_2023_summer.webp","songs":[{"title":"夏は巡る","author":"PEOPLE1","description":"","spotify":"https://open.spotify.com/track/2EHUDtTMLscFB0DKXp03A7","damNumber":"5481-43","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5481-43","joyNumber":"620760","joyUrl":"https://www.joysound.com/web/search/song/992263","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a064b0d/l05cc7e.html","youtubeUrl":"//youtu.be/K7h1WF73YwM"},{"title":"ことほぎ","author":"Tele","description":"","spotify":"https://open.spotify.com/track/5bNzSOlYpTNdTm5aZMgi8F","damNumber":"5470-24","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5470-24","joyNumber":"617027","joyUrl":"https://www.joysound.com/web/search/song/971877","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a064687/l05c9d6.html","youtubeUrl":"//youtu.be/bcTRLCpId7o"}]},{"name":"Spring Camp 2023","background":"../../res/img/backgrounds/camp_2023_spring.webp","songs":[{"title":"現在を生きるのだ。","author":"Saucy Dog","description":"第101回 全国高校サッカー選手権大会応援歌","spotify":"https://open.spotify.com/track/71LvsWD50UELzZYywx9BWe","damNumber":"1427-11","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1427-11","joyNumber":"613455","joyUrl":"https://www.joysound.com/web/search/song/951401","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05fdb9/l05b431.html","youtubeUrl":"//youtu.be/tbLMacyYZb8"},{"title":"ミラーチューン","author":"ずっと真夜中でいいのに。","description":"","spotify":"https://open.spotify.com/track/6KB2OPefadupVDnVNYq23A","damNumber":"5306-93","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1127-07","joyNumber":"498201","joyUrl":"https://www.joysound.com/web/search/song/923685","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05f6e2/l058572.html","youtubeUrl":"//youtu.be/BVvvUGP0MFw"}]}],"2024":[{"name":"Xmas Camp 2024","background":"../../res/img/backgrounds/camp_2024_xmas.webp","songs":[{"title":"ユートピア","author":"imase","description":"映画 SAND LAND 主題歌","spotify":"https://open.spotify.com/track/2ALfxGK9zPIkTvJbCjkSeI","damNumber":"1317-96","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1317-96","joyNumber":"618349","joyUrl":"https://www.joysound.com/web/search/song/976666","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a063583/l05d485.html","youtubeUrl":"//youtu.be/ePuwo3lYwgc"},{"title":"ハピネス","author":"AI","description":"コカ・コーラ 冬期CMソング","spotify":"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI","damNumber":"6484-08","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08","joyNumber":"29625","joyUrl":"https://www.joysound.com/web/search/song/186425","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a001bf4/l027392.html","youtubeUrl":"//youtu.be/uKgmu8g-kXE"}]},{"name":"Summer Camp 2024","background":"../../res/img/backgrounds/camp_2024_summer.webp","songs":[{"title":"君のいる方へ","author":"オレンジスパイニクラブ","description":"","spotify":"https://open.spotify.com/track/4n4e4TBbELSpb2P9pk1Y0t","damNumber":"1384-26","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1384-26","joyNumber":"499721","joyUrl":"https://www.joysound.com/web/search/song/911692","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a061b57/l059659.html","youtubeUrl":"//youtu.be/tfchdsRncZk"},{"title":"世界 feat. Moto from Chilli Beans. & Who-ya Extended","author":"KERENMI","description":"Honda VEZEL CMソング","spotify":"https://open.spotify.com/track/1ov4hpi6AicHhPvkr2qHXj","damNumber":"1412-67","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1412-67","joyNumber":"627533","joyUrl":"https://www.joysound.com/web/search/song/1039359","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a06120b/l0607ef.html","youtubeUrl":"//youtu.be/uXhL_a0hfLU"}]},{"name":"Spring Camp 2024","background":"../../res/img/backgrounds/camp_2024_spring.webp","songs":[{"title":"好きなものは手のひらの中","author":"Conton Candy","description":"","spotify":"https://open.spotify.com/track/3FrwPF0EFJFLE9yVprrbd5","damNumber":"5443-66","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5443-66","joyNumber":"","joyUrl":"","lyricsSiteName":"歌ネット","lyricsUrl":"https://www.uta-net.com/song/334372/","youtubeUrl":"//youtu.be/WoduRoHslg0"},{"title":"鈴々","author":"PEOPLE 1","description":"","spotify":"https://open.spotify.com/track/6IfLdaA77asZvofXazYibP","damNumber":"5486-98","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5486-98","joyNumber":"623365","joyUrl":"https://www.joysound.com/web/search/song/999873","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a064b0d/l05f438.html","youtubeUrl":"//youtu.be/7synqOiMORc"}]}],"2025":[{"name":"Xmas Camp 2025","background":"../../res/img/backgrounds/camp_2025_xmas.webp","songs":[{"title":"PLAYERS","author":"YOASOBI","description":"PlayStation CMソング","spotify":"https://open.spotify.com/track/0zsPR5FPw60WXokejB9UI8","damNumber":"1060-71","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1060-71","joyNumber":"635895","joyUrl":"https://www.joysound.com/web/search/song/1079168","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a061652/l063f06.html","youtubeUrl":"//youtu.be/ZfR_FP_7w00"},{"title":"ハピネス","author":"AI","description":"コカ・コーラ 冬期CMソング","spotify":"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI","damNumber":"6484-08","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08","joyNumber":"29625","joyUrl":"https://www.joysound.com/web/search/song/186425","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a001bf4/l027392.html","youtubeUrl":"//youtu.be/uKgmu8g-kXE"}]},{"name":"Summer Camp 2025","background":"../../res/img/backgrounds/camp_2025_summer.webp","songs":[{"title":"バイマイフレンド","author":"bokula.","description":"","spotify":"https://open.spotify.com/track/73qkznNMToO2Xfa7VzyBvm","damNumber":"5423-40","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5423-40","joyNumber":"812225","joyUrl":"https://www.joysound.com/web/search/song/919640","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a063048/l058ac7.html","youtubeUrl":"//youtu.be/IOBny9KrdMg"},{"title":"月面着陸計画","author":"tuki.","description":"スズキ「ソリオバンディット」CMソング","spotify":"https://open.spotify.com/track/2mqSMiMiL36K7vTyU4K0Vc","damNumber":"5553-14","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5553-14","joyNumber":"633169","joyUrl":"https://www.joysound.com/web/search/song/1077783","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a067492/l063283.html","youtubeUrl":"//youtu.be/mX9IJ7Urn28"}]},{"name":"Spring Camp 2025","background":"../../res/img/backgrounds/camp_2025_spring.webp","songs":[{"title":"ひとりぼっちと廊下の窓","author":"サバシスター","description":"ブルボン 濃厚チョコブラウニー CMソング","spotify":"https://open.spotify.com/track/5tDnrXI3oowmppw6Zl6FTy","damNumber":"5512-83","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5512-83","joyNumber":"630673","joyUrl":"https://www.joysound.com/web/search/song/1059552","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a066254/l061e70.html","youtubeUrl":"//youtu.be/-zmfWs7CAIk"},{"title":"アタシのドレス","author":"ねぐせ。","description":"TVアニメ「メダリスト」エンディングテーマ","spotify":"https://open.spotify.com/track/7dQovfNtTx042gZErs0bdq","damNumber":"5587-14","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5587-14","joyNumber":"634020","joyUrl":"https://www.joysound.com/web/search/song/1075134","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a062d50/l063303.html","youtubeUrl":"//youtu.be/8wZw9HePP-I"}]}],"2026":[{"name":"Spring Camp 2026","background":"../../res/img/backgrounds/camp_2026_spring.webp","songs":[{"title":"偉生人","author":"Vaundy","description":"NHK大河ドラマ『青天を衝け』インスパイアードソング","spotify":"https://open.spotify.com/track/0v4WBsVrgpPIsiMPM6b7eI","damNumber":"1279-96","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1279-96","joyNumber":"642661","joyUrl":"https://www.joysound.com/web/search/song/901166","lyricsSiteName":"歌ネット","lyricsUrl":"https://www.uta-net.com/song/382470/","youtubeUrl":"//youtu.be/aDaWuvpB_Kw"},{"title":"赤春花 (feat.幾田りら)","author":"Sumika","description":"","spotify":"https://open.spotify.com/track/2n5t3h4lXpMMEnBt7PSJEp","damNumber":"1507-86","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1507-86","joyNumber":"647188","joyUrl":"https://www.joysound.com/web/search/song/1160644","lyricsSiteName":"歌ネット","lyricsUrl":"https://www.uta-net.com/song/388543/","youtubeUrl":"//youtu.be/PZ3CB2vmGYo"}]}]}`),school:{2020:[{name:`LiT! School 2020 Spring`,background:`../../res/img/backgrounds/school.webp`,songs:[{title:`スターマーカー`,author:`KANA-BOON`,description:`アニメ「僕のヒーローアカデミア」第4期文化祭編 OPテーマ`,spotify:`https://open.spotify.com/track/6NAtVhZ5LrvoKy2Gijr5gj`,damNumber:`5980-99`,damUrl:`https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5980-99`,joyNumber:`716301`,joyUrl:`https://www.joysound.com/web/search/song/819000`,lyricsSiteName:`J-Lyric.net`,lyricsUrl:`https://j-lyric.net/artist/a05808c/l04f540.html`,youtubeUrl:`//youtu.be/vk0iPWFxQ9w`}]},{name:`LiT! School 2020 Autumn`,background:`../../res/img/backgrounds/school.webp`,songs:[{title:`青すぎる空`,author:`the peggies`,description:`映画「アルプススタンドのはしの方」主題歌`,spotify:`https://open.spotify.com/track/7hxTHH9roB4VafPocZ0Gov`,damNumber:`5244-40`,damUrl:`https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5244-40`,joyNumber:`449264`,joyUrl:`https://www.joysound.com/web/search/song/827980`,lyricsSiteName:`歌ネット`,lyricsUrl:`https://www.uta-net.com/song/283897/`,youtubeUrl:`//youtu.be/o813X9efcU4`}]}],2021:[{name:`LiT! School 2021 Spring`,background:`../../res/img/backgrounds/school.webp`,songs:[{title:`シアターライフ`,author:`Mr.FanTastiC`,description:``,spotify:`https://open.spotify.com/track/5zB6jCoumWJzFyiqeIup5c`,damNumber:``,damUrl:``,joyNumber:``,joyUrl:``,lyricsSiteName:`歌ネット`,lyricsUrl:`https://www.uta-net.com/song/300056/`,youtubeUrl:`//youtu.be/cU3y0Bja-6Y`}]},{name:`LiT! School 2021 Autumn`,background:`../../res/img/backgrounds/school.webp`,songs:[{title:`ナイトダンサー`,author:`秋山黄色`,description:`TVCM「Splash ボートレーサーになりたい！」イメージソング`,spotify:`https://open.spotify.com/track/7sTR8auuaZfamoooIssjiX`,damNumber:`6955-94`,damUrl:`https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6955-94`,joyNumber:`492925`,joyUrl:`https://www.joysound.com/web/search/song/894674`,lyricsSiteName:`J-Lyric.net`,lyricsUrl:`https://j-lyric.net/artist/a05f804/l055cd6.html`,youtubeUrl:`//youtu.be/J3PTrz_Ngko`}]}],2022:[{name:`LiT! School 2022 Spring`,background:`../../res/img/backgrounds/school.webp`,songs:[{title:`春`,author:`Sundae May Club`,description:``,spotify:`https://open.spotify.com/track/0V3lFWFAEoyYEznvuCCEsr`,damNumber:``,damUrl:``,joyNumber:``,joyUrl:``,lyricsSiteName:`Eggs`,lyricsUrl:`https://eggs.mu/artist/SundaeMayClub/song/d5223914-9724-43d8-a59b-00b425c00d3f`,youtubeUrl:`//youtu.be/ypOd7kRMgBU`}]},{name:`LiT! School 2022 Autumn`,background:`../../res/img/backgrounds/school.webp`,songs:[{title:`再生`,author:`ハンブレッダーズ`,description:``,spotify:`https://open.spotify.com/track/60d5nF0QF1iTOlFLT37uWb`,damNumber:`6993-29`,damUrl:`https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6993-29`,joyNumber:`613536`,joyUrl:`https://www.joysound.com/web/search/song/899227`,lyricsSiteName:`J-Lyric.net`,lyricsUrl:`https://j-lyric.net/artist/a05ddf7/l056bed.html`,youtubeUrl:`//youtu.be/6cKj4VCfdhI`}]}],2023:[{name:`LiT! School 2023 Spring`,background:`../../res/img/backgrounds/school.webp`,songs:[{title:`サマーブルーム`,author:`リュックと添い寝ごはん`,description:`「爽快系目薬 ロートZ!」CMソング`,spotify:`https://open.spotify.com/track/6b7PLhYnmxUXZepngv875O`,damNumber:`1337-68`,damUrl:`https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1337-68`,joyNumber:`612210`,joyUrl:`https://www.joysound.com/web/search/song/932839`,lyricsSiteName:`J-Lyric.net`,lyricsUrl:`https://j-lyric.net/artist/a0613be/l0596b4.html`,youtubeUrl:`//youtu.be/fLJx2auUR-Y`}]},{name:`LiT! School 2023 Autumn`,background:`../../res/img/backgrounds/school.webp`,songs:[{title:`tour`,author:`Hump Back`,description:``,spotify:`https://open.spotify.com/track/27pulCzerpyS7LeivohwM2`,damNumber:`5492-08`,damUrl:`https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5492-08`,joyNumber:`617682`,joyUrl:`https://www.joysound.com/web/search/song/974351`,lyricsSiteName:`歌ネット`,lyricsUrl:`https://www.uta-net.com/song/369949/`,youtubeUrl:`//youtu.be/GTCdfgJV1tc`}]}],2024:[{name:`LiT! School 2024 Spring`,background:`../../res/img/backgrounds/school.webp`,songs:[{title:`スーパーソニックガール`,author:`ズーカラデル`,description:``,spotify:`https://open.spotify.com/track/5fNRcSdGa4tmEWwPtGPL9p`,damNumber:`1131-68`,damUrl:`https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1131-68`,joyNumber:`624419`,joyUrl:`https://www.joysound.com/web/search/song/1013744`,lyricsSiteName:`J-Lyric.net`,lyricsUrl:`https://j-lyric.net/artist/a05f3fc/l05f8f2.html`,youtubeUrl:`//youtu.be/G1AKAQo1DaE`}]},{name:`LiT! School 2024 Autumn`,background:`../../res/img/backgrounds/school.webp`,songs:[{title:`⚡️`,author:`ハンブレッダーズ`,description:`MBSベースボールパーク2025 テーマソング`,spotify:`https://open.spotify.com/track/2l2JbsZwpWVsAMiScxTBfA`,damNumber:`1422-82`,damUrl:`https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1422-82`,joyNumber:`629646`,joyUrl:`https://www.joysound.com/web/search/song/1052363`,lyricsSiteName:`UtaTen`,lyricsUrl:`https://utaten.com/lyric/ma24071211/`,youtubeUrl:`//youtu.be/XkbHAjmTVUo`}]}],2025:[{name:`LiT! School 2025 Spring`,background:`../../res/img/backgrounds/school.webp`,songs:[{title:`ハッピーをちょうだい`,author:`パーカーズ`,description:``,spotify:`https://open.spotify.com/track/0UBh9doZhpZVfUBfv4r0sU`,damNumber:`5469-95`,damUrl:`https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5469-95`,joyNumber:`813662`,joyUrl:`https://www.joysound.com/web/search/song/972788`,lyricsSiteName:`歌ネット`,lyricsUrl:`https://www.uta-net.com/song/336358/`,youtubeUrl:`//youtu.be/PWzbtOEe25k`}]},{name:`LiT! School 2025 Autumn`,background:`../../res/img/backgrounds/school.webp`,songs:[{title:`才能`,author:`サバシスター`,description:`森永製菓「学校にinゼリー」CMソング`,spotify:`https://open.spotify.com/track/7n8LLb5Mu0OL0E6XmaXOt2`,damNumber:`1230-97`,damUrl:`https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1230-97`,joyNumber:`641253`,joyUrl:`https://www.joysound.com/web/search/song/1133292`,lyricsSiteName:`歌ネット`,lyricsUrl:`https://www.uta-net.com/song/379491/`,youtubeUrl:`//youtu.be/caD2cphuURY`}]}],2026:[{name:`LiT! School 2026 Spring`,background:`../../res/img/backgrounds/school.webp`,songs:[{title:`yummy goodday`,author:`CENT`,description:`アニメ「とんでもスキルで異世界放浪メシ2」OPテーマ`,spotify:`https://open.spotify.com/track/11nZ6Nr5ZBaV9pftKXWXau`,damNumber:`1233-91`,damUrl:`https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=1233-91`,joyNumber:`641514`,joyUrl:`https://www.joysound.com/web/search/song/1132294`,lyricsSiteName:`J-Lyric.net`,lyricsUrl:`https://j-lyric.net/artist/a067489/l06627d.html`,youtubeUrl:`//youtu.be/rxAM0ncKB9Q`}]}]},event:JSON.parse(`{"2015":[{"name":"Be Startup Coca-Cola Camp","background":"../../res/img/backgrounds/sp_camp_2015_cocacola.webp","theme":"世の中にないもの、『私』が生み出す。","songs":[{"title":"ハピネス","author":"AI","description":"コカ・コーラ 冬期CMソング","spotify":"https://open.spotify.com/track/4Ls20opS0EzPb7NuA6F8VI","damNumber":"6484-08","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6484-08","joyNumber":"29625","joyUrl":"https://www.joysound.com/web/search/song/186425","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a001bf4/l027392.html","youtubeUrl":"//youtu.be/uKgmu8g-kXE"},{"title":"螢のテーマ","author":"さだまさし","description":"北の国から 遥かなる大地より","spotify":"https://open.spotify.com/track/7vpt8PXSDlgxpeyDqyBOSC","damNumber":"","damUrl":"","joyNumber":"23551","joyUrl":"https://www.joysound.com/web/search/song/22777","lyricsSiteName":"","lyricsUrl":"","youtubeUrl":"//youtu.be/hsSAnsrQvLk"}]}],"2016":[{"name":"メンター/コース紹介","isBefore2024":true,"songs":[{"title":"Wings","author":"Little Mix","description":"","spotify":"https://open.spotify.com/track/3180WDzph4WrS4sLSNcGfa","damNumber":"3904-34","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3904-34","joyNumber":"728198","joyUrl":"https://www.joysound.com/web/search/song/297971","lyricsSiteName":"AZLyrics","lyricsUrl":"https://www.azlyrics.com/lyrics/littlemix/wings.html","youtubeUrl":"//youtu.be/cOQDsmEqVt8"}]},{"name":"スクール夏期講習(2016)","isBefore2024":true,"songs":[{"title":"PERFECT BLUE","author":"Base Ball Bear","description":"","spotify":"https://open.spotify.com/track/2Yv1CaDviRziwTxCDiaRtr","damNumber":"5503-13","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5503-13","joyNumber":"721856","joyUrl":"https://www.joysound.com/web/search/song/249017","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04c8a1/l02bdf5.html","youtubeUrl":"//youtu.be/jgofbf8Q_-Y"}]}],"2019":[{"name":"テックなオフ会","background":"../../res/img/backgrounds/event_2019_off_party.webp","theme":"ピクニック気分で集まっちゃう秋2019","songs":[{"title":"群青","author":"サイダーガール","description":"","spotify":"https://open.spotify.com/track/0dElTp6tFt1ji0fAfEdVYe","damNumber":"6031-80","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6031-80","joyNumber":"693475","joyUrl":"https://www.joysound.com/web/search/song/581417","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05bd82/l045db0.html","youtubeUrl":"//youtu.be/5zZSfXiyTvA"}]},{"name":"Happy Graduation(関西卒業サプライズ2019)","background":"../../res/img/backgrounds/event_2019_surprise_kansai.webp","theme":"桜とキミとぼくらと","songs":[{"title":"桜のあと (all quartets lead to the?)","author":"UNISON SQUARE GARDEN","description":"TBS アニメ 2013/4Q 夜桜四重奏 〜ヨザクラカルテット〜 OP","spotify":"https://open.spotify.com/track/2Hvedz2AA3YjULUhiLPHJu","damNumber":"5902-22","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5902-22","joyNumber":"729880","joyUrl":"https://www.joysound.com/web/search/song/300120","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04e406/l02eeeb.html","youtubeUrl":"//youtu.be/9zluQwPBMWM"},{"title":"桜ノ雨","author":"absorb feat 初音ミク","description":"","spotify":"https://open.spotify.com/track/4ZGtmdmWbBch2EDvMonofe","damNumber":"5315-90","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5315-90","joyNumber":"177230","joyUrl":"https://www.joysound.com/web/search/song/125582","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04f309/l0141af.html","youtubeUrl":"//youtu.be/Bc283_Ic79g"}]},{"name":"Graduation 2019(関東卒業サプライズ2019）","background":"../../res/img/backgrounds/event_2019_surprise_kanto.webp","songs":[{"title":"パープル","author":"コレサワ","description":"ロート製薬 肌ラボ 恋する肌キュンmovie 第4弾 キャンペーンソング","spotify":"https://open.spotify.com/track/4EqX2L0k0t4N1RJ3LaL80p","damNumber":"5174-75","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5174-75","joyNumber":"433153","joyUrl":"https://www.joysound.com/web/search/song/705468","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05acb3/l048b31.html","youtubeUrl":"//youtu.be/qnLJk_WoPto"},{"title":"アウトフォーカス","author":"Half time Old","description":"","spotify":"https://open.spotify.com/track/053jdHo91r8b3smvDljIcM","damNumber":"7396-14","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7396-14","joyNumber":"428373","joyUrl":"https://www.joysound.com/web/search/song/659403","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05d9ce/l043dca.html","youtubeUrl":"//youtu.be/3W1JzN1rkWU"}]}],"2020":[{"name":"SONY ENTERTAINMENT CAMP 2020","background":"../../res/img/backgrounds/sp_camp_2020_entertainment.webp","theme":"君にしかつくれないエンタテインメントを世界へ","poem":"誰もがエンタテインメントを創りだすクリエイターになれる。\\n私たちはそう信じている。\\n\\n例えば、ダンスが好きな人、音楽が好きな人、ゲームが好きな人、\\n写真や動画を撮るのが好きな人、物語をつくるのが好きな人。\\n\\n君が好きなことを通じて、誰かを笑顔にしたり、世界中を楽しませたりする力が、君にはきっとある。\\n\\n私たちは、技術やノウハウ、環境など、ソニーが持つ様々な資源を最大限に使って、君の無限の可能性を引き出したい。\\nそして、君の好きなことから広がる、エンタテインメントの世界を一緒に創りだしたい。\\n\\nクリエイターをテクノロジーでサポートし、ゲームや音楽、映画、アニメなど、さまざまなエンタテインメントを生み出しているソニーが提供する「ENTERTAINMENT CAMP 2020」。\\n\\nオーディションを経て、シナリオライティング、ダンス、映像制作、音楽制作のそれぞれのジャンルに分かれ、プロのレッスンを受けながらスキルを育むプログラム。\\n各ジャンルの4人が1つのチームとなり、最高の作品を創り出す。\\n\\n君の中に眠るクリエイティビティに磨きを掛けるために、ゲームや音楽を創りだしているプロのクリエイターが講師となり、最先端の知見を君に注ぎ込む。\\n最高の作品を創りあげるにあたって、プロと同じ開発環境も用意する。\\n\\nぜひこの扉を叩いて欲しい。\\nソニーは君の挑戦を待っている。\\n","songs":[{"title":"バニラ","author":"蒼山幸子","description":"","spotify":"https://open.spotify.com/track/7EbRJkr8eGRRy8AlVjCUIE","damNumber":"","damUrl":"","joyNumber":"","joyUrl":"","lyricsSiteName":"Lyrical Nonsense","lyricsUrl":"https://www.lyrical-nonsense.com/lyrics/sachiko-aoyama/vanilla/","youtubeUrl":"//youtu.be/2TDx_XNQ5QU"}]},{"name":"Life is Hack !","background":"../../res/img/backgrounds/event_lifeishack.webp","theme":"Hello, World!!・Online#1","songs":[{"title":"スタートライン","author":"ベリーグッドマン","description":"TBS アニメ 新幹線変形ロボ シンカリオン ED","spotify":"https://open.spotify.com/track/5sM8xMEIgnIzJJipep3Tzn","damNumber":"6211-82","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6211-82","joyNumber":"","joyUrl":"","lyricsSiteName":"J-Lyrics.net","lyricsUrl":"https://j-lyric.net/artist/a058dc1/l04bf0b.html","youtubeUrl":"//youtu.be/MKKgw3X49Bc"}]},{"name":"Departure '20 (関西卒業サプライズ2020)","background":"../../res/img/backgrounds/event_2020_surprise_kansai.webp","songs":[{"title":"ハイヤーグラウンド","author":"sumika","description":"テレビ朝日土曜ドラマ2019/4Q おっさんずラブ-in the sky- 主題歌 僕のヒーローアカデミア THE MOVIE ヒーローズ:ライジング 主題歌","spotify":"https://open.spotify.com/track/6kRLCygHi8SvEL2MWbfzcg","damNumber":"6244-23","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6244-23","joyNumber":"444410","joyUrl":"https://www.joysound.com/web/search/song/802364","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04b3e1/l04ea8c.html","youtubeUrl":"//youtu.be/xQS6sE5K0pY"},{"title":"愛をこめて花束を","author":"Superfly","description":"TBS金曜ドラマ2008/1Q エジソンの母EDSong","spotify":"https://open.spotify.com/track/7CmWXD3w1xOO53AAO4LRVQ","damNumber":"4190-04","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=4190-04","joyNumber":"85897","joyUrl":"https://www.joysound.com/web/search/song/113523","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a04cdbd/l00c3b4.html","youtubeUrl":"//youtu.be/gU5oN0KVofU"}]}],"2021":[{"name":"関東卒業サプライズ2021 〜つながり〜","background":"../../res/img/backgrounds/event_2021_surprise_kanto.webp","songs":[{"title":"醒めないで、青春","author":"三月のパンタシア","description":"","spotify":"https://open.spotify.com/track/15BGlIqVN3BAtLuknVNJco","damNumber":"5242-47","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5242-47","joyNumber":"486489","joyUrl":"https://www.joysound.com/web/search/song/831413","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05b552/l051cd4.html","youtubeUrl":"//youtu.be/elNm5EMCz0o"},{"title":"Cultivate","author":"(K)NoW_NAME","description":"『灰と幻想のグリムガル』第12話挿入歌","spotify":"https://open.spotify.com/track/5Hu1N7iBqMt9ig24RWsbkg","damNumber":"3762-46","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=3762-46","joyNumber":"685712","joyUrl":"https://www.joysound.com/web/search/song/567976","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a054972/l03afba.html","youtubeUrl":"//youtu.be/L1DQFIBVDYk"}]}],"2024":[{"name":"関東卒業サプライズ2024","background":"../../res/img/backgrounds/event_2024_surprise_kanto.webp","songs":[{"title":"はじまり feat. キヨサク from MONGOL800","author":"Mrs. GREEN APPLE","description":"","spotify":"https://open.spotify.com/track/0teqQ0PYqVDyyXJuPOyMhu","damNumber":"6093-89","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6093-89","joyNumber":"428173","joyUrl":"https://www.joysound.com/web/search/song/685515","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05a2d6/l045f78.html","youtubeUrl":"//youtu.be/YH1aOeTX7Vs"},{"title":"春が過ぎたら","author":"ケプラ","description":"","spotify":"https://open.spotify.com/track/4bDSl7SY5qGo7KNbNY5mfM","damNumber":"6994-21","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6994-21","joyNumber":"808310","joyUrl":"https://www.joysound.com/web/search/song/895643","lyricsSiteName":"歌ネット","lyricsUrl":"https://www.uta-net.com/song/309236/","youtubeUrl":"//youtu.be/m6uLTHLcc0A"}]},{"name":"関西卒業サプライズ2024","theme":"〜Life is Tech ! 20XX〜","background":"../../res/img/backgrounds/event_2024_surprise_kansai.webp","songs":[{"title":"バイマイフレンド","author":"bokula.","description":"","spotify":"https://open.spotify.com/track/73qkznNMToO2Xfa7VzyBvm","damNumber":"5423-40","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5423-40","joyNumber":"812225","joyUrl":"https://www.joysound.com/web/search/song/919640","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a063048/l058ac7.html","youtubeUrl":"//youtu.be/IOBny9KrdMg"}]},{"name":"Futurealise with Tech !","isBefore2024":true,"songs":[{"title":"Letters to me","author":"天月 -あまつき-","description":"","spotify":"","damNumber":"6836-77","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=6836-77","joyNumber":"486062","joyUrl":"https://www.joysound.com/web/search/song/848751","lyricsSiteName":"KKBOX","lyricsUrl":"https://www.kkbox.com/jp/ja/song/5ZaL6ATBsZjzv_A3gc","youtubeUrl":"//youtu.be/3iPU-wuB-CE"}]}],"2025":[{"name":"関東卒業サプライズ2025","background":"../../res/img/backgrounds/event_2025_surprise_kanto.webp","theme":"青春の1ページの続きを","songs":[{"title":"風の噂","author":"トンボコープ","description":"Opening movie","spotify":"https://open.spotify.com/track/2IDnT0YKrbBY2ylrJ7Qgva","damNumber":"5479-89","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5479-89","joyNumber":"621406","joyUrl":"https://www.joysound.com/web/search/song/997078","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a06597c/l0602ad.html/","youtubeUrl":"//youtu.be/uz1VrmbfeYs"},{"title":"閃光","author":"SUPER BEAVER","description":"Ending movie","spotify":"https://open.spotify.com/track/0yd1s8ZV1jSNc6NDeLfDmz","damNumber":"7397-32","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7397-32","joyNumber":"431023","joyUrl":"https://www.joysound.com/web/search/song/693429","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a050f66/l04985b.html/","youtubeUrl":"//youtu.be/CxTtwJ2yG_E"}]},{"name":"関西卒業サプライズ2025","background":"../../res/img/backgrounds/event_2025_surprise_kansai.webp","songs":[{"title":"たいせつ","author":"Arakezuri","description":"","spotify":"https://open.spotify.com/track/3gAcEOe1ThH4SI3vBp1ovo","damNumber":"5519-92","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5519-92","joyNumber":"820457","joyUrl":"https://www.joysound.com/web/search/song/1079016","lyricsSiteName":"歌ネット","lyricsUrl":"https://www.uta-net.com/song/337408/","youtubeUrl":"//youtu.be/KgfYofStI64"},{"title":"夢でみたような","author":"まなつ","description":"","spotify":"https://open.spotify.com/track/0BJtFZlpRBMwFXKyeqBBkI","damNumber":"","damUrl":"","joyNumber":"","joyUrl":"","lyricsSiteName":"UtaTen","lyricsUrl":"https://utaten.com/lyric/mi20030604/","youtubeUrl":"//youtu.be/ko29ZW-7ylo"}]}],"2026":[{"name":"関西卒業サプライズ2026","background":"../../res/img/backgrounds/event_2026_surprise_kansai.webp","theme":"どこかで逢いましょう","songs":[{"title":"じゃなくて","author":"帝国喫茶","description":"","spotify":"https://open.spotify.com/track/1dQW94DG4BmOyi1MbZgKLz","damNumber":"5392-86","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5392-86","joyNumber":"","joyUrl":"","lyricsSiteName":"歌ネット","lyricsUrl":"https://www.uta-net.com/song/323034/","youtubeUrl":"//youtu.be/9UHSIKEvp1A"},{"title":"ハッピーなんて","author":"サバシスター","description":"","spotify":"https://open.spotify.com/track/6YGtuOcwhsWCfbmkyKvQZo","damNumber":"5569-04","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=5569-04","joyNumber":"633908","joyUrl":"https://www.joysound.com/web/search/song/1081391","lyricsSiteName":"歌ネット","lyricsUrl":"https://www.uta-net.com/song/366095/","youtubeUrl":"//youtu.be/MV2ki0QdSp0"}]},{"name":"関東卒業サプライズ2026","theme":"春を超えてゆけ僕らの青","background":"../../res/img/backgrounds/event_2026_surprise_kanto.webp","songs":[{"title":"光を探している","author":"postman","description":"","spotify":"https://open.spotify.com/track/2cRdkIMpEdAZpontqOtS2T","damNumber":"7394-31","damUrl":"https://www.clubdam.com/karaokesearch/songleaf.html?requestNo=7394-31","joyNumber":"891699","joyUrl":"https://www.joysound.com/web/search/song/785669","lyricsSiteName":"J-Lyric.net","lyricsUrl":"https://j-lyric.net/artist/a05e32c/l045c69.html","youtubeUrl":"//youtu.be/9bvPTYquU0M"},{"title":"OURBLUE","author":"漣音 feat.YiXi","description":"運営メンバーのオリジナル曲","spotify":"","damNumber":"","damUrl":"","joyNumber":"","joyUrl":"","lyricsSiteName":"Life is Tech ! Music","lyricsUrl":"original-lyrics/OURBLUE.md","youtubeUrl":""}]}]}`)},Yt=[`なんと！　ななんと！　なななんと！`,`Life is Tech ! は気が利くので〜`,`さすが～ 知らなかった～ すご～い センスあるね〜 そくらてすみたい〜`,`おおっ！？`,`I'm a 注意点 Human.`,`探さない、待つの。`,`勝手に水分摂らないで`,`①かわく ②疲れる ③おひるま眠る ④深夜に目覚める ⑤いなくなる`],Xt=C`
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
`,Zt=C`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
`;C`
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
`,C`
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
`;var Qt=C`
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
`,$t=C`
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
`,en=C`
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
`,tn=C`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
  </svg>
`,nn=C`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
  </svg>
`,rn=C`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
`,an=C`
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
`,on=C`
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
`,sn=C`
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
`,cn=C`
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
`,ln=C`
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
`;C`
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
`;function q(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var J=class extends O{constructor(...e){super(...e),this.isPlaying=!1,this.isMobile=!1,this.handleResize=()=>{this.isPlaying&&this.reportPlaceholderPosition()}}static{this.styles=o`
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
  `}handlePlay(){this.dispatchEvent(new CustomEvent(`play-song`,{detail:{song:this.song},bubbles:!0,composed:!0}))}handleLinkClick(e){let t=e.target.closest(`a`);if(t){e.stopPropagation();let n=t.getAttribute(`href`);n&&n.toLowerCase().endsWith(`.md`)&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(`open-markdown`,{detail:{url:n},bubbles:!0,composed:!0})))}}connectedCallback(){super.connectedCallback(),window.addEventListener(`resize`,this.handleResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`resize`,this.handleResize)}updated(e){e.has(`isPlaying`)&&this.isPlaying&&setTimeout(()=>this.reportPlaceholderPosition(),50)}reportPlaceholderPosition(){let e=this.shadowRoot?.getElementById(`video-placeholder`);if(e){let t=e.getBoundingClientRect().top+window.scrollY;this.dispatchEvent(new CustomEvent(`video-position-changed`,{detail:{top:t},bubbles:!0,composed:!0}))}}render(){let e=this.song.description||``,t=this.song.youtubeUrl?.match(/(?:\/\/|https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/),n=t?t[1]:null,r=this.isMobile&&this.isPlaying&&n,i=n?`https://www.youtube.com/embed/${n}?autoplay=1&playsinline=1&rel=0&modestbranding=1`:``;return C`
      <div
        class="lit-song ${n?`lit-song--playable`:``}"
        @click=${n&&!this.isMobile?this.handlePlay:null}
      >
        <div class="lit-song__header">
          <div class="lit-song__title-wrap">
            ${this.isMobile?C`
                  <div class="lit-song__title-row">
                    <h4 class="lit-song__title">${this.song.title}</h4>
                    ${this.song.spotify?C`
                          <a
                            href="${this.song.spotify}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="lit-btn-action lit-btn-action--spotify"
                            title="Play on Spotify"
                            @click=${e=>e.stopPropagation()}
                          >
                            ${Xt}
                          </a>
                        `:``}
                  </div>
                `:C`
                  <h4 class="lit-song__title">${this.song.title}</h4>
                  ${this.song.spotify?C`
                        <a
                          href="${this.song.spotify}"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="lit-btn-action lit-btn-action--spotify"
                          title="Play on Spotify"
                          @click=${e=>e.stopPropagation()}
                        >
                          ${Xt}
                        </a>
                      `:``}
                `}
            <span class="lit-song__author">${this.song.author}</span>
          </div>
          <div class="lit-song__actions">
            ${n&&!r?C`
                  <button
                    class="lit-btn-action lit-btn-action--play"
                    title="Play on YouTube"
                    @click=${e=>{e.stopPropagation(),this.handlePlay()}}
                  >
                    ${Zt}
                  </button>
                `:``}
          </div>
        </div>
        <div class="lit-song__desc" @click=${this.handleLinkClick}>
          ${e?C`<div .innerHTML=${K.parse(e,{breaks:!0})}></div>`:``}
          <div
            style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; font-size: 0.8rem; color: var(--color-text-secondary);"
          >
            <div>
              [DAM]
              ${this.song.damNumber?this.song.damUrl?C`<a href="${this.song.damUrl}" target="_blank" rel="noopener"
                      >${this.song.damNumber}</a
                    >`:this.song.damNumber:`404 NotFound`}
              [JOYSOUND]
              ${this.song.joyNumber?this.song.joyUrl?C`<a href="${this.song.joyUrl}" target="_blank" rel="noopener"
                      >${this.song.joyNumber}</a
                    >`:this.song.joyNumber:`404 NotFound`}
            </div>
            ${this.song.lyricsUrl?C`
                  <div>
                    [歌詞]
                    <a href="${this.song.lyricsUrl}" target="_blank" rel="noopener"
                      >${this.song.lyricsSiteName||`歌詞サイト`}</a
                    >
                  </div>
                `:``}
            ${this.song.youtubeUrl&&!n?C`
                  <div>
                    [動画]
                    <a href="${this.song.youtubeUrl}" target="_blank" rel="noopener">YouTube</a>
                  </div>
                `:``}
          </div>
        </div>
        ${r?C`
              <div class="lit-song__embed">
                <iframe
                  src="${i}"
                  title="${this.song.title}"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            `:``}
      </div>
    `}};q([A({type:Object})],J.prototype,`song`,void 0),q([A({type:Boolean,attribute:`is-playing`})],J.prototype,`isPlaying`,void 0),q([A({type:Boolean})],J.prototype,`isMobile`,void 0),J=q([k(`lit-song-item`)],J);var Y=class extends O{constructor(...e){super(...e),this.playingSongTitle=``,this.playingEventName=``,this.isMobile=!1}static{this.styles=o`
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
  `}render(){let e=`/music/`,t=``;return t=this.event.background?this.event.background.replace(`../../res/`,`${e}res/`):this.event.isBefore2024===!0?`${e}res/img/backgrounds/common_v1.webp`:`${e}res/img/backgrounds/common_v2.webp`,C`
      <article class="lit-event-card">
        <header
          class="lit-event-card__header"
          style=${t?`background-image: url('${t}')`:``}
        >
          <div class="lit-event-card__title-wrap">
            <h3 class="lit-event-card__year">${this.event.year}</h3>
            <h2 class="lit-event-card__title">${this.event.name}</h2>
            ${this.event.theme?C`<p class="lit-event-card__theme">${this.event.theme}</p>`:``}
          </div>
        </header>
        <div class="lit-event-card__body">
          ${this.event.songs.map(e=>C`
              <lit-song-item
                .song=${e}
                .isMobile=${this.isMobile}
                ?mobile=${this.isMobile}
                ?is-playing=${this.playingSongTitle===e.title&&this.playingEventName===this.event.name}
                @play-song=${t=>this.handlePlaySongInEvent(t,e)}
              >
              </lit-song-item>
            `)}
        </div>
      </article>
    `}handlePlaySongInEvent(e,t){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`play-song-queue`,{detail:{song:t,queue:this.event.songs,eventName:this.event.name},bubbles:!0,composed:!0}))}};q([A({type:Object})],Y.prototype,`event`,void 0),q([A({type:String})],Y.prototype,`playingSongTitle`,void 0),q([A({type:String})],Y.prototype,`playingEventName`,void 0),q([A({type:Boolean})],Y.prototype,`isMobile`,void 0),Y=q([k(`lit-event-card`)],Y);var X=class extends O{static{this.styles=o`
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
  `}constructor(){super(),this.eventName=``,this.queue=[],this.currentIndex=0,this.isPlaying=!1,this.isMVMode=!1,this.isShuffle=!1,this.isRepeat=!1,this.volume=100,this.currentTime=0,this.duration=0,this.ytPlayer=null,this.skipNextUpdateLoad=!1,this.isSeeking=!1,this.handleKeyDown=e=>{e.code===`Space`&&(e.preventDefault(),this.togglePlay())},this.isMVMode=window.innerWidth<=768,this.handleResize=this.handleResize.bind(this)}handleResize(){window.innerWidth<=768&&!this.isMVMode&&(this.isMVMode=!0,this.dispatchEvent(new CustomEvent(`mv-mode-changed`,{detail:{active:!0},bubbles:!0,composed:!0})))}playSongImmediately(e,t){this.queue=e,this.currentIndex=t,this.skipNextUpdateLoad=!0,this.requestUpdate(),this.loadCurrentSong()}async updated(e){e.has(`isMVMode`)&&(this.updatePlayerSize(),this.updateIframeAllow()),(e.has(`queue`)||e.has(`currentIndex`))&&(this.skipNextUpdateLoad?this.skipNextUpdateLoad=!1:this.queue.length>0?this.loadCurrentSong():this.ytPlayer&&this.ytPlayer.stopVideo&&this.ytPlayer.stopVideo())}updatePlayerSize(){this.ytPlayer&&typeof this.ytPlayer.setSize==`function`&&(this.isMVMode?this.ytPlayer.setSize(640,360):this.ytPlayer.setSize(0,0))}updateIframeAllow(){let e=this.shadowRoot?.querySelector(`iframe`);e&&(this.isMVMode?e.setAttribute(`allow`,`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`):e.setAttribute(`allow`,`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share`))}toggleMVMode(){this.isMVMode=!this.isMVMode,this.dispatchEvent(new CustomEvent(`mv-mode-changed`,{detail:{active:this.isMVMode},bubbles:!0,composed:!0}))}loadCurrentSong(){this.currentTime=0,this.duration=0,this.progressInterval&&clearInterval(this.progressInterval);let e=this.queue[this.currentIndex];if(!e)return;let t=(e.youtubeUrl||``).match(/(?:\/\/|https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/),n=t?t[1]:null;n?(this.ytPlayer?this.ytPlayer.loadVideoById(n):this.initYouTubePlayer(n),this.isPlaying=!0):(this.ytPlayer&&typeof this.ytPlayer.pauseVideo==`function`&&this.ytPlayer.pauseVideo(),this.isPlaying=!1)}initYouTubePlayer(e){if(!window.YT||!window.YT.Player){setTimeout(()=>this.initYouTubePlayer(e),500);return}let t=this.shadowRoot?.querySelector(`#yt-player-container`);t&&(this.ytPlayer=new window.YT.Player(t,{height:`0`,width:`0`,videoId:e,playerVars:{autoplay:1,controls:1,rel:0,playsinline:1},events:{onReady:this.onPlayerReady.bind(this),onStateChange:this.onPlayerStateChange.bind(this)}}))}onPlayerReady(e){this.updatePlayerSize(),e.target.setVolume(this.volume),e.target.playVideo()}onPlayerStateChange(e){e.data===1?(this.isPlaying=!0,e.target.setVolume(this.volume),this.duration=this.ytPlayer.getDuration(),this.progressInterval=setInterval(()=>{this.isSeeking||(this.currentTime=this.ytPlayer.getCurrentTime())},250)):e.data===2?(this.isPlaying=!1,clearInterval(this.progressInterval)):e.data===0&&(this.isPlaying=!1,clearInterval(this.progressInterval),this.isRepeat?this.ytPlayer.playVideo():this.handleNext())}togglePlay(){this.ytPlayer&&(this.isPlaying?this.ytPlayer.pauseVideo():this.ytPlayer.playVideo(),this.updatePlayerSize())}isSongPlayable(e){let t=this.queue[e];return t?!!(t.youtubeUrl||``).match(/(?:\/\/|https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/):!1}handleNext(){if(this.isShuffle&&!this.isRepeat){let e=this.queue.map((e,t)=>t).filter(e=>this.isSongPlayable(e)&&e!==this.currentIndex);if(e.length>0){let t=e[Math.floor(Math.random()*e.length)];this.dispatchEvent(new CustomEvent(`index-changed`,{detail:{index:t},bubbles:!0,composed:!0}))}return}let e=this.currentIndex,t=this.currentIndex;for(;;){if(e++,e>=this.queue.length)if(this.isRepeat)e=0;else{this.isPlaying=!1,this.ytPlayer&&this.ytPlayer.stopVideo&&this.ytPlayer.stopVideo();return}if(e===t)return;if(this.isSongPlayable(e)){this.dispatchEvent(new CustomEvent(`index-changed`,{detail:{index:e},bubbles:!0,composed:!0}));return}}}handlePrev(){if(this.ytPlayer&&this.ytPlayer.getCurrentTime&&this.ytPlayer.getCurrentTime()>3){this.ytPlayer.seekTo(0);return}if(this.isShuffle){this.handleNext();return}let e=this.currentIndex,t=this.currentIndex;for(;;){if(e--,e<0)if(this.isRepeat)e=this.queue.length-1;else return;if(e===t)return;if(this.isSongPlayable(e)){this.dispatchEvent(new CustomEvent(`index-changed`,{detail:{index:e},bubbles:!0,composed:!0}));return}}}handleVolumeChange(e){let t=parseInt(e.target.value);this.volume=t,this.ytPlayer&&this.ytPlayer.setVolume&&this.ytPlayer.setVolume(this.volume)}formatTime(e){if(isNaN(e)||e===0)return`0:00`;let t=Math.round(e);return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,`0`)}`}handleSeek(e){if(!this.duration)return;let t=parseFloat(e.target.value);this.currentTime=t,this.ytPlayer.seekTo(t)}handleSeekStart(){this.isSeeking=!0}handleSeekEnd(e){this.isSeeking=!1,this.handleSeek(e)}firstUpdated(){this.dispatchEvent(new CustomEvent(`mv-mode-changed`,{detail:{active:this.isMVMode},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),window.addEventListener(`keydown`,this.handleKeyDown),window.addEventListener(`resize`,this.handleResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`keydown`,this.handleKeyDown),window.removeEventListener(`resize`,this.handleResize),this.progressInterval&&=(clearInterval(this.progressInterval),void 0),this.ytPlayer&&=(typeof this.ytPlayer.stopVideo==`function`&&this.ytPlayer.stopVideo(),typeof this.ytPlayer.destroy==`function`&&this.ytPlayer.destroy(),null)}render(){let e=this.queue[this.currentIndex],t=e?.youtubeUrl?.match(/(?:\/\/|https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/),n=t?t[1]:null,r=n?`https://img.youtube.com/vi/${n}/0.jpg`:``;return C`
      <div class="lit-player ${this.isMVMode?`mv-mode`:``}">
        <!-- YT Container FIRST (TOP) -->
        <div
          class="lit-player__yt ${this.isMVMode&&this.queue.length>0?`lit-player__yt--visible`:``}"
        >
          <div id="yt-player-container"></div>
        </div>

        <div class="lit-player__container">
          <div class="lit-player__info">
            ${r?C`<img class="lit-player__thumb" src="${r}" alt="Thumbnail" />`:``}
            <div class="lit-player__text">
              <p class="lit-player__event">${e?.eventName||``}</p>
              <p class="lit-player__title">${e?.title||``}</p>
              <p class="lit-player__author">${e?.author||``}</p>
            </div>
            ${e?.spotify?C`
                  <a
                    href="${e.spotify}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="lit-player__spotify"
                    title="Open on Spotify"
                  >
                    ${Xt}
                  </a>
                `:``}
          </div>

          <div class="lit-player__controls">
            <div class="lit-player__control-buttons">
              <button
                class="lit-btn-control"
                @click=${()=>this.isShuffle=!this.isShuffle}
                style="color: ${this.isShuffle?`var(--color-blue)`:``}"
                title="Shuffle"
              >
                ${Qt}
              </button>
              <button
                class="lit-btn-control"
                @click=${this.handlePrev}
                ?disabled=${this.currentIndex===0&&!this.isShuffle}
              >
                ${tn}
              </button>
              <button
                class="lit-btn-control lit-btn-control--play"
                @click=${this.togglePlay}
                title=${this.isPlaying?`Pause`:`Play`}
              >
                ${this.isPlaying?rn:Zt}
              </button>
              <button
                class="lit-btn-control"
                @click=${this.handleNext}
                ?disabled=${this.currentIndex>=this.queue.length-1&&!this.isRepeat&&!this.isShuffle}
              >
                ${nn}
              </button>
              <button
                class="lit-btn-control"
                @click=${()=>this.isRepeat=!this.isRepeat}
                style="color: ${this.isRepeat?`var(--color-blue)`:``}"
                title="Repeat One"
              >
                ${$t}
              </button>
              <!-- Show MV button in controls on mobile only (since volume is hidden) -->
              <button
                class="lit-btn-control lit-btn-control--mv ${this.isMVMode?`active`:``} mobile-only-mv"
                @click=${this.toggleMVMode}
                title="Toggle MV Mode"
                style="display: none;"
              >
                ${en}
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
              class="lit-btn-control lit-btn-control--mv ${this.isMVMode?`active`:``}"
              @click=${this.toggleMVMode}
              title="Toggle MV Mode"
              style="width: 32px; height: 32px;"
            >
              ${en}
            </button>
            <div style="display: flex; align-items: center; gap: 8px;">
              ${this.volume===0?sn:this.volume<50?on:an}
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
    `}};q([A({type:String})],X.prototype,`eventName`,void 0),q([A({type:Array})],X.prototype,`queue`,void 0),q([A({type:Number})],X.prototype,`currentIndex`,void 0),q([j()],X.prototype,`isPlaying`,void 0),q([j()],X.prototype,`isMVMode`,void 0),q([j()],X.prototype,`isShuffle`,void 0),q([j()],X.prototype,`isRepeat`,void 0),q([j()],X.prototype,`volume`,void 0),q([j()],X.prototype,`currentTime`,void 0),q([j()],X.prototype,`duration`,void 0),X=q([k(`lit-player`)],X);var un=class extends O{constructor(...e){super(...e),this.isMVMode=!1}static{this.styles=o`
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
  `}render(){let e=`/music/`;return C`
      <footer class="lit-footer ${this.isMVMode?`mv-active`:``}">
        <div class="lit-footer__inner">
          <p id="thanks">
            ${Array.from(`Thanks for visiting!`).map(e=>C`
                <span class="colorful" style="${e===` `?`margin-right:0.5em;`:``}"
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
              <img src="${e}res/img/github-mark.svg" alt="GitHub" class="icon-gh" /> GitHub </a
            >.<br />
            <br />
            <a href="${e}post/">曲の掲載をリクエストする</a><br />
            <span style="color: var(--color-gray)">(Githubアカウントが必要です)</span><br />
            <br />
            <small>This project is unofficial.</small>
          </p>
          <p class="copyright">&copy; Life is Tech ! Kansai Members</p>
        </div>
      </footer>
    `}};q([A({type:Boolean})],un.prototype,`isMVMode`,void 0),un=q([k(`lit-footer`)],un);var Z=class extends O{constructor(...e){super(...e),this.introProgress=0,this.activeTab=`camp`,this.isMobile=!1,this.splashActive=!0,this.isAtPageTop=!0,this.isMVMode=!1}static{this.styles=o`
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
  `}render(){let e=`/music/`,t=this.isAtPageTop;return C`
      <header
        class="lit-header ${this.isMVMode?`mv-active`:``}"
        style="--intro-progress: ${this.introProgress};"
      >
        <div class="lit-header__inner">
          <div class="lit-header__logos ${this.splashActive?`splash-active`:``}">
            <img src="${e}res/img/mark.svg" alt="Mark" id="mark" />
            <img src="${e}res/img/logo.svg" alt="Life is Tech!" id="logo" />
            <img src="${e}res/img/music.svg" alt="music" id="music" />
          </div>

          <div class="lit-tabs">
            <button
              class="lit-tabs__button ${this.activeTab===`camp`?`lit-tabs__button--active`:``}"
              @click=${()=>this.dispatchEvent(new CustomEvent(`tab-changed`,{detail:`camp`}))}
            >
              Camp
            </button>
            <button
              class="lit-tabs__button ${this.activeTab===`school`?`lit-tabs__button--active`:``}"
              @click=${()=>this.dispatchEvent(new CustomEvent(`tab-changed`,{detail:`school`}))}
            >
              School
            </button>
            <button
              class="lit-tabs__button ${this.activeTab===`event`?`lit-tabs__button--active`:``}"
              @click=${()=>this.dispatchEvent(new CustomEvent(`tab-changed`,{detail:`event`}))}
            >
              Event
            </button>
          </div>

          <button
            class="lit-scroll-down ${t?``:`lit-scroll-down--hidden`}"
            @click=${()=>this.dispatchEvent(new CustomEvent(`scroll-click`))}
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
    `}};q([A({type:Number})],Z.prototype,`introProgress`,void 0),q([A({type:String})],Z.prototype,`activeTab`,void 0),q([A({type:Boolean,reflect:!0,attribute:`mobile`})],Z.prototype,`isMobile`,void 0),q([A({type:Boolean})],Z.prototype,`splashActive`,void 0),q([A({type:Boolean})],Z.prototype,`isAtPageTop`,void 0),q([A({type:Boolean})],Z.prototype,`isMVMode`,void 0),Z=q([k(`lit-header`)],Z);var dn=[`var(--color-red)`,`var(--color-yellow)`,`var(--color-green)`,`var(--color-blue)`,`var(--color-orange)`,`var(--color-purple)`];function fn(e){return`a-`+e.toString().replace(/[!-/:-@\\[-`{-~ \s]/g,`-`)}var Q=class extends O{constructor(...e){super(...e),this.years=[],this.isMobile=!1,this.navigationTop=0,this.isVisible=!1}static{this.styles=o`
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
  `}render(){return this.isMobile?C``:C`
      <ul
        id="navigations"
        style="${this.navigationTop?`--nav-top: ${this.navigationTop}px;`:``} opacity: ${+!!this.isVisible}; pointer-events: ${this.isVisible?`auto`:`none`};"
      >
        <li class="nav-year no-panel" style="--theme-color: #333;">
          <a
            class="year-main-link"
            href="#"
            @click=${e=>{e.preventDefault(),window.scrollTo({top:0,behavior:`smooth`})}}
          >
            <span class="label">TOP</span>
            <span class="short-label">${ln}</span>
          </a>
        </li>
        ${this.years.map(([e,t],n)=>{let r=dn[n%dn.length],i=[...t].sort((e,t)=>{let n=e=>e.includes(`Winter`)?4:e.includes(`Autumn`)?3:e.includes(`Summer`)?2:+!!e.includes(`Spring`);return n(t.name)-n(e.name)});return C`
            <li class="nav-year" style="--theme-color: ${r};">
              <a
                class="year-main-link"
                href="#"
                @click=${t=>{this.dispatchEvent(new CustomEvent(`year-click`,{detail:{event:t,id:fn(`year-`+e)}}))}}
              >
                <span class="label">${e}</span>
                <span class="short-label">${isNaN(Number(e))?cn:e.slice(-2)}</span>
              </a>
              <div class="sub-nav-panel">
                ${i.map(e=>C`
                    <a
                      href="#"
                      @click=${t=>{t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new CustomEvent(`event-click`,{detail:{event:t,name:e.name}}))}}
                    >
                      ${e.name}
                    </a>
                  `)}
              </div>
            </li>
          `})}
        <li class="nav-year no-panel" style="--theme-color: #333;">
          <a
            class="year-main-link"
            href="#"
            @click=${e=>{e.preventDefault(),window.scrollTo({top:document.body.scrollHeight,behavior:`smooth`})}}
          >
            <span class="label">Thanks!</span>
            <span class="short-label">!</span>
          </a>
        </li>
      </ul>
    `}};q([A({type:Array})],Q.prototype,`years`,void 0),q([A({type:Boolean})],Q.prototype,`isMobile`,void 0),q([A({type:Number})],Q.prototype,`navigationTop`,void 0),q([A({type:Boolean})],Q.prototype,`isVisible`,void 0),Q=q([k(`lit-nav-years`)],Q);var pn=Jt;function mn(e){return`a-`+e.toString().replace(/[!-/:-@\\[-`{-~ \s]/g,`-`)}var $=class extends O{constructor(){super(),this.activeTab=`camp`,this.playerQueue=[],this.currentSongIndex=0,this.currentEventName=``,this.playerQueueTab=``,this.videoOffsetTop=0,this.isLoaded=!1,this.splashActive=window.innerWidth>768,this.loadingWord=``,this.isMarkdownModalOpen=!1,this.markdownModalContent=``,this.markdownModalTitle=``,this.isMVMode=!1,this.isMobile=window.innerWidth<=768,this.navigationTop=0,this.introProgress=0,this.isAtPageTop=!0,this.handleResize=()=>{this.syncResponsiveMode(),this.updateIntroProgress(),this.updateNavigationTop()},this.handleScroll=()=>{this.updateIntroProgress()},this.handleVideoPositionChanged=e=>{let t=this.getBoundingClientRect().top+window.scrollY;this.videoOffsetTop=e.detail.top-t};let e=Yt||[`なんと！　ななんと！　なななんと！`];this.loadingWord=e[Math.floor(Math.random()*e.length)]}get currentPlayingSong(){return this.playerQueue[this.currentSongIndex]}syncResponsiveMode(){let e=window.innerWidth<=768;e!==this.isMobile&&(this.isMobile=e),this.isMobile?this.classList.remove(`mv-active`):this.isMVMode?this.classList.add(`mv-active`):this.classList.remove(`mv-active`)}updateIntroProgress(){let e=Math.min(window.scrollY/window.innerHeight,1);e!==this.introProgress&&(this.introProgress=e);let t=window.scrollY<=1;t!==this.isAtPageTop&&(this.isAtPageTop=t)}updateNavigationTop(){this.navigationTop=184}firstUpdated(){this.updateIntroProgress(),this.updateNavigationTop(),setTimeout(()=>{let e=this.shadowRoot?.querySelector(`#mark`);if(e&&!this.isMobile){let t=e.getBoundingClientRect();e.style.transform=`translateX(${window.innerWidth/2-t.left}px) translateX(-50%)`}setTimeout(()=>{this.isLoaded=!0,setTimeout(()=>{e&&!this.isMobile&&(e.style.transition=`transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)`,e.style.transform=`none`),this.splashActive=!1},300)},2e3)},50)}static{this.styles=o`
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
  `}setTab(e){this.activeTab=e,this.scrollToContentStart()}handlePlayRandom(){let e=this.buildTabQueue();for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}let t=e.filter(e=>e.youtubeUrl&&e.youtubeUrl.match(/(?:\/\/|https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/));if(t.length>0){this.playerQueue=t,this.currentSongIndex=0,this.playerQueueTab=this.activeTab,this.currentEventName=this.playerQueue[0]?.eventName||``;let e=this.shadowRoot?.querySelector(`lit-player`);!this.isMobile&&e&&typeof e.playSongImmediately==`function`&&e.playSongImmediately(this.playerQueue,this.currentSongIndex)}else alert(`No playable songs found in this category.`)}async updated(e){e.has(`currentSongIndex`)&&(await this.updateComplete,this.isMobile||this.scrollToCurrentSong())}scrollToCurrentSong(){if(this.activeTab!==this.playerQueueTab)return;let e=this.playerQueue[this.currentSongIndex];if(!e||!e.eventName)return;let t=this.shadowRoot?.querySelector(`[data-event="${e.eventName}"]`);t&&t.scrollIntoView({behavior:`smooth`,block:`center`})}buildTabQueue(){let e=[],t=pn[this.activeTab],n=Object.entries(t).sort(([e],[t])=>e===`番外編`?1:t===`番外編`?-1:parseInt(t)-parseInt(e));for(let[t,r]of n){let t=[...r].sort((e,t)=>{let n=e=>e.includes(`Winter`)?4:e.includes(`Autumn`)?3:e.includes(`Summer`)?2:+!!e.includes(`Spring`);return n(t.name)-n(e.name)});for(let n of t)for(let t of n.songs)e.push({...t,eventName:n.name})}return e}handlePlaySongWithQueue(e){let t=this.buildTabQueue();this.playerQueue=t,this.playerQueueTab=this.activeTab,this.currentSongIndex=t.findIndex(t=>t.title===e.detail.song.title&&t.eventName===e.detail.eventName),this.currentSongIndex===-1&&(this.currentSongIndex=0),this.currentEventName=e.detail.eventName;let n=this.shadowRoot?.querySelector(`lit-player`);!this.isMobile&&n&&typeof n.playSongImmediately==`function`&&n.playSongImmediately(this.playerQueue,this.currentSongIndex)}scrollToId(e,t){e.preventDefault();let n=this.shadowRoot?.querySelector(`#`+t);if(n){let e=this.shadowRoot?.querySelector(`.lit-header`),t=e?Math.ceil(e.getBoundingClientRect().height):128,r=n.getBoundingClientRect().top+window.scrollY-t-24;window.scrollTo({top:r,behavior:`smooth`})}}scrollToEvent(e,t){e.preventDefault();let n=this.shadowRoot?.querySelector(`[data-event="${t}"]`);if(n){let e=this.shadowRoot?.querySelector(`.lit-header`),t=e?Math.ceil(e.getBoundingClientRect().height):128,r=n.getBoundingClientRect().top+window.scrollY-t-24;window.scrollTo({top:r,behavior:`smooth`})}}async handleOpenMarkdown(e){let t=e.detail.url,n=t.split(`/`).pop()||`Markdown`;this.markdownModalTitle=decodeURIComponent(n.replace(/\.md$/i,``)),this.isMarkdownModalOpen=!0,this.markdownModalContent=`<p>Loading...</p>`;try{let e=await fetch(t);if(!e.ok)throw Error(`Network error`);let n=await e.text();this.markdownModalContent=await K.parse(n,{breaks:!0})}catch{this.markdownModalContent=`<p style="color:var(--color-red)">Failed to load content.</p>`}}closeMarkdownModal(){this.isMarkdownModalOpen=!1}scrollToContentStart(){window.scrollTo({top:window.innerHeight,behavior:`smooth`})}connectedCallback(){super.connectedCallback(),this.syncResponsiveMode(),this.addEventListener(`video-position-changed`,this.handleVideoPositionChanged),window.addEventListener(`scroll`,this.handleScroll,{passive:!0}),window.addEventListener(`resize`,this.handleResize)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`video-position-changed`,this.handleVideoPositionChanged),window.removeEventListener(`scroll`,this.handleScroll),window.removeEventListener(`resize`,this.handleResize)}render(){let e=pn[this.activeTab],t=Object.entries(e).sort(([e],[t])=>e===`番外編`?1:t===`番外編`?-1:parseInt(t)-parseInt(e));this.isAtPageTop;let n=this.introProgress>.92;return C`
      <div id="loading" class="${this.isLoaded?`loaded`:``}">
        <p id="loading-message">${this.loadingWord}</p>
        <img src="${`/music/`}res/img/loading.svg" alt="Loading" />
      </div>

      <lit-header
        .introProgress=${this.introProgress}
        .activeTab=${this.activeTab}
        .isMobile=${this.isMobile}
        .splashActive=${this.splashActive}
        .isAtPageTop=${this.isAtPageTop}
        .isMVMode=${this.isMVMode}
        @tab-changed=${e=>this.setTab(e.detail)}
        @scroll-click=${this.scrollToContentStart}
      ></lit-header>

      <div class="lit-intro-spacer"></div>

      <lit-nav-years
        .years=${t}
        .isMobile=${this.isMobile}
        .navigationTop=${this.navigationTop}
        .isVisible=${n}
        @year-click=${e=>this.scrollToId(e.detail.event,e.detail.id)}
        @event-click=${e=>this.scrollToEvent(e.detail.event,e.detail.name)}
      ></lit-nav-years>

      <main class="lit-main" @open-markdown=${this.handleOpenMarkdown}>
        ${t.map(([e,t])=>{let n=[...t].sort((e,t)=>{let n=e=>e.includes(`Winter`)?4:e.includes(`Autumn`)?3:e.includes(`Summer`)?2:+!!e.includes(`Spring`);return n(t.name)-n(e.name)});return C`
            <h2
              id="${mn(`year-`+e)}"
              style="text-align:center; font-size: 2rem; margin: 3rem 0 1rem; color: var(--color-blue);"
            >
              ${e}
            </h2>
            ${n.map(t=>C`
                <div data-event="${t.name}">
                  <lit-event-card
                    .event=${{...t,year:e}}
                    .playingSongTitle=${this.currentPlayingSong?.title||``}
                    .playingEventName=${this.currentPlayingSong?.eventName||this.currentEventName}
                    .isMobile=${this.isMobile}
                    @play-song-queue=${this.handlePlaySongWithQueue}
                  ></lit-event-card>
                </div>
              `)}
          `})}
      </main>

      ${this.isMarkdownModalOpen?C`
            <div class="lit-modal-overlay" @click=${this.closeMarkdownModal}>
              <div class="lit-modal-content" @click=${e=>e.stopPropagation()}>
                <div class="lit-modal-header">
                  <h3>${this.markdownModalTitle}</h3>
                  <button class="lit-modal-close" @click=${this.closeMarkdownModal}>&times;</button>
                </div>
                <div class="lit-modal-body" .innerHTML=${this.markdownModalContent}></div>
              </div>
            </div>
          `:``}

      <lit-footer .isMVMode=${this.isMVMode}></lit-footer>

      ${this.isMobile?``:C`
            <lit-player
              style="--video-offset-top: ${this.videoOffsetTop}px;"
              .queue=${this.playerQueue}
              .currentIndex=${this.currentSongIndex}
              .eventName=${this.currentEventName}
              @index-changed=${e=>{this.currentSongIndex=e.detail.index}}
              @mv-mode-changed=${e=>{this.isMVMode=e.detail.active,this.isMVMode?this.classList.add(`mv-active`):this.classList.remove(`mv-active`)}}
            ></lit-player>
          `}
    `}};q([j()],$.prototype,`activeTab`,void 0),q([j()],$.prototype,`playerQueue`,void 0),q([j()],$.prototype,`currentSongIndex`,void 0),q([j()],$.prototype,`currentEventName`,void 0),q([j()],$.prototype,`playerQueueTab`,void 0),q([j()],$.prototype,`videoOffsetTop`,void 0),q([j()],$.prototype,`isLoaded`,void 0),q([j()],$.prototype,`splashActive`,void 0),q([j()],$.prototype,`loadingWord`,void 0),q([j()],$.prototype,`isMarkdownModalOpen`,void 0),q([j()],$.prototype,`markdownModalContent`,void 0),q([j()],$.prototype,`markdownModalTitle`,void 0),q([j()],$.prototype,`isMVMode`,void 0),q([j()],$.prototype,`isMobile`,void 0),q([j()],$.prototype,`navigationTop`,void 0),q([j()],$.prototype,`introProgress`,void 0),q([j()],$.prototype,`isAtPageTop`,void 0),$=q([k(`lit-music-app`)],$);