using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SMP.Sucursales.TblSucursalRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SMP.Sucursales.TblSucursalRow;

namespace SMP.Sucursales;

public interface ITblSucursalSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalSaveHandler
{
    public TblSucursalSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}