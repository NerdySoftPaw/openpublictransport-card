function e(e,t,i,a){var n,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),n=new WeakMap;let o=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new o(i,e,a)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,a))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:c,getPrototypeOf:u}=Object,g=globalThis,m=g.trustedTypes,f=m?m.emptyScript:"",_=g.reactiveElementPolyfillSupport,y=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},v=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&d(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:n}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){const o=a?.call(this);n?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...p(e),...c(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,a)=>{if(i)e.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of a){const a=document.createElement("style"),n=t.litNonce;void 0!==n&&a.setAttribute("nonce",n),a.textContent=i.cssText,e.appendChild(a)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=i.getPropertyOptions(a),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=a;const o=n.fromAttribute(t,e.type);this[a]=o??this._$Ej?.get(a)??o,this._$Em=null}}requestUpdate(e,t,i,a=!1,n){if(void 0!==e){const o=this.constructor;if(!1===a&&(n=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??v)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==n||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,i,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,_?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,k=e=>e,A=$.trustedTypes,z=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+T,S=`<${E}>`,j=document,D=()=>j.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,P=Array.isArray,R="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,H=/>/g,O=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,I=/"/g,F=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),V=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),W=new WeakMap,J=j.createTreeWalker(j,129);function K(e,t){if(!P(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==z?z.createHTML(t):t}const G=(e,t)=>{const i=e.length-1,a=[];let n,o=2===t?"<svg>":3===t?"<math>":"",r=L;for(let t=0;t<i;t++){const i=e[t];let s,l,d=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===L?"!--"===l[1]?r=M:void 0!==l[1]?r=H:void 0!==l[2]?(F.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=n??L,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?O:'"'===l[3]?I:U):r===I||r===U?r=O:r===M||r===H?r=L:(r=O,n=void 0);const p=r===O&&e[t+1].startsWith("/>")?" ":"";o+=r===L?i+S:d>=0?(a.push(s),i.slice(0,d)+C+i.slice(d)+T+p):i+T+(-2===d?t:p)}return[K(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]};class Z{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let n=0,o=0;const r=e.length-1,s=this.parts,[l,d]=G(e,t);if(this.el=Z.createElement(l,i),J.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=J.nextNode())&&s.length<r;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(C)){const t=d[o++],i=a.getAttribute(e).split(T),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?te:"?"===r[1]?ie:"@"===r[1]?ae:ee}),a.removeAttribute(e)}else e.startsWith(T)&&(s.push({type:6,index:n}),a.removeAttribute(e));if(F.test(a.tagName)){const e=a.textContent.split(T),t=e.length-1;if(t>0){a.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],D()),J.nextNode(),s.push({type:2,index:++n});a.append(e[t],D())}}}else if(8===a.nodeType)if(a.data===E)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=a.data.indexOf(T,e+1));)s.push({type:7,index:n}),e+=T.length-1}n++}}static createElement(e,t){const i=j.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,a){if(t===V)return t;let n=void 0!==a?i._$Co?.[a]:i._$Cl;const o=N(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e),n._$AT(e,i,a)),void 0!==a?(i._$Co??=[])[a]=n:i._$Cl=n),void 0!==n&&(t=Q(e,n._$AS(e,t.values),n,a)),t}class Y{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??j).importNode(t,!0);J.currentNode=a;let n=J.nextNode(),o=0,r=0,s=i[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new X(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ne(n,this,e)),this._$AV.push(t),s=i[++r]}o!==s?.index&&(n=J.nextNode(),o++)}return J.currentNode=j,a}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),N(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>P(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new Y(a,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new Z(e)),t}k(e){P(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const n of e)a===t.length?t.push(i=new X(this.O(D()),this.O(D()),this,this.options)):i=t[a],i._$AI(n),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(e,t=this,i,a){const n=this.strings;let o=!1;if(void 0===n)e=Q(this,e,t,0),o=!N(e)||e!==this._$AH&&e!==V,o&&(this._$AH=e);else{const a=e;let r,s;for(e=n[0],r=0;r<n.length-1;r++)s=Q(this,a[i+r],t,r),s===V&&(s=this._$AH[r]),o||=!N(s)||s!==this._$AH[r],s===q?e=q:e!==q&&(e+=(s??"")+n[r+1]),this._$AH[r]=s}o&&!a&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class ae extends ee{constructor(e,t,i,a,n){super(e,t,i,a,n),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??q)===V)return;const i=this._$AH,a=e===q&&i!==q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==q&&(i===q||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const oe=$.litHtmlPolyfillSupport;oe?.(Z,X),($.litHtmlVersions??=[]).push("3.3.2");const re=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class se extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const a=i?.renderBefore??t;let n=a._$litPart$;if(void 0===n){const e=i?.renderBefore??null;a._$litPart$=n=new X(t.insertBefore(D(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}se._$litElement$=!0,se.finalized=!0,re.litElementHydrateSupport?.({LitElement:se});const le=re.litElementPolyfillSupport;le?.({LitElement:se}),(re.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},he={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:v},pe=(e=he,t,i)=>{const{kind:a,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===a){const{name:a}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(a,n,e,!0,i)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){const{name:a}=i;return function(i){const n=this[a];t.call(this,i),this.requestUpdate(a,n,e,!0,i)}}throw Error("Unsupported decorator location: "+a)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ce(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return ce({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=r`
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
`,me=r`
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
    cursor: help;
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

  /* An alternative whose detail can be shown is a real button, not a row that
     happens to answer a click: it takes focus, responds to Enter and Space, and
     tells a screen reader that a dialog follows. Its box is the row's exactly —
     same padding, same rule underneath — so a list of buttons and a list of
     plain rows occupy the same space, and the card does not change shape on an
     integration too old to answer. */
  button.alt-journey {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    margin: 0;
    background: none;
    border: none;
    border-bottom: 1px solid var(--opt-border);
    border-radius: 0;
    font-family: inherit;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
    text-align: left;
    cursor: pointer;
  }

  /* The tint reaches 8px past the row on both sides, into the card's own
     padding, the way Home Assistant highlights a list row — with two offset
     shadows rather than a wider box, so nothing moves and the row's text stays
     on the card's column. */
  button.alt-journey:hover {
    background: var(--opt-row-hover);
    box-shadow: -8px 0 0 var(--opt-row-hover), 8px 0 0 var(--opt-row-hover);
  }

  button.alt-journey:focus-visible {
    outline: 2px solid var(--opt-accent);
    outline-offset: -1px;
  }

  /* The chosen connection's dialog. It is painted in the browser's top layer,
     which inherits none of the dashboard's appearance — not even the background
     a card is given for free — so every colour is set here, from the same Home
     Assistant variables the card is painted with. */
  .journey-dialog {
    width: min(calc(100vw - 32px), 460px);
    max-height: min(calc(100vh - 32px), 640px);
    padding: 0;
    border: 1px solid var(--opt-border);
    border-radius: var(--ha-card-border-radius, 12px);
    background: var(--opt-bg);
    color: var(--opt-text);
    font-family: var(--opt-font-family);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  /* Only while open: a dialog is display:none until then, and laying it out
     unconditionally would leave it on the page with nothing to close it. */
  .journey-dialog[open] {
    display: flex;
    flex-direction: column;
  }

  /* A plain tint rather than a themed one. ::backdrop inherited from the root
     element rather than from the dialog until Chrome 122, where a --opt-*
     defined on the card's host does not reach it; dimming reads correctly on a
     light and on a dark theme alike. */
  .journey-dialog::backdrop {
    background: rgba(0, 0, 0, 0.55);
  }

  .journey-dialog-head {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    flex-shrink: 0;
    padding: 16px 16px 0;
  }

  /* The title carries the journey's own header, which already has the margin
     that separates it from what follows; inside the head that margin would
     push the close button out of line with it. */
  .journey-dialog-head .trip-header {
    margin-bottom: 0;
    flex: 1;
    min-width: 0;
  }

  .journey-dialog-close {
    appearance: none;
    -webkit-appearance: none;
    display: inline-flex;
    padding: 4px;
    margin: -4px -4px 0 0;
    background: none;
    border: none;
    border-radius: 50%;
    color: var(--opt-text-secondary);
    cursor: pointer;
  }

  .journey-dialog-close:hover {
    background: var(--opt-row-hover);
  }

  .journey-dialog-close:focus-visible {
    outline: 2px solid var(--opt-accent);
    outline-offset: 0;
  }

  /* The journey scrolls, the title does not: a connection with many legs stays
     readable without the dialog growing past the screen. */
  .journey-dialog-content {
    padding: 8px 16px 16px;
    overflow-y: auto;
  }

  /* The dialog is not held to the card's column, so a leg says everything it
     has. On the dashboard's 374px a headsign like "Echterdingen
     Flughafen/Messe …" is cut off, and that cut is what the dialog exists to
     undo — here the direction wraps instead. */
  /* The row keeps its one line; it is the headsign inside it that wraps. Letting
     the row wrap instead put the leg's arrival on a line of its own with the
     rest of the row empty beside it — measured, 46px against the 38px it takes
     when the direction wraps in its own box and the duration and the arrival
     stay with the leg they belong to. */
  .journey-dialog .leg-details {
    flex-wrap: nowrap;
  }

  .journey-dialog .leg-service {
    overflow: visible;
  }

  .journey-dialog .leg-direction {
    overflow: visible;
    white-space: normal;
    text-overflow: clip;
  }

  .journey-dialog-status {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 24px 0;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--opt-text-secondary);
  }

  .journey-dialog-status.is-error {
    color: var(--opt-delay-red);
  }

  .journey-dialog-status ha-icon {
    --opt-icon-size: 20px;
  }

  /* A spinner of its own rather than Home Assistant's: the same reason the
     dialog is the native element and not ha-dialog. */
  .journey-dialog-spinner {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    border: 2px solid var(--opt-border);
    border-top-color: var(--opt-accent);
    border-radius: 50%;
    animation: opt-spin 0.8s linear infinite;
  }

  @keyframes opt-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .journey-dialog-spinner {
      animation-duration: 2.4s;
    }
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
`,fe={layout:"table",max_departures:10,show_header:!0,show_platform:!0,show_delay:!0,show_realtime_indicator:!0,theme:"auto",line_filter:"",destination_filter:""},_e={bus:"mdi:bus",tram:"mdi:tram",subway:"mdi:subway-variant",train:"mdi:train",ferry:"mdi:ferry",taxi:"mdi:taxi","s-bahn":"mdi:train","u-bahn":"mdi:subway-variant",regional:"mdi:train",express:"mdi:train",walk:"mdi:walk",footpath:"mdi:walk",fussweg:"mdi:walk","fußweg":"mdi:walk",bicycle:"mdi:bike",fahrrad:"mdi:bike",default:"mdi:transit-connection-variant"},ye={en:{now:"now",in_min:"in {min} min",in_1_min:"in 1 min",on_time:"on time",no_departures:"No departures available",no_trip_data:"No trip data available",entity_unavailable:"Entity is unavailable",please_define_entity:"Please define an entity",alternative_connections:"Alternative Connections",show_details:"Show details",loading_details:"Loading connection…",connection_gone:"This connection is no longer being offered.",details_failed:"The connection could not be loaded.",close:"Close",connection_at_risk:"Connection at risk",risk:"risk",risk_low:"Low risk",risk_medium:"Medium risk",risk_high:"High risk",min_transfer:"Transfer time",transfer:"Transfer",transfers:"transfers",platform:"Pl.",time:"Time",line:"Line",destination:"Destination",track:"Track",table_layout:"Table (Departure Board)",compact_layout:"Compact (Chips)",trip_layout:"Trip (Journey)",next_layout:"Next Departure (Widget)",entity:"Entity",layout:"Layout",theme:"Theme",theme_ha:"Home Assistant (native)",max_departures:"Max Departures",show_header:"Show Header",show_platform:"Show Platform",show_delay:"Show Delay",show_realtime:"Show Realtime Indicator",display_options:"Display Options",line_filter:"Line Filter",line_filter_hint:"Show only these lines (comma-separated, e.g. U6, S1, RE5). Leave empty to show all.",destination_filter:"Destination Filter",destination_filter_hint:"Show only departures whose destination matches (comma-separated, partial match, e.g. Duisburg, Flughafen). Leave empty to show all.",filters:"Filters",trip_filter_note:"The line and destination filters apply to departure boards only. Filter connections on the device itself: Settings → Devices & services → your trip device → Configure."},de:{now:"jetzt",in_min:"in {min} min",in_1_min:"in 1 min",on_time:"pünktlich",no_departures:"Keine Abfahrten verfügbar",no_trip_data:"Keine Verbindungsdaten verfügbar",entity_unavailable:"Entity nicht verfügbar",please_define_entity:"Bitte eine Entity auswählen",alternative_connections:"Alternative Verbindungen",show_details:"Details anzeigen",loading_details:"Verbindung wird geladen …",connection_gone:"Diese Verbindung wird nicht mehr angeboten.",details_failed:"Die Verbindung konnte nicht geladen werden.",close:"Schließen",connection_at_risk:"Anschluss gefährdet",risk:"Risiko",risk_low:"Geringes Risiko",risk_medium:"Mittleres Risiko",risk_high:"Hohes Risiko",min_transfer:"Umstiegszeit",transfer:"Umstieg",transfers:"Umstiege",platform:"Gl.",time:"Zeit",line:"Linie",destination:"Ziel",track:"Gleis",table_layout:"Tabelle (Abfahrtstafel)",compact_layout:"Kompakt (Chips)",trip_layout:"Verbindung (Trip)",next_layout:"Nächste Abfahrt (Widget)",entity:"Entity",layout:"Layout",theme:"Design",theme_ha:"Home Assistant (nativ)",max_departures:"Max. Abfahrten",show_header:"Kopfzeile anzeigen",show_platform:"Gleis anzeigen",show_delay:"Verspätung anzeigen",show_realtime:"Echtzeit-Indikator anzeigen",display_options:"Anzeigeoptionen",line_filter:"Linienfilter",line_filter_hint:"Nur diese Linien anzeigen (kommagetrennt, z.B. U6, S1, RE5). Leer lassen für alle.",destination_filter:"Zielfilter",destination_filter_hint:"Nur Abfahrten mit passendem Ziel anzeigen (kommagetrennt, Teiltreffer, z.B. Duisburg, Flughafen). Leer lassen für alle.",filters:"Filter",trip_filter_note:"Linien- und Zielfilter gelten nur für Abfahrtstafeln. Verbindungen filterst du am Gerät selbst: Einstellungen → Geräte & Dienste → dein Trip-Gerät → Konfigurieren."},fr:{now:"maintenant",in_min:"dans {min} min",in_1_min:"dans 1 min",on_time:"à l'heure",no_departures:"Aucun départ disponible",no_trip_data:"Aucune donnée de trajet disponible",entity_unavailable:"Entité indisponible",please_define_entity:"Veuillez sélectionner une entité",alternative_connections:"Correspondances alternatives",show_details:"Afficher les détails",loading_details:"Chargement de la correspondance…",connection_gone:"Cette correspondance n'est plus proposée.",details_failed:"Impossible de charger la correspondance.",close:"Fermer",connection_at_risk:"Correspondance menacée",risk:"risque",risk_low:"Risque faible",risk_medium:"Risque moyen",risk_high:"Risque élevé",min_transfer:"Temps de correspondance",transfer:"Correspondance",transfers:"correspondances",platform:"Voie",time:"Heure",line:"Ligne",destination:"Destination",track:"Voie",table_layout:"Tableau (Panneau de départs)",compact_layout:"Compact (Puces)",trip_layout:"Trajet (Itinéraire)",next_layout:"Prochain départ (Widget)",entity:"Entité",layout:"Disposition",theme:"Thème",theme_ha:"Home Assistant (natif)",max_departures:"Départs max.",show_header:"Afficher l'en-tête",show_platform:"Afficher la voie",show_delay:"Afficher le retard",show_realtime:"Afficher l'indicateur temps réel",display_options:"Options d'affichage",line_filter:"Filtre de lignes",line_filter_hint:"Afficher uniquement ces lignes (séparées par des virgules, ex. U6, S1, RE5). Laisser vide pour tout afficher.",destination_filter:"Filtre de destination",destination_filter_hint:"Afficher uniquement les départs dont la destination correspond (séparées par des virgules, correspondance partielle, ex. Duisburg, Aéroport). Laisser vide pour tout afficher.",filters:"Filtres",trip_filter_note:"Les filtres de lignes et de destination ne s'appliquent qu'aux tableaux de départs. Filtrez les trajets sur l'appareil lui-même : Paramètres → Appareils et services → votre appareil de trajet → Configurer."},nl:{now:"nu",in_min:"over {min} min",in_1_min:"over 1 min",on_time:"op tijd",no_departures:"Geen vertrekken beschikbaar",no_trip_data:"Geen reisgegevens beschikbaar",entity_unavailable:"Entity niet beschikbaar",please_define_entity:"Selecteer een entity",alternative_connections:"Alternatieve verbindingen",show_details:"Details tonen",loading_details:"Verbinding wordt geladen…",connection_gone:"Deze verbinding wordt niet meer aangeboden.",details_failed:"De verbinding kon niet worden geladen.",close:"Sluiten",connection_at_risk:"Aansluiting in gevaar",risk:"risico",risk_low:"Laag risico",risk_medium:"Gemiddeld risico",risk_high:"Hoog risico",min_transfer:"Overstaptijd",transfer:"Overstap",transfers:"overstappen",platform:"Spoor",time:"Tijd",line:"Lijn",destination:"Bestemming",track:"Spoor",table_layout:"Tabel (Vertrekbord)",compact_layout:"Compact (Chips)",trip_layout:"Reis (Route)",next_layout:"Volgend vertrek (Widget)",entity:"Entity",layout:"Layout",theme:"Thema",theme_ha:"Home Assistant (native)",max_departures:"Max. vertrekken",show_header:"Koptekst tonen",show_platform:"Spoor tonen",show_delay:"Vertraging tonen",show_realtime:"Realtime-indicator tonen",display_options:"Weergaveopties",line_filter:"Lijnfilter",line_filter_hint:"Toon alleen deze lijnen (kommagescheiden, bijv. U6, S1, RE5). Leeg laten voor alles.",destination_filter:"Bestemmingsfilter",destination_filter_hint:"Toon alleen vertrekken met een overeenkomende bestemming (kommagescheiden, gedeeltelijke overeenkomst, bijv. Duisburg, Luchthaven). Leeg laten voor alles.",filters:"Filters",trip_filter_note:"Lijn- en bestemmingsfilters gelden alleen voor vertrekborden. Filter verbindingen op het apparaat zelf: Instellingen → Apparaten en diensten → je reis-apparaat → Configureren."},sv:{now:"nu",in_min:"om {min} min",in_1_min:"om 1 min",on_time:"i tid",no_departures:"Inga avgångar tillgängliga",no_trip_data:"Inga resedata tillgängliga",entity_unavailable:"Entitet otillgänglig",please_define_entity:"Välj en entitet",alternative_connections:"Alternativa förbindelser",show_details:"Visa detaljer",loading_details:"Förbindelsen laddas …",connection_gone:"Den här förbindelsen erbjuds inte längre.",details_failed:"Förbindelsen kunde inte laddas.",close:"Stäng",connection_at_risk:"Anslutning hotad",risk:"risk",risk_low:"Låg risk",risk_medium:"Medelrisk",risk_high:"Hög risk",min_transfer:"Bytestid",transfer:"Byte",transfers:"byten",platform:"Spår",time:"Tid",line:"Linje",destination:"Destination",track:"Spår",table_layout:"Tabell (Avgångstavla)",compact_layout:"Kompakt (Chips)",trip_layout:"Resa (Rutt)",next_layout:"Nästa avgång (Widget)",entity:"Entitet",layout:"Layout",theme:"Tema",theme_ha:"Home Assistant (native)",max_departures:"Max avgångar",show_header:"Visa rubrik",show_platform:"Visa spår",show_delay:"Visa försening",show_realtime:"Visa realtidsindikator",display_options:"Visningsalternativ",line_filter:"Linjefilter",line_filter_hint:"Visa bara dessa linjer (kommaseparerade, t.ex. U6, S1, RE5). Lämna tomt för alla.",destination_filter:"Destinationsfilter",destination_filter_hint:"Visa bara avgångar vars destination matchar (kommaseparerade, delvis matchning, t.ex. Duisburg, Flygplats). Lämna tomt för alla.",filters:"Filter",trip_filter_note:"Linje- och destinationsfiltren gäller bara avgångstavlor. Filtrera förbindelser på själva enheten: Inställningar → Enheter och tjänster → din reseenhet → Konfigurera."},pl:{now:"teraz",in_min:"za {min} min",in_1_min:"za 1 min",on_time:"punktualnie",no_departures:"Brak dostępnych odjazdów",no_trip_data:"Brak danych o podróży",entity_unavailable:"Encja niedostępna",please_define_entity:"Wybierz encję",alternative_connections:"Alternatywne połączenia",show_details:"Pokaż szczegóły",loading_details:"Wczytywanie połączenia…",connection_gone:"To połączenie nie jest już oferowane.",details_failed:"Nie udało się wczytać połączenia.",close:"Zamknij",connection_at_risk:"Połączenie zagrożone",risk:"ryzyko",risk_low:"Niskie ryzyko",risk_medium:"Średnie ryzyko",risk_high:"Wysokie ryzyko",min_transfer:"Czas przesiadki",transfer:"Przesiadka",transfers:"przesiadki",platform:"Peron",time:"Czas",line:"Linia",destination:"Kierunek",track:"Tor",table_layout:"Tabela (Tablica odjazdów)",compact_layout:"Kompaktowy (Chipy)",trip_layout:"Podróż (Trasa)",next_layout:"Następny odjazd (Widget)",entity:"Encja",layout:"Układ",theme:"Motyw",theme_ha:"Home Assistant (natywny)",max_departures:"Maks. odjazdów",show_header:"Pokaż nagłówek",show_platform:"Pokaż peron",show_delay:"Pokaż opóźnienie",show_realtime:"Pokaż wskaźnik czasu rzeczywistego",display_options:"Opcje wyświetlania",line_filter:"Filtr linii",line_filter_hint:"Pokaż tylko te linie (oddzielone przecinkami, np. U6, S1, RE5). Zostaw puste, aby pokazać wszystkie.",destination_filter:"Filtr kierunku",destination_filter_hint:"Pokaż tylko odjazdy z pasującym kierunkiem (oddzielone przecinkami, częściowe dopasowanie, np. Duisburg, Lotnisko). Zostaw puste, aby pokazać wszystkie.",filters:"Filtry",trip_filter_note:"Filtry linii i kierunku działają tylko na tablicach odjazdów. Połączenia filtrujesz w samym urządzeniu: Ustawienia → Urządzenia i usługi → twoje urządzenie podróży → Konfiguruj."},it:{now:"adesso",in_min:"tra {min} min",in_1_min:"tra 1 min",on_time:"in orario",no_departures:"Nessuna partenza disponibile",no_trip_data:"Nessun dato di viaggio disponibile",entity_unavailable:"Entità non disponibile",please_define_entity:"Seleziona un'entità",alternative_connections:"Connessioni alternative",show_details:"Mostra dettagli",loading_details:"Caricamento della coincidenza…",connection_gone:"Questa coincidenza non è più offerta.",details_failed:"Impossibile caricare la coincidenza.",close:"Chiudi",connection_at_risk:"Connessione a rischio",risk:"rischio",risk_low:"Rischio basso",risk_medium:"Rischio medio",risk_high:"Rischio alto",min_transfer:"Tempo di cambio",transfer:"Cambio",transfers:"cambi",platform:"Bin.",time:"Orario",line:"Linea",destination:"Destinazione",track:"Binario",table_layout:"Tabella (Pannello partenze)",compact_layout:"Compatto (Chip)",trip_layout:"Viaggio (Percorso)",next_layout:"Prossima partenza (Widget)",entity:"Entità",layout:"Layout",theme:"Tema",theme_ha:"Home Assistant (nativo)",max_departures:"Max. partenze",show_header:"Mostra intestazione",show_platform:"Mostra binario",show_delay:"Mostra ritardo",show_realtime:"Mostra indicatore tempo reale",display_options:"Opzioni di visualizzazione",line_filter:"Filtro linee",line_filter_hint:"Mostra solo queste linee (separate da virgola, es. U6, S1, RE5). Lascia vuoto per mostrare tutto.",destination_filter:"Filtro destinazione",destination_filter_hint:"Mostra solo le partenze con destinazione corrispondente (separate da virgola, corrispondenza parziale, es. Duisburg, Aeroporto). Lascia vuoto per mostrare tutto.",filters:"Filtri",trip_filter_note:"I filtri di linea e destinazione valgono solo per i tabelloni delle partenze. Filtra le connessioni sul dispositivo stesso: Impostazioni → Dispositivi e servizi → il tuo dispositivo viaggio → Configura."}};function be(e,t,i){const a=e?.substring(0,2).toLowerCase()||"en";let n=(ye[a]||ye.en)[t]||ye.en[t]||t;if(i)for(const[e,t]of Object.entries(i))n=n.replace(`{${e}}`,String(t));return n}const ve="openpublictransport";function we(e,t){if(!t.startsWith("sensor."))return!1;if(e.entities?.[t]?.platform===ve)return!0;const i=e.states[t]?.attributes;return!!i&&(Array.isArray(i.departures)||Array.isArray(i.legs)||void 0!==i.departure)}function xe(e,t){return(t??Object.keys(e.states)).filter(t=>we(e,t))}function $e(e,t){const i=e.states[t]?.attributes??{};return Array.isArray(i.departures)?"departures":Array.isArray(i.legs)||void 0!==i.departure||void 0!==i.arrival||/(^|[._-])trip([._-]|$)|_to_|journey|connection/i.test(t)||"mdi:routes"===i.icon?"trip":"unknown"}function ke(e){return"trip"===e?"trip":"table"}let Ae=class extends se{constructor(){super(...arguments),this.transportType=""}_getIcon(){const e=this.transportType.toLowerCase();return _e[e]||_e.default}render(){return B`<ha-icon .icon=${this._getIcon()}></ha-icon>`}};Ae.styles=r`
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
  `,e([ce({type:String,attribute:"transport-type"})],Ae.prototype,"transportType",void 0),Ae=e([de("openpublictransport-transport-icon")],Ae);const ze=B`<svg class="check" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
  <path d="M2.5 6.5 5 9l4.5-5.5" />
</svg>`;let Ce=class extends se{constructor(){super(...arguments),this.delay=0,this.isRealtime=!1,this.language=""}render(){if(this.delay>0)return B`
        <span class="delay-badge delayed">+${this.delay}</span>
      `;if(0===this.delay&&this.isRealtime){const e=be(this.language,"on_time");return B`
        <span class="delay-badge on-time" role="img" aria-label=${e} title=${e}>${ze}</span>
      `}return q}};Ce.styles=[me,r`
      /* As a block, the host takes its baseline from its own first line box —
         which the template's indentation creates in the inherited font, not in
         the badge's. Aligned against a time beside it the badge then sat a
         line's worth too low. A flex host ignores that whitespace and takes the
         badge's own baseline instead. */
      :host {
        display: inline-flex;
        align-items: baseline;
      }
    `],e([ce({type:Number})],Ce.prototype,"delay",void 0),e([ce({type:Boolean,attribute:"is-realtime"})],Ce.prototype,"isRealtime",void 0),e([ce({attribute:!1})],Ce.prototype,"language",void 0),Ce=e([de("openpublictransport-delay-badge")],Ce);let Te=class extends se{constructor(){super(...arguments),this.departures=[],this.stationName=""}_getCurrentTime(){return(new Date).toLocaleTimeString(this.hass?.language||"de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}_disruptions(e){return e.disruptions??e.notices??[]}_collectDisruptions(){const e=[];for(const t of this.departures)for(const i of this._disruptions(t))e.includes(i)||e.push(i);return e}_departureTime(e){return e.departure_time||e.planned_time||""}_countdown(e){const t=e.minutes_until_departure;return t<=0?be(this.hass.language,"now"):1===t?be(this.hass.language,"in_1_min"):be(this.hass.language,"in_min",{min:t})}_renderHeader(){return this.config.show_header?B`
      <div class="card-header">
        <span class="station-name">${this.stationName||"Departures"}</span>
        <span class="current-time">${this._getCurrentTime()}</span>
      </div>
    `:q}_renderDisruptionBanner(){const e=this._collectDisruptions();return 0===e.length?q:B`
      <div class="disruption-banner">
        <ha-icon icon="mdi:alert"></ha-icon>
        <span>${e[0]}${e.length>1?` (+${e.length-1} more)`:""}</span>
      </div>
    `}_renderNotices(e){if(!e.notices||0===e.notices.length)return q;const t=this._disruptions(e).length>0;return B`
      <ha-icon
        class="notice-icon ${t?"":"notice-info"}"
        icon=${t?"mdi:alert-circle-outline":"mdi:information-outline"}
        title=${e.notices.join(", ")}
      ></ha-icon>
    `}_renderPlatformCell(e){return this.config.show_platform?e.platform?e.platform_changed&&e.planned_platform?B`
        <td class="platform-cell">
          <span class="platform-changed">${e.planned_platform}</span>
          <span class="platform-new">${e.platform}</span>
        </td>
      `:B`<td class="platform-cell">${e.platform}</td>`:B`<td class="platform-cell"></td>`:q}_renderRow(e){const t=e.line_color?`background:${e.line_color};color:${e.line_text_color||"#000"}`:"";return B`
      <tr>
        <td class="time-cell">
          <span class="time-line">
            <span class="time-departure time-planned">${this._departureTime(e)}</span>
            ${this.config.show_delay?B`
                  <openpublictransport-delay-badge
                    .delay=${e.delay}
                    ?is-realtime=${e.is_realtime}
                    .language=${this.hass.language}
                  ></openpublictransport-delay-badge>
                `:q}
          </span>
          <span class="time-countdown">${this._countdown(e)}</span>
        </td>
        <td>
          <span class="line-cell">
            <openpublictransport-transport-icon
              transport-type=${e.transportation_type}
            ></openpublictransport-transport-icon>
            <span class="line-badge" style=${t}>${e.line}</span>
          </span>
        </td>
        <td class="destination-cell">
          <span class="destination">
            <span class="destination-name">${e.destination}</span>
            ${this._renderNotices(e)}
          </span>
        </td>
        ${this._renderPlatformCell(e)}
      </tr>
    `}render(){const e=this.departures.slice(0,this.config.max_departures);return 0===e.length?B`
        ${this._renderHeader()}
        <div class="card-empty">${be(this.hass.language,"no_departures")}</div>
      `:B`
      ${this._renderHeader()}
      ${this._renderDisruptionBanner()}
      <div class="card-content">
        <table class="departure-table">
          <thead>
            <tr>
              <th>${be(this.hass.language,"time")}</th>
              <th>${be(this.hass.language,"line")}</th>
              <th>${be(this.hass.language,"destination")}</th>
              ${this.config.show_platform?B`<th>
                    <span class="label-long">${be(this.hass.language,"track")}</span>
                    <span class="label-short">${be(this.hass.language,"platform")}</span>
                  </th>`:q}
            </tr>
          </thead>
          <tbody>
            ${e.map(e=>this._renderRow(e))}
          </tbody>
        </table>
      </div>
    `}};Te.styles=me,e([ce({attribute:!1})],Te.prototype,"hass",void 0),e([ce({attribute:!1})],Te.prototype,"config",void 0),e([ce({attribute:!1})],Te.prototype,"departures",void 0),e([ce({type:String})],Te.prototype,"stationName",void 0),Te=e([de("openpublictransport-table-layout")],Te);let Ee=class extends se{constructor(){super(...arguments),this.departures=[],this.stationName=""}_shortenDestination(e){if(e.length<=15)return e;const t=e.split(/[,\s-]+/);return t.length>1?t[0]:e.substring(0,13)+"..."}_renderCountdown(e){return e<=0?be(this.hass.language,"now"):`${e}'`}_getChipClass(e){return e.delay>0?"compact-chip delayed":e.is_realtime&&0===e.delay?"compact-chip on-time":"compact-chip"}_renderHeader(){return this.config.show_header?B`
      <div class="card-header">
        <span class="station-name">${this.stationName||"Departures"}</span>
      </div>
    `:q}render(){const e=this.departures.slice(0,this.config.max_departures);return 0===e.length?B`
        ${this._renderHeader()}
        <div class="card-empty">${be(this.hass.language,"no_departures")}</div>
      `:B`
      ${this._renderHeader()}
      <div class="compact-container">
        ${e.map(e=>{const t=e.line_color?`background:${e.line_color};color:${e.line_text_color||"#000"}`:"";return B`
              <div class=${this._getChipClass(e)}>
                <openpublictransport-transport-icon
                  transport-type=${e.transportation_type}
                ></openpublictransport-transport-icon>
                <span class="chip-line" style=${t}>${e.line}</span>
                <span class="chip-destination">${this._shortenDestination(e.destination)}</span>
                <span class="chip-countdown">${this._renderCountdown(e.minutes_until_departure)}</span>
              </div>
            `})}
      </div>
    `}};Ee.styles=me,e([ce({attribute:!1})],Ee.prototype,"hass",void 0),e([ce({attribute:!1})],Ee.prototype,"config",void 0),e([ce({attribute:!1})],Ee.prototype,"departures",void 0),e([ce({type:String})],Ee.prototype,"stationName",void 0),Ee=e([de("openpublictransport-compact-layout")],Ee);const Se=B`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M3.5 12h15M13.5 6.5 19 12l-5.5 5.5" />
</svg>`,je="get_journeys";let De=class extends se{constructor(){super(...arguments),this.trip=null,this._openSummary=null,this._openJourney=null,this._openError="",this._request=0}_formatTime(e){return e||""}_realTime(e,t){return this._formatTime(e||t||"")}_formatDuration(e){const t=Math.max(0,Math.round(e||0)),i=Math.floor(t/60),a=t%60,n=Intl.DurationFormat;if(n)try{return new n(this.hass.language,{style:"narrow"}).format(i?{hours:i,minutes:a}:{minutes:a})}catch{}return i?`${i} h ${a} min`:`${a} min`}_journeyMinutes(e){const t=Date.parse(e.departure_timestamp||""),i=Date.parse(e.arrival_timestamp||"");return Number.isNaN(t)||Number.isNaN(i)?e.duration_minutes:Math.floor(i/6e4)-Math.floor(t/6e4)}_getRiskClass(e){switch(e.toLowerCase()){case"low":return"risk-low";case"medium":return"risk-medium";case"high":return"risk-high";default:return""}}_riskLabel(e,t){const i=`risk_${e.toLowerCase()}`,a=be(t,i);return a===i?`${e} ${be(t,"risk")}`:a}_getRiskIcon(e){switch(e.toLowerCase()){case"low":return"mdi:check-circle-outline";case"medium":return"mdi:alert-outline";case"high":return"mdi:alert-octagon";default:return"mdi:help-circle-outline"}}_renderHeader(e){return this.config.show_header?this._renderJourneyHeader(e):q}_renderJourneyHeader(e,t){return B`
      <div class="trip-header" id=${t??q}>
        <span class="time-span">
          <span>${e.departure}</span>
          <span class="trip-arrow">${Se}</span>
          <span>${e.arrival}</span>
        </span>
        <span class="trip-duration">${this._formatDuration(this._journeyMinutes(e))}</span>
      </div>
    `}_renderMeta(e){const t=this.hass.language,i=`${e.transfers} ${1!==e.transfers?be(t,"transfers"):be(t,"transfer")}`,a=this._riskLabel(e.transfer_risk,t),n=this._formatDuration(e.min_transfer_time),o=`${be(t,"min_transfer")} ${n}`;return B`
      <div class="trip-meta">
        <div class="trip-meta-item" title=${i}>
          <ha-icon icon="mdi:transit-transfer"></ha-icon>
          <span>${i}</span>
        </div>
        <div class="trip-meta-item ${this._getRiskClass(e.transfer_risk)}" title=${a}>
          <ha-icon icon=${this._getRiskIcon(e.transfer_risk)}></ha-icon>
          <span>${a}</span>
        </div>
        ${e.min_transfer_time>0?B`
              <div class="trip-meta-item" title=${o}>
                <ha-icon icon="mdi:timer-outline"></ha-icon>
                <span>${n}</span>
              </div>
            `:q}
        ${e.connection_feasible?q:B`
              <div class="trip-meta-item risk-high">
                <ha-icon icon="mdi:close-circle"></ha-icon>
                <span>${be(t,"connection_at_risk")}</span>
              </div>
            `}
      </div>
    `}_renderLeg(e,t,i){const a=!(!i||!i.transfer&&"number"!=typeof i.transfer_minutes)?"trip-leg transfer":"trip-leg",n=this._realTime(e.arrival_estimated,e.arrival_planned),o=!!t&&!!n&&n!==this._realTime(t.departure_estimated,t.departure_planned);return B`
      <div class=${a}>
        <div class="leg-head">
          <div class="leg-station">${e.origin}</div>
          <div class="leg-head-time">
            ${e.delay>0?B`
                  <openpublictransport-delay-badge
                    .delay=${e.delay}
                    is-realtime
                  ></openpublictransport-delay-badge>
                `:q}
            <div class="leg-time leg-departure">
              ${this._realTime(e.departure_estimated,e.departure_planned)}
            </div>
          </div>
        </div>
        <div class="leg-details">
          <openpublictransport-transport-icon
            transport-type=${e.transport_type||e.product}
          ></openpublictransport-transport-icon>
          ${e.line||e.direction?B`
                <span class="leg-service">
                  ${e.line?B`<span class="leg-line">${e.line}</span>`:q}
                  ${e.direction?B`
                        <span class="trip-arrow">${Se}</span>
                        <span class="leg-direction">${e.direction}</span>
                      `:q}
                </span>
              `:q}
          ${e.platform?B`<span>${be(this.hass.language,"platform")} ${e.platform}</span>`:q}
          <span class="leg-duration">${this._formatDuration(e.duration_minutes)}</span>
          ${o?B`<span class="leg-arrival">${n}</span>`:q}
        </div>
        ${this._renderTransferNote(e)}
      </div>
    `}_renderTransferNote(e){const t="number"==typeof e.transfer_minutes;if(!e.transfer&&!t)return q;const i=be(this.hass.language,"transfer");return B`
      <div class="leg-transfer-info">
        <ha-icon icon="mdi:timer-outline"></ha-icon>
        <span>${t?`${i} · ${this._formatDuration(e.transfer_minutes)}`:i}</span>
      </div>
    `}_renderTimeline(e){const t=e[e.length-1];return B`
      <div class="trip-timeline">
        ${e.map((t,i)=>this._renderLeg(t,e[i+1],e[i-1]))}
        ${t?B`
              <div class="trip-leg" style="border-left-color: transparent; padding-bottom: 0;">
                <div class="leg-head">
                  <div class="leg-station">${t.destination}</div>
                  <div class="leg-head-time">
                    <div class="leg-time leg-departure">
                      ${this._realTime(t.arrival_estimated,t.arrival_planned)}
                    </div>
                  </div>
                </div>
              </div>
            `:q}
      </div>
    `}_renderJourney(e){return B`
      ${this._renderMeta(e)}
      ${this._renderTimeline(e.legs||[])}
    `}_canOpen(e){return!!(e.legs&&e.legs.length>0)||!!this.hass?.callService&&!!this.hass?.services?.[ve]?.[je]}_altSummary(e,t){return[`${this._formatTime(e.departure)} – ${this._formatTime(e.arrival)}`,this._formatDuration(this._journeyMinutes(e)),`${e.transfers} ${1!==e.transfers?be(t,"transfers"):be(t,"transfer")}`,this._riskLabel(e.transfer_risk,t)]}_renderAltRow(e,t){return B`
      <span class="time-span">
        <span class="leg-time">${this._formatTime(e.departure)}</span>
        <span class="trip-arrow">${Se}</span>
        <span class="leg-time">${this._formatTime(e.arrival)}</span>
      </span>
      <span>${this._formatDuration(this._journeyMinutes(e))}</span>
      <span>${e.transfers} ${1!==e.transfers?be(t,"transfers"):be(t,"transfer")}</span>
      <span class="alt-risk ${this._getRiskClass(e.transfer_risk)}">
        <ha-icon
          icon=${this._getRiskIcon(e.transfer_risk)}
          title=${this._riskLabel(e.transfer_risk,t)}
          style="--opt-icon-size:16px;"
        ></ha-icon>
      </span>
    `}_renderAlternatives(e){if(!e.next_journeys||0===e.next_journeys.length)return q;const t=this.hass.language;return B`
      <div class="alt-journeys">
        <div class="alt-journeys-title">${be(t,"alternative_connections")}</div>
        ${e.next_journeys.map(e=>this._canOpen(e)?B`
                <button
                  type="button"
                  class="alt-journey"
                  aria-haspopup="dialog"
                  aria-label=${`${be(t,"show_details")}: ${this._altSummary(e,t).join(", ")}`}
                  @click=${()=>this._open(e)}
                >
                  ${this._renderAltRow(e,t)}
                </button>
              `:B`<div class="alt-journey">${this._renderAltRow(e,t)}</div>`)}
      </div>
    `}_open(e){const t=++this._request;this._openSummary=e,this._openError="",this._openJourney=e.legs&&e.legs.length>0?e:null,this._dialog?.showModal(),this._openJourney||this._fetch(e,t)}_isSameJourney(e,t){const i=e.departure_timestamp&&t.departure_timestamp?e.departure_timestamp===t.departure_timestamp:e.departure===t.departure,a=e.arrival_timestamp&&t.arrival_timestamp?e.arrival_timestamp===t.arrival_timestamp:e.arrival===t.arrival;return i&&a&&e.transfers===t.transfers&&e.duration_minutes===t.duration_minutes}async _fetch(e,t){try{const i=await this.hass.callService(ve,je,{entity_id:this.config.entity},void 0,!1,!0);if(t!==this._request)return;const a=(i?.response?.journeys??[]).find(t=>this._isSameJourney(t,e));a?.legs?.length?this._openJourney=a:this._openError=be(this.hass.language,"connection_gone")}catch(e){if(t!==this._request)return;this._openError=be(this.hass.language,"details_failed"),console.error("openpublictransport-card: could not load connection detail",e)}}_close(){this._dialog?.close()}_onDialogClick(e){e.target===e.currentTarget&&this._close()}_onDialogClose(){this._dialog?.open||(this._request++,this._openSummary=null,this._openJourney=null,this._openError="")}_renderDialogBody(){return this._openJourney?this._renderJourney(this._openJourney):this._openError?B`
        <div class="journey-dialog-status is-error">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          <span>${this._openError}</span>
        </div>
      `:B`
      <div class="journey-dialog-status">
        <span class="journey-dialog-spinner" aria-hidden="true"></span>
        <span>${be(this.hass.language,"loading_details")}</span>
      </div>
    `}_renderDialog(){const e=this.hass.language;return B`
      <dialog
        class="journey-dialog"
        aria-labelledby="journey-dialog-title"
        @click=${this._onDialogClick}
        @close=${this._onDialogClose}
      >
        <div class="journey-dialog-head">
          ${this._openSummary?this._renderJourneyHeader(this._openSummary,"journey-dialog-title"):B`<div class="trip-header" id="journey-dialog-title"></div>`}
          <button
            type="button"
            class="journey-dialog-close"
            aria-label=${be(e,"close")}
            @click=${this._close}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <div class="journey-dialog-content">${this._renderDialogBody()}</div>
      </dialog>
    `}render(){return B`
      ${this.trip?B`
            <div class="trip-container">
              ${this._renderHeader(this.trip)}
              ${this._renderJourney(this.trip)}
              ${this._renderAlternatives(this.trip)}
            </div>
          `:B`<div class="card-empty">${be(this.hass.language,"no_trip_data")}</div>`}
      ${this._renderDialog()}
    `}};De.styles=me,e([ce({attribute:!1})],De.prototype,"hass",void 0),e([ce({attribute:!1})],De.prototype,"config",void 0),e([ce({attribute:!1})],De.prototype,"trip",void 0),e([ue()],De.prototype,"_openSummary",void 0),e([ue()],De.prototype,"_openJourney",void 0),e([ue()],De.prototype,"_openError",void 0),e([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(e){return(t,i,a)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}("dialog.journey-dialog")],De.prototype,"_dialog",void 0),De=e([de("openpublictransport-trip-layout")],De);let Ne=class extends se{constructor(){super(...arguments),this.departures=[],this.stationName="",this.emptyKey="no_departures"}_renderCountdown(e){const t=this.hass?.language||"en";return e<=0?be(t,"now"):1===e?be(t,"in_1_min"):be(t,"in_min",{min:e})}render(){const e=this.hass?.language||"en",t=this.departures[0];if(!t)return B`<div class="next-empty">${be(e,this.emptyKey)}</div>`;const i=t.line_color?`background:${t.line_color};color:${t.line_text_color||"#000"}`:"",a=t.minutes_until_departure,n=a<=2?"next-countdown imminent":"next-countdown";return B`
      <div class="next-container">
        ${this.config.show_header&&this.stationName?B`<div class="next-station">${this.stationName}</div>`:q}

        <div class="next-main">
          <openpublictransport-transport-icon
            class="next-icon"
            transport-type=${t.transportation_type}
          ></openpublictransport-transport-icon>
          <span class="next-line-badge" style=${i}>${t.line}</span>
          <span class="next-destination">${t.destination}</span>
        </div>

        <div class="next-bottom">
          <span class=${n}>${this._renderCountdown(a)}</span>
          <span class="time-line">
            <span class="next-time">${t.departure_time||t.planned_time}</span>
            ${this.config.show_delay?B`<openpublictransport-delay-badge
                  .delay=${t.delay}
                  ?is-realtime=${t.is_realtime}
                  .language=${e}
                ></openpublictransport-delay-badge>`:q}
          </span>
          ${this.config.show_platform&&t.platform?B`<span class="next-platform">${be(e,"platform")} ${t.platform}</span>`:q}
        </div>
      </div>
    `}};Ne.styles=[me,r`
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
    `],e([ce({attribute:!1})],Ne.prototype,"hass",void 0),e([ce({attribute:!1})],Ne.prototype,"config",void 0),e([ce({attribute:!1})],Ne.prototype,"departures",void 0),e([ce({type:String})],Ne.prototype,"stationName",void 0),e([ce({type:String})],Ne.prototype,"emptyKey",void 0),Ne=e([de("openpublictransport-next-layout")],Ne);let Pe=class extends se{constructor(){super(...arguments),this._entityFilter=e=>we(this.hass,e.entity_id)}setConfig(e){this._config={...fe,...e}}_fireConfigChanged(){const e=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(e)}_entityChanged(e){if(!this._config)return;const t=e.detail?.value??"";this._config={...this._config,entity:t},this._fireConfigChanged()}_layoutChanged(e){const t=e.target.value;this._config&&t&&(this._config={...this._config,layout:t},this._fireConfigChanged())}_themeChanged(e){const t=e.target.value;this._config&&t&&(this._config={...this._config,theme:t},this._fireConfigChanged())}_maxDeparturesChanged(e){if(!this._config)return;const t=e.target,i=parseInt(t.value,10);isNaN(i)||i<1||(this._config={...this._config,max_departures:i},this._fireConfigChanged())}_toggleChanged(e){return t=>{this._config&&(this._config={...this._config,[e]:t.target.checked},this._fireConfigChanged())}}render(){if(!this.hass||!this._config)return B``;const e=this.hass.language;return B`
      <div class="card-config">
        <div class="config-row">
          <label>${be(e,"entity")}</label>
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
          <label>${be(e,"layout")}</label>
          <select .value=${this._config.layout} @change=${this._layoutChanged}>
            <option value="table" ?selected=${"table"===this._config.layout}>${be(e,"table_layout")}</option>
            <option value="compact" ?selected=${"compact"===this._config.layout}>${be(e,"compact_layout")}</option>
            <option value="trip" ?selected=${"trip"===this._config.layout}>${be(e,"trip_layout")}</option>
            <option value="next" ?selected=${"next"===this._config.layout}>${be(e,"next_layout")}</option>
          </select>
        </div>

        <div class="config-row">
          <label>${be(e,"theme")}</label>
          <select .value=${this._config.theme} @change=${this._themeChanged}>
            <option value="auto" ?selected=${"auto"===this._config.theme}>Auto</option>
            <option value="dark" ?selected=${"dark"===this._config.theme}>Dark</option>
            <option value="light" ?selected=${"light"===this._config.theme}>Light</option>
            <option value="ha" ?selected=${"ha"===this._config.theme}>${be(e,"theme_ha")}</option>
          </select>
        </div>

        <div class="config-row">
          <label>${be(e,"max_departures")}</label>
          <ha-textfield
            type="number"
            .value=${String(this._config.max_departures)}
            min="1"
            max="50"
            @change=${this._maxDeparturesChanged}
          ></ha-textfield>
        </div>

        <div class="section-title">${be(e,"display_options")}</div>

        <div class="toggle-row">
          <label>${be(e,"show_header")}</label>
          <ha-switch
            .checked=${this._config.show_header}
            @change=${this._toggleChanged("show_header")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>${be(e,"show_platform")}</label>
          <ha-switch
            .checked=${this._config.show_platform}
            @change=${this._toggleChanged("show_platform")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>${be(e,"show_delay")}</label>
          <ha-switch
            .checked=${this._config.show_delay}
            @change=${this._toggleChanged("show_delay")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>${be(e,"show_realtime")}</label>
          <ha-switch
            .checked=${this._config.show_realtime_indicator}
            @change=${this._toggleChanged("show_realtime_indicator")}
          ></ha-switch>
        </div>

        ${this._isTripEntity()?this._renderTripFilterNote(e):this._renderFilters(e)}
      </div>
    `}_isTripEntity(){return!(!this.hass||!this._config?.entity)&&"trip"===$e(this.hass,this._config.entity)}_renderTripFilterNote(e){return B`
      <div class="section-title">${be(e,"filters")}</div>
      <div class="filter-note">${be(e,"trip_filter_note")}</div>
    `}_renderFilters(e){return B`
        <div class="section-title">${be(e,"line_filter")}</div>
        <div class="config-row">
          <ha-textfield
            type="text"
            .value=${this._config.line_filter||""}
            placeholder="U6, S1, RE5"
            helper=${be(e,"line_filter_hint")}
            @change=${e=>{this._config&&(this._config={...this._config,line_filter:e.target.value},this._fireConfigChanged())}}
            style="width:100%"
          ></ha-textfield>
        </div>

        <div class="section-title">${be(e,"destination_filter")}</div>
        <div class="config-row">
          <ha-textfield
            type="text"
            .value=${this._config.destination_filter||""}
            placeholder="Duisburg, Flughafen"
            helper=${be(e,"destination_filter_hint")}
            @change=${e=>{this._config&&(this._config={...this._config,destination_filter:e.target.value},this._fireConfigChanged())}}
            style="width:100%"
          ></ha-textfield>
        </div>
    `}};Pe.styles=r`
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
  `,e([ce({attribute:!1})],Pe.prototype,"hass",void 0),e([ue()],Pe.prototype,"_config",void 0),Pe=e([de("openpublictransport-card-editor")],Pe),console.info("%c OPENPUBLICTRANSPORT-CARD %c v1.10.1 ","color: #ffd700; background: #1a1a1a; font-weight: bold; padding: 2px 4px;","color: #1a1a1a; background: #ffd700; font-weight: bold; padding: 2px 4px;");let Re=class extends se{static getConfigElement(){return document.createElement("openpublictransport-card-editor")}static getStubConfig(e,t,i){const a=xe(e,t)[0]??xe(e,i)[0]??"",n=a?$e(e,a):"unknown";return{...fe,entity:a,layout:ke(n)}}setConfig(e){if(!e.entity)throw new Error(be("en","please_define_entity"));this._config={...fe,...e}}getCardSize(){if(!this._config)return 3;switch(this._config.layout){case"compact":case"next":return 2;case"trip":return 5;default:return Math.min(2+(this._config.max_departures||10),12)}}getGridOptions(){return{rows:"auto",min_rows:2,columns:12}}connectedCallback(){super.connectedCallback(),this._timeInterval=setInterval(()=>{this.requestUpdate()},1e4)}disconnectedCallback(){super.disconnectedCallback(),this._timeInterval&&(clearInterval(this._timeInterval),this._timeInterval=void 0)}updated(e){super.updated(e),this._applyTheme()}_applyTheme(){if(!this._config)return;let e=this._config.theme;"auto"===e&&(e=this.hass?.themes?.darkMode?"dark":"light"),this.setAttribute("data-theme",e)}_getDepartures(){if(!this.hass||!this._config)return[];const e=this.hass.states[this._config.entity];if(!e)return[];const t=e.attributes.departures;if(!Array.isArray(t))return[];let i=t;const a=(this._config.line_filter||"").trim();if(a){const e=a.split(",").map(e=>e.trim().toLowerCase()).filter(Boolean);i=i.filter(t=>e.some(e=>t.line.toLowerCase()===e))}const n=(this._config.destination_filter||"").trim();if(n){const e=n.split(",").map(e=>e.trim().toLowerCase()).filter(Boolean);i=i.filter(t=>e.some(e=>(t.destination||"").toLowerCase().includes(e)))}return i}_getTripData(){if(!this.hass||!this._config)return null;const e=this.hass.states[this._config.entity];if(!e)return null;const t=e.attributes;return t.departure&&t.legs?{departure:t.departure,arrival:t.arrival,departure_timestamp:t.departure_timestamp,arrival_timestamp:t.arrival_timestamp,in_minutes:t.in_minutes,destination:t.destination,duration_minutes:t.duration_minutes,transfers:t.transfers,connection_feasible:t.connection_feasible,transfer_risk:t.transfer_risk,min_transfer_time:t.min_transfer_time,legs:t.legs,next_journeys:t.next_journeys}:null}_tripAsDeparture(e){const t=e.legs??[],i=t.find(e=>"walk"!==(e.transport_type||"").toLowerCase())??t[0];if(!i)return null;const a=i.departure_estimated||i.departure_planned||e.departure,n=t[t.length-1];return{line:i.line,destination:e.destination||n?.destination||"",departure_time:a,planned_time:a,delay:i.delay??0,platform:i.platform||"",transportation_type:i.transport_type||i.product||"",is_realtime:Boolean(i.departure_estimated),minutes_until_departure:this._minutesUntilTrip(e)}}_minutesUntilTrip(e){if(e.departure_timestamp){const t=Date.parse(e.departure_timestamp);if(!Number.isNaN(t))return Math.floor((t-Date.now())/6e4)}return e.in_minutes??0}_getStationName(){if(!this.hass||!this._config)return"";const e=this.hass.states[this._config.entity];return e?e.attributes.friendly_name||e.attributes.station_name||e.entity_id:""}_renderError(e){return B`
      <ha-card>
        <div class="card-error">
          <ha-icon icon="mdi:alert-circle"></ha-icon>
          <div>${e}</div>
        </div>
      </ha-card>
    `}render(){if(!this._config||!this.hass)return q;const e=this.hass.states[this._config.entity];return e?"unavailable"===e.state?this._renderError(be(this.hass.language,"entity_unavailable")):B`
      <ha-card>
        ${this._renderLayout()}
      </ha-card>
    `:this._renderError(`Entity not found: ${this._config.entity}`)}_renderLayout(){switch(this._config.layout){case"compact":return B`
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
        `;case"next":{const e="trip"===$e(this.hass,this._config.entity),t=e?this._getTripData():null,i=t?this._tripAsDeparture(t):null;return B`
          <openpublictransport-next-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${e?i?[i]:[]:this._getDepartures()}
            .stationName=${this._getStationName()}
            .emptyKey=${e?"no_trip_data":"no_departures"}
          ></openpublictransport-next-layout>
        `}default:return B`
          <openpublictransport-table-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${this._getDepartures()}
            .stationName=${this._getStationName()}
          ></openpublictransport-table-layout>
        `}}};Re.styles=[ge,me],e([ce({attribute:!1})],Re.prototype,"hass",void 0),e([ue()],Re.prototype,"_config",void 0),e([ue()],Re.prototype,"_timeInterval",void 0),Re=e([de("openpublictransport-card")],Re);const Le=window;Le.customCards=Le.customCards||[],Le.customCards.push({type:"openpublictransport-card",name:"Public Transport Departures",description:"Display public transport departures in table, compact, or trip layout",preview:!0,getEntitySuggestion:function(e,t){if(!we(e,t))return null;const i=$e(e,t),a=[];return"departures"===i?(a.push({label:"Table layout",config:{type:"custom:openpublictransport-card",entity:t,layout:"table"}}),a.push({label:"Compact layout",config:{type:"custom:openpublictransport-card",entity:t,layout:"compact",max_departures:6}}),a.push({label:"Next departure",config:{type:"custom:openpublictransport-card",entity:t,layout:"next"}})):"trip"===i?(a.push({label:"Trip layout",config:{type:"custom:openpublictransport-card",entity:t,layout:"trip"}}),a.push({label:"Next departure",config:{type:"custom:openpublictransport-card",entity:t,layout:"next"}})):a.push({label:"Table layout",config:{type:"custom:openpublictransport-card",entity:t,layout:ke(i)}}),1===a.length?a[0]:a}});export{Re as OpenpublictransportCard};
