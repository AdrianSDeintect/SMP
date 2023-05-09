import { Decorators, EntityGrid, ToolButton } from '@serenity-is/corelib';
import { TblSucursalRappiColumns, TblSucursalRappiRow, TblSucursalRappiService } from '../../ServerTypes/Sucursales';
import { TblSucursalRappiDialog } from './TblSucursalRappiDialog';
import { ExcelExportHelper, PdfExportHelper, ReportHelper } from "@serenity-is/extensions";

@Decorators.registerClass('SMP.Sucursales.TblSucursalRappiGrid')
export class TblSucursalRappiGrid extends EntityGrid<TblSucursalRappiRow, any> {
    protected getColumnsKey() { return TblSucursalRappiColumns.columnsKey; }
    protected getDialogType() { return TblSucursalRappiDialog; }
    protected getRowDefinition() { return TblSucursalRappiRow; }
    protected getService() { return TblSucursalRappiService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
    protected getButtons(): ToolButton[] {
        var buttons = super.getButtons();

        buttons.push(ExcelExportHelper.createToolButton({
            grid: this,
            service: TblSucursalRappiService.baseUrl + '/ListExcel',
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