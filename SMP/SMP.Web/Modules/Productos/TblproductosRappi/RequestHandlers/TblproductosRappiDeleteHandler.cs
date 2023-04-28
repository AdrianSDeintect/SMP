using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SMP.Productos.TblproductosRappiRow;

namespace SMP.Productos;

public interface ITblproductosRappiDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class TblproductosRappiDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITblproductosRappiDeleteHandler
{
    public TblproductosRappiDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}