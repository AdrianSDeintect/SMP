import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { TblproductosDidiColumns, TblproductosDidiRow, TblproductosDidiService } from '../../ServerTypes/Productos';
import { TblproductosDidiDialog } from './TblproductosDidiDialog';

@Decorators.registerClass('SMP.Productos.TblproductosDidiGrid')
export class TblproductosDidiGrid extends EntityGrid<TblproductosDidiRow, any> {
    protected getColumnsKey() { return TblproductosDidiColumns.columnsKey; }
    protected getDialogType() { return TblproductosDidiDialog; }
    protected getRowDefinition() { return TblproductosDidiRow; }
    protected getService() { return TblproductosDidiService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}