import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { TblSucursalDidiColumns, TblSucursalDidiRow, TblSucursalDidiService } from '../../ServerTypes/Sucursales';
import { TblSucursalDidiDialog } from './TblSucursalDidiDialog';

@Decorators.registerClass('SMP.Sucursales.TblSucursalDidiGrid')
export class TblSucursalDidiGrid extends EntityGrid<TblSucursalDidiRow, any> {
    protected getColumnsKey() { return TblSucursalDidiColumns.columnsKey; }
    protected getDialogType() { return TblSucursalDidiDialog; }
    protected getRowDefinition() { return TblSucursalDidiRow; }
    protected getService() { return TblSucursalDidiService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}