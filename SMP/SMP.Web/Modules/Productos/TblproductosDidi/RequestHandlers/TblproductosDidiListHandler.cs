using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SMP.Productos.TblproductosDidiRow>;
using MyRow = SMP.Productos.TblproductosDidiRow;

namespace SMP.Productos;

public interface ITblproductosDidiListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class TblproductosDidiListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITblproductosDidiListHandler
{
    public TblproductosDidiListHandler(IRequestContext context)
            : base(context)
    {
    }
}