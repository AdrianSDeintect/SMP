using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace SMP.Productos;

[ConnectionKey("Default"), Module("Productos"), TableName("tblproductosRappi")]
[DisplayName("Tblproductos Rappi"), InstanceName("Tblproductos Rappi")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
public sealed class TblproductosRappiRow : Row<TblproductosRappiRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Int Articuloid"), Column("intArticuloid"), PrimaryKey, NotNull, IdProperty, ForeignKey("[dbo].[tblArticulo]", "SKU"), LeftJoin("jArticulo"), TextualField("NOMBREARTICULO")]
    public int? IntArticuloid
    {
        get => fields.IntArticuloid[this];
        set => fields.IntArticuloid[this] = value;
    }

    [DisplayName("Str Division"), Column("strDivision"), Size(100), QuickSearch, NameProperty]
    public string StrDivision
    {
        get => fields.StrDivision[this];
        set => fields.StrDivision[this] = value;
    }

    [DisplayName("Str Categoria"), Column("strCategoria"), Size(100)]
    public string StrCategoria
    {
        get => fields.StrCategoria[this];
        set => fields.StrCategoria[this] = value;
    }

    [DisplayName("Str Sub Cat"), Column("strSubCat"), Size(100)]
    public string StrSubCat
    {
        get => fields.StrSubCat[this];
        set => fields.StrSubCat[this] = value;
    }

    [DisplayName("Str Grupo"), Column("strGrupo"), Size(100)]
    public string StrGrupo
    {
        get => fields.StrGrupo[this];
        set => fields.StrGrupo[this] = value;
    }

    [DisplayName("Str Upc"), Column("strUPC"), Size(20)]
    public string StrUpc
    {
        get => fields.StrUpc[this];
        set => fields.StrUpc[this] = value;
    }

    [DisplayName("Str Marca"), Column("strMarca"), Size(100)]
    public string StrMarca
    {
        get => fields.StrMarca[this];
        set => fields.StrMarca[this] = value;
    }

    [DisplayName("Str Nombre"), Column("strNombre"), Size(100)]
    public string StrNombre
    {
        get => fields.StrNombre[this];
        set => fields.StrNombre[this] = value;
    }

    [DisplayName("Str Formato"), Column("strFormato"), Size(100)]
    public string StrFormato
    {
        get => fields.StrFormato[this];
        set => fields.StrFormato[this] = value;
    }

    [DisplayName("Strimagen"), Column("strimagen"), Size(100)]
    public string Strimagen
    {
        get => fields.Strimagen[this];
        set => fields.Strimagen[this] = value;
    }
    [DisplayName("Nombre del Producto"), Expression("jArticulo.[NOMBREARTICULO]"), QuickSearch]
    public string NombreArticulo
    {
        get => fields.NombreArticulo[this];
        set => fields.NombreArticulo[this] = value;
    }
    public class RowFields : RowFieldsBase
    {
        public Int32Field IntArticuloid;
        public StringField StrDivision;
        public StringField StrCategoria;
        public StringField StrSubCat;
        public StringField StrGrupo;
        public StringField StrUpc;
        public StringField StrMarca;
        public StringField StrNombre;
        public StringField StrFormato;
        public StringField Strimagen;
        public StringField NombreArticulo;

    }
}