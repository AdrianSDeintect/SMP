﻿import { fieldsProxy } from "@serenity-is/corelib/q";

export interface TblSucursalRow {
    LocalSap?: string;
    NombreSuc?: string;
    IdSucursal?: number;
    Direccion?: string;
    Codigopostal?: string;
    Pais?: number;
    Ciudad?: number;
    Estado?: number;
    Region?: number;
    Zona?: number;
}

export abstract class TblSucursalRow {
    static readonly idProperty = 'IdSucursal';
    static readonly nameProperty = 'LocalSap';
    static readonly localTextPrefix = 'Sucursales.TblSucursal';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TblSucursalRow>();
}