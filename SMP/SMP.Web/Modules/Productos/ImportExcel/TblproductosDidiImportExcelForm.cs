using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace SMP.Productos;

[FormScript("Productos.ImportExcel.TblproductosDidi")]
//[BasedOnRow(typeof(TblproductosDidiRow), CheckNames = false)]
[BasedOnRow(typeof(TblproductosDidiRow), CheckNames = false)]
public class TblproductosDidiImportExcelForm
{
    //[ReadOnly(true)]
    //public Int32 IdCatCategoriaPlanograma { get; set; }
    //[Hidden]
    //public Int32 IdOrigen { get; set; }
    //[Hidden]
    //public Int32 idArticulo { get; set; }
    //public String VchCodCategoriaPlanograma { get; set; }
    //public String VchDesCategoriaPlanograma { get; set; }

    //public String VchComentarios { get; set; }
    //[BooleanEditor]
    //public Int32 IEliminado { get; set; }
    [FileUploadEditor, Required]
    public string FileName { get; set; }
}