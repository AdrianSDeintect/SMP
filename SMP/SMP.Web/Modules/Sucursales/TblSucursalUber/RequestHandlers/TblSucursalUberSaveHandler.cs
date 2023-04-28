using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SMP.Sucursales.TblSucursalUberRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SMP.Sucursales.TblSucursalUberRow;

namespace SMP.Sucursales;

public interface ITblSucursalUberSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class TblSucursalUberSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITblSucursalUberSaveHandler
{
    public TblSucursalUberSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}