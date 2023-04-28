using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SMP.Sucursales.TblSucursalRow>;
using MyRow = SMP.Sucursales.TblSucursalRow;

namespace SMP.Sucursales;

public interface ITblSucursalRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalRetrieveHandler
{
    public TblSucursalRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}