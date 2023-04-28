import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { TblproductosDidiForm, TblproductosDidiRow, TblproductosDidiService } from '../../ServerTypes/Productos';

@Decorators.registerClass('SMP.Productos.TblproductosDidiDialog')
export class TblproductosDidiDialog extends EntityDialog<TblproductosDidiRow, any> {
    protected getFormKey() { return TblproductosDidiForm.formKey; }
    protected getRowDefinition() { return TblproductosDidiRow; }
    protected getService() { return TblproductosDidiService.baseUrl; }

    protected form = new TblproductosDidiForm(this.idPrefix);
}