import { fieldsProxy } from "@serenity-is/corelib/q";

export interface TblproductosRappiRow {
    IntArticuloid?: number;
    StrDivision?: string;
    StrCategoria?: string;
    StrSubCat?: string;
    StrGrupo?: string;
    StrUpc?: string;
    StrMarca?: string;
    StrNombre?: string;
    StrFormato?: string;
    Strimagen?: string;
    NombreArticulo?: string;
}

export abstract class TblproductosRappiRow {
    static readonly idProperty = 'IntArticuloid';
    static readonly nameProperty = 'StrDivision';
    static readonly localTextPrefix = 'Productos.TblproductosRappi';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TblproductosRappiRow>();
}