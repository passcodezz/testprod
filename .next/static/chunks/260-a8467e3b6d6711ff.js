(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[260],{9260:function(a,b,c){!function(a,d){d(b,c(1248),c(7294))}(this,function(a,b,c){"use strict";function d(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}var e=d(b),f=d(c);function g(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function h(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?g(Object(c),!0).forEach(function(b){i(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):g(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function i(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function j(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function k(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var l=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],m=function(a,b){var d=a.animationData,g=a.loop,i=a.autoplay,m=a.initialSegment,n=a.onComplete,o=a.onLoopComplete,p=a.onEnterFrame,q=a.onSegmentStart,r=a.onConfigReady,s=a.onDataReady,t=a.onDataFailed,u=a.onLoadedImages,v=a.onDOMLoaded,w=a.onDestroy;a.lottieRef,a.renderer,a.name,a.assetsPath,a.rendererSettings;var x,y,z=j(a,l),A=c.useState(!1),B=(y=2,function a(b){if(Array.isArray(b))return b}(x=A)||function a(b,c){var d,e,f=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=f){var g=[],h=!0,i=!1;try{for(f=f.call(b);!(h=(d=f.next()).done)&&(g.push(d.value),!c||g.length!==c);h=!0);}catch(j){i=!0,e=j}finally{try{h||null==f.return||f.return()}finally{if(i)throw e}}return g}}(x,y)||function a(b,c){if(b){if("string"==typeof b)return k(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(b);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return k(b,c)}}(x,y)||function a(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),C=B[0],D=B[1],E=c.useRef(),F=c.useRef(null),G=function(){var a;null===(a=E.current)|| void 0===a||a.play()},H=function(){var a;null===(a=E.current)|| void 0===a||a.stop()},I=function(){var a;null===(a=E.current)|| void 0===a||a.pause()},J=function(a){var b;null===(b=E.current)|| void 0===b||b.setSpeed(a)},K=function(a,b){var c;null===(c=E.current)|| void 0===c||c.goToAndPlay(a,b)},L=function(a,b){var c;null===(c=E.current)|| void 0===c||c.goToAndStop(a,b)},M=function(a){var b;null===(b=E.current)|| void 0===b||b.setDirection(a)},N=function(a,b){var c;null===(c=E.current)|| void 0===c||c.playSegments(a,b)},O=function(a){var b;null===(b=E.current)|| void 0===b||b.setSubframe(a)},P=function(a){var b;return null===(b=E.current)|| void 0===b?void 0:b.getDuration(a)},Q=function(){var a;null===(a=E.current)|| void 0===a||a.destroy(),E.current=void 0},R=function(){var b,c=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};if(F.current){null===(b=E.current)|| void 0===b||b.destroy();var d=h(h(h({},a),c),{},{container:F.current});return E.current=e.default.loadAnimation(d),D(!!E.current),function(){var a;null===(a=E.current)|| void 0===a||a.destroy(),E.current=void 0}}};c.useEffect(function(){var a=R();return function(){return null==a?void 0:a()}},[d,g]),c.useEffect(function(){E.current&&(E.current.autoplay=!!i)},[i]),c.useEffect(function(){if(E.current){if(!m){E.current.resetSegments(!0);return}Array.isArray(m)&&m.length&&((E.current.currentRawFrame<m[0]||E.current.currentRawFrame>m[1])&&(E.current.currentRawFrame=m[0]),E.current.setSegment(m[0],m[1]))}},[m]),c.useEffect(function(){var a=[{name:"complete",handler:n},{name:"loopComplete",handler:o},{name:"enterFrame",handler:p},{name:"segmentStart",handler:q},{name:"config_ready",handler:r},{name:"data_ready",handler:s},{name:"data_failed",handler:t},{name:"loaded_images",handler:u},{name:"DOMLoaded",handler:v},{name:"destroy",handler:w}].filter(function(a){return null!=a.handler});if(a.length){var b=a.map(function(a){var b;return null===(b=E.current)|| void 0===b||b.addEventListener(a.name,a.handler),function(){var b;null===(b=E.current)|| void 0===b||b.removeEventListener(a.name,a.handler)}});return function(){b.forEach(function(a){return a()})}}},[n,o,p,q,r,s,t,u,v,w]);var S=f.default.createElement("div",h({style:b,ref:F},z));return{View:S,play:G,stop:H,pause:I,setSpeed:J,goToAndStop:L,goToAndPlay:K,setDirection:M,playSegments:N,setSubframe:O,getDuration:P,destroy:Q,animationContainerRef:F,animationLoaded:C,animationItem:E.current}},n=function(a){var b=a.wrapperRef,d=a.animationItem,e=a.mode,f=a.actions;c.useEffect(function(){var a,c,g,h,i,j=b.current;if(j&&d&&f.length)switch(d.stop(),e){case"scroll":return a=null,c=function(){var b,c,e,g,h,i,k=(e=(c=(b=j).getBoundingClientRect()).top,g=c.height,h=window.innerHeight-e,i=window.innerHeight+g,h/i),l=f.find(function(a){var b=a.visibility;return b&&k>=b[0]&&k<=b[1]});if(l){if("seek"===l.type&&l.visibility&&2===l.frames.length){var m=l.frames[0]+Math.ceil((k-l.visibility[0])/(l.visibility[1]-l.visibility[0])*l.frames[1]); //! goToAndStop must be relative to the start of the current segment
d.goToAndStop(m-d.firstFrame-1,!0)}"loop"===l.type&&(null===a?(d.playSegments(l.frames,!0),a=l.frames):a!==l.frames?(d.playSegments(l.frames,!0),a=l.frames):d.isPaused&&(d.playSegments(l.frames,!0),a=l.frames)),"play"===l.type&&d.isPaused&&(d.resetSegments(!0),d.play()),"stop"===l.type&&d.goToAndStop(l.frames[0]-d.firstFrame-1,!0)}},document.addEventListener("scroll",c),function(){document.removeEventListener("scroll",c)};case"cursor":return g=function(a,b){var c=a,e=b;if(-1!==c&& -1!==e){var g,h,i,k,l,m,n,o,p=(g=j,h=c,i=e,l=(k=g.getBoundingClientRect()).top,m=k.left,n=k.width,o=k.height,{x:(h-m)/n,y:(i-l)/o});c=p.x,e=p.y}var q=f.find(function(a){var b=a.position;return b&&Array.isArray(b.x)&&Array.isArray(b.y)?c>=b.x[0]&&c<=b.x[1]&&e>=b.y[0]&&e<=b.y[1]:!(!b||Number.isNaN(b.x)||Number.isNaN(b.y))&&c===b.x&&e===b.y});if(q){if("seek"===q.type&&q.position&&Array.isArray(q.position.x)&&Array.isArray(q.position.y)&&2===q.frames.length){var r=(c-q.position.x[0])/(q.position.x[1]-q.position.x[0]),s=(e-q.position.y[0])/(q.position.y[1]-q.position.y[0]);d.playSegments(q.frames,!0),d.goToAndStop(Math.ceil((r+s)/2*(q.frames[1]-q.frames[0])),!0)}"loop"===q.type&&d.playSegments(q.frames,!0),"play"===q.type&&(d.isPaused&&d.resetSegments(!1),d.playSegments(q.frames)),"stop"===q.type&&d.goToAndStop(q.frames[0],!0)}},h=function(a){g(a.clientX,a.clientY)},i=function(){g(-1,-1)},j.addEventListener("mousemove",h),j.addEventListener("mouseout",i),function(){j.removeEventListener("mousemove",h),j.removeEventListener("mouseout",i)}}},[e,d])},o=function(a){var b=a.actions,c=a.mode,d=a.lottieObj,e=d.animationItem,f=d.View,g=d.animationContainerRef;return n({actions:b,animationItem:e,mode:c,wrapperRef:g}),f},p=["style","interactivity"],q=function(a){var b,d,e,f=a.style,g=a.interactivity,h=j(a,p),i=m(h,f),k=i.View,l=i.play,n=i.stop,q=i.pause,r=i.setSpeed,s=i.goToAndStop,t=i.goToAndPlay,u=i.setDirection,v=i.playSegments,w=i.setSubframe,x=i.getDuration,y=i.destroy,z=i.animationContainerRef,A=i.animationLoaded,B=i.animationItem;return c.useEffect(function(){a.lottieRef&&(a.lottieRef.current={play:l,stop:n,pause:q,setSpeed:r,goToAndPlay:t,goToAndStop:s,setDirection:u,playSegments:v,setSubframe:w,getDuration:x,destroy:y,animationContainerRef:z,animationLoaded:A,animationItem:B})},[null===(b=a.lottieRef)|| void 0===b?void 0:b.current]),o({lottieObj:{View:k,play:l,stop:n,pause:q,setSpeed:r,goToAndStop:s,goToAndPlay:t,setDirection:u,playSegments:v,setSubframe:w,getDuration:x,destroy:y,animationContainerRef:z,animationLoaded:A,animationItem:B},actions:null!==(d=null==g?void 0:g.actions)&& void 0!==d?d:[],mode:null!==(e=null==g?void 0:g.mode)&& void 0!==e?e:"scroll"})};Object.defineProperty(a,"LottiePlayer",{enumerable:!0,get:function(){return e.default}}),a.default=q,a.useLottie=m,a.useLottieInteractivity=o,Object.defineProperty(a,"__esModule",{value:!0})})}}])