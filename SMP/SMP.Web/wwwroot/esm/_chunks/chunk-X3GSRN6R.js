import{a as t,c as o,e as y,f as i,g}from"./chunk-FEDAVPE7.js";var E=class{};t(E,"TblArticuloColumns"),E.columnsKey="Productos.TblArticulo";var x=o(i(),1);var n=class{static getLookup(){return(0,x.getLookup)("Productos.TblArticulo")}static getLookupAsync(){return y(this,null,function*(){return(0,x.getLookupAsync)("Productos.TblArticulo")})}};t(n,"TblArticuloRow"),n.idProperty="Sku",n.nameProperty="Nombrearticulo",n.localTextPrefix="Productos.TblArticulo",n.lookupKey="Productos.TblArticulo",n.deletePermission="Administration:General",n.insertPermission="Administration:General",n.readPermission="Administration:General",n.updatePermission="Administration:General",n.Fields=(0,x.fieldsProxy)();var U=o(i(),1),G;(e=>(e.baseUrl="Productos/TblArticulo",e.Methods={Create:"Productos/TblArticulo/Create",Update:"Productos/TblArticulo/Update",Delete:"Productos/TblArticulo/Delete",Retrieve:"Productos/TblArticulo/Retrieve",List:"Productos/TblArticulo/List"},["Create","Update","Delete","Retrieve","List"].forEach(s=>{e[s]=function(d,m,R){return(0,U.serviceRequest)(e.baseUrl+"/"+s,d,m,R)}})))(G||(G={}));var I=class{};t(I,"TblproductosDidiColumns"),I.columnsKey="Productos.TblproductosDidi";var v=o(i(),1);var a=class{static getLookup(){return(0,v.getLookup)("Productos.TblproductosDidi")}static getLookupAsync(){return y(this,null,function*(){return(0,v.getLookupAsync)("Productos.TblproductosDidi")})}};t(a,"TblproductosDidiRow"),a.idProperty="IntArticuloid",a.nameProperty="IntArticuloid",a.localTextPrefix="Productos.TblproductosDidi",a.lookupKey="Productos.TblproductosDidi",a.deletePermission="Administration:General",a.insertPermission="Administration:General",a.readPermission="Administration:General",a.updatePermission="Administration:General",a.Fields=(0,v.fieldsProxy)();var K=o(i(),1),C;(e=>(e.baseUrl="Productos/TblproductosDidi",e.Methods={Create:"Productos/TblproductosDidi/Create",Update:"Productos/TblproductosDidi/Update",Delete:"Productos/TblproductosDidi/Delete",Retrieve:"Productos/TblproductosDidi/Retrieve",List:"Productos/TblproductosDidi/List",ExcelImport:"Productos/TblproductosDidi/ExcelImport"},["Create","Update","Delete","Retrieve","List","ExcelImport"].forEach(s=>{e[s]=function(d,m,R){return(0,K.serviceRequest)(e.baseUrl+"/"+s,d,m,R)}})))(C||(C={}));var A=class{};t(A,"TblproductosRappiColumns"),A.columnsKey="Productos.TblproductosRappi";var f=o(i(),1);var c=class{static getLookup(){return(0,f.getLookup)("Productos.TblproductosRappi")}static getLookupAsync(){return y(this,null,function*(){return(0,f.getLookupAsync)("Productos.TblproductosRappi")})}};t(c,"TblproductosRappiRow"),c.idProperty="IntArticuloid",c.nameProperty="IntArticuloid",c.localTextPrefix="Productos.TblproductosRappi",c.lookupKey="Productos.TblproductosRappi",c.deletePermission="Administration:General",c.insertPermission="Administration:General",c.readPermission="Administration:General",c.updatePermission="Administration:General",c.Fields=(0,f.fieldsProxy)();var M=o(i(),1),T;(e=>(e.baseUrl="Productos/TblproductosRappi",e.Methods={Create:"Productos/TblproductosRappi/Create",Update:"Productos/TblproductosRappi/Update",Delete:"Productos/TblproductosRappi/Delete",Retrieve:"Productos/TblproductosRappi/Retrieve",List:"Productos/TblproductosRappi/List",ExcelImport:"Productos/TblproductosRappi/ExcelImport"},["Create","Update","Delete","Retrieve","List","ExcelImport"].forEach(s=>{e[s]=function(d,m,R){return(0,M.serviceRequest)(e.baseUrl+"/"+s,d,m,R)}})))(T||(T={}));var D=class{};t(D,"TblproductosUberColumns"),D.columnsKey="Productos.TblproductosUber";var h=o(i(),1);var u=class{};t(u,"TblproductosUberRow"),u.idProperty="IntArticuloid",u.nameProperty="IntArticuloid",u.localTextPrefix="Productos.TblproductosUber",u.deletePermission="Administration:General",u.insertPermission="Administration:General",u.readPermission="Administration:General",u.updatePermission="Administration:General",u.Fields=(0,h.fieldsProxy)();var j=o(i(),1),N;(e=>(e.baseUrl="Productos/TblproductosUber",e.Methods={Create:"Productos/TblproductosUber/Create",Update:"Productos/TblproductosUber/Update",Delete:"Productos/TblproductosUber/Delete",Retrieve:"Productos/TblproductosUber/Retrieve",List:"Productos/TblproductosUber/List",ExcelImport:"Productos/TblproductosUber/ExcelImport"},["Create","Update","Delete","Retrieve","List","ExcelImport"].forEach(s=>{e[s]=function(d,m,R){return(0,j.serviceRequest)(e.baseUrl+"/"+s,d,m,R)}})))(N||(N={}));var l=o(g(),1),z=o(i(),1);var P=class extends l.PrefixedContext{constructor(p){if(super(p),!P.init){P.init=!0;var e=l.StringEditor,s=l.IntegerEditor,d=l.DecimalEditor;(0,z.initFormType)(P,["Nombrearticulo",e,"Categorialealtad",s,"Division",e,"Categoria",e,"Subcategoria",e,"Grupo",e,"Proveedor",e,"Iva",d,"Codbar",e,"ParametroProducto",e,"MapMod",e,"Precio",d])}}},b=P;t(b,"TblArticuloForm"),b.formKey="Productos.TblArticulo";var k=o(g(),1),B=o(i(),1);var S=class extends k.PrefixedContext{constructor(p){if(super(p),!S.init){S.init=!0;var e=k.LookupEditor;(0,B.initFormType)(S,["IntArticuloid",e])}}},O=S;t(O,"TblproductosDidiForm"),O.formKey="Productos.TblproductosDidi";var J=o(g(),1),F=o(i(),1);var q=class extends J.PrefixedContext{constructor(p){if(super(p),!q.init){q.init=!0;var e=J.LookupEditor;(0,F.initFormType)(q,["IntArticuloid",e])}}},H=q;t(H,"TblproductosRappiForm"),H.formKey="Productos.TblproductosRappi";var X=o(g(),1),V=o(i(),1);var L=class extends X.PrefixedContext{constructor(p){if(super(p),!L.init){L.init=!0;var e=X.LookupEditor;(0,V.initFormType)(L,["IntArticuloid",e])}}},Q=L;t(Q,"TblproductosUberForm"),Q.formKey="Productos.TblproductosUber";export{E as a,b,n as c,G as d,I as e,O as f,a as g,C as h,A as i,H as j,c as k,T as l,D as m,Q as n,u as o,N as p};
//# sourceMappingURL=chunk-X3GSRN6R.js.map
