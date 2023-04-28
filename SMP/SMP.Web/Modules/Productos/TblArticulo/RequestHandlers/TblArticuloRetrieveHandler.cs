using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SMP.Productos.TblArticuloRow>;
using MyRow = SMP.Productos.TblArticuloRow;

namespace SMP.Productos;

public interface ITblArticuloRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class TblArticuloRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITblArticuloRetrieveHandler
{
    public TblArticuloRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}