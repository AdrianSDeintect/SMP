using FluentMigrator;
using Serenity.Extensions;
using System.IO;

namespace SMP.Migrations.DefaultDB
{
    [Migration(20230522130005)]
    public class DefaultDB_20230522_130005_LogArt : AutoReversingMigration
    {
        private string GetScript(string name)
        {
            using var sr = new StreamReader(GetType().Assembly.GetManifestResourceStream(name));
            return sr.ReadToEnd();
        }
        public override void Up()
        {

            IfDatabase("SqlServer", "SqlServer2000", "SqlServerCe")
          .Execute.Sql(GetScript("SMP.Web.Migrations.scriptLogArticulos.sql"));



        }
    }
}