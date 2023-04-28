using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SMP.Sucursales.TblSucursalUberRow>;
using MyRow = SMP.Sucursales.TblSucursalUberRow;

namespace SMP.Sucursales;

public interface ITblSucursalUberListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalUberListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalUberListHandler
{
    public TblSucursalUberListHandler(IRequestContext context)
            : base(context)
    {
    }
}