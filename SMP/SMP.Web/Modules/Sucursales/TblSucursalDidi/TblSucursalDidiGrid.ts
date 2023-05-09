import { Decorators, EntityGrid, ToolButton } from '@serenity-is/corelib';
import { TblSucursalDidiColumns, TblSucursalDidiRow, TblSucursalDidiService } from '../../ServerTypes/Sucursales';
import { TblSucursalDidiDialog } from './TblSucursalDidiDialog';
import { ExcelExportHelper, PdfExportHelper, ReportHelper } from "@serenity-is/extensions";

@Decorators.registerClass('SMP.Sucursales.TblSucursalDidiGrid')
export class TblSucursalDidiGrid extends EntityGrid<TblSucursalDidiRow, any> {
    protected getColumnsKey() { return TblSucursalDidiColumns.columnsKey; }
    protected getDialogType() { return TblSucursalDidiDialog; }
    protected getRowDefinition() { return TblSucursalDidiRow; }
    protected getService() { return TblSucursalDidiService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }

    protected getButtons(): ToolButton[] {
        var buttons = super.getButtons();

        buttons.push(ExcelExportHelper.createToolButton({
            grid: this,
            service: TblSucursalDidiService.baseUrl + '/ListExcel',
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