using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SMP.Productos.TblproductosRappiRow>;
using MyRow = SMP.Productos.TblproductosRappiRow;

namespace SMP.Productos;

public interface ITblproductosRappiListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class TblproductosRappiListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITblproductosRappiListHandler
{
    public TblproductosRappiListHandler(IRequestContext context)
            : base(context)
    {
    }
}