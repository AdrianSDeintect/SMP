using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SMP.Productos.TblproductosRappiRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SMP.Productos.TblproductosRappiRow;

namespace SMP.Productos;

public interface ITblproductosRappiSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class TblproductosRappiSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITblproductosRappiSaveHandler
{
    public TblproductosRappiSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}