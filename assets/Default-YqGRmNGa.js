import{d as v,_ as M,r as g,o as a,c as l,a as s,w as V,b as m,v as p,e as i,f as b,g as f,F as k,h as I,u as c,i as N,j as L,t as C,n as E,k as W,l as S,m as q,p as x,q as B}from"./index-6S3p5Ixa.js";import{_ as U,u as w,s as D,M as y,l as R,m as P,d as A,e as T,a as F}from"./ErrorToast.vue_vue_type_script_setup_true_lang-A0idl170.js";const G="/WeatherApp-client/assets/partially-sunny-B0Tv6pHN.png",j=v({components:{ContentLoader:U},setup(){return{store:w()}},data(){return{username:"",email:"",password:"",controlPassword:"",loading:!1}},computed:{passwordsMatch(){return this.password===this.controlPassword}},methods:{async signup(){if(!this.passwordsMatch){this.store.addError("Passwords do not match");return}try{this.loading=!0,await D(this.username,this.email,this.password)}catch{this.store.addError("Username or email already exists");return}finally{this.loading=!1}const e=this.$refs.signupModal;y.getInstance(e).hide(),this.$emit("signedUp",this.username,this.password)}}}),z={ref:"signupModal",class:"modal fade",tabindex:"-1","aria-labelledby":"signupModalLabel","aria-hidden":"true"},H={class:"modal-dialog"},Z={class:"modal-content"},J=s("div",{class:"modal-header"},[s("h1",{class:"modal-title fs-5",id:"signupModalLabel"},"Sign up"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),K={class:"modal-body"},O={class:"mb-4 form-floating"},Q=s("label",{for:"username",class:"form-label"},"Username",-1),X={class:"mb-4 form-floating"},Y=s("label",{for:"email",class:"form-label"},"Email address",-1),ss={class:"mb-4 form-floating"},es=s("label",{for:"password",class:"form-label"},"Password",-1),os={class:"mb-4 form-floating"},ts=s("label",{for:"controlPassword",class:"form-label"},"Repeat password",-1),as={class:"modal-footer"},ns={type:"submit",class:"btn btn-success"};function ls(e,o,n,h,_,$){const u=g("ContentLoader");return a(),l("div",z,[s("div",H,[s("div",Z,[J,s("div",K,[s("form",{onSubmit:o[4]||(o[4]=V((...t)=>e.signup&&e.signup(...t),["prevent"]))},[s("div",O,[m(s("input",{type:"username",class:"form-control",id:"username","onUpdate:modelValue":o[0]||(o[0]=t=>e.username=t),placeholder:"Username",required:""},null,512),[[p,e.username]]),Q]),s("div",X,[m(s("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":o[1]||(o[1]=t=>e.email=t),placeholder:"Email address",required:""},null,512),[[p,e.email]]),Y]),s("div",ss,[m(s("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":o[2]||(o[2]=t=>e.password=t),placeholder:"Password",required:""},null,512),[[p,e.password]]),es]),s("div",os,[m(s("input",{type:"password",class:"form-control",id:"controlPassword","onUpdate:modelValue":o[3]||(o[3]=t=>e.controlPassword=t),placeholder:"Repeat password",required:""},null,512),[[p,e.controlPassword]]),ts]),s("div",as,[s("button",ns,[i(u,{loading:e.loading},{default:b(()=>[f(" Sign up ")]),_:1},8,["loading"])])])],32)])])])],512)}const is=M(j,[["render",ls]]),rs=v({components:{ContentLoader:U,SignupModal:is},setup(){return{store:w()}},data(){return{username:null,password:null,loading:!1}},methods:{async loginUser(){try{this.loading=!0,await R(this.username,this.password)}catch{this.store.addError("Invalid username or password"),this.loading=!1;return}finally{this.loading=!1}await P(),this.loading=!1;const e=this.$refs.loginModal;y.getInstance(e).hide()},setCredentials(e,o){const n=this.$refs.loginModal;y.getInstance(n).show(),this.username=e,this.password=o,this.loginUser()}}}),ds={id:"loginModal",ref:"loginModal",class:"modal fade",tabindex:"-1","aria-labelledby":"loginModalLabel","aria-hidden":"true"},cs={class:"modal-dialog"},us={class:"modal-content"},ms=s("div",{class:"modal-header"},[s("h1",{class:"modal-title fs-5",id:"loginModalLabel"},"Sign in"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ps={class:"modal-body"},hs={class:"mb-4 form-floating"},_s=["disabled"],bs=s("label",{for:"usernameInput",class:"form-label"},"Username",-1),gs={class:"mb-3 form-floating"},fs=["disabled"],vs=s("label",{for:"inputPassword",class:"form-label"},"Password",-1),ws=s("button",{type:"button",class:"btn btn-link","data-bs-target":"#signupModal","data-bs-toggle":"modal"}," Don't have an account? Sign up ",-1),$s={class:"modal-footer"},ys={type:"submit",class:"btn btn-success"};function Ms(e,o,n,h,_,$){const u=g("ContentLoader"),t=g("SignupModal");return a(),l(k,null,[s("div",ds,[s("div",cs,[s("div",us,[ms,s("form",{onSubmit:o[2]||(o[2]=V((...r)=>e.loginUser&&e.loginUser(...r),["prevent"]))},[s("div",ps,[s("div",hs,[m(s("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>e.username=r),type:"username",class:"form-control",id:"usernameInput","aria-describedby":"usernamelHelp",disabled:e.loading,placeholder:"Username",required:""},null,8,_s),[[p,e.username]]),bs]),s("div",gs,[m(s("input",{"onUpdate:modelValue":o[1]||(o[1]=r=>e.password=r),type:"password",class:"form-control",id:"inputPassword",disabled:e.loading,placeholder:"Password",required:""},null,8,fs),[[p,e.password]]),vs]),ws]),s("div",$s,[s("button",ys,[i(u,{loading:e.loading},{default:b(()=>[f(" Sign in ")]),_:1},8,["loading"])])])],32)])])],512),i(t,{id:"signupModal",onSignedUp:e.setCredentials},null,8,["onSignedUp"])],64)}const ks=M(rs,[["render",Ms]]),Us={class:"navbar navbar-expand-lg border-bottom mb-4",style:{"background-color":"azure"}},Cs={class:"container"},Ss=s("img",{src:G,alt:"Sun behind cloud",height:"50"},null,-1),Vs=s("button",{class:"navbar-toggler border-0 shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),Ls={class:"collapse navbar-collapse",id:"navbarNavDropdown"},Ps={class:"navbar-nav ms-auto"},Is={key:0,class:"bi bi-house-fill"},Ns={key:0},Es={class:"nav-item dropdown"},Ws={class:"btn btn-no-outline nav-link dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},qs={key:1,class:"nav-item"},xs=s("button",{class:"btn btn-no-outline nav-link text-uppercase",type:"button","data-bs-toggle":"modal","data-bs-target":"#loginModal","aria-expanded":"true"}," Sign in ",-1),Bs=[xs],Ds=v({__name:"Nav",setup(e){const o=W(),n=w(),h=I(()=>o.currentRoute.value.path),_=u=>u===h.value;function $(){A("accesstoken"),n.currentUser=null}return(u,t)=>{const r=g("router-link");return a(),l("div",Us,[s("nav",Cs,[i(r,{to:c(S)[0].path,class:"navbar-brand d-flex align-items-center"},{default:b(()=>[Ss,f(" World Wide Weather ")]),_:1},8,["to"]),Vs,s("div",Ls,[s("ul",Ps,[(a(!0),l(k,null,N(c(S),d=>(a(),l("li",{class:"nav-item text-uppercase",key:d.path},[i(r,{to:d.path,class:E(["nav-link",{active:_(d.path)}]),title:d.children[0].name},{default:b(()=>[d.path==="/"?(a(),l("i",Is)):L("",!0),f(" "+C(d.path!=="/"?d.children[0].name:""),1)]),_:2},1032,["to","title","class"])]))),128)),i(U,{loading:!c(n).currentUser&&c(T)("accesstoken")},{default:b(()=>[c(n).currentUser?(a(),l("li",Ns,[s("div",Es,[s("button",Ws,C(c(n).currentUser.username),1),s("ul",{class:"dropdown-menu"},[s("li",null,[s("a",{class:"dropdown-item text-danger",onClick:$},"Sign out")])])])])):(a(),l("li",qs,Bs))]),_:1},8,["loading"]),i(ks)])])])])}}}),Rs={},As={class:"border-top py-3 d-flex justify-content-between align-items-center"},Ts=q('<section><a href="https://github.com/tordbm/WeatherApp-client" class="text-decoration-none" title="Wheather app by TordBM">tordbm</a><a href="https://github.com/tordbm/WeatherApp-client" class="text-decoration-none ms-1" title="Wheather App in Vue3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g id="feGithub0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="feGithub1" fill="currentColor"><path id="feGithub2" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"></path></g></g></svg></a></section>',1),Fs=[Ts];function Gs(e,o){return a(),l("div",As,Fs)}const js=M(Rs,[["render",Gs]]),zs={class:"container flex-shrink-0 mb-4 mt-4"},Hs={class:"container footer mb-2 mt-auto"},Ks=v({__name:"Default",setup(e){const{errorsList:o}=w();return x(()=>{P()}),(n,h)=>{const _=g("RouterView");return a(),l(k,null,[i(Ds),c(o).length>0?(a(),B(F,{key:0})):L("",!0),s("main",zs,[i(_)]),s("footer",Hs,[i(js)])],64)}}});export{Ks as default};
