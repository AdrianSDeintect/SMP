import { Widget, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface TblproductosRappiForm {
    NombreArticuloId: Widget;
}

export class TblproductosRappiForm extends PrefixedContext {
    static formKey = 'Productos.TblproductosRappi';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!TblproductosRappiForm.init)  {
            TblproductosRappiForm.init = true;

            var w0 = Widget;

            initFormType(TblproductosRappiForm, [
                'NombreArticuloId', w0
            ]);
        }
    }
}