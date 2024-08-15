import{d as y,_ as w,r as u,o as n,c as r,a as s,w as S,b as h,v as _,e as i,f as b,g as v,F as M,h as I,u as m,i as E,j as V,t as C,n as T,k as W,l as L,m as x,p as B}from"./index-BHxxx-EI.js";import{_ as k,u as U,s as D,M as $,a as N,l as R,m as P,d as q,e as A,b as F}from"./ErrorToast.vue_vue_type_script_setup_true_lang-e-MBEZQN.js";const G="/WeatherApp-client/assets/partially-sunny-B0Tv6pHN.png",j=y({components:{ContentLoader:k},setup(){const{errorsList:e}=U();return{errorsList:e}},data(){return{username:"",email:"",password:"",controlPassword:"",loading:!1}},computed:{passwordsMatch(){return this.password===this.controlPassword}},methods:{async signup(){if(!this.passwordsMatch){this.errorsList.push("Passwords do not match");return}try{this.loading=!0,await D(this.username,this.email,this.password)}catch{this.errorsList.push("Username or email already exists");return}finally{this.loading=!1}const e=this.$refs.signupModal;$.getInstance(e).hide(),this.$emit("signedUp",this.username,this.password)}}}),z={ref:"signupModal",class:"modal fade",tabindex:"-1","aria-labelledby":"signupModalLabel","aria-hidden":"true"},H={class:"modal-dialog"},Z={class:"modal-content"},J=s("div",{class:"modal-header"},[s("h1",{class:"modal-title fs-5",id:"signupModalLabel"},"Sign up"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),K={class:"modal-body"},O={class:"mb-4 form-floating"},Q=s("label",{for:"username",class:"form-label"},"Username",-1),X={class:"mb-4 form-floating"},Y=s("label",{for:"email",class:"form-label"},"Email address",-1),ss={class:"mb-4 form-floating"},es=s("label",{for:"password",class:"form-label"},"Password",-1),os={class:"mb-4 form-floating"},ts=s("label",{for:"controlPassword",class:"form-label"},"Repeat password",-1),as={class:"modal-footer"},ns={type:"submit",class:"btn btn-success"};function ls(e,o,a,p,g,f){const c=u("ContentLoader");return n(),r("div",z,[s("div",H,[s("div",Z,[J,s("div",K,[s("form",{onSubmit:o[4]||(o[4]=S((...t)=>e.signup&&e.signup(...t),["prevent"]))},[s("div",O,[h(s("input",{type:"username",class:"form-control",id:"username","onUpdate:modelValue":o[0]||(o[0]=t=>e.username=t),placeholder:"Username",required:""},null,512),[[_,e.username]]),Q]),s("div",X,[h(s("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":o[1]||(o[1]=t=>e.email=t),placeholder:"Email address",required:""},null,512),[[_,e.email]]),Y]),s("div",ss,[h(s("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":o[2]||(o[2]=t=>e.password=t),placeholder:"Password",required:""},null,512),[[_,e.password]]),es]),s("div",os,[h(s("input",{type:"password",class:"form-control",id:"controlPassword","onUpdate:modelValue":o[3]||(o[3]=t=>e.controlPassword=t),placeholder:"Repeat password",required:""},null,512),[[_,e.controlPassword]]),ts]),s("div",as,[s("button",ns,[i(c,{loading:e.loading},{default:b(()=>[v(" Sign up ")]),_:1},8,["loading"])])])],32)])])])],512)}const rs=w(j,[["render",ls]]),is=y({components:{ContentLoader:k,SignupModal:rs},setup(){const{errorsList:e}=U(),{currentUser:o}=N();return{errorsList:e,currentUser:o}},data(){return{username:null,password:null,loading:!1}},methods:{async loginUser(){try{this.loading=!0,await R(this.username,this.password)}catch{this.errorsList.push("Invalid username or password"),this.loading=!1;return}finally{this.loading=!1}await P(),this.loading=!1;const e=this.$refs.loginModal;$.getInstance(e).hide()},setCredentials(e,o){const a=this.$refs.loginModal;$.getInstance(a).show(),this.username=e,this.password=o,this.loginUser()}}}),ds={id:"loginModal",ref:"loginModal",class:"modal fade",tabindex:"-1","aria-labelledby":"loginModalLabel","aria-hidden":"true"},cs={class:"modal-dialog"},us={class:"modal-content"},ps=s("div",{class:"modal-header"},[s("h1",{class:"modal-title fs-5",id:"loginModalLabel"},"Sign in"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ms={class:"modal-body"},hs={class:"mb-4 form-floating"},_s=["disabled"],bs=s("label",{for:"usernameInput",class:"form-label"},"Username",-1),gs={class:"mb-3 form-floating"},fs=["disabled"],vs=s("label",{for:"inputPassword",class:"form-label"},"Password",-1),ws=s("button",{type:"button",class:"btn btn-link","data-bs-target":"#signupModal","data-bs-toggle":"modal"}," Don't have an account? Sign up ",-1),$s={class:"modal-footer"},ys={type:"submit",class:"btn btn-success"};function Ms(e,o,a,p,g,f){const c=u("ContentLoader"),t=u("SignupModal");return n(),r(M,null,[s("div",ds,[s("div",cs,[s("div",us,[ps,s("form",{onSubmit:o[2]||(o[2]=S((...l)=>e.loginUser&&e.loginUser(...l),["prevent"]))},[s("div",ms,[s("div",hs,[h(s("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.username=l),type:"username",class:"form-control",id:"usernameInput","aria-describedby":"usernamelHelp",disabled:e.loading,placeholder:"Username",required:""},null,8,_s),[[_,e.username]]),bs]),s("div",gs,[h(s("input",{"onUpdate:modelValue":o[1]||(o[1]=l=>e.password=l),type:"password",class:"form-control",id:"inputPassword",disabled:e.loading,placeholder:"Password",required:""},null,8,fs),[[_,e.password]]),vs]),ws]),s("div",$s,[s("button",ys,[i(c,{loading:e.loading},{default:b(()=>[v(" Sign in ")]),_:1},8,["loading"])])])],32)])])],512),i(t,{id:"signupModal",onSignedUp:e.setCredentials},null,8,["onSignedUp"])],64)}const ks=w(is,[["render",Ms]]),Us={class:"navbar navbar-expand-lg border-bottom mb-4",style:{"background-color":"azure"}},Cs={class:"container"},Ls=s("img",{src:G,alt:"Sun behind cloud",height:"50"},null,-1),Ss=s("button",{class:"navbar-toggler border-0 shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),Vs={class:"collapse navbar-collapse",id:"navbarNavDropdown"},Ns={class:"navbar-nav ms-auto"},Ps={key:0,class:"bi bi-house-fill"},Is={key:0},Es={class:"nav-item dropdown"},Ts={class:"btn btn-no-outline nav-link dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},Ws={key:1,class:"nav-item"},xs=s("button",{class:"btn btn-no-outline nav-link text-uppercase",type:"button","data-bs-toggle":"modal","data-bs-target":"#loginModal","aria-expanded":"true"}," Sign in ",-1),Bs=[xs],Ds=y({__name:"Nav",setup(e){const o=W(),a=N(),p=I(()=>o.currentRoute.value.path),g=c=>c===p.value;function f(){q("accesstoken"),a.currentUser=null}return(c,t)=>{const l=u("router-link");return n(),r("div",Us,[s("nav",Cs,[i(l,{to:m(L)[0].path,class:"navbar-brand d-flex align-items-center"},{default:b(()=>[Ls,v(" World Wide Weather ")]),_:1},8,["to"]),Ss,s("div",Vs,[s("ul",Ns,[(n(!0),r(M,null,E(m(L),d=>(n(),r("li",{class:"nav-item text-uppercase",key:d.path},[i(l,{to:d.path,class:T(["nav-link",{active:g(d.path)}]),title:d.children[0].name},{default:b(()=>[d.path==="/"?(n(),r("i",Ps)):V("",!0),v(" "+C(d.path!=="/"?d.children[0].name:""),1)]),_:2},1032,["to","title","class"])]))),128)),i(k,{loading:!m(a).currentUser&&m(A)("accesstoken")},{default:b(()=>[m(a).currentUser?(n(),r("li",Is,[s("div",Es,[s("button",Ts,C(m(a).currentUser.username),1),s("ul",{class:"dropdown-menu"},[s("li",null,[s("a",{class:"dropdown-item text-danger",onClick:f},"Sign out")])])])])):(n(),r("li",Ws,Bs))]),_:1},8,["loading"]),i(ks)])])])])}}}),Rs={},qs={class:"border-top py-3 d-flex justify-content-between align-items-center"},As=x('<section><a href="https://github.com/tordbm/WeatherApp-client" class="text-decoration-none" title="Wheather app by TordBM">tordbm</a><a href="https://github.com/tordbm/WeatherApp-client" class="text-decoration-none ms-1" title="Wheather App in Vue3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g id="feGithub0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="feGithub1" fill="currentColor"><path id="feGithub2" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"></path></g></g></svg></a></section>',1),Fs=[As];function Gs(e,o){return n(),r("div",qs,Fs)}const js=w(Rs,[["render",Gs]]),zs={components:{ErrorToast:F,Nav:Ds,Footer:js},setup(){const{errorsList:e}=U();return{errorsList:e}},mounted(){P()}},Hs={class:"container flex-shrink-0 mb-4 mt-4"},Zs={class:"container footer mb-2 mt-auto"};function Js(e,o,a,p,g,f){const c=u("Nav"),t=u("ErrorToast"),l=u("RouterView"),d=u("Footer");return n(),r(M,null,[i(c),p.errorsList.length>0?(n(),B(t,{key:0})):V("",!0),s("main",Hs,[i(l)]),s("footer",Zs,[i(d)])],64)}const Qs=w(zs,[["render",Js]]);export{Qs as default};
