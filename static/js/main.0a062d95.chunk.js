(this.webpackJsonpcvsparser=this.webpackJsonpcvsparser||[]).push([[0],{27:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r(4),n=r.n(c),s=r(19),i=r.n(s),l=(r(27),r(10)),d=r(18),o=r(16),u=["FirstName","Phone","Email","Age","Experience","YearlyIncome","Haschildren","Licensestates","Expirationdate","Licensenumber"],j=r(21),b=function(e,t){return{value:e.trim(),hasError:t}},h=function(e){var t=e.toString();return t.includes(".")?Number(t).toFixed(2):+t},m=r(15),x=r.n(m),_=r(20),p=r.n(_),O=r(38),f=r(35),v=r(37),E=r(36),N=r(39),g=function(e){var t=e.render,r=e.keys,a=e.onDataUploaded,c=e.onError;return t((function(e){var t=e.target.files[0],n="csv"!==t.name.split(".").pop();p.a.parse(t,{skipEmptyLines:!0,error:function(e,t,r,a){c({err:e,file:t,inputElem:r,reason:a})},complete:function(e){var t=e.data;t.shift(),t.unshift(r);var s=Object(O.a)(Object(f.a)(Object(v.a)(E.a)),Object(N.a)(1))(t);c(n),a(s)}})}))};g.propTypes={keys:x.a.array.isRequired,onDataUploaded:x.a.func.isRequired,onError:x.a.func};var L=g,y=(r(30),function(e){var t=e.arr;return Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"id"}),Object(a.jsx)("th",{children:"Full Name"}),Object(a.jsx)("th",{children:"Phone"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Age"}),Object(a.jsx)("th",{children:"Experience"}),Object(a.jsx)("th",{children:"Yearly Income"}),Object(a.jsx)("th",{children:"Has children"}),Object(a.jsx)("th",{children:"License states"}),Object(a.jsx)("th",{children:"Expiration date"}),Object(a.jsx)("th",{children:"License number"}),Object(a.jsx)("th",{children:"Duplicate"})]})}),Object(a.jsx)("tbody",{children:t.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"table__td",children:e.id}),Object(a.jsx)("td",{className:e.FirstName.hasError?"table__td-err":"table__td",children:e.FirstName.value}),Object(a.jsx)("td",{className:e.Phone.hasError?"table__td-err":"table__td",children:e.Phone.value}),Object(a.jsx)("td",{className:e.Email.hasError?"table__td-err":"table__td",children:e.Email.value}),Object(a.jsx)("td",{className:e.Age.hasError?"table__td-err":"table__td",children:e.Age.value}),Object(a.jsx)("td",{className:e.Experience.hasError?"table__td-err":"table__td",children:e.Experience.value}),Object(a.jsx)("td",{className:e.YearlyIncome.hasError?"table__td-err":"table__td",children:e.YearlyIncome.value}),Object(a.jsx)("td",{className:e.Haschildren.hasError?"table__td-err":"table__td",children:e.Haschildren.value}),Object(a.jsx)("td",{className:e.Licensestates.hasError?"table__td-err":"table__td",children:e.Licensestates.value}),Object(a.jsx)("td",{className:e.Expirationdate.hasError?"table__td-err":"table__td",children:e.Expirationdate.value}),Object(a.jsx)("td",{className:e.Licensenumber.hasError?"table__td-err":"table__td",children:e.Licensenumber.value}),Object(a.jsx)("td",{className:"table__td",children:e.duplicate.map((function(e){return"".concat(e," ")}))})]},e.FirstName.value+e.id)}))})]})}),w=r.p+"static/media/arhimed.eabcbf5b.jpg",A=(r(31),function(){return Object(a.jsxs)("div",{className:"error",children:[Object(a.jsx)("h3",{className:"error__title",children:"Arhimed confused!"}),Object(a.jsx)("p",{className:"error__text",children:"Please check format file before send it is must be .csv"}),Object(a.jsx)("img",{className:"error__img",alt:"think-about",src:w})]})}),k=(r(32),function(e){var t=e.onChange;return Object(a.jsxs)("div",{className:"input__wrapper",children:[Object(a.jsx)("input",{id:"input__file",name:"file",type:"file",className:"input input__file",onChange:t}),Object(a.jsxs)("label",{htmlFor:"input__file",className:"input__file-button",children:[Object(a.jsx)("span",{className:"input__file-icon-wrapper",children:Object(a.jsx)("i",{className:"fas fa-cloud-download-alt"})}),Object(a.jsx)("span",{className:"input__file-button-text",children:"Choose one file"})]})]})}),C=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),r=t[0],n=t[1],s=Object(c.useState)(!1),i=Object(o.a)(s,2),m=i[0],x=i[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("header",{children:Object(a.jsx)("h1",{className:"green accent-2",children:"Demo React Csv Parse"})}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(L,{keys:u,onDataUploaded:function(e){n({data:e})},onError:function(e){x(e)},render:function(e){return Object(a.jsx)(k,{onChange:e})}}),!m&&r?function(e){var t,r=e.data.map((function(e,t){return Object.entries(e).reduce((function(e,t){var r=Object(o.a)(t,2),a=r[0],c=r[1];return Object(d.a)(Object(d.a)({},e),{},Object(l.a)({},a,function(e,t){switch(e){case"FirstName":return b(t,!t);case"Phone":return!0===/^(\+1|1)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(t)?b(t,!1):b(t,!0);case"Email":return!0===/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(t.trim())?b(t,!1):b(t,!0);case"Age":return b(t,!(t>=21&&0!==t));case"Experience":return b(t,!t);case"YearlyIncome":return t<1e6&&t>=0?{value:h(t),hasError:!1}:{value:h(t),hasError:!0};case"Haschildren":return"false"===t.toLowerCase()||""===t?b(t="false",!1):"true"===t.toLowerCase()?b(t="true",!1):b(t="",!0);case"Licensestates":return b(t,!t);case"Expirationdate":if(!(Date.parse(new Date(t))<Date.parse(new Date)))return b(t,!0);if(t)return b(t,!1);break;case"Licensenumber":return!0===/^[a-z0-9_-]{6}$/.test(t)?b(t,!1):b(t,!0);default:return b(t,!1)}}(a,c)))}),{id:t+1,duplicate:[]})})),c=(t=r).map((function(e){+e.Experience.value>=0&&+e.Experience.value<+e.Age.value?e.Experience.hasError=!1:e.Experience.hasError=!0;for(var r=0;r<t.length;r++)t[r]!==e&&(t[r].Phone.value!==e.Phone.value&&t[r].Email.value.toLowerCase()!==e.Email.value.toLowerCase()||(e.duplicate=[].concat(Object(j.a)(e.duplicate),[t[r].id])));return e}));return console.log("Result, =",c),Object(a.jsx)(y,{arr:c})}(r):m?Object(a.jsx)(A,{}):Object(a.jsx)("div",{})]})]})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.0a062d95.chunk.js.map