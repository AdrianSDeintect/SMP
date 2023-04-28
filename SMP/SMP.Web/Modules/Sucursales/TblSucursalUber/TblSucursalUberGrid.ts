import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { TblSucursalUberColumns, TblSucursalUberRow, TblSucursalUberService } from '../../ServerTypes/Sucursales';
import { TblSucursalUberDialog } from './TblSucursalUberDialog';

@Decorators.registerClass('SMP.Sucursales.TblSucursalUberGrid')
export class TblSucursalUberGrid extends EntityGrid<TblSucursalUberRow, any> {
    protected getColumnsKey() { return TblSucursalUberColumns.columnsKey; }
    protected getDialogType() { return TblSucursalUberDialog; }
    protected getRowDefinition() { return TblSucursalUberRow; }
    protected getService() { return TblSucursalUberService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}