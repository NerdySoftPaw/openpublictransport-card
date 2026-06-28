function t(t,e,i,n){var a,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(s=(r<3?a(s):r>3?a(e,i,s):a(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new r(i,t,n)},o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:l,defineProperty:p,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,g=globalThis,f=g.trustedTypes,_=f?f.emptyScript:"",m=g.reactiveElementPolyfillSupport,y=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!l(t,e),$={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&p(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:a}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const r=n?.call(this);a?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of n){const n=document.createElement("style"),a=e.litNonce;void 0!==a&&n.setAttribute("nonce",a),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=n;const r=a.fromAttribute(e,t.type);this[n]=r??this._$Ej?.get(n)??r,this._$Em=null}}requestUpdate(t,e,i,n=!1,a){if(void 0!==t){const r=this.constructor;if(!1===n&&(a=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??v)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:a},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==a||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,m?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,k=t=>t,A=w.trustedTypes,C=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+z,T=`<${S}>`,P=document,N=()=>P.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,L="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,O=/>/g,M=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,I=/"/g,B=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,K=P.createTreeWalker(P,129);function Z(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,n=[];let a,r=2===e?"<svg>":3===e?"<math>":"",s=R;for(let e=0;e<i;e++){const i=t[e];let o,l,p=-1,c=0;for(;c<i.length&&(s.lastIndex=c,l=s.exec(i),null!==l);)c=s.lastIndex,s===R?"!--"===l[1]?s=U:void 0!==l[1]?s=O:void 0!==l[2]?(B.test(l[2])&&(a=RegExp("</"+l[2],"g")),s=M):void 0!==l[3]&&(s=M):s===M?">"===l[0]?(s=a??R,p=-1):void 0===l[1]?p=-2:(p=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?M:'"'===l[3]?I:H):s===I||s===H?s=M:s===U||s===O?s=R:(s=M,a=void 0);const d=s===M&&t[e+1].startsWith("/>")?" ":"";r+=s===R?i+T:p>=0?(n.push(o),i.slice(0,p)+E+i.slice(p)+z+d):i+z+(-2===p?e:d)}return[Z(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class J{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let a=0,r=0;const s=t.length-1,o=this.parts,[l,p]=G(t,e);if(this.el=J.createElement(l,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=K.nextNode())&&o.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(E)){const e=p[r++],i=n.getAttribute(t).split(z),s=/([.?@])?(.*)/.exec(e);o.push({type:1,index:a,name:s[2],strings:i,ctor:"."===s[1]?et:"?"===s[1]?it:"@"===s[1]?nt:tt}),n.removeAttribute(t)}else t.startsWith(z)&&(o.push({type:6,index:a}),n.removeAttribute(t));if(B.test(n.tagName)){const t=n.textContent.split(z),e=t.length-1;if(e>0){n.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],N()),K.nextNode(),o.push({type:2,index:++a});n.append(t[e],N())}}}else if(8===n.nodeType)if(n.data===S)o.push({type:2,index:a});else{let t=-1;for(;-1!==(t=n.data.indexOf(z,t+1));)o.push({type:7,index:a}),t+=z.length-1}a++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,n){if(e===W)return e;let a=void 0!==n?i._$Co?.[n]:i._$Cl;const r=j(e)?void 0:e._$litDirective$;return a?.constructor!==r&&(a?._$AO?.(!1),void 0===r?a=void 0:(a=new r(t),a._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=a:i._$Cl=a),void 0!==a&&(e=Q(t,a._$AS(t,e.values),a,n)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??P).importNode(e,!0);K.currentNode=n;let a=K.nextNode(),r=0,s=0,o=i[0];for(;void 0!==o;){if(r===o.index){let e;2===o.type?e=new Y(a,a.nextSibling,this,t):1===o.type?e=new o.ctor(a,o.name,o.strings,this,t):6===o.type&&(e=new at(a,this,t)),this._$AV.push(e),o=i[++s]}r!==o?.index&&(a=K.nextNode(),r++)}return K.currentNode=P,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),j(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new X(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new J(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const a of t)n===e.length?e.push(i=new Y(this.O(N()),this.O(N()),this,this.options)):i=e[n],i._$AI(a),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=k(t).nextSibling;k(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,a){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,n){const a=this.strings;let r=!1;if(void 0===a)t=Q(this,t,e,0),r=!j(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const n=t;let s,o;for(t=a[0],s=0;s<a.length-1;s++)o=Q(this,n[i+s],e,s),o===W&&(o=this._$AH[s]),r||=!j(o)||o!==this._$AH[s],o===q?t=q:t!==q&&(t+=(o??"")+a[s+1]),this._$AH[s]=o}r&&!n&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class nt extends tt{constructor(t,e,i,n,a){super(t,e,i,n,a),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??q)===W)return;const i=this._$AH,n=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==q&&(i===q||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(J,Y),(w.litHtmlVersions??=[]).push("3.3.2");const st=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let a=n._$litPart$;if(void 0===a){const t=i?.renderBefore??null;n._$litPart$=a=new Y(e.insertBefore(N(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ot._$litElement$=!0,ot.finalized=!0,st.litElementHydrateSupport?.({LitElement:ot});const lt=st.litElementPolyfillSupport;lt?.({LitElement:ot}),(st.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:v},dt=(t=ct,e,i)=>{const{kind:n,metadata:a}=i;let r=globalThis.litPropertyMetadata.get(a);if(void 0===r&&globalThis.litPropertyMetadata.set(a,r=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const a=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,a,t,!0,i)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const a=this[n];e.call(this,i),this.requestUpdate(n,a,t,!0,i)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return ht({...t,state:!0,attribute:!1})}const gt=s`
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

    height: 100%;
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
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  /* Each layout fills the card so its body (not the whole card) can scroll */
  openpublictransport-table-layout,
  openpublictransport-next-layout,
  openpublictransport-compact-layout,
  openpublictransport-trip-layout {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0;
  }

  .card-header,
  .disruption-banner {
    flex-shrink: 0;
  }

  /* Icon sizing fallback: keeps legacy mdc variable and explicit dimensions in sync. */
  ha-icon {
    --mdc-icon-size: var(--opt-icon-size, 24px);
    width: var(--opt-icon-size, 24px);
    height: var(--opt-icon-size, 24px);
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
    /* left/right inset aligns columns with the header; bottom gap below last row */
    padding: 0 4px 12px;
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
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
    --opt-icon-size: 16px;
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
    --opt-icon-size: 16px;
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
    --opt-icon-size: 18px;
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
    --opt-icon-size: 14px;
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
    --opt-icon-size: 14px;
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
    --opt-icon-size: 40px;
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
`,ft={layout:"table",max_departures:10,show_header:!0,show_platform:!0,show_delay:!0,show_realtime_indicator:!0,theme:"auto",line_filter:"",destination_filter:""},_t={bus:"mdi:bus",tram:"mdi:tram",subway:"mdi:subway-variant",train:"mdi:train",ferry:"mdi:ferry",taxi:"mdi:taxi","s-bahn":"mdi:train","u-bahn":"mdi:subway-variant",regional:"mdi:train",express:"mdi:train",default:"mdi:transit-connection-variant"},mt={en:{now:"now",in_min:"in {min} min",in_1_min:"in 1 min",no_departures:"No departures available",no_trip_data:"No trip data available",entity_unavailable:"Entity is unavailable",please_define_entity:"Please define an entity",alternative_connections:"Alternative Connections",connection_at_risk:"Connection at risk",risk:"risk",transfer:"Transfer",transfers:"transfers",platform:"Pl.",time:"Time",line:"Line",destination:"Destination",track:"Track",table_layout:"Table (Departure Board)",compact_layout:"Compact (Chips)",trip_layout:"Trip (Journey)",next_layout:"Next Departure (Widget)",entity:"Entity",layout:"Layout",theme:"Theme",max_departures:"Max Departures",show_header:"Show Header",show_platform:"Show Platform",show_delay:"Show Delay",show_realtime:"Show Realtime Indicator",display_options:"Display Options",line_filter:"Line Filter",line_filter_hint:"Show only these lines (comma-separated, e.g. U6, S1, RE5). Leave empty to show all.",destination_filter:"Destination Filter",destination_filter_hint:"Show only departures whose destination matches (comma-separated, partial match, e.g. Duisburg, Flughafen). Leave empty to show all."},de:{now:"jetzt",in_min:"in {min} min",in_1_min:"in 1 min",no_departures:"Keine Abfahrten verfügbar",no_trip_data:"Keine Verbindungsdaten verfügbar",entity_unavailable:"Entity nicht verfügbar",please_define_entity:"Bitte eine Entity auswählen",alternative_connections:"Alternative Verbindungen",connection_at_risk:"Anschluss gefährdet",risk:"Risiko",transfer:"Umstieg",transfers:"Umstiege",platform:"Gl.",time:"Zeit",line:"Linie",destination:"Ziel",track:"Gleis",table_layout:"Tabelle (Abfahrtstafel)",compact_layout:"Kompakt (Chips)",trip_layout:"Verbindung (Trip)",next_layout:"Nächste Abfahrt (Widget)",entity:"Entity",layout:"Layout",theme:"Design",max_departures:"Max. Abfahrten",show_header:"Kopfzeile anzeigen",show_platform:"Gleis anzeigen",show_delay:"Verspätung anzeigen",show_realtime:"Echtzeit-Indikator anzeigen",display_options:"Anzeigeoptionen",line_filter:"Linienfilter",line_filter_hint:"Nur diese Linien anzeigen (kommagetrennt, z.B. U6, S1, RE5). Leer lassen für alle.",destination_filter:"Zielfilter",destination_filter_hint:"Nur Abfahrten mit passendem Ziel anzeigen (kommagetrennt, Teiltreffer, z.B. Duisburg, Flughafen). Leer lassen für alle."},fr:{now:"maintenant",in_min:"dans {min} min",in_1_min:"dans 1 min",no_departures:"Aucun départ disponible",no_trip_data:"Aucune donnée de trajet disponible",entity_unavailable:"Entité indisponible",please_define_entity:"Veuillez sélectionner une entité",alternative_connections:"Correspondances alternatives",connection_at_risk:"Correspondance menacée",risk:"risque",transfer:"Correspondance",transfers:"correspondances",platform:"Voie",time:"Heure",line:"Ligne",destination:"Destination",track:"Voie",table_layout:"Tableau (Panneau de départs)",compact_layout:"Compact (Puces)",trip_layout:"Trajet (Itinéraire)",next_layout:"Prochain départ (Widget)",entity:"Entité",layout:"Disposition",theme:"Thème",max_departures:"Départs max.",show_header:"Afficher l'en-tête",show_platform:"Afficher la voie",show_delay:"Afficher le retard",show_realtime:"Afficher l'indicateur temps réel",display_options:"Options d'affichage",line_filter:"Filtre de lignes",line_filter_hint:"Afficher uniquement ces lignes (séparées par des virgules, ex. U6, S1, RE5). Laisser vide pour tout afficher.",destination_filter:"Filtre de destination",destination_filter_hint:"Afficher uniquement les départs dont la destination correspond (séparées par des virgules, correspondance partielle, ex. Duisburg, Aéroport). Laisser vide pour tout afficher."},nl:{now:"nu",in_min:"over {min} min",in_1_min:"over 1 min",no_departures:"Geen vertrekken beschikbaar",no_trip_data:"Geen reisgegevens beschikbaar",entity_unavailable:"Entity niet beschikbaar",please_define_entity:"Selecteer een entity",alternative_connections:"Alternatieve verbindingen",connection_at_risk:"Aansluiting in gevaar",risk:"risico",transfer:"Overstap",transfers:"overstappen",platform:"Spoor",time:"Tijd",line:"Lijn",destination:"Bestemming",track:"Spoor",table_layout:"Tabel (Vertrekbord)",compact_layout:"Compact (Chips)",trip_layout:"Reis (Route)",next_layout:"Volgend vertrek (Widget)",entity:"Entity",layout:"Layout",theme:"Thema",max_departures:"Max. vertrekken",show_header:"Koptekst tonen",show_platform:"Spoor tonen",show_delay:"Vertraging tonen",show_realtime:"Realtime-indicator tonen",display_options:"Weergaveopties",line_filter:"Lijnfilter",line_filter_hint:"Toon alleen deze lijnen (kommagescheiden, bijv. U6, S1, RE5). Leeg laten voor alles.",destination_filter:"Bestemmingsfilter",destination_filter_hint:"Toon alleen vertrekken met een overeenkomende bestemming (kommagescheiden, gedeeltelijke overeenkomst, bijv. Duisburg, Luchthaven). Leeg laten voor alles."},sv:{now:"nu",in_min:"om {min} min",in_1_min:"om 1 min",no_departures:"Inga avgångar tillgängliga",no_trip_data:"Inga resedata tillgängliga",entity_unavailable:"Entitet otillgänglig",please_define_entity:"Välj en entitet",alternative_connections:"Alternativa förbindelser",connection_at_risk:"Anslutning hotad",risk:"risk",transfer:"Byte",transfers:"byten",platform:"Spår",time:"Tid",line:"Linje",destination:"Destination",track:"Spår",table_layout:"Tabell (Avgångstavla)",compact_layout:"Kompakt (Chips)",trip_layout:"Resa (Rutt)",next_layout:"Nästa avgång (Widget)",entity:"Entitet",layout:"Layout",theme:"Tema",max_departures:"Max avgångar",show_header:"Visa rubrik",show_platform:"Visa spår",show_delay:"Visa försening",show_realtime:"Visa realtidsindikator",display_options:"Visningsalternativ",line_filter:"Linjefilter",line_filter_hint:"Visa bara dessa linjer (kommaseparerade, t.ex. U6, S1, RE5). Lämna tomt för alla.",destination_filter:"Destinationsfilter",destination_filter_hint:"Visa bara avgångar vars destination matchar (kommaseparerade, delvis matchning, t.ex. Duisburg, Flygplats). Lämna tomt för alla."},pl:{now:"teraz",in_min:"za {min} min",in_1_min:"za 1 min",no_departures:"Brak dostępnych odjazdów",no_trip_data:"Brak danych o podróży",entity_unavailable:"Encja niedostępna",please_define_entity:"Wybierz encję",alternative_connections:"Alternatywne połączenia",connection_at_risk:"Połączenie zagrożone",risk:"ryzyko",transfer:"Przesiadka",transfers:"przesiadki",platform:"Peron",time:"Czas",line:"Linia",destination:"Kierunek",track:"Tor",table_layout:"Tabela (Tablica odjazdów)",compact_layout:"Kompaktowy (Chipy)",trip_layout:"Podróż (Trasa)",next_layout:"Następny odjazd (Widget)",entity:"Encja",layout:"Układ",theme:"Motyw",max_departures:"Maks. odjazdów",show_header:"Pokaż nagłówek",show_platform:"Pokaż peron",show_delay:"Pokaż opóźnienie",show_realtime:"Pokaż wskaźnik czasu rzeczywistego",display_options:"Opcje wyświetlania",line_filter:"Filtr linii",line_filter_hint:"Pokaż tylko te linie (oddzielone przecinkami, np. U6, S1, RE5). Zostaw puste, aby pokazać wszystkie.",destination_filter:"Filtr kierunku",destination_filter_hint:"Pokaż tylko odjazdy z pasującym kierunkiem (oddzielone przecinkami, częściowe dopasowanie, np. Duisburg, Lotnisko). Zostaw puste, aby pokazać wszystkie."},it:{now:"adesso",in_min:"tra {min} min",in_1_min:"tra 1 min",no_departures:"Nessuna partenza disponibile",no_trip_data:"Nessun dato di viaggio disponibile",entity_unavailable:"Entità non disponibile",please_define_entity:"Seleziona un'entità",alternative_connections:"Connessioni alternative",connection_at_risk:"Connessione a rischio",risk:"rischio",transfer:"Cambio",transfers:"cambi",platform:"Bin.",time:"Orario",line:"Linea",destination:"Destinazione",track:"Binario",table_layout:"Tabella (Pannello partenze)",compact_layout:"Compatto (Chip)",trip_layout:"Viaggio (Percorso)",next_layout:"Prossima partenza (Widget)",entity:"Entità",layout:"Layout",theme:"Tema",max_departures:"Max. partenze",show_header:"Mostra intestazione",show_platform:"Mostra binario",show_delay:"Mostra ritardo",show_realtime:"Mostra indicatore tempo reale",display_options:"Opzioni di visualizzazione",line_filter:"Filtro linee",line_filter_hint:"Mostra solo queste linee (separate da virgola, es. U6, S1, RE5). Lascia vuoto per mostrare tutto.",destination_filter:"Filtro destinazione",destination_filter_hint:"Mostra solo le partenze con destinazione corrispondente (separate da virgola, corrispondenza parziale, es. Duisburg, Aeroporto). Lascia vuoto per mostrare tutto."}};function yt(t,e,i){const n=t?.substring(0,2).toLowerCase()||"en";let a=(mt[n]||mt.en)[e]||mt.en[e]||e;if(i)for(const[t,e]of Object.entries(i))a=a.replace(`{${t}}`,String(e));return a}let bt=class extends ot{constructor(){super(...arguments),this.transportType=""}_getIcon(){const t=this.transportType.toLowerCase();return _t[t]||_t.default}render(){return V`<ha-icon .icon=${this._getIcon()}></ha-icon>`}};t([ht({type:String,attribute:"transport-type"})],bt.prototype,"transportType",void 0),bt=t([pt("openpublictransport-transport-icon")],bt);let vt=class extends ot{constructor(){super(...arguments),this.delay=0,this.isRealtime=!1}render(){return this.delay>0?V`
        <span class="delay-badge delayed">+${this.delay}</span>
      `:0===this.delay&&this.isRealtime?V`
        <span class="delay-badge on-time">&check;</span>
      `:q}};vt.styles=gt,t([ht({type:Number})],vt.prototype,"delay",void 0),t([ht({type:Boolean,attribute:"is-realtime"})],vt.prototype,"isRealtime",void 0),vt=t([pt("openpublictransport-delay-badge")],vt);let $t=class extends ot{constructor(){super(...arguments),this.departures=[],this.stationName=""}_getCurrentTime(){return(new Date).toLocaleTimeString(this.hass?.language||"de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}_collectNotices(){const t=[];for(const e of this.departures)if(e.notices)for(const i of e.notices)t.includes(i)||t.push(i);return t}_countdown(t){const e=t.minutes_until_departure;return e<=0?yt(this.hass.language,"now"):1===e?yt(this.hass.language,"in_1_min"):yt(this.hass.language,"in_min",{min:e})}_renderHeader(){return this.config.show_header?V`
      <div class="card-header">
        <span class="station-name">${this.stationName||"Departures"}</span>
        <span class="current-time">${this._getCurrentTime()}</span>
      </div>
    `:q}_renderDisruptionBanner(){const t=this._collectNotices();return 0===t.length?q:V`
      <div class="disruption-banner">
        <ha-icon icon="mdi:alert"></ha-icon>
        <span>${t[0]}${t.length>1?` (+${t.length-1} more)`:""}</span>
      </div>
    `}_renderNotices(t){return t.notices&&0!==t.notices.length?V`
      <ha-icon
        class="notice-icon"
        icon="mdi:alert-circle-outline"
        title=${t.notices.join(", ")}
      ></ha-icon>
    `:q}_renderPlatformCell(t){return this.config.show_platform?t.platform?t.platform_changed&&t.planned_platform?V`
        <td class="platform-cell">
          <span class="platform-changed">${t.planned_platform}</span>
          <span class="platform-new">${t.platform}</span>
        </td>
      `:V`<td class="platform-cell">${t.platform}</td>`:V`<td class="platform-cell"></td>`:q}_renderRow(t){const e=t.line_color?`background:${t.line_color};color:${t.line_text_color||"#000"}`:"";return V`
      <tr>
        <td class="time-cell">
          <span class="time-planned">${t.planned_time||""}</span>
          ${this.config.show_delay?V`
                <openpublictransport-delay-badge
                  .delay=${t.delay}
                  ?is-realtime=${t.is_realtime}
                ></openpublictransport-delay-badge>
              `:q}
          <span class="time-countdown">${this._countdown(t)}</span>
        </td>
        <td>
          <span class="line-cell">
            <openpublictransport-transport-icon
              transport-type=${t.transportation_type}
            ></openpublictransport-transport-icon>
            <span class="line-badge" style=${e}>${t.line}</span>
            ${this._renderNotices(t)}
          </span>
        </td>
        <td class="destination-cell">${t.destination}</td>
        ${this._renderPlatformCell(t)}
      </tr>
    `}render(){const t=this.departures.slice(0,this.config.max_departures);return 0===t.length?V`
        ${this._renderHeader()}
        <div class="card-empty">${yt(this.hass.language,"no_departures")}</div>
      `:V`
      ${this._renderHeader()}
      ${this._renderDisruptionBanner()}
      <div class="card-content">
        <table class="departure-table">
          <thead>
            <tr>
              <th>${yt(this.hass.language,"time")}</th>
              <th>${yt(this.hass.language,"line")}</th>
              <th>${yt(this.hass.language,"destination")}</th>
              ${this.config.show_platform?V`<th>${yt(this.hass.language,"track")}</th>`:q}
            </tr>
          </thead>
          <tbody>
            ${t.map(t=>this._renderRow(t))}
          </tbody>
        </table>
      </div>
    `}};$t.styles=gt,t([ht({attribute:!1})],$t.prototype,"hass",void 0),t([ht({attribute:!1})],$t.prototype,"config",void 0),t([ht({attribute:!1})],$t.prototype,"departures",void 0),t([ht({type:String})],$t.prototype,"stationName",void 0),$t=t([pt("openpublictransport-table-layout")],$t);let xt=class extends ot{constructor(){super(...arguments),this.departures=[],this.stationName=""}_shortenDestination(t){if(t.length<=15)return t;const e=t.split(/[,\s-]+/);return e.length>1?e[0]:t.substring(0,13)+"..."}_renderCountdown(t){return t<=0?yt(this.hass.language,"now"):`${t}'`}_getChipClass(t){return t.delay>0?"compact-chip delayed":t.is_realtime&&0===t.delay?"compact-chip on-time":"compact-chip"}_renderHeader(){return this.config.show_header?V`
      <div class="card-header">
        <span class="station-name">${this.stationName||"Departures"}</span>
      </div>
    `:q}render(){const t=this.departures.slice(0,this.config.max_departures);return 0===t.length?V`
        ${this._renderHeader()}
        <div class="card-empty">${yt(this.hass.language,"no_departures")}</div>
      `:V`
      ${this._renderHeader()}
      <div class="compact-container">
        ${t.map(t=>{const e=t.line_color?`background:${t.line_color};color:${t.line_text_color||"#000"}`:"";return V`
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
    `}};xt.styles=gt,t([ht({attribute:!1})],xt.prototype,"hass",void 0),t([ht({attribute:!1})],xt.prototype,"config",void 0),t([ht({attribute:!1})],xt.prototype,"departures",void 0),t([ht({type:String})],xt.prototype,"stationName",void 0),xt=t([pt("openpublictransport-compact-layout")],xt);let wt=class extends ot{constructor(){super(...arguments),this.trip=null}_formatTime(t){return t||""}_getRiskClass(t){switch(t.toLowerCase()){case"low":return"risk-low";case"medium":return"risk-medium";case"high":return"risk-high";default:return""}}_getRiskIcon(t){switch(t.toLowerCase()){case"low":return"mdi:check-circle";case"medium":return"mdi:alert";case"high":return"mdi:alert-octagon";default:return"mdi:help-circle"}}_renderHeader(t){return this.config.show_header?V`
      <div class="trip-header">
        <span>${t.departure}</span>
        <span class="trip-arrow">&rarr;</span>
        <span>${t.arrival}</span>
        <span class="trip-duration">${t.duration_minutes} min</span>
      </div>
    `:q}_renderMeta(t){const e=this.hass.language;return V`
      <div class="trip-meta">
        <div class="trip-meta-item">
          <ha-icon icon="mdi:swap-horizontal"></ha-icon>
          <span>${t.transfers} ${1!==t.transfers?yt(e,"transfers"):yt(e,"transfer")}</span>
        </div>
        <div class="trip-meta-item ${this._getRiskClass(t.transfer_risk)}">
          <ha-icon icon=${this._getRiskIcon(t.transfer_risk)}></ha-icon>
          <span>${t.transfer_risk} ${yt(e,"risk")}</span>
        </div>
        ${t.min_transfer_time>0?V`
              <div class="trip-meta-item">
                <ha-icon icon="mdi:timer-outline"></ha-icon>
                <span>min ${t.min_transfer_time} min</span>
              </div>
            `:q}
        ${t.connection_feasible?q:V`
              <div class="trip-meta-item risk-high">
                <ha-icon icon="mdi:close-circle"></ha-icon>
                <span>${yt(e,"connection_at_risk")}</span>
              </div>
            `}
      </div>
    `}_renderLeg(t){const e=t.transfer?"trip-leg transfer":"trip-leg";return V`
      <div class=${e}>
        <div class="leg-station">${t.origin}</div>
        <div class="leg-details">
          <span class="leg-time">${this._formatTime(t.departure_planned)}</span>
          ${t.delay>0?V`
                <openpublictransport-delay-badge
                  .delay=${t.delay}
                  is-realtime
                ></openpublictransport-delay-badge>
              `:q}
          <openpublictransport-transport-icon
            transport-type=${t.product}
          ></openpublictransport-transport-icon>
          <span>${t.line}</span>
          ${t.platform?V`<span>&middot; ${yt(this.hass.language,"platform")} ${t.platform}</span>`:q}
          <span>&middot; ${t.duration_minutes} min</span>
        </div>
        ${t.transfer?V`<div class="leg-transfer-info">${yt(this.hass.language,"transfer")}</div>`:q}
      </div>
    `}_renderTimeline(t){const e=t.legs[t.legs.length-1];return V`
      <div class="trip-timeline">
        ${t.legs.map(t=>this._renderLeg(t))}
        ${e?V`
              <div class="trip-leg" style="border-left-color: transparent; padding-bottom: 0;">
                <div class="leg-station">${e.destination}</div>
                <div class="leg-details">
                  <span class="leg-time">${this._formatTime(e.arrival_planned)}</span>
                </div>
              </div>
            `:q}
      </div>
    `}_renderAlternatives(t){if(!t.next_journeys||0===t.next_journeys.length)return q;const e=this.hass.language;return V`
      <div class="alt-journeys">
        <div class="alt-journeys-title">${yt(e,"alternative_connections")}</div>
        ${t.next_journeys.map(t=>V`
            <div class="alt-journey">
              <span class="leg-time">${this._formatTime(t.departure)}</span>
              <span class="trip-arrow">&rarr;</span>
              <span class="leg-time">${this._formatTime(t.arrival)}</span>
              <span>${t.duration_minutes} min</span>
              <span>${t.transfers} ${1!==t.transfers?yt(e,"transfers"):yt(e,"transfer")}</span>
              <span class=${this._getRiskClass(t.transfer_risk)}>
                <ha-icon icon=${this._getRiskIcon(t.transfer_risk)} style="--opt-icon-size:14px;"></ha-icon>
              </span>
            </div>
          `)}
      </div>
    `}render(){return this.trip?V`
      <div class="trip-container">
        ${this._renderHeader(this.trip)}
        ${this._renderMeta(this.trip)}
        ${this._renderTimeline(this.trip)}
        ${this._renderAlternatives(this.trip)}
      </div>
    `:V`<div class="card-empty">${yt(this.hass.language,"no_trip_data")}</div>`}};wt.styles=gt,t([ht({attribute:!1})],wt.prototype,"hass",void 0),t([ht({attribute:!1})],wt.prototype,"config",void 0),t([ht({attribute:!1})],wt.prototype,"trip",void 0),wt=t([pt("openpublictransport-trip-layout")],wt);let kt=class extends ot{constructor(){super(...arguments),this.departures=[],this.stationName=""}_renderCountdown(t){const e=this.hass?.language||"en";return t<=0?yt(e,"now"):1===t?yt(e,"in_1_min"):yt(e,"in_min",{min:t})}render(){const t=this.hass?.language||"en",e=this.departures[0];if(!e)return V`<div class="next-empty">${yt(t,"no_departures")}</div>`;const i=e.line_color?`background:${e.line_color};color:${e.line_text_color||"#000"}`:"",n=e.minutes_until_departure,a=n<=2?"next-countdown imminent":"next-countdown";return V`
      <div class="next-container">
        ${this.config.show_header&&this.stationName?V`<div class="next-station">${this.stationName}</div>`:q}

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
          <span class="next-time">${e.planned_time}</span>
          ${this.config.show_delay?V`<openpublictransport-delay-badge
                .delay=${e.delay}
                ?is-realtime=${e.is_realtime}
              ></openpublictransport-delay-badge>`:q}
          ${this.config.show_platform&&e.platform?V`<span class="next-platform">Gl. ${e.platform}</span>`:q}
        </div>
      </div>
    `}};kt.styles=[gt,s`
      .next-container {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .next-station {
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--opt-text-secondary);
        opacity: 0.8;
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

      .next-line-badge {
        font-size: 1rem;
        font-weight: bold;
        background: var(--opt-accent, #ffd700);
        color: #000;
        padding: 3px 8px;
        border-radius: 4px;
        flex-shrink: 0;
        white-space: nowrap;
      }

      .next-destination {
        font-size: 1.1rem;
        font-weight: 600;
        flex: 1;
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
        font-size: 0.85rem;
        color: var(--opt-text-secondary);
        font-variant-numeric: tabular-nums;
      }

      .next-countdown {
        font-size: 1.8rem;
        font-weight: bold;
        font-variant-numeric: tabular-nums;
        line-height: 1;
      }

      .next-countdown.imminent {
        color: var(--opt-delay-red, #e53935);
      }

      .next-platform {
        font-size: 0.75rem;
        color: var(--opt-text-secondary);
        margin-left: auto;
        white-space: nowrap;
      }

      .next-empty {
        padding: 24px 16px;
        text-align: center;
        color: var(--opt-text-secondary);
        font-size: 0.85rem;
      }
    `],t([ht({attribute:!1})],kt.prototype,"hass",void 0),t([ht({attribute:!1})],kt.prototype,"config",void 0),t([ht({attribute:!1})],kt.prototype,"departures",void 0),t([ht({type:String})],kt.prototype,"stationName",void 0),kt=t([pt("openpublictransport-next-layout")],kt);let At=class extends ot{setConfig(t){this._config={...ft,...t}}_fireConfigChanged(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}_entityChanged(t){const e=t.target;this._config&&e.value&&(this._config={...this._config,entity:e.value},this._fireConfigChanged())}_getEntityOptions(){return this.hass?Object.keys(this.hass.states).filter(t=>{if(!t.startsWith("sensor."))return!1;const e=this.hass.states[t].attributes;return void 0!==e.departures||void 0!==e.legs}).map(t=>({id:t,name:"string"==typeof this.hass.states[t].attributes.friendly_name?this.hass.states[t].attributes.friendly_name:t})):[]}_layoutChanged(t){const e=t.target.value;this._config&&e&&(this._config={...this._config,layout:e},this._fireConfigChanged())}_themeChanged(t){const e=t.target.value;this._config&&e&&(this._config={...this._config,theme:e},this._fireConfigChanged())}_maxDeparturesChanged(t){if(!this._config)return;const e=t.target,i=parseInt(e.value,10);isNaN(i)||i<1||(this._config={...this._config,max_departures:i},this._fireConfigChanged())}_toggleChanged(t){return e=>{this._config&&(this._config={...this._config,[t]:e.target.checked},this._fireConfigChanged())}}render(){if(!this.hass||!this._config)return V``;const t=this.hass.language;return V`
      <div class="card-config">
        <div class="config-row">
          <label>${yt(t,"entity")}</label>
          <select .value=${this._config.entity||""} @change=${this._entityChanged}>
            <option value="">-- Select Entity --</option>
            ${this._getEntityOptions().map(t=>V`<option value=${t.id} ?selected=${this._config.entity===t.id}>${t.name}</option>`)}
          </select>
        </div>

        <div class="config-row">
          <label>${yt(t,"layout")}</label>
          <select .value=${this._config.layout} @change=${this._layoutChanged}>
            <option value="table" ?selected=${"table"===this._config.layout}>${yt(t,"table_layout")}</option>
            <option value="compact" ?selected=${"compact"===this._config.layout}>${yt(t,"compact_layout")}</option>
            <option value="trip" ?selected=${"trip"===this._config.layout}>${yt(t,"trip_layout")}</option>
            <option value="next" ?selected=${"next"===this._config.layout}>${yt(t,"next_layout")}</option>
          </select>
        </div>

        <div class="config-row">
          <label>${yt(t,"theme")}</label>
          <select .value=${this._config.theme} @change=${this._themeChanged}>
            <option value="auto" ?selected=${"auto"===this._config.theme}>Auto</option>
            <option value="dark" ?selected=${"dark"===this._config.theme}>Dark</option>
            <option value="light" ?selected=${"light"===this._config.theme}>Light</option>
          </select>
        </div>

        <div class="config-row">
          <label>${yt(t,"max_departures")}</label>
          <ha-textfield
            type="number"
            .value=${String(this._config.max_departures)}
            min="1"
            max="50"
            @change=${this._maxDeparturesChanged}
          ></ha-textfield>
        </div>

        <div class="section-title">${yt(t,"display_options")}</div>

        <div class="toggle-row">
          <label>${yt(t,"show_header")}</label>
          <ha-switch
            .checked=${this._config.show_header}
            @change=${this._toggleChanged("show_header")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>${yt(t,"show_platform")}</label>
          <ha-switch
            .checked=${this._config.show_platform}
            @change=${this._toggleChanged("show_platform")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>${yt(t,"show_delay")}</label>
          <ha-switch
            .checked=${this._config.show_delay}
            @change=${this._toggleChanged("show_delay")}
          ></ha-switch>
        </div>

        <div class="toggle-row">
          <label>${yt(t,"show_realtime")}</label>
          <ha-switch
            .checked=${this._config.show_realtime_indicator}
            @change=${this._toggleChanged("show_realtime_indicator")}
          ></ha-switch>
        </div>

        <div class="section-title">${yt(t,"line_filter")}</div>
        <div class="config-row">
          <ha-textfield
            type="text"
            .value=${this._config.line_filter||""}
            placeholder="U6, S1, RE5"
            helper=${yt(t,"line_filter_hint")}
            @change=${t=>{this._config&&(this._config={...this._config,line_filter:t.target.value},this._fireConfigChanged())}}
            style="width:100%"
          ></ha-textfield>
        </div>

        <div class="section-title">${yt(t,"destination_filter")}</div>
        <div class="config-row">
          <ha-textfield
            type="text"
            .value=${this._config.destination_filter||""}
            placeholder="Duisburg, Flughafen"
            helper=${yt(t,"destination_filter_hint")}
            @change=${t=>{this._config&&(this._config={...this._config,destination_filter:t.target.value},this._fireConfigChanged())}}
            style="width:100%"
          ></ha-textfield>
        </div>
      </div>
    `}};At.styles=s`
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
  `,t([ht({attribute:!1})],At.prototype,"hass",void 0),t([ut()],At.prototype,"_config",void 0),At=t([pt("openpublictransport-card-editor")],At),console.info("%c OPENPUBLICTRANSPORT-CARD %c v1.6.1 ","color: #ffd700; background: #1a1a1a; font-weight: bold; padding: 2px 4px;","color: #1a1a1a; background: #ffd700; font-weight: bold; padding: 2px 4px;");let Ct=class extends ot{static getConfigElement(){return document.createElement("openpublictransport-card-editor")}static getStubConfig(){return{entity:"",...ft}}setConfig(t){if(!t.entity)throw new Error(yt("en","please_define_entity"));this._config={...ft,...t}}getCardSize(){if(!this._config)return 3;switch(this._config.layout){case"compact":case"next":return 2;case"trip":return 5;default:return Math.min(2+(this._config.max_departures||10),12)}}getGridOptions(){return{rows:this.getCardSize(),min_rows:2,columns:12}}connectedCallback(){super.connectedCallback(),this._timeInterval=setInterval(()=>{this.requestUpdate()},1e4)}disconnectedCallback(){super.disconnectedCallback(),this._timeInterval&&(clearInterval(this._timeInterval),this._timeInterval=void 0)}updated(t){super.updated(t),this._applyTheme()}_applyTheme(){if(!this._config)return;let t=this._config.theme;"auto"===t&&(t=this.hass?.themes?.darkMode?"dark":"light"),this.setAttribute("data-theme",t)}_getDepartures(){if(!this.hass||!this._config)return[];const t=this.hass.states[this._config.entity];if(!t)return[];const e=t.attributes.departures;if(!Array.isArray(e))return[];let i=e;const n=(this._config.line_filter||"").trim();if(n){const t=n.split(",").map(t=>t.trim().toLowerCase()).filter(Boolean);i=i.filter(e=>t.some(t=>e.line.toLowerCase()===t))}const a=(this._config.destination_filter||"").trim();if(a){const t=a.split(",").map(t=>t.trim().toLowerCase()).filter(Boolean);i=i.filter(e=>t.some(t=>(e.destination||"").toLowerCase().includes(t)))}return i}_getTripData(){if(!this.hass||!this._config)return null;const t=this.hass.states[this._config.entity];if(!t)return null;const e=t.attributes;return e.departure&&e.legs?{departure:e.departure,arrival:e.arrival,duration_minutes:e.duration_minutes,transfers:e.transfers,connection_feasible:e.connection_feasible,transfer_risk:e.transfer_risk,min_transfer_time:e.min_transfer_time,legs:e.legs,next_journeys:e.next_journeys}:null}_getStationName(){if(!this.hass||!this._config)return"";const t=this.hass.states[this._config.entity];return t?t.attributes.friendly_name||t.attributes.station_name||t.entity_id:""}_renderError(t){return V`
      <ha-card>
        <div class="card-error">
          <ha-icon icon="mdi:alert-circle"></ha-icon>
          <div>${t}</div>
        </div>
      </ha-card>
    `}render(){if(!this._config||!this.hass)return q;const t=this.hass.states[this._config.entity];return t?"unavailable"===t.state?this._renderError(yt(this.hass.language,"entity_unavailable")):V`
      <ha-card>
        ${this._renderLayout()}
      </ha-card>
    `:this._renderError(`Entity not found: ${this._config.entity}`)}_renderLayout(){switch(this._config.layout){case"compact":return V`
          <openpublictransport-compact-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${this._getDepartures()}
            .stationName=${this._getStationName()}
          ></openpublictransport-compact-layout>
        `;case"trip":return V`
          <openpublictransport-trip-layout
            .hass=${this.hass}
            .config=${this._config}
            .trip=${this._getTripData()}
          ></openpublictransport-trip-layout>
        `;case"next":return V`
          <openpublictransport-next-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${this._getDepartures()}
            .stationName=${this._getStationName()}
          ></openpublictransport-next-layout>
        `;default:return V`
          <openpublictransport-table-layout
            .hass=${this.hass}
            .config=${this._config}
            .departures=${this._getDepartures()}
            .stationName=${this._getStationName()}
          ></openpublictransport-table-layout>
        `}}};Ct.styles=gt,t([ht({attribute:!1})],Ct.prototype,"hass",void 0),t([ut()],Ct.prototype,"_config",void 0),t([ut()],Ct.prototype,"_timeInterval",void 0),Ct=t([pt("openpublictransport-card")],Ct);const Et=window;Et.customCards=Et.customCards||[],Et.customCards.push({type:"openpublictransport-card",name:"Public Transport Departures",description:"Display public transport departures in table, compact, or trip layout",preview:!0,getEntitySuggestion:function(t,e){const[i]=e.split(".");if("sensor"!==i)return null;const n=t.states[e];if(!n)return null;const a=n.attributes,r=Array.isArray(a.departures),s=Boolean(a.departure)&&Array.isArray(a.legs);if(!r&&!s)return null;const o=[];return r&&(o.push({label:"Table layout",config:{type:"custom:openpublictransport-card",entity:e,layout:"table"}}),o.push({label:"Compact layout",config:{type:"custom:openpublictransport-card",entity:e,layout:"compact",max_departures:6}}),o.push({label:"Next departure",config:{type:"custom:openpublictransport-card",entity:e,layout:"next"}})),s&&o.push({label:"Trip layout",config:{type:"custom:openpublictransport-card",entity:e,layout:"trip"}}),1===o.length?o[0]:o}});export{Ct as OpenpublictransportCard};
