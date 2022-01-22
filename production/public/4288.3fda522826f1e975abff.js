"use strict";(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[4288],{14288:(B,d,n)=>{n.r(d),n.d(d,{AuthSignInModule:()=>M});var g=n(63423),u=n(51095),f=n(7539),m=n(98295),p=n(76627),h=n(83166),I=n(4885),v=n(15935),A=n(10588),x=n(44466),s=n(3679),y=n(28288),t=n(37716),w=n(88951),Z=n(77001),T=n(38583),C=n(98214);const S=["signInNgForm"];function F(e,i){if(1&e&&(t.TgZ(0,"fuse-alert",29),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),t.xp6(1),t.hij(" ",o.alert.message," ")}}function U(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Email address is required "),t.qZA())}function J(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function N(e,i){1&e&&t._UZ(0,"mat-icon",30),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function b(e,i){1&e&&t._UZ(0,"mat-icon",30),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function Q(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1," Sign in "),t.qZA())}function q(e,i){1&e&&t._UZ(0,"mat-progress-spinner",31),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const Y=[{path:"",component:(()=>{class e{constructor(o,r,a,c,l){this._activatedRoute=o,this._authService=r,this._formBuilder=a,this._router=c,this._snackBar=l,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["",[s.kI.required,s.kI.email]],password:["",s.kI.required],rememberMe:[""]})}signIn(){if(!this.signInForm.invalid){if(this.showAlert=!1,"admin@mkcovid19.com"!==this.signInForm.value.email||"Pakistan@1234"!==this.signInForm.value.password)return void this._snackBar.open("Invalid Credentials","Try again");this._authService.signIn(this.signInForm.value).subscribe(()=>{const o=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(o)},o=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0})}}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(g.gz),t.Y36(w.e),t.Y36(s.qu),t.Y36(g.F0),t.Y36(Z.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-in"]],viewQuery:function(o,r){if(1&o&&t.Gf(S,5),2&o){let a;t.iGM(a=t.CRH())&&(r.signInNgForm=a.first)}},decls:42,vars:14,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-end","justify-between","w-full","mt-1.5"],[3,"color","formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(o,r){if(1&o){const a=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Sign in"),t.qZA(),t.YNc(7,F,2,5,"fuse-alert",6),t.TgZ(8,"form",7,8),t.TgZ(10,"mat-form-field",9),t.TgZ(11,"mat-label"),t._uU(12,"Email address"),t.qZA(),t._UZ(13,"input",10),t.YNc(14,U,2,0,"mat-error",11),t.YNc(15,J,2,0,"mat-error",11),t.qZA(),t.TgZ(16,"mat-form-field",9),t.TgZ(17,"mat-label"),t._uU(18,"Password"),t.qZA(),t._UZ(19,"input",12,13),t.TgZ(21,"button",14),t.NdJ("click",function(){t.CHM(a);const l=t.MAs(20);return l.type="password"===l.type?"text":"password"}),t.YNc(22,N,1,1,"mat-icon",15),t.YNc(23,b,1,1,"mat-icon",15),t.qZA(),t.TgZ(24,"mat-error"),t._uU(25," Password is required "),t.qZA(),t.qZA(),t.TgZ(26,"div",16),t.TgZ(27,"mat-checkbox",17),t._uU(28," Remember me "),t.qZA(),t.qZA(),t.TgZ(29,"button",18),t.NdJ("click",function(){return r.signIn()}),t.YNc(30,Q,2,0,"span",11),t.YNc(31,q,1,2,"mat-progress-spinner",19),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",20),t.O4$(),t.TgZ(33,"svg",21),t.TgZ(34,"g",22),t._UZ(35,"circle",23),t._UZ(36,"circle",24),t.qZA(),t.qZA(),t.TgZ(37,"svg",25),t.TgZ(38,"defs"),t.TgZ(39,"pattern",26),t._UZ(40,"rect",27),t.qZA(),t.qZA(),t._UZ(41,"rect",28),t.qZA(),t.qZA(),t.qZA()}if(2&o){const a=t.MAs(20);t.xp6(7),t.Q6J("ngIf",r.showAlert),t.xp6(1),t.Q6J("formGroup",r.signInForm),t.xp6(5),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",r.signInForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",r.signInForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===a.type),t.xp6(1),t.Q6J("ngIf","text"===a.type),t.xp6(4),t.Q6J("color","primary")("formControlName","rememberMe"),t.xp6(2),t.Q6J("color","primary")("disabled",r.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",!r.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",r.signInForm.disabled)}},directives:[T.O5,s._Y,s.JL,s.sg,m.KE,m.hX,h.Nt,s.Fj,s.JJ,s.u,u.lW,m.R9,m.TO,f.oG,C.W,p.Hw,I.Ou],encapsulation:2,data:{animation:y.L}}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.Bz.forChild(Y),u.ot,f.p9,m.lN,Z.ZX,p.Ps,h.c,I.Cq,v.J,A.fC,x.m]]}),e})()}}]);