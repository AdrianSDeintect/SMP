using Microsoft.AspNetCore.Mvc;
//using OfficeOpenXml;
//using Serenity;
//using Serenity.Data;
//using Serenity.Demo.Northwind;
using Serenity.Extensions;
//using Serenity.Reporting;
//using Serenity.Services;
//using Serenity.Web;
//using System;
//using System.Collections.Generic;
//using System.Data;
using System.Globalization;
//using System.IO;
using MyRow = SMP.Productos.TblproductosDidiRow;

//using Northwind.Entities;
//using Northwind.Repositories;
using OfficeOpenXml;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
//using System.Web.Mvc;
//using MyRow = Northwind.Entities.ProductRow;
using System.Linq;
using Serenity.Reporting;


namespace SMP.Productos.Endpoints;

[Route("Services/Productos/TblproductosDidi/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class TblproductosDidiEndpoint : ServiceEndpoint
{
    [HttpPost, AuthorizeCreate(typeof(MyRow))]
    public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] ITblproductosDidiSaveHandler handler)
    {
        return handler.Create(uow, request);
    }

    [HttpPost, AuthorizeUpdate(typeof(MyRow))]
    public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] ITblproductosDidiSaveHandler handler)
    {
        return handler.Update(uow, request);
    }
 
    [HttpPost, AuthorizeDelete(typeof(MyRow))]
    public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request,
        [FromServices] ITblproductosDidiDeleteHandler handler)
    {
        return handler.Delete(uow, request);
    }

    [HttpPost]
    public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
        [FromServices] ITblproductosDidiRetrieveHandler handler)
    {
        return handler.Retrieve(connection, request);
    }

    [HttpPost, AuthorizeList(typeof(MyRow))]
    public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
        [FromServices] ITblproductosDidiListHandler handler)
    {
        return handler.List(connection, request);
    }

    [HttpPost, AuthorizeList(typeof(MyRow))]
    public FileContentResult ListExcel(IDbConnection connection, ListRequest request,
        [FromServices] ITblproductosDidiListHandler handler,
        [FromServices] IExcelExporter exporter)
    {
        var data = List(connection, request, handler).Entities;
        var bytes = exporter.Export(data, typeof(Columns.TblproductosDidiColumns), request.ExportColumns);
        return ExcelContentResult.Create(bytes, "TblproductosDidiList_" +
            DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
    }

    [HttpPost]
    public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request, [FromServices] IUploadStorage uploadStorage, [FromServices] ITblproductosDidiSaveHandler handler)
    {
        if (request == null) throw new ArgumentNullException(nameof(request));
        if (string.IsNullOrWhiteSpace(request.FileName))    throw new ArgumentNullException(nameof(request.FileName));
        if (uploadStorage is null) throw new ArgumentNullException(nameof(uploadStorage));  
        //request.CheckNotNull();
        //Check.NotNullOrWhiteSpace(request.FileName, "filename");
        UploadPathHelper.CheckFileNameSecurity(request.FileName);

        if (!request.FileName.StartsWith("temporary/"))
            throw new ArgumentOutOfRangeException("filename");

        ExcelPackage ep = new ExcelPackage();
        using (var fs = uploadStorage.OpenFile(request.FileName))   
            ep.Load(fs);

        var p = MyRow.Fields;

        var response = new ExcelImportResponse();
        response.ErrorList = new List<string>();

        var worksheet = ep.Workbook.Worksheets[0];
        var tblHeaders = getCurrentTableHeaders();//Headers of current Table. 


        List<string> wsHeaders = new List<string>();
        foreach (var cell in worksheet.Cells[1, 1, 1, worksheet.Dimension.End.Column])
        {
            wsHeaders.Add(cell.Value.ToString());

            //if (!tblHeaders.All(e => wsHeaders.Any(h => h.Value.Equals(e))))
            //{
            //    errorMessages.Add("Some Columns were not present on the file");
            //    return errorMessages;
            //}
        }
        List<int> columnNameCol = new List<int>();
        //for (var i = 0; i <= tblHeaders.Count; i++)
        //{
        //    //columnNameCol[i] = wsHeaders.First(h => h.Equals(tblHeaders[i])[0].ToString();
        //    //    //h.Value.Equals(tblHeaders[i])).Address[0].ToString();
        //    //    //columnNameCol[i] = wsHeaders.First(h => h.Value.Equals(tblHeaders[i])).Address[0].ToString();
        //    //    //columnNameCol[i] = wsHeaders.First(l => l.Equals(tblHeaders[i].Name[0].ToString()));
        //    //    columnNameCol[i] = wsHeaders.First();
        //    columnNameCol[i]= i;    
        //}
        columnNameCol.Add(1);

        for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
        {
            try
            {
                var lineIDCol = columnNameCol[0];
                var pruductId = Convert.ToInt32(worksheet.Cells[row, lineIDCol].Value ?? "");
                var pName = Convert.ToString(pruductId);

                if (pName.IsTrimmedEmpty())
                    continue;

                var product = uow.Connection.TryFirst<MyRow>(q => q.Select(p.IntArticuloid).Where(p.IntArticuloid == pruductId));

                if (product == null)
                    product = new MyRow
                    {
                        IntArticuloid = pruductId
                    };
                else
                {
                    // avoid assignment errors
                    product.TrackWithChecks = false;
                }

                var cCol = columnNameCol[0]; //row on Excel Sheet with joined field;                    
                var cID = TblproductosDidiRow.Fields.IntArticuloid; //id on secondary table
                //var cName = SupplierRow.Fields.CompanyName; //field being checked on secondary table
                var catName = Convert.ToString(worksheet.Cells[row, cCol].Value ?? "");//value from Excel in specific column  where second table joins.
                var mainID = product.IntArticuloid; //int designation on current row

                //mainID = jointFieldImport(cCol, cID, cName, catName, mainID, uow, response, row, typeof(TblproductosDidiRow));

                //cCol = columnNameCol[5]; //row on Excel Sheet with joined field;                    
                //cID = CategoryRow.Fields.CategoryID; //id on secondary table
                //cName = CategoryRow.Fields.CategoryName; //field being checked on secondary table
                //catName = Convert.ToString(worksheet.Cells[row, cCol].Value ?? "");//value from Excel in specific column  where second table joins.
                //mainID = product.CategoryID; //int designation on current row

                //mainID = jointFieldImport(cCol, cID, cName, catName, mainID, uow, response, row, typeof(CategoryRow));


                //product.ProductName = Convert.ToString(worksheet.Cells[row, columnNameCol[2]].Value ?? "");
                //product.Discontinued = Convert.ToBoolean(worksheet.Cells[row, columnNameCol[3]].Value ?? true);
                //product.QuantityPerUnit = Convert.ToString(worksheet.Cells[row, columnNameCol[6]].Value ?? "");
                //product.UnitPrice = Convert.ToDecimal(worksheet.Cells[row, columnNameCol[7]].Value ?? 0);
                //product.UnitsInStock = Convert.ToInt16(worksheet.Cells[row, columnNameCol[8]].Value ?? 0);
                //product.UnitsOnOrder = Convert.ToInt16(worksheet.Cells[row, columnNameCol[9]].Value ?? 0);
                product.IntArticuloid = Convert.ToInt16(worksheet.Cells[row, columnNameCol[0]].Value ?? 0);

                if (product.IntArticuloid == null)
                {

                    handler.Create(uow, new SaveWithLocalizationRequest<MyRow>
                    {
                        Entity = product
                    });

                    response.Inserted = response.Inserted + 1;
                }
                else
                {
                    handler.Update(uow, new SaveWithLocalizationRequest<MyRow>
                    {
                        Entity = product,
                        EntityId = product.IntArticuloid.Value
                    });

                    response.Updated = response.Updated + 1;
                }
                cCol = 0;
                cID = null;
                //cName = null;
                catName = null;
                mainID = null;


            }
            catch (Exception ex)
            {
                response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
            }
        }

        return response;
    }

    //public static int jointFieldImport(int cCol, Int32Field cID, StringField cName, string catName, int? mainID, IUnitOfWork uow, ExcelImportResponse response, int row, Type myType)
    //{
    //    if (!string.IsNullOrWhiteSpace(catName))
    //    {
    //        var connectionRow = uow.Connection.TryFirst < typeof(myType) > (q => q.Select(cID).Where(cName == catName));
    //        var connectionId = connectionRow.ID.Value; //ID field would need to be ID in all joint fields regardless of tables.

    //        if (connectionRow == null)
    //        {
    //            response.ErrorList.Add("Error On Row " + row + ": Entity with name '" + catName + "' is not found!");
    //        }
    //        mainID = connectionId;
    //    }
    //    else
    //        mainID = null;


    //    return mainID;
    //}

    public static List<ReportColumn> getCurrentTableHeaders()
    {
        var column = new ReportColumn();
        column.Name = "ID";
        column.Title = "ID";
        List<ReportColumn> lst = new List<ReportColumn>();
        lst.Add(column);
        //add logic


        return lst;
    }

    //public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request, [FromServices] IUploadStorage uploadStorage)
    //{
    //    if (request == null) throw new ArgumentNullException(nameof(request));
    //    if (string.IsNullOrWhiteSpace(request.FileName)) throw new ArgumentNullException(nameof(request.FileName));
    //    if (uploadStorage is null) throw new ArgumentNullException(nameof(uploadStorage));

    //    UploadPathHelper.CheckFileNameSecurity(request.FileName);

    //    if (!request.FileName.StartsWith("temporary/"))
    //            throw new ArgumentOutOfRangeException("filename");

    //        ExcelPackage ep = new ExcelPackage();
    //        using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
    //            ep.Load(fs);

    //        var p = MyRow.Fields;

    //        var response = new ExcelImportResponse();
    //        response.ErrorList = new List<string>();

    //        var worksheet = ep.Workbook.Worksheets.First();
    //        var lastCol = worksheet.Dimension.End.Column;
    //        var firstCol = worksheet.Dimension.Start.Column;
    //        var firstRow = worksheet.Dimension.Start.Row;
    //        var headers = worksheet.Cells[firstRow, firstCol, 1, lastCol];

    //        var expectedHeaders = new[] { "ID", "Product Name", "Discontinued", "Supplier", "Category", "Quantity Per Unit", "Unit Price", "Units In Stock", "Units On Order", "Reorder Level" };
    //        int[] myCols = new int[expectedHeaders.Length];
    //        string[] headerArray = new string[lastCol];
    //        var i = 0;

    //        foreach (var firstRowCell in headers)
    //        {
    //            headerArray[i] = firstRowCell.Text;
    //            i++;
    //        }

    //        for (int counter = 0; counter < expectedHeaders.Length; counter++)
    //        {
    //            for (var x = 0; x < headerArray.Length; x++)
    //            {
    //                if (headerArray[x] == expectedHeaders[counter])
    //                {
    //                    var checker = headers.First(h => h.Value.Equals(expectedHeaders[counter])).Address[0].ToString();
    //                    myCols[counter] = ColumnIndex(checker);
    //                    break;
    //                }
    //                else
    //                {
    //                    //response.ErrorList.Add("Column " + expectedHeaders[counter] + " appears to be missing from the file");
    //                    myCols[counter] = -1;
    //                }
    //            }
    //        }

    //        for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
    //        {
    //            try
    //            {
    //                int cCol;
    //                Int32Field cID;
    //                StringField cName;
    //                string catName;
    //                int? mainID;

    //                var lineIDCol = myCols[0];
    //                var pruductId = Convert.ToInt32(worksheet.Cells[row, lineIDCol].Value ?? "");
    //                var pName = Convert.ToString(pruductId);

    //                if (pName.IsTrimmedEmpty())
    //                    continue;

    //                var product = uow.Connection.TryFirst<MyRow>(q => q.Select(p.ProductID).Where(p.ProductID == pruductId));

    //                if (product == null)
    //                    product = new MyRow
    //                    {
    //                        ProductID = pruductId
    //                    };
    //                else
    //                {
    //                    // avoid assignment errors
    //                    product.TrackWithChecks = false;
    //                }

    //                if (myCols[3] > -1)
    //                {
    //                    cCol = myCols[3]; //row on Excel Sheet with joined field;                    
    //                    cID = SupplierRow.Fields.SupplierID; //id on secondary table
    //                    cName = SupplierRow.Fields.CompanyName; //field being checked on secondary table
    //                    catName = Convert.ToString(worksheet.Cells[row, cCol].Value ?? "");//value from Excel in specific column  where second table joins.
    //                    mainID = product.SupplierID; //int designation on current row

    //                    if (!string.IsNullOrWhiteSpace(catName))
    //                    {
    //                        var connectionRow = uow.Connection.TryFirst<SupplierRow>(q => q.Select(cID).Where(cName == catName));
    //                        var connectionId = connectionRow.SupplierID.Value; //ID field would need to be ID in all joint fields regardless of tables.

    //                        if (connectionRow == null)
    //                        {
    //                            response.ErrorList.Add("Error On Row " + row + ": Entity with name '" + catName + "' is not found!");
    //                        }
    //                        mainID = connectionId;
    //                    }
    //                    else
    //                        mainID = null;
    //                }

    //                if (myCols[4] > -1)
    //                {
    //                    cCol = myCols[4]; //row on Excel Sheet with joined field;                    
    //                    cID = CategoryRow.Fields.CategoryID; //id on secondary table
    //                    cName = CategoryRow.Fields.CategoryName; //field being checked on secondary table
    //                    catName = Convert.ToString(worksheet.Cells[row, cCol].Value ?? "");//value from Excel in specific column  where second table joins.
    //                    mainID = product.CategoryID; //int designation on current row

    //                    if (!string.IsNullOrWhiteSpace(catName))
    //                    {
    //                        var connectionRow = uow.Connection.TryFirst<CategoryRow>(q => q.Select(cID).Where(cName == catName));
    //                        var connectionId = connectionRow.CategoryID.Value; //ID field would need to be ID in all joint fields regardless of tables.

    //                        if (connectionRow == null)
    //                        {
    //                            response.ErrorList.Add("Error On Row " + row + ": Entity with name '" + catName + "' is not found!");
    //                        }
    //                        mainID = connectionId;
    //                    }
    //                    else
    //                        mainID = null;
    //                }

    //                if (myCols[1] > -1)
    //                {
    //                    product.ProductName = Convert.ToString(worksheet.Cells[row, myCols[1]].Value ?? "");
    //                }
    //                if (myCols[2] > -1)
    //                {
    //                    product.Discontinued = Convert.ToBoolean(worksheet.Cells[row, myCols[2]].Value ?? true);
    //                }
    //                if (myCols[5] > -1)
    //                {
    //                    product.QuantityPerUnit = Convert.ToString(worksheet.Cells[row, myCols[5]].Value ?? "");
    //                }
    //                if (myCols[6] > -1)
    //                {
    //                    product.UnitPrice = Convert.ToDecimal(worksheet.Cells[row, myCols[6]].Value ?? 0);
    //                }
    //                if (myCols[7] > -1)
    //                {
    //                    product.UnitsInStock = Convert.ToInt16(worksheet.Cells[row, myCols[7]].Value ?? 0);
    //                }
    //                if (myCols[8] > -1)
    //                {
    //                    product.UnitsOnOrder = Convert.ToInt16(worksheet.Cells[row, myCols[8]].Value ?? 0);
    //                }
    //                if (myCols[9] > -1)
    //                {
    //                    product.ReorderLevel = Convert.ToInt16(worksheet.Cells[row, myCols[9]].Value ?? 0);
    //                }

    //                if (product.ProductID == null)
    //                {
    //                    new ProductRepository().Create(uow, new SaveWithLocalizationRequest<MyRow>
    //                    {
    //                        Entity = product
    //                    });

    //                    response.Inserted = response.Inserted + 1;
    //                }
    //                else
    //                {
    //                    new ProductRepository().Update(uow, new SaveWithLocalizationRequest<MyRow>
    //                    {
    //                        Entity = product,
    //                        EntityId = product.ProductID.Value
    //                    });

    //                    response.Updated = response.Updated + 1;
    //                }
    //                cCol = 0;
    //                cID = null;
    //                cName = null;
    //                catName = null;
    //                mainID = null;
    //            }
    //            catch (Exception ex)
    //            {
    //                response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
    //            }
    //        }
    //        return response;
    //    }

    //    public static int ColumnIndex(string reference)
    //    {
    //        int ci = 0;
    //        reference = reference.ToUpper();
    //        for (int ix = 0; ix < reference.Length && reference[ix] >= 'A'; ix++)
    //            ci = (ci * 26) + ((int)reference[ix] - 64);
    //        return ci;
    //    }

    //public static int jointFieldImport(int cCol, Int32Field cID, StringField cName, string catName, int? mainID, IUnitOfWork uow, ExcelImportResponse response, int row, Type myType)
    //{
    //    if (!string.IsNullOrWhiteSpace(catName))
    //    {
    //        var connectionRow = uow.Connection.TryFirst < typeof(myType) > (q => q.Select(cID).Where(cName == catName));
    //        var connectionId = connectionRow.ID.Value; //ID field would need to be ID in all joint fields regardless of tables.

    //        if (connectionRow == null)
    //        {
    //            response.ErrorList.Add("Error On Row " + row + ": Entity with name '" + catName + "' is not found!");
    //        }
    //        mainID = connectionId;
    //    }
    //    else
    //        mainID = null;


    //    return (int)mainID;
    //}

}