using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<SMP.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SMP.Administration.LanguageRow;


namespace SMP.Administration
{
    public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
    {
        public LanguageSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}