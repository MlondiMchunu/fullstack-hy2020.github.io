/*! For license information please see 08f5b09e92a9f33f93799e273301d7a42014ec3a-f74327b53e6fcb226fdd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},8113:function(e,t,n){},"9rSQ":function(e,t,n){"use strict";var a=n("xTJ+");function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){a.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},BEtg:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},CgaS:function(e,t,n){"use strict";var a=n("JEQr"),r=n("xTJ+"),o=n("9rSQ"),s=n("UnBK");function i(e){this.defaults=e,this.interceptors={request:new o,response:new o}}i.prototype.request=function(e){"string"==typeof e&&(e=r.merge({url:arguments[0]},arguments[1])),(e=r.merge(a,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},r.forEach(["delete","get","head","options"],(function(e){i.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){i.prototype[e]=function(t,n,a){return this.request(r.merge(a||{},{method:e,url:t,data:n}))}})),e.exports=i},CxgS:function(e,t,n){var a={"./app_gyver.svg":"3RtT","./blok.svg":"vbz4","./bonsky_digital.svg":"R52J","./bubblin.svg":"h/k6","./cinia.svg":"HcMi","./circles.svg":"198t","./codento.svg":"6QPu","./compile.svg":"SoB4","./eficode.svg":"GofF","./elisa.svg":"FOkN","./emblica.svg":"MG3U","./futurice.svg":"rc7y","./g_works.svg":"4jT8","./geometrix.svg":"0Yh9","./gofore.svg":"cP6v","./hiq.svg":"wtsH","./houston.png":"KGvF","./houston.svg":"98iT","./houston2.svg":"mZVF","./ilmatieteenlaitos.svg":"iv/R","./integrify.svg":"ZeDQ","./kela.svg":"Fmie","./kesko.svg":"pWwX","./kodan.svg":"WSZS","./konecranes.svg":"vf9u","./motley.svg":"GwXG","./neemia.svg":"j7GV","./netyourself.svg":"TAJx","./nextup.svg":"irX6","./nordcloud.svg":"P5/b","./nortal_oy.svg":"usXl","./nurse_buddy.svg":"ltN3","./omnia.svg":"JdcT","./perfektio.svg":"oCIo","./plan_brothers.svg":"T0Q2","./platonic_partnership.svg":"GrMt","./pori.svg":"YoUk","./relex.svg":"b17o","./rentle.svg":"U/i3","./resilient_e.svg":"yAPE","./siili.svg":"7W+i","./smartly_io.svg":"B5K9","./sympa.svg":"vcdg","./tabella.svg":"+fIx","./taito_united.svg":"m0Xi","./telia.svg":"fCc7","./terveystalo.svg":"vnHe","./tietotalo.svg":"Ua5r","./tivia.svg":"4ezL","./umbrella_interactive.svg":"4LAG","./unity-scaled.svg":"QVuv","./unity.svg":"rwfy","./uoh_centre.svg":"0Yyr","./uoh_left-align.svg":"uclQ","./up_cloud.svg":"uoQp","./vero.svg":"IjjB","./vincit.svg":"LxhF","./visma.svg":"XOPh","./webscale.svg":"0GAh","./wolt.svg":"zhfB","./wunderdog.svg":"iXs1","./zaibatsu.svg":"htzA"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="CxgS"},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}}},IxoE:function(e,t,n){var a={"./app_gyver.svg":"3RtT","./blok.svg":"vbz4","./bonsky_digital.svg":"R52J","./bubblin.svg":"h/k6","./cinia.svg":"HcMi","./circles.svg":"198t","./codento.svg":"6QPu","./compile.svg":"SoB4","./eficode.svg":"GofF","./elisa.svg":"FOkN","./emblica.svg":"MG3U","./futurice.svg":"rc7y","./g_works.svg":"4jT8","./geometrix.svg":"0Yh9","./gofore.svg":"cP6v","./hiq.svg":"wtsH","./houston.svg":"98iT","./houston2.svg":"mZVF","./ilmatieteenlaitos.svg":"iv/R","./integrify.svg":"ZeDQ","./kela.svg":"Fmie","./kesko.svg":"pWwX","./kodan.svg":"WSZS","./konecranes.svg":"vf9u","./motley.svg":"GwXG","./neemia.svg":"j7GV","./netyourself.svg":"TAJx","./nextup.svg":"irX6","./nordcloud.svg":"P5/b","./nortal_oy.svg":"usXl","./nurse_buddy.svg":"ltN3","./omnia.svg":"JdcT","./perfektio.svg":"oCIo","./plan_brothers.svg":"T0Q2","./platonic_partnership.svg":"GrMt","./pori.svg":"YoUk","./relex.svg":"b17o","./rentle.svg":"U/i3","./resilient_e.svg":"yAPE","./siili.svg":"7W+i","./smartly_io.svg":"B5K9","./sympa.svg":"vcdg","./tabella.svg":"+fIx","./taito_united.svg":"m0Xi","./telia.svg":"fCc7","./terveystalo.svg":"vnHe","./tietotalo.svg":"Ua5r","./tivia.svg":"4ezL","./umbrella_interactive.svg":"4LAG","./unity-scaled.svg":"QVuv","./unity.svg":"rwfy","./uoh_centre.svg":"0Yyr","./uoh_left-align.svg":"uclQ","./up_cloud.svg":"uoQp","./vero.svg":"IjjB","./vincit.svg":"LxhF","./visma.svg":"XOPh","./webscale.svg":"0GAh","./wolt.svg":"zhfB","./wunderdog.svg":"iXs1","./zaibatsu.svg":"htzA"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="IxoE"},JEQr:function(e,t,n){"use strict";(function(t){var a=n("xTJ+"),r=n("yK9s"),o={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!a.isUndefined(e)&&a.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t)&&(i=n("tQ2B")),i),transformRequest:[function(e,t){return r(t,"Content-Type"),a.isFormData(e)||a.isArrayBuffer(e)||a.isBuffer(e)||a.isStream(e)||a.isFile(e)||a.isBlob(e)?e:a.isArrayBufferView(e)?e.buffer:a.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):a.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},a.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),a.forEach(["post","put","patch"],(function(e){c.headers[e]=a.merge(o)})),e.exports=c}).call(this,n("8oxB"))},K4iA:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("RBN/");var a=n("q1tI"),r=n.n(a);const o=e=>{let{className:t,headingLevel:n="h2",headingFontSize:a,text:o,...s}=e;const i=n;return r.a.createElement(i,Object.assign({className:"sub-header "+t,style:a?{fontSize:a}:{}},s),o)};o.defaultProps={className:""}},LYNF:function(e,t,n){"use strict";var a=n("OH9c");e.exports=function(e,t,n,r,o){var s=new Error(e);return a(s,t,n,r,o)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var a=n("xTJ+");function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(a.isURLSearchParams(t))o=t.toString();else{var s=[];a.forEach(t,(function(e,t){null!=e&&(a.isArray(e)?t+="[]":e=[e],a.forEach(e,(function(e){a.isDate(e)?e=e.toISOString():a.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))})))})),o=s.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},NVOO:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n("8113");var a=n("mt4B"),r=n("gcgQ"),o=n("ykJU"),s=n("jsr+"),i=n("AxK6"),c=n("Wbzz"),l=n("q1tI"),u=n.n(l),f=n("c7NW"),p=n.n(f),g=n("9Koi"),m=n("UX5x");const h=[{image:{name:"uoh_centre.svg",alt:"Helsingin yliopisto"},url:"https://www.helsinki.fi/"},{image:{name:"houston2.svg",alt:"Houston inc."},url:"https://www.houston-inc.com/careers"},{image:{name:"terveystalo.svg",alt:"Terveystalo"},url:"https://www.terveystalo.com/"},{image:{name:"elisa.svg",alt:"Elisa"},url:"https://corporate.elisa.fi/rekrytointi/"},{image:{name:"unity.svg",alt:"Unity"},url:"https://www.instagram.com/unitytechnologies/?hl=en"},{image:{name:"konecranes.svg",alt:"Konecranes"},url:"https://careers.konecranes.com/Konecranes/"},{image:{name:"smartly_io.svg",alt:"Smartly"},url:"https://www.smartly.io/careers/"}],d=["Tivia","Relex","Smartly.io","Eficode","Sympa","Cinia","AppGyver","Codento","Taito united","Emblica","Kodan","UpCloud","Perfektio","Blok","G-Works","Webscale","Siili","Ilmatieteenlaitos","Futurice","Visma","Platonic Partnership","Omnia","Tietotalo","Circles","Nordcloud","Wunderdog","Gofore","Nortal Oy","NurseBuddy","Wolt","Pori","Motley","Bonsky Digital","Plan Brothers","Integrify","Rentle","Compile","Telia","Umbrella Interactive","Tabella","Nextup","Kela","Geometrix","Netyourself","Vincit","Vero","Hiq","Resilient E","Neemia","Bubblin","Zaibatsu"],v=e=>{let{isFrontPage:t,lang:l}=e;const{t:f}=Object(g.a)();return u.a.createElement(a.a,{backgroundColor:t&&"var(--color-background)",className:"spacing--after",id:"challenge"},u.a.createElement(s.a,{className:"container",flex:!0},u.a.createElement(r.a,{centered:!0,className:"col-4 push-right-3 challenge-title",text:f("challengePage:coOperationTitle")}),u.a.createElement(s.a,{flex:!0,spaceBetween:!0,className:"col-6 push-right-2 flex-fix-aligning space-between--mobile"},h.map((e,t)=>u.a.createElement(o.a,{key:e.url,small:!0,applyPadding:!0,companyPath:e.url,image:{src:n("CxgS")("./"+e.image.name),alt:e.image.alt},className:"col-3 col-5--mobile col-5--tablet"}))),!t&&u.a.createElement(u.a.Fragment,null,u.a.createElement(r.a,{centered:!0,className:"col-4 spacing push-right-3 challenge-title",text:f("challengePage:participantsTitle")}),u.a.createElement(s.a,{flex:!0,className:"col-9 flex-fix-aligning space-between--mobile"},d.map(e=>u.a.createElement(i.a,{key:e,contain:!0,src:n("IxoE")(`./${p()(e)}.svg`),alt:e,className:"company__logo push-right-1 col-3--mobile col-3--tablet",backdrop:!0})))),t&&u.a.createElement(s.a,{flex:!0,spaceAround:!0,className:"col-10 spacing"},u.a.createElement(c.Link,{className:"about__challenge-button",to:Object(m.a)(l,"/challenge")},f("challengePage:infoButton")))))};v.defaultProps={isFrontPage:!1,lang:"fi"}},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,a,r){return e.config=t,n&&(e.code=n),e.request=a,e.response=r,e}},OTTw:function(e,t,n){"use strict";var a=n("xTJ+");e.exports=a.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var a=e;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=a.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},QILm:function(e,t,n){var a=n("8OQS");e.exports=function(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.__esModule=!0,e.exports.default=e.exports},"RBN/":function(e,t,n){},RNcc:function(e,t,n){"use strict";var a=n("KQm4"),r=n("q1tI"),o=n.n(r),s=n("9Koi"),i=n("mt4B"),c=n("gcgQ"),l=n("NVOO"),u=n("jsr+"),f=n("dI71"),p=(n("s13W"),n("vDqi")),g=n.n(p),m=n("lSNA"),h=n.n(m),d=n("J4zp"),v=n.n(d),y=n("QILm"),b=n.n(y),E=n("3Ddu"),w=["forwardedRef"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}let k=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleSubmit=e=>{e.preventDefault(),n.sendMessage()},n.handleChange=e=>{n.setState({...n.state,[e.target.name]:e.target.value})},n.sendMessage=()=>{const{name:e,title:t,organization:a,phone:r,email:o,question:s}=n.state,i=new FormData;i.append("entry.1118152809",e),i.append("entry.2015280305",t),i.append("entry.578868795",a),i.append("entry.1958784460",r),i.append("entry.2042435833",o),i.append("entry.1350466445",s),g.a.post("https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSeO9jt4-iUsiFaLT5Rpwt47sNceu25te2UO7WGQ2wcUNTbBiQ/formResponse",i).then(()=>{n.setState({name:"",title:"",organization:"",phone:"",email:"",question:"",formIsSent:!0})}).catch(()=>{n.setState({messageError:!0})})},n.state={showForm:!1,formIsSent:!1,name:"",title:"",organization:"",phone:"",email:"",question:""},n}return Object(f.a)(t,e),t.prototype.render=function(){const{showForm:e,formIsSent:t,name:n,title:a,organization:r,phone:s,email:i,question:l}=this.state,{t:f}=this.props;return o.a.createElement(o.a.Fragment,null,e?o.a.createElement(o.a.Fragment,null,t?o.a.createElement(c.a,{className:"spacing",headingFont:!0,text:f("challengePage:submitSuccessMessage")}):o.a.createElement("form",{onSubmit:this.handleSubmit,className:"form col-10"},o.a.createElement("p",{className:"spacing--small"},f("challengePage:nameLabel"),o.a.createElement("span",{"aria-hidden":"true"},"*")),o.a.createElement("input",{required:!0,autoComplete:"off",className:"col-10",placeholder:f("challengePage:namePlaceholder"),type:"text",name:"name",value:n,onChange:this.handleChange}),o.a.createElement("p",{className:"spacing--small"},f("challengePage:titleLabel"),o.a.createElement("span",{"aria-hidden":"true"},"*")),o.a.createElement("input",{required:!0,autoComplete:"off",className:"col-10",placeholder:"CEO",type:"text",name:"title",value:a,onChange:this.handleChange}),o.a.createElement("p",{className:"spacing--small"},f("challengePage:companyLabel"),o.a.createElement("span",{"aria-hidden":"true"},"*")),o.a.createElement("input",{required:!0,autoComplete:"off",className:"col-10",placeholder:f("challengePage:companyPlaceholder"),type:"text",name:"organization",value:r,onChange:this.handleChange}),o.a.createElement("p",{className:"spacing--small"},f("challengePage:phoneLabel"),o.a.createElement("span",{"aria-hidden":"true"},"*")),o.a.createElement("input",{autoComplete:"off",className:"col-10",placeholder:"+358 40 234 5678",type:"text",name:"phone",value:s,onChange:this.handleChange}),o.a.createElement("p",{className:"spacing--small"},f("challengePage:emailLabel"),o.a.createElement("span",{"aria-hidden":"true"},"*")),o.a.createElement("input",{required:!0,autoComplete:"off",className:"col-10",placeholder:"email@domain.com",type:"email",name:"email",value:i,onChange:this.handleChange}),o.a.createElement("p",{className:"spacing--small"},f("challengePage:whereDidYouHearLabel")),o.a.createElement("input",{autoComplete:"off",className:"col-10",type:"text",name:"question",value:l,onChange:this.handleChange}),o.a.createElement("button",{className:"submit spacing spacing--after push-right-4",type:"submit"},f("challengePage:submitButton")))):o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{flex:!0,spaceAround:!0,className:"col-10 spacing"},o.a.createElement("button",{className:"about__challenge-button about__challenge-button--turquoise",onClick:()=>this.setState({showForm:!0})},f("challengePage:registerButton")))))},t}(r.Component);var O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function a(a){var o=a.forwardedRef,i=b()(a,w),c=Object(s.a)(e,N(N({},i),{},{keyPrefix:t.keyPrefix})),l=v()(c,3),u=l[0],f=l[1],p=l[2],g=N(N({},i),{},{t:u,i18n:f,tReady:p});return t.withRef&&o?g.ref=o:!t.withRef&&o&&(g.forwardedRef=o),Object(r.createElement)(n,g)}a.displayName="withI18nextTranslation(".concat(Object(E.a)(n),")"),a.WrappedComponent=n;return t.withRef?Object(r.forwardRef)((function(e,t){return Object(r.createElement)(a,Object.assign({},e,{forwardedRef:t}))})):a}}()(k),C=n("AxK6"),S=n("Bl7J"),j=n("vrFN"),_=n("K4iA"),P=n("m03J"),T=n.n(P),B=n("5I0T"),F=n.n(B);t.a=e=>{let{lang:t,title:n,seoDescription:r,aboutContent:f,joinContent:p}=e;const{t:g}=Object(s.a)();return o.a.createElement(S.a,null,o.a.createElement(j.a,{lang:t,title:n,description:r,keywords:[].concat(Object(a.a)(F.a),["fullstackhaaste","full stack haaste","elisa","terveystalo","sympa","konecranes","unity technologies","täydennyskoulutus","koodari","haaste"])}),o.a.createElement(i.a,{style:{paddingBottom:0,overflow:"hidden"}},o.a.createElement("div",{className:"container challenge__banner"},o.a.createElement(C.a,{contain:!0,className:"col-10",alt:"Stacked cubes with React logo and JavaScript text",src:T.a}))),o.a.createElement(u.a,{className:"container spacing"},o.a.createElement(_.a,{className:"col-10col-8 push-right-1",text:g("challengePage:aboutTitle"),headingLevel:"h1"}),o.a.createElement(u.a,{className:"spacing--after col-6 push-right-2"},o.a.createElement(c.a,{headingFont:!0,text:f}),o.a.createElement(c.a,{className:"spacing",headingFont:!0,heading:{level:"h2",title:g("challengePage:joinTitle")},text:p}),o.a.createElement(O,{lang:t}))),o.a.createElement(l.a,{lang:t}),o.a.createElement(_.a,{className:"col-10 spacing--after centered",text:"#fullstackchallenge",headingLevel:"h3"}))}},"Rn+g":function(e,t,n){"use strict";var a=n("LYNF");e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(a("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},UnBK:function(e,t,n){"use strict";var a=n("xTJ+"),r=n("xAGQ"),o=n("Lmem"),s=n("JEQr"),i=n("2SVd"),c=n("5oMp");function l(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return l(e),e.baseURL&&!i(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=a.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),a.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return l(e),t.data=r(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(l(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},brk1:function(e,t,n){},endd:function(e,t,n){"use strict";function a(e){this.message=e}a.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},a.prototype.__CANCEL__=!0,e.exports=a},eqyj:function(e,t,n){"use strict";var a=n("xTJ+");e.exports=a.isStandardBrowserEnv()?{write:function(e,t,n,r,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"jfS+":function(e,t,n){"use strict";var a=n("endd");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new a(e),t(n.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},m03J:function(e,t,n){e.exports=n.p+"static/haaste-60a4a9ff715e6a11931880a17e9c6ffc.svg"},mt4B:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("rXWv");var a=n("q1tI"),r=n.n(a);const o=e=>{let{className:t,backgroundColor:n,...a}=e;const o=n?{backgroundColor:n}:null;return r.a.createElement("div",Object.assign({className:"banner "+t,style:o},a))};o.defaultProps={className:""}},rXWv:function(e,t,n){},s13W:function(e,t,n){},tQ2B:function(e,t,n){"use strict";var a=n("xTJ+"),r=n("Rn+g"),o=n("MLWZ"),s=n("w0Vi"),i=n("OTTw"),c=n("LYNF");e.exports=function(e){return new Promise((function(t,l){var u=e.data,f=e.headers;a.isFormData(u)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var g=e.auth.username||"",m=e.auth.password||"";f.Authorization="Basic "+btoa(g+":"+m)}if(p.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};r(t,l,a),p=null}},p.onerror=function(){l(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},a.isStandardBrowserEnv()){var h=n("eqyj"),d=(e.withCredentials||i(e.url))&&e.xsrfCookieName?h.read(e.xsrfCookieName):void 0;d&&(f[e.xsrfHeaderName]=d)}if("setRequestHeader"in p&&a.forEach(f,(function(e,t){void 0===u&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),l(e),p=null)})),void 0===u&&(u=null),p.send(u)}))}},u1fg:function(e){e.exports=JSON.parse('{"white":"#ffffff","black":"#33332d","main":"#e1e1e1","violet":"#B795F3","turquoise":"#82F7EB","green":"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D","yellow":"#F7F382","pink":"#E693CB","blue":"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0","light-green":"#D4FCB5","smartly-purple":"#f8f5f9","part10-light-blue":"#AFF4FE","purple":"#D4A8E2","pale-pink":"#F9B9D3","sqlgreen":"#C5FF73"}')},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";var a=n("xTJ+"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(a.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=a.trim(e.substr(0,o)).toLowerCase(),n=a.trim(e.substr(o+1)),t){if(s[t]&&r.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},xAGQ:function(e,t,n){"use strict";var a=n("xTJ+");e.exports=function(e,t,n){return a.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";var a=n("HSsa"),r=n("BEtg"),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function i(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,a=e.length;n<a;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:r,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return i(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function n(n,a){"object"==typeof t[a]&&"object"==typeof n?t[a]=e(t[a],n):t[a]=n}for(var a=0,r=arguments.length;a<r;a++)l(arguments[a],n);return t},extend:function(e,t,n){return l(t,(function(t,r){e[r]=n&&"function"==typeof t?a(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";var a=n("xTJ+");e.exports=function(e,t){a.forEach(e,(function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])}))}},ykJU:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("brk1");var a=n("AxK6"),r=n("Wbzz"),o=n("q1tI"),s=n.n(o),i=n("iAdT"),c=n("u1fg");const l=(e,t)=>{e.currentTarget.firstElementChild.firstElementChild.firstElementChild.src=t},u=e=>{let{image:t,hoverImageSrc:n,background:o="main",name:u,summary:f,path:p,companyPath:g,small:m,className:h,applyPadding:d}=e;const v=[];return m&&v.push("content-liftup--small"),d&&v.push("content-liftup--padding"),p?s.a.createElement("div",{className:`content-liftup ${h} ${v.join(" ")}`},s.a.createElement(i.a,{largeMargin:!0},s.a.createElement(r.Link,{className:"content-liftup__link",to:p,onMouseOver:e=>{l(e,n||t.src)},onMouseOut:e=>{l(e,t.src)}},s.a.createElement(a.a,Object.assign({},t,{className:"content-liftup__image image--square-big",overlay:c[o]})))),s.a.createElement("h2",{className:"content-liftup__name"},u),s.a.createElement("p",{className:"content-liftup__summary"},f)):s.a.createElement(s.a.Fragment,null,g?s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:g,className:`content-liftup ${h} ${v.join(" ")} no-hover`},s.a.createElement(a.a,Object.assign({},t,{contain:!0,squareBig:!0,backdrop:!0,className:"content-liftup__image"})),u&&s.a.createElement("p",{className:"content-liftup__name"},u),f&&s.a.createElement("p",{className:"content-liftup__summary"},f)):s.a.createElement("div",{className:`content-liftup ${h} ${v.join(" ")} no-hover`},s.a.createElement(a.a,Object.assign({},t,{contain:!0,className:"content-liftup__image image--square-big"})),u&&s.a.createElement("p",{className:"content-liftup__name"},u),f&&s.a.createElement("p",{className:"content-liftup__summary"},f)))};u.defaultProps={className:"",published:"",path:"",companyPath:""}},zuR4:function(e,t,n){"use strict";var a=n("xTJ+"),r=n("HSsa"),o=n("CgaS"),s=n("JEQr");function i(e){var t=new o(e),n=r(o.prototype.request,t);return a.extend(n,o.prototype,t),a.extend(n,t),n}var c=i(s);c.Axios=o,c.create=function(e){return i(a.merge(s,e))},c.Cancel=n("endd"),c.CancelToken=n("jfS+"),c.isCancel=n("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=n("DfZB"),e.exports=c,e.exports.default=c}}]);
//# sourceMappingURL=08f5b09e92a9f33f93799e273301d7a42014ec3a-f74327b53e6fcb226fdd.js.map