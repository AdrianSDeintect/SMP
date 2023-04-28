using Serenity.ComponentModel;
using System.ComponentModel;

namespace SMP.Sucursales.Columns;

[ColumnsScript("Sucursales.TblSucursalRappi")]
[BasedOnRow(typeof(TblSucursalRappiRow), CheckNames = true)]
public class TblSucursalRappiColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public string LocalSap { get; set; }
    public string NombreSucursal { get; set; }
}