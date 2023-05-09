import { Decorators, EntityGrid, ToolButton } from '@serenity-is/corelib';
import { TblproductosRappiColumns, TblproductosRappiRow, TblproductosRappiService } from '../../ServerTypes/Productos';
import { TblproductosRappiDialog } from './TblproductosRappiDialog';
import { ExcelExportHelper, PdfExportHelper, ReportHelper } from "@serenity-is/extensions";

@Decorators.registerClass('SMP.Productos.TblproductosRappiGrid')
export class TblproductosRappiGrid extends EntityGrid<TblproductosRappiRow, any> {
    protected getColumnsKey() { return TblproductosRappiColumns.columnsKey; }
    protected getDialogType() { return TblproductosRappiDialog; }
    protected getRowDefinition() { return TblproductosRappiRow; }
    protected getService() { return TblproductosRappiService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
    protected getButtons(): ToolButton[] {
        var buttons = super.getButtons();

        buttons.push(ExcelExportHelper.createToolButton({
            grid: this,
            service: TblproductosRappiService.baseUrl + '/ListExcel',
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