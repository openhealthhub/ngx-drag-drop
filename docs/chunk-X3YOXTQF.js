import{a as E,b as _,c as C,d as S,e as T,f as b}from"./chunk-32P3MAJ2.js";import{l as I}from"./chunk-X6H25DOI.js";import{Cb as h,Eb as d,Mb as s,Ob as l,Qa as o,Ra as v,Tb as m,Ub as c,_a as f,db as D,fd as k,ob as p,pc as x,sc as y,tb as a,ub as r,vb as g}from"./chunk-XYA2N53B.js";function w(t,u){if(t&1&&(a(0,"pre"),s(1),m(2,"json"),r()),t&2){let i=d();o(),l("Event: ",c(2,1,i.lastDropEvent),"")}}function j(t,u){if(t&1&&(a(0,"pre"),s(1),m(2,"json"),r()),t&2){let i=d();o(),l("Types: ",c(2,1,i.lastDropTypes),"")}}function B(t,u){if(t&1&&(a(0,"pre"),s(1),m(2,"json"),r()),t&2){let i=d();o(),l("Files: ",c(2,1,i.lastDropFiles),"")}}function F(t,u){if(t&1&&(a(0,"pre"),s(1),m(2,"json"),r()),t&2){let i=d();o(),l("Items: ",c(2,1,i.lastDropItems),"")}}var H=(()=>{class t{snackBarService;lastDropEvent=null;lastDropTypes;lastDropFiles;lastDropItems;constructor(i){this.snackBarService=i}onDrop(i){if(this.snackBarService.dismiss(),this.snackBarService.open("Something dropped O.O",void 0,{duration:2e3}),this.lastDropEvent=i,this.lastDropTypes=this.lastDropEvent.event.dataTransfer?.types,this.lastDropFiles=[],this.lastDropItems=[],this.lastDropEvent.event.dataTransfer?.files){for(let n=0;n<this.lastDropEvent.event.dataTransfer?.files.length;n++){let e=this.lastDropEvent.event.dataTransfer?.files[n];this.lastDropFiles.push({lastModifiedDate:e.lastModified,name:e.name,type:e.type,size:e.size})}for(let n=0;n<this.lastDropEvent.event.dataTransfer.items.length;n++){let e=this.lastDropEvent.event.dataTransfer.items[n];this.lastDropItems.push({type:e.type,kind:e.kind,data:this.lastDropEvent.event.dataTransfer.getData(e.type)})}}}static \u0275fac=function(n){return new(n||t)(v(I))};static \u0275cmp=f({type:t,selectors:[["dnd-native"]],decls:29,vars:5,consts:[[1,"container-fluid"],[1,"row"],[1,"col"],["appearance","raised"],[1,"d-flex","flex-column","gap-3"],["src","https://i.imgflip.com/1quv8v.jpg"],["href","https://imgflip.com/i/1quv8v"],["href","#"],["dndDropzone","",1,"mt-2","p-2","border","rounded",3,"dndDrop","dndAllowExternal"],[4,"ngIf"]],template:function(n,e){n&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-header")(5,"mat-card-title"),s(6,"Draggable stuff"),r(),a(7,"mat-card-subtitle"),s(8," Drag the image or a text selection onto the dropzone and see what happens "),r()(),a(9,"mat-card-content",4)(10,"div"),g(11,"img",5),r(),a(12,"div")(13,"a",6),s(14,"Made with imgflip"),r()(),a(15,"a",7),s(16," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "),r()()()(),a(17,"div",2)(18,"mat-card",3)(19,"mat-card-header")(20,"mat-card-title"),s(21,"Dropzone"),r()(),a(22,"mat-card-content")(23,"div",8),h("dndDrop",function(M){return e.onDrop(M)}),a(24,"div"),D(25,w,3,3,"pre",9)(26,j,3,3,"pre",9)(27,B,3,3,"pre",9)(28,F,3,3,"pre",9),r()()()()()()()),n&2&&(o(23),p("dndAllowExternal",!0),o(2),p("ngIf",e.lastDropEvent),o(),p("ngIf",e.lastDropTypes&&e.lastDropTypes.length),o(),p("ngIf",e.lastDropFiles&&e.lastDropFiles.length),o(),p("ngIf",e.lastDropItems&&e.lastDropItems.length))},dependencies:[b,E,C,T,S,_,k,x,y],styles:["[_nghost-%COMP%]{display:block;box-sizing:border-box}pre[_ngcontent-%COMP%]{white-space:pre-wrap;word-wrap:break-word}"]})}return t})();export{H as default};
