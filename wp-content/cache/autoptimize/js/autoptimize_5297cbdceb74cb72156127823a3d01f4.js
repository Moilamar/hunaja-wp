/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
jQuery(function(t){if("undefined"==typeof wc_add_to_cart_params)return!1;var a=function(){t(document.body).on("click",".add_to_cart_button",this.onAddToCart).on("click",".remove_from_cart_button",this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("added_to_cart",this.updateCartPage).on("added_to_cart removed_from_cart",this.updateFragments)};a.prototype.onAddToCart=function(a){var o=t(this);if(o.is(".ajax_add_to_cart")){if(!o.attr("data-product_id"))return!0;a.preventDefault(),o.removeClass("added"),o.addClass("loading");var r={};t.each(o.data(),function(t,a){r[t]=a}),t(document.body).trigger("adding_to_cart",[o,r]),t.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),r,function(a){a&&(a.error&&a.product_url?window.location=a.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?t(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,o]):window.location=wc_add_to_cart_params.cart_url)})}},a.prototype.onRemoveFromCart=function(a){var o=t(this),r=o.closest(".woocommerce-mini-cart-item");a.preventDefault(),r.block({message:null,overlayCSS:{opacity:.6}}),t.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),{cart_item_key:o.data("cart_item_key")},function(a){a&&a.fragments?t(document.body).trigger("removed_from_cart",[a.fragments,a.cart_hash]):window.location=o.attr("href")}).fail(function(){window.location=o.attr("href")})},a.prototype.updateButton=function(a,o,r,e){(e=void 0!==e&&e)&&(e.removeClass("loading"),e.addClass("added"),wc_add_to_cart_params.is_cart||0!==e.parent().find(".added_to_cart").length||e.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),t(document.body).trigger("wc_cart_button_updated",[e]))},a.prototype.updateCartPage=function(){var a=window.location.toString().replace("add-to-cart","added-to-cart");t(".shop_table.cart").load(a+" .shop_table.cart:eq(0) > *",function(){t(".shop_table.cart").stop(!0).css("opacity","1").unblock(),t(document.body).trigger("cart_page_refreshed")}),t(".cart_totals").load(a+" .cart_totals:eq(0) > *",function(){t(".cart_totals").stop(!0).css("opacity","1").unblock(),t(document.body).trigger("cart_totals_refreshed")})},a.prototype.updateFragments=function(a,o){o&&(t.each(o,function(a){t(a).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),t.each(o,function(a,o){t(a).replaceWith(o),t(a).stop(!0).css("opacity","1").unblock()}),t(document.body).trigger("wc_fragments_loaded"))},new a});
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&n.message!==undefined?n.message:undefined;if(!(n=e.extend({},e.blockUI.defaults,n||{})).ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=y===undefined?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,g={};e(t).data("blockUI.history",g),g.el=m,g.parent=m.parentNode,g.display=m.style.display,g.position=m.style.position,g.parent&&g.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var v,I,w,U,x=n.baseZ;v=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x+++';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&v.css("opacity",0);var C=[v,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=a(t,"borderTopWidth"),T=a(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",e<2)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(n.css&&n.css.top?parseInt(n.css.top,10):0)+') + "px"';o.setExpression("top",i)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&v.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock.bind(w)();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):d(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,d=e(t),a=d.data("blockUI.history"),c=d.data("blockUI.timeout");c&&(clearTimeout(c),d.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=d.data("blockUI.onUnblock"),d.removeData("blockUI.onUnblock"));var r;r=l?e(document.body).children().filter(".blockUI").add("body > .blockUI"):d.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0==--s&&n(r,a,o,t)})):n(r,a,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),d=l.width(),a=l[0].style.width;l.width(d-1).width(d),l[0].style.width=a}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var d="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(d,n,s):e(document).unbind(d,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,d=e(t.target);return d.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),d.parents("div."+s.blockMsgClass).length>0||0===d.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[!0===e?b.length-1:0];t&&t.focus()}}function d(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-a(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-a(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function a(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),n===undefined&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});
jQuery(function(o){o(".woocommerce-ordering").on("change","select.orderby",function(){o(this).closest("form").submit()}),o("input.qty:not(.product-quantity input.qty)").each(function(){var e=parseFloat(o(this).attr("min"));e>=0&&parseFloat(o(this).val())<e&&o(this).val(e)}),jQuery(".woocommerce-store-notice__dismiss-link").click(function(){Cookies.set("store_notice","hidden",{path:"/"}),jQuery(".woocommerce-store-notice").hide()}),"hidden"===Cookies.get("store_notice")?jQuery(".woocommerce-store-notice").hide():jQuery(".woocommerce-store-notice").show()});
jQuery(function(e){function t(){o&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function n(e){o&&(localStorage.setItem(a,e),sessionStorage.setItem(a,e))}function r(){e.ajax(s)}if("undefined"==typeof wc_cart_fragments_params)return!1;var o,a=wc_cart_fragments_params.ajax_url.toString()+"-wc_cart_hash";try{o="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(w){o=!1}var s={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:function(r){r&&r.fragments&&(e.each(r.fragments,function(t,n){e(t).replaceWith(n)}),o&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(r.fragments)),n(r.cart_hash),r.cart_hash&&t()),e(document.body).trigger("wc_fragments_refreshed"))}};if(o){var i=null;e(document.body).on("wc_fragment_refresh updated_wc_div",function(){r()}),e(document.body).on("added_to_cart",function(e,r,o){var s=sessionStorage.getItem(a);null!==s&&s!==undefined&&""!==s||t(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(r)),n(o)}),e(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(r,864e5)}),e(window).on("storage onstorage",function(e){a===e.originalEvent.key&&localStorage.getItem(a)!==sessionStorage.getItem(a)&&r()}),e(window).on("pageshow",function(t){t.originalEvent.persisted&&(e(".widget_shopping_cart_content").empty(),e(document.body).trigger("wc_fragment_refresh"))});try{var c=e.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(a),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=1*m+864e5,f=(new Date).getTime();if(d<f)throw"Fragment expired";i=setTimeout(r,d-f)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";e.each(c,function(t,n){e(t).replaceWith(n)}),e(document.body).trigger("wc_fragments_loaded")}catch(w){r()}}else r();Cookies.get("woocommerce_items_in_cart")>0?e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),e(document.body).on("adding_to_cart",function(){e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()})});
!function(){var a=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,b=navigator.userAgent.toLowerCase().indexOf("opera")>-1,c=navigator.userAgent.toLowerCase().indexOf("msie")>-1;(a||b||c)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var a,b=location.hash.substring(1);/^[A-z0-9_-]+$/.test(b)&&(a=document.getElementById(b),a&&(/^(?:a|select|input|button|textarea)$/i.test(a.tagName)||(a.tabIndex=-1),a.focus()))},!1)}();
!function(){function a(){for(var a=this;-1===a.className.indexOf("nav-menu");)"li"===a.tagName.toLowerCase()&&(-1!==a.className.indexOf("focus")?a.className=a.className.replace(" focus",""):a.className+=" focus"),a=a.parentElement}var b,c,d,e,f,g,h;if(b=document.getElementById("site-navigation"),b&&(c=b.getElementsByTagName("button")[0],"undefined"!=typeof c)){if(d=b.getElementsByTagName("ul")[0],"undefined"==typeof d)return void(c.style.display="none");for(d.setAttribute("aria-expanded","false"),-1===d.className.indexOf("nav-menu")&&(d.className+=" nav-menu"),c.onclick=function(){-1!==b.className.indexOf("toggled")?(b.className=b.className.replace(" toggled",""),c.setAttribute("aria-expanded","false"),d.setAttribute("aria-expanded","false")):(b.className+=" toggled",c.setAttribute("aria-expanded","true"),d.setAttribute("aria-expanded","true"))},e=d.getElementsByTagName("a"),f=d.getElementsByTagName("ul"),g=0,h=f.length;g<h;g++)f[g].parentNode.setAttribute("aria-haspopup","true");for(g=0,h=e.length;g<h;g++)e[g].addEventListener("focus",a,!0),e[g].addEventListener("blur",a,!0);!function(a){var b,c,d=a.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window)for(b=function(a){var b,c=this.parentNode;if(c.classList.contains("focus"))c.classList.remove("focus");else{for(a.preventDefault(),b=0;b<c.parentNode.children.length;++b)c!==c.parentNode.children[b]&&c.parentNode.children[b].classList.remove("focus");c.classList.add("focus")}},c=0;c<d.length;++c)d[c].addEventListener("touchstart",b,!1)}(b)}}();
!function(t,e,i,s){function o(e,i){this.element=e,this.options=t.extend({},r,i),this._defaults=r,this._name=n,this.init()}var n="stellar",r={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(t){t.hide()},showElement:function(t){t.show()}},a={scroll:{getLeft:function(t){return t.scrollLeft()},setLeft:function(t,e){t.scrollLeft(e)},getTop:function(t){return t.scrollTop()},setTop:function(t,e){t.scrollTop(e)}},position:{getLeft:function(t){return-1*parseInt(t.css("left"),10)},getTop:function(t){return-1*parseInt(t.css("top"),10)}},margin:{getLeft:function(t){return-1*parseInt(t.css("margin-left"),10)},getTop:function(t){return-1*parseInt(t.css("margin-top"),10)}},transform:{getLeft:function(t){var e=getComputedStyle(t[0])[c];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(t){var e=getComputedStyle(t[0])[c];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[5],10):0}}},l={position:{setLeft:function(t,e){t.css("left",e)},setTop:function(t,e){t.css("top",e)}},transform:{setPosition:function(t,e,i,s,o){t[0].style[c]="translate3d("+(e-i)+"px, "+(s-o)+"px, 0)"}}},f=function(){var e,i=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,s=t("script")[0].style,o="";for(e in s)if(i.test(e)){o=e.match(i)[0];break}return"WebkitOpacity"in s&&(o="Webkit"),"KhtmlOpacity"in s&&(o="Khtml"),function(t){return o+(o.length>0?t.charAt(0).toUpperCase()+t.slice(1):t)}}(),c=f("transform"),h=t("<div />",{style:"background:#fff"}).css("background-position-x")!==s,p=h?function(t,e,i){t.css({"background-position-x":e,"background-position-y":i})}:function(t,e,i){t.css("background-position",e+" "+i)},d=h?function(t){return[t.css("background-position-x"),t.css("background-position-y")]}:function(t){return t.css("background-position").split(" ")},u=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};o.prototype={init:function(){this.options.name=n+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===i.body&&(this.element=e),this.$scrollElement=t(this.element),this.$element=this.element===e?t("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==s?t(this.options.viewportElement):this.$scrollElement[0]===e||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var t=this,e=a[t.options.scrollProperty];this._getScrollLeft=function(){return e.getLeft(t.$scrollElement)},this._getScrollTop=function(){return e.getTop(t.$scrollElement)}},_defineSetters:function(){var e=this,i=a[e.options.scrollProperty],s=l[e.options.positionProperty],o=i.setLeft,n=i.setTop;this._setScrollLeft="function"==typeof o?function(t){o(e.$scrollElement,t)}:t.noop,this._setScrollTop="function"==typeof n?function(t){n(e.$scrollElement,t)}:t.noop,this._setPosition=s.setPosition||function(t,i,o,n,r){e.options.horizontalScrolling&&s.setLeft(t,i,o),e.options.verticalScrolling&&s.setTop(t,n,r)}},_handleWindowLoadAndResize:function(){var i=this,s=t(e);i.options.responsive&&s.bind("load."+this.name,function(){i.refresh()}),s.bind("resize."+this.name,function(){i._detectViewport(),i.options.responsive&&i.refresh()})},refresh:function(i){var s=this,o=s._getScrollLeft(),n=s._getScrollTop();i&&i.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),i&&i.firstLoad&&/WebKit/.test(navigator.userAgent)&&t(e).load(function(){var t=s._getScrollLeft(),e=s._getScrollTop();s._setScrollLeft(t+1),s._setScrollTop(e+1),s._setScrollLeft(t),s._setScrollTop(e)}),this._setScrollLeft(o),this._setScrollTop(n)},_detectViewport:function(){var t=this.$viewportElement.offset(),e=null!==t&&t!==s;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=e?t.top:0,this.viewportOffsetLeft=e?t.left:0},_findParticles:function(){var e=this;this._getScrollLeft(),this._getScrollTop();if(this.particles!==s)for(var i=this.particles.length-1;i>=0;i--)this.particles[i].$element.data("stellar-elementIsActive",s);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(i){var o,n,r,a,l,f,c,h,p,d=t(this),u=0,g=0,m=0,v=0;if(d.data("stellar-elementIsActive")){if(d.data("stellar-elementIsActive")!==this)return}else d.data("stellar-elementIsActive",this);e.options.showElement(d),d.data("stellar-startingLeft")?(d.css("left",d.data("stellar-startingLeft")),d.css("top",d.data("stellar-startingTop"))):(d.data("stellar-startingLeft",d.css("left")),d.data("stellar-startingTop",d.css("top"))),r=d.position().left,a=d.position().top,l="auto"===d.css("margin-left")?0:parseInt(d.css("margin-left"),10),f="auto"===d.css("margin-top")?0:parseInt(d.css("margin-top"),10),h=d.offset().left-l,p=d.offset().top-f,d.parents().each(function(){var e=t(this);return e.data("stellar-offset-parent")===!0?(u=m,g=v,c=e,!1):(m+=e.position().left,void(v+=e.position().top))}),o=d.data("stellar-horizontal-offset")!==s?d.data("stellar-horizontal-offset"):c!==s&&c.data("stellar-horizontal-offset")!==s?c.data("stellar-horizontal-offset"):e.horizontalOffset,n=d.data("stellar-vertical-offset")!==s?d.data("stellar-vertical-offset"):c!==s&&c.data("stellar-vertical-offset")!==s?c.data("stellar-vertical-offset"):e.verticalOffset,e.particles.push({$element:d,$offsetParent:c,isFixed:"fixed"===d.css("position"),horizontalOffset:o,verticalOffset:n,startingPositionLeft:r,startingPositionTop:a,startingOffsetLeft:h,startingOffsetTop:p,parentOffsetLeft:u,parentOffsetTop:g,stellarRatio:d.data("stellar-ratio")!==s?d.data("stellar-ratio"):1,width:d.outerWidth(!0),height:d.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var e,i=this,o=this._getScrollLeft(),n=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(e=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(e=e.add(this.$element)),e.each(function(){var e,r,a,l,f,c,h,u=t(this),g=d(u),m=0,v=0,L=0,_=0;if(u.data("stellar-backgroundIsActive")){if(u.data("stellar-backgroundIsActive")!==this)return}else u.data("stellar-backgroundIsActive",this);u.data("stellar-backgroundStartingLeft")?p(u,u.data("stellar-backgroundStartingLeft"),u.data("stellar-backgroundStartingTop")):(u.data("stellar-backgroundStartingLeft",g[0]),u.data("stellar-backgroundStartingTop",g[1])),a="auto"===u.css("margin-left")?0:parseInt(u.css("margin-left"),10),l="auto"===u.css("margin-top")?0:parseInt(u.css("margin-top"),10),f=u.offset().left-a-o,c=u.offset().top-l-n,u.parents().each(function(){var e=t(this);return e.data("stellar-offset-parent")===!0?(m=L,v=_,h=e,!1):(L+=e.position().left,void(_+=e.position().top))}),e=u.data("stellar-horizontal-offset")!==s?u.data("stellar-horizontal-offset"):h!==s&&h.data("stellar-horizontal-offset")!==s?h.data("stellar-horizontal-offset"):i.horizontalOffset,r=u.data("stellar-vertical-offset")!==s?u.data("stellar-vertical-offset"):h!==s&&h.data("stellar-vertical-offset")!==s?h.data("stellar-vertical-offset"):i.verticalOffset,i.backgrounds.push({$element:u,$offsetParent:h,isFixed:"fixed"===u.css("background-attachment"),horizontalOffset:e,verticalOffset:r,startingValueLeft:g[0],startingValueTop:g[1],startingBackgroundPositionLeft:isNaN(parseInt(g[0],10))?0:parseInt(g[0],10),startingBackgroundPositionTop:isNaN(parseInt(g[1],10))?0:parseInt(g[1],10),startingPositionLeft:u.position().left,startingPositionTop:u.position().top,startingOffsetLeft:f,startingOffsetTop:c,parentOffsetLeft:m,parentOffsetTop:v,stellarRatio:u.data("stellar-background-ratio")===s?1:u.data("stellar-background-ratio")})}))},_reset:function(){var t,e,i,s,o;for(o=this.particles.length-1;o>=0;o--)t=this.particles[o],e=t.$element.data("stellar-startingLeft"),i=t.$element.data("stellar-startingTop"),this._setPosition(t.$element,e,e,i,i),this.options.showElement(t.$element),t.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(o=this.backgrounds.length-1;o>=0;o--)s=this.backgrounds[o],s.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),p(s.$element,s.startingValueLeft,s.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=t.noop,t(e).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var i=this,s=t(e);s.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),s.bind("resize.horizontal-"+this.name,function(){i.horizontalOffset=i.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),s.bind("resize.vertical-"+this.name,function(){i.verticalOffset=i.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var t,e,i,s,o,n,r,a,l,f,c=this._getScrollLeft(),h=this._getScrollTop(),d=!0,u=!0;if(this.currentScrollLeft!==c||this.currentScrollTop!==h||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=c,this.currentScrollTop=h,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,f=this.particles.length-1;f>=0;f--)t=this.particles[f],e=t.isFixed?1:0,this.options.horizontalScrolling?(n=(c+t.horizontalOffset+this.viewportOffsetLeft+t.startingPositionLeft-t.startingOffsetLeft+t.parentOffsetLeft)*-(t.stellarRatio+e-1)+t.startingPositionLeft,a=n-t.startingPositionLeft+t.startingOffsetLeft):(n=t.startingPositionLeft,a=t.startingOffsetLeft),this.options.verticalScrolling?(r=(h+t.verticalOffset+this.viewportOffsetTop+t.startingPositionTop-t.startingOffsetTop+t.parentOffsetTop)*-(t.stellarRatio+e-1)+t.startingPositionTop,l=r-t.startingPositionTop+t.startingOffsetTop):(r=t.startingPositionTop,l=t.startingOffsetTop),this.options.hideDistantElements&&(u=!this.options.horizontalScrolling||a+t.width>(t.isFixed?0:c)&&a<(t.isFixed?0:c)+this.viewportWidth+this.viewportOffsetLeft,d=!this.options.verticalScrolling||l+t.height>(t.isFixed?0:h)&&l<(t.isFixed?0:h)+this.viewportHeight+this.viewportOffsetTop),u&&d?(t.isHidden&&(this.options.showElement(t.$element),t.isHidden=!1),this._setPosition(t.$element,n,t.startingPositionLeft,r,t.startingPositionTop)):t.isHidden||(this.options.hideElement(t.$element),t.isHidden=!0);for(f=this.backgrounds.length-1;f>=0;f--)i=this.backgrounds[f],e=i.isFixed?0:1,s=this.options.horizontalScrolling?(c+i.horizontalOffset-this.viewportOffsetLeft-i.startingOffsetLeft+i.parentOffsetLeft-i.startingBackgroundPositionLeft)*(e-i.stellarRatio)+"px":i.startingValueLeft,o=this.options.verticalScrolling?(h+i.verticalOffset-this.viewportOffsetTop-i.startingOffsetTop+i.parentOffsetTop-i.startingBackgroundPositionTop)*(e-i.stellarRatio)+"px":i.startingValueTop,p(i.$element,s,o)}},_handleScrollEvent:function(){var t=this,e=!1,i=function(){t._repositionElements(),e=!1},s=function(){e||(u(i),e=!0)};this.$scrollElement.bind("scroll."+this.name,s),s()},_startAnimationLoop:function(){var t=this;this._animationLoop=function(){u(t._animationLoop),t._repositionElements()},this._animationLoop()}},t.fn[n]=function(e){var i=arguments;return e===s||"object"==typeof e?this.each(function(){t.data(this,"plugin_"+n)||t.data(this,"plugin_"+n,new o(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var s=t.data(this,"plugin_"+n);s instanceof o&&"function"==typeof s[e]&&s[e].apply(s,Array.prototype.slice.call(i,1)),"destroy"===e&&t.data(this,"plugin_"+n,null)}):void 0},t[n]=function(i){var s=t(e);return s.stellar.apply(s,Array.prototype.slice.call(arguments,0))},t[n].scrollProperty=a,t[n].positionProperty=l,e.Stellar=o}(jQuery,this,document);
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function b(b,d){var e,f=this;f.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(b),appendDots:a(b),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},f.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(f,f.initials),f.activeBreakpoint=null,f.animType=null,f.animProp=null,f.breakpoints=[],f.breakpointSettings=[],f.cssTransitions=!1,f.focussed=!1,f.interrupted=!1,f.hidden="hidden",f.paused=!0,f.positionProp=null,f.respondTo=null,f.rowCount=1,f.shouldClick=!0,f.$slider=a(b),f.$slidesCache=null,f.transformType=null,f.transitionType=null,f.visibilityChange="visibilitychange",f.windowWidth=0,f.windowTimer=null,e=a(b).data("slick")||{},f.options=a.extend({},f.defaults,d,e),f.currentSlide=f.options.initialSlide,f.originalSettings=f.options,"undefined"!=typeof document.mozHidden?(f.hidden="mozHidden",f.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(f.hidden="webkitHidden",f.visibilityChange="webkitvisibilitychange"),f.autoPlay=a.proxy(f.autoPlay,f),f.autoPlayClear=a.proxy(f.autoPlayClear,f),f.autoPlayIterator=a.proxy(f.autoPlayIterator,f),f.changeSlide=a.proxy(f.changeSlide,f),f.clickHandler=a.proxy(f.clickHandler,f),f.selectHandler=a.proxy(f.selectHandler,f),f.setPosition=a.proxy(f.setPosition,f),f.swipeHandler=a.proxy(f.swipeHandler,f),f.dragHandler=a.proxy(f.dragHandler,f),f.keyHandler=a.proxy(f.keyHandler,f),f.instanceUid=c++,f.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,f.registerBreakpoints(),f.init(!0)}var c=0;return b}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(c<0||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var b,c,d=this;if(d.options.dots===!0&&d.slideCount>d.options.slidesToShow){for(d.$slider.addClass("slick-dotted"),c=a("<ul />").addClass(d.options.dotsClass),b=0;b<=d.getDotCount();b+=1)c.append(a("<li />").append(d.options.customPaging.call(this,d,b)));d.$dots=c.appendTo(d.options.appendDots),d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),b.options.centerMode!==!0&&b.options.swipeToSlide!==!0||(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var a,b,c,d,e,f,g,h=this;if(d=document.createDocumentFragment(),f=h.$slider.children(),h.options.rows>1){for(g=h.options.slidesPerRow*h.options.rows,e=Math.ceil(f.length/g),a=0;a<e;a++){var i=document.createElement("div");for(b=0;b<h.options.rows;b++){var j=document.createElement("div");for(c=0;c<h.options.slidesPerRow;c++){var k=a*g+(b*h.options.slidesPerRow+c);f.get(k)&&j.appendChild(f.get(k))}i.appendChild(j)}d.appendChild(i)}h.$slider.empty().append(d),h.$slider.children().children().children().css({width:100/h.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var d,e,f,g=this,h=!1,i=g.$slider.width(),j=window.innerWidth||a(window).width();if("window"===g.respondTo?f=j:"slider"===g.respondTo?f=i:"min"===g.respondTo&&(f=Math.min(j,i)),g.options.responsive&&g.options.responsive.length&&null!==g.options.responsive){e=null;for(d in g.breakpoints)g.breakpoints.hasOwnProperty(d)&&(g.originalSettings.mobileFirst===!1?f<g.breakpoints[d]&&(e=g.breakpoints[d]):f>g.breakpoints[d]&&(e=g.breakpoints[d]));null!==e?null!==g.activeBreakpoint?(e!==g.activeBreakpoint||c)&&(g.activeBreakpoint=e,"unslick"===g.breakpointSettings[e]?g.unslick(e):(g.options=a.extend({},g.originalSettings,g.breakpointSettings[e]),b===!0&&(g.currentSlide=g.options.initialSlide),g.refresh(b)),h=e):(g.activeBreakpoint=e,"unslick"===g.breakpointSettings[e]?g.unslick(e):(g.options=a.extend({},g.originalSettings,g.breakpointSettings[e]),b===!0&&(g.currentSlide=g.options.initialSlide),g.refresh(b)),h=e):null!==g.activeBreakpoint&&(g.activeBreakpoint=null,g.options=g.originalSettings,b===!0&&(g.currentSlide=g.options.initialSlide),g.refresh(b),h=e),b||h===!1||g.$slider.trigger("breakpoint",[g,h])}},b.prototype.changeSlide=function(b,c){var d,e,f,g=this,h=a(b.currentTarget);switch(h.is("a")&&b.preventDefault(),h.is("li")||(h=h.closest("li")),f=g.slideCount%g.options.slidesToScroll!==0,d=f?0:(g.slideCount-g.currentSlide)%g.options.slidesToScroll,b.data.message){case"previous":e=0===d?g.options.slidesToScroll:g.options.slidesToShow-d,g.slideCount>g.options.slidesToShow&&g.slideHandler(g.currentSlide-e,!1,c);break;case"next":e=0===d?g.options.slidesToScroll:d,g.slideCount>g.options.slidesToShow&&g.slideHandler(g.currentSlide+e,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||h.index()*g.options.slidesToScroll;g.slideHandler(g.checkNavigable(i),!1,c),h.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var b,c,d=this;if(b=d.getNavigableIndexes(),c=0,a>b[b.length-1])a=b[b.length-1];else for(var e in b){if(a<b[e]){a=c;break}c=b[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var a,b=this;b.options.rows>1&&(a=b.$slides.children().children(),a.removeAttr("style"),b.$slider.empty().append(a))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var b,c,d,e=this,f=0;return e.slideOffset=0,c=e.$slides.first().outerHeight(!0),e.options.infinite===!0?(e.slideCount>e.options.slidesToShow&&(e.slideOffset=e.slideWidth*e.options.slidesToShow*-1,f=c*e.options.slidesToShow*-1),e.slideCount%e.options.slidesToScroll!==0&&a+e.options.slidesToScroll>e.slideCount&&e.slideCount>e.options.slidesToShow&&(a>e.slideCount?(e.slideOffset=(e.options.slidesToShow-(a-e.slideCount))*e.slideWidth*-1,f=(e.options.slidesToShow-(a-e.slideCount))*c*-1):(e.slideOffset=e.slideCount%e.options.slidesToScroll*e.slideWidth*-1,f=e.slideCount%e.options.slidesToScroll*c*-1))):a+e.options.slidesToShow>e.slideCount&&(e.slideOffset=(a+e.options.slidesToShow-e.slideCount)*e.slideWidth,f=(a+e.options.slidesToShow-e.slideCount)*c),e.slideCount<=e.options.slidesToShow&&(e.slideOffset=0,f=0),e.options.centerMode===!0&&e.options.infinite===!0?e.slideOffset+=e.slideWidth*Math.floor(e.options.slidesToShow/2)-e.slideWidth:e.options.centerMode===!0&&(e.slideOffset=0,e.slideOffset+=e.slideWidth*Math.floor(e.options.slidesToShow/2)),b=e.options.vertical===!1?a*e.slideWidth*-1+e.slideOffset:a*c*-1+f,e.options.variableWidth===!0&&(d=e.slideCount<=e.options.slidesToShow||e.options.infinite===!1?e.$slideTrack.children(".slick-slide").eq(a):e.$slideTrack.children(".slick-slide").eq(a+e.options.slidesToShow),b=e.options.rtl===!0?d[0]?(e.$slideTrack.width()-d[0].offsetLeft-d.width())*-1:0:d[0]?d[0].offsetLeft*-1:0,e.options.centerMode===!0&&(d=e.slideCount<=e.options.slidesToShow||e.options.infinite===!1?e.$slideTrack.children(".slick-slide").eq(a):e.$slideTrack.children(".slick-slide").eq(a+e.options.slidesToShow+1),b=e.options.rtl===!0?d[0]?(e.$slideTrack.width()-d[0].offsetLeft-d.width())*-1:0:d[0]?d[0].offsetLeft*-1:0,b+=(e.$list.width()-d.outerWidth())/2)),b},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var a,b=this,c=0,d=0,e=[];for(b.options.infinite===!1?a=b.slideCount:(c=b.options.slidesToScroll*-1,d=b.options.slidesToScroll*-1,a=2*b.slideCount);c<a;)e.push(c),c=d+b.options.slidesToScroll,d+=b.options.slidesToScroll<=b.options.slidesToShow?b.options.slidesToScroll:b.options.slidesToShow;return e},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var b,c,d,e=this;return d=e.options.centerMode===!0?e.slideWidth*Math.floor(e.options.slidesToShow/2):0,e.options.swipeToSlide===!0?(e.$slideTrack.find(".slick-slide").each(function(b,f){if(f.offsetLeft-d+a(f).outerWidth()/2>e.swipeLeft*-1)return c=f,!1}),b=Math.abs(a(c).attr("data-slick-index")-e.currentSlide)||1):e.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr("role","option");var d=b.options.centerMode?c:Math.floor(c/b.options.slidesToShow);b.options.dots===!0&&a(this).attr("aria-describedby","slick-slide"+b.instanceUid+d)}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function b(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")}),g.$slider.trigger("lazyLoaded",[g,b,c])})},d.onerror=function(){b.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),g.$slider.trigger("lazyLoadError",[g,b,c])},d.src=c})}var c,d,e,f,g=this;g.options.centerMode===!0?g.options.infinite===!0?(e=g.currentSlide+(g.options.slidesToShow/2+1),f=e+g.options.slidesToShow+2):(e=Math.max(0,g.currentSlide-(g.options.slidesToShow/2+1)),f=2+(g.options.slidesToShow/2+1)+g.currentSlide):(e=g.options.infinite?g.options.slidesToShow+g.currentSlide:g.currentSlide,f=Math.ceil(e+g.options.slidesToShow),g.options.fade===!0&&(e>0&&e--,f<=g.slideCount&&f++)),c=g.$slider.find(".slick-slide").slice(e,f),b(c),g.slideCount<=g.options.slidesToShow?(d=g.$slider.find(".slick-slide"),b(d)):g.currentSlide>=g.slideCount-g.options.slidesToShow?(d=g.$slider.find(".slick-cloned").slice(0,g.options.slidesToShow),b(d)):0===g.currentSlide&&(d=g.$slider.find(".slick-cloned").slice(g.options.slidesToShow*-1),b(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var c,d,e,f=this,g=a("img[data-lazy]",f.$slider);g.length?(c=g.first(),d=c.attr("data-lazy"),e=document.createElement("img"),e.onload=function(){c.attr("src",d).removeAttr("data-lazy").removeClass("slick-loading"),f.options.adaptiveHeight===!0&&f.setPosition(),f.$slider.trigger("lazyLoaded",[f,c,d]),f.progressiveLazyLoad()},e.onerror=function(){b<3?setTimeout(function(){f.progressiveLazyLoad(b+1)},500):(c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),f.$slider.trigger("lazyLoadError",[f,c,d]),f.progressiveLazyLoad())},e.src=d):f.$slider.trigger("allImagesLoaded",[f])},b.prototype.refresh=function(b){var c,d,e=this;d=e.slideCount-e.options.slidesToShow,!e.options.infinite&&e.currentSlide>d&&(e.currentSlide=d),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),c=e.currentSlide,e.destroy(!0),a.extend(e,e.initials,{currentSlide:c}),e.init(),b||e.changeSlide({data:{message:"index",index:c}},!1)},b.prototype.registerBreakpoints=function(){var b,c,d,e=this,f=e.options.responsive||null;if("array"===a.type(f)&&f.length){e.respondTo=e.options.respondTo||"window";for(b in f)if(d=e.breakpoints.length-1,c=f[b].breakpoint,f.hasOwnProperty(b)){for(;d>=0;)e.breakpoints[d]&&e.breakpoints[d]===c&&e.breakpoints.splice(d,1),d--;e.breakpoints.push(c),e.breakpointSettings[c]=f[b].settings}e.breakpoints.sort(function(a,b){return e.options.mobileFirst?a-b:b-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,!(d.slideCount<1||a<0||a>d.slideCount-1)&&(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var b,c,d=this,e={};d.options.rtl===!0&&(a=-a),b="left"==d.positionProp?Math.ceil(a)+"px":"0px",c="top"==d.positionProp?Math.ceil(a)+"px":"0px",e[d.positionProp]=a,d.transformsEnabled===!1?d.$slideTrack.css(e):(e={},d.cssTransitions===!1?(e[d.animType]="translate("+b+", "+c+")",d.$slideTrack.css(e)):(e[d.animType]="translate3d("+b+", "+c+", 0px)",d.$slideTrack.css(e)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var b,c=this;c.$slides.each(function(d,e){b=c.slideWidth*d*-1,c.options.rtl===!0?a(e).css({position:"relative",right:b,top:0,zIndex:c.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:b,top:0,zIndex:c.options.zIndex-2,opacity:0})}),c.$slides.eq(c.currentSlide).css({zIndex:c.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var b,c,d,e,f,g=this,h=!1;if("object"===a.type(arguments[0])?(d=arguments[0],h=arguments[1],f="multiple"):"string"===a.type(arguments[0])&&(d=arguments[0],e=arguments[1],h=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?f="responsive":"undefined"!=typeof arguments[1]&&(f="single")),"single"===f)g.options[d]=e;else if("multiple"===f)a.each(d,function(a,b){g.options[a]=b});else if("responsive"===f)for(c in e)if("array"!==a.type(g.options.responsive))g.options.responsive=[e[c]];else{for(b=g.options.responsive.length-1;b>=0;)g.options.responsive[b].breakpoint===e[c].breakpoint&&g.options.responsive.splice(b,1),b--;g.options.responsive.push(e[c])}h&&(g.unload(),g.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),void 0===b.WebkitTransition&&void 0===b.MozTransition&&void 0===b.msTransition||a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var b,c,d,e,f=this;c=f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),f.$slides.eq(a).addClass("slick-current"),f.options.centerMode===!0?(b=Math.floor(f.options.slidesToShow/2),
f.options.infinite===!0&&(a>=b&&a<=f.slideCount-1-b?f.$slides.slice(a-b,a+b+1).addClass("slick-active").attr("aria-hidden","false"):(d=f.options.slidesToShow+a,c.slice(d-b+1,d+b+2).addClass("slick-active").attr("aria-hidden","false")),0===a?c.eq(c.length-1-f.options.slidesToShow).addClass("slick-center"):a===f.slideCount-1&&c.eq(f.options.slidesToShow).addClass("slick-center")),f.$slides.eq(a).addClass("slick-center")):a>=0&&a<=f.slideCount-f.options.slidesToShow?f.$slides.slice(a,a+f.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):c.length<=f.options.slidesToShow?c.addClass("slick-active").attr("aria-hidden","false"):(e=f.slideCount%f.options.slidesToShow,d=f.options.infinite===!0?f.options.slidesToShow+a:a,f.options.slidesToShow==f.options.slidesToScroll&&f.slideCount-a<f.options.slidesToShow?c.slice(d-(f.options.slidesToShow-e),d+e).addClass("slick-active").attr("aria-hidden","false"):c.slice(d,d+f.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===f.options.lazyLoad&&f.lazyLoad()},b.prototype.setupInfinite=function(){var b,c,d,e=this;if(e.options.fade===!0&&(e.options.centerMode=!1),e.options.infinite===!0&&e.options.fade===!1&&(c=null,e.slideCount>e.options.slidesToShow)){for(d=e.options.centerMode===!0?e.options.slidesToShow+1:e.options.slidesToShow,b=e.slideCount;b>e.slideCount-d;b-=1)c=b-1,a(e.$slides[c]).clone(!0).attr("id","").attr("data-slick-index",c-e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");for(b=0;b<d;b+=1)c=b,a(e.$slides[c]).clone(!0).attr("id","").attr("data-slick-index",c+e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");e.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h,i=null,j=this;if(b=b||!1,(j.animating!==!0||j.options.waitForAnimate!==!0)&&!(j.options.fade===!0&&j.currentSlide===a||j.slideCount<=j.options.slidesToShow))return b===!1&&j.asNavFor(a),d=a,i=j.getLeft(d),g=j.getLeft(j.currentSlide),j.currentLeft=null===j.swipeLeft?g:j.swipeLeft,j.options.infinite===!1&&j.options.centerMode===!1&&(a<0||a>j.getDotCount()*j.options.slidesToScroll)?void(j.options.fade===!1&&(d=j.currentSlide,c!==!0?j.animateSlide(g,function(){j.postSlide(d)}):j.postSlide(d))):j.options.infinite===!1&&j.options.centerMode===!0&&(a<0||a>j.slideCount-j.options.slidesToScroll)?void(j.options.fade===!1&&(d=j.currentSlide,c!==!0?j.animateSlide(g,function(){j.postSlide(d)}):j.postSlide(d))):(j.options.autoplay&&clearInterval(j.autoPlayTimer),e=d<0?j.slideCount%j.options.slidesToScroll!==0?j.slideCount-j.slideCount%j.options.slidesToScroll:j.slideCount+d:d>=j.slideCount?j.slideCount%j.options.slidesToScroll!==0?0:d-j.slideCount:d,j.animating=!0,j.$slider.trigger("beforeChange",[j,j.currentSlide,e]),f=j.currentSlide,j.currentSlide=e,j.setSlideClasses(j.currentSlide),j.options.asNavFor&&(h=j.getNavTarget(),h=h.slick("getSlick"),h.slideCount<=h.options.slidesToShow&&h.setSlideClasses(j.currentSlide)),j.updateDots(),j.updateArrows(),j.options.fade===!0?(c!==!0?(j.fadeSlideOut(f),j.fadeSlide(e,function(){j.postSlide(e)})):j.postSlide(e),void j.animateHeight()):void(c!==!0?j.animateSlide(i,function(){j.postSlide(e)}):j.postSlide(e)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),d<0&&(d=360-Math.abs(d)),d<=45&&d>=0?e.options.rtl===!1?"left":"right":d<=360&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&d<=225?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&d<=135?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var b,c,d=this;if(d.dragging=!1,d.interrupted=!1,d.shouldClick=!(d.touchObject.swipeLength>10),void 0===d.touchObject.curX)return!1;if(d.touchObject.edgeHit===!0&&d.$slider.trigger("edge",[d,d.swipeDirection()]),d.touchObject.swipeLength>=d.touchObject.minSwipe){switch(c=d.swipeDirection()){case"left":case"down":b=d.options.swipeToSlide?d.checkNavigable(d.currentSlide+d.getSlideCount()):d.currentSlide+d.getSlideCount(),d.currentDirection=0;break;case"right":case"up":b=d.options.swipeToSlide?d.checkNavigable(d.currentSlide-d.getSlideCount()):d.currentSlide-d.getSlideCount(),d.currentDirection=1}"vertical"!=c&&(d.slideHandler(b),d.touchObject={},d.$slider.trigger("swipe",[d,c]))}else d.touchObject.startX!==d.touchObject.curX&&(d.slideHandler(d.currentSlide),d.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&a.type.indexOf("mouse")!==-1))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var b,c,d,e,f,g=this;return f=void 0!==a.originalEvent?a.originalEvent.touches:null,!(!g.dragging||f&&1!==f.length)&&(b=g.getLeft(g.currentSlide),g.touchObject.curX=void 0!==f?f[0].pageX:a.clientX,g.touchObject.curY=void 0!==f?f[0].pageY:a.clientY,g.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(g.touchObject.curX-g.touchObject.startX,2))),g.options.verticalSwiping===!0&&(g.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(g.touchObject.curY-g.touchObject.startY,2)))),c=g.swipeDirection(),"vertical"!==c?(void 0!==a.originalEvent&&g.touchObject.swipeLength>4&&a.preventDefault(),e=(g.options.rtl===!1?1:-1)*(g.touchObject.curX>g.touchObject.startX?1:-1),g.options.verticalSwiping===!0&&(e=g.touchObject.curY>g.touchObject.startY?1:-1),d=g.touchObject.swipeLength,g.touchObject.edgeHit=!1,g.options.infinite===!1&&(0===g.currentSlide&&"right"===c||g.currentSlide>=g.getDotCount()&&"left"===c)&&(d=g.touchObject.swipeLength*g.options.edgeFriction,g.touchObject.edgeHit=!0),g.options.vertical===!1?g.swipeLeft=b+d*e:g.swipeLeft=b+d*(g.$list.height()/g.listWidth)*e,g.options.verticalSwiping===!0&&(g.swipeLeft=b+d*e),g.options.fade!==!0&&g.options.touchMove!==!1&&(g.animating===!0?(g.swipeLeft=null,!1):void g.setCSS(g.swipeLeft))):void 0)},b.prototype.swipeStart=function(a){var b,c=this;return c.interrupted=!0,1!==c.touchObject.fingerCount||c.slideCount<=c.options.slidesToShow?(c.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(b=a.originalEvent.touches[0]),c.touchObject.startX=c.touchObject.curX=void 0!==b?b.pageX:a.clientX,c.touchObject.startY=c.touchObject.curY=void 0!==b?b.pageY:a.clientY,void(c.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var a,b=this;a=Math.floor(b.options.slidesToShow/2),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&!b.options.infinite&&(b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===b.currentSlide?(b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):b.currentSlide>=b.slideCount-b.options.slidesToShow&&b.options.centerMode===!1?(b.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):b.currentSlide>=b.slideCount-1&&b.options.centerMode===!0&&(b.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var a,c,d=this,e=arguments[0],f=Array.prototype.slice.call(arguments,1),g=d.length;for(a=0;a<g;a++)if("object"==typeof e||"undefined"==typeof e?d[a].slick=new b(d[a],e):c=d[a].slick[e].apply(d[a].slick,f),"undefined"!=typeof c)return c;return d}});
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t,n,i,o,r,a,s="Close",l="BeforeClose",c="AfterClose",d="BeforeAppend",u="MarkupParse",p="Open",f="Change",m="mfp",g="."+m,v="mfp-ready",h="mfp-removing",y="mfp-prevent-close",C=function(){},w=!!window.jQuery,b=e(window),I=function(e,n){t.ev.on(m+e+g,n)},x=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},k=function(n,i){t.ev.triggerHandler(m+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},T=function(n){return n===a&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),a=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new C,t.init(),e.magnificPopup.instance=t)},P=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};C.prototype={constructor:C,init:function(){var n=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=P(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document),t.popupsCache={}},open:function(n){var o;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var a,s=n.items;for(o=0;o<s.length;o++)if(a=s[o],a.parsed&&(a=a.el[0]),a===n.el[0]){t.index=o;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return void t.updateItemHTML();t.types=[],r="",n.mainEl&&n.mainEl.length?t.ev=n.mainEl.eq(0):t.ev=i,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=x("bg").on("click"+g,function(){t.close()}),t.wrap=x("wrap").attr("tabindex",-1).on("click"+g,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=x("container",t.wrap)),t.contentContainer=x("content"),t.st.preloader&&(t.preloader=x("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(o=0;o<l.length;o++){var c=l[o];c=c.charAt(0).toUpperCase()+c.slice(1),t["init"+c].call(t)}k("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(I(u,function(e,t,n,i){n.close_replaceWith=T(i.type)}),r+=" mfp-close-btn-in"):t.wrap.append(T())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:b.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:i.height(),position:"absolute"}),t.st.enableEscapeKey&&i.on("keyup"+g,function(e){27===e.keyCode&&t.close()}),b.on("resize"+g,function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var d=t.wH=b.height(),f={};if(t.fixedContentPos&&t._hasScrollBar(d)){var m=t._getScrollbarSize();m&&(f.marginRight=m)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):f.overflow="hidden");var h=t.st.mainClass;return t.isIE7&&(h+=" mfp-ie7"),h&&t._addClassToMFP(h),t.updateItemHTML(),k("BuildControls"),e("html").css(f),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),i.on("focusin"+g,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(d),k(p),n},close:function(){t.isOpen&&(k(l),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(h),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){k(s);var n=h+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var o={marginRight:""};t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}i.off("keyup"+g+" focusin"+g),t.ev.off(g),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,k(c)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||b.height();t.fixedContentPos||t.wrap.css("height",t.wH),k("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(k("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var r=t.st[i]?t.st[i].markup:!1;k("FirstMarkupParse",r),r?t.currTemplate[i]=e(r):t.currTemplate[i]=!0}o&&o!==n.type&&t.container.removeClass("mfp-"+o+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,k(f,n),o=n.type,t.container.prepend(t.contentContainer),k("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(T()):t.content=e:t.content="",k(d),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;a<r.length;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,k("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||!(2===n.which||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey)){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(b.width()<a)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};k("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||b.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),k(u,[t,n,i]),e.each(n,function(n,i){if(void 0===i||i===!1)return!0;if(o=n.split("_"),o.length>1){var r=t.find(g+"-"+o[0]);if(r.length>0){var a=o[1];"replaceWith"===a?r[0]!==i[0]&&r.replaceWith(i):"img"===a?r.is("img")?r.attr("src",i):r.replaceWith(e("<img>").attr("src",i).attr("class",r.attr("class"))):r.attr(o[1],i)}}else t.find(g+"-"+n).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:C.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=w?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),w?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var S,E,z,O="inline",M=function(){z&&(E.after(z.addClass(S)).detach(),z=null)};e.magnificPopup.registerModule(O,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(O),I(s+"."+O,function(){M()})},getInline:function(n,i){if(M(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(E||(S=o.hiddenClass,E=x(S),S="mfp-"+S),z=r.after(E).detach().removeClass(S)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var B,L="ajax",H=function(){B&&e(document.body).removeClass(B)},A=function(){H(),t.req&&t.req.abort()};e.magnificPopup.registerModule(L,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(L),B=t.st.ajax.cursor,I(s+"."+L,A),I("BeforeChange."+L,A)},getAjax:function(n){B&&e(document.body).addClass(B),t.updateStatus("loading");var i=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};k("ParseAjax",a),t.appendContent(e(a.data),L),n.finished=!0,H(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),k("AjaxContentAdded")},error:function(){H(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(i),""}}});var F,j=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=t.st.image,i=".image";t.types.push("image"),I(p+i,function(){"image"===t.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)}),I(s+i,function(){n.cursor&&e(document.body).removeClass(n.cursor),b.off("resize"+g)}),I("Resize"+i,t.resizeImage),t.isLowIE&&I("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,F&&clearInterval(F),e.isCheckingImgSize=!1,k("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){F&&clearInterval(F),F=setInterval(function(){return i.naturalWidth>0?void t._onImageHasSize(e):(n>200&&clearInterval(F),n++,void(3===n?o(10):40===n?o(50):100===n&&o(500)))},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,k("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.el&&n.el.find("img").length&&(c.alt=n.el.find("img").attr("alt")),n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:j(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(F&&clearInterval(F),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var N,W=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,c=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};I("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return void d();r=c(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,k("ZoomAnimationEnded")},16)},a)},16)}}),I(l+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=c(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),I(s+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(w?i.innerHeight():i[0].offsetHeight)-a-r};return W()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",R=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),I("BeforeChange",function(e,t,n){t!==n&&(t===Z?R():n===Z&&R(!0))}),I(s+"."+Z,function(){R()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},D=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,o=".mfp-gallery";return t.direction=!0,n&&n.enabled?(r+=" mfp-gallery",I(p+o,function(){n.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),i.on("keydown"+o,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),I("UpdateStatus"+o,function(e,n){n.text&&(n.text=D(n.text,t.currItem.index,t.items.length))}),I(u+o,function(e,i,o,r){var a=t.items.length;o.counter=a>1?D(n.tCounter,r.index,a):""}),I("BuildControls"+o,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),r=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y);o.click(function(){t.prev()}),r.click(function(){t.next()}),t.container.append(o.add(r))}}),I(f+o,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),void I(s+o,function(){i.off(o),t.wrap.off("click"+o),t.arrowRight=t.arrowLeft=null})):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;e<=(t.direction?o:i);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?i:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),k("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,k("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(I("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),I("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),_()});
jQuery(document).ready(function($){$('#loader').fadeOut();$('#loader-container').fadeOut();$(window).scroll(function(){if($(this).scrollTop()>1){$('.sticky').addClass("nav-shrink")}
else{$('.sticky').removeClass("nav-shrink")}
$('.search-results article:not( .hentry )').addClass('hentry')});$('.menu-toggle').click(function(){$('.nav-menu').slideToggle()});var dropdownToggle=$('<button />',{'class':'dropdown-toggle','aria-expanded':!1});$('.main-navigation').find('.menu-item-has-children > a, .page_item_has_children > a').after(dropdownToggle);$('.main-navigation button.dropdown-toggle').click(function(){$(this).toggleClass('active');$(this).parent().find('.sub-menu').first().toggle()});if($(window).width()<992){$('.main-navigation #search').insertAfter('.main-navigation ul.menu li a#search-btn')}
else{$('.main-navigation #search').insertAfter('.main-navigation ul.menu')}
$(window).resize(function(){if($(window).width()<992){$('.main-navigation #search').insertAfter('.main-navigation ul.menu li a#search-btn')}
else{$('.main-navigation #search').insertAfter('.main-navigation ul.menu')}});$('.main-navigation #search-btn').click(function(){$('.main-navigation li').fadeOut();$('.main-navigation #search').fadeIn();$('#search input.search-field').focus()});$('.main-navigation .close-search').click(function(){$('.main-navigation li').fadeIn();$('#search').fadeOut()});$('.cart-images li a').click(function(){$('.cart-images li').removeClass('active');$(this).parent().addClass('active')})
$(document).keyup(function(e){if(e.keyCode===27){$('.main-navigation .search').removeClass('search-open');$('.main-navigation #search').hide();$('.main-navigation li').fadeIn()}});$(document).click(function(e){var container=$("#masthead");if(!container.is(e.target)&&container.has(e.target).length===0){$('.main-navigation .search').removeClass('search-open');$('.main-navigation #search').hide();$('.main-navigation li').fadeIn()}});$(window).scroll(function(){if($(this).scrollTop()>1){$('.backtotop').fadeIn()}else{$('.backtotop').fadeOut()}});$('.backtotop').click(function(){$('html, body').animate({scrollTop:'0px'},800);return!1});$(".woocommerce-products-header").remove();var $ease=$('#main-slider').data('effect');$("#main-slider").slick({cssEase:$ease});$(".regular").slick();$(".shop-slider").slick();$(".recipe-slider").slick();$("#ingredients .entry-content").slick({responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".gallery-slider").slick();$("#slideshow .team-slider").slick();$("#slideshow .slick-prev").insertBefore('#slideshow .slick-dots');$("#slideshow .slick-next").insertAfter('#slideshow .slick-dots');$("#slideshow .slick-dots").insertBefore('#slideshow .team-slider');$('#our-team .featured-image').click(function(){$('#our-team .column-wrapper').hide();$('#slideshow').show();$("#slideshow .team-slider").slick('setPosition');var section=$('#our-team');$('html,body').animate({scrollTop:$(section).offset().top-100},'800')});$('.close-slideshow').click(function(){$('#slideshow').hide();$('#our-team .column-wrapper').show()});$(document).keyup(function(e){if(e.keyCode===27){$('#slideshow').hide();$('#our-team .column-wrapper').show()}});var teamslide1=$('#our-team .featured-image:nth-child(1)');var teamslide2=$('#our-team .featured-image:nth-child(2)');var teamslide3=$('#our-team .featured-image:nth-child(3)');var teamslide4=$('#our-team .featured-image:nth-child(4)');var teamslide5=$('#our-team .featured-image:nth-child(5)');teamslide1.click(function(){$("#slideshow .team-slider .slider-item").removeClass('slick-active');$("#slideshow .team-slider .slider-item").removeClass('slick-current');$("#slideshow .team-slider .slider-item").css({'opacity':'0'});$("#slideshow .team-slider .slider-item:nth-child(1)").addClass('slick-active');$("#slideshow .team-slider .slider-item:nth-child(1)").addClass('slick-current');$("#slideshow .team-slider .slider-item.slick-current").css({'opacity':'1'})});teamslide2.click(function(){$("#slideshow .team-slider .slider-item").removeClass('slick-active');$("#slideshow .team-slider .slider-item").removeClass('slick-current');$("#slideshow .team-slider .slider-item").css({'opacity':'0'});$("#slideshow .team-slider .slider-item:nth-child(2)").addClass('slick-active');$("#slideshow .team-slider .slider-item:nth-child(2)").addClass('slick-current');$("#slideshow .team-slider .slider-item.slick-current").css({'opacity':'1'})});teamslide3.click(function(){$("#slideshow .team-slider .slider-item").removeClass('slick-active');$("#slideshow .team-slider .slider-item").removeClass('slick-current');$("#slideshow .team-slider .slider-item").css({'opacity':'0'});$("#slideshow .team-slider .slider-item:nth-child(3)").addClass('slick-active');$("#slideshow .team-slider .slider-item:nth-child(3)").addClass('slick-current');$("#slideshow .team-slider .slider-item.slick-current").css({'opacity':'1'})});teamslide4.click(function(){$("#slideshow .team-slider .slider-item").removeClass('slick-active');$("#slideshow .team-slider .slider-item").removeClass('slick-current');$("#slideshow .team-slider .slider-item").css({'opacity':'0'});$("#slideshow .team-slider .slider-item:nth-child(4)").addClass('slick-active');$("#slideshow .team-slider .slider-item:nth-child(4)").addClass('slick-current');$("#slideshow .team-slider .slider-item.slick-current").css({'opacity':'1'})});teamslide5.click(function(){$("#slideshow .team-slider .slider-item").removeClass('slick-active');$("#slideshow .team-slider .slider-item").removeClass('slick-current');$("#slideshow .team-slider .slider-item").css({'opacity':'0'});$("#slideshow .team-slider .slider-item:nth-child(5)").addClass('slick-active');$("#slideshow .team-slider .slider-item:nth-child(5)").addClass('slick-current');$("#slideshow .team-slider .slider-item.slick-current").css({'opacity':'1'})});if($('body.home.page section').hasClass('main-featured-slider')){$('body.home.page').addClass('slider-enabled')}
else{$('body.home.page').addClass('slider-disabled')}
$.stellar({horizontalScrolling:!1,verticalOffset:0});$('.gallery-popup').magnificPopup({delegate:'.popup',type:'image',tLoading:'Loading image #%curr%...',gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')}}});$(".nav-tabs li a").click(function(event){event.preventDefault();$(this).parent().addClass("active");$(this).parent().siblings().removeClass("active");var tab=$(this).attr("href");$(".tab-pane").not(tab).css("display","none");$(tab).fadeIn()});$('.cart-images ul li.shop-sale-cat a').click(function(e){e.preventDefault();var currentCategory='.'+$(this).data('slug');$('#shop-sale-slide .shop-slider').slick('slickUnfilter');$('#shop-sale-slide .shop-slider').slick('slickFilter',currentCategory)})});
jQuery(document).ready(function()
{var percentage=jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar').attr('percentage');var rotate=percentage*1.8;jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .mask.full, #wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').css({'-webkit-transform':'rotate('+rotate+'deg)','-ms-transform':'rotate('+rotate+'deg)','transform':'rotate('+rotate+'deg)'});jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .inset').css('background-color',jQuery('#wp-admin-bar-autoptimize .ab-sub-wrapper').css('background-color'));jQuery('#wp-admin-bar-autoptimize-delete-cache .ab-item').css('background-color',jQuery('#wpadminbar').css('background-color'));jQuery('#wp-admin-bar-autoptimize-default li').click(function(e)
{var id=(typeof e.target.id!='undefined'&&e.target.id)?e.target.id:jQuery(e.target).parent('li').attr('id');var action='';if(id=='wp-admin-bar-autoptimize-delete-cache'){action='autoptimize_delete_cache';}else{return;}
jQuery('#wp-admin-bar-autoptimize').removeClass('hover');var modal_loading=jQuery('<div class="autoptimize-loading"></div>').appendTo('body').show();var success=function(){jQuery('#wp-admin-bar-autoptimize-cache-info .size').attr('class','size green').html('0.00 B');jQuery('#wp-admin-bar-autoptimize-cache-info .files').html('0');jQuery('#wp-admin-bar-autoptimize-cache-info .percentage .numbers').attr('class','numbers green').html('0%');jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').attr('class','fill bg-green');jQuery('#wp-admin-bar-autoptimize').attr('class','menupop bullet-green');jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .mask.full, #wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').css({'-webkit-transform':'rotate(0deg)','-ms-transform':'rotate(0deg)','transform':'rotate(0deg)'});};var notice=function(){jQuery('<div id="ao-delete-cache-timeout" class="notice notice-error is-dismissible"><p><strong><span style="display:block;clear:both;">'+autoptimize_ajax_object.error_msg+'</span></strong></p><button type="button" class="notice-dismiss"><span class="screen-reader-text">'+autoptimize_ajax_object.dismiss_msg+'</span></button></div><br>').insertAfter('#wpbody .wrap h1:first-of-type').show();};jQuery.ajax({type:'GET',url:autoptimize_ajax_object.ajaxurl,data:{'action':action,'nonce':autoptimize_ajax_object.nonce},dataType:'json',cache:false,timeout:9000,success:function(cleared)
{modal_loading.remove();if(cleared){success();}else{notice();}},error:function(jqXHR,textStatus)
{modal_loading.remove();notice();}});});});
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
var woof_redirect='';jQuery(function($){jQuery('body').append('<div id="woof_html_buffer" class="woof_info_popup" style="display: none;"></div>');jQuery.fn.life=function(types,data,fn){jQuery(this.context).on(types,this.selector,data,fn);return this;};jQuery.extend(jQuery.fn,{within:function(pSelector){return this.filter(function(){return jQuery(this).closest(pSelector).length;});}});if(jQuery('#woof_results_by_ajax').length>0){woof_is_ajax=1;}
woof_autosubmit=parseInt(jQuery('.woof').eq(0).data('autosubmit'),10);woof_ajax_redraw=parseInt(jQuery('.woof').eq(0).data('ajax-redraw'),10);woof_ext_init_functions=jQuery.parseJSON(woof_ext_init_functions);woof_init_native_woo_price_filter();jQuery('body').bind('price_slider_change',function(event,min,max){if(woof_autosubmit&&!woof_show_price_search_button&&jQuery('.price_slider_wrapper').length<2){jQuery('.woof .widget_price_filter form').trigger('submit');}else{var min_price=jQuery(this).find('.price_slider_amount #min_price').val();var max_price=jQuery(this).find('.price_slider_amount #max_price').val();woof_current_values.min_price=min_price;woof_current_values.max_price=max_price;}});jQuery('.woof_price_filter_dropdown').life('change',function(){var val=jQuery(this).val();if(parseInt(val,10)==-1){delete woof_current_values.min_price;delete woof_current_values.max_price;}else{var val=val.split("-");woof_current_values.min_price=val[0];woof_current_values.max_price=val[1];}
if(woof_autosubmit||jQuery(this).within('.woof').length==0){woof_submit_link(woof_get_submit_link());}});woof_recount_text_price_filter();jQuery('.woof_price_filter_txt').life('change',function(){var from=parseInt(jQuery(this).parent().find('.woof_price_filter_txt_from').val(),10);var to=parseInt(jQuery(this).parent().find('.woof_price_filter_txt_to').val(),10);if(to<from||from<0){delete woof_current_values.min_price;delete woof_current_values.max_price;}else{if(typeof woocs_current_currency!=='undefined'){from=Math.ceil(from/parseFloat(woocs_current_currency.rate));to=Math.ceil(to/parseFloat(woocs_current_currency.rate));}
woof_current_values.min_price=from;woof_current_values.max_price=to;}
if(woof_autosubmit||jQuery(this).within('.woof').length==0){woof_submit_link(woof_get_submit_link());}});jQuery('.woof_open_hidden_li_btn').life('click',function(){var state=jQuery(this).data('state');var type=jQuery(this).data('type');if(state=='closed'){jQuery(this).parents('.woof_list').find('.woof_hidden_term').addClass('woof_hidden_term2');jQuery(this).parents('.woof_list').find('.woof_hidden_term').removeClass('woof_hidden_term');if(type=='image'){jQuery(this).find('img').attr('src',jQuery(this).data('opened'));}else{jQuery(this).html(jQuery(this).data('opened'));}
jQuery(this).data('state','opened');}else{jQuery(this).parents('.woof_list').find('.woof_hidden_term2').addClass('woof_hidden_term');jQuery(this).parents('.woof_list').find('.woof_hidden_term2').removeClass('woof_hidden_term2');if(type=='image'){jQuery(this).find('img').attr('src',jQuery(this).data('closed'));}else{jQuery(this).text(jQuery(this).data('closed'));}
jQuery(this).data('state','closed');}
return false;});woof_open_hidden_li();jQuery('.widget_rating_filter li.wc-layered-nav-rating a').click(function(){var is_chosen=jQuery(this).parent().hasClass('chosen');var parsed_url=woof_parse_url(jQuery(this).attr('href'));var rate=0;if(parsed_url.query!==undefined){if(parsed_url.query.indexOf('min_rating')!==-1){var arrayOfStrings=parsed_url.query.split('min_rating=');rate=parseInt(arrayOfStrings[1],10);}}
jQuery(this).parents('ul').find('li').removeClass('chosen');if(is_chosen){delete woof_current_values.min_rating;}else{woof_current_values.min_rating=rate;jQuery(this).parent().addClass('chosen');}
woof_submit_link(woof_get_submit_link());return false;});jQuery('.woof_start_filtering_btn').life('click',function(){var shortcode=jQuery(this).parents('.woof').data('shortcode');jQuery(this).html(woof_lang_loading);jQuery(this).addClass('woof_start_filtering_btn2');jQuery(this).removeClass('woof_start_filtering_btn');var data={action:"woof_draw_products",page:1,shortcode:'woof_nothing',woof_shortcode:shortcode};jQuery.post(woof_ajaxurl,data,function(content){content=jQuery.parseJSON(content);jQuery('div.woof_redraw_zone').replaceWith(jQuery(content.form).find('.woof_redraw_zone'));woof_mass_reinit();});return false;});var str=window.location.href;window.onpopstate=function(event){try{if(Object.keys(woof_current_values).length){var temp=str.split('?');var get1=temp[1].split('#');var str2=window.location.href;var temp2=str2.split('?');var get2=temp2[1].split('#');if(get2[0]!=get1[0]){woof_show_info_popup(woof_lang_loading);window.location.reload();}
return false;}}catch(e){console.log(e);}};woof_init_ion_sliders();woof_init_show_auto_form();woof_init_hide_auto_form();woof_remove_empty_elements();woof_init_search_form();woof_init_pagination();woof_init_orderby();woof_init_reset_button();woof_init_beauty_scroll();woof_draw_products_top_panel();woof_shortcode_observer();if(!woof_is_ajax){woof_redirect_init();}
woof_init_toggles();});function woof_redirect_init(){try{if(jQuery('.woof').length){if(undefined!==jQuery('.woof').val()){woof_redirect=jQuery('.woof').eq(0).data('redirect');if(woof_redirect.length>0){woof_shop_page=woof_current_page_link=woof_redirect;}
return woof_redirect;}}}catch(e){console.log(e);}}
function woof_init_orderby(){jQuery('form.woocommerce-ordering').life('submit',function(){return false;});jQuery('form.woocommerce-ordering select.orderby').life('change',function(){woof_current_values.orderby=jQuery(this).val();woof_ajax_page_num=1;woof_submit_link(woof_get_submit_link());return false;});}
function woof_init_reset_button(){jQuery('.woof_reset_search_form').life('click',function(){woof_ajax_page_num=1;if(woof_is_permalink){woof_current_values={};woof_submit_link(woof_get_submit_link().split("page/")[0]);}else{var link=woof_shop_page;if(woof_current_values.hasOwnProperty('page_id')){link=location.protocol+'//'+location.host+"/?page_id="+woof_current_values.page_id;woof_current_values={'page_id':woof_current_values.page_id};woof_get_submit_link();}
woof_submit_link(link);if(woof_is_ajax){history.pushState({},"",link);if(woof_current_values.hasOwnProperty('page_id')){woof_current_values={'page_id':woof_current_values.page_id};}else{woof_current_values={};}}}
return false;});}
function woof_init_pagination(){if(woof_is_ajax===1){jQuery('a.page-numbers').life('click',function(){var l=jQuery(this).attr('href');if(woof_ajax_first_done){var res=l.split("paged=");if(typeof res[1]!=='undefined'){woof_ajax_page_num=parseInt(res[1]);}else{woof_ajax_page_num=1;}}else{var res=l.split("page/");if(typeof res[1]!=='undefined'){woof_ajax_page_num=parseInt(res[1]);}else{woof_ajax_page_num=1;}}
{woof_submit_link(woof_get_submit_link());}
return false;});}}
function woof_init_search_form(){woof_init_checkboxes();woof_init_mselects();woof_init_radios();woof_price_filter_radio_init();woof_init_selects();if(woof_ext_init_functions!==null){jQuery.each(woof_ext_init_functions,function(type,func){eval(func+'()');});}
jQuery('.woof_submit_search_form').click(function(){if(woof_ajax_redraw){woof_ajax_redraw=0;woof_is_ajax=0;}
woof_submit_link(woof_get_submit_link());return false;});jQuery('ul.woof_childs_list').parent('li').addClass('woof_childs_list_li');woof_remove_class_widget();woof_checkboxes_slide();}
var woof_submit_link_locked=false;function woof_submit_link(link){if(woof_submit_link_locked){return;}
woof_submit_link_locked=true;woof_show_info_popup(woof_lang_loading);if(woof_is_ajax===1&&!woof_ajax_redraw){woof_ajax_first_done=true;var data={action:"woof_draw_products",link:link,page:woof_ajax_page_num,shortcode:jQuery('#woof_results_by_ajax').data('shortcode'),woof_shortcode:jQuery('div.woof').data('shortcode')};jQuery.post(woof_ajaxurl,data,function(content){content=jQuery.parseJSON(content);if(jQuery('.woof_results_by_ajax_shortcode').length){jQuery('#woof_results_by_ajax').replaceWith(content.products);}else{jQuery('.woof_shortcode_output').replaceWith(content.products);}
jQuery('div.woof_redraw_zone').replaceWith(jQuery(content.form).find('.woof_redraw_zone'));woof_draw_products_top_panel();woof_mass_reinit();woof_submit_link_locked=false;jQuery.each(jQuery('#woof_results_by_ajax'),function(index,item){if(index==0){return;}
jQuery(item).removeAttr('id');});woof_infinite();woof_js_after_ajax_done();});}else{if(woof_ajax_redraw){var data={action:"woof_draw_products",link:link,page:1,shortcode:'woof_nothing',woof_shortcode:jQuery('div.woof').eq(0).data('shortcode')};jQuery.post(woof_ajaxurl,data,function(content){content=jQuery.parseJSON(content);jQuery('div.woof_redraw_zone').replaceWith(jQuery(content.form).find('.woof_redraw_zone'));woof_mass_reinit();woof_submit_link_locked=false;});}else{window.location=link;woof_show_info_popup(woof_lang_loading);}}}
function woof_remove_empty_elements(){jQuery.each(jQuery('.woof_container select'),function(index,select){var size=jQuery(select).find('option').size();if(size===0){jQuery(select).parents('.woof_container').remove();}});jQuery.each(jQuery('ul.woof_list'),function(index,ch){var size=jQuery(ch).find('li').size();if(size===0){jQuery(ch).parents('.woof_container').remove();}});}
function woof_get_submit_link(){if(woof_is_ajax){woof_current_values.page=woof_ajax_page_num;}
if(Object.keys(woof_current_values).length>0){jQuery.each(woof_current_values,function(index,value){if(index==swoof_search_slug){delete woof_current_values[index];}
if(index=='s'){delete woof_current_values[index];}
if(index=='product'){delete woof_current_values[index];}
if(index=='really_curr_tax'){delete woof_current_values[index];}});}
if(Object.keys(woof_current_values).length===2){if(('min_price'in woof_current_values)&&('max_price'in woof_current_values)){var l=woof_current_page_link+'?min_price='+woof_current_values.min_price+'&max_price='+woof_current_values.max_price;if(woof_is_ajax){history.pushState({},"",l);}
return l;}}
if(Object.keys(woof_current_values).length===0){if(woof_is_ajax){history.pushState({},"",woof_current_page_link);}
return woof_current_page_link;}
if(Object.keys(woof_really_curr_tax).length>0){woof_current_values['really_curr_tax']=woof_really_curr_tax.term_id+'-'+woof_really_curr_tax.taxonomy;}
var link=woof_current_page_link+"?"+swoof_search_slug+"=1";if(!woof_is_permalink){if(woof_redirect.length>0){link=woof_redirect+"?"+swoof_search_slug+"=1";if(woof_current_values.hasOwnProperty('page_id')){delete woof_current_values.page_id;}}else{link=location.protocol+'//'+location.host+"?"+swoof_search_slug+"=1";}}
var woof_exclude_accept_array=['path'];if(Object.keys(woof_current_values).length>0){jQuery.each(woof_current_values,function(index,value){if(index=='page'&&woof_is_ajax){index='paged';}
if(typeof value!=='undefined'){if((typeof value&&value.length>0)||typeof value=='number')
{if(jQuery.inArray(index,woof_exclude_accept_array)==-1){link=link+"&"+index+"="+value;}}}});}
link=link.replace(new RegExp(/page\/(\d+)\//),"");if(woof_is_ajax){history.pushState({},"",link);}
return link;}
function woof_show_info_popup(text){if(woof_overlay_skin=='default'){jQuery("#woof_html_buffer").text(text);jQuery("#woof_html_buffer").fadeTo(200,0.9);}else{switch(woof_overlay_skin){case'loading-balls':case'loading-bars':case'loading-bubbles':case'loading-cubes':case'loading-cylon':case'loading-spin':case'loading-spinning-bubbles':case'loading-spokes':jQuery('body').plainOverlay('show',{progress:function(){return jQuery('<div id="woof_svg_load_container"><img style="height: 100%;width: 100%" src="'+woof_link+'img/loading-master/'+woof_overlay_skin+'.svg" alt=""></div>');}});break;default:jQuery('body').plainOverlay('show',{duration:-1});break;}}}
function woof_hide_info_popup(){if(woof_overlay_skin=='default'){window.setTimeout(function(){jQuery("#woof_html_buffer").fadeOut(400);},200);}else{jQuery('body').plainOverlay('hide');}}
function woof_draw_products_top_panel(){if(woof_is_ajax){jQuery('#woof_results_by_ajax').prev('.woof_products_top_panel').remove();}
var panel=jQuery('.woof_products_top_panel');panel.html('');if(Object.keys(woof_current_values).length>0){panel.show();panel.html('<ul></ul>');var is_price_in=false;jQuery.each(woof_current_values,function(index,value){if(jQuery.inArray(index,woof_accept_array)==-1){return;}
if((index=='min_price'||index=='max_price')&&is_price_in){return;}
if((index=='min_price'||index=='max_price')&&!is_price_in){is_price_in=true;index='price';value=woof_lang_pricerange;}
value=value.toString().trim();if(value.search(',')){value=value.split(',');}
jQuery.each(value,function(i,v){if(index=='page'){return;}
if(index=='post_type'){return;}
var txt=v;if(index=='orderby'){if(woof_lang[v]!==undefined){txt=woof_lang.orderby+': '+woof_lang[v];}else{txt=woof_lang.orderby+': '+v;}}else if(index=='perpage'){txt=woof_lang.perpage;}else if(index=='price'){txt=woof_lang.pricerange;}else{var is_in_custom=false;if(Object.keys(woof_lang_custom).length>0){jQuery.each(woof_lang_custom,function(i,tt){if(i==index){is_in_custom=true;txt=tt;if(index=='woof_sku'){txt+=" "+v;}}});}
if(!is_in_custom){try{txt=jQuery("input[data-anchor='woof_n_"+index+'_'+v+"']").val();}catch(e){console.log(e);}
if(typeof txt==='undefined')
{txt=v;}}}
panel.find('ul').append(jQuery('<li>').append(jQuery('<a>').attr('href',v).attr('data-tax',index).append(jQuery('<span>').attr('class','woof_remove_ppi').append(txt))));});});}
if(jQuery(panel).find('li').size()==0||!jQuery('.woof_products_top_panel').length){panel.hide();}
jQuery('.woof_remove_ppi').parent().click(function(){var tax=jQuery(this).data('tax');var name=jQuery(this).attr('href');if(tax!='price'){values=woof_current_values[tax];values=values.split(',');var tmp=[];jQuery.each(values,function(index,value){if(value!=name){tmp.push(value);}});values=tmp;if(values.length){woof_current_values[tax]=values.join(',');}else{delete woof_current_values[tax];}}else{delete woof_current_values['min_price'];delete woof_current_values['max_price'];}
woof_ajax_page_num=1;{woof_submit_link(woof_get_submit_link());}
jQuery('.woof_products_top_panel').find("[data-tax='"+tax+"'][href='"+name+"']").hide(333);return false;});}
function woof_shortcode_observer(){if(jQuery('.woof_shortcode_output').length){woof_current_page_link=location.protocol+'//'+location.host+location.pathname;}
if(jQuery('#woof_results_by_ajax').length){woof_is_ajax=1;}}
function woof_init_beauty_scroll(){if(woof_use_beauty_scroll){try{var anchor=".woof_section_scrolled, .woof_sid_auto_shortcode .woof_container_radio .woof_block_html_items, .woof_sid_auto_shortcode .woof_container_checkbox .woof_block_html_items, .woof_sid_auto_shortcode .woof_container_label .woof_block_html_items";jQuery(""+anchor).mCustomScrollbar('destroy');jQuery(""+anchor).mCustomScrollbar({scrollButtons:{enable:true},advanced:{updateOnContentResize:true,updateOnBrowserResize:true},theme:"dark-2",horizontalScroll:false,mouseWheel:true,scrollType:'pixels',contentTouchScroll:true});}catch(e){console.log(e);}}}
function woof_remove_class_widget(){jQuery('.woof_container_inner').find('.widget').removeClass('widget');}
function woof_init_show_auto_form(){jQuery('.woof_show_auto_form').unbind('click');jQuery('.woof_show_auto_form').click(function(){var _this=this;jQuery(_this).addClass('woof_hide_auto_form').removeClass('woof_show_auto_form');jQuery(".woof_auto_show").show().animate({height:(jQuery(".woof_auto_show_indent").height()+20)+"px",opacity:1},377,function(){woof_init_hide_auto_form();jQuery('.woof_auto_show').removeClass('woof_overflow_hidden');jQuery('.woof_auto_show_indent').removeClass('woof_overflow_hidden');jQuery(".woof_auto_show").height('auto');});return false;});}
function woof_init_hide_auto_form(){jQuery('.woof_hide_auto_form').unbind('click');jQuery('.woof_hide_auto_form').click(function(){var _this=this;jQuery(_this).addClass('woof_show_auto_form').removeClass('woof_hide_auto_form');jQuery(".woof_auto_show").show().animate({height:"1px",opacity:0},377,function(){jQuery('.woof_auto_show').addClass('woof_overflow_hidden');jQuery('.woof_auto_show_indent').addClass('woof_overflow_hidden');woof_init_show_auto_form();});return false;});}
function woof_checkboxes_slide(){if(woof_checkboxes_slide_flag==true){var childs=jQuery('ul.woof_childs_list');if(childs.size()){jQuery.each(childs,function(index,ul){if(jQuery(ul).parents('.woof_no_close_childs').length){return;}
var span_class='woof_is_closed';if(jQuery(ul).find('input[type=checkbox],input[type=radio]').is(':checked')){jQuery(ul).show();span_class='woof_is_opened';}
jQuery(ul).before('<a href="javascript:void(0);" class="woof_childs_list_opener"><span class="'+span_class+'"></span></a>');});jQuery.each(jQuery('a.woof_childs_list_opener'),function(index,a){jQuery(a).click(function(){var span=jQuery(this).find('span');if(span.hasClass('woof_is_closed')){jQuery(this).parent().find('ul.woof_childs_list').first().show(333);span.removeClass('woof_is_closed');span.addClass('woof_is_opened');}else{jQuery(this).parent().find('ul.woof_childs_list').first().hide(333);span.removeClass('woof_is_opened');span.addClass('woof_is_closed');}
return false;});});}}}
function woof_init_ion_sliders(){jQuery.each(jQuery('.woof_range_slider'),function(index,input){try{jQuery(input).ionRangeSlider({min:jQuery(input).data('min'),max:jQuery(input).data('max'),from:jQuery(input).data('min-now'),to:jQuery(input).data('max-now'),type:'double',prefix:jQuery(input).data('slider-prefix'),postfix:jQuery(input).data('slider-postfix'),prettify:true,hideMinMax:false,hideFromTo:false,grid:true,step:jQuery(input).data('step'),onFinish:function(ui){woof_current_values.min_price=parseInt(ui.from,10);woof_current_values.max_price=parseInt(ui.to,10);if(typeof woocs_current_currency!=='undefined'){woof_current_values.min_price=Math.ceil(woof_current_values.min_price/parseFloat(woocs_current_currency.rate));woof_current_values.max_price=Math.ceil(woof_current_values.max_price/parseFloat(woocs_current_currency.rate));}
woof_ajax_page_num=1;if(woof_autosubmit||jQuery(input).within('.woof').length==0){woof_submit_link(woof_get_submit_link());}
return false;}});}catch(e){}});}
function woof_init_native_woo_price_filter(){jQuery('.widget_price_filter form').unbind('submit');jQuery('.widget_price_filter form').submit(function(){var min_price=jQuery(this).find('.price_slider_amount #min_price').val();var max_price=jQuery(this).find('.price_slider_amount #max_price').val();woof_current_values.min_price=min_price;woof_current_values.max_price=max_price;woof_ajax_page_num=1;if(woof_autosubmit||jQuery(input).within('.woof').length==0){woof_submit_link(woof_get_submit_link());}
return false;});}
function woof_reinit_native_woo_price_filter(){if(typeof woocommerce_price_slider_params==='undefined'){return false;}
jQuery('input#min_price, input#max_price').hide();jQuery('.price_slider, .price_label').show();var min_price=jQuery('.price_slider_amount #min_price').data('min'),max_price=jQuery('.price_slider_amount #max_price').data('max'),current_min_price=parseInt(min_price,10),current_max_price=parseInt(max_price,10);if(woof_current_values.hasOwnProperty('min_price')){current_min_price=parseInt(woof_current_values.min_price,10);current_max_price=parseInt(woof_current_values.max_price,10);}else{if(woocommerce_price_slider_params.min_price){current_min_price=parseInt(woocommerce_price_slider_params.min_price,10);}
if(woocommerce_price_slider_params.max_price){current_max_price=parseInt(woocommerce_price_slider_params.max_price,10);}}
var currency_symbol=woocommerce_price_slider_params.currency_symbol;if(typeof currency_symbol==undefined){currency_symbol=woocommerce_price_slider_params.currency_format_symbol;}
jQuery(document.body).bind('price_slider_create price_slider_slide',function(event,min,max){if(typeof woocs_current_currency!=='undefined'){var label_min=min;var label_max=max;if(woocs_current_currency.rate!==1){label_min=Math.ceil(label_min*parseFloat(woocs_current_currency.rate));label_max=Math.ceil(label_max*parseFloat(woocs_current_currency.rate));}
label_min=number_format(label_min,2,'.',',');label_max=number_format(label_max,2,'.',',');if(jQuery.inArray(woocs_current_currency.name,woocs_array_no_cents)||woocs_current_currency.hide_cents==1){label_min=label_min.replace('.00','');label_max=label_max.replace('.00','');}
if(woocs_current_currency.position==='left'){jQuery('.price_slider_amount span.from').html(currency_symbol+label_min);jQuery('.price_slider_amount span.to').html(currency_symbol+label_max);}else if(woocs_current_currency.position==='left_space'){jQuery('.price_slider_amount span.from').html(currency_symbol+" "+label_min);jQuery('.price_slider_amount span.to').html(currency_symbol+" "+label_max);}else if(woocs_current_currency.position==='right'){jQuery('.price_slider_amount span.from').html(label_min+currency_symbol);jQuery('.price_slider_amount span.to').html(label_max+currency_symbol);}else if(woocs_current_currency.position==='right_space'){jQuery('.price_slider_amount span.from').html(label_min+" "+currency_symbol);jQuery('.price_slider_amount span.to').html(label_max+" "+currency_symbol);}}else{if(woocommerce_price_slider_params.currency_pos==='left'){jQuery('.price_slider_amount span.from').html(currency_symbol+min);jQuery('.price_slider_amount span.to').html(currency_symbol+max);}else if(woocommerce_price_slider_params.currency_pos==='left_space'){jQuery('.price_slider_amount span.from').html(currency_symbol+' '+min);jQuery('.price_slider_amount span.to').html(currency_symbol+' '+max);}else if(woocommerce_price_slider_params.currency_pos==='right'){jQuery('.price_slider_amount span.from').html(min+currency_symbol);jQuery('.price_slider_amount span.to').html(max+currency_symbol);}else if(woocommerce_price_slider_params.currency_pos==='right_space'){jQuery('.price_slider_amount span.from').html(min+' '+currency_symbol);jQuery('.price_slider_amount span.to').html(max+' '+currency_symbol);}}
jQuery(document.body).trigger('price_slider_updated',[min,max]);});jQuery('.price_slider').slider({range:true,animate:true,min:min_price,max:max_price,values:[current_min_price,current_max_price],create:function(){jQuery('.price_slider_amount #min_price').val(current_min_price);jQuery('.price_slider_amount #max_price').val(current_max_price);jQuery(document.body).trigger('price_slider_create',[current_min_price,current_max_price]);},slide:function(event,ui){jQuery('input#min_price').val(ui.values[0]);jQuery('input#max_price').val(ui.values[1]);jQuery(document.body).trigger('price_slider_slide',[ui.values[0],ui.values[1]]);},change:function(event,ui){jQuery(document.body).trigger('price_slider_change',[ui.values[0],ui.values[1]]);}});woof_init_native_woo_price_filter();}
function woof_mass_reinit(){woof_remove_empty_elements();woof_open_hidden_li();woof_init_search_form();woof_hide_info_popup();woof_init_beauty_scroll();woof_init_ion_sliders();woof_reinit_native_woo_price_filter();woof_recount_text_price_filter();woof_draw_products_top_panel();}
function woof_recount_text_price_filter(){if(typeof woocs_current_currency!=='undefined'){jQuery.each(jQuery('.woof_price_filter_txt_from, .woof_price_filter_txt_to'),function(i,item){jQuery(this).val(Math.ceil(jQuery(this).data('value')));});}}
function woof_init_toggles(){jQuery('.woof_front_toggle').life('click',function(){if(jQuery(this).data('condition')=='opened'){jQuery(this).removeClass('woof_front_toggle_opened');jQuery(this).addClass('woof_front_toggle_closed');jQuery(this).data('condition','closed');if(woof_toggle_type=='text'){jQuery(this).text(woof_toggle_closed_text);}else{jQuery(this).find('img').prop('src',woof_toggle_closed_image);}}else{jQuery(this).addClass('woof_front_toggle_opened');jQuery(this).removeClass('woof_front_toggle_closed');jQuery(this).data('condition','opened');if(woof_toggle_type=='text'){jQuery(this).text(woof_toggle_opened_text);}else{jQuery(this).find('img').prop('src',woof_toggle_opened_image);}}
jQuery(this).parents('.woof_container_inner').find('.woof_block_html_items').toggle(500);return false;});}
function woof_open_hidden_li(){if(jQuery('.woof_open_hidden_li_btn').length>0){jQuery.each(jQuery('.woof_open_hidden_li_btn'),function(i,b){if(jQuery(b).parents('ul').find('li.woof_hidden_term input[type=checkbox],li.woof_hidden_term input[type=radio]').is(':checked')){jQuery(b).trigger('click');}});}}
function $_woof_GET(q,s){s=(s)?s:window.location.search;var re=new RegExp('&'+q+'=([^&]*)','i');return(s=s.replace(/^\?/,'&').match(re))?s=s[1]:s='';}
function woof_parse_url(url){var pattern=RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");var matches=url.match(pattern);return{scheme:matches[2],authority:matches[4],path:matches[5],query:matches[7],fragment:matches[9]};}
function woof_price_filter_radio_init(){if(icheck_skin!='none'){jQuery('.woof_price_filter_radio').iCheck('destroy');jQuery('.woof_price_filter_radio').iCheck({radioClass:'iradio_'+icheck_skin.skin+'-'+icheck_skin.color,});jQuery('.woof_price_filter_radio').siblings('div').removeClass('checked');jQuery('.woof_price_filter_radio').unbind('ifChecked');jQuery('.woof_price_filter_radio').on('ifChecked',function(event){jQuery(this).attr("checked",true);jQuery('.woof_radio_price_reset').removeClass('woof_radio_term_reset_visible');jQuery(this).parents('.woof_list').find('.woof_radio_price_reset').removeClass('woof_radio_term_reset_visible');jQuery(this).parents('.woof_list').find('.woof_radio_price_reset').hide();jQuery(this).parents('li').eq(0).find('.woof_radio_price_reset').eq(0).addClass('woof_radio_term_reset_visible');var val=jQuery(this).val();if(parseInt(val,10)==-1){delete woof_current_values.min_price;delete woof_current_values.max_price;jQuery(this).removeAttr('checked');jQuery(this).siblings('.woof_radio_price_reset').removeClass('woof_radio_term_reset_visible');}else{var val=val.split("-");woof_current_values.min_price=val[0];woof_current_values.max_price=val[1];jQuery(this).siblings('.woof_radio_price_reset').addClass('woof_radio_term_reset_visible');jQuery(this).attr("checked",true);}
if(woof_autosubmit||jQuery(this).within('.woof').length==0){woof_submit_link(woof_get_submit_link());}});}else{jQuery('.woof_price_filter_radio').life('change',function(){var val=jQuery(this).val();jQuery('.woof_radio_price_reset').removeClass('woof_radio_term_reset_visible');if(parseInt(val,10)==-1){delete woof_current_values.min_price;delete woof_current_values.max_price;jQuery(this).removeAttr('checked');jQuery(this).siblings('.woof_radio_price_reset').removeClass('woof_radio_term_reset_visible');}else{var val=val.split("-");woof_current_values.min_price=val[0];woof_current_values.max_price=val[1];jQuery(this).siblings('.woof_radio_price_reset').addClass('woof_radio_term_reset_visible');jQuery(this).attr("checked",true);}
if(woof_autosubmit||jQuery(this).within('.woof').length==0){woof_submit_link(woof_get_submit_link());}});}
jQuery('.woof_radio_price_reset').click(function(){delete woof_current_values.min_price;delete woof_current_values.max_price;jQuery(this).siblings('div').removeClass('checked');jQuery(this).parents('.woof_list').find('input[type=radio]').removeAttr('checked');jQuery(this).removeClass('woof_radio_term_reset_visible');if(woof_autosubmit){woof_submit_link(woof_get_submit_link());}
return false;});}
function woof_serialize(serializedString){var str=decodeURI(serializedString);var pairs=str.split('&');var obj={},p,idx,val;for(var i=0,n=pairs.length;i<n;i++){p=pairs[i].split('=');idx=p[0];if(idx.indexOf("[]")==(idx.length-2)){var ind=idx.substring(0,idx.length-2)
if(obj[ind]===undefined){obj[ind]=[];}
obj[ind].push(p[1]);}else{obj[idx]=p[1];}}
return obj;}
function woof_infinite(){if(typeof yith_infs==='undefined'){return;}
var infinite_scroll1={'nextSelector':'.woocommerce-pagination li .next','navSelector':yith_infs.navSelector,'itemSelector':yith_infs.itemSelector,'contentSelector':yith_infs.contentSelector,'loader':'<img src="'+yith_infs.loader+'">','is_shop':yith_infs.shop};var curr_l=window.location.href;var curr_link=curr_l.split('?');var get="";if(curr_link[1]!=undefined){var temp=woof_serialize(curr_link[1]);delete temp['paged'];get=decodeURIComponent(jQuery.param(temp))}
var page_link=jQuery('.woocommerce-pagination li .next').attr("href");if(page_link==undefined){page_link=curr_link+"page/1/"}
console.log(page_link);var ajax_link=page_link.split('?');var page="";if(ajax_link[1]!=undefined){var temp1=woof_serialize(ajax_link[1]);if(temp1['paged']!=undefined){page="page/"+temp1['paged']+"/";}}
page_link=curr_link[0]+page+'?'+get;jQuery('.woocommerce-pagination li .next').attr('href',page_link);jQuery(window).unbind("yith_infs_start"),jQuery(yith_infs.contentSelector).yit_infinitescroll(infinite_scroll1)}
function woof_init_radios(){if(icheck_skin!='none'){jQuery('.woof_radio_term').iCheck('destroy');jQuery('.woof_radio_term').iCheck({radioClass:'iradio_'+icheck_skin.skin+'-'+icheck_skin.color,});jQuery('.woof_radio_term').unbind('ifChecked');jQuery('.woof_radio_term').on('ifChecked',function(event){jQuery(this).attr("checked",true);jQuery(this).parents('.woof_list').find('.woof_radio_term_reset').removeClass('woof_radio_term_reset_visible');jQuery(this).parents('.woof_list').find('.woof_radio_term_reset').hide();jQuery(this).parents('li').eq(0).find('.woof_radio_term_reset').eq(0).addClass('woof_radio_term_reset_visible');var slug=jQuery(this).data('slug');var name=jQuery(this).attr('name');var term_id=jQuery(this).data('term-id');woof_radio_direct_search(term_id,name,slug);});}else{jQuery('.woof_radio_term').on('change',function(event){jQuery(this).attr("checked",true);var slug=jQuery(this).data('slug');var name=jQuery(this).attr('name');var term_id=jQuery(this).data('term-id');woof_radio_direct_search(term_id,name,slug);});}
jQuery('.woof_radio_term_reset').click(function(){woof_radio_direct_search(jQuery(this).data('term-id'),jQuery(this).attr('data-name'),0);jQuery(this).parents('.woof_list').find('.checked').removeClass('checked');jQuery(this).parents('.woof_list').find('input[type=radio]').removeAttr('checked');jQuery(this).removeClass('woof_radio_term_reset_visible');return false;});}
function woof_radio_direct_search(term_id,name,slug){jQuery.each(woof_current_values,function(index,value){if(index==name){delete woof_current_values[name];return;}});if(slug!=0){woof_current_values[name]=slug;jQuery('a.woof_radio_term_reset_'+term_id).hide();jQuery('woof_radio_term_'+term_id).filter(':checked').parents('li').find('a.woof_radio_term_reset').show();jQuery('woof_radio_term_'+term_id).parents('ul.woof_list').find('label').css({'fontWeight':'normal'});jQuery('woof_radio_term_'+term_id).filter(':checked').parents('li').find('label.woof_radio_label_'+slug).css({'fontWeight':'bold'});}else{jQuery('a.woof_radio_term_reset_'+term_id).hide();jQuery('woof_radio_term_'+term_id).attr('checked',false);jQuery('woof_radio_term_'+term_id).parent().removeClass('checked');jQuery('woof_radio_term_'+term_id).parents('ul.woof_list').find('label').css({'fontWeight':'normal'});}
woof_ajax_page_num=1;if(woof_autosubmit){woof_submit_link(woof_get_submit_link());}};
function woof_init_checkboxes(){if(icheck_skin!='none'){jQuery('.woof_checkbox_term').iCheck('destroy');jQuery('.woof_checkbox_term').iCheck({checkboxClass:'icheckbox_'+icheck_skin.skin+'-'+icheck_skin.color,});jQuery('.woof_checkbox_term').unbind('ifChecked');jQuery('.woof_checkbox_term').on('ifChecked',function(event){jQuery(this).attr("checked",true);woof_checkbox_process_data(this,true);});jQuery('.woof_checkbox_term').unbind('ifUnchecked');jQuery('.woof_checkbox_term').on('ifUnchecked',function(event){jQuery(this).attr("checked",false);woof_checkbox_process_data(this,false);});jQuery('.woof_checkbox_label').unbind();jQuery('label.woof_checkbox_label').click(function(){if(jQuery(this).prev().find('.woof_checkbox_term').is(':checked')){jQuery(this).prev().find('.woof_checkbox_term').trigger('ifUnchecked');jQuery(this).prev().removeClass('checked');}else{jQuery(this).prev().find('.woof_checkbox_term').trigger('ifChecked');jQuery(this).prev().addClass('checked');}
return false;});}else{jQuery('.woof_checkbox_term').on('change',function(event){if(jQuery(this).is(':checked')){jQuery(this).attr("checked",true);woof_checkbox_process_data(this,true);}else{jQuery(this).attr("checked",false);woof_checkbox_process_data(this,false);}});}}
function woof_checkbox_process_data(_this,is_checked){var tax=jQuery(_this).data('tax');var name=jQuery(_this).attr('name');var term_id=jQuery(_this).data('term-id');woof_checkbox_direct_search(term_id,name,tax,is_checked);}
function woof_checkbox_direct_search(term_id,name,tax,is_checked){var values='';var checked=true;if(is_checked){if(tax in woof_current_values){woof_current_values[tax]=woof_current_values[tax]+','+name;}else{woof_current_values[tax]=name;}
checked=true;}else{values=woof_current_values[tax];values=values.split(',');var tmp=[];jQuery.each(values,function(index,value){if(value!=name){tmp.push(value);}});values=tmp;if(values.length){woof_current_values[tax]=values.join(',');}else{delete woof_current_values[tax];}
checked=false;}
jQuery('.woof_checkbox_term_'+term_id).attr('checked',checked);woof_ajax_page_num=1;if(woof_autosubmit){woof_submit_link(woof_get_submit_link());}};
function woof_init_selects(){if(is_woof_use_chosen){try{jQuery("select.woof_select, select.woof_price_filter_dropdown").chosen();}catch(e){}}
jQuery('.woof_select').change(function(){var slug=jQuery(this).val();var name=jQuery(this).attr('name');woof_select_direct_search(this,name,slug);});}
function woof_select_direct_search(_this,name,slug){jQuery.each(woof_current_values,function(index,value){if(index==name){delete woof_current_values[name];return;}});if(slug!=0){woof_current_values[name]=slug;}
woof_ajax_page_num=1;if(woof_autosubmit||jQuery(_this).within('.woof').length==0){woof_submit_link(woof_get_submit_link());}};
function woof_init_mselects(){try{jQuery("select.woof_mselect").chosen();}catch(e){}
jQuery('.woof_mselect').change(function(a){var slug=jQuery(this).val();var name=jQuery(this).attr('name');if(is_woof_use_chosen){var vals=jQuery(this).chosen().val();jQuery('.woof_mselect[name='+name+'] option:selected').removeAttr("selected");jQuery('.woof_mselect[name='+name+'] option').each(function(i,option){var v=jQuery(this).val();if(jQuery.inArray(v,vals)!==-1){jQuery(this).prop("selected",true);}});}
woof_mselect_direct_search(name,slug);return true;});}
function woof_mselect_direct_search(name,slug){var values=[];jQuery('.woof_mselect[name='+name+'] option:selected').each(function(i,v){values.push(jQuery(this).val());});values=values.filter(function(item,pos){return values.indexOf(item)==pos;});values=values.join(',');if(values.length){woof_current_values[name]=values;}else{delete woof_current_values[name];}
woof_ajax_page_num=1;if(woof_autosubmit){woof_submit_link(woof_get_submit_link());}};
/*!
 Chosen, a Select Box Enhancer for jQuery and Prototype
 by Patrick Filler for Harvest, http://getharvest.com
 Version 1.1.0
 Full source at https://github.com/harvesthq/chosen
 Copyright (c) 2011 Harvest http://getharvest.com
 MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
 This file is generated by `grunt build`, do not edit it by hand.
 */
(function () {
    var $, AbstractChosen, Chosen, SelectParser, _ref,
            __hasProp = {}.hasOwnProperty,
            __extends = function (child, parent) {
                for (var key in parent) {
                    if (__hasProp.call(parent, key))
                        child[key] = parent[key];
                }
                function ctor() {
                    this.constructor = child;
                }
                ctor.prototype = parent.prototype;
                child.prototype = new ctor();
                child.__super__ = parent.prototype;
                return child;
            };
    SelectParser = (function () {
        function SelectParser() {
            this.options_index = 0;
            this.parsed = [];
        }
        SelectParser.prototype.add_node = function (child) {
            if (child.nodeName.toUpperCase() === "OPTGROUP") {
                return this.add_group(child);
            } else {
                return this.add_option(child);
            }
        };
        SelectParser.prototype.add_group = function (group) {
            var group_position, option, _i, _len, _ref, _results;
            group_position = this.parsed.length;
            this.parsed.push({
                array_index: group_position,
                group: true,
                label: this.escapeExpression(group.label),
                children: 0,
                disabled: group.disabled
            });
            _ref = group.childNodes;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                _results.push(this.add_option(option, group_position, group.disabled));
            }
            return _results;
        };
        SelectParser.prototype.add_option = function (option, group_position, group_disabled) {
            if (option.nodeName.toUpperCase() === "OPTION") {
                if (option.text !== "") {
                    if (group_position != null) {
                        this.parsed[group_position].children += 1;
                    }
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        value: option.value,
                        text: option.text,
                        html: option.innerHTML,
                        selected: option.selected,
                        disabled: group_disabled === true ? group_disabled : option.disabled,
                        group_array_index: group_position,
                        classes: option.className,
                        style: option.style.cssText
                    });
                } else {
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        empty: true
                    });
                }
                return this.options_index += 1;
            }
        };
        SelectParser.prototype.escapeExpression = function (text) {
            var map, unsafe_chars;
            if ((text == null) || text === false) {
                return "";
            }
            if (!/[\&\<\>\"\'\`]/.test(text)) {
                return text;
            }
            map = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            };
            unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
            return text.replace(unsafe_chars, function (chr) {
                return map[chr] || "&amp;";
            });
        };
        return SelectParser;
    })();
    SelectParser.select_to_array = function (select) {
        var child, parser, _i, _len, _ref;
        parser = new SelectParser();
        _ref = select.childNodes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            child = _ref[_i];
            parser.add_node(child);
        }
        return parser.parsed;
    };
    AbstractChosen = (function () {
        function AbstractChosen(form_field, options) {
            this.form_field = form_field;
            this.options = options != null ? options : {};
            if (!AbstractChosen.browser_is_supported()) {
                return;
            }
            this.is_multiple = this.form_field.multiple;
            this.set_default_text();
            this.set_default_values();
            this.setup();
            this.set_up_html();
            this.register_observers();
        }
        AbstractChosen.prototype.set_default_values = function () {
            var _this = this;
            this.click_test_action = function (evt) {
                return _this.test_active_click(evt);
            };
            this.activate_action = function (evt) {
                return _this.activate_field(evt);
            };
            this.active_field = false;
            this.mouse_on_container = false;
            this.results_showing = false;
            this.result_highlighted = null;
            this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
            this.disable_search_threshold = this.options.disable_search_threshold || 0;
            this.disable_search = this.options.disable_search || false;
            this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
            this.group_search = this.options.group_search != null ? this.options.group_search : true;
            this.search_contains = this.options.search_contains || false;
            this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
            this.max_selected_options = this.options.max_selected_options || Infinity;
            this.inherit_select_classes = this.options.inherit_select_classes || false;
            this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
            return this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
        };
        AbstractChosen.prototype.set_default_text = function () {
            if (this.form_field.getAttribute("data-placeholder")) {
                this.default_text = this.form_field.getAttribute("data-placeholder");
            } else if (this.is_multiple) {
                this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
            } else {
                this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
            }
            return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
        };
        AbstractChosen.prototype.mouse_enter = function () {
            return this.mouse_on_container = true;
        };
        AbstractChosen.prototype.mouse_leave = function () {
            return this.mouse_on_container = false;
        };
        AbstractChosen.prototype.input_focus = function (evt) {
            var _this = this;
            if (this.is_multiple) {
                if (!this.active_field) {
                    return setTimeout((function () {
                        return _this.container_mousedown();
                    }), 50);
                }
            } else {
                if (!this.active_field) {
                    return this.activate_field();
                }
            }
        };
        AbstractChosen.prototype.input_blur = function (evt) {
            var _this = this;
            if (!this.mouse_on_container) {
                this.active_field = false;
                return setTimeout((function () {
                    return _this.blur_test();
                }), 100);
            }
        };
        AbstractChosen.prototype.results_option_build = function (options) {
            var content, data, _i, _len, _ref;
            content = '';
            _ref = this.results_data;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                data = _ref[_i];
                if (data.group) {
                    content += this.result_add_group(data);
                } else {
                    content += this.result_add_option(data);
                }
                if (options != null ? options.first : void 0) {
                    if (data.selected && this.is_multiple) {
                        this.choice_build(data);
                    } else if (data.selected && !this.is_multiple) {
                        this.single_set_selected_text(data.text);
                    }
                }
            }
            return content;
        };
        AbstractChosen.prototype.result_add_option = function (option) {
            var classes, option_el;
            if (!option.search_match) {
                return '';
            }
            if (!this.include_option_in_results(option)) {
                return '';
            }
            classes = [];
            if (!option.disabled && !(option.selected && this.is_multiple)) {
                classes.push("active-result");
            }
            if (option.disabled && !(option.selected && this.is_multiple)) {
                classes.push("disabled-result");
            }
            if (option.selected) {
                classes.push("result-selected");
            }
            if (option.group_array_index != null) {
                classes.push("group-option");
            }
            if (option.classes !== "") {
                classes.push(option.classes);
            }
            option_el = document.createElement("li");
            option_el.className = classes.join(" ");
            option_el.style.cssText = option.style;
            option_el.setAttribute("data-option-array-index", option.array_index);
            option_el.innerHTML = option.search_text;
            return this.outerHTML(option_el);
        };
        AbstractChosen.prototype.result_add_group = function (group) {
            var group_el;
            if (!(group.search_match || group.group_match)) {
                return '';
            }
            if (!(group.active_options > 0)) {
                return '';
            }
            group_el = document.createElement("li");
            group_el.className = "group-result";
            group_el.innerHTML = group.search_text;
            return this.outerHTML(group_el);
        };
        AbstractChosen.prototype.results_update_field = function () {
            this.set_default_text();
            if (!this.is_multiple) {
                this.results_reset_cleanup();
            }
            this.result_clear_highlight();
            this.results_build();
            if (this.results_showing) {
                return this.winnow_results();
            }
        };
        AbstractChosen.prototype.reset_single_select_options = function () {
            var result, _i, _len, _ref, _results;
            _ref = this.results_data;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                result = _ref[_i];
                if (result.selected) {
                    _results.push(result.selected = false);
                } else {
                    _results.push(void 0);
                }
            }
            return _results;
        };
        AbstractChosen.prototype.results_toggle = function () {
            if (this.results_showing) {
                return this.results_hide();
            } else {
                return this.results_show();
            }
        };
        AbstractChosen.prototype.results_search = function (evt) {
            if (this.results_showing) {
                return this.winnow_results();
            } else {
                return this.results_show();
            }
        };
        AbstractChosen.prototype.winnow_results = function () {
            var escapedSearchText, option, regex, regexAnchor, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;
            this.no_results_clear();
            results = 0;
            searchText = this.get_search_text();
            escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            regexAnchor = this.search_contains ? "" : "^";
            regex = new RegExp(regexAnchor + escapedSearchText, 'i');
            zregex = new RegExp(escapedSearchText, 'i');
            _ref = this.results_data;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                option.search_match = false;
                results_group = null;
                if (this.include_option_in_results(option)) {
                    if (option.group) {
                        option.group_match = false;
                        option.active_options = 0;
                    }
                    if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
                        results_group = this.results_data[option.group_array_index];
                        if (results_group.active_options === 0 && results_group.search_match) {
                            results += 1;
                        }
                        results_group.active_options += 1;
                    }
                    if (!(option.group && !this.group_search)) {
                        option.search_text = option.group ? option.label : option.html;
                        option.search_match = this.search_string_match(option.search_text, regex);
                        if (option.search_match && !option.group) {
                            results += 1;
                        }
                        if (option.search_match) {
                            if (searchText.length) {
                                startpos = option.search_text.search(zregex);
                                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
                            }
                            if (results_group != null) {
                                results_group.group_match = true;
                            }
                        } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
                            option.search_match = true;
                        }
                    }
                }
            }
            this.result_clear_highlight();
            if (results < 1 && searchText.length) {
                this.update_results_content("");
                return this.no_results(searchText);
            } else {
                this.update_results_content(this.results_option_build());
                return this.winnow_results_set_highlight();
            }
        };
        AbstractChosen.prototype.search_string_match = function (search_string, regex) {
            var part, parts, _i, _len;
            if (regex.test(search_string)) {
                return true;
            } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
                parts = search_string.replace(/\[|\]/g, "").split(" ");
                if (parts.length) {
                    for (_i = 0, _len = parts.length; _i < _len; _i++) {
                        part = parts[_i];
                        if (regex.test(part)) {
                            return true;
                        }
                    }
                }
            }
        };
        AbstractChosen.prototype.choices_count = function () {
            var option, _i, _len, _ref;
            if (this.selected_option_count != null) {
                return this.selected_option_count;
            }
            this.selected_option_count = 0;
            _ref = this.form_field.options;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                if (option.selected) {
                    this.selected_option_count += 1;
                }
            }
            return this.selected_option_count;
        };
        AbstractChosen.prototype.choices_click = function (evt) {
            evt.preventDefault();
            if (!(this.results_showing || this.is_disabled)) {
                return this.results_show();
            }
        };
        AbstractChosen.prototype.keyup_checker = function (evt) {
            var stroke, _ref;
            stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
            this.search_field_scale();
            switch (stroke) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
                        return this.keydown_backstroke();
                    } else if (!this.pending_backstroke) {
                        this.result_clear_highlight();
                        return this.results_search();
                    }
                    break;
                case 13:
                    evt.preventDefault();
                    if (this.results_showing) {
                        return this.result_select(evt);
                    }
                    break;
                case 27:
                    if (this.results_showing) {
                        this.results_hide();
                    }
                    return true;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search();
            }
        };
        AbstractChosen.prototype.clipboard_event_checker = function (evt) {
            var _this = this;
            return setTimeout((function () {
                return _this.results_search();
            }), 50);
        };
        AbstractChosen.prototype.container_width = function () {
            if (this.options.width != null) {
                return this.options.width;
            } else {
                return "" + this.form_field.offsetWidth + "px";
            }
        };
        AbstractChosen.prototype.include_option_in_results = function (option) {
            if (this.is_multiple && (!this.display_selected_options && option.selected)) {
                return false;
            }
            if (!this.display_disabled_options && option.disabled) {
                return false;
            }
            if (option.empty) {
                return false;
            }
            return true;
        };
        AbstractChosen.prototype.search_results_touchstart = function (evt) {
            this.touch_started = true;
            return this.search_results_mouseover(evt);
        };
        AbstractChosen.prototype.search_results_touchmove = function (evt) {
            this.touch_started = false;
            return this.search_results_mouseout(evt);
        };
        AbstractChosen.prototype.search_results_touchend = function (evt) {
            if (this.touch_started) {
                return this.search_results_mouseup(evt);
            }
        };
        AbstractChosen.prototype.outerHTML = function (element) {
            var tmp;
            if (element.outerHTML) {
                return element.outerHTML;
            }
            tmp = document.createElement("div");
            tmp.appendChild(element);
            return tmp.innerHTML;
        };
        AbstractChosen.browser_is_supported = function () {
            return true;
            if (window.navigator.appName === "Microsoft Internet Explorer") {
                return document.documentMode >= 8;
            }
            if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
                return false;
            }
            if (/Android/i.test(window.navigator.userAgent)) {
                if (/Mobile/i.test(window.navigator.userAgent)) {
                    return false;
                }
            }
            return true;
        };
        AbstractChosen.default_multiple_text = "Select Some Options";
        AbstractChosen.default_single_text = "Select an Option";
        AbstractChosen.default_no_result_text = "No results match";
        return AbstractChosen;
    })();
    $ = jQuery;
    $.fn.extend({
        chosen: function (options) {
            if (!AbstractChosen.browser_is_supported()) {
                return this;
            }
            return this.each(function (input_field) {
                var $this, chosen;
                $this = $(this);
                chosen = $this.data('chosen');
                if (options === 'destroy' && chosen) {
                    chosen.destroy();
                } else if (!chosen) {
                    $this.data('chosen', new Chosen(this, options));
                }
            });
        }
    });
    Chosen = (function (_super) {
        __extends(Chosen, _super);
        function Chosen() {
            _ref = Chosen.__super__.constructor.apply(this, arguments);
            return _ref;
        }
        Chosen.prototype.setup = function () {
            this.form_field_jq = $(this.form_field);
            this.current_selectedIndex = this.form_field.selectedIndex;
            return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
        };
        Chosen.prototype.set_up_html = function () {
            var container_classes, container_props;
            container_classes = ["chosen-container"];
            container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
            if (this.inherit_select_classes && this.form_field.className) {
                container_classes.push(this.form_field.className);
            }
            if (this.is_rtl) {
                container_classes.push("chosen-rtl");
            }
            container_props = {
                'class': container_classes.join(' '),
                'style': "width: " + (this.container_width()) + ";",
                'title': this.form_field.title
            };
            if (this.form_field.id.length) {
                container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
            }
            this.container = $("<div />", container_props);
            if (this.is_multiple) {
                this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
            } else {
                this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
            }
            this.form_field_jq.hide().after(this.container);
            this.dropdown = this.container.find('div.chosen-drop').first();
            this.search_field = this.container.find('input').first();
            this.search_results = this.container.find('ul.chosen-results').first();
            this.search_field_scale();
            this.search_no_results = this.container.find('li.no-results').first();
            if (this.is_multiple) {
                this.search_choices = this.container.find('ul.chosen-choices').first();
                this.search_container = this.container.find('li.search-field').first();
            } else {
                this.search_container = this.container.find('div.chosen-search').first();
                this.selected_item = this.container.find('.chosen-single').first();
            }
            this.results_build();
            this.set_tab_index();
            this.set_label_behavior();
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            });
        };
        Chosen.prototype.register_observers = function () {
            var _this = this;
            this.container.bind('mousedown.chosen', function (evt) {
                _this.container_mousedown(evt);
            });
            this.container.bind('mouseup.chosen', function (evt) {
                _this.container_mouseup(evt);
            });
            this.container.bind('mouseenter.chosen', function (evt) {
                _this.mouse_enter(evt);
            });
            this.container.bind('mouseleave.chosen', function (evt) {
                _this.mouse_leave(evt);
            });
            this.search_results.bind('mouseup.chosen', function (evt) {
                _this.search_results_mouseup(evt);
            });
            this.search_results.bind('mouseover.chosen', function (evt) {
                _this.search_results_mouseover(evt);
            });
            this.search_results.bind('mouseout.chosen', function (evt) {
                _this.search_results_mouseout(evt);
            });
            this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function (evt) {
                _this.search_results_mousewheel(evt);
            });
            this.search_results.bind('touchstart.chosen', function (evt) {
                _this.search_results_touchstart(evt);
            });
            this.search_results.bind('touchmove.chosen', function (evt) {
                _this.search_results_touchmove(evt);
            });
            this.search_results.bind('touchend.chosen', function (evt) {
                _this.search_results_touchend(evt);
            });
            this.form_field_jq.bind("chosen:updated.chosen", function (evt) {
                _this.results_update_field(evt);
            });
            this.form_field_jq.bind("chosen:activate.chosen", function (evt) {
                _this.activate_field(evt);
            });
            this.form_field_jq.bind("chosen:open.chosen", function (evt) {
                _this.container_mousedown(evt);
            });
            this.form_field_jq.bind("chosen:close.chosen", function (evt) {
                _this.input_blur(evt);
            });
            this.search_field.bind('blur.chosen', function (evt) {
                _this.input_blur(evt);
            });
            this.search_field.bind('keyup.chosen', function (evt) {
                _this.keyup_checker(evt);
            });
            this.search_field.bind('keydown.chosen', function (evt) {
                _this.keydown_checker(evt);
            });
            this.search_field.bind('focus.chosen', function (evt) {
                _this.input_focus(evt);
            });
            this.search_field.bind('cut.chosen', function (evt) {
                _this.clipboard_event_checker(evt);
            });
            this.search_field.bind('paste.chosen', function (evt) {
                _this.clipboard_event_checker(evt);
            });
            if (this.is_multiple) {
                return this.search_choices.bind('click.chosen', function (evt) {
                    _this.choices_click(evt);
                });
            } else {
                return this.container.bind('click.chosen', function (evt) {
                    evt.preventDefault();
                });
            }
        };
        Chosen.prototype.destroy = function () {
            $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
            if (this.search_field[0].tabIndex) {
                this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
            }
            this.container.remove();
            this.form_field_jq.removeData('chosen');
            return this.form_field_jq.show();
        };
        Chosen.prototype.search_field_disabled = function () {
            this.is_disabled = this.form_field_jq[0].disabled;
            if (this.is_disabled) {
                this.container.addClass('chosen-disabled');
                this.search_field[0].disabled = true;
                if (!this.is_multiple) {
                    this.selected_item.unbind("focus.chosen", this.activate_action);
                }
                return this.close_field();
            } else {
                this.container.removeClass('chosen-disabled');
                this.search_field[0].disabled = false;
                if (!this.is_multiple) {
                    return this.selected_item.bind("focus.chosen", this.activate_action);
                }
            }
        };
        Chosen.prototype.container_mousedown = function (evt) {
            if (!this.is_disabled) {
                if (evt && evt.type === "mousedown" && !this.results_showing) {
                    evt.preventDefault();
                }
                if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
                    if (!this.active_field) {
                        if (this.is_multiple) {
                            this.search_field.val("");
                        }
                        $(this.container[0].ownerDocument).bind('click.chosen', this.click_test_action);
                        this.results_show();
                    } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
                        evt.preventDefault();
                        this.results_toggle();
                    }
                    return this.activate_field();
                }
            }
        };
        Chosen.prototype.container_mouseup = function (evt) {
            if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
                return this.results_reset(evt);
            }
        };
        Chosen.prototype.search_results_mousewheel = function (evt) {
            var delta;
            if (evt.originalEvent) {
                delta = -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
            }
            if (delta != null) {
                evt.preventDefault();
                if (evt.type === 'DOMMouseScroll') {
                    delta = delta * 40;
                }
                return this.search_results.scrollTop(delta + this.search_results.scrollTop());
            }
        };
        Chosen.prototype.blur_test = function (evt) {
            if (!this.active_field && this.container.hasClass("chosen-container-active")) {
                return this.close_field();
            }
        };
        Chosen.prototype.close_field = function () {
            $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
            this.active_field = false;
            this.results_hide();
            this.container.removeClass("chosen-container-active");
            this.clear_backstroke();
            this.show_search_field_default();
            return this.search_field_scale();
        };
        Chosen.prototype.activate_field = function () {
            this.container.addClass("chosen-container-active");
            this.active_field = true;
            this.search_field.val(this.search_field.val());
            return this.search_field.focus();
        };
        Chosen.prototype.test_active_click = function (evt) {
            var active_container;
            active_container = $(evt.target).closest('.chosen-container');
            if (active_container.length && this.container[0] === active_container[0]) {
                return this.active_field = true;
            } else {
                return this.close_field();
            }
        };
        Chosen.prototype.results_build = function () {
            this.parsing = true;
            this.selected_option_count = null;
            this.results_data = SelectParser.select_to_array(this.form_field);
            if (this.is_multiple) {
                this.search_choices.find("li.search-choice").remove();
            } else if (!this.is_multiple) {
                this.single_set_selected_text();
                if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
                    this.search_field[0].readOnly = true;
                    this.container.addClass("chosen-container-single-nosearch");
                } else {
                    this.search_field[0].readOnly = false;
                    this.container.removeClass("chosen-container-single-nosearch");
                }
            }
            this.update_results_content(this.results_option_build({
                first: true
            }));
            this.search_field_disabled();
            this.show_search_field_default();
            this.search_field_scale();
            return this.parsing = false;
        };
        Chosen.prototype.result_do_highlight = function (el) {
            var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
            if (el.length) {
                this.result_clear_highlight();
                this.result_highlight = el;
                this.result_highlight.addClass("highlighted");
                maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
                visible_top = this.search_results.scrollTop();
                visible_bottom = maxHeight + visible_top;
                high_top = this.result_highlight.position().top + this.search_results.scrollTop();
                high_bottom = high_top + this.result_highlight.outerHeight();
                if (high_bottom >= visible_bottom) {
                    return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
                } else if (high_top < visible_top) {
                    return this.search_results.scrollTop(high_top);
                }
            }
        };
        Chosen.prototype.result_clear_highlight = function () {
            if (this.result_highlight) {
                this.result_highlight.removeClass("highlighted");
            }
            return this.result_highlight = null;
        };
        Chosen.prototype.results_show = function () {
            if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                });
                return false;
            }
            this.container.addClass("chosen-with-drop");
            this.results_showing = true;
            this.search_field.focus();
            this.search_field.val(this.search_field.val());
            this.winnow_results();
            return this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            });
        };
        Chosen.prototype.update_results_content = function (content) {
            return this.search_results.html(content);
        };
        Chosen.prototype.results_hide = function () {
            if (this.results_showing) {
                this.result_clear_highlight();
                this.container.removeClass("chosen-with-drop");
                this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                });
            }
            return this.results_showing = false;
        };
        Chosen.prototype.set_tab_index = function (el) {
            var ti;
            if (this.form_field.tabIndex) {
                ti = this.form_field.tabIndex;
                this.form_field.tabIndex = -1;
                return this.search_field[0].tabIndex = ti;
            }
        };
        Chosen.prototype.set_label_behavior = function () {
            var _this = this;
            this.form_field_label = this.form_field_jq.parents("label");
            if (!this.form_field_label.length && this.form_field.id.length) {
                this.form_field_label = $("label[for='" + this.form_field.id + "']");
            }
            if (this.form_field_label.length > 0) {
                return this.form_field_label.bind('click.chosen', function (evt) {
                    if (_this.is_multiple) {
                        return _this.container_mousedown(evt);
                    } else {
                        return _this.activate_field();
                    }
                });
            }
        };
        Chosen.prototype.show_search_field_default = function () {
            if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
                this.search_field.val(this.default_text);
                return this.search_field.addClass("default");
            } else {
                this.search_field.val("");
                return this.search_field.removeClass("default");
            }
        };
        Chosen.prototype.search_results_mouseup = function (evt) {
            var target;
            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target.length) {
                this.result_highlight = target;
                this.result_select(evt);
                return this.search_field.focus();
            }
        };
        Chosen.prototype.search_results_mouseover = function (evt) {
            var target;
            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target) {
                return this.result_do_highlight(target);
            }
        };
        Chosen.prototype.search_results_mouseout = function (evt) {
            if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
                return this.result_clear_highlight();
            }
        };
        Chosen.prototype.choice_build = function (item) {
            var choice, close_link,
                    _this = this;
            choice = $('<li />', {
                "class": "search-choice"
            }).html("<span>" + item.html + "</span>");
            if (item.disabled) {
                choice.addClass('search-choice-disabled');
            } else {
                close_link = $('<a />', {
                    "class": 'search-choice-close',
                    'data-option-array-index': item.array_index
                });
                close_link.bind('click.chosen', function (evt) {
                    return _this.choice_destroy_link_click(evt);
                });
                choice.append(close_link);
            }
            return this.search_container.before(choice);
        };
        Chosen.prototype.choice_destroy_link_click = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if (!this.is_disabled) {
                return this.choice_destroy($(evt.target));
            }
        };
        Chosen.prototype.choice_destroy = function (link) {
            if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
                this.show_search_field_default();
                if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
                    this.results_hide();
                }
                link.parents('li').first().remove();
                return this.search_field_scale();
            }
        };
        Chosen.prototype.results_reset = function () {
            this.reset_single_select_options();
            this.form_field.options[0].selected = true;
            this.single_set_selected_text();
            this.show_search_field_default();
            this.results_reset_cleanup();
            this.form_field_jq.trigger("change");
            if (this.active_field) {
                return this.results_hide();
            }
        };
        Chosen.prototype.results_reset_cleanup = function () {
            this.current_selectedIndex = this.form_field.selectedIndex;
            return this.selected_item.find("abbr").remove();
        };
        Chosen.prototype.result_select = function (evt) {
            var high, item;
            if (this.result_highlight) {
                high = this.result_highlight;
                this.result_clear_highlight();
                if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                    this.form_field_jq.trigger("chosen:maxselected", {
                        chosen: this
                    });
                    return false;
                }
                if (this.is_multiple) {
                    high.removeClass("active-result");
                } else {
                    this.reset_single_select_options();
                }
                item = this.results_data[high[0].getAttribute("data-option-array-index")];
                item.selected = true;
                this.form_field.options[item.options_index].selected = true;
                this.selected_option_count = null;
                if (this.is_multiple) {
                    this.choice_build(item);
                } else {
                    this.single_set_selected_text(item.text);
                }
                if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
                    this.results_hide();
                }
                this.search_field.val("");
                if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
                    this.form_field_jq.trigger("change", {
                        'selected': this.form_field.options[item.options_index].value
                    });
                }
                this.current_selectedIndex = this.form_field.selectedIndex;
                evt.preventDefault();
                evt.stopPropagation();
                return this.search_field_scale();
            }
        };
        Chosen.prototype.single_set_selected_text = function (text) {
            if (text == null) {
                text = this.default_text;
            }
            if (text === this.default_text) {
                this.selected_item.addClass("chosen-default");
            } else {
                this.single_deselect_control_build();
                this.selected_item.removeClass("chosen-default");
            }
            return this.selected_item.find("span").text(text);
        };
        Chosen.prototype.result_deselect = function (pos) {
            var result_data;
            result_data = this.results_data[pos];
            if (!this.form_field.options[result_data.options_index].disabled) {
                result_data.selected = false;
                this.form_field.options[result_data.options_index].selected = false;
                this.selected_option_count = null;
                this.result_clear_highlight();
                if (this.results_showing) {
                    this.winnow_results();
                }
                this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[result_data.options_index].value
                });
                this.search_field_scale();
                return true;
            } else {
                return false;
            }
        };
        Chosen.prototype.single_deselect_control_build = function () {
            if (!this.allow_single_deselect) {
                return;
            }
            if (!this.selected_item.find("abbr").length) {
                this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
            }
            return this.selected_item.addClass("chosen-single-with-deselect");
        };
        Chosen.prototype.get_search_text = function () {
            if (this.search_field.val() === this.default_text) {
                return "";
            } else {
                return $('<div/>').text($.trim(this.search_field.val())).html();
            }
        };
        Chosen.prototype.winnow_results_set_highlight = function () {
            var do_high, selected_results;
            selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
            do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
            if (do_high != null) {
                return this.result_do_highlight(do_high);
            }
        };
        Chosen.prototype.no_results = function (terms) {
            var no_results_html;
            no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
            no_results_html.find("span").first().html(terms);
            this.search_results.append(no_results_html);
            return this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            });
        };
        Chosen.prototype.no_results_clear = function () {
            return this.search_results.find(".no-results").remove();
        };
        Chosen.prototype.keydown_arrow = function () {
            var next_sib;
            if (this.results_showing && this.result_highlight) {
                next_sib = this.result_highlight.nextAll("li.active-result").first();
                if (next_sib) {
                    return this.result_do_highlight(next_sib);
                }
            } else {
                return this.results_show();
            }
        };
        Chosen.prototype.keyup_arrow = function () {
            var prev_sibs;
            if (!this.results_showing && !this.is_multiple) {
                return this.results_show();
            } else if (this.result_highlight) {
                prev_sibs = this.result_highlight.prevAll("li.active-result");
                if (prev_sibs.length) {
                    return this.result_do_highlight(prev_sibs.first());
                } else {
                    if (this.choices_count() > 0) {
                        this.results_hide();
                    }
                    return this.result_clear_highlight();
                }
            }
        };
        Chosen.prototype.keydown_backstroke = function () {
            var next_available_destroy;
            if (this.pending_backstroke) {
                this.choice_destroy(this.pending_backstroke.find("a").first());
                return this.clear_backstroke();
            } else {
                next_available_destroy = this.search_container.siblings("li.search-choice").last();
                if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
                    this.pending_backstroke = next_available_destroy;
                    if (this.single_backstroke_delete) {
                        return this.keydown_backstroke();
                    } else {
                        return this.pending_backstroke.addClass("search-choice-focus");
                    }
                }
            }
        };
        Chosen.prototype.clear_backstroke = function () {
            if (this.pending_backstroke) {
                this.pending_backstroke.removeClass("search-choice-focus");
            }
            return this.pending_backstroke = null;
        };
        Chosen.prototype.keydown_checker = function (evt) {
            var stroke, _ref1;
            stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
            this.search_field_scale();
            if (stroke !== 8 && this.pending_backstroke) {
                this.clear_backstroke();
            }
            switch (stroke) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    if (this.results_showing && !this.is_multiple) {
                        this.result_select(evt);
                    }
                    this.mouse_on_container = false;
                    break;
                case 13:
                    evt.preventDefault();
                    break;
                case 38:
                    evt.preventDefault();
                    this.keyup_arrow();
                    break;
                case 40:
                    evt.preventDefault();
                    this.keydown_arrow();
                    break;
            }
        };
        Chosen.prototype.search_field_scale = function () {
            var div, f_width, h, style, style_block, styles, w, _i, _len;
            if (this.is_multiple) {
                h = 0;
                w = 0;
                style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
                styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
                for (_i = 0, _len = styles.length; _i < _len; _i++) {
                    style = styles[_i];
                    style_block += style + ":" + this.search_field.css(style) + ";";
                }
                div = $('<div />', {
                    'style': style_block
                });
                div.text(this.search_field.val());
                $('body').append(div);
                w = div.width() + 25;
                div.remove();
                f_width = this.container.outerWidth();
                if (w > f_width - 10) {
                    w = f_width - 10;
                }
                return this.search_field.css({
                    'width': w + 'px'
                });
            }
        };
        return Chosen;
    })(AbstractChosen);
}).call(this);