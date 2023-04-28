import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib/q";
import { TblSucursalUberRow } from "./TblSucursalUberRow";

export namespace TblSucursalUberService {
    export const baseUrl = 'Sucursales/TblSucursalUber';

    export declare function Create(request: SaveRequest<TblSucursalUberRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Update(request: SaveRequest<TblSucursalUberRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<TblSucursalUberRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<TblSucursalUberRow>) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Create: "Sucursales/TblSucursalUber/Create",
        Update: "Sucursales/TblSucursalUber/Update",
        Delete: "Sucursales/TblSucursalUber/Delete",
        Retrieve: "Sucursales/TblSucursalUber/Retrieve",
        List: "Sucursales/TblSucursalUber/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>TblSucursalUberService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}