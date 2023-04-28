using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SMP.Sucursales.TblSucursalRow>;
using MyRow = SMP.Sucursales.TblSucursalRow;

namespace SMP.Sucursales;

public interface ITblSucursalListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalListHandler
{
    public TblSucursalListHandler(IRequestContext context)
            : base(context)
    {
    }
}