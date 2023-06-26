(function(){"use strict";var e={1294:function(e,t,n){var r=n(9242),a=n(3396),i=n.p+"img/logo.f2ddc264.svg";const o={key:0,class:"container"},s={key:1,class:"loading"},c=(0,a._)("img",{src:i,alt:""},null,-1),l=[c];function u(e,t,n,r,i,c){const u=(0,a.up)("Navbar"),d=(0,a.up)("Main");return e.weather?((0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(u),(0,a.Wm)(d)])):((0,a.wg)(),(0,a.iD)("div",s,l))}var d=n.p+"img/drop.ee4f4542.svg";const m={class:"nav"},p=(0,a._)("a",{href:"#",class:"logo"},[(0,a._)("img",{src:i,alt:""}),(0,a._)("span",{class:"logo__span"},"vue weather")],-1),g={class:"nav__search"};function _(e,t,n,i,o,s){return(0,a.wg)(),(0,a.iD)("nav",m,[p,(0,a._)("div",g,[(0,a._)("img",{src:d,alt:"",onClick:t[0]||(t[0]=(...e)=>s.darkMode&&s.darkMode(...e))}),(0,a.wy)((0,a._)("input",{type:"text",class:"nav__search-input",placeholder:"Выбрать город","onUpdate:modelValue":t[1]||(t[1]=e=>o.city=e),onKeydown:t[2]||(t[2]=(0,r.D2)((t=>e.getWeather(o.city)),["enter"]))},null,544),[[r.nr,o.city]])])])}var h=n(65),w={name:"WeatherNavbar",data(){return{city:""}},methods:{...(0,h.nv)(["getWeather"]),darkMode(){let e=document.body.style.getPropertyValue("--bg");"white"==e?(document.body.style.setProperty("--bg","rgb(27,27,27)"),document.body.style.setProperty("--text","white")):(document.body.style.setProperty("--bg","white"),document.body.style.setProperty("--text","black"))}}},f=n(89);const v=(0,f.Z)(w,[["render",_]]);var y=v;const b={class:"main"};function k(e,t,n,r,i,o){const s=(0,a.up)("MainContent"),c=(0,a.up)("MainWeek");return(0,a.wg)(),(0,a.iD)("div",b,[(0,a.Wm)(s),(0,a.Wm)(c)])}var M=n(7139),z=n.p+"img/bg.ed86aa79.svg",D=n.p+"img/temp.5012f3aa.svg",W=n.p+"img/pressure.dec93a4d.svg",x=n.p+"img/osadki.b2bec82d.svg",O=n.p+"img/wind.e3f8caaa.svg";const C={class:"main__content"},Z={class:"main__content-left"},j={class:"main__content-left-degree"},P=(0,a._)("p",{class:"main__content-left-today"},"Сегодня",-1),L={class:"main__content-left-time"},S={class:"main__content-left-city"},U={class:"main__content-left-img"},K=["src"],T={class:"main__content-right"},$=(0,a._)("img",{src:z,class:"main__content-right-bg",alt:""},null,-1),I={class:"main__content-right-item"},N=(0,a._)("div",{class:"main__content-right-item-img"},[(0,a._)("img",{src:D,alt:""})],-1),R=(0,a._)("span",null,"Температура",-1),V={class:"main__content-right-item"},q=(0,a._)("div",{class:"main__content-right-item-img"},[(0,a._)("img",{src:W,alt:""})],-1),A=(0,a._)("span",null,"Давление",-1),E={class:"main__content-right-item"},F=(0,a._)("div",{class:"main__content-right-item-img"},[(0,a._)("img",{src:x,alt:""})],-1),H=(0,a._)("span",null,"Осадки",-1),Y={class:"main__content-right-item"},B=(0,a._)("div",{class:"main__content-right-item-img"},[(0,a._)("img",{src:O,alt:""})],-1),G=(0,a._)("span",null,"Ветер",-1);function J(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("div",C,[(0,a._)("div",Z,[(0,a._)("p",j,(0,M.zw)(Math.round(e.weather.current.temp))+"° ",1),P,(0,a._)("p",L,"Время: "+(0,M.zw)(o.getTime),1),(0,a._)("p",S," Город: "+(0,M.zw)(e.weather.name.toUpperCase()),1),(0,a._)("div",U,[(0,a._)("img",{src:o.getImg,alt:""},null,8,K)])]),(0,a._)("div",T,[$,(0,a._)("div",I,[N,R,(0,a._)("p",null,(0,M.zw)(Math.round(e.weather.current.temp))+"° - ощущается как "+(0,M.zw)(Math.round(e.weather.current.feels_like))+"° ",1)]),(0,a._)("div",V,[q,A,(0,a._)("p",null,(0,M.zw)(e.weather.current.pressure)+"мм ртутного столба",1)]),(0,a._)("div",E,[F,H,(0,a._)("p",null,(0,M.zw)(e.weather.current.clouds)+"%",1)]),(0,a._)("div",Y,[B,G,(0,a._)("p",null,(0,M.zw)(e.weather.current.wind_speed)+" м/с",1)])])])}const Q={"дымка":n(5977),"ясно":n(2661),"небольшая облачность":n(5977),"пасмурно":n(5977),"облачно с прояснениями":n(6273),"небольшой дождь":n(8884),"дождь":n(483),"переменная облачность":n(5977)};var X={computed:{...(0,h.rn)(["weather"]),getTime(){return(new Date).toLocaleString("en-US",{timeZone:this.weather.timezone,timeStyle:"short",hourCycle:"h23"})},description(){return this.weather.current.weather[0].description},getImg(){return Q[this.description]||Q["ясно"]}}};const ee=(0,f.Z)(X,[["render",J]]);var te=ee;const ne={class:"main__week"};function re(e,t,n,r,i,o){const s=(0,a.up)("Day");return(0,a.wg)(),(0,a.iD)("div",ne,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.weather.daily,((e,t)=>((0,a.wg)(),(0,a.j4)(s,{key:t,day:e},null,8,["day"])))),128))])}const ae={class:"main__week-item"},ie={class:"main__week-item-title"},oe={class:"main__week-item-date"},se={class:"main__week-item-img"},ce=["src"],le={class:"main__week-item-temp"},ue={class:"main__week-item-feels-like"},de={class:"main__week-item-info"};function me(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("div",ae,[(0,a._)("h2",ie,(0,M.zw)(o.getWeekDay),1),(0,a._)("p",oe,(0,M.zw)(o.getDay)+" "+(0,M.zw)(o.getMonth.substr(0,3)),1),(0,a._)("div",se,[(0,a._)("img",{src:o.getImg,alt:""},null,8,ce)]),(0,a._)("p",le,(0,M.zw)(n.day.temp.max>=1?"+":"")+(0,M.zw)(Math.round(n.day.temp.max))+"°",1),(0,a._)("p",ue,(0,M.zw)(n.day.feels_like.day>1?"+":"")+" "+(0,M.zw)(Math.round(n.day.feels_like.day))+"°",1),(0,a._)("p",de,(0,M.zw)(o.description),1)])}function pe(e,t){const n=1e3*e,r=new Date(n);let a="day"==t?r.toLocaleString("ru-RU",{day:"numeric"}):"month"==t?r.toLocaleString("ru-RU",{month:"short"}):"weekday"==t?r.toLocaleString("ru-RU",{weekday:"short"}):"";return a}var ge=pe,_e={props:{day:{typeof:Object}},computed:{getWeekDay(){return ge(this.day.dt,"weekday")},getDay(){return ge(this.day.dt,"day")},getMonth(){return ge(this.day.dt,"month")},description(){return this.day.weather[0].description},getImg(){return Q[this.description]||Q["ясно"]}}};const he=(0,f.Z)(_e,[["render",me]]);var we=he,fe={props:{},components:{Day:we},computed:{...(0,h.rn)(["weather"])}};const ve=(0,f.Z)(fe,[["render",re]]);var ye=ve,be={components:{MainContent:te,MainWeek:ye}};const ke=(0,f.Z)(be,[["render",k]]);var Me=ke,ze={name:"WeatherApp",components:{Navbar:y,Main:Me},methods:{...(0,h.nv)(["getWeather"])},computed:{...(0,h.rn)(["weather"])},created(){this.getWeather("Ташкент")}};const De=(0,f.Z)(ze,[["render",u]]);var We=De,xe=n(4161),Oe=(0,h.MT)({state:{apiKey:"7695920712a828bbdbc4848fb99a3ee1",weather:null},getters:{},mutations:{getWeather(e,t){e.weather=t}},actions:{async getWeather(e,t){try{let n=await xe.Z.get(`https://api.openweathermap.org/geo/1.0/direct?q=${t}&appid=${e.state.apiKey}`),{lat:r,lon:a,local_names:i}=n.data[0];if(i.ru.toLowerCase()==t.toLowerCase()){let n=await xe.Z.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${r}&lon=${a}&exclude=minutely,hourly,alerts&appid=${e.state.apiKey}&units=metric&lang=ru`);console.log(n);let i={...n.data,name:t};console.log(i),e.commit("getWeather",i)}}catch(n){console.log(n)}}},modules:{}});(0,r.ri)(We).use(Oe).mount("#app")},5977:function(e,t,n){e.exports=n.p+"img/cloud.26d56e75.svg"},8884:function(e,t,n){e.exports=n.p+"img/minirain.0c25ff92.svg"},483:function(e,t,n){e.exports=n.p+"img/rain.433b1bf8.svg"},2661:function(e,t,n){e.exports=n.p+"img/sun.10b0fd02.svg"},6273:function(e,t,n){e.exports=n.p+"img/sunrain.d758b9b6.svg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,i){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/vue-weather/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,o=r[0],s=r[1],c=r[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(t&&t(r);l<o.length;l++)i=o[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self["webpackChunkvueweather"]=self["webpackChunkvueweather"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1294)}));r=n.O(r)})();
//# sourceMappingURL=app.f0b34489.js.map