function t(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new o(i,t,n)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:c,getPrototypeOf:u}=Object,g=globalThis,f=g.trustedTypes,m=f?f.emptyScript:"",_=g.reactiveElementPolyfillSupport,y=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&d(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:a}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const o=n?.call(this);a?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...p(t),...c(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of n){const n=document.createElement("style"),a=e.litNonce;void 0!==a&&n.setAttribute("nonce",a),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=n;const o=a.fromAttribute(e,t.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(t,e,i,n=!1,a){if(void 0!==t){const o=this.constructor;if(!1===n&&(a=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??v)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:a},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==a||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,_?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,k=t=>t,z=$.trustedTypes,A=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+T,E=`<${S}>`,j=document,D=()=>j.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,M="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,H=/>/g,U=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,I=/"/g,F=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),V=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),W=new WeakMap,K=j.createTreeWalker(j,129);function G(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,n=[];let a,o=2===e?"<svg>":3===e?"<math>":"",s=R;for(let e=0;e<i;e++){const i=t[e];let r,l,d=-1,h=0;for(;h<i.length&&(s.lastIndex=h,l=s.exec(i),null!==l);)h=s.lastIndex,s===R?"!--"===l[1]?s=L:void 0!==l[1]?s=H:void 0!==l[2]?(F.test(l[2])&&(a=RegExp("</"+l[2],"g")),s=U):void 0!==l[3]&&(s=U):s===U?">"===l[0]?(s=a??R,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?U:'"'===l[3]?I:O):s===I||s===O?s=U:s===L||s===H?s=R:(s=U,a=void 0);const p=s===U&&t[e+1].startsWith("/>")?" ":"";o+=s===R?i+E:d>=0?(n.push(r),i.slice(0,d)+C+i.slice(d)+T+p):i+T+(-2===d?e:p)}return[G(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class J{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let a=0,o=0;const s=t.length-1,r=this.parts,[l,d]=Z(t,e);if(this.el=J.createElement(l,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=K.nextNode())&&r.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(C)){const e=d[o++],i=n.getAttribute(t).split(T),s=/([.?@])?(.*)/.exec(e);r.push({type:1,index:a,name:s[2],strings:i,ctor:"."===s[1]?et:"?"===s[1]?it:"@"===s[1]?nt:tt}),n.removeAttribute(t)}else t.startsWith(T)&&(r.push({type:6,index:a}),n.removeAttribute(t));if(F.test(n.tagName)){const t=n.textContent.split(T),e=t.length-1;if(e>0){n.textContent=z?z.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],D()),K.nextNode(),r.push({type:2,index:++a});n.append(t[e],D())}}}else if(8===n.nodeType)if(n.data===S)r.push({type:2,index:a});else{let t=-1;for(;-1!==(t=n.data.indexOf(T,t+1));)r.push({type:7,index:a}),t+=T.length-1}a++}}static createElement(t,e){const i=j.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,n){if(e===V)return e;let a=void 0!==n?i._$Co?.[n]:i._$Cl;const o=N(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=a:i._$Cl=a),void 0!==a&&(e=Y(t,a._$AS(t,e.values),a,n)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??j).importNode(e,!0);K.currentNode=n;let a=K.nextNode(),o=0,s=0,r=i[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new X(a,a.nextSibling,this,t):1===r.type?e=new r.ctor(a,r.name,r.strings,this,t):6===r.type&&(e=new at(a,this,t)),this._$AV.push(e),r=i[++s]}o!==r?.index&&(a=K.nextNode(),o++)}return K.currentNode=j,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),N(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Q(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new J(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const a of t)n===e.length?e.push(i=new X(this.O(D()),this.O(D()),this,this.options)):i=e[n],i._$AI(a),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=k(t).nextSibling;k(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,a){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,n){const a=this.strings;let o=!1;if(void 0===a)t=Y(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const n=t;let s,r;for(t=a[0],s=0;s<a.length-1;s++)r=Y(this,n[i+s],e,s),r===V&&(r=this._$AH[s]),o||=!N(r)||r!==this._$AH[s],r===q?t=q:t!==q&&(t+=(r??"")+a[s+1]),this._$AH[s]=r}o&&!n&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class nt extends tt{constructor(t,e,i,n,a){super(t,e,i,n,a),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??q)===V)return;const i=this._$AH,n=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==q&&(i===q||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const ot=$.litHtmlPolyfillSupport;ot?.(J,X),($.litHtmlVersions??=[]).push("3.3.2");const st=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let a=n._$litPart$;if(void 0===a){const t=i?.renderBefore??null;n._$litPart$=a=new X(e.insertBefore(D(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}rt._$litElement$=!0,rt.finalized=!0,st.litElementHydrateSupport?.({LitElement:rt});const lt=st.litElementPolyfillSupport;lt?.({LitElement:rt}),(st.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:v},pt=(t=ht,e,i)=>{const{kind:n,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const a=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,a,t,!0,i)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const a=this[n];e.call(this,i),this.requestUpdate(n,a,t,!0,i)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return ct({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function gt(t,e){return(e,i,n)=>((t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i))(e,i,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}const ft=s`
  /* The card fills the cell a section grid gives it, so that ha-card's
     max-height has a height to resolve against. With a fixed row count the
     layout's body then scrolls inside the cell instead of the card being drawn
     over the one below; with the row count on auto the cell is as tall as the
     card, and this changes nothing. */
  :host {
    height: 100%;
  }

  /* theme: ha, and the palette before a theme is applied. Everything is taken
     from the Home Assistant palette and type, so the card follows the
     dashboard's theme — light, dark or custom — instead of carrying colours of
     its own. */
  :host {
    --opt-bg: var(--ha-card-background, var(--card-background-color));
    --opt-text: var(--primary-text-color);
    --opt-text-secondary: var(--secondary-text-color);
    --opt-border: var(--divider-color);
    --opt-accent: var(--primary-color);
    /* Readable text on top of an accent-coloured surface (line badges). */
    --opt-on-accent: var(--text-primary-color);
    --opt-delay-red: var(--error-color);
    --opt-delay-green: var(--success-color);
    --opt-delay-yellow: var(--warning-color);
    /* Readable text on top of the delay colours (delay badges, the banner). */
    --opt-on-delay: var(--text-primary-color);
    /* Home Assistant's own heading: no band and no rule, no capitals, and the
       size and weight of its heading card's title. The entities card's 24px
       title outweighs a departure list below it. */
    --opt-header-bg: transparent;
    --opt-header-rule: transparent;
    --opt-header-font-size: var(--ha-font-size-l, 16px);
    --opt-header-font-weight: var(--ha-font-weight-normal, 400);
    --opt-header-line-height: var(--ha-line-height-normal, 1.6);
    /* Labels (column headings, the station line) in sentence case, untracked. */
    --opt-caps: none;
    --opt-tracking: 0;
    /* Small text on Home Assistant's scale: labels, countdowns, chips, badges. */
    --opt-font-size-label: var(--ha-font-size-s, 12px);
    --opt-font-size-badge: var(--ha-font-size-s, 12px);
    --opt-row-hover: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    --opt-font-family: var(--ha-font-family-body, Roboto, Noto, sans-serif);
    --opt-font-weight-medium: var(--ha-font-weight-medium, 500);
  }

  /* The departure board: gold on black, in a monospace face. */
  :host([data-theme="dark"]) {
    --opt-bg: #0a0a0a;
    --opt-text: #ffd700;
    --opt-text-secondary: #cccccc;
    --opt-border: rgba(255, 215, 0, 0.15);
    --opt-accent: var(--accent-color, #ffd700);
    --opt-on-accent: #000000;
    --opt-delay-red: #e53935;
    --opt-delay-green: #43a047;
    --opt-delay-yellow: #fdd835;
    /* Black, not white: white on this red measures 4.2:1 and on this green
       3.3:1, below the 4.5:1 a badge's small figures need. The red itself stays,
       since it is also text on the black card, where it measures 4.7:1. */
    --opt-on-delay: #000000;
    /* The board's header: a band under a rule, in tracked capitals. */
    --opt-header-bg: rgba(0, 0, 0, 0.4);
    --opt-header-rule: var(--opt-border);
    --opt-header-font-size: 14px;
    --opt-header-font-weight: 700;
    --opt-header-line-height: normal;
    --opt-caps: uppercase;
    --opt-tracking: 1;
    --opt-font-size-label: 11px;
    --opt-font-size-badge: 13px;
    --opt-row-hover: rgba(255, 215, 0, 0.05);
    --opt-font-family: "Roboto Mono", "Courier New", monospace;
    /* The faces this falls back to — Courier New, DejaVu Sans Mono — have no
       medium, so 500 would drop to regular and a station name would lose the
       bold it has always had here. */
    --opt-font-weight-medium: 600;
  }

  /* The same board on white. */
  :host([data-theme="light"]) {
    --opt-bg: #ffffff;
    --opt-text: #1a1a1a;
    --opt-text-secondary: #666666;
    --opt-border: rgba(0, 0, 0, 0.12);
    --opt-accent: var(--accent-color, #ffd700);
    --opt-on-accent: #000000;
    /* A shade darker than the dark board's red and green, which measure 4.2:1
       and 3.3:1 against white text and white paper; these measure 5.0:1 and
       5.1:1. */
    --opt-delay-red: #d32f2f;
    --opt-delay-green: #2e7d32;
    /* A dark amber: the dark board's yellow measures 1.4:1 on white, where it
       marks a departure's notices and a transfer's risk — invisible. This
       measures 3.6:1, above the 3:1 an icon needs. */
    --opt-delay-yellow: #b07d00;
    --opt-on-delay: #ffffff;
    --opt-header-bg: #f5f5f5;
    --opt-header-rule: var(--opt-border);
    --opt-header-font-size: 14px;
    --opt-header-font-weight: 700;
    --opt-header-line-height: normal;
    --opt-caps: uppercase;
    --opt-tracking: 1;
    --opt-font-size-label: 11px;
    --opt-font-size-badge: 13px;
    --opt-row-hover: rgba(0, 0, 0, 0.03);
    --opt-font-family: "Roboto Mono", "Courier New", monospace;
    --opt-font-weight-medium: 600;
  }
`,mt=s`
  :host {
    display: block;
  }

  ha-card {
    background: var(--opt-bg);
    color: var(--opt-text);
    overflow: hidden;
    font-family: var(--opt-font-family);
    display: flex;
    flex-direction: column;
    /* The card takes the height its content needs, up to the height of the
       cell it is given (see hostStyles). With a fixed row count that is less
       than a long journey needs, and the layout's body scrolls; with the row
       count on auto the cell grows with the card. */
    max-height: 100%;
  }

  /* The layouts take the height their content needs; the card grows with them,
     so a journey with more legs is not cut off by a fixed card height. */
  openpublictransport-table-layout,
  openpublictransport-next-layout,
  openpublictransport-compact-layout,
  openpublictransport-trip-layout {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .card-header,
  .disruption-banner {
    flex-shrink: 0;
  }

  /* Each layout's body is what scrolls when the card is given less height than
     it needs — the header and a disruption banner stay put. Only the table's
     body used to: the others were clipped at the cell's edge, so a trip card
     at its default five rows lost its alternatives with no way to reach them. */
  .card-content,
  .trip-container,
  .compact-container,
  .next-container {
    min-height: 0;
    overflow-y: auto;
  }

  /* Icon sizing fallback: keeps legacy mdc variable and explicit dimensions in sync.
     The flex box is not cosmetic: an ha-icon holds an inline-flex ha-svg-icon,
     so as a block it puts that child on a text baseline and the glyph lands
     about 2px below the middle of the icon's own box — enough to read as
     misaligned beside a label. Laying the child out as a flex item centres the
     glyph in its box, which is what makes Home Assistant's own headings line
     up, and removes any need to nudge icons by hand. */
  ha-icon {
    --mdc-icon-size: var(--opt-icon-size, 24px);
    width: var(--opt-icon-size, 24px);
    height: var(--opt-icon-size, 24px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* The header is the one place the themes part ways in shape rather than
     colour: the board's band of tracked capitals under a rule, or Home
     Assistant's own heading. Each theme's palette says which. */
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 12px 16px;
    background: var(--opt-header-bg);
    border-bottom: 1px solid var(--opt-header-rule);
    font-size: var(--opt-header-font-size);
    font-weight: var(--opt-header-font-weight);
    line-height: var(--opt-header-line-height);
    text-transform: var(--opt-caps);
    letter-spacing: calc(var(--opt-tracking) * 1px);
  }

  .card-header .station-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* The clock is secondary to the station, and keeps the body size under a
     title that is larger than it. */
  .card-header .current-time {
    font-size: var(--ha-font-size-m, 14px);
    font-variant-numeric: tabular-nums;
    color: var(--opt-text-secondary);
    margin-left: 12px;
    flex-shrink: 0;
  }

  /* The table's own box, so its columns can answer to the card's width (see
     the container query below). */
  .card-content {
    container-type: inline-size;
    /* The last row's own padding and this make Home Assistant's 16px below the
       content. */
    padding: 0 0 8px;
  }

  /* Disruption banner */
  .disruption-banner {
    background: var(--opt-delay-red);
    color: var(--opt-on-delay);
    padding: 8px 16px;
    font-size: var(--ha-font-size-s, 12px);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .disruption-banner ha-icon {
    --opt-icon-size: 16px;
    flex-shrink: 0;
  }

  /* The banner is a button that lists every disruption: reset the button's
     own look so it stays the band it was. */
  button.disruption-banner {
    width: 100%;
    border: none;
    margin: 0;
    font: inherit;
    font-size: var(--ha-font-size-s, 12px);
    text-align: start;
    cursor: pointer;
  }

  .disruption-banner .disruption-text {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .disruption-banner .disruption-more {
    flex-shrink: 0;
    font-weight: 700;
    text-decoration: underline;
  }

  button.disruption-banner:focus-visible,
  .notice-button:focus-visible {
    outline: 2px solid var(--opt-accent);
    outline-offset: -2px;
  }

  /* How long ago the data was fetched (show_data_age). */
  .data-age {
    padding: 0 16px 12px;
    font-size: var(--opt-font-size-label);
    color: var(--opt-text-secondary);
    font-variant-numeric: tabular-nums;
  }

  /* Table layout. The table is as wide as the card and never wider: the
     destination takes whatever the other columns leave and gives way first. */
  .departure-table {
    width: 100%;
    border-collapse: collapse;
  }

  /* 12px between columns, and Home Assistant's 16px inset at either edge, so
     the first column starts on the header's text and on the dashboard's own
     column. Twelve pixels a side on every cell spent 96px of a 384px card on
     padding and pushed the platform column off it. */
  .departure-table th,
  .departure-table td {
    padding: 8px 6px;
  }

  .departure-table th:first-child,
  .departure-table td:first-child {
    padding-left: 16px;
  }

  .departure-table th:last-child,
  .departure-table td:last-child {
    padding-right: 16px;
  }

  .departure-table thead th {
    text-align: left;
    font-size: var(--opt-font-size-label);
    font-weight: var(--opt-font-weight-medium);
    text-transform: var(--opt-caps);
    letter-spacing: calc(var(--opt-tracking) * 0.5px);
    white-space: nowrap;
    color: var(--opt-text-secondary);
    /* keep the header row pinned at the top of the scrolling list */
    position: sticky;
    top: 0;
    z-index: 2;
    background: var(--opt-bg);
    /* divider that stays attached to the cell (border-bottom can detach with collapse) */
    box-shadow: inset 0 -1px 0 var(--opt-border);
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
    font-size: var(--ha-font-size-m, 14px);
    vertical-align: middle;
  }

  /* Time column: the time that will actually happen, the delay that explains
     it, and the countdown under both. */
  .time-cell {
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }

  .time-departure {
    font-weight: var(--opt-font-weight-medium);
  }

  /* A time and the delay badge beside it, the badge centred on the time. Set on
     the time's baseline, the badge's figures lined up but its pill did not:
     they carry no descenders, so the pill's leading and descent all hang below
     them — 4.4px under the time's digits against 1.4px above. Centring the two
     boxes puts the pill's middle on the digits' middle, within 0.3px, in
     whatever face the theme draws them. */
  .time-line {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .time-countdown {
    display: block;
    font-size: var(--opt-font-size-label);
    color: var(--opt-text-secondary);
    margin-top: 2px;
  }

  /* Line cell. The vehicle icon is the card's 16px, not ha-icon's 24px
     default: the line badge is what identifies the service, and the vehicle
     beside it only qualifies it. */
  .line-cell {
    --opt-icon-size: 16px;
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
    font-size: var(--opt-font-size-badge);
    background: var(--opt-accent);
    color: var(--opt-on-accent);
  }

  /* Destination: the rest of the row. A zero max-width lets a table cell
     shrink below its text, so the name ellipsises instead of widening the
     table past the card; the 100% width hands it every pixel the other
     columns do not need. */
  .destination-cell {
    width: 100%;
    max-width: 0;
    font-weight: 500;
  }

  /* A departure's notice mark follows its destination. In the line column it
     widened that column for every row, notice or not. */
  .destination {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .destination-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Platform */
  .platform-cell {
    text-align: center;
    font-weight: var(--opt-font-weight-medium);
    white-space: nowrap;
  }

  /* The platform the timetable named, struck through. Secondary text, not a
     faded copy of the primary: at half opacity it measured 3.3:1 on the light
     board and 4.1:1 on the dark one. */
  .platform-changed {
    text-decoration: line-through;
    color: var(--opt-text-secondary);
    margin-right: 4px;
  }

  .platform-new {
    color: var(--opt-delay-red);
    font-weight: 700;
  }

  /* The short platform label is for narrow cards only. */
  .label-short {
    display: none;
  }

  /* A card in a narrow column — a phone, a dashboard of four — keeps every
     column rather than losing the last one off its edge: the vehicle icon
     goes, since the line badge already names the service, and the platform
     heading takes its short form. */
  @container (max-width: 340px) {
    .line-cell openpublictransport-transport-icon {
      display: none;
    }

    .label-long {
      display: none;
    }

    .label-short {
      display: inline;
    }
  }

  /* Notices */
  .notice-icon {
    --opt-icon-size: 16px;
    flex-shrink: 0;
    color: var(--opt-delay-yellow);
  }

  /* A 16px icon with a touch target around it; the negative margin keeps the
     row as tall as it was. */
  .notice-button {
    display: inline-flex;
    flex-shrink: 0;
    padding: 6px;
    margin: -6px;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  .notice-icon.notice-info {
    color: var(--opt-text-secondary);
  }

  /* Compact layout. The chips start on Home Assistant's 16px inset, where the
     header's text starts. */
  .compact-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px 16px;
  }

  /* The icon is a transport-icon element, not an ha-icon, so it is sized by
     the variable it reads: the ha-icon rule this replaces never matched, and
     the chips drew ha-icon's 24px default. */
  .compact-chip {
    --opt-icon-size: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 2px solid var(--opt-border);
    background: var(--opt-bg);
    font-size: var(--opt-font-size-badge);
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
    color: var(--opt-text-secondary);
  }

  .compact-chip .chip-countdown {
    font-weight: var(--opt-font-weight-medium);
    font-variant-numeric: tabular-nums;
  }

  /* Trip layout */
  .trip-container {
    /* The card's content keeps Home Assistant's own 16px inset, so it starts on
       the same column as every other card on the dashboard. The timeline's rail
       and dots live inside that inset rather than pushing the content right. */
    padding: 12px 16px;
  }

  .trip-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 8px;
    font-size: var(--ha-font-size-l, 16px);
    font-weight: var(--ha-font-weight-bold, 700);
    font-variant-numeric: tabular-nums;
  }

  .trip-arrow {
    color: var(--opt-text-secondary);
    /* The mark is drawn, so it is its own box that has to be placed: centred on
       the line rather than sat on a text baseline it does not share. */
    align-self: center;
    display: flex;
    flex-shrink: 0;
  }

  /* Sized in em so it scales with whatever text it joins, and stroked in
     currentColor so it inherits that text's colour. See the ARROW constant in
     layouts/trip.ts for why it is drawn and not typed. */
  .trip-arrow svg {
    display: block;
    width: 1.05em;
    height: 1.05em;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* The header is bold, so its arrow carries the same weight. */
  .trip-header .trip-arrow svg {
    stroke-width: 2.6;
  }

  /* An arrow joins the two things on either side of it, so it keeps their
     company rather than the row's — in a row's own gap it read as another
     column separator, with as much air around it as unrelated values have. */
  .time-span {
    display: inline-flex;
    align-items: baseline;
    gap: 5px;
  }

  /* The journey's total reads at the same size as the times it belongs to; only
     its weight and colour set it back. */
  .trip-header .trip-duration {
    margin-left: auto;
    font-weight: var(--ha-font-weight-normal, 400);
    color: var(--opt-text-secondary);
  }

  /* One quiet line of facts rather than a row of filled boxes, the way Home
     Assistant renders a card's secondary information. */
  .trip-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2px 12px;
    margin-bottom: 12px;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
  }

  .trip-meta-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    cursor: default;
  }

  .trip-meta-item ha-icon {
    --opt-icon-size: 16px;
    color: var(--opt-text-secondary);
  }

  /* Transfer risk. The colour rides on the icon so the label keeps the body
     text's contrast — painted in the warning hue it was unreadable on a light
     theme. A connection actually at risk is the one case loud enough to colour
     the text as well. */
  .risk-low ha-icon {
    color: var(--opt-delay-green);
  }

  .risk-medium ha-icon {
    color: var(--opt-delay-yellow);
  }

  .risk-high,
  .risk-high ha-icon {
    color: var(--opt-delay-red);
  }

  /* Timeline. Everything is placed from the four sizes below, so the rail, the
     dots and the text keep their relationship whatever those sizes become. */
  .trip-timeline {
    --opt-line-width: 2px;
    --opt-dot-size: 6px;
    --opt-dot-ring: 2px;
    /* the hollow marker's stroke: thinner than the outer ring, so a dot this
       small keeps a visible centre */
    --opt-dot-stroke: 1.5px;
    --opt-station-line: 20px;
    /* Gap between the dots and the text they mark. */
    --opt-dot-gap: 5px;
    /* From the legs' text back to the centre of the rail. */
    --opt-rail-offset: calc(
      var(--opt-dot-gap) + (var(--opt-dot-size) + 2 * var(--opt-dot-ring)) / 2
    );

    position: relative;
    /* Indenting the legs by exactly that offset puts the rail on the same
       column as the header, the facts and the alternatives — it reads as one
       vertical rule through the card's content — while the dots, being wider
       than the rule, straddle that column and sit a little into the padding. */
    padding-left: var(--opt-rail-offset);
  }

  .trip-leg {
    position: relative;
    padding-bottom: 16px;
  }

  /* The rail runs from this leg's dot to the next one, so it meets both centres
     and never leaves a gap at a leg boundary. */
  .trip-leg::after {
    content: "";
    position: absolute;
    left: calc(-1 * var(--opt-rail-offset) - var(--opt-line-width) / 2);
    top: calc(var(--opt-station-line) / 2);
    bottom: calc(-1 * var(--opt-station-line) / 2);
    width: var(--opt-line-width);
    background: var(--opt-border);
  }

  .trip-leg:last-child {
    padding-bottom: 0;
  }

  .trip-leg:last-child::after {
    display: none;
  }

  .trip-leg::before {
    content: "";
    position: absolute;
    /* the dot, ring included, centred on the rail */
    left: calc(-1 * var(--opt-rail-offset) - var(--opt-dot-size) / 2 - var(--opt-dot-ring));
    /* and on the middle of the station's first line */
    top: calc((var(--opt-station-line) - var(--opt-dot-size)) / 2 - var(--opt-dot-ring));
    width: var(--opt-dot-size);
    height: var(--opt-dot-size);
    border-radius: 50%;
    background: var(--opt-accent);
    border: var(--opt-dot-ring) solid var(--opt-bg);
  }

  /* A transfer is a hollow dot: a change of vehicle, not another colour. */
  .trip-leg.transfer::before {
    background: var(--opt-bg);
    box-shadow: inset 0 0 0 var(--opt-dot-stroke) var(--opt-accent);
  }

  /* Station and duration share the leg's first line, so the durations line up
     with the station names rather than floating beside the smaller detail row. */
  .leg-head {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }

  .leg-station {
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--opt-font-weight-medium);
    line-height: var(--opt-station-line);
  }

  .leg-details {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
  }

  .leg-details ha-icon,
  .leg-details openpublictransport-transport-icon {
    --opt-icon-size: 16px;
  }

  .leg-time {
    font-variant-numeric: tabular-nums;
    font-weight: var(--opt-font-weight-medium);
  }

  .leg-line {
    font-weight: var(--opt-font-weight-medium);
  }

  /* The line and where it is headed: one phrase, so the arrow between them sits
     closer than the gap separating them from the ride's length. */
  .leg-service {
    display: inline-flex;
    align-items: baseline;
    gap: 5px;
    min-width: 0;
    overflow: hidden;
  }

  /* Where the vehicle is headed. It can be long, so it yields before the
     duration does. */
  .leg-direction {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }

  /* A station's own time sits at the right edge of its line, so the journey's
     four times read down one column like a timetable. */
  /* The delay and the time it qualifies travel together at the right edge. */
  .leg-head-time {
    margin-left: auto;
    display: flex;
    align-items: baseline;
    gap: 6px;
    flex-shrink: 0;
  }

  /* The badge's figures carry no descenders, so its ink rides high inside the
     pill and the pill hangs below the digits it annotates — measured, 4.1px
     under them against 1.7px above. No box alignment fixes that: the asymmetry
     is inside the pill, not in how it is placed, and reshaping the box moves
     both of its edges equally while the figures stay put. Two pixels up brings
     the two sets of figures onto the same optical line. */
  .leg-head-time openpublictransport-delay-badge {
    transform: translateY(-2px);
  }

  .leg-departure {
    flex-shrink: 0;
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--opt-font-weight-medium);
    line-height: var(--opt-station-line);
    color: var(--opt-text);
  }

  /* The ride's length belongs to the vehicle that does it, so it follows the
     line and its direction directly rather than being pushed to the far edge:
     it reads as part of that sentence, and the right edge stays the times'. */
  .leg-duration {
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }

  /* When this leg gets in, under the time it left. Set back, because the pair
     that matters at a change is this arrival and the next leg's departure
     directly below it — which is what makes the wait between them visible. */
  .leg-arrival {
    margin-left: auto;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
    color: var(--opt-text-secondary);
  }

  .leg-transfer-info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
    margin-top: 2px;
  }

  .leg-transfer-info ha-icon {
    --opt-icon-size: 16px;
  }

  /* Alternative journeys. No rule above the heading: the heading and the space
     before it already say a new section starts, and the rows below carry rules
     of their own — a third line here would compete with both. */
  .alt-journeys {
    margin-top: 16px;
  }

  /* The heading belongs to the list under it, so it sits close to it — the air
     that separates the two goes above the heading, not between them. */
  .alt-journeys-title {
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--opt-font-weight-medium);
    color: var(--opt-text-secondary);
    margin-bottom: 2px;
  }

  .alt-journey {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 0;
    font-size: var(--ha-font-size-s, 12px);
    font-variant-numeric: tabular-nums;
    color: var(--opt-text-secondary);
    border-bottom: 1px solid var(--opt-border);
  }

  .alt-journey .leg-time {
    color: var(--opt-text);
  }

  .alt-journey .alt-risk {
    margin-left: auto;
    display: inline-flex;
  }

  .alt-journey:last-child {
    border-bottom: none;
  }

  /* Error / Empty states, set back by colour rather than opacity: the error's
     red at 70% measured 3.2:1 on the light board and 2.8:1 on the dark one. */
  .card-error,
  .card-empty {
    padding: 24px 16px;
    text-align: center;
    font-size: var(--ha-font-size-m, 14px);
  }

  .card-empty {
    color: var(--opt-text-secondary);
  }

  .card-error {
    color: var(--opt-delay-red);
  }

  .card-error ha-icon {
    --opt-icon-size: 40px;
    display: block;
    margin: 0 auto 12px;
  }

  /* Delay badge. A filled chip reads at a glance, which is what a delay wants —
     but at its old size it outweighed the journey's own times. Now that a leg
     reports the time that will actually happen, the badge only explains why
     that time differs from the timetable, so it is sized as the annotation it
     is rather than as a headline. */
  .delay-badge {
    display: inline-flex;
    align-items: center;
    padding: 0 4px;
    border-radius: 4px;
    font-size: var(--ha-font-size-xs, 10px);
    font-weight: var(--opt-font-weight-medium);
    font-variant-numeric: tabular-nums;
    line-height: 1.6;
  }

  .delay-badge.delayed {
    background: var(--opt-delay-red);
    color: var(--opt-on-delay);
  }

  .delay-badge.on-time {
    background: var(--opt-delay-green);
    color: var(--opt-on-delay);
  }

  /* The drawn mark: as tall as the pill's line, so an on-time badge is the
     height of a delayed one, and stroked about as heavy as the figures. */
  .delay-badge .check {
    display: block;
    width: 1.2em;
    height: 1.6em;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
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
`,_t={layout:"table",max_departures:10,show_header:!0,show_platform:!0,show_delay:!0,show_realtime_indicator:!0,theme:"auto",line_filter:"",destination_filter:"",show_notices:!0,show_disruption_banner:!0,show_data_age:!1},yt={bus:"mdi:bus",tram:"mdi:tram",subway:"mdi:subway-variant",train:"mdi:train",ferry:"mdi:ferry",taxi:"mdi:taxi","s-bahn":"mdi:train","u-bahn":"mdi:subway-variant",regional:"mdi:train",express:"mdi:train",walk:"mdi:walk",footpath:"mdi:walk",fussweg:"mdi:walk","fußweg":"mdi:walk",bicycle:"mdi:bike",fahrrad:"mdi:bike",default:"mdi:transit-connection-variant"},bt={en:{now:"now",in_min:"in {min} min",in_1_min:"in 1 min",in_h_min:"in {h} h {min} min",in_h:"in {h} h",notices:"Notices",disruptions:"Disruptions",more_count:"+{n} more",close:"Close",show_all_disruptions:"Show all disruptions",notices_for:"Notices for {line} to {destination}",fetched_ago:"Fetched {age}",show_notices:"Show Notice Icons",show_disruption_banner:"Show Disruption Banner",show_data_age:"Show Data Age",on_time:"on time",no_departures:"No departures available",no_trip_data:"No trip data available",entity_unavailable:"Entity is unavailable",please_define_entity:"Please define an entity",alternative_connections:"Alternative Connections",connection_at_risk:"Connection at risk",risk:"risk",risk_low:"Low risk",risk_medium:"Medium risk",risk_high:"High risk",min_transfer:"Transfer time",transfer:"Transfer",transfers:"transfers",platform:"Pl.",time:"Time",line:"Line",destination:"Destination",track:"Track",table_layout:"Table (Departure Board)",compact_layout:"Compact (Chips)",trip_layout:"Trip (Journey)",next_layout:"Next Departure (Widget)",entity:"Entity",layout:"Layout",theme:"Theme",theme_ha:"Home Assistant (native)",max_departures:"Max Departures",show_header:"Show Header",show_platform:"Show Platform",show_delay:"Show Delay",show_realtime:"Show Realtime Indicator",display_options:"Display Options",line_filter:"Line Filter",line_filter_hint:"Show only these lines (comma-separated, e.g. U6, S1, RE5). Leave empty to show all.",destination_filter:"Destination Filter",destination_filter_hint:"Show only departures whose destination matches (comma-separated, partial match, e.g. Duisburg, Flughafen). Leave empty to show all.",filters:"Filters",trip_filter_note:"The line and destination filters apply to departure boards only. Filter connections on the device itself: Settings → Devices & services → your trip device → Configure."},de:{now:"jetzt",in_min:"in {min} min",in_1_min:"in 1 min",in_h_min:"in {h} h {min} min",in_h:"in {h} h",notices:"Hinweise",disruptions:"Störungen",more_count:"+{n} weitere",close:"Schließen",show_all_disruptions:"Alle Störungen anzeigen",notices_for:"Hinweise zu {line} nach {destination}",fetched_ago:"Abgerufen {age}",show_notices:"Hinweis-Symbole anzeigen",show_disruption_banner:"Störungsbanner anzeigen",show_data_age:"Datenalter anzeigen",on_time:"pünktlich",no_departures:"Keine Abfahrten verfügbar",no_trip_data:"Keine Verbindungsdaten verfügbar",entity_unavailable:"Entity nicht verfügbar",please_define_entity:"Bitte eine Entity auswählen",alternative_connections:"Alternative Verbindungen",connection_at_risk:"Anschluss gefährdet",risk:"Risiko",risk_low:"Geringes Risiko",risk_medium:"Mittleres Risiko",risk_high:"Hohes Risiko",min_transfer:"Umstiegszeit",transfer:"Umstieg",transfers:"Umstiege",platform:"Gl.",time:"Zeit",line:"Linie",destination:"Ziel",track:"Gleis",table_layout:"Tabelle (Abfahrtstafel)",compact_layout:"Kompakt (Chips)",trip_layout:"Verbindung (Trip)",next_layout:"Nächste Abfahrt (Widget)",entity:"Entity",layout:"Layout",theme:"Design",theme_ha:"Home Assistant (nativ)",max_departures:"Max. Abfahrten",show_header:"Kopfzeile anzeigen",show_platform:"Gleis anzeigen",show_delay:"Verspätung anzeigen",show_realtime:"Echtzeit-Indikator anzeigen",display_options:"Anzeigeoptionen",line_filter:"Linienfilter",line_filter_hint:"Nur diese Linien anzeigen (kommagetrennt, z.B. U6, S1, RE5). Leer lassen für alle.",destination_filter:"Zielfilter",destination_filter_hint:"Nur Abfahrten mit passendem Ziel anzeigen (kommagetrennt, Teiltreffer, z.B. Duisburg, Flughafen). Leer lassen für alle.",filters:"Filter",trip_filter_note:"Linien- und Zielfilter gelten nur für Abfahrtstafeln. Verbindungen filterst du am Gerät selbst: Einstellungen → Geräte & Dienste → dein Trip-Gerät → Konfigurieren."},fr:{now:"maintenant",in_min:"dans {min} min",in_1_min:"dans 1 min",in_h_min:"dans {h} h {min} min",in_h:"dans {h} h",notices:"Informations",disruptions:"Perturbations",more_count:"+{n} autres",close:"Fermer",show_all_disruptions:"Afficher toutes les perturbations",notices_for:"Informations pour {line} vers {destination}",fetched_ago:"Récupéré {age}",show_notices:"Afficher les icônes d'information",show_disruption_banner:"Afficher la bannière de perturbation",show_data_age:"Afficher l'âge des données",on_time:"à l'heure",no_departures:"Aucun départ disponible",no_trip_data:"Aucune donnée de trajet disponible",entity_unavailable:"Entité indisponible",please_define_entity:"Veuillez sélectionner une entité",alternative_connections:"Correspondances alternatives",connection_at_risk:"Correspondance menacée",risk:"risque",risk_low:"Risque faible",risk_medium:"Risque moyen",risk_high:"Risque élevé",min_transfer:"Temps de correspondance",transfer:"Correspondance",transfers:"correspondances",platform:"Voie",time:"Heure",line:"Ligne",destination:"Destination",track:"Voie",table_layout:"Tableau (Panneau de départs)",compact_layout:"Compact (Puces)",trip_layout:"Trajet (Itinéraire)",next_layout:"Prochain départ (Widget)",entity:"Entité",layout:"Disposition",theme:"Thème",theme_ha:"Home Assistant (natif)",max_departures:"Départs max.",show_header:"Afficher l'en-tête",show_platform:"Afficher la voie",show_delay:"Afficher le retard",show_realtime:"Afficher l'indicateur temps réel",display_options:"Options d'affichage",line_filter:"Filtre de lignes",line_filter_hint:"Afficher uniquement ces lignes (séparées par des virgules, ex. U6, S1, RE5). Laisser vide pour tout afficher.",destination_filter:"Filtre de destination",destination_filter_hint:"Afficher uniquement les départs dont la destination correspond (séparées par des virgules, correspondance partielle, ex. Duisburg, Aéroport). Laisser vide pour tout afficher.",filters:"Filtres",trip_filter_note:"Les filtres de lignes et de destination ne s'appliquent qu'aux tableaux de départs. Filtrez les trajets sur l'appareil lui-même : Paramètres → Appareils et services → votre appareil de trajet → Configurer."},nl:{now:"nu",in_min:"over {min} min",in_1_min:"over 1 min",in_h_min:"over {h} h {min} min",in_h:"over {h} h",notices:"Meldingen",disruptions:"Storingen",more_count:"+{n} meer",close:"Sluiten",show_all_disruptions:"Alle storingen tonen",notices_for:"Meldingen voor {line} naar {destination}",fetched_ago:"Opgehaald {age}",show_notices:"Meldingspictogrammen tonen",show_disruption_banner:"Storingsbanner tonen",show_data_age:"Leeftijd van gegevens tonen",on_time:"op tijd",no_departures:"Geen vertrekken beschikbaar",no_trip_data:"Geen reisgegevens beschikbaar",entity_unavailable:"Entity niet beschikbaar",please_define_entity:"Selecteer een entity",alternative_connections:"Alternatieve verbindingen",connection_at_risk:"Aansluiting in gevaar",risk:"risico",risk_low:"Laag risico",risk_medium:"Gemiddeld risico",risk_high:"Hoog risico",min_transfer:"Overstaptijd",transfer:"Overstap",transfers:"overstappen",platform:"Spoor",time:"Tijd",line:"Lijn",destination:"Bestemming",track:"Spoor",table_layout:"Tabel (Vertrekbord)",compact_layout:"Compact (Chips)",trip_layout:"Reis (Route)",next_layout:"Volgend vertrek (Widget)",entity:"Entity",layout:"Layout",theme:"Thema",theme_ha:"Home Assistant (native)",max_departures:"Max. vertrekken",show_header:"Koptekst tonen",show_platform:"Spoor tonen",show_delay:"Vertraging tonen",show_realtime:"Realtime-indicator tonen",display_options:"Weergaveopties",line_filter:"Lijnfilter",line_filter_hint:"Toon alleen deze lijnen (kommagescheiden, bijv. U6, S1, RE5). Leeg laten voor alles.",destination_filter:"Bestemmingsfilter",destination_filter_hint:"Toon alleen vertrekken met een overeenkomende bestemming (kommagescheiden, gedeeltelijke overeenkomst, bijv. Duisburg, Luchthaven). Leeg laten voor alles.",filters:"Filters",trip_filter_note:"Lijn- en bestemmingsfilters gelden alleen voor vertrekborden. Filter verbindingen op het apparaat zelf: Instellingen → Apparaten en diensten → je reis-apparaat → Configureren."},sv:{now:"nu",in_min:"om {min} min",in_1_min:"om 1 min",in_h_min:"om {h} h {min} min",in_h:"om {h} h",notices:"Meddelanden",disruptions:"Störningar",more_count:"+{n} till",close:"Stäng",show_all_disruptions:"Visa alla störningar",notices_for:"Meddelanden för {line} mot {destination}",fetched_ago:"Hämtad {age}",show_notices:"Visa meddelandeikoner",show_disruption_banner:"Visa störningsbanner",show_data_age:"Visa datans ålder",on_time:"i tid",no_departures:"Inga avgångar tillgängliga",no_trip_data:"Inga resedata tillgängliga",entity_unavailable:"Entitet otillgänglig",please_define_entity:"Välj en entitet",alternative_connections:"Alternativa förbindelser",connection_at_risk:"Anslutning hotad",risk:"risk",risk_low:"Låg risk",risk_medium:"Medelrisk",risk_high:"Hög risk",min_transfer:"Bytestid",transfer:"Byte",transfers:"byten",platform:"Spår",time:"Tid",line:"Linje",destination:"Destination",track:"Spår",table_layout:"Tabell (Avgångstavla)",compact_layout:"Kompakt (Chips)",trip_layout:"Resa (Rutt)",next_layout:"Nästa avgång (Widget)",entity:"Entitet",layout:"Layout",theme:"Tema",theme_ha:"Home Assistant (native)",max_departures:"Max avgångar",show_header:"Visa rubrik",show_platform:"Visa spår",show_delay:"Visa försening",show_realtime:"Visa realtidsindikator",display_options:"Visningsalternativ",line_filter:"Linjefilter",line_filter_hint:"Visa bara dessa linjer (kommaseparerade, t.ex. U6, S1, RE5). Lämna tomt för alla.",destination_filter:"Destinationsfilter",destination_filter_hint:"Visa bara avgångar vars destination matchar (kommaseparerade, delvis matchning, t.ex. Duisburg, Flygplats). Lämna tomt för alla.",filters:"Filter",trip_filter_note:"Linje- och destinationsfiltren gäller bara avgångstavlor. Filtrera förbindelser på själva enheten: Inställningar → Enheter och tjänster → din reseenhet → Konfigurera."},pl:{now:"teraz",in_min:"za {min} min",in_1_min:"za 1 min",in_h_min:"za {h} h {min} min",in_h:"za {h} h",notices:"Komunikaty",disruptions:"Utrudnienia",more_count:"+{n} więcej",close:"Zamknij",show_all_disruptions:"Pokaż wszystkie utrudnienia",notices_for:"Komunikaty dla {line} do {destination}",fetched_ago:"Pobrano {age}",show_notices:"Pokaż ikony komunikatów",show_disruption_banner:"Pokaż baner utrudnień",show_data_age:"Pokaż wiek danych",on_time:"punktualnie",no_departures:"Brak dostępnych odjazdów",no_trip_data:"Brak danych o podróży",entity_unavailable:"Encja niedostępna",please_define_entity:"Wybierz encję",alternative_connections:"Alternatywne połączenia",connection_at_risk:"Połączenie zagrożone",risk:"ryzyko",risk_low:"Niskie ryzyko",risk_medium:"Średnie ryzyko",risk_high:"Wysokie ryzyko",min_transfer:"Czas przesiadki",transfer:"Przesiadka",transfers:"przesiadki",platform:"Peron",time:"Czas",line:"Linia",destination:"Kierunek",track:"Tor",table_layout:"Tabela (Tablica odjazdów)",compact_layout:"Kompaktowy (Chipy)",trip_layout:"Podróż (Trasa)",next_layout:"Następny odjazd (Widget)",entity:"Encja",layout:"Układ",theme:"Motyw",theme_ha:"Home Assistant (natywny)",max_departures:"Maks. odjazdów",show_header:"Pokaż nagłówek",show_platform:"Pokaż peron",show_delay:"Pokaż opóźnienie",show_realtime:"Pokaż wskaźnik czasu rzeczywistego",display_options:"Opcje wyświetlania",line_filter:"Filtr linii",line_filter_hint:"Pokaż tylko te linie (oddzielone przecinkami, np. U6, S1, RE5). Zostaw puste, aby pokazać wszystkie.",destination_filter:"Filtr kierunku",destination_filter_hint:"Pokaż tylko odjazdy z pasującym kierunkiem (oddzielone przecinkami, częściowe dopasowanie, np. Duisburg, Lotnisko). Zostaw puste, aby pokazać wszystkie.",filters:"Filtry",trip_filter_note:"Filtry linii i kierunku działają tylko na tablicach odjazdów. Połączenia filtrujesz w samym urządzeniu: Ustawienia → Urządzenia i usługi → twoje urządzenie podróży → Konfiguruj."},it:{now:"adesso",in_min:"tra {min} min",in_1_min:"tra 1 min",in_h_min:"tra {h} h {min} min",in_h:"tra {h} h",notices:"Avvisi",disruptions:"Disservizi",more_count:"+{n} altri",close:"Chiudi",show_all_disruptions:"Mostra tutti i disservizi",notices_for:"Avvisi per {line} verso {destination}",fetched_ago:"Aggiornato {age}",show_notices:"Mostra icone avvisi",show_disruption_banner:"Mostra banner disservizi",show_data_age:"Mostra età dei dati",on_time:"in orario",no_departures:"Nessuna partenza disponibile",no_trip_data:"Nessun dato di viaggio disponibile",entity_unavailable:"Entità non disponibile",please_define_entity:"Seleziona un'entità",alternative_connections:"Connessioni alternative",connection_at_risk:"Connessione a rischio",risk:"rischio",risk_low:"Rischio basso",risk_medium:"Rischio medio",risk_high:"Rischio alto",min_transfer:"Tempo di cambio",transfer:"Cambio",transfers:"cambi",platform:"Bin.",time:"Orario",line:"Linea",destination:"Destinazione",track:"Binario",table_layout:"Tabella (Pannello partenze)",compact_layout:"Compatto (Chip)",trip_layout:"Viaggio (Percorso)",next_layout:"Prossima partenza (Widget)",entity:"Entità",layout:"Layout",theme:"Tema",theme_ha:"Home Assistant (nativo)",max_departures:"Max. partenze",show_header:"Mostra intestazione",show_platform:"Mostra binario",show_delay:"Mostra ritardo",show_realtime:"Mostra indicatore tempo reale",display_options:"Opzioni di visualizzazione",line_filter:"Filtro linee",line_filter_hint:"Mostra solo queste linee (separate da virgola, es. U6, S1, RE5). Lascia vuoto per mostrare tutto.",destination_filter:"Filtro destinazione",destination_filter_hint:"Mostra solo le partenze con destinazione corrispondente (separate da virgola, corrispondenza parziale, es. Duisburg, Aeroporto). Lascia vuoto per mostrare tutto.",filters:"Filtri",trip_filter_note:"I filtri di linea e destinazione valgono solo per i tabelloni delle partenze. Filtra le connessioni sul dispositivo stesso: Impostazioni → Dispositivi e servizi → il tuo dispositivo viaggio → Configura."}};function vt(t,e,i){const n=t?.substring(0,2).toLowerCase()||"en";let a=(bt[n]||bt.en)[e]||bt.en[e]||e;if(i)for(const[t,e]of Object.entries(i))a=a.replace(`{${t}}`,String(e));return a}function wt(t,e){if(t){const e=Date.parse(t);if(!Number.isNaN(e))return Math.floor((e-Date.now())/6e4)}return e}function xt(t,e){if(e<=0)return vt(t,"now");if(1===e)return vt(t,"in_1_min");if(e<60)return vt(t,"in_min",{min:e});const i=Math.floor(e/60),n=e%60;return n?vt(t,"in_h_min",{h:i,min:n}):vt(t,"in_h",{h:i})}function $t(t,e){if(!e.startsWith("sensor."))return!1;if("openpublictransport"===t.entities?.[e]?.platform)return!0;const i=t.states[e]?.attributes;return!!i&&(Array.isArray(i.departures)||Array.isArray(i.legs)||void 0!==i.departure)}function kt(t,e){return(e??Object.keys(t.states)).filter(e=>$t(t,e))}function zt(t,e){const i=t.states[e]?.attributes??{};return Array.isArray(i.departures)?"departures":Array.isArray(i.legs)||void 0!==i.departure||void 0!==i.arrival||/(^|[._-])trip([._-]|$)|_to_|journey|connection/i.test(e)||"mdi:routes"===i.icon?"trip":"unknown"}function At(t){return"trip"===t?"trip":"table"}let Ct=class extends rt{constructor(){super(...arguments),this.transportType=""}_getIcon(){const t=this.transportType.toLowerCase();return yt[t]||yt.default}render(){return B`<ha-icon .icon=${this._getIcon()}></ha-icon>`}};Ct.styles=s`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--opt-icon-size, 24px);
      height: var(--opt-icon-size, 24px);
      flex-shrink: 0;
    }

    ha-icon {
      --mdc-icon-size: var(--opt-icon-size, 24px);
      width: var(--opt-icon-size, 24px);
      height: var(--opt-icon-size, 24px);
      /* flex, not block: see the icon rule in styles.ts — as a block the
         glyph sits about 2px low inside its own box. */
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,t([ct({type:String,attribute:"transport-type"})],Ct.prototype,"transportType",void 0),Ct=t([dt("openpublictransport-transport-icon")],Ct);const Tt=B`<svg class="check" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
  <path d="M2.5 6.5 5 9l4.5-5.5" />
</svg>`;let St=class extends rt{constructor(){super(...arguments),this.delay=0,this.isRealtime=!1,this.language=""}render(){if(this.delay>0)return B`
        <span class="delay-badge delayed">+${this.delay}</span>
      `;if(0===this.delay&&this.isRealtime){const t=vt(this.language,"on_time");return B`
        <span class="delay-badge on-time" role="img" aria-label=${t} title=${t}>${Tt}</span>
      `}return q}};St.styles=[mt,s`
      /* As a block, the host takes its baseline from its own first line box —
         which the template's indentation creates in the inherited font, not in
         the badge's. Aligned against a time beside it the badge then sat a
         line's worth too low. A flex host ignores that whitespace and takes the
         badge's own baseline instead. */
      :host {
        display: inline-flex;
        align-items: baseline;
      }
    `],t([ct({type:Number})],St.prototype,"delay",void 0),t([ct({type:Boolean,attribute:"is-realtime"})],St.prototype,"isRealtime",void 0),t([ct({attribute:!1})],St.prototype,"language",void 0),St=t([dt("openpublictransport-delay-badge")],St);let Et=class extends rt{constructor(){super(...arguments),this.language="en",this.heading="",this.disruptions=[],this.notices=[],this._opener=null,this._onClose=()=>{this._opener?.focus?.(),this._opener=null},this._onClick=t=>{t.target===this._dialog&&this.close()}}async open(){this._opener=this.getRootNode().activeElement,await this.updateComplete,this._dialog.open||this._dialog.showModal()}close(){this._dialog?.close()}_renderList(t,e){const i="disruption"===e?"mdi:alert-circle-outline":"mdi:information-outline";return B`<ul>
      ${t.map(t=>B`<li class=${e}><ha-icon icon=${i}></ha-icon><span>${t}</span></li>`)}
    </ul>`}render(){const t=this.language,e=this.disruptions.length>0&&this.notices.length>0;return B`
      <dialog aria-labelledby="title" @close=${this._onClose} @click=${this._onClick}>
        <div class="dialog-header">
          <span class="dialog-title" id="title">${this.heading}</span>
          <button class="close" aria-label=${vt(t,"close")} @click=${()=>this.close()}>
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <div class="dialog-body">
          ${this.disruptions.length?B`${e?B`<h3>${vt(t,"disruptions")}</h3>`:q}
              ${this._renderList(this.disruptions,"disruption")}`:q}
          ${this.notices.length?B`${e?B`<h3>${vt(t,"notices")}</h3>`:q}
              ${this._renderList(this.notices,"info")}`:q}
        </div>
      </dialog>
    `}};Et.styles=s`
    dialog {
      box-sizing: border-box;
      width: min(440px, calc(100vw - 32px));
      max-height: calc(100vh - 64px);
      padding: 0;
      border: 1px solid var(--opt-border);
      border-radius: var(--ha-card-border-radius, 12px);
      background: var(--opt-bg);
      color: var(--opt-text);
      font-family: var(--opt-font-family);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, 0.5);
    }

    .dialog-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 8px 12px 16px;
      border-bottom: 1px solid var(--opt-border);
      font-size: var(--ha-font-size-l, 16px);
      font-weight: var(--opt-font-weight-medium);
    }

    .dialog-title {
      flex: 1;
      min-width: 0;
    }

    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--opt-text-secondary);
      cursor: pointer;
      --mdc-icon-size: 20px;
    }

    .close:focus-visible {
      outline: 2px solid var(--opt-accent);
    }

    .dialog-body {
      padding: 4px 16px 16px;
      overflow-y: auto;
    }

    h3 {
      margin: 12px 0 4px;
      font-size: var(--opt-font-size-label);
      font-weight: var(--opt-font-weight-medium);
      text-transform: var(--opt-caps);
      letter-spacing: calc(var(--opt-tracking) * 0.08em);
      color: var(--opt-text-secondary);
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      display: flex;
      gap: 8px;
      padding: 6px 0;
      font-size: var(--ha-font-size-m, 14px);
      line-height: 1.45;
      overflow-wrap: anywhere;
    }

    li ha-icon {
      flex-shrink: 0;
      --mdc-icon-size: 18px;
      width: 18px;
      height: 18px;
      margin-top: 1px;
    }

    .disruption ha-icon {
      color: var(--opt-delay-red);
    }

    .info ha-icon {
      color: var(--opt-text-secondary);
    }
  `,t([ct({attribute:!1})],Et.prototype,"language",void 0),t([ct({type:String})],Et.prototype,"heading",void 0),t([ct({attribute:!1})],Et.prototype,"disruptions",void 0),t([ct({attribute:!1})],Et.prototype,"notices",void 0),t([gt("dialog")],Et.prototype,"_dialog",void 0),Et=t([dt("openpublictransport-info-dialog")],Et);let jt=class extends rt{constructor(){super(...arguments),this.departures=[],this.stationName="",this._dialog={heading:"",disruptions:[],notices:[]}}_openDialog(t,e,i){this._dialog={heading:t,disruptions:e,notices:i},this._dialogEl?.open()}_getCurrentTime(){return(new Date).toLocaleTimeString(this.hass?.language||"de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}_disruptions(t){return t.disruptions??t.notices??[]}_collectDisruptions(){const t=[];for(const e of this.departures)for(const i of this._disruptions(e))t.includes(i)||t.push(i);return t}_departureTime(t){return t.departure_time||t.planned_time||""}_countdown(t){return xt(this.hass.language,t.minutes_until_departure)}_renderHeader(){return this.config.show_header?B`
      <div class="card-header">
        <span class="station-name">${this.stationName||"Departures"}</span>
        <span class="current-time">${this._getCurrentTime()}</span>
      </div>
    `:q}_renderDisruptionBanner(){if(!this.config.show_disruption_banner)return q;const t=this._collectDisruptions();if(0===t.length)return q;const e=this.hass.language,i=t.length-1;return B`
      <button
        class="disruption-banner"
        aria-haspopup="dialog"
        aria-label=${vt(e,"show_all_disruptions")}
        @click=${()=>this._openDialog(vt(e,"disruptions"),t,[])}
      >
        <ha-icon icon="mdi:alert"></ha-icon>
        <span class="disruption-text">${t[0]}</span>
        ${i>0?B`<span class="disruption-more">${vt(e,"more_count",{n:i})}</span>`:q}
      </button>
    `}_renderNotices(t){if(!this.config.show_notices)return q;if(!t.notices||0===t.notices.length)return q;const e=this.hass.language,i=this._disruptions(t),n=t.notices.filter(t=>!i.includes(t)),a=i.length>0,o=vt(e,"notices_for",{line:t.line,destination:t.destination});return B`
      <button
        class="notice-button"
        aria-haspopup="dialog"
        aria-label=${o}
        title=${t.notices.join(", ")}
        @click=${()=>this._openDialog(o,i,n)}
      >
        <ha-icon
          class="notice-icon ${a?"":"notice-info"}"
          icon=${a?"mdi:alert-circle-outline":"mdi:information-outline"}
        ></ha-icon>
      </button>
    `}_renderDialog(){return B`
      <openpublictransport-info-dialog
        .language=${this.hass.language}
        .heading=${this._dialog.heading}
        .disruptions=${this._dialog.disruptions}
        .notices=${this._dialog.notices}
      ></openpublictransport-info-dialog>
    `}_renderPlatformCell(t){return this.config.show_platform?t.platform?t.platform_changed&&t.planned_platform?B`
        <td class="platform-cell">
          <span class="platform-changed">${t.planned_platform}</span>
          <span class="platform-new">${t.platform}</span>
        </td>
      `:B`<td class="platform-cell">${t.platform}</td>`:B`<td class="platform-cell"></td>`:q}_renderRow(t){const e=t.line_color?`background:${t.line_color};color:${t.line_text_color||"#000"}`:"";return B`
      <tr>
        <td class="time-cell">
          <span class="time-line">
            <span class="time-departure time-planned">${this._departureTime(t)}</span>
            ${this.config.show_delay?B`
                  <openpublictransport-delay-badge
                    .delay=${t.delay}
                    ?is-realtime=${t.is_realtime}
                    .language=${this.hass.language}
                  ></openpublictransport-delay-badge>
                `:q}
          </span>
          <span class="time-countdown">${this._countdown(t)}</span>
        </td>
        <td>
          <span class="line-cell">
            <openpublictransport-transport-icon
              transport-type=${t.transportation_type}
            ></openpublictransport-transport-icon>
            <span class="line-badge" style=${e}>${t.line}</span>
          </span>
        </td>
        <td class="destination-cell">
          <span class="destination">
            <span class="destination-name">${t.destination}</span>
            ${this._renderNotices(t)}
          </span>
        </td>
        ${this._renderPlatformCell(t)}
      </tr>
    `}render(){const t=this.departures.slice(0,this.config.max_departures);return 0===t.length?B`
        ${this._renderHeader()}
        <div class="card-empty">${vt(this.hass.language,"no_departures")}</div>
      `:B`
      ${this._renderHeader()}
      ${this._renderDisruptionBanner()}
      <div class="card-content">
        <table class="departure-table">
          <thead>
            <tr>
              <th>${vt(this.hass.language,"time")}</th>
              <th>${vt(this.hass.language,"line")}</th>
              <th>${vt(this.hass.language,"destination")}</th>
              ${this.config.show_platform?B`<th>
                    <span class="label-long">${vt(this.hass.language,"track")}</span>
                    <span class="label-short">${vt(this.hass.language,"platform")}</span>
                  </th>`:q}
            </tr>
          </thead>
          <tbody>
            ${t.map(t=>this._renderRow(t))}
          </tbody>
        </table>
      </div>
      ${this._renderDialog()}
    `}};jt.styles=mt,t([ct({attribute:!1})],jt.prototype,"hass",void 0),t([ct({attribute:!1})],jt.prototype,"config",void 0),t([ct({attribute:!1})],jt.prototype,"departures",void 0),t([ct({type:String})],jt.prototype,"stationName",void 0),t([ut()],jt.prototype,"_dialog",void 0),t([gt("openpublictransport-info-dialog")],jt.prototype,"_dialogEl",void 0),jt=t([dt("openpublictransport-table-layout")],jt);let Dt=class extends rt{constructor(){super(...arguments),this.departures=[],this.stationName=""}_shortenDestination(t){if(t.length<=15)return t;const e=t.split(/[,\s-]+/);return e.length>1?e[0]:t.substring(0,13)+"..."}_renderCountdown(t){return function(t,e){if(e<=0)return vt(t,"now");if(e<60)return`${e}'`;const i=Math.floor(e/60),n=e%60;return n?`${i}h ${n}'`:`${i}h`}(this.hass.language,t)}_getChipClass(t){return t.delay>0?"compact-chip delayed":t.is_realtime&&0===t.delay?"compact-chip on-time":"compact-chip"}_renderHeader(){return this.config.show_header?B`
      <div class="card-header">
        <span class="station-name">${this.stationName||"Departures"}</span>
      </div>
    `:q}render(){const t=this.departures.slice(0,this.config.max_departures);return 0===t.length?B`
        ${this._renderHeader()}
        <div class="card-empty">${vt(this.hass.language,"no_departures")}</div>
      `:B`
      ${this._renderHeader()}
      <div class="compact-container">
        ${t.map(t=>{const e=t.line_color?`background:${t.line_color};color:${t.line_text_color||"#000"}`:"";return B`
              <div class=${this._getChipClass(t)}>
                <openpublictransport-transport-icon
                  transport-type=${t.transportation_type}
                ></openpublictransport-transport-icon>
                <span class="chip-line" style=${e}>${t.line}</span>
                <span class="chip-destination">${this._shortenDestination(t.destination)}</span>
                <span class="chip-countdown">${this._renderCountdown(t.minutes_until_departure)}</span>
              </div>
            `})}
      </div>
    `}};Dt.styles=mt,t([ct({attribute:!1})],Dt.prototype,"hass",void 0),t([ct({attribute:!1})],Dt.prototype,"config",void 0),t([ct({attribute:!1})],Dt.prototype,"departures",void 0),t([ct({type:String})],Dt.prototype,"stationName",void 0),Dt=t([dt("openpublictransport-compact-layout")],Dt);const Nt=B`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M3.5 12h15M13.5 6.5 19 12l-5.5 5.5" />
</svg>`;let Pt=class extends rt{constructor(){super(...arguments),this.trip=null}_formatTime(t){return t||""}_realTime(t,e){return this._formatTime(t||e||"")}_formatDuration(t){const e=Math.max(0,Math.round(t||0)),i=Math.floor(e/60),n=e%60,a=Intl.DurationFormat;if(a)try{return new a(this.hass.language,{style:"narrow"}).format(i?{hours:i,minutes:n}:{minutes:n})}catch{}return i?`${i} h ${n} min`:`${n} min`}_journeyMinutes(t){const e=Date.parse(t.departure_timestamp||""),i=Date.parse(t.arrival_timestamp||"");return Number.isNaN(e)||Number.isNaN(i)?t.duration_minutes:Math.floor(i/6e4)-Math.floor(e/6e4)}_getRiskClass(t){switch(t.toLowerCase()){case"low":return"risk-low";case"medium":return"risk-medium";case"high":return"risk-high";default:return""}}_riskLabel(t,e){const i=`risk_${t.toLowerCase()}`,n=vt(e,i);return n===i?`${t} ${vt(e,"risk")}`:n}_getRiskIcon(t){switch(t.toLowerCase()){case"low":return"mdi:check-circle-outline";case"medium":return"mdi:alert-outline";case"high":return"mdi:alert-octagon";default:return"mdi:help-circle-outline"}}_renderHeader(t){return this.config.show_header?B`
      <div class="trip-header">
        <span class="time-span">
          <span>${t.departure}</span>
          <span class="trip-arrow">${Nt}</span>
          <span>${t.arrival}</span>
        </span>
        <span class="trip-duration">${this._formatDuration(this._journeyMinutes(t))}</span>
      </div>
    `:q}_renderMeta(t){const e=this.hass.language,i=`${t.transfers} ${1!==t.transfers?vt(e,"transfers"):vt(e,"transfer")}`,n=this._riskLabel(t.transfer_risk,e),a=this._formatDuration(t.min_transfer_time),o=`${vt(e,"min_transfer")} ${a}`;return B`
      <div class="trip-meta">
        <div class="trip-meta-item" title=${i}>
          <ha-icon icon="mdi:transit-transfer"></ha-icon>
          <span>${i}</span>
        </div>
        <div class="trip-meta-item ${this._getRiskClass(t.transfer_risk)}" title=${n}>
          <ha-icon icon=${this._getRiskIcon(t.transfer_risk)}></ha-icon>
          <span>${n}</span>
        </div>
        ${t.min_transfer_time>0?B`
              <div class="trip-meta-item" title=${o}>
                <ha-icon icon="mdi:timer-outline"></ha-icon>
                <span>${a}</span>
              </div>
            `:q}
        ${t.connection_feasible?q:B`
              <div class="trip-meta-item risk-high">
                <ha-icon icon="mdi:close-circle"></ha-icon>
                <span>${vt(e,"connection_at_risk")}</span>
              </div>
            `}
      </div>
    `}_renderLeg(t,e,i){const n=!(!i||!i.transfer&&"number"!=typeof i.transfer_minutes)?"trip-leg transfer":"trip-leg",a=this._realTime(t.arrival_estimated,t.arrival_planned),o=!!e&&!!a&&a!==this._realTime(e.departure_estimated,e.departure_planned);return B`
      <div class=${n}>
        <div class="leg-head">
          <div class="leg-station">${t.origin}</div>
          <div class="leg-head-time">
            ${t.delay>0?B`
                  <openpublictransport-delay-badge
                    .delay=${t.delay}
                    is-realtime
                  ></openpublictransport-delay-badge>
                `:q}
            <div class="leg-time leg-departure">
              ${this._realTime(t.departure_estimated,t.departure_planned)}
            </div>
          </div>
        </div>
        <div class="leg-details">
          <openpublictransport-transport-icon
            transport-type=${t.transport_type||t.product}
          ></openpublictransport-transport-icon>
          ${t.line||t.direction?B`
                <span class="leg-service">
                  ${t.line?B`<span class="leg-line">${t.line}</span>`:q}
                  ${t.direction?B`
                        <span class="trip-arrow">${Nt}</span>
                        <span class="leg-direction">${t.direction}</span>
                      `:q}
                </span>
              `:q}
          ${t.platform?B`<span>${vt(this.hass.language,"platform")} ${t.platform}</span>`:q}
          <span class="leg-duration">${this._formatDuration(t.duration_minutes)}</span>
          ${o?B`<span class="leg-arrival">${a}</span>`:q}
        </div>
        ${this._renderTransferNote(t)}
      </div>
    `}_renderTransferNote(t){const e="number"==typeof t.transfer_minutes;if(!t.transfer&&!e)return q;const i=vt(this.hass.language,"transfer");return B`
      <div class="leg-transfer-info">
        <ha-icon icon="mdi:timer-outline"></ha-icon>
        <span>${e?`${i} · ${this._formatDuration(t.transfer_minutes)}`:i}</span>
      </div>
    `}_renderTimeline(t){const e=t.legs[t.legs.length-1];return B`
      <div class="trip-timeline">
        ${t.legs.map((e,i)=>this._renderLeg(e,t.legs[i+1],t.legs[i-1]))}
        ${e?B`
              <div class="trip-leg" style="border-left-color: transparent; padding-bottom: 0;">
                <div class="leg-head">
                  <div class="leg-station">${e.destination}</div>
                  <div class="leg-head-time">
                    <div class="leg-time leg-departure">
                      ${this._realTime(e.arrival_estimated,e.arrival_planned)}
                    </div>
                  </div>
                </div>
              </div>
            `:q}
      </div>
    `}_renderAlternatives(t){if(!t.next_journeys||0===t.next_journeys.length)return q;const e=this.hass.language;return B`
      <div class="alt-journeys">
        <div class="alt-journeys-title">${vt(e,"alternative_connections")}</div>
        ${t.next_journeys.map(t=>B`
            <div class="alt-journey">
              <span class="time-span">
                <span class="leg-time">${this._formatTime(t.departure)}</span>
                <span class="trip-arrow">${Nt}</span>
                <span class="leg-time">${this._formatTime(t.arrival)}</span>
              </span>
              <span>${this._formatDuration(this._journeyMinutes(t))}</span>
              <span>${t.transfers} ${1!==t.transfers?vt(e,"transfers"):vt(e,"transfer")}</span>
              <span class="alt-risk ${this._getRiskClass(t.transfer_risk)}">
                <ha-icon
                  icon=${this._getRiskIcon(t.transfer_risk)}
                  title=${this._riskLabel(t.transfer_risk,e)}
                  style="--opt-icon-size:16px;"
                ></ha-icon>
              </span>
            </div>
          `)}
      </div>
    `}render(){return this.trip?B`
      <div class="trip-container">
        ${this._renderHeader(this.trip)}
        ${this._renderMeta(this.trip)}
        ${this._renderTimeline(this.trip)}
        ${this._renderAlternatives(this.trip)}
      </div>
    `:B`<div class="card-empty">${vt(this.hass.language,"no_trip_data")}</div>`}};Pt.styles=mt,t([ct({attribute:!1})],Pt.prototype,"hass",void 0),t([ct({attribute:!1})],Pt.prototype,"config",void 0),t([ct({attribute:!1})],Pt.prototype,"trip",void 0),Pt=t([dt("openpublictransport-trip-layout")],Pt);let Mt=class extends rt{constructor(){super(...arguments),this.departures=[],this.stationName="",this.emptyKey="no_departures"}_renderCountdown(t){return xt(this.hass?.language||"en",t)}render(){const t=this.hass?.language||"en",e=this.departures[0];if(!e)return B`<div class="next-empty">${vt(t,this.emptyKey)}</div>`;const i=e.line_color?`background:${e.line_color};color:${e.line_text_color||"#000"}`:"",n=e.minutes_until_departure,a=n<=2?"next-countdown imminent":"next-countdown";return B`
      <div class="next-container">
        ${this.config.show_header&&this.stationName?B`<div class="next-station">${this.stationName}</div>`:q}

        <div class="next-main">
          <openpublictransport-transport-icon
            class="next-icon"
            transport-type=${e.transportation_type}
          ></openpublictransport-transport-icon>
          <span class="next-line-badge" style=${i}>${e.line}</span>
          <span class="next-destination">${e.destination}</span>
        </div>

        <div class="next-bottom">
          <span class=${a}>${this._renderCountdown(n)}</span>
          <span class="time-line">
            <span class="next-time">${e.departure_time||e.planned_time}</span>
            ${this.config.show_delay?B`<openpublictransport-delay-badge
                  .delay=${e.delay}
                  ?is-realtime=${e.is_realtime}
                  .language=${t}
                ></openpublictransport-delay-badge>`:q}
          </span>
          ${this.config.show_platform&&e.platform?B`<span class="next-platform">${vt(t,"platform")} ${e.platform}</span>`:q}
        </div>
      </div>
    `}};Mt.styles=[mt,s`
      .next-container {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      /* The station: one line, like the station name in the other layouts'
         header. Secondary text rather than a faded copy of it — at 80%
         opacity it measured 3.7:1 on the light board. */
      .next-station {
        font-size: var(--opt-font-size-label);
        text-transform: var(--opt-caps);
        letter-spacing: calc(var(--opt-tracking) * 0.08em);
        color: var(--opt-text-secondary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .next-main {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .next-icon {
        --opt-icon-size: 36px;
        flex-shrink: 0;
        opacity: 0.85;
      }

      /* Text on the badge is the palette's text-on-accent; it was black on
         every theme, whatever the badge's colour. */
      .next-line-badge {
        font-size: var(--ha-font-size-m, 14px);
        font-weight: 700;
        background: var(--opt-accent);
        color: var(--opt-on-accent);
        padding: 3px 8px;
        border-radius: 4px;
        flex-shrink: 0;
        white-space: nowrap;
      }

      .next-destination {
        font-size: var(--ha-font-size-l, 16px);
        font-weight: var(--opt-font-weight-medium);
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .next-bottom {
        display: flex;
        align-items: baseline;
        gap: 10px;
        margin-top: 4px;
      }

      .next-time {
        font-size: var(--ha-font-size-s, 12px);
        color: var(--opt-text-secondary);
        font-variant-numeric: tabular-nums;
      }

      .next-countdown {
        font-size: var(--ha-font-size-2xl, 24px);
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        line-height: 1;
      }

      .next-countdown.imminent {
        color: var(--opt-delay-red);
      }

      .next-platform {
        font-size: var(--opt-font-size-label);
        color: var(--opt-text-secondary);
        margin-left: auto;
        white-space: nowrap;
      }

      .next-empty {
        padding: 24px 16px;
        text-align: center;
        color: var(--opt-text-secondary);
        font-size: var(--ha-font-size-s, 12px);
      }
    `],t([ct({attribute:!1})],Mt.prototype,"hass",void 0),t([ct({attribute:!1})],Mt.prototype,"config",void 0),t([ct({attribute:!1})],Mt.prototype,"departures",void 0),t([ct({type:String})],Mt.prototype,"stationName",void 0),t([ct({type:String})],Mt.prototype,"emptyKey",void 0),Mt=t([dt("openpublictransport-next-layout")],Mt);let Rt=class extends rt{constructor(){super(...arguments),this._entityFilter=t=>$t(this.hass,t.entity_id)}setConfig(t){this._config={..._t,...t}}_fireConfigChanged(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}_entityChanged(t){if(!this._config)return;const e=t.detail?.value??"";this._config={...this._config,entity:e},this._fireConfigChanged()}_layoutChanged(t){const e=t.target.value;this._config&&e&&(this._config={...this._config,layout:e},this._fireConfigChanged())}_themeChanged(t){const e=t.target.value;this._config&&e&&(this._config={...this._config,theme:e},this._fireConfigChanged())}_maxDeparturesChanged(t){if(!this._config)return;const e=t.target,i=parseInt(e.value,10);isNaN(i)||i<1||(this._config={...this._config,max_departures:i},this._fireConfigChanged())}_toggleChanged(t){return e=>{this._config&&(this._config={...this._config,[t]:e.target.checked},this._fireConfigChanged())}}render(){if(!this.hass||!this._config)return B``;const t=this.hass.language;return B`
      <div class="card-config">
        <div class="config-row">
          <label>${vt(t,"entity")}</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entity}
            .includeDomains=${["sensor"]}
            .entityFilter=${this._entityFilter}
            allow-custom-entity
            @value-changed=${this._entityChanged}
          ></ha-entity-picker>
        </div>

        <div class="config-row">
          <label>${vt(t,"layout")}</label>
          <select .value=${this._config.layout} @change=${this._layoutChanged}>
            <option value="table" ?selected=${"table"===this._config.layout}>${vt(t,"table_layout")}</option>
            <option value="compact" ?selected=${"compact"===this._config.layout}>${vt(t,"compact_layout")}</option>
            <option value="trip" ?selected=${"trip"===this._config.layout}>${vt(t,"trip_layout")}</option>
            <option value="next" ?selected=${"next"===this._config.layout}>${vt(t,"next_layout")}</option>
          </select>
        </div>

        <div class="config-row">
          <label>${vt(t,"theme")}</label>
          <select .value=${this._config.theme} @change=${this._themeChanged}>
            <option value="auto" ?selected=${"auto"===this._config.theme}>Auto</option>
            <option value="dark" ?selected=${"dark"===this._config.theme}>Dark</option>
            <option value="light" ?selected=${"light"===this._config.theme}>Light</option>
            <option value="ha" ?selected=${"ha"===this._config.theme}>${vt(t,"theme_ha")}</option>
          </select>
        </div>

        <div class="config-row">
          <label>${vt(t,"max_departures")}</label>
          <ha-textfield
            type="number"
            .value=${String(this._config.max_departures)}
            min="1"
            max="50"
            @change=${this._maxDeparturesChanged}
          ></ha-textfield>
        </div>

        <div class="section-title">${vt(t,"display_options")}</div>

        <div class="toggle-row">
          <label>${vt(t,"show_header")}</label>
          <ha-switch
            .checked=${this._config.show_header}
            @change=${this._toggleChanged("show_header")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>${vt(t,"show_platform")}</label>
          <ha-switch
            .checked=${this._config.show_platform}
            @change=${this._toggleChanged("show_platform")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>${vt(t,"show_delay")}</label>
          <ha-switch
            .checked=${this._config.show_delay}
            @change=${this._toggleChanged("show_delay")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>${vt(t,"show_realtime")}</label>
          <ha-switch
            .checked=${this._config.show_realtime_indicator}
            @change=${this._toggleChanged("show_realtime_indicator")}
          ></ha-switch>
        </div>

        ${"table"===this._config.layout?B`
              <div class="toggle-row">
                <label>${vt(t,"show_notices")}</label>
                <ha-switch
                  .checked=${!1!==this._config.show_notices}
                  @change=${this._toggleChanged("show_notices")}
                ></ha-switch>
              </div>

              <div class="toggle-row">
                <label>${vt(t,"show_disruption_banner")}</label>
                <ha-switch
                  .checked=${!1!==this._config.show_disruption_banner}
                  @change=${this._toggleChanged("show_disruption_banner")}
                ></ha-switch>
              </div>
            `:""}

        <div class="toggle-row">
          <label>${vt(t,"show_data_age")}</label>
          <ha-switch
            .checked=${!0===this._config.show_data_age}
            @change=${this._toggleChanged("show_data_age")}
          ></ha-switch>
        </div>

        ${this._isTripEntity()?this._renderTripFilterNote(t):this._renderFilters(t)}
      </div>
    `}_isTripEntity(){return!(!this.hass||!this._config?.entity)&&"trip"===zt(this.hass,this._config.entity)}_renderTripFilterNote(t){return B`
      <div class="section-title">${vt(t,"filters")}</div>
      <div class="filter-note">${vt(t,"trip_filter_note")}</div>
    `}_renderFilters(t){return B`
        <div class="section-title">${vt(t,"line_filter")}</div>
        <div class="config-row">
          <ha-textfield
            type="text"
            .value=${this._config.line_filter||""}
            placeholder="U6, S1, RE5"
            helper=${vt(t,"line_filter_hint")}
            @change=${t=>{this._config&&(this._config={...this._config,line_filter:t.target.value},this._fireConfigChanged())}}
            style="width:100%"
          ></ha-textfield>
        </div>

        <div class="section-title">${vt(t,"destination_filter")}</div>
        <div class="config-row">
          <ha-textfield
            type="text"
            .value=${this._config.destination_filter||""}
            placeholder="Duisburg, Flughafen"
            helper=${vt(t,"destination_filter_hint")}
            @change=${t=>{this._config&&(this._config={...this._config,destination_filter:t.target.value},this._fireConfigChanged())}}
            style="width:100%"
          ></ha-textfield>
        </div>
    `}};Rt.styles=s`
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
    .filter-note {
      font-size: 13px;
      line-height: 1.4;
      opacity: 0.8;
      padding: 12px;
      border-radius: 4px;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--secondary-background-color, transparent);
    }
  `,t([ct({attribute:!1})],Rt.prototype,"hass",void 0),t([ut()],Rt.prototype,"_config",void 0),Rt=t([dt("openpublictransport-card-editor")],Rt),console.info("%c OPENPUBLICTRANSPORT-CARD %c v1.11.0 ","color: #ffd700; background: #1a1a1a; font-weight: bold; padding: 2px 4px;","color: #1a1a1a; background: #ffd700; font-weight: bold; padding: 2px 4px;");let Lt=class extends rt{static getConfigElement(){return document.createElement("openpublictransport-card-editor")}static getStubConfig(t,e,i){const n=kt(t,e)[0]??kt(t,i)[0]??"",a=n?zt(t,n):"unknown";return{..._t,entity:n,layout:At(a),theme:"ha"}}setConfig(t){if(!t.entity)throw new Error(vt("en","please_define_entity"));this._config={..._t,...t}}getCardSize(){if(!this._config)return 3;switch(this._config.layout){case"compact":case"next":return 2;case"trip":return 5;default:return Math.min(2+(this._config.max_departures||10),12)}}getGridOptions(){return{rows:"auto",min_rows:2,columns:12}}connectedCallback(){super.connectedCallback(),this._timeInterval=setInterval(()=>{this.requestUpdate()},1e4)}disconnectedCallback(){super.disconnectedCallback(),this._timeInterval&&(clearInterval(this._timeInterval),this._timeInterval=void 0)}updated(t){super.updated(t),this._applyTheme()}_applyTheme(){if(!this._config)return;let t=this._config.theme;"auto"===t&&(t=this.hass?.themes?.darkMode?"dark":"light"),this.setAttribute("data-theme",t)}_getDepartures(){if(!this.hass||!this._config)return[];const t=this.hass.states[this._config.entity];if(!t)return[];const e=t.attributes.departures;if(!Array.isArray(e))return[];let i=e.map(t=>t.departure_timestamp?{...t,minutes_until_departure:wt(t.departure_timestamp,t.minutes_until_departure)}:t).filter(t=>!t.departure_timestamp||t.minutes_until_departure>=0);const n=(this._config.line_filter||"").trim();if(n){const t=n.split(",").map(t=>t.trim().toLowerCase()).filter(Boolean);i=i.filter(e=>t.some(t=>e.line.toLowerCase()===t))}const a=(this._config.destination_filter||"").trim();if(a){const t=a.split(",").map(t=>t.trim().toLowerCase()).filter(Boolean);i=i.filter(e=>t.some(t=>(e.destination||"").toLowerCase().includes(t)))}return i}_getTripData(){if(!this.hass||!this._config)return null;const t=this.hass.states[this._config.entity];if(!t)return null;const e=t.attributes;return e.departure&&e.legs?{departure:e.departure,arrival:e.arrival,departure_timestamp:e.departure_timestamp,arrival_timestamp:e.arrival_timestamp,in_minutes:e.in_minutes,destination:e.destination,duration_minutes:e.duration_minutes,transfers:e.transfers,connection_feasible:e.connection_feasible,transfer_risk:e.transfer_risk,min_transfer_time:e.min_transfer_time,legs:e.legs,next_journeys:e.next_journeys}:null}_tripAsDeparture(t){const e=t.legs??[],i=e.find(t=>"walk"!==(t.transport_type||"").toLowerCase())??e[0];if(!i)return null;const n=i.departure_estimated||i.departure_planned||t.departure,a=e[e.length-1];return{line:i.line,destination:t.destination||a?.destination||"",departure_time:n,planned_time:n,delay:i.delay??0,platform:i.platform||"",transportation_type:i.transport_type||i.product||"",is_realtime:Boolean(i.departure_estimated),minutes_until_departure:this._minutesUntilTrip(t)}}_minutesUntilTrip(t){return wt(t.departure_timestamp,t.in_minutes??0)}_getStationName(){if(!this.hass||!this._config)return"";const t=this.hass.states[this._config.entity];return t?t.attributes.friendly_name||t.attributes.station_name||t.entity_id:""}_renderError(t){return B`
      <ha-card>
        <div class="card-error">
          <ha-icon icon="mdi:alert-circle"></ha-icon>
          <div>${t}</div>
        </div>
      </ha-card>
    `}render(){if(!this._config||!this.hass)return q;const t=this.hass.states[this._config.entity];return t?"unavailable"===t.state?this._renderError(vt(this.hass.language,"entity_unavailable")):B`
      <ha-card>
        ${this._renderLayout()}
        ${this._renderDataAge(t.attributes)}
      </ha-card>
    `:this._renderError(`Entity not found: ${this._config.entity}`)}_renderDataAge(t){if(!this._config.show_data_age)return q;const e=function(t,e){if(!e)return null;const i=Date.parse(e);if(Number.isNaN(i))return null;const n=Math.max(0,Math.round((Date.now()-i)/1e3)),[a,o]=n<60?[n,"second"]:n<3600?[Math.floor(n/60),"minute"]:[Math.floor(n/3600),"hour"];try{return new Intl.RelativeTimeFormat(t||"en",{numeric:"always"}).format(-a,o)}catch{return`${a} ${"second"===o?"s":"minute"===o?"min":"h"}`}}(this.hass.language,t.last_fetched);return e?B`<div class="data-age">${vt(this.hass.language,"fetched_ago",{age:e})}</div>`:q}_renderLayout(){switch(this._config.layout){case"compact":return B`
          <openpublictransport-compact-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${this._getDepartures()}
            .stationName=${this._getStationName()}
          ></openpublictransport-compact-layout>
        `;case"trip":return B`
          <openpublictransport-trip-layout
            .hass=${this.hass}
            .config=${this._config}
            .trip=${this._getTripData()}
          ></openpublictransport-trip-layout>
        `;case"next":{const t="trip"===zt(this.hass,this._config.entity),e=t?this._getTripData():null,i=e?this._tripAsDeparture(e):null;return B`
          <openpublictransport-next-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${t?i?[i]:[]:this._getDepartures()}
            .stationName=${this._getStationName()}
            .emptyKey=${t?"no_trip_data":"no_departures"}
          ></openpublictransport-next-layout>
        `}default:return B`
          <openpublictransport-table-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${this._getDepartures()}
            .stationName=${this._getStationName()}
          ></openpublictransport-table-layout>
        `}}};Lt.styles=[ft,mt],t([ct({attribute:!1})],Lt.prototype,"hass",void 0),t([ut()],Lt.prototype,"_config",void 0),t([ut()],Lt.prototype,"_timeInterval",void 0),Lt=t([dt("openpublictransport-card")],Lt);const Ht=window;Ht.customCards=Ht.customCards||[],Ht.customCards.push({type:"openpublictransport-card",name:"Public Transport Departures",description:"Display public transport departures in table, compact, or trip layout",preview:!0,getEntitySuggestion:function(t,e){if(!$t(t,e))return null;const i=zt(t,e),n=[];return"departures"===i?(n.push({label:"Table layout",config:{type:"custom:openpublictransport-card",entity:e,layout:"table"}}),n.push({label:"Compact layout",config:{type:"custom:openpublictransport-card",entity:e,layout:"compact",max_departures:6}}),n.push({label:"Next departure",config:{type:"custom:openpublictransport-card",entity:e,layout:"next"}})):"trip"===i?(n.push({label:"Trip layout",config:{type:"custom:openpublictransport-card",entity:e,layout:"trip"}}),n.push({label:"Next departure",config:{type:"custom:openpublictransport-card",entity:e,layout:"next"}})):n.push({label:"Table layout",config:{type:"custom:openpublictransport-card",entity:e,layout:At(i)}}),1===n.length?n[0]:n}});export{Lt as OpenpublictransportCard};
