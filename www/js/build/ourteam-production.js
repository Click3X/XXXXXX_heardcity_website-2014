//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var A=j.each=j.forEach=function(n,t,e){if(null==n)return n;if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var O="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},j.find=j.detect=function(n,t,r){var e;return k(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var k=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:k(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var E=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,r){return t=E(t),j.pluck(j.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=E(r),A(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};j.groupBy=F(function(n,t,r){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=E(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var r=[],e=[];return A(n,function(n){(t(n)?r:e).push(n)}),[r,e]},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===j&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:j.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=j.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=j.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(w)return w(n);var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};T.unescape=j.invert(T.escape);var I={escape:new RegExp("["+j.keys(T.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(T.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(I[n],function(t){return T[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this);
/*! flexnav https://github.com/indyplanets/flexnav http://unlicense.org/ 2013-11-28 */
!function(){var a;a=jQuery,a.fn.flexNav=function(b){var c,d,e,f,g,h,i,j,k,l,m,n;return k=a.extend({animationSpeed:250,transitionOpacity:!0,buttonSelector:".menu-button",hoverIntent:!1,hoverIntentTimeout:150,calcItemWidths:!1,hover:!0},b),c=a(this),c.addClass("with-js"),k.transitionOpacity===!0&&c.addClass("opacity"),c.find("li").each(function(){return a(this).has("ul").length?a(this).addClass("item-with-ul").find("ul").hide():void 0}),k.calcItemWidths===!0&&(d=c.find(">li"),f=d.length,h=100/f,g=h+"%"),c.data("breakpoint")&&(e=c.data("breakpoint")),l=function(){return c.hasClass("lg-screen")===!0&&k.hover===!0?k.transitionOpacity===!0?a(this).find(">ul").addClass("flexnav-show").stop(!0,!0).animate({height:["toggle","swing"],opacity:"toggle"},k.animationSpeed):a(this).find(">ul").addClass("flexnav-show").stop(!0,!0).animate({height:["toggle","swing"]},k.animationSpeed):void 0},i=function(){return c.hasClass("lg-screen")===!0&&a(this).find(">ul").hasClass("flexnav-show")===!0&&k.hover===!0?k.transitionOpacity===!0?a(this).find(">ul").removeClass("flexnav-show").stop(!0,!0).animate({height:["toggle","swing"],opacity:"toggle"},k.animationSpeed):a(this).find(">ul").removeClass("flexnav-show").stop(!0,!0).animate({height:["toggle","swing"]},k.animationSpeed):void 0},j=function(){var b;if(a(window).width()<=e)return c.removeClass("lg-screen").addClass("sm-screen"),k.calcItemWidths===!0&&d.css("width","100%"),b=k.buttonSelector+", "+k.buttonSelector+" .touch-button",a(b).removeClass("active"),a(".one-page li a").on("click",function(){return c.removeClass("flexnav-show")});if(a(window).width()>e){if(c.removeClass("sm-screen").addClass("lg-screen"),k.calcItemWidths===!0&&d.css("width",g),c.removeClass("flexnav-show").find(".item-with-ul").on(),a(".item-with-ul").find("ul").removeClass("flexnav-show"),i(),k.hoverIntent===!0)return a(".item-with-ul").hoverIntent({over:l,out:i,timeout:k.hoverIntentTimeout});if(k.hoverIntent===!1)return a(".item-with-ul").on("mouseenter",l).on("mouseleave",i)}},a(k.buttonSelector).data("navEl",c),n=".item-with-ul, "+k.buttonSelector,a(n).append('<span class="touch-button"><i class="navicon">&#9660;</i></span>'),m=k.buttonSelector+", "+k.buttonSelector+" .touch-button",a(m).on("click",function(b){var c,d,e;return a(m).toggleClass("active"),b.preventDefault(),b.stopPropagation(),e=k.buttonSelector,c=a(this).is(e)?a(this):a(this).parent(e),d=c.data("navEl"),d.toggleClass("flexnav-show")}),a(".touch-button").on("click",function(){var b,d;return b=a(this).parent(".item-with-ul").find(">ul"),d=a(this).parent(".item-with-ul").find(">span.touch-button"),c.hasClass("lg-screen")===!0&&a(this).parent(".item-with-ul").siblings().find("ul.flexnav-show").removeClass("flexnav-show").hide(),b.hasClass("flexnav-show")===!0?(b.removeClass("flexnav-show").slideUp(k.animationSpeed),d.removeClass("active")):b.hasClass("flexnav-show")===!1?(b.addClass("flexnav-show").slideDown(k.animationSpeed),d.addClass("active")):void 0}),c.find(".item-with-ul *").focus(function(){return a(this).parent(".item-with-ul").parent().find(".open").not(this).removeClass("open").hide(),a(this).parent(".item-with-ul").find(">ul").addClass("open").show()}),j(),a(window).on("resize",j)}}.call(this);
/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

;(function($){$.fn.unveil=function(threshold,callback){var $w=$(window),th=threshold||0,retina=window.devicePixelRatio>1,attrib=retina?"data-src-retina":"data-src",images=this,loaded;this.one("unveil",function(){var source=this.getAttribute(attrib);source=source||this.getAttribute("data-src");if(source){this.setAttribute("src",source);if(typeof callback==="function")callback.call(this);}});function unveil(){var inview=images.filter(function(){var $e=$(this),wt=$w.scrollTop(),wb=wt+$w.height(),et=$e.offset().top,eb=et+$e.height();return eb>=wt-th&&et<=wb+th;});loaded=inview.trigger("unveil");images=images.not(loaded);}$w.scroll(unveil);$w.resize(unveil);unveil();return this;};})(window.jQuery||window.Zepto);

/*!
 * clueTip - v1.2.10 - 2013-09-29
 * http://plugins.learningjquery.com/cluetip/
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function($) {

  $.cluetip = {
    version: '1.2.10',

    // the HTML that will be used for the tooltip
    template: ['<div>',
      '<div class="cluetip-outer">',
        '<h3 class="cluetip-title ui-widget-header ui-cluetip-header"></h3>',
        '<div class="cluetip-inner ui-widget-content ui-cluetip-content"></div>',
      '</div>',
      '<div class="cluetip-extra"></div>',
    '</div>'].join(''),

    /* clueTip setup
     *  the setup options are applied each time .cluetip() is called,
     *  BUT only if <div id="cluetip"> is not already in the document
    */
    setup: {
      // method to be used for inserting the clueTip into the DOM.
      // Permitted values are 'appendTo', 'prependTo', 'insertBefore', and 'insertAfter'
      insertionType: 'appendTo',
      // element in the DOM the plugin will reference when inserting the clueTip.
      insertionElement: 'body'
    },

    /*
     * clueTip options
     *
     * each one can be explicitly overridden by changing its value.
     * for example: $.cluetip.defaults.width = 200;
     *         or: $.fn.cluetip.defaults.width = 200; // for compatibility with previous clueTip versions
     * would change the default width for all clueTips to 200.
     *
     * each one can also be overridden by passing an options map to the cluetip method.
     * for example: $('a.example').cluetip({width: 200});
     * would change the default width to 200 for clueTips invoked by a link with class of "example"
     *
    */
    defaults: {
      multiple:         false,    // Allow a new tooltip to be created for each .cluetip() call
      width:            275,      // The width of the clueTip
      height:           'auto',   // The height of the clueTip
      cluezIndex:       97,       // Sets the z-index style property of the clueTip
      positionBy:       'auto',   // Sets the type of positioning: 'auto', 'mouse','bottomTop', 'topBottom', fixed'
      topOffset:        15,       // Number of px to offset clueTip from top of invoking element
      leftOffset:       15,       // Number of px to offset clueTip from left of invoking element
      snapToEdge:       false,    // For bottomTop and topBottom, snap to the top or bottom of the element.
      local:            false,    // Whether to use content from the same page for the clueTip's body
      localPrefix:      null,     // string to be prepended to the tip attribute if local is true
      localIdSuffix:    null,     // string to be appended to the cluetip content element's id if local is true
      hideLocal:        true,     // If local option is set to true, this determines whether local content
                                  // to be shown in clueTip should be hidden at its original location
      attribute:        'rel',    // the attribute to be used for fetching the clueTip's body content
      titleAttribute:   'title',  // the attribute to be used for fetching the clueTip's title
      splitTitle:       '',       // A character used to split the title attribute into the clueTip title and divs
                                  // within the clueTip body. more info below [6]
      escapeTitle:      false,    // whether to html escape the title attribute
      showTitle:        true,     // show title bar of the clueTip, even if title attribute not set
      cluetipClass:     'default',// class added to outermost clueTip div in the form of 'cluetip-' + clueTipClass.
      hoverClass:       '',       // class applied to the invoking element onmouseover and removed onmouseout
      waitImage:        true,     // whether to show a "loading" img, which is set in jquery.cluetip.css
      cursor:           'help',
      arrows:           false,    // if true, displays arrow on appropriate side of clueTip
      dropShadow:       true,     // set to false if you don't want the drop-shadow effect on the clueTip
      dropShadowSteps:  6,        // adjusts the size of the drop shadow
      sticky:           false,    // keep visible until manually closed
      mouseOutClose:    false,    // close when clueTip is moused out: false, 'cluetip', 'link', 'both'
      delayedClose:     50,        // close clueTip on a timed delay
      activation:       'hover',  // set to 'click' to force user to click to show clueTip
                                  // set to 'focus' to show on focus of a form element and hide on blur
      clickThrough:     true,    // if true, and activation is not 'click', then clicking on link will take user to the link's href,
                                  // even if href and tipAttribute are equal
      tracking:         false,    // if true, clueTip will track mouse movement (experimental)
      closePosition:    'top',    // location of close text for sticky cluetips; can be 'top', 'bottom', 'title' or 'none'
      closeText:        'Close',  // text (or HTML) to to be clicked to close sticky clueTips
      truncate:         0,        // number of characters to truncate clueTip's contents. if 0, no truncation occurs

      // effect and speed for opening clueTips
      fx: {
                        open:       'show', // can be 'show' or 'slideDown' or 'fadeIn'
                        openSpeed:  ''
      },

      // settings for when hoverIntent plugin is used
      hoverIntent: {
                        sensitivity:  3,
                        interval:     50,
                        timeout:      0
      },

      // short-circuit function to run just before clueTip is shown.
      onActivate:       function(e) {return true;},
      // function to run just after clueTip is shown.
      onShow:           function(ct, ci){},
      // function to run just after clueTip is hidden.
      onHide:           function(ct, ci){},
      // whether to cache results of ajax request to avoid unnecessary hits to server
      ajaxCache:        true,

      // process data retrieved via xhr before it's displayed
      ajaxProcess:      function(data) {
                          data = data.replace(/<(script|style|title)[^<]+<\/(script|style|title)>/gm, '').replace(/<(link|meta)[^>]+>/g,'');
                          return data;
      },

      // can pass in standard $.ajax() parameters. Callback functions, such as beforeSend,
      // will be queued first within the default callbacks.
      // The only exception is error, which overrides the default
      ajaxSettings: {
                        // error: function(ct, ci) { /* override default error callback */ },
                        // beforeSend: function(ct, ci) { /* called first within default beforeSend callback */ },
                        dataType: 'html'
      },
      debug: false

    }
  };
  var $cluetipWait,
      standardClasses = 'cluetip ui-widget ui-widget-content ui-cluetip',
      caches = {},
      counter = 0,
      imgCount = 0;

  var encodeString = function(str) {
    return str.replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;');
  };
  // use $.fn.prop() if available (jQuery 1.6+); otherwise, $.fn.attr()
  $.fn.attrProp = $.fn.prop || $.fn.attr;

  // .cluetip() method
  $.fn.cluetip = function(js, options) {
    var $cluetip, $cluetipInner, $cluetipOuter, $cluetipTitle, $cluetipArrows, $dropShadow;
    if (typeof js == 'object') {
      options = js;
      js = null;
    }
    if (js == 'destroy') {
      this.each(function(index) {
        var $l = $(this),
            data = $l.data('cluetip');
        if ( data ) {
          $(data.selector).remove();
          $.removeData(this, 'title');
          $.removeData(this, 'cluetip');
        }
        if (data.title) {
          $l.attrProp('title', data.title);
        }
        $l.unbind('.cluetip').unbind('cluetipMoc');
      });
      if ( !$('[id^="cluetip"]').length ) {
        $(document).unbind('.cluetip');
      }
      return this;
    }

    // merge per-call options with defaults
    options = $.extend(true, {}, $.cluetip.defaults, options || {});

    /** =create cluetip divs **/
    counter++;
    var cluezIndex,
        cluetipId = $.cluetip.backCompat || !options.multiple ? 'cluetip' : 'cluetip-' + counter,
        cluetipSelector = '#' + cluetipId,
        prefix = $.cluetip.backCompat ? '#' : '.',
        insertionType = $.cluetip.setup.insertionType,
        insertionElement = $.cluetip.setup.insertionElement || 'body';

    insertionType = (/appendTo|prependTo|insertBefore|insertAfter/).test(insertionType) ? insertionType : 'appendTo';
    $cluetip = $(cluetipSelector);
    if (!$cluetip.length) {

      $cluetip = $($.cluetip.template)
      [insertionType](insertionElement)
      .attr('id', cluetipId)
      .css({position: 'absolute', display: 'none'});

      cluezIndex = +options.cluezIndex;
      $cluetipOuter = $cluetip.find(prefix + 'cluetip-outer').css({position: 'relative', zIndex: cluezIndex});
      $cluetipInner = $cluetip.find(prefix + 'cluetip-inner');
      $cluetipTitle = $cluetip.find(prefix + 'cluetip-title');

      $cluetip.bind('mouseenter mouseleave', function(event) {
        $(this).data('entered', event.type === 'mouseenter');
      });
    }

    $cluetipWait = $('#cluetip-waitimage');
    if (!$cluetipWait.length && options.waitImage) {
      $cluetipWait = $('<div></div>').attr('id', 'cluetip-waitimage').css({position: 'absolute'});
      $cluetipWait.insertBefore($cluetip).hide();
    }


    var cluetipPadding = (parseInt($cluetip.css('paddingLeft'), 10) || 0) + (parseInt($cluetip.css('paddingRight'), 10) || 0);


    this.each(function(index) {
      var jsContent,
          link = this,
          $link = $(this),
          // support metadata plugin (v1.0 and 2.0)
          opts = $.extend(true, {}, options, $.metadata ? $link.metadata() : $.meta ? $link.data() : $link.data('cluetip') || {}),
          // start out with no contents (for ajax activation)
          cluetipContents = false,
          isActive = false,
          closeOnDelay = null,
          tipAttribute = opts[opts.attribute] ||
            ( opts.attribute == 'href' ? $link.attr(opts.attribute) : $link.attrProp(opts.attribute) || $link.attr(opts.attribute) ),
          ctClass = opts.cluetipClass;

      cluezIndex = +opts.cluezIndex;
      $link.data('cluetip', {title: link.title, zIndex: cluezIndex, selector: cluetipSelector, cursor: link.style.cursor || ''});

      if (opts.arrows && !$cluetip.find('.cluetip-arrows').length) {
        $cluetip.append('<div class="cluetip-arrows ui-state-default"></div>');
      }

      if (!tipAttribute && !opts.splitTitle && !js) {
        return true;
      }
      // if hideLocal is set to true, on DOM ready hide the local content that will be displayed in the clueTip
      if (opts.local && opts.localPrefix) {tipAttribute = opts.localPrefix + tipAttribute;}
      if (opts.local && opts.hideLocal && tipAttribute) { $(tipAttribute + ':first').hide(); }

      var tOffset = parseInt(opts.topOffset, 10), lOffset = parseInt(opts.leftOffset, 10);
      // vertical measurement variables
      var tipHeight, wHeight,
          defHeight = isNaN(parseInt(opts.height, 10)) ? 'auto' : (/\D/g).test(opts.height) ? opts.height : opts.height + 'px';
      var sTop, linkTop, linkBottom, posY, tipY, mouseY, baseline;
      // horizontal measurement variables
      var tipInnerWidth = parseInt(opts.width, 10) || 275,
          tipWidth = tipInnerWidth + cluetipPadding + opts.dropShadowSteps,
          linkWidth = this.offsetWidth,
          linkLeft, posX, tipX, mouseX, winWidth;

      // parse the title
      var tipParts;
      var tipTitle = (opts.attribute != 'title') ? $link.attr(opts.titleAttribute) || '' : '';
      if (opts.escapeTitle) {
        tipTitle = encodeString(tipTitle);
      }
      if (opts.splitTitle) {
        tipParts = tipTitle.split(opts.splitTitle);
        tipTitle = opts.showTitle || tipParts[0] === '' ? tipParts.shift() : '';
      }



      var localContent;
      function returnFalse() { return false; }

      // Keep track of mouse entered state on link
      $link.bind('mouseenter mouseleave', function(event) {
        var data = $link.data('cluetip');
        data.entered = event.type === 'entered';
        $link.data('cluetip', data);
      });

/***************************************
* ACTIVATION
****************************************/

//activate clueTip
    var activate = function(event) {
      var pY, ajaxMergedSettings, cacheKey,
          continueOn = opts.onActivate.call(link, event);

      if (continueOn === false) {
        return false;
      }

      isActive = true;

      // activate function may get called after an initialization of a
      // different target so need to re-get the Correct Cluetip object here
      $cluetip = $(cluetipSelector).css({position: 'absolute'});
      $cluetipOuter = $cluetip.find(prefix + 'cluetip-outer');
      $cluetipInner = $cluetip.find(prefix + 'cluetip-inner');
      $cluetipTitle = $cluetip.find(prefix + 'cluetip-title');
      $cluetipArrows = $cluetip.find(prefix + 'cluetip-arrows');
      $cluetip.removeClass().css({width: tipInnerWidth});
      if (tipAttribute == $link.attr('href')) {
        $link.css('cursor', opts.cursor);
      }
      if (opts.hoverClass) {
        $link.addClass(opts.hoverClass);
      }
      linkTop = posY = $link.offset().top;
      linkBottom = linkTop + $link.innerHeight();
      linkLeft = $link.offset().left;
      if ( $(insertionElement).css('position') === 'relative' ) {
        linkLeft -= $(insertionElement)[0].getBoundingClientRect().left;
      }

      // FIX: (bug 4412)
      linkWidth = $link.innerWidth();
      if ( event.type == focus || (opts.positionBy == 'mouse' && !event.pageX) ) {
        // in focus event, no mouse position is available; this is needed with bottomTop:
        mouseX = linkLeft +  ( linkWidth / 2 ) + lOffset;
        $cluetip.css({left: posX});
        mouseY = posY + tOffset;
      } else {
        mouseX = event.pageX;
        mouseY = event.pageY;
      }
      //END OF FIX

      if (link.tagName.toLowerCase() != 'area') {
        sTop = $(document).scrollTop();
        winWidth = $(window).width();
      }
// position clueTip horizontally
      if (opts.positionBy == 'fixed') {
        posX = linkWidth + linkLeft + lOffset;
        $cluetip.css({left: posX});
      } else {
        posX = (linkWidth > linkLeft && linkLeft > tipWidth) ||
          linkLeft + linkWidth + tipWidth + lOffset > winWidth ?
          linkLeft - tipWidth - lOffset :
          linkWidth + linkLeft + lOffset;
        if (link.tagName.toLowerCase() == 'area' || opts.positionBy == 'mouse' || linkWidth + tipWidth > winWidth) { // position by mouse
          if (mouseX + 20 + tipWidth > winWidth) {
            $cluetip.addClass('cluetip-' + ctClass);
            posX = (mouseX - tipWidth - lOffset) >= 0 ? mouseX - tipWidth - lOffset - parseInt($cluetip.css('marginLeft'),10) + parseInt($cluetipInner.css('marginRight'),10) :  mouseX - (tipWidth/2);
          } else {
            posX = mouseX + lOffset;
          }
        }
        pY = posX < 0 ? event.pageY + tOffset : event.pageY;
        if (posX < 0 || opts.positionBy == 'bottomTop'  || opts.positionBy == 'topBottom') {
          posX = (mouseX + (tipWidth/2) > winWidth) ? winWidth/2 - tipWidth/2 : Math.max(mouseX - (tipWidth/2),0);
        }
      }

      $cluetipArrows.css({zIndex: $link.data('cluetip').zIndex+1});
      $cluetip.css({
        left: posX,
        zIndex: $link.data('cluetip').zIndex
      });
      wHeight = $(window).height();

/***************************************
* load a string from cluetip method's first argument
***************************************/
      if (js) {
        if (typeof js == 'function') {
          jsContent = js.call(link);
        } else {
          jsContent = js;
        }
        $cluetipInner.html(jsContent);
        cluetipShow(pY);
      }
/***************************************
* load the title attribute only (or user-selected attribute).
* clueTip title is the string before the first delimiter
* subsequent delimiters place clueTip body text on separate lines
***************************************/

      else if (tipParts) {
        var tpl = tipParts.length;
        $cluetipInner.html(tpl ? tipParts[0] : '');
        if (tpl > 1) {
          for (var i=1; i < tpl; i++) {
            $cluetipInner.append('<div class="split-body">' + tipParts[i] + '</div>');
          }
        }
        cluetipShow(pY);
      }
/***************************************
* load external file via ajax
***************************************/

      else if ( !opts.local && tipAttribute.indexOf('#') !== 0 ) {
        if (/\.(jpe?g|tiff?|gif|png)(?:\?.*)?$/i.test(tipAttribute)) {
          $cluetipInner.html('<img src="' + tipAttribute + '" alt="' + tipTitle + '" />');
          cluetipShow(pY);
        } else {
          var optionBeforeSend = opts.ajaxSettings.beforeSend,
              optionError = opts.ajaxSettings.error,
              optionSuccess = opts.ajaxSettings.success,
              optionComplete = opts.ajaxSettings.complete;

          cacheKey = getCacheKey(tipAttribute, opts.ajaxSettings.data);

          var ajaxSettings = {
            cache: opts.ajaxCache, // force requested page not to be cached by browser
            url: tipAttribute,
            beforeSend: function(xhr, settings) {
              if (optionBeforeSend) {optionBeforeSend.call(link, xhr, $cluetip, $cluetipInner, settings);}
              $cluetipOuter.children().empty();
              if (opts.waitImage) {
                $cluetipWait
                .css({top: mouseY+20, left: mouseX+20, zIndex: $link.data('cluetip').zIndex-1})
                .show();
              }
            },
            error: function(xhr, textStatus) {
              if ( options.ajaxCache && !caches[cacheKey] ) {
                caches[cacheKey] = {status: 'error', textStatus: textStatus, xhr: xhr};
              }

              if (isActive) {
                if (optionError) {
                  optionError.call(link, xhr, textStatus, $cluetip, $cluetipInner);
                } else {
                  $cluetipInner.html('<i>sorry, the contents could not be loaded</i>');
                }
              }
            },
            success: function(data, textStatus, xhr) {
              if ( options.ajaxCache && !caches[cacheKey] ) {
                caches[cacheKey] = {status: 'success', data: data, textStatus: textStatus, xhr: xhr};
              }

              cluetipContents = opts.ajaxProcess.call(link, data);

              // allow for changing the title based on data returned by xhr
              if ( typeof cluetipContents == 'object' && cluetipContents !== null ) {
                tipTitle = cluetipContents.title;
                cluetipContents = cluetipContents.content;
              }

              if (isActive) {
                if (optionSuccess) {
                  optionSuccess.call(link, data, textStatus, $cluetip, $cluetipInner);
                }
                $cluetipInner.html(cluetipContents);

              }
            },
            complete: function(xhr, textStatus) {
              if (optionComplete) {
                optionComplete.call(link, xhr, textStatus, $cluetip, $cluetipInner);
              }
              var imgs = $cluetipInner[0].getElementsByTagName('img');
              imgCount = imgs.length;
              for (var i=0, l = imgs.length; i < l; i++) {
                if (imgs[i].complete) {
                  imgCount--;
                }
              }
              if (imgCount) {
                $(imgs).bind('load.ct error.ct', function() {
                  imgCount--;
                  if (imgCount === 0) {
                    $cluetipWait.hide();
                    $(imgs).unbind('.ct');
                    if (isActive) { cluetipShow(pY); }
                  }
                });
              } else {
                $cluetipWait.hide();
                if (isActive) { cluetipShow(pY); }
              }
            }
          };

          ajaxMergedSettings = $.extend(true, {}, opts.ajaxSettings, ajaxSettings);

          if ( caches[cacheKey] ) {
            cachedAjax( caches[cacheKey], ajaxMergedSettings );
          } else {
            $.ajax(ajaxMergedSettings);
          }
        }
      }
/***************************************
* load an element from the same page
***************************************/
      else if (opts.local) {
        var $localContent = $(tipAttribute + (/^#\S+$/.test(tipAttribute) ? '' : ':eq(' + index + ')')).clone(true).show();
        if (opts.localIdSuffix) {
          $localContent.attr('id', $localContent[0].id + opts.localIdSuffix);
        }
        $cluetipInner.html($localContent);
        cluetipShow(pY);
      }
    };

    $link.unbind('showCluetip.cluetip', activate).bind('showCluetip.cluetip', activate);

// get dimensions and options for cluetip and prepare it to be shown
    var cluetipShow = function(bpY) {
      var $closeLink, dynamicClasses, heightDiff,
          titleHTML = tipTitle || opts.showTitle && '&nbsp;',
          bgY = '', direction = '', insufficientX = false;
      var stickyClose = {
        bottom: function($cLink) {
          $cLink.appendTo($cluetipInner);
        },
        top: function($cLink) {
          $cLink.prependTo($cluetipInner);
        },
        title: function($cLink) {
          $cLink.prependTo($cluetipTitle);
        }
      };

      $cluetip.addClass('cluetip-' + ctClass);
      if (opts.truncate) {
        var $truncloaded = $cluetipInner.text().slice(0,opts.truncate) + '...';
        $cluetipInner.html($truncloaded);
      }

      if (titleHTML) {
        $cluetipTitle.show().html(titleHTML);
      } else {
        $cluetipTitle.hide();
      }

      if (opts.sticky) {
        if (stickyClose[opts.closePosition]) {
          $closeLink = $('<div class="cluetip-close"><a href="#">' + opts.closeText + '</a></div>');
          stickyClose[opts.closePosition]( $closeLink );
          $closeLink.bind('click.cluetip', function() {
            cluetipClose();
            return false;
          });
        }
        if (opts.mouseOutClose) {
          $link.unbind('mouseleave.cluetipMoc');
          $cluetip.unbind('mouseleave.cluetipMoc');
          if (opts.mouseOutClose == 'both' || opts.mouseOutClose == 'cluetip' || opts.mouseOutClose === true) { // true implies 'cluetip' for backwards compatability
            $cluetip.bind('mouseleave.cluetipMoc', mouseOutClose);
          }
          if (opts.mouseOutClose == 'both' || opts.mouseOutClose == 'link') {
            $link.bind('mouseleave.cluetipMoc', mouseOutClose);
          }
        }
      }

// now that content is loaded, finish the positioning
      $cluetipOuter.css({zIndex: $link.data('cluetip').zIndex, overflow: defHeight == 'auto' ? 'visible' : 'auto', height: defHeight});
      tipHeight = defHeight == 'auto' ? Math.max($cluetip.outerHeight(),$cluetip.height()) : parseInt(defHeight,10);
      tipY = posY;
      baseline = sTop + wHeight;
      insufficientX = (posX < mouseX && (Math.max(posX, 0) + tipWidth > mouseX));
      if (opts.positionBy == 'fixed') {
        tipY = posY - opts.dropShadowSteps + tOffset;
      } else if (opts.positionBy == 'topBottom' || opts.positionBy == 'bottomTop' || insufficientX) {
        if (opts.positionBy == 'topBottom') {
          if (posY + tipHeight + tOffset < baseline && mouseY - sTop < tipHeight + tOffset) {
            direction = 'bottom';
          } else {
            direction = 'top';
          }
        } else if (opts.positionBy == 'bottomTop' || insufficientX) {
          if (posY + tipHeight + tOffset > baseline && mouseY - sTop > tipHeight + tOffset) {
            direction = 'top';
          } else {
            direction = 'bottom';
          }
        }
        // We should now have a direction. Compute tipY
        if (opts.snapToEdge) {
          if (direction == 'top') {
            tipY = linkTop - tipHeight - tOffset;
          } else if (direction == 'bottom') {
            tipY = linkBottom + tOffset;
          }
        } else {
          if (direction == 'top') {
            tipY = mouseY - tipHeight - tOffset;
          } else if (direction == 'bottom') {
            tipY = mouseY + tOffset;
          }
        }
      } else if ( posY + tipHeight + tOffset > baseline ) {
        tipY = (tipHeight >= wHeight) ? sTop : baseline - tipHeight - tOffset;
      } else if ($link.css('display') == 'block' || link.tagName.toLowerCase() == 'area' || opts.positionBy == "mouse") {
        tipY = bpY - tOffset;
      } else {
        tipY = posY - opts.dropShadowSteps;
      }
      if (direction === '') {
        direction = posX < linkLeft ? 'left' :  'right';
      }
      // add classes
      dynamicClasses = ' clue-' + direction + '-' + ctClass + ' cluetip-' + ctClass;
      if (ctClass == 'rounded') {
        dynamicClasses += ' ui-corner-all';
      }
      $cluetip.css({top: tipY + 'px'}).attrProp({'className': standardClasses + dynamicClasses});
      // set up arrow positioning to align with element
      if (opts.arrows) {
        if ( /(left|right)/.test(direction) ) {
          heightDiff = $cluetip.height() - $cluetipArrows.height();
          bgY = posX >= 0 && bpY > 0 ? (posY - tipY - opts.dropShadowSteps) : 0;
          bgY = heightDiff > bgY ? bgY : heightDiff;
          bgY += 'px';
        }
        $cluetipArrows.css({top: bgY}).show();
      } else {
        $cluetipArrows.hide();
      }

// (first hide, then) ***SHOW THE CLUETIP***
      // handle dropshadow divs first
      $dropShadow = createDropShadows($cluetip, opts);
      if ($dropShadow && $dropShadow.length) {
        $dropShadow.hide().css({height: tipHeight, width: tipInnerWidth, zIndex: $link.data('cluetip').zIndex-1}).show();
      }

      if (!closeOnDelay) {
        $cluetip.hide();
      }
      clearTimeout(closeOnDelay);
      closeOnDelay = null;

      // show the cluetip
      $cluetip[opts.fx.open](opts.fx.openSpeed || 0);

      if ($.fn.bgiframe) { $cluetip.bgiframe(); }

      // trigger the optional onShow function
      opts.onShow.call(link, $cluetip, $cluetipInner);
    };

/***************************************
   =INACTIVATION
-------------------------------------- */
    var inactivate = function(event) {
      isActive = false;
      $cluetipWait.hide();
      if (!opts.sticky || (/click|toggle/).test(opts.activation) ) {
        // delayed close (not fully tested)
        if (opts.delayedClose > 0) {
          clearTimeout(closeOnDelay);
          closeOnDelay = null;
          closeOnDelay = setTimeout(cluetipClose, opts.delayedClose);
        } else {
          cluetipClose();
          clearTimeout(closeOnDelay);
        }
      }

      if (opts.hoverClass) {
        $link.removeClass(opts.hoverClass);
      }
    };

    // close cluetip and reset some things
    var cluetipClose = function(el) {
      var $closer = el && el.data('cluetip') ? el : $link,
          ct = $closer.data('cluetip') && $closer.data('cluetip').selector,
          ctSelector = ct || 'div.cluetip',
          $cluetip = $(ctSelector),
          $cluetipInner = $cluetip.find(prefix + 'cluetip-inner'),
          $cluetipArrows = $cluetip.find(prefix + 'cluetip-arrows');

      $cluetip.hide().removeClass();
      opts.onHide.call($closer[0], $cluetip, $cluetipInner);

      if (ct) {
        $closer.removeClass('cluetip-clicked');
        $link.css('cursor', $link.data('cluetip').cursor);
      }
      if (ct && tipTitle) {
        $closer.attrProp(opts.titleAttribute, tipTitle);
      }

      if (opts.arrows) {
        $cluetipArrows.css({top: ''});
      }
      if ($dropShadow) {
        $dropShadow.hide();
      }
    };

    // Check to see if we should be closing by checking where the user is hovering.
    // We do a short 50ms delay for two reasons: to prevent flicker, and to allow the user time to hover on other element
    var mouseOutClose = function() {
      var el = this;
      clearTimeout(closeOnDelay);
      closeOnDelay = setTimeout(function() {
        var linkOver = $link.data('cluetip').entered,
            cluetipOver = $cluetip.data('entered'),
            entered = false;

        if ( opts.mouseOutClose == 'both' && (linkOver || cluetipOver) ) {
          entered = true;
        }
        // true implies 'cluetip' for backwards compatibility
        else if ( (opts.mouseOutClose === true || opts.mouseOutClose == 'cluetip') && cluetipOver) {
          entered = true;
        }
        else if (opts.mouseOutClose == 'link' && linkOver) {
          entered = true;
        }

        if ( !entered ) {
          // All checks pass, close the cluetip
          cluetipClose.call(el);
        }

      }, opts.delayedClose);
    };

    $(document).unbind('hideCluetip.cluetip').bind('hideCluetip.cluetip', function(e) {
      cluetipClose( $(e.target) );
    });
/***************************************
   =BIND EVENTS
-------------------------------------- */
  // activate by click
      if ( (/click|toggle/).test(opts.activation) ) {
        $link.bind('click.cluetip', function(event) {
          if ($cluetip.is(':hidden') || !$link.is('.cluetip-clicked')) {
            activate(event);
            $('.cluetip-clicked').removeClass('cluetip-clicked');
            $link.addClass('cluetip-clicked');
          } else {
            inactivate(event);
          }
          return false;
        });
  // activate by focus; inactivate by blur
      } else if (opts.activation == 'focus') {
        $link.bind('focus.cluetip', function(event) {
          $link.attrProp('title','');
          activate(event);
        });
        $link.bind('blur.cluetip', function(event) {
          $link.attrProp('title', $link.data('cluetip').title);
          inactivate(event);
        });
  // activate by hover
      } else {

        // clicking is returned false if clickThrough option is set to false
        $link[opts.clickThrough ? 'unbind' : 'bind']('click.cluetip', returnFalse);

        //set up mouse tracking
        var mouseTracks = function(evt) {
          if (opts.tracking) {
            var trackX = posX - evt.pageX;
            var trackY = tipY ? tipY - evt.pageY : posY - evt.pageY;
            $link.bind('mousemove.cluetip', function(evt) {
              $cluetip.css({left: evt.pageX + trackX, top: evt.pageY + trackY });
            });
          }
        };

        if ($.fn.hoverIntent && opts.hoverIntent) {
          $link.hoverIntent({
            sensitivity: opts.hoverIntent.sensitivity,
            interval: opts.hoverIntent.interval,
            over: function(event) {
              activate(event);
              mouseTracks(event);
            },
            timeout: opts.hoverIntent.timeout,
            out: function(event) {
              inactivate(event);
              $link.unbind('mousemove.cluetip');
            }
          });
        } else {
          $link.bind('mouseenter.cluetip', function(event) {
            activate(event);
            mouseTracks(event);
          })
          .bind('mouseleave.cluetip', function(event) {
            inactivate(event);
            $link.unbind('mousemove.cluetip');
          });
        }

        $link.bind('mouseover.cluetip', function(event) {
          $link.attrProp('title','');
        }).bind('mouseleave.cluetip', function(event) {
          $link.attrProp('title', $link.data('cluetip').title);
        });
      }

      // trigger a cached Ajax response
      function cachedAjax(info, settings) {
        var status = info.status;
        settings.beforeSend(info.xhr, settings);
        if ( status == 'error' ) {
          settings[status](info.xhr, info.textStatus);
        } else if (status == 'success') {
          settings[status](info.data, info.textStatus, info.xhr);
        }
        settings.complete(info.xhr, settings.textStatus);
      }

    }); // end this.each

    /** =private functions
    ************************************************************/
    //empty function
    function doNothing() {}

    // create a string to be used as an identifier for ajax caches
    function getCacheKey(url, data) {
      var cacheKey = url || '';
      data = data || '';

      if (typeof data == 'object') {
        $.each(data, function(key, val) {
          cacheKey += '-' + key + '-' + val;
        });
      } else if (typeof data == 'string') {
        cacheKey += data;
      }

      return cacheKey;
    }

    /** =create dropshadow divs **/

    function createDropShadows($cluetip, options, newDropShadow) {
      var dsStyle = '',
          dropShadowSteps = (options.dropShadow && options.dropShadowSteps) ? +options.dropShadowSteps : 0;

      if ($.cluetip.boxShadow) {
        if ( dropShadowSteps ) {
          dsStyle = '1px 1px ' + dropShadowSteps + 'px rgba(0,0,0,0.5)';
        }
        var dsOffsets = dropShadowSteps === 0 ? '0 0 ' : '1px 1px ';
        $cluetip.css($.cluetip.boxShadow, dsStyle);
        return false;
      }
      var oldDropShadow = $cluetip.find('.cluetip-drop-shadow');
      if (dropShadowSteps == oldDropShadow.length) {
        return oldDropShadow;
      }
      oldDropShadow.remove();
      var dropShadows = [];
      for (var i=0; i < dropShadowSteps;) {
        dropShadows[i++] = '<div style="top:' + i + 'px;left:' + i + 'px;"></div>';
      }

      newDropShadow = $(dropShadows.join(''))
      .css({
        position: 'absolute',
        backgroundColor: '#000',
        zIndex: cluezIndex -1,
        opacity: 0.1
      })
      .addClass('cluetip-drop-shadow')
      .prependTo($cluetip);
      return newDropShadow;

    }

    return this;
  };

  (function() {
    $.support = $.support || {};

    // check support for CSS3 properties (currently only boxShadow)
    var div = document.createElement('div'),
        divStyle = div.style,
        styleProps = ['boxShadow'],
        prefixes = ['moz', 'Moz', 'webkit', 'o'];

    for (var i=0, sl = styleProps.length; i < sl; i++) {
      var prop = styleProps[i],
          uProp = prop.charAt(0).toUpperCase() + prop.slice(1);

      if ( typeof divStyle[ prop ] !== 'undefined' ) {
        $.cluetip[ prop ] = prop;
      } else {
        for (var j=0, pl = prefixes.length; j < pl; j++) {

          if (typeof divStyle[ prefixes[j] + uProp ] !== 'undefined') {
            $.cluetip[ prop ] = prefixes[j] + uProp;
            break;
          }
        }
      }

      if ( !$.support[ prop ] ) {
        $.support[ prop ] = $.cluetip[ prop ];
      }
    }

    div = null;
  })();

  $.fn.cluetip.defaults = $.cluetip.defaults;

})(jQuery);

/**
* hoverIntent is similar to jQuery's built-in "hover" function except that
* instead of firing the onMouseOver event immediately, hoverIntent checks
* to see if the user's mouse has slowed down (beneath the sensitivity
* threshold) before firing the onMouseOver event.
* 
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* hoverIntent is currently available for use in all personal or commercial 
* projects under both MIT and GPL licenses. This means that you can choose 
* the license that best suits your project, and use it accordingly.
* 
* // basic usage (just like .hover) receives onMouseOver and onMouseOut functions
* $("ul li").hoverIntent( showNav , hideNav );
* 
* // advanced usage receives configuration object only
* $("ul li").hoverIntent({
*	sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
*	interval: 50,   // number = milliseconds of polling interval
*	over: showNav,  // function = onMouseOver callback (required)
*	timeout: 100,   // number = milliseconds delay before onMouseOut function call
*	out: hideNav    // function = onMouseOut callback (required)
* });
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @return    The object (aka "this") that called hoverIntent, and the event object
* @author    Brian Cherne <brian@cherne.net>
* 
* modified by Karl Swedberg. Namespaced events in order to work better with clueTip plugin
*/
(function($) {
	$.fn.hoverIntent = function(f,g) {
		// default configuration options
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		// override configuration options with user supplied object
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// next three lines copied from jQuery.hover, ignore children onMouseOver/onMouseOut
			var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
			while ( p && p != this ) { try { p = p.parentNode; } catch(e) { p = this; } }
			if ( p == this ) { return false; }

			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// else e.type == "onmouseover"
			if (e.type == "mouseover") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).bind("mousemove.cluetip",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

			// else e.type == "onmouseout"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove.cluetip",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// bind the function to the two event listeners
		return this.bind('mouseover.cluetip', handleHover).bind('mouseout.cluetip', handleHover);
	};
})(jQuery);
var memberArray = [];

function formatLink(string) {
    string = string.replace(/[^a-z0-9\s]/gi, '');
    string = string.toLowerCase();
    string = string.replace(/[_\s]/g, '');
    return string;
}

function clueTipSoloMemberItems() {
    $(document).trigger('hideCluetip');

    var memberId = $('#' + $(this).attr('for')).val();
    $items = $('.'+memberId);

    // HIDE ALL ITEMS
    $('#all-items-holder .item').hide();
    $('#member-bio').hide();

    $(function() {
        $('html, body').animate({scrollTop:0}, 'slow', function() {
            $('body').addClass('js-single-member');
        });

        $items.each(function(index, element) {
            $(element).delay(index*250).fadeIn(400); // delays each subsequent fade by 50ms.
        });

        var selectMember = _.where(memberArray, {id:memberId});

        $('#member-bio').show();
        $('#member-bio .bio > p').html(selectMember[0].bio).css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .name').html(selectMember[0].name).css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .title').html(selectMember[0].title).css('opacity',0).show().animate({opacity:1}, 500);
        $('#sidebar-name').html(selectMember[0].name).css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .permalink a').show().animate({opacity:1}, 500);
    });
}


function Members(data) {
    this.name = data.name;
    this.bio = data.bio;
    this.sex = data.sex;
    this.id = data.id;
    this.items = data.items;
    this.title = data.title;
    this.pos = ''
    this.buildLi = function() {
        var liArray = [];
        var $ul = $('<ul/>', {
            'class':this.id,
            'id':this.id
        });
        var items = this.items;
        var member = this;
        var sex = this.sex;
        $.each(items, function() {
            // console.dir(this);
                var item = $(this);
                
                var bio = this.bio;
                var src = this.image;
                var name = this.name;
                var coords = this.coords;
                var id = formatLink(name);
                var usemap = member.id + id;
                var img, map, area, li, a;

                var pos = this.position;

                var blankGif = 'images/sprites/blank.gif';

                src = base + src;

                var li = $('<li/>', {
                    'class':'item' + ' ' + id + ' ' + member.id,
                    'style':'opacity:0'
                });


                // console.log('This is src:' + src);
                // src = base + src;
                if(coords) {
                    img = $('<img/>', {
                        'src':src,
                        // 'src':blankGif,
                        'alt':item.name,
                        'usemap':'#' + usemap,
                        'data-src':src
                    }),
                    map = $('<map/>', {
                        'id':usemap,
                        'name':usemap,
                        'class':'map-link',
                        'data-person':member.id
                    }),
                    area = $('<area/>', {
                        href:'#',
                        shape:'poly',
                        coords:coords,
                        alt: id,
                        'data-person':member.id,
                        'data-item':id,
                        "title": "|" + "|" + member.name + "\'s" + "|" + name + "|" + bio + "|" + "<label for='"+member.id+"-"+id+"' class='permalink'>> View " + sex + " stuff</label><input type='radio' name='"+member.id+"' id='"+member.id+"-"+id+"' value='"+member.id+"'>",
                        'class':'cluetip-div'
                    });

                    map.append(area);
                    li.append(img);
                    li.append(map);
                    // li.appendTo($ul);

                    liArray.push(li);


                } else {
                    img = $('<img/>', {
                        src:src,
                        // src:blankGif,
                        alt:item.name,
                        'data-src':src
                    }),
                    a = $('<a/>', {
                        href:'#',
                        'data-person':member.id,
                        'data-item': id,
                        "title": "|" + "|" + member.name + "\'s" + "|" + name + "|" + bio + "|" + "<label for='"+member.id+"-"+id+"' class='permalink'>> View " + sex + " stuff</label><input type='radio' name='"+member.id+"' id='"+member.id+"-"+id+"' value='"+member.id+"'>",
                        class:'cluetip-div'
                    });
                    a.append(img);
                    li.append(a);
                    // li.appendTo($ul);
                    liArray.push(li);
                }

            });

        // return $ul;
        return liArray;
    };

    this.attachToDom=function(data) {
        var ul = $('<ul/>', {'id':'all-items', 'class':'all-items'});
        $('#all-items-holder').append(ul);
        
        for(var i=0; i< data.length; i++) {
            var li = data[i];
            $(li).appendTo(ul);
            $(li).delay(60*i).animate({opacity: "1"}, "fast");
        }

        // ADD CLUE TIP
        var deviceWidth;
        if(device == 'desk') {
            deviceWidth = 400;
            openSpeed = 400;
        } else { 
            deviceWidth = 280;
            openSpeed = 0;
        }
        $('.cluetip-div').cluetip({
            splitTitle: '|',
            showTitle: false,
            sticky: true,
            dropShadow: true,
            arrows: true,
            dropShadowSteps:16,
            width:deviceWidth,
            positionBy: 'bottomTop',
            closeText:'x',
            fx: {
                open: 'fadeIn',
                openSpeed:openSpeed
            },
            hoverIntent: {
                sensitivity:  5,
                interval:     30,
                timeout:      0
            },
            onShow: function(ct, ci){
                $('label').click(clueTipSoloMemberItems);
                $('.cluetip-close').click(function() {
                    $(document).trigger('hideCluetip');
                });
            }
        });


    };

    this.removeFromDom=function(data) {
        $('#all-items-holder').remove(data);
    };
}

var setupMembers = {

    init: function() {
        this.getData();
    },

    getData: function() {
        $.getJSON(base + "js/data/members.json", function(data) {
            setupMembers.buildNewMember(data);
        });
    },

    buildNewMember:function(data) {
        for (i = 0; i < data.members.length; i++) {
            var memberInfo = data.members[i];
            var member = new Members(memberInfo);
            memberArray.push(member);
        }
        // ATTACH MEMBERS ON PAGE LOAD
        var ul;
        ul = $('<ul/>', {'id':'all-items', 'class':'all-items'});
        $.each(memberArray, function() {
            var heard = $(this)[0];
            var items = heard.buildLi();
            $.each(items, function(i) { 
            $(this).appendTo(ul);
            $(this).animate({opacity: "1"}, "fast");
            });
        });
        ul.appendTo($('#all-items-holder'));

        $('.item').addClass('heardcity');

        // ADD CLUE TIP
        var deviceWidth;
        if(device == 'desk') {
            deviceWidth = 400;
            openSpeed = 400;
        } else { 
            deviceWidth = 280;
            openSpeed = 0;
        }

        $('.cluetip-div').cluetip({
            splitTitle: '|',
            showTitle: false,
            sticky: true,
            dropShadow: true,
            arrows: true,
            dropShadowSteps:16,
            width:deviceWidth,
            positionBy: 'bottomTop',
            closeText:'x',
            fx: {
                open: 'fadeIn', // can be 'show' or 'slideDown' or 'fadeIn'
                openSpeed:openSpeed
            },
            hoverIntent: {
                sensitivity:  5,
                interval:     30,
                timeout:      0
            },
            onShow: function(ct, ci){
                $('label').click(clueTipSoloMemberItems);
                $('.cluetip-close').click(function() {
                    $(document).trigger('hideCluetip');
                });
            }
        });
    }

};

setupMembers.init();
$(document).ready(function() {

    var clickedMembers = [];
    $sidebarLinks = $('#member-fixed li .sidebar-link'),
    $allMembers = $('.all-members');


    // IF SELECTED MEMBER
    
        if(selectedMember) {
            setTimeout(function() {
            $('#all-items').remove();
            var memberId = selectedMember;

            $('a[href="#'+selectedMember+'"]').addClass('current');

            var selectMember = _.where(memberArray, {id:memberId});
            var lis = selectMember[0].buildLi();
            selectMember[0].attachToDom(lis);

            $('#member-bio .bio > p').html(selectMember[0].bio).css('opacity',0).show().animate({opacity:1}, 500);
            $('#member-bio .name').html(selectMember[0].name).css('opacity',0).show().animate({opacity:1}, 500);
            $('#member-bio .title').html(selectMember[0].title).css('opacity',0).show().animate({opacity:1}, 500);
            $('#sidebar-name').html(selectMember[0].name).css('opacity',0).show().animate({opacity:1}, 500);
            $('#member-bio .permalink a').show().animate({opacity:1}, 500);

            $('body').addClass('js-single-member');

            // ADD MEMBER NAME TO TOP OF SUB NAV
            $('#member-title').text(selectMember[0].name);
        }, 50);

    } else {
        // SHOW HEARDCITY BIO
        $('#member-bio .bio > p').html('People collect things and those things say a lot about a person. Our stuff can be something that reminds us of our past or just something that we enjoy having. They inevitably become a piece of who we are. Which can includes almost everything you can imagine – from photos, souvenirs, tools, things from a person or place that we care about. Our team at Heard City is made up of some pretty incredible people. Get to know us by checking out our stuff. You\'ll see what passions we have and what kind of things we do in our free time. It\'s an honest way to see who we are as a collective.').css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .name').html('Heard City').css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .title').html('').css('opacity',0).show().animate({opacity:1}, 500);
        $('#sidebar-name').html('Heard City').css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .permalink a').hide();
    }
    

    // SUB NAV MEMBER CLICKS
    $sidebarLinks.click(function(event) {
        event.stopPropagation();
        $(document).trigger('hideCluetip');
        // REMOVE OBJECTS
        $('#all-items').remove();
        
        $('.sidebar-link.current, .all-members.current').removeClass('current');
        $(this).addClass('current');

        var memberId = $(this).data('person');

        if(clickedMembers.length > 0) {
            var lastMemId = clickedMembers.pop();
            var lastMember = _.where(memberArray, {id:memberId});
            $('#all-items-holder ul').remove();

        }

        clickedMembers.push(memberId);

        $(function() {
            $('html, body').animate({scrollTop:0}, 'slow', function() {
                $('body').addClass('js-single-member');
            });

            // $items.each(function(index, element) {
            //     $(element).delay(index*250).fadeIn(400); // delays each subsequent fade by 50ms.
            // });

            var selectMember = _.where(memberArray, {id:memberId});
            var lis = selectMember[0].buildLi();
            selectMember[0].attachToDom(lis);

            $('#member-bio .bio > p').html(selectMember[0].bio).css('opacity',0).show().animate({opacity:1}, 500);
            $('#member-bio .name').html(selectMember[0].name).css('opacity',0).show().animate({opacity:1}, 500);
            $('#sidebar-name').html(selectMember[0].name).css('opacity',0).show().animate({opacity:1}, 500);
            $('#member-bio .title').html(selectMember[0].title).css('opacity',0).show().animate({opacity:1}, 500);
            $('#member-bio .permalink a').show().animate({opacity:1}, 500);

            $('body').addClass('js-single-member');

            // ADD MEMBER NAME TO TOP OF SUB NAV
            $('#member-title').text(selectMember[0].name);
        });
    });




    // ALL MEMBERS CLICK 
    $allMembers.click(function() {
        $(document).trigger('hideCluetip');

        var memberId = $(this).data('person');
        if(clickedMembers.length > 0) {
            var lastMemId = clickedMembers.pop();
            $('#all-items-holder .'+lastMemId).remove();
        }
        clickedMembers.push(memberId);

        $('.sidebar-link.current').removeClass('current');
        $('#all-members').addClass('current');

        // build heardcity ul
        var ul;
        $('#all-items').remove();
        ul = $('<ul/>', {'id':'all-items', 'class':'all-items'});

        $.each(memberArray, function() {
            var heard = $(this)[0];
            var items = heard.buildLi();
            $.each(items, function() {
                $(this).appendTo(ul);
                $(this).delay(20*i).animate({opacity: "1"}, "fast");
            });
        });
        ul.appendTo($('#all-items-holder'));

        $('.item').addClass('heardcity');

        if($('body').hasClass('js-single-member')) {
            $('body').removeClass('js-single-member');
        }

        // SHOW HEARDCITY BIO
        $('#member-bio .bio > p').html('People collect things and those things say a lot about a person. Our stuff can be something that reminds us of our past or just something that we enjoy having. They inevitably become a piece of who we are. Which can includes almost everything you can imagine – from photos, souvenirs, tools, things from a person or place that we care about. Our team at Heard City is made up of some pretty incredible people. Get to know us by checking out our stuff. You\'ll see what passions we have and what kind of things we do in our free time. It\'s an honest way to see who we are as a collective.').css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .name').html('Heard City').css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .title').html('').css('opacity',0).show().animate({opacity:1}, 500);
        $('#sidebar-name').html('Heard City').css('opacity',0).show().animate({opacity:1}, 500);
        $('#member-bio .permalink a').hide();

        // ADD MEMBER NAME TO TOP OF SUB NAV
        $('#member-title').text('Heard City');

        // ADD CLUE TIP
        var deviceWidth;
        if(device == 'desk') {
            deviceWidth = 400;
            openSpeed = 400;
        } else { 
            deviceWidth = 280;
            openSpeed = 0;
        }

        $('.cluetip-div').cluetip({
            splitTitle: '|',
            showTitle: false,
            sticky: true,
            dropShadow: true,
            arrows: true,
            dropShadowSteps:16,
            width:deviceWidth,
            positionBy: 'bottomTop',
            closeText:'x',
            fx: {
                open: 'fadeIn',
                openSpeed:openSpeed
            },
            hoverIntent: {
                sensitivity:  5,
                interval:     30,
                timeout:      0
            },
            onShow: function(ct, ci){
                $('label').click(clueTipSoloMemberItems);
                $('.cluetip-close').click(function() {
                    $(document).trigger('hideCluetip');
                });
            }
        });
    });
});
function formatLink(string) {
    string = string.replace(/[^a-z0-9\s]/gi, '');
    string = string.toLowerCase();
    string = string.replace(/[_\s]/g, '');
    return string;
}


$('#page-title').text('Our Team');
$('#page-ourteam').addClass('mobile-hidden current');

// VARS
var $body = $('body'),
    $mainMenu = $('#page-fixed'),
    $subNav = $('#member-fixed'),
    $img = $('img'),
    $clickClose = $('#click-close'),
    $sidebarLinks = $('#member-fixed .sidebar-link'),
    $clueTipPermalink = $('.item-list .permalink'),
    $memberBioPermalink = $('#member-bio .permalink > a');

    $(document).ready(function() {
          // HIDE SPINNER
        $('.preload-wrap').removeClass('preload-wrap');
        $('#ajax-loader').fadeOut(500);

    });
  
     // INITIALIZE MENU
    $mainMenu.flexNav({
        'hoverIntent': false,
        'hover':false,
        'buttonSelector': '#page-button'
    });

    // SUB MENU
    $('#member-fixed').flexNav({
        'hoverIntent': false,
        'hover':false,
        'buttonSelector': '#member-button'
    });

// TOGGLE SIDE BAR
    $('#member-button').click( function() {
        $('#member-header').toggleClass('side-bar-closed');
        $('#member-button').toggleClass('rotate');
        $clickClose.toggleClass('hidden');
        $clickClose.click(function() {
            $('#member-header').toggleClass('side-bar-closed');
        });
    });

    $("a[href='#top']").click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });


    // OUR TEAM SUB NAV
    $('#our-team-button').click(function() {
        // console.log('I am clicked!');
        $('#member-header').toggleClass('side-bar-closed');
        $('#member-button').toggleClass('rotate');
        $clickClose.toggleClass('hidden');
        $clickClose.click(function() {
            $('#member-header').toggleClass('side-bar-closed');
        });
    });


// IF SELECTED MEMBER

/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y }
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;