import{a as w}from"../../../_chunks/chunk-HHAWTOGR.js";import{e as y,f as P,g as m,h as e,i}from"../../../_chunks/chunk-E5B4J4OT.js";import{a as o,c as p,d as u,f as b,g}from"../../../_chunks/chunk-FEDAVPE7.js";var h=p(b(),1);var a=p(g(),1);var c=p(g(),1);var s=class extends c.EntityDialog{constructor(){super(...arguments);this.form=new P(this.idPrefix)}getFormKey(){return P.formKey}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return i.baseUrl}getModifyPermisison(){return e.updatePermission}getReadPermisison(){return e.readPermission}getDeletePermission(){return e.deletePermission}getInsertPermission(){return e.insertPermission}getUpdatePermission(){return e.updatePermission}};o(s,"TblproductosDidiDialog"),s=u([c.Decorators.registerClass("SMP.Productos.TblproductosDidiDialog")],s);var d=p(g(),1);var n=class extends d.EntityDialog{constructor(){super();this.form=new m(this.idPrefix);this.form=new m(this.idPrefix)}getFormKey(){return m.formKey}getRowDefinition(){return e}getService(){return i.baseUrl}getDialogTitle(){return"Excel Import"}getDialogButtons(){return[{text:"Import",click:()=>{if(this.validateBeforeSave()){if(this.form.FileName.value==null||Q.isEmptyOrNull(this.form.FileName.value.Filename)){Q.notifyError("Please select a file!");return}i.ExcelImport({FileName:this.form.FileName.value.Filename},t=>{Q.notifyInfo("Inserted: "+(t.Inserted||0)+", Updated: "+(t.Updated||0)),t.ErrorList!=null&&t.ErrorList.length>0&&Q.notifyError(t.ErrorList.join(`,\r
 `)),this.dialogClose()})}}},{text:"Cancel",click:()=>this.dialogClose()}]}};o(n,"TblproductosDidiDialogImportExcel"),n=u([d.Decorators.registerClass("SMP.Productos.ImportExcel.TblproductosDidiDialogImportExcel")],n);var f=p(w(),1);var l=class extends a.EntityGrid{getColumnsKey(){return y.columnsKey}getDialogType(){return s}getRowDefinition(){return e}getService(){return i.baseUrl}constructor(r){super(r)}getButtons(){var r=super.getButtons();return r.push(f.ExcelExportHelper.createToolButton({grid:this,service:i.baseUrl+"/ListExcel",onViewSubmit:()=>this.onViewSubmit(),separator:!0})),r.push(f.PdfExportHelper.createToolButton({grid:this,onViewSubmit:()=>this.onViewSubmit()})),r.push({title:"Import From Excel",cssClass:"export-xlsx-button",onClick:()=>{var t=new n;t.element.on("dialogclose",()=>{this.refresh(),t=null}),t.dialogOpen()}}),r}};o(l,"TblproductosDidiGrid"),l=u([a.Decorators.registerClass("SMP.Productos.TblproductosDidiGrid")],l);function D(){(0,h.initFullHeightGridPage)(new l($("#GridDiv")).element)}o(D,"pageInit");export{D as default};
//# sourceMappingURL=TblproductosDidiPage.js.map
