"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[317],{3317:(C,s,d)=>{d.r(s),d.d(s,{default:()=>E});var r=d(177),g=d(9213),_=d(6058),a=d(866),e=d(3953);const p=n=>({$implicit:n});function f(n,c){1&n&&e.eu8(0)}function D(n,c){if(1&n){const t=e.RV6();e.j41(0,"mat-list",13),e.bIt("dndDrop",function(l){e.eBV(t);const i=e.XpG().$implicit,m=e.XpG(2);return e.Njj(m.onDrop(l,i.children))}),e.DNE(1,f,1,0,"ng-container",5),e.k0s()}if(2&n){const t=e.XpG().$implicit;e.XpG(2);const o=e.sdS(2);e.R7$(),e.Y8G("ngTemplateOutlet",o)("ngTemplateOutletContext",e.eq3(2,p,t.children))}}function u(n,c){if(1&n){const t=e.RV6();e.j41(0,"div",9)(1,"mat-list-item",10),e.bIt("dndMoved",function(){const l=e.eBV(t).$implicit,i=e.XpG().$implicit,m=e.XpG();return e.Njj(m.onDragged(l,i,"move"))}),e.j41(2,"span",11),e.EFF(3),e.k0s()(),e.DNE(4,D,2,4,"mat-list",12),e.k0s()}if(2&n){const t=c.$implicit;e.R7$(),e.Y8G("dndDraggable",t),e.R7$(2),e.JRh(t.content),e.R7$(),e.Y8G("ngIf",t.children)}}function h(n,c){if(1&n&&(e.nrm(0,"mat-list-item",7),e.DNE(1,u,5,3,"div",8)),2&n){const t=c.$implicit;e.R7$(),e.Y8G("ngForOf",t)}}function T(n,c){1&n&&e.eu8(0)}let E=(()=>{class n{draggableList=[{content:"Demo 1",children:[{content:"Nested 1",children:[]},{content:"Nested 2",children:[]},{content:"Nested 3",children:[]}]},{content:"Demo 2",children:[]},{content:"Demo 3",children:[]},{content:"Demo 4",children:[]},{content:"Demo 5",children:[]},{content:"Demo 6",children:[]},{content:"Demo 7",children:[]},{content:"Demo 8",children:[]},{content:"Demo 9",children:[]},{content:"Demo 10",children:[{content:"Nested 1",children:[]},{content:"Nested 2",children:[]},{content:"Nested 3",children:[]}]}];onDragged(t,o,l){if("move"===l){const i=o.indexOf(t);o.splice(i,1)}}onDrop(t,o){if(console.log("onDrop",t,o),o&&("copy"===t.dropEffect||"move"===t.dropEffect)){let l=t.index;typeof l>"u"&&(l=o.length),o.splice(l,0,t.data)}}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=e.VBU({type:n,selectors:[["dnd-tree"]],standalone:!0,features:[e.aNF],decls:11,vars:7,consts:[["recursiveList",""],[1,"container-fluid"],[1,"row"],[1,"col-12","offset-lg-2","col-lg-4"],["dndDropzone","","dndEffectAllowed","move",1,"d-flex","flex-column","bg-light","gap-1",3,"dndDrop"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"col-12","col-lg-4"],["dndPlaceholderRef","",1,"dndPlaceholder","border","bg-opacity-25","mb-1"],["class","",4,"ngFor","ngForOf"],[1,""],["dndEffectAllowed","move",1,"border","bg-white","ms-n3",3,"dndMoved","dndDraggable"],["matListItemTitle",""],["class","d-flex flex-column bg-light pt-2 pb-0 ps-2","style","min-height: unset","dndDropzone","","dndEffectAllowed","move",3,"dndDrop",4,"ngIf"],["dndDropzone","","dndEffectAllowed","move",1,"d-flex","flex-column","bg-light","pt-2","pb-0","ps-2",2,"min-height","unset",3,"dndDrop"]],template:function(o,l){if(1&o){const i=e.RV6();e.j41(0,"div",1),e.DNE(1,h,2,1,"ng-template",null,0,e.C5r),e.j41(3,"div",2)(4,"div",3)(5,"mat-list",4),e.bIt("dndDrop",function(v){return e.eBV(i),e.Njj(l.onDrop(v,l.draggableList))}),e.DNE(6,T,1,0,"ng-container",5),e.k0s()(),e.j41(7,"div",6)(8,"pre"),e.EFF(9),e.nI1(10,"json"),e.k0s()()()()}if(2&o){const i=e.sdS(2);e.R7$(6),e.Y8G("ngTemplateOutlet",i)("ngTemplateOutletContext",e.eq3(5,p,l.draggableList)),e.R7$(3),e.JRh(e.bMT(10,3,l.draggableList))}},dependencies:[r.MD,r.Sq,r.bT,r.T3,r.TG,a.hN,a.GI,g.m_,_.Fg,_.jt,_.YE,_.yE,a.zr],styles:[".dndDraggingSource[_ngcontent-%COMP%]{opacity:.5;transform:scale(.98);pointer-events:none}.dndDraggingSource[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{pointer-events:none}"]})}return n})()}}]);