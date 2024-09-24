import{u as w,p as N,b as R,c as G,f as ot,g as nt,i as H,h as it,j as dt,k as lt,n as g,o as x,q as ct,r as ut,_ as ht,a as pt,t as yt,v as ft}from"./ErrorToast.vue_vue_type_script_setup_true_lang-BN7BVO1t.js";import{d as b,_ as D,o as n,c as l,g as A,t as c,F as _,j as L,a,q as C,k as m,r as f,b as K,s as mt,x as Z,y as z,C as J,z as Q,A as W,B as bt,L as _t,D as Dt,E as gt,i as Ct,G as vt,H as wt,I as B,J as $t,K as X,v as kt,M as It,e as P,f as Ot}from"./index-DoGsBtDF.js";const Tt=b({props:{weatherData:{type:Object,required:!0}},setup(){const t=w();return{parseConditions:N,parseConditionsToText:R,showPrecip:G,store:t}},mounted(){this.initTooltip()},methods:{formatDayInfo(t){return screen.width>=1024?ot(t.datetime):nt(t.datetime)},toggleAccordion(t){this.store.setClickedDayIndex(t)},initTooltip:H("tooltip")}}),xt=["id"],Lt={class:"accordion-item"},St=["id"],Pt=["onClick","data-bs-target","aria-expanded","aria-controls"],At={class:"icon-right"},Ft={class:"degree-right"},Mt=["id","aria-labelledby","data-bs-parent"],jt={class:"accordion-body"},Wt={class:"table table-hover mt-2"},Bt=["title"];function Ut(t,e,s,o,r,d){return n(),l(_,null,[A(c(t.weatherData.description)+" ",1),(n(!0),l(_,null,L(t.weatherData.days,(i,u)=>(n(),l("div",{key:u,class:"accordion",id:"accordionDays"+u},[a("div",Lt,[a("h2",{class:"accordion-header",id:"heading"+u},[a("button",{onClick:y=>t.toggleAccordion(u),class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+u,"aria-expanded":u===0,"aria-controls":"collapse"+u},[A(c(u===0?"Today":t.formatDayInfo(i))+" ",1),a("div",At,c(t.parseConditions(i.icon)),1),a("div",Ft,c(Math.round(i.tempmax))+" º",1)],8,Pt)],8,St),a("div",{id:"collapse"+u,class:"accordion-collapse collapse","aria-labelledby":"heading"+u,"data-bs-parent":"#accordionDays"+u},[a("div",jt,[a("table",Wt,[a("tbody",null,[(n(!0),l(_,null,L(i.hours,y=>(n(),l("tr",{key:y.datetime},[a("td",null,c(y.datetime.slice(0,5)),1),a("td",null,[a("h4",{ref_for:!0,ref:"tooltip",title:t.parseConditionsToText(y.icon)},c(t.parseConditions(y.icon)),9,Bt)]),a("td",null,c(Math.round(y.temp))+" º",1),a("td",null,c(t.showPrecip(y.precip)),1),a("td",null,c(Math.round(y.windspeed/3.6))+" m/s",1)]))),128))])])])],8,Mt)])],8,xt))),128))],64)}const Vt=D(Tt,[["render",Ut]]),qt=b({props:{weatherData:{type:Object,required:!0}},setup(){return{filterNextHours:it,parseConditions:N,parseConditionsToText:R,showPrecip:G}},data(){return{todayData:this.weatherData.days[0]}},mounted(){this.initTooltip()},methods:{initTooltip:H("tooltip")}}),Et={class:"table table-hover mt-2"},Nt=["title"];function Rt(t,e,s,o,r,d){return n(),l(_,null,[A(c(t.todayData.description)+" ",1),a("table",Et,[a("tbody",null,[(n(!0),l(_,null,L(t.filterNextHours(t.todayData,t.weatherData),i=>(n(),l("tr",null,[a("td",null,c(i.datetime.slice(0,5)),1),a("td",null,[a("h4",{ref_for:!0,ref:"tooltip",title:t.parseConditionsToText(i.icon)},c(t.parseConditions(i.icon)),9,Nt)]),a("td",null,c(Math.round(i.temp))+" º",1),a("td",null,c(t.showPrecip(i.precip)),1),a("td",null,c(Math.round(i.windspeed/3.6))+" m/s",1)]))),256))])])],64)}const Gt=D(qt,[["render",Rt]]),Ht=b({props:{weatherData:{type:Object,required:!0}},setup(){return{formatDateTime:dt}}}),Kt={class:"alert alert-warning alert-dismissible fade show",role:"alert"},Zt={class:"alert-heading"},zt=a("hr",null,null,-1),Jt={class:"mb-0"},Qt=a("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1);function Xt(t,e,s,o,r,d){return n(),l("div",Kt,[a("h4",Zt,c(t.weatherData.alerts[0].event),1),a("p",null,c(t.weatherData.alerts[0].description),1),zt,a("p",Jt,[A(" Valid from "),a("b",null,c(t.formatDateTime(t.weatherData.alerts[0].onset)),1),A(" to "),a("b",null,c(t.formatDateTime(t.weatherData.alerts[0].ends)),1)]),Qt])}const Yt=D(Ht,[["render",Xt]]),te=b({components:{WeatherData15Day:Vt,WeatherDataToday:Gt,Alerts:Yt},props:{weatherData:{type:Object,required:!0}},setup(){const t=w();return{store:t,setClickedDayIndex:s=>t.setClickedDayIndex(s)}},data(){return{today:!0,options:[{id:"Today",label:"Today",action:()=>this.setClickedDayIndex(0),value:!0},{id:"15Day",label:"15 Day",value:!1}]}},computed:{isFavoredCity(){return this.store.favoredCities.some(t=>t.city.toLowerCase()===this.weatherData.address.toLowerCase())}},methods:{async favoredCity(){if(!this.isFavoredCity)try{const t=await lt(this.weatherData.address);this.store.favoredCities.push({favored_id:t.favored_id,city:t.city})}catch(t){this.store.addError(t.message)}}}}),Y=t=>(Z("data-v-ef731b6a"),t=t(),z(),t),ee={class:"row align-items-center"},ae={class:"col-md d-flex align-items-center"},se=Y(()=>a("i",{class:"bi bi-heart"},null,-1)),re=[se],oe={key:1,type:"button",class:"btn btn-lg mb-2"},ne=Y(()=>a("i",{style:{color:"#f25ac9"},class:"bi bi-heart-fill"},null,-1)),ie=[ne],de={class:"col-md-auto"},le={class:"nav justify-content-end"},ce=["id","value","onClick"],ue=["for"];function he(t,e,s,o,r,d){const i=f("Alerts"),u=f("WeatherDataToday"),y=f("WeatherData15Day");return n(),l(_,null,[a("div",ee,[t.weatherData.alerts.length>0?(n(),C(i,{key:0,"weather-data":t.weatherData},null,8,["weather-data"])):m("",!0),a("div",ae,[a("h2",null,c(t.weatherData.address),1),t.store.currentUser?(n(),l(_,{key:0},[t.isFavoredCity?t.isFavoredCity?(n(),l("button",oe,ie)):m("",!0):(n(),l("button",{key:0,type:"button",class:"btn btn-lg mb-2",onClick:e[0]||(e[0]=(...h)=>t.favoredCity&&t.favoredCity(...h))},re))],64)):m("",!0)]),a("div",de,[a("nav",le,[(n(!0),l(_,null,L(t.options,h=>(n(),l("div",{key:h.id},[K(a("input",{type:"radio",class:"btn-check",id:h.id,"onUpdate:modelValue":e[1]||(e[1]=v=>t.today=v),value:h.value,onClick:h.action},null,8,ce),[[mt,t.today]]),a("label",{class:"btn",for:h.id},c(h.label),9,ue)]))),128))])])]),a("h5",null,c(t.weatherData.resolvedAddress),1),t.today?(n(),C(u,{key:0,"weather-data":t.weatherData},null,8,["weather-data"])):(n(),C(y,{key:1,"weather-data":t.weatherData},null,8,["weather-data"]))],64)}const pe=D(te,[["render",he],["__scopeId","data-v-ef731b6a"]]),tt={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},ye={ariaLabel:{type:String},ariaDescribedby:{type:String}},fe={type:{type:String,required:!0},destroyDelay:{type:Number,default:0},...tt,...ye},me=Dt[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function T(t){return X(t)?B(t):t}function be(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return X(e)?new Proxy(t,{}):t}function _e(t,e){const s=t.options;s&&e&&Object.assign(s,e)}function et(t,e){t.labels=e}function at(t,e,s){const o=[];t.datasets=e.map(r=>{const d=t.datasets.find(i=>i[s]===r[s]);return!d||!r.data||o.includes(d)?{...r}:(o.push(d),Object.assign(d,r),d)})}function De(t,e){const s={labels:[],datasets:[]};return et(s,t.labels),at(s,t.datasets,e),s}const ge=b({props:fe,setup(t,e){let{expose:s,slots:o}=e;const r=gt(null),d=Q(null);s({chart:d});const i=()=>{if(!r.value)return;const{type:h,data:v,options:I,plugins:$,datasetIdKey:p}=t,S=De(v,p),k=be(S,v);d.value=new J(r.value,{type:h,data:k,options:{...I},plugins:$})},u=()=>{const h=B(d.value);h&&(t.destroyDelay>0?setTimeout(()=>{h.destroy(),d.value=null},t.destroyDelay):(h.destroy(),d.value=null))},y=h=>{h.update(t.updateMode)};return Ct(i),vt(u),wt([()=>t.options,()=>t.data],(h,v)=>{let[I,$]=h,[p,S]=v;const k=B(d.value);if(!k)return;let F=!1;if(I){const O=T(I),M=T(p);O&&O!==M&&(_e(k,O),F=!0)}if($){const O=T($.labels),M=T(S.labels),j=T($.datasets),rt=T(S.datasets);O!==M&&(et(k.config.data,O),F=!0),j&&j!==rt&&(at(k.config.data,j,t.datasetIdKey),F=!0)}F&&$t(()=>{y(k)})},{deep:!0}),()=>W("canvas",{role:"img",ariaLabel:t.ariaLabel,ariaDescribedby:t.ariaDescribedby,ref:r},[W("p",{},[o.default?o.default():""])])}});function st(t,e){return J.register(e),b({props:tt,setup(s,o){let{expose:r}=o;const d=Q(null),i=u=>{d.value=u==null?void 0:u.chart};return r({chart:d}),()=>W(ge,me({ref:i},{type:t,...s}))}})}const Ce=st("bar",bt),V=st("line",_t),ve=b({components:{Bar:Ce},props:{weatherData:{type:Object,required:!0}},setup(){return{store:w()}},computed:{chartData(){return{labels:this.labels,datasets:[{label:"Precipitation in mm",data:this.precipData,backgroundColor:"DeepSkyBlue",borderColor:"DeepSkyBlue"}]}},chartOptions(){return{plugins:{legend:{display:!1},title:{display:!0,text:"Precipitation in mm"}},responsive:!0,interaction:{intersect:!1},scales:{x:{grid:{display:!1}},y:{suggestedMax:5,grid:{display:!0}}}}},todayData(){return this.weatherData.days[this.store.clickedDayIndex]},labels(){return g(this.store.clickedDayIndex,this.todayData,this.weatherData,t=>t.datetime.slice(0,5))},precipData(){return g(this.store.clickedDayIndex,this.todayData,this.weatherData,t=>t.precip.toFixed(1))}}});function we(t,e,s,o,r,d){const i=f("Bar");return n(),C(i,{data:t.chartData,options:t.chartOptions},null,8,["data","options"])}const $e=D(ve,[["render",we]]),ke=b({components:{Line:V},props:{weatherData:{type:Object,required:!0},index:{type:Number,default:0}},setup(){return{store:w()}},computed:{chartData(){return{labels:this.labels,datasets:[{label:"Temperature in °C",data:this.tempData,backgroundColor:"orange",borderColor:"orange",tension:.4,pointRadius:0}]}},chartOptions(){return{plugins:{legend:{display:!1},title:{display:!0,text:"Temperature in °C"}},scales:{x:{grid:{display:!1}},y:{grace:"100%",grid:{display:!0}}},responsive:!0,interaction:{intersect:!1}}},todayData(){return this.weatherData.days[this.store.clickedDayIndex]},labels(){return g(this.store.clickedDayIndex,this.todayData,this.weatherData,t=>t.datetime.slice(0,5))},tempData(){return g(this.store.clickedDayIndex,this.todayData,this.weatherData,t=>Math.round(t.temp))}}});function Ie(t,e,s,o,r,d){const i=f("Line");return n(),C(i,{data:t.chartData,options:t.chartOptions},null,8,["data","options"])}const Oe=D(ke,[["render",Ie]]),U={startInterval:.33,middleInterval:.8,endInterval:.9,startColor:"LightSkyBlue",middleColor:"yellow",endColor:"violet"},q={...U,startColor:"gray"},Te=b({components:{Line:V},setup(){return{store:w()}},props:{weatherData:{type:Object,required:!0}},computed:{chartData(){return{labels:this.labels,datasets:[{label:"Windspeed in m/s",data:this.windSpeedData,backgroundColor:t=>{const e=t.chart,{ctx:s,chartArea:o}=e;if(o)return x(s,o,U)},borderColor:t=>{const e=t.chart,{ctx:s,chartArea:o}=e;if(o)return x(s,o,U)},tension:.4,pointRadius:0},{label:"Windgusts in m/s",data:this.windGustsData,backgroundColor:t=>{const e=t.chart,{ctx:s,chartArea:o}=e;if(o)return x(s,o,q)},borderColor:t=>{const e=t.chart,{ctx:s,chartArea:o}=e;if(o)return x(s,o,q)},tension:.4,pointRadius:0}]}},chartOptions(){return{plugins:{legend:{display:!1},title:{display:!0,text:"Wind in m/s"}},scales:{x:{grid:{display:!1}},y:{suggestedMax:20,beginAtZero:!0,grid:{display:!0}}},responsive:!0,interaction:{intersect:!1}}},todayData(){return this.weatherData.days[this.store.clickedDayIndex]},labels(){return g(this.store.clickedDayIndex,this.todayData,this.weatherData,t=>t.datetime.slice(0,5))},windSpeedData(){return g(this.store.clickedDayIndex,this.todayData,this.weatherData,t=>Math.round(t.windspeed/3.6))},windGustsData(){return g(this.store.clickedDayIndex,this.todayData,this.weatherData,t=>Math.round(t.windgust/3.6))}}});function xe(t,e,s,o,r,d){const i=f("Line");return n(),C(i,{data:t.chartData,options:t.chartOptions},null,8,["data","options"])}const Le=D(Te,[["render",xe]]),Se=b({setup(){return{store:w()}},data(){return{selectedCity:""}},async mounted(){try{const t=await ct();this.store.favoredCities=t}catch(t){this.store.addError(t.message)}},methods:{onSelectedCity(t){this.selectedCity=t,this.$emit("selectedCity",this.selectedCity)},removeFavoredCity(t){try{ut(t),this.store.favoredCities=this.store.favoredCities.filter(e=>e.favored_id!==t)}catch(e){this.store.addError(e.message)}}}}),Pe={key:0,class:"dropdown"},Ae=a("button",{class:"btn dropdown-toggle",type:"button",title:"Favorite cities","data-bs-toggle":"dropdown","aria-expanded":"false"},[a("i",{style:{color:"#ffd43b"},class:"bi bi-star-fill fs-5"})],-1),Fe={class:"dropdown-menu"},Me=["onClick"],je=["onClick"];function We(t,e,s,o,r,d){return t.store.favoredCities.length>0?(n(),l("div",Pe,[Ae,a("ul",Fe,[(n(!0),l(_,null,L(t.store.favoredCities,i=>(n(),l("li",{key:i.favored_id,class:"d-flex align-items-center"},[a("a",{class:"dropdown-item me-auto",href:"#",onClick:u=>t.onSelectedCity(i.city)},c(i.city),9,Me),a("button",{class:"btn text-danger",type:"button",onClick:u=>t.removeFavoredCity(i.favored_id)}," ― ",8,je)]))),128))])])):m("",!0)}const Be=D(Se,[["render",We]]),E={startInterval:.2,middleInterval:.4,endInterval:.8,startColor:"green",middleColor:"yellow",endColor:"violet"},Ue=b({components:{Line:V},setup(){return{store:w()}},props:{weatherData:{type:Object,required:!0}},computed:{chartData(){return{labels:this.labels,datasets:[{label:"UV-Index",data:this.uvData,backgroundColor:t=>{const e=t.chart,{ctx:s,chartArea:o}=e;if(o)return x(s,o,E)},borderColor:t=>{const e=t.chart,{ctx:s,chartArea:o}=e;if(o)return x(s,o,E)},tension:.4,pointRadius:0}]}},chartOptions(){return{plugins:{legend:{display:!1},title:{display:!0,text:"UV-Index"}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,suggestedMax:12,grid:{display:!0}}},responsive:!0,interaction:{intersect:!1}}},todayData(){return this.weatherData.days[this.store.clickedDayIndex]},labels(){return g(this.store.clickedDayIndex,this.todayData,this.weatherData,t=>t.datetime.slice(0,5))},uvData(){return g(this.store.clickedDayIndex,this.todayData,this.weatherData,t=>t.uvindex)}}});function Ve(t,e,s,o,r,d){const i=f("Line");return n(),C(i,{data:t.chartData,options:t.chartOptions},null,8,["data","options"])}const qe=D(Ue,[["render",Ve]]),Ee={components:{ContentLoader:ht,WeatherOverview:pe,FavoriteCityDropdown:Be,ErrorToast:pt,PrecipChart:$e,TempChart:Oe,WindChart:Le,UVChart:qe},setup(){return{store:w()}},data(){return{weatherData:null,loading:!1,city:localStorage.city,lastFetchedCity:localStorage.city,showChart:"temp",charts:[{id:"temp",label:"Temperature"},{id:"precip",label:"Precipitation"},{id:"uv",label:"UV Index"},{id:"wind",label:"Wind"}]}},mounted(){this.fetchData()},methods:{getLocation(){this.loading=!0;const t=s=>{const o=s.coords.latitude,r=s.coords.longitude;this.getCityNameFromCoordinates(o,r)},e=s=>{this.store.addError(s.message),this.loading=!1};navigator.geolocation.getCurrentPosition(t,e,{timeout:1e4,maximumAge:3e4})},async getCityNameFromCoordinates(t,e){try{const o=await(await fetch(yt(t,e))).json();this.city=o.address.city||o.address.town,this.fetchData()}catch(s){this.store.addError(s.message),console.error(s)}},async fetchData(){if(!(this.city==null||this.city===""))try{[this.loading,this.lastFetchedCity]=[!0,this.city],localStorage.city=this.city;const e=await(await fetch(ft(this.city))).json();this.weatherData=e,this.store.setClickedDayIndex(0)}catch(t){console.error(t),this.store.addError(t.message)}finally{this.loading=!1}},setCity(t){this.city=t,this.fetchData()}}},Ne=t=>(Z("data-v-7b41edeb"),t=t(),z(),t),Re={class:"row align-items-md-stretch"},Ge={class:"col-md-6 mb-3"},He={class:"col-md-8 mb-3"},Ke={class:"input-group mb-3"},Ze=["disabled"],ze=["disabled"],Je=Ne(()=>a("i",{style:{color:"#d40000"},class:"bi bi-geo-alt-fill fs-4"},null,-1)),Qe=[Je],Xe={key:0,class:"col-md-6"},Ye={class:"nav justify-content-center mt-custom-4-3"},ta=["id","checked","onClick"],ea=["for"],aa={key:0,class:"p-5"},sa={key:1,class:"p-5"},ra={key:2,class:"p-5"},oa={key:3,class:"p-5"};function na(t,e,s,o,r,d){const i=f("FavoriteCityDropdown"),u=f("WeatherOverview"),y=f("TempChart"),h=f("PrecipChart"),v=f("UVChart"),I=f("WindChart"),$=f("ContentLoader");return n(),l("div",Re,[a("div",Ge,[a("div",He,[a("div",Ke,[K(a("input",{"onUpdate:modelValue":e[0]||(e[0]=p=>r.city=p),type:"input",placeholder:"Enter a city to see its weather!",id:"inputCity",class:"form-control form-control-lg",onKeyup:e[1]||(e[1]=It((...p)=>d.fetchData&&d.fetchData(...p),["enter"])),disabled:r.loading},null,40,Ze),[[kt,r.city]]),a("button",{type:"button",class:"btn btn-no-outline",onClick:e[2]||(e[2]=(...p)=>d.getLocation&&d.getLocation(...p)),disabled:r.loading},Qe,8,ze),o.store.currentUser?(n(),C(i,{key:0,class:"mt-1",onSelectedCity:d.setCity},null,8,["onSelectedCity"])):m("",!0)])]),r.weatherData&&!r.loading?(n(),C(u,{key:0,"weather-data":r.weatherData},null,8,["weather-data"])):m("",!0)]),P($,{loading:r.loading},{default:Ot(()=>[r.weatherData&&!r.loading?(n(),l("div",Xe,[a("nav",Ye,[(n(!0),l(_,null,L(r.charts,p=>(n(),l("div",{key:p.id},[a("input",{type:"radio",class:"btn-check",id:p.id,checked:r.showChart===p.id,onClick:S=>r.showChart=p.id},null,8,ta),a("label",{class:"btn",for:p.id},c(p.label),9,ea)]))),128))]),r.showChart==="temp"?(n(),l("div",aa,[P(y,{"weather-data":r.weatherData},null,8,["weather-data"])])):m("",!0),r.showChart==="precip"?(n(),l("div",sa,[P(h,{"weather-data":r.weatherData},null,8,["weather-data"])])):m("",!0),r.showChart==="uv"?(n(),l("div",ra,[P(v,{"weather-data":r.weatherData},null,8,["weather-data"])])):m("",!0),r.showChart==="wind"?(n(),l("div",oa,[P(I,{"weather-data":r.weatherData},null,8,["weather-data"])])):m("",!0)])):m("",!0)]),_:1},8,["loading"])])}const la=D(Ee,[["render",na],["__scopeId","data-v-7b41edeb"]]);export{la as default};