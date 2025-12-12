import{r as t,E as v}from"./index.1224b00a.js";/**
 * tdesign v0.45.6
 * (c) 2023 tdesign
 * @license MIT
 */function a(r,u){var e=null,s=function(){!e||(e.unobserve(r),v(e.disconnect)&&e.disconnect(),e=null)},i=function(o){e=new ResizeObserver(u),e.observe(o)};t.exports.useLayoutEffect(function(){var n=window&&window.ResizeObserver;if(!!n)return s(),r&&i(r),function(){s()}},[r,e])}export{a as u};
