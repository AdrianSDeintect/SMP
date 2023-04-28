using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace SMP.Productos.Pages;

[PageAuthorize(typeof(TblproductosUberRow))]
public class TblproductosUberPage : Controller
{
    [Route("Productos/TblproductosUber")]
    public ActionResult Index()
    {
        return this.GridPage("@/Productos/TblproductosUber/TblproductosUberPage",
            TblproductosUberRow.Fields.PageTitle());
    }
}