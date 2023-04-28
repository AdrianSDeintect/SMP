import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { TblproductosRappiColumns, TblproductosRappiRow, TblproductosRappiService } from '../../ServerTypes/Productos';
import { TblproductosRappiDialog } from './TblproductosRappiDialog';

@Decorators.registerClass('SMP.Productos.TblproductosRappiGrid')
export class TblproductosRappiGrid extends EntityGrid<TblproductosRappiRow, any> {
    protected getColumnsKey() { return TblproductosRappiColumns.columnsKey; }
    protected getDialogType() { return TblproductosRappiDialog; }
    protected getRowDefinition() { return TblproductosRappiRow; }
    protected getService() { return TblproductosRappiService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}