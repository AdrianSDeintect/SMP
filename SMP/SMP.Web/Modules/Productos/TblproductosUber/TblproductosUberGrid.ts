import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { TblproductosUberColumns, TblproductosUberRow, TblproductosUberService } from '../../ServerTypes/Productos';
import { TblproductosUberDialog } from './TblproductosUberDialog';

@Decorators.registerClass('SMP.Productos.TblproductosUberGrid')
export class TblproductosUberGrid extends EntityGrid<TblproductosUberRow, any> {
    protected getColumnsKey() { return TblproductosUberColumns.columnsKey; }
    protected getDialogType() { return TblproductosUberDialog; }
    protected getRowDefinition() { return TblproductosUberRow; }
    protected getService() { return TblproductosUberService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}