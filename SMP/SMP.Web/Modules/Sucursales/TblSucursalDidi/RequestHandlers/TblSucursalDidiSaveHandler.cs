using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SMP.Sucursales.TblSucursalDidiRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SMP.Sucursales.TblSucursalDidiRow;

namespace SMP.Sucursales;

public interface ITblSucursalDidiSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalDidiSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalDidiSaveHandler
{
    public TblSucursalDidiSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}