!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("AlloyEditor")):"function"==typeof define&&define.amd?define(["react","AlloyEditor"],t):"object"==typeof exports?exports.ezBtnCustomTagUpdate=t(require("react"),require("AlloyEditor")):(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezBtnCustomTagUpdate=t(e.React,e.AlloyEditor))}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=55)}({0:function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===r||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===n||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){b&&d&&(b=!1,d.length?y=d.concat(y):h=-1,y.length&&u())}function u(){if(!b){var e=o(i);b=!0;for(var t=y.length;t;){for(d=y,y=[];++h<t;)d&&d[h].run();h=-1,t=y.length}d=null,b=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var s,f,p=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:r}catch(e){s=r}try{f="function"==typeof clearTimeout?clearTimeout:n}catch(e){f=n}}();var d,y=[],b=!1,h=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];y.push(new c(e,t)),1!==y.length||b||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},1:function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},10:function(e,t,r){"use strict";(function(t){function n(e,r,n,c,l){if("production"!==t.env.NODE_ENV)for(var s in e)if(e.hasOwnProperty(s)){var f;try{o("function"==typeof e[s],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",c||"React class",n,s,typeof e[s]),f=e[s](r,s,c,n,null,i)}catch(e){f=e}if(a(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",n,s,typeof f),f instanceof Error&&!(f.message in u)){u[f.message]=!0;var p=l?l():"";a(!1,"Failed %s type: %s%s",n,f.message,null!=p?p:"")}}}if("production"!==t.env.NODE_ENV)var o=r(2),a=r(6),i=r(3),u={};e.exports=n}).call(t,r(0))},11:function(e,t,r){"use strict";var n=r(1),o=r(2),a=r(3);e.exports=function(){function e(e,t,r,n,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},12:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=r(4),c=(n(u),r(5)),l=(n(c),r(7)),s=n(l),f=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.getStateClasses=s.default.ButtonStateClasses.getStateClasses,r.execCommand=s.default.ButtonCommand.execCommand.bind(r),r}return i(t,e),t}(u.Component);t.default=f},13:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(4),l=(n(c),r(5)),s=(n(l),r(12)),f=n(s),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"getWidget",value:function(){var e=this.props.editor.get("nativeEditor"),t=e.getSelection().getStartElement();return e.widgets.getByElement(t)}}]),t}(f.default);t.default=p},2:function(e,t,r){"use strict";(function(t){function r(e,t,r,o,a,i,u,c){if(n(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,o,a,i,u,c],f=0;l=new Error(t.replace(/%s/g,function(){return s[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var n=function(e){};"production"!==t.env.NODE_ENV&&(n=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=r}).call(t,r(0))},3:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4:function(t,r){t.exports=e},5:function(e,t,r){(function(t){if("production"!==t.env.NODE_ENV){var n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n};e.exports=r(8)(o,!0)}else e.exports=r(11)()}).call(t,r(0))},55:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(4),l=n(c),s=r(5),f=n(s),p=r(7),d=(n(p),r(13)),y=n(d),b=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={values:e.values},r}return i(t,e),u(t,[{key:"renderString",value:function(e,t){return l.default.createElement("div",{className:"attribute__wrapper"},l.default.createElement("label",{className:"attribute__label form-control-label"},e.label),l.default.createElement("input",{type:"text",defaultValue:e.defaultValue,required:e.required,className:"attribute__input form-control",value:this.state.values[t].value,onChange:this.updateValues.bind(this),"data-attr-name":t}))}},{key:"renderCheckbox",value:function(e,t){return l.default.createElement("div",{className:"attribute__wrapper"},l.default.createElement("label",{className:"attribute__label form-control-label"},e.label),l.default.createElement("input",{type:"checkbox",defaultValue:e.defaultValue,required:e.required,className:"attribute__input form-control",checked:this.state.values[t].value,onChange:this.updateValues.bind(this),"data-attr-name":t}))}},{key:"renderNumber",value:function(e,t){return l.default.createElement("div",{className:"attribute__wrapper"},l.default.createElement("label",{className:"attribute__label form-control-label"},e.label),l.default.createElement("input",{type:"number",defaultValue:e.defaultValue,required:e.required,className:"attribute__input form-control",value:this.state.values[t].value,onChange:this.updateValues.bind(this),"data-attr-name":t}))}},{key:"renderSelect",value:function(e,t){return l.default.createElement("div",{className:"attribute__wrapper"},l.default.createElement("label",{className:"attribute__label form-control-label"},e.label),l.default.createElement("select",{className:"attribute__input form-control",value:this.state.values[t].value,onChange:this.updateValues.bind(this),"data-attr-name":t},e.choices.map(this.renderChoice.bind(this))))}},{key:"renderChoice",value:function(e){return l.default.createElement("option",{value:e},e)}},{key:"renderAttribute",value:function(e){var t=this.attributes[e],r=this.getAttributeRenderMethods(),n=r[t.type];return l.default.createElement("div",{className:"ez-ae-custom-tag__attributes"},this[n](t,e))}},{key:"render",value:function(){var e=Object.keys(this.attributes),t=this.isValid();return l.default.createElement("div",{className:"ez-ae-custom-tag"},e.map(this.renderAttribute.bind(this)),l.default.createElement("button",{className:"ez-btn-ae btn btn-secondary ez-btn-ae--custom-tag float-right",onClick:this.saveCustomTag.bind(this),disabled:!t},"Save"))}},{key:"isValid",value:function(){var e=this;return Object.keys(this.attributes).every(function(t){return!e.attributes[t].required||!!e.state.values[t].value})}},{key:"saveCustomTag",value:function(){this.props.createNewTag&&this.execCommand();var e=this.getWidget(),t=Object.assign({},this.state.values);e.setFocused(!0),e.setName(this.customTagName),e.setWidgetContent(this.createContent()),e.clearConfig(),Object.keys(this.attributes).forEach(function(r){e.setConfig(r,t[r].value)})}},{key:"createContent",value:function(){var e=this;return Object.keys(this.attributes).reduce(function(t,r){return t+"<p>"+e.attributes[r].label+": "+e.state.values[r].value+"</p>"},"")}},{key:"updateValues",value:function(e){var t=Object.assign({},this.state.values),r="checkbox"===e.target.type?e.target.checked:e.target.value;t[e.target.dataset.attrName].value=r,this.setState({values:t})}},{key:"getAttributeRenderMethods",value:function(){return{string:"renderString",boolean:"renderCheckbox",number:"renderNumber",choice:"renderSelect"}}}]),t}(y.default);t.default=b,b.defaultProps={command:"ezcustomtag",modifiesSelection:!0},b.propTypes={editor:f.default.object.isRequired,label:f.default.string.isRequired,tabIndex:f.default.number.isRequired}},6:function(e,t,r){"use strict";(function(t){var n=r(1),o=n;if("production"!==t.env.NODE_ENV){var a=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0,a="Warning: "+e.replace(/%s/g,function(){return r[o++]});"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(e){}};o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var r=arguments.length,n=Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];a.apply(void 0,[t].concat(n))}}}e.exports=o}).call(t,r(0))},7:function(e,r){e.exports=t},8:function(e,t,r){"use strict";(function(t){var n=r(1),o=r(2),a=r(6),i=r(9),u=r(3),c=r(10);e.exports=function(e,r){function l(e){var t=e&&(N&&e[N]||e[k]);if("function"==typeof t)return t}function s(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function f(e){this.message=e,this.stack=""}function p(e){function n(n,l,s,p,d,y,b){if(p=p||P,y=y||s,b!==u)if(r)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var h=p+":"+s;!i[h]&&c<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,p),i[h]=!0,c++)}return null==l[s]?n?new f(null===l[s]?"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `null`.":"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(l,s,p,d,y)}if("production"!==t.env.NODE_ENV)var i={},c=0;var l=n.bind(null,!1);return l.isRequired=n.bind(null,!0),l}function d(e){function t(t,r,n,o,a,i){var u=t[r];if(E(u)!==e)return new f("Invalid "+o+" `"+a+"` of type `"+j(u)+"` supplied to `"+n+"`, expected `"+e+"`.");return null}return p(t)}function y(e){function t(t,r,n,o,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var i=t[r];if(!Array.isArray(i)){return new f("Invalid "+o+" `"+a+"` of type `"+E(i)+"` supplied to `"+n+"`, expected an array.")}for(var c=0;c<i.length;c++){var l=e(i,c,n,o,a+"["+c+"]",u);if(l instanceof Error)return l}return null}return p(t)}function b(e){function t(t,r,n,o,a){if(!(t[r]instanceof e)){var i=e.name||P;return new f("Invalid "+o+" `"+a+"` of type `"+x(t[r])+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}return null}return p(t)}function h(e){function r(t,r,n,o,a){for(var i=t[r],u=0;u<e.length;u++)if(s(i,e[u]))return null;return new f("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+n+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?p(r):("production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),n.thatReturnsNull)}function v(e){function t(t,r,n,o,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var i=t[r],c=E(i);if("object"!==c)return new f("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var l in i)if(i.hasOwnProperty(l)){var s=e(i,l,n,o,a+"."+l,u);if(s instanceof Error)return s}return null}return p(t)}function m(e){function r(t,r,n,o,a){for(var i=0;i<e.length;i++){if(null==(0,e[i])(t,r,n,o,a,u))return null}return new f("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),n.thatReturnsNull;for(var o=0;o<e.length;o++){var i=e[o];if("function"!=typeof i)return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",T(i),o),n.thatReturnsNull}return p(r)}function g(e){function t(t,r,n,o,a){var i=t[r],c=E(i);if("object"!==c)return new f("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var l in e){var s=e[l];if(s){var p=s(i,l,n,o,a+"."+l,u);if(p)return p}}return null}return p(t)}function O(e){function t(t,r,n,o,a){var c=t[r],l=E(c);if("object"!==l)return new f("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");var s=i({},t[r],e);for(var p in s){var d=e[p];if(!d)return new f("Invalid "+o+" `"+a+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(c,p,n,o,a+"."+p,u);if(y)return y}return null}return p(t)}function w(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(w);if(null===t||e(t))return!0;var r=l(t);if(!r)return!1;var n,o=r.call(t);if(r!==t.entries){for(;!(n=o.next()).done;)if(!w(n.value))return!1}else for(;!(n=o.next()).done;){var a=n.value;if(a&&!w(a[1]))return!1}return!0;default:return!1}}function _(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function E(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":_(t,e)?"symbol":t}function j(e){if(void 0===e||null===e)return""+e;var t=E(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function T(e){var t=j(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function x(e){return e.constructor&&e.constructor.name?e.constructor.name:P}var N="function"==typeof Symbol&&Symbol.iterator,k="@@iterator",P="<<anonymous>>",C={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:function(){return p(n.thatReturnsNull)}(),arrayOf:y,element:function(){function t(t,r,n,o,a){var i=t[r];if(!e(i)){return new f("Invalid "+o+" `"+a+"` of type `"+E(i)+"` supplied to `"+n+"`, expected a single ReactElement.")}return null}return p(t)}(),instanceOf:b,node:function(){function e(e,t,r,n,o){return w(e[t])?null:new f("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")}return p(e)}(),objectOf:v,oneOf:h,oneOfType:m,shape:g,exact:O};return f.prototype=Error.prototype,C.checkPropTypes=c,C.PropTypes=C,C}}).call(t,r(0))},9:function(e,t,r){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,u,c=n(e),l=1;l<arguments.length;l++){r=Object(arguments[l]);for(var s in r)a.call(r,s)&&(c[s]=r[s]);if(o){u=o(r);for(var f=0;f<u.length;f++)i.call(r,u[f])&&(c[u[f]]=r[u[f]])}}return c}}}).default});
//# sourceMappingURL=ezBtnCustomTagUpdate.js.map