(function(e){function t(t){for(var r,i,a=t[0],u=t[1],s=t[2],l=0,g=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&g.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);h&&h(t);while(g.length)g.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function i(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"565b512b"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=i(e);var s=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/toio-tilt-controller/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var h=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3785:function(e,t,n){"use strict";n("4570")},4570:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},c=Object(r["g"])("Home"),i=Object(r["g"])(" | "),a=Object(r["g"])("About");function u(e,t){var n=Object(r["w"])("router-link"),u=Object(r["w"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",o,[Object(r["h"])(n,{to:"/"},{default:Object(r["C"])((function(){return[c]})),_:1}),i,Object(r["h"])(n,{to:"/about"},{default:Object(r["C"])((function(){return[a]})),_:1})]),Object(r["h"])(u)],64)}n("3785");var s=n("6b0d"),l=n.n(s);const h={},g=l()(h,[["render",u]]);var b=g,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),f=n("cf05"),m=n.n(f),p={class:"home"};function v(e,t,n,o,c,i){var a=Object(r["w"])("HelloWorld");return Object(r["q"])(),Object(r["e"])("div",p,[Object(r["f"])("img",{onClick:t[0]||(t[0]=function(){return i.changeDebugMode&&i.changeDebugMode.apply(i,arguments)}),alt:"Vue logo",src:m.a}),Object(r["h"])(a,{msg:"かたむきコントローラー","debug-mode":e.debugMode},null,8,["debug-mode"])])}var O=function(e){return Object(r["t"])("data-v-4db186f7"),e=e(),Object(r["r"])(),e},j={class:"hello"},y=Object(r["g"])(" 試作その10 "),w=O((function(){return Object(r["f"])("p",null,[Object(r["g"])(" Vue + web bluetooth による "),Object(r["f"])("br"),Object(r["g"])(" toio ™ core cube 制御サンプルプログラム"),Object(r["f"])("br")],-1)})),x=O((function(){return Object(r["f"])("h3",null,"toio ™ core cube と接続",-1)})),k=O((function(){return Object(r["f"])("br",null,null,-1)})),R={key:0},C={key:0},T=O((function(){return Object(r["f"])("br",null,null,-1)})),E=O((function(){return Object(r["f"])("br",null,null,-1)})),L=Object(r["g"])(" スマホをかたむけるとキューブが動きます "),M=[T,E,L],H={key:1},S=O((function(){return Object(r["f"])("br",null,null,-1)})),A=O((function(){return Object(r["f"])("br",null,null,-1)})),D=Object(r["g"])(" 【接続中】キューブのランプが光るまでおまちください "),P=[S,A,D],_={key:1},I={key:2},U=O((function(){return Object(r["f"])("h3",null,"デバッグ情報",-1)})),q=O((function(){return Object(r["f"])("br",null,null,-1)})),N=O((function(){return Object(r["f"])("br",null,null,-1)})),V=O((function(){return Object(r["f"])("br",null,null,-1)})),W=O((function(){return Object(r["f"])("br",null,null,-1)})),B=O((function(){return Object(r["f"])("br",null,null,-1)})),F=O((function(){return Object(r["f"])("br",null,null,-1)})),J=O((function(){return Object(r["f"])("br",null,null,-1)}));function G(e,t,n,o,c,i){return Object(r["q"])(),Object(r["e"])("div",j,[Object(r["f"])("h1",null,Object(r["y"])(n.msg),1),y,w,x,k,i.isConnecting?(Object(r["q"])(),Object(r["e"])("div",R,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return i.disconnectWithCube&&i.disconnectWithCube.apply(i,arguments)})},"せ つ だ ん"),i.cubeIsReady?(Object(r["q"])(),Object(r["e"])("div",C,M)):(Object(r["q"])(),Object(r["e"])("div",H,P))])):(Object(r["q"])(),Object(r["e"])("div",_,[Object(r["f"])("button",{onClick:t[1]||(t[1]=function(){return i.connectToCube&&i.connectToCube.apply(i,arguments)})},"せ つ ぞ く")])),n.debugMode?(Object(r["q"])(),Object(r["e"])("div",I,[U,Object(r["f"])("div",null,[q,Object(r["g"])(" alpha: "+Object(r["y"])(i.getAlpha)+" ",1),N,Object(r["g"])(" beta: "+Object(r["y"])(i.getBeta)+" ",1),V,Object(r["g"])(" gamma: "+Object(r["y"])(i.getGamma)+" ",1),W,B,Object(r["g"])(" motorL: "+Object(r["y"])(e.motorL)+" motorR: "+Object(r["y"])(e.motorR)+" ",1),F,J]),Object(r["f"])("div",null,[Object(r["D"])(Object(r["f"])("textarea",{readonly:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.logMessages=t})},null,512),[[r["A"],e.logMessages]])])])):Object(r["d"])("",!0)])}var z=n("53ca"),K=n("1da1"),Q=(n("96cf"),n("b680"),n("e9c4"),n("25f0"),n("b0c0"),n("d4ec")),X=n("bee2"),Y=(n("159b"),n("5cc6"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("99af"),n("d81d"),n("820e"),n("b64b"),n("caad"),n("2532"),null),Z=null,$=function(){function e(t){Object(Q["a"])(this,e),this.SERVICE="10b20100-5b3b-4571-9508-cf3efcd7bbae",this.CHARACTERISTIC_LIST=[{name:"position",uuid:"10b20101-5b3b-4571-9508-cf3efcd7bbae"},{name:"motor",uuid:"10b20102-5b3b-4571-9508-cf3efcd7bbae"},{name:"lamp",uuid:"10b20103-5b3b-4571-9508-cf3efcd7bbae"},{name:"sound",uuid:"10b20104-5b3b-4571-9508-cf3efcd7bbae"},{name:"motion",uuid:"10b20106-5b3b-4571-9508-cf3efcd7bbae"},{name:"button",uuid:"10b20107-5b3b-4571-9508-cf3efcd7bbae"},{name:"battery",uuid:"10b20108-5b3b-4571-9508-cf3efcd7bbae"}],this._resetParams(t)}return Object(X["a"])(e,[{key:"_sleep",value:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_resetParams",value:function(e){var t=this;void 0===e?e={name:null,logger:console.log}:(void 0===e.name&&(e.name=null),void 0===e.logger&&(e.logger=console.log)),this.name=e.name,this.logger=e.logger,this.connecting=!1,this.busy=!1,this.moving=!1,Y=null,Z={},this.uuidToChrName={},this.chrNameToUuid={},this.CHARACTERISTIC_LIST.forEach((function(e){Z[e.name]={name:e.name,chr:null,handler:[]},t.uuidToChrName[e.uuid]=e.name,t.chrNameToUuid[e.name]=e.uuid})),this.disconnectHandler=[],this.idCounter=0}},{key:"isConnected",value:function(){return null!==Y?Y.gatt.connected:this.connecting}},{key:"isMoving",value:function(){return this.moving}},{key:"write",value:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=!1,!this.isConnected()||this.busy){e.next=16;break}return this.busy=!0,e.prev=3,e.next=6,Z[t].chr.writeValue(n);case 6:r=!0,e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](3),this.logger("ble write error ".concat(e.t0)),e.t0;case 13:return e.prev=13,this.busy=!1,e.finish(13);case 16:return e.abrupt("return",r);case 17:case"end":return e.stop()}}),e,this,[[3,9,13,16]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"read",value:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=!1,!this.isConnected()||this.busy){e.next=15;break}this.busy=!0,e.prev=3,r=Z[t].chr.readValue(),n=r,e.next=12;break;case 8:throw e.prev=8,e.t0=e["catch"](3),this.logger("ble read error ".concat(e.t0)),e.t0;case 12:return e.prev=12,this.busy=!1,e.finish(12);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e,this,[[3,8,12,15]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setLamp",value:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(t,n,r){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=new Uint8Array([3,0,1,1,t,n,r]),e.abrupt("return",this.write("lamp",o));case 2:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"setMotor",value:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,c,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.logger("".concat(this.name,": move ").concat(t," ").concat(n)),r=t>0?1:2,o=n>0?1:2,c=Math.min(Math.abs(t),255),i=Math.min(Math.abs(n),255),a=new Uint8Array([1,1,r,c,2,o,i]),e.abrupt("return",this.write("motor",a));case 7:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"move",value:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(t,n,r){var o,c,i,a,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.logger("".concat(this.name,": move ").concat(t," ").concat(n," ").concat(r)),o=t>0?1:2,c=n>0?1:2,i=Math.min(Math.abs(t),255),a=Math.min(Math.abs(n),255),u=Math.min(Math.abs(r),255),s=new Uint8Array([2,1,o,i,2,c,a,u]),e.abrupt("return",this.write("motor",s));case 8:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"moveTo",value:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(t,n,r){var o,c,i,a,u,s,l,h,g,b,d,f,m,p,v,O,j,y,w,x,k=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(o=k.length,c=new Array(o>3?o-3:0),i=3;i<o;i++)c[i-3]=k[i];if(a=c[0],this.logger("".concat(this.name,": moveTo ").concat(t,",").concat(n," ").concat(r),a),u="force"in a&&a.force,!0!==u){e.next=8;break}this.logger("force to move"),e.next=11;break;case 8:if(!0!==this.moving){e.next=11;break}return this.logger("moving now"),e.abrupt("return",!1);case 11:return this.moving=!0,s=255&t,l=t>>8&255,h=255&n,g=n>>8&255,b=255&r,d=r>>8&255,void 0===a&&(a={}),f=255&("timeout"in a?a.timeout:8),m=255&("speed"in a?a.speed:64),p=255&("moving"in a?a.moving:0),v=255&("acceleration"in a?a.acceleration:3),O=this.idCounter,this.idCounter=this.idCounter+1&255,this.logger("moving options ".concat(p,", ").concat(v)),j=new Uint8Array([3,O,f,p,m,v,0,s,l,h,g,b,d]),y=this,w=Z["motor"].chr,x=new Promise((function(e,t){var n=this,r=null,o=null;this.logger("add event handler for motor",O);var c=function r(c){n.logger("motorResultHandler event received");var i=c.target.value.getUint8(0),a=c.target.value.getUint8(1);if(3!==i||a!==O)if(n.logger("remove motor result handler & watcher",O),w.removeEventListener("characteristicvaluechanged",r),null!==o&&clearTimeout(o),131===i&&a===O){var u=c.target.value.getUint8(2);n.logger("moveResult ".concat(u),O),0===u?(y.moving=!1,n.logger("moveTo success(handler) ".concat(u," ").concat(i," ").concat(a)),e(y)):(y.moving=!1,n.logger("moveTo failed(handler) ".concat(u," ").concat(i," ").concat(a)),t(u))}else n.logger("unexpected command response(handler) ".concat(i.toString(16)," ").concat(a," ").concat(O)),y.moving=!1,t(-1);else n.logger("moveTo response command(handler) (id:".concat(a," ").concat(O,")"))},i=function(){var r=Object(K["a"])(regeneratorRuntime.mark((function r(){var a,u,s,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.logger("motorResultWatcher",O),r.next=3,y.read("motor");case 3:if(a=r.sent,!1!==a){r.next=6;break}return r.abrupt("return");case 6:if(u=a.getUint8(0),s=a.getUint8(1),3!==u||s!==O){r.next=12;break}return n.logger("find moveTo command, set motor result watcher again (id:".concat(s," ").concat(O,")")),o=setTimeout(i,100*f+100),r.abrupt("return");case 12:n.logger("remove motor result handler & watcher",O),w.removeEventListener("characteristicvaluechanged",c),null!==o&&clearTimeout(o),131===u&&s===O?(l=a.getUint8(2),n.logger("moveResult ".concat(l)),0===l?(y.moving=!1,n.logger("moveTo success(watcher) ".concat(l," ").concat(u," ").concat(s),O),e(y)):(y.moving=!1,n.logger("moveTo failed(watcher) ".concat(l," ").concat(u," ").concat(s),O),t(l))):(n.logger("unexpected command response(watcher) ".concat(u.toString(16)," ").concat(s," ").concat(O)),y.moving=!1,t(-1));case 16:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r=c,this.logger("add motor result handler");var a=w.startNotifications();a.then((function(){n.logger("enableNotify",a),w.addEventListener("characteristicvaluechanged",r),n.logger("set motor result watcher"),o=setTimeout(i,100*f+100),n.logger("start to move"),y.write("motor",j).then((function(e){n.logger("moveTo command success ".concat(e))})).catch((function(e){y.moving=!1,n.logger("moveTo command failed ".concat(e)),t(e)}))})).catch((function(e){y.moving=!1,n.logger("Promise exception handler:",e),t(e)}))})),this.logger("return resolver (pending)",x),e.abrupt("return",x);case 32:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"disconnectDevice",value:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=!1,Y.gatt.connected){e.next=3;break}return e.abrupt("return",!1);case 3:if(!this.busy){e.next=6;break}return this.logger("Busy: can't disconnect"),e.abrupt("return",!1);case 6:return e.prev=6,this.busy=!0,this.logger(Z),r=this.CHARACTERISTIC_LIST.map((function(e){var t=e.name;return c.logger("stop notify ".concat(t)),Z[t].chr.stopNotifications()})),e.next=12,Promise.allSettled(r);case 12:return o=e.sent,o.forEach((function(e){if("fulfilled"===e.status){var t=c.uuidToChrName[e.value.uuid],n=Z[t].handler;c.logger("remove handler ".concat(t)),n.forEach((function(t){e.value.removeEventListener("characteristicvaluechanged",t)}))}else c.logger("promise rejected:",e.reason)})),this.logger("remove disconnectHandler"),this.disconnectHandler.forEach((function(e){Y.removeEventListener("gattserverdisconnected",e)})),this.logger("disconnect"),e.next=19,Y.gatt.disconnect();case 19:n=!0,e.next=30;break;case 22:if(e.prev=22,e.t0=e["catch"](6),this.logger("disconnectDevice:Error"),this.logger(e.t0),void 0===t||!0!==t){e.next=29;break}return e.next=29,Y.gatt.disconnect();case 29:n=!1;case 30:return e.prev=30,this.busy=!1,e.finish(30);case 33:return this._resetParams({name:this.name,logger:this.logger}),e.abrupt("return",n);case 35:case"end":return e.stop()}}),e,this,[[6,22,30,33]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"connectDevice",value:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,c,i,a,u=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=!1,this.logger("***************************************** connect to cube"),!this.busy){e.next=5;break}return this.log("Busy: can't connect"),e.abrupt("return",!1);case 5:return e.prev=5,this.busy=!0,e.next=9,navigator.bluetooth.requestDevice({filters:[{services:[this.SERVICE]}]});case 9:return Y=e.sent,this.connecting=!0,this.logger("******** add disconnect listener"),this.disconnectHandler.push(t),e.next=15,Y.addEventListener("gattserverdisconnected",t);case 15:return e.next=17,Y.gatt.connect();case 17:return r=e.sent,o=function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:u.logger("wait to connect"),n=0;case 2:if(!(n<t)){e.next=11;break}if(!Y.gatt.connected){e.next=6;break}return u.logger("connected: wait counter",n),e.abrupt("return",!0);case 6:return e.next=8,u._sleep(100);case 8:n++,e.next=2;break;case 11:return u.logger("connection timeout"),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.next=21,o(50);case 21:return e.next=23,r.getPrimaryService(this.SERVICE);case 23:return c=e.sent,this.logger(c),i=this.CHARACTERISTIC_LIST.map((function(e){return c.getCharacteristic(e.uuid)})),this.logger(i),e.next=29,Promise.allSettled(i);case 29:a=e.sent,this.logger("******** get characteristics"),this.logger(a),a.forEach((function(e){if("fulfilled"===e.status){console.log(Object(z["a"])(e.value)),console.log(e.value);var t=u.uuidToChrName[e.value.uuid];Z[t].chr=e.value}else u.logger("promise rejected:",e.reason)})),this.logger("******** thisCharacteristics"),this.logger(Z),n=!0,e.next=46;break;case 38:if(e.prev=38,e.t0=e["catch"](5),null===Y){e.next=43;break}return e.next=43,Y.gatt.disconnect();case 43:this.logger("ERROR:connectToDevice(): ".concat(e.t0)),this.connecting=!1,n=!1;case 46:return e.prev=46,this.busy=!1,e.finish(46);case 49:return e.abrupt("return",n);case 50:case"end":return e.stop()}}),e,this,[[5,38,46,49]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"addHandler",value:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=Object.keys(Z),this.logger(r),this.logger("add handler to ".concat(t)),r.includes(t)){e.next=6;break}return this.logger("ERROR:addHandler(): no characteristic ".concat(t)),e.abrupt("return",!1);case 6:return e.prev=6,o=Z[t],this.logger("selected characteristic:",o),o.handler.push(n),c=o.chr,e.next=13,c.startNotifications().then((function(){return c.addEventListener("characteristicvaluechanged",n),!0})).catch((function(){return!1}));case 13:return i=e.sent,this.logger("addEventListenerResult",i),e.abrupt("return",i);case 18:return e.prev=18,e.t0=e["catch"](6),this.logger("ERROR:addHandler(): ".concat(e.t0)),e.abrupt("return",!1);case 22:case"end":return e.stop()}}),e,this,[[6,18]])})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}();function ee(e){var t=0<e?e%2:e%2+2;return 1<t?Math.floor(e+.5):Math.ceil(e-.5)}var te={name:"HelloWorld",props:{msg:String,debugMode:Boolean},data:function(){return{cube:null,ready:!1,connecting:!1,orientation:{alpha:0,beta:0,gamma:0},speed:0,motorR:0,motorL:0,logMessages:""}},computed:{cubeIsReady:function(){return this.ready},getLog:function(){return this.logMessages},isConnecting:function(){return this.connecting},getAlpha:function(){return"number"===typeof this.orientation.alpha?this.orientation.alpha.toFixed(3):0},getBeta:function(){return"number"===typeof this.orientation.beta?this.orientation.beta.toFixed(3):0},getGamma:function(){return"number"===typeof this.orientation.gamma?this.orientation.gamma.toFixed(3):0}},created:function(){console.log("Hello World!"),console.log("This is a test program!"),this.logMessages="",this.cube=new $({name:"cube1",logger:this.debugLog})},mounted:function(){window.DeviceOrientationEvent?(console.log("DeviceOrientation is supported"),DeviceOrientationEvent.requestPermission?(this.appleDevice=!0,this.debugLog("*** Apple Device")):this.debugLog("*** Normal Device")):(this.debugLog("ERROR:DeviceOrientation is not supported"),window.addEventListener("deviceorientation",this.orientationHandler,!1))},beforeUnmount:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.orientationHandler,!1),!this.cube.isConnected()){e.next=5;break}return console.log("force to disconnect with cube"),e.next=5,this.cube.disconnectDevice(!0);case 5:console.log("Bye!");case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{debugLog:function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=console).log.apply(e,n);for(var o="",c=0,i=n;c<i.length;c++){var a=i[c];"object"===Object(z["a"])(a)?(o+=JSON.stringify(a,null,2),o+="\n"):o+=a.toString()}this.logMessages+="\n"+o},reqestPermissionOnAppleDeVice:function(){DeviceOrientationEvent.requestPermission().then((function(e){"granted"===e&&console.log("granted")})).catch((function(e){console.log(e)})),window.addEventListener("deviceorientation",this.orientationHandler,!1)},disconnectHandler:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("disconnect"),this.ready=!1;case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),connectToCube:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.debugLog("connect to ble device"),this.ready=!1,this.connecting=!0,this.cube.isConnected()){e.next=31;break}return e.next=6,this.cube.connectDevice(this.disconnectHandler);case 6:if(t=e.sent,t){e.next=11;break}return console.log("Error:connection failed: 1"),this.connecting=!1,e.abrupt("return");case 11:if(this.cube.isConnected()){e.next=15;break}return console.log("Error:connection failed: 2"),this.connecting=!1,e.abrupt("return");case 15:return this.debugLog("add handler"),e.next=18,this.cube.addHandler("motion",this.motionHandler);case 18:if(t=e.sent,t){e.next=22;break}return this.connecting=!1,e.abrupt("return");case 22:return this.debugLog("lamp on"),e.next=25,this.cube.setLamp(0,96,0);case 25:if(t=e.sent,t){e.next=29;break}return this.connecting=!1,e.abrupt("return");case 29:this.debugLog("success to connect"),this.ready=!0;case 31:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),disconnectWithCube:function(){var e=Object(K["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.cube.isConnected()){e.next=7;break}return e.next=3,this.cube.setLamp(0,0,0);case 3:return e.next=5,this.cube.disconnectDevice(!0);case 5:this.connecting=!1,this.ready=!1;case 7:console.log("disconnect with",this.cube.name);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),orientationHandler:function(e){if(this.orientation.alpha=e.alpha,this.orientation.beta=e.beta,this.orientation.gamma=e.gamma,this.orientation.beta>5?this.speed=-3*(this.orientation.beta-5):this.orientation.beta<-5?this.speed=-3*(this.orientation.beta+5):this.speed=0,this.orientation.gamma>5){var t=Math.min(this.orientation.gamma-5,50);this.motorR=ee(this.speed*(1-t/25)),this.motorL=ee(this.speed)}else if(this.orientation.gamma<-5){var n=Math.max(this.orientation.gamma+5,-50);this.motorR=ee(this.speed),this.motorL=ee(this.speed*(1+n/25))}else this.motorR=ee(this.speed),this.motorL=ee(this.speed);this.ready&&(this.debugLog("motor:",this.motorL,this.motorR),this.cube.setMotor(this.motorL,this.motorR))}}};n("fe10");const ne=l()(te,[["render",G],["__scopeId","data-v-4db186f7"]]);var re=ne,oe={name:"Home",components:{HelloWorld:re},data:function(){return{debugMode:!1}},methods:{changeDebugMode:function(){this.debugMode=!this.debugMode,console.log("change debug mode",this.debugMode)}}};const ce=l()(oe,[["render",v]]);var ie=ce,ae=[{path:"/",name:"Home",component:ie},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ue=Object(d["a"])({history:Object(d["b"])("/toio-tilt-controller/"),routes:ae}),se=ue;Object(r["c"])(b).use(se).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},dbbc:function(e,t,n){},fe10:function(e,t,n){"use strict";n("dbbc")}});
//# sourceMappingURL=app.f5e0f8a6.js.map