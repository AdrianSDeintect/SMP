using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SMP.Sucursales.TblSucursalRappiRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SMP.Sucursales.TblSucursalRappiRow;

namespace SMP.Sucursales;

public interface ITblSucursalRappiSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalRappiSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalRappiSaveHandler
{
    public TblSucursalRappiSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}