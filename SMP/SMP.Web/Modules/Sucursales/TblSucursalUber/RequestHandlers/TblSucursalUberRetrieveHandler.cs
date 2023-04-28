using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SMP.Sucursales.TblSucursalUberRow>;
using MyRow = SMP.Sucursales.TblSucursalUberRow;

namespace SMP.Sucursales;

public interface ITblSucursalUberRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalUberRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalUberRetrieveHandler
{
    public TblSucursalUberRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}