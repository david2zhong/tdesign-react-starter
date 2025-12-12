import{bx as _e,r as o,a6 as Oe,q as Se,p as N,by as we,aJ as ee,ah as z,n as je,v as x,D as I,b as L,j as te,ao as A,bz as Pe}from"./index.a62a33f4.js";/**
 * tdesign v0.45.6
 * (c) 2023 tdesign
 * @license MIT
 */var Te=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`,d;function ae(e){var i,n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;d||(d=document.createElement("textarea"),document.body.appendChild(d));var u=_e(e),s=u.paddingSize,O=u.borderSize,w=u.boxSizing,R=u.sizingStyle;d.setAttribute("style","".concat(R,";").concat(Te)),d.value=e.value||e.placeholder||"";var v=d.scrollHeight,g={},j=w==="border-box",P=w==="content-box";j?v+=O:P&&(v-=s),d.value="";var E=d.scrollHeight-s;(i=d)===null||i===void 0||(n=i.parentNode)===null||n===void 0||n.removeChild(d),d=null;var S=function(h){var y=E*h;return j&&(y=y+s+O),y};if(r!==null){var T=S(r);v=Math.max(T,v),g.minHeight="".concat(T,"px")}return m!==null&&(v=Math.min(S(m),v)),g.height="".concat(v,"px"),g}/**
 * tdesign v0.45.6
 * (c) 2023 tdesign
 * @license MIT
 */var Ce={allowInputOverMax:!1,autofocus:!1,autosize:!1,placeholder:void 0,readonly:!1};/**
 * tdesign v0.45.6
 * (c) 2023 tdesign
 * @license MIT
 */var Ke=["disabled","maxlength","maxcharacter","className","readonly","autofocus","style","onKeydown","onKeypress","onKeyup","autosize","status","tips","allowInputOverMax"];function ne(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?ne(Object(n),!0).forEach(function(r){x(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var F=o.exports.forwardRef(function(e,i){var n,r,m=e.disabled,u=e.maxlength,s=e.maxcharacter,O=e.className,w=e.readonly,R=e.autofocus,v=e.style,g=e.onKeydown,j=g===void 0?A:g,P=e.onKeypress,E=P===void 0?A:P,S=e.onKeyup,T=S===void 0?A:S,c=e.autosize,h=e.status,y=e.tips,b=e.allowInputOverMax,U=Oe(e,Ke),re=Se(e,"value",e.onChange),B=N(re,2),V=B[0],_=V===void 0?"":V,oe=B[1],se=o.exports.useState(!1),Z=N(se,2),ie=Z[0],q=Z[1],ce=o.exports.useState(!1),J=N(ce,2),ue=J[0],le=J[1],de=o.exports.useState({}),W=N(de,2),fe=W[0],H=W[1],C=o.exports.useRef(!1),X=typeof s!="undefined",p=o.exports.useRef(),Y=o.exports.useRef(),M=o.exports.useMemo(function(){return we(_)},[_]),D=o.exports.useMemo(function(){var t=ee(String(_),b?1/0:s);return z(t)==="object"?t.length:t},[_,b,s]),ve=je(),l=ve.classPrefix,xe=Object.keys(U).filter(function(t){return!/^on[A-Z]/.test(t)}),me=xe.reduce(function(t,a){return Object.assign(t,x({},a,e[a]))},{}),he=Object.keys(U).filter(function(t){return/^on[A-Z]/.test(t)}),pe=he.reduce(function(t,a){return Object.assign(t,x({},a,function(f){m||(a==="onFocus"&&q(!0),a==="onBlur"&&q(!1),e[a](f.currentTarget.value,{e:f}))})),t},{}),ge=I("".concat(l,"-textarea__inner"),O,(n={},x(n,"".concat(l,"-is-").concat(h),h),x(n,"".concat(l,"-is-disabled"),m),x(n,"".concat(l,"-is-focused"),ie),x(n,"".concat(l,"-resize-none"),z(c)==="object"),n)),K=o.exports.useCallback(function(){c===!0?H(ae(p.current)):z(c)==="object"&&H(ae(p.current,c==null?void 0:c.minRows,c==null?void 0:c.maxRows))},[c]);o.exports.useEffect(function(){K()},[p==null?void 0:p.current]);function G(t){var a=t.target,f=a.value;if(!b&&!C.current&&(f=Pe(f,u),s&&s>=0)){var k=ee(f,s);f=z(k)==="object"&&k.characters}oe(f,{e:t})}function ye(){C.current=!0}function be(t){C.current&&(C.current=!1,G(t))}var Q=function(a,f){return L("span",{className:"".concat(l,"-textarea__limit"),children:[ue&&b?L("span",{className:"".concat(l,"-textarea__tips--warning"),children:[" ",a]}):"".concat(a),"/".concat(f)]})};return o.exports.useEffect(function(){c===!1&&H({height:"auto",minHeight:"auto"})},[K,c]),o.exports.useEffect(function(){K()},[K,_]),o.exports.useEffect(function(){b&&le(!!(u&&M>u)||!!(s&&D>s))},[b,D,M,s,u]),o.exports.useImperativeHandle(i,function(){return{currentElement:Y.current,textareaElement:p.current}}),L("div",{style:v,ref:Y,className:I("".concat(l,"-textarea"),O),children:[te("textarea",{...$($($({},me),pe),{},{value:_,style:fe,className:ge,readOnly:w,autoFocus:R,disabled:m,onChange:G,onKeyDown:function(a){return j(a.currentTarget.value,{e:a})},onKeyPress:function(a){return E(a.currentTarget.value,{e:a})},onKeyUp:function(a){return T(a.currentTarget.value,{e:a})},onCompositionStart:ye,onCompositionEnd:be,ref:p})}),X&&Q(D,s),!X&&u&&Q(M,u),y?te("div",{className:I("".concat(l,"-textarea__tips"),(r={},x(r,"".concat(l,"-textarea__tips--normal"),!h),x(r,"".concat(l,"-textarea__tips--").concat(h),h),r)),children:y}):null]})});F.displayName="Textarea";F.defaultProps=Ce;/**
 * tdesign v0.45.6
 * (c) 2023 tdesign
 * @license MIT
 */var ze=F;export{ze as T};
