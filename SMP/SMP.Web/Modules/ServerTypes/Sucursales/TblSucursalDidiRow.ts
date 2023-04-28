import { fieldsProxy } from "@serenity-is/corelib/q";

export interface TblSucursalDidiRow {
    LocalSap?: string;
    NombreSucursal?: string;
}

export abstract class TblSucursalDidiRow {
    static readonly idProperty = 'LocalSap';
    static readonly nameProperty = 'LocalSap';
    static readonly localTextPrefix = 'Sucursales.TblSucursalDidi';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TblSucursalDidiRow>();
}