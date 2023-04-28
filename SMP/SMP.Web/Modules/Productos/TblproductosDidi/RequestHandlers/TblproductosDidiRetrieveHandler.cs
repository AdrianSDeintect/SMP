using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SMP.Productos.TblproductosDidiRow>;
using MyRow = SMP.Productos.TblproductosDidiRow;

namespace SMP.Productos;

public interface ITblproductosDidiRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class TblproductosDidiRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITblproductosDidiRetrieveHandler
{
    public TblproductosDidiRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}