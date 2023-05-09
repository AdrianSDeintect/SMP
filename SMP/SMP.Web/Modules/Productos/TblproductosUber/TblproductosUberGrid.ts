import { Decorators, EntityGrid, ToolButton } from '@serenity-is/corelib';
import { TblproductosUberColumns, TblproductosUberRow, TblproductosUberService } from '../../ServerTypes/Productos';
import { TblproductosUberDialog } from './TblproductosUberDialog';
import { ExcelExportHelper, PdfExportHelper, ReportHelper } from "@serenity-is/extensions";


@Decorators.registerClass('SMP.Productos.TblproductosUberGrid')
export class TblproductosUberGrid extends EntityGrid<TblproductosUberRow, any> {
    protected getColumnsKey() { return TblproductosUberColumns.columnsKey; }
    protected getDialogType() { return TblproductosUberDialog; }
    protected getRowDefinition() { return TblproductosUberRow; }
    protected getService() { return TblproductosUberService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
    protected getButtons(): ToolButton[] {
        var buttons = super.getButtons();

        buttons.push(ExcelExportHelper.createToolButton({
            grid: this,
            service: TblproductosUberService.baseUrl + '/ListExcel',
            onViewSubmit: () => this.onViewSubmit(),
            separator: true
        }));

        buttons.push(PdfExportHelper.createToolButton({
            grid: this,
            onViewSubmit: () => this.onViewSubmit()
        }));

        return buttons;
    }
}