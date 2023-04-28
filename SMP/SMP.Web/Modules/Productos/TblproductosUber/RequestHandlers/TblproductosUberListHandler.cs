using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SMP.Productos.TblproductosUberRow>;
using MyRow = SMP.Productos.TblproductosUberRow;

namespace SMP.Productos;

public interface ITblproductosUberListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class TblproductosUberListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITblproductosUberListHandler
{
    public TblproductosUberListHandler(IRequestContext context)
            : base(context)
    {
    }
}