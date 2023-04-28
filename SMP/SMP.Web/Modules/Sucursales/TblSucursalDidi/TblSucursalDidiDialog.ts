import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { TblSucursalDidiForm, TblSucursalDidiRow, TblSucursalDidiService } from '../../ServerTypes/Sucursales';

@Decorators.registerClass('SMP.Sucursales.TblSucursalDidiDialog')
export class TblSucursalDidiDialog extends EntityDialog<TblSucursalDidiRow, any> {
    protected getFormKey() { return TblSucursalDidiForm.formKey; }
    protected getRowDefinition() { return TblSucursalDidiRow; }
    protected getService() { return TblSucursalDidiService.baseUrl; }

    protected form = new TblSucursalDidiForm(this.idPrefix);
}