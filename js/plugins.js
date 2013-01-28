(function(){for(var b,e=function(){},g="assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "),a=g.length,c=window.console=window.console||{};a--;)b=g[a],c[b]||(c[b]=e)})(); !function(b){var e=function(a,c){this.options=b.extend({},b.fn.affix.defaults,c);this.$window=b(window).on("scroll.affix.data-api",b.proxy(this.checkPosition,this)).on("click.affix.data-api",b.proxy(function(){setTimeout(b.proxy(this.checkPosition,this),1)},this));this.$element=b(a);this.checkPosition()};e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var a=b(document).height(),c=this.$window.scrollTop(),d=this.$element.offset(),f=this.options.offset,j=f.bottom,h=f.top;"object"!= typeof f&&(j=h=f);"function"==typeof h&&(h=f.top());"function"==typeof j&&(j=f.bottom());a=null!=this.unpin&&c+this.unpin<=d.top?!1:null!=j&&d.top+this.$element.height()>=a-j?"bottom":null!=h&&c<=h?"top":!1;this.affixed!==a&&(this.affixed=a,this.unpin="bottom"==a?d.top-c:null,this.$element.removeClass("affix affix-top affix-bottom").addClass("affix"+(a?"-"+a:"")))}};var g=b.fn.affix;b.fn.affix=function(a){return this.each(function(){var c=b(this),d=c.data("affix"),f="object"==typeof a&&a;d||c.data("affix", d=new e(this,f));if("string"==typeof a)d[a]()})};b.fn.affix.Constructor=e;b.fn.affix.defaults={offset:0};b.fn.affix.noConflict=function(){b.fn.affix=g;return this};b(window).on("load",function(){b('[data-spy="affix"]').each(function(){var a=b(this),c=a.data();c.offset=c.offset||{};c.offsetBottom&&(c.offset.bottom=c.offsetBottom);c.offsetTop&&(c.offset.top=c.offsetTop);a.affix(c)})})}(window.jQuery); !function(b){var e=function(a){b(a).on("click",'[data-dismiss="alert"]',this.close)};e.prototype.close=function(a){function c(){j.trigger("closed").remove()}var d=b(this),f=d.attr("data-target"),j;f||(f=(f=d.attr("href"))&&f.replace(/.*(?=#[^\s]*$)/,""));j=b(f);a&&a.preventDefault();j.length||(j=d.hasClass("alert")?d:d.parent());j.trigger(a=b.Event("close"));a.isDefaultPrevented()||(j.removeClass("in"),b.support.transition&&j.hasClass("fade")?j.on(b.support.transition.end,c):c())};var g=b.fn.alert; b.fn.alert=function(a){return this.each(function(){var c=b(this),d=c.data("alert");d||c.data("alert",d=new e(this));"string"==typeof a&&d[a].call(c)})};b.fn.alert.Constructor=e;b.fn.alert.noConflict=function(){b.fn.alert=g;return this};b(document).on("click.alert.data-api",'[data-dismiss="alert"]',e.prototype.close)}(window.jQuery); !function(b){var e=function(a,c){this.$element=b(a);this.options=b.extend({},b.fn.button.defaults,c)};e.prototype.setState=function(a){var b=this.$element,d=b.data(),f=b.is("input")?"val":"html";a+="Text";d.resetText||b.data("resetText",b[f]());b[f](d[a]||this.options[a]);setTimeout(function(){"loadingText"==a?b.addClass("disabled").attr("disabled","disabled"):b.removeClass("disabled").removeAttr("disabled")},0)};e.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons-radio"]'); a&&a.find(".active").removeClass("active");this.$element.toggleClass("active")};var g=b.fn.button;b.fn.button=function(a){return this.each(function(){var c=b(this),d=c.data("button"),f="object"==typeof a&&a;d||c.data("button",d=new e(this,f));"toggle"==a?d.toggle():a&&d.setState(a)})};b.fn.button.defaults={loadingText:"loading..."};b.fn.button.Constructor=e;b.fn.button.noConflict=function(){b.fn.button=g;return this};b(document).on("click.button.data-api","[data-toggle^=button]",function(a){a=b(a.target); a.hasClass("btn")||(a=a.closest(".btn"));a.button("toggle")})}(window.jQuery); !function(b){var e=function(a,c){this.$element=b(a);this.options=c;"hover"==this.options.pause&&this.$element.on("mouseenter",b.proxy(this.pause,this)).on("mouseleave",b.proxy(this.cycle,this))};e.prototype={cycle:function(a){a||(this.paused=!1);this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval));return this},to:function(a){var c=this.$element.find(".item.active"),d=c.parent().children(),c=d.index(c),f=this;if(!(a>d.length-1||0>a))return this.sliding? this.$element.one("slid",function(){f.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",b(d[a]))},pause:function(a){a||(this.paused=!0);this.$element.find(".next, .prev").length&&b.support.transition.end&&(this.$element.trigger(b.support.transition.end),this.cycle());clearInterval(this.interval);this.interval=null;return this},next:function(){if(!this.sliding)return this.slide("next")},prev:function(){if(!this.sliding)return this.slide("prev")},slide:function(a,c){var d=this.$element.find(".item.active"), f=c||d[a](),j=this.interval,h="next"==a?"left":"right",e="next"==a?"first":"last",g=this;this.sliding=!0;j&&this.pause();f=f.length?f:this.$element.find(".item")[e]();e=b.Event("slide",{relatedTarget:f[0]});if(!f.hasClass("active")){if(b.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(e);if(e.isDefaultPrevented())return;f.addClass(a);f[0].offsetWidth;d.addClass(h);f.addClass(h);this.$element.one(b.support.transition.end,function(){f.removeClass([a,h].join(" ")).addClass("active"); d.removeClass(["active",h].join(" "));g.sliding=!1;setTimeout(function(){g.$element.trigger("slid")},0)})}else{this.$element.trigger(e);if(e.isDefaultPrevented())return;d.removeClass("active");f.addClass("active");this.sliding=!1;this.$element.trigger("slid")}j&&this.cycle();return this}}};var g=b.fn.carousel;b.fn.carousel=function(a){return this.each(function(){var c=b(this),d=c.data("carousel"),f=b.extend({},b.fn.carousel.defaults,"object"==typeof a&&a),j="string"==typeof a?a:f.slide;d||c.data("carousel", d=new e(this,f));if("number"==typeof a)d.to(a);else if(j)d[j]();else f.interval&&d.cycle()})};b.fn.carousel.defaults={interval:5E3,pause:"hover"};b.fn.carousel.Constructor=e;b.fn.carousel.noConflict=function(){b.fn.carousel=g;return this};b(document).on("click.carousel.data-api","[data-slide]",function(a){var c=b(this),d,f=b(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),c=b.extend({},f.data(),c.data());f.carousel(c);a.preventDefault()})}(window.jQuery); !function(b){var e=function(a,c){this.$element=b(a);this.options=b.extend({},b.fn.collapse.defaults,c);this.options.parent&&(this.$parent=b(this.options.parent));this.options.toggle&&this.toggle()};e.prototype={constructor:e,dimension:function(){return this.$element.hasClass("width")?"width":"height"},show:function(){var a,c,d,f;if(!this.transitioning){a=this.dimension();c=b.camelCase(["scroll",a].join("-"));if((d=this.$parent&&this.$parent.find("> .accordion-group > .in"))&&d.length){if((f=d.data("collapse"))&& f.transitioning)return;d.collapse("hide");f||d.data("collapse",null)}this.$element[a](0);this.transition("addClass",b.Event("show"),"shown");b.support.transition&&this.$element[a](this.$element[0][c])}},hide:function(){var a;this.transitioning||(a=this.dimension(),this.reset(this.$element[a]()),this.transition("removeClass",b.Event("hide"),"hidden"),this.$element[a](0))},reset:function(a){var b=this.dimension();this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth;this.$element[null!== a?"addClass":"removeClass"]("collapse");return this},transition:function(a,c,d){var f=this,j=function(){"show"==c.type&&f.reset();f.transitioning=0;f.$element.trigger(d)};this.$element.trigger(c);c.isDefaultPrevented()||(this.transitioning=1,this.$element[a]("in"),b.support.transition&&this.$element.hasClass("collapse")?this.$element.one(b.support.transition.end,j):j())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var g=b.fn.collapse;b.fn.collapse=function(a){return this.each(function(){var c= b(this),d=c.data("collapse"),f="object"==typeof a&&a;d||c.data("collapse",d=new e(this,f));if("string"==typeof a)d[a]()})};b.fn.collapse.defaults={toggle:!0};b.fn.collapse.Constructor=e;b.fn.collapse.noConflict=function(){b.fn.collapse=g;return this};b(document).on("click.collapse.data-api","[data-toggle=collapse]",function(a){var c=b(this),d;a=c.attr("data-target")||a.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"");d=b(a).data("collapse")?"toggle":c.data();c[b(a).hasClass("in")? "addClass":"removeClass"]("collapsed");b(a).collapse(d)})}(window.jQuery); !function(b){function e(){b(a).each(function(){g(b(this)).removeClass("open")})}function g(a){var c=a.attr("data-target");c||(c=(c=a.attr("href"))&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));c=b(c);c.length||(c=a.parent());return c}var a="[data-toggle=dropdown]",c=function(a){var c=b(a).on("click.dropdown.data-api",this.toggle);b("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(){var a=b(this),c,d;if(!a.is(".disabled, :disabled"))return c= g(a),d=c.hasClass("open"),e(),d||c.toggleClass("open"),a.focus(),!1},keydown:function(a){var c,d,e;if(/(38|40|27)/.test(a.keyCode)&&(c=b(this),a.preventDefault(),a.stopPropagation(),!c.is(".disabled, :disabled"))){d=g(c);e=d.hasClass("open");if(!e||e&&27==a.keyCode)return c.click();c=b("[role=menu] li:not(.divider):visible a",d);c.length&&(d=c.index(c.filter(":focus")),38==a.keyCode&&0<d&&d--,40==a.keyCode&&d<c.length-1&&d++,~d||(d=0),c.eq(d).focus())}}};var d=b.fn.dropdown;b.fn.dropdown=function(a){return this.each(function(){var d= b(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this));"string"==typeof a&&e[a].call(d)})};b.fn.dropdown.Constructor=c;b.fn.dropdown.noConflict=function(){b.fn.dropdown=d;return this};b(document).on("click.dropdown.data-api touchstart.dropdown.data-api",e).on("click.dropdown touchstart.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("touchstart.dropdown.data-api",".dropdown-menu",function(a){a.stopPropagation()}).on("click.dropdown.data-api touchstart.dropdown.data-api", a,c.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",a+", [role=menu]",c.prototype.keydown)}(window.jQuery); !function(b){var e=function(a,c){this.options=c;this.$element=b(a).delegate('[data-dismiss="modal"]',"click.dismiss.modal",b.proxy(this.hide,this));this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};e.prototype={constructor:e,toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var a=this,c=b.Event("show");this.$element.trigger(c);!this.isShown&&!c.isDefaultPrevented()&&(this.isShown=!0,this.escape(),this.backdrop(function(){var c=b.support.transition&& a.$element.hasClass("fade");a.$element.parent().length||a.$element.appendTo(document.body);a.$element.show();c&&a.$element[0].offsetWidth;a.$element.addClass("in").attr("aria-hidden",!1);a.enforceFocus();c?a.$element.one(b.support.transition.end,function(){a.$element.focus().trigger("shown")}):a.$element.focus().trigger("shown")}))},hide:function(a){a&&a.preventDefault();a=b.Event("hide");this.$element.trigger(a);this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),b(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden",!0),b.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var a=this;b(document).on("focusin.modal",function(b){a.$element[0]!==b.target&&!a.$element.has(b.target).length&&a.$element.focus()})},escape:function(){var a=this;if(this.isShown&&this.options.keyboard)this.$element.on("keyup.dismiss.modal",function(b){27==b.which&&a.hide()});else this.isShown||this.$element.off("keyup.dismiss.modal")}, hideWithTransition:function(){var a=this,c=setTimeout(function(){a.$element.off(b.support.transition.end);a.hideModal()},500);this.$element.one(b.support.transition.end,function(){clearTimeout(c);a.hideModal()})},hideModal:function(){this.$element.hide().trigger("hidden");this.backdrop()},removeBackdrop:function(){this.$backdrop.remove();this.$backdrop=null},backdrop:function(a){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=b.support.transition&&c;this.$backdrop= b('<div class="modal-backdrop '+c+'" />').appendTo(document.body);this.$backdrop.click("static"==this.options.backdrop?b.proxy(this.$element[0].focus,this.$element[0]):b.proxy(this.hide,this));d&&this.$backdrop[0].offsetWidth;this.$backdrop.addClass("in");d?this.$backdrop.one(b.support.transition.end,a):a()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(b.support.transition.end,b.proxy(this.removeBackdrop, this)):this.removeBackdrop()):a&&a()}};var g=b.fn.modal;b.fn.modal=function(a){return this.each(function(){var c=b(this),d=c.data("modal"),f=b.extend({},b.fn.modal.defaults,c.data(),"object"==typeof a&&a);d||c.data("modal",d=new e(this,f));if("string"==typeof a)d[a]();else f.show&&d.show()})};b.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0};b.fn.modal.Constructor=e;b.fn.modal.noConflict=function(){b.fn.modal=g;return this};b(document).on("click.modal.data-api",'[data-toggle="modal"]',function(a){var c= b(this),d=c.attr("href"),f=b(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),d=f.data("modal")?"toggle":b.extend({remote:!/#/.test(d)&&d},f.data(),c.data());a.preventDefault();f.modal(d).one("hide",function(){c.focus()})})}(window.jQuery); !function(b){function e(a,c){var d=b.proxy(this.process,this),f=b(a).is("body")?b(window):b(a),e;this.options=b.extend({},b.fn.scrollspy.defaults,c);this.$scrollElement=f.on("scroll.scroll-spy.data-api",d);this.selector=(this.options.target||(e=b(a).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a";this.$body=b("body");this.refresh();this.process()}e.prototype={constructor:e,refresh:function(){var a=this;this.offsets=b([]);this.targets=b([]);this.$body.find(this.selector).map(function(){var c= b(this),c=c.data("target")||c.attr("href"),d=/^#\w/.test(c)&&b(c);return d&&d.length&&[[d.position().top+a.$scrollElement.scrollTop(),c]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){a.offsets.push(this[0]);a.targets.push(this[1])})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=(this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight)-this.$scrollElement.height(),d=this.offsets,f=this.targets,e=this.activeTarget,h;if(a>=b)return e!=(h=f.last()[0])&& this.activate(h);for(h=d.length;h--;)e!=f[h]&&a>=d[h]&&(!d[h+1]||a<=d[h+1])&&this.activate(f[h])},activate:function(a){this.activeTarget=a;b(this.selector).parent(".active").removeClass("active");a=b(this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]').parent("li").addClass("active");a.parent(".dropdown-menu").length&&(a=a.closest("li.dropdown").addClass("active"));a.trigger("activate")}};var g=b.fn.scrollspy;b.fn.scrollspy=function(a){return this.each(function(){var c=b(this),d= c.data("scrollspy"),f="object"==typeof a&&a;d||c.data("scrollspy",d=new e(this,f));if("string"==typeof a)d[a]()})};b.fn.scrollspy.Constructor=e;b.fn.scrollspy.defaults={offset:10};b.fn.scrollspy.noConflict=function(){b.fn.scrollspy=g;return this};b(window).on("load",function(){b('[data-spy="scroll"]').each(function(){var a=b(this);a.scrollspy(a.data())})})}(window.jQuery); !function(b){var e=function(a){this.element=b(a)};e.prototype={constructor:e,show:function(){var a=this.element,c=a.closest("ul:not(.dropdown-menu)"),d=a.attr("data-target"),f,e;d||(d=(d=a.attr("href"))&&d.replace(/.*(?=#[^\s]*$)/,""));a.parent("li").hasClass("active")||(f=c.find(".active:last a")[0],e=b.Event("show",{relatedTarget:f}),a.trigger(e),e.isDefaultPrevented()||(d=b(d),this.activate(a.parent("li"),c),this.activate(d,d.parent(),function(){a.trigger({type:"shown",relatedTarget:f})})))},activate:function(a, c,d){function f(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");a.addClass("active");h?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade");a.parent(".dropdown-menu")&&a.closest("li.dropdown").addClass("active");d&&d()}var e=c.find("> .active"),h=d&&b.support.transition&&e.hasClass("fade");h?e.one(b.support.transition.end,f):f();e.removeClass("in")}};var g=b.fn.tab;b.fn.tab=function(a){return this.each(function(){var c=b(this),d=c.data("tab");d||c.data("tab", d=new e(this));if("string"==typeof a)d[a]()})};b.fn.tab.Constructor=e;b.fn.tab.noConflict=function(){b.fn.tab=g;return this};b(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(a){a.preventDefault();b(this).tab("show")})}(window.jQuery); !function(b){var e=function(a,b){this.init("tooltip",a,b)};e.prototype={constructor:e,init:function(a,c,d){this.type=a;this.$element=b(c);this.options=this.getOptions(d);this.enabled=!0;if("click"==this.options.trigger)this.$element.on("click."+this.type,this.options.selector,b.proxy(this.toggle,this));else"manual"!=this.options.trigger&&(a="hover"==this.options.trigger?"mouseenter":"focus",c="hover"==this.options.trigger?"mouseleave":"blur",this.$element.on(a+"."+this.type,this.options.selector, b.proxy(this.enter,this)),this.$element.on(c+"."+this.type,this.options.selector,b.proxy(this.leave,this)));this.options.selector?this._options=b.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(a){a=b.extend({},b.fn[this.type].defaults,a,this.$element.data());a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay});return a},enter:function(a){var c=b(a.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.show)return c.show(); clearTimeout(this.timeout);c.hoverState="in";this.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)},leave:function(a){var c=b(a.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!c.options.delay||!c.options.delay.hide)return c.hide();c.hoverState="out";this.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)},show:function(){var a,b,d,f,e,h,g;if(this.hasContent()&&this.enabled){a=this.tip(); this.setContent();this.options.animation&&a.addClass("fade");h="function"==typeof this.options.placement?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement;b=/in/.test(h);a.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element);d=this.getPosition(b);f=a[0].offsetWidth;e=a[0].offsetHeight;switch(b?h.split(" ")[1]:h){case "bottom":g={top:d.top+d.height,left:d.left+d.width/2-f/2};break;case "top":g={top:d.top-e,left:d.left+d.width/2-f/2};break;case "left":g= {top:d.top+d.height/2-e/2,left:d.left-f};break;case "right":g={top:d.top+d.height/2-e/2,left:d.left+d.width}}a.offset(g).addClass(h).addClass("in")}},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b);a.removeClass("fade in top bottom left right")},hide:function(){var a=this.tip();a.removeClass("in");if(b.support.transition&&this.$tip.hasClass("fade")){var c=setTimeout(function(){a.off(b.support.transition.end).detach()},500);a.one(b.support.transition.end, function(){clearTimeout(c);a.detach()})}else a.detach();return this},fixTitle:function(){var a=this.$element;if(a.attr("title")||"string"!=typeof a.attr("data-original-title"))a.attr("data-original-title",a.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(a){return b.extend({},a?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a=this.$element,b=this.options; return a.attr("data-original-title")||("function"==typeof b.title?b.title.call(a[0]):b.title)},tip:function(){return this.$tip=this.$tip||b(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.options=this.$element=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(a){a=b(a.currentTarget)[this.type](this._options).data(this.type);a[a.tip().hasClass("in")?"hide":"show"]()}, destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var g=b.fn.tooltip;b.fn.tooltip=function(a){return this.each(function(){var c=b(this),d=c.data("tooltip"),f="object"==typeof a&&a;d||c.data("tooltip",d=new e(this,f));if("string"==typeof a)d[a]()})};b.fn.tooltip.Constructor=e;b.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"", delay:0,html:!1};b.fn.tooltip.noConflict=function(){b.fn.tooltip=g;return this}}(window.jQuery);!function(b){b(function(){var e=b.support,g;a:{g=document.createElement("bootstrap");var a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in a)if(void 0!==g.style[c]){g=a[c];break a}g=void 0}e.transition=g&&{end:g}})}(window.jQuery); !function(b){var e=function(a,c){this.$element=b(a);this.options=b.extend({},b.fn.typeahead.defaults,c);this.matcher=this.options.matcher||this.matcher;this.sorter=this.options.sorter||this.sorter;this.highlighter=this.options.highlighter||this.highlighter;this.updater=this.options.updater||this.updater;this.source=this.options.source;this.$menu=b(this.options.menu);this.shown=!1;this.listen()};e.prototype={constructor:e,select:function(){var a=this.$menu.find(".active").attr("data-value");this.$element.val(this.updater(a)).change(); return this.hide()},updater:function(a){return a},show:function(){var a=b.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});this.$menu.insertAfter(this.$element).css({top:a.top+a.height,left:a.left}).show();this.shown=!0;return this},hide:function(){this.$menu.hide();this.shown=!1;return this},lookup:function(){var a;this.query=this.$element.val();return!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(a=b.isFunction(this.source)?this.source(this.query, b.proxy(this.process,this)):this.source)?this.process(a):this},process:function(a){var c=this;a=b.grep(a,function(a){return c.matcher(a)});a=this.sorter(a);return!a.length?this.shown?this.hide():this:this.render(a.slice(0,this.options.items)).show()},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){for(var b=[],d=[],f=[],e;e=a.shift();)e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?d.push(e):f.push(e):b.push(e);return b.concat(d, f)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(a){var c=this;a=b(a).map(function(a,f){a=b(c.options.item).attr("data-value",f);a.find("a").html(c.highlighter(f));return a[0]});a.first().addClass("active");this.$menu.html(a);return this},next:function(){var a=this.$menu.find(".active").removeClass("active").next();a.length||(a=b(this.$menu.find("li")[0])); a.addClass("active")},prev:function(){var a=this.$menu.find(".active").removeClass("active").prev();a.length||(a=this.$menu.find("li").last());a.addClass("active")},listen:function(){this.$element.on("blur",b.proxy(this.blur,this)).on("keypress",b.proxy(this.keypress,this)).on("keyup",b.proxy(this.keyup,this));if(this.eventSupported("keydown"))this.$element.on("keydown",b.proxy(this.keydown,this));this.$menu.on("click",b.proxy(this.click,this)).on("mouseenter","li",b.proxy(this.mouseenter,this))}, eventSupported:function(a){var b=a in this.$element;b||(this.$element.setAttribute(a,"return;"),b="function"===typeof this.$element[a]);return b},move:function(a){if(this.shown){switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault();this.prev();break;case 40:a.preventDefault(),this.next()}a.stopPropagation()}},keydown:function(a){this.suppressKeyPressRepeat=~b.inArray(a.keyCode,[40,38,9,13,27]);this.move(a)},keypress:function(a){this.suppressKeyPressRepeat||this.move(a)}, keyup:function(a){switch(a.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation();a.preventDefault()},blur:function(){var a=this;setTimeout(function(){a.hide()},150)},click:function(a){a.stopPropagation();a.preventDefault();this.select()},mouseenter:function(a){this.$menu.find(".active").removeClass("active");b(a.currentTarget).addClass("active")}};var g= b.fn.typeahead;b.fn.typeahead=function(a){return this.each(function(){var c=b(this),d=c.data("typeahead"),f="object"==typeof a&&a;d||c.data("typeahead",d=new e(this,f));if("string"==typeof a)d[a]()})};b.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1};b.fn.typeahead.Constructor=e;b.fn.typeahead.noConflict=function(){b.fn.typeahead=g;return this};b(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]', function(a){var c=b(this);c.data("typeahead")||(a.preventDefault(),c.typeahead(c.data()))})}(window.jQuery); !function(b){var e=function(a,b){this.init("popover",a,b)};e.prototype=b.extend({},b.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var a=this.tip(),b=this.getTitle(),d=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b);a.find(".popover-content")[this.options.html?"html":"text"](d);a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a=this.$element,b=this.options; return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},tip:function(){this.$tip||(this.$tip=b(this.options.template));return this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var g=b.fn.popover;b.fn.popover=function(a){return this.each(function(){var c=b(this),d=c.data("popover"),f="object"==typeof a&&a;d||c.data("popover",d=new e(this,f));if("string"==typeof a)d[a]()})};b.fn.popover.Constructor=e;b.fn.popover.defaults= b.extend({},b.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"></div></div></div>'});b.fn.popover.noConflict=function(){b.fn.popover=g;return this}}(window.jQuery); (function(b){function e(a){if(a in j.style)return a;var b=["Moz","Webkit","O","ms"],c=a.charAt(0).toUpperCase()+a.substr(1);if(a in j.style)return a;for(a=0;a<b.length;++a){var d=b[a]+c;if(d in j.style)return d}}function g(a){"string"===typeof a&&this.parse(a);return this}function a(a,c,d,e){var h=[];b.each(a,function(a){a=b.camelCase(a);a=b.transit.propertyMap[a]||b.cssProps[a]||a;a=a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()});-1===b.inArray(a,h)&&h.push(a)});b.cssEase[d]&&(d=b.cssEase[d]); var g=""+f(c)+" "+d;0<parseInt(e,10)&&(g+=" "+f(e));var j=[];b.each(h,function(a,b){j.push(b+" "+g)});return j.join(", ")}function c(a,c){c||(b.cssNumber[a]=!0);b.transit.propertyMap[a]=h.transform;b.cssHooks[a]={get:function(c){return b(c).css("transit:transform").get(a)},set:function(c,d){var f=b(c).css("transit:transform");f.setFromString(a,d);b(c).css({"transit:transform":f})}}}function d(a,b){return"string"===typeof a&&!a.match(/^[\-0-9\.]+$/)?a:""+a+b}function f(a){b.fx.speeds[a]&&(a=b.fx.speeds[a]); return d(a,"ms")}b.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var j=document.createElement("div"),h={},l=-1<navigator.userAgent.toLowerCase().indexOf("chrome");h.transition=e("transition");h.transitionDelay=e("transitionDelay");h.transform=e("transform");h.transformOrigin=e("transformOrigin");j.style[h.transform]= "";j.style[h.transform]="rotateY(90deg)";h.transform3d=""!==j.style[h.transform];var n=h.transitionEnd={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[h.transition]||null,k;for(k in h)h.hasOwnProperty(k)&&"undefined"===typeof b.support[k]&&(b.support[k]=h[k]);j=null;b.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)", easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)", easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};b.cssHooks["transit:transform"]={get:function(a){return b(a).data("transform")|| new g},set:function(a,c){var d=c;d instanceof g||(d=new g(d));a.style[h.transform]="WebkitTransform"===h.transform&&!l?d.toString(!0):d.toString();b(a).data("transform",d)}};b.cssHooks.transform={set:b.cssHooks["transit:transform"].set};"1.8">b.fn.jquery&&(b.cssHooks.transformOrigin={get:function(a){return a.style[h.transformOrigin]},set:function(a,b){a.style[h.transformOrigin]=b}},b.cssHooks.transition={get:function(a){return a.style[h.transition]},set:function(a,b){a.style[h.transition]=b}});c("scale"); c("translate");c("rotate");c("rotateX");c("rotateY");c("rotate3d");c("perspective");c("skewX");c("skewY");c("x",!0);c("y",!0);g.prototype={setFromString:function(a,b){var c="string"===typeof b?b.split(","):b.constructor===Array?b:[b];c.unshift(a);g.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate= d(a,"deg")},rotateX:function(a){this.rotateX=d(a,"deg")},rotateY:function(a){this.rotateY=d(a,"deg")},scale:function(a,b){void 0===b&&(b=a);this.scale=a+","+b},skewX:function(a){this.skewX=d(a,"deg")},skewY:function(a){this.skewY=d(a,"deg")},perspective:function(a){this.perspective=d(a,"px")},x:function(a){this.set("translate",a,null)},y:function(a){this.set("translate",null,a)},translate:function(a,b){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0); null!==a&&void 0!==a&&(this._translateX=d(a,"px"));null!==b&&void 0!==b&&(this._translateY=d(b,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var a=(this.scale||"1,1").split(",");a[0]&&(a[0]=parseFloat(a[0]));a[1]&&(a[1]=parseFloat(a[1]));return a[0]===a[1]?a[0]:a},rotate3d:function(){for(var a=(this.rotate3d||"0,0,0,0deg").split(","),b=0;3>=b;++b)a[b]&&(a[b]=parseFloat(a[b])); a[3]&&(a[3]=d(a[3],"deg"));return a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,c,d){b.setFromString(c,d)})},toString:function(a){var b=[],c;for(c in this)if(this.hasOwnProperty(c)&&(h.transform3d||!("rotateX"===c||"rotateY"===c||"perspective"===c||"transformOrigin"===c)))"_"!==c[0]&&(a&&"scale"===c?b.push(c+"3d("+this[c]+",1)"):a&&"translate"===c?b.push(c+"3d("+this[c]+",0)"):b.push(c+"("+this[c]+")"));return b.join(" ")}};b.fn.transition=b.fn.transit=function(c, d,e,g){var j=this,k=0,l=!0;"function"===typeof d&&(g=d,d=void 0);"function"===typeof e&&(g=e,e=void 0);"undefined"!==typeof c.easing&&(e=c.easing,delete c.easing);"undefined"!==typeof c.duration&&(d=c.duration,delete c.duration);"undefined"!==typeof c.complete&&(g=c.complete,delete c.complete);"undefined"!==typeof c.queue&&(l=c.queue,delete c.queue);"undefined"!==typeof c.delay&&(k=c.delay,delete c.delay);"undefined"===typeof d&&(d=b.fx.speeds._default);"undefined"===typeof e&&(e=b.cssEase._default); d=f(d);var u=a(c,d,e,k),t=b.transit.enabled&&h.transition?parseInt(d,10)+parseInt(k,10):0;if(0===t)return d=l,e=function(a){j.css(c);g&&g.apply(j);a&&a()},!0===d?j.queue(e):d?j.queue(d,e):e(),j;var w={};d=l;e=function(a){this.offsetWidth;var d=!1,e=function(){d&&j.unbind(n,e);0<t&&j.each(function(){this.style[h.transition]=w[this]||null});"function"===typeof g&&g.apply(j);"function"===typeof a&&a()};0<t&&n&&b.transit.useTransitionEnd?(d=!0,j.bind(n,e)):window.setTimeout(e,t);j.each(function(){0<t&& (this.style[h.transition]=u);b(this).css(c)})};!0===d?j.queue(e):d?j.queue(d,e):e();return this};b.transit.getTransitionValue=a})(jQuery); (function(b){var e={},g,a,c=document,d=window,f=c.documentElement,j=b.expando;b.event.special.inview={add:function(a){e[a.guid+"-"+this[j]]={data:a,$element:b(this)}},remove:function(a){try{delete e[a.guid+"-"+this[j]]}catch(b){}}};b(d).bind("scroll resize",function(){g=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null});setInterval(function(){var h=b(),j,n=0;b.each(e,function(a,b){var c=b.data.selector,d=b.$element;h=h.add(c?d.find(c):d)});if(j=h.length){var k; if(!(k=g)){var q={height:d.innerHeight,width:d.innerWidth};if(!q.height&&((k=c.compatMode)||!b.support.boxModel))k="CSS1Compat"===k?f:c.body,q={height:k.clientHeight,width:k.clientWidth};k=q}g=k;for(a=a||{top:d.pageYOffset||f.scrollTop||c.body.scrollTop,left:d.pageXOffset||f.scrollLeft||c.body.scrollLeft};n<j;n++)if(b.contains(f,h[n])){k=b(h[n]);var r=k.height(),s=k.width(),p=k.offset(),q=k.data("inview");if(!a||!g)break;p.top+r>a.top&&p.top<a.top+g.height&&p.left+s>a.left&&p.left<a.left+g.width? (s=a.left>p.left?"right":a.left+g.width<p.left+s?"left":"both",r=a.top>p.top?"bottom":a.top+g.height<p.top+r?"top":"both",p=s+"-"+r,(!q||q!==p)&&k.data("inview",p).trigger("inview",[!0,s,r])):q&&k.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery); (function(b){function e(a){return"object"==typeof a?a:{top:a,left:a}}var g=b.scrollTo=function(a,c,d){b(window).scrollTo(a,c,d)};g.defaults={axis:"xy",duration:1.3<=parseFloat(b.fn.jquery)?0:1,limit:!0};g.window=function(){return b(window)._scrollable()};b.fn._scrollable=function(){return this.map(function(){if(this.nodeName&&-1==b.inArray(this.nodeName.toLowerCase(),["iframe","#document","html","body"]))return this;var a=(this.contentWindow||this).document||this.ownerDocument||this;return/webkit/i.test(navigator.userAgent)|| "BackCompat"==a.compatMode?a.body:a.documentElement})};b.fn.scrollTo=function(a,c,d){"object"==typeof c&&(d=c,c=0);"function"==typeof d&&(d={onAfter:d});"max"==a&&(a=9E9);d=b.extend({},g.defaults,d);c=c||d.duration;d.queue=d.queue&&1<d.axis.length;d.queue&&(c/=2);d.offset=e(d.offset);d.over=e(d.over);return this._scrollable().each(function(){function f(b){h.animate(k,c,d.easing,b&&function(){b.call(this,a,d)})}if(null!=a){var j=this,h=b(j),l=a,n,k={},q=h.is("html,body");switch(typeof l){case "number":case "string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(l)){l= e(l);break}l=b(l,this);if(!l.length)return;case "object":if(l.is||l.style)n=(l=b(l)).offset()}b.each(d.axis.split(""),function(a,b){var c="x"==b?"Left":"Top",e=c.toLowerCase(),m="scroll"+c,v=j[m],u=g.max(j,b);n?(k[m]=n[e]+(q?0:v-h.offset()[e]),d.margin&&(k[m]-=parseInt(l.css("margin"+c))||0,k[m]-=parseInt(l.css("border"+c+"Width"))||0),k[m]+=d.offset[e]||0,d.over[e]&&(k[m]+=l["x"==b?"width":"height"]()*d.over[e])):(c=l[e],k[m]=c.slice&&"%"==c.slice(-1)?parseFloat(c)/100*u:c);d.limit&&/^\d+$/.test(k[m])&& (k[m]=0>=k[m]?0:Math.min(k[m],u));!a&&d.queue&&(v!=k[m]&&f(d.onAfterFirst),delete k[m])});f(d.onAfter)}}).end()};g.max=function(a,c){var d="x"==c?"Width":"Height",e="scroll"+d;if(!b(a).is("html,body"))return a[e]-b(a)[d.toLowerCase()]();var d="client"+d,g=a.ownerDocument.documentElement,h=a.ownerDocument.body;return Math.max(g[e],h[e])-Math.min(g[d],h[d])}})(jQuery); (function(b){function e(a,d,e){var g=d.hash.slice(1),h=document.getElementById(g)||document.getElementsByName(g)[0];if(h){a&&a.preventDefault();var l=b(e.target);if(!(e.lock&&l.is(":animated")||e.onBefore&&!1===e.onBefore.call(e,a,h,l))){e.stop&&l.stop(!0);if(e.hash){a=h.id==g?"id":"name";var n=b("<a> </a>").attr(a,g).css({position:"absolute",top:b(window).scrollTop(),left:b(window).scrollLeft()});h[a]="";b("body").prepend(n);location=d.hash;n.remove();h[a]=g}l.scrollTo(h,e).trigger("notify.serialScroll", [h])}}}var g=location.href.replace(/#.*/,""),a=b.localScroll=function(a){b("body").localScroll(a)};a.defaults={duration:1E3,axis:"y",event:"click",stop:!0,target:window,reset:!0};a.hash=function(c){if(location.hash){c=b.extend({},a.defaults,c);c.hash=!1;if(c.reset){var d=c.duration;delete c.duration;b(c.target).scrollTo(0,c);c.duration=d}e(0,location,c)}};b.fn.localScroll=function(c){function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==g&&(!c.filter||b(this).is(c.filter))} c=b.extend({},a.defaults,c);return c.lazy?this.bind(c.event,function(a){var g=b([a.target,a.target.parentNode]).filter(d)[0];g&&e(a,g,c)}):this.find("a,area").filter(d).bind(c.event,function(a){e(a,this,c)}).end().end()}})(jQuery);