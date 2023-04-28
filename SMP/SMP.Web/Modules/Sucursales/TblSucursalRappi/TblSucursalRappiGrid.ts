import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { TblSucursalRappiColumns, TblSucursalRappiRow, TblSucursalRappiService } from '../../ServerTypes/Sucursales';
import { TblSucursalRappiDialog } from './TblSucursalRappiDialog';

@Decorators.registerClass('SMP.Sucursales.TblSucursalRappiGrid')
export class TblSucursalRappiGrid extends EntityGrid<TblSucursalRappiRow, any> {
    protected getColumnsKey() { return TblSucursalRappiColumns.columnsKey; }
    protected getDialogType() { return TblSucursalRappiDialog; }
    protected getRowDefinition() { return TblSucursalRappiRow; }
    protected getService() { return TblSucursalRappiService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}