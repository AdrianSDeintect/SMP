using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SMP.Productos.TblproductosUberRow;

namespace SMP.Productos;

public interface ITblproductosUberDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class TblproductosUberDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITblproductosUberDeleteHandler
{
    public TblproductosUberDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}