using Serenity.Services;
using MyRequest = SMP.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<SMP.Administration.UserRow>;
using MyRow = SMP.Administration.UserRow;

namespace SMP.Administration
{
    public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
    {
        public UserListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}