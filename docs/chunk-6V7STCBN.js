import{i as k,j as $}from"./chunk-RT3ATANK.js";import{a as I,c as V,e as y,f as O}from"./chunk-32P3MAJ2.js";import{l as L}from"./chunk-X6H25DOI.js";import{Cb as u,Eb as d,Lb as D,Mb as x,Ob as N,Qa as _,Ra as h,Sb as v,Vb as b,_a as M,cd as P,db as p,dd as B,ed as F,fd as R,gd as z,ja as o,ka as c,ob as s,oc as w,pc as T,qc as S,tb as l,ub as g,vb as E,yb as C,zb as f}from"./chunk-XYA2N53B.js";var A=n=>({$implicit:n});function H(n,m){n&1&&(l(0,"div",12)(1,"mat-icon",13),x(2,"drag_handle "),g()())}function j(n,m){n&1&&(l(0,"div",14),x(1," MY_CUSTOM_DRAG_IMAGE "),g())}function U(n,m){n&1&&C(0)}function Y(n,m){if(n&1){let e=f();l(0,"div",15),u("dndDrop",function(t){o(e);let r=d().$implicit,a=d(2);return c(a.onDrop(t,r.children))}),p(1,U,1,0,"ng-container",3),g()}if(n&2){let e=d().$implicit;d(2);let i=D(2);_(),s("ngTemplateOutlet",i)("ngTemplateOutletContext",v(2,A,e.children))}}function q(n,m){if(n&1){let e=f();l(0,"mat-card",6),u("dndCanceled",function(){let t=o(e).$implicit,r=d().$implicit,a=d();return c(a.onDragged(t,r,"none"))})("dndCopied",function(){let t=o(e).$implicit,r=d().$implicit,a=d();return c(a.onDragged(t,r,"copy"))})("dndEnd",function(t){o(e);let r=d(2);return c(r.onDragEnd(t))})("dndLinked",function(){let t=o(e).$implicit,r=d().$implicit,a=d();return c(a.onDragged(t,r,"link"))})("dndMoved",function(){let t=o(e).$implicit,r=d().$implicit,a=d();return c(a.onDragged(t,r,"move"))})("dndStart",function(t){o(e);let r=d(2);return c(r.onDragStart(t))}),l(1,"mat-card-header",7),p(2,H,3,0,"div",8),x(3),g(),l(4,"mat-card-content",9),p(5,j,2,0,"div",10)(6,Y,2,4,"div",11),g()()}if(n&2){let e=m.$implicit;s("dndDisableIf",!!e.disable)("dndDraggable",e),_(2),s("ngIf",e.handle),_(),N(" ",e.content," "),_(2),s("ngIf",!!e.customDragImage),_(),s("ngIf",e.children)}}function J(n,m){if(n&1&&(E(0,"mat-card",4),p(1,q,7,6,"mat-card",5)),n&2){let e=m.$implicit;_(),s("ngForOf",e)}}function K(n,m){n&1&&C(0)}var re=(()=>{class n{snackBarService;nestableList=[{content:"Got something nested",children:[{content:"Nested",customDragImage:!0,children:[]}]},{content:"No nested dropping here"},{content:"Got more than one",children:[{content:"Nested 1",handle:!0,children:[]},{content:"Nested 2",children:[]},{content:"Nested 3",children:[]}]},{content:"Drop something, I'll catch!",children:[]}];currentDraggableEvent;currentDragEffectMsg;constructor(e){this.snackBarService=e}onDragStart(e){this.currentDragEffectMsg="",this.currentDraggableEvent=e,this.snackBarService.dismiss(),this.snackBarService.open("Drag started!",void 0,{duration:2e3})}onDragged(e,i,t){if(this.currentDragEffectMsg=`Drag ended with effect "${t}"!`,t==="move"){let r=i.indexOf(e);i.splice(r,1)}}onDragEnd(e){this.currentDraggableEvent=e,this.snackBarService.dismiss(),this.snackBarService.open(this.currentDragEffectMsg||"Drag ended!",void 0,{duration:2e3})}onDrop(e,i){if(i&&(e.dropEffect==="copy"||e.dropEffect==="move")){let t=e.index;typeof t>"u"&&(t=i.length),i.splice(t,0,e.data)}}static \u0275fac=function(i){return new(i||n)(h(L))};static \u0275cmp=M({type:n,selectors:[["dnd-nested"]],decls:5,vars:4,consts:[["recursiveList",""],[1,"container-fluid"],["dndDropzone","",1,"d-flex","gap-3","p-3","rounded-2",3,"dndDrop"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["appearance","raised","dndPlaceholderRef","",1,"dndPlaceholder"],["appearance","raised","dndEffectAllowed","move",3,"dndDisableIf","dndDraggable","dndCanceled","dndCopied","dndEnd","dndLinked","dndMoved","dndStart",4,"ngFor","ngForOf"],["appearance","raised","dndEffectAllowed","move",3,"dndCanceled","dndCopied","dndEnd","dndLinked","dndMoved","dndStart","dndDisableIf","dndDraggable"],[1,"p-2"],["class","drag-handle me-2 text-muted",4,"ngIf"],[1,"d-flex","align-items-start","gap-2","flex-column","p-2"],["dndDragImageRef","",4,"ngIf"],["class","flex-column p-2 gap-2 rounded-2","dndDropzone","",3,"dndDrop",4,"ngIf"],[1,"drag-handle","me-2","text-muted"],["dndHandle","","mat-list-icon",""],["dndDragImageRef",""],["dndDropzone","",1,"flex-column","p-2","gap-2","rounded-2",3,"dndDrop"]],template:function(i,t){if(i&1){let r=f();l(0,"div",1),p(1,J,2,1,"ng-template",null,0,b),l(3,"div",2),u("dndDrop",function(G){return o(r),c(t.onDrop(G,t.nestableList))}),p(4,K,1,0,"ng-container",3),g()()}if(i&2){let r=D(2);_(4),s("ngTemplateOutlet",r)("ngTemplateOutletContext",v(2,A,t.nestableList))}},dependencies:[O,I,V,y,F,w,B,T,$,k,z,P,R,S],styles:["[_nghost-%COMP%]{display:block;box-sizing:border-box}mat-card[_ngcontent-%COMP%]{transition:transform .2s,opacity .2s}mat-card-header[_ngcontent-%COMP%]{border-bottom:2px solid rgba(0,0,0,.04);align-items:center;min-height:46px}.dndDraggingSource[_ngcontent-%COMP%]{opacity:.5;transform:scale(.98)}.dndPlaceholder[_ngcontent-%COMP%]{background:#fff;min-height:46px;min-width:46px}[dnddropzone][_ngcontent-%COMP%]{background:#fafafa;min-height:60px;display:flex;outline:2px solid rgba(0,0,0,.04)}"]})}return n})();export{re as default};
