var DISQUS, disqus_config, DsqLocal, disqus_callback, disqus_callback_params, disqus_category_id, disqus_container_id, disqus_custom_strings, disqus_def_email, disqus_def_name, disqus_default_text, disqus_dev, disqus_developer, disqus_domain, disqus_facebook_forum, disqus_facebook_key, disqus_frame_theme, disqus_href, disqus_identifier, disqus_iframe_css, disqus_message, disqus_shortname, disqus_thread_slug, disqus_skip_auth, disqus_sort, disqus_title, disqus_url, disqus_per_page;DISQUS=(function(){var m={}, g, a, b, e=false;g=document.getElementsByTagName("head")[0]||document.getElementById("disqus_thread");b={running:false,timer:null,queue:[]};function h(i){var n=window.onload;if(typeof window.onload!="function"){window.onload=i}else{window.onload=function(){if(n){n()}i()}}}function j(q){var r="http://kwiki.disqus.com/embed.js", n=[/https?:\/\/(www\.)?disqus\.com\/forums\/([\w_\-]+)/i,/https?:\/\/(www\.)?([\w_\-]+)\.disqus\.com/i,/https?:\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_\-]+)/i];if(r){for(var p=0;p<n.length;p++){var o=r.match(n[p]);if(o&&o.length&&o.length==3){return o[2]}}}return null}function l(){var n, q, o;if(!DISQUS.isReady){if(!a){a=window.setInterval(l,500)}return}if(a){clearInterval(a)}n=document.getElementById(disqus_container_id);q=document.getElementsByTagName("iframe");u.setAttribute("allowtransparency",true);o=document.getElementById("dsq-content");if(o){for(var p=0;p<q.length;p++){q[p].style.width=o.offsetWidth}}}function d(){if(b.queue.length===0){b.running=false;clearInterval(b.timer);return}var i=b.queue.shift();if(i[0]()){i[1]()}else{b.queue.push(i)}}function f(i){var n=document.getElementById("dsq-content-progress");if(!n){return}if(typeof i=="undefined"){i=parseInt(n.style.width,10)+10}n.style.width=i+"px"}m.browser={ie:/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent),ie6:(!window.XMLHttpRequest)?true:false,ie7:(document.all&&!window.opera&&window.XMLHttpRequest)?true:false,webkit:navigator.userAgent.indexOf("AppleWebKit/")>-1,opera:!!(window.opera&&window.opera.buildNumber),gecko:navigator.userAgent.indexOf("Gecko/")>-1,mobile:/(iPhone|Android|iPod|iPad|webOS|Mobile Safari)/i.test(navigator.userAgent)};m.cache={buttonsToRestore:[],popupProfileCache:{},popupStatusCache:{},toggledReplies:{},realtime:{interval:null,ongoing_request:null,prev_script:null,last_checked:null,newPosts:[]}};m.states={edit:{},realtime:false,useLoginWindow:false,loginDisabled:false,metaViewport:false}, k=document.getElementsByTagName("meta");for(var c=0;c<k.length;c++){if(k[c].getAttribute("name")=="viewport"){m.states.metaViewport=true;break}}m.blocks={};m.curPageId="dsq-comments";m.frames={};m.config={template:null,callbacks:{preData:[],preInit:[],onInit:[],afterRender:[],onReady:[],onPaginate:[],onNewComment:[]}};m.modules={};m.isReady=false;m.jsonData=null;m.callback=function(s){var p,r,n, q=function(i){if(window.console&&console.log){console.log(i)}};if(arguments.length>1){n=Array.prototype.slice.call(arguments,1)}for(p=0;p<s.length;p++){r=s[p];if(typeof r!="function"){continue}try{r.apply({},n||[])}catch(o){if(o.toString().search("Dsq")>-1){q("WARNING: This page uses deprecated Disqus APIs. See blog.disqus.com for more info")}else{q(o)}}}};m.getResourceURL=function(n,q,i){if(typeof q!="undefined"){if(n.indexOf("?")===-1){n+="?"}else{n+="&"}for(var o in q){if(q.hasOwnProperty(o)){n+=o+"="+encodeURIComponent(q[o]);n+="&"}}}var p=n.slice(n.length-1);if(i){if(p!="&"&&p!="?"){n+="?"}n+=(new Date()).getTime()}return n};m.require=function(o,p,n){var i=document.createElement("script");i.src=m.getResourceURL(o,p,n);i.async=true;i.charset="UTF-8";g.appendChild(i);return m};m.requireStylesheet=function(n,p,i){var o=document.createElement("link");o.rel="stylesheet";o.type="text/css";o.href=m.getResourceURL(n,p,i);g.appendChild(o);return m};m.startLoading=function(){var i, o, r, q, s, n;if(m.browser.ie&&m.config.frame_theme!=="cnn2"){h(l)}r=document.createElement("style");g.appendChild(r);m.cache.inlineStylesheet=r.sheet;if(!m.cache.inlineStylesheet){m.cache.inlineStylesheet=document.styleSheets[document.styleSheets.length-1]}if(m.browser.ie6||m.browser.ie7){n={b:(m.browser.ie6?"ie6":"ie7")}}m.requireStylesheet("http://"+m.config.domain+"/forums/"+m.config.shortname+"/styles.css",n);m.callback(m.config.callbacks.preData);if(m.jsonData===null){m.require(m.config.json_url,m.config.page,true)}o=document.createElement("div");o.id="dsq-content";o.style.display="none";s={wrapper:"height: 15px;width: 300px;border: solid 1px #999;background-color: #fff;margin: 10px 0;",bar:"height: 15px;width: 15px;background-color: #d4e4ff;",problem:"font-size: 8pt;display: none;"};q=document.createElement("div");q.id="dsq-content-stub";q.innerHTML='弹药上膛...<div style="'+s.wrapper+'"><div style="'+s.bar+'">&nbsp;</div></div><div style="'+s.problem+'" id="dsq-loading-problem"><a href="#">Problems loading Disqus?</a></div>';i=document.getElementById(DISQUS.config.container_id);i.appendChild(o);i.appendChild(q);m.container=document.getElementById("dsq-content");window.setTimeout(function(){if(q.style.display!="none"){document.getElementById("dsq-loading-problem").style.display="block"}},10000);try{if(m.browser.ie6){document.execCommand("BackgroundImageCache",false,true)}}catch(p){}m.addJob(function(){return m.jsonData!==null},function(){var y=m.jsonData.settings.media_url, t=y+"/javascript/embed/dtpl/", z=y+"/build/system/", w=y+"/build/lang/", v=m.jsonData.forum.template.css, x=m.jsonData.forum.template.url;m.callback(DISQUS.config.callbacks.preInit);if(m.browser.mobile&&m.states.metaViewport&&!m.jsonData.forum.mobile_theme_disabled){v=y+"/build/themes/mobile.css";x=y+"/build/themes/mobile.js"}else{if(m.config.template){v=m.config.template.css;x=m.config.template.js}}if((window.location.search.indexOf("fbc_channel=1")>-1)||(window.location.search.indexOf("?fb_xd_fragment")>-1)){if(m.jsonData.settings.debug){m.require(x).require(t+"utils.js",{},true).require(t+"api.js",{},true).require(t+"dtpl.js",{},true)}else{m.require(m.jsonData.forum.template.url).require(z+"dsq.js",false)}m.addJob(function(){return m.modules.utils&&m.modules.api&&m.modules.template&&m.modules.dtpl},function(){DISQUS.registerActions(), A=new DISQUS.api.FacebookLoginBox()});return}if(m.jsonData.settings.debug){m.require(x).require(t+"dtpl.js",{},true).require(t+"utils.js",{},true).require(t+"sandbox.js",{},true).require(t+"newframes.js",{},true).require(t+"parentmessenger.js",{},true).require(t+"jsonrpc.js",{},true).require(t+"fragmentpacket.js",{},true).require(t+"postmessagepacket.js",{},true).require(t+"tooltip.js",{},true).require(t+"api.js",{},true).require(t+"ui.js",{},true)}else{m.require(x).require(z+"disqus.js",false);if(m.jsonData.forum.use_new_iframe){var u=document.createElement("iframe");u.style.display="none";u.src=m.jsonData.urls.stats;document.body.appendChild(u)}}if(!window.disqus_no_style){m.requireStylesheet(y+"/styles/embed/thread.css",{},m.jsonData.settings.debug);if(v){m.requireStylesheet(v,{},m.jsonData.settings.debug)}}m.addJob(function(){var B=["utils","sandbox","template","dtpl","NewFrames","ParentMessenger","JsonRpc","api","FragmentPacket","PostMessagePacket","tooltip","ui"];for(var A=0;A<B.length;A++){if(!m.modules[B[A]]){return false}}return true},function(){DISQUS.states.useLoginWindow=!DISQUS.ParentMessenger.isSupported(DISQUS.jsonData.integration.receiver_url);if(m.jsonData.forum.language!="en"){m.require(w+m.jsonData.forum.language+".js")}else{m.modules.lang=true}m.addJob(function(){return m.modules.lang===true},function(){if(m.config.custom_strings){DISQUS.lang.extend(DISQUS.strings.translations,m.config.custom_strings)}if(m.config.def_text===""){m.config.def_text=DISQUS.strings.get("Type your comment here.")}DISQUS.nodes.addClass(o,"clearfix"), A=o.parentNode;A.removeChild(o);o.innerHTML=DISQUS.renderBlock("thread");A.appendChild(o);m.callback(m.config.callbacks.onInit);f();DISQUS.registerActions();DISQUS.dtpl.actions.fire("thread.initialize");f(300);m.callback(m.config.callbacks.afterRender);DISQUS.nodes.container=DISQUS.nodes.get("#dsq-content");o.style.display="block";q.style.display="none";if(m.config.page.anchor_post_id){DISQUS.nodes.scrollTo("#comment-"+m.config.page.anchor_post_id)}DISQUS.dtpl.actions.fire("thread.ready")})})})};m.reload=function(i){DISQUS.jsonData.request.expired=true;m.require(m.config.json_url,m.config.page,true);m.addJob(function(){return !DISQUS.jsonData.request.expired},function(){e=true;if(typeof i=="function"){i()}})};m.redraw=function(n){var i;if(e||n){DISQUS.sandbox.invalidateGlobals();i=DISQUS.nodes.get("#dsq-content");i.innerHTML=DISQUS.renderBlock("thread");DISQUS.frames=[];DISQUS.dtpl.actions.fire("thread.initialize");e=false}};m.addJob=function(n,i){b.queue.push([n,i]);d();if(!b.running){b.running=true;b.timer=setInterval(d,100)}};m.getShortname=function(){var n=document.getElementsByTagName("script");for(var p=n.length-1;p>=0;p--){var o=j(n[p]);if(o!==null){return o}}return null};m.renderBlock=function(i,o){var n=m.blocks[i];if(typeof n=="undefined"){throw"Block "+i+" was not found!"}return DISQUS.sandbox.wrap(i,n,o)};return m}());DISQUS.lang=(function(){var a={};a.contains=function(d,c){for(var b=0;b<d.length;b++){if(d[b]==c){return true}}return false};a.forEach=function(f,g){var d=f.length, e=Array.prototype.forEach;if(d=="number"){if(e){e.call(f,g)}else{for(var c=0;c<d;c++){g(f[c],c,f)}}}else{for(var b in f){if(f.hasOwnProperty(b)){g(f[b],b,f)}}}};a.extend=function(){var d=arguments[0]||{},c=1, b=Array.prototype.slice.call(arguments,1);a.forEach(b,function(e,f){a.forEach(e,function(h,g){d[g]=h})});return d};a.partial=function(){var c=arguments[0], b=Array.prototype.slice.call(arguments,1);return function(){var e=Array.prototype.slice.call(arguments), f=[];for(var d=0;d<b.length;d++){f.push(b[d]===undefined?e.shift():b[d])}while(e.length>0){f.push(e.shift())}return c.apply(this,f)}};a.trim=function(d){d=d.replace(/^\s\s*/,""), b=/\s/,c=d.length;while(b.test(d.charAt(--c))){}return d.slice(0,c+1)};return a}());(function(){var d, a, e=(function(){var g,m=document.getElementsByTagName("META");function n(j,i){return j.hasAttribute?j.hasAttribute(i):j.getAttribute(i)!==null}function l(i){var j=function(o,p){return n(i,o)&&i.getAttribute(o)==p};return j("name","generator")&&j("content","blogger")}function f(i){return !n(i,"src")&&n(i,"name")&&parseInt(i.getAttribute("name"),10)&&i.innerHTML===""}for(var k=0;k<m.length;k++){if(l(m[k])){g=document.getElementsByTagName("A");for(var h=0;h<g.length;h++){if(f(g[h])){return g[h].getAttribute("name")}}}}return null}());DsqLocal=DsqLocal||{};disqus_href=window.location.href;d=disqus_href.indexOf("#");if(d!=-1){disqus_href=disqus_href.substring(0,d)}DISQUS.lang.extend(DISQUS.config,{container_id:disqus_container_id||"disqus_thread",page:{url:(typeof disqus_url=="undefined"||disqus_url==="")?disqus_href:disqus_url,title:disqus_title||"",sort:disqus_sort||"",per_page:disqus_per_page||null,category_id:disqus_category_id||"",developer:(disqus_developer&&disqus_developer!=="0")?1:0,identifier:disqus_identifier||"",trackback_url:DsqLocal.trackback_url||null,trackbacks:DsqLocal.trackbacks||null}});if(e){DISQUS.config.page.blogger_id=e}if(typeof disqus_message=="undefined"){DISQUS.config.message=""}else{a=false;if(DISQUS.browser.ie){for(var c=0;c<disqus_message.length;c++){if(disqus_message.charCodeAt(c)>256){a=true;break}}}if(a){DISQUS.config.message=""}else{if(disqus_message.length>400){DISQUS.config.message=disqus_message.substring(0,disqus_message.indexOf(" ",350))}}}if(typeof disqus_require_moderation_s!="undefined"){DISQUS.config.page.require_mod_s=disqus_require_moderation_s}if(typeof disqus_remote_auth_s2!="undefined"){DISQUS.config.page.remote_auth_s2=disqus_remote_auth_s2}if(typeof disqus_per_page!="undefined"){DISQUS.config.page.per_page=disqus_per_page}if(typeof disqus_author_s2!="undefined"){DISQUS.config.page.author_s2=disqus_author_s2}if(typeof disqus_thread_slug!="undefined"){DISQUS.config.page.slug=disqus_thread_slug}var b;if(window.location.hash){b=window.location.hash.match(/comment\-([0-9]+)/);if(b){DISQUS.config.page.anchor_post_id=b[1]}}DISQUS.config.callback_params=disqus_callback_params||null;if(typeof disqus_callback=="function"){DISQUS.config.callbacks.afterRender.push(function(){disqus_callback(DISQUS.config.callback_params)})}if(typeof disqus_custom_strings=="object"){DISQUS.config.custom_strings=disqus_custom_strings}DISQUS.config.domain=disqus_domain||(disqus_dev?"dev.disqus.org":"disqus.com");DISQUS.config.shortname=disqus_shortname||DISQUS.getShortname();DISQUS.config.iframe_css=disqus_iframe_css||"";DISQUS.config.facebook_forum=disqus_facebook_forum||null;DISQUS.config.facebook_key=disqus_facebook_key||null;DISQUS.config.frame_theme=disqus_frame_theme||null;DISQUS.config.def_name=disqus_def_name||"";DISQUS.config.def_email=disqus_def_email||"";DISQUS.config.def_text=disqus_default_text||"";DISQUS.config.skip_auth=disqus_skip_auth||false;DISQUS.config.json_url="http://"+DISQUS.config.shortname+"."+DISQUS.config.domain+"/thread.js";if(typeof disqus_config=="function"){disqus_config.call(DISQUS.config)}DISQUS.startLoading()})();
