import{d as M,_ as w,r as u,o as n,c as r,a as s,w as S,b as h,v as _,e as i,f as b,g as v,F as k,h as P,u as m,i as I,j as V,t as C,n as E,k as T,l as L,m as W,p as x}from"./index-CBFYAmIk.js";import{_ as U,u as $,s as B,M as y,l as D,m as N,d as R,e as q,a as A}from"./ErrorToast.vue_vue_type_script_setup_true_lang-DXWegKJ_.js";const F="/WeatherApp-client/assets/partially-sunny-B0Tv6pHN.png",G=M({components:{ContentLoader:U},setup(){const{errorsList:e}=$();return{errorsList:e}},data(){return{username:"",email:"",password:"",controlPassword:"",loading:!1}},computed:{passwordsMatch(){return this.password===this.controlPassword}},methods:{async signup(){if(!this.passwordsMatch){this.errorsList.push("Passwords do not match");return}try{this.loading=!0,await B(this.username,this.email,this.password)}catch{this.errorsList.push("Username or email already exists");return}finally{this.loading=!1}const e=this.$refs.signupModal;y.getInstance(e).hide(),this.$emit("signedUp",this.username,this.password)}}}),j={ref:"signupModal",class:"modal fade",tabindex:"-1","aria-labelledby":"signupModalLabel","aria-hidden":"true"},z={class:"modal-dialog"},H={class:"modal-content"},Z=s("div",{class:"modal-header"},[s("h1",{class:"modal-title fs-5",id:"signupModalLabel"},"Sign up"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),J={class:"modal-body"},K={class:"mb-4 form-floating"},O=s("label",{for:"username",class:"form-label"},"Username",-1),Q={class:"mb-4 form-floating"},X=s("label",{for:"email",class:"form-label"},"Email address",-1),Y={class:"mb-4 form-floating"},ss=s("label",{for:"password",class:"form-label"},"Password",-1),es={class:"mb-4 form-floating"},os=s("label",{for:"controlPassword",class:"form-label"},"Repeat password",-1),ts={class:"modal-footer"},as={type:"submit",class:"btn btn-success"};function ns(e,o,a,p,g,f){const c=u("ContentLoader");return n(),r("div",j,[s("div",z,[s("div",H,[Z,s("div",J,[s("form",{onSubmit:o[4]||(o[4]=S((...t)=>e.signup&&e.signup(...t),["prevent"]))},[s("div",K,[h(s("input",{type:"username",class:"form-control",id:"username","onUpdate:modelValue":o[0]||(o[0]=t=>e.username=t),placeholder:"Username",required:""},null,512),[[_,e.username]]),O]),s("div",Q,[h(s("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":o[1]||(o[1]=t=>e.email=t),placeholder:"Email address",required:""},null,512),[[_,e.email]]),X]),s("div",Y,[h(s("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":o[2]||(o[2]=t=>e.password=t),placeholder:"Password",required:""},null,512),[[_,e.password]]),ss]),s("div",es,[h(s("input",{type:"password",class:"form-control",id:"controlPassword","onUpdate:modelValue":o[3]||(o[3]=t=>e.controlPassword=t),placeholder:"Repeat password",required:""},null,512),[[_,e.controlPassword]]),os]),s("div",ts,[s("button",as,[i(c,{loading:e.loading},{default:b(()=>[v(" Sign up ")]),_:1},8,["loading"])])])],32)])])])],512)}const ls=w(G,[["render",ns]]),rs=M({components:{ContentLoader:U,SignupModal:ls},setup(){const{errorsList:e,currentUser:o}=$();return{errorsList:e,currentUser:o}},data(){return{username:null,password:null,loading:!1}},methods:{async loginUser(){try{this.loading=!0,await D(this.username,this.password)}catch{this.errorsList.push("Invalid username or password"),this.loading=!1;return}finally{this.loading=!1}await N(),this.loading=!1;const e=this.$refs.loginModal;y.getInstance(e).hide()},setCredentials(e,o){const a=this.$refs.loginModal;y.getInstance(a).show(),this.username=e,this.password=o,this.loginUser()}}}),is={id:"loginModal",ref:"loginModal",class:"modal fade",tabindex:"-1","aria-labelledby":"loginModalLabel","aria-hidden":"true"},ds={class:"modal-dialog"},cs={class:"modal-content"},us=s("div",{class:"modal-header"},[s("h1",{class:"modal-title fs-5",id:"loginModalLabel"},"Sign in"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ps={class:"modal-body"},ms={class:"mb-4 form-floating"},hs=["disabled"],_s=s("label",{for:"usernameInput",class:"form-label"},"Username",-1),bs={class:"mb-3 form-floating"},gs=["disabled"],fs=s("label",{for:"inputPassword",class:"form-label"},"Password",-1),vs=s("button",{type:"button",class:"btn btn-link","data-bs-target":"#signupModal","data-bs-toggle":"modal"}," Don't have an account? Sign up ",-1),ws={class:"modal-footer"},$s={type:"submit",class:"btn btn-success"};function ys(e,o,a,p,g,f){const c=u("ContentLoader"),t=u("SignupModal");return n(),r(k,null,[s("div",is,[s("div",ds,[s("div",cs,[us,s("form",{onSubmit:o[2]||(o[2]=S((...l)=>e.loginUser&&e.loginUser(...l),["prevent"]))},[s("div",ps,[s("div",ms,[h(s("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.username=l),type:"username",class:"form-control",id:"usernameInput","aria-describedby":"usernamelHelp",disabled:e.loading,placeholder:"Username",required:""},null,8,hs),[[_,e.username]]),_s]),s("div",bs,[h(s("input",{"onUpdate:modelValue":o[1]||(o[1]=l=>e.password=l),type:"password",class:"form-control",id:"inputPassword",disabled:e.loading,placeholder:"Password",required:""},null,8,gs),[[_,e.password]]),fs]),vs]),s("div",ws,[s("button",$s,[i(c,{loading:e.loading},{default:b(()=>[v(" Sign in ")]),_:1},8,["loading"])])])],32)])])],512),i(t,{id:"signupModal",onSignedUp:e.setCredentials},null,8,["onSignedUp"])],64)}const Ms=w(rs,[["render",ys]]),ks={class:"navbar navbar-expand-lg border-bottom mb-4",style:{"background-color":"azure"}},Us={class:"container"},Cs=s("img",{src:F,alt:"Sun behind cloud",height:"50"},null,-1),Ls=s("button",{class:"navbar-toggler border-0 shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),Ss={class:"collapse navbar-collapse",id:"navbarNavDropdown"},Vs={class:"navbar-nav ms-auto"},Ns={key:0,class:"bi bi-house-fill"},Ps={key:0},Is={class:"nav-item dropdown"},Es={class:"btn btn-no-outline nav-link dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},Ts={key:1,class:"nav-item"},Ws=s("button",{class:"btn btn-no-outline nav-link text-uppercase",type:"button","data-bs-toggle":"modal","data-bs-target":"#loginModal","aria-expanded":"true"}," Sign in ",-1),xs=[Ws],Bs=M({__name:"Nav",setup(e){const o=T(),a=$(),p=P(()=>o.currentRoute.value.path),g=c=>c===p.value;function f(){R("accesstoken"),a.currentUser=null}return(c,t)=>{const l=u("router-link");return n(),r("div",ks,[s("nav",Us,[i(l,{to:m(L)[0].path,class:"navbar-brand d-flex align-items-center"},{default:b(()=>[Cs,v(" World Wide Weather ")]),_:1},8,["to"]),Ls,s("div",Ss,[s("ul",Vs,[(n(!0),r(k,null,I(m(L),d=>(n(),r("li",{class:"nav-item text-uppercase",key:d.path},[i(l,{to:d.path,class:E(["nav-link",{active:g(d.path)}]),title:d.children[0].name},{default:b(()=>[d.path==="/"?(n(),r("i",Ns)):V("",!0),v(" "+C(d.path!=="/"?d.children[0].name:""),1)]),_:2},1032,["to","title","class"])]))),128)),i(U,{loading:!m(a).currentUser&&m(q)("accesstoken")},{default:b(()=>[m(a).currentUser?(n(),r("li",Ps,[s("div",Is,[s("button",Es,C(m(a).currentUser.username),1),s("ul",{class:"dropdown-menu"},[s("li",null,[s("a",{class:"dropdown-item text-danger",onClick:f},"Sign out")])])])])):(n(),r("li",Ts,xs))]),_:1},8,["loading"]),i(Ms)])])])])}}}),Ds={},Rs={class:"border-top py-3 d-flex justify-content-between align-items-center"},qs=W('<section><a href="https://github.com/tordbm/WeatherApp-client" class="text-decoration-none" title="Wheather app by TordBM">tordbm</a><a href="https://github.com/tordbm/WeatherApp-client" class="text-decoration-none ms-1" title="Wheather App in Vue3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g id="feGithub0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="feGithub1" fill="currentColor"><path id="feGithub2" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"></path></g></g></svg></a></section>',1),As=[qs];function Fs(e,o){return n(),r("div",Rs,As)}const Gs=w(Ds,[["render",Fs]]),js={components:{ErrorToast:A,Nav:Bs,Footer:Gs},setup(){const{errorsList:e}=$();return{errorsList:e}},mounted(){N()}},zs={class:"container flex-shrink-0 mb-4 mt-4"},Hs={class:"container footer mb-2 mt-auto"};function Zs(e,o,a,p,g,f){const c=u("Nav"),t=u("ErrorToast"),l=u("RouterView"),d=u("Footer");return n(),r(k,null,[i(c),p.errorsList.length>0?(n(),x(t,{key:0})):V("",!0),s("main",zs,[i(l)]),s("footer",Hs,[i(d)])],64)}const Os=w(js,[["render",Zs]]);export{Os as default};
