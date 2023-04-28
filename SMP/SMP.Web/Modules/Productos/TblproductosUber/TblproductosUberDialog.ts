import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { TblproductosUberForm, TblproductosUberRow, TblproductosUberService } from '../../ServerTypes/Productos';

@Decorators.registerClass('SMP.Productos.TblproductosUberDialog')
export class TblproductosUberDialog extends EntityDialog<TblproductosUberRow, any> {
    protected getFormKey() { return TblproductosUberForm.formKey; }
    protected getRowDefinition() { return TblproductosUberRow; }
    protected getService() { return TblproductosUberService.baseUrl; }

    protected form = new TblproductosUberForm(this.idPrefix);
}