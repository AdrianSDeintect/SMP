using Serenity.ComponentModel;

namespace SMP.Sucursales.Forms;

[FormScript("Sucursales.TblSucursalRappi")]
[BasedOnRow(typeof(TblSucursalRappiRow), CheckNames = true)]
public class TblSucursalRappiForm
{
    [Tab("General")]
    public string LocalSap { get; set; }
}