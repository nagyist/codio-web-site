!function(){$(function(){var e,t,n,i,a,r,o;return n=$("#social-icons"),e=$("aside"),i=e.offset(),a=e.find("li"),r=a.find("a"),o=$("section"),t=e.height(),i.top-=85,i.left=$(".container",o.first()).offset().left,e.css("left",i.left),$(window).on("resize",function(){return i.left=$(".container",o.first()).offset().left,e.css("left",i.left)}),$(window).on("scroll",function(){var l;return l=$(document).scrollTop(),l>=i.top&&!e.hasClass("fixed")?(e.addClass("fixed"),n.addClass("fixed")):l<=i.top&&(e.removeClass("fixed"),n.removeClass("fixed")),l<i.top?void 0:o.each(function(e,n){var i,o;return o=$(n),o.data().frame||o.data({frame:{top:o.offset().top,bottom:o.offset().top+o.height()},link:r.filter('[href="#'+o.attr("id")+'"]')}),i=l+t/2,i>=o.data().frame.top&&i<=o.data().frame.bottom?(a.removeClass("active"),o.data().link.closest("li").addClass("active")):void 0})})})}.call(this);