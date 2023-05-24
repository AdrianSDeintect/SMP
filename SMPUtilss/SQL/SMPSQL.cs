using System;
using System.Data;
using System.Data.SqlClient;

namespace SMPUtils.SQL
{
	public class SMPSQL
	{

		public const string SQLTimeOutConfig = "SQLTimeout";

		/// <summary>
		/// Ejecuta query, no regresa resultados
		/// </summary>
		public static void ExecuteNonQuery(string strQuery, string StrConnection, int? iTimeOut = null)
		{
					SMPSQLServer.ExecuteNonQuery(strQuery, StrConnection, iTimeOut);
		}

	}
}
