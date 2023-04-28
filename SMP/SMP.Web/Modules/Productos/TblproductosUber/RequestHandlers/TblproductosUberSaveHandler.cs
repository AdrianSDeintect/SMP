using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SMP.Productos.TblproductosUberRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SMP.Productos.TblproductosUberRow;

namespace SMP.Productos;

public interface ITblproductosUberSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class TblproductosUberSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITblproductosUberSaveHandler
{
    public TblproductosUberSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}