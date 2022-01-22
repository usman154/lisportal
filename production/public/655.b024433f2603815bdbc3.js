"use strict";(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[655],{10655:(k,c,s)=>{s.r(c),s.d(c,{AuthResetPasswordModule:()=>Y});var u=s(63423),f=s(51095),m=s(98295),g=s(76627),p=s(83166),h=s(4885),w=s(15935),Z=s(10588),v=s(44466),a=s(3679),x=s(68939),A=s(28288),y=s(14485),e=s(37716),T=s(88951),P=s(38583),C=s(98214);const U=["resetPasswordNgForm"];function R(t,r){if(1&t&&(e.TgZ(0,"fuse-alert",41),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),e.xp6(1),e.hij(" ",o.alert.message," ")}}function J(t,r){1&t&&e._UZ(0,"mat-icon",42),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function I(t,r){1&t&&e._UZ(0,"mat-icon",42),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function b(t,r){1&t&&e._UZ(0,"mat-icon",42),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function q(t,r){1&t&&e._UZ(0,"mat-icon",42),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function _(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Password confirmation is required "),e.qZA())}function F(t,r){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Passwords must match "),e.qZA())}function N(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1," Reset your password "),e.qZA())}function Q(t,r){1&t&&e._UZ(0,"mat-progress-spinner",43),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const M=function(){return["/sign-in"]},j=[{path:"",component:(()=>{class t{constructor(o,n){this._authService=o,this._formBuilder=n,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.resetPasswordForm=this._formBuilder.group({password:["",a.kI.required],passwordConfirm:["",a.kI.required]},{validators:y.a.mustMatch("password","passwordConfirm")})}resetPassword(){this.resetPasswordForm.invalid||(this.resetPasswordForm.disable(),this.showAlert=!1,this._authService.resetPassword(this.resetPasswordForm.get("password").value).pipe((0,x.x)(()=>{this.resetPasswordForm.enable(),this.resetPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(o=>{this.alert={type:"success",message:"Your password has been reset."}},o=>{this.alert={type:"error",message:"Something went wrong, please try again."}}))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(T.e),e.Y36(a.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-reset-password"]],viewQuery:function(o,n){if(1&o&&e.Gf(U,5),2&o){let i;e.iGM(i=e.CRH())&&(n.resetPasswordNgForm=i.first)}},decls:66,vars:16,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["resetPasswordNgForm","ngForm"],[1,"w-full"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","password-confirm","matInput","","type","password",3,"formControlName"],["passwordConfirmField",""],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(o,n){if(1&o){const i=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Reset your password"),e.qZA(),e.TgZ(7,"div",6),e._uU(8,"Create a new password for your account"),e.qZA(),e.YNc(9,R,2,5,"fuse-alert",7),e.TgZ(10,"form",8,9),e.TgZ(12,"mat-form-field",10),e.TgZ(13,"mat-label"),e._uU(14,"Password"),e.qZA(),e._UZ(15,"input",11,12),e.TgZ(17,"button",13),e.NdJ("click",function(){e.CHM(i);const d=e.MAs(16);return d.type="password"===d.type?"text":"password"}),e.YNc(18,J,1,1,"mat-icon",14),e.YNc(19,I,1,1,"mat-icon",14),e.qZA(),e.TgZ(20,"mat-error"),e._uU(21," Password is required "),e.qZA(),e.qZA(),e.TgZ(22,"mat-form-field",10),e.TgZ(23,"mat-label"),e._uU(24,"Password (Confirm)"),e.qZA(),e._UZ(25,"input",15,16),e.TgZ(27,"button",13),e.NdJ("click",function(){e.CHM(i);const d=e.MAs(26);return d.type="password"===d.type?"text":"password"}),e.YNc(28,b,1,1,"mat-icon",14),e.YNc(29,q,1,1,"mat-icon",14),e.qZA(),e.YNc(30,_,2,0,"mat-error",17),e.YNc(31,F,2,0,"mat-error",17),e.qZA(),e.TgZ(32,"button",18),e.NdJ("click",function(){return n.resetPassword()}),e.YNc(33,N,2,0,"span",17),e.YNc(34,Q,1,2,"mat-progress-spinner",19),e.qZA(),e.TgZ(35,"div",20),e.TgZ(36,"span"),e._uU(37,"Return to"),e.qZA(),e.TgZ(38,"a",21),e._uU(39,"sign in "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(40,"div",22),e.O4$(),e.TgZ(41,"svg",23),e.TgZ(42,"g",24),e._UZ(43,"circle",25),e._UZ(44,"circle",26),e.qZA(),e.qZA(),e.TgZ(45,"svg",27),e.TgZ(46,"defs"),e.TgZ(47,"pattern",28),e._UZ(48,"rect",29),e.qZA(),e.qZA(),e._UZ(49,"rect",30),e.qZA(),e.kcU(),e.TgZ(50,"div",31),e.TgZ(51,"div",32),e.TgZ(52,"div"),e._uU(53,"Welcome to"),e.qZA(),e.TgZ(54,"div"),e._uU(55,"our community"),e.qZA(),e.qZA(),e.TgZ(56,"div",33),e._uU(57," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.qZA(),e.TgZ(58,"div",34),e.TgZ(59,"div",35),e._UZ(60,"img",36),e._UZ(61,"img",37),e._UZ(62,"img",38),e._UZ(63,"img",39),e.qZA(),e.TgZ(64,"div",40),e._uU(65,"More than 17k people joined us, it's your turn"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const i=e.MAs(16),l=e.MAs(26);e.xp6(9),e.Q6J("ngIf",n.showAlert),e.xp6(1),e.Q6J("formGroup",n.resetPasswordForm),e.xp6(5),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===i.type),e.xp6(1),e.Q6J("ngIf","text"===i.type),e.xp6(6),e.Q6J("formControlName","passwordConfirm"),e.xp6(3),e.Q6J("ngIf","password"===l.type),e.xp6(1),e.Q6J("ngIf","text"===l.type),e.xp6(1),e.Q6J("ngIf",n.resetPasswordForm.get("passwordConfirm").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.resetPasswordForm.get("passwordConfirm").hasError("mustMatch")),e.xp6(1),e.Q6J("color","primary")("disabled",n.resetPasswordForm.disabled),e.xp6(1),e.Q6J("ngIf",!n.resetPasswordForm.disabled),e.xp6(1),e.Q6J("ngIf",n.resetPasswordForm.disabled),e.xp6(4),e.Q6J("routerLink",e.DdM(15,M))}},directives:[P.O5,a._Y,a.JL,a.sg,m.KE,m.hX,p.Nt,a.Fj,a.JJ,a.u,f.lW,m.R9,m.TO,u.yS,C.W,g.Hw,h.Ou],encapsulation:2,data:{animation:A.L}}),t})()}];let Y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(j),f.ot,m.lN,g.Ps,p.c,h.Cq,w.J,Z.fC,v.m]]}),t})()}}]);