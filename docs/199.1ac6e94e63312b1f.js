"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[199],{199:(E,g,p)=>{p.r(g),p.d(g,{default:()=>h});var u=p(177),s=p(6058),_=p(866),n=p(3953);const f=()=>["apple"],b=()=>["banana"];function y(o,l){if(1&o){const e=n.RV6();n.j41(0,"mat-list-item",9),n.bIt("dndMoved",function(){const t=n.eBV(e),r=t.$implicit,a=t.index,i=n.XpG();return n.Njj(i.onDragged(a,r,i.fruits))}),n.j41(1,"span",10),n.EFF(2),n.k0s()()}if(2&o){const e=l.$implicit;n.Y8G("dndDraggable",e)("dndType",e.type),n.R7$(2),n.Lme("",e.type," ",e.id,"")}}function D(o,l){if(1&o){const e=n.RV6();n.j41(0,"mat-list-item",9),n.bIt("dndMoved",function(){const t=n.eBV(e),r=t.$implicit,a=t.index,i=n.XpG();return n.Njj(i.onDragged(a,r,i.apples))}),n.j41(1,"span",10),n.EFF(2),n.k0s()()}if(2&o){const e=l.$implicit;n.Y8G("dndDraggable",e)("dndType",e.type),n.R7$(2),n.Lme("",e.type," ",e.id,"")}}function T(o,l){if(1&o){const e=n.RV6();n.j41(0,"mat-list-item",9),n.bIt("dndMoved",function(){const t=n.eBV(e),r=t.$implicit,a=t.index,i=n.XpG();return n.Njj(i.onDragged(a,r,i.bananas))}),n.j41(1,"span",10),n.EFF(2),n.k0s()()}if(2&o){const e=l.$implicit;n.Y8G("dndDraggable",e)("dndType",e.type),n.R7$(2),n.Lme("",e.type," ",e.id,"")}}let F=0;function m(o){return{id:F++,type:o}}function c(o,l){return Array.from({length:l-o+1},(e,d)=>d)}let h=(()=>{class o{fruits=c(0,100).map(e=>m(Math.random()<.5?"apple":"banana"));apples=c(0,12).map(e=>m("apple"));bananas=c(0,10).map(e=>m("banana"));trackByFruit(e,d){return d}onDragged(e,d,t){const r=t.indexOf(d);console.log(`onDragged ngFor-index=${e}, item=${d}, removeIndex=${r}, list=${t.length}`),t.splice(r,1)}onDrop(e,d){console.log("onDrop",e,d.length);let t=e.index;typeof t>"u"&&(t=d.length),d.splice(t,0,e.data)}static \u0275fac=function(d){return new(d||o)};static \u0275cmp=n.VBU({type:o,selectors:[["dnd-typed"]],standalone:!0,features:[n.aNF],decls:20,vars:10,consts:[[1,"container-fluid"],[1,"row"],[1,"col"],["dndDropzone","","dndEffectAllowed","move",1,"dndList","gap-1","flex-grow-1","d-flex","flex-column","bg-light","rounded-1","shadow-sm",3,"dndDrop"],["dndPlaceholderRef","",1,"dndPlaceholder","border","rounded-1","bg-danger","bg-gradient"],["class","border rounded-1 bg-white","dndEffectAllowed","move",3,"dndDraggable","dndType","dndMoved",4,"ngFor","ngForOf","ngForTrackBy"],["dndEffectAllowed","move",1,"dndList","gap-1","flex-grow-1","d-flex","flex-column","bg-light","rounded-1","shadow-sm",3,"dndDrop","dndDropzone"],["dndPlaceholderRef","",1,"dndPlaceholder","border","rounded-1","bg-success","bg-gradient"],["dndPlaceholderRef","",1,"dndPlaceholder","border","rounded-1","bg-warning","bg-gradient"],["dndEffectAllowed","move",1,"border","rounded-1","bg-white",3,"dndMoved","dndDraggable","dndType"],["matListItemTitle",""]],template:function(d,t){1&d&&(n.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"pre"),n.EFF(4,"Fruits"),n.k0s(),n.j41(5,"mat-list",3),n.bIt("dndDrop",function(a){return t.onDrop(a,t.fruits)}),n.nrm(6,"mat-list-item",4),n.DNE(7,y,3,4,"mat-list-item",5),n.k0s()(),n.j41(8,"div",2)(9,"pre"),n.EFF(10,"Apples"),n.k0s(),n.j41(11,"mat-list",6),n.bIt("dndDrop",function(a){return t.onDrop(a,t.apples)}),n.nrm(12,"mat-list-item",7),n.DNE(13,D,3,4,"mat-list-item",5),n.k0s()(),n.j41(14,"div",2)(15,"pre"),n.EFF(16,"Bananas"),n.k0s(),n.j41(17,"mat-list",6),n.bIt("dndDrop",function(a){return t.onDrop(a,t.bananas)}),n.nrm(18,"mat-list-item",8),n.DNE(19,T,3,4,"mat-list-item",5),n.k0s()()()()),2&d&&(n.R7$(7),n.Y8G("ngForOf",t.fruits)("ngForTrackBy",t.trackByFruit),n.R7$(4),n.Y8G("dndDropzone",n.lJ4(8,f)),n.R7$(2),n.Y8G("ngForOf",t.apples)("ngForTrackBy",t.trackByFruit),n.R7$(4),n.Y8G("dndDropzone",n.lJ4(9,b)),n.R7$(2),n.Y8G("ngForOf",t.bananas)("ngForTrackBy",t.trackByFruit))},dependencies:[s.Fg,s.jt,s.YE,s.yE,_.hN,_.GI,u.Sq,_.zr],styles:["[_nghost-%COMP%]{display:block;box-sizing:border-box}pre[_ngcontent-%COMP%]{text-align:center;padding:8px}.mat-mdc-list-item[_ngcontent-%COMP%]{margin:2px 0;border:1px solid gray}.dndList[_ngcontent-%COMP%]{transition:all .3s ease;padding:8px;overflow-y:auto}.dndList.dndDragover[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;border-color:green}.dndDragging[_ngcontent-%COMP%]{border:1px solid green}.dndDraggingSource[_ngcontent-%COMP%]{display:none}.dndPlaceholder[_ngcontent-%COMP%]{min-height:48px;border:1px dashed green;background-color:#0000001a}pre[_ngcontent-%COMP%]{white-space:pre-wrap;word-wrap:break-word}"]})}return o})()}}]);