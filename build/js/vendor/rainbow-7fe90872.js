window.Rainbow=function(){function e(e){var t,n=e.getAttribute&&e.getAttribute("data-language")||0;if(!n)for(e=e.attributes,t=0;t<e.length;++t)if("data-language"===e[t].nodeName)return e[t].nodeValue;return n}function t(t){var n=e(t)||e(t.parentNode);if(!n){var i=/\blang(?:uage)?-(\w+)/;(t=t.className.match(i)||t.parentNode.className.match(i))&&(n=t[1])}return n}function n(e,t){for(var n in f[y])if(n=parseInt(n,10),(e==n&&t==f[y][n]?0:n>=e&&t>=f[y][n])&&(delete f[y][n],delete p[y][n]),e>=n&&e<f[y][n]||t>n&&t<f[y][n])return!0;return!1}function i(e,t){return'<span class="'+e.replace(/\./g," ")+(u?" "+u:"")+'">'+t+"</span>"}function r(e,t,s,c){var d=e.exec(s);if(d){++v,!t.name&&"string"==typeof t.matches[0]&&(t.name=t.matches[0],delete t.matches[0]);var u=d[0],h=d.index,m=d[0].length+h,g=function(){function n(){r(e,t,s,c)}v%100>0?n():setTimeout(n,0)};if(n(h,m))g();else{var b=a(t.matches),w=function(e,n,r){if(e>=n.length)r(u);else{var a=d[n[e]];if(a){var s=t.matches[n[e]],c=s.language,h=s.name&&s.matches?s.matches:s,p=function(t,a,o){var s;s=0;var l;for(l=1;l<n[e];++l)d[l]&&(s+=d[l].length);a=o?i(o,a):a,u=u.substr(0,s)+u.substr(s).replace(t,a),w(++e,n,r)};c?l(a,c,function(e){p(a,e)}):"string"==typeof s?p(a,a,s):o(a,h.length?h:[h],function(e){p(a,e,s.matches?s.name:0)})}else w(++e,n,r)}};w(0,b,function(e){t.name&&(e=i(t.name,e)),p[y]||(p[y]={},f[y]={}),p[y][h]={replace:d[0],"with":e},f[y][h]=m,g()})}}else c()}function a(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t);return n.sort(function(e,t){return t-e})}function o(e,t,n){function i(t,a){a<t.length?r(t[a].pattern,t[a],e,function(){i(t,++a)}):s(e,function(e){delete p[y],delete f[y],--y,n(e)})}++y,i(t,0)}function s(e,t){function n(e,t,i,r){if(i<t.length){++w;var a=t[i],o=p[y][a],e=e.substr(0,a)+e.substr(a).replace(o.replace,o["with"]),a=function(){n(e,t,++i,r)};w%250>0?a():setTimeout(a,0)}else r(e)}var i=a(p[y]);n(e,i,0,t)}function l(e,t,n){var i=m[t]||[],r=m[b]||[],t=g[t]?i:i.concat(r);o(e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;"),t,n)}function c(e,n,i){if(n<e.length){var r=e[n],a=t(r);return-1<(" "+r.className+" ").indexOf(" rainbow ")||!a?c(e,++n,i):(a=a.toLowerCase(),r.className+=r.className?" rainbow":"rainbow",l(r.innerHTML,a,function(t){r.innerHTML=t,p={},f={},h&&h(r,a),setTimeout(function(){c(e,++n,i)},0)}))}i&&i()}function d(e,t){var n,e=e&&"function"==typeof e.getElementsByTagName?e:document,i=e.getElementsByTagName("pre"),r=e.getElementsByTagName("code"),a=[];for(n=0;n<r.length;++n)a.push(r[n]);for(n=0;n<i.length;++n)i[n].getElementsByTagName("code").length||a.push(i[n]);c(a,0,t)}var u,h,p={},f={},m={},g={},y=0,b=0,v=0,w=0;return{extend:function(e,t,n){1==arguments.length&&(t=e,e=b),g[e]=n,m[e]=t.concat(m[e]||[])},b:function(e){h=e},a:function(e){u=e},color:function(e,t,n){return"string"==typeof e?l(e,t,n):"function"==typeof e?d(0,e):(d(e,t),void 0)}}}(),window.addEventListener?window.addEventListener("load",Rainbow.color,!1):window.attachEvent("onload",Rainbow.color),Rainbow.onHighlight=Rainbow.b,Rainbow.addClass=Rainbow.a;