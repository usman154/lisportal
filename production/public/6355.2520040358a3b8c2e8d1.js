"use strict";(self.webpackChunk_fuse_demo=self.webpackChunk_fuse_demo||[]).push([[6355],{76355:(Je,I,s)=>{s.r(I),s.d(I,{ECommerceModule:()=>qe});var b=s(63423),C=s(51095),A=s(7539),x=s(98295),w=s(76627),k=s(83166),F=s(33935),y=s(99692),U=s(12178),T=s(72458),Z=s(11494),q=s(67441),Q=s(45396),L=s(11436),N=s(44466),e=s(37716);let S=(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["inventory"]],decls:1,vars:0,template:function(t,o){1&t&&e._UZ(0,"router-outlet")},directives:[b.lC],encapsulation:2,changeDetection:0}),n})();var l=s(3679),R=s(79765),B=s(66682),m=s(46782),J=s(54395),g=s(43190),p=s(88002),M=s(28288),Y=s(1400),_=s(26215),$=s(40205),D=s(25917),v=s(93342),u=s(15257),P=s(45435),E=s(91841);let f=(()=>{class n{constructor(t){this._httpClient=t,this._brands=new _.X(null),this._categories=new _.X(null),this._pagination=new _.X(null),this._product=new _.X(null),this._products=new _.X(null),this._tags=new _.X(null),this._vendors=new _.X(null)}get brands$(){return this._brands.asObservable()}get categories$(){return this._categories.asObservable()}get pagination$(){return this._pagination.asObservable()}get product$(){return this._product.asObservable()}get products$(){return this._products.asObservable()}get tags$(){return this._tags.asObservable()}get vendors$(){return this._vendors.asObservable()}getBrands(){return this._httpClient.get("api/apps/ecommerce/inventory/brands").pipe((0,v.b)(t=>{this._brands.next(t)}))}getCategories(){return this._httpClient.get("api/apps/ecommerce/inventory/categories").pipe((0,v.b)(t=>{this._categories.next(t)}))}getProducts(t=0,o=10,r="name",c="asc",a=""){return this._httpClient.get("api/apps/ecommerce/inventory/products",{params:{page:""+t,size:""+o,sort:r,order:c,search:a}}).pipe((0,v.b)(d=>{this._pagination.next(d.pagination),this._products.next(d.products)}))}getProductById(t){return this._products.pipe((0,u.q)(1),(0,p.U)(o=>{const r=o.find(c=>c.id===t)||null;return this._product.next(r),r}),(0,g.w)(o=>o?(0,D.of)(o):(0,$._)("Could not found product with id of "+t+"!")))}createProduct(){return this.products$.pipe((0,u.q)(1),(0,g.w)(t=>this._httpClient.post("api/apps/ecommerce/inventory/product",{}).pipe((0,p.U)(o=>(this._products.next([o,...t]),o)))))}updateProduct(t,o){return this.products$.pipe((0,u.q)(1),(0,g.w)(r=>this._httpClient.patch("api/apps/ecommerce/inventory/product",{id:t,product:o}).pipe((0,p.U)(c=>{const a=r.findIndex(d=>d.id===t);return r[a]=c,this._products.next(r),c}),(0,g.w)(c=>this.product$.pipe((0,u.q)(1),(0,P.h)(a=>a&&a.id===t),(0,v.b)(()=>(this._product.next(c),c)))))))}deleteProduct(t){return this.products$.pipe((0,u.q)(1),(0,g.w)(o=>this._httpClient.delete("api/apps/ecommerce/inventory/product",{params:{id:t}}).pipe((0,p.U)(r=>{const c=o.findIndex(a=>a.id===t);return o.splice(c,1),this._products.next(o),r}))))}getTags(){return this._httpClient.get("api/apps/ecommerce/inventory/tags").pipe((0,v.b)(t=>{this._tags.next(t)}))}createTag(t){return this.tags$.pipe((0,u.q)(1),(0,g.w)(o=>this._httpClient.post("api/apps/ecommerce/inventory/tag",{tag:t}).pipe((0,p.U)(r=>(this._tags.next([...o,r]),r)))))}updateTag(t,o){return this.tags$.pipe((0,u.q)(1),(0,g.w)(r=>this._httpClient.patch("api/apps/ecommerce/inventory/tag",{id:t,tag:o}).pipe((0,p.U)(c=>{const a=r.findIndex(d=>d.id===t);return r[a]=c,this._tags.next(r),c}))))}deleteTag(t){return this.tags$.pipe((0,u.q)(1),(0,g.w)(o=>this._httpClient.delete("api/apps/ecommerce/inventory/tag",{params:{id:t}}).pipe((0,p.U)(r=>{const c=o.findIndex(a=>a.id===t);return o.splice(c,1),this._tags.next(o),r}),(0,P.h)(r=>r),(0,g.w)(r=>this.products$.pipe((0,u.q)(1),(0,p.U)(c=>(c.forEach(a=>{const d=a.tags.findIndex(Qe=>Qe===t);d>-1&&a.tags.splice(d,1)}),r)))))))}getVendors(){return this._httpClient.get("api/apps/ecommerce/inventory/vendors").pipe((0,v.b)(t=>{this._vendors.next(t)}))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(E.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var h=s(38583);function O(n,i){1&n&&(e.TgZ(0,"div",16),e._UZ(1,"mat-progress-bar",17),e.qZA()),2&n&&(e.xp6(1),e.Q6J("mode","indeterminate"))}function j(n,i){if(1&n&&e._UZ(0,"img",43),2&n){const t=e.oxw().$implicit;e.Q6J("alt","Product thumbnail image")("src",t.thumbnail,e.LSH)}}function z(n,i){1&n&&(e.TgZ(0,"div",44),e._uU(1," NO THUMB "),e.qZA())}function H(n,i){1&n&&(e.TgZ(0,"div",45),e._UZ(1,"div",46),e.qZA())}function V(n,i){1&n&&(e.TgZ(0,"div",47),e._UZ(1,"div",48),e.qZA())}function G(n,i){1&n&&(e.TgZ(0,"div",49),e._UZ(1,"div",50),e.qZA())}function X(n,i){1&n&&(e.ynx(0),e._UZ(1,"mat-icon",51),e.BQk()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:check"))}function W(n,i){1&n&&(e.ynx(0),e._UZ(1,"mat-icon",52),e.BQk()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:x"))}function K(n,i){1&n&&e.GkF(0)}const ee=function(n){return{$implicit:n}};function te(n,i){if(1&n&&(e.ynx(0),e.YNc(1,K,1,0,"ng-container",53),e.BQk()),2&n){const t=e.oxw().$implicit;e.oxw(4);const o=e.MAs(18);e.xp6(1),e.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",e.VKq(2,ee,t))}}function ne(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",28),e.TgZ(2,"div",29),e.TgZ(3,"div",30),e.YNc(4,j,1,2,"img",31),e.YNc(5,z,2,0,"div",32),e.qZA(),e.qZA(),e.TgZ(6,"div",33),e._uU(7),e.qZA(),e.TgZ(8,"div",34),e._uU(9),e.qZA(),e.TgZ(10,"div",25),e._uU(11),e.ALo(12,"currency"),e.qZA(),e.TgZ(13,"div",35),e.TgZ(14,"div",36),e._uU(15),e.qZA(),e.YNc(16,H,2,0,"div",37),e.YNc(17,V,2,0,"div",38),e.YNc(18,G,2,0,"div",39),e.qZA(),e.TgZ(19,"div",40),e.YNc(20,X,2,1,"ng-container",13),e.YNc(21,W,2,1,"ng-container",13),e.qZA(),e.TgZ(22,"div"),e.TgZ(23,"button",41),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw(4).toggleDetails(c.id)}),e._UZ(24,"mat-icon",42),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"div",19),e.YNc(26,te,2,4,"ng-container",13),e.qZA(),e.BQk()}if(2&n){const t=i.$implicit,o=e.oxw(4);e.xp6(4),e.Q6J("ngIf",t.thumbnail),e.xp6(1),e.Q6J("ngIf",!t.thumbnail),e.xp6(2),e.hij(" ",t.sku," "),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.hij(" ",e.gM2(12,13,t.price,"USD","symbol","1.2-2")," "),e.xp6(4),e.Oqu(t.stock),e.xp6(1),e.Q6J("ngIf",t.stock<20),e.xp6(1),e.Q6J("ngIf",t.stock>=20&&t.stock<30),e.xp6(1),e.Q6J("ngIf",t.stock>=30),e.xp6(2),e.Q6J("ngIf",t.active),e.xp6(1),e.Q6J("ngIf",!t.active),e.xp6(3),e.Q6J("svgIcon",(null==o.selectedProduct?null:o.selectedProduct.id)===t.id?"heroicons_solid:chevron-up":"heroicons_solid:chevron-down"),e.xp6(2),e.Q6J("ngIf",(null==o.selectedProduct?null:o.selectedProduct.id)===t.id)}}function oe(n,i){if(1&n&&(e.ynx(0),e.YNc(1,ne,27,18,"ng-container",27),e.BQk()),2&n){const t=i.ngIf,o=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t)("ngForTrackBy",o.trackByFn)}}const re=function(n){return{"pointer-events-none":n}},ie=function(){return[5,10,25,100]};function se(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"div",19),e.TgZ(2,"div",20),e._UZ(3,"div"),e.TgZ(4,"div",21),e._uU(5," SKU "),e.qZA(),e.TgZ(6,"div",22),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"div",23),e._uU(9," Price "),e.qZA(),e.TgZ(10,"div",24),e._uU(11," Stock "),e.qZA(),e.TgZ(12,"div",24),e._uU(13," Active "),e.qZA(),e.TgZ(14,"div",25),e._uU(15,"Details"),e.qZA(),e.qZA(),e.YNc(16,oe,2,2,"ng-container",13),e.ALo(17,"async"),e.qZA(),e._UZ(18,"mat-paginator",26),e.BQk()),2&n){const t=e.oxw(2);e.xp6(4),e.Q6J("mat-sort-header","sku"),e.xp6(2),e.Q6J("mat-sort-header","name"),e.xp6(2),e.Q6J("mat-sort-header","price"),e.xp6(2),e.Q6J("mat-sort-header","stock"),e.xp6(2),e.Q6J("mat-sort-header","active"),e.xp6(4),e.Q6J("ngIf",e.lcZ(17,12,t.products$)),e.xp6(2),e.Q6J("ngClass",e.VKq(14,re,t.isLoading))("length",t.pagination.length)("pageIndex",t.pagination.page)("pageSize",t.pagination.size)("pageSizeOptions",e.DdM(16,ie))("showFirstLastButtons",!0)}}function ce(n,i){if(1&n&&(e.ynx(0),e.YNc(1,se,19,17,"ng-container",18),e.BQk()),2&n){const t=i.ngIf;e.oxw();const o=e.MAs(20);e.xp6(1),e.Q6J("ngIf",t.length>0)("ngIfElse",o)}}function ae(n,i){if(1&n&&(e.ynx(0),e._UZ(1,"img",95),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("src",t.selectedProductForm.get("images").value[t.selectedProductForm.get("currentImageIndex").value],e.LSH)}}function le(n,i){1&n&&(e.TgZ(0,"span",96),e._uU(1,"NO IMAGE"),e.qZA())}function ge(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",97),e.TgZ(1,"button",98),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).cycleImages(!1)}),e._UZ(2,"mat-icon",42),e.qZA(),e.TgZ(3,"span",99),e._uU(4),e.qZA(),e.TgZ(5,"button",98),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).cycleImages(!0)}),e._UZ(6,"mat-icon",42),e.qZA(),e.qZA()}if(2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("svgIcon","heroicons_solid:arrow-narrow-left"),e.xp6(2),e.AsE(" ",t.selectedProductForm.get("currentImageIndex").value+1," of ",t.selectedProductForm.get("images").value.length," "),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:arrow-narrow-right")}}function de(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"mat-option",100),e._uU(2),e.qZA(),e.BQk()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function pe(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"mat-option",100),e._uU(2),e.qZA(),e.BQk()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function ue(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"mat-option",100),e._uU(2),e.qZA(),e.BQk()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function me(n,i){1&n&&e._UZ(0,"mat-icon",42),2&n&&e.Q6J("svgIcon","heroicons_solid:pencil-alt")}function _e(n,i){1&n&&e._UZ(0,"mat-icon",42),2&n&&e.Q6J("svgIcon","heroicons_solid:check")}function ve(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"mat-checkbox",101),e.NdJ("change",function(r){const a=e.CHM(t).$implicit;return e.oxw(3).toggleProductTag(a,r)}),e._uU(2),e.qZA(),e.BQk()}if(2&n){const t=i.$implicit,o=e.oxw(3);e.xp6(1),e.Q6J("color","primary")("checked",o.selectedProduct.tags.includes(t.id)),e.xp6(1),e.hij(" ",t.title," ")}}function fe(n,i){if(1&n&&(e.ynx(0),e.YNc(1,ve,3,3,"ng-container",27),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.filteredTags)("ngForTrackBy",t.trackByFn)}}function he(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"mat-form-field",103),e.TgZ(2,"input",104),e.NdJ("input",function(r){const a=e.CHM(t).$implicit;return e.oxw(3).updateTagTitle(a,r)}),e.qZA(),e.TgZ(3,"button",105),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw(3).deleteTag(c)}),e._UZ(4,"mat-icon",42),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=i.$implicit;e.xp6(2),e.Q6J("value",t.title),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:trash")}}function xe(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"div",102),e.YNc(2,he,5,2,"ng-container",27),e.qZA(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",t.filteredTags)("ngForTrackBy",t.trackByFn)}}function Ze(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",106),e.NdJ("click",function(){e.CHM(t),e.oxw();const r=e.MAs(95);return e.oxw().createTag(r.value),r.value=""}),e._UZ(1,"mat-icon",107),e.TgZ(2,"div",108),e._uU(3,'Create "'),e.TgZ(4,"b"),e._uU(5),e.qZA(),e._uU(6,'"'),e.qZA(),e.qZA()}if(2&n){e.oxw();const t=e.MAs(95);e.xp6(1),e.Q6J("svgIcon","heroicons_solid:plus-circle"),e.xp6(4),e.Oqu(t.value)}}function ye(n,i){1&n&&(e.ynx(0),e._UZ(1,"mat-icon",110),e.TgZ(2,"span",111),e._uU(3,"Product updated"),e.qZA(),e.BQk()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_outline:check"))}function Te(n,i){1&n&&(e.ynx(0),e._UZ(1,"mat-icon",112),e.TgZ(2,"span",111),e._uU(3,"An error occurred, try again!"),e.qZA(),e.BQk()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_outline:x"))}function Ie(n,i){if(1&n&&(e.TgZ(0,"div",109),e.YNc(1,ye,4,1,"ng-container",13),e.YNc(2,Te,4,1,"ng-container",13),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf","success"===t.flashMessage),e.xp6(1),e.Q6J("ngIf","error"===t.flashMessage)}}function be(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",54),e.TgZ(1,"div",55),e.TgZ(2,"form",56),e.TgZ(3,"div",57),e.TgZ(4,"div",58),e.TgZ(5,"div",59),e.TgZ(6,"div",60),e.YNc(7,ae,2,1,"ng-container",18),e.YNc(8,le,2,0,"ng-template",null,61,e.W1O),e.qZA(),e.YNc(10,ge,7,4,"div",62),e.qZA(),e.TgZ(11,"div",63),e.TgZ(12,"span",64),e._uU(13,"Product status"),e.qZA(),e.TgZ(14,"mat-slide-toggle",65),e._uU(15),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",66),e.TgZ(17,"div",67),e.TgZ(18,"mat-form-field",68),e.TgZ(19,"mat-label"),e._uU(20,"Name"),e.qZA(),e._UZ(21,"input",69),e.qZA(),e.TgZ(22,"div",70),e.TgZ(23,"mat-form-field",71),e.TgZ(24,"mat-label"),e._uU(25,"SKU"),e.qZA(),e._UZ(26,"input",69),e.qZA(),e.TgZ(27,"mat-form-field",72),e.TgZ(28,"mat-label"),e._uU(29,"Barcode"),e.qZA(),e._UZ(30,"input",69),e.qZA(),e.qZA(),e.TgZ(31,"div",70),e.TgZ(32,"mat-form-field",71),e.TgZ(33,"mat-label"),e._uU(34,"Category"),e.qZA(),e.TgZ(35,"mat-select",73),e.YNc(36,de,3,2,"ng-container",74),e.qZA(),e.qZA(),e.TgZ(37,"mat-form-field",75),e.TgZ(38,"mat-label"),e._uU(39,"Brand"),e.qZA(),e.TgZ(40,"mat-select",73),e.YNc(41,pe,3,2,"ng-container",74),e.qZA(),e.qZA(),e.TgZ(42,"mat-form-field",76),e.TgZ(43,"mat-label"),e._uU(44,"Vendor"),e.qZA(),e.TgZ(45,"mat-select",73),e.YNc(46,ue,3,2,"ng-container",74),e.qZA(),e.qZA(),e.qZA(),e.TgZ(47,"div",70),e.TgZ(48,"mat-form-field",71),e.TgZ(49,"mat-label"),e._uU(50,"Stock"),e.qZA(),e._UZ(51,"input",77),e.qZA(),e.TgZ(52,"mat-form-field",76),e.TgZ(53,"mat-label"),e._uU(54,"Reserved"),e.qZA(),e._UZ(55,"input",77),e.qZA(),e.qZA(),e.qZA(),e.TgZ(56,"div",78),e.TgZ(57,"mat-form-field",68),e.TgZ(58,"mat-label"),e._uU(59,"Cost"),e.qZA(),e.TgZ(60,"span",79),e._uU(61,"$"),e.qZA(),e._UZ(62,"input",69),e.qZA(),e.TgZ(63,"mat-form-field",68),e.TgZ(64,"mat-label"),e._uU(65,"Base Price"),e.qZA(),e.TgZ(66,"span",79),e._uU(67,"$"),e.qZA(),e._UZ(68,"input",69),e.qZA(),e.TgZ(69,"mat-form-field",68),e.TgZ(70,"mat-label"),e._uU(71,"Tax"),e.qZA(),e.TgZ(72,"span",80),e._uU(73,"%"),e.qZA(),e._UZ(74,"input",77),e.qZA(),e.TgZ(75,"mat-form-field",68),e.TgZ(76,"mat-label"),e._uU(77,"Price"),e.qZA(),e.TgZ(78,"span",80),e._uU(79,"$"),e.qZA(),e._UZ(80,"input",69),e.qZA(),e.qZA(),e.TgZ(81,"div",78),e.TgZ(82,"mat-form-field",68),e.TgZ(83,"mat-label"),e._uU(84,"Weight"),e.qZA(),e.TgZ(85,"span",80),e._uU(86,"lbs."),e.qZA(),e._UZ(87,"input",69),e.qZA(),e.TgZ(88,"span",81),e._uU(89,"Tags"),e.qZA(),e.TgZ(90,"div",82),e.TgZ(91,"div",83),e.TgZ(92,"div",84),e._UZ(93,"mat-icon",42),e.TgZ(94,"input",85,86),e.NdJ("input",function(r){return e.CHM(t),e.oxw().filterTags(r)})("keydown",function(r){return e.CHM(t),e.oxw().filterTagsInputKeyDown(r)}),e.qZA(),e.qZA(),e.TgZ(96,"button",87),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggleTagsEditMode()}),e.YNc(97,me,1,1,"mat-icon",88),e.YNc(98,_e,1,1,"mat-icon",88),e.qZA(),e.qZA(),e.TgZ(99,"div",89),e.YNc(100,fe,2,2,"ng-container",13),e.YNc(101,xe,3,2,"ng-container",13),e.YNc(102,Ze,7,2,"div",90),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(103,"div",91),e.TgZ(104,"button",92),e.NdJ("click",function(){return e.CHM(t),e.oxw().deleteSelectedProduct()}),e._uU(105," Delete "),e.qZA(),e.TgZ(106,"div",29),e.YNc(107,Ie,3,2,"div",93),e.TgZ(108,"button",94),e.NdJ("click",function(){return e.CHM(t),e.oxw().updateSelectedProduct()}),e._uU(109," Update "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.MAs(9),o=e.MAs(95),r=e.oxw();e.xp6(2),e.Q6J("formGroup",r.selectedProductForm),e.xp6(5),e.Q6J("ngIf",r.selectedProductForm.get("images").value.length)("ngIfElse",t),e.xp6(3),e.Q6J("ngIf",r.selectedProductForm.get("images").value.length),e.xp6(4),e.Q6J("formControlName","active")("color","primary"),e.xp6(1),e.hij(" ",!0===r.selectedProductForm.get("active").value?"Active":"Disabled"," "),e.xp6(6),e.Q6J("formControlName","name"),e.xp6(5),e.Q6J("formControlName","sku"),e.xp6(4),e.Q6J("formControlName","barcode"),e.xp6(5),e.Q6J("formControlName","category"),e.xp6(1),e.Q6J("ngForOf",r.categories),e.xp6(4),e.Q6J("formControlName","brand"),e.xp6(1),e.Q6J("ngForOf",r.brands),e.xp6(4),e.Q6J("formControlName","vendor"),e.xp6(1),e.Q6J("ngForOf",r.vendors),e.xp6(5),e.Q6J("formControlName","stock"),e.xp6(4),e.Q6J("formControlName","reserved"),e.xp6(7),e.Q6J("formControlName","cost"),e.xp6(6),e.Q6J("formControlName","basePrice"),e.xp6(6),e.Q6J("formControlName","taxPercent"),e.xp6(6),e.Q6J("formControlName","price"),e.xp6(7),e.Q6J("formControlName","weight"),e.xp6(6),e.Q6J("svgIcon","heroicons_solid:search"),e.xp6(1),e.Q6J("maxLength",50),e.xp6(3),e.Q6J("ngIf",!r.tagsEditMode),e.xp6(1),e.Q6J("ngIf",r.tagsEditMode),e.xp6(2),e.Q6J("ngIf",!r.tagsEditMode),e.xp6(1),e.Q6J("ngIf",r.tagsEditMode),e.xp6(1),e.Q6J("ngIf",r.shouldShowCreateTagButton(o.value)),e.xp6(2),e.Q6J("color","warn"),e.xp6(3),e.Q6J("ngIf",r.flashMessage),e.xp6(1),e.Q6J("color","primary")}}function Ce(n,i){1&n&&(e.TgZ(0,"div",113),e._uU(1,"There are no products!"),e.qZA())}const Ue=[{path:"",pathMatch:"full",redirectTo:"inventory"},{path:"inventory",component:S,children:[{path:"",component:(()=>{class n{constructor(t,o,r,c){this._changeDetectorRef=t,this._fuseConfirmationService=o,this._formBuilder=r,this._inventoryService=c,this.flashMessage=null,this.isLoading=!1,this.searchInputControl=new l.NI,this.selectedProduct=null,this.tagsEditMode=!1,this._unsubscribeAll=new R.xQ}ngOnInit(){this.selectedProductForm=this._formBuilder.group({id:[""],category:[""],name:["",[l.kI.required]],description:[""],tags:[[]],sku:[""],barcode:[""],brand:[""],vendor:[""],stock:[""],reserved:[""],cost:[""],basePrice:[""],taxPercent:[""],price:[""],weight:[""],thumbnail:[""],images:[[]],currentImageIndex:[0],active:[!1]}),this._inventoryService.brands$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.brands=t,this._changeDetectorRef.markForCheck()}),this._inventoryService.categories$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.categories=t,this._changeDetectorRef.markForCheck()}),this._inventoryService.pagination$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.pagination=t,this._changeDetectorRef.markForCheck()}),this.products$=this._inventoryService.products$,this._inventoryService.tags$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.tags=t,this.filteredTags=t,this._changeDetectorRef.markForCheck()}),this._inventoryService.vendors$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.vendors=t,this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,J.b)(300),(0,g.w)(t=>(this.closeDetails(),this.isLoading=!0,this._inventoryService.getProducts(0,10,"name","asc",t))),(0,p.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"name",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0,this.closeDetails()}),(0,B.T)(this._sort.sortChange,this._paginator.page).pipe((0,g.w)(()=>(this.closeDetails(),this.isLoading=!0,this._inventoryService.getProducts(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,p.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}toggleDetails(t){this.selectedProduct&&this.selectedProduct.id===t?this.closeDetails():this._inventoryService.getProductById(t).subscribe(o=>{this.selectedProduct=o,this.selectedProductForm.patchValue(o),this._changeDetectorRef.markForCheck()})}closeDetails(){this.selectedProduct=null}cycleImages(t=!0){const o=this.selectedProductForm.get("images").value.length,r=this.selectedProductForm.get("currentImageIndex").value,c=r+1===o?0:r+1,a=r-1<0?o-1:r-1;t?this.selectedProductForm.get("currentImageIndex").setValue(c):this.selectedProductForm.get("currentImageIndex").setValue(a)}toggleTagsEditMode(){this.tagsEditMode=!this.tagsEditMode}filterTags(t){const o=t.target.value.toLowerCase();this.filteredTags=this.tags.filter(r=>r.title.toLowerCase().includes(o))}filterTagsInputKeyDown(t){if("Enter"!==t.key)return;if(0===this.filteredTags.length)return this.createTag(t.target.value),void(t.target.value="");const o=this.filteredTags[0];this.selectedProduct.tags.find(c=>c===o.id)?this.removeTagFromProduct(o):this.addTagToProduct(o)}createTag(t){this._inventoryService.createTag({title:t}).subscribe(r=>{this.addTagToProduct(r)})}updateTagTitle(t,o){t.title=o.target.value,this._inventoryService.updateTag(t.id,t).pipe((0,J.b)(300)).subscribe(),this._changeDetectorRef.markForCheck()}deleteTag(t){this._inventoryService.deleteTag(t.id).subscribe(),this._changeDetectorRef.markForCheck()}addTagToProduct(t){this.selectedProduct.tags.unshift(t.id),this.selectedProductForm.get("tags").patchValue(this.selectedProduct.tags),this._changeDetectorRef.markForCheck()}removeTagFromProduct(t){this.selectedProduct.tags.splice(this.selectedProduct.tags.findIndex(o=>o===t.id),1),this.selectedProductForm.get("tags").patchValue(this.selectedProduct.tags),this._changeDetectorRef.markForCheck()}toggleProductTag(t,o){o.checked?this.addTagToProduct(t):this.removeTagFromProduct(t)}shouldShowCreateTagButton(t){return!(""===t||this.tags.findIndex(o=>o.title.toLowerCase()===t.toLowerCase())>-1)}createProduct(){this._inventoryService.createProduct().subscribe(t=>{this.selectedProduct=t,this.selectedProductForm.patchValue(t),this._changeDetectorRef.markForCheck()})}updateSelectedProduct(){const t=this.selectedProductForm.getRawValue();delete t.currentImageIndex,this._inventoryService.updateProduct(t.id,t).subscribe(()=>{this.showFlashMessage("success")})}deleteSelectedProduct(){this._fuseConfirmationService.open({title:"Delete product",message:"Are you sure you want to remove this product? This action cannot be undone!",actions:{confirm:{label:"Delete"}}}).afterClosed().subscribe(o=>{if("confirmed"===o){const r=this.selectedProductForm.getRawValue();this._inventoryService.deleteProduct(r.id).subscribe(()=>{this.closeDetails()})}})}showFlashMessage(t){this.flashMessage=t,this._changeDetectorRef.markForCheck(),setTimeout(()=>{this.flashMessage=null,this._changeDetectorRef.markForCheck()},3e3)}trackByFn(t,o){return o.id||t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(Y.R),e.Y36(l.qu),e.Y36(f))},n.\u0275cmp=e.Xpm({type:n,selectors:[["inventory-list"]],viewQuery:function(t,o){if(1&t&&(e.Gf(y.NW,5),e.Gf(Z.YE,5)),2&t){let r;e.iGM(r=e.CRH())&&(o._paginator=r.first),e.iGM(r=e.CRH())&&(o._sort=r.first)}},decls:21,vars:10,consts:[[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","py-8","px-6","md:px-8","border-b"],["class","absolute inset-x-0 bottom-0",4,"ngIf"],[1,"text-4xl","font-extrabold","tracking-tight"],[1,"flex","flex-shrink-0","items-center","mt-6","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-no-subscript","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["mat-flat-button","",1,"ml-4",3,"color","click"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","sm:mb-18","overflow-hidden","sm:overflow-y-auto"],[4,"ngIf"],["rowDetailsTemplate",""],["noProducts",""],[1,"absolute","inset-x-0","bottom-0"],[3,"mode"],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"inventory-grid","z-10","sticky","top-0","grid","gap-4","py-4","px-6","md:px-8","shadow","text-md","font-semibold","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[1,"hidden","md:block",3,"mat-sort-header"],[3,"mat-sort-header"],[1,"hidden","sm:block",3,"mat-sort-header"],[1,"hidden","lg:block",3,"mat-sort-header"],[1,"hidden","sm:block"],[1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"inventory-grid","grid","items-center","gap-4","py-3","px-6","md:px-8","border-b"],[1,"flex","items-center"],[1,"relative","flex","flex-0","items-center","justify-center","w-12","h-12","mr-6","rounded","overflow-hidden","border"],["class","w-8",3,"alt","src",4,"ngIf"],["class","flex items-center justify-center w-full h-full text-xs font-semibold leading-none text-center uppercase",4,"ngIf"],[1,"hidden","md:block","truncate"],[1,"truncate"],[1,"hidden","lg:flex","items-center"],[1,"min-w-4"],["class","flex items-end ml-2 w-1 h-4 bg-red-200 rounded overflow-hidden",4,"ngIf"],["class","flex items-end ml-2 w-1 h-4 bg-orange-200 rounded overflow-hidden",4,"ngIf"],["class","flex items-end ml-2 w-1 h-4 bg-green-100 rounded overflow-hidden",4,"ngIf"],[1,"hidden","lg:block"],["mat-stroked-button","",1,"min-w-10","min-h-7","h-7","px-2","leading-6",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"w-8",3,"alt","src"],[1,"flex","items-center","justify-center","w-full","h-full","text-xs","font-semibold","leading-none","text-center","uppercase"],[1,"flex","items-end","ml-2","w-1","h-4","bg-red-200","rounded","overflow-hidden"],[1,"flex","w-full","h-1/3","bg-red-600"],[1,"flex","items-end","ml-2","w-1","h-4","bg-orange-200","rounded","overflow-hidden"],[1,"flex","w-full","h-2/4","bg-orange-400"],[1,"flex","items-end","ml-2","w-1","h-4","bg-green-100","rounded","overflow-hidden"],[1,"flex","w-full","h-full","bg-green-400"],[1,"text-green-400","icon-size-5",3,"svgIcon"],[1,"text-gray-400","icon-size-5",3,"svgIcon"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"shadow-lg","overflow-hidden"],[1,"flex","border-b"],[1,"flex","flex-col","w-full",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","p-8"],[1,"flex","flex-col","items-center","sm:items-start","mb-8","sm:mb-0"],[1,"flex","flex-col","items-center"],[1,"w-32","h-44","border","rounded","overflow-hidden"],["noImage",""],["class","flex items-center mt-2 whitespace-nowrap",4,"ngIf"],[1,"flex","flex-col","mt-8"],[1,"font-semibold","mb-2"],[3,"formControlName","color"],[1,"flex","flex-auto","flex-wrap"],[1,"flex","flex-col","w-full","lg:w-2/4","sm:pl-8"],[1,"w-full"],["matInput","",3,"formControlName"],[1,"flex"],[1,"w-1/3","pr-2"],[1,"w-2/3","pl-2"],[3,"formControlName"],[4,"ngFor","ngForOf"],[1,"w-1/3","px-2"],[1,"w-1/3","pl-2"],["type","number","matInput","",3,"formControlName"],[1,"flex","flex-col","w-full","lg:w-1/4","sm:pl-8"],["matPrefix",""],["matSuffix",""],[1,"mb-px","font-medium","leading-tight"],[1,"mt-1.5","rounded-md","border","border-gray-300","dark:border-gray-500","shadow-sm","overflow-hidden"],[1,"flex","items-center","-my-px","py-2","px-3"],[1,"flex","items-center","flex-auto","min-w-0"],["type","text","placeholder","Enter tag name",1,"min-w-0","ml-2","py-1","border-0",3,"maxLength","input","keydown"],["newTagInput",""],["mat-icon-button","",1,"ml-3","w-8","h-8","min-h-8",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"h-44","leading-none","overflow-y-auto","border-t","border-gray-300","dark:border-gray-500"],["class","flex items-center h-10 min-h-10 -ml-0.5 pl-4 pr-3 leading-none cursor-pointer border-t hover:bg-gray-50 dark:hover:bg-hover","matRipple","",3,"click",4,"ngIf"],[1,"flex","items-center","justify-between","w-full","border-t","px-8","py-4"],["mat-button","",1,"-ml-4",3,"color","click"],["class","flex items-center mr-4",4,"ngIf"],["mat-flat-button","",3,"color","click"],[1,"w-full","h-full","object-cover",3,"src"],[1,"flex","items-center","min-h-20","text-lg","font-semibold"],[1,"flex","items-center","mt-2","whitespace-nowrap"],["mat-icon-button","",3,"click"],[1,"font-sm","mx-2"],[3,"value"],[1,"flex","items-center","h-10","min-h-10","px-4",3,"color","checked","change"],[1,"p-4","space-y-2"],[1,"fuse-mat-dense","fuse-mat-no-subscript","w-full"],["matInput","",3,"value","input"],["mat-icon-button","","matSuffix","",3,"click"],["matRipple","",1,"flex","items-center","h-10","min-h-10","-ml-0.5","pl-4","pr-3","leading-none","cursor-pointer","border-t","hover:bg-gray-50","dark:hover:bg-hover",3,"click"],[1,"mr-2","icon-size-5",3,"svgIcon"],[1,"break-all"],[1,"flex","items-center","mr-4"],[1,"text-green-500",3,"svgIcon"],[1,"ml-2"],[1,"text-red-500",3,"svgIcon"],[1,"p-8","sm:p-16","border-t","text-4xl","font-semibold","tracking-tight","text-center"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.YNc(2,O,2,1,"div",2),e.TgZ(3,"div",3),e._uU(4,"Inventory"),e.qZA(),e.TgZ(5,"div",4),e.TgZ(6,"mat-form-field",5),e._UZ(7,"mat-icon",6),e._UZ(8,"input",7),e.qZA(),e.TgZ(9,"button",8),e.NdJ("click",function(){return o.createProduct()}),e._UZ(10,"mat-icon",9),e.TgZ(11,"span",10),e._uU(12,"Add"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",11),e.TgZ(14,"div",12),e.YNc(15,ce,2,2,"ng-container",13),e.ALo(16,"async"),e.YNc(17,be,110,33,"ng-template",null,14,e.W1O),e.YNc(19,Ce,2,0,"ng-template",null,15,e.W1O),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngIf",o.isLoading),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:search"),e.xp6(1),e.Q6J("formControl",o.searchInputControl)("autocomplete","off")("placeholder","Search products"),e.xp6(1),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:plus"),e.xp6(5),e.Q6J("ngIf",e.lcZ(16,8,o.products$)))},directives:[h.O5,x.KE,w.Hw,x.qo,k.Nt,l.Fj,l.JJ,l.oH,C.lW,U.pW,Z.YE,Z.nU,y.NW,h.mk,h.sg,h.tP,l._Y,l.JL,l.sg,Q.Rr,l.u,x.hX,q.gD,l.wV,x.R9,T.ey,A.oG,T.wG],pipes:[h.Ov,h.H9],styles:[".inventory-grid{grid-template-columns:48px auto 40px}@media (min-width: 600px){.inventory-grid{grid-template-columns:48px auto 112px 72px}}@media (min-width: 960px){.inventory-grid{grid-template-columns:48px 112px auto 112px 72px}}@media (min-width: 1280px){.inventory-grid{grid-template-columns:48px 112px auto 112px 96px 96px 72px}}\n"],encapsulation:2,data:{animation:M.L},changeDetection:0}),n})(),resolve:{brands:(()=>{class n{constructor(t){this._inventoryService=t}resolve(t,o){return this._inventoryService.getBrands()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),categories:(()=>{class n{constructor(t){this._inventoryService=t}resolve(t,o){return this._inventoryService.getCategories()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),products:(()=>{class n{constructor(t){this._inventoryService=t}resolve(t,o){return this._inventoryService.getProducts()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),tags:(()=>{class n{constructor(t){this._inventoryService=t}resolve(t,o){return this._inventoryService.getTags()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),vendors:(()=>{class n{constructor(t){this._inventoryService=t}resolve(t,o){return this._inventoryService.getVendors()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(f))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]}];let qe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[b.Bz.forChild(Ue),C.ot,A.p9,x.lN,w.Ps,k.c,F.Tx,y.TU,U.Cv,T.si,Z.JX,q.LD,Q.rP,L.AV,N.m]]}),n})()}}]);