import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { TblproductosRappiForm, TblproductosRappiRow, TblproductosRappiService } from '../../ServerTypes/Productos';

@Decorators.registerClass('SMP.Productos.TblproductosRappiDialog')
export class TblproductosRappiDialog extends EntityDialog<TblproductosRappiRow, any> {
    protected getFormKey() { return TblproductosRappiForm.formKey; }
    protected getRowDefinition() { return TblproductosRappiRow; }
    protected getService() { return TblproductosRappiService.baseUrl; }

    protected form = new TblproductosRappiForm(this.idPrefix);
}