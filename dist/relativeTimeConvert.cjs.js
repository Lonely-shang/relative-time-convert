"use strict";function t(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function n(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(r,o){e(1,arguments);var i=o||{},s=i.locale,a=s&&s.options&&s.options.weekStartsOn,u=null==a?0:t(a),f=null==i.weekStartsOn?u:t(i.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=n(r),l=c.getDay(),h=(l<f?7:0)+l-f;return c.setDate(c.getDate()-h),c.setHours(0,0,0,0),c}function o(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function i(t){e(1,arguments);var r=n(t);return r.setHours(0,0,0,0),r}function s(t,n){e(2,arguments);var r=i(t),s=i(n),a=r.getTime()-o(r),u=s.getTime()-o(s);return Math.round((a-u)/864e5)}function a(t,r){e(2,arguments);var o=n(t),i=n(r),s=o.getTime()-i.getTime();return s<0?-1:s>0?1:s}function u(t,r){e(2,arguments);var o=n(t),i=n(r),s=o.getFullYear()-i.getFullYear(),a=o.getMonth()-i.getMonth();return 12*s+a}function f(t,r){e(2,arguments);var o=n(t),i=n(r);return o.getFullYear()-i.getFullYear()}function c(t,e){var n=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return n<0?-1:n>0?1:n}function l(t,r){e(2,arguments);var o=n(t),i=n(r),a=c(o,i),u=Math.abs(s(o,i));o.setDate(o.getDate()-a*u);var f=Number(c(o,i)===-a),l=a*(u-f);return 0===l?0:l}function h(t,r){return e(2,arguments),n(t).getTime()-n(r).getTime()}var g={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}};function d(t){return t?g[t]:g.trunc}function D(t){e(1,arguments);var r=n(t);return r.setHours(23,59,59,999),r}function b(t){e(1,arguments);var r=n(t),o=r.getMonth();return r.setFullYear(r.getFullYear(),o+1,0),r.setHours(23,59,59,999),r}function M(t){e(1,arguments);var r=n(t);return D(r).getTime()===b(r).getTime()}function v(t){e(1,arguments);var r=n(t);return r.setDate(1),r.setHours(0,0,0,0),r}function p(t){e(1,arguments);var r=n(t),o=new Date(0);return o.setFullYear(r.getFullYear(),0,1),o.setHours(0,0,0,0),o}var w=function(){function t(t,e,n){void 0===e&&(e=1),this.value=t,this.weekStartsOn=e,this.now=n?new Date(n):Date.now()}return t.prototype.diffYears=function(){var t=p(this.value);return function(t,r){e(2,arguments);var o=n(t),i=n(r),s=a(o,i),u=Math.abs(f(o,i));o.setFullYear(1584),i.setFullYear(1584);var c=a(o,i)===-s,l=s*(u-Number(c));return 0===l?0:l}(p(this.now),t)},t.prototype.absDiffYears=function(){return Math.abs(this.diffYears())},t.prototype.diffMonths=function(){var t=v(this.value);return function(t,r){e(2,arguments);var o,i=n(t),s=n(r),f=a(i,s),c=Math.abs(u(i,s));if(c<1)o=0;else{1===i.getMonth()&&i.getDate()>27&&i.setDate(30),i.setMonth(i.getMonth()-f*c);var l=a(i,s)===-f;M(n(t))&&1===c&&1===a(t,s)&&(l=!1),o=f*(c-Number(l))}return 0===o?0:o}(v(this.now),t)},t.prototype.absDiffMonths=function(){return Math.abs(this.diffMonths())},t.prototype.diffWeeks=function(){var t=r(this.value,{weekStartsOn:this.weekStartsOn});return function(t,n,r){e(2,arguments);var o=l(t,n)/7;return d(null==r?void 0:r.roundingMethod)(o)}(r(this.now,{weekStartsOn:this.weekStartsOn}),t)},t.prototype.absDiffWeeks=function(){return Math.abs(this.diffWeeks())},t.prototype.diffDays=function(){var t=i(this.value);return l(i(this.now),t)},t.prototype.absDiffDays=function(){return Math.abs(this.diffDays())},t.prototype.diffHours=function(){return function(t,n,r){e(2,arguments);var o=h(t,n)/36e5;return d(null==r?void 0:r.roundingMethod)(o)}(this.now,this.value)},t.prototype.absDiffHours=function(){return Math.abs(this.diffHours())},t.prototype.diffMinutes=function(){return function(t,n,r){e(2,arguments);var o=h(t,n)/6e4;return d(null==r?void 0:r.roundingMethod)(o)}(this.now,this.value)},t.prototype.absDiffMinutes=function(){return Math.abs(this.diffMinutes())},t.prototype.diffSeconds=function(){return function(t,n,r){e(2,arguments);var o=h(t,n)/1e3;return d(null==r?void 0:r.roundingMethod)(o)}(this.now,this.value)},t.prototype.absDiffSeconds=function(){return Math.abs(this.diffSeconds())},t}(),y=function(t){return 1===t?"去年":"".concat(t,"年前")},S=function(t){return 1===t?"上个月":"".concat(t,"个月前")},m=function(t){return 1===t?"上周":"".concat(t,"周前")},Y=function(t){return 1===t?"昨天":"".concat(t,"天前")},k=function(t){return 1===t?"明天":"".concat(t,"天后")},H=function(t){return 1===t?"下周":"".concat(t,"周后")},F=function(t){return 1===t?"下个月":"".concat(t,"个月后")},T=function(t){return 1===t?"明年":"".concat(t,"年后")},N="小时前",O="分钟前",W="刚刚",j="稍后",E="分钟后",C="小时后";module.exports=function(t,e,n,r){if(void 0===e&&(e=94694400),void 0===r&&(r=1),!t)return"";var o="number"==typeof t?t:new Date(t.toString().replace(/-/g,"/")).getTime(),i=new w(o,r,n),s=3,a=4,u=6,f=6,c=59,l=59;return i.absDiffSeconds()>e?new Date(t):i.absDiffYears()>0&&i.absDiffMonths()>s?i.diffYears()>0?y(i.absDiffYears()):T(i.absDiffYears()):i.absDiffMonths()>0&&i.absDiffWeeks()>=a?i.diffMonths()>0?S(i.absDiffMonths()):F(i.absDiffMonths()):i.absDiffWeeks()>0&&i.absDiffDays()>u?i.diffWeeks()>0?m(i.absDiffWeeks()):H(i.absDiffWeeks()):i.absDiffDays()>0&&i.absDiffHours()>f?i.diffDays()>0?Y(i.absDiffDays()):k(i.absDiffDays()):i.absDiffHours()>0&&i.absDiffMinutes()>c?i.absDiffHours()+(i.diffHours()>0?N:C):i.absDiffMinutes()>0&&i.absDiffSeconds()>l?i.absDiffMinutes()+(i.diffMinutes()>0?O:E):i.diffSeconds()?i.diffSeconds()>0?W:j:""};
//# sourceMappingURL=relativeTimeConvert.cjs.js.map