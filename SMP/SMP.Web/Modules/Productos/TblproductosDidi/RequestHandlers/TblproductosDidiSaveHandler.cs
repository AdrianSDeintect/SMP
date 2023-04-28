using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SMP.Productos.TblproductosDidiRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SMP.Productos.TblproductosDidiRow;

namespace SMP.Productos;

public interface ITblproductosDidiSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class TblproductosDidiSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITblproductosDidiSaveHandler
{
    public TblproductosDidiSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}