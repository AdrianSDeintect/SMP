using Serenity.ComponentModel;
using SMP.Administration;
using System;
using System.Collections.Generic;

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
    //public Int32 fkIdArticulo { get; set; }
    //public String fkDesArticulo { get; set; }

    [Tab("General")]
    //public string NombrePerfil { get; set; }
    //public int Proveedor { get; set; }
    //public int TipoPlan { get; set; }
    public int IntArticuloid { get; set; }

    //[Tab("Categorias")]
    ////[Category("Categoria  ")]
    //[PermissionCheckEditorAttribute]
    //public List<PerfilSmartCategoriaRow> fkIdArticulo { get; set; }   
}