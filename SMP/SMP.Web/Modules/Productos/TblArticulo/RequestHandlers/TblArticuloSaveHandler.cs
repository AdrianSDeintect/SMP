using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SMP.Productos.TblArticuloRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SMP.Productos.TblArticuloRow;

namespace SMP.Productos;

public interface ITblArticuloSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class TblArticuloSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITblArticuloSaveHandler
{
    public TblArticuloSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}