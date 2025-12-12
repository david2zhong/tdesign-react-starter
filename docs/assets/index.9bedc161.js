import{r as C,n as N,j as c,D as h,b as g,as as J,o as K,p as O,am as Q,R as s,v as n,G as U,ao as T}from"./index.1224b00a.js";/**
 * tdesign v0.45.6
 * (c) 2023 tdesign
 * @license MIT
 */var M=C.exports.forwardRef(function(e,v){var i=e.children,t=e.className,o=e.style,r=e.action,a=e.content,d=N(),m=d.classPrefix,_=r&&c("ul",{className:"".concat(m,"-list-item__action"),children:r});return c("li",{ref:v,className:h("".concat(m,"-list-item"),t),style:o,children:g("div",{className:"".concat(m,"-list-item-main"),children:[i||a,_]})})});M.displayName="ListItem";/**
 * tdesign v0.45.6
 * (c) 2023 tdesign
 * @license MIT
 */var z=C.exports.forwardRef(function(e,v){var i=e.title,t=e.image,o=e.description,r=N(),a=r.classPrefix,d=function(){return t&&typeof t=="string"?c("div",{className:"".concat(a,"-list-item__meta-avatar"),children:c("img",{src:t,alt:""})}):c("div",{className:"".concat(a,"-list-item__meta-avatar"),children:t})};return g("div",{ref:v,className:"".concat(a,"-list-item__meta"),children:[t&&d(),g("div",{className:"".concat(a,"-list-item__meta-content"),children:[c("h3",{className:"".concat(a,"-list-item__meta-title"),children:i}),c("div",{className:"".concat(a,"-list-item__meta-description"),children:c("p",{children:o})})]})]})});z.displayName="ListItemMeta";/**
 * tdesign v0.45.6
 * (c) 2023 tdesign
 * @license MIT
 */var V={layout:"horizontal",size:"medium",split:!1,stripe:!1};/**
 * tdesign v0.45.6
 * (c) 2023 tdesign
 * @license MIT
 */var L=J(function(e,v){var i,t,o=e.header,r=e.footer,a=e.asyncLoading,d=e.size,m=e.split,_=e.stripe,I=e.layout,H=e.children,j=e.className,y=e.onLoadMore,k=y===void 0?T:y,x=e.onScroll,w=x===void 0?T:x,A=e.style,$=N(),l=$.classPrefix,B=K("list"),E=O(B,2),P=E[0],R=E[1],D=function(f){a==="load-more"&&k({e:f})},b=function(f){var u=f.currentTarget,S=u.scrollTop,p=u.offsetHeight,q=u.scrollHeight,F=q-S-p;w({e:f,scrollTop:S,scrollBottom:F})},G=Q(a)?s.createElement("div",{className:h("".concat(l,"-list__load"),(i={},n(i,"".concat(l,"-list__load--loading"),a==="loading"),n(i,"".concat(l,"-list__load--load-more"),a==="load-more"),i)),onClick:D},a==="loading"&&s.createElement("div",null,s.createElement(U,{loading:!0}),s.createElement("span",null,R(P.loadingText))),a==="load-more"&&s.createElement("span",null,R(P.loadingMoreText))):a;return s.createElement("div",{ref:v,style:A,onScroll:b,className:h("".concat(l,"-list"),j,(t={},n(t,"".concat(l,"-list--split"),m),n(t,"".concat(l,"-list--stripe"),_),n(t,"".concat(l,"-list--vertical-action"),I==="vertical"),n(t,"".concat(l,"-size-s"),d==="small"),n(t,"".concat(l,"-size-l"),d==="large"),t))},o&&s.createElement("div",{className:"".concat(l,"-list__header")},o),s.createElement("ul",{className:"".concat(l,"-list__inner")},H),a&&G,r&&s.createElement("div",{className:"".concat(l,"-list__footer")},r))},{ListItem:M,ListItemMeta:z});L.displayName="List";L.defaultProps=V;/**
 * tdesign v0.45.6
 * (c) 2023 tdesign
 * @license MIT
 */var Y=L;export{Y as L};
