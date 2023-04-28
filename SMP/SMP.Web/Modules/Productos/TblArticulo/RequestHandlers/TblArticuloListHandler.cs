using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SMP.Productos.TblArticuloRow>;
using MyRow = SMP.Productos.TblArticuloRow;

namespace SMP.Productos;

public interface ITblArticuloListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class TblArticuloListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITblArticuloListHandler
{
    public TblArticuloListHandler(IRequestContext context)
            : base(context)
    {
    }
}