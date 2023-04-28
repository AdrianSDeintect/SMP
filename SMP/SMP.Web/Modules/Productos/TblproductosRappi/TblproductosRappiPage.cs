using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SMP.Productos.Pages;

[PageAuthorize(typeof(TblproductosRappiRow))]
public class TblproductosRappiPage : Controller
{
    [Route("Productos/TblproductosRappi")]
    public ActionResult Index()
    {
        return this.GridPage("@/Productos/TblproductosRappi/TblproductosRappiPage",
            TblproductosRappiRow.Fields.PageTitle());
    }
}