using Serenity.ComponentModel;

namespace SMP.Productos.Forms;

[FormScript("Productos.TblproductosDidi")]
[BasedOnRow(typeof(TblproductosDidiRow), CheckNames = false)]
public class TblproductosDidiForm
{
    //public string StrDivision { get; set; }
    //public string StrCategoria { get; set; }
    //public string StrSubCat { get; set; }
    //public string StrGrupo { get; set; }
    //public string StrUpc { get; set; }
    //public string StrMarca { get; set; }
    //public string StrNombre { get; set; }
    //public string StrFormato { get; set; }
    //public string Strimagen { get; set; }

    [FileUploadEditor, Required]
    public string FileName { get; set; }
}