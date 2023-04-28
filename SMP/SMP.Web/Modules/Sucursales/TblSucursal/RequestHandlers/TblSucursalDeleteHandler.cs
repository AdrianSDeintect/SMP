using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SMP.Sucursales.TblSucursalRow;

namespace SMP.Sucursales;

public interface ITblSucursalDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalDeleteHandler
{
    public TblSucursalDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}