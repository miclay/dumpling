(function(e){e.TileDrag=function(t,n){var r={},i=this;i.settings={};var s=e(t),o,u,a,f,l,c,h,p,d,v,m,g,y=0,b,w,E,S=0,x,T,N,C,k;i.init=function(){a=i.settings=e.extend({},r,n),o=e(".tiles"),u=e("[data-role=tile-group], .tile-group"),f=u.children(".tile"),f.on("mousedown",L)};var L=function(t){var n,r,i,s;t.preventDefault(),n=l=e(this),h=n.outerWidth(),p=n.outerHeight(),d=e("<div></div>"),d.css({background:"none"}),d.addClass("tile"),n.hasClass("double")?d.addClass("double"):n.hasClass("triple")?d.addClass("triple"):n.hasClass("quadro")&&d.addClass("quadro"),n.hasClass("double-vertical")?d.addClass("double-vertical"):n.hasClass("triple-vertical")?d.addClass("triple-vertical"):n.hasClass("quadro-vertical")&&d.addClass("quadro-vertical"),d.insertAfter(n),T="existing",c=n.parents(".tile-group"),r=n.offset(),i=r.left-(t.pageX-t.clientX),s=r.top-(t.pageY-t.clientY),v=t.clientX-i,m=t.clientY-s,n.detach(),n.insertAfter(e(u.get(-1))),n.css({position:"fixed",left:i,top:s,"z-index":1e5}),n.data("dragging",!0),_(),D(),e(document).on("mousemove.tiledrag",A),e(document).one("mouseup.tiledrag",M),C=!1,u.trigger("drag",[l,c])},A=function(e){C=!0,e.preventDefault(),l.css({left:e.clientX-v,top:e.clientY-m}),clearTimeout(k),k=setTimeout(function(){O(e)},50)},O=function(t){var n,r;n=P(t),n?B(e(f[n])):(r=H(t),r&&j(r.group,r.side))},M=function(t){var n;C?t.preventDefault():l.is("a")&&(window.location.href=l.attr("href")),clearTimeout(k),O(t),l.detach(),T==="existing"?(l.insertAfter(d),n=d.parents(".tile-group"),d.remove()):(x.css({backgroundColor:"",width:"auto","max-width":"322px",height:""}),l.appendTo(x),n=x,x=undefined),c.find(".tile").length===0&&c.remove(),l.css({position:"",left:"",top:"","z-index":""}),l.data("dragging",!1),e(document).off("mousemove.tiledrag"),u=e("[data-role=tile-group], .tile-group"),u.trigger("drop",[l,n]),o.trigger("changed")},_=function(){g={},f.each(function(t,n){var r,i;r=e(n);if(r.data("dragging"))return;i=r.offset(),g[t]={x1:i.left+v-h/2,y1:i.top+m-p/2,x2:i.left+r.outerWidth()+v-h/2,y2:i.top+r.outerHeight()+m-p/2}})},D=function(){N=0,E=[],u.each(function(t){var n,r,i,s;s=e(this),n=s.offset(),r=s.width(),i=s.height(),t===0&&E.push({x1:n.left-70+v-h/2,x2:n.left+v-h/2,y1:n.top+m-p/2,y2:n.top+i+m-p/2,side:"before",group:s}),E.push({x1:n.left+r+v-h/2,x2:n.left+r+70+v-h/2,y1:n.top+m-p/2,y2:n.top+i+m-p/2,side:"after",group:s}),N<i&&(N=i)})},P=function(t){var n,r,i=!1,s;for(n in g){if(!g.hasOwnProperty(n))return;r=g[n];if(r.x1<t.pageX&&t.pageX<r.x2&&r.y1<t.pageY&&t.pageY<r.y2){i=n;break}}return i&&(t.pageX<r.x1+e(f[i]).outerWidth()/2?s="before":s="after"),s===w&&i===b?!1:(w=s,b=i,i)},H=function(e){var t,n,r=!1;for(t in E){if(!E.hasOwnProperty(t))return;n=E[t];if(n.x1<e.pageX&&e.pageX<n.x2&&n.y1<e.pageY&&e.pageY<n.y2){r=n;break}}return r?r:!1},B=function(e){var t,n;t=d,d=t.clone(),T="existing",w==="before"?d.insertBefore(e):d.insertAfter(e),x&&x.remove(),t.remove(),c.find(".tile").length===0&&(n=e.parent(".tile-group"),c[0]!==n[0]&&c.css({width:0,margin:0})),o.trigger("changed"),F()},j=function(t,n){d&&d.remove(),x&&x.remove(),x=e('<div class="tile-group"></div>'),x.css({height:N,width:"70px",backgroundColor:"#333333",position:"relative"}),t[n](x),T="new",c.find(".tile").length===0&&c.css({width:0,margin:0}),o.trigger("changed"),F()},F=function(){_(),D()};i.getGroups=function(){return u},i.init()},e.fn.TileDrag=function(t){var n=e(this[0]);if(undefined==n.data("TileDrag")){var r=new e.TileDrag(n,t),i=r.getGroups();i.data("TileDrag",r)}}})(jQuery),$(function(){var e=$("[data-role=tile-group], .tile-group");e.length>0&&$(e).TileDrag({})})