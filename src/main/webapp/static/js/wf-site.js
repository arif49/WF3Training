/*!
 * Bootstrap v3.0.2 by @fat and @mdo
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world by @mdo and @fat.
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
/*!

   Flowplayer v5.4.6 (Tuesday, 17. December 2013 08:57PM) | flowplayer.org/license

*/
!function(e){function t(t,n){var i="obj"+(""+Math.random()).slice(2,15),a='<object class="fp-engine" id="'+i+'" name="'+i+'" ';a+=e.browser.msie?'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">':' data="'+t+'" type="application/x-shockwave-flash">';var o={width:"100%",height:"100%",allowscriptaccess:"always",wmode:"transparent",quality:"high",flashvars:"",movie:t+(e.browser.msie?"?"+i:""),name:i};return e.each(n,function(e,t){o.flashvars+=e+"="+t+"&"}),e.each(o,function(e,t){a+='<param name="'+e+'" value="'+t+'"/>'}),a+="</object>",e(a)}function n(e,t){return t=t||100,Math.round(e*t)/t}function i(e){return/mpegurl/i.test(e)?"application/x-mpegurl":"video/"+e}function a(e){return/^(video|application)/.test(e)||(e=i(e)),!!h.canPlayType(e).replace("no","")}function o(t,n){var i=e.grep(t,function(e){return e.type===n});return i.length?i[0]:null}function r(e){var t=e.attr("src"),n=e.attr("type")||"",i=t.split(w)[1];return n=/mpegurl/.test(n)?"mpegurl":n.replace("video/",""),{src:t,suffix:i||n,type:n||i}}function s(t){var n=this,i=[];e("source",t).each(function(){i.push(r(e(this)))}),i.length||i.push(r(t)),n.initialSources=i,n.resolve=function(t){return t?(e.isArray(t)?t={sources:e.map(t,function(t){var n,i=e.extend({},t);return e.each(t,function(e){n=e}),i.type=n,i.src=t[n],delete i[n],i})}:"string"==typeof t&&(t={src:t,sources:[]},e.each(i,function(e,n){"flash"!=n.type&&t.sources.push({type:n.type,src:t.src.replace(w,"."+n.suffix+"$2")})})),t):{sources:i}}}function l(e){return e=parseInt(e,10),e>=10?e:"0"+e}function d(e){e=e||0;var t=Math.floor(e/3600),n=Math.floor(e/60);return e-=60*n,t>=1?(n-=60*t,t+":"+l(n)+":"+l(e)):l(n)+":"+l(e)}!function(e){if(!e.browser){var t=e.browser={},n=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(n)||/(safari)[ \/]([\w.]+)/.exec(n)||/(webkit)[ \/]([\w.]+)/.exec(n)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n)||/(msie) ([\w.]+)/.exec(n)||n.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n)||[];i[1]&&(t[i[1]]=!0,t.version=i[2]||"0")}}(jQuery),e(function(){"function"==typeof e.fn.flowplayer&&e("video").parent(".flowplayer").flowplayer()});var u=[],c=[],f=window.navigator.userAgent;window.flowplayer=function(t){return e.isFunction(t)?c.push(t):"number"==typeof t||void 0===t?u[t||0]:e(t).data("flowplayer")},e(window).on("beforeunload",function(){e.each(u,function(t,n){n.conf.splash?n.unload():n.bind("error",function(){e(".flowplayer.is-error .fp-message").remove()})})});var p=!1;try{"object"==typeof window.localStorage&&(window.localStorage.flowplayerTestStorage="test",p=!0)}catch(v){}e.extend(flowplayer,{version:"5.4.6",engine:{},conf:{},support:{},defaults:{debug:!1,disabled:!1,engine:"html5",fullscreen:window==window.top,keyboard:!0,ratio:9/16,adaptiveRatio:!1,flashfit:!1,rtmp:0,splash:!1,live:!1,swf:"//releases.flowplayer.org/5.4.6/flowplayer.swf",speeds:[.25,.5,1,1.5,2],tooltip:!0,volume:p?"true"==localStorage.muted?0:isNaN(localStorage.volume)?1:localStorage.volume||1:1,errors:["","Video loading aborted","Network error","Video not properly encoded","Video file not found","Unsupported video","Skin not found","SWF file not found","Subtitles not found","Invalid RTMP URL","Unsupported video format. Try installing Adobe Flash."],errorUrls:["","","","","","","","","","","http://get.adobe.com/flashplayer/"],playlist:[]}});var g=1;e.fn.flowplayer=function(t,n){return"string"==typeof t&&(t={swf:t}),e.isFunction(t)&&(n=t,t={}),!t&&this.data("flowplayer")||this.each(function(){var i,a,o=e(this).addClass("is-loading"),r=e.extend({},flowplayer.defaults,flowplayer.conf,t,o.data()),l=e("video",o).addClass("fp-engine").removeAttr("controls"),d=l.length?new s(l):null,f={};if(r.playlist.length){var p,v=l.attr("preload");l.length&&l.replaceWith(p=e("<p />")),l=e("<video />").addClass("fp-engine"),p?p.replaceWith(l):o.prepend(l),flowplayer.support.video&&l.attr("preload",v),"string"==typeof r.playlist[0]?l.attr("src",r.playlist[0]):e.each(r.playlist[0],function(t,n){for(var i in n)n.hasOwnProperty(i)&&l.append(e("<source />").attr({type:"video/"+i,src:n[i]}))}),d=new s(l)}var m=o.data("flowplayer");m&&m.unload(),o.data("fp-player_id",o.data("fp-player_id")||g++);try{f=window.localStorage||f}catch(h){}var y=this.currentStyle&&"rtl"===this.currentStyle.direction||window.getComputedStyle&&"rtl"===window.getComputedStyle(this,null).getPropertyValue("direction");y&&o.addClass("is-rtl");var b=m||{conf:r,currentSpeed:1,volumeLevel:"undefined"==typeof r.volume?1*f.volume:r.volume,video:{},disabled:!1,finished:!1,loading:!1,muted:"true"==f.muted||r.muted,paused:!1,playing:!1,ready:!1,splash:!1,rtl:y,load:function(t,n){if(!(b.error||b.loading||b.disabled)){if(t=d.resolve(t),e.extend(t,a.pick(t.sources)),t.src){var i=e.Event("load");o.trigger(i,[b,t,a]),i.isDefaultPrevented()?b.loading=!1:(a.load(t),e.isFunction(t)&&(n=t),n&&o.one("ready",n))}return b}},pause:function(e){return!b.ready||b.seeking||b.disabled||b.loading||(a.pause(),b.one("pause",e)),b},resume:function(){return b.ready&&b.paused&&!b.disabled&&(a.resume(),b.finished&&(b.trigger("resume",[b]),b.finished=!1)),b},toggle:function(){return b.ready?b.paused?b.resume():b.pause():b.load()},seek:function(t,n){if(b.ready){if("boolean"==typeof t){var r=.1*b.video.duration;t=b.video.time+(t?r:-r)}t=i=Math.min(Math.max(t,0),b.video.duration).toFixed(1);var s=e.Event("beforeseek");o.trigger(s,[b,t]),s.isDefaultPrevented()?(b.seeking=!1,o.toggleClass("is-seeking",b.seeking)):(a.seek(t),e.isFunction(n)&&o.one("seek",n))}return b},seekTo:function(e,t){var n=void 0===e?i:.1*b.video.duration*e;return b.seek(n,t)},mute:function(e){return void 0===e&&(e=!b.muted),f.muted=b.muted=e,f.volume=isNaN(f.volume)?r.volume:f.volume,b.volume(e?0:f.volume,!0),b.trigger("mute",e),b},volume:function(e,t){return b.ready&&(e=Math.min(Math.max(e,0),1),t||(f.volume=e),a.volume(e)),b},speed:function(t,n){return b.ready&&("boolean"==typeof t&&(t=r.speeds[e.inArray(b.currentSpeed,r.speeds)+(t?1:-1)]||b.currentSpeed),a.speed(t),n&&o.one("speed",n)),b},stop:function(){return b.ready&&(b.pause(),b.seek(0,function(){o.trigger("stop")})),b},unload:function(){return o.hasClass("is-embedding")||(r.splash?(b.trigger("unload"),a.unload()):b.stop()),b},disable:function(e){return void 0===e&&(e=!b.disabled),e!=b.disabled&&(b.disabled=e,b.trigger("disable",e)),b}};b.conf=e.extend(b.conf,r),e.each(["bind","one","unbind"],function(e,t){b[t]=function(e,n){return o[t](e,n),b}}),b.trigger=function(e,t){return o.trigger(e,[b,t]),b},o.data("flowplayer")||o.bind("boot",function(){return e.each(["autoplay","loop","preload","poster"],function(e,t){var n=l.attr(t);void 0!==n&&(r[t]=n?n:!0)}),(r.splash||o.hasClass("is-splash")||!flowplayer.support.firstframe)&&(b.forcedSplash=!r.splash&&!o.hasClass("is-splash"),b.splash=r.splash=r.autoplay=!0,o.addClass("is-splash"),flowplayer.support.video&&l.attr("preload","none")),(r.live||o.hasClass("is-live"))&&(b.live=r.live=!0,o.addClass("is-live")),e.each(c,function(){this(b,o)}),a=flowplayer.engine[r.engine],a&&(a=a(b,o)),a.pick(d.initialSources)?b.engine=r.engine:e.each(flowplayer.engine,function(e){return e!=r.engine?(a=this(b,o),a.pick(d.initialSources)&&(b.engine=e),!1):void 0}),u.push(b),b.engine?(r.splash?b.unload():b.load(),r.disabled&&b.disable(),a.volume(b.volumeLevel),o.one("ready",n),void 0):b.trigger("error",{code:flowplayer.support.flashVideo?5:10})}).bind("load",function(t,n){r.splash&&e(".flowplayer").filter(".is-ready, .is-loading").not(o).each(function(){var t=e(this).data("flowplayer");t.conf.splash&&t.unload()}),o.addClass("is-loading"),n.loading=!0}).bind("ready",function(e,t,n){function i(){o.removeClass("is-loading"),t.loading=!1}n.time=0,t.video=n,r.splash?o.one("progress",i):i(),t.muted?t.mute(!0):t.volume(t.volumeLevel)}).bind("unload",function(){r.splash&&l.remove(),o.removeClass("is-loading"),b.loading=!1}).bind("ready unload",function(e){var t="ready"==e.type;o.toggleClass("is-splash",!t).toggleClass("is-ready",t),b.ready=t,b.splash=!t}).bind("progress",function(e,t,n){t.video.time=n}).bind("speed",function(e,t,n){t.currentSpeed=n}).bind("volume",function(e,t,n){t.volumeLevel=Math.round(100*n)/100,t.muted?n&&t.mute(!1):f.volume=n}).bind("beforeseek seek",function(e){b.seeking="beforeseek"==e.type,o.toggleClass("is-seeking",b.seeking)}).bind("ready pause resume unload finish stop",function(e,t,n){b.paused=/pause|finish|unload|stop/.test(e.type),"ready"==e.type&&(b.paused="none"==r.preload,n&&(b.paused=!n.duration||!r.autoplay&&"none"!=r.preload)),b.playing=!b.paused,o.toggleClass("is-paused",b.paused).toggleClass("is-playing",b.playing),b.load.ed||b.pause()}).bind("finish",function(){b.finished=!0}).bind("error",function(){l.remove()}),o.trigger("boot",[b,o]).data("flowplayer",b)})},!function(){var t=function(e){var t=/Version\/(\d\.\d)/.exec(e);return t&&t.length>1?parseFloat(t[1],10):0},n=flowplayer.support,i=e.browser,a=e("<video loop autoplay preload/>")[0],o=i.msie,r=navigator.userAgent,s=/iPad|MeeGo/.test(r)&&!/CriOS/.test(r),l=/iPad/.test(r)&&/CriOS/.test(r),d=/iP(hone|od)/i.test(r)&&!/iPad/.test(r),u=/Android/.test(r)&&!/Firefox/.test(r),c=/Android/.test(r)&&/Firefox/.test(r),f=/Silk/.test(r),p=/IEMobile/.test(r),v=(s?t(r):0,u?parseFloat(/Android\ (\d\.\d)/.exec(r)[1],10):0);e.extend(n,{subtitles:!!a.addTextTrack,fullscreen:!u&&("function"==typeof document.webkitCancelFullScreen&&!/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(r)||document.mozFullScreenEnabled||"function"==typeof document.exitFullscreen),inlineBlock:!(o&&i.version<8),touch:"ontouchstart"in window,dataload:!s&&!d&&!p,zeropreload:!o&&!u,volume:!(s||u||d||f||l),cachedVideoTag:!(s||d||l||p),firstframe:!(d||s||u||f||l||p||c),inlineVideo:!d&&!p&&(!u||v>=3),hlsDuration:!i.safari||s||d||l,seekable:!s&&!l});try{var g=navigator.plugins["Shockwave Flash"],m=o?new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version"):g.description;o||g[0].enabledPlugin?(m=m.split(/\D+/),m.length&&!m[0]&&(m=m.slice(1)),n.flashVideo=m[0]>9||9==m[0]&&m[3]>=115):n.flashVideo=!1}catch(h){}try{n.video=!!a.canPlayType,n.video&&a.canPlayType("video/mp4")}catch(y){n.video=!1}n.animation=function(){for(var t=["","Webkit","Moz","O","ms","Khtml"],n=e("<p/>")[0],i=0;i<t.length;i++)if("undefined"!==n.style[t[i]+"AnimationName"])return!0}()}(),window.attachEvent&&window.attachEvent("onbeforeunload",function(){__flash_savedUnloadHandler=__flash_unloadHandler=function(){}}),flowplayer.engine.flash=function(n,i){var a,o,r,s=n.conf;n.video;var l={pick:function(t){if(flowplayer.support.flashVideo){var n=e.grep(t,function(e){return"flash"==e.type})[0];if(n)return n;for(var i,a=0;a<t.length;a++)if(i=t[a],/mp4|flv/.test(i.type))return i}},load:function(l){function d(e){return e.replace(/&amp;/g,"%26").replace(/&/g,"%26").replace(/=/g,"%3D")}var u=e("video",i),c=d(l.src);is_absolute=/^https?:/.test(c);try{u.length>0&&flowplayer.support.video&&u[0].pause()}catch(f){}var p=function(){u.remove()},v=function(t){return e.grep(t,function(e){return!!u[0].canPlayType("video/"+e.type)}).length>0};if(flowplayer.support.video&&u.prop("autoplay")&&v(l.sources)?u.one("timeupdate",p):p(),is_absolute||s.rtmp||(c=e("<img/>").attr("src",c)[0].src),r)r.__play(c);else{a="fp"+(""+Math.random()).slice(3,15);var g={hostname:s.embedded?s.hostname:location.hostname,url:c,callback:"jQuery."+a};i.data("origin")&&(g.origin=i.data("origin")),is_absolute&&delete s.rtmp,e.each(["key","autoplay","preload","rtmp","loop","debug","preload","splash","bufferTime"],function(e,t){s[t]&&(g[t]=s[t])}),g.rtmp&&(g.rtmp=d(g.rtmp)),o=t(s.swf,g),o.prependTo(i),r=o[0],setTimeout(function(){try{if(!r.PercentLoaded())return i.trigger("error",[n,{code:7,url:s.swf}])}catch(e){}},5e3),setTimeout(function(){"undefined"==typeof r.PercentLoaded&&i.trigger("flashdisabled",[n])},1e3),e[a]=function(t,i){s.debug&&"status"!=t&&console.log("--",t,i);var a=e.Event(t);switch(t){case"ready":i=e.extend(l,i);break;case"click":a.flash=!0;break;case"keydown":a.which=i;break;case"seek":l.time=i;break;case"status":n.trigger("progress",i.time),i.buffer<l.bytes&&!l.buffered?(l.buffer=i.buffer/l.bytes*l.duration,n.trigger("buffer",l.buffer)):l.buffered||(l.buffered=!0,n.trigger("buffered"))}"buffered"!=t&&setTimeout(function(){n.trigger(a,i)},1)}}},speed:e.noop,unload:function(){r&&r.__unload&&r.__unload(),delete e[a],e("object",i).remove(),r=0}};e.each("pause,resume,seek,volume".split(","),function(e,t){l[t]=function(e){try{n.ready&&("seek"==t&&n.video.time&&!n.paused&&n.trigger("beforeseek"),void 0===e?r["__"+t]():r["__"+t](e))}catch(a){if("undefined"==typeof r["__"+t])return i.trigger("flashdisabled",[n]);throw a}}});var d=e(window);return n.bind("ready fullscreen fullscreen-exit",function(t){var a=i.height(),o=i.width();if(n.conf.flashfit||/full/.test(t.type)){var r,s,l=n.isFullscreen,u=l&&E,c=!flowplayer.support.inlineBlock,f=l?u?screen.width:d.width():o,p=l?u?screen.height:d.height():a,v=0,g=0,m=c?o:"",h=c?a:"";(n.conf.flashfit||"fullscreen"===t.type)&&(r=n.video.width/n.video.height,s=n.video.height/n.video.width,h=Math.max(s*f),m=Math.max(r*p),h=h>p?m*s:h,h=Math.min(Math.round(h),p),m=m>f?h*r:m,m=Math.min(Math.round(m),f),g=Math.max(Math.round((p+g-h)/2),0),v=Math.max(Math.round((f+v-m)/2),0)),e("object",i).css({width:m,height:h,marginTop:g,marginLeft:v})}}),l};var m,h=e("<video/>")[0],y={ended:"finish",pause:"pause",play:"resume",progress:"buffer",timeupdate:"progress",volumechange:"volume",ratechange:"speed",seeked:"seek",loadeddata:"ready",error:"error",dataunavailable:"error"},b=function(t){return m?m.attr({type:i(t.type),src:t.src}):m=e("<video/>",{src:t.src,type:i(t.type),"class":"fp-engine",autoplay:"autoplay",preload:"none","x-webkit-airplay":"allow"})};flowplayer.engine.html5=function(t,i){function r(o,r,s){o.listeners&&o.listeners.hasOwnProperty(i.data("fp-player_id"))||((o.listeners||(o.listeners={}))[i.data("fp-player_id")]=!0,r.bind("error",function(n){try{if(n.originalEvent&&e(n.originalEvent.originalTarget).is("img"))return n.preventDefault();a(e(n.target).attr("type"))&&t.trigger("error",{code:4})}catch(i){}}),e.each(y,function(a,r){o.addEventListener(a,function(d){if("progress"==r&&d.srcElement&&0===d.srcElement.readyState&&setTimeout(function(){t.video.duration||(r="error",t.trigger(r,{code:4}))},1e4),p.debug&&!/progress/.test(r)&&console.log(a,"->",r,d),(t.ready||/ready|error/.test(r))&&r&&e("video",i).length){var u,f=e.Event(r);switch(r){case"ready":u=e.extend(s,{duration:o.duration,width:o.videoWidth,height:o.videoHeight,url:o.currentSrc,src:o.currentSrc});try{u.seekable=o.seekable&&o.seekable.end(null)}catch(v){}if(l=l||setInterval(function(){try{u.buffer=o.buffered.end(null)}catch(e){}u.buffer&&(n(u.buffer,1e3)<n(u.duration,1e3)&&!u.buffered?t.trigger("buffer",d):u.buffered||(u.buffered=!0,t.trigger("buffer",d).trigger("buffered",d),clearInterval(l),l=0))},250),!p.live&&!u.duration&&!c.hlsDuration&&"loadeddata"===a){var g=function(){u.duration=o.duration;try{u.seekable=o.seekable&&o.seekable.end(null)}catch(e){}t.trigger(f,u),o.removeEventListener("durationchange",g)};return o.addEventListener("durationchange",g),void 0}break;case"progress":case"seek":if(t.video.duration,o.currentTime>0){u=Math.max(o.currentTime,0);break}if("progress"==r)return;case"speed":u=n(o.playbackRate);break;case"volume":u=n(o.volume);break;case"error":try{u=(d.srcElement||d.originalTarget).error}catch(m){return}}t.trigger(f,u)}},!1)}))}var s,l,d,u=e("video",i),c=flowplayer.support,f=e("track",u),p=t.conf;return s={pick:function(e){if(c.video){if(p.videoTypePreference){var t=o(e,p.videoTypePreference);if(t)return t}for(var n=0;n<e.length;n++)if(a(e[n].type))return e[n]}},load:function(n){if(p.splash&&!d)u=b(n).prependTo(i),c.inlineVideo||u.css({position:"absolute",top:"-9999em"}),f.length&&u.append(f.attr("default","")),p.loop&&u.attr("loop","loop"),d=u[0];else{d=u[0];var a=u.find("source");!d.src&&a.length&&(d.src=n.src,a.remove()),t.video.src&&n.src!=t.video.src?(u.attr("autoplay","autoplay"),d.src=n.src):"none"!=p.preload&&c.dataload||(c.zeropreload?t.trigger("ready",n).trigger("pause").one("ready",function(){i.trigger("resume",[t])}):t.one("ready",function(){i.trigger("pause",[t])}))}r(d,e("source",u).add(u),n),"none"==p.preload&&c.zeropreload&&c.dataload||d.load(),p.splash&&d.load()},pause:function(){d.pause()},resume:function(){d.play()},speed:function(e){d.playbackRate=e},seek:function(e){try{var n=t.paused;d.currentTime=e,n&&d.pause()}catch(i){}},volume:function(e){d.volume=e},unload:function(){e("video.fp-engine",i).remove(),c.cachedVideoTag||(m=null),l=clearInterval(l),d=0}}};var w=/\.(\w{3,4})(\?.*)?$/i;e.throttle=function(e,t){var n;return function(){n||(e.apply(this,arguments),n=1,setTimeout(function(){n=0},t))}},e.fn.slider2=function(t){var n=/iPad/.test(navigator.userAgent)&&!/CriOS/.test(navigator.userAgent);return this.each(function(){var i,a,o,r,s,l,d,u,c=e(this),f=e(document),p=c.children(":last"),v=!1,g=function(){a=c.offset(),o=c.width(),r=c.height(),l=s?r:o,u=b(d)},m=function(e){i||e==w.value||d&&!(d>e)||(c.trigger("slide",[e]),w.value=e)},h=function(e){var n=e.pageX;!n&&e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches.length&&(n=e.originalEvent.touches[0].pageX);var i=s?e.pageY-a.top:n-a.left;i=Math.max(0,Math.min(u||l,i));var o=i/l;return s&&(o=1-o),t&&(o=1-o),y(o,0,!0)},y=function(e,t){void 0===t&&(t=0),e>1&&(e=1);var i=Math.round(1e3*e)/10+"%";return(!d||d>=e)&&(n||p.stop(),v?p.css("width",i):p.animate(s?{height:i}:{width:i},t,"linear")),e},b=function(e){return Math.max(0,Math.min(l,s?(1-e)*r:e*o))},w={max:function(e){d=e},disable:function(e){i=e},slide:function(e,t,n){g(),n&&m(e),y(e,t)},disableAnimation:function(e){v=e!==!1}};g(),c.data("api",w).bind("mousedown.sld touchstart",function(t){if(t.preventDefault(),!i){var n=e.throttle(m,100);g(),w.dragging=!0,c.addClass("is-dragging"),m(h(t)),f.bind("mousemove.sld touchmove",function(e){e.preventDefault(),n(h(e))}).one("mouseup touchend",function(){w.dragging=!1,c.removeClass("is-dragging"),f.unbind("mousemove.sld touchmove")})}})})},flowplayer(function(t,n){function i(t){return e(".fp-"+t,n)}function a(t){("0px"===n.css("width")||"0px"===n.css("height")||t!==flowplayer.defaults.ratio)&&(parseInt(y,10)||g.css("paddingTop",100*t+"%")),l.inlineBlock||e("object",n).height(n.height())}function o(e){n.toggleClass("is-mouseover",e).toggleClass("is-mouseout",!e)}var r,s=t.conf,l=flowplayer.support;n.find(".fp-ratio,.fp-ui").remove(),n.addClass("flowplayer").append('      <div class="ratio"/>      <div class="ui">         <div class="waiting"><em/><em/><em/></div>         <a class="fullscreen"/>         <a class="unload"/>         <p class="speed"/>         <div class="controls">            <a class="play"></a>            <div class="timeline">               <div class="buffer"/>               <div class="progress"/>            </div>            <div class="volume">               <a class="mute"></a>               <div class="volumeslider">                  <div class="volumelevel"/>               </div>            </div>         </div>         <div class="time">            <em class="elapsed">00:00</em>            <em class="remaining"/>            <em class="duration">00:00</em>         </div>         <div class="message"><h2/><p/></div>      </div>'.replace(/class="/g,'class="fp-'));var u=i("progress"),c=i("buffer"),f=i("elapsed"),p=i("remaining"),v=i("waiting"),g=i("ratio"),m=i("speed"),h=i("duration"),y=g.css("paddingTop"),b=i("timeline").slider2(t.rtl),w=b.data("api"),k=(i("volume"),i("fullscreen")),x=i("volumeslider").slider2(t.rtl),C=x.data("api"),T=n.is(".fixed-controls, .no-toggle");w.disableAnimation(n.hasClass("is-touch")),l.animation||v.html("<p>loading &hellip;</p>"),a(s.ratio);try{s.fullscreen||k.remove()}catch(S){k.remove()}t.bind("ready",function(){var e=t.video.duration;w.disable(t.disabled||!e),s.adaptiveRatio&&a(t.video.height/t.video.width),h.add(p).html(d(e)),e>=3600&&n.addClass("is-long")||n.removeClass("is-long"),C.slide(t.volumeLevel)}).bind("unload",function(){y||g.css("paddingTop","")}).bind("buffer",function(){var e=t.video,n=e.buffer/e.duration;!e.seekable&&l.seekable&&w.max(n),1>n?c.css("width",100*n+"%"):c.css({width:"100%"})}).bind("speed",function(e,t,n){m.text(n+"x").addClass("fp-hilite"),setTimeout(function(){m.removeClass("fp-hilite")},1e3)}).bind("buffered",function(){c.css({width:"100%"}),w.max(1)}).bind("progress",function(){var e=t.video.time,n=t.video.duration;w.dragging||w.slide(e/n,t.seeking?0:250),f.html(d(e)),p.html("-"+d(n-e))}).bind("finish resume seek",function(e){n.toggleClass("is-finished","finish"==e.type)}).bind("stop",function(){f.html(d(0)),w.slide(0,100)}).bind("finish",function(){f.html(d(t.video.duration)),w.slide(1,100),n.removeClass("is-seeking")}).bind("beforeseek",function(){u.stop()}).bind("volume",function(){C.slide(t.volumeLevel)}).bind("disable",function(){var e=t.disabled;w.disable(e),C.disable(e),n.toggleClass("is-disabled",t.disabled)}).bind("mute",function(e,t,i){n.toggleClass("is-muted",i)}).bind("error",function(t,i,a){if(n.removeClass("is-loading").addClass("is-error"),a){a.message=s.errors[a.code],i.error=!0;var o=e(".fp-message",n);e("h2",o).text((i.engine||"html5")+": "+a.message),e("p",o).text(a.url||i.video.url||i.video.src||s.errorUrls[a.code]),n.unbind("mouseenter click").removeClass("is-mouseover")}}).bind("mouseenter mouseleave",function(e){if(!T){var t,i="mouseenter"==e.type;o(i),i?(n.bind("pause.x mousemove.x volume.x",function(){o(!0),t=new Date}),r=setInterval(function(){new Date-t>5e3&&(o(!1),t=new Date)},100)):(n.unbind(".x"),clearInterval(r))}}).bind("mouseleave",function(){(w.dragging||C.dragging)&&n.addClass("is-mouseover").removeClass("is-mouseout")}).bind("click.player",function(n){return e(n.target).is(".fp-ui, .fp-engine")||n.flash?(n.preventDefault(),t.toggle()):void 0}).bind("contextmenu",function(t){t.preventDefault();var i=n.offset(),a=e(window),o=t.clientX-i.left,r=t.clientY-i.top+a.scrollTop(),s=n.find(".fp-context-menu").css({left:o+"px",top:r+"px",display:"block"}).on("click",function(e){e.stopPropagation()});e("html").on("click.outsidemenu",function(){s.hide(),e("html").off("click.outsidemenu")})}).bind("flashdisabled",function(){n.addClass("is-flash-disabled").one("ready",function(){n.removeClass("is-flash-disabled").find(".fp-flash-disabled").remove()}).append('<div class="fp-flash-disabled">Adobe Flash is disabled for this page, click player area to enable.</div>')}),s.poster&&n.css("backgroundImage","url("+s.poster+")");var F=n.css("backgroundColor"),_="none"!=n.css("backgroundImage")||F&&"rgba(0, 0, 0, 0)"!=F&&"transparent"!=F;!_||s.splash||s.autoplay||t.bind("ready stop",function(){n.addClass("is-poster").one("progress",function(){n.removeClass("is-poster")})}),!_&&t.forcedSplash&&n.css("backgroundColor","#555"),e(".fp-toggle, .fp-play",n).click(t.toggle),e.each(["mute","fullscreen","unload"],function(e,n){i(n).click(function(){t[n]()})}),b.bind("slide",function(e,n){t.seeking=!0,t.seek(n*t.video.duration)}),x.bind("slide",function(e,n){t.volume(n)}),i("time").click(function(){e(this).toggleClass("is-inverted")}),o(T)});var k,x,C="is-help";e(document).bind("keydown.fp",function(t){var n=k,i=t.ctrlKey||t.metaKey||t.altKey,a=t.which,o=n&&n.conf;if(n&&o.keyboard&&!n.disabled){if(-1!=e.inArray(a,[63,187,191]))return x.toggleClass(C),!1;if(27==a&&x.hasClass(C))return x.toggleClass(C),!1;if(!i&&n.ready){if(t.preventDefault(),t.shiftKey)return 39==a?n.speed(!0):37==a&&n.speed(!1),void 0;if(58>a&&a>47)return n.seekTo(a-48);switch(a){case 38:case 75:n.volume(n.volumeLevel+.15);break;case 40:case 74:n.volume(n.volumeLevel-.15);break;case 39:case 76:n.seeking=!0,n.seek(!0);break;case 37:case 72:n.seeking=!0,n.seek(!1);break;case 190:n.seekTo();break;case 32:n.toggle();break;case 70:o.fullscreen&&n.fullscreen();break;case 77:n.mute();break;case 81:n.unload()}}}}),flowplayer(function(t,n){t.conf.keyboard&&(n.bind("mouseenter mouseleave",function(e){k=t.disabled||"mouseenter"!=e.type?0:t,k&&(x=n)}),n.append('      <div class="fp-help">         <a class="fp-close"></a>         <div class="fp-help-section fp-help-basics">            <p><em>space</em>play / pause</p>            <p><em>q</em>unload | stop</p>            <p><em>f</em>fullscreen</p>            <p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster <small>(latest Chrome and Safari)</small></p>         </div>         <div class="fp-help-section">            <p><em>&#8593;</em><em>&#8595;</em>volume</p>            <p><em>m</em>mute</p>         </div>         <div class="fp-help-section">            <p><em>&#8592;</em><em>&#8594;</em>seek</p>            <p><em>&nbsp;. </em>seek to previous            </p><p><em>1</em><em>2</em>&hellip;<em>6</em> seek to 10%, 20%, &hellip;60% </p>         </div>      </div>   '),t.conf.tooltip&&e(".fp-ui",n).attr("title","Hit ? for help").on("mouseout.tip",function(){e(this).removeAttr("title").off("mouseout.tip")}),e(".fp-close",n).click(function(){n.toggleClass(C)}))});var T,S=e.browser.mozilla?"moz":"webkit",F="fullscreen",_="fullscreen-exit",E=flowplayer.support.fullscreen,M="function"==typeof document.exitFullscreen,A=navigator.userAgent.toLowerCase(),D=/(safari)[ \/]([\w.]+)/.exec(A)&&!/(chrome)[ \/]([\w.]+)/.exec(A);e(document).bind(M?"fullscreenchange":S+"fullscreenchange",function(t){var n=e(document.webkitCurrentFullScreenElement||document.mozFullScreenElement||document.fullscreenElement||t.target);n.length&&!T?T=n.trigger(F,[n]):(T.trigger(_,[T]),T=null)}),flowplayer(function(t,n){if(t.conf.fullscreen){var i,a=e(window),o={index:0,pos:0,play:!1};t.isFullscreen=!1,t.fullscreen=function(r){return t.disabled?void 0:(void 0===r&&(r=!t.isFullscreen),r&&(i=a.scrollTop()),"webkit"!=S&&!D||"flash"!=t.engine||(o.index=t.video.index,t.conf.rtmp&&e.extend(o,{pos:t.video.time,play:t.playing})),E?r?M?n[0].requestFullscreen():(n[0][S+"RequestFullScreen"](Element.ALLOW_KEYBOARD_INPUT),!D||document.webkitCurrentFullScreenElement||document.mozFullScreenElement||n[0][S+"RequestFullScreen"]()):M?document.exitFullscreen():document[S+"CancelFullScreen"]():t.trigger(r?F:_,[t]),t)};var r;n.bind("mousedown.fs",function(){+new Date-r<150&&t.ready&&t.fullscreen(),r=+new Date}),t.bind(F,function(){n.addClass("is-fullscreen"),t.isFullscreen=!0}).bind(_,function(){var e;E||"html5"!==t.engine||(e=n.css("opacity")||"",n.css("opacity",0)),n.removeClass("is-fullscreen"),E||"html5"!==t.engine||setTimeout(function(){n.css("opacity",e)}),t.isFullscreen=!1,a.scrollTop(i)}).bind("ready",function(){if(o.index>0)t.play(o.index),o.index=0;else if(o.pos&&!isNaN(o.pos)){var n=function(){o.play||t.pause(),e.extend(o,{pos:0,play:!1})};t.conf.live?(t.resume(),n()):t.resume().seek(o.pos,n)}})}}),flowplayer(function(t,n){function i(){return e(o.query,n)}function a(){return e(o.query+"."+r,n)}var o=e.extend({active:"is-active",advance:!0,query:".fp-playlist a"},t.conf),r=o.active;t.play=function(n){return void 0===n?t.resume():"number"!=typeof n||t.conf.playlist[n]?("number"!=typeof n&&t.load.apply(null,arguments),t.unbind("resume.fromfirst"),t.video.index=n,t.load("string"==typeof t.conf.playlist[n]?t.conf.playlist[n].toString():e.map(t.conf.playlist[n],function(t){return e.extend({},t)})),t):t},t.next=function(e){e&&e.preventDefault();var n=t.video.index;return-1!=n&&(n=n===t.conf.playlist.length-1?0:n+1,t.play(n)),t},t.prev=function(e){e&&e.preventDefault();var n=t.video.index;return-1!=n&&(n=0===n?t.conf.playlist.length-1:n-1,t.play(n)),t},e(".fp-next",n).click(t.next),e(".fp-prev",n).click(t.prev),o.advance&&n.unbind("finish.pl").bind("finish.pl",function(e,t){var i=t.video.index+1;i<t.conf.playlist.length||o.loop?(i=i===t.conf.playlist.length?0:i,n.removeClass("is-finished"),setTimeout(function(){t.play(i)})):(n.addClass("is-playing"),t.conf.playlist.length>1&&t.one("resume.fromfirst",function(){return t.play(0),!1}))});var s=!1;if(t.conf.playlist.length){s=!0;var l=n.find(".fp-playlist");if(!l.length){l=e('<div class="fp-playlist"></div>');var d=e(".fp-next,.fp-prev",n);d.length?d.eq(0).before(l):e("video",n).after(l)}l.empty(),e.each(t.conf.playlist,function(t,n){var i;if("string"==typeof n)i=n;else for(var a in n[0])if(n[0].hasOwnProperty(a)){i=n[0][a];break}l.append(e("<a />").attr({href:i,"data-index":t}))})}if(i().length){s||(t.conf.playlist=[],i().each(function(){var n=e(this).attr("href");e(this).attr("data-index",t.conf.playlist.length),t.conf.playlist.push(n)})),n.on("click",o.query,function(n){n.preventDefault();var i=e(n.target).closest(o.query),a=Number(i.attr("data-index"));-1!=a&&t.play(a)});var u=i().filter("[data-cuepoints]").length;t.bind("load",function(i,o,s){var l=a().removeClass(r),d=l.attr("data-index"),c=s.index=t.video.index||0,f=e('a[data-index="'+c+'"]',n).addClass(r),p=c==t.conf.playlist.length-1;n.removeClass("video"+d).addClass("video"+c).toggleClass("last-video",p),s.index=o.video.index=c,s.is_last=o.video.is_last=p,u&&(t.cuepoints=f.data("cuepoints"))}).bind("unload.pl",function(){a().toggleClass(r)})}t.conf.playlist.length&&(t.conf.loop=!1)});var P=/ ?cue\d+ ?/;flowplayer(function(t,n){function i(e){n[0].className=n[0].className.replace(P," "),e>=0&&n.addClass("cue"+e)}var a=0;t.cuepoints=t.conf.cuepoints||[],t.bind("progress",function(e,o,r){if(a&&.015>r-a)return a=r;a=r;for(var s,l=t.cuepoints||[],d=0;d<l.length;d++)s=l[d],isNaN(s)||(s={time:s}),s.time<0&&(s.time=t.video.duration+s.time),s.index=d,Math.abs(s.time-r)<.125*t.currentSpeed&&(i(d),n.trigger("cuepoint",[t,s]))}).bind("unload seek",i),t.conf.generate_cuepoints&&t.bind("load",function(){e(".fp-cuepoint",n).remove()}).bind("ready",function(){var i=t.cuepoints||[],a=t.video.duration,o=e(".fp-timeline",n).css("overflow","visible");e.each(i,function(n,i){var r=i.time||i;0>r&&(r=a+i);var s=e("<a/>").addClass("fp-cuepoint fp-cuepoint"+n).css("left",100*(r/a)+"%");s.appendTo(o).mousedown(function(){return t.seek(r),!1})})})}),flowplayer(function(t,n){function i(e){var t=e.split(":");return 2==t.length&&t.unshift(0),60*60*t[0]+60*t[1]+parseFloat(t[2].replace(",","."))}var a=e("track",n),o=t.conf;if(!flowplayer.support.subtitles||(t.subtitles=a.length&&a[0].track,!o.nativesubtitles||"html5"!=o.engine)){a.remove();var r=/^(([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3}) --\> (([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3})(.*)/;t.subtitles=[];var s=a.attr("src");if(s){setTimeout(function(){e.get(s,function(n){for(var a,o,s,l,d=0,u=n.split("\n"),c=u.length,f={};c>d;d++)if(o=r.exec(u[d])){for(a=u[d-1],s="<p>"+u[++d]+"</p><br/>";e.trim(u[++d])&&d<u.length;)s+="<p>"+u[d]+"</p><br/>";f={title:a,startTime:i(o[1]),endTime:i(o[2]||o[3]),text:s},l={time:f.startTime,subtitle:f},t.subtitles.push(f),t.cuepoints.push(l),t.cuepoints.push({time:f.endTime,subtitleEnd:a}),0===f.startTime&&t.trigger("cuepoint",l)}}).fail(function(){return t.trigger("error",{code:8,url:s}),!1})});var l,d=e("<div class='fp-subtitle'/>").appendTo(n);t.bind("cuepoint",function(e,t,n){n.subtitle?(l=n.index,d.html(n.subtitle.text).addClass("fp-active")):n.subtitleEnd&&(d.removeClass("fp-active"),l=n.index)}).bind("seek",function(n,i,a){l&&t.cuepoints[l]&&t.cuepoints[l].time>a&&(d.removeClass("fp-active"),l=null),e.each(t.cuepoints||[],function(e,n){var i=n.subtitle;i&&l!=n.index?a>=n.time&&(!i.endTime||a<=i.endTime)&&t.trigger("cuepoint",n):n.subtitleEnd&&a>=n.time&&n.index==l+1&&t.trigger("cuepoint",n)})})}}}),flowplayer(function(t,n){function i(){if(o&&"undefined"!=typeof _gat){var e=_gat._getTracker(a),i=t.video;e._setAllowLinker(!0),e._trackEvent("Video / Seconds played",t.engine+"/"+i.type,n.attr("title")||i.src.split("/").slice(-1)[0].replace(w,""),Math.round(o/1e3)),o=0}}var a=t.conf.analytics,o=0,r=0;a&&("undefined"==typeof _gat&&e.getScript("//google-analytics.com/ga.js"),t.bind("load unload",i).bind("progress",function(){t.seeking||(o+=r?+new Date-r:0,r=+new Date)}).bind("pause",function(){r=0}),e(window).unload(i))});var L=/IEMobile/.test(f);(flowplayer.support.touch||L)&&flowplayer(function(t,n){var i=/Android/.test(f)&&!/Firefox/.test(f)&&!/Opera/.test(f),a=/Silk/.test(f),o=i?parseFloat(/Android\ (\d\.\d)/.exec(f)[1],10):0;
if(i&&(t.conf.videoTypePreference="mp4",!/Chrome/.test(f)&&4>o)){var r=t.load;t.load=function(){var e=r.apply(t,arguments);return t.trigger("ready",[t,t.video]),e}}flowplayer.support.volume||n.addClass("no-volume no-mute"),n.addClass("is-touch"),n.find(".fp-timeline").data("api").disableAnimation();var s=!1;n.bind("touchmove",function(){s=!0}).bind("touchend click",function(){return s?(s=!1,void 0):t.playing&&!n.hasClass("is-mouseover")?(n.addClass("is-mouseover").removeClass("is-mouseout"),!1):(t.paused&&n.hasClass("is-mouseout")&&!t.splash&&t.toggle(),t.paused&&L&&e("video.fp-engine",n)[0].play(),void 0)}),t.conf.native_fullscreen&&"function"==typeof e("<video />")[0].webkitEnterFullScreen&&(t.fullscreen=function(){var t=e("video.fp-engine",n);t[0].webkitEnterFullScreen(),t.one("webkitendfullscreen",function(){t.prop("controls",!0).prop("controls",!1)})}),(i||a)&&t.bind("ready",function(){var i=e("video.fp-engine",n);i.one("canplay",function(){i[0].play()}),i[0].play(),t.bind("progress.dur",function(){var a=i[0].duration;1!==a&&(t.video.duration=a,e(".fp-duration",n).html(d(a)),t.unbind("progress.dur"))})})}),flowplayer(function(t,n){if(t.conf.embed!==!1){var i=t.conf,a=e(".fp-ui",n),o=e("<a/>",{"class":"fp-embed",title:"Copy to your site"}).appendTo(a),r=e("<div/>",{"class":"fp-embed-code"}).append("<label>Paste this HTML code on your site to embed.</label><textarea/>").appendTo(a),s=e("textarea",r);t.embedCode=function(){var a=t.video,o=a.width||n.width(),r=a.height||n.height(),s=e("<div/>",{"class":"flowplayer",css:{width:o,height:r}}),l=e("<video/>").appendTo(s);e.each(["origin","analytics","key","rtmp"],function(e,t){i[t]&&s.attr("data-"+t,i[t])}),i.logo&&s.attr("data-logo",e("<img />").attr("src",i.logo)[0].src),e.each(a.sources,function(t,n){var a=n.src;(!/^https?:/.test(n.src)&&"flash"!==n.type||!i.rtmp)&&(a=e("<img/>").attr("src",n.src)[0].src),l.append(e("<source/>",{type:"video/"+n.type,src:a}))});var d={src:"//embed.flowplayer.org/5.4.6/embed.min.js"};e.isPlainObject(i.embed)&&(d["data-swf"]=i.embed.swf,d["data-library"]=i.embed.library,d.src=i.embed.script||d.src,i.embed.skin&&(d["data-skin"]=i.embed.skin));var u=e("<foo/>",d).append(s);return e("<p/>").append(u).html().replace(/<(\/?)foo/g,"<$1script")},n.fptip(".fp-embed","is-embedding"),s.click(function(){this.select()}),o.click(function(){s.text(t.embedCode()),s[0].focus(),s[0].select()})}}),e.fn.fptip=function(t,n){return this.each(function(){function i(){a.removeClass(n),e(document).unbind(".st")}var a=e(this);e(t||"a",this).click(function(t){t.preventDefault(),a.toggleClass(n),a.hasClass(n)&&e(document).bind("keydown.st",function(e){27==e.which&&i()}).bind("click.st",function(t){e(t.target).parents("."+n).length||i()})})})}}(jQuery);flowplayer(function(e,o){function l(e){var o=a("<a/>")[0];return o.href=e,o.hostname}var a=jQuery,r=e.conf,i=r.swf.indexOf("flowplayer.org")&&r.e&&o.data("origin"),n=i?l(i):location.hostname,t=r.key;if("file:"==location.protocol&&(n="localhost"),e.load.ed=1,r.hostname=n,r.origin=i||location.href,i&&o.addClass("is-embedded"),"string"==typeof t&&(t=t.split(/,\s*/)),t&&"function"==typeof key_check&&key_check(t,n))r.logo&&o.append(a("<a>",{"class":"fp-logo",href:i}).append(a("<img/>",{src:r.logo})));else{var s=a("<a/>").attr("href","http://flowplayer.org").appendTo(o);a(".fp-controls",o);var p=a('<div class="fp-context-menu"><ul><li class="copyright">&copy; 2013</li><li><a href="http://flowplayer.org">About Flowplayer</a></li><li><a href="http://flowplayer.org/license">GPL based license</a></li></ul></div>').appendTo(o);e.bind("pause resume finish unload",function(e,l){var r=-1;l.video.src&&a.each([["org","flowplayer","drive"],["org","flowplayer","my"]],function(e,o){return r=l.video.src.indexOf("://"+o.reverse().join(".")),-1===r}),/pause|resume/.test(e.type)&&"flash"!=l.engine&&4!=r&&5!=r?(s.show().css({position:"absolute",left:16,bottom:36,zIndex:99999,width:100,height:20,backgroundImage:"url("+[".png","logo","/",".net",".cloudfront","d32wqyuo10o653","//"].reverse().join("")+")"}),l.load.ed=s.is(":visible")&&a.contains(o[0],p[0]),l.load.ed||l.pause()):s.hide()})}});
/*
 * jQuery Address Plugin v1.6
 * http://www.asual.com/jquery/address/
 *
 * Copyright (c) 2009-2010 Rostislav Hristov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 */
(function(e){e.address=function(){var t=function(t){var n=e.extend(e.Event(t),function(){var t={},n=e.address.parameterNames();for(var r=0,i=n.length;r<i;r++){t[n[r]]=e.address.parameter(n[r])}return{value:e.address.value(),path:e.address.path(),pathNames:e.address.pathNames(),parameterNames:n,parameters:t,queryString:e.address.queryString()}}.call(e.address));e(e.address).trigger(n);return n},n=function(e){return Array.prototype.slice.call(e)},r=function(t,n,r){e().bind.apply(e(e.address),Array.prototype.slice.call(arguments));return e.address},i=function(t,n){e().unbind.apply(e(e.address),Array.prototype.slice.call(arguments));return e.address},s=function(){return R.pushState&&P.state!==x},o=function(){return("/"+U.pathname.replace(new RegExp(P.state),"")+U.search+(u()?"#"+u():"")).replace(X,"/")},u=function(){var e=U.href.indexOf("#");return e!=-1?U.href.substr(e+1):""},a=function(){return s()?o():u()},f=function(){try{return top.document!==x&&top.document.title!==x&&top.jQuery!==x&&top.jQuery.address!==x&&top.jQuery.address.frames()!==false?top:window}catch(e){return window}},l=function(){return"javascript"},c=function(e){e=e.toString();return(P.strict&&e.substr(0,1)!="/"?"/":"")+e},h=function(e,t){return parseInt(e.css(t),10)},p=function(){if(!et){var e=a(),t=decodeURI(st)!=decodeURI(e);if(t){if(F&&B<7){U.reload()}else{if(F&&!J&&P.history){W(m,50)}st=e;d(D)}}}},d=function(e){W(v,10);return t(A).isDefaultPrevented()||t(e?O:M).isDefaultPrevented()},v=function(){if(P.tracker!=="null"&&P.tracker!==T){var t=e.isFunction(P.tracker)?P.tracker:I[P.tracker],n=(U.pathname+U.search+(e.address&&!s()?e.address.value():"")).replace(/\/\//,"/").replace(/^\/$/,"");if(e.isFunction(t)){t(n)}else if(e.isFunction(I.urchinTracker)){I.urchinTracker(n)}else if(I.pageTracker!==x&&e.isFunction(I.pageTracker._trackPageview)){I.pageTracker._trackPageview(n)}else if(I._gaq!==x&&e.isFunction(I._gaq.push)){I._gaq.push(["_trackPageview",decodeURI(n)])}}},m=function(){var e=l()+":"+D+";document.open();document.writeln('<html><head><title>"+q.title.replace(/\'/g,"\\'")+"</title><script>var "+N+' = "'+encodeURIComponent(a()).replace(/\'/g,"\\'")+(q.domain!=U.hostname?'";document.domain="'+q.domain:"")+'";</'+"script></head></html>');document.close();";if(B<7){K.src=e}else{K.contentWindow.location.replace(e)}},g=function(){if(G&&Y!=-1){var e,t,n=G.substr(Y+1).split("&");for(e=0;e<n.length;e++){t=n[e].split("=");if(/^(autoUpdate|history|strict|wrap)$/.test(t[0])){P[t[0]]=isNaN(t[1])?/^(true|yes)$/i.test(t[1]):parseInt(t[1],10)!==0}if(/^(state|tracker)$/.test(t[0])){P[t[0]]=t[1]}}G=T}st=a()},y=function(){if(!tt){tt=_;g();e('a[rel*="address:"]').address();if(P.wrap){var n=e("body"),r=e("body > *").wrapAll('<div style="padding:'+(h(n,"marginTop")+h(n,"paddingTop"))+"px "+(h(n,"marginRight")+h(n,"paddingRight"))+"px "+(h(n,"marginBottom")+h(n,"paddingBottom"))+"px "+(h(n,"marginLeft")+h(n,"paddingLeft"))+'px;" />').parent().wrap('<div id="'+N+'" style="height:100%;overflow:auto;position:relative;'+(j&&!window.statusbar.visible?"resize:both;":"")+'" />');e("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"});if(j){e('<style type="text/css" />').appendTo("head").text("#"+N+"::-webkit-resizer { background-color: #fff; }")}}if(F&&!J){var i=q.getElementsByTagName("frameset")[0];K=q.createElement((i?"":"i")+"frame");K.src=l()+":"+D;if(i){i.insertAdjacentElement("beforeEnd",K);i[i.cols?"cols":"rows"]+=",0";K.noResize=_;K.frameBorder=K.frameSpacing=0}else{K.style.display="none";K.style.width=K.style.height=0;K.tabIndex=-1;q.body.insertAdjacentElement("afterBegin",K)}W(function(){e(K).bind("load",function(){var e=K.contentWindow;st=e[N]!==x?e[N]:"";if(st!=a()){d(D);U.hash=st}});if(K.contentWindow[N]===x){m()}},50)}W(function(){t("init");d(D)},1);if(!s()){if(F&&B>7||!F&&J){if(I.addEventListener){I.addEventListener(k,p,D)}else if(I.attachEvent){I.attachEvent("on"+k,p)}}else{z(p,50)}}if("state"in window.history){e(window).trigger("popstate")}}},b=function(){if(decodeURI(st)!=decodeURI(a())){st=a();d(D)}},w=function(){if(I.removeEventListener){I.removeEventListener(k,p,D)}else if(I.detachEvent){I.detachEvent("on"+k,p)}},E=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},S=function(){var e={},t=E(navigator.userAgent);if(t.browser){e[t.browser]=true;e.version=t.version}if(e.chrome){e.webkit=true}else if(e.webkit){e.safari=true}return e},x,T=null,N="jQueryAddress",C="string",k="hashchange",L="init",A="change",O="internalChange",M="externalChange",_=true,D=false,P={autoUpdate:_,history:_,strict:_,frames:_,wrap:D},H=S(),B=parseFloat(H.version),j=H.webkit||H.safari,F=!e.support.opacity,I=f(),q=I.document,R=I.history,U=I.location,z=setInterval,W=setTimeout,X=/\/{2,9}/g,V=navigator.userAgent,J="on"+k in I,K,Q,G=e("script:last").attr("src"),Y=G?G.indexOf("?"):-1,Z=q.title,et=D,tt=D,nt=_,rt=D,it={},st=a();if(F){B=parseFloat(V.substr(V.indexOf("MSIE")+4));if(q.documentMode&&q.documentMode!=B){B=q.documentMode!=8?7:8}var ot=q.onpropertychange;q.onpropertychange=function(){if(ot){ot.call(q)}if(q.title!=Z&&q.title.indexOf("#"+a())!=-1){q.title=Z}}}if(R.navigationMode){R.navigationMode="compatible"}if(document.readyState=="complete"){var ut=setInterval(function(){if(e.address){y();clearInterval(ut)}},50)}else{g();e(y)}e(window).bind("popstate",b).bind("unload",w);return{bind:function(e,t,i){return r.apply(this,n(arguments))},unbind:function(e,t){return i.apply(this,n(arguments))},init:function(e,t){return r.apply(this,[L].concat(n(arguments)))},change:function(e,t){return r.apply(this,[A].concat(n(arguments)))},internalChange:function(e,t){return r.apply(this,[O].concat(n(arguments)))},externalChange:function(e,t){return r.apply(this,[M].concat(n(arguments)))},baseURL:function(){var e=U.href;if(e.indexOf("#")!=-1){e=e.substr(0,e.indexOf("#"))}if(/\/$/.test(e)){e=e.substr(0,e.length-1)}return e},autoUpdate:function(e){if(e!==x){P.autoUpdate=e;return this}return P.autoUpdate},history:function(e){if(e!==x){P.history=e;return this}return P.history},state:function(e){if(e!==x){P.state=e;var t=o();if(P.state!==x){if(R.pushState){if(t.substr(0,3)=="/#/"){U.replace(P.state.replace(/^\/$/,"")+t.substr(2))}}else if(t!="/"&&t.replace(/^\/#/,"")!=u()){W(function(){U.replace(P.state.replace(/^\/$/,"")+"/#"+t)},1)}}return this}return P.state},frames:function(e){if(e!==x){P.frames=e;I=f();return this}return P.frames},strict:function(e){if(e!==x){P.strict=e;return this}return P.strict},tracker:function(e){if(e!==x){P.tracker=e;return this}return P.tracker},wrap:function(e){if(e!==x){P.wrap=e;return this}return P.wrap},update:function(){rt=_;this.value(st);rt=D;return this},title:function(e){if(e!==x){W(function(){Z=q.title=e;if(nt&&K&&K.contentWindow&&K.contentWindow.document){K.contentWindow.document.title=e;nt=D}},50);return this}return q.title},value:function(e){if(e!==x){e=c(e);if(e=="/"){e=""}if(st==e&&!rt){return}st=e;if(P.autoUpdate||rt){if(d(_)){return this}if(s()){R[P.history?"pushState":"replaceState"]({},"",P.state.replace(/\/$/,"")+(st===""?"/":st))}else{et=_;if(j){if(P.history){U.hash="#"+st}else{U.replace("#"+st)}}else if(st!=a()){if(P.history){U.hash="#"+st}else{U.replace("#"+st)}}if(F&&!J&&P.history){W(m,50)}if(j){W(function(){et=D},1)}else{et=D}}}return this}return c(st)},path:function(e){if(e!==x){var t=this.queryString(),n=this.hash();this.value(e+(t?"?"+t:"")+(n?"#"+n:""));return this}return c(st).split("#")[0].split("?")[0]},pathNames:function(){var e=this.path(),t=e.replace(X,"/").split("/");if(e.substr(0,1)=="/"||e.length===0){t.splice(0,1)}if(e.substr(e.length-1,1)=="/"){t.splice(t.length-1,1)}return t},queryString:function(e){if(e!==x){var t=this.hash();this.value(this.path()+(e?"?"+e:"")+(t?"#"+t:""));return this}var n=st.split("?");return n.slice(1,n.length).join("?").split("#")[0]},parameter:function(t,n,r){var i,s;if(n!==x){var o=this.parameterNames();s=[];n=n===x||n===T?"":n.toString();for(i=0;i<o.length;i++){var u=o[i],a=this.parameter(u);if(typeof a==C){a=[a]}if(u==t){a=n===T||n===""?[]:r?a.concat([n]):[n]}for(var f=0;f<a.length;f++){s.push(u+"="+a[f])}}if(e.inArray(t,o)==-1&&n!==T&&n!==""){s.push(t+"="+n)}this.queryString(s.join("&"));return this}n=this.queryString();if(n){var l=[];s=n.split("&");for(i=0;i<s.length;i++){var c=s[i].split("=");if(c[0]==t){l.push(c.slice(1).join("="))}}if(l.length!==0){return l.length!=1?l:l[0]}}},parameterNames:function(){var t=this.queryString(),n=[];if(t&&t.indexOf("=")!=-1){var r=t.split("&");for(var i=0;i<r.length;i++){var s=r[i].split("=")[0];if(e.inArray(s,n)==-1){n.push(s)}}}return n},hash:function(e){if(e!==x){this.value(st.split("#")[0]+(e?"#"+e:""));return this}var t=st.split("#");return t.slice(1,t.length).join("#")}}}();e.fn.address=function(t){e(this).each(function(n){if(!e(this).data("address")){e(this).on("click",function(n){if(n.shiftKey||n.ctrlKey||n.metaKey||n.which==2){return true}var r=n.currentTarget;if(e(r).is("a")){n.preventDefault();var i=t?t.call(r):/address:/.test(e(r).attr("rel"))?e(r).attr("rel").split("address:")[1].split(" ")[0]:e.address.state()!==undefined&&!/^\/?$/.test(e.address.state())?e(r).attr("href").replace(new RegExp("^(.*"+e.address.state()+"|\\.)"),""):e(r).attr("href").replace(/^(#\!?|\.)/,"");e.address.value(i)}}).on("submit",function(n){var r=n.currentTarget;if(e(r).is("form")){n.preventDefault();var i=e(r).attr("action"),s=t?t.call(r):(i.indexOf("?")!=-1?i.replace(/&$/,""):i+"?")+e(r).serialize();e.address.value(s)}}).data("address",true)}});return this}})(jQuery)
/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
/*
 To use call .wfHideParagraphs() on the element you wish like so:
 $("#content").wfHideParagraphs();

 you can specify the following options:
 show = number of items to show initially
 show_text = the text you want for show more link
 hide_text = the text you want for hide link
 position = specify the position where show more link will be shown, possible options: "left" or "right"
 */
(function ($) {
  $.fn.wfHideParagraphs = function (options) {
    var settings = {
      show: 5,
      show_text: "Show more",
      hide_text: "Hide details",
      position: "right"
    };

    var options = $.extend(settings, options);
    var bodyContent = this;
    return this.each(
        function () {
          var paragraphs = $(this).children();

          if (paragraphs.length <= options.show) {
            return;
          }

          var visible = paragraphs.slice(0, options.show);
          var invisible = paragraphs.slice(options.show);
          invisible.hide();
          var aClass = "";
          if (options.position == "left") {
            aClass = "pull-left";
          }
          else if (options.position == "right") {
            aClass = "pull-right";
          }
          var link = $("<a class=" + aClass + " href='javascript:void(0)'>" + options.show_text + "</a>");
          $(this).append("<p class='clearfix'/>").append(link).append("<p style='padding: 10px;'>");

          link.click(function () {
            if ($(this).html() == options.show_text) {
              $(this).html(options.hide_text);
              invisible.show();
              WFImager.refresh(bodyContent);
            }
            else {
              $(this).html(options.show_text);
              invisible.hide();
            }
            return false;
          });
        }
    );
  };
})(jQuery);
(function ($) {
  $.fn.wfPagination = function (options) {

    var bodyElement = $(this);
    var parentElement = $(bodyElement).parent();
    var paginationElement = $(parentElement).find('ul.pagination');

    var settings = $.extend({
      perPage: 5
    }, options);

    $.fn.extend({
      previousPage: function () {
        var currentPaginationElement = $(this).parent().find('ul.pagination');
        var goToPage = parseInt($(currentPaginationElement).data("curr")) - 1;
        if ($(currentPaginationElement).children('li.active').prev('li.page_class').length == true) {
          $(this).goTo(goToPage);
        }
      },
      nextPage: function () {
        var currentPaginationElement = $(this).parent().find('ul.pagination');
        var goToPage = parseInt($(currentPaginationElement).data("curr"), 10) + 1;
        if ($(currentPaginationElement).children('li.active').next('li.page_class').length == true) {
          $(this).goTo(goToPage);
        }
      },
      goTo: function (page) {
        var startAt = page * settings.perPage,
            endOn = startAt + settings.perPage;
        var currentPaginationElement = $(this).parent().find('ul.pagination');
        var currentPaginationItems = $(currentPaginationElement).find('li.page_class');
        $(this).children().css('display', 'none').slice(startAt, endOn).css('display', 'block');
        $(currentPaginationElement).data("curr", page);
        $(currentPaginationItems).removeClass('active');
        $(currentPaginationItems).eq(page).addClass('active');
      }
    });

    var bodyContent = this;
    return this.each(function () {
      var perPage = settings.perPage;
      var numItems = bodyElement.children().size();
      var numPages = Math.ceil(numItems / perPage);
      if (numPages > 1) {
        $(paginationElement).data("curr", 0);

        var curr = 0;
        if (numPages > 1) {
          $('<li class="previous"><a href="javascript:void(0)">&laquo;</a></li>').appendTo($(paginationElement));
        }
        while (numPages > curr) {
          $('<li class="page_class"><a href="javascript:void(0)">' + (curr + 1) + '</a></li>').appendTo($(paginationElement));
          curr++;
        }

        if (numPages > 1) {
          $('<li class="next"><a href="javascript:void(0)">&raquo;</a></li>').appendTo($(paginationElement));
        }

        $(parentElement).find('.pagination .page_class:first').addClass('active');

        bodyElement.children().css('display', 'none');
        bodyElement.children().slice(0, perPage).css('display', 'block');

        $(paginationElement).find('li.page_class').click(function () {
          var clickedPage = $(this).children(':first').html().valueOf() - 1;
          $(bodyElement).goTo(clickedPage, perPage);
          WFImager.refresh(bodyContent);
        });
        $(paginationElement).find('li.previous').click(function () {
          $(bodyElement).previousPage();
          WFImager.refresh(bodyContent);
        });
        $(paginationElement).find('li.next').click(function () {
          $(bodyElement).nextPage();
          WFImager.refresh(bodyContent);
        });
      }
      else {
        $(paginationElement).not(':has(li)').remove();
      }
    });
  };
}(jQuery));
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
/* bower.json
 {
 "author": "Scott Jehl",
 "name": "matchMedia",
 "description": "matchMedia polyfill for testing media queries in JS",
 "version": "0.2.0",
 "homepage": "http://github.com/paulirish/matchMedia.js",
 "repository": {
 "type": "git",
 "url": "git://github.com/paulirish/matchMedia.js"
 },
 "main": "./matchMedia.js"
 }*/

window.matchMedia || (window.matchMedia = function () {
  "use strict";

  // For browsers that support matchMedium api such as IE 9 and webkit
  var styleMedia = (window.styleMedia || window.media);

  // For those that don't support matchMedium
  if (!styleMedia) {
    var style = document.createElement('style'),
        script = document.getElementsByTagName('script')[0],
        info = null;

    style.type = 'text/css';
    style.id = 'matchmediajs-test';

    script.parentNode.insertBefore(style, script);

    // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
    info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

    styleMedia = {
      matchMedium: function (media) {
        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

        // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        }

        // Test if media query is true or false
        return info.width === '1px';
      }
    };
  }

  return function (media) {
    return {
      matches: styleMedia.matchMedium(media || 'all'),
      media: media || 'all'
    };
  };
}());
/*!
* MediaElement.js
* HTML5 <video> and <audio> shim and player
* http://mediaelementjs.com/
*
* Creates a JavaScript object that mimics HTML5 MediaElement API
* for browsers that don't understand HTML5 or can't play the provided codec
* Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
*
* Copyright 2010-2014, John Dyer (http://j.hn)
* License: MIT
*
*/var mejs=mejs||{};mejs.version="2.14.2";mejs.meIndex=0;
mejs.plugins={silverlight:[{version:[3,0],types:["video/mp4","video/m4v","video/mov","video/wmv","audio/wma","audio/m4a","audio/mp3","audio/wav","audio/mpeg"]}],flash:[{version:[9,0,124],types:["video/mp4","video/m4v","video/mov","video/flv","video/rtmp","video/x-flv","audio/flv","audio/x-flv","audio/mp3","audio/m4a","audio/mpeg","video/youtube","video/x-youtube"]}],youtube:[{version:null,types:["video/youtube","video/x-youtube","audio/youtube","audio/x-youtube"]}],vimeo:[{version:null,types:["video/vimeo",
"video/x-vimeo"]}]};
mejs.Utility={encodeUrl:function(a){return encodeURIComponent(a)},escapeHTML:function(a){return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")},absolutizeUrl:function(a){var b=document.createElement("div");b.innerHTML='<a href="'+this.escapeHTML(a)+'">x</a>';return b.firstChild.href},getScriptPath:function(a){for(var b=0,c,d="",e="",g,f,i=document.getElementsByTagName("script"),k=i.length,h=a.length;b<k;b++){g=i[b].src;c=g.lastIndexOf("/");if(c>-1){f=g.substring(c+
1);g=g.substring(0,c+1)}else{f=g;g=""}for(c=0;c<h;c++){e=a[c];e=f.indexOf(e);if(e>-1){d=g;break}}if(d!=="")break}return d},secondsToTimeCode:function(a,b,c,d){if(typeof c=="undefined")c=false;else if(typeof d=="undefined")d=25;var e=Math.floor(a/3600)%24,g=Math.floor(a/60)%60,f=Math.floor(a%60);a=Math.floor((a%1*d).toFixed(3));return(b||e>0?(e<10?"0"+e:e)+":":"")+(g<10?"0"+g:g)+":"+(f<10?"0"+f:f)+(c?":"+(a<10?"0"+a:a):"")},timeCodeToSeconds:function(a,b,c,d){if(typeof c=="undefined")c=false;else if(typeof d==
"undefined")d=25;a=a.split(":");b=parseInt(a[0],10);var e=parseInt(a[1],10),g=parseInt(a[2],10),f=0,i=0;if(c)f=parseInt(a[3])/d;return i=b*3600+e*60+g+f},convertSMPTEtoSeconds:function(a){if(typeof a!="string")return false;a=a.replace(",",".");var b=0,c=a.indexOf(".")!=-1?a.split(".")[1].length:0,d=1;a=a.split(":").reverse();for(var e=0;e<a.length;e++){d=1;if(e>0)d=Math.pow(60,e);b+=Number(a[e])*d}return Number(b.toFixed(c))},removeSwf:function(a){var b=document.getElementById(a);if(b&&/object|embed/i.test(b.nodeName))if(mejs.MediaFeatures.isIE){b.style.display=
"none";(function(){b.readyState==4?mejs.Utility.removeObjectInIE(a):setTimeout(arguments.callee,10)})()}else b.parentNode.removeChild(b)},removeObjectInIE:function(a){if(a=document.getElementById(a)){for(var b in a)if(typeof a[b]=="function")a[b]=null;a.parentNode.removeChild(a)}}};
mejs.PluginDetector={hasPluginVersion:function(a,b){var c=this.plugins[a];b[1]=b[1]||0;b[2]=b[2]||0;return c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?true:false},nav:window.navigator,ua:window.navigator.userAgent.toLowerCase(),plugins:[],addPlugin:function(a,b,c,d,e){this.plugins[a]=this.detectPlugin(b,c,d,e)},detectPlugin:function(a,b,c,d){var e=[0,0,0],g;if(typeof this.nav.plugins!="undefined"&&typeof this.nav.plugins[a]=="object"){if((c=this.nav.plugins[a].description)&&
!(typeof this.nav.mimeTypes!="undefined"&&this.nav.mimeTypes[b]&&!this.nav.mimeTypes[b].enabledPlugin)){e=c.replace(a,"").replace(/^\s+/,"").replace(/\sr/gi,".").split(".");for(a=0;a<e.length;a++)e[a]=parseInt(e[a].match(/\d+/),10)}}else if(typeof window.ActiveXObject!="undefined")try{if(g=new ActiveXObject(c))e=d(g)}catch(f){}return e}};
mejs.PluginDetector.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(a){var b=[];if(a=a.GetVariable("$version")){a=a.split(" ")[1].split(",");b=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)]}return b});
mejs.PluginDetector.addPlugin("silverlight","Silverlight Plug-In","application/x-silverlight-2","AgControl.AgControl",function(a){var b=[0,0,0,0],c=function(d,e,g,f){for(;d.isVersionSupported(e[0]+"."+e[1]+"."+e[2]+"."+e[3]);)e[g]+=f;e[g]-=f};c(a,b,0,1);c(a,b,1,1);c(a,b,2,1E4);c(a,b,2,1E3);c(a,b,2,100);c(a,b,2,10);c(a,b,2,1);c(a,b,3,1);return b});
mejs.MediaFeatures={init:function(){var a=this,b=document,c=mejs.PluginDetector.nav,d=mejs.PluginDetector.ua.toLowerCase(),e,g=["source","track","audio","video"];a.isiPad=d.match(/ipad/i)!==null;a.isiPhone=d.match(/iphone/i)!==null;a.isiOS=a.isiPhone||a.isiPad;a.isAndroid=d.match(/android/i)!==null;a.isBustedAndroid=d.match(/android 2\.[12]/)!==null;a.isBustedNativeHTTPS=location.protocol==="https:"&&(d.match(/android [12]\./)!==null||d.match(/macintosh.* version.* safari/)!==null);a.isIE=c.appName.toLowerCase().indexOf("microsoft")!=
-1||c.appName.toLowerCase().match(/trident/gi)!==null;a.isChrome=d.match(/chrome/gi)!==null;a.isFirefox=d.match(/firefox/gi)!==null;a.isWebkit=d.match(/webkit/gi)!==null;a.isGecko=d.match(/gecko/gi)!==null&&!a.isWebkit&&!a.isIE;a.isOpera=d.match(/opera/gi)!==null;a.hasTouch="ontouchstart"in window;a.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;for(c=0;c<g.length;c++)e=document.createElement(g[c]);a.supportsMediaTag=typeof e.canPlayType!==
"undefined"||a.isBustedAndroid;try{e.canPlayType("video/mp4")}catch(f){a.supportsMediaTag=false}a.hasSemiNativeFullScreen=typeof e.webkitEnterFullscreen!=="undefined";a.hasNativeFullscreen=typeof e.requestFullscreen!=="undefined";a.hasWebkitNativeFullScreen=typeof e.webkitRequestFullScreen!=="undefined";a.hasMozNativeFullScreen=typeof e.mozRequestFullScreen!=="undefined";a.hasMsNativeFullScreen=typeof e.msRequestFullscreen!=="undefined";a.hasTrueNativeFullScreen=a.hasWebkitNativeFullScreen||a.hasMozNativeFullScreen||
a.hasMsNativeFullScreen;a.nativeFullScreenEnabled=a.hasTrueNativeFullScreen;if(a.hasMozNativeFullScreen)a.nativeFullScreenEnabled=document.mozFullScreenEnabled;else if(a.hasMsNativeFullScreen)a.nativeFullScreenEnabled=document.msFullscreenEnabled;if(a.isChrome)a.hasSemiNativeFullScreen=false;if(a.hasTrueNativeFullScreen){a.fullScreenEventName="";if(a.hasWebkitNativeFullScreen)a.fullScreenEventName="webkitfullscreenchange";else if(a.hasMozNativeFullScreen)a.fullScreenEventName="mozfullscreenchange";
else if(a.hasMsNativeFullScreen)a.fullScreenEventName="MSFullscreenChange";a.isFullScreen=function(){if(e.mozRequestFullScreen)return b.mozFullScreen;else if(e.webkitRequestFullScreen)return b.webkitIsFullScreen;else if(e.hasMsNativeFullScreen)return b.msFullscreenElement!==null};a.requestFullScreen=function(i){if(a.hasWebkitNativeFullScreen)i.webkitRequestFullScreen();else if(a.hasMozNativeFullScreen)i.mozRequestFullScreen();else a.hasMsNativeFullScreen&&i.msRequestFullscreen()};a.cancelFullScreen=
function(){if(a.hasWebkitNativeFullScreen)document.webkitCancelFullScreen();else if(a.hasMozNativeFullScreen)document.mozCancelFullScreen();else a.hasMsNativeFullScreen&&document.msExitFullscreen()}}if(a.hasSemiNativeFullScreen&&d.match(/mac os x 10_5/i)){a.hasNativeFullScreen=false;a.hasSemiNativeFullScreen=false}}};mejs.MediaFeatures.init();
mejs.HtmlMediaElement={pluginType:"native",isFullScreen:false,setCurrentTime:function(a){this.currentTime=a},setMuted:function(a){this.muted=a},setVolume:function(a){this.volume=a},stop:function(){this.pause()},setSrc:function(a){for(var b=this.getElementsByTagName("source");b.length>0;)this.removeChild(b[0]);if(typeof a=="string")this.src=a;else{var c;for(b=0;b<a.length;b++){c=a[b];if(this.canPlayType(c.type)){this.src=c.src;break}}}},setVideoSize:function(a,b){this.width=a;this.height=b}};
mejs.PluginMediaElement=function(a,b,c){this.id=a;this.pluginType=b;this.src=c;this.events={};this.attributes={}};
mejs.PluginMediaElement.prototype={pluginElement:null,pluginType:"",isFullScreen:false,playbackRate:-1,defaultPlaybackRate:-1,seekable:[],played:[],paused:true,ended:false,seeking:false,duration:0,error:null,tagName:"",muted:false,volume:1,currentTime:0,play:function(){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.playVideo():this.pluginApi.playMedia();this.paused=false}},load:function(){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType==
"vimeo"||this.pluginApi.loadMedia();this.paused=false}},pause:function(){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.pauseVideo():this.pluginApi.pauseMedia();this.paused=true}},stop:function(){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.stopVideo():this.pluginApi.stopMedia();this.paused=true}},canPlayType:function(a){var b,c,d,e=mejs.plugins[this.pluginType];for(b=0;b<e.length;b++){d=e[b];if(mejs.PluginDetector.hasPluginVersion(this.pluginType,
d.version))for(c=0;c<d.types.length;c++)if(a==d.types[c])return"probably"}return""},positionFullscreenButton:function(a,b,c){this.pluginApi!=null&&this.pluginApi.positionFullscreenButton&&this.pluginApi.positionFullscreenButton(Math.floor(a),Math.floor(b),c)},hideFullscreenButton:function(){this.pluginApi!=null&&this.pluginApi.hideFullscreenButton&&this.pluginApi.hideFullscreenButton()},setSrc:function(a){if(typeof a=="string"){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));this.src=mejs.Utility.absolutizeUrl(a)}else{var b,
c;for(b=0;b<a.length;b++){c=a[b];if(this.canPlayType(c.type)){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));this.src=mejs.Utility.absolutizeUrl(a);break}}}},setCurrentTime:function(a){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.seekTo(a):this.pluginApi.setCurrentTime(a);this.currentTime=a}},setVolume:function(a){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.setVolume(a*100):this.pluginApi.setVolume(a);
this.volume=a}},setMuted:function(a){if(this.pluginApi!=null){if(this.pluginType=="youtube"||this.pluginType=="vimeo"){a?this.pluginApi.mute():this.pluginApi.unMute();this.muted=a;this.dispatchEvent("volumechange")}else this.pluginApi.setMuted(a);this.muted=a}},setVideoSize:function(a,b){if(this.pluginElement.style){this.pluginElement.style.width=a+"px";this.pluginElement.style.height=b+"px"}this.pluginApi!=null&&this.pluginApi.setVideoSize&&this.pluginApi.setVideoSize(a,b)},setFullscreen:function(a){this.pluginApi!=
null&&this.pluginApi.setFullscreen&&this.pluginApi.setFullscreen(a)},enterFullScreen:function(){this.pluginApi!=null&&this.pluginApi.setFullscreen&&this.setFullscreen(true)},exitFullScreen:function(){this.pluginApi!=null&&this.pluginApi.setFullscreen&&this.setFullscreen(false)},addEventListener:function(a,b){this.events[a]=this.events[a]||[];this.events[a].push(b)},removeEventListener:function(a,b){if(!a){this.events={};return true}var c=this.events[a];if(!c)return true;if(!b){this.events[a]=[];return true}for(var d=
0;d<c.length;d++)if(c[d]===b){this.events[a].splice(d,1);return true}return false},dispatchEvent:function(a){var b,c,d=this.events[a];if(d){c=Array.prototype.slice.call(arguments,1);for(b=0;b<d.length;b++)d[b].apply(null,c)}},hasAttribute:function(a){return a in this.attributes},removeAttribute:function(a){delete this.attributes[a]},getAttribute:function(a){if(this.hasAttribute(a))return this.attributes[a];return""},setAttribute:function(a,b){this.attributes[a]=b},remove:function(){mejs.Utility.removeSwf(this.pluginElement.id);
mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)}};
mejs.MediaPluginBridge={pluginMediaElements:{},htmlMediaElements:{},registerPluginElement:function(a,b,c){this.pluginMediaElements[a]=b;this.htmlMediaElements[a]=c},unregisterPluginElement:function(a){delete this.pluginMediaElements[a];delete this.htmlMediaElements[a]},initPlugin:function(a){var b=this.pluginMediaElements[a],c=this.htmlMediaElements[a];if(b){switch(b.pluginType){case "flash":b.pluginElement=b.pluginApi=document.getElementById(a);break;case "silverlight":b.pluginElement=document.getElementById(b.id);
b.pluginApi=b.pluginElement.Content.MediaElementJS}b.pluginApi!=null&&b.success&&b.success(b,c)}},fireEvent:function(a,b,c){var d,e;if(a=this.pluginMediaElements[a]){b={type:b,target:a};for(d in c){a[d]=c[d];b[d]=c[d]}e=c.bufferedTime||0;b.target.buffered=b.buffered={start:function(){return 0},end:function(){return e},length:1};a.dispatchEvent(b.type,b)}}};
mejs.MediaElementDefaults={mode:"auto",plugins:["flash","silverlight","youtube","vimeo"],enablePluginDebug:false,httpsBasicAuthSite:false,type:"",pluginPath:mejs.Utility.getScriptPath(["mediaelement.js","mediaelement.min.js","mediaelement-and-player.js","mediaelement-and-player.min.js"]),flashName:"flashmediaelement.swf",flashStreamer:"",enablePluginSmoothing:false,enablePseudoStreaming:false,pseudoStreamingStartQueryParam:"start",silverlightName:"silverlightmediaelement.xap",defaultVideoWidth:480,
defaultVideoHeight:270,pluginWidth:-1,pluginHeight:-1,pluginVars:[],timerRate:250,startVolume:0.8,success:function(){},error:function(){}};mejs.MediaElement=function(a,b){return mejs.HtmlMediaElementShim.create(a,b)};
mejs.HtmlMediaElementShim={create:function(a,b){var c=mejs.MediaElementDefaults,d=typeof a=="string"?document.getElementById(a):a,e=d.tagName.toLowerCase(),g=e==="audio"||e==="video",f=g?d.getAttribute("src"):d.getAttribute("href");e=d.getAttribute("poster");var i=d.getAttribute("autoplay"),k=d.getAttribute("preload"),h=d.getAttribute("controls"),j;for(j in b)c[j]=b[j];f=typeof f=="undefined"||f===null||f==""?null:f;e=typeof e=="undefined"||e===null?"":e;k=typeof k=="undefined"||k===null||k==="false"?
"none":k;i=!(typeof i=="undefined"||i===null||i==="false");h=!(typeof h=="undefined"||h===null||h==="false");j=this.determinePlayback(d,c,mejs.MediaFeatures.supportsMediaTag,g,f);j.url=j.url!==null?mejs.Utility.absolutizeUrl(j.url):"";if(j.method=="native"){if(mejs.MediaFeatures.isBustedAndroid){d.src=j.url;d.addEventListener("click",function(){d.play()},false)}return this.updateNative(j,c,i,k)}else if(j.method!=="")return this.createPlugin(j,c,e,i,k,h);else{this.createErrorMessage(j,c,e);return this}},
determinePlayback:function(a,b,c,d,e){var g=[],f,i,k,h={method:"",url:"",htmlMediaElement:a,isVideo:a.tagName.toLowerCase()!="audio"},j;if(typeof b.type!="undefined"&&b.type!=="")if(typeof b.type=="string")g.push({type:b.type,url:e});else for(f=0;f<b.type.length;f++)g.push({type:b.type[f],url:e});else if(e!==null){k=this.formatType(e,a.getAttribute("type"));g.push({type:k,url:e})}else for(f=0;f<a.childNodes.length;f++){i=a.childNodes[f];if(i.nodeType==1&&i.tagName.toLowerCase()=="source"){e=i.getAttribute("src");
k=this.formatType(e,i.getAttribute("type"));i=i.getAttribute("media");if(!i||!window.matchMedia||window.matchMedia&&window.matchMedia(i).matches)g.push({type:k,url:e})}}if(!d&&g.length>0&&g[0].url!==null&&this.getTypeFromFile(g[0].url).indexOf("audio")>-1)h.isVideo=false;if(mejs.MediaFeatures.isBustedAndroid)a.canPlayType=function(m){return m.match(/video\/(mp4|m4v)/gi)!==null?"maybe":""};if(c&&(b.mode==="auto"||b.mode==="auto_plugin"||b.mode==="native")&&!(mejs.MediaFeatures.isBustedNativeHTTPS&&
b.httpsBasicAuthSite===true)){if(!d){f=document.createElement(h.isVideo?"video":"audio");a.parentNode.insertBefore(f,a);a.style.display="none";h.htmlMediaElement=a=f}for(f=0;f<g.length;f++)if(a.canPlayType(g[f].type).replace(/no/,"")!==""||a.canPlayType(g[f].type.replace(/mp3/,"mpeg")).replace(/no/,"")!==""||a.canPlayType(g[f].type.replace(/m4a/,"mp4")).replace(/no/,"")!==""){h.method="native";h.url=g[f].url;break}if(h.method==="native"){if(h.url!==null)a.src=h.url;if(b.mode!=="auto_plugin")return h}}if(b.mode===
"auto"||b.mode==="auto_plugin"||b.mode==="shim")for(f=0;f<g.length;f++){k=g[f].type;for(a=0;a<b.plugins.length;a++){e=b.plugins[a];i=mejs.plugins[e];for(c=0;c<i.length;c++){j=i[c];if(j.version==null||mejs.PluginDetector.hasPluginVersion(e,j.version))for(d=0;d<j.types.length;d++)if(k==j.types[d]){h.method=e;h.url=g[f].url;return h}}}}if(b.mode==="auto_plugin"&&h.method==="native")return h;if(h.method===""&&g.length>0)h.url=g[0].url;return h},formatType:function(a,b){return a&&!b?this.getTypeFromFile(a):
b&&~b.indexOf(";")?b.substr(0,b.indexOf(";")):b},getTypeFromFile:function(a){a=a.split("?")[0];a=a.substring(a.lastIndexOf(".")+1).toLowerCase();return(/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a)?"video":"audio")+"/"+this.getTypeFromExtension(a)},getTypeFromExtension:function(a){switch(a){case "mp4":case "m4v":case "m4a":return"mp4";case "webm":case "webma":case "webmv":return"webm";case "ogg":case "oga":case "ogv":return"ogg";default:return a}},createErrorMessage:function(a,b,c){var d=
a.htmlMediaElement,e=document.createElement("div");e.className="me-cannotplay";try{e.style.width=d.width+"px";e.style.height=d.height+"px"}catch(g){}e.innerHTML=b.customError?b.customError:c!==""?'<a href="'+a.url+'"><img src="'+c+'" width="100%" height="100%" /></a>':'<a href="'+a.url+'"><span>'+mejs.i18n.t("Download File")+"</span></a>";d.parentNode.insertBefore(e,d);d.style.display="none";b.error(d)},createPlugin:function(a,b,c,d,e,g){c=a.htmlMediaElement;var f=1,i=1,k="me_"+a.method+"_"+mejs.meIndex++,
h=new mejs.PluginMediaElement(k,a.method,a.url),j=document.createElement("div"),m;h.tagName=c.tagName;for(m=0;m<c.attributes.length;m++){var q=c.attributes[m];q.specified==true&&h.setAttribute(q.name,q.value)}for(m=c.parentNode;m!==null&&m.tagName.toLowerCase()!=="body"&&m.parentNode!=null;){if(m.parentNode.tagName.toLowerCase()==="p"){m.parentNode.parentNode.insertBefore(m,m.parentNode);break}m=m.parentNode}if(a.isVideo){f=b.pluginWidth>0?b.pluginWidth:b.videoWidth>0?b.videoWidth:c.getAttribute("width")!==
null?c.getAttribute("width"):b.defaultVideoWidth;i=b.pluginHeight>0?b.pluginHeight:b.videoHeight>0?b.videoHeight:c.getAttribute("height")!==null?c.getAttribute("height"):b.defaultVideoHeight;f=mejs.Utility.encodeUrl(f);i=mejs.Utility.encodeUrl(i)}else if(b.enablePluginDebug){f=320;i=240}h.success=b.success;mejs.MediaPluginBridge.registerPluginElement(k,h,c);j.className="me-plugin";j.id=k+"_container";a.isVideo?c.parentNode.insertBefore(j,c):document.body.insertBefore(j,document.body.childNodes[0]);
d=["id="+k,"isvideo="+(a.isVideo?"true":"false"),"autoplay="+(d?"true":"false"),"preload="+e,"width="+f,"startvolume="+b.startVolume,"timerrate="+b.timerRate,"flashstreamer="+b.flashStreamer,"height="+i,"pseudostreamstart="+b.pseudoStreamingStartQueryParam];if(a.url!==null)a.method=="flash"?d.push("file="+mejs.Utility.encodeUrl(a.url)):d.push("file="+a.url);b.enablePluginDebug&&d.push("debug=true");b.enablePluginSmoothing&&d.push("smoothing=true");b.enablePseudoStreaming&&d.push("pseudostreaming=true");
g&&d.push("controls=true");if(b.pluginVars)d=d.concat(b.pluginVars);switch(a.method){case "silverlight":j.innerHTML='<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="'+k+'" name="'+k+'" width="'+f+'" height="'+i+'" class="mejs-shim"><param name="initParams" value="'+d.join(",")+'" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="'+
b.pluginPath+b.silverlightName+'" /></object>';break;case "flash":if(mejs.MediaFeatures.isIE){a=document.createElement("div");j.appendChild(a);a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+k+'" width="'+f+'" height="'+i+'" class="mejs-shim"><param name="movie" value="'+b.pluginPath+b.flashName+"?x="+new Date+'" /><param name="flashvars" value="'+d.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'}else j.innerHTML=
'<embed id="'+k+'" name="'+k+'" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="'+b.pluginPath+b.flashName+'" flashvars="'+d.join("&")+'" width="'+f+'" height="'+i+'" scale="default"class="mejs-shim"></embed>';break;case "youtube":if(a.url.lastIndexOf("youtu.be")!=-1){a=a.url.substr(a.url.lastIndexOf("/")+1);if(a.indexOf("?")!=
-1)a=a.substr(0,a.indexOf("?"))}else a=a.url.substr(a.url.lastIndexOf("=")+1);youtubeSettings={container:j,containerId:j.id,pluginMediaElement:h,pluginId:k,videoId:a,height:i,width:f};mejs.PluginDetector.hasPluginVersion("flash",[10,0,0])?mejs.YouTubeApi.createFlash(youtubeSettings):mejs.YouTubeApi.enqueueIframe(youtubeSettings);break;case "vimeo":b=k+"_player";h.vimeoid=a.url.substr(a.url.lastIndexOf("/")+1);j.innerHTML='<iframe src="//player.vimeo.com/video/'+h.vimeoid+"?api=1&portrait=0&byline=0&title=0&player_id="+
b+'" width="'+f+'" height="'+i+'" frameborder="0" class="mejs-shim" id="'+b+'"></iframe>';if(typeof $f=="function"){var l=$f(j.childNodes[0]);l.addEvent("ready",function(){function o(n,p,r,s){n={type:r,target:p};if(r=="timeupdate"){p.currentTime=n.currentTime=s.seconds;p.duration=n.duration=s.duration}p.dispatchEvent(n.type,n)}l.playVideo=function(){l.api("play")};l.pauseVideo=function(){l.api("pause")};l.seekTo=function(n){l.api("seekTo",n)};l.addEvent("play",function(){o(l,h,"play");o(l,h,"playing")});
l.addEvent("pause",function(){o(l,h,"pause")});l.addEvent("finish",function(){o(l,h,"ended")});l.addEvent("playProgress",function(n){o(l,h,"timeupdate",n)});h.pluginApi=l;mejs.MediaPluginBridge.initPlugin(k)})}else console.warn("You need to include froogaloop for vimeo to work")}c.style.display="none";c.removeAttribute("autoplay");return h},updateNative:function(a,b){var c=a.htmlMediaElement,d;for(d in mejs.HtmlMediaElement)c[d]=mejs.HtmlMediaElement[d];b.success(c,c);return c}};
mejs.YouTubeApi={isIframeStarted:false,isIframeLoaded:false,loadIframeApi:function(){if(!this.isIframeStarted){var a=document.createElement("script");a.src="//www.youtube.com/player_api";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);this.isIframeStarted=true}},iframeQueue:[],enqueueIframe:function(a){if(this.isLoaded)this.createIframe(a);else{this.loadIframeApi();this.iframeQueue.push(a)}},createIframe:function(a){var b=a.pluginMediaElement,c=new YT.Player(a.containerId,
{height:a.height,width:a.width,videoId:a.videoId,playerVars:{controls:0},events:{onReady:function(){a.pluginMediaElement.pluginApi=c;mejs.MediaPluginBridge.initPlugin(a.pluginId);setInterval(function(){mejs.YouTubeApi.createEvent(c,b,"timeupdate")},250)},onStateChange:function(d){mejs.YouTubeApi.handleStateChange(d.data,c,b)}}})},createEvent:function(a,b,c){c={type:c,target:b};if(a&&a.getDuration){b.currentTime=c.currentTime=a.getCurrentTime();b.duration=c.duration=a.getDuration();c.paused=b.paused;
c.ended=b.ended;c.muted=a.isMuted();c.volume=a.getVolume()/100;c.bytesTotal=a.getVideoBytesTotal();c.bufferedBytes=a.getVideoBytesLoaded();var d=c.bufferedBytes/c.bytesTotal*c.duration;c.target.buffered=c.buffered={start:function(){return 0},end:function(){return d},length:1}}b.dispatchEvent(c.type,c)},iFrameReady:function(){for(this.isIframeLoaded=this.isLoaded=true;this.iframeQueue.length>0;)this.createIframe(this.iframeQueue.pop())},flashPlayers:{},createFlash:function(a){this.flashPlayers[a.pluginId]=
a;var b,c="//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid="+a.pluginId+"&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";if(mejs.MediaFeatures.isIE){b=document.createElement("div");a.container.appendChild(b);b.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+a.pluginId+'" width="'+a.width+'" height="'+a.height+'" class="mejs-shim"><param name="movie" value="'+
c+'" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'}else a.container.innerHTML='<object type="application/x-shockwave-flash" id="'+a.pluginId+'" data="'+c+'" width="'+a.width+'" height="'+a.height+'" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'},flashReady:function(a){var b=this.flashPlayers[a],c=
document.getElementById(a),d=b.pluginMediaElement;d.pluginApi=d.pluginElement=c;mejs.MediaPluginBridge.initPlugin(a);c.cueVideoById(b.videoId);a=b.containerId+"_callback";window[a]=function(e){mejs.YouTubeApi.handleStateChange(e,c,d)};c.addEventListener("onStateChange",a);setInterval(function(){mejs.YouTubeApi.createEvent(c,d,"timeupdate")},250)},handleStateChange:function(a,b,c){switch(a){case -1:c.paused=true;c.ended=true;mejs.YouTubeApi.createEvent(b,c,"loadedmetadata");break;case 0:c.paused=false;
c.ended=true;mejs.YouTubeApi.createEvent(b,c,"ended");break;case 1:c.paused=false;c.ended=false;mejs.YouTubeApi.createEvent(b,c,"play");mejs.YouTubeApi.createEvent(b,c,"playing");break;case 2:c.paused=true;c.ended=false;mejs.YouTubeApi.createEvent(b,c,"pause");break;case 3:mejs.YouTubeApi.createEvent(b,c,"progress")}}};function onYouTubePlayerAPIReady(){mejs.YouTubeApi.iFrameReady()}function onYouTubePlayerReady(a){mejs.YouTubeApi.flashReady(a)}window.mejs=mejs;window.MediaElement=mejs.MediaElement;
(function(a,b){var c={locale:{language:"",strings:{}},methods:{}};c.getLanguage=function(){return(c.locale.language||window.navigator.userLanguage||window.navigator.language).substr(0,2).toLowerCase()};if(typeof mejsL10n!="undefined")c.locale.language=mejsL10n.language;c.methods.checkPlain=function(d){var e,g,f={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};d=String(d);for(e in f)if(f.hasOwnProperty(e)){g=RegExp(e,"g");d=d.replace(g,f[e])}return d};c.methods.t=function(d,e){if(c.locale.strings&&
c.locale.strings[e.context]&&c.locale.strings[e.context][d])d=c.locale.strings[e.context][d];return c.methods.checkPlain(d)};c.t=function(d,e){if(typeof d==="string"&&d.length>0){var g=c.getLanguage();e=e||{context:g};return c.methods.t(d,e)}else throw{name:"InvalidArgumentException",message:"First argument is either not a string or empty."};};b.i18n=c})(document,mejs);(function(a){if(typeof mejsL10n!="undefined")a[mejsL10n.language]=mejsL10n.strings})(mejs.i18n.locale.strings);
(function(a){if(typeof a.de==="undefined")a.de={Fullscreen:"Vollbild","Go Fullscreen":"Vollbild an","Turn off Fullscreen":"Vollbild aus",Close:"Schlie\u00dfen"}})(mejs.i18n.locale.strings);(function(a){if(typeof a.zh==="undefined")a.zh={Fullscreen:"\u5168\u87a2\u5e55","Go Fullscreen":"\u5168\u5c4f\u6a21\u5f0f","Turn off Fullscreen":"\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",Close:"\u95dc\u9589"}})(mejs.i18n.locale.strings);

/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */if(typeof jQuery!="undefined")mejs.$=jQuery;else if(typeof ender!="undefined")mejs.$=ender;
(function(f){mejs.MepDefaults={poster:"",showPosterWhenEnded:false,defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:30,defaultSeekBackwardInterval:function(a){return a.duration*0.05},defaultSeekForwardInterval:function(a){return a.duration*0.05},audioWidth:-1,audioHeight:-1,startVolume:0.8,loop:false,autoRewind:true,enableAutosize:true,alwaysShowHours:false,showTimecodeFrameCount:false,framesPerSecond:25,autosizeProgress:true,alwaysShowControls:false,
hideVideoControlsOnLoad:false,clickToPlayPause:true,iPadUseNativeControls:false,iPhoneUseNativeControls:false,AndroidUseNativeControls:false,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],isVideo:true,enableKeyboard:true,pauseOtherPlayers:true,keyActions:[{keys:[32,179],action:function(a,b){b.paused||b.ended?a.play():a.pause()}},{keys:[38],action:function(a,b){b.setVolume(Math.min(b.volume+0.1,1))}},{keys:[40],action:function(a,b){b.setVolume(Math.max(b.volume-
0.1,0))}},{keys:[37,227],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){if(a.isVideo){a.showControls();a.startControlsTimer()}var c=Math.max(b.currentTime-a.options.defaultSeekBackwardInterval(b),0);b.setCurrentTime(c)}}},{keys:[39,228],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){if(a.isVideo){a.showControls();a.startControlsTimer()}var c=Math.min(b.currentTime+a.options.defaultSeekForwardInterval(b),b.duration);b.setCurrentTime(c)}}},{keys:[70],action:function(a){if(typeof a.enterFullScreen!=
"undefined")a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}}]};mejs.mepIndex=0;mejs.players={};mejs.MediaElementPlayer=function(a,b){if(!(this instanceof mejs.MediaElementPlayer))return new mejs.MediaElementPlayer(a,b);this.$media=this.$node=f(a);this.node=this.media=this.$media[0];if(typeof this.node.player!="undefined")return this.node.player;else this.node.player=this;if(typeof b=="undefined")b=this.$node.data("mejsoptions");this.options=f.extend({},mejs.MepDefaults,b);this.id="mep_"+mejs.mepIndex++;
mejs.players[this.id]=this;this.init();return this};mejs.MediaElementPlayer.prototype={hasFocus:false,controlsAreVisible:true,init:function(){var a=this,b=mejs.MediaFeatures,c=f.extend(true,{},a.options,{success:function(d,g){a.meReady(d,g)},error:function(d){a.handleError(d)}}),e=a.media.tagName.toLowerCase();a.isDynamic=e!=="audio"&&e!=="video";a.isVideo=a.isDynamic?a.options.isVideo:e!=="audio"&&a.options.isVideo;if(b.isiPad&&a.options.iPadUseNativeControls||b.isiPhone&&a.options.iPhoneUseNativeControls){a.$media.attr("controls",
"controls");b.isiPad&&a.media.getAttribute("autoplay")!==null&&a.play()}else if(!(b.isAndroid&&a.options.AndroidUseNativeControls)){a.$media.removeAttr("controls");a.container=f('<div id="'+a.id+'" class="mejs-container '+(mejs.MediaFeatures.svg?"svg":"no-svg")+'"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);a.container.addClass((b.isAndroid?
"mejs-android ":"")+(b.isiOS?"mejs-ios ":"")+(b.isiPad?"mejs-ipad ":"")+(b.isiPhone?"mejs-iphone ":"")+(a.isVideo?"mejs-video ":"mejs-audio "));if(b.isiOS){b=a.$media.clone();a.container.find(".mejs-mediaelement").append(b);a.$media.remove();a.$node=a.$media=b;a.node=a.media=b[0]}else a.container.find(".mejs-mediaelement").append(a.$media);a.controls=a.container.find(".mejs-controls");a.layers=a.container.find(".mejs-layers");b=a.isVideo?"video":"audio";e=b.substring(0,1).toUpperCase()+b.substring(1);
a.width=a.options[b+"Width"]>0||a.options[b+"Width"].toString().indexOf("%")>-1?a.options[b+"Width"]:a.media.style.width!==""&&a.media.style.width!==null?a.media.style.width:a.media.getAttribute("width")!==null?a.$media.attr("width"):a.options["default"+e+"Width"];a.height=a.options[b+"Height"]>0||a.options[b+"Height"].toString().indexOf("%")>-1?a.options[b+"Height"]:a.media.style.height!==""&&a.media.style.height!==null?a.media.style.height:a.$media[0].getAttribute("height")!==null?a.$media.attr("height"):
a.options["default"+e+"Height"];a.setPlayerSize(a.width,a.height);c.pluginWidth=a.width;c.pluginHeight=a.height}mejs.MediaElement(a.$media[0],c);typeof a.container!="undefined"&&a.controlsAreVisible&&a.container.trigger("controlsshown")},showControls:function(a){var b=this;a=typeof a=="undefined"||a;if(!b.controlsAreVisible){if(a){b.controls.css("visibility","visible").stop(true,true).fadeIn(200,function(){b.controlsAreVisible=true;b.container.trigger("controlsshown")});b.container.find(".mejs-control").css("visibility",
"visible").stop(true,true).fadeIn(200,function(){b.controlsAreVisible=true})}else{b.controls.css("visibility","visible").css("display","block");b.container.find(".mejs-control").css("visibility","visible").css("display","block");b.controlsAreVisible=true;b.container.trigger("controlsshown")}b.setControlsSize()}},hideControls:function(a){var b=this;a=typeof a=="undefined"||a;if(!(!b.controlsAreVisible||b.options.alwaysShowControls))if(a){b.controls.stop(true,true).fadeOut(200,function(){f(this).css("visibility",
"hidden").css("display","block");b.controlsAreVisible=false;b.container.trigger("controlshidden")});b.container.find(".mejs-control").stop(true,true).fadeOut(200,function(){f(this).css("visibility","hidden").css("display","block")})}else{b.controls.css("visibility","hidden").css("display","block");b.container.find(".mejs-control").css("visibility","hidden").css("display","block");b.controlsAreVisible=false;b.container.trigger("controlshidden")}},controlsTimer:null,startControlsTimer:function(a){var b=
this;a=typeof a!="undefined"?a:1500;b.killControlsTimer("start");b.controlsTimer=setTimeout(function(){b.hideControls();b.killControlsTimer("hide")},a)},killControlsTimer:function(){if(this.controlsTimer!==null){clearTimeout(this.controlsTimer);delete this.controlsTimer;this.controlsTimer=null}},controlsEnabled:true,disableControls:function(){this.killControlsTimer();this.hideControls(false);this.controlsEnabled=false},enableControls:function(){this.showControls(false);this.controlsEnabled=true},
meReady:function(a,b){var c=this,e=mejs.MediaFeatures,d=b.getAttribute("autoplay");d=!(typeof d=="undefined"||d===null||d==="false");var g;if(!c.created){c.created=true;c.media=a;c.domNode=b;if(!(e.isAndroid&&c.options.AndroidUseNativeControls)&&!(e.isiPad&&c.options.iPadUseNativeControls)&&!(e.isiPhone&&c.options.iPhoneUseNativeControls)){c.buildposter(c,c.controls,c.layers,c.media);c.buildkeyboard(c,c.controls,c.layers,c.media);c.buildoverlays(c,c.controls,c.layers,c.media);c.findTracks();for(g in c.options.features){e=
c.options.features[g];if(c["build"+e])try{c["build"+e](c,c.controls,c.layers,c.media)}catch(k){}}c.container.trigger("controlsready");c.setPlayerSize(c.width,c.height);c.setControlsSize();if(c.isVideo){if(mejs.MediaFeatures.hasTouch)c.$media.bind("touchstart",function(){if(c.controlsAreVisible)c.hideControls(false);else c.controlsEnabled&&c.showControls(false)});else{c.clickToPlayPauseCallback=function(){if(c.options.clickToPlayPause)c.media.paused?c.play():c.pause()};c.media.addEventListener("click",
c.clickToPlayPauseCallback,false);c.container.bind("mouseenter mouseover",function(){if(c.controlsEnabled)if(!c.options.alwaysShowControls){c.killControlsTimer("enter");c.showControls();c.startControlsTimer(2500)}}).bind("mousemove",function(){if(c.controlsEnabled){c.controlsAreVisible||c.showControls();c.options.alwaysShowControls||c.startControlsTimer(2500)}}).bind("mouseleave",function(){c.controlsEnabled&&!c.media.paused&&!c.options.alwaysShowControls&&c.startControlsTimer(1E3)})}c.options.hideVideoControlsOnLoad&&
c.hideControls(false);d&&!c.options.alwaysShowControls&&c.hideControls();c.options.enableAutosize&&c.media.addEventListener("loadedmetadata",function(j){if(c.options.videoHeight<=0&&c.domNode.getAttribute("height")===null&&!isNaN(j.target.videoHeight)){c.setPlayerSize(j.target.videoWidth,j.target.videoHeight);c.setControlsSize();c.media.setVideoSize(j.target.videoWidth,j.target.videoHeight)}},false)}a.addEventListener("play",function(){for(var j in mejs.players){var m=mejs.players[j];m.id!=c.id&&
c.options.pauseOtherPlayers&&!m.paused&&!m.ended&&m.pause();m.hasFocus=false}c.hasFocus=true},false);c.media.addEventListener("ended",function(){if(c.options.autoRewind)try{c.media.setCurrentTime(0)}catch(j){}c.media.pause();c.setProgressRail&&c.setProgressRail();c.setCurrentRail&&c.setCurrentRail();if(c.options.loop)c.play();else!c.options.alwaysShowControls&&c.controlsEnabled&&c.showControls()},false);c.media.addEventListener("loadedmetadata",function(){c.updateDuration&&c.updateDuration();c.updateCurrent&&
c.updateCurrent();if(!c.isFullScreen){c.setPlayerSize(c.width,c.height);c.setControlsSize()}},false);setTimeout(function(){c.setPlayerSize(c.width,c.height);c.setControlsSize()},50);c.globalBind("resize",function(){c.isFullScreen||mejs.MediaFeatures.hasTrueNativeFullScreen&&document.webkitIsFullScreen||c.setPlayerSize(c.width,c.height);c.setControlsSize()});c.media.pluginType=="youtube"&&c.container.find(".mejs-overlay-play").hide()}d&&a.pluginType=="native"&&c.play();if(c.options.success)typeof c.options.success==
"string"?window[c.options.success](c.media,c.domNode,c):c.options.success(c.media,c.domNode,c)}},handleError:function(a){this.controls.hide();this.options.error&&this.options.error(a)},setPlayerSize:function(a,b){if(typeof a!="undefined")this.width=a;if(typeof b!="undefined")this.height=b;if(this.height.toString().indexOf("%")>0||this.$node.css("max-width")==="100%"||parseInt(this.$node.css("max-width").replace(/px/,""),10)/this.$node.offsetParent().width()===1||this.$node[0].currentStyle&&this.$node[0].currentStyle.maxWidth===
"100%"){var c=this.isVideo?this.media.videoWidth&&this.media.videoWidth>0?this.media.videoWidth:this.options.defaultVideoWidth:this.options.defaultAudioWidth,e=this.isVideo?this.media.videoHeight&&this.media.videoHeight>0?this.media.videoHeight:this.options.defaultVideoHeight:this.options.defaultAudioHeight,d=this.container.parent().closest(":visible").width();c=this.isVideo||!this.options.autosizeProgress?parseInt(d*e/c,10):e;if(isNaN(c))c=this.container.parent().closest(":visible").height();if(this.container.parent()[0].tagName.toLowerCase()===
"body"){d=f(window).width();c=f(window).height()}if(c!=0&&d!=0){this.container.width(d).height(c);this.$media.add(this.container.find(".mejs-shim")).width("100%").height("100%");this.isVideo&&this.media.setVideoSize&&this.media.setVideoSize(d,c);this.layers.children(".mejs-layer").width("100%").height("100%")}}else{this.container.width(this.width).height(this.height);this.layers.children(".mejs-layer").width(this.width).height(this.height)}d=this.layers.find(".mejs-overlay-play");c=d.find(".mejs-overlay-button");
d.height(this.container.height()-this.controls.height());c.css("margin-top","-"+(c.height()/2-this.controls.height()/2).toString()+"px")},setControlsSize:function(){var a=0,b=0,c=this.controls.find(".mejs-time-rail"),e=this.controls.find(".mejs-time-total");this.controls.find(".mejs-time-current");this.controls.find(".mejs-time-loaded");var d=c.siblings(),g=d.last(),k=null;if(!(!this.container.is(":visible")||!c.length||!c.is(":visible"))){if(this.options&&!this.options.autosizeProgress)b=parseInt(c.css("width"));
if(b===0||!b){d.each(function(){var j=f(this);if(j.css("position")!="absolute"&&j.is(":visible"))a+=f(this).outerWidth(true)});b=this.controls.width()-a-(c.outerWidth(true)-c.width())}do{c.width(b);e.width(b-(e.outerWidth(true)-e.width()));if(g.css("position")!="absolute"){k=g.position();b--}}while(k!=null&&k.top>0&&b>0);this.setProgressRail&&this.setProgressRail();this.setCurrentRail&&this.setCurrentRail()}},buildposter:function(a,b,c,e){var d=f('<div class="mejs-poster mejs-layer"></div>').appendTo(c);
b=a.$media.attr("poster");if(a.options.poster!=="")b=a.options.poster;b!==""&&b!=null?this.setPoster(b):d.hide();e.addEventListener("play",function(){d.hide()},false);a.options.showPosterWhenEnded&&a.options.autoRewind&&e.addEventListener("ended",function(){d.show()},false)},setPoster:function(a){var b=this.container.find(".mejs-poster"),c=b.find("img");if(c.length==0)c=f('<img width="100%" height="100%" />').appendTo(b);c.attr("src",a);b.css({"background-image":"url("+a+")"})},buildoverlays:function(a,
b,c,e){var d=this;if(a.isVideo){var g=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c),k=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c),j=f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).bind("click touchstart",function(){d.options.clickToPlayPause&&e.paused&&e.play()});e.addEventListener("play",function(){j.hide();
g.hide();b.find(".mejs-time-buffering").hide();k.hide()},false);e.addEventListener("playing",function(){j.hide();g.hide();b.find(".mejs-time-buffering").hide();k.hide()},false);e.addEventListener("seeking",function(){g.show();b.find(".mejs-time-buffering").show()},false);e.addEventListener("seeked",function(){g.hide();b.find(".mejs-time-buffering").hide()},false);e.addEventListener("pause",function(){mejs.MediaFeatures.isiPhone||j.show()},false);e.addEventListener("waiting",function(){g.show();b.find(".mejs-time-buffering").show()},
false);e.addEventListener("loadeddata",function(){g.show();b.find(".mejs-time-buffering").show()},false);e.addEventListener("canplay",function(){g.hide();b.find(".mejs-time-buffering").hide()},false);e.addEventListener("error",function(){g.hide();b.find(".mejs-time-buffering").hide();k.show();k.find("mejs-overlay-error").html("Error loading this resource")},false)}},buildkeyboard:function(a,b,c,e){this.globalBind("keydown",function(d){if(a.hasFocus&&a.options.enableKeyboard)for(var g=0,k=a.options.keyActions.length;g<
k;g++)for(var j=a.options.keyActions[g],m=0,q=j.keys.length;m<q;m++)if(d.keyCode==j.keys[m]){d.preventDefault();j.action(a,e,d.keyCode);return false}return true});this.globalBind("click",function(d){a.hasFocus=f(d.target).closest(".mejs-container").length!=0})},findTracks:function(){var a=this,b=a.$media.find("track");a.tracks=[];b.each(function(c,e){e=f(e);a.tracks.push({srclang:e.attr("srclang")?e.attr("srclang").toLowerCase():"",src:e.attr("src"),kind:e.attr("kind"),label:e.attr("label")||"",entries:[],
isLoaded:false})})},changeSkin:function(a){this.container[0].className="mejs-container "+a;this.setPlayerSize(this.width,this.height);this.setControlsSize()},play:function(){this.load();this.media.play()},pause:function(){try{this.media.pause()}catch(a){}},load:function(){this.isLoaded||this.media.load();this.isLoaded=true},setMuted:function(a){this.media.setMuted(a)},setCurrentTime:function(a){this.media.setCurrentTime(a)},getCurrentTime:function(){return this.media.currentTime},setVolume:function(a){this.media.setVolume(a)},
getVolume:function(){return this.media.volume},setSrc:function(a){this.media.setSrc(a)},remove:function(){var a,b;for(a in this.options.features){b=this.options.features[a];if(this["clean"+b])try{this["clean"+b](this)}catch(c){}}if(this.isDynamic)this.$node.insertBefore(this.container);else{this.$media.prop("controls",true);this.$node.clone().show().insertBefore(this.container);this.$node.remove()}this.media.pluginType!=="native"&&this.media.remove();delete mejs.players[this.id];typeof this.container==
"object"&&this.container.remove();this.globalUnbind();delete this.node.player}};(function(){function a(c,e){var d={d:[],w:[]};f.each((c||"").split(" "),function(g,k){var j=k+"."+e;if(j.indexOf(".")===0){d.d.push(j);d.w.push(j)}else d[b.test(k)?"w":"d"].push(j)});d.d=d.d.join(" ");d.w=d.w.join(" ");return d}var b=/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;mejs.MediaElementPlayer.prototype.globalBind=function(c,e,d){c=a(c,this.id);
c.d&&f(document).bind(c.d,e,d);c.w&&f(window).bind(c.w,e,d)};mejs.MediaElementPlayer.prototype.globalUnbind=function(c,e){c=a(c,this.id);c.d&&f(document).unbind(c.d,e);c.w&&f(window).unbind(c.w,e)}})();if(typeof jQuery!="undefined")jQuery.fn.mediaelementplayer=function(a){a===false?this.each(function(){var b=jQuery(this).data("mediaelementplayer");b&&b.remove();jQuery(this).removeData("mediaelementplayer")}):this.each(function(){jQuery(this).data("mediaelementplayer",new mejs.MediaElementPlayer(this,
a))});return this};f(document).ready(function(){f(".mejs-player").mediaelementplayer()});window.MediaElementPlayer=mejs.MediaElementPlayer})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{playpauseText:mejs.i18n.t("Play/Pause")});f.extend(MediaElementPlayer.prototype,{buildplaypause:function(a,b,c,e){var d=f('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="'+this.id+'" title="'+this.options.playpauseText+'" aria-label="'+this.options.playpauseText+'"></button></div>').appendTo(b).click(function(g){g.preventDefault();e.paused?e.play():e.pause();return false});e.addEventListener("play",function(){d.removeClass("mejs-play").addClass("mejs-pause")},
false);e.addEventListener("playing",function(){d.removeClass("mejs-play").addClass("mejs-pause")},false);e.addEventListener("pause",function(){d.removeClass("mejs-pause").addClass("mejs-play")},false);e.addEventListener("paused",function(){d.removeClass("mejs-pause").addClass("mejs-play")},false)}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{stopText:"Stop"});f.extend(MediaElementPlayer.prototype,{buildstop:function(a,b,c,e){f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="'+this.id+'" title="'+this.options.stopText+'" aria-label="'+this.options.stopText+'"></button></div>').appendTo(b).click(function(){e.paused||e.pause();if(e.currentTime>0){e.setCurrentTime(0);e.pause();b.find(".mejs-time-current").width("0px");b.find(".mejs-time-handle").css("left",
"0px");b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));c.find(".mejs-poster").show()}})}})})(mejs.$);
(function(f){f.extend(MediaElementPlayer.prototype,{buildprogress:function(a,b,c,e){f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);b.find(".mejs-time-buffering").hide();var d=
this,g=b.find(".mejs-time-total");c=b.find(".mejs-time-loaded");var k=b.find(".mejs-time-current"),j=b.find(".mejs-time-handle"),m=b.find(".mejs-time-float"),q=b.find(".mejs-time-float-current"),p=function(h){h=h.originalEvent.changedTouches?h.originalEvent.changedTouches[0].pageX:h.pageX;var l=g.offset(),r=g.outerWidth(true),n=0,o=n=0;if(e.duration){if(h<l.left)h=l.left;else if(h>r+l.left)h=r+l.left;o=h-l.left;n=o/r;n=n<=0.02?0:n*e.duration;t&&n!==e.currentTime&&e.setCurrentTime(n);if(!mejs.MediaFeatures.hasTouch){m.css("left",
o);q.html(mejs.Utility.secondsToTimeCode(n));m.show()}}},t=false;g.bind("mousedown touchstart",function(h){if(h.which===1||h.which===0){t=true;p(h);d.globalBind("mousemove.dur touchmove.dur",function(l){p(l)});d.globalBind("mouseup.dur touchend.dur",function(){t=false;m.hide();d.globalUnbind(".dur")});return false}}).bind("mouseenter",function(){d.globalBind("mousemove.dur",function(h){p(h)});mejs.MediaFeatures.hasTouch||m.show()}).bind("mouseleave",function(){if(!t){d.globalUnbind(".dur");m.hide()}});
e.addEventListener("progress",function(h){a.setProgressRail(h);a.setCurrentRail(h)},false);e.addEventListener("timeupdate",function(h){a.setProgressRail(h);a.setCurrentRail(h)},false);d.loaded=c;d.total=g;d.current=k;d.handle=j},setProgressRail:function(a){var b=a!=undefined?a.target:this.media,c=null;if(b&&b.buffered&&b.buffered.length>0&&b.buffered.end&&b.duration)c=b.buffered.end(0)/b.duration;else if(b&&b.bytesTotal!=undefined&&b.bytesTotal>0&&b.bufferedBytes!=undefined)c=b.bufferedBytes/b.bytesTotal;
else if(a&&a.lengthComputable&&a.total!=0)c=a.loaded/a.total;if(c!==null){c=Math.min(1,Math.max(0,c));this.loaded&&this.total&&this.loaded.width(this.total.width()*c)}},setCurrentRail:function(){if(this.media.currentTime!=undefined&&this.media.duration)if(this.total&&this.handle){var a=Math.round(this.total.width()*this.media.currentTime/this.media.duration),b=a-Math.round(this.handle.outerWidth(true)/2);this.current.width(a);this.handle.css("left",b)}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{duration:-1,timeAndDurationSeparator:"<span> | </span>"});f.extend(MediaElementPlayer.prototype,{buildcurrent:function(a,b,c,e){f('<div class="mejs-time"><span class="mejs-currenttime">'+(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00")+"</span></div>").appendTo(b);this.currenttime=this.controls.find(".mejs-currenttime");e.addEventListener("timeupdate",function(){a.updateCurrent()},false)},buildduration:function(a,b,
c,e){if(b.children().last().find(".mejs-currenttime").length>0)f(this.options.timeAndDurationSeparator+'<span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span>").appendTo(b.find(".mejs-time"));else{b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span></div>").appendTo(b)}this.durationD=this.controls.find(".mejs-duration");e.addEventListener("timeupdate",function(){a.updateDuration()},
false)},updateCurrent:function(){if(this.currenttime)this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25))},updateDuration:function(){this.container.toggleClass("mejs-long-video",this.media.duration>3600);if(this.durationD&&(this.options.duration>0||this.media.duration))this.durationD.html(mejs.Utility.secondsToTimeCode(this.options.duration>0?this.options.duration:
this.media.duration,this.options.alwaysShowHours,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25))}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{muteText:mejs.i18n.t("Mute Toggle"),hideVolumeOnTouchDevices:true,audioVolume:"horizontal",videoVolume:"vertical"});f.extend(MediaElementPlayer.prototype,{buildvolume:function(a,b,c,e){if(!((mejs.MediaFeatures.isAndroid||mejs.MediaFeatures.isiOS)&&this.options.hideVolumeOnTouchDevices)){var d=this,g=d.isVideo?d.options.videoVolume:d.options.audioVolume,k=g=="horizontal"?f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+
d.id+'" title="'+d.options.muteText+'" aria-label="'+d.options.muteText+'"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b):f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+d.id+'" title="'+d.options.muteText+'" aria-label="'+d.options.muteText+'"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),
j=d.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),m=d.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),q=d.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),p=d.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),t=function(n,o){if(!j.is(":visible")&&typeof o=="undefined"){j.show();t(n,true);j.hide()}else{n=Math.max(0,n);n=Math.min(n,1);n==0?k.removeClass("mejs-mute").addClass("mejs-unmute"):k.removeClass("mejs-unmute").addClass("mejs-mute");
if(g=="vertical"){var s=m.height(),u=m.position(),v=s-s*n;p.css("top",Math.round(u.top+v-p.height()/2));q.height(s-v);q.css("top",u.top+v)}else{s=m.width();u=m.position();s=s*n;p.css("left",Math.round(u.left+s-p.width()/2));q.width(Math.round(s))}}},h=function(n){var o=null,s=m.offset();if(g=="vertical"){o=m.height();parseInt(m.css("top").replace(/px/,""),10);o=(o-(n.pageY-s.top))/o;if(s.top==0||s.left==0)return}else{o=m.width();o=(n.pageX-s.left)/o}o=Math.max(0,o);o=Math.min(o,1);t(o);o==0?e.setMuted(true):
e.setMuted(false);e.setVolume(o)},l=false,r=false;k.hover(function(){j.show();r=true},function(){r=false;!l&&g=="vertical"&&j.hide()});j.bind("mouseover",function(){r=true}).bind("mousedown",function(n){h(n);d.globalBind("mousemove.vol",function(o){h(o)});d.globalBind("mouseup.vol",function(){l=false;d.globalUnbind(".vol");!r&&g=="vertical"&&j.hide()});l=true;return false});k.find("button").click(function(){e.setMuted(!e.muted)});e.addEventListener("volumechange",function(){if(!l)if(e.muted){t(0);
k.removeClass("mejs-mute").addClass("mejs-unmute")}else{t(e.volume);k.removeClass("mejs-unmute").addClass("mejs-mute")}},false);if(d.container.is(":visible")){t(a.options.startVolume);a.options.startVolume===0&&e.setMuted(true);e.pluginType==="native"&&e.setVolume(a.options.startVolume)}}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{usePluginFullScreen:true,newWindowCallback:function(){return""},fullscreenText:mejs.i18n.t("Fullscreen")});f.extend(MediaElementPlayer.prototype,{isFullScreen:false,isNativeFullScreen:false,isInIframe:false,buildfullscreen:function(a,b,c,e){if(a.isVideo){a.isInIframe=window.location!=window.parent.location;if(mejs.MediaFeatures.hasTrueNativeFullScreen){c=function(){if(a.isFullScreen)if(mejs.MediaFeatures.isFullScreen()){a.isNativeFullScreen=true;a.setControlsSize()}else{a.isNativeFullScreen=
false;a.exitFullScreen()}};mejs.MediaFeatures.hasMozNativeFullScreen?a.globalBind(mejs.MediaFeatures.fullScreenEventName,c):a.container.bind(mejs.MediaFeatures.fullScreenEventName,c)}var d=this,g=f('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="'+d.id+'" title="'+d.options.fullscreenText+'" aria-label="'+d.options.fullscreenText+'"></button></div>').appendTo(b);if(d.media.pluginType==="native"||!d.options.usePluginFullScreen&&!mejs.MediaFeatures.isFirefox)g.click(function(){mejs.MediaFeatures.hasTrueNativeFullScreen&&
mejs.MediaFeatures.isFullScreen()||a.isFullScreen?a.exitFullScreen():a.enterFullScreen()});else{var k=null;if(function(){var h=document.createElement("x"),l=document.documentElement,r=window.getComputedStyle;if(!("pointerEvents"in h.style))return false;h.style.pointerEvents="auto";h.style.pointerEvents="x";l.appendChild(h);r=r&&r(h,"").pointerEvents==="auto";l.removeChild(h);return!!r}()&&!mejs.MediaFeatures.isOpera){var j=false,m=function(){if(j){for(var h in q)q[h].hide();g.css("pointer-events",
"");d.controls.css("pointer-events","");d.media.removeEventListener("click",d.clickToPlayPauseCallback);j=false}},q={};b=["top","left","right","bottom"];var p,t=function(){var h=g.offset().left-d.container.offset().left,l=g.offset().top-d.container.offset().top,r=g.outerWidth(true),n=g.outerHeight(true),o=d.container.width(),s=d.container.height();for(p in q)q[p].css({position:"absolute",top:0,left:0});q.top.width(o).height(l);q.left.width(h).height(n).css({top:l});q.right.width(o-h-r).height(n).css({top:l,
left:h+r});q.bottom.width(o).height(s-n-l).css({top:l+n})};d.globalBind("resize",function(){t()});p=0;for(c=b.length;p<c;p++)q[b[p]]=f('<div class="mejs-fullscreen-hover" />').appendTo(d.container).mouseover(m).hide();g.on("mouseover",function(){if(!d.isFullScreen){var h=g.offset(),l=a.container.offset();e.positionFullscreenButton(h.left-l.left,h.top-l.top,false);g.css("pointer-events","none");d.controls.css("pointer-events","none");d.media.addEventListener("click",d.clickToPlayPauseCallback);for(p in q)q[p].show();
t();j=true}});e.addEventListener("fullscreenchange",function(){d.isFullScreen=!d.isFullScreen;d.isFullScreen?d.media.removeEventListener("click",d.clickToPlayPauseCallback):d.media.addEventListener("click",d.clickToPlayPauseCallback);m()});d.globalBind("mousemove",function(h){if(j){var l=g.offset();if(h.pageY<l.top||h.pageY>l.top+g.outerHeight(true)||h.pageX<l.left||h.pageX>l.left+g.outerWidth(true)){g.css("pointer-events","");d.controls.css("pointer-events","");j=false}}})}else g.on("mouseover",
function(){if(k!==null){clearTimeout(k);delete k}var h=g.offset(),l=a.container.offset();e.positionFullscreenButton(h.left-l.left,h.top-l.top,true)}).on("mouseout",function(){if(k!==null){clearTimeout(k);delete k}k=setTimeout(function(){e.hideFullscreenButton()},1500)})}a.fullscreenBtn=g;d.globalBind("keydown",function(h){if((mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||d.isFullScreen)&&h.keyCode==27)a.exitFullScreen()})}},cleanfullscreen:function(a){a.exitFullScreen()},
containerSizeTimeout:null,enterFullScreen:function(){var a=this;if(!(a.media.pluginType!=="native"&&(mejs.MediaFeatures.isFirefox||a.options.usePluginFullScreen))){f(document.documentElement).addClass("mejs-fullscreen");normalHeight=a.container.height();normalWidth=a.container.width();if(a.media.pluginType==="native")if(mejs.MediaFeatures.hasTrueNativeFullScreen){mejs.MediaFeatures.requestFullScreen(a.container[0]);a.isInIframe&&setTimeout(function c(){if(a.isNativeFullScreen){var e=(window.devicePixelRatio||
1)*f(window).width(),d=screen.width;Math.abs(d-e)>d*0.0020?a.exitFullScreen():setTimeout(c,500)}},500)}else if(mejs.MediaFeatures.hasSemiNativeFullScreen){a.media.webkitEnterFullscreen();return}if(a.isInIframe){var b=a.options.newWindowCallback(this);if(b!=="")if(mejs.MediaFeatures.hasTrueNativeFullScreen)setTimeout(function(){if(!a.isNativeFullScreen){a.pause();window.open(b,a.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no")}},
250);else{a.pause();window.open(b,a.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no");return}}a.container.addClass("mejs-container-fullscreen").width("100%").height("100%");a.containerSizeTimeout=setTimeout(function(){a.container.css({width:"100%",height:"100%"});a.setControlsSize()},500);if(a.media.pluginType==="native")a.$media.width("100%").height("100%");else{a.container.find(".mejs-shim").width("100%").height("100%");
a.media.setVideoSize(f(window).width(),f(window).height())}a.layers.children("div").width("100%").height("100%");a.fullscreenBtn&&a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");a.setControlsSize();a.isFullScreen=true}},exitFullScreen:function(){clearTimeout(this.containerSizeTimeout);if(this.media.pluginType!=="native"&&mejs.MediaFeatures.isFirefox)this.media.setFullscreen(false);else{if(mejs.MediaFeatures.hasTrueNativeFullScreen&&(mejs.MediaFeatures.isFullScreen()||
this.isFullScreen))mejs.MediaFeatures.cancelFullScreen();f(document.documentElement).removeClass("mejs-fullscreen");this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);if(this.media.pluginType==="native")this.$media.width(normalWidth).height(normalHeight);else{this.container.find(".mejs-shim").width(normalWidth).height(normalHeight);this.media.setVideoSize(normalWidth,normalHeight)}this.layers.children("div").width(normalWidth).height(normalHeight);this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
this.setControlsSize();this.isFullScreen=false}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{startLanguage:"",tracksText:mejs.i18n.t("Captions/Subtitles"),hideCaptionsButtonWhenEmpty:true,toggleCaptionsButtonWhenOnlyOne:false,slidesSelector:""});f.extend(MediaElementPlayer.prototype,{hasChapters:false,buildtracks:function(a,b,c,e){if(a.tracks.length!=0){var d;if(this.domNode.textTracks)for(d=this.domNode.textTracks.length-1;d>=0;d--)this.domNode.textTracks[d].mode="hidden";a.chapters=f('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();a.captions=
f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();a.captionsText=a.captions.find(".mejs-captions-text");a.captionsButton=f('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="'+this.id+'" title="'+this.options.tracksText+'" aria-label="'+this.options.tracksText+'"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="'+
a.id+'_captions" id="'+a.id+'_captions_none" value="none" checked="checked" /><label for="'+a.id+'_captions_none">'+mejs.i18n.t("None")+"</label></li></ul></div></div>").appendTo(b);for(d=b=0;d<a.tracks.length;d++)a.tracks[d].kind=="subtitles"&&b++;this.options.toggleCaptionsButtonWhenOnlyOne&&b==1?a.captionsButton.on("click",function(){a.setTrack(a.selectedTrack==null?a.tracks[0].srclang:"none")}):a.captionsButton.hover(function(){f(this).find(".mejs-captions-selector").css("visibility","visible")},
function(){f(this).find(".mejs-captions-selector").css("visibility","hidden")}).on("click","input[type=radio]",function(){lang=this.value;a.setTrack(lang)});a.options.alwaysShowControls?a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover"):a.container.bind("controlsshown",function(){a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")}).bind("controlshidden",function(){e.paused||a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")});
a.trackToLoad=-1;a.selectedTrack=null;a.isLoadingTrack=false;for(d=0;d<a.tracks.length;d++)a.tracks[d].kind=="subtitles"&&a.addTrackButton(a.tracks[d].srclang,a.tracks[d].label);a.loadNextTrack();e.addEventListener("timeupdate",function(){a.displayCaptions()},false);if(a.options.slidesSelector!=""){a.slidesContainer=f(a.options.slidesSelector);e.addEventListener("timeupdate",function(){a.displaySlides()},false)}e.addEventListener("loadedmetadata",function(){a.displayChapters()},false);a.container.hover(function(){if(a.hasChapters){a.chapters.css("visibility",
"visible");a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight())}},function(){a.hasChapters&&!e.paused&&a.chapters.fadeOut(200,function(){f(this).css("visibility","hidden");f(this).css("display","block")})});a.node.getAttribute("autoplay")!==null&&a.chapters.css("visibility","hidden")}},setTrack:function(a){var b;if(a=="none"){this.selectedTrack=null;this.captionsButton.removeClass("mejs-captions-enabled")}else for(b=0;b<this.tracks.length;b++)if(this.tracks[b].srclang==a){this.selectedTrack==
null&&this.captionsButton.addClass("mejs-captions-enabled");this.selectedTrack=this.tracks[b];this.captions.attr("lang",this.selectedTrack.srclang);this.displayCaptions();break}},loadNextTrack:function(){this.trackToLoad++;if(this.trackToLoad<this.tracks.length){this.isLoadingTrack=true;this.loadTrack(this.trackToLoad)}else{this.isLoadingTrack=false;this.checkForTracks()}},loadTrack:function(a){var b=this,c=b.tracks[a];f.ajax({url:c.src,dataType:"text",success:function(e){c.entries=typeof e=="string"&&
/<tt\s+xml/ig.exec(e)?mejs.TrackFormatParser.dfxp.parse(e):mejs.TrackFormatParser.webvvt.parse(e);c.isLoaded=true;b.enableTrackButton(c.srclang,c.label);b.loadNextTrack();c.kind=="chapters"&&b.media.addEventListener("play",function(){b.media.duration>0&&b.displayChapters(c)},false);c.kind=="slides"&&b.setupSlides(c)},error:function(){b.loadNextTrack()}})},enableTrackButton:function(a,b){if(b==="")b=mejs.language.codes[a]||a;this.captionsButton.find("input[value="+a+"]").prop("disabled",false).siblings("label").html(b);
this.options.startLanguage==a&&f("#"+this.id+"_captions_"+a).click();this.adjustLanguageBox()},addTrackButton:function(a,b){if(b==="")b=mejs.language.codes[a]||a;this.captionsButton.find("ul").append(f('<li><input type="radio" name="'+this.id+'_captions" id="'+this.id+"_captions_"+a+'" value="'+a+'" disabled="disabled" /><label for="'+this.id+"_captions_"+a+'">'+b+" (loading)</label></li>"));this.adjustLanguageBox();this.container.find(".mejs-captions-translations option[value="+a+"]").remove()},
adjustLanguageBox:function(){this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true)+this.captionsButton.find(".mejs-captions-translations").outerHeight(true))},checkForTracks:function(){var a=false;if(this.options.hideCaptionsButtonWhenEmpty){for(i=0;i<this.tracks.length;i++)if(this.tracks[i].kind=="subtitles"){a=true;break}if(!a){this.captionsButton.hide();this.setControlsSize()}}},displayCaptions:function(){if(typeof this.tracks!=
"undefined"){var a,b=this.selectedTrack;if(b!=null&&b.isLoaded)for(a=0;a<b.entries.times.length;a++)if(this.media.currentTime>=b.entries.times[a].start&&this.media.currentTime<=b.entries.times[a].stop){this.captionsText.html(b.entries.text[a]);this.captions.show().height(0);return}this.captions.hide()}},setupSlides:function(a){this.slides=a;this.slides.entries.imgs=[this.slides.entries.text.length];this.showSlide(0)},showSlide:function(a){if(!(typeof this.tracks=="undefined"||typeof this.slidesContainer==
"undefined")){var b=this,c=b.slides.entries.text[a],e=b.slides.entries.imgs[a];if(typeof e=="undefined"||typeof e.fadeIn=="undefined")b.slides.entries.imgs[a]=e=f('<img src="'+c+'">').on("load",function(){e.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()});else!e.is(":visible")&&!e.is(":animated")&&e.fadeIn().siblings(":visible").fadeOut()}},displaySlides:function(){if(typeof this.slides!="undefined"){var a=this.slides,b;for(b=0;b<a.entries.times.length;b++)if(this.media.currentTime>=
a.entries.times[b].start&&this.media.currentTime<=a.entries.times[b].stop){this.showSlide(b);break}}},displayChapters:function(){var a;for(a=0;a<this.tracks.length;a++)if(this.tracks[a].kind=="chapters"&&this.tracks[a].isLoaded){this.drawChapters(this.tracks[a]);this.hasChapters=true;break}},drawChapters:function(a){var b=this,c,e,d=e=0;b.chapters.empty();for(c=0;c<a.entries.times.length;c++){e=a.entries.times[c].stop-a.entries.times[c].start;e=Math.floor(e/b.media.duration*100);if(e+d>100||c==a.entries.times.length-
1&&e+d<100)e=100-d;b.chapters.append(f('<div class="mejs-chapter" rel="'+a.entries.times[c].start+'" style="left: '+d.toString()+"%;width: "+e.toString()+'%;"><div class="mejs-chapter-block'+(c==a.entries.times.length-1?" mejs-chapter-block-last":"")+'"><span class="ch-title">'+a.entries.text[c]+'</span><span class="ch-time">'+mejs.Utility.secondsToTimeCode(a.entries.times[c].start)+"&ndash;"+mejs.Utility.secondsToTimeCode(a.entries.times[c].stop)+"</span></div></div>"));d+=e}b.chapters.find("div.mejs-chapter").click(function(){b.media.setCurrentTime(parseFloat(f(this).attr("rel")));
b.media.paused&&b.media.play()});b.chapters.show()}});mejs.language={codes:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",be:"Belarusian",bg:"Bulgarian",ca:"Catalan",zh:"Chinese","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",et:"Estonian",tl:"Filipino",fi:"Finnish",fr:"French",gl:"Galician",de:"German",el:"Greek",ht:"Haitian Creole",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",
ko:"Korean",lv:"Latvian",lt:"Lithuanian",mk:"Macedonian",ms:"Malay",mt:"Maltese",no:"Norwegian",fa:"Persian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",tl:"Tagalog",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese",cy:"Welsh",yi:"Yiddish"}};mejs.TrackFormatParser={webvvt:{pattern_identifier:/^([a-zA-z]+-)?[0-9]+$/,pattern_timecode:/^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
parse:function(a){var b=0;a=mejs.TrackFormatParser.split2(a,/\r?\n/);for(var c={text:[],times:[]},e,d;b<a.length;b++)if(this.pattern_identifier.exec(a[b])){b++;if((e=this.pattern_timecode.exec(a[b]))&&b<a.length){b++;d=a[b];for(b++;a[b]!==""&&b<a.length;){d=d+"\n"+a[b];b++}d=f.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,"<a href='$1' target='_blank'>$1</a>");c.text.push(d);c.times.push({start:mejs.Utility.convertSMPTEtoSeconds(e[1])==0?0.2:mejs.Utility.convertSMPTEtoSeconds(e[1]),
stop:mejs.Utility.convertSMPTEtoSeconds(e[3]),settings:e[5]})}}return c}},dfxp:{parse:function(a){a=f(a).filter("tt");var b=0;b=a.children("div").eq(0);var c=b.find("p");b=a.find("#"+b.attr("style"));var e,d;a={text:[],times:[]};if(b.length){d=b.removeAttr("id").get(0).attributes;if(d.length){e={};for(b=0;b<d.length;b++)e[d[b].name.split(":")[1]]=d[b].value}}for(b=0;b<c.length;b++){var g;d={start:null,stop:null,style:null};if(c.eq(b).attr("begin"))d.start=mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("begin"));
if(!d.start&&c.eq(b-1).attr("end"))d.start=mejs.Utility.convertSMPTEtoSeconds(c.eq(b-1).attr("end"));if(c.eq(b).attr("end"))d.stop=mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("end"));if(!d.stop&&c.eq(b+1).attr("begin"))d.stop=mejs.Utility.convertSMPTEtoSeconds(c.eq(b+1).attr("begin"));if(e){g="";for(var k in e)g+=k+":"+e[k]+";"}if(g)d.style=g;if(d.start==0)d.start=0.2;a.times.push(d);d=f.trim(c.eq(b).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
"<a href='$1' target='_blank'>$1</a>");a.text.push(d);if(a.times.start==0)a.times.start=2}return a}},split2:function(a,b){return a.split(b)}};if("x\n\ny".split(/\n/gi).length!=3)mejs.TrackFormatParser.split2=function(a,b){var c=[],e="",d;for(d=0;d<a.length;d++){e+=a.substring(d,d+1);if(b.test(e)){c.push(e.replace(b,""));e=""}}c.push(e);return c}})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{contextMenuItems:[{render:function(a){if(typeof a.enterFullScreen=="undefined")return null;return a.isFullScreen?mejs.i18n.t("Turn off Fullscreen"):mejs.i18n.t("Go Fullscreen")},click:function(a){a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}},{render:function(a){return a.media.muted?mejs.i18n.t("Unmute"):mejs.i18n.t("Mute")},click:function(a){a.media.muted?a.setMuted(false):a.setMuted(true)}},{isSeparator:true},{render:function(){return mejs.i18n.t("Download Video")},
click:function(a){window.location.href=a.media.currentSrc}}]});f.extend(MediaElementPlayer.prototype,{buildcontextmenu:function(a){a.contextMenu=f('<div class="mejs-contextmenu"></div>').appendTo(f("body")).hide();a.container.bind("contextmenu",function(b){if(a.isContextMenuEnabled){b.preventDefault();a.renderContextMenu(b.clientX-1,b.clientY-1);return false}});a.container.bind("click",function(){a.contextMenu.hide()});a.contextMenu.bind("mouseleave",function(){a.startContextMenuTimer()})},cleancontextmenu:function(a){a.contextMenu.remove()},
isContextMenuEnabled:true,enableContextMenu:function(){this.isContextMenuEnabled=true},disableContextMenu:function(){this.isContextMenuEnabled=false},contextMenuTimeout:null,startContextMenuTimer:function(){var a=this;a.killContextMenuTimer();a.contextMenuTimer=setTimeout(function(){a.hideContextMenu();a.killContextMenuTimer()},750)},killContextMenuTimer:function(){var a=this.contextMenuTimer;if(a!=null){clearTimeout(a);delete a}},hideContextMenu:function(){this.contextMenu.hide()},renderContextMenu:function(a,
b){for(var c=this,e="",d=c.options.contextMenuItems,g=0,k=d.length;g<k;g++)if(d[g].isSeparator)e+='<div class="mejs-contextmenu-separator"></div>';else{var j=d[g].render(c);if(j!=null)e+='<div class="mejs-contextmenu-item" data-itemindex="'+g+'" id="element-'+Math.random()*1E6+'">'+j+"</div>"}c.contextMenu.empty().append(f(e)).css({top:b,left:a}).show();c.contextMenu.find(".mejs-contextmenu-item").each(function(){var m=f(this),q=parseInt(m.data("itemindex"),10),p=c.options.contextMenuItems[q];typeof p.show!=
"undefined"&&p.show(m,c);m.click(function(){typeof p.click!="undefined"&&p.click(c);c.contextMenu.hide()})});setTimeout(function(){c.killControlsTimer("rev3")},100)}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{postrollCloseText:mejs.i18n.t("Close")});f.extend(MediaElementPlayer.prototype,{buildpostroll:function(a,b,c){var e=this.container.find('link[rel="postroll"]').attr("href");if(typeof e!=="undefined"){a.postroll=f('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">'+this.options.postrollCloseText+'</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(c).hide();this.media.addEventListener("ended",
function(){f.ajax({dataType:"html",url:e,success:function(d){c.find(".mejs-postroll-layer-content").html(d)}});a.postroll.show()},false)}}})})(mejs.$);


/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */
/*! Customized for widget framework
 * - to work with jquery.lazyload
 * - disabled initialization on document ready and widget resize */

(function (w) {

  // Enable strict mode
  "use strict";

  function updateImageUrl(picImg, pImgSrc) {
    if (picImg.getAttribute("class").indexOf("lazy") >= 0) {
      picImg.setAttribute("data-original", pImgSrc);
    }
    else if (picImg.getAttribute("class").indexOf("placeholder") >= 0) {
      picImg.src = pImgSrc;
    }
    else {
      if (picImg.src.length == 0) {
        picImg.src = pImgSrc;
      }
      else {
        var loaderImg = document.createElement("img");
        //caring for Microsoft's model of event registration
        if (loaderImg.attachEvent) {
          loaderImg.attachEvent('onload', function () {
            picImg.src = loaderImg.src;
          });
        }
        else {
          loaderImg.addEventListener('load', function () {
            picImg.src = loaderImg.src;
          }, false);
        }
        loaderImg.src = pImgSrc;
      }
    }
  }

  w.picturefill = function () {
    var ps = w.document.getElementsByTagName("span");

    // Loop the pictures
    for (var i = 0, il = ps.length; i < il; i++) {
      if (ps[ i ].getAttribute("data-picture") !== null) {

        var sources = ps[ i ].getElementsByTagName("span"),
            matches = [];

        // See if which sources match
        for (var j = 0, jl = sources.length; j < jl; j++) {
          var media = sources[ j ].getAttribute("data-media");
          // if there's no media specified, OR w.matchMedia is supported
          if (!media || ( w.matchMedia && w.matchMedia(media).matches )) {
            matches.push(sources[ j ]);
          }
        }

        // Find any existing img element in the picture element
        var picImg = ps[ i ].getElementsByTagName("img")[ 0 ];

        if (matches.length) {
          var matchedEl = matches.pop();
          if (!picImg || picImg.parentNode.nodeName === "NOSCRIPT") {
            picImg = w.document.createElement("img");
            picImg.alt = ps[ i ].getAttribute("data-alt");
          }
          else if (matchedEl === picImg.parentNode) {
            // Skip further actions if the correct image is already in place
            continue;
          }

          updateImageUrl(picImg, matchedEl.getAttribute("data-src"));
          matchedEl.appendChild(picImg);
          picImg.removeAttribute("width");
          picImg.removeAttribute("height");
        }
        else if (picImg) {
          picImg.parentNode.removeChild(picImg);
        }
      }
    }
  };
}(this));
(function ($) {
  $.fn.adaptImage = function (pOptions) {
    var options = pOptions ? pOptions : {};
    options.debug = false;
    function debug(pMsg) {
      if (options.debug) {
        console.log(pMsg);
      }
    }

    //TODO: should it be configurable feature of the plugin?
    var sizes = imageSizes;
    debug(sizes.length + " image sizes were found: " + sizes);
    var imgSelector = "img.adaptive";
    var holder = $(this);

    debug("Adapting visible items: :" + $(imgSelector + ":visible", holder).length);
    $(imgSelector + ":visible", holder).each(function () {
      var variant = $(this).attr('data-variant');
      var template = $(this).attr('data-src-template');
      if (template == null) {
        return;
      }
      var elementWidth = $(this).width();
      debug("Found img: " + elementWidth + "px::" + $(this).attr('src'));

      var selected = Math.max.apply(null, sizes);
      for (var i = 0; i < sizes.length; i++) {
        if (elementWidth <= sizes[i]) {
          selected = sizes[i];
          break;
        }
      }

      var prevWidth = $(this).attr('data-selected-width');
      if (prevWidth && prevWidth >= selected) {
        debug("Available image version width is higher than selected one. So, not lazy loading image again");
        return;
      }

      debug("..adapting using : " + selected + "px::" + variant + "::" + template);
      var adaptedSrc = template.replace("binary", "alternates").replace("thumbnail", variant + "_" + selected);

      if ($(this).attr('class').indexOf('lazy') >= 0) {
        debug("..Adapted lazy img src " + adaptedSrc);
        var proxyWidth = $(this).attr('data-proxy-width');
        if (proxyWidth >= selected) {
          $(this).attr('data-original', $(this).attr('data-proxy-image'));
          $(this).attr('data-selected-width', proxyWidth);
        }
        else {
          $(this).attr('data-original', adaptedSrc);
          $(this).attr('data-selected-width', selected);
        }
      }
      // placeholder or not
      else {
        $(this).attr('src', adaptedSrc);
        debug("..Adapted img src " + adaptedSrc);
      }
    });

    if (options.proxyPreload) {
      debug("Proxy loading hidden items: :" + $(imgSelector + ":hidden", holder).length);
      $(imgSelector + ":hidden", holder).each(function () {
        var proxyImageSrc = $(this).attr('data-proxy-image');
        debug("proxy: " + proxyImageSrc)
        if (proxyImageSrc) {
          $(this).attr('src', proxyImageSrc);
        }
      });
    }
    return holder;
  };
}(jQuery));

$(function () {
  $(document).on('pageContentReady', function (event, data) {
    if ('undefined' != typeof twttr) {
      twttr.widgets.load(data);
    }
    if ('undefined' != typeof FB) {
      FB.XFBML.parse();
    }
    if ('undefined' != typeof gapi) {
      gapi.plusone.go(data);
      gapi.plus.go(data);
    }
  });
});
function bindWholeTeaserLink(container) {
  $(".link-block", container).click(function() {
    var blockLink = $("a.block-link:first", $(this)); //making sure we select only the first hyperlink
    if (blockLink.length) {
      if (blockLink[0].click) {
        blockLink[0].click(); //must trigger DOM click(), jQuery click() considers event handlers, but ignores href
      }
      else {
        console.log('event not available for the element, dispatching event...');
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent('click', true, true);
        blockLink[0].dispatchEvent(clickEvent);
      }
    }
    else {
      console.log("Could not find the link in the block");
    }
    return false;
  });
  $(".link-block a", container).click(function(event) {
    event.stopPropagation();
  });
}

$(function() {
  bindWholeTeaserLink($(document));
});

//Handle lazy loading.
$(document).on('pageContentReady', function (event, content) {
  bindWholeTeaserLink($(content));
});

var WFClient = new function () {
  var clientType;
  this.getType = function () {
    if (clientType == null) {
      resolveClientType();
    }
    return clientType;
  }

  function resolveClientType() {
    for (var type in WFClientTypeDef) {
      if (window.matchMedia(WFClientTypeDef[type]).matches) {
        clientType = type;
      }
    }
  }

  $(function () {
    resolveClientType();
  });

  $(window).resize(function () {
    resolveClientType();
  });
}

/*Binds to window resize event and invoke 'resizeEnd'
when the user has finished dragging resize handle of the browser*/
$(function(){
  var timer;
  $(window).bind('resize', function(){
    timer && clearTimeout(timer);
    timer = setTimeout(function() {
      $(this).trigger('resizeEnd');
    }, 100);
  });
});
var WFImager = new function() {
  var debugEnabled = false;

  var lazyImageSettings = {
    threshold: 200,
    failure_limit: 10
  };
  var adaptiveImageSettings = {
    proxyPreload: true
  };

  var adaptiveUpdater = {
    update : function (container) {
      debug("Applying image updater : adaptive");
      container.adaptImage(adaptiveImageSettings);
    },
    refresh : function(container) {
      debug("refreshing content with : adaptiveUpdater");
      container.adaptImage();
    }
  };
  var picturefillUpdater = {
    update : function (container) {
      debug("Applying image updater : picturefill");
      picturefill();
    },
    refresh : function(container) {
      // do nothing
    }
  };
  var lazyimageUpdater = {
    update : function (container) {
      debug("Applying image updater : lazyload");

      $("img.lazy",container).lazyload(lazyImageSettings);
      // extra start anchor for elements which are later in doc but shown on top. e.g. Aside
      $(".lazyimage-anchor", container).each(function () {
        $(this).find("img.lazy").lazyload(lazyImageSettings);
      });
    },
    refresh : function(container) {
      debug("refreshing content with : lazyimageUpdater");
      container.scroll();
    }
  };

  var imageUpdaters = [ adaptiveUpdater, picturefillUpdater, lazyimageUpdater ];

  this.update = function(container) {
    for (var i in imageUpdaters) {
      imageUpdaters[i].update(container);
    }
  };

  this.refresh = function(container) {
    for (var i in imageUpdaters) {
      imageUpdaters[i].refresh(container);
    }
  }

  function debug(msg) {
    if (debugEnabled) {
      console.log(msg);
    }
  }

  $(function() {
    WFImager.update($(document));
  });
  $(document).on("pageContentReady", function (event, content) {
    WFImager.update($(content));
  });
  $(window).on('resizeEnd', function () {
    WFImager.update($(document));
  });

  $(bindInteractionForRefresh($(document)));
  $(document).on('pageContentReady', function (event, content) {
    bindInteractionForRefresh($(content))
  });

  function bindInteractionForRefresh(container) {
    // updating image loading for bootstrap tab content
    $('a[data-toggle="tab"]', container).on('shown.bs.tab', function (e) {
      var tabContentId = $(this).attr("href");
      WFImager.refresh($(tabContentId));
    });
    // updating image loading for bootstrap slideshow
    $('.carousel', container).on('slid.bs.carousel', function () {
      WFImager.refresh($(this))
    });
    // updating image loading for mega dropdown menu
    $('.megadropdown', container).hover(function () {
      WFImager.refresh($(this));
    });
  }
};
/* Lazy page fragment loading */
$(function () {
  WFLazyLoader.loadFragment();
  //WFMedia.loadMedia();
});
$(document).on("fragmentReady", function () {
  WFLazyLoader.correctEmptyZones();
  //WFMedia.loadMedia();
});
$(document).on("pageContentReady", function () {
  //WFMedia.loadMedia();
});
var WFInlineLoader = new function() {
  var INLINE_WRAPPER = 'inline-wrapper';
  var TEASER_WRAPPER = 'teaser';
  var INLINE_CLOSE = 'inline-close';
  var INLINE_MARKER = 'inline';

  this.bindInlineContentLoading = function(container) {
    $("a."+INLINE_MARKER, container).click(function () {
      var loadingDevices = $(this).data("inline-devices");
      var devices = loadingDevices.split(',');
      if ($.inArray(WFClient.getType(), devices) > -1) {
        var articleUrl = $(this).attr('href');
        var url = articleUrl + "/inline";

        var teaserWrapper = $(this).closest('.'+TEASER_WRAPPER);
        if(teaserWrapper.next().hasClass(INLINE_WRAPPER)) {
          openInlineBlock(teaserWrapper, articleUrl);
        }
        else {
          loadInlineContent(url, teaserWrapper, function() {
            openInlineBlock(teaserWrapper, articleUrl);
          });
        }
        return false;
      }
    });
  };

  function openInlineBlock(teaserWrapper, articleUrl) {
    teaserWrapper.hide();
    teaserWrapper.next('.'+INLINE_WRAPPER).slideDown("slow");

    window.history.pushState({"html":articleUrl,"pageTitle":''},"", articleUrl);
  }

  function loadInlineContent(url, teaserWrapper, callback) {
    $.ajax({
      url: url,
      datatype: "html",
      success: function (oData) {
        teaserWrapper.after(oData);
        var inlineContent = teaserWrapper.next("." + INLINE_WRAPPER);

        callback();
        $.event.trigger('pageContentReady', inlineContent);
        bindInlineClose(inlineContent);
        //TODO: not here, should be based on some event
        window.picturefill();
      }
    });
  }

  function bindInlineClose(inlineWrapper){
    $('a.'+INLINE_CLOSE, inlineWrapper).click(function (event) {
      inlineWrapper.prev('.'+TEASER_WRAPPER).show();
      inlineWrapper.hide();
      event.preventDefault();
    });
  }
};

/* Binding inline loading */
$(function () {
  WFInlineLoader.bindInlineContentLoading($(document));

  //This is for handling lazy loading.
  $(document).on('pageContentReady', function (event, content) {
    WFInlineLoader.bindInlineContentLoading($(content));
  });

});



var WFLazyLoader = new function() {
  var WIDTH_RATIO_MARKER_CLASS_PREFIX = "col-sm-";
  var BOOTSTRAP_DEFAULT_GRID_RATIO = 12;
  var emptyZones = [];

  this.loadFragment = function () {
    var placeholderSelector = '.wf-placeholder';
    var totalPlaceHolder = $(placeholderSelector).length;
    var requestCount = 0;
    var clientType = WFClient.getType();
    $(placeholderSelector).each(function (i, obj) {
      var skipProfiles = obj.getAttribute("data-skip-profiles").split(',');
      if ($.inArray(clientType, skipProfiles) < 0) {
        $.ajax({
          url: obj.getAttribute("data-loadURL"),
          data: {"elementwidth": obj.getAttribute("data-elementwidth")},
          success: function (data) {
            var loadingContent = $(data);
            /*
              Adding an extra wrapper div for a lazy fragment having no root element.
              For example, a lazy loaded teaser widget might not have any widget wrapper or
              some area can be lazy enabled.
              * */
            if(loadingContent.length > 1){
              loadingContent = $("<div class='lazy-on-demand'>").html(data);
            }
            $(obj).replaceWith(loadingContent);
            $.event.trigger('pageContentReady', loadingContent);
          },
          complete: function () {
            requestCount = triggerFragmentReady(requestCount, totalPlaceHolder);
          }
        });
      }
      else {
        var currentEmptyZone = obj.parentNode;
        updateEmptyZoneArray(currentEmptyZone);
        currentEmptyZone.removeChild(obj);
        requestCount = triggerFragmentReady(requestCount, totalPlaceHolder);
      }
    });
  };

  /**
   * correct each unique empty zone
   */
  this.correctEmptyZones = function () {
    for (var i = 0; i < emptyZones.length; i++) {
      if ((emptyZones[i].className.indexOf(WIDTH_RATIO_MARKER_CLASS_PREFIX) > -1) && (isEmptyNode(emptyZones[i]))) {
        adjustWidthRatio($(emptyZones[i]).siblings(), getWidthRatio(emptyZones[i]));
        $(emptyZones[i]).remove();
      }
      else if (emptyZones[i].className.indexOf("row") > -1) {
        adjustWidthRatio($(emptyZones[i]).children(), getWidthRatio(emptyZones[i]));
      }
    }
  }

  function triggerFragmentReady(pCurrentPlaceholderIndex, pTotalPlaceHolder) {
    pCurrentPlaceholderIndex++;
    if (pCurrentPlaceholderIndex == pTotalPlaceHolder) {
      $.event.trigger({
        type: "fragmentReady"
      });
    }
    return pCurrentPlaceholderIndex;
  }


  function adjustWidthRatio(pNodes, widthRatioToAdjust) {
    var siblingWidthRatio = 0, adjustedWidthRatio = 0;
    var totalWidth = getSumOfArray(createWidthRatioArray(pNodes));
    var currentRatio = widthRatioToAdjust > 0 ? (totalWidth + widthRatioToAdjust) : BOOTSTRAP_DEFAULT_GRID_RATIO;
    for (var i = 0; i < pNodes.length; i++) {
      siblingWidthRatio = getWidthRatio(pNodes[i]);
      //convert current ratio to a new ratio for the siblings of the empty zone to be deleted
      adjustedWidthRatio = Math.round((siblingWidthRatio / totalWidth) * currentRatio);
      //replace the old width class with the new adjusted width class
      $(pNodes[i]).removeClass(WIDTH_RATIO_MARKER_CLASS_PREFIX + siblingWidthRatio)
        .addClass(WIDTH_RATIO_MARKER_CLASS_PREFIX + adjustedWidthRatio);
    }
  }

  /**
   * keep track of all unique empty zones
   * @param pEmptyZone the empty zone in concern
   */
  function updateEmptyZoneArray(pEmptyZone) {
    if (pEmptyZone) {
      for (var j = 0; j < emptyZones.length; j++) {
        if (emptyZones[j].isEqualNode(pEmptyZone)) {
          break;
        }
      }
      //if unique, insert it to the empty zone array
      if (j == emptyZones.length) {
        emptyZones.push(pEmptyZone);
      }
    }
  }

  function getWidthRatio(pNode) {
    var classes = pNode.className.split(' ');
    for (var cl = 0; cl < classes.length; cl++) {
      if (classes[cl].indexOf(WIDTH_RATIO_MARKER_CLASS_PREFIX) != -1) {
        break;
      }
    }
    return cl == classes.length ? 0 : parseInt(classes[cl].slice(WIDTH_RATIO_MARKER_CLASS_PREFIX.length));
  }

  function isEmptyNode(pNode) {
    var isEmpty = false;
    if (!pNode.hasChildNodes()) {
      isEmpty = true;
    }
    else {
      //need this hack as the widget template html is generated with lots of empty text nodes
      var children = pNode.childNodes;
      for (var n = 0; n < children.length; n++) {
        isEmpty = (children[n].nodeType == Node.TEXT_NODE) && (children[n].nodeValue.trim().length == 0);
        if (!isEmpty) break;
      }
    }
    return isEmpty;
  }

  function createWidthRatioArray(pNodes) {
    var widths = [];
    for (var n = 0; n < pNodes.length; n++) {
      widths[n] = getWidthRatio(pNodes[n]);
    }
    return widths;
  }

  function getSumOfArray(pArray) {
    var sum = 0;
    for (var i = 0; i < pArray.length; i++) {
      sum += pArray[i];
    }
    return sum;
  }
};
$(function () {
  mediaPlayerClick();
});

$(document).on('pageContentReady', function (event, data) {
  mediaPlayerClick();
  var $mediaDOM = $(data).find(".wf-media.autoplay");
  fetchMediaLink($mediaDOM, $mediaDOM.data('src'));
});

function mediaPlayerClick() {
  $(".wf-media").on('click', function () {
    if (!$(this).data("requested") && $(this).data('requested') == false) {
      fetchMediaLink(this, $(this).data('src'));
      $(this).data('requested', true);
    }
  });

  $('.media-modal').on('hidden.bs.modal', function (e) {
    if (flowplayer($(this).find(".flowplayer")) != null) {
      flowplayer($(this).find(".flowplayer")).unload();
    }
    else {
      var mediaDiv = $(this).find('div.wf-media');
      //Using this if condition to avoid throwing error in ie8
      if($(mediaDiv).html() != '' && $(mediaDiv).html() != null) {
        $(mediaDiv).find('audio.wf-audio')[0].player.pause();
        $(mediaDiv).empty();
      }
    }
    $(this).data('requested', false);
  });

  $('.media-modal').on('shown.bs.modal', function (e) {
    if ($(this).data('requested') == false) {
      var target = e.relatedTarget;
      var mediaLink = $(target).data("media-link");
      var wfMedia = $(target).siblings(".media-modal").find(".wf-media");
      $(wfMedia).attr("data-src", mediaLink);
      fetchMediaLink(wfMedia, mediaLink);
      $(this).data('requested', true);
    }
  });

  $('.wf-cuepoint').on('click', function () {
    var time = $(this).data("cuepoint-time");
    var api = $(this).parent().siblings('.wf-media').data("flowplayer");
    api.seek(time);
  });
}

fetchMediaLink($(".wf-media.autoplay"), $(".wf-media.autoplay").data('src'));

function fetchMediaLink(media, mediaSource) {
  if (!mediaSource) {
    return;
  }
  $.ajax({
    url: mediaSource,
    type: "GET",
    dataType: "json",
    success: function (data, status) {
      if (data.type == 'video') {
        var playerFriendlyJSON = convertMediaJson(data);
        initVideoPlayer(media, playerFriendlyJSON);
      }
      else {
        initAudioPlayer(media, data);
      }
      $(media).data("url", "ready");
      $(media).find(".glyphicon").remove();
    },
    errorCode: function (data, status, error) {

    }

  });
}

function convertMediaJson(jsonData) {
  var playerFriendlyJSON = {type: jsonData.type, sources: [], cuepoints: [], subtitle: ""};
  var sources = [];
  $(jsonData.sources).each(function (index, source) {
    var mediaType = source.mimeType.split("/")[1];
    var entry = {};
    entry[mediaType] = source.url;
    sources.push(entry);
  });
  playerFriendlyJSON.sources = sources;
  if (jsonData.timeline && jsonData.timeline.cuepoints) {
    playerFriendlyJSON.cuepoints = jsonData.timeline.cuepoints;
  }
  if (jsonData.subtitle) {
    playerFriendlyJSON.subtitle = jsonData.subtitle;
  }

  return playerFriendlyJSON;
}

function initVideoPlayer(pMedia, jsonData) {
  var track = $("track", $(pMedia));
  if (track.length == 0 && jsonData.type == "video") {
    var $track = $("<track src='" + jsonData.subtitle + "'>");
    $(pMedia).append($track);
  }
  $(pMedia).flowplayer({
    adaptiveRatio: true,
    playlist: [jsonData.sources],
    cuepoints: jsonData.cuepoints
  }).one('ready', function (ev, api) {
      api.resume();
      if (track.length == 0 && jsonData.type == "video") {
        handleCloseCaption(pMedia);
      }
      $(pMedia).children("img").remove();
    });
}

function handleCloseCaption(pMedia) {
  var $fpSubtitle = $(pMedia).find(".fp-subtitle");
  var $cc = $("<a class='wf-close-caption on'>CC</a>").click(function () {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on").addClass("off");
      $fpSubtitle.hide();
    }
    else {
      $(this).removeClass("off").addClass("on");
      $fpSubtitle.show();
    }
  });
  $(pMedia).find(".fp-fullscreen").after($cc);
}

function initAudioPlayer(pMedia, jsonData) {
  var audioTag = "<audio class='wf-audio' width='100%' controls='controls'>";
  $(jsonData.sources).each(function (index, source) {
    audioTag += "<source src='" + source.url + "' type='" + source.mimeType + "'>";
  });
  audioTag += "</audio>";
  $(pMedia).append(audioTag);

  ($(pMedia).children('audio.wf-audio')).mediaelementplayer({
    pluginPath: $(pMedia).data('rootUrl') + 'jscripts/',
    audioHeight: 30,
    pauseOtherPlayers: false,
    alwaysShowControls: true,
    features: ['playpause', 'current', 'progress', 'duration', 'volume'],
    success: function (mediaElement, originalNode) {
      mediaElement.play();
    }
  });
}
//This is for handling the share popup window.
var WFShareTool = new function() {
  function openShareLink(pLink) {
    window.open(pLink, '', 'width=740,height=500');
  }

  //This is for handling the click event of global share link
  this.bindShareLinks = function(container) {
    $(".wf-sharetool a", container).click(function (event) {
      var linkLi = $(this).parent();
      var site = linkLi.data("share-on");
      var shareUrl = linkLi.parent().data("share-url");
      var shareText = linkLi.parent().data("share-text");
      switch (site) {
        case "facebook" :
          openShareLink('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(shareUrl));
          break;
        case "twitter" :
          openShareLink('http://twitter.com/share?text=' + shareText + '&url=' + encodeURIComponent(shareUrl));
          break;
        case "googleplus" :
          openShareLink('https://plus.google.com/share?url=' + encodeURIComponent(shareUrl));
          break;
      }
      event.preventDefault();
    });
  }
};

$(function () {
  WFShareTool.bindShareLinks($(document));

//This is for handling lazy loading.
  $(document).on('pageContentReady', function (event, content) {
    WFShareTool.bindShareLinks($(content));
  });
});

