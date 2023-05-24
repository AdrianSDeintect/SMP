using SMPUtils.SQL;
using System;
using System.Data;
//using System.Data.SqlClient;
//using Microsoft.Data.SqlClient;
using Microsoft.SqlServer;
using System.Data.SqlClient;

namespace SMPUtils
{
    /// <summary>
    /// Clase encargada de realizar consultas a la Base de Datos indicada
    /// </summary>
    public class SMPSQLServer
    {

        /// <summary>
        /// Ejecuta query, no regresa resultados
        /// </summary>
        public static void ExecuteNonQuery(string strQuery, string StrConnection, int? iTimeOut = null)
        {
            string strConnectionString;

            try
            {
                strConnectionString = StrConnection;
				iTimeOut = iTimeOut == null ? 1200 : iTimeOut;
            }
            catch
            {
                throw;
            }

            try
            {
                SqlConnection conn = new SqlConnection(strConnectionString);
                SqlCommand cmd = new SqlCommand(strQuery, conn);
                cmd.CommandTimeout = (int)iTimeOut;
                conn.Open();
                cmd.ExecuteNonQuery();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                conn.Close();
                da.Dispose();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message + Environment.NewLine + "Query: " + Environment.NewLine + strQuery, e);
            }
        }
    }
}