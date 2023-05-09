import { ImageUploadEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface TblproductosDidiForm {
    FileName: ImageUploadEditor;
}

export class TblproductosDidiForm extends PrefixedContext {
    static formKey = 'Productos.TblproductosDidi';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!TblproductosDidiForm.init)  {
            TblproductosDidiForm.init = true;

            var w0 = ImageUploadEditor;

            initFormType(TblproductosDidiForm, [
                'FileName', w0
            ]);
        }
    }
}