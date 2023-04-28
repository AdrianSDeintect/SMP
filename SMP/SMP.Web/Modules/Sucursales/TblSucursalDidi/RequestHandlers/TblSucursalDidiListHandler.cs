using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SMP.Sucursales.TblSucursalDidiRow>;
using MyRow = SMP.Sucursales.TblSucursalDidiRow;

namespace SMP.Sucursales;

public interface ITblSucursalDidiListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalDidiListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalDidiListHandler
{
    public TblSucursalDidiListHandler(IRequestContext context)
            : base(context)
    {
    }
}