using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SMP.Sucursales.TblSucursalDidiRow>;
using MyRow = SMP.Sucursales.TblSucursalDidiRow;

namespace SMP.Sucursales;

public interface ITblSucursalDidiRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalDidiRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalDidiRetrieveHandler
{
    public TblSucursalDidiRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}