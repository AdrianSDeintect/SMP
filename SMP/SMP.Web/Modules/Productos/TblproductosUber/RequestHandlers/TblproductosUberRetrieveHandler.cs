using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SMP.Productos.TblproductosUberRow>;
using MyRow = SMP.Productos.TblproductosUberRow;

namespace SMP.Productos;

public interface ITblproductosUberRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class TblproductosUberRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITblproductosUberRetrieveHandler
{
    public TblproductosUberRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}