import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { TblSucursalUberForm, TblSucursalUberRow, TblSucursalUberService } from '../../ServerTypes/Sucursales';

@Decorators.registerClass('SMP.Sucursales.TblSucursalUberDialog')
export class TblSucursalUberDialog extends EntityDialog<TblSucursalUberRow, any> {
    protected getFormKey() { return TblSucursalUberForm.formKey; }
    protected getRowDefinition() { return TblSucursalUberRow; }
    protected getService() { return TblSucursalUberService.baseUrl; }

    protected form = new TblSucursalUberForm(this.idPrefix);
}