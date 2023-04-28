import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { TblSucursalRappiForm, TblSucursalRappiRow, TblSucursalRappiService } from '../../ServerTypes/Sucursales';

@Decorators.registerClass('SMP.Sucursales.TblSucursalRappiDialog')
export class TblSucursalRappiDialog extends EntityDialog<TblSucursalRappiRow, any> {
    protected getFormKey() { return TblSucursalRappiForm.formKey; }
    protected getRowDefinition() { return TblSucursalRappiRow; }
    protected getService() { return TblSucursalRappiService.baseUrl; }

    protected form = new TblSucursalRappiForm(this.idPrefix);
}