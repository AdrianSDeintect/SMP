using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SMP.Sucursales.TblSucursalRappiRow>;
using MyRow = SMP.Sucursales.TblSucursalRappiRow;

namespace SMP.Sucursales;

public interface ITblSucursalRappiListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalRappiListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalRappiListHandler
{
    public TblSucursalRappiListHandler(IRequestContext context)
            : base(context)
    {
    }
}