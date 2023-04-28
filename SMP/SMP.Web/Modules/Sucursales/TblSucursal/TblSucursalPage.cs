using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SMP.Sucursales.Pages;

[PageAuthorize(typeof(TblSucursalRow))]
public class TblSucursalPage : Controller
{
    [Route("Sucursales/TblSucursal")]
    public ActionResult Index()
    {
        return this.GridPage("@/Sucursales/TblSucursal/TblSucursalPage",
            TblSucursalRow.Fields.PageTitle());
    }
}