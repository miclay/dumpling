(function(e){e.fn.Accordion=function(t){var n={},r=e(this),i=r.children("li"),s=i.children("a"),o=i.children("div"),u=function(t){t.on("click",function(t){t.preventDefault();var n=e(this),r=n.parent("li").children("div");n.parent("li").hasClass("active")?(r.slideUp(),e(this).parent("li").removeClass("active")):(o.slideUp(),i.removeClass("active"),r.slideDown(),e(this).parent("li").addClass("active"))})};return this.each(function(){t&&e.extend(n,t),u(s)})},e(function(){e('[data-role="accordion"]').each(function(){e(this).Accordion()})})})(window.jQuery)