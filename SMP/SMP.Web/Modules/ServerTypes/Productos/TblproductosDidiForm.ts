import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface TblproductosDidiForm {
    StrDivision: StringEditor;
    StrCategoria: StringEditor;
    StrSubCat: StringEditor;
    StrGrupo: StringEditor;
    StrUpc: StringEditor;
    StrMarca: StringEditor;
    StrNombre: StringEditor;
    StrFormato: StringEditor;
    Strimagen: StringEditor;
}

export class TblproductosDidiForm extends PrefixedContext {
    static formKey = 'Productos.TblproductosDidi';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!TblproductosDidiForm.init)  {
            TblproductosDidiForm.init = true;

            var w0 = StringEditor;

            initFormType(TblproductosDidiForm, [
                'StrDivision', w0,
                'StrCategoria', w0,
                'StrSubCat', w0,
                'StrGrupo', w0,
                'StrUpc', w0,
                'StrMarca', w0,
                'StrNombre', w0,
                'StrFormato', w0,
                'Strimagen', w0
            ]);
        }
    }
}