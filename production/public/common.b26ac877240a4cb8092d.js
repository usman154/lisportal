"use strict";(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[8592],{19602:(p,c,t)=>{t.d(c,{y:()=>o});var i=t(39490),s=t(28288),e=t(37716),n=t(38583);function a(d,m){1&d&&(e.ynx(0),e.TgZ(1,"div",1),e.Hsn(2),e.qZA(),e.TgZ(3,"div",2),e.Hsn(4,1),e.qZA(),e.BQk())}function l(d,m){1&d&&(e.TgZ(0,"div",4),e.Hsn(1,3),e.qZA()),2&d&&e.Q6J("@expandCollapse",void 0)}function u(d,m){if(1&d&&(e.ynx(0),e.Hsn(1,2),e.YNc(2,l,2,1,"div",3),e.BQk()),2&d){const f=e.oxw();e.xp6(2),e.Q6J("ngIf",f.expanded)}}const r=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],_=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];let o=(()=>{class d{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&"back"===this.face,"fuse-card-face-front":this.flippable&&"front"===this.face,"fuse-card-flippable":this.flippable}}ngOnChanges(f){"expanded"in f&&(this.expanded=(0,i.Ig)(f.expanded.currentValue)),"flippable"in f&&(this.flippable=(0,i.Ig)(f.flippable.currentValue))}}return d.\u0275fac=function(f){return new(f||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(f,b){2&f&&e.Tol(b.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],features:[e.TTD],ngContentSelectors:_,decls:2,vars:2,consts:[[4,"ngIf"],[1,"fuse-card-front"],[1,"fuse-card-back"],["class","fuse-card-expansion",4,"ngIf"],[1,"fuse-card-expansion"]],template:function(f,b){1&f&&(e.F$t(r),e.YNc(0,a,5,0,"ng-container",0),e.YNc(1,u,3,1,"ng-container",0)),2&f&&(e.Q6J("ngIf",b.flippable),e.xp6(1),e.Q6J("ngIf",!b.flippable))},directives:[n.O5],styles:["fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:s.L}}),d})()},15935:(p,c,t)=>{t.d(c,{y:()=>i.y,J:()=>n});var i=t(19602),s=t(38583),e=t(37716);let n=(()=>{class a{}return a.\u0275fac=function(u){return new(u||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[s.ez]]}),a})()},96557:(p,c,t)=>{t.d(c,{H:()=>u});var i=t(28288),s=t(37716),e=t(91812),n=t(38583);function a(r,_){1&r&&s.GkF(0)}const l=function(r){return{$implicit:r}};let u=(()=>{class r{constructor(o){this._fuseMediaWatcherService=o,this.items=[],this.distributedColumns=[]}ngOnChanges(o){"columns"in o&&this._distributeItems(),"items"in o&&this._distributeItems()}ngAfterViewInit(){this._distributeItems()}_distributeItems(){if(0!==this.items.length){this.distributedColumns=Array.from(Array(this.columns),o=>({items:[]}));for(let o=0;o<this.items.length;o++)this.distributedColumns[o%this.columns].items.push(this.items[o])}else this.distributedColumns=[]}}return r.\u0275fac=function(o){return new(o||r)(s.Y36(e.T))},r.\u0275cmp=s.Xpm({type:r,selectors:[["fuse-masonry"]],inputs:{columnsTemplate:"columnsTemplate",columns:"columns",items:"items"},exportAs:["fuseMasonry"],features:[s.TTD],decls:2,vars:4,consts:[[1,"flex"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,d){1&o&&(s.TgZ(0,"div",0),s.YNc(1,a,1,0,"ng-container",1),s.qZA()),2&o&&(s.xp6(1),s.Q6J("ngTemplateOutlet",d.columnsTemplate)("ngTemplateOutletContext",s.VKq(2,l,d.distributedColumns)))},directives:[n.tP],styles:[""],encapsulation:2,data:{animation:i.L}}),r})()},3921:(p,c,t)=>{t.d(c,{O:()=>e});var i=t(38583),s=t(37716);let e=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[i.ez]]}),n})()},7853:(p,c,t)=>{t.d(c,{V:()=>s});var i=t(37716);let s=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({}),e})()},3005:(p,c,t)=>{t.d(c,{K:()=>s});var i=t(37716);let s=(()=>{class e{constructor(){}transform(a,l,u){return Array.isArray(a)?a.map(r=>u.find(_=>_[l]===r)):u.find(r=>r[l]===a)}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275pipe=i.Yjl({name:"fuseFindByKey",type:e,pure:!1}),e})()},14485:(p,c,t)=>{t.d(c,{a:()=>i});class i{static isEmptyInputValue(e){return null==e||0===e.length}static mustMatch(e,n){return a=>{const l=a.get(e),u=a.get(n);if(!l||!u||(u.hasError("mustMatch")&&(delete u.errors.mustMatch,u.updateValueAndValidity()),this.isEmptyInputValue(u.value)||l.value===u.value))return null;const r={mustMatch:!0};return u.setErrors(r),r}}}},6388:(p,c,t)=>{t.d(c,{Z:()=>e});var i=t(59758);const e=function(n,a){return(0,i.Z)(n,a)}}}]);