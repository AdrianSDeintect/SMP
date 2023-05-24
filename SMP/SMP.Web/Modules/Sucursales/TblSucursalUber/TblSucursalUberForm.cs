using Serenity.ComponentModel;

namespace SMP.Sucursales.Forms;

[FormScript("Sucursales.TblSucursalUber")]
[BasedOnRow(typeof(TblSucursalUberRow), CheckNames = true)]
public class TblSucursalUberForm
{
    [Tab("General")]
    public string LocalSap { get; set; }
}