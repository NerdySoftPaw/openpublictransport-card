function t(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),s=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new o(i,t,r)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:p,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,g=globalThis,f=g.trustedTypes,m=f?f.emptyScript:"",_=g.reactiveElementPolyfillSupport,y=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!l(t,e),v={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&c(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:s}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const o=r?.call(this);s?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(i)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of r){const r=document.createElement("style"),s=e.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=i.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=r;const o=s.fromAttribute(e,t.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(t,e,i,r=!1,s){if(void 0!==t){const o=this.constructor;if(!1===r&&(s=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??$)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,_?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=t=>t,C=w.trustedTypes,E=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+k,T=`<${P}>`,N=document,O=()=>N.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,D="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,j=/>/g,M=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,I=/"/g,B=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Z=new WeakMap,J=N.createTreeWalker(N,129);function G(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,r=[];let s,o=2===e?"<svg>":3===e?"<math>":"",n=U;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,p=0;for(;p<i.length&&(n.lastIndex=p,l=n.exec(i),null!==l);)p=n.lastIndex,n===U?"!--"===l[1]?n=H:void 0!==l[1]?n=j:void 0!==l[2]?(B.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=M):void 0!==l[3]&&(n=M):n===M?">"===l[0]?(n=s??U,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?M:'"'===l[3]?I:L):n===I||n===L?n=M:n===H||n===j?n=U:(n=M,s=void 0);const d=n===M&&t[e+1].startsWith("/>")?" ":"";o+=n===U?i+T:c>=0?(r.push(a),i.slice(0,c)+S+i.slice(c)+k+d):i+k+(-2===c?e:d)}return[G(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class F{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,o=0;const n=t.length-1,a=this.parts,[l,c]=K(t,e);if(this.el=F.createElement(l,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=J.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(S)){const e=c[o++],i=r.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?rt:tt}),r.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:s}),r.removeAttribute(t));if(B.test(r.tagName)){const t=r.textContent.split(k),e=t.length-1;if(e>0){r.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],O()),J.nextNode(),a.push({type:2,index:++s});r.append(t[e],O())}}}else if(8===r.nodeType)if(r.data===P)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(k,t+1));)a.push({type:7,index:s}),t+=k.length-1}s++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,r){if(e===W)return e;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const o=R(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(e=Q(t,s._$AS(t,e.values),s,r)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??N).importNode(e,!0);J.currentNode=r;let s=J.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Y(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new st(s,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(s=J.nextNode(),o++)}return J.currentNode=N,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),R(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=F.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new X(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new F(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new Y(this.O(O()),this.O(O()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,r){const s=this.strings;let o=!1;if(void 0===s)t=Q(this,t,e,0),o=!R(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const r=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=Q(this,r[i+n],e,n),a===W&&(a=this._$AH[n]),o||=!R(a)||a!==this._$AH[n],a===V?t=V:t!==V&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}o&&!r&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class rt extends tt{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??V)===W)return;const i=this._$AH,r=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==V&&(i===V||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(F,Y),(w.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let s=r._$litPart$;if(void 0===s){const t=i?.renderBefore??null;r._$litPart$=s=new Y(e.insertBefore(O(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const lt=nt.litElementPolyfillSupport;lt?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},pt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$},dt=(t=pt,e,i)=>{const{kind:r,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,s,t,!0,i)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const s=this[r];e.call(this,i),this.requestUpdate(r,s,t,!0,i)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return ht({...t,state:!0,attribute:!1})}const gt=n`
  :host {
    --opt-bg: var(--ha-card-background, var(--card-background-color, #1a1a1a));
    --opt-text: var(--primary-text-color, #ffd700);
    --opt-text-secondary: var(--secondary-text-color, #cccccc);
    --opt-delay-red: #e53935;
    --opt-delay-green: #43a047;
    --opt-delay-yellow: #fdd835;
    --opt-border: var(--divider-color, rgba(255, 255, 255, 0.12));
    --opt-header-bg: rgba(0, 0, 0, 0.2);
    --opt-row-hover: rgba(255, 255, 255, 0.05);
    --opt-accent: var(--accent-color, #ffd700);
  }

  /* Dark theme */
  :host([data-theme="dark"]) {
    --opt-bg: #0a0a0a;
    --opt-text: #ffd700;
    --opt-text-secondary: #cccccc;
    --opt-header-bg: rgba(0, 0, 0, 0.4);
    --opt-row-hover: rgba(255, 215, 0, 0.05);
    --opt-border: rgba(255, 215, 0, 0.15);
  }

  /* Light theme */
  :host([data-theme="light"]) {
    --opt-bg: #ffffff;
    --opt-text: #1a1a1a;
    --opt-text-secondary: #666666;
    --opt-header-bg: #f5f5f5;
    --opt-row-hover: rgba(0, 0, 0, 0.03);
    --opt-border: rgba(0, 0, 0, 0.12);
  }

  ha-card {
    background: var(--opt-bg);
    color: var(--opt-text);
    overflow: hidden;
    font-family: "Roboto Mono", "Courier New", monospace;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: var(--opt-header-bg);
    border-bottom: 1px solid var(--opt-border);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .card-header .station-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-header .current-time {
    font-variant-numeric: tabular-nums;
    opacity: 0.8;
    margin-left: 12px;
    flex-shrink: 0;
  }

  .card-content {
    padding: 0;
  }

  /* Disruption banner */
  .disruption-banner {
    background: var(--opt-delay-red);
    color: #ffffff;
    padding: 8px 16px;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .disruption-banner ha-icon {
    --mdc-icon-size: 16px;
  }

  /* Table layout */
  .departure-table {
    width: 100%;
    border-collapse: collapse;
  }

  .departure-table thead th {
    padding: 8px 12px;
    text-align: left;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.6;
    border-bottom: 1px solid var(--opt-border);
  }

  .departure-table tbody tr {
    border-bottom: 1px solid var(--opt-border);
    transition: background-color 0.15s ease;
  }

  .departure-table tbody tr:hover {
    background: var(--opt-row-hover);
  }

  .departure-table tbody tr:last-child {
    border-bottom: none;
  }

  .departure-table td {
    padding: 10px 12px;
    font-size: 14px;
    vertical-align: middle;
  }

  /* Time column */
  .time-cell {
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }

  .time-planned {
    font-weight: 600;
  }

  .time-countdown {
    display: block;
    font-size: 11px;
    opacity: 0.7;
    margin-top: 2px;
  }

  /* Line cell */
  .line-cell {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .line-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 13px;
    background: var(--opt-accent);
    color: #000000;
  }

  /* Destination */
  .destination-cell {
    font-weight: 500;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Platform */
  .platform-cell {
    text-align: center;
    font-weight: 600;
  }

  .platform-changed {
    text-decoration: line-through;
    opacity: 0.5;
    margin-right: 4px;
  }

  .platform-new {
    color: var(--opt-delay-red);
    font-weight: 700;
  }

  /* Notices */
  .notice-icon {
    --mdc-icon-size: 16px;
    color: var(--opt-delay-yellow);
    cursor: help;
  }

  /* Compact layout */
  .compact-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px;
  }

  .compact-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 2px solid var(--opt-border);
    background: var(--opt-bg);
    font-size: 13px;
    transition: border-color 0.2s ease;
  }

  .compact-chip.on-time {
    border-color: var(--opt-delay-green);
  }

  .compact-chip.delayed {
    border-color: var(--opt-delay-red);
  }

  .compact-chip .chip-line {
    font-weight: 700;
  }

  .compact-chip .chip-destination {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: 0.8;
  }

  .compact-chip .chip-countdown {
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  .compact-chip ha-icon {
    --mdc-icon-size: 18px;
  }

  /* Trip layout */
  .trip-container {
    padding: 16px;
  }

  .trip-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 700;
  }

  .trip-header .trip-arrow {
    opacity: 0.5;
  }

  .trip-header .trip-duration {
    margin-left: auto;
    font-size: 13px;
    font-weight: 400;
    opacity: 0.7;
  }

  .trip-meta {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    font-size: 12px;
  }

  .trip-meta-item {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    background: var(--opt-header-bg);
  }

  .trip-meta-item ha-icon {
    --mdc-icon-size: 14px;
  }

  /* Transfer risk badges */
  .risk-low {
    color: var(--opt-delay-green);
  }

  .risk-medium {
    color: var(--opt-delay-yellow);
  }

  .risk-high {
    color: var(--opt-delay-red);
  }

  /* Timeline */
  .trip-timeline {
    position: relative;
    padding-left: 24px;
  }

  .trip-leg {
    position: relative;
    padding-bottom: 16px;
    padding-left: 16px;
    border-left: 2px solid var(--opt-border);
    margin-left: 6px;
  }

  .trip-leg:last-child {
    border-left-color: transparent;
  }

  .trip-leg::before {
    content: "";
    position: absolute;
    left: -7px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--opt-accent);
    border: 2px solid var(--opt-bg);
  }

  .trip-leg.transfer::before {
    background: var(--opt-delay-yellow);
  }

  .leg-station {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 4px;
  }

  .leg-details {
    font-size: 12px;
    opacity: 0.7;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .leg-details ha-icon {
    --mdc-icon-size: 14px;
  }

  .leg-time {
    font-variant-numeric: tabular-nums;
    font-weight: 500;
  }

  .leg-transfer-info {
    font-size: 11px;
    color: var(--opt-delay-yellow);
    margin-top: 4px;
    font-style: italic;
  }

  /* Alternative journeys */
  .alt-journeys {
    margin-top: 16px;
    border-top: 1px solid var(--opt-border);
    padding-top: 12px;
  }

  .alt-journeys-title {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.6;
    margin-bottom: 8px;
  }

  .alt-journey {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 0;
    font-size: 13px;
    border-bottom: 1px solid var(--opt-border);
  }

  .alt-journey:last-child {
    border-bottom: none;
  }

  /* Error / Empty states */
  .card-error,
  .card-empty {
    padding: 24px 16px;
    text-align: center;
    font-size: 14px;
    opacity: 0.7;
  }

  .card-error {
    color: var(--opt-delay-red);
  }

  .card-error ha-icon {
    --mdc-icon-size: 40px;
    display: block;
    margin: 0 auto 12px;
  }

  /* Delay badge */
  .delay-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px 5px;
    border-radius: 3px;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.4;
  }

  .delay-badge.delayed {
    background: var(--opt-delay-red);
    color: #ffffff;
  }

  .delay-badge.on-time {
    background: var(--opt-delay-green);
    color: #ffffff;
  }

  /* Editor styles */
  .card-config {
    padding: 16px;
  }

  .card-config .config-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
  }

  .card-config .config-row label {
    font-weight: 500;
  }

  .card-config ha-entity-picker,
  .card-config ha-select,
  .card-config ha-textfield {
    width: 100%;
  }

  .config-section {
    margin-bottom: 16px;
  }

  .config-section-title {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.6;
    margin-bottom: 8px;
  }
`,ft={layout:"table",max_departures:10,show_header:!0,show_platform:!0,show_delay:!0,show_realtime_indicator:!0,theme:"auto"},mt={bus:"mdi:bus",tram:"mdi:tram",subway:"mdi:subway-variant",train:"mdi:train",ferry:"mdi:ferry",taxi:"mdi:taxi","s-bahn":"mdi:train","u-bahn":"mdi:subway-variant",regional:"mdi:train",express:"mdi:train",default:"mdi:transit-connection-variant"};let _t=class extends at{constructor(){super(...arguments),this.delay=0,this.isRealtime=!1}render(){return this.delay>0?q`
        <span class="delay-badge delayed">+${this.delay}</span>
      `:0===this.delay&&this.isRealtime?q`
        <span class="delay-badge on-time">&check;</span>
      `:V}};_t.styles=gt,t([ht({type:Number})],_t.prototype,"delay",void 0),t([ht({type:Boolean,attribute:"is-realtime"})],_t.prototype,"isRealtime",void 0),_t=t([ct("openpublictransport-delay-badge")],_t);let yt=class extends at{constructor(){super(...arguments),this.transportType=""}_getIcon(){const t=this.transportType.toLowerCase();return mt[t]||mt.default}render(){return q`<ha-icon .icon=${this._getIcon()}></ha-icon>`}};t([ht({type:String,attribute:"transport-type"})],yt.prototype,"transportType",void 0),yt=t([ct("openpublictransport-transport-icon")],yt);let bt=class extends at{constructor(){super(...arguments),this.showPlatform=!0,this.showDelay=!0,this.showRealtime=!0}_formatTime(t){return t||""}_renderCountdown(){const t=this.departure.minutes_until_departure;return t<=0?"jetzt":1===t?"in 1 min":`in ${t} min`}_renderPlatform(){return this.showPlatform&&this.departure.platform?this.departure.platform_changed&&this.departure.planned_platform?q`
        <td class="platform-cell">
          <span class="platform-changed">${this.departure.planned_platform}</span>
          <span class="platform-new">${this.departure.platform}</span>
        </td>
      `:q`<td class="platform-cell">${this.departure.platform}</td>`:V}_renderNotices(){return this.departure.notices&&0!==this.departure.notices.length?q`
      <ha-icon
        class="notice-icon"
        icon="mdi:alert-circle-outline"
        title=${this.departure.notices.join(", ")}
      ></ha-icon>
    `:V}render(){const t=this.departure;return t?q`
      <tr>
        <td class="time-cell">
          <span class="time-planned">${this._formatTime(t.planned_time)}</span>
          ${this.showDelay?q`
                <openpublictransport-delay-badge
                  .delay=${t.delay}
                  ?is-realtime=${t.is_realtime}
                ></openpublictransport-delay-badge>
              `:V}
          <span class="time-countdown">${this._renderCountdown()}</span>
        </td>
        <td>
          <span class="line-cell">
            <openpublictransport-transport-icon
              transport-type=${t.transportation_type}
            ></openpublictransport-transport-icon>
            <span class="line-badge">${t.line}</span>
            ${this._renderNotices()}
          </span>
        </td>
        <td class="destination-cell">${t.destination}</td>
        ${this._renderPlatform()}
      </tr>
    `:V}};bt.styles=gt,t([ht({attribute:!1})],bt.prototype,"departure",void 0),t([ht({type:Boolean,attribute:"show-platform"})],bt.prototype,"showPlatform",void 0),t([ht({type:Boolean,attribute:"show-delay"})],bt.prototype,"showDelay",void 0),t([ht({type:Boolean,attribute:"show-realtime"})],bt.prototype,"showRealtime",void 0),bt=t([ct("openpublictransport-departure-row")],bt);let $t=class extends at{constructor(){super(...arguments),this.departures=[],this.stationName=""}_getCurrentTime(){return(new Date).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}_collectNotices(){const t=[];for(const e of this.departures)if(e.notices)for(const i of e.notices)t.includes(i)||t.push(i);return t}_renderHeader(){return this.config.show_header?q`
      <div class="card-header">
        <span class="station-name">${this.stationName||"Departures"}</span>
        <span class="current-time">${this._getCurrentTime()}</span>
      </div>
    `:V}_renderDisruptionBanner(){const t=this._collectNotices();return 0===t.length?V:q`
      <div class="disruption-banner">
        <ha-icon icon="mdi:alert"></ha-icon>
        <span>${t[0]}${t.length>1?` (+${t.length-1} more)`:""}</span>
      </div>
    `}render(){const t=this.departures.slice(0,this.config.max_departures);return 0===t.length?q`
        ${this._renderHeader()}
        <div class="card-empty">No departures available</div>
      `:q`
      ${this._renderHeader()}
      ${this._renderDisruptionBanner()}
      <div class="card-content">
        <table class="departure-table">
          <thead>
            <tr>
              <th>Zeit</th>
              <th>Linie</th>
              <th>Ziel</th>
              ${this.config.show_platform?q`<th>Gleis</th>`:V}
            </tr>
          </thead>
          <tbody>
            ${t.map(t=>q`
                <openpublictransport-departure-row
                  .departure=${t}
                  ?show-platform=${this.config.show_platform}
                  ?show-delay=${this.config.show_delay}
                  ?show-realtime=${this.config.show_realtime_indicator}
                ></openpublictransport-departure-row>
              `)}
          </tbody>
        </table>
      </div>
    `}};$t.styles=gt,t([ht({attribute:!1})],$t.prototype,"hass",void 0),t([ht({attribute:!1})],$t.prototype,"config",void 0),t([ht({attribute:!1})],$t.prototype,"departures",void 0),t([ht({type:String})],$t.prototype,"stationName",void 0),$t=t([ct("openpublictransport-table-layout")],$t);let vt=class extends at{constructor(){super(...arguments),this.departures=[],this.stationName=""}_shortenDestination(t){if(t.length<=15)return t;const e=t.split(/[,\s-]+/);return e.length>1?e[0]:t.substring(0,13)+"..."}_renderCountdown(t){return t<=0?"jetzt":`${t}'`}_getChipClass(t){return t.delay>0?"compact-chip delayed":t.is_realtime&&0===t.delay?"compact-chip on-time":"compact-chip"}_renderHeader(){return this.config.show_header?q`
      <div class="card-header">
        <span class="station-name">${this.stationName||"Departures"}</span>
      </div>
    `:V}render(){const t=this.departures.slice(0,this.config.max_departures);return 0===t.length?q`
        ${this._renderHeader()}
        <div class="card-empty">No departures available</div>
      `:q`
      ${this._renderHeader()}
      <div class="compact-container">
        ${t.map(t=>q`
            <div class=${this._getChipClass(t)}>
              <openpublictransport-transport-icon
                transport-type=${t.transportation_type}
              ></openpublictransport-transport-icon>
              <span class="chip-line">${t.line}</span>
              <span class="chip-destination">${this._shortenDestination(t.destination)}</span>
              <span class="chip-countdown">${this._renderCountdown(t.minutes_until_departure)}</span>
            </div>
          `)}
      </div>
    `}};vt.styles=gt,t([ht({attribute:!1})],vt.prototype,"hass",void 0),t([ht({attribute:!1})],vt.prototype,"config",void 0),t([ht({attribute:!1})],vt.prototype,"departures",void 0),t([ht({type:String})],vt.prototype,"stationName",void 0),vt=t([ct("openpublictransport-compact-layout")],vt);let xt=class extends at{constructor(){super(...arguments),this.trip=null}_formatTime(t){return t||""}_getRiskClass(t){switch(t.toLowerCase()){case"low":return"risk-low";case"medium":return"risk-medium";case"high":return"risk-high";default:return""}}_getRiskIcon(t){switch(t.toLowerCase()){case"low":return"mdi:check-circle";case"medium":return"mdi:alert";case"high":return"mdi:alert-octagon";default:return"mdi:help-circle"}}_renderHeader(t){return this.config.show_header?q`
      <div class="trip-header">
        <span>${t.departure}</span>
        <span class="trip-arrow">&rarr;</span>
        <span>${t.arrival}</span>
        <span class="trip-duration">${t.duration_minutes} min</span>
      </div>
    `:V}_renderMeta(t){return q`
      <div class="trip-meta">
        <div class="trip-meta-item">
          <ha-icon icon="mdi:swap-horizontal"></ha-icon>
          <span>${t.transfers} transfer${1!==t.transfers?"s":""}</span>
        </div>
        <div class="trip-meta-item ${this._getRiskClass(t.transfer_risk)}">
          <ha-icon icon=${this._getRiskIcon(t.transfer_risk)}></ha-icon>
          <span>${t.transfer_risk} risk</span>
        </div>
        ${t.min_transfer_time>0?q`
              <div class="trip-meta-item">
                <ha-icon icon="mdi:timer-outline"></ha-icon>
                <span>min ${t.min_transfer_time} min</span>
              </div>
            `:V}
        ${t.connection_feasible?V:q`
              <div class="trip-meta-item risk-high">
                <ha-icon icon="mdi:close-circle"></ha-icon>
                <span>Connection at risk</span>
              </div>
            `}
      </div>
    `}_renderLeg(t){const e=t.transfer?"trip-leg transfer":"trip-leg";return q`
      <div class=${e}>
        <div class="leg-station">${t.origin}</div>
        <div class="leg-details">
          <span class="leg-time">${this._formatTime(t.departure_planned)}</span>
          ${t.delay>0?q`
                <openpublictransport-delay-badge
                  .delay=${t.delay}
                  is-realtime
                ></openpublictransport-delay-badge>
              `:V}
          <openpublictransport-transport-icon
            transport-type=${t.product}
          ></openpublictransport-transport-icon>
          <span>${t.line}</span>
          ${t.platform?q`<span>&middot; Gl. ${t.platform}</span>`:V}
          <span>&middot; ${t.duration_minutes} min</span>
        </div>
        ${t.transfer?q`<div class="leg-transfer-info">Transfer</div>`:V}
      </div>
    `}_renderTimeline(t){const e=t.legs[t.legs.length-1];return q`
      <div class="trip-timeline">
        ${t.legs.map(t=>this._renderLeg(t))}
        ${e?q`
              <div class="trip-leg" style="border-left-color: transparent; padding-bottom: 0;">
                <div class="leg-station">${e.destination}</div>
                <div class="leg-details">
                  <span class="leg-time">${this._formatTime(e.arrival_planned)}</span>
                </div>
              </div>
            `:V}
      </div>
    `}_renderAlternatives(t){return t.next_journeys&&0!==t.next_journeys.length?q`
      <div class="alt-journeys">
        <div class="alt-journeys-title">Alternative Connections</div>
        ${t.next_journeys.map(t=>q`
            <div class="alt-journey">
              <span class="leg-time">${this._formatTime(t.departure)}</span>
              <span class="trip-arrow">&rarr;</span>
              <span class="leg-time">${this._formatTime(t.arrival)}</span>
              <span>${t.duration_minutes} min</span>
              <span>${t.transfers} transfer${1!==t.transfers?"s":""}</span>
              <span class=${this._getRiskClass(t.transfer_risk)}>
                <ha-icon icon=${this._getRiskIcon(t.transfer_risk)} style="--mdc-icon-size:14px;"></ha-icon>
              </span>
            </div>
          `)}
      </div>
    `:V}render(){return this.trip?q`
      <div class="trip-container">
        ${this._renderHeader(this.trip)}
        ${this._renderMeta(this.trip)}
        ${this._renderTimeline(this.trip)}
        ${this._renderAlternatives(this.trip)}
      </div>
    `:q`<div class="card-empty">No trip data available</div>`}};xt.styles=gt,t([ht({attribute:!1})],xt.prototype,"hass",void 0),t([ht({attribute:!1})],xt.prototype,"config",void 0),t([ht({attribute:!1})],xt.prototype,"trip",void 0),xt=t([ct("openpublictransport-trip-layout")],xt);let wt=class extends at{setConfig(t){this._config={...ft,...t}}_fireConfigChanged(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}_entityChanged(t){const e=t.target;this._config&&e.value&&(this._config={...this._config,entity:e.value},this._fireConfigChanged())}_getEntityOptions(){return this.hass?Object.keys(this.hass.states).filter(t=>{if(!t.startsWith("sensor."))return!1;const e=this.hass.states[t].attributes;return void 0!==e.departures||void 0!==e.legs}).map(t=>({id:t,name:this.hass.states[t].attributes.friendly_name||t})):[]}_layoutChanged(t){const e=t.target.value;this._config&&e&&(this._config={...this._config,layout:e},this._fireConfigChanged())}_themeChanged(t){const e=t.target.value;this._config&&e&&(this._config={...this._config,theme:e},this._fireConfigChanged())}_maxDeparturesChanged(t){if(!this._config)return;const e=t.target,i=parseInt(e.value,10);isNaN(i)||i<1||(this._config={...this._config,max_departures:i},this._fireConfigChanged())}_toggleChanged(t){return e=>{this._config&&(this._config={...this._config,[t]:e.target.checked},this._fireConfigChanged())}}render(){return this.hass&&this._config?q`
      <div class="card-config">
        <div class="config-row">
          <label>Entity</label>
          <select .value=${this._config.entity||""} @change=${this._entityChanged}>
            <option value="">-- Select Entity --</option>
            ${this._getEntityOptions().map(t=>q`<option value=${t.id} ?selected=${this._config.entity===t.id}>${t.name}</option>`)}
          </select>
        </div>

        <div class="config-row">
          <label>Layout</label>
          <select .value=${this._config.layout} @change=${this._layoutChanged}>
            <option value="table" ?selected=${"table"===this._config.layout}>Table (Abfahrtstafel)</option>
            <option value="compact" ?selected=${"compact"===this._config.layout}>Compact (Chips)</option>
            <option value="trip" ?selected=${"trip"===this._config.layout}>Trip (Journey)</option>
          </select>
        </div>

        <div class="config-row">
          <label>Theme</label>
          <select .value=${this._config.theme} @change=${this._themeChanged}>
            <option value="auto" ?selected=${"auto"===this._config.theme}>Auto</option>
            <option value="dark" ?selected=${"dark"===this._config.theme}>Dark</option>
            <option value="light" ?selected=${"light"===this._config.theme}>Light</option>
          </select>
        </div>

        <div class="config-row">
          <label>Max Departures</label>
          <ha-textfield
            type="number"
            .value=${String(this._config.max_departures)}
            min="1"
            max="50"
            @change=${this._maxDeparturesChanged}
          ></ha-textfield>
        </div>

        <div class="section-title">Display Options</div>

        <div class="toggle-row">
          <label>Show Header</label>
          <ha-switch
            .checked=${this._config.show_header}
            @change=${this._toggleChanged("show_header")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>Show Platform</label>
          <ha-switch
            .checked=${this._config.show_platform}
            @change=${this._toggleChanged("show_platform")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>Show Delay</label>
          <ha-switch
            .checked=${this._config.show_delay}
            @change=${this._toggleChanged("show_delay")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>Show Realtime Indicator</label>
          <ha-switch
            .checked=${this._config.show_realtime_indicator}
            @change=${this._toggleChanged("show_realtime_indicator")}
          ></ha-switch>
        </div>
      </div>
    `:q``}};wt.styles=n`
    .card-config {
      padding: 16px;
    }
    .config-row {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }
    .config-row label {
      font-weight: 500;
      margin-bottom: 4px;
      font-size: 14px;
    }
    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0;
    }
    .toggle-row label {
      font-weight: 400;
    }
    ha-entity-picker,
    ha-textfield {
      width: 100%;
    }
    select {
      width: 100%;
      padding: 8px;
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #333);
      font-size: 14px;
    }
    .section-title {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      opacity: 0.6;
      margin: 16px 0 8px;
    }
  `,t([ht({attribute:!1})],wt.prototype,"hass",void 0),t([ut()],wt.prototype,"_config",void 0),wt=t([ct("openpublictransport-card-editor")],wt),console.info("%c OPENPUBLICTRANSPORT-CARD %c v1.0.0 ","color: #ffd700; background: #1a1a1a; font-weight: bold; padding: 2px 4px;","color: #1a1a1a; background: #ffd700; font-weight: bold; padding: 2px 4px;");let At=class extends at{static getConfigElement(){return document.createElement("openpublictransport-card-editor")}static getStubConfig(){return{entity:"",...ft}}setConfig(t){if(!t.entity)throw new Error("Please define an entity");this._config={...ft,...t}}getCardSize(){if(!this._config)return 3;switch(this._config.layout){case"compact":return 2;case"trip":return 5;default:return Math.min(2+(this._config.max_departures||10),12)}}connectedCallback(){super.connectedCallback(),this._timeInterval=setInterval(()=>{this.requestUpdate()},3e4)}disconnectedCallback(){super.disconnectedCallback(),this._timeInterval&&(clearInterval(this._timeInterval),this._timeInterval=void 0)}updated(t){super.updated(t),this._applyTheme()}_applyTheme(){if(!this._config)return;let t=this._config.theme;"auto"===t&&(t=this.hass?.themes?.darkMode?"dark":"light"),this.setAttribute("data-theme",t)}_getDepartures(){if(!this.hass||!this._config)return[];const t=this.hass.states[this._config.entity];if(!t)return[];const e=t.attributes.departures;return Array.isArray(e)?e:[]}_getTripData(){if(!this.hass||!this._config)return null;const t=this.hass.states[this._config.entity];if(!t)return null;const e=t.attributes;return e.departure&&e.legs?{departure:e.departure,arrival:e.arrival,duration_minutes:e.duration_minutes,transfers:e.transfers,connection_feasible:e.connection_feasible,transfer_risk:e.transfer_risk,min_transfer_time:e.min_transfer_time,legs:e.legs,next_journeys:e.next_journeys}:null}_getStationName(){if(!this.hass||!this._config)return"";const t=this.hass.states[this._config.entity];return t?t.attributes.friendly_name||t.attributes.station_name||t.entity_id:""}_renderError(t){return q`
      <ha-card>
        <div class="card-error">
          <ha-icon icon="mdi:alert-circle"></ha-icon>
          <div>${t}</div>
        </div>
      </ha-card>
    `}render(){if(!this._config||!this.hass)return V;const t=this.hass.states[this._config.entity];return t?"unavailable"===t.state?this._renderError("Entity is unavailable"):q`
      <ha-card>
        ${this._renderLayout()}
      </ha-card>
    `:this._renderError(`Entity not found: ${this._config.entity}`)}_renderLayout(){switch(this._config.layout){case"compact":return q`
          <openpublictransport-compact-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${this._getDepartures()}
            .stationName=${this._getStationName()}
          ></openpublictransport-compact-layout>
        `;case"trip":return q`
          <openpublictransport-trip-layout
            .hass=${this.hass}
            .config=${this._config}
            .trip=${this._getTripData()}
          ></openpublictransport-trip-layout>
        `;default:return q`
          <openpublictransport-table-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${this._getDepartures()}
            .stationName=${this._getStationName()}
          ></openpublictransport-table-layout>
        `}}};At.styles=gt,t([ht({attribute:!1})],At.prototype,"hass",void 0),t([ut()],At.prototype,"_config",void 0),t([ut()],At.prototype,"_timeInterval",void 0),At=t([ct("openpublictransport-card")],At);const Ct=window;Ct.customCards=Ct.customCards||[],Ct.customCards.push({type:"openpublictransport-card",name:"Public Transport Departures",description:"Display public transport departures in table, compact, or trip layout",preview:!0});export{At as OpenpublictransportCard};
