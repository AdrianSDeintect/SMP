import { Decorators, EntityGrid, ToolButton } from '@serenity-is/corelib';
import { TblSucursalUberColumns, TblSucursalUberRow, TblSucursalUberService } from '../../ServerTypes/Sucursales';
import { TblSucursalUberDialog } from './TblSucursalUberDialog';
import { ExcelExportHelper, PdfExportHelper, ReportHelper } from "@serenity-is/extensions";

@Decorators.registerClass('SMP.Sucursales.TblSucursalUberGrid')
export class TblSucursalUberGrid extends EntityGrid<TblSucursalUberRow, any> {
    protected getColumnsKey() { return TblSucursalUberColumns.columnsKey; }
    protected getDialogType() { return TblSucursalUberDialog; }
    protected getRowDefinition() { return TblSucursalUberRow; }
    protected getService() { return TblSucursalUberService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
    protected getButtons(): ToolButton[] {
        var buttons = super.getButtons();

        buttons.push(ExcelExportHelper.createToolButton({
            grid: this,
            service: TblSucursalUberService.baseUrl + '/ListExcel',
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