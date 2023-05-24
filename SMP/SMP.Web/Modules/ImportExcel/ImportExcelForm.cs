using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace SMP.Web.Modules.ImportExcel;

[FormScript("Modules.ImportExcel")]
//[BasedOnRow(typeof(TblproductosDidiRow), CheckNames = false)]
public class ImportExcelForm
{
    //[ReadOnly(true)]
    [FileUploadEditor, Required]
    public string FileName { get; set; }
}