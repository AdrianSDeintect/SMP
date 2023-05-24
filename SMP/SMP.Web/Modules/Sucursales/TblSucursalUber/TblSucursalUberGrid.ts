import { Decorators, EntityGrid, ToolButton } from '@serenity-is/corelib';
import { TblSucursalUberColumns, TblSucursalUberRow, TblSucursalUberService } from '../../ServerTypes/Sucursales';
import { TblSucursalUberDialog } from './TblSucursalUberDialog';
import { ImportExcelSucursalesDialog } from 'Modules/ImportExcel/ImportExcelSucursalesDialog'
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

        // add our import button
        buttons.push({
            title: 'Import From Excel',
            cssClass: 'export-xlsx-button',
            onClick: () => {
                // open import dialog, let it handle rest
                var dialog = new ImportExcelSucursalesDialog({
                });
                dialog.element.on('dialogclose', () => {
                    this.refresh();
                    dialog = null;
                });
                dialog.TipoMP = 'Uber'
                dialog.dialogOpen();
            }
        });

        return buttons;
    }
}