import{r as ea,n as ra,b9 as da,D as s,v as r,j as d,G as sa,b as i}from"./index.a62a33f4.js";/**
 * tdesign v0.45.6
 * (c) 2023 tdesign
 * @license MIT
 */var ca={bordered:!0,headerBordered:!1,hoverShadow:!1,loading:!1,shadow:!1,size:"medium",theme:"normal"};/**
 * tdesign v0.45.6
 * (c) 2023 tdesign
 * @license MIT
 */var w=ea.exports.forwardRef(function(a,P){var c,o,l=a.actions,v=a.avatar,S=a.bordered,u=a.children,H=a.className,t=a.cover,h=a.description,f=a.footer,N=a.header,j=a.headerBordered,z=a.hoverShadow,A=a.loading,B=a.shadow,D=a.size,F=a.style,m=a.subtitle,_=a.title,E=a.theme,C=a.status,G=ra(),e=G.classPrefix,I=da(),n=E==="poster2",L=s("".concat(e,"-card"),H,(c={},r(c,I.SIZE.small,D==="small"),r(c,"".concat(e,"-card--bordered"),S),r(c,"".concat(e,"-card--shadow"),B),r(c,"".concat(e,"-card--shadow-hover"),z),c)),g=N||_||m||h||v||l&&!n||C&&n,y=s((o={},r(o,"".concat(e,"-card__header"),g),r(o,"".concat(e,"-card__title--bordered"),j),o)),R=s(r({},"".concat(e,"-card__title"),_)),T=s(r({},"".concat(e,"-card__subtitle"),m)),b=s(r({},"".concat(e,"-card__actions"),l)),Z=s(r({},"".concat(e,"-card__footer"),f)),$=s(r({},"".concat(e,"-card__cover"),t)),k=s(r({},"".concat(e,"-card__avatar"),v)),q=s(r({},"".concat(e,"-card__body"),u)),J=s(r({},"".concat(e,"-card__description"),h)),K=_?d("span",{className:R,children:_}):null,M=m?d("span",{className:T,children:m}):null,O=h?d("p",{className:J,children:h}):null,Q=v&&d("div",{className:k,children:v}),U=l&&!n&&d("div",{className:b,children:l}),V=l&&n&&d("div",{className:b,children:l}),W=C&&n&&d("div",{className:b,children:C}),X=function(){return N?d("div",{className:y,children:N}):i("div",{className:y,children:[i("div",{className:"".concat(e,"-card__header-wrapper"),children:[Q,i("div",{children:[K,M,O]})]}),U,W]})},Y=t?d("div",{className:$,children:typeof t=="string"?d("img",{src:t,alt:""}):t}):null,p=u&&d("div",{className:q,children:u}),aa=f&&i("div",{className:Z,children:[d("div",{className:"".concat(e,"-card__footer-wrapper"),children:f}),V]}),x=i("div",{ref:P,className:L,style:F,children:[g?X():null,Y,p,aa]});return A?d(sa,{children:x}):x});w.displayName="Card";w.defaultProps=ca;/**
 * tdesign v0.45.6
 * (c) 2023 tdesign
 * @license MIT
 */var na=w;export{na as C};
