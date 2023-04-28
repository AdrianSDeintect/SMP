using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SMP.Sucursales.TblSucursalDidiRow;

namespace SMP.Sucursales;

public interface ITblSucursalDidiDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalDidiDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalDidiDeleteHandler
{
    public TblSucursalDidiDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}