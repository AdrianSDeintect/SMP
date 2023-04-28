using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SMP.Sucursales.TblSucursalRappiRow>;
using MyRow = SMP.Sucursales.TblSucursalRappiRow;

namespace SMP.Sucursales;

public interface ITblSucursalRappiRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalRappiRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalRappiRetrieveHandler
{
    public TblSucursalRappiRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}