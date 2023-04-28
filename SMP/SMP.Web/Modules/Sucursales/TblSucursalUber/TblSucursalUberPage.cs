using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SMP.Sucursales.Pages;

[PageAuthorize(typeof(TblSucursalUberRow))]
public class TblSucursalUberPage : Controller
{
    [Route("Sucursales/TblSucursalUber")]
    public ActionResult Index()
    {
        return this.GridPage("@/Sucursales/TblSucursalUber/TblSucursalUberPage",
            TblSucursalUberRow.Fields.PageTitle());
    }
}