import { ImageUploadEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface TblproductosDidiImportExcelForm {
    FileName: ImageUploadEditor;
}

export class TblproductosDidiImportExcelForm extends PrefixedContext {
    static formKey = 'Productos.ImportExcel.TblproductosDidi';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!TblproductosDidiImportExcelForm.init)  {
            TblproductosDidiImportExcelForm.init = true;

            var w0 = ImageUploadEditor;

            initFormType(TblproductosDidiImportExcelForm, [
                'FileName', w0
            ]);
        }
    }
}