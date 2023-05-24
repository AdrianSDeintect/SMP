using Serenity.ComponentModel;

namespace SMP.Sucursales.Forms;

[FormScript("Sucursales.TblSucursalDidi")]
[BasedOnRow(typeof(TblSucursalDidiRow), CheckNames = true)]
public class TblSucursalDidiForm
{
    [Tab("General")]
    public string LocalSap { get; set; }
}