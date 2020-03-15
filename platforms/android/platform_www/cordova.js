// Platform: android
// 74fdba8b327b2a13b4366dd141b52def96d4cb56
!function(){var PLATFORM_VERSION_BUILD_LABEL="8.1.0",require,define,a,b,c;a={},b=[],c={},require=function(e){if(!a[e])throw"module "+e+" not found";var o,n;if(e in c)throw"Cycle in require graph: "+(b.slice(c[e]).join("->")+"->"+e);if(a[e].factory)try{return c[e]=b.length,b.push(e),o=a[e],n=o.factory,o.exports={},delete o.factory,n(function(e){var n=e;return"."===e.charAt(0)&&(n=o.id.slice(0,o.id.lastIndexOf("."))+"."+e.slice(2)),require(n)},o.exports,o),o.exports}finally{delete c[e],b.pop()}return a[e].exports},(define=function(e,n){if(Object.prototype.hasOwnProperty.call(a,e))throw"module "+e+" already defined";a[e]={id:e,factory:n}}).remove=function(e){delete a[e]},define.moduleMap=a,"object"==typeof module&&"function"==typeof require&&(module.exports.require=require,module.exports.define=define),define("cordova",function(e,n,o){if(window.cordova&&!(window.cordova instanceof HTMLElement))throw new Error("cordova already defined");var r=e("cordova/channel"),t=e("cordova/platform"),i=document.addEventListener,a=document.removeEventListener,s=window.addEventListener,c=window.removeEventListener,d={},l={};function u(e,n){var o=document.createEvent("Events");if(o.initEvent(e,!1,!1),n)for(var r in n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o}document.addEventListener=function(e,n,o){var r=e.toLowerCase();void 0!==d[r]?d[r].subscribe(n):i.call(document,e,n,o)},window.addEventListener=function(e,n,o){var r=e.toLowerCase();void 0!==l[r]?l[r].subscribe(n):s.call(window,e,n,o)},document.removeEventListener=function(e,n,o){var r=e.toLowerCase();void 0!==d[r]?d[r].unsubscribe(n):a.call(document,e,n,o)},window.removeEventListener=function(e,n,o){var r=e.toLowerCase();void 0!==l[r]?l[r].unsubscribe(n):c.call(window,e,n,o)};var f={define:define,require:e,version:PLATFORM_VERSION_BUILD_LABEL,platformVersion:PLATFORM_VERSION_BUILD_LABEL,platformId:t.id,addWindowEventHandler:function(e){return l[e]=r.create(e)},addStickyDocumentEventHandler:function(e){return d[e]=r.createSticky(e)},addDocumentEventHandler:function(e){return d[e]=r.create(e)},removeWindowEventHandler:function(e){delete l[e]},removeDocumentEventHandler:function(e){delete d[e]},getOriginalHandlers:function(){return{document:{addEventListener:i,removeEventListener:a},window:{addEventListener:s,removeEventListener:c}}},fireDocumentEvent:function(e,n,o){var r=u(e,n);void 0!==d[e]?o?d[e].fire(r):setTimeout(function(){"deviceready"===e&&document.dispatchEvent(r),d[e].fire(r)},0):document.dispatchEvent(r)},fireWindowEvent:function(e,n){var o=u(e,n);void 0!==l[e]?setTimeout(function(){l[e].fire(o)},0):window.dispatchEvent(o)},callbackId:Math.floor(2e9*Math.random()),callbacks:{},callbackStatus:{NO_RESULT:0,OK:1,CLASS_NOT_FOUND_EXCEPTION:2,ILLEGAL_ACCESS_EXCEPTION:3,INSTANTIATION_EXCEPTION:4,MALFORMED_URL_EXCEPTION:5,IO_EXCEPTION:6,INVALID_ACTION:7,JSON_EXCEPTION:8,ERROR:9},callbackSuccess:function(e,n){f.callbackFromNative(e,!0,n.status,[n.message],n.keepCallback)},callbackError:function(e,n){f.callbackFromNative(e,!1,n.status,[n.message],n.keepCallback)},callbackFromNative:function(n,o,e,r,t){try{var i=f.callbacks[n];i&&(o&&e===f.callbackStatus.OK?i.success&&i.success.apply(null,r):o||i.fail&&i.fail.apply(null,r),t||delete f.callbacks[n])}catch(e){var a="Error in "+(o?"Success":"Error")+" callbackId: "+n+" : "+e;throw console&&console.log&&console.log(a),console&&console.log&&e.stack&&console.log(e.stack),f.fireWindowEvent("cordovacallbackerror",{message:a}),e}},addConstructor:function(e){r.onCordovaReady.subscribe(function(){try{e()}catch(e){console.log("Failed to run constructor: "+e)}})}};o.exports=f}),define("cordova/android/nativeapiprovider",function(n,e,o){var r=this._cordovaNative||n("cordova/android/promptbasednativeapi"),t=r;o.exports={get:function(){return t},setPreferPrompt:function(e){t=e?n("cordova/android/promptbasednativeapi"):r},set:function(e){t=e}}}),define("cordova/android/promptbasednativeapi",function(e,n,o){o.exports={exec:function(e,n,o,r,t){return prompt(t,"gap:"+JSON.stringify([e,n,o,r]))},setNativeToJsBridgeMode:function(e,n){prompt(n,"gap_bridge_mode:"+e)},retrieveJsMessages:function(e,n){return prompt(+n,"gap_poll:"+e)}}}),define("cordova/argscheck",function(e,n,o){var f=e("cordova/utils"),v=o.exports,p={A:"Array",D:"Date",N:"Number",S:"String",F:"Function",O:"Object"};v.checkArgs=function(e,n,o,r){if(v.enableChecks){for(var t,i,a,s=null,c=0;c<e.length;++c){var d=e.charAt(c),l=d.toUpperCase(),u=o[c];if("*"!==d&&(t=f.typeName(u),(null!=u||d!==l)&&t!==p[l])){s="Expected "+p[l];break}}if(s)throw s+=", but got "+t+".",s='Wrong type for parameter "'+(i=r||o.callee,a=c,/\(\s*([^)]*?)\s*\)/.exec(i)[1].split(/\s*,\s*/)[a])+'" of '+n+": "+s,"undefined"==typeof jasmine&&console.error(s),TypeError(s)}},v.getValue=function(e,n){return void 0===e?n:e},v.enableChecks=!0}),define("cordova/base64",function(e,n,o){var r=n;r.fromArrayBuffer=function(e){return function(e){for(var n,o=e.byteLength,r="",t=s(),i=0;i<o-2;i+=3)n=(e[i]<<16)+(e[i+1]<<8)+e[i+2],r+=t[n>>12],r+=t[4095&n];o-i==2?(n=(e[i]<<16)+(e[i+1]<<8),r+=t[n>>12],r+=a[(4095&n)>>6],r+="="):o-i==1&&(n=e[i]<<16,r+=t[n>>12],r+="==");return r}(new Uint8Array(e))},r.toArrayBuffer=function(e){for(var n="undefined"!=typeof atob?atob(e):Buffer.from(e,"base64").toString("binary"),o=new ArrayBuffer(n.length),r=new Uint8Array(o),t=0,i=n.length;t<i;t++)r[t]=n.charCodeAt(t);return o};var t,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=function(){t=[];for(var e=0;e<64;e++)for(var n=0;n<64;n++)t[64*e+n]=a[e]+a[n];return s=function(){return t},t}}),define("cordova/builder",function(a,t,e){var s=a("cordova/utils");function i(e,n,o){t.replaceHookForTesting(e,n);var r=!1;try{e[n]=o}catch(e){r=!0}!r&&e[n]===o||s.defineGetter(e,n,function(){return o})}function c(e,n,o,r){r?s.defineGetter(e,n,function(){return console.log(r),delete e[n],i(e,n,o),o}):i(e,n,o)}function d(r,e,t,i){!function(e,n,o){for(var r in e)e.hasOwnProperty(r)&&n.apply(o,[e[r],r])}(e,function(e,n){try{var o=e.path?a(e.path):{};t?(void 0===r[n]?c(r,n,o,e.deprecated):void 0!==e.path&&(i?l(r[n],o):c(r,n,o,e.deprecated)),o=r[n]):void 0===r[n]?c(r,n,o,e.deprecated):o=r[n],e.children&&d(o,e.children,t,i)}catch(e){s.alert("Exception building Cordova JS globals: "+e+' for key "'+n+'"')}})}function l(e,n){for(var o in n)n.hasOwnProperty(o)&&(e.prototype&&e.prototype.constructor===e?i(e.prototype,o,n[o]):"object"==typeof n[o]&&"object"==typeof e[o]?l(e[o],n[o]):i(e,o,n[o]))}t.buildIntoButDoNotClobber=function(e,n){d(n,e,!1,!1)},t.buildIntoAndClobber=function(e,n){d(n,e,!0,!1)},t.buildIntoAndMerge=function(e,n){d(n,e,!0,!0)},t.recursiveMerge=l,t.assignOrWrapInDeprecateGetter=c,t.replaceHookForTesting=function(){}}),define("cordova/channel",function(e,n,o){function r(e,n){this.type=e,this.handlers={},this.state=n?1:0,this.fireArgs=null,this.numHandlers=0,this.onHasSubscribersChange=null}var t=e("cordova/utils"),i=1,a={join:function(e,n){function o(){--t||e()}for(var r=n.length,t=r,i=0;i<r;i++){if(0===n[i].state)throw Error("Can only use join with sticky channels.");n[i].subscribe(o)}r||e()},create:function(e){return a[e]=new r(e,!1)},createSticky:function(e){return a[e]=new r(e,!0)},deviceReadyChannelsArray:[],deviceReadyChannelsMap:{},waitForInitialization:function(e){if(e){var n=a[e]||this.createSticky(e);this.deviceReadyChannelsMap[e]=n,this.deviceReadyChannelsArray.push(n)}},initializationComplete:function(e){var n=this.deviceReadyChannelsMap[e];n&&n.fire()}};function s(e){if("function"!=typeof e&&"function"!=typeof e.handleEvent)throw new Error("Must provide a function or an EventListener object implementing the handleEvent interface.")}r.prototype.subscribe=function(e,n){var o,r;s(e),e&&"object"==typeof e?(o=e.handleEvent,n=e):o=e,2!==this.state?(r=e.observer_guid,"object"==typeof n&&(o=t.close(n,o)),r=r||""+i++,o.observer_guid=r,e.observer_guid=r,this.handlers[r]||(this.handlers[r]=o,this.numHandlers++,1===this.numHandlers&&this.onHasSubscribersChange&&this.onHasSubscribersChange())):o.apply(n||this,this.fireArgs)},r.prototype.unsubscribe=function(e){var n;s(e),n=(e&&"object"==typeof e?e.handleEvent:e).observer_guid,this.handlers[n]&&(delete this.handlers[n],this.numHandlers--,0===this.numHandlers&&this.onHasSubscribersChange&&this.onHasSubscribersChange())},r.prototype.fire=function(e){var n=Array.prototype.slice.call(arguments);if(1===this.state&&(this.state=2,this.fireArgs=n),this.numHandlers){var o=[];for(var r in this.handlers)o.push(this.handlers[r]);for(var t=0;t<o.length;++t)o[t].apply(this,n);2===this.state&&this.numHandlers&&(this.numHandlers=0,this.handlers={},this.onHasSubscribersChange&&this.onHasSubscribersChange())}},a.createSticky("onDOMContentLoaded"),a.createSticky("onNativeReady"),a.createSticky("onCordovaReady"),a.createSticky("onPluginsReady"),a.createSticky("onDeviceReady"),a.create("onResume"),a.create("onPause"),a.waitForInitialization("onCordovaReady"),a.waitForInitialization("onDOMContentLoaded"),o.exports=a}),define("cordova/exec",function(require,exports,module){var cordova=require("cordova"),nativeApiProvider=require("cordova/android/nativeapiprovider"),utils=require("cordova/utils"),base64=require("cordova/base64"),channel=require("cordova/channel"),jsToNativeModes={PROMPT:0,JS_OBJECT:1},nativeToJsModes={POLLING:0,LOAD_URL:1,ONLINE_EVENT:2,EVAL_BRIDGE:3},jsToNativeBridgeMode,nativeToJsBridgeMode=nativeToJsModes.EVAL_BRIDGE,pollEnabled=!1,bridgeSecret=-1,messagesFromNative=[],isProcessing=!1,resolvedPromise="undefined"==typeof Promise?null:Promise.resolve(),nextTick=resolvedPromise?function(e){resolvedPromise.then(e)}:function(e){setTimeout(e)};function androidExec(e,n,o,r,t){if(bridgeSecret<0)throw new Error("exec() called without bridgeSecret");void 0===jsToNativeBridgeMode&&androidExec.setJsToNativeBridgeMode(jsToNativeModes.JS_OBJECT),t=t||[];for(var i=0;i<t.length;i++)"ArrayBuffer"==utils.typeName(t[i])&&(t[i]=base64.fromArrayBuffer(t[i]));var a=o+cordova.callbackId++,s=JSON.stringify(t);(e||n)&&(cordova.callbacks[a]={success:e,fail:n});var c=nativeApiProvider.get().exec(bridgeSecret,o,r,a,s);jsToNativeBridgeMode==jsToNativeModes.JS_OBJECT&&"@Null arguments."===c?(androidExec.setJsToNativeBridgeMode(jsToNativeModes.PROMPT),androidExec(e,n,o,r,t),androidExec.setJsToNativeBridgeMode(jsToNativeModes.JS_OBJECT)):c&&(messagesFromNative.push(c),nextTick(processMessages))}function pollOnceFromOnlineEvent(){pollOnce(!0)}function pollOnce(e){if(!(bridgeSecret<0)){var n=nativeApiProvider.get().retrieveJsMessages(bridgeSecret,!!e);n&&(messagesFromNative.push(n),processMessages())}}function pollingTimerFunc(){pollEnabled&&(pollOnce(),setTimeout(pollingTimerFunc,50))}function hookOnlineApis(){function e(e){cordova.fireWindowEvent(e.type)}window.addEventListener("online",pollOnceFromOnlineEvent,!1),window.addEventListener("offline",pollOnceFromOnlineEvent,!1),cordova.addWindowEventHandler("online"),cordova.addWindowEventHandler("offline"),document.addEventListener("online",e,!1),document.addEventListener("offline",e,!1)}function buildPayload(e,n){var o=n.charAt(0);if("s"==o)e.push(n.slice(1));else if("t"==o)e.push(!0);else if("f"==o)e.push(!1);else if("N"==o)e.push(null);else if("n"==o)e.push(+n.slice(1));else if("A"==o){var r=n.slice(1);e.push(base64.toArrayBuffer(r))}else if("S"==o)e.push(window.atob(n.slice(1)));else if("M"==o)for(var t=n.slice(1);""!==t;){var i=t.indexOf(" "),a=+t.slice(0,i),s=t.substr(i+1,a);t=t.slice(i+a+1),buildPayload(e,s)}else e.push(JSON.parse(n))}function processMessage(message){var firstChar=message.charAt(0);if("J"==firstChar)eval(message.slice(1));else if("S"==firstChar||"F"==firstChar){var success="S"==firstChar,keepCallback="1"==message.charAt(1),spaceIdx=message.indexOf(" ",2),status=+message.slice(2,spaceIdx),nextSpaceIdx=message.indexOf(" ",spaceIdx+1),callbackId=message.slice(spaceIdx+1,nextSpaceIdx),payloadMessage=message.slice(nextSpaceIdx+1),payload=[];buildPayload(payload,payloadMessage),cordova.callbackFromNative(callbackId,success,status,payload,keepCallback)}else console.log("processMessage failed: invalid message: "+JSON.stringify(message))}function processMessages(){if(!isProcessing&&0!==messagesFromNative.length){isProcessing=!0;try{var e=popMessageFromQueue();if("*"==e&&0===messagesFromNative.length)return void nextTick(pollOnce);processMessage(e)}finally{isProcessing=!1,0<messagesFromNative.length&&nextTick(processMessages)}}}function popMessageFromQueue(){var e=messagesFromNative.shift();if("*"==e)return"*";var n=e.indexOf(" "),o=+e.slice(0,n),r=e.substr(n+1,o);return(e=e.slice(n+o+1))&&messagesFromNative.unshift(e),r}androidExec.init=function(){bridgeSecret=+prompt("","gap_init:"+nativeToJsBridgeMode),channel.onNativeReady.fire()},hookOnlineApis(),androidExec.jsToNativeModes=jsToNativeModes,androidExec.nativeToJsModes=nativeToJsModes,androidExec.setJsToNativeBridgeMode=function(e){e!=jsToNativeModes.JS_OBJECT||window._cordovaNative||(e=jsToNativeModes.PROMPT),nativeApiProvider.setPreferPrompt(e==jsToNativeModes.PROMPT),jsToNativeBridgeMode=e},androidExec.setNativeToJsBridgeMode=function(e){e!=nativeToJsBridgeMode&&(nativeToJsBridgeMode==nativeToJsModes.POLLING&&(pollEnabled=!1),nativeToJsBridgeMode=e,0<=bridgeSecret&&nativeApiProvider.get().setNativeToJsBridgeMode(bridgeSecret,e),e==nativeToJsModes.POLLING&&(pollEnabled=!0,setTimeout(pollingTimerFunc,1)))},module.exports=androidExec}),define("cordova/exec/proxy",function(e,n,o){var r={};o.exports={add:function(e,n){return console.log("adding proxy for "+e),r[e]=n},remove:function(e){var n=r[e];return delete r[e],r[e]=null,n},get:function(e,n){return r[e]?r[e][n]:null}}}),define("cordova/init",function(e,n,o){var r=e("cordova/channel"),t=e("cordova"),i=e("cordova/modulemapper"),a=e("cordova/platform"),s=e("cordova/pluginloader"),c=e("cordova/utils"),d=[r.onNativeReady,r.onPluginsReady];function l(e){for(var n=0;n<e.length;++n)2!==e[n].state&&console.log("Channel not fired: "+e[n].type)}window.setTimeout(function(){2!==r.onDeviceReady.state&&(console.log("deviceready has not fired after 5 seconds."),l(d),l(r.deviceReadyChannelsArray))},5e3),window.navigator&&(window.navigator=function(n){function e(){}e.prototype=n;var o=new e;if(e.bind)for(var r in n)"function"==typeof n[r]?o[r]=n[r].bind(n):function(e){c.defineGetterSetter(o,r,function(){return n[e]})}(r);return o}(window.navigator)),window.console||(window.console={log:function(){}}),window.console.warn||(window.console.warn=function(e){this.log("warn: "+e)}),r.onPause=t.addDocumentEventHandler("pause"),r.onResume=t.addDocumentEventHandler("resume"),r.onActivated=t.addDocumentEventHandler("activated"),r.onDeviceReady=t.addStickyDocumentEventHandler("deviceready"),"complete"===document.readyState||"interactive"===document.readyState?r.onDOMContentLoaded.fire():document.addEventListener("DOMContentLoaded",function(){r.onDOMContentLoaded.fire()},!1),window._nativeReady&&r.onNativeReady.fire(),i.clobbers("cordova","cordova"),i.clobbers("cordova/exec","cordova.exec"),i.clobbers("cordova/exec","Cordova.exec"),a.bootstrap&&a.bootstrap(),setTimeout(function(){s.load(function(){r.onPluginsReady.fire()})},0),r.join(function(){i.mapModules(window),a.initialize&&a.initialize(),r.onCordovaReady.fire(),r.join(function(){e("cordova").fireDocumentEvent("deviceready")},r.deviceReadyChannelsArray)},d)}),define("cordova/modulemapper",function(p,e,n){var g,m,h=p("cordova/builder"),t=define.moduleMap;function r(e,n,o,r){if(!(n in t))throw new Error("Module "+n+" does not exist.");g.push(e,n,o),r&&(m[o]=r)}function b(e,n){if(!e)return n;for(var o,r=e.split("."),t=n,i=0;o=r[i];++i)t=t[o]=t[o]||{};return t}e.reset=function(){g=[],m={}},e.clobbers=function(e,n,o){r("c",e,n,o)},e.merges=function(e,n,o){r("m",e,n,o)},e.defaults=function(e,n,o){r("d",e,n,o)},e.runs=function(e){r("r",e,null)},e.mapModules=function(e){var n={};e.CDV_origSymbols=n;for(var o=0,r=g.length;o<r;o+=3){var t=g[o],i=g[o+1],a=p(i);if("r"!==t){var s=g[o+2],c=s.lastIndexOf("."),d=s.substr(0,c),l=s.substr(c+1),u=s in m?"Access made to deprecated symbol: "+s+". "+u:null,f=b(d,e),v=f[l];"m"===t&&v?h.recursiveMerge(v,a):("d"!==t||v)&&"d"===t||(s in n||(n[s]=v),h.assignOrWrapInDeprecateGetter(f,l,a,u))}}},e.getOriginalSymbol=function(e,n){var o=e.CDV_origSymbols;if(o&&n in o)return o[n];for(var r=n.split("."),t=e,i=0;i<r.length;++i)t=t&&t[r[i]];return t},e.reset()}),define("cordova/platform",function(s,e,n){var c=null;function d(e){var n=s("cordova"),o=e.action;switch(o){case"backbutton":case"menubutton":case"searchbutton":case"pause":case"volumedownbutton":case"volumeupbutton":n.fireDocumentEvent(o);break;case"resume":if(1<arguments.length&&e.pendingResult){if(2===arguments.length)e.pendingResult.result=arguments[1];else{for(var r=[],t=1;t<arguments.length;t++)r.push(arguments[t]);e.pendingResult.result=r}c=e}n.fireDocumentEvent(o,e);break;default:throw new Error("Unknown event action "+o)}}n.exports={id:"android",bootstrap:function(){var e=s("cordova/channel"),n=s("cordova"),o=s("cordova/exec"),r=s("cordova/modulemapper");o.init(),r.clobbers("cordova/plugin/android/app","navigator.app");var t=4<=Number(n.platformVersion.split(".")[0])?"CoreAndroid":"App";function i(e){n.addDocumentEventHandler(e+"button").onHasSubscribersChange=function(){o(null,null,t,"overrideButton",[e,1==this.numHandlers])}}n.addDocumentEventHandler("backbutton").onHasSubscribersChange=function(){o(null,null,t,"overrideBackbutton",[1==this.numHandlers])},n.addDocumentEventHandler("menubutton"),n.addDocumentEventHandler("searchbutton"),i("volumeup"),i("volumedown");var a=document.addEventListener;document.addEventListener=function(e,n,o){a(e,n,o),"resume"===e&&c&&n(c)},e.onCordovaReady.subscribe(function(){o(d,null,t,"messageChannel",[]),o(null,null,t,"show",[])})}}}),define("cordova/plugin/android/app",function(e,n,o){var r=e("cordova/exec"),t=4<=Number(e("cordova").platformVersion.split(".")[0])?"CoreAndroid":"App";o.exports={clearCache:function(){r(null,null,t,"clearCache",[])},loadUrl:function(e,n){r(null,null,t,"loadUrl",[e,n])},cancelLoadUrl:function(){r(null,null,t,"cancelLoadUrl",[])},clearHistory:function(){r(null,null,t,"clearHistory",[])},backHistory:function(){r(null,null,t,"backHistory",[])},overrideBackbutton:function(e){r(null,null,t,"overrideBackbutton",[e])},overrideButton:function(e,n){r(null,null,t,"overrideButton",[e,n])},exitApp:function(){return r(null,null,t,"exitApp",[])}}}),define("cordova/pluginloader",function(r,t,e){var a=r("cordova/modulemapper");function s(e,n,o,r){r=r||o,e in define.moduleMap?o():t.injectScript(n,function(){(e in define.moduleMap?o:r)()},r)}function i(e,n,o){var r=n.length;if(r)for(var t=0;t<n.length;t++)s(n[t].id,e+n[t].file,i);else o();function i(){--r||function(e,n){for(var o,r=0;o=e[r];r++){if(o.clobbers&&o.clobbers.length)for(var t=0;t<o.clobbers.length;t++)a.clobbers(o.id,o.clobbers[t]);if(o.merges&&o.merges.length)for(var i=0;i<o.merges.length;i++)a.merges(o.id,o.merges[i]);o.runs&&a.runs(o.id)}n()}(n,o)}}t.injectScript=function(e,n,o){var r=document.createElement("script");r.onload=n,r.onerror=o,r.src=e,document.head.appendChild(r)},t.load=function(n){var o=function(){for(var e=null,n=document.getElementsByTagName("script"),o="/cordova.js",r=n.length-1;-1<r;r--){var t=n[r].src.replace(/\?.*$/,"");if(t.indexOf(o)===t.length-o.length){e=t.substring(0,t.length-o.length)+"/";break}}return e}();null===o&&(console.log("Could not find cordova.js script tag. Plugin loading may fail."),o=""),s("cordova/plugin_list",o+"cordova_plugins.js",function(){var e=r("cordova/plugin_list");i(o,e,n)},n)}}),define("cordova/urlutil",function(e,n,o){n.makeAbsolute=function(e){var n=document.createElement("a");return n.href=e,n.href}}),define("cordova/utils",function(e,n,o){var r=n;function t(e){for(var n="",o=0;o<e;o++){var r=parseInt(256*Math.random(),10).toString(16);1===r.length&&(r="0"+r),n+=r}return n}function i(){}r.defineGetterSetter=function(e,n,o,r){if(Object.defineProperty){var t={get:o,configurable:!0};r&&(t.set=r),Object.defineProperty(e,n,t)}else e.__defineGetter__(n,o),r&&e.__defineSetter__(n,r)},r.defineGetter=r.defineGetterSetter,r.arrayIndexOf=function(e,n){if(e.indexOf)return e.indexOf(n);for(var o=e.length,r=0;r<o;++r)if(e[r]===n)return r;return-1},r.arrayRemove=function(e,n){var o=r.arrayIndexOf(e,n);return-1!==o&&e.splice(o,1),-1!==o},r.typeName=function(e){return Object.prototype.toString.call(e).slice(8,-1)},r.isArray=Array.isArray||function(e){return"Array"===r.typeName(e)},r.isDate=function(e){return e instanceof Date},r.clone=function(e){if(!e||"function"==typeof e||r.isDate(e)||"object"!=typeof e)return e;var n,o;if(r.isArray(e)){for(n=[],o=0;o<e.length;++o)n.push(r.clone(e[o]));return n}for(o in n={},e)o in n&&n[o]===e[o]||void 0===e[o]||"unknown"==typeof e[o]||(n[o]=r.clone(e[o]));return n},r.close=function(n,o,r){return function(){var e=r||arguments;return o.apply(n,e)}},r.createUUID=function(){return t(4)+"-"+t(2)+"-"+t(2)+"-"+t(2)+"-"+t(6)},r.extend=function(e,n){i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e.prototype.constructor=e},r.alert=function(e){window.alert?window.alert(e):console&&console.log&&console.log(e)}}),window.cordova=require("cordova"),require("cordova/init")}();
