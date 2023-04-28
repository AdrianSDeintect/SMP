using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SMP.Productos.TblproductosRappiRow>;
using MyRow = SMP.Productos.TblproductosRappiRow;

namespace SMP.Productos;

public interface ITblproductosRappiRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class TblproductosRappiRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITblproductosRappiRetrieveHandler
{
    public TblproductosRappiRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}