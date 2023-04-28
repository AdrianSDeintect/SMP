import { fieldsProxy } from "@serenity-is/corelib/q";

export interface TblSucursalUberRow {
    LocalSap?: string;
    NombreSucursal?: string;
}

export abstract class TblSucursalUberRow {
    static readonly idProperty = 'LocalSap';
    static readonly nameProperty = 'LocalSap';
    static readonly localTextPrefix = 'Sucursales.TblSucursalUber';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TblSucursalUberRow>();
}