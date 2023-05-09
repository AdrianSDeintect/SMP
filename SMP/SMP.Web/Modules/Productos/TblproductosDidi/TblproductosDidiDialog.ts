import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { DialogButton } from '@serenity-is/corelib/q';
import { TblproductosDidiForm, TblproductosDidiRow, TblproductosDidiService } from '../../ServerTypes/Productos';

@Decorators.registerClass('SMP.Productos.TblproductosDidiDialog')
export class TblproductosDidiDialog extends EntityDialog<TblproductosDidiRow, any> {


    protected getFormKey() { return TblproductosDidiForm.formKey; }
    protected getRowDefinition() { return TblproductosDidiRow; }
    protected getService() { return TblproductosDidiService.baseUrl; }


/*    private form: Forms.TblproductosDidiGridForm;*/

    protected form = new TblproductosDidiForm(this.idPrefix);

    constructor() {
        super();

        this.form = new TblproductosDidiForm(this.idPrefix);
    }

    protected getDialogTitle(): string {
        return "Excel Import";
    }

    protected getDialogButtons(): DialogButton[] {
        return [
            {
                text: 'Import',
                click: () => {
                    if (!this.validateBeforeSave())
                        return;

                    if (this.form.FileName.value == null ||
                        Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                        Q.notifyError("Please select a file!");
                        return;
                    }
                    TblproductosDidiService.ExcelImport({
                        FileName: this.form.FileName.value.Filename
                    }, response => {
                        Q.notifyInfo(
                            'Inserted: ' + (response.Inserted || 0) +
                            ', Updated: ' + (response.Updated || 0));

                        if (response.ErrorList != null && response.ErrorList.length > 0) {
                            Q.notifyError(response.ErrorList.join(',\r\n '));
                        }

                        this.dialogClose();
                    });
                },
            },
            {
                text: 'Cancel',
                click: () => this.dialogClose()
            }
        ];
    }

}