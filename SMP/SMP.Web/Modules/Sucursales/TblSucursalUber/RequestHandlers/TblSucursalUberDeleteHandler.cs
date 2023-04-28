using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SMP.Sucursales.TblSucursalUberRow;

namespace SMP.Sucursales;

public interface ITblSucursalUberDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalUberDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalUberDeleteHandler
{
    public TblSucursalUberDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}