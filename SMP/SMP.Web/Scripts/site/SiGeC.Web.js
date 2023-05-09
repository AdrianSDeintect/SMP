var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var MaeRestriccionesUsuariosForm = /** @class */ (function (_super) {
            __extends(MaeRestriccionesUsuariosForm, _super);
            function MaeRestriccionesUsuariosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MaeRestriccionesUsuariosForm.init) {
                    MaeRestriccionesUsuariosForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(MaeRestriccionesUsuariosForm, [
                        'IdMaeRestriccionUsuario', w0,
                        'UserIdRestriccion', w1,
                        'fkIdCatTablaRestriccionUsuario', w1,
                        'fkVchDesTablaRestriccionUsuario', w2,
                        'fkIdRestriccion', w1,
                        'fkVchDesRestriccion', w2,
                        'VchComentarios', w3,
                        'IEliminado', w4
                    ]);
                }
                return _this;
            }
            MaeRestriccionesUsuariosForm.formKey = 'Administration.MaeRestriccionesUsuarios';
            return MaeRestriccionesUsuariosForm;
        }(Serenity.PrefixedContext));
        Administration.MaeRestriccionesUsuariosForm = MaeRestriccionesUsuariosForm;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var MaeRestriccionesUsuariosRow;
        (function (MaeRestriccionesUsuariosRow) {
            MaeRestriccionesUsuariosRow.idProperty = 'IdMaeRestriccionUsuario';
            MaeRestriccionesUsuariosRow.nameProperty = 'VchComentarios';
            MaeRestriccionesUsuariosRow.localTextPrefix = 'Administration.MaeRestriccionesUsuarios';
        })(MaeRestriccionesUsuariosRow = Administration.MaeRestriccionesUsuariosRow || (Administration.MaeRestriccionesUsuariosRow = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var MaeRestriccionesUsuariosService;
        (function (MaeRestriccionesUsuariosService) {
            MaeRestriccionesUsuariosService.baseUrl = 'Administration/MaeRestriccionesUsuarios';
            [
                'Create',
                'Update',
                'Retrieve',
                'List',
                'ValidaDatos'
            ].forEach(function (x) {
                MaeRestriccionesUsuariosService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaeRestriccionesUsuariosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MaeRestriccionesUsuariosService = Administration.MaeRestriccionesUsuariosService || (Administration.MaeRestriccionesUsuariosService = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0,
                        'StartPage', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Source', w0,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasExclusionesForm = /** @class */ (function (_super) {
            __extends(LogCargasExclusionesForm, _super);
            function LogCargasExclusionesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogCargasExclusionesForm.init) {
                    LogCargasExclusionesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.StringEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(LogCargasExclusionesForm, [
                        'IdDetProceso', w0,
                        'IdDetProcesoOriginal', w0,
                        'IdDetCargaExclusiones', w0,
                        'DtFechaInicio', w1,
                        'DtFechaFin', w1,
                        'VchUrlFile', w2,
                        'VchCodEstatusProceso', w3,
                        'VchDesEstatusProceso', w3,
                        'VchLogProceso', w4,
                        'VchComentarios', w4,
                        'IEliminado', w5,
                        'IVigente', w5
                    ]);
                }
                return _this;
            }
            LogCargasExclusionesForm.formKey = 'Cargas.LogCargasExclusiones';
            return LogCargasExclusionesForm;
        }(Serenity.PrefixedContext));
        Cargas.LogCargasExclusionesForm = LogCargasExclusionesForm;
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasExclusionesRow;
        (function (LogCargasExclusionesRow) {
            LogCargasExclusionesRow.idProperty = 'IdLogCargaExclusiones';
            LogCargasExclusionesRow.localTextPrefix = 'Cargas.LogCargasExclusiones';
        })(LogCargasExclusionesRow = Cargas.LogCargasExclusionesRow || (Cargas.LogCargasExclusionesRow = {}));
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasExclusionesService;
        (function (LogCargasExclusionesService) {
            LogCargasExclusionesService.baseUrl = 'Cargas/LogCargasExclusiones';
            [
                'Create',
                'Update',
                'Retrieve',
                'List',
                'ValidaDatos'
            ].forEach(function (x) {
                LogCargasExclusionesService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogCargasExclusionesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogCargasExclusionesService = Cargas.LogCargasExclusionesService || (Cargas.LogCargasExclusionesService = {}));
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasArticulosForm = /** @class */ (function (_super) {
            __extends(LogCargasPlanogramasArticulosForm, _super);
            function LogCargasPlanogramasArticulosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogCargasPlanogramasArticulosForm.init) {
                    LogCargasPlanogramasArticulosForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(LogCargasPlanogramasArticulosForm, [
                        'IdDetProceso', w0,
                        'IdDetProcesoOriginal', w0,
                        'IdDetCargaPlanogramaArticulo', w0,
                        'fkIdMaePlanograma', w1,
                        'fkVchDesPlanograma', w2,
                        'VchUrlFile', w3,
                        'VchCodEstatusProceso', w2,
                        'VchDesEstatusProceso', w2,
                        'VchLogProceso', w4,
                        'VchComentarios', w4,
                        'IEliminado', w5,
                        'IVigente', w5
                    ]);
                }
                return _this;
            }
            LogCargasPlanogramasArticulosForm.formKey = 'Cargas.LogCargasPlanogramasArticulos';
            return LogCargasPlanogramasArticulosForm;
        }(Serenity.PrefixedContext));
        Cargas.LogCargasPlanogramasArticulosForm = LogCargasPlanogramasArticulosForm;
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasArticulosRow;
        (function (LogCargasPlanogramasArticulosRow) {
            LogCargasPlanogramasArticulosRow.idProperty = 'IdLogCargaPlanogramaArticulo';
            LogCargasPlanogramasArticulosRow.nameProperty = 'VchFileName';
            LogCargasPlanogramasArticulosRow.localTextPrefix = 'Cargas.LogCargasPlanogramasArticulos';
        })(LogCargasPlanogramasArticulosRow = Cargas.LogCargasPlanogramasArticulosRow || (Cargas.LogCargasPlanogramasArticulosRow = {}));
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasArticulosService;
        (function (LogCargasPlanogramasArticulosService) {
            LogCargasPlanogramasArticulosService.baseUrl = 'Cargas/LogCargasPlanogramasArticulos';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogCargasPlanogramasArticulosService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogCargasPlanogramasArticulosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogCargasPlanogramasArticulosService = Cargas.LogCargasPlanogramasArticulosService || (Cargas.LogCargasPlanogramasArticulosService = {}));
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasForm = /** @class */ (function (_super) {
            __extends(LogCargasPlanogramasForm, _super);
            function LogCargasPlanogramasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogCargasPlanogramasForm.init) {
                    LogCargasPlanogramasForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(LogCargasPlanogramasForm, [
                        'IdDetProceso', w0,
                        'IdDetProcesoOriginal', w0,
                        'IdDetCargaPlanograma', w0,
                        'VchUrlFile', w1,
                        'VchCodEstatusProceso', w2,
                        'VchDesEstatusProceso', w2,
                        'VchLogProceso', w3,
                        'VchComentarios', w3,
                        'IEliminado', w4,
                        'IVigente', w4
                    ]);
                }
                return _this;
            }
            LogCargasPlanogramasForm.formKey = 'Cargas.LogCargasPlanogramas';
            return LogCargasPlanogramasForm;
        }(Serenity.PrefixedContext));
        Cargas.LogCargasPlanogramasForm = LogCargasPlanogramasForm;
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasRow;
        (function (LogCargasPlanogramasRow) {
            LogCargasPlanogramasRow.idProperty = 'IdLogCargaPlanograma';
            LogCargasPlanogramasRow.nameProperty = 'VchFileName';
            LogCargasPlanogramasRow.localTextPrefix = 'Cargas.LogCargasPlanogramas';
        })(LogCargasPlanogramasRow = Cargas.LogCargasPlanogramasRow || (Cargas.LogCargasPlanogramasRow = {}));
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasService;
        (function (LogCargasPlanogramasService) {
            LogCargasPlanogramasService.baseUrl = 'Cargas/LogCargasPlanogramas';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogCargasPlanogramasService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogCargasPlanogramasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogCargasPlanogramasService = Cargas.LogCargasPlanogramasService || (Cargas.LogCargasPlanogramasService = {}));
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasSucursalesForm = /** @class */ (function (_super) {
            __extends(LogCargasPlanogramasSucursalesForm, _super);
            function LogCargasPlanogramasSucursalesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogCargasPlanogramasSucursalesForm.init) {
                    LogCargasPlanogramasSucursalesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(LogCargasPlanogramasSucursalesForm, [
                        'IdDetProceso', w0,
                        'IdDetProcesoOriginal', w0,
                        'IdDetCargaPlanogramaSucursal', w0,
                        'fkIdMaePlanograma', w1,
                        'fkVchDesPlanograma', w2,
                        'VchUrlFile', w3,
                        'VchCodEstatusProceso', w2,
                        'VchDesEstatusProceso', w2,
                        'VchLogProceso', w4,
                        'VchComentarios', w4,
                        'IEliminado', w5,
                        'IVigente', w5
                    ]);
                }
                return _this;
            }
            LogCargasPlanogramasSucursalesForm.formKey = 'Cargas.LogCargasPlanogramasSucursales';
            return LogCargasPlanogramasSucursalesForm;
        }(Serenity.PrefixedContext));
        Cargas.LogCargasPlanogramasSucursalesForm = LogCargasPlanogramasSucursalesForm;
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasSucursalesRow;
        (function (LogCargasPlanogramasSucursalesRow) {
            LogCargasPlanogramasSucursalesRow.idProperty = 'IdLogCargaPlanogramaSucursal';
            LogCargasPlanogramasSucursalesRow.nameProperty = 'VchFileName';
            LogCargasPlanogramasSucursalesRow.localTextPrefix = 'Cargas.LogCargasPlanogramasSucursales';
        })(LogCargasPlanogramasSucursalesRow = Cargas.LogCargasPlanogramasSucursalesRow || (Cargas.LogCargasPlanogramasSucursalesRow = {}));
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasSucursalesService;
        (function (LogCargasPlanogramasSucursalesService) {
            LogCargasPlanogramasSucursalesService.baseUrl = 'Cargas/LogCargasPlanogramasSucursales';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogCargasPlanogramasSucursalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogCargasPlanogramasSucursalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogCargasPlanogramasSucursalesService = Cargas.LogCargasPlanogramasSucursalesService || (Cargas.LogCargasPlanogramasSucursalesService = {}));
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatArticulosRow;
        (function (CatArticulosRow) {
            CatArticulosRow.idProperty = 'IdCatArticulo';
            CatArticulosRow.nameProperty = 'VchDesArticuloLookUp';
            CatArticulosRow.localTextPrefix = 'Catalogos.CatArticulos';
            CatArticulosRow.lookupKey = 'CatArticulosRow';
            function getLookup() {
                return Q.getLookup('CatArticulosRow');
            }
            CatArticulosRow.getLookup = getLookup;
        })(CatArticulosRow = Catalogos.CatArticulosRow || (Catalogos.CatArticulosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatCategoriasHyperionRow;
        (function (CatCategoriasHyperionRow) {
            CatCategoriasHyperionRow.idProperty = 'IdCatCategoriaHyperion';
            CatCategoriasHyperionRow.nameProperty = 'VchCodCategoriaHyperion';
            CatCategoriasHyperionRow.localTextPrefix = 'Catalogos.CatCategoriasHyperion';
            CatCategoriasHyperionRow.lookupKey = 'CatCategoriasHyperionRow';
            function getLookup() {
                return Q.getLookup('CatCategoriasHyperionRow');
            }
            CatCategoriasHyperionRow.getLookup = getLookup;
        })(CatCategoriasHyperionRow = Catalogos.CatCategoriasHyperionRow || (Catalogos.CatCategoriasHyperionRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatCategoriasPlanogramasRow;
        (function (CatCategoriasPlanogramasRow) {
            CatCategoriasPlanogramasRow.idProperty = 'IdCatCategoriaPlanograma';
            CatCategoriasPlanogramasRow.nameProperty = 'VchDesCategoriaPlanograma';
            CatCategoriasPlanogramasRow.localTextPrefix = 'Catalogos.CatCategoriasPlanogramas';
            CatCategoriasPlanogramasRow.lookupKey = 'CatCategoriasPlanogramasRow';
            function getLookup() {
                return Q.getLookup('CatCategoriasPlanogramasRow');
            }
            CatCategoriasPlanogramasRow.getLookup = getLookup;
        })(CatCategoriasPlanogramasRow = Catalogos.CatCategoriasPlanogramasRow || (Catalogos.CatCategoriasPlanogramasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatCiudadesRow;
        (function (CatCiudadesRow) {
            CatCiudadesRow.idProperty = 'IdCatCiudad';
            CatCiudadesRow.nameProperty = 'VchCodCiudad';
            CatCiudadesRow.localTextPrefix = 'Catalogos.CatCiudades';
            CatCiudadesRow.lookupKey = 'Catalogos.CatCiudades';
            function getLookup() {
                return Q.getLookup('Catalogos.CatCiudades');
            }
            CatCiudadesRow.getLookup = getLookup;
        })(CatCiudadesRow = Catalogos.CatCiudadesRow || (Catalogos.CatCiudadesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatCompaniasRow;
        (function (CatCompaniasRow) {
            CatCompaniasRow.idProperty = 'IdCatCompania';
            CatCompaniasRow.nameProperty = 'VchDesCompania';
            CatCompaniasRow.localTextPrefix = 'Catalogos.CatCompanias';
            CatCompaniasRow.lookupKey = 'CatCompaniasRow';
            function getLookup() {
                return Q.getLookup('CatCompaniasRow');
            }
            CatCompaniasRow.getLookup = getLookup;
        })(CatCompaniasRow = Catalogos.CatCompaniasRow || (Catalogos.CatCompaniasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatDivisionesPlanogramasRow;
        (function (CatDivisionesPlanogramasRow) {
            CatDivisionesPlanogramasRow.idProperty = 'IdCatDivisionPlanograma';
            CatDivisionesPlanogramasRow.nameProperty = 'VchDesDivisionPlanograma';
            CatDivisionesPlanogramasRow.localTextPrefix = 'Catalogos.CatDivisionesPlanogramas';
            CatDivisionesPlanogramasRow.lookupKey = 'CatDivisionesPlanogramasRow';
            function getLookup() {
                return Q.getLookup('CatDivisionesPlanogramasRow');
            }
            CatDivisionesPlanogramasRow.getLookup = getLookup;
        })(CatDivisionesPlanogramasRow = Catalogos.CatDivisionesPlanogramasRow || (Catalogos.CatDivisionesPlanogramasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatEstadosArticulosRow;
        (function (CatEstadosArticulosRow) {
            CatEstadosArticulosRow.idProperty = 'IdCatEstadoArticulo';
            CatEstadosArticulosRow.nameProperty = 'VchDesEstadoArticulo';
            CatEstadosArticulosRow.localTextPrefix = 'Catalogos.CatEstadosArticulos';
            CatEstadosArticulosRow.lookupKey = 'CatEstadosArticulosRow';
            function getLookup() {
                return Q.getLookup('CatEstadosArticulosRow');
            }
            CatEstadosArticulosRow.getLookup = getLookup;
        })(CatEstadosArticulosRow = Catalogos.CatEstadosArticulosRow || (Catalogos.CatEstadosArticulosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatEstadosPlanogramasSucursalesRow;
        (function (CatEstadosPlanogramasSucursalesRow) {
            CatEstadosPlanogramasSucursalesRow.idProperty = 'IdCatEstadoPlanogramaSucursal';
            CatEstadosPlanogramasSucursalesRow.nameProperty = 'VchCodEstadoPlanogramaSucursal';
            CatEstadosPlanogramasSucursalesRow.localTextPrefix = 'Catalogos.CatEstadosPlanogramasSucursales';
            CatEstadosPlanogramasSucursalesRow.lookupKey = 'Catalogos.CatEstadosPlanogramasSucursales';
            function getLookup() {
                return Q.getLookup('Catalogos.CatEstadosPlanogramasSucursales');
            }
            CatEstadosPlanogramasSucursalesRow.getLookup = getLookup;
        })(CatEstadosPlanogramasSucursalesRow = Catalogos.CatEstadosPlanogramasSucursalesRow || (Catalogos.CatEstadosPlanogramasSucursalesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatEstatusFarmaciasRow;
        (function (CatEstatusFarmaciasRow) {
            CatEstatusFarmaciasRow.idProperty = 'IdCatEstatusFarmacia';
            CatEstatusFarmaciasRow.nameProperty = 'VchDesEstatusFarmacia';
            CatEstatusFarmaciasRow.localTextPrefix = 'Catalogos.CatEstatusFarmacias';
            CatEstatusFarmaciasRow.lookupKey = 'Catalogos.CatEstatusFarmacias';
            function getLookup() {
                return Q.getLookup('Catalogos.CatEstatusFarmacias');
            }
            CatEstatusFarmaciasRow.getLookup = getLookup;
        })(CatEstatusFarmaciasRow = Catalogos.CatEstatusFarmaciasRow || (Catalogos.CatEstatusFarmaciasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatEstatusProcesosRow;
        (function (CatEstatusProcesosRow) {
            CatEstatusProcesosRow.idProperty = 'IdCatEstatusProceso';
            CatEstatusProcesosRow.nameProperty = 'VchDesEstatusProceso';
            CatEstatusProcesosRow.localTextPrefix = 'Catalogos.CatEstatusProcesos';
            CatEstatusProcesosRow.lookupKey = 'Catalogos.CatEstatusProcesos';
            function getLookup() {
                return Q.getLookup('Catalogos.CatEstatusProcesos');
            }
            CatEstatusProcesosRow.getLookup = getLookup;
        })(CatEstatusProcesosRow = Catalogos.CatEstatusProcesosRow || (Catalogos.CatEstatusProcesosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatMarcasRow;
        (function (CatMarcasRow) {
            CatMarcasRow.idProperty = 'IdCatMarca';
            CatMarcasRow.nameProperty = 'VchDesMarca';
            CatMarcasRow.localTextPrefix = 'Catalogos.CatMarcas';
            CatMarcasRow.lookupKey = 'Catalogos.CatMarcas';
            function getLookup() {
                return Q.getLookup('Catalogos.CatMarcas');
            }
            CatMarcasRow.getLookup = getLookup;
        })(CatMarcasRow = Catalogos.CatMarcasRow || (Catalogos.CatMarcasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatNivelesSocioEconomicosRow;
        (function (CatNivelesSocioEconomicosRow) {
            CatNivelesSocioEconomicosRow.idProperty = 'IdCatNivelSocioEconomico';
            CatNivelesSocioEconomicosRow.nameProperty = 'VchCodNivelSocioEconomico';
            CatNivelesSocioEconomicosRow.localTextPrefix = 'Catalogos.CatNivelesSocioEconomicos';
            CatNivelesSocioEconomicosRow.lookupKey = 'Catalogos.CatNivelesSocioEconomicos';
            function getLookup() {
                return Q.getLookup('Catalogos.CatNivelesSocioEconomicos');
            }
            CatNivelesSocioEconomicosRow.getLookup = getLookup;
        })(CatNivelesSocioEconomicosRow = Catalogos.CatNivelesSocioEconomicosRow || (Catalogos.CatNivelesSocioEconomicosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatProcesosRow;
        (function (CatProcesosRow) {
            CatProcesosRow.idProperty = 'IdCatProceso';
            CatProcesosRow.nameProperty = 'VchDesProceso';
            CatProcesosRow.localTextPrefix = 'Catalogos.CatProcesos';
            CatProcesosRow.lookupKey = 'Catalogos.CatProcesos';
            function getLookup() {
                return Q.getLookup('Catalogos.CatProcesos');
            }
            CatProcesosRow.getLookup = getLookup;
        })(CatProcesosRow = Catalogos.CatProcesosRow || (Catalogos.CatProcesosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatRegionesRow;
        (function (CatRegionesRow) {
            CatRegionesRow.idProperty = 'IdCatRegion';
            CatRegionesRow.nameProperty = 'VchDesRegion';
            CatRegionesRow.localTextPrefix = 'Catalogos.CatRegiones';
            CatRegionesRow.lookupKey = 'CatRegionesRow';
            function getLookup() {
                return Q.getLookup('CatRegionesRow');
            }
            CatRegionesRow.getLookup = getLookup;
        })(CatRegionesRow = Catalogos.CatRegionesRow || (Catalogos.CatRegionesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatRestricciones;
        (function (CatRestricciones) {
            CatRestricciones.idProperty = 'IdRestriccion';
            CatRestricciones.nameProperty = 'VchDesTablaRestriccionUsuario';
            CatRestricciones.localTextPrefix = 'Catalogos.CatRestricciones';
            CatRestricciones.lookupKey = 'CatRestricciones';
            function getLookup() {
                return Q.getLookup('CatRestricciones');
            }
            CatRestricciones.getLookup = getLookup;
        })(CatRestricciones = Catalogos.CatRestricciones || (Catalogos.CatRestricciones = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatSucursalesRow;
        (function (CatSucursalesRow) {
            CatSucursalesRow.idProperty = 'IdCatSucursal';
            CatSucursalesRow.nameProperty = 'VchCodSucursal';
            CatSucursalesRow.localTextPrefix = 'Catalogos.CatSucursales';
            CatSucursalesRow.lookupKey = 'CatSucursalesRow';
            function getLookup() {
                return Q.getLookup('CatSucursalesRow');
            }
            CatSucursalesRow.getLookup = getLookup;
        })(CatSucursalesRow = Catalogos.CatSucursalesRow || (Catalogos.CatSucursalesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatTablasRestriccionesUsuariosForm = /** @class */ (function (_super) {
            __extends(CatTablasRestriccionesUsuariosForm, _super);
            function CatTablasRestriccionesUsuariosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CatTablasRestriccionesUsuariosForm.init) {
                    CatTablasRestriccionesUsuariosForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(CatTablasRestriccionesUsuariosForm, [
                        'IdCatTablaRestriccionUsuario', w0,
                        'VchDesTablaRestriccionUsuario', w1,
                        'VchComentarios', w1,
                        'IEliminado', w2
                    ]);
                }
                return _this;
            }
            CatTablasRestriccionesUsuariosForm.formKey = 'Catalogos.CatTablasRestriccionesUsuarios';
            return CatTablasRestriccionesUsuariosForm;
        }(Serenity.PrefixedContext));
        Catalogos.CatTablasRestriccionesUsuariosForm = CatTablasRestriccionesUsuariosForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatTablasRestriccionesUsuariosRow;
        (function (CatTablasRestriccionesUsuariosRow) {
            CatTablasRestriccionesUsuariosRow.idProperty = 'IdCatTablaRestriccionUsuario';
            CatTablasRestriccionesUsuariosRow.nameProperty = 'VchDesTablaRestriccionUsuario';
            CatTablasRestriccionesUsuariosRow.localTextPrefix = 'Catalogos.CatTablasRestriccionesUsuarios';
            CatTablasRestriccionesUsuariosRow.lookupKey = 'CatTablasRestriccionesUsuariosRow';
            function getLookup() {
                return Q.getLookup('CatTablasRestriccionesUsuariosRow');
            }
            CatTablasRestriccionesUsuariosRow.getLookup = getLookup;
        })(CatTablasRestriccionesUsuariosRow = Catalogos.CatTablasRestriccionesUsuariosRow || (Catalogos.CatTablasRestriccionesUsuariosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatTablasRestriccionesUsuariosService;
        (function (CatTablasRestriccionesUsuariosService) {
            CatTablasRestriccionesUsuariosService.baseUrl = 'Catalogos/CatTablasRestriccionesUsuarios';
            [
                'Create',
                'Update',
                'Retrieve',
                'List',
                'ValidaDatos'
            ].forEach(function (x) {
                CatTablasRestriccionesUsuariosService[x] = function (r, s, o) {
                    return Q.serviceRequest(CatTablasRestriccionesUsuariosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CatTablasRestriccionesUsuariosService = Catalogos.CatTablasRestriccionesUsuariosService || (Catalogos.CatTablasRestriccionesUsuariosService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatTiposMueblesRow;
        (function (CatTiposMueblesRow) {
            CatTiposMueblesRow.idProperty = 'IdCatTipoMueble';
            CatTiposMueblesRow.nameProperty = 'VchDesTipoMueble';
            CatTiposMueblesRow.localTextPrefix = 'Catalogos.CatTiposMuebles';
            CatTiposMueblesRow.lookupKey = 'CatTiposMueblesRow';
            function getLookup() {
                return Q.getLookup('CatTiposMueblesRow');
            }
            CatTiposMueblesRow.getLookup = getLookup;
        })(CatTiposMueblesRow = Catalogos.CatTiposMueblesRow || (Catalogos.CatTiposMueblesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatTiposPlanogramasRow;
        (function (CatTiposPlanogramasRow) {
            CatTiposPlanogramasRow.idProperty = 'IdCatTipoPlanograma';
            CatTiposPlanogramasRow.nameProperty = 'VchDesTipoPlanograma';
            CatTiposPlanogramasRow.localTextPrefix = 'Catalogos.CatTiposPlanogramas';
            CatTiposPlanogramasRow.lookupKey = 'CatTiposPlanogramasRow';
            function getLookup() {
                return Q.getLookup('CatTiposPlanogramasRow');
            }
            CatTiposPlanogramasRow.getLookup = getLookup;
        })(CatTiposPlanogramasRow = Catalogos.CatTiposPlanogramasRow || (Catalogos.CatTiposPlanogramasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatTiposProcesosRow;
        (function (CatTiposProcesosRow) {
            CatTiposProcesosRow.idProperty = 'IdCatTipoProceso';
            CatTiposProcesosRow.nameProperty = 'VchDesTipoProceso';
            CatTiposProcesosRow.localTextPrefix = 'Catalogos.CatTiposProcesos';
            CatTiposProcesosRow.lookupKey = 'Catalogos.CatTiposProcesos';
            function getLookup() {
                return Q.getLookup('Catalogos.CatTiposProcesos');
            }
            CatTiposProcesosRow.getLookup = getLookup;
        })(CatTiposProcesosRow = Catalogos.CatTiposProcesosRow || (Catalogos.CatTiposProcesosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatVariablesRow;
        (function (CatVariablesRow) {
            CatVariablesRow.idProperty = 'IdCatVariable';
            CatVariablesRow.nameProperty = 'VchDesVariable';
            CatVariablesRow.localTextPrefix = 'Catalogos.CatVariables';
            CatVariablesRow.lookupKey = 'Catalogos.CatVariables';
            function getLookup() {
                return Q.getLookup('Catalogos.CatVariables');
            }
            CatVariablesRow.getLookup = getLookup;
        })(CatVariablesRow = Catalogos.CatVariablesRow || (Catalogos.CatVariablesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatZonasRow;
        (function (CatZonasRow) {
            CatZonasRow.idProperty = 'IdCatZona';
            CatZonasRow.nameProperty = 'VchDesZona';
            CatZonasRow.localTextPrefix = 'Catalogos.CatZonas';
            CatZonasRow.lookupKey = 'CatZonasRow';
            function getLookup() {
                return Q.getLookup('CatZonasRow');
            }
            CatZonasRow.getLookup = getLookup;
        })(CatZonasRow = Catalogos.CatZonasRow || (Catalogos.CatZonasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogArticulosForm = /** @class */ (function (_super) {
            __extends(LogArticulosForm, _super);
            function LogArticulosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogArticulosForm.init) {
                    LogArticulosForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(LogArticulosForm, [
                        'IdCatArticulo', w0,
                        'IdOrigen', w1,
                        'IdDetProceso', w1,
                        'VchCodArticulo', w2,
                        'VchDesArticulo', w2,
                        'fkVchDesEstadoArticulo', w2,
                        'fkIdCatEstadoArticulo', w0,
                        'fkVchDesCategoriaHyperion', w2,
                        'fkIdCatCategoriaHyperion', w0,
                        'fkVchDesMarca', w2,
                        'fkIdCatMarca', w0,
                        'VchCodigoBarras', w2,
                        'VchComentarios', w3,
                        'IEliminado', w4
                    ]);
                }
                return _this;
            }
            LogArticulosForm.formKey = 'Catalogos.LogArticulos';
            return LogArticulosForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogArticulosForm = LogArticulosForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogArticulosRow;
        (function (LogArticulosRow) {
            LogArticulosRow.idProperty = 'IdLogArticulo';
            LogArticulosRow.nameProperty = 'VchDesArticulo';
            LogArticulosRow.localTextPrefix = 'Catalogos.LogArticulos';
            LogArticulosRow.lookupKey = 'Catalogos.LogArticulos';
            function getLookup() {
                return Q.getLookup('Catalogos.LogArticulos');
            }
            LogArticulosRow.getLookup = getLookup;
        })(LogArticulosRow = Catalogos.LogArticulosRow || (Catalogos.LogArticulosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogArticulosService;
        (function (LogArticulosService) {
            LogArticulosService.baseUrl = 'Catalogos/LogArticulos';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogArticulosService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogArticulosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogArticulosService = Catalogos.LogArticulosService || (Catalogos.LogArticulosService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCategoriasHyperionForm = /** @class */ (function (_super) {
            __extends(LogCategoriasHyperionForm, _super);
            function LogCategoriasHyperionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogCategoriasHyperionForm.init) {
                    LogCategoriasHyperionForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(LogCategoriasHyperionForm, [
                        'IdCatCategoriaHyperion', w0,
                        'IdOrigen', w1,
                        'IdDetProceso', w0,
                        'VchCodCategoriaHyperion', w1,
                        'VchDesCategoriaHyperion', w1,
                        'fkIdCatCategoriaPadre', w2,
                        'fkVchDesCategoriaPadre', w1,
                        'INivel', w0,
                        'VchComentario', w3,
                        'IEliminado', w4
                    ]);
                }
                return _this;
            }
            LogCategoriasHyperionForm.formKey = 'Catalogos.LogCategoriasHyperion';
            return LogCategoriasHyperionForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogCategoriasHyperionForm = LogCategoriasHyperionForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCategoriasHyperionRow;
        (function (LogCategoriasHyperionRow) {
            LogCategoriasHyperionRow.idProperty = 'IdLogCategoriaHyperion';
            LogCategoriasHyperionRow.nameProperty = 'VchDesCategoriaHyperion';
            LogCategoriasHyperionRow.localTextPrefix = 'Catalogos.LogCategoriasHyperion';
            LogCategoriasHyperionRow.lookupKey = 'Catalogos.LogCategoriasHyperion';
            function getLookup() {
                return Q.getLookup('Catalogos.LogCategoriasHyperion');
            }
            LogCategoriasHyperionRow.getLookup = getLookup;
        })(LogCategoriasHyperionRow = Catalogos.LogCategoriasHyperionRow || (Catalogos.LogCategoriasHyperionRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCategoriasHyperionService;
        (function (LogCategoriasHyperionService) {
            LogCategoriasHyperionService.baseUrl = 'Catalogos/LogCategoriasHyperion';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogCategoriasHyperionService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogCategoriasHyperionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogCategoriasHyperionService = Catalogos.LogCategoriasHyperionService || (Catalogos.LogCategoriasHyperionService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCategoriasPlanogramasForm = /** @class */ (function (_super) {
            __extends(LogCategoriasPlanogramasForm, _super);
            function LogCategoriasPlanogramasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogCategoriasPlanogramasForm.init) {
                    LogCategoriasPlanogramasForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(LogCategoriasPlanogramasForm, [
                        'IdCatCategoriaPlanograma', w0,
                        'IdOrigen', w0,
                        'IdDetProceso', w0,
                        'VchCodCategoriaPlanograma', w1,
                        'VchDesCategoriaPlanograma', w1,
                        'fkIdCatDivisionPlanograma', w2,
                        'fkVchDesDivisionPlanograma', w1,
                        'VchComentarios', w3,
                        'IEliminado', w4
                    ]);
                }
                return _this;
            }
            LogCategoriasPlanogramasForm.formKey = 'Catalogos.LogCategoriasPlanogramas';
            return LogCategoriasPlanogramasForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogCategoriasPlanogramasForm = LogCategoriasPlanogramasForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCategoriasPlanogramasRow;
        (function (LogCategoriasPlanogramasRow) {
            LogCategoriasPlanogramasRow.idProperty = 'IdLogCategoriaPlanograma';
            LogCategoriasPlanogramasRow.nameProperty = 'VchCodCategoriaPlanograma';
            LogCategoriasPlanogramasRow.localTextPrefix = 'Catalogos.LogCategoriasPlanogramas';
        })(LogCategoriasPlanogramasRow = Catalogos.LogCategoriasPlanogramasRow || (Catalogos.LogCategoriasPlanogramasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCategoriasPlanogramasService;
        (function (LogCategoriasPlanogramasService) {
            LogCategoriasPlanogramasService.baseUrl = 'Catalogos/LogCategoriasPlanogramas';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogCategoriasPlanogramasService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogCategoriasPlanogramasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogCategoriasPlanogramasService = Catalogos.LogCategoriasPlanogramasService || (Catalogos.LogCategoriasPlanogramasService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCiudadesForm = /** @class */ (function (_super) {
            __extends(LogCiudadesForm, _super);
            function LogCiudadesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogCiudadesForm.init) {
                    LogCiudadesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogCiudadesForm, [
                        'IdCatCiudad', w0,
                        'IdOrigen', w0,
                        'IdDetProceso', w0,
                        'VchCodCiudad', w1,
                        'VchDesCiudad', w1,
                        'VchComentarios', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogCiudadesForm.formKey = 'Catalogos.LogCiudades';
            return LogCiudadesForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogCiudadesForm = LogCiudadesForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCiudadesRow;
        (function (LogCiudadesRow) {
            LogCiudadesRow.idProperty = 'IdLogCiudad';
            LogCiudadesRow.nameProperty = 'VchCodCiudad';
            LogCiudadesRow.localTextPrefix = 'Catalogos.LogCiudades';
        })(LogCiudadesRow = Catalogos.LogCiudadesRow || (Catalogos.LogCiudadesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCiudadesService;
        (function (LogCiudadesService) {
            LogCiudadesService.baseUrl = 'Catalogos/LogCiudades';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogCiudadesService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogCiudadesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogCiudadesService = Catalogos.LogCiudadesService || (Catalogos.LogCiudadesService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogDivisionesPlanogramasForm = /** @class */ (function (_super) {
            __extends(LogDivisionesPlanogramasForm, _super);
            function LogDivisionesPlanogramasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogDivisionesPlanogramasForm.init) {
                    LogDivisionesPlanogramasForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogDivisionesPlanogramasForm, [
                        'IdCatDivisionPlanograma', w0,
                        'VchCodDivisionPlanograma', w1,
                        'VchDesDivisionPlanograma', w1,
                        'VchComentario', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogDivisionesPlanogramasForm.formKey = 'Catalogos.LogDivisionesPlanogramas';
            return LogDivisionesPlanogramasForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogDivisionesPlanogramasForm = LogDivisionesPlanogramasForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogDivisionesPlanogramasRow;
        (function (LogDivisionesPlanogramasRow) {
            LogDivisionesPlanogramasRow.idProperty = 'IdLogDivisionPlanograma';
            LogDivisionesPlanogramasRow.nameProperty = 'VchCodDivisionPlanograma';
            LogDivisionesPlanogramasRow.localTextPrefix = 'Catalogos.LogDivisionesPlanogramas';
        })(LogDivisionesPlanogramasRow = Catalogos.LogDivisionesPlanogramasRow || (Catalogos.LogDivisionesPlanogramasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogDivisionesPlanogramasService;
        (function (LogDivisionesPlanogramasService) {
            LogDivisionesPlanogramasService.baseUrl = 'Catalogos/LogDivisionesPlanogramas';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogDivisionesPlanogramasService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogDivisionesPlanogramasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogDivisionesPlanogramasService = Catalogos.LogDivisionesPlanogramasService || (Catalogos.LogDivisionesPlanogramasService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosArticulosForm = /** @class */ (function (_super) {
            __extends(LogEstadosArticulosForm, _super);
            function LogEstadosArticulosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogEstadosArticulosForm.init) {
                    LogEstadosArticulosForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogEstadosArticulosForm, [
                        'IdCatEstadoArticulo', w0,
                        'IdOrigen', w0,
                        'IdDetProceso', w0,
                        'VchCodEstadoArticulo', w1,
                        'VchDesEstadoArticulo', w1,
                        'VchComentarios', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogEstadosArticulosForm.formKey = 'Catalogos.LogEstadosArticulos';
            return LogEstadosArticulosForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogEstadosArticulosForm = LogEstadosArticulosForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosArticulosRow;
        (function (LogEstadosArticulosRow) {
            LogEstadosArticulosRow.idProperty = 'IdLogEstadoArticulo';
            LogEstadosArticulosRow.nameProperty = 'VchDesEstadoArticulo';
            LogEstadosArticulosRow.localTextPrefix = 'Catalogos.LogEstadosArticulos';
            LogEstadosArticulosRow.lookupKey = 'Catalogos.LogEstadosArticulos';
            function getLookup() {
                return Q.getLookup('Catalogos.LogEstadosArticulos');
            }
            LogEstadosArticulosRow.getLookup = getLookup;
        })(LogEstadosArticulosRow = Catalogos.LogEstadosArticulosRow || (Catalogos.LogEstadosArticulosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosArticulosService;
        (function (LogEstadosArticulosService) {
            LogEstadosArticulosService.baseUrl = 'Catalogos/LogEstadosArticulos';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogEstadosArticulosService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogEstadosArticulosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogEstadosArticulosService = Catalogos.LogEstadosArticulosService || (Catalogos.LogEstadosArticulosService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosForm = /** @class */ (function (_super) {
            __extends(LogEstadosForm, _super);
            function LogEstadosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogEstadosForm.init) {
                    LogEstadosForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogEstadosForm, [
                        'IdCatEstado', w0,
                        'IdOrigen', w0,
                        'IdDetProceso', w0,
                        'VchCodEstado', w1,
                        'VchDesEstado', w1,
                        'VchComentarios', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogEstadosForm.formKey = 'Catalogos.LogEstados';
            return LogEstadosForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogEstadosForm = LogEstadosForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosPlanogramasSucursalesForm = /** @class */ (function (_super) {
            __extends(LogEstadosPlanogramasSucursalesForm, _super);
            function LogEstadosPlanogramasSucursalesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogEstadosPlanogramasSucursalesForm.init) {
                    LogEstadosPlanogramasSucursalesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogEstadosPlanogramasSucursalesForm, [
                        'IdCatEstadoPlanogramaSucursal', w0,
                        'VchCodEstadoPlanogramaSucursal', w1,
                        'VchDesEstadoPlanogramaSucursal', w1,
                        'VchComentarios', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogEstadosPlanogramasSucursalesForm.formKey = 'Catalogos.LogEstadosPlanogramasSucursales';
            return LogEstadosPlanogramasSucursalesForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogEstadosPlanogramasSucursalesForm = LogEstadosPlanogramasSucursalesForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosPlanogramasSucursalesRow;
        (function (LogEstadosPlanogramasSucursalesRow) {
            LogEstadosPlanogramasSucursalesRow.idProperty = 'IdLogEstadoPlanogramaSucursal';
            LogEstadosPlanogramasSucursalesRow.nameProperty = 'VchCodEstadoPlanogramaSucursal';
            LogEstadosPlanogramasSucursalesRow.localTextPrefix = 'Catalogos.LogEstadosPlanogramasSucursales';
        })(LogEstadosPlanogramasSucursalesRow = Catalogos.LogEstadosPlanogramasSucursalesRow || (Catalogos.LogEstadosPlanogramasSucursalesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosPlanogramasSucursalesService;
        (function (LogEstadosPlanogramasSucursalesService) {
            LogEstadosPlanogramasSucursalesService.baseUrl = 'Catalogos/LogEstadosPlanogramasSucursales';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogEstadosPlanogramasSucursalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogEstadosPlanogramasSucursalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogEstadosPlanogramasSucursalesService = Catalogos.LogEstadosPlanogramasSucursalesService || (Catalogos.LogEstadosPlanogramasSucursalesService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosRow;
        (function (LogEstadosRow) {
            LogEstadosRow.idProperty = 'IdLogEstado';
            LogEstadosRow.nameProperty = 'VchCodEstado';
            LogEstadosRow.localTextPrefix = 'Catalogos.LogEstados';
        })(LogEstadosRow = Catalogos.LogEstadosRow || (Catalogos.LogEstadosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosService;
        (function (LogEstadosService) {
            LogEstadosService.baseUrl = 'Catalogos/LogEstados';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogEstadosService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogEstadosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogEstadosService = Catalogos.LogEstadosService || (Catalogos.LogEstadosService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstatusFarmaciasForm = /** @class */ (function (_super) {
            __extends(LogEstatusFarmaciasForm, _super);
            function LogEstatusFarmaciasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogEstatusFarmaciasForm.init) {
                    LogEstatusFarmaciasForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogEstatusFarmaciasForm, [
                        'IdCatEstatusFarmacia', w0,
                        'IdOrigen', w1,
                        'IdDetProceso', w0,
                        'VchCodEstatusFarmacia', w1,
                        'VchDesEstatusFarmacia', w1,
                        'VchComentarios', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogEstatusFarmaciasForm.formKey = 'Catalogos.LogEstatusFarmacias';
            return LogEstatusFarmaciasForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogEstatusFarmaciasForm = LogEstatusFarmaciasForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstatusFarmaciasRow;
        (function (LogEstatusFarmaciasRow) {
            LogEstatusFarmaciasRow.idProperty = 'IdLogEstatusFarmacia';
            LogEstatusFarmaciasRow.nameProperty = 'VchCodEstatusFarmacia';
            LogEstatusFarmaciasRow.localTextPrefix = 'Catalogos.LogEstatusFarmacias';
        })(LogEstatusFarmaciasRow = Catalogos.LogEstatusFarmaciasRow || (Catalogos.LogEstatusFarmaciasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstatusFarmaciasService;
        (function (LogEstatusFarmaciasService) {
            LogEstatusFarmaciasService.baseUrl = 'Catalogos/LogEstatusFarmacias';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogEstatusFarmaciasService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogEstatusFarmaciasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogEstatusFarmaciasService = Catalogos.LogEstatusFarmaciasService || (Catalogos.LogEstatusFarmaciasService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstatusProcesosForm = /** @class */ (function (_super) {
            __extends(LogEstatusProcesosForm, _super);
            function LogEstatusProcesosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogEstatusProcesosForm.init) {
                    LogEstatusProcesosForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogEstatusProcesosForm, [
                        'IdCatEstatusProceso', w0,
                        'VchCodEstatusProceso', w1,
                        'VchDesEstatusProceso', w1,
                        'VchComentario', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogEstatusProcesosForm.formKey = 'Catalogos.LogEstatusProcesos';
            return LogEstatusProcesosForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogEstatusProcesosForm = LogEstatusProcesosForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstatusProcesosRow;
        (function (LogEstatusProcesosRow) {
            LogEstatusProcesosRow.idProperty = 'IdLogEstatusProceso';
            LogEstatusProcesosRow.nameProperty = 'VchDesEstatusProceso';
            LogEstatusProcesosRow.localTextPrefix = 'Catalogos.LogEstatusProcesos';
            LogEstatusProcesosRow.lookupKey = 'Catalogos.LogEstatusProcesos';
            function getLookup() {
                return Q.getLookup('Catalogos.LogEstatusProcesos');
            }
            LogEstatusProcesosRow.getLookup = getLookup;
        })(LogEstatusProcesosRow = Catalogos.LogEstatusProcesosRow || (Catalogos.LogEstatusProcesosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstatusProcesosService;
        (function (LogEstatusProcesosService) {
            LogEstatusProcesosService.baseUrl = 'Catalogos/LogEstatusProcesos';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogEstatusProcesosService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogEstatusProcesosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogEstatusProcesosService = Catalogos.LogEstatusProcesosService || (Catalogos.LogEstatusProcesosService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogFtpForm = /** @class */ (function (_super) {
            __extends(LogFtpForm, _super);
            function LogFtpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogFtpForm.init) {
                    LogFtpForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.PasswordEditor;
                    var w4 = s.TextAreaEditor;
                    Q.initFormType(LogFtpForm, [
                        'IdCatFtp', w0,
                        'VchCodFtp', w1,
                        'VchDesFtp', w1,
                        'ISftp', w2,
                        'VchHost', w1,
                        'VchUser', w1,
                        'VchPassword', w3,
                        'IPort', w0,
                        'VchComentario', w4,
                        'IEliminado', w2
                    ]);
                }
                return _this;
            }
            LogFtpForm.formKey = 'Catalogos.LogFtp';
            return LogFtpForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogFtpForm = LogFtpForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogFtpRow;
        (function (LogFtpRow) {
            LogFtpRow.idProperty = 'IdLogFtp';
            LogFtpRow.nameProperty = 'VchCodFtp';
            LogFtpRow.localTextPrefix = 'Catalogos.LogFtp';
        })(LogFtpRow = Catalogos.LogFtpRow || (Catalogos.LogFtpRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogFtpService;
        (function (LogFtpService) {
            LogFtpService.baseUrl = 'Catalogos/LogFtp';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogFtpService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogFtpService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogFtpService = Catalogos.LogFtpService || (Catalogos.LogFtpService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogMarcasForm = /** @class */ (function (_super) {
            __extends(LogMarcasForm, _super);
            function LogMarcasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogMarcasForm.init) {
                    LogMarcasForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogMarcasForm, [
                        'IdCatMarca', w0,
                        'IdOrigen', w0,
                        'IdDetProceso', w0,
                        'VchCodMarca', w1,
                        'VchDesMarca', w1,
                        'VchComentarios', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogMarcasForm.formKey = 'Catalogos.LogMarcas';
            return LogMarcasForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogMarcasForm = LogMarcasForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogMarcasRow;
        (function (LogMarcasRow) {
            LogMarcasRow.idProperty = 'IdLogCatMarca';
            LogMarcasRow.nameProperty = 'VchDesMarca';
            LogMarcasRow.localTextPrefix = 'Catalogos.LogMarcas';
            LogMarcasRow.lookupKey = 'Catalogos.LogMarcas';
            function getLookup() {
                return Q.getLookup('Catalogos.LogMarcas');
            }
            LogMarcasRow.getLookup = getLookup;
        })(LogMarcasRow = Catalogos.LogMarcasRow || (Catalogos.LogMarcasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogMarcasService;
        (function (LogMarcasService) {
            LogMarcasService.baseUrl = 'Catalogos/LogMarcas';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogMarcasService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogMarcasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogMarcasService = Catalogos.LogMarcasService || (Catalogos.LogMarcasService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogNivelesSocioEconomicosForm = /** @class */ (function (_super) {
            __extends(LogNivelesSocioEconomicosForm, _super);
            function LogNivelesSocioEconomicosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogNivelesSocioEconomicosForm.init) {
                    LogNivelesSocioEconomicosForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogNivelesSocioEconomicosForm, [
                        'IdCatNivelSocioEconomico', w0,
                        'IdOrigen', w0,
                        'IdDetProceso', w0,
                        'VchCodNivelSocioEconomico', w1,
                        'VchDesNivelSocioEconomico', w1,
                        'VchComentarios', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogNivelesSocioEconomicosForm.formKey = 'Catalogos.LogNivelesSocioEconomicos';
            return LogNivelesSocioEconomicosForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogNivelesSocioEconomicosForm = LogNivelesSocioEconomicosForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogNivelesSocioEconomicosRow;
        (function (LogNivelesSocioEconomicosRow) {
            LogNivelesSocioEconomicosRow.idProperty = 'IdLogNivelSocioEconomico';
            LogNivelesSocioEconomicosRow.nameProperty = 'VchCodNivelSocioEconomico';
            LogNivelesSocioEconomicosRow.localTextPrefix = 'Catalogos.LogNivelesSocioEconomicos';
        })(LogNivelesSocioEconomicosRow = Catalogos.LogNivelesSocioEconomicosRow || (Catalogos.LogNivelesSocioEconomicosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogNivelesSocioEconomicosService;
        (function (LogNivelesSocioEconomicosService) {
            LogNivelesSocioEconomicosService.baseUrl = 'Catalogos/LogNivelesSocioEconomicos';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogNivelesSocioEconomicosService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogNivelesSocioEconomicosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogNivelesSocioEconomicosService = Catalogos.LogNivelesSocioEconomicosService || (Catalogos.LogNivelesSocioEconomicosService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogPaisesForm = /** @class */ (function (_super) {
            __extends(LogPaisesForm, _super);
            function LogPaisesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogPaisesForm.init) {
                    LogPaisesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogPaisesForm, [
                        'IdCatPais', w0,
                        'IdOrigen', w0,
                        'IdDetProceso', w0,
                        'VchCodPais', w1,
                        'VchDesPais', w1,
                        'VchComentarios', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogPaisesForm.formKey = 'Catalogos.LogPaises';
            return LogPaisesForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogPaisesForm = LogPaisesForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogPaisesRow;
        (function (LogPaisesRow) {
            LogPaisesRow.idProperty = 'IdLogPais';
            LogPaisesRow.nameProperty = 'VchCodPais';
            LogPaisesRow.localTextPrefix = 'Catalogos.LogPaises';
        })(LogPaisesRow = Catalogos.LogPaisesRow || (Catalogos.LogPaisesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogPaisesService;
        (function (LogPaisesService) {
            LogPaisesService.baseUrl = 'Catalogos/LogPaises';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogPaisesService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogPaisesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogPaisesService = Catalogos.LogPaisesService || (Catalogos.LogPaisesService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogProcesosForm = /** @class */ (function (_super) {
            __extends(LogProcesosForm, _super);
            function LogProcesosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogProcesosForm.init) {
                    LogProcesosForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(LogProcesosForm, [
                        'IdCatProceso', w0,
                        'VchCodProceso', w1,
                        'VchDesProceso', w1,
                        'fkIdCatTipoProceso', w2,
                        'fkVchDesTipoProceso', w1,
                        'VchClase', w1,
                        'VchComentario', w3,
                        'IEliminado', w4
                    ]);
                }
                return _this;
            }
            LogProcesosForm.formKey = 'Catalogos.LogProcesos';
            return LogProcesosForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogProcesosForm = LogProcesosForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogProcesosRow;
        (function (LogProcesosRow) {
            LogProcesosRow.idProperty = 'IdLogProceso';
            LogProcesosRow.nameProperty = 'VchDesProceso';
            LogProcesosRow.localTextPrefix = 'Catalogos.LogProcesos';
            LogProcesosRow.lookupKey = 'Catalogos.LogProcesos';
            function getLookup() {
                return Q.getLookup('Catalogos.LogProcesos');
            }
            LogProcesosRow.getLookup = getLookup;
        })(LogProcesosRow = Catalogos.LogProcesosRow || (Catalogos.LogProcesosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogProcesosService;
        (function (LogProcesosService) {
            LogProcesosService.baseUrl = 'Catalogos/LogProcesos';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogProcesosService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogProcesosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogProcesosService = Catalogos.LogProcesosService || (Catalogos.LogProcesosService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogRegionesForm = /** @class */ (function (_super) {
            __extends(LogRegionesForm, _super);
            function LogRegionesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogRegionesForm.init) {
                    LogRegionesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogRegionesForm, [
                        'IdCatRegion', w0,
                        'IdOrigen', w0,
                        'IdDetProceso', w0,
                        'VchCodRegion', w1,
                        'VchDesRegion', w1,
                        'VchComentarios', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogRegionesForm.formKey = 'Catalogos.LogRegiones';
            return LogRegionesForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogRegionesForm = LogRegionesForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogRegionesRow;
        (function (LogRegionesRow) {
            LogRegionesRow.idProperty = 'IdLogRegion';
            LogRegionesRow.nameProperty = 'VchCodRegion';
            LogRegionesRow.localTextPrefix = 'Catalogos.LogRegiones';
        })(LogRegionesRow = Catalogos.LogRegionesRow || (Catalogos.LogRegionesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogRegionesService;
        (function (LogRegionesService) {
            LogRegionesService.baseUrl = 'Catalogos/LogRegiones';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogRegionesService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogRegionesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogRegionesService = Catalogos.LogRegionesService || (Catalogos.LogRegionesService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogSucursalesForm = /** @class */ (function (_super) {
            __extends(LogSucursalesForm, _super);
            function LogSucursalesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogSucursalesForm.init) {
                    LogSucursalesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(LogSucursalesForm, [
                        'IdCatSucursal', w0,
                        'IdOrigen', w1,
                        'IdDetProceso', w0,
                        'VchCodSucursal', w1,
                        'VchDesSucursal', w1,
                        'IdCatEstatusFarmacia', w2,
                        'IdCatCiudad', w2,
                        'IdCatZona', w2,
                        'IdCatNivelSocioEconomico', w2,
                        'DtFechaApertura', w3,
                        'DtFechaCierre', w3,
                        'VchComentarios', w4,
                        'IEliminado', w5
                    ]);
                }
                return _this;
            }
            LogSucursalesForm.formKey = 'Catalogos.LogSucursales';
            return LogSucursalesForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogSucursalesForm = LogSucursalesForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogSucursalesRow;
        (function (LogSucursalesRow) {
            LogSucursalesRow.idProperty = 'IdLogSucursal';
            LogSucursalesRow.nameProperty = 'VchCodSucursal';
            LogSucursalesRow.localTextPrefix = 'Catalogos.LogSucursales';
        })(LogSucursalesRow = Catalogos.LogSucursalesRow || (Catalogos.LogSucursalesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogSucursalesService;
        (function (LogSucursalesService) {
            LogSucursalesService.baseUrl = 'Catalogos/LogSucursales';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogSucursalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogSucursalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogSucursalesService = Catalogos.LogSucursalesService || (Catalogos.LogSucursalesService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposMueblesForm = /** @class */ (function (_super) {
            __extends(LogTiposMueblesForm, _super);
            function LogTiposMueblesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogTiposMueblesForm.init) {
                    LogTiposMueblesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogTiposMueblesForm, [
                        'IdCatTipoMueble', w0,
                        'VchCodTipoMueble', w1,
                        'VchDesTipoMueble', w1,
                        'VchComentarios', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogTiposMueblesForm.formKey = 'Catalogos.LogTiposMuebles';
            return LogTiposMueblesForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogTiposMueblesForm = LogTiposMueblesForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposMueblesRow;
        (function (LogTiposMueblesRow) {
            LogTiposMueblesRow.idProperty = 'IdLogTipoMueble';
            LogTiposMueblesRow.nameProperty = 'VchCodTipoMueble';
            LogTiposMueblesRow.localTextPrefix = 'Catalogos.LogTiposMuebles';
        })(LogTiposMueblesRow = Catalogos.LogTiposMueblesRow || (Catalogos.LogTiposMueblesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposMueblesService;
        (function (LogTiposMueblesService) {
            LogTiposMueblesService.baseUrl = 'Catalogos/LogTiposMuebles';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogTiposMueblesService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogTiposMueblesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogTiposMueblesService = Catalogos.LogTiposMueblesService || (Catalogos.LogTiposMueblesService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposPlanogramasForm = /** @class */ (function (_super) {
            __extends(LogTiposPlanogramasForm, _super);
            function LogTiposPlanogramasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogTiposPlanogramasForm.init) {
                    LogTiposPlanogramasForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogTiposPlanogramasForm, [
                        'IdCatTipoPlanograma', w0,
                        'VchCodTipoPlanograma', w1,
                        'VchDesTipoPlanograma', w1,
                        'VchComentarios', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogTiposPlanogramasForm.formKey = 'Catalogos.LogTiposPlanogramas';
            return LogTiposPlanogramasForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogTiposPlanogramasForm = LogTiposPlanogramasForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposPlanogramasRow;
        (function (LogTiposPlanogramasRow) {
            LogTiposPlanogramasRow.idProperty = 'IdLogTipoPlanograma';
            LogTiposPlanogramasRow.nameProperty = 'VchCodTipoPlanograma';
            LogTiposPlanogramasRow.localTextPrefix = 'Catalogos.LogTiposPlanogramas';
        })(LogTiposPlanogramasRow = Catalogos.LogTiposPlanogramasRow || (Catalogos.LogTiposPlanogramasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposPlanogramasService;
        (function (LogTiposPlanogramasService) {
            LogTiposPlanogramasService.baseUrl = 'Catalogos/LogTiposPlanogramas';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogTiposPlanogramasService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogTiposPlanogramasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogTiposPlanogramasService = Catalogos.LogTiposPlanogramasService || (Catalogos.LogTiposPlanogramasService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposProcesosForm = /** @class */ (function (_super) {
            __extends(LogTiposProcesosForm, _super);
            function LogTiposProcesosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogTiposProcesosForm.init) {
                    LogTiposProcesosForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogTiposProcesosForm, [
                        'IdCatTipoProceso', w0,
                        'VchCodTipoProceso', w1,
                        'VchDesTipoProceso', w1,
                        'VchComentario', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogTiposProcesosForm.formKey = 'Catalogos.LogTiposProcesos';
            return LogTiposProcesosForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogTiposProcesosForm = LogTiposProcesosForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposProcesosRow;
        (function (LogTiposProcesosRow) {
            LogTiposProcesosRow.idProperty = 'IdLogTipoProceso';
            LogTiposProcesosRow.nameProperty = 'VchDesTipoProceso';
            LogTiposProcesosRow.localTextPrefix = 'Catalogos.LogTiposProcesos';
        })(LogTiposProcesosRow = Catalogos.LogTiposProcesosRow || (Catalogos.LogTiposProcesosRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposProcesosService;
        (function (LogTiposProcesosService) {
            LogTiposProcesosService.baseUrl = 'Catalogos/LogTiposProcesos';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogTiposProcesosService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogTiposProcesosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogTiposProcesosService = Catalogos.LogTiposProcesosService || (Catalogos.LogTiposProcesosService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogVariablesForm = /** @class */ (function (_super) {
            __extends(LogVariablesForm, _super);
            function LogVariablesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogVariablesForm.init) {
                    LogVariablesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogVariablesForm, [
                        'IdCatVariable', w0,
                        'VchCodVariable', w1,
                        'VchDesVariable', w1,
                        'VchComentario', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogVariablesForm.formKey = 'Catalogos.LogVariables';
            return LogVariablesForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogVariablesForm = LogVariablesForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogVariablesRow;
        (function (LogVariablesRow) {
            LogVariablesRow.idProperty = 'idLogVariable';
            LogVariablesRow.nameProperty = 'VchDesVariable';
            LogVariablesRow.localTextPrefix = 'Catalogos.LogVariables';
        })(LogVariablesRow = Catalogos.LogVariablesRow || (Catalogos.LogVariablesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogVariablesService;
        (function (LogVariablesService) {
            LogVariablesService.baseUrl = 'Catalogos/LogVariables';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogVariablesService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogVariablesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogVariablesService = Catalogos.LogVariablesService || (Catalogos.LogVariablesService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogZonasForm = /** @class */ (function (_super) {
            __extends(LogZonasForm, _super);
            function LogZonasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogZonasForm.init) {
                    LogZonasForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(LogZonasForm, [
                        'IdCatZona', w0,
                        'IdOrigen', w0,
                        'IdDetProceso', w0,
                        'VchCodZona', w1,
                        'VchDesZona', w1,
                        'VchComentarios', w2,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogZonasForm.formKey = 'Catalogos.LogZonas';
            return LogZonasForm;
        }(Serenity.PrefixedContext));
        Catalogos.LogZonasForm = LogZonasForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogZonasRow;
        (function (LogZonasRow) {
            LogZonasRow.idProperty = 'IdLogZona';
            LogZonasRow.nameProperty = 'VchCodZona';
            LogZonasRow.localTextPrefix = 'Catalogos.LogZonas';
        })(LogZonasRow = Catalogos.LogZonasRow || (Catalogos.LogZonasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogZonasService;
        (function (LogZonasService) {
            LogZonasService.baseUrl = 'Catalogos/LogZonas';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogZonasService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogZonasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogZonasService = Catalogos.LogZonasService || (Catalogos.LogZonasService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var VwArticulosPlanogramasForm = /** @class */ (function (_super) {
            __extends(VwArticulosPlanogramasForm, _super);
            function VwArticulosPlanogramasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VwArticulosPlanogramasForm.init) {
                    VwArticulosPlanogramasForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(VwArticulosPlanogramasForm, [
                        'VchDesPlanograma', w0,
                        'IdCatCategoriaPlanograma', w1,
                        'VchCodCategoriaPlanograma', w0,
                        'VchDesCategoriaPlanograma', w0,
                        'IEnviaSucursal', w2,
                        'IdCatArticulo', w1,
                        'VchCodArticulo', w0,
                        'VchDesArticulo', w0,
                        'VchCodCharola', w0,
                        'ISecuencia', w2,
                        'ISubSecuencia', w2,
                        'IFrente', w2,
                        'IMinimo', w2,
                        'IRanking', w2
                    ]);
                }
                return _this;
            }
            VwArticulosPlanogramasForm.formKey = 'SiGeC.VwArticulosPlanogramas';
            return VwArticulosPlanogramasForm;
        }(Serenity.PrefixedContext));
        Catalogos.VwArticulosPlanogramasForm = VwArticulosPlanogramasForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var VwArticulosPlanogramasRow;
        (function (VwArticulosPlanogramasRow) {
            VwArticulosPlanogramasRow.idProperty = 'IdMaePlanogramaArticulo';
            VwArticulosPlanogramasRow.localTextPrefix = 'SiGeC.VwArticulosPlanogramas';
        })(VwArticulosPlanogramasRow = Catalogos.VwArticulosPlanogramasRow || (Catalogos.VwArticulosPlanogramasRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var VwArticulosPlanogramasService;
        (function (VwArticulosPlanogramasService) {
            VwArticulosPlanogramasService.baseUrl = 'SiGeC/VwArticulosPlanogramas';
            [
                'List'
            ].forEach(function (x) {
                VwArticulosPlanogramasService[x] = function (r, s, o) {
                    return Q.serviceRequest(VwArticulosPlanogramasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VwArticulosPlanogramasService = Catalogos.VwArticulosPlanogramasService || (Catalogos.VwArticulosPlanogramasService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var VwArticulosSucursalesForm = /** @class */ (function (_super) {
            __extends(VwArticulosSucursalesForm, _super);
            function VwArticulosSucursalesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VwArticulosSucursalesForm.init) {
                    VwArticulosSucursalesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(VwArticulosSucursalesForm, [
                        'VchCodSucursal', w0,
                        'VchDesSucursal', w0,
                        'IdCatEstatusFarmacia', w1,
                        'VchDesEstatusFarmacia', w0,
                        'IdCatArticulo', w2,
                        'ICountPlanograma', w2
                    ]);
                }
                return _this;
            }
            VwArticulosSucursalesForm.formKey = 'SiGeC.VwArticulosSucursales';
            return VwArticulosSucursalesForm;
        }(Serenity.PrefixedContext));
        Catalogos.VwArticulosSucursalesForm = VwArticulosSucursalesForm;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var VwArticulosSucursalesRow;
        (function (VwArticulosSucursalesRow) {
            VwArticulosSucursalesRow.idProperty = 'IdCatSucursal';
            VwArticulosSucursalesRow.nameProperty = 'VchCodSucursal';
            VwArticulosSucursalesRow.localTextPrefix = 'SiGeC.VwArticulosSucursales';
        })(VwArticulosSucursalesRow = Catalogos.VwArticulosSucursalesRow || (Catalogos.VwArticulosSucursalesRow = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var VwArticulosSucursalesService;
        (function (VwArticulosSucursalesService) {
            VwArticulosSucursalesService.baseUrl = 'SiGeC/VwArticulosSucursales';
            [
                'List'
            ].forEach(function (x) {
                VwArticulosSucursalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(VwArticulosSucursalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VwArticulosSucursalesService = Catalogos.VwArticulosSucursalesService || (Catalogos.VwArticulosSucursalesService = {}));
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Detalle;
    (function (Detalle) {
        var DetProcesosForm = /** @class */ (function (_super) {
            __extends(DetProcesosForm, _super);
            function DetProcesosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DetProcesosForm.init) {
                    DetProcesosForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(DetProcesosForm, [
                        'IdDetProceso', w0,
                        'fkIdCatTipoProceso', w1,
                        'fkVchDesTipoProceso', w2,
                        'fkIdCatProceso', w1,
                        'fkVchDesProceso', w2,
                        'fkIdCatEstatusProceso', w1,
                        'fkVchDesEstatusProceso', w2,
                        'VchLogProceso', w3,
                        'VchComentarios', w3,
                        'IEliminado', w4
                    ]);
                }
                return _this;
            }
            DetProcesosForm.formKey = 'Detalle.DetProcesos';
            return DetProcesosForm;
        }(Serenity.PrefixedContext));
        Detalle.DetProcesosForm = DetProcesosForm;
    })(Detalle = SiGeC.Detalle || (SiGeC.Detalle = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Detalle;
    (function (Detalle) {
        var DetProcesosGridRow;
        (function (DetProcesosGridRow) {
            DetProcesosGridRow.idProperty = 'IdDetProceso';
            DetProcesosGridRow.nameProperty = 'VchComentarios';
            DetProcesosGridRow.localTextPrefix = 'Detalle.DetProcesosGrid';
        })(DetProcesosGridRow = Detalle.DetProcesosGridRow || (Detalle.DetProcesosGridRow = {}));
    })(Detalle = SiGeC.Detalle || (SiGeC.Detalle = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Detalle;
    (function (Detalle) {
        var DetProcesosRow;
        (function (DetProcesosRow) {
            DetProcesosRow.idProperty = 'IdDetProceso';
            DetProcesosRow.nameProperty = 'VchComentarios';
            DetProcesosRow.localTextPrefix = 'Detalle.DetProcesos';
        })(DetProcesosRow = Detalle.DetProcesosRow || (Detalle.DetProcesosRow = {}));
    })(Detalle = SiGeC.Detalle || (SiGeC.Detalle = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Detalle;
    (function (Detalle) {
        var DetProcesosService;
        (function (DetProcesosService) {
            DetProcesosService.baseUrl = 'Detalle/DetProcesos';
            [
                'Create',
                'Update',
                'Retrieve',
                'List',
                'MonitorProcesosUsuario',
                'CreaProceso',
                'BulkProcess',
                'ValidaProceso'
            ].forEach(function (x) {
                DetProcesosService[x] = function (r, s, o) {
                    return Q.serviceRequest(DetProcesosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DetProcesosService = Detalle.DetProcesosService || (Detalle.DetProcesosService = {}));
    })(Detalle = SiGeC.Detalle || (SiGeC.Detalle = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogExclusionesArticuloSucursalForm = /** @class */ (function (_super) {
            __extends(LogExclusionesArticuloSucursalForm, _super);
            function LogExclusionesArticuloSucursalForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogExclusionesArticuloSucursalForm.init) {
                    LogExclusionesArticuloSucursalForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DateTimeEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(LogExclusionesArticuloSucursalForm, [
                        'IdMaeExclusionArticuloSucursal', w0,
                        'fkIdCatSucursal', w1,
                        'fkVchDesSucursal', w2,
                        'fkIdCatArticulo', w1,
                        'fkVchDesArticulo', w2,
                        'DtInicio', w3,
                        'DtFin', w3,
                        'VchComentario', w4,
                        'IEliminado', w5
                    ]);
                }
                return _this;
            }
            LogExclusionesArticuloSucursalForm.formKey = 'Maestros.LogExclusionesArticuloSucursal';
            return LogExclusionesArticuloSucursalForm;
        }(Serenity.PrefixedContext));
        Maestros.LogExclusionesArticuloSucursalForm = LogExclusionesArticuloSucursalForm;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogExclusionesArticuloSucursalRow;
        (function (LogExclusionesArticuloSucursalRow) {
            LogExclusionesArticuloSucursalRow.idProperty = 'IdLogExclusionArticuloSucursal';
            LogExclusionesArticuloSucursalRow.localTextPrefix = 'Maestros.LogExclusionesArticuloSucursal';
        })(LogExclusionesArticuloSucursalRow = Maestros.LogExclusionesArticuloSucursalRow || (Maestros.LogExclusionesArticuloSucursalRow = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogExclusionesArticuloSucursalService;
        (function (LogExclusionesArticuloSucursalService) {
            LogExclusionesArticuloSucursalService.baseUrl = 'Maestros/LogExclusionesArticuloSucursal';
            [
                'Create',
                'Update',
                'Retrieve',
                'List',
                'ValidaDatos'
            ].forEach(function (x) {
                LogExclusionesArticuloSucursalService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogExclusionesArticuloSucursalService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogExclusionesArticuloSucursalService = Maestros.LogExclusionesArticuloSucursalService || (Maestros.LogExclusionesArticuloSucursalService = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasArticulosForm = /** @class */ (function (_super) {
            __extends(LogPlanogramasArticulosForm, _super);
            function LogPlanogramasArticulosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogPlanogramasArticulosForm.init) {
                    LogPlanogramasArticulosForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(LogPlanogramasArticulosForm, [
                        'IdMaePlanogramaArticulo', w0,
                        'IdDetProceso', w0,
                        'fkIdMaePlanograma', w1,
                        'fkVchDesPlanograma', w2,
                        'fkIdCatArticulo', w1,
                        'fkVchDesArticulo', w2,
                        'VchCodCharola', w2,
                        'ISecuencia', w0,
                        'ISubSecuencia', w0,
                        'IFrente', w0,
                        'IMinimo', w0,
                        'IRanking', w0,
                        'FltMetrosLineales', w3,
                        'VchComentarios', w4,
                        'IEliminado', w5
                    ]);
                }
                return _this;
            }
            LogPlanogramasArticulosForm.formKey = 'Maestros.LogPlanogramasArticulos';
            return LogPlanogramasArticulosForm;
        }(Serenity.PrefixedContext));
        Maestros.LogPlanogramasArticulosForm = LogPlanogramasArticulosForm;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasArticulosRow;
        (function (LogPlanogramasArticulosRow) {
            LogPlanogramasArticulosRow.idProperty = 'IdLogPlanogramaArticulo';
            LogPlanogramasArticulosRow.nameProperty = 'VchCodCharola';
            LogPlanogramasArticulosRow.localTextPrefix = 'Maestros.LogPlanogramasArticulos';
        })(LogPlanogramasArticulosRow = Maestros.LogPlanogramasArticulosRow || (Maestros.LogPlanogramasArticulosRow = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasArticulosService;
        (function (LogPlanogramasArticulosService) {
            LogPlanogramasArticulosService.baseUrl = 'Maestros/LogPlanogramasArticulos';
            [
                'Create',
                'Update',
                'Retrieve',
                'List',
                'ValidaDatos'
            ].forEach(function (x) {
                LogPlanogramasArticulosService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogPlanogramasArticulosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogPlanogramasArticulosService = Maestros.LogPlanogramasArticulosService || (Maestros.LogPlanogramasArticulosService = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasCategoriasForm = /** @class */ (function (_super) {
            __extends(LogPlanogramasCategoriasForm, _super);
            function LogPlanogramasCategoriasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogPlanogramasCategoriasForm.init) {
                    LogPlanogramasCategoriasForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(LogPlanogramasCategoriasForm, [
                        'IdMaePlanogramaCategoria', w0,
                        'IdDetProceso', w0,
                        'fkIdMaePlanograma', w1,
                        'fkVchDesPlanograma', w2,
                        'fkIdCatCategoriaPlanograma', w1,
                        'fkVchDesCategoriaPlanograma', w2,
                        'VchComentarios', w3,
                        'IEliminado', w4
                    ]);
                }
                return _this;
            }
            LogPlanogramasCategoriasForm.formKey = 'Maestros.LogPlanogramasCategorias';
            return LogPlanogramasCategoriasForm;
        }(Serenity.PrefixedContext));
        Maestros.LogPlanogramasCategoriasForm = LogPlanogramasCategoriasForm;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasCategoriasRow;
        (function (LogPlanogramasCategoriasRow) {
            LogPlanogramasCategoriasRow.idProperty = 'IdLogPlanogramaCategoria';
            LogPlanogramasCategoriasRow.localTextPrefix = 'Maestros.LogPlanogramasCategorias';
        })(LogPlanogramasCategoriasRow = Maestros.LogPlanogramasCategoriasRow || (Maestros.LogPlanogramasCategoriasRow = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasCategoriasService;
        (function (LogPlanogramasCategoriasService) {
            LogPlanogramasCategoriasService.baseUrl = 'Maestros/LogPlanogramasCategorias';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogPlanogramasCategoriasService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogPlanogramasCategoriasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogPlanogramasCategoriasService = Maestros.LogPlanogramasCategoriasService || (Maestros.LogPlanogramasCategoriasService = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasEnviaSucursalForm = /** @class */ (function (_super) {
            __extends(LogPlanogramasEnviaSucursalForm, _super);
            function LogPlanogramasEnviaSucursalForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogPlanogramasEnviaSucursalForm.init) {
                    LogPlanogramasEnviaSucursalForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.DateTimeEditor;
                    var w5 = s.TextAreaEditor;
                    var w6 = s.DateEditor;
                    Q.initFormType(LogPlanogramasEnviaSucursalForm, [
                        'IdMaePlanograma', w0,
                        'IdDetProceso', w1,
                        'VchDesPlanograma', w2,
                        'VchUrlImgPlanograma', w3,
                        'DtInicio', w4,
                        'IEnviaSucursal', w1,
                        'VchComentarios', w5,
                        'UserId', w1,
                        'DtRegistro', w6
                    ]);
                }
                return _this;
            }
            LogPlanogramasEnviaSucursalForm.formKey = 'Maestros.LogPlanogramasEnviaSucursal';
            return LogPlanogramasEnviaSucursalForm;
        }(Serenity.PrefixedContext));
        Maestros.LogPlanogramasEnviaSucursalForm = LogPlanogramasEnviaSucursalForm;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasEnviaSucursalRow;
        (function (LogPlanogramasEnviaSucursalRow) {
            LogPlanogramasEnviaSucursalRow.idProperty = 'IdMaePlanograma';
            LogPlanogramasEnviaSucursalRow.nameProperty = 'VchDesPlanograma';
            LogPlanogramasEnviaSucursalRow.localTextPrefix = 'Maestros.LogPlanogramasEnviaSucursal';
        })(LogPlanogramasEnviaSucursalRow = Maestros.LogPlanogramasEnviaSucursalRow || (Maestros.LogPlanogramasEnviaSucursalRow = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasEnviaSucursalService;
        (function (LogPlanogramasEnviaSucursalService) {
            LogPlanogramasEnviaSucursalService.baseUrl = 'Maestros/LogPlanogramasEnviaSucursal';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogPlanogramasEnviaSucursalService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogPlanogramasEnviaSucursalService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogPlanogramasEnviaSucursalService = Maestros.LogPlanogramasEnviaSucursalService || (Maestros.LogPlanogramasEnviaSucursalService = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasForm = /** @class */ (function (_super) {
            __extends(LogPlanogramasForm, _super);
            function LogPlanogramasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogPlanogramasForm.init) {
                    LogPlanogramasForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.ImageUploadEditor;
                    var w5 = s.DateEditor;
                    var w6 = s.DecimalEditor;
                    var w7 = s.TextAreaEditor;
                    Q.initFormType(LogPlanogramasForm, [
                        'IdMaePlanograma', w0,
                        'IdDetProceso', w1,
                        'VchDesPlanograma', w2,
                        'ICombinado', w3,
                        'fkIdCatCategoriaPlanograma', w0,
                        'fkVchDesCategoriaPlanograma', w2,
                        'fkIdCatCategoriaHyperion', w0,
                        'fkVchDesCategoriaHyperion', w2,
                        'fkIdCatTipoPlanograma', w0,
                        'fkVchDesTipoPlanograma', w2,
                        'fkIdCatTipoMueble', w0,
                        'fkVchDesTipoMueble', w2,
                        'VchUrlImgPlanograma', w4,
                        'DtInicio', w5,
                        'IEnviaSucursal', w3,
                        'ITramo', w1,
                        'FltMedida', w6,
                        'iCountSuc', w1,
                        'VchComentarios', w7,
                        'IEliminado', w3
                    ]);
                }
                return _this;
            }
            LogPlanogramasForm.formKey = 'Maestros.LogPlanogramas';
            return LogPlanogramasForm;
        }(Serenity.PrefixedContext));
        Maestros.LogPlanogramasForm = LogPlanogramasForm;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasReplicaPDFForm = /** @class */ (function (_super) {
            __extends(LogPlanogramasReplicaPDFForm, _super);
            function LogPlanogramasReplicaPDFForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogPlanogramasReplicaPDFForm.init) {
                    LogPlanogramasReplicaPDFForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.DateTimeEditor;
                    var w5 = s.TextAreaEditor;
                    var w6 = s.DateEditor;
                    Q.initFormType(LogPlanogramasReplicaPDFForm, [
                        'IdMaePlanograma', w0,
                        'IdDetProceso', w1,
                        'VchDesPlanograma', w2,
                        'VchUrlImgPlanograma', w3,
                        'DtInicio', w4,
                        'IEnviaSucursal', w1,
                        'VchComentarios', w5,
                        'UserId', w1,
                        'DtRegistro', w6
                    ]);
                }
                return _this;
            }
            LogPlanogramasReplicaPDFForm.formKey = 'Maestros.LogPlanogramasReplicaPDF';
            return LogPlanogramasReplicaPDFForm;
        }(Serenity.PrefixedContext));
        Maestros.LogPlanogramasReplicaPDFForm = LogPlanogramasReplicaPDFForm;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasReplicaPDFRow;
        (function (LogPlanogramasReplicaPDFRow) {
            LogPlanogramasReplicaPDFRow.idProperty = 'IdMaePlanograma';
            LogPlanogramasReplicaPDFRow.nameProperty = 'VchDesPlanograma';
            LogPlanogramasReplicaPDFRow.localTextPrefix = 'Maestros.LogPlanogramasReplicaPDF';
        })(LogPlanogramasReplicaPDFRow = Maestros.LogPlanogramasReplicaPDFRow || (Maestros.LogPlanogramasReplicaPDFRow = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasReplicaPDFService;
        (function (LogPlanogramasReplicaPDFService) {
            LogPlanogramasReplicaPDFService.baseUrl = 'Maestros/LogPlanogramasReplicaPDF';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogPlanogramasReplicaPDFService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogPlanogramasReplicaPDFService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogPlanogramasReplicaPDFService = Maestros.LogPlanogramasReplicaPDFService || (Maestros.LogPlanogramasReplicaPDFService = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasRow;
        (function (LogPlanogramasRow) {
            LogPlanogramasRow.idProperty = 'IdLogPlanograma';
            LogPlanogramasRow.nameProperty = 'VchDesPlanograma';
            LogPlanogramasRow.localTextPrefix = 'Maestros.LogPlanogramas';
            LogPlanogramasRow.lookupKey = 'LogPlanogramas';
            function getLookup() {
                return Q.getLookup('LogPlanogramas');
            }
            LogPlanogramasRow.getLookup = getLookup;
        })(LogPlanogramasRow = Maestros.LogPlanogramasRow || (Maestros.LogPlanogramasRow = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasService;
        (function (LogPlanogramasService) {
            LogPlanogramasService.baseUrl = 'Maestros/LogPlanogramas';
            [
                'Create',
                'Update',
                'Retrieve',
                'List',
                'ValidaDatos'
            ].forEach(function (x) {
                LogPlanogramasService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogPlanogramasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogPlanogramasService = Maestros.LogPlanogramasService || (Maestros.LogPlanogramasService = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasSucursalesForm = /** @class */ (function (_super) {
            __extends(LogPlanogramasSucursalesForm, _super);
            function LogPlanogramasSucursalesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogPlanogramasSucursalesForm.init) {
                    LogPlanogramasSucursalesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(LogPlanogramasSucursalesForm, [
                        'IdMaePlanogramaSucursal', w0,
                        'IdDetProceso', w0,
                        'fkIdMaePlanograma', w1,
                        'fkVchDesPlanograma', w2,
                        'ICantidad', w0,
                        'fkIdCatSucursal', w1,
                        'fkVchDesSucursal', w2,
                        'VchComentarios', w3,
                        'IEliminado', w4
                    ]);
                }
                return _this;
            }
            LogPlanogramasSucursalesForm.formKey = 'Maestros.LogPlanogramasSucursales';
            return LogPlanogramasSucursalesForm;
        }(Serenity.PrefixedContext));
        Maestros.LogPlanogramasSucursalesForm = LogPlanogramasSucursalesForm;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasSucursalesRow;
        (function (LogPlanogramasSucursalesRow) {
            LogPlanogramasSucursalesRow.idProperty = 'IdLogPlanogramaSucursal';
            LogPlanogramasSucursalesRow.nameProperty = 'VchComentarios';
            LogPlanogramasSucursalesRow.localTextPrefix = 'Maestros.LogPlanogramasSucursales';
        })(LogPlanogramasSucursalesRow = Maestros.LogPlanogramasSucursalesRow || (Maestros.LogPlanogramasSucursalesRow = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasSucursalesService;
        (function (LogPlanogramasSucursalesService) {
            LogPlanogramasSucursalesService.baseUrl = 'Maestros/LogPlanogramasSucursales';
            [
                'Create',
                'Update',
                'Retrieve',
                'List',
                'ValidaDatos'
            ].forEach(function (x) {
                LogPlanogramasSucursalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogPlanogramasSucursalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogPlanogramasSucursalesService = Maestros.LogPlanogramasSucursalesService || (Maestros.LogPlanogramasSucursalesService = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogVariablesProcesosForm = /** @class */ (function (_super) {
            __extends(LogVariablesProcesosForm, _super);
            function LogVariablesProcesosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogVariablesProcesosForm.init) {
                    LogVariablesProcesosForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(LogVariablesProcesosForm, [
                        'IdMaeVariableProceso', w0,
                        'VchDesVariableProceso', w1,
                        'fkIdCatVariable', w2,
                        'fkVchDesVariable', w1,
                        'fkIdCatProceso', w2,
                        'fkVchDesProceso', w1,
                        'VchValue', w1,
                        'UserId', w0,
                        'VchComentario', w3,
                        'IEliminado', w4
                    ]);
                }
                return _this;
            }
            LogVariablesProcesosForm.formKey = 'Maestros.LogVariablesProcesos';
            return LogVariablesProcesosForm;
        }(Serenity.PrefixedContext));
        Maestros.LogVariablesProcesosForm = LogVariablesProcesosForm;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogVariablesProcesosRow;
        (function (LogVariablesProcesosRow) {
            LogVariablesProcesosRow.idProperty = 'IdLogVariableProceso';
            LogVariablesProcesosRow.nameProperty = 'VchDesVariableProceso';
            LogVariablesProcesosRow.localTextPrefix = 'Maestros.LogVariablesProcesos';
        })(LogVariablesProcesosRow = Maestros.LogVariablesProcesosRow || (Maestros.LogVariablesProcesosRow = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogVariablesProcesosService;
        (function (LogVariablesProcesosService) {
            LogVariablesProcesosService.baseUrl = 'Maestros/LogVariablesProcesos';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogVariablesProcesosService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogVariablesProcesosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogVariablesProcesosService = Maestros.LogVariablesProcesosService || (Maestros.LogVariablesProcesosService = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var MaePlanogramasRow;
        (function (MaePlanogramasRow) {
            MaePlanogramasRow.idProperty = 'IdMaePlanograma';
            MaePlanogramasRow.nameProperty = 'VchDesLookUpPlanograma';
            MaePlanogramasRow.localTextPrefix = 'Maestros.MaePlanogramas';
            MaePlanogramasRow.lookupKey = 'MaePlanogramas';
            function getLookup() {
                return Q.getLookup('MaePlanogramas');
            }
            MaePlanogramasRow.getLookup = getLookup;
        })(MaePlanogramasRow = Maestros.MaePlanogramasRow || (Maestros.MaePlanogramasRow = {}));
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = SiGeC.Membership || (SiGeC.Membership = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = SiGeC.Membership || (SiGeC.Membership = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = SiGeC.Membership || (SiGeC.Membership = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = SiGeC.Membership || (SiGeC.Membership = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = SiGeC.Membership || (SiGeC.Membership = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Modules;
    (function (Modules) {
        var SiGeCDefaultEndpointService;
        (function (SiGeCDefaultEndpointService) {
            SiGeCDefaultEndpointService.baseUrl = 'HasNoRoute/SiGeCDefaultEndpoint';
            [
                'List'
            ].forEach(function (x) {
                SiGeCDefaultEndpointService[x] = function (r, s, o) {
                    return Q.serviceRequest(SiGeCDefaultEndpointService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SiGeCDefaultEndpointService = Modules.SiGeCDefaultEndpointService || (Modules.SiGeCDefaultEndpointService = {}));
    })(Modules = SiGeC.Modules || (SiGeC.Modules = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var AuditaPlanogramasForm = /** @class */ (function (_super) {
            __extends(AuditaPlanogramasForm, _super);
            function AuditaPlanogramasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AuditaPlanogramasForm.init) {
                    AuditaPlanogramasForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(AuditaPlanogramasForm, [
                        'IdDetProceso', w0,
                        'VchUrl', w1,
                        'VchLogProceso', w1,
                        'fkIdCatEstatusProceso', w0,
                        'fkVchDesEstatusProceso', w1,
                        'UserId', w0,
                        'DtRegistro', w2
                    ]);
                }
                return _this;
            }
            AuditaPlanogramasForm.formKey = 'Reportes.AuditaPlanogramas';
            return AuditaPlanogramasForm;
        }(Serenity.PrefixedContext));
        Reportes.AuditaPlanogramasForm = AuditaPlanogramasForm;
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var AuditaPlanogramasRow;
        (function (AuditaPlanogramasRow) {
            AuditaPlanogramasRow.idProperty = 'IdDetProceso';
            AuditaPlanogramasRow.nameProperty = 'VchUrl';
            AuditaPlanogramasRow.localTextPrefix = 'Reportes.AuditaPlanogramas';
        })(AuditaPlanogramasRow = Reportes.AuditaPlanogramasRow || (Reportes.AuditaPlanogramasRow = {}));
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var AuditaPlanogramasService;
        (function (AuditaPlanogramasService) {
            AuditaPlanogramasService.baseUrl = 'Reportes/AuditaPlanogramas';
            [
                'List'
            ].forEach(function (x) {
                AuditaPlanogramasService[x] = function (r, s, o) {
                    return Q.serviceRequest(AuditaPlanogramasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AuditaPlanogramasService = Reportes.AuditaPlanogramasService || (Reportes.AuditaPlanogramasService = {}));
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var DetReportesCoberturaForm = /** @class */ (function (_super) {
            __extends(DetReportesCoberturaForm, _super);
            function DetReportesCoberturaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DetReportesCoberturaForm.init) {
                    DetReportesCoberturaForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.StringEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(DetReportesCoberturaForm, [
                        'IdDetProceso', w0,
                        'IdDetReporteCobertura', w0,
                        'VchURLReporte', w1,
                        'VchLogProceso', w2,
                        'IdCatEstatusProceso', w0,
                        'VchCodEstatusProceso', w3,
                        'VchDesEstatusProceso', w3,
                        'VchComentario', w2,
                        'IEliminado', w4
                    ]);
                }
                return _this;
            }
            DetReportesCoberturaForm.formKey = 'Reportes.DetReportesCobertura';
            return DetReportesCoberturaForm;
        }(Serenity.PrefixedContext));
        Reportes.DetReportesCoberturaForm = DetReportesCoberturaForm;
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var DetReportesCoberturaRow;
        (function (DetReportesCoberturaRow) {
            DetReportesCoberturaRow.idProperty = 'IdLogReporteCobertura';
            DetReportesCoberturaRow.nameProperty = 'VchURLReporte';
            DetReportesCoberturaRow.localTextPrefix = 'Reportes.DetReportesCobertura';
        })(DetReportesCoberturaRow = Reportes.DetReportesCoberturaRow || (Reportes.DetReportesCoberturaRow = {}));
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var DetReportesCoberturaService;
        (function (DetReportesCoberturaService) {
            DetReportesCoberturaService.baseUrl = 'Reportes/DetReportesCobertura';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DetReportesCoberturaService[x] = function (r, s, o) {
                    return Q.serviceRequest(DetReportesCoberturaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DetReportesCoberturaService = Reportes.DetReportesCoberturaService || (Reportes.DetReportesCoberturaService = {}));
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var LogReportesNecesidadForm = /** @class */ (function (_super) {
            __extends(LogReportesNecesidadForm, _super);
            function LogReportesNecesidadForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LogReportesNecesidadForm.init) {
                    LogReportesNecesidadForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.StringEditor;
                    var w4 = s.TextAreaEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(LogReportesNecesidadForm, [
                        'IdDetProceso', w0,
                        'IdDetReporteNecesidad', w0,
                        'VchURLPlanosSucursalesArticulos', w1,
                        'fkIdCatCategoriaPlanograma', w2,
                        'fkVchDesCategoriaPlanograma', w3,
                        'fkIdCatCategoriaHyperion', w2,
                        'fkVchDesCategoriaHyperion', w3,
                        'VchURLReporte', w1,
                        'VchLogProceso', w4,
                        'IdCatEstatusProceso', w0,
                        'VchCodEstatusProceso', w3,
                        'VchDesEstatusProceso', w3,
                        'VchComentario', w4,
                        'IEliminado', w5
                    ]);
                }
                return _this;
            }
            LogReportesNecesidadForm.formKey = 'Reportes.LogReportesNecesidad';
            return LogReportesNecesidadForm;
        }(Serenity.PrefixedContext));
        Reportes.LogReportesNecesidadForm = LogReportesNecesidadForm;
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var LogReportesNecesidadRow;
        (function (LogReportesNecesidadRow) {
            LogReportesNecesidadRow.idProperty = 'IdLogReporteNecesidad';
            LogReportesNecesidadRow.nameProperty = 'VchURLReporte';
            LogReportesNecesidadRow.localTextPrefix = 'Reportes.LogReportesNecesidad';
        })(LogReportesNecesidadRow = Reportes.LogReportesNecesidadRow || (Reportes.LogReportesNecesidadRow = {}));
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var LogReportesNecesidadService;
        (function (LogReportesNecesidadService) {
            LogReportesNecesidadService.baseUrl = 'Reportes/LogReportesNecesidad';
            [
                'Create',
                'Update',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LogReportesNecesidadService[x] = function (r, s, o) {
                    return Q.serviceRequest(LogReportesNecesidadService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LogReportesNecesidadService = Reportes.LogReportesNecesidadService || (Reportes.LogReportesNecesidadService = {}));
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var PlanogramasSucursalesArticulosRow;
        (function (PlanogramasSucursalesArticulosRow) {
            PlanogramasSucursalesArticulosRow.idProperty = 'RowNum';
            PlanogramasSucursalesArticulosRow.nameProperty = 'VchDesPlanograma';
            PlanogramasSucursalesArticulosRow.localTextPrefix = 'Reportes.PlanogramasSucursalesArticulos';
        })(PlanogramasSucursalesArticulosRow = Reportes.PlanogramasSucursalesArticulosRow || (Reportes.PlanogramasSucursalesArticulosRow = {}));
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var PlanogramasSucursalesArticulosService;
        (function (PlanogramasSucursalesArticulosService) {
            PlanogramasSucursalesArticulosService.baseUrl = 'Reportes/PlanogramasSucursalesArticulos';
            [
                'List'
            ].forEach(function (x) {
                PlanogramasSucursalesArticulosService[x] = function (r, s, o) {
                    return Q.serviceRequest(PlanogramasSucursalesArticulosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PlanogramasSucursalesArticulosService = Reportes.PlanogramasSucursalesArticulosService || (Reportes.PlanogramasSucursalesArticulosService = {}));
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC_1) {
    var Texts;
    (function (Texts) {
        SiGeC['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, MaeRestriccionesUsuarios: { DtRegistro: 1, IEliminado: 1, IdMaeRestriccionUsuario: 1, UserId: 1, UserIdRestriccion: 1, UserName: 1, UserNameRestriccion: 1, VchComentarios: 1, fkIdCatTablaRestriccionUsuario: 1, fkIdRestriccion: 1, fkVchDesRestriccion: 1, fkVchDesTablaRestriccionUsuario: 1 }, Role: { RoleId: 1, RoleName: 1, StartPage: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, IEliminado: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Cargas: { LogCargasExclusiones: { DtFechaFin: 1, DtFechaInicio: 1, DtRegistro: 1, IEliminado: 1, IVigente: 1, IdDetCargaExclusiones: 1, IdDetProceso: 1, IdDetProcesoOriginal: 1, IdLogCargaExclusiones: 1, UserId: 1, Username: 1, VchCodEstatusProceso: 1, VchComentarios: 1, VchDesEstatusProceso: 1, VchFileName: 1, VchLogProceso: 1, VchUrlFile: 1 }, LogCargasPlanogramas: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdDetCargaPlanograma: 1, IdDetProceso: 1, IdDetProcesoOriginal: 1, IdLogCargaPlanograma: 1, UserId: 1, Username: 1, VchCodEstatusProceso: 1, VchComentarios: 1, VchDesEstatusProceso: 1, VchFileName: 1, VchLogProceso: 1, VchUrlFile: 1 }, LogCargasPlanogramasArticulos: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdDetCargaPlanogramaArticulo: 1, IdDetProceso: 1, IdDetProcesoOriginal: 1, IdLogCargaPlanogramaArticulo: 1, UserId: 1, Username: 1, VchCodEstatusProceso: 1, VchComentarios: 1, VchDesEstatusProceso: 1, VchFileName: 1, VchLogProceso: 1, VchUrlFile: 1, fkIdMaePlanograma: 1, fkVchDesPlanograma: 1 }, LogCargasPlanogramasSucursales: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdDetCargaPlanogramaSucursal: 1, IdDetProceso: 1, IdDetProcesoOriginal: 1, IdLogCargaPlanogramaSucursal: 1, UserId: 1, Username: 1, VchCodEstatusProceso: 1, VchComentarios: 1, VchDesEstatusProceso: 1, VchFileName: 1, VchLogProceso: 1, VchUrlFile: 1, fkIdMaePlanograma: 1, fkVchDesPlanograma: 1 } }, Catalogos: { CatArticulos: { IEliminado: 1, IdCatArticulo: 1, VchCodArticulo: 1, VchDesArticuloLookUp: 1 }, CatCategoriasHyperion: { DtRegistro: 1, IEliminado: 1, INivel: 1, IdCatCategoriaHyperion: 1, IdCatCategoriaPadre: 1, IdDetProceso: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodCategoriaHyperion: 1, VchComentario: 1, VchDesCategoriaHyperion: 1 }, CatCategoriasPlanogramas: { DtRegistro: 1, IEliminado: 1, IdCatCategoriaPlanograma: 1, IdDetProceso: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodCategoriaPlanograma: 1, VchComentarios: 1, VchDesCategoriaPlanograma: 1 }, CatCiudades: { DtRegistro: 1, IEliminado: 1, IdCatCiudad: 1, IdCatEstado: 1, IdDetProceso: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodCiudad: 1, VchComentarios: 1, VchDesCiudad: 1 }, CatCompanias: { DtRegistro: 1, IEliminado: 1, IdCatCompania: 1, IdDetProceso: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodCompania: 1, VchComentarios: 1, VchDesCompania: 1 }, CatDivisionesPlanogramas: { DtRegistro: 1, IEliminado: 1, IdCatDivisionPlanograma: 1, UserId: 1, Username: 1, VchCodDivisionPlanograma: 1, VchComentario: 1, VchDesDivisionPlanograma: 1 }, CatEstadosArticulos: { DtRegistro: 1, IEliminado: 1, IdCatEstadoArticulo: 1, IdDetProceso: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodEstadoArticulo: 1, VchComentarios: 1, VchDesEstadoArticulo: 1 }, CatEstadosPlanogramasSucursales: { DtRegistro: 1, IEliminado: 1, IdCatEstadoPlanogramaSucursal: 1, UserId: 1, Username: 1, VchCodEstadoPlanogramaSucursal: 1, VchComentarios: 1, VchDesEstadoPlanogramaSucursal: 1 }, CatEstatusFarmacias: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatEstatusFarmacia: 1, IdDetProceso: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodEstatusFarmacia: 1, VchComentarios: 1, VchDesEstatusFarmacia: 1 }, CatEstatusProcesos: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatEstatusProceso: 1, UserId: 1, UserUsername: 1, VchCodEstatusProceso: 1, VchComentario: 1, VchDesEstatusProceso: 1 }, CatMarcas: { DtRegistro: 1, IEliminado: 1, IdCatMarca: 1, IdDetProceso: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodMarca: 1, VchComentarios: 1, VchDesMarca: 1 }, CatNivelesSocioEconomicos: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatNivelSocioEconomico: 1, IdDetProceso: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodNivelSocioEconomico: 1, VchComentarios: 1, VchDesNivelSocioEconomico: 1 }, CatProcesos: { DtRegistro: 1, IEliminado: 1, IdCatProceso: 1, UserId: 1, UserName: 1, VchClase: 1, VchCodProceso: 1, VchComentario: 1, VchDesProceso: 1, fkIdCatTipoProceso: 1, fkVchDesTipoProceso: 1 }, CatRegiones: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatRegion: 1, IdDetProceso: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodRegion: 1, VchComentarios: 1, VchDesRegion: 1 }, CatRestricciones: { IdCatTablaRestriccionUsuario: 1, IdRestriccion: 1, VchDesTablaRestriccionUsuario: 1 }, CatSucursales: { DtFechaApertura: 1, DtFechaCierre: 1, DtRegistro: 1, IEliminado: 1, IdCatCiudad: 1, IdCatEstatusFarmacia: 1, IdCatNivelSocioEconomico: 1, IdCatSucursal: 1, IdCatZona: 1, IdDetProceso: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodSucursal: 1, VchComentarios: 1, VchDesSucursal: 1 }, CatTablasRestriccionesUsuarios: { DtRegistro: 1, IEliminado: 1, IdCatTablaRestriccionUsuario: 1, UserId: 1, VchComentarios: 1, VchDesTablaRestriccionUsuario: 1 }, CatTiposMuebles: { DtRegistro: 1, IEliminado: 1, IdCatTipoMueble: 1, UserId: 1, Username: 1, VchCodTipoMueble: 1, VchComentarios: 1, VchDesTipoMueble: 1 }, CatTiposPlanogramas: { DtRegistro: 1, IEliminado: 1, IdCatTipoPlanograma: 1, UserId: 1, Username: 1, VchCodTipoPlanograma: 1, VchComentarios: 1, VchDesTipoPlanograma: 1 }, CatTiposProcesos: { DtRegistro: 1, IEliminado: 1, IdCatTipoProceso: 1, UserId: 1, Username: 1, VchCodTipoProceso: 1, VchComentario: 1, VchDesTipoProceso: 1 }, CatVariables: { DtRegistro: 1, IEliminado: 1, IdCatVariable: 1, UserId: 1, Username: 1, VchCodVariable: 1, VchComentario: 1, VchDesVariable: 1 }, CatZonas: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatRegion: 1, IdCatZona: 1, IdDetProceso: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodZona: 1, VchComentarios: 1, VchDesZona: 1 }, LogArticulos: { DtRegistro: 1, ICountPlanogramas: 1, ICountSucursales: 1, IEliminado: 1, IVigente: 1, IdCatArticulo: 1, IdDetProceso: 1, IdLogArticulo: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodArticulo: 1, VchCodigoBarras: 1, VchComentarios: 1, VchDesArticulo: 1, fkIdCatCategoriaHyperion: 1, fkIdCatEstadoArticulo: 1, fkIdCatMarca: 1, fkVchDesCategoriaHyperion: 1, fkVchDesEstadoArticulo: 1, fkVchDesMarca: 1 }, LogCategoriasHyperion: { DtRegistro: 1, IEliminado: 1, INivel: 1, IVigente: 1, IdCatCategoriaHyperion: 1, IdDetProceso: 1, IdLogCategoriaHyperion: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodCategoriaHyperion: 1, VchComentario: 1, VchDesCategoriaHyperion: 1, fkIdCatCategoriaPadre: 1, fkVchDesCategoriaPadre: 1 }, LogCategoriasPlanogramas: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatCategoriaPlanograma: 1, IdDetProceso: 1, IdLogCategoriaPlanograma: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodCategoriaPlanograma: 1, VchComentarios: 1, VchDesCategoriaPlanograma: 1, fkIdCatDivisionPlanograma: 1, fkVchDesDivisionPlanograma: 1 }, LogCiudades: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatCiudad: 1, IdCatEstado: 1, IdDetProceso: 1, IdLogCiudad: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodCiudad: 1, VchComentarios: 1, VchDesCiudad: 1 }, LogDivisionesPlanogramas: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatDivisionPlanograma: 1, IdLogDivisionPlanograma: 1, UserId: 1, Username: 1, VchCodDivisionPlanograma: 1, VchComentario: 1, VchDesDivisionPlanograma: 1 }, LogEstados: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatEstado: 1, IdCatPais: 1, IdDetProceso: 1, IdLogEstado: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodEstado: 1, VchComentarios: 1, VchDesEstado: 1 }, LogEstadosArticulos: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatEstadoArticulo: 1, IdDetProceso: 1, IdLogEstadoArticulo: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodEstadoArticulo: 1, VchComentarios: 1, VchDesEstadoArticulo: 1 }, LogEstadosPlanogramasSucursales: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatEstadoPlanogramaSucursal: 1, IdLogEstadoPlanogramaSucursal: 1, UserId: 1, Username: 1, VchCodEstadoPlanogramaSucursal: 1, VchComentarios: 1, VchDesEstadoPlanogramaSucursal: 1 }, LogEstatusFarmacias: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatEstatusFarmacia: 1, IdDetProceso: 1, IdLogEstatusFarmacia: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodEstatusFarmacia: 1, VchComentarios: 1, VchDesEstatusFarmacia: 1 }, LogEstatusProcesos: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatEstatusProceso: 1, IdLogEstatusProceso: 1, UserId: 1, UserUsername: 1, VchCodEstatusProceso: 1, VchComentario: 1, VchDesEstatusProceso: 1 }, LogFtp: { DtRegistro: 1, IEliminado: 1, IPort: 1, ISftp: 1, IVigente: 1, IdCatFtp: 1, IdLogFtp: 1, UserId: 1, Username: 1, VchCodFtp: 1, VchComentario: 1, VchDesFtp: 1, VchHost: 1, VchPassword: 1, VchUser: 1 }, LogMarcas: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatMarca: 1, IdDetProceso: 1, IdLogCatMarca: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodMarca: 1, VchComentarios: 1, VchDesMarca: 1 }, LogNivelesSocioEconomicos: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatNivelSocioEconomico: 1, IdDetProceso: 1, IdLogNivelSocioEconomico: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodNivelSocioEconomico: 1, VchComentarios: 1, VchDesNivelSocioEconomico: 1 }, LogPaises: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatPais: 1, IdDetProceso: 1, IdLogPais: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodPais: 1, VchComentarios: 1, VchDesPais: 1 }, LogProcesos: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatProceso: 1, IdLogProceso: 1, UserId: 1, UserName: 1, VchClase: 1, VchCodProceso: 1, VchComentario: 1, VchDesProceso: 1, fkIdCatTipoProceso: 1, fkVchDesTipoProceso: 1 }, LogRegiones: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatRegion: 1, IdDetProceso: 1, IdLogRegion: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodRegion: 1, VchComentarios: 1, VchDesRegion: 1 }, LogSucursales: { DtFechaApertura: 1, DtFechaCierre: 1, DtRegistro: 1, IEliminado: 1, IRecienApertura: 1, ISucursal: 1, ISurtir: 1, IVigente: 1, IdCatCiudad: 1, IdCatCompania: 1, IdCatEstatusFarmacia: 1, IdCatNivelSocioEconomico: 1, IdCatSucursal: 1, IdCatZona: 1, IdDetProceso: 1, IdLogSucursal: 1, IdOrigen: 1, UserId: 1, Username: 1, VchAlmacen: 1, VchCodSucursal: 1, VchComentarios: 1, VchDesCiudad: 1, VchDesCompania: 1, VchDesEstatusFarmacia: 1, VchDesNivelSocioEconomico: 1, VchDesSucursal: 1, VchDesZona: 1 }, LogTiposMuebles: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatTipoMueble: 1, IdLogTipoMueble: 1, UserId: 1, Username: 1, VchCodTipoMueble: 1, VchComentarios: 1, VchDesTipoMueble: 1 }, LogTiposPlanogramas: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatTipoPlanograma: 1, IdLogTipoPlanograma: 1, UserId: 1, Username: 1, VchCodTipoPlanograma: 1, VchComentarios: 1, VchDesTipoPlanograma: 1 }, LogTiposProcesos: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatTipoProceso: 1, IdLogTipoProceso: 1, UserId: 1, Username: 1, VchCodTipoProceso: 1, VchComentario: 1, VchDesTipoProceso: 1 }, LogVariables: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatVariable: 1, UserId: 1, Username: 1, VchCodVariable: 1, VchComentario: 1, VchDesVariable: 1, idLogVariable: 1 }, LogZonas: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatRegion: 1, IdCatZona: 1, IdDetProceso: 1, IdLogZona: 1, IdOrigen: 1, UserId: 1, Username: 1, VchCodZona: 1, VchComentarios: 1, VchDesZona: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Detalle: { DetProcesos: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdDetProceso: 1, UserId: 1, UserName: 1, VchComentarios: 1, VchLogProceso: 1, fkIdCatEstatusProceso: 1, fkIdCatProceso: 1, fkIdCatTipoProceso: 1, fkVchDesEstatusProceso: 1, fkVchDesProceso: 1, fkVchDesTipoProceso: 1 }, DetProcesosGrid: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdDetProceso: 1, UserId: 1, UserName: 1, VchComentarios: 1, VchLogProceso: 1, fkIdCatEstatusProceso: 1, fkIdCatProceso: 1, fkIdCatTipoProceso: 1, fkVchDesEstatusProceso: 1, fkVchDesProceso: 1, fkVchDesTipoProceso: 1 } }, Maestros: { LogExclusionesArticuloSucursal: { DtFin: 1, DtInicio: 1, DtRegistro: 1, IEliminado: 1, IVigente: 1, IdLogExclusionArticuloSucursal: 1, IdMaeExclusionArticuloSucursal: 1, UserId: 1, Username: 1, VchComentario: 1, fkIdCatArticulo: 1, fkIdCatSucursal: 1, fkVchDesArticulo: 1, fkVchDesSucursal: 1 }, LogPlanogramas: { DtFin: 1, DtInicio: 1, DtRegistro: 1, FltMedida: 1, ICombinado: 1, IEliminado: 1, IEnviaSucursal: 1, ITramo: 1, IVigente: 1, IdDetProceso: 1, IdLogPlanograma: 1, IdMaePlanograma: 1, UserId: 1, Username: 1, VchComentarios: 1, VchDesPlanograma: 1, VchUrlImgPlanograma: 1, fkIdCatCategoriaHyperion: 1, fkIdCatCategoriaPlanograma: 1, fkIdCatTipoMueble: 1, fkIdCatTipoPlanograma: 1, fkVchDesCategoriaHyperion: 1, fkVchDesCategoriaPlanograma: 1, fkVchDesTipoMueble: 1, fkVchDesTipoPlanograma: 1, iCountArt: 1, iCountSuc: 1, sumIFrente: 1, sumIMinimo: 1 }, LogPlanogramasArticulos: { DtRegistro: 1, FltMetrosLineales: 1, IEliminado: 1, IEnviaSucursal: 1, IFrente: 1, IMinimo: 1, IRanking: 1, ISecuencia: 1, ISubSecuencia: 1, IVigente: 1, IdDetProceso: 1, IdLogPlanogramaArticulo: 1, IdMaePlanogramaArticulo: 1, UserId: 1, Username: 1, VchCodCharola: 1, VchComentarios: 1, fkIdCatArticulo: 1, fkIdCatCategoriaPlanograma: 1, fkIdCatEstadoArticulo: 1, fkIdCatTipoMueble: 1, fkIdCatTipoPlanograma: 1, fkIdMaePlanograma: 1, fkVchCodArticulo: 1, fkVchDesArticulo: 1, fkVchDesCategoriaPlanograma: 1, fkVchDesEstadoArticulo: 1, fkVchDesPlanograma: 1, fkVchDesTipoMueble: 1, fkVchDesTipoPlanograma: 1 }, LogPlanogramasCategorias: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdDetProceso: 1, IdLogPlanogramaCategoria: 1, IdMaePlanogramaCategoria: 1, UserId: 1, Username: 1, VchComentarios: 1, fkIdCatCategoriaPlanograma: 1, fkIdMaePlanograma: 1, fkVchDesCategoriaPlanograma: 1, fkVchDesPlanograma: 1 }, LogPlanogramasEnviaSucursal: { DtInicio: 1, DtRegistro: 1, IEnviaSucursal: 1, IdDetProceso: 1, IdMaePlanograma: 1, UserId: 1, Username: 1, VchComentarios: 1, VchDesPlanograma: 1, VchUrlImgPlanograma: 1, fkIdCatCategoriaHyperion: 1, fkIdCatCategoriaPlanograma: 1, fkIdCatTipoMueble: 1, fkIdCatTipoPlanograma: 1, fkVchDesCategoriaHyperion: 1, fkVchDesCategoriaPlanograma: 1, fkVchDesTipoMueble: 1, fkVchDesTipoPlanograma: 1 }, LogPlanogramasReplicaPDF: { DtInicio: 1, DtRegistro: 1, IEnviaSucursal: 1, IdDetProceso: 1, IdMaePlanograma: 1, UserId: 1, Username: 1, VchComentarios: 1, VchDesPlanograma: 1, VchLog: 1, VchUrlImgPlanograma: 1, fkIdCatCategoriaHyperion: 1, fkIdCatCategoriaPlanograma: 1, fkIdCatTipoMueble: 1, fkIdCatTipoPlanograma: 1, fkVchDesCategoriaHyperion: 1, fkVchDesCategoriaPlanograma: 1, fkVchDesTipoMueble: 1, fkVchDesTipoPlanograma: 1 }, LogPlanogramasSucursales: { DtRegistro: 1, ICantidad: 1, IEliminado: 1, IEnviaSucursal: 1, IVigente: 1, IdDetProceso: 1, IdLogPlanogramaSucursal: 1, IdMaePlanogramaSucursal: 1, UserId: 1, Username: 1, VchComentarios: 1, fkIdCatCategoriaPlanograma: 1, fkIdCatEstatusFarmacia: 1, fkIdCatSucursal: 1, fkIdCatTipoMueble: 1, fkIdCatTipoPlanograma: 1, fkIdMaePlanograma: 1, fkVchDesCategoriaPlanograma: 1, fkVchDesEstatusFarmacia: 1, fkVchDesPlanograma: 1, fkVchDesSucursal: 1, fkVchDesTipoMueble: 1, fkVchDesTipoPlanograma: 1 }, LogVariablesProcesos: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdLogVariableProceso: 1, IdMaeVariableProceso: 1, UserId: 1, UserName: 1, VchComentario: 1, VchDesVariableProceso: 1, VchValue: 1, fkIdCatProceso: 1, fkIdCatVariable: 1, fkVchDesProceso: 1, fkVchDesVariable: 1 }, MaePlanogramas: { DtInicio: 1, DtRegistro: 1, FltMedida: 1, ICombinado: 1, IEliminado: 1, IEnviaSucursal: 1, ITramo: 1, IdDetProceso: 1, IdMaePlanograma: 1, UserId: 1, Username: 1, VchComentarios: 1, VchDesLookUpPlanograma: 1, VchDesPlanograma: 1, VchUrlImgPlanograma: 1, fkIdCatCategoriaPlanograma: 1, fkIdCatTipoMueble: 1, fkIdCatTipoPlanograma: 1, fkVchDesCategoriaPlanograma: 1, fkVchDesTipoMueble: 1, fkVchDesTipoPlanograma: 1 } }, Reportes: { AuditaPlanogramas: { DtRegistro: 1, IdDetProceso: 1, UserId: 1, Username: 1, VchLogProceso: 1, VchUrl: 1, fkIdCatEstatusProceso: 1, fkVchDesEstatusProceso: 1 }, DetReportesCobertura: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatEstatusProceso: 1, IdDetProceso: 1, IdDetReporteCobertura: 1, IdLogReporteCobertura: 1, UserId: 1, Username: 1, VchCodEstatusProceso: 1, VchComentario: 1, VchDesEstatusProceso: 1, VchLogProceso: 1, VchURLReporte: 1 }, LogReportesNecesidad: { DtRegistro: 1, IEliminado: 1, IVigente: 1, IdCatEstatusProceso: 1, IdDetProceso: 1, IdDetReporteNecesidad: 1, IdLogReporteNecesidad: 1, UserId: 1, Username: 1, VchCodEstatusProceso: 1, VchComentario: 1, VchDesEstatusProceso: 1, VchLogProceso: 1, VchURLPlanosSucursalesArticulos: 1, VchURLReporte: 1, fkIdCatCategoriaHyperion: 1, fkIdCatCategoriaPlanograma: 1, fkVchDesCategoriaHyperion: 1, fkVchDesCategoriaPlanograma: 1 }, PlanogramasSucursalesArticulos: { FltMetrosLineales: 1, ICantidad: 1, IEnviaSucursal: 1, IFrente: 1, IMinimo: 1, IRanking: 1, ISecuencia: 1, ISubSecuencia: 1, IdCatArticulo: 1, IdCatCategoriaHyperionArticulo: 1, IdCatCategoriaHyperionPlanograma: 1, IdCatCategoriaPlanograma: 1, IdCatEstadoArticulo: 1, IdCatRegion: 1, IdCatSucursal: 1, IdCatTipoMueble: 1, IdCatTipoPlanograma: 1, IdCatZona: 1, IdMaePlanograma: 1, RowNum: 1, VchCodArticulo: 1, VchCodCategoriaHyperionArticulo: 1, VchCodCategoriaHyperionPlanograma: 1, VchCodCharola: 1, VchCodSucursal: 1, VchDesArticulo: 1, VchDesCategoriaHyperionArticulo: 1, VchDesCategoriaHyperionPlanograma: 1, VchDesCategoriaPlanograma: 1, VchDesEstadoArticulo: 1, VchDesPlanograma: 1, VchDesRegion: 1, VchDesSucursal: 1, VchDesTipoMueble: 1, VchDesTipoPlanograma: 1, VchDesZona: 1 } }, SiGeC: { VwArticulosPlanogramas: { IEnviaSucursal: 1, IFrente: 1, IMinimo: 1, IRanking: 1, ISecuencia: 1, ISubSecuencia: 1, IdCatArticulo: 1, IdCatCategoriaPlanograma: 1, IdMaePlanograma: 1, IdMaePlanogramaArticulo: 1, VchCodArticulo: 1, VchCodCategoriaPlanograma: 1, VchCodCharola: 1, VchDesArticulo: 1, VchDesCategoriaPlanograma: 1, VchDesPlanograma: 1 }, VwArticulosSucursales: { ICountPlanograma: 1, IdCatArticulo: 1, IdCatEstatusFarmacia: 1, IdCatSucursal: 1, VchCodSucursal: 1, VchDesEstatusFarmacia: 1, VchDesSucursal: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ADContactAdmin: 1, ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1, TxtNA: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = SiGeC_1.Texts || (SiGeC_1.Texts = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    ///Clase generica de Grid
    var SiGeCDefaultGrid = /** @class */ (function (_super) {
        __extends(SiGeCDefaultGrid, _super);
        function SiGeCDefaultGrid(container, options, bExportGrid, bAddDefaultFilters) {
            if (bExportGrid === void 0) { bExportGrid = true; }
            if (bAddDefaultFilters === void 0) { bAddDefaultFilters = true; }
            var _this = this;
            _this.ExportGridExcel = bExportGrid;
            _this.AddDefaultFilters = bAddDefaultFilters;
            _this = _super.call(this, container, options) || this;
            return _this;
        }
        SiGeCDefaultGrid.prototype.getModifyPermisison = function () { return null; };
        SiGeCDefaultGrid.prototype.getReadPermisison = function () { return null; };
        SiGeCDefaultGrid.prototype.getQuickFilters = function () {
            var filters = _super.prototype.getQuickFilters.call(this);
            if (!this.AddDefaultFilters) {
                return filters;
            }
            return new SiGeC.DefaultGridFilters().getQuickFilters(filters);
        };
        SiGeCDefaultGrid.prototype.getButtons = function () {
            var buttons = _super.prototype.getButtons.call(this);
            if (this.getModifyPermisison() == null || !Q.Authorization.hasPermission(this.getModifyPermisison())) {
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
            }
            if (this.ExportGridExcel) {
                buttons = this.AddExportExcelButton(buttons);
            }
            return buttons;
        };
        SiGeCDefaultGrid.prototype.AddProcessButton = function (toolButtons, strButtonTitle, strButtonHint, strIcon, strVchCodProceso) {
            var _this = this;
            if (strVchCodProceso != undefined && strVchCodProceso != "") {
                toolButtons.push({
                    title: strButtonTitle,
                    hint: strButtonHint,
                    icon: strIcon,
                    onClick: function () { return _this.CreaProceso(strVchCodProceso); }
                });
            }
            return toolButtons;
        };
        SiGeCDefaultGrid.prototype.AddExportExcelButton = function (toolButtons) {
            var _this = this;
            toolButtons.push(SiGeC.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: function () { return _this.onViewSubmit(); },
                service: this.getService() + '/ListExcel',
                separator: true,
                hint: "Exporta Grid a Excel",
                title: "Exportar Excel"
            }));
            return toolButtons;
        };
        SiGeCDefaultGrid.prototype.CreaProceso = function (strVchCodProceso, bNotifica) {
            if (bNotifica === void 0) { bNotifica = true; }
            Q.serviceRequest("Detalle/DetProcesos/CreaProceso", { VchCodProceso: strVchCodProceso }, function (response) {
                if (bNotifica) {
                    var message = response["strMensaje"];
                    switch (response["strVchCodEstatus"]) {
                        case "Terr": {
                            Q.notifyError(message);
                            break;
                        }
                        case "Terminado": {
                            Q.notifySuccess(message);
                            break;
                        }
                        case undefined: {
                            Q.notifyInfo(message);
                            break;
                        }
                    }
                }
            });
        };
        SiGeCDefaultGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SiGeCDefaultGrid);
        return SiGeCDefaultGrid;
    }(Serenity.EntityGrid));
    SiGeC.SiGeCDefaultGrid = SiGeCDefaultGrid;
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container, options) {
                return _super.call(this, container, options, true, false) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getModifyPermisison = function () { return Administration.LanguageRow.updatePermission; };
            LanguageGrid.prototype.getReadPermisison = function () { return Administration.LanguageRow.readPermission; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    ///Clase encargada de manejar botones en toolbar y habilitar o deshabilitar campos
    ///segun se edite, consulte o agreguen registros
    var SiGeCDefaultDialog = /** @class */ (function (_super) {
        __extends(SiGeCDefaultDialog, _super);
        ///Siempre se oculta boton delete, las bajas son logicas, se deben de actualizar los registros y marcar como eliminados
        function SiGeCDefaultDialog() {
            var _this = _super.call(this) || this;
            _this.stInterval = null;
            _this.bRefresh = false;
            _this.bValidateData = false;
            _this.bEdit = false;
            _this.toolbar.findButton(".delete-button").remove();
            _this.saveAndCloseButton.remove();
            _this.applyChangesButton.removeClass("no-text");
            if (_this.getModifyPermisison() == null || !Q.Authorization.hasPermission(_this.getModifyPermisison())) {
                _this.applyChangesButton.remove();
            }
            return _this;
        }
        SiGeCDefaultDialog.prototype.getModifyPermisison = function () { return null; };
        SiGeCDefaultDialog.prototype.getReadPermisison = function () { return null; };
        ///Se asigna valir de campo iEliminado del registro que se consulta a la variable de clase
        SiGeCDefaultDialog.prototype.dialogOpen = function (asPanel) {
            _super.prototype.dialogOpen.call(this, asPanel);
            if (this.form.IEliminado) {
                this.deleted = this.form.IEliminado.value;
            }
            if (this.bRefresh === true) {
                this.stInterval = window.setInterval(this.reloadDialog, 5000, this);
            }
        };
        ///Si el registro es nuevo, todos los campos estan habilitados y el saveAndCloseButton tiene el texto "Guardar"
        ///Si el registro no es nuevo, los campos se deshabilitan y se cambia texto de boton saveAndCloseButton a "Editar"
        ///Si el registro no es nuevo y se dio click al boton saveAndCloseButton, se habilitan todos los campos y se asigna el texto "Guardar" al boton saveAndCloseButton
        SiGeCDefaultDialog.prototype.updateInterface = function () {
            _super.prototype.updateInterface.call(this);
            var IEliminado;
            var btnTitle;
            if (this.entity.IEliminado) {
                IEliminado = this.entity.IEliminado == 1 ? true : false;
            }
            if (this.isNew()) {
                btnTitle = Q.text('Controls.EntityDialog.SaveButton');
                this.EnableFields(true, true, IEliminado);
                this.bEdit = true;
            }
            else if (!this.bEdit) {
                btnTitle = Q.text('Controls.EntityDialog.Edit');
                this.EnableFields(false, false, IEliminado);
            }
            else {
                btnTitle = Q.text('Controls.EntityDialog.UpdateButton');
                this.EnableFields(true, false, IEliminado);
            }
            this.applyChangesButton.find('.button-inner').text(btnTitle);
        };
        //Se sobreescribe funcion de boton "saveAndCloseButton" para que permita habilitar
        //Consulta > Edicion > Guardar
        SiGeCDefaultDialog.prototype.getToolbarButtons = function () {
            var _this = this;
            var btns = _super.prototype.getToolbarButtons.call(this);
            var btnSave = Q.first(btns, function (x) { return x.cssClass == "apply-changes-button"; });
            var oldSaveClick = btnSave.onClick;
            btnSave.onClick = function (e) {
                var enabled = _this.bEdit;
                if (!enabled) {
                    _this.bEdit = true;
                    _this.updateInterface();
                }
                else {
                    if (_this.bValidateData) {
                        var resValida = _this.ValidateData();
                        if (resValida[0] === 'Error') {
                            Q.notifyError(resValida[1], 'Error');
                            return;
                        }
                        else if (resValida[0] === 'Warning') {
                            Q.warning(resValida[1]);
                        }
                        else if (resValida[0] === 'Confirmation') {
                            _this.confirmBeforeUpdate(resValida[1], oldSaveClick, e);
                            return;
                        }
                    }
                    _this.confirmBeforeDelete(oldSaveClick, e);
                }
            };
            return btns;
        };
        ///Metodo para habilitar o deshabilitar campos de formulario
        SiGeCDefaultDialog.prototype.EnableFields = function (enable, isNew, iEliminado) {
            var fields = [].slice.call(this.element.find(".field"));
            fields.forEach(function (field) {
                var className = $(field).attr('class');
                var enableHelper = false;
                if (!iEliminado) {
                    enableHelper = enable;
                }
                else {
                    if (enable) {
                        if (className.indexOf('IEliminado') != -1) {
                            enableHelper = true;
                        }
                        else {
                            enableHelper = false;
                        }
                    }
                }
                if (isNew) {
                    if (className.search("IEliminado") >= 0) {
                        $(field).hide();
                    }
                }
                if (enableHelper) {
                    if (className.search("fkId") >= 0) {
                        $(field).show();
                    }
                    if (className.search("fkVch") >= 0) {
                        $(field).hide();
                    }
                }
                else {
                    if (className.search("fkId") >= 0) {
                        $(field).hide();
                    }
                    if (className.search("fkVch") >= 0) {
                        $(field).show();
                    }
                }
                if ($(field).find(".editor").attr('class').search("readonly") <= 0) {
                    $(field).find(".editor").prop("disabled", !enableHelper);
                }
                if (enableHelper) {
                    $(field).find(".s-Toolbar").removeAttr('style');
                }
                else {
                    $(field).find(".s-Toolbar").attr("style", "display: none;");
                }
            });
        };
        SiGeCDefaultDialog.prototype.ValidateData = function () {
            var serviceUrl = this.getService();
            var request = this.getSaveEntity();
            var result = new Array;
            Q.serviceCall({
                service: serviceUrl + '/ValidaDatos',
                request: request,
                async: false,
                onSuccess: function (response) {
                    result.push(response["strTipoMensaje"]);
                    result.push(response["strMensaje"]);
                }
            });
            return result;
        };
        ///Metodo para confirmar cuando validacion de datos lo solicita
        SiGeCDefaultDialog.prototype.confirmBeforeUpdate = function (strMensaje, oldEvt, e) {
            var _this = this;
            Q.confirm(strMensaje, function () {
                _this.confirmBeforeDelete(oldEvt, e);
            });
        };
        ///Metodo para confirmar cuando se marca un registro como eliminado y se clic a saveAndCloseButton
        SiGeCDefaultDialog.prototype.confirmBeforeDelete = function (oldEvt, e) {
            var text;
            var deletedNewVal = this.form.IEliminado.value;
            var confirm = false;
            if (!this.deleted && deletedNewVal) {
                text = Q.text("Controls.EntityDialog.confirmBeforeDelete");
                confirm = true;
            }
            else if (this.deleted && !deletedNewVal) {
                text = Q.text("Controls.EntityDialog.confirmBeforeUndelete");
                confirm = true;
            }
            if (confirm) {
                Q.confirm(text, function () {
                    oldEvt(e);
                });
            }
            else {
                oldEvt(e);
            }
        };
        SiGeCDefaultDialog.prototype.onSaveSuccess = function (response) {
            _super.prototype.onSaveSuccess.call(this, response);
            this.entityId = response.EntityId;
            var IEliminado;
            IEliminado = this.entity.IEliminado == 1 ? true : false;
            this.bEdit = false;
            this.EnableFields(true, false, IEliminado);
        };
        //Al cerrar el dialog borramos el interval
        SiGeCDefaultDialog.prototype.onDialogClose = function () {
            try {
                window.clearInterval(this.stInterval);
            }
            catch (error) { }
            _super.prototype.onDialogClose.call(this);
        };
        //Se coloca el reloadById en RefreshDialog debido a que reloadById es protected,
        //no se puede llamar desde el interval
        SiGeCDefaultDialog.prototype.RefreshDialog = function () {
            this.reloadById();
        };
        //Metodo que ejecuta el interval, recibe el dialog a actualizar
        SiGeCDefaultDialog.prototype.reloadDialog = function (dialog) {
            try {
                if (dialog.bEdit != undefined && dialog.bEdit == false) {
                    dialog.RefreshDialog();
                }
            }
            catch (error) { }
        };
        SiGeCDefaultDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], SiGeCDefaultDialog);
        return SiGeCDefaultDialog;
    }(Serenity.EntityDialog));
    SiGeC.SiGeCDefaultDialog = SiGeCDefaultDialog;
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var MaeRestriccionesUsuariosDialog = /** @class */ (function (_super) {
            __extends(MaeRestriccionesUsuariosDialog, _super);
            function MaeRestriccionesUsuariosDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.MaeRestriccionesUsuariosForm(_this.idPrefix);
                _this.bValidateData = true;
                return _this;
            }
            MaeRestriccionesUsuariosDialog.prototype.getFormKey = function () { return Administration.MaeRestriccionesUsuariosForm.formKey; };
            MaeRestriccionesUsuariosDialog.prototype.getIdProperty = function () { return Administration.MaeRestriccionesUsuariosRow.idProperty; };
            MaeRestriccionesUsuariosDialog.prototype.getLocalTextPrefix = function () { return Administration.MaeRestriccionesUsuariosRow.localTextPrefix; };
            MaeRestriccionesUsuariosDialog.prototype.getNameProperty = function () { return Administration.MaeRestriccionesUsuariosRow.nameProperty; };
            MaeRestriccionesUsuariosDialog.prototype.getService = function () { return Administration.MaeRestriccionesUsuariosService.baseUrl; };
            MaeRestriccionesUsuariosDialog.prototype.getModifyPermisison = function () { return Administration.MaeRestriccionesUsuariosRow.updatePermission; };
            MaeRestriccionesUsuariosDialog.prototype.getReadPermisison = function () { return Administration.MaeRestriccionesUsuariosRow.readPermission; };
            MaeRestriccionesUsuariosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MaeRestriccionesUsuariosDialog);
            return MaeRestriccionesUsuariosDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Administration.MaeRestriccionesUsuariosDialog = MaeRestriccionesUsuariosDialog;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var MaeRestriccionesUsuariosGrid = /** @class */ (function (_super) {
            __extends(MaeRestriccionesUsuariosGrid, _super);
            function MaeRestriccionesUsuariosGrid(container, options) {
                return _super.call(this, container, options, true, true) || this;
            }
            MaeRestriccionesUsuariosGrid.prototype.getColumnsKey = function () { return 'Administration.MaeRestriccionesUsuarios'; };
            MaeRestriccionesUsuariosGrid.prototype.getDialogType = function () { return Administration.MaeRestriccionesUsuariosDialog; };
            MaeRestriccionesUsuariosGrid.prototype.getIdProperty = function () { return Administration.MaeRestriccionesUsuariosRow.idProperty; };
            MaeRestriccionesUsuariosGrid.prototype.getLocalTextPrefix = function () { return Administration.MaeRestriccionesUsuariosRow.localTextPrefix; };
            MaeRestriccionesUsuariosGrid.prototype.getService = function () { return Administration.MaeRestriccionesUsuariosService.baseUrl; };
            MaeRestriccionesUsuariosGrid.prototype.getModifyPermisison = function () { return Administration.MaeRestriccionesUsuariosRow.updatePermission; };
            MaeRestriccionesUsuariosGrid.prototype.getReadPermisison = function () { return Administration.MaeRestriccionesUsuariosRow.readPermission; };
            MaeRestriccionesUsuariosGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.splice(Q.indexOf(filters, function (x) { return x.field == "IVigente"; }), 1);
                return filters;
            };
            MaeRestriccionesUsuariosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaeRestriccionesUsuariosGrid);
            return MaeRestriccionesUsuariosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Administration.MaeRestriccionesUsuariosGrid = MaeRestriccionesUsuariosGrid;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container, options) {
                return _super.call(this, container, options, true, false) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getModifyPermisison = function () { return Administration.RoleRow.updatePermission; };
            RoleGrid.prototype.getReadPermisison = function () { return Administration.RoleRow.readPermission; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container, options) {
                var _this = _super.call(this, container, options, true, false) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.toolbar.findButton(".delete-button").remove();
                _this.toolbar.findButton(".apply-changes-button").remove();
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.Username.element.focus();
                if (this.entityId == undefined) {
                    this.element.find(".IEliminado").hide();
                }
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container, options) {
                return _super.call(this, container, options, true, false) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getModifyPermisison = function () { return Administration.UserRow.updatePermission; };
            UserGrid.prototype.getReadPermisison = function () { return Administration.UserRow.readPermission; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = SiGeC.Authorization || (SiGeC.Authorization = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = SiGeC.Administration || (SiGeC.Administration = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasExclusionesDialog = /** @class */ (function (_super) {
            __extends(LogCargasExclusionesDialog, _super);
            function LogCargasExclusionesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Cargas.LogCargasExclusionesForm(_this.idPrefix);
                _this.bValidateData = true;
                return _this;
            }
            LogCargasExclusionesDialog.prototype.getFormKey = function () { return Cargas.LogCargasExclusionesForm.formKey; };
            LogCargasExclusionesDialog.prototype.getIdProperty = function () { return Cargas.LogCargasExclusionesRow.idProperty; };
            LogCargasExclusionesDialog.prototype.getLocalTextPrefix = function () { return Cargas.LogCargasExclusionesRow.localTextPrefix; };
            LogCargasExclusionesDialog.prototype.getNameProperty = function () { return Cargas.LogCargasExclusionesRow.nameProperty; };
            LogCargasExclusionesDialog.prototype.getService = function () { return Cargas.LogCargasExclusionesService.baseUrl; };
            LogCargasExclusionesDialog.prototype.getModifyPermisison = function () { return Cargas.LogCargasExclusionesRow.updatePermission; };
            LogCargasExclusionesDialog.prototype.getReadPermisison = function () { return Cargas.LogCargasExclusionesRow.readPermission; };
            LogCargasExclusionesDialog.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
                this.bRefresh = true;
                //Validamos que solo se puedan subir archivos xlsx
                this.form.VchUrlFile.element.find("input:file").attr("accept", ".xlsx");
                //Validamos que solo el registro vigente se este editando
                if (this.form.IdDetCargaExclusiones.value != null) {
                    if (this.form.IVigente.value == false) {
                        this.toolbar.findButton(".save-and-close-button").remove();
                    }
                }
                if (this.form.IdDetCargaExclusiones.value > 0 && this.form.VchCodEstatusProceso.value === "Terr") {
                    this.form.VchUrlFile.set_readOnly(true);
                }
            };
            LogCargasExclusionesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], LogCargasExclusionesDialog);
            return LogCargasExclusionesDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Cargas.LogCargasExclusionesDialog = LogCargasExclusionesDialog;
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    ///Clase generica encargada de crear los filtros default "Registro", "Vigente", "Eliminado"
    var DefaultGridFilters = /** @class */ (function () {
        function DefaultGridFilters() {
        }
        DefaultGridFilters.prototype.getQuickFilters = function (filters) {
            var enActivos = null;
            var bSoloVigentes = null;
            var dtRegistro = null;
            filters.push({
                field: "DtRegistro",
                type: Serenity.DateTimeEditor,
                title: 'Registro',
                options: { intervalMinutes: 10 },
                element: function (b1) {
                    b1.css("width", "150px");
                    dtRegistro = Serenity.Widget.create({
                        type: Serenity.DateTimeEditor
                    });
                },
                handler: function (h) {
                    h.active = !!h.value;
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["DtRegistro"], '<=', h.value]);
                    }
                }
            });
            filters.push({
                field: "IEliminado",
                type: Serenity.SelectEditor,
                title: 'Estado',
                options: {
                    items: ["Todos", "Eliminados"],
                    emptyOptionText: "Activos"
                },
                element: function (b1) {
                    b1.css("width", "80px");
                    enActivos = Serenity.Widget.create({
                        type: Serenity.SelectEditor,
                    });
                    enActivos.element.change(function (x) { return b1.triggerHandler("change"); });
                },
                handler: function (h) {
                    if (!h.value) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["IEliminado"], '<', 1]);
                    }
                    else if (h.value == "Eliminados") {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["IEliminado"], '=', 1]);
                    }
                }
            });
            filters.push({
                field: "IVigente",
                type: Serenity.BooleanEditor,
                title: 'Solo Vigentes',
                init: function (w) { w.value = true; },
                element: function (b1) {
                    b1.css("width", "80px");
                    bSoloVigentes = Serenity.Widget.create({
                        type: Serenity.BooleanEditor
                    });
                }
            });
            return filters;
        };
        DefaultGridFilters = __decorate([
            Serenity.Decorators.registerClass()
        ], DefaultGridFilters);
        return DefaultGridFilters;
    }());
    SiGeC.DefaultGridFilters = DefaultGridFilters;
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasExclusionesGrid = /** @class */ (function (_super) {
            __extends(LogCargasExclusionesGrid, _super);
            function LogCargasExclusionesGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogCargasExclusionesGrid.prototype.getColumnsKey = function () { return 'Cargas.LogCargasExclusiones'; };
            LogCargasExclusionesGrid.prototype.getDialogType = function () { return Cargas.LogCargasExclusionesDialog; };
            LogCargasExclusionesGrid.prototype.getIdProperty = function () { return Cargas.LogCargasExclusionesRow.idProperty; };
            LogCargasExclusionesGrid.prototype.getLocalTextPrefix = function () { return Cargas.LogCargasExclusionesRow.localTextPrefix; };
            LogCargasExclusionesGrid.prototype.getService = function () { return Cargas.LogCargasExclusionesService.baseUrl; };
            LogCargasExclusionesGrid.prototype.getModifyPermisison = function () { return Cargas.LogCargasExclusionesRow.updatePermission; };
            LogCargasExclusionesGrid.prototype.getReadPermisison = function () { return Cargas.LogCargasExclusionesRow.readPermission; };
            LogCargasExclusionesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: Q.text("Plantilla"),
                    cssClass: 'export-xlsx-button',
                    hint: "Descarga plantilla necesaria para realizar Carga de Exclusiones",
                    onClick: function () {
                        var ServiceEndpoint = _this.getService() + "/GetTemplate";
                        Q.postToService({ service: ServiceEndpoint, request: {}, target: '_blank' });
                    }
                });
                return buttons;
            };
            LogCargasExclusionesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogCargasExclusionesGrid);
            return LogCargasExclusionesGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Cargas.LogCargasExclusionesGrid = LogCargasExclusionesGrid;
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasDialog = /** @class */ (function (_super) {
            __extends(LogCargasPlanogramasDialog, _super);
            function LogCargasPlanogramasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Cargas.LogCargasPlanogramasForm(_this.idPrefix);
                return _this;
            }
            LogCargasPlanogramasDialog.prototype.getFormKey = function () { return Cargas.LogCargasPlanogramasForm.formKey; };
            LogCargasPlanogramasDialog.prototype.getIdProperty = function () { return Cargas.LogCargasPlanogramasRow.idProperty; };
            LogCargasPlanogramasDialog.prototype.getLocalTextPrefix = function () { return Cargas.LogCargasPlanogramasRow.localTextPrefix; };
            LogCargasPlanogramasDialog.prototype.getNameProperty = function () { return Cargas.LogCargasPlanogramasRow.nameProperty; };
            LogCargasPlanogramasDialog.prototype.getService = function () { return Cargas.LogCargasPlanogramasService.baseUrl; };
            LogCargasPlanogramasDialog.prototype.getModifyPermisison = function () { return Cargas.LogCargasPlanogramasRow.updatePermission; };
            LogCargasPlanogramasDialog.prototype.getReadPermisison = function () { return Cargas.LogCargasPlanogramasRow.readPermission; };
            LogCargasPlanogramasDialog.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
                this.bRefresh = true;
                //Validamos que solo se puedan subir archivos xlsx
                this.form.VchUrlFile.element.find("input:file").attr("accept", ".xlsx");
                //Validamos que solo el registro vigente se este editando
                if (this.form.IdDetCargaPlanograma.value != null) {
                    if (this.form.IVigente.value == false) {
                        this.toolbar.findButton(".save-and-close-button").remove();
                    }
                }
                if (this.form.IdDetCargaPlanograma.value > 0 && this.form.VchCodEstatusProceso === "Terr") {
                    this.form.VchUrlFile.set_readOnly(true);
                }
            };
            LogCargasPlanogramasDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], LogCargasPlanogramasDialog);
            return LogCargasPlanogramasDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Cargas.LogCargasPlanogramasDialog = LogCargasPlanogramasDialog;
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasGrid = /** @class */ (function (_super) {
            __extends(LogCargasPlanogramasGrid, _super);
            function LogCargasPlanogramasGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogCargasPlanogramasGrid.prototype.getColumnsKey = function () { return 'Cargas.LogCargasPlanogramas'; };
            LogCargasPlanogramasGrid.prototype.getDialogType = function () { return Cargas.LogCargasPlanogramasDialog; };
            LogCargasPlanogramasGrid.prototype.getIdProperty = function () { return Cargas.LogCargasPlanogramasRow.idProperty; };
            LogCargasPlanogramasGrid.prototype.getLocalTextPrefix = function () { return Cargas.LogCargasPlanogramasRow.localTextPrefix; };
            LogCargasPlanogramasGrid.prototype.getService = function () { return Cargas.LogCargasPlanogramasService.baseUrl; };
            LogCargasPlanogramasGrid.prototype.getModifyPermisison = function () { return Cargas.LogCargasPlanogramasRow.updatePermission; };
            LogCargasPlanogramasGrid.prototype.getReadPermisison = function () { return Cargas.LogCargasPlanogramasRow.readPermission; };
            LogCargasPlanogramasGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: Q.text("Plantilla"),
                    cssClass: 'export-xlsx-button',
                    hint: "Descarga plantilla necesaria para realizar Carga de Planogramas",
                    onClick: function () {
                        var ServiceEndpoint = _this.getService() + "/GetTemplate";
                        Q.postToService({ service: ServiceEndpoint, request: {}, target: '_blank' });
                    }
                });
                return buttons;
            };
            LogCargasPlanogramasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogCargasPlanogramasGrid);
            return LogCargasPlanogramasGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Cargas.LogCargasPlanogramasGrid = LogCargasPlanogramasGrid;
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasArticulosDialog = /** @class */ (function (_super) {
            __extends(LogCargasPlanogramasArticulosDialog, _super);
            function LogCargasPlanogramasArticulosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Cargas.LogCargasPlanogramasArticulosForm(_this.idPrefix);
                return _this;
            }
            LogCargasPlanogramasArticulosDialog.prototype.getFormKey = function () { return Cargas.LogCargasPlanogramasArticulosForm.formKey; };
            LogCargasPlanogramasArticulosDialog.prototype.getIdProperty = function () { return Cargas.LogCargasPlanogramasArticulosRow.idProperty; };
            LogCargasPlanogramasArticulosDialog.prototype.getLocalTextPrefix = function () { return Cargas.LogCargasPlanogramasArticulosRow.localTextPrefix; };
            LogCargasPlanogramasArticulosDialog.prototype.getNameProperty = function () { return Cargas.LogCargasPlanogramasArticulosRow.nameProperty; };
            LogCargasPlanogramasArticulosDialog.prototype.getService = function () { return Cargas.LogCargasPlanogramasArticulosService.baseUrl; };
            LogCargasPlanogramasArticulosDialog.prototype.getModifyPermisison = function () { return Cargas.LogCargasPlanogramasArticulosRow.updatePermission; };
            LogCargasPlanogramasArticulosDialog.prototype.getReadPermisison = function () { return Cargas.LogCargasPlanogramasArticulosRow.readPermission; };
            LogCargasPlanogramasArticulosDialog.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
                this.bRefresh = true;
                //Validamos que solo se puedan subir archivos xlsx
                this.form.VchUrlFile.element.find("input:file").attr("accept", ".xlsx");
                //Validamos que solo el registro vigente se este editando
                if (this.form.IdDetCargaPlanogramaArticulo.value != null) {
                    if (this.form.IVigente.value == false) {
                        this.toolbar.findButton(".save-and-close-button").remove();
                    }
                }
                if (this.form.IdDetCargaPlanogramaArticulo.value > 0 && this.form.VchCodEstatusProceso === "Terr") {
                    this.form.VchUrlFile.set_readOnly(true);
                }
            };
            LogCargasPlanogramasArticulosDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], LogCargasPlanogramasArticulosDialog);
            return LogCargasPlanogramasArticulosDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Cargas.LogCargasPlanogramasArticulosDialog = LogCargasPlanogramasArticulosDialog;
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasArticulosGrid = /** @class */ (function (_super) {
            __extends(LogCargasPlanogramasArticulosGrid, _super);
            function LogCargasPlanogramasArticulosGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogCargasPlanogramasArticulosGrid.prototype.getColumnsKey = function () { return 'Cargas.LogCargasPlanogramasArticulos'; };
            LogCargasPlanogramasArticulosGrid.prototype.getDialogType = function () { return Cargas.LogCargasPlanogramasArticulosDialog; };
            LogCargasPlanogramasArticulosGrid.prototype.getIdProperty = function () { return Cargas.LogCargasPlanogramasArticulosRow.idProperty; };
            LogCargasPlanogramasArticulosGrid.prototype.getLocalTextPrefix = function () { return Cargas.LogCargasPlanogramasArticulosRow.localTextPrefix; };
            LogCargasPlanogramasArticulosGrid.prototype.getService = function () { return Cargas.LogCargasPlanogramasArticulosService.baseUrl; };
            LogCargasPlanogramasArticulosGrid.prototype.getModifyPermisison = function () { return Cargas.LogCargasPlanogramasArticulosRow.updatePermission; };
            LogCargasPlanogramasArticulosGrid.prototype.getReadPermisison = function () { return Cargas.LogCargasPlanogramasArticulosRow.readPermission; };
            LogCargasPlanogramasArticulosGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: Q.text("Plantilla"),
                    cssClass: 'export-xlsx-button',
                    hint: "Descarga plantilla necesaria para realizar Carga de Planogramas",
                    onClick: function () {
                        var ServiceEndpoint = _this.getService() + "/GetTemplate";
                        Q.postToService({ service: ServiceEndpoint, request: {}, target: '_blank' });
                    }
                });
                return buttons;
            };
            LogCargasPlanogramasArticulosGrid = __decorate([
                Serenity.Decorators.registerClass() //3957
            ], LogCargasPlanogramasArticulosGrid);
            return LogCargasPlanogramasArticulosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Cargas.LogCargasPlanogramasArticulosGrid = LogCargasPlanogramasArticulosGrid;
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasSucursalesDialog = /** @class */ (function (_super) {
            __extends(LogCargasPlanogramasSucursalesDialog, _super);
            function LogCargasPlanogramasSucursalesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Cargas.LogCargasPlanogramasSucursalesForm(_this.idPrefix);
                return _this;
            }
            LogCargasPlanogramasSucursalesDialog.prototype.getFormKey = function () { return Cargas.LogCargasPlanogramasSucursalesForm.formKey; };
            LogCargasPlanogramasSucursalesDialog.prototype.getIdProperty = function () { return Cargas.LogCargasPlanogramasSucursalesRow.idProperty; };
            LogCargasPlanogramasSucursalesDialog.prototype.getLocalTextPrefix = function () { return Cargas.LogCargasPlanogramasSucursalesRow.localTextPrefix; };
            LogCargasPlanogramasSucursalesDialog.prototype.getNameProperty = function () { return Cargas.LogCargasPlanogramasSucursalesRow.nameProperty; };
            LogCargasPlanogramasSucursalesDialog.prototype.getService = function () { return Cargas.LogCargasPlanogramasSucursalesService.baseUrl; };
            LogCargasPlanogramasSucursalesDialog.prototype.getModifyPermisison = function () { return Cargas.LogCargasPlanogramasSucursalesRow.updatePermission; };
            LogCargasPlanogramasSucursalesDialog.prototype.getReadPermisison = function () { return Cargas.LogCargasPlanogramasSucursalesRow.readPermission; };
            LogCargasPlanogramasSucursalesDialog.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
                this.bRefresh = true;
                //Validamos que solo se puedan subir archivos xlsx
                this.form.VchUrlFile.element.find("input:file").attr("accept", ".xlsx");
                //Validamos que solo el registro vigente se este editando
                if (this.form.IdDetCargaPlanogramaSucursal.value != null) {
                    if (this.form.IVigente.value == false) {
                        this.toolbar.findButton(".save-and-close-button").remove();
                    }
                }
                if (this.form.IdDetCargaPlanogramaSucursal.value > 0 && this.form.VchCodEstatusProceso === "Terr") {
                    this.form.VchUrlFile.set_readOnly(true);
                }
            };
            LogCargasPlanogramasSucursalesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], LogCargasPlanogramasSucursalesDialog);
            return LogCargasPlanogramasSucursalesDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Cargas.LogCargasPlanogramasSucursalesDialog = LogCargasPlanogramasSucursalesDialog;
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Cargas;
    (function (Cargas) {
        var LogCargasPlanogramasSucursalesGrid = /** @class */ (function (_super) {
            __extends(LogCargasPlanogramasSucursalesGrid, _super);
            function LogCargasPlanogramasSucursalesGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogCargasPlanogramasSucursalesGrid.prototype.getColumnsKey = function () { return 'Cargas.LogCargasPlanogramasSucursales'; };
            LogCargasPlanogramasSucursalesGrid.prototype.getDialogType = function () { return Cargas.LogCargasPlanogramasSucursalesDialog; };
            LogCargasPlanogramasSucursalesGrid.prototype.getIdProperty = function () { return Cargas.LogCargasPlanogramasSucursalesRow.idProperty; };
            LogCargasPlanogramasSucursalesGrid.prototype.getLocalTextPrefix = function () { return Cargas.LogCargasPlanogramasSucursalesRow.localTextPrefix; };
            LogCargasPlanogramasSucursalesGrid.prototype.getService = function () { return Cargas.LogCargasPlanogramasSucursalesService.baseUrl; };
            LogCargasPlanogramasSucursalesGrid.prototype.getModifyPermisison = function () { return Cargas.LogCargasPlanogramasSucursalesRow.updatePermission; };
            LogCargasPlanogramasSucursalesGrid.prototype.getReadPermisison = function () { return Cargas.LogCargasPlanogramasSucursalesRow.readPermission; };
            LogCargasPlanogramasSucursalesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: Q.text("Plantilla"),
                    cssClass: 'export-xlsx-button',
                    hint: "Descarga plantilla necesaria para realizar Carga de Planogras a Sucursales",
                    onClick: function () {
                        var ServiceEndpoint = _this.getService() + "/GetTemplate";
                        Q.postToService({ service: ServiceEndpoint, request: {}, target: '_blank' });
                    }
                });
                return buttons;
            };
            LogCargasPlanogramasSucursalesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogCargasPlanogramasSucursalesGrid);
            return LogCargasPlanogramasSucursalesGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Cargas.LogCargasPlanogramasSucursalesGrid = LogCargasPlanogramasSucursalesGrid;
    })(Cargas = SiGeC.Cargas || (SiGeC.Cargas = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatTablasRestriccionesUsuariosDialog = /** @class */ (function (_super) {
            __extends(CatTablasRestriccionesUsuariosDialog, _super);
            function CatTablasRestriccionesUsuariosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.CatTablasRestriccionesUsuariosForm(_this.idPrefix);
                return _this;
            }
            CatTablasRestriccionesUsuariosDialog.prototype.getFormKey = function () { return Catalogos.CatTablasRestriccionesUsuariosForm.formKey; };
            CatTablasRestriccionesUsuariosDialog.prototype.getIdProperty = function () { return Catalogos.CatTablasRestriccionesUsuariosRow.idProperty; };
            CatTablasRestriccionesUsuariosDialog.prototype.getLocalTextPrefix = function () { return Catalogos.CatTablasRestriccionesUsuariosRow.localTextPrefix; };
            CatTablasRestriccionesUsuariosDialog.prototype.getNameProperty = function () { return Catalogos.CatTablasRestriccionesUsuariosRow.nameProperty; };
            CatTablasRestriccionesUsuariosDialog.prototype.getService = function () { return Catalogos.CatTablasRestriccionesUsuariosService.baseUrl; };
            CatTablasRestriccionesUsuariosDialog.prototype.getModifyPermisison = function () { return Catalogos.CatTablasRestriccionesUsuariosRow.updatePermission; };
            CatTablasRestriccionesUsuariosDialog.prototype.getReadPermisison = function () { return Catalogos.CatTablasRestriccionesUsuariosRow.readPermission; };
            CatTablasRestriccionesUsuariosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CatTablasRestriccionesUsuariosDialog);
            return CatTablasRestriccionesUsuariosDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.CatTablasRestriccionesUsuariosDialog = CatTablasRestriccionesUsuariosDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var CatTablasRestriccionesUsuariosGrid = /** @class */ (function (_super) {
            __extends(CatTablasRestriccionesUsuariosGrid, _super);
            function CatTablasRestriccionesUsuariosGrid(container, options) {
                return _super.call(this, container, options, false, false) || this;
            }
            CatTablasRestriccionesUsuariosGrid.prototype.getColumnsKey = function () { return 'Catalogos.CatTablasRestriccionesUsuarios'; };
            CatTablasRestriccionesUsuariosGrid.prototype.getDialogType = function () { return Catalogos.CatTablasRestriccionesUsuariosDialog; };
            CatTablasRestriccionesUsuariosGrid.prototype.getIdProperty = function () { return Catalogos.CatTablasRestriccionesUsuariosRow.idProperty; };
            CatTablasRestriccionesUsuariosGrid.prototype.getLocalTextPrefix = function () { return Catalogos.CatTablasRestriccionesUsuariosRow.localTextPrefix; };
            CatTablasRestriccionesUsuariosGrid.prototype.getService = function () { return Catalogos.CatTablasRestriccionesUsuariosService.baseUrl; };
            CatTablasRestriccionesUsuariosGrid.prototype.getModifyPermisison = function () { return Catalogos.CatTablasRestriccionesUsuariosRow.updatePermission; };
            CatTablasRestriccionesUsuariosGrid.prototype.getReadPermisison = function () { return Catalogos.CatTablasRestriccionesUsuariosRow.readPermission; };
            CatTablasRestriccionesUsuariosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CatTablasRestriccionesUsuariosGrid);
            return CatTablasRestriccionesUsuariosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.CatTablasRestriccionesUsuariosGrid = CatTablasRestriccionesUsuariosGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogArticulosDialog = /** @class */ (function (_super) {
            __extends(LogArticulosDialog, _super);
            function LogArticulosDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Catalogos.LogArticulosForm(_this.idPrefix);
                _this.ArticulosPlanogramasGrid = new Catalogos.VwArticulosPlanogramasGrid(_this.byId("ArticulosPlanogramasGrid"));
                _this.ArticulosSucursalesGrid = new Catalogos.VwArticulosSucursalesGrid(_this.byId("ArticulosSucursalesGrid"));
                //Se ejecuta refresh de cada grid al cambiar de tab, arrange no funciona
                //https://github.com/volkanceylan/Serenity/issues/1849
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.refreshGrids(_this.ArticulosPlanogramasGrid, _this.ArticulosSucursalesGrid);
                });
                return _this;
            }
            LogArticulosDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodArticulo.element.focus();
            };
            LogArticulosDialog.prototype.getFormKey = function () { return Catalogos.LogArticulosForm.formKey; };
            LogArticulosDialog.prototype.getIdProperty = function () { return Catalogos.LogArticulosRow.idProperty; };
            LogArticulosDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogArticulosRow.localTextPrefix; };
            LogArticulosDialog.prototype.getNameProperty = function () { return Catalogos.LogArticulosRow.nameProperty; };
            LogArticulosDialog.prototype.getService = function () { return Catalogos.LogArticulosService.baseUrl; };
            LogArticulosDialog.prototype.getModifyPermisison = function () { return Catalogos.LogArticulosRow.updatePermission; };
            LogArticulosDialog.prototype.getReadPermisison = function () { return Catalogos.LogArticulosRow.readPermission; };
            LogArticulosDialog.prototype.refreshGrids = function (g1, g2) {
                g1.refresh();
                g2.refresh();
            };
            LogArticulosDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                this.ArticulosPlanogramasGrid.element.find('.add-button').show();
                this.ArticulosPlanogramasGrid.IdCatArticulo = this.entity.IdCatArticulo;
                this.ArticulosSucursalesGrid.element.find('.add-button').show();
                this.ArticulosSucursalesGrid.IdCatArticulo = this.entity.IdCatArticulo;
            };
            LogArticulosDialog.prototype.updateTitle = function () {
                this.dialogTitle = this.entity.VchCodArticulo + ' - ' + this.entity.VchDesArticulo;
            };
            LogArticulosDialog.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            LogArticulosDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], LogArticulosDialog);
            return LogArticulosDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogArticulosDialog = LogArticulosDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogArticulosGrid = /** @class */ (function (_super) {
            __extends(LogArticulosGrid, _super);
            function LogArticulosGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogArticulosGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogArticulos'; };
            LogArticulosGrid.prototype.getDialogType = function () { return Catalogos.LogArticulosDialog; };
            LogArticulosGrid.prototype.getIdProperty = function () { return Catalogos.LogArticulosRow.idProperty; };
            LogArticulosGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogArticulosRow.localTextPrefix; };
            LogArticulosGrid.prototype.getService = function () { return Catalogos.LogArticulosService.baseUrl; };
            LogArticulosGrid.prototype.getModifyPermisison = function () { return Catalogos.LogArticulosRow.updatePermission; };
            LogArticulosGrid.prototype.getReadPermisison = function () { return Catalogos.LogArticulosRow.readPermission; };
            LogArticulosGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    buttons = _super.prototype.AddProcessButton.call(this, buttons, "Replica", "Replica Articulos", "fa fa-download", "RepArticulos");
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            LogArticulosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogArticulosGrid);
            return LogArticulosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogArticulosGrid = LogArticulosGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var VwArticulosPlanogramasDialog = /** @class */ (function (_super) {
            __extends(VwArticulosPlanogramasDialog, _super);
            function VwArticulosPlanogramasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.VwArticulosPlanogramasForm(_this.idPrefix);
                return _this;
            }
            VwArticulosPlanogramasDialog.prototype.getFormKey = function () { return Catalogos.VwArticulosPlanogramasForm.formKey; };
            VwArticulosPlanogramasDialog.prototype.getLocalTextPrefix = function () { return Catalogos.VwArticulosPlanogramasRow.localTextPrefix; };
            VwArticulosPlanogramasDialog.prototype.getService = function () { return Catalogos.VwArticulosPlanogramasService.baseUrl; };
            VwArticulosPlanogramasDialog.prototype.getDeletePermission = function () { return Catalogos.VwArticulosPlanogramasRow.deletePermission; };
            VwArticulosPlanogramasDialog.prototype.getInsertPermission = function () { return Catalogos.VwArticulosPlanogramasRow.insertPermission; };
            VwArticulosPlanogramasDialog.prototype.getUpdatePermission = function () { return Catalogos.VwArticulosPlanogramasRow.updatePermission; };
            VwArticulosPlanogramasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VwArticulosPlanogramasDialog);
            return VwArticulosPlanogramasDialog;
        }(Serenity.EntityDialog));
        Catalogos.VwArticulosPlanogramasDialog = VwArticulosPlanogramasDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var VwArticulosPlanogramasGrid = /** @class */ (function (_super) {
            __extends(VwArticulosPlanogramasGrid, _super);
            function VwArticulosPlanogramasGrid(container, options) {
                return _super.call(this, container, options, true, false) || this;
            }
            VwArticulosPlanogramasGrid.prototype.getColumnsKey = function () { return 'SiGeC.VwArticulosPlanogramas'; };
            VwArticulosPlanogramasGrid.prototype.getIdProperty = function () { return Catalogos.VwArticulosPlanogramasRow.idProperty; };
            VwArticulosPlanogramasGrid.prototype.getDialogType = function () { return Catalogos.VwArticulosPlanogramasDialog; };
            VwArticulosPlanogramasGrid.prototype.getLocalTextPrefix = function () { return Catalogos.VwArticulosPlanogramasRow.localTextPrefix; };
            VwArticulosPlanogramasGrid.prototype.getService = function () { return Catalogos.VwArticulosPlanogramasService.baseUrl; };
            VwArticulosPlanogramasGrid.prototype.getModifyPermisison = function () { return Catalogos.VwArticulosPlanogramasRow.updatePermission; };
            VwArticulosPlanogramasGrid.prototype.getReadPermisison = function () { return Catalogos.VwArticulosPlanogramasRow.readPermission; };
            VwArticulosPlanogramasGrid.prototype.getInitialTitle = function () {
                return null;
            };
            VwArticulosPlanogramasGrid.prototype.getGridCanLoad = function () {
                return this.IdCatArticulo != null;
            };
            VwArticulosPlanogramasGrid.prototype.getQuickFilters = function () {
                //Quitamos el filtro de MaePlanograma, provoca que Grid no filtre con el setEquiality del setter
                var filters = _super.prototype.getQuickFilters.call(this);
                var filterIndex = filters.findIndex(function (v) { return v.field == "IdCatArticulo"; });
                if (filterIndex !== -1) {
                    filters.splice(filterIndex, 1);
                }
                return filters;
            };
            Object.defineProperty(VwArticulosPlanogramasGrid.prototype, "IdCatArticulo", {
                get: function () {
                    return this._IdCatArticulo;
                },
                set: function (value) {
                    if (this._IdCatArticulo != value) {
                        this._IdCatArticulo = value;
                        this.setEquality("IdCatArticulo" /* IdCatArticulo */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            VwArticulosPlanogramasGrid.prototype.layout = function () {
                try {
                    _super.prototype.layout.call(this);
                }
                catch (error) { }
            };
            VwArticulosPlanogramasGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            VwArticulosPlanogramasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VwArticulosPlanogramasGrid);
            return VwArticulosPlanogramasGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.VwArticulosPlanogramasGrid = VwArticulosPlanogramasGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var VwArticulosSucursalesDialog = /** @class */ (function (_super) {
            __extends(VwArticulosSucursalesDialog, _super);
            function VwArticulosSucursalesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.VwArticulosSucursalesForm(_this.idPrefix);
                return _this;
            }
            VwArticulosSucursalesDialog.prototype.getFormKey = function () { return Catalogos.VwArticulosSucursalesForm.formKey; };
            VwArticulosSucursalesDialog.prototype.getIdProperty = function () { return Catalogos.VwArticulosSucursalesRow.idProperty; };
            VwArticulosSucursalesDialog.prototype.getLocalTextPrefix = function () { return Catalogos.VwArticulosSucursalesRow.localTextPrefix; };
            VwArticulosSucursalesDialog.prototype.getNameProperty = function () { return Catalogos.VwArticulosSucursalesRow.nameProperty; };
            VwArticulosSucursalesDialog.prototype.getService = function () { return Catalogos.VwArticulosSucursalesService.baseUrl; };
            VwArticulosSucursalesDialog.prototype.getDeletePermission = function () { return Catalogos.VwArticulosSucursalesRow.deletePermission; };
            VwArticulosSucursalesDialog.prototype.getInsertPermission = function () { return Catalogos.VwArticulosSucursalesRow.insertPermission; };
            VwArticulosSucursalesDialog.prototype.getUpdatePermission = function () { return Catalogos.VwArticulosSucursalesRow.updatePermission; };
            VwArticulosSucursalesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VwArticulosSucursalesDialog);
            return VwArticulosSucursalesDialog;
        }(Serenity.EntityDialog));
        Catalogos.VwArticulosSucursalesDialog = VwArticulosSucursalesDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var VwArticulosSucursalesGrid = /** @class */ (function (_super) {
            __extends(VwArticulosSucursalesGrid, _super);
            function VwArticulosSucursalesGrid(container, options) {
                return _super.call(this, container, options, true, false) || this;
            }
            VwArticulosSucursalesGrid.prototype.getColumnsKey = function () { return 'SiGeC.VwArticulosSucursales'; };
            VwArticulosSucursalesGrid.prototype.getDialogType = function () { return Catalogos.VwArticulosSucursalesDialog; };
            VwArticulosSucursalesGrid.prototype.getIdProperty = function () { return Catalogos.VwArticulosSucursalesRow.idProperty; };
            VwArticulosSucursalesGrid.prototype.getLocalTextPrefix = function () { return Catalogos.VwArticulosSucursalesRow.localTextPrefix; };
            VwArticulosSucursalesGrid.prototype.getService = function () { return Catalogos.VwArticulosSucursalesService.baseUrl; };
            VwArticulosSucursalesGrid.prototype.getModifyPermisison = function () { return Catalogos.VwArticulosSucursalesRow.updatePermission; };
            VwArticulosSucursalesGrid.prototype.getReadPermisison = function () { return Catalogos.VwArticulosSucursalesRow.readPermission; };
            VwArticulosSucursalesGrid.prototype.getInitialTitle = function () {
                return null;
            };
            VwArticulosSucursalesGrid.prototype.getGridCanLoad = function () {
                return this.IdCatArticulo != null;
            };
            VwArticulosSucursalesGrid.prototype.getQuickFilters = function () {
                //Quitamos el filtro de MaePlanograma, provoca que Grid no filtre con el setEquiality del setter
                var filters = _super.prototype.getQuickFilters.call(this);
                var filterIndex = filters.findIndex(function (v) { return v.field == "IdCatArticulo"; });
                if (filterIndex !== -1) {
                    filters.splice(filterIndex, 1);
                }
                return filters;
            };
            Object.defineProperty(VwArticulosSucursalesGrid.prototype, "IdCatArticulo", {
                get: function () {
                    return this._IdCatArticulo;
                },
                set: function (value) {
                    if (this._IdCatArticulo != value) {
                        this._IdCatArticulo = value;
                        this.setEquality("IdCatArticulo" /* IdCatArticulo */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            VwArticulosSucursalesGrid.prototype.layout = function () {
                try {
                    _super.prototype.layout.call(this);
                }
                catch (error) { }
            };
            VwArticulosSucursalesGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            VwArticulosSucursalesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VwArticulosSucursalesGrid);
            return VwArticulosSucursalesGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.VwArticulosSucursalesGrid = VwArticulosSucursalesGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCategoriasHyperionDialog = /** @class */ (function (_super) {
            __extends(LogCategoriasHyperionDialog, _super);
            function LogCategoriasHyperionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogCategoriasHyperionForm(_this.idPrefix);
                return _this;
            }
            LogCategoriasHyperionDialog.prototype.getFormKey = function () { return Catalogos.LogCategoriasHyperionForm.formKey; };
            LogCategoriasHyperionDialog.prototype.getIdProperty = function () { return Catalogos.LogCategoriasHyperionRow.idProperty; };
            LogCategoriasHyperionDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogCategoriasHyperionRow.localTextPrefix; };
            LogCategoriasHyperionDialog.prototype.getNameProperty = function () { return Catalogos.LogCategoriasHyperionRow.nameProperty; };
            LogCategoriasHyperionDialog.prototype.getService = function () { return Catalogos.LogCategoriasHyperionService.baseUrl; };
            LogCategoriasHyperionDialog.prototype.getModifyPermisison = function () { return Catalogos.LogCategoriasHyperionRow.updatePermission; };
            LogCategoriasHyperionDialog.prototype.getReadPermisison = function () { return Catalogos.LogCategoriasHyperionRow.readPermission; };
            LogCategoriasHyperionDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodCategoriaHyperion.element.focus();
            };
            LogCategoriasHyperionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogCategoriasHyperionDialog);
            return LogCategoriasHyperionDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogCategoriasHyperionDialog = LogCategoriasHyperionDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCategoriasHyperionGrid = /** @class */ (function (_super) {
            __extends(LogCategoriasHyperionGrid, _super);
            function LogCategoriasHyperionGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogCategoriasHyperionGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogCategoriasHyperion'; };
            LogCategoriasHyperionGrid.prototype.getDialogType = function () { return Catalogos.LogCategoriasHyperionDialog; };
            LogCategoriasHyperionGrid.prototype.getIdProperty = function () { return Catalogos.LogCategoriasHyperionRow.idProperty; };
            LogCategoriasHyperionGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogCategoriasHyperionRow.localTextPrefix; };
            LogCategoriasHyperionGrid.prototype.getService = function () { return Catalogos.LogCategoriasHyperionService.baseUrl; };
            LogCategoriasHyperionGrid.prototype.getModifyPermisison = function () { return Catalogos.LogCategoriasHyperionRow.updatePermission; };
            LogCategoriasHyperionGrid.prototype.getReadPermisison = function () { return Catalogos.LogCategoriasHyperionRow.readPermission; };
            LogCategoriasHyperionGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    buttons = _super.prototype.AddProcessButton.call(this, buttons, "Replica", "Replica Categorias Hyperion", "fa fa-download", "RepCatArt");
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            LogCategoriasHyperionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogCategoriasHyperionGrid);
            return LogCategoriasHyperionGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogCategoriasHyperionGrid = LogCategoriasHyperionGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCategoriasPlanogramasDialog = /** @class */ (function (_super) {
            __extends(LogCategoriasPlanogramasDialog, _super);
            function LogCategoriasPlanogramasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogCategoriasPlanogramasForm(_this.idPrefix);
                return _this;
            }
            LogCategoriasPlanogramasDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodCategoriaPlanograma.element.focus();
            };
            LogCategoriasPlanogramasDialog.prototype.getFormKey = function () { return Catalogos.LogCategoriasPlanogramasForm.formKey; };
            LogCategoriasPlanogramasDialog.prototype.getIdProperty = function () { return Catalogos.LogCategoriasPlanogramasRow.idProperty; };
            LogCategoriasPlanogramasDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogCategoriasPlanogramasRow.localTextPrefix; };
            LogCategoriasPlanogramasDialog.prototype.getNameProperty = function () { return Catalogos.LogCategoriasPlanogramasRow.nameProperty; };
            LogCategoriasPlanogramasDialog.prototype.getService = function () { return Catalogos.LogCategoriasPlanogramasService.baseUrl; };
            LogCategoriasPlanogramasDialog.prototype.getModifyPermisison = function () { return Catalogos.LogCategoriasPlanogramasRow.updatePermission; };
            LogCategoriasPlanogramasDialog.prototype.getReadPermisison = function () { return Catalogos.LogCategoriasPlanogramasRow.readPermission; };
            LogCategoriasPlanogramasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogCategoriasPlanogramasDialog);
            return LogCategoriasPlanogramasDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogCategoriasPlanogramasDialog = LogCategoriasPlanogramasDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCategoriasPlanogramasGrid = /** @class */ (function (_super) {
            __extends(LogCategoriasPlanogramasGrid, _super);
            function LogCategoriasPlanogramasGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogCategoriasPlanogramasGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogCategoriasPlanogramas'; };
            LogCategoriasPlanogramasGrid.prototype.getDialogType = function () { return Catalogos.LogCategoriasPlanogramasDialog; };
            LogCategoriasPlanogramasGrid.prototype.getIdProperty = function () { return Catalogos.LogCategoriasPlanogramasRow.idProperty; };
            LogCategoriasPlanogramasGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogCategoriasPlanogramasRow.localTextPrefix; };
            LogCategoriasPlanogramasGrid.prototype.getService = function () { return Catalogos.LogCategoriasPlanogramasService.baseUrl; };
            LogCategoriasPlanogramasGrid.prototype.getModifyPermisison = function () { return Catalogos.LogCategoriasPlanogramasRow.updatePermission; };
            LogCategoriasPlanogramasGrid.prototype.getReadPermisison = function () { return Catalogos.LogCategoriasPlanogramasRow.readPermission; };
            LogCategoriasPlanogramasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogCategoriasPlanogramasGrid);
            return LogCategoriasPlanogramasGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogCategoriasPlanogramasGrid = LogCategoriasPlanogramasGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCiudadesDialog = /** @class */ (function (_super) {
            __extends(LogCiudadesDialog, _super);
            function LogCiudadesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogCiudadesForm(_this.idPrefix);
                return _this;
            }
            LogCiudadesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodCiudad.element.focus();
            };
            LogCiudadesDialog.prototype.getFormKey = function () { return Catalogos.LogCiudadesForm.formKey; };
            LogCiudadesDialog.prototype.getIdProperty = function () { return Catalogos.LogCiudadesRow.idProperty; };
            LogCiudadesDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogCiudadesRow.localTextPrefix; };
            LogCiudadesDialog.prototype.getNameProperty = function () { return Catalogos.LogCiudadesRow.nameProperty; };
            LogCiudadesDialog.prototype.getService = function () { return Catalogos.LogCiudadesService.baseUrl; };
            LogCiudadesDialog.prototype.getModifyPermisison = function () { return Catalogos.LogCiudadesRow.updatePermission; };
            LogCiudadesDialog.prototype.getReadPermisison = function () { return Catalogos.LogCiudadesRow.readPermission; };
            LogCiudadesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogCiudadesDialog);
            return LogCiudadesDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogCiudadesDialog = LogCiudadesDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogCiudadesGrid = /** @class */ (function (_super) {
            __extends(LogCiudadesGrid, _super);
            function LogCiudadesGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogCiudadesGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogCiudades'; };
            LogCiudadesGrid.prototype.getDialogType = function () { return Catalogos.LogCiudadesDialog; };
            LogCiudadesGrid.prototype.getIdProperty = function () { return Catalogos.LogCiudadesRow.idProperty; };
            LogCiudadesGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogCiudadesRow.localTextPrefix; };
            LogCiudadesGrid.prototype.getService = function () { return Catalogos.LogCiudadesService.baseUrl; };
            LogCiudadesGrid.prototype.getModifyPermisison = function () { return Catalogos.LogCiudadesRow.updatePermission; };
            LogCiudadesGrid.prototype.getReadPermisison = function () { return Catalogos.LogCiudadesRow.readPermission; };
            LogCiudadesGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    buttons = _super.prototype.AddProcessButton.call(this, buttons, "Replica Ciudades", "Replica Ciudades de Interprete a SiGeC", "fa fa-download", "RepCiudades");
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            LogCiudadesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogCiudadesGrid);
            return LogCiudadesGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogCiudadesGrid = LogCiudadesGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogDivisionesPlanogramasDialog = /** @class */ (function (_super) {
            __extends(LogDivisionesPlanogramasDialog, _super);
            function LogDivisionesPlanogramasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogDivisionesPlanogramasForm(_this.idPrefix);
                return _this;
            }
            LogDivisionesPlanogramasDialog.prototype.getFormKey = function () { return Catalogos.LogDivisionesPlanogramasForm.formKey; };
            LogDivisionesPlanogramasDialog.prototype.getIdProperty = function () { return Catalogos.LogDivisionesPlanogramasRow.idProperty; };
            LogDivisionesPlanogramasDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogDivisionesPlanogramasRow.localTextPrefix; };
            LogDivisionesPlanogramasDialog.prototype.getNameProperty = function () { return Catalogos.LogDivisionesPlanogramasRow.nameProperty; };
            LogDivisionesPlanogramasDialog.prototype.getService = function () { return Catalogos.LogDivisionesPlanogramasService.baseUrl; };
            LogDivisionesPlanogramasDialog.prototype.getModifyPermisison = function () { return Catalogos.LogDivisionesPlanogramasRow.updatePermission; };
            LogDivisionesPlanogramasDialog.prototype.getReadPermisison = function () { return Catalogos.LogDivisionesPlanogramasRow.readPermission; };
            LogDivisionesPlanogramasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogDivisionesPlanogramasDialog);
            return LogDivisionesPlanogramasDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogDivisionesPlanogramasDialog = LogDivisionesPlanogramasDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogDivisionesPlanogramasGrid = /** @class */ (function (_super) {
            __extends(LogDivisionesPlanogramasGrid, _super);
            function LogDivisionesPlanogramasGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogDivisionesPlanogramasGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogDivisionesPlanogramas'; };
            LogDivisionesPlanogramasGrid.prototype.getDialogType = function () { return Catalogos.LogDivisionesPlanogramasDialog; };
            LogDivisionesPlanogramasGrid.prototype.getIdProperty = function () { return Catalogos.LogDivisionesPlanogramasRow.idProperty; };
            LogDivisionesPlanogramasGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogDivisionesPlanogramasRow.localTextPrefix; };
            LogDivisionesPlanogramasGrid.prototype.getService = function () { return Catalogos.LogDivisionesPlanogramasService.baseUrl; };
            LogDivisionesPlanogramasGrid.prototype.getModifyPermisison = function () { return Catalogos.LogDivisionesPlanogramasRow.updatePermission; };
            LogDivisionesPlanogramasGrid.prototype.getReadPermisison = function () { return Catalogos.LogDivisionesPlanogramasRow.readPermission; };
            LogDivisionesPlanogramasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogDivisionesPlanogramasGrid);
            return LogDivisionesPlanogramasGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogDivisionesPlanogramasGrid = LogDivisionesPlanogramasGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosDialog = /** @class */ (function (_super) {
            __extends(LogEstadosDialog, _super);
            function LogEstadosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogEstadosForm(_this.idPrefix);
                return _this;
            }
            LogEstadosDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodEstado.element.focus();
            };
            LogEstadosDialog.prototype.getFormKey = function () { return Catalogos.LogEstadosForm.formKey; };
            LogEstadosDialog.prototype.getIdProperty = function () { return Catalogos.LogEstadosRow.idProperty; };
            LogEstadosDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogEstadosRow.localTextPrefix; };
            LogEstadosDialog.prototype.getNameProperty = function () { return Catalogos.LogEstadosRow.nameProperty; };
            LogEstadosDialog.prototype.getService = function () { return Catalogos.LogEstadosService.baseUrl; };
            LogEstadosDialog.prototype.getModifyPermisison = function () { return Catalogos.LogEstadosRow.updatePermission; };
            LogEstadosDialog.prototype.getReadPermisison = function () { return Catalogos.LogEstadosRow.readPermission; };
            LogEstadosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogEstadosDialog);
            return LogEstadosDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogEstadosDialog = LogEstadosDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosGrid = /** @class */ (function (_super) {
            __extends(LogEstadosGrid, _super);
            function LogEstadosGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogEstadosGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogEstados'; };
            LogEstadosGrid.prototype.getDialogType = function () { return Catalogos.LogEstadosDialog; };
            LogEstadosGrid.prototype.getIdProperty = function () { return Catalogos.LogEstadosRow.idProperty; };
            LogEstadosGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogEstadosRow.localTextPrefix; };
            LogEstadosGrid.prototype.getService = function () { return Catalogos.LogEstadosService.baseUrl; };
            LogEstadosGrid.prototype.getModifyPermisison = function () { return Catalogos.LogEstadosRow.updatePermission; };
            LogEstadosGrid.prototype.getReadPermisison = function () { return Catalogos.LogEstadosRow.readPermission; };
            LogEstadosGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    buttons = _super.prototype.AddProcessButton.call(this, buttons, "Replica Estados", "Replica Estados de Interprete a SiGeC", "fa fa-download", "RepEstados");
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            LogEstadosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogEstadosGrid);
            return LogEstadosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogEstadosGrid = LogEstadosGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosArticulosDialog = /** @class */ (function (_super) {
            __extends(LogEstadosArticulosDialog, _super);
            function LogEstadosArticulosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogEstadosArticulosForm(_this.idPrefix);
                return _this;
            }
            LogEstadosArticulosDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodEstadoArticulo.element.focus();
            };
            LogEstadosArticulosDialog.prototype.getFormKey = function () { return Catalogos.LogEstadosArticulosForm.formKey; };
            LogEstadosArticulosDialog.prototype.getIdProperty = function () { return Catalogos.LogEstadosArticulosRow.idProperty; };
            LogEstadosArticulosDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogEstadosArticulosRow.localTextPrefix; };
            LogEstadosArticulosDialog.prototype.getNameProperty = function () { return Catalogos.LogEstadosArticulosRow.nameProperty; };
            LogEstadosArticulosDialog.prototype.getService = function () { return Catalogos.LogEstadosArticulosService.baseUrl; };
            LogEstadosArticulosDialog.prototype.getModifyPermisison = function () { return Catalogos.LogEstadosArticulosRow.updatePermission; };
            LogEstadosArticulosDialog.prototype.getReadPermisison = function () { return Catalogos.LogEstadosArticulosRow.readPermission; };
            LogEstadosArticulosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogEstadosArticulosDialog);
            return LogEstadosArticulosDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogEstadosArticulosDialog = LogEstadosArticulosDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosArticulosGrid = /** @class */ (function (_super) {
            __extends(LogEstadosArticulosGrid, _super);
            function LogEstadosArticulosGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogEstadosArticulosGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogEstadosArticulos'; };
            LogEstadosArticulosGrid.prototype.getDialogType = function () { return Catalogos.LogEstadosArticulosDialog; };
            LogEstadosArticulosGrid.prototype.getIdProperty = function () { return Catalogos.LogEstadosArticulosRow.idProperty; };
            LogEstadosArticulosGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogEstadosArticulosRow.localTextPrefix; };
            LogEstadosArticulosGrid.prototype.getService = function () { return Catalogos.LogEstadosArticulosService.baseUrl; };
            LogEstadosArticulosGrid.prototype.getModifyPermisison = function () { return Catalogos.LogEstadosArticulosRow.updatePermission; };
            LogEstadosArticulosGrid.prototype.getReadPermisison = function () { return Catalogos.LogEstadosArticulosRow.readPermission; };
            LogEstadosArticulosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogEstadosArticulosGrid);
            return LogEstadosArticulosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogEstadosArticulosGrid = LogEstadosArticulosGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosPlanogramasSucursalesDialog = /** @class */ (function (_super) {
            __extends(LogEstadosPlanogramasSucursalesDialog, _super);
            function LogEstadosPlanogramasSucursalesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogEstadosPlanogramasSucursalesForm(_this.idPrefix);
                return _this;
            }
            LogEstadosPlanogramasSucursalesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodEstadoPlanogramaSucursal.element.focus();
            };
            LogEstadosPlanogramasSucursalesDialog.prototype.getFormKey = function () { return Catalogos.LogEstadosPlanogramasSucursalesForm.formKey; };
            LogEstadosPlanogramasSucursalesDialog.prototype.getIdProperty = function () { return Catalogos.LogEstadosPlanogramasSucursalesRow.idProperty; };
            LogEstadosPlanogramasSucursalesDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogEstadosPlanogramasSucursalesRow.localTextPrefix; };
            LogEstadosPlanogramasSucursalesDialog.prototype.getNameProperty = function () { return Catalogos.LogEstadosPlanogramasSucursalesRow.nameProperty; };
            LogEstadosPlanogramasSucursalesDialog.prototype.getService = function () { return Catalogos.LogEstadosPlanogramasSucursalesService.baseUrl; };
            LogEstadosPlanogramasSucursalesDialog.prototype.getModifyPermisison = function () { return Catalogos.LogEstadosPlanogramasSucursalesRow.updatePermission; };
            LogEstadosPlanogramasSucursalesDialog.prototype.getReadPermisison = function () { return Catalogos.LogEstadosPlanogramasSucursalesRow.readPermission; };
            LogEstadosPlanogramasSucursalesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogEstadosPlanogramasSucursalesDialog);
            return LogEstadosPlanogramasSucursalesDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogEstadosPlanogramasSucursalesDialog = LogEstadosPlanogramasSucursalesDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstadosPlanogramasSucursalesGrid = /** @class */ (function (_super) {
            __extends(LogEstadosPlanogramasSucursalesGrid, _super);
            function LogEstadosPlanogramasSucursalesGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogEstadosPlanogramasSucursalesGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogEstadosPlanogramasSucursales'; };
            LogEstadosPlanogramasSucursalesGrid.prototype.getDialogType = function () { return Catalogos.LogEstadosPlanogramasSucursalesDialog; };
            LogEstadosPlanogramasSucursalesGrid.prototype.getIdProperty = function () { return Catalogos.LogEstadosPlanogramasSucursalesRow.idProperty; };
            LogEstadosPlanogramasSucursalesGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogEstadosPlanogramasSucursalesRow.localTextPrefix; };
            LogEstadosPlanogramasSucursalesGrid.prototype.getService = function () { return Catalogos.LogEstadosPlanogramasSucursalesService.baseUrl; };
            LogEstadosPlanogramasSucursalesGrid.prototype.getModifyPermisison = function () { return Catalogos.LogEstadosPlanogramasSucursalesRow.updatePermission; };
            LogEstadosPlanogramasSucursalesGrid.prototype.getReadPermisison = function () { return Catalogos.LogEstadosPlanogramasSucursalesRow.readPermission; };
            LogEstadosPlanogramasSucursalesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogEstadosPlanogramasSucursalesGrid);
            return LogEstadosPlanogramasSucursalesGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogEstadosPlanogramasSucursalesGrid = LogEstadosPlanogramasSucursalesGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstatusFarmaciasDialog = /** @class */ (function (_super) {
            __extends(LogEstatusFarmaciasDialog, _super);
            function LogEstatusFarmaciasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogEstatusFarmaciasForm(_this.idPrefix);
                return _this;
            }
            LogEstatusFarmaciasDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodEstatusFarmacia.element.focus();
            };
            LogEstatusFarmaciasDialog.prototype.getFormKey = function () { return Catalogos.LogEstatusFarmaciasForm.formKey; };
            LogEstatusFarmaciasDialog.prototype.getIdProperty = function () { return Catalogos.LogEstatusFarmaciasRow.idProperty; };
            LogEstatusFarmaciasDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogEstatusFarmaciasRow.localTextPrefix; };
            LogEstatusFarmaciasDialog.prototype.getNameProperty = function () { return Catalogos.LogEstatusFarmaciasRow.nameProperty; };
            LogEstatusFarmaciasDialog.prototype.getService = function () { return Catalogos.LogEstatusFarmaciasService.baseUrl; };
            LogEstatusFarmaciasDialog.prototype.getModifyPermisison = function () { return Catalogos.LogEstatusFarmaciasRow.updatePermission; };
            LogEstatusFarmaciasDialog.prototype.getReadPermisison = function () { return Catalogos.LogEstatusFarmaciasRow.readPermission; };
            LogEstatusFarmaciasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogEstatusFarmaciasDialog);
            return LogEstatusFarmaciasDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogEstatusFarmaciasDialog = LogEstatusFarmaciasDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstatusFarmaciasGrid = /** @class */ (function (_super) {
            __extends(LogEstatusFarmaciasGrid, _super);
            function LogEstatusFarmaciasGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogEstatusFarmaciasGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogEstatusFarmacias'; };
            LogEstatusFarmaciasGrid.prototype.getDialogType = function () { return Catalogos.LogEstatusFarmaciasDialog; };
            LogEstatusFarmaciasGrid.prototype.getIdProperty = function () { return Catalogos.LogEstatusFarmaciasRow.idProperty; };
            LogEstatusFarmaciasGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogEstatusFarmaciasRow.localTextPrefix; };
            LogEstatusFarmaciasGrid.prototype.getService = function () { return Catalogos.LogEstatusFarmaciasService.baseUrl; };
            LogEstatusFarmaciasGrid.prototype.getModifyPermisison = function () { return Catalogos.LogEstatusFarmaciasRow.updatePermission; };
            LogEstatusFarmaciasGrid.prototype.getReadPermisison = function () { return Catalogos.LogEstatusFarmaciasRow.readPermission; };
            LogEstatusFarmaciasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogEstatusFarmaciasGrid);
            return LogEstatusFarmaciasGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogEstatusFarmaciasGrid = LogEstatusFarmaciasGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstatusProcesosDialog = /** @class */ (function (_super) {
            __extends(LogEstatusProcesosDialog, _super);
            function LogEstatusProcesosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogEstatusProcesosForm(_this.idPrefix);
                return _this;
            }
            LogEstatusProcesosDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodEstatusProceso.element.focus();
            };
            LogEstatusProcesosDialog.prototype.getFormKey = function () { return Catalogos.LogEstatusProcesosForm.formKey; };
            LogEstatusProcesosDialog.prototype.getIdProperty = function () { return Catalogos.LogEstatusProcesosRow.idProperty; };
            LogEstatusProcesosDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogEstatusProcesosRow.localTextPrefix; };
            LogEstatusProcesosDialog.prototype.getNameProperty = function () { return Catalogos.LogEstatusProcesosRow.nameProperty; };
            LogEstatusProcesosDialog.prototype.getService = function () { return Catalogos.LogEstatusProcesosService.baseUrl; };
            LogEstatusProcesosDialog.prototype.getModifyPermisison = function () { return Catalogos.LogEstatusProcesosRow.updatePermission; };
            LogEstatusProcesosDialog.prototype.getReadPermisison = function () { return Catalogos.LogEstatusProcesosRow.readPermission; };
            LogEstatusProcesosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogEstatusProcesosDialog);
            return LogEstatusProcesosDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogEstatusProcesosDialog = LogEstatusProcesosDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogEstatusProcesosGrid = /** @class */ (function (_super) {
            __extends(LogEstatusProcesosGrid, _super);
            function LogEstatusProcesosGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogEstatusProcesosGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogEstatusProcesos'; };
            LogEstatusProcesosGrid.prototype.getDialogType = function () { return Catalogos.LogEstatusProcesosDialog; };
            LogEstatusProcesosGrid.prototype.getIdProperty = function () { return Catalogos.LogEstatusProcesosRow.idProperty; };
            LogEstatusProcesosGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogEstatusProcesosRow.localTextPrefix; };
            LogEstatusProcesosGrid.prototype.getService = function () { return Catalogos.LogEstatusProcesosService.baseUrl; };
            LogEstatusProcesosGrid.prototype.getModifyPermisison = function () { return Catalogos.LogEstatusProcesosRow.updatePermission; };
            LogEstatusProcesosGrid.prototype.getReadPermisison = function () { return Catalogos.LogEstatusProcesosRow.readPermission; };
            LogEstatusProcesosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogEstatusProcesosGrid);
            return LogEstatusProcesosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogEstatusProcesosGrid = LogEstatusProcesosGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogFtpDialog = /** @class */ (function (_super) {
            __extends(LogFtpDialog, _super);
            function LogFtpDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogFtpForm(_this.idPrefix);
                return _this;
            }
            LogFtpDialog.prototype.getFormKey = function () { return Catalogos.LogFtpForm.formKey; };
            LogFtpDialog.prototype.getIdProperty = function () { return Catalogos.LogFtpRow.idProperty; };
            LogFtpDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogFtpRow.localTextPrefix; };
            LogFtpDialog.prototype.getNameProperty = function () { return Catalogos.LogFtpRow.nameProperty; };
            LogFtpDialog.prototype.getService = function () { return Catalogos.LogFtpService.baseUrl; };
            LogFtpDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodFtp.element.focus();
            };
            LogFtpDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogFtpDialog);
            return LogFtpDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogFtpDialog = LogFtpDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogFtpGrid = /** @class */ (function (_super) {
            __extends(LogFtpGrid, _super);
            function LogFtpGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogFtpGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogFtp'; };
            LogFtpGrid.prototype.getDialogType = function () { return Catalogos.LogFtpDialog; };
            LogFtpGrid.prototype.getIdProperty = function () { return Catalogos.LogFtpRow.idProperty; };
            LogFtpGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogFtpRow.localTextPrefix; };
            LogFtpGrid.prototype.getService = function () { return Catalogos.LogFtpService.baseUrl; };
            LogFtpGrid.prototype.getModifyPermisison = function () { return Catalogos.LogFtpRow.updatePermission; };
            LogFtpGrid.prototype.getReadPermisison = function () { return Catalogos.LogFtpRow.readPermission; };
            LogFtpGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogFtpGrid);
            return LogFtpGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogFtpGrid = LogFtpGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogMarcasDialog = /** @class */ (function (_super) {
            __extends(LogMarcasDialog, _super);
            function LogMarcasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogMarcasForm(_this.idPrefix);
                return _this;
            }
            LogMarcasDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodMarca.element.focus();
            };
            LogMarcasDialog.prototype.getFormKey = function () { return Catalogos.LogMarcasForm.formKey; };
            LogMarcasDialog.prototype.getIdProperty = function () { return Catalogos.LogMarcasRow.idProperty; };
            LogMarcasDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogMarcasRow.localTextPrefix; };
            LogMarcasDialog.prototype.getNameProperty = function () { return Catalogos.LogMarcasRow.nameProperty; };
            LogMarcasDialog.prototype.getService = function () { return Catalogos.LogMarcasService.baseUrl; };
            LogMarcasDialog.prototype.getModifyPermisison = function () { return Catalogos.LogMarcasRow.updatePermission; };
            LogMarcasDialog.prototype.getReadPermisison = function () { return Catalogos.LogMarcasRow.readPermission; };
            LogMarcasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogMarcasDialog);
            return LogMarcasDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogMarcasDialog = LogMarcasDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogMarcasGrid = /** @class */ (function (_super) {
            __extends(LogMarcasGrid, _super);
            function LogMarcasGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogMarcasGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogMarcas'; };
            LogMarcasGrid.prototype.getDialogType = function () { return Catalogos.LogMarcasDialog; };
            LogMarcasGrid.prototype.getIdProperty = function () { return Catalogos.LogMarcasRow.idProperty; };
            LogMarcasGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogMarcasRow.localTextPrefix; };
            LogMarcasGrid.prototype.getService = function () { return Catalogos.LogMarcasService.baseUrl; };
            LogMarcasGrid.prototype.getModifyPermisison = function () { return Catalogos.LogMarcasRow.updatePermission; };
            LogMarcasGrid.prototype.getReadPermisison = function () { return Catalogos.LogMarcasRow.readPermission; };
            LogMarcasGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    buttons = _super.prototype.AddProcessButton.call(this, buttons, "Replica Marcas", "Replica Marcas de Interprete a SiGeC", "fa fa-download", "RepMarcas");
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            LogMarcasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogMarcasGrid);
            return LogMarcasGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogMarcasGrid = LogMarcasGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogNivelesSocioEconomicosDialog = /** @class */ (function (_super) {
            __extends(LogNivelesSocioEconomicosDialog, _super);
            function LogNivelesSocioEconomicosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogNivelesSocioEconomicosForm(_this.idPrefix);
                return _this;
            }
            LogNivelesSocioEconomicosDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodNivelSocioEconomico.element.focus();
            };
            LogNivelesSocioEconomicosDialog.prototype.getFormKey = function () { return Catalogos.LogNivelesSocioEconomicosForm.formKey; };
            LogNivelesSocioEconomicosDialog.prototype.getIdProperty = function () { return Catalogos.LogNivelesSocioEconomicosRow.idProperty; };
            LogNivelesSocioEconomicosDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogNivelesSocioEconomicosRow.localTextPrefix; };
            LogNivelesSocioEconomicosDialog.prototype.getNameProperty = function () { return Catalogos.LogNivelesSocioEconomicosRow.nameProperty; };
            LogNivelesSocioEconomicosDialog.prototype.getService = function () { return Catalogos.LogNivelesSocioEconomicosService.baseUrl; };
            LogNivelesSocioEconomicosDialog.prototype.getModifyPermisison = function () { return Catalogos.LogNivelesSocioEconomicosRow.updatePermission; };
            LogNivelesSocioEconomicosDialog.prototype.getReadPermisison = function () { return Catalogos.LogNivelesSocioEconomicosRow.readPermission; };
            LogNivelesSocioEconomicosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogNivelesSocioEconomicosDialog);
            return LogNivelesSocioEconomicosDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogNivelesSocioEconomicosDialog = LogNivelesSocioEconomicosDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogNivelesSocioEconomicosGrid = /** @class */ (function (_super) {
            __extends(LogNivelesSocioEconomicosGrid, _super);
            function LogNivelesSocioEconomicosGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogNivelesSocioEconomicosGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogNivelesSocioEconomicos'; };
            LogNivelesSocioEconomicosGrid.prototype.getDialogType = function () { return Catalogos.LogNivelesSocioEconomicosDialog; };
            LogNivelesSocioEconomicosGrid.prototype.getIdProperty = function () { return Catalogos.LogNivelesSocioEconomicosRow.idProperty; };
            LogNivelesSocioEconomicosGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogNivelesSocioEconomicosRow.localTextPrefix; };
            LogNivelesSocioEconomicosGrid.prototype.getService = function () { return Catalogos.LogNivelesSocioEconomicosService.baseUrl; };
            LogNivelesSocioEconomicosGrid.prototype.getModifyPermisison = function () { return Catalogos.LogNivelesSocioEconomicosRow.updatePermission; };
            LogNivelesSocioEconomicosGrid.prototype.getReadPermisison = function () { return Catalogos.LogNivelesSocioEconomicosRow.readPermission; };
            LogNivelesSocioEconomicosGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    buttons = _super.prototype.AddProcessButton.call(this, buttons, "Replica Niveles Socioeconomicos", "Replica Niveles Socioeconomicos de Interprete a SiGeC", "fa fa-download", "RepNivSocEco");
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            LogNivelesSocioEconomicosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogNivelesSocioEconomicosGrid);
            return LogNivelesSocioEconomicosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogNivelesSocioEconomicosGrid = LogNivelesSocioEconomicosGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogPaisesDialog = /** @class */ (function (_super) {
            __extends(LogPaisesDialog, _super);
            function LogPaisesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogPaisesForm(_this.idPrefix);
                return _this;
            }
            LogPaisesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodPais.element.focus();
            };
            LogPaisesDialog.prototype.getFormKey = function () { return Catalogos.LogPaisesForm.formKey; };
            LogPaisesDialog.prototype.getIdProperty = function () { return Catalogos.LogPaisesRow.idProperty; };
            LogPaisesDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogPaisesRow.localTextPrefix; };
            LogPaisesDialog.prototype.getNameProperty = function () { return Catalogos.LogPaisesRow.nameProperty; };
            LogPaisesDialog.prototype.getService = function () { return Catalogos.LogPaisesService.baseUrl; };
            LogPaisesDialog.prototype.getModifyPermisison = function () { return Catalogos.LogPaisesRow.updatePermission; };
            LogPaisesDialog.prototype.getReadPermisison = function () { return Catalogos.LogPaisesRow.readPermission; };
            LogPaisesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogPaisesDialog);
            return LogPaisesDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogPaisesDialog = LogPaisesDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogPaisesGrid = /** @class */ (function (_super) {
            __extends(LogPaisesGrid, _super);
            function LogPaisesGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogPaisesGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogPaises'; };
            LogPaisesGrid.prototype.getDialogType = function () { return Catalogos.LogPaisesDialog; };
            LogPaisesGrid.prototype.getIdProperty = function () { return Catalogos.LogPaisesRow.idProperty; };
            LogPaisesGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogPaisesRow.localTextPrefix; };
            LogPaisesGrid.prototype.getService = function () { return Catalogos.LogPaisesService.baseUrl; };
            LogPaisesGrid.prototype.getModifyPermisison = function () { return Catalogos.LogPaisesRow.updatePermission; };
            LogPaisesGrid.prototype.getReadPermisison = function () { return Catalogos.LogPaisesRow.readPermission; };
            LogPaisesGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    buttons = _super.prototype.AddProcessButton.call(this, buttons, "Replica Paises", "Replica Paises de Interprete a SiGeC", "fa fa-download", "RepPaises");
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            LogPaisesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogPaisesGrid);
            return LogPaisesGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogPaisesGrid = LogPaisesGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogProcesosDialog = /** @class */ (function (_super) {
            __extends(LogProcesosDialog, _super);
            function LogProcesosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogProcesosForm(_this.idPrefix);
                return _this;
            }
            LogProcesosDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodProceso.element.focus();
            };
            LogProcesosDialog.prototype.getFormKey = function () { return Catalogos.LogProcesosForm.formKey; };
            LogProcesosDialog.prototype.getIdProperty = function () { return Catalogos.LogProcesosRow.idProperty; };
            LogProcesosDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogProcesosRow.localTextPrefix; };
            LogProcesosDialog.prototype.getNameProperty = function () { return Catalogos.LogProcesosRow.nameProperty; };
            LogProcesosDialog.prototype.getService = function () { return Catalogos.LogProcesosService.baseUrl; };
            LogProcesosDialog.prototype.getModifyPermisison = function () { return Catalogos.LogProcesosRow.updatePermission; };
            LogProcesosDialog.prototype.getReadPermisison = function () { return Catalogos.LogProcesosRow.readPermission; };
            LogProcesosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogProcesosDialog);
            return LogProcesosDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogProcesosDialog = LogProcesosDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogProcesosGrid = /** @class */ (function (_super) {
            __extends(LogProcesosGrid, _super);
            function LogProcesosGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogProcesosGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogProcesos'; };
            LogProcesosGrid.prototype.getDialogType = function () { return Catalogos.LogProcesosDialog; };
            LogProcesosGrid.prototype.getIdProperty = function () { return Catalogos.LogProcesosRow.idProperty; };
            LogProcesosGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogProcesosRow.localTextPrefix; };
            LogProcesosGrid.prototype.getService = function () { return Catalogos.LogProcesosService.baseUrl; };
            LogProcesosGrid.prototype.getModifyPermisison = function () { return Catalogos.LogProcesosRow.updatePermission; };
            LogProcesosGrid.prototype.getReadPermisison = function () { return Catalogos.LogProcesosRow.readPermission; };
            LogProcesosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogProcesosGrid);
            return LogProcesosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogProcesosGrid = LogProcesosGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogRegionesDialog = /** @class */ (function (_super) {
            __extends(LogRegionesDialog, _super);
            function LogRegionesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogRegionesForm(_this.idPrefix);
                return _this;
            }
            LogRegionesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodRegion.element.focus();
            };
            LogRegionesDialog.prototype.getFormKey = function () { return Catalogos.LogRegionesForm.formKey; };
            LogRegionesDialog.prototype.getIdProperty = function () { return Catalogos.LogRegionesRow.idProperty; };
            LogRegionesDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogRegionesRow.localTextPrefix; };
            LogRegionesDialog.prototype.getNameProperty = function () { return Catalogos.LogRegionesRow.nameProperty; };
            LogRegionesDialog.prototype.getService = function () { return Catalogos.LogRegionesService.baseUrl; };
            LogRegionesDialog.prototype.getModifyPermisison = function () { return Catalogos.LogRegionesRow.updatePermission; };
            LogRegionesDialog.prototype.getReadPermisison = function () { return Catalogos.LogRegionesRow.readPermission; };
            LogRegionesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogRegionesDialog);
            return LogRegionesDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogRegionesDialog = LogRegionesDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogRegionesGrid = /** @class */ (function (_super) {
            __extends(LogRegionesGrid, _super);
            function LogRegionesGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogRegionesGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogRegiones'; };
            LogRegionesGrid.prototype.getDialogType = function () { return Catalogos.LogRegionesDialog; };
            LogRegionesGrid.prototype.getIdProperty = function () { return Catalogos.LogRegionesRow.idProperty; };
            LogRegionesGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogRegionesRow.localTextPrefix; };
            LogRegionesGrid.prototype.getService = function () { return Catalogos.LogRegionesService.baseUrl; };
            LogRegionesGrid.prototype.getModifyPermisison = function () { return Catalogos.LogRegionesRow.updatePermission; };
            LogRegionesGrid.prototype.getReadPermisison = function () { return Catalogos.LogRegionesRow.readPermission; };
            LogRegionesGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    buttons = _super.prototype.AddProcessButton.call(this, buttons, "Replica Regiones", "Replica Regiones de Interprete a SiGeC", "fa fa-download", "RepRegiones");
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            LogRegionesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogRegionesGrid);
            return LogRegionesGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogRegionesGrid = LogRegionesGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogSucursalesDialog = /** @class */ (function (_super) {
            __extends(LogSucursalesDialog, _super);
            function LogSucursalesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogSucursalesForm(_this.idPrefix);
                return _this;
            }
            LogSucursalesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodSucursal.element.focus();
            };
            LogSucursalesDialog.prototype.getFormKey = function () { return Catalogos.LogSucursalesForm.formKey; };
            LogSucursalesDialog.prototype.getIdProperty = function () { return Catalogos.LogSucursalesRow.idProperty; };
            LogSucursalesDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogSucursalesRow.localTextPrefix; };
            LogSucursalesDialog.prototype.getNameProperty = function () { return Catalogos.LogSucursalesRow.nameProperty; };
            LogSucursalesDialog.prototype.getService = function () { return Catalogos.LogSucursalesService.baseUrl; };
            LogSucursalesDialog.prototype.getModifyPermisison = function () { return Catalogos.LogSucursalesRow.updatePermission; };
            LogSucursalesDialog.prototype.getReadPermisison = function () { return Catalogos.LogSucursalesRow.readPermission; };
            LogSucursalesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogSucursalesDialog);
            return LogSucursalesDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogSucursalesDialog = LogSucursalesDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogSucursalesGrid = /** @class */ (function (_super) {
            __extends(LogSucursalesGrid, _super);
            function LogSucursalesGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogSucursalesGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogSucursales'; };
            LogSucursalesGrid.prototype.getDialogType = function () { return Catalogos.LogSucursalesDialog; };
            LogSucursalesGrid.prototype.getIdProperty = function () { return Catalogos.LogSucursalesRow.idProperty; };
            LogSucursalesGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogSucursalesRow.localTextPrefix; };
            LogSucursalesGrid.prototype.getService = function () { return Catalogos.LogSucursalesService.baseUrl; };
            LogSucursalesGrid.prototype.getModifyPermisison = function () { return Catalogos.LogSucursalesRow.updatePermission; };
            LogSucursalesGrid.prototype.getReadPermisison = function () { return Catalogos.LogSucursalesRow.readPermission; };
            LogSucursalesGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    buttons = _super.prototype.AddProcessButton.call(this, buttons, "Replica Sucursales", "Replica Sucursales de Interprete a SiGeC", "fa fa-download", "RepSucursales");
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            LogSucursalesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogSucursalesGrid);
            return LogSucursalesGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogSucursalesGrid = LogSucursalesGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposMueblesDialog = /** @class */ (function (_super) {
            __extends(LogTiposMueblesDialog, _super);
            function LogTiposMueblesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogTiposMueblesForm(_this.idPrefix);
                return _this;
            }
            LogTiposMueblesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodTipoMueble.element.focus();
            };
            LogTiposMueblesDialog.prototype.getFormKey = function () { return Catalogos.LogTiposMueblesForm.formKey; };
            LogTiposMueblesDialog.prototype.getIdProperty = function () { return Catalogos.LogTiposMueblesRow.idProperty; };
            LogTiposMueblesDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogTiposMueblesRow.localTextPrefix; };
            LogTiposMueblesDialog.prototype.getNameProperty = function () { return Catalogos.LogTiposMueblesRow.nameProperty; };
            LogTiposMueblesDialog.prototype.getService = function () { return Catalogos.LogTiposMueblesService.baseUrl; };
            LogTiposMueblesDialog.prototype.getModifyPermisison = function () { return Catalogos.LogTiposMueblesRow.updatePermission; };
            LogTiposMueblesDialog.prototype.getReadPermisison = function () { return Catalogos.LogTiposMueblesRow.readPermission; };
            LogTiposMueblesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogTiposMueblesDialog);
            return LogTiposMueblesDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogTiposMueblesDialog = LogTiposMueblesDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposMueblesGrid = /** @class */ (function (_super) {
            __extends(LogTiposMueblesGrid, _super);
            function LogTiposMueblesGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogTiposMueblesGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogTiposMuebles'; };
            LogTiposMueblesGrid.prototype.getDialogType = function () { return Catalogos.LogTiposMueblesDialog; };
            LogTiposMueblesGrid.prototype.getIdProperty = function () { return Catalogos.LogTiposMueblesRow.idProperty; };
            LogTiposMueblesGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogTiposMueblesRow.localTextPrefix; };
            LogTiposMueblesGrid.prototype.getService = function () { return Catalogos.LogTiposMueblesService.baseUrl; };
            LogTiposMueblesGrid.prototype.getModifyPermisison = function () { return Catalogos.LogTiposMueblesRow.updatePermission; };
            LogTiposMueblesGrid.prototype.getReadPermisison = function () { return Catalogos.LogTiposMueblesRow.readPermission; };
            LogTiposMueblesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogTiposMueblesGrid);
            return LogTiposMueblesGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogTiposMueblesGrid = LogTiposMueblesGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposPlanogramasDialog = /** @class */ (function (_super) {
            __extends(LogTiposPlanogramasDialog, _super);
            function LogTiposPlanogramasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogTiposPlanogramasForm(_this.idPrefix);
                return _this;
            }
            LogTiposPlanogramasDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodTipoPlanograma.element.focus();
            };
            LogTiposPlanogramasDialog.prototype.getFormKey = function () { return Catalogos.LogTiposPlanogramasForm.formKey; };
            LogTiposPlanogramasDialog.prototype.getIdProperty = function () { return Catalogos.LogTiposPlanogramasRow.idProperty; };
            LogTiposPlanogramasDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogTiposPlanogramasRow.localTextPrefix; };
            LogTiposPlanogramasDialog.prototype.getNameProperty = function () { return Catalogos.LogTiposPlanogramasRow.nameProperty; };
            LogTiposPlanogramasDialog.prototype.getService = function () { return Catalogos.LogTiposPlanogramasService.baseUrl; };
            LogTiposPlanogramasDialog.prototype.getModifyPermisison = function () { return Catalogos.LogTiposPlanogramasRow.updatePermission; };
            LogTiposPlanogramasDialog.prototype.getReadPermisison = function () { return Catalogos.LogTiposPlanogramasRow.readPermission; };
            LogTiposPlanogramasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogTiposPlanogramasDialog);
            return LogTiposPlanogramasDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogTiposPlanogramasDialog = LogTiposPlanogramasDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposPlanogramasGrid = /** @class */ (function (_super) {
            __extends(LogTiposPlanogramasGrid, _super);
            function LogTiposPlanogramasGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogTiposPlanogramasGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogTiposPlanogramas'; };
            LogTiposPlanogramasGrid.prototype.getDialogType = function () { return Catalogos.LogTiposPlanogramasDialog; };
            LogTiposPlanogramasGrid.prototype.getIdProperty = function () { return Catalogos.LogTiposPlanogramasRow.idProperty; };
            LogTiposPlanogramasGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogTiposPlanogramasRow.localTextPrefix; };
            LogTiposPlanogramasGrid.prototype.getService = function () { return Catalogos.LogTiposPlanogramasService.baseUrl; };
            LogTiposPlanogramasGrid.prototype.getModifyPermisison = function () { return Catalogos.LogTiposPlanogramasRow.updatePermission; };
            LogTiposPlanogramasGrid.prototype.getReadPermisison = function () { return Catalogos.LogTiposPlanogramasRow.readPermission; };
            LogTiposPlanogramasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogTiposPlanogramasGrid);
            return LogTiposPlanogramasGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogTiposPlanogramasGrid = LogTiposPlanogramasGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposProcesosDialog = /** @class */ (function (_super) {
            __extends(LogTiposProcesosDialog, _super);
            function LogTiposProcesosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogTiposProcesosForm(_this.idPrefix);
                return _this;
            }
            LogTiposProcesosDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodTipoProceso.element.focus();
            };
            LogTiposProcesosDialog.prototype.getFormKey = function () { return Catalogos.LogTiposProcesosForm.formKey; };
            LogTiposProcesosDialog.prototype.getIdProperty = function () { return Catalogos.LogTiposProcesosRow.idProperty; };
            LogTiposProcesosDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogTiposProcesosRow.localTextPrefix; };
            LogTiposProcesosDialog.prototype.getNameProperty = function () { return Catalogos.LogTiposProcesosRow.nameProperty; };
            LogTiposProcesosDialog.prototype.getService = function () { return Catalogos.LogTiposProcesosService.baseUrl; };
            LogTiposProcesosDialog.prototype.getModifyPermisison = function () { return Catalogos.LogTiposProcesosRow.updatePermission; };
            LogTiposProcesosDialog.prototype.getReadPermisison = function () { return Catalogos.LogTiposProcesosRow.readPermission; };
            LogTiposProcesosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogTiposProcesosDialog);
            return LogTiposProcesosDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogTiposProcesosDialog = LogTiposProcesosDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogTiposProcesosGrid = /** @class */ (function (_super) {
            __extends(LogTiposProcesosGrid, _super);
            function LogTiposProcesosGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogTiposProcesosGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogTiposProcesos'; };
            LogTiposProcesosGrid.prototype.getDialogType = function () { return Catalogos.LogTiposProcesosDialog; };
            LogTiposProcesosGrid.prototype.getIdProperty = function () { return Catalogos.LogTiposProcesosRow.idProperty; };
            LogTiposProcesosGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogTiposProcesosRow.localTextPrefix; };
            LogTiposProcesosGrid.prototype.getService = function () { return Catalogos.LogTiposProcesosService.baseUrl; };
            LogTiposProcesosGrid.prototype.getModifyPermisison = function () { return Catalogos.LogTiposProcesosRow.updatePermission; };
            LogTiposProcesosGrid.prototype.getReadPermisison = function () { return Catalogos.LogTiposProcesosRow.readPermission; };
            LogTiposProcesosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogTiposProcesosGrid);
            return LogTiposProcesosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogTiposProcesosGrid = LogTiposProcesosGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogVariablesDialog = /** @class */ (function (_super) {
            __extends(LogVariablesDialog, _super);
            function LogVariablesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogVariablesForm(_this.idPrefix);
                return _this;
            }
            LogVariablesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodVariable.element.focus();
            };
            LogVariablesDialog.prototype.getFormKey = function () { return Catalogos.LogVariablesForm.formKey; };
            LogVariablesDialog.prototype.getIdProperty = function () { return Catalogos.LogVariablesRow.idProperty; };
            LogVariablesDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogVariablesRow.localTextPrefix; };
            LogVariablesDialog.prototype.getNameProperty = function () { return Catalogos.LogVariablesRow.nameProperty; };
            LogVariablesDialog.prototype.getService = function () { return Catalogos.LogVariablesService.baseUrl; };
            LogVariablesDialog.prototype.getModifyPermisison = function () { return Catalogos.LogVariablesRow.updatePermission; };
            LogVariablesDialog.prototype.getReadPermisison = function () { return Catalogos.LogVariablesRow.readPermission; };
            LogVariablesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogVariablesDialog);
            return LogVariablesDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogVariablesDialog = LogVariablesDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogVariablesGrid = /** @class */ (function (_super) {
            __extends(LogVariablesGrid, _super);
            function LogVariablesGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogVariablesGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogVariables'; };
            LogVariablesGrid.prototype.getDialogType = function () { return Catalogos.LogVariablesDialog; };
            LogVariablesGrid.prototype.getIdProperty = function () { return Catalogos.LogVariablesRow.idProperty; };
            LogVariablesGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogVariablesRow.localTextPrefix; };
            LogVariablesGrid.prototype.getService = function () { return Catalogos.LogVariablesService.baseUrl; };
            LogVariablesGrid.prototype.getModifyPermisison = function () { return Catalogos.LogVariablesRow.updatePermission; };
            LogVariablesGrid.prototype.getReadPermisison = function () { return Catalogos.LogVariablesRow.readPermission; };
            LogVariablesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogVariablesGrid);
            return LogVariablesGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogVariablesGrid = LogVariablesGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogZonasDialog = /** @class */ (function (_super) {
            __extends(LogZonasDialog, _super);
            function LogZonasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Catalogos.LogZonasForm(_this.idPrefix);
                return _this;
            }
            LogZonasDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodZona.element.focus();
            };
            LogZonasDialog.prototype.getFormKey = function () { return Catalogos.LogZonasForm.formKey; };
            LogZonasDialog.prototype.getIdProperty = function () { return Catalogos.LogZonasRow.idProperty; };
            LogZonasDialog.prototype.getLocalTextPrefix = function () { return Catalogos.LogZonasRow.localTextPrefix; };
            LogZonasDialog.prototype.getNameProperty = function () { return Catalogos.LogZonasRow.nameProperty; };
            LogZonasDialog.prototype.getService = function () { return Catalogos.LogZonasService.baseUrl; };
            LogZonasDialog.prototype.getModifyPermisison = function () { return Catalogos.LogZonasRow.updatePermission; };
            LogZonasDialog.prototype.getReadPermisison = function () { return Catalogos.LogZonasRow.readPermission; };
            LogZonasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogZonasDialog);
            return LogZonasDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Catalogos.LogZonasDialog = LogZonasDialog;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Catalogos;
    (function (Catalogos) {
        var LogZonasGrid = /** @class */ (function (_super) {
            __extends(LogZonasGrid, _super);
            function LogZonasGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogZonasGrid.prototype.getColumnsKey = function () { return 'Catalogos.LogZonas'; };
            LogZonasGrid.prototype.getDialogType = function () { return Catalogos.LogZonasDialog; };
            LogZonasGrid.prototype.getIdProperty = function () { return Catalogos.LogZonasRow.idProperty; };
            LogZonasGrid.prototype.getLocalTextPrefix = function () { return Catalogos.LogZonasRow.localTextPrefix; };
            LogZonasGrid.prototype.getModifyPermisison = function () { return Catalogos.LogZonasRow.updatePermission; };
            LogZonasGrid.prototype.getReadPermisison = function () { return Catalogos.LogZonasRow.readPermission; };
            LogZonasGrid.prototype.getService = function () { return Catalogos.LogZonasService.baseUrl; };
            LogZonasGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    buttons = _super.prototype.AddProcessButton.call(this, buttons, "Replica Zonas", "Replica Zonas de Interprete a SiGeC", "fa fa-download", "RepZonas");
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            LogZonasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogZonasGrid);
            return LogZonasGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Catalogos.LogZonasGrid = LogZonasGrid;
    })(Catalogos = SiGeC.Catalogos || (SiGeC.Catalogos = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = SiGeC.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = SiGeC.LanguageList || (SiGeC.LanguageList = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var SiGeC;
(function (SiGeC) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('SiGeC');
        Serenity.EntityDialog.defaultLanguageList = SiGeC.LanguageList.getValue;
        var isFocus = true;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onfocus = function () {
            isFocus = true;
        };
        window.onblur = function () {
            isFocus = false;
        };
        var iMilliSecondsValidaEstatusProceso = 10000;
        setInterval(validaEstatusProcesos, iMilliSecondsValidaEstatusProceso);
        function validaEstatusProcesos() {
            try {
                if (isFocus) {
                    Q.serviceRequest("Detalle/DetProcesos/MonitorProcesosUsuario", { iMilliSeconds: iMilliSecondsValidaEstatusProceso }, function (response) {
                        if (response && response["Message"] && response["vchCodEstatus"]) {
                            var message = response["Message"];
                            var vchCodEstatus = response["vchCodEstatus"];
                            if (vchCodEstatus == "TErr") {
                                Q.notifyError(message);
                            }
                            else {
                                Q.notifySuccess(message);
                            }
                        }
                    });
                }
            }
            catch (error) {
                var err = 1;
            }
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = SiGeC.ScriptInitialization || (SiGeC.ScriptInitialization = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    SiGeC.BasicProgressDialog = BasicProgressDialog;
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new SiGeC.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = SiGeC.DialogUtils || (SiGeC.DialogUtils = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    /*           icon: Q.*/
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    SiGeC.StaticTextBlock = StaticTextBlock;
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = SiGeC.Common || (SiGeC.Common = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Detalle;
    (function (Detalle) {
        var DetBulkProcessAction = /** @class */ (function (_super) {
            __extends(DetBulkProcessAction, _super);
            function DetBulkProcessAction(vchCodProceso, vchCodEntidad) {
                var _this = _super.call(this) || this;
                _this.vchCodProceso = vchCodProceso;
                _this.vchCodEntidad = vchCodEntidad;
                return _this;
            }
            /**
            * This controls how many service requests will be used in parallel.
            * Determine this number based on how many requests your server
            * might be able to handle, and amount of wait on external resources.
            */
            DetBulkProcessAction.prototype.getParallelRequests = function () {
                return 5;
            };
            /**
             * Sobreescribimos createProgressDialog para que no se muestre ventan de progreso
             * debido a que el proceso lo ejecuta el servicio, no el web
             */
            DetBulkProcessAction.prototype.createProgressDialog = function () { };
            /**
            * These number of records IDs will be sent to your service in one
            * service call. If your service is designed to handle one record only,
            * set it to 1. But note that, if you have 5000 records, this will
            * result in 5000 service calls / requests.
            */
            DetBulkProcessAction.prototype.getBatchSize = function () {
                return 1000;
            };
            /**
            * This is where you should call your service.
            * Batch parameter contains the selected order IDs
            * that should be processed in this service call.
            */
            DetBulkProcessAction.prototype.executeForBatch = function (batch) {
                Detalle.DetProcesosService.BulkProcess({
                    vchCodProceso: this.vchCodProceso,
                    vchCodEntidad: this.vchCodEntidad,
                    ids: batch.map(function (x) { return +x; })
                }, function (response) { return location.reload(); }, {
                    blockUI: false
                });
            };
            return DetBulkProcessAction;
        }(SiGeC.Common.BulkServiceAction));
        Detalle.DetBulkProcessAction = DetBulkProcessAction;
    })(Detalle = SiGeC.Detalle || (SiGeC.Detalle = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Detalle;
    (function (Detalle) {
        var DetProcesosDialog = /** @class */ (function (_super) {
            __extends(DetProcesosDialog, _super);
            function DetProcesosDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Detalle.DetProcesosForm(_this.idPrefix);
                _this.bRefresh = true;
                return _this;
            }
            DetProcesosDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return buttons;
            };
            DetProcesosDialog.prototype.getFormKey = function () { return Detalle.DetProcesosForm.formKey; };
            DetProcesosDialog.prototype.getIdProperty = function () { return Detalle.DetProcesosRow.idProperty; };
            DetProcesosDialog.prototype.getLocalTextPrefix = function () { return Detalle.DetProcesosRow.localTextPrefix; };
            DetProcesosDialog.prototype.getNameProperty = function () { return Detalle.DetProcesosRow.nameProperty; };
            DetProcesosDialog.prototype.getService = function () { return Detalle.DetProcesosService.baseUrl; };
            DetProcesosDialog.prototype.getModifyPermisison = function () { return Detalle.DetProcesosRow.updatePermission; };
            DetProcesosDialog.prototype.getReadPermisison = function () { return Detalle.DetProcesosRow.readPermission; };
            DetProcesosDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], DetProcesosDialog);
            return DetProcesosDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Detalle.DetProcesosDialog = DetProcesosDialog;
    })(Detalle = SiGeC.Detalle || (SiGeC.Detalle = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Detalle;
    (function (Detalle) {
        var DetProcesosGrid = /** @class */ (function (_super) {
            __extends(DetProcesosGrid, _super);
            function DetProcesosGrid(container, options) {
                var _this = _super.call(this, container, options) || this;
                _this.stInterval = null;
                _this.stInterval = setInterval(function () { $(".refresh-button").click(); }, 5000);
                _this.element.bind('onBeforeDestroy ', function () {
                    clearInterval(_this.stInterval);
                });
                return _this;
            }
            DetProcesosGrid.prototype.getColumnsKey = function () { return 'Detalle.DetProcesos'; };
            DetProcesosGrid.prototype.getDialogType = function () { return Detalle.DetProcesosDialog; };
            DetProcesosGrid.prototype.getIdProperty = function () { return Detalle.DetProcesosRow.idProperty; };
            DetProcesosGrid.prototype.getLocalTextPrefix = function () { return Detalle.DetProcesosRow.localTextPrefix; };
            DetProcesosGrid.prototype.getService = function () { return Detalle.DetProcesosService.baseUrl; };
            DetProcesosGrid.prototype.getModifyPermisison = function () { return Detalle.DetProcesosRow.updatePermission; };
            DetProcesosGrid.prototype.getReadPermisison = function () { return Detalle.DetProcesosRow.readPermission; };
            DetProcesosGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            DetProcesosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DetProcesosGrid);
            return DetProcesosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Detalle.DetProcesosGrid = DetProcesosGrid;
    })(Detalle = SiGeC.Detalle || (SiGeC.Detalle = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogExclusionesArticuloSucursalDialog = /** @class */ (function (_super) {
            __extends(LogExclusionesArticuloSucursalDialog, _super);
            function LogExclusionesArticuloSucursalDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Maestros.LogExclusionesArticuloSucursalForm(_this.idPrefix);
                _this.bValidateData = true;
                return _this;
            }
            LogExclusionesArticuloSucursalDialog.prototype.getFormKey = function () { return Maestros.LogExclusionesArticuloSucursalForm.formKey; };
            LogExclusionesArticuloSucursalDialog.prototype.getIdProperty = function () { return Maestros.LogExclusionesArticuloSucursalRow.idProperty; };
            LogExclusionesArticuloSucursalDialog.prototype.getLocalTextPrefix = function () { return Maestros.LogExclusionesArticuloSucursalRow.localTextPrefix; };
            LogExclusionesArticuloSucursalDialog.prototype.getNameProperty = function () { return Maestros.LogExclusionesArticuloSucursalRow.nameProperty; };
            LogExclusionesArticuloSucursalDialog.prototype.getService = function () { return Maestros.LogExclusionesArticuloSucursalService.baseUrl; };
            LogExclusionesArticuloSucursalDialog.prototype.getModifyPermisison = function () { return Maestros.LogExclusionesArticuloSucursalRow.updatePermission; };
            LogExclusionesArticuloSucursalDialog.prototype.getReadPermisison = function () { return Maestros.LogExclusionesArticuloSucursalRow.readPermission; };
            LogExclusionesArticuloSucursalDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogExclusionesArticuloSucursalDialog);
            return LogExclusionesArticuloSucursalDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Maestros.LogExclusionesArticuloSucursalDialog = LogExclusionesArticuloSucursalDialog;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogExclusionesArticuloSucursalGrid = /** @class */ (function (_super) {
            __extends(LogExclusionesArticuloSucursalGrid, _super);
            function LogExclusionesArticuloSucursalGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogExclusionesArticuloSucursalGrid.prototype.getColumnsKey = function () { return 'Maestros.LogExclusionesArticuloSucursal'; };
            LogExclusionesArticuloSucursalGrid.prototype.getDialogType = function () { return Maestros.LogExclusionesArticuloSucursalDialog; };
            LogExclusionesArticuloSucursalGrid.prototype.getIdProperty = function () { return Maestros.LogExclusionesArticuloSucursalRow.idProperty; };
            LogExclusionesArticuloSucursalGrid.prototype.getLocalTextPrefix = function () { return Maestros.LogExclusionesArticuloSucursalRow.localTextPrefix; };
            LogExclusionesArticuloSucursalGrid.prototype.getService = function () { return Maestros.LogExclusionesArticuloSucursalService.baseUrl; };
            LogExclusionesArticuloSucursalGrid.prototype.getModifyPermisison = function () { return Maestros.LogExclusionesArticuloSucursalRow.updatePermission; };
            LogExclusionesArticuloSucursalGrid.prototype.getReadPermisison = function () { return Maestros.LogExclusionesArticuloSucursalRow.readPermission; };
            LogExclusionesArticuloSucursalGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            LogExclusionesArticuloSucursalGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            LogExclusionesArticuloSucursalGrid.prototype.getButtons = function () {
                var _this = this;
                var toolButtons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    toolButtons.push({
                        title: 'Eliminar',
                        hint: 'Botón para eliminar Exclusiones seleccionadas',
                        cssClass: 'delete-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new SiGeC.Detalle.DetBulkProcessAction("EliminaExclusiones", "idMaeExclusionArtSuc");
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    });
                }
                return toolButtons;
            };
            LogExclusionesArticuloSucursalGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogExclusionesArticuloSucursalGrid);
            return LogExclusionesArticuloSucursalGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Maestros.LogExclusionesArticuloSucursalGrid = LogExclusionesArticuloSucursalGrid;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasDialog = /** @class */ (function (_super) {
            __extends(LogPlanogramasDialog, _super);
            function LogPlanogramasDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Maestros.LogPlanogramasForm(_this.idPrefix);
                _this.bValidateData = true;
                _this.form.VchUrlImgPlanograma.element.find("input:file").attr("accept", ".pdf");
                _this.PlanogramasArticulosGrid = new Maestros.TabLogPlanogramasArticulosGrid(_this.byId("PlanogramasArticulosGrid"));
                _this.PlanogramasSucursalesGrid = new Maestros.TabLogPlanogramasSucursalesGrid(_this.byId("PlanogramasSucursalesGrid"));
                _this.form.fkIdCatCategoriaHyperion;
                //Se ejecuta refresh de cada grid al cambiar de tab, arrange no funciona
                //https://github.com/volkanceylan/Serenity/issues/1849
                _this.tabs.on('tabsactivate', function (e, i) {
                    _this.refreshGrids(_this.PlanogramasArticulosGrid, _this.PlanogramasSucursalesGrid);
                });
                return _this;
            }
            LogPlanogramasDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchDesPlanograma.element.focus();
            };
            LogPlanogramasDialog.prototype.getFormKey = function () { return Maestros.LogPlanogramasForm.formKey; };
            LogPlanogramasDialog.prototype.getIdProperty = function () { return Maestros.LogPlanogramasRow.idProperty; };
            LogPlanogramasDialog.prototype.getLocalTextPrefix = function () { return Maestros.LogPlanogramasRow.localTextPrefix; };
            LogPlanogramasDialog.prototype.getNameProperty = function () { return Maestros.LogPlanogramasRow.nameProperty; };
            LogPlanogramasDialog.prototype.getService = function () { return Maestros.LogPlanogramasService.baseUrl; };
            LogPlanogramasDialog.prototype.getModifyPermisison = function () { return Maestros.LogPlanogramasRow.updatePermission; };
            LogPlanogramasDialog.prototype.getReadPermisison = function () { return Maestros.LogPlanogramasRow.readPermission; };
            LogPlanogramasDialog.prototype.refreshGrids = function (g1, g2) {
                g1.refresh();
                g2.refresh();
            };
            LogPlanogramasDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (!this.isNew()) {
                    /* Si estamos editando un registro, se asigna el idMaePlanograma a los botones para agregar articulos y sucursales
                     * en los tabgrid correspondientes */
                    this.PlanogramasArticulosGrid.element.find('.add-button').show();
                    this.PlanogramasArticulosGrid.setAddButtonId(this.entity.IdMaePlanograma, this.entity.VchDesPlanograma);
                    this.PlanogramasArticulosGrid.idMaePlanograma = this.entity.IdMaePlanograma;
                    this.PlanogramasSucursalesGrid.element.find('.add-button').show();
                    this.PlanogramasSucursalesGrid.setAddButtonId(this.entity.IdMaePlanograma, this.entity.VchDesPlanograma);
                    this.PlanogramasSucursalesGrid.idMaePlanograma = this.entity.IdMaePlanograma;
                    /*Mostramos todos los campos*/
                    this.form.DtInicio.getGridField().toggle(true);
                    //fields.Date("Date Field",default=datetime.strptime('%s-01-01' % (current_year),'%Y-%m-%d'))
                    //fields.Date("Date Field",default = datetime.strptime('%s-01-01' % (current_year), '%Y-%m-%d'))
                    if (this.form.DtInicio.value == null) {
                        var mydate = new Date();
                        this.form.DtInicio.value = mydate.toDateString();
                    }
                    this.form.VchUrlImgPlanograma.getGridField().toggle(true);
                    this.form.IEnviaSucursal.getGridField().toggle(true);
                    this.form.iCountSuc.getGridField().toggle(true);
                    this.form.ICombinado.getGridField().toggle(true);
                    this.form.ITramo.getGridField().toggle(true);
                    this.form.FltMedida.getGridField().toggle(true);
                }
                else {
                    /*Ocultamos los botones para agregar articulos y sucursales, aqui no tenemosun id planograma,
                     * por lo que no se debe de poder agregar registros
                     */
                    //	this.form.DtInicio.value = DateTime.Now;
                    //DateTime.Now
                    this.PlanogramasArticulosGrid.element.find('.add-button').hide();
                    this.PlanogramasSucursalesGrid.element.find('.add-button').hide();
                    /*Ocultamos los campos que no se requieren para generar el idMaePlanograma, estos seran capturados posteriormente*/
                    this.form.DtInicio.getGridField().toggle(false);
                    this.form.VchUrlImgPlanograma.getGridField().toggle(false);
                    this.form.IEnviaSucursal.getGridField().toggle(false);
                    this.form.iCountSuc.getGridField().toggle(false);
                    this.form.ICombinado.getGridField().toggle(false);
                    this.form.ITramo.getGridField().toggle(false);
                    this.form.FltMedida.getGridField().toggle(false);
                }
            };
            LogPlanogramasDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], LogPlanogramasDialog);
            return LogPlanogramasDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Maestros.LogPlanogramasDialog = LogPlanogramasDialog;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasGrid = /** @class */ (function (_super) {
            __extends(LogPlanogramasGrid, _super);
            function LogPlanogramasGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogPlanogramasGrid.prototype.getColumnsKey = function () { return 'Maestros.LogPlanogramas'; };
            LogPlanogramasGrid.prototype.getDialogType = function () { return Maestros.LogPlanogramasDialog; };
            LogPlanogramasGrid.prototype.getIdProperty = function () { return Maestros.LogPlanogramasRow.idProperty; };
            LogPlanogramasGrid.prototype.getLocalTextPrefix = function () { return Maestros.LogPlanogramasRow.localTextPrefix; };
            LogPlanogramasGrid.prototype.getModifyPermisison = function () { return Maestros.LogPlanogramasRow.updatePermission; };
            LogPlanogramasGrid.prototype.getReadPermission = function () { return Maestros.LogPlanogramasArticulosRow.readPermission; };
            LogPlanogramasGrid.prototype.getService = function () { return Maestros.LogPlanogramasService.baseUrl; };
            LogPlanogramasGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            LogPlanogramasGrid.prototype.getButtons = function () {
                var _this = this;
                var toolButtons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    toolButtons.push({
                        title: 'Eliminar',
                        hint: 'Botón para eliminar las siguientes entidades: \\n Planogramas, \\nPlanogramasArticulos\\nPlanogramasCategorias\\nPlanogramasSucursales.',
                        cssClass: 'delete-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new SiGeC.Detalle.DetBulkProcessAction("EliminaPlanogramas", "idMaePlanograma");
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    });
                }
                return toolButtons;
            };
            LogPlanogramasGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            LogPlanogramasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogPlanogramasGrid);
            return LogPlanogramasGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Maestros.LogPlanogramasGrid = LogPlanogramasGrid;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasArticulosDialog = /** @class */ (function (_super) {
            __extends(LogPlanogramasArticulosDialog, _super);
            function LogPlanogramasArticulosDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Maestros.LogPlanogramasArticulosForm(_this.idPrefix);
                _this.bValidateData = true;
                return _this;
            }
            LogPlanogramasArticulosDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchCodCharola.element.focus();
            };
            LogPlanogramasArticulosDialog.prototype.getFormKey = function () { return Maestros.LogPlanogramasArticulosForm.formKey; };
            LogPlanogramasArticulosDialog.prototype.getIdProperty = function () { return Maestros.LogPlanogramasArticulosRow.idProperty; };
            LogPlanogramasArticulosDialog.prototype.getLocalTextPrefix = function () { return Maestros.LogPlanogramasArticulosRow.localTextPrefix; };
            LogPlanogramasArticulosDialog.prototype.getNameProperty = function () { return Maestros.LogPlanogramasArticulosRow.nameProperty; };
            LogPlanogramasArticulosDialog.prototype.getService = function () { return Maestros.LogPlanogramasArticulosService.baseUrl; };
            LogPlanogramasArticulosDialog.prototype.getModifyPermisison = function () { return Maestros.LogPlanogramasArticulosRow.updatePermission; };
            LogPlanogramasArticulosDialog.prototype.getReadPermisison = function () { return Maestros.LogPlanogramasArticulosRow.readPermission; };
            LogPlanogramasArticulosDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.isSubEditor) {
                    Serenity.EditorUtils.setReadonly($(this.form.fkIdMaePlanograma), true);
                }
            };
            LogPlanogramasArticulosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogPlanogramasArticulosDialog);
            return LogPlanogramasArticulosDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Maestros.LogPlanogramasArticulosDialog = LogPlanogramasArticulosDialog;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasArticulosGrid = /** @class */ (function (_super) {
            __extends(LogPlanogramasArticulosGrid, _super);
            function LogPlanogramasArticulosGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogPlanogramasArticulosGrid.prototype.getColumnsKey = function () { return 'Maestros.LogPlanogramasArticulos'; };
            LogPlanogramasArticulosGrid.prototype.getDialogType = function () { return Maestros.LogPlanogramasArticulosDialog; };
            LogPlanogramasArticulosGrid.prototype.getIdProperty = function () { return Maestros.LogPlanogramasArticulosRow.idProperty; };
            LogPlanogramasArticulosGrid.prototype.getLocalTextPrefix = function () { return Maestros.LogPlanogramasArticulosRow.localTextPrefix; };
            LogPlanogramasArticulosGrid.prototype.getService = function () { return Maestros.LogPlanogramasArticulosService.baseUrl; };
            LogPlanogramasArticulosGrid.prototype.getModifyPermisison = function () { return Maestros.LogPlanogramasArticulosRow.updatePermission; };
            LogPlanogramasArticulosGrid.prototype.getReadPermisison = function () { return Maestros.LogPlanogramasArticulosRow.readPermission; };
            LogPlanogramasArticulosGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            LogPlanogramasArticulosGrid.prototype.getButtons = function () {
                var _this = this;
                var toolButtons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    toolButtons.push({
                        title: 'Eliminar',
                        hint: 'Botón para eliminar las siguientes entidades: \\n Planogramas, \\nPlanogramasArticulos\\nPlanogramasCategorias\\nPlanogramasSucursales.',
                        cssClass: 'delete-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new SiGeC.Detalle.DetBulkProcessAction("EliminaPlanogramasAr", "idMaePlanoArticulo");
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    });
                }
                return toolButtons;
            };
            LogPlanogramasArticulosGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            LogPlanogramasArticulosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogPlanogramasArticulosGrid);
            return LogPlanogramasArticulosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Maestros.LogPlanogramasArticulosGrid = LogPlanogramasArticulosGrid;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
/// <reference path="../../Maestros/LogPlanogramasArticulos/LogPlanogramasArticulosDialog.ts" />
/// <reference path="../../Maestros/LogPlanogramasArticulos/LogPlanogramasArticulosGrid.ts" />
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var TabLogPlanogramasArticulosGrid = /** @class */ (function (_super) {
            __extends(TabLogPlanogramasArticulosGrid, _super);
            function TabLogPlanogramasArticulosGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            TabLogPlanogramasArticulosGrid.prototype.getColumnsKey = function () { return 'Maestros.LogPlanogramasArticulos'; };
            TabLogPlanogramasArticulosGrid.prototype.getDialogType = function () { return SiGeC.Maestros.LogPlanogramasArticulosDialog; };
            TabLogPlanogramasArticulosGrid.prototype.getIdProperty = function () { return SiGeC.Maestros.LogPlanogramasArticulosRow.idProperty; };
            TabLogPlanogramasArticulosGrid.prototype.getLocalTextPrefix = function () { return SiGeC.Maestros.LogPlanogramasArticulosRow.localTextPrefix; };
            TabLogPlanogramasArticulosGrid.prototype.getService = function () { return SiGeC.Maestros.LogPlanogramasArticulosService.baseUrl; };
            TabLogPlanogramasArticulosGrid.prototype.getModifyPermisison = function () { return Maestros.LogPlanogramasArticulosRow.updatePermission; };
            TabLogPlanogramasArticulosGrid.prototype.getReadPermisison = function () { return Maestros.LogPlanogramasArticulosRow.readPermission; };
            TabLogPlanogramasArticulosGrid.prototype.setAddButtonId = function (idMaePlanograma, vchDesPlanograma) {
                if (idMaePlanograma !== undefined) {
                    this.addButtonClick = function () {
                        this.editItem({
                            fkIdMaePlanograma: idMaePlanograma,
                            fkVchDesPlanograma: vchDesPlanograma
                        });
                    };
                }
            };
            TabLogPlanogramasArticulosGrid.prototype.initDialog = function (dialog) {
                _super.prototype.initDialog.call(this, dialog);
                Serenity.EditorUtils.setReadonly($(dialog.form.fkIdMaePlanograma), true);
            };
            TabLogPlanogramasArticulosGrid.prototype.getInitialTitle = function () {
                return null;
            };
            TabLogPlanogramasArticulosGrid.prototype.usePager = function () {
                return false;
            };
            TabLogPlanogramasArticulosGrid.prototype.getGridCanLoad = function () {
                return this.idMaePlanograma != null;
            };
            TabLogPlanogramasArticulosGrid.prototype.getQuickFilters = function () {
                //Quitamos el filtro de MaePlanograma, provoca que Grid no filtre con el setEquiality del setter
                var filters = _super.prototype.getQuickFilters.call(this);
                var filterIndex = filters.findIndex(function (v) { return v.field == "fkIdMaePlanograma"; });
                if (filterIndex !== -1) {
                    filters.splice(filterIndex, 1);
                }
                return filters;
            };
            Object.defineProperty(TabLogPlanogramasArticulosGrid.prototype, "idMaePlanograma", {
                get: function () {
                    return this._idMaePlanograma;
                },
                set: function (value) {
                    if (this._idMaePlanograma != value) {
                        this._idMaePlanograma = value;
                        this.setEquality("fkIdMaePlanograma" /* fkIdMaePlanograma */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            TabLogPlanogramasArticulosGrid.prototype.layout = function () {
                try {
                    _super.prototype.layout.call(this);
                }
                catch (error) { }
            };
            TabLogPlanogramasArticulosGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], TabLogPlanogramasArticulosGrid);
            return TabLogPlanogramasArticulosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Maestros.TabLogPlanogramasArticulosGrid = TabLogPlanogramasArticulosGrid;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasSucursalesDialog = /** @class */ (function (_super) {
            __extends(LogPlanogramasSucursalesDialog, _super);
            function LogPlanogramasSucursalesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Maestros.LogPlanogramasSucursalesForm(_this.idPrefix);
                _this.bValidateData = true;
                return _this;
            }
            LogPlanogramasSucursalesDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
            };
            LogPlanogramasSucursalesDialog.prototype.getFormKey = function () { return Maestros.LogPlanogramasSucursalesForm.formKey; };
            LogPlanogramasSucursalesDialog.prototype.getIdProperty = function () { return Maestros.LogPlanogramasSucursalesRow.idProperty; };
            LogPlanogramasSucursalesDialog.prototype.getLocalTextPrefix = function () { return Maestros.LogPlanogramasSucursalesRow.localTextPrefix; };
            LogPlanogramasSucursalesDialog.prototype.getNameProperty = function () { return Maestros.LogPlanogramasSucursalesRow.nameProperty; };
            LogPlanogramasSucursalesDialog.prototype.getService = function () { return Maestros.LogPlanogramasSucursalesService.baseUrl; };
            LogPlanogramasSucursalesDialog.prototype.getModifyPermisison = function () { return Maestros.LogPlanogramasSucursalesRow.updatePermission; };
            LogPlanogramasSucursalesDialog.prototype.getReadPermisison = function () { return Maestros.LogPlanogramasSucursalesRow.readPermission; };
            LogPlanogramasSucursalesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogPlanogramasSucursalesDialog);
            return LogPlanogramasSucursalesDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Maestros.LogPlanogramasSucursalesDialog = LogPlanogramasSucursalesDialog;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasSucursalesGrid = /** @class */ (function (_super) {
            __extends(LogPlanogramasSucursalesGrid, _super);
            function LogPlanogramasSucursalesGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogPlanogramasSucursalesGrid.prototype.getColumnsKey = function () { return 'Maestros.LogPlanogramasSucursales'; };
            LogPlanogramasSucursalesGrid.prototype.getDialogType = function () { return Maestros.LogPlanogramasSucursalesDialog; };
            LogPlanogramasSucursalesGrid.prototype.getIdProperty = function () { return Maestros.LogPlanogramasSucursalesRow.idProperty; };
            LogPlanogramasSucursalesGrid.prototype.getLocalTextPrefix = function () { return Maestros.LogPlanogramasSucursalesRow.localTextPrefix; };
            LogPlanogramasSucursalesGrid.prototype.getService = function () { return Maestros.LogPlanogramasSucursalesService.baseUrl; };
            LogPlanogramasSucursalesGrid.prototype.getModifyPermisison = function () { return Maestros.LogPlanogramasSucursalesRow.updatePermission; };
            LogPlanogramasSucursalesGrid.prototype.getReadPermisison = function () { return Maestros.LogPlanogramasSucursalesRow.readPermission; };
            LogPlanogramasSucursalesGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            LogPlanogramasSucursalesGrid.prototype.getButtons = function () {
                var _this = this;
                var toolButtons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    toolButtons.push({
                        title: 'Eliminar',
                        hint: 'Botón para eliminar las siguientes entidades: Planogramas - Sucursales.',
                        cssClass: 'delete-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new SiGeC.Detalle.DetBulkProcessAction("EliminaPlanogramasSu", "idMaePlanoSuc");
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    });
                }
                return toolButtons;
            };
            LogPlanogramasSucursalesGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            LogPlanogramasSucursalesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogPlanogramasSucursalesGrid);
            return LogPlanogramasSucursalesGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Maestros.LogPlanogramasSucursalesGrid = LogPlanogramasSucursalesGrid;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
/// <reference path="../../Maestros/LogPlanogramasSucursales/LogPlanogramasSucursalesDialog.ts" />
/// <reference path="../../Maestros/LogPlanogramasSucursales/LogPlanogramasSucursalesGrid.ts" />
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var TabLogPlanogramasSucursalesGrid = /** @class */ (function (_super) {
            __extends(TabLogPlanogramasSucursalesGrid, _super);
            function TabLogPlanogramasSucursalesGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            TabLogPlanogramasSucursalesGrid.prototype.getColumnsKey = function () { return 'Maestros.LogPlanogramasSucursales'; };
            TabLogPlanogramasSucursalesGrid.prototype.getDialogType = function () { return SiGeC.Maestros.LogPlanogramasSucursalesDialog; };
            TabLogPlanogramasSucursalesGrid.prototype.getIdProperty = function () { return SiGeC.Maestros.LogPlanogramasSucursalesRow.idProperty; };
            TabLogPlanogramasSucursalesGrid.prototype.getLocalTextPrefix = function () { return SiGeC.Maestros.LogPlanogramasSucursalesRow.localTextPrefix; };
            TabLogPlanogramasSucursalesGrid.prototype.getService = function () { return SiGeC.Maestros.LogPlanogramasSucursalesService.baseUrl; };
            TabLogPlanogramasSucursalesGrid.prototype.getModifyPermisison = function () { return Maestros.LogPlanogramasSucursalesRow.updatePermission; };
            TabLogPlanogramasSucursalesGrid.prototype.getReadPermisison = function () { return Maestros.LogPlanogramasSucursalesRow.readPermission; };
            TabLogPlanogramasSucursalesGrid.prototype.setAddButtonId = function (idMaePlanograma, vchDesPlanograma) {
                if (idMaePlanograma !== undefined) {
                    this.addButtonClick = function () {
                        this.editItem({
                            fkIdMaePlanograma: idMaePlanograma,
                            fkVchDesPlanograma: vchDesPlanograma
                        });
                    };
                }
            };
            TabLogPlanogramasSucursalesGrid.prototype.initDialog = function (dialog) {
                _super.prototype.initDialog.call(this, dialog);
                Serenity.EditorUtils.setReadonly($(dialog.form.fkIdMaePlanograma), true);
            };
            TabLogPlanogramasSucursalesGrid.prototype.getInitialTitle = function () {
                return null;
            };
            TabLogPlanogramasSucursalesGrid.prototype.usePager = function () {
                return false;
            };
            TabLogPlanogramasSucursalesGrid.prototype.getGridCanLoad = function () {
                return this.idMaePlanograma != null;
            };
            Object.defineProperty(TabLogPlanogramasSucursalesGrid.prototype, "idMaePlanograma", {
                get: function () {
                    return this._idMaePlanograma;
                },
                set: function (value) {
                    if (this._idMaePlanograma != value) {
                        this._idMaePlanograma = value;
                        this.setEquality("fkIdMaePlanograma" /* fkIdMaePlanograma */, value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            TabLogPlanogramasSucursalesGrid.prototype.layout = function () {
                try {
                    _super.prototype.layout.call(this);
                }
                catch (error) { }
            };
            TabLogPlanogramasSucursalesGrid.prototype.getQuickFilters = function () {
                //Quitamos el filtro de MaePlanograma, provoca que Grid no filtre con el setEquiality del setter
                var filters = _super.prototype.getQuickFilters.call(this);
                var filterIndex = filters.findIndex(function (v) { return v.field == "fkIdMaePlanograma"; });
                if (filterIndex !== -1) {
                    filters.splice(filterIndex, 1);
                }
                return filters;
            };
            TabLogPlanogramasSucursalesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], TabLogPlanogramasSucursalesGrid);
            return TabLogPlanogramasSucursalesGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Maestros.TabLogPlanogramasSucursalesGrid = TabLogPlanogramasSucursalesGrid;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasCategoriasDialog = /** @class */ (function (_super) {
            __extends(LogPlanogramasCategoriasDialog, _super);
            function LogPlanogramasCategoriasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Maestros.LogPlanogramasCategoriasForm(_this.idPrefix);
                return _this;
            }
            LogPlanogramasCategoriasDialog.prototype.dialogOpen = function (asPanel, isSubEditor) {
                _super.prototype.dialogOpen.call(this, asPanel);
            };
            LogPlanogramasCategoriasDialog.prototype.getFormKey = function () { return Maestros.LogPlanogramasCategoriasForm.formKey; };
            LogPlanogramasCategoriasDialog.prototype.getIdProperty = function () { return Maestros.LogPlanogramasCategoriasRow.idProperty; };
            LogPlanogramasCategoriasDialog.prototype.getLocalTextPrefix = function () { return Maestros.LogPlanogramasCategoriasRow.localTextPrefix; };
            LogPlanogramasCategoriasDialog.prototype.getNameProperty = function () { return Maestros.LogPlanogramasCategoriasRow.nameProperty; };
            LogPlanogramasCategoriasDialog.prototype.getService = function () { return Maestros.LogPlanogramasCategoriasService.baseUrl; };
            LogPlanogramasCategoriasDialog.prototype.getModifyPermisison = function () { return Maestros.LogPlanogramasCategoriasRow.updatePermission; };
            LogPlanogramasCategoriasDialog.prototype.getReadPermisison = function () { return Maestros.LogPlanogramasCategoriasRow.readPermission; };
            LogPlanogramasCategoriasDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                if (this.isSubEditor) {
                    Serenity.EditorUtils.setReadonly($(this.form.fkIdMaePlanograma), true);
                }
            };
            LogPlanogramasCategoriasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogPlanogramasCategoriasDialog);
            return LogPlanogramasCategoriasDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Maestros.LogPlanogramasCategoriasDialog = LogPlanogramasCategoriasDialog;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasCategoriasGrid = /** @class */ (function (_super) {
            __extends(LogPlanogramasCategoriasGrid, _super);
            function LogPlanogramasCategoriasGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogPlanogramasCategoriasGrid.prototype.getColumnsKey = function () { return 'Maestros.LogPlanogramasCategorias'; };
            LogPlanogramasCategoriasGrid.prototype.getDialogType = function () { return Maestros.LogPlanogramasCategoriasDialog; };
            LogPlanogramasCategoriasGrid.prototype.getIdProperty = function () { return Maestros.LogPlanogramasCategoriasRow.idProperty; };
            LogPlanogramasCategoriasGrid.prototype.getLocalTextPrefix = function () { return Maestros.LogPlanogramasCategoriasRow.localTextPrefix; };
            LogPlanogramasCategoriasGrid.prototype.getService = function () { return Maestros.LogPlanogramasCategoriasService.baseUrl; };
            LogPlanogramasCategoriasGrid.prototype.getModifyPermisison = function () { return Maestros.LogPlanogramasCategoriasRow.updatePermission; };
            LogPlanogramasCategoriasGrid.prototype.getReadPermisison = function () { return Maestros.LogPlanogramasCategoriasRow.readPermission; };
            LogPlanogramasCategoriasGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            LogPlanogramasCategoriasGrid.prototype.getButtons = function () {
                var _this = this;
                var toolButtons = _super.prototype.getButtons.call(this);
                toolButtons.push({
                    title: 'Eliminar',
                    hint: 'Botón para eliminar las siguientes entidades: \\n Planogramas, \\nPlanogramasArticulos\\nPlanogramasCategorias\\nPlanogramasSucursales.',
                    cssClass: 'delete-button',
                    onClick: function () {
                        if (!_this.onViewSubmit()) {
                            return;
                        }
                        var action = new SiGeC.Detalle.DetBulkProcessAction("EliminaPlanogramasCa", "idMaePlanoCat");
                        action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                        action.execute(_this.rowSelection.getSelectedKeys());
                    }
                });
                return toolButtons;
            };
            LogPlanogramasCategoriasGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            LogPlanogramasCategoriasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogPlanogramasCategoriasGrid);
            return LogPlanogramasCategoriasGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Maestros.LogPlanogramasCategoriasGrid = LogPlanogramasCategoriasGrid;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasEnviaSucursalDialog = /** @class */ (function (_super) {
            __extends(LogPlanogramasEnviaSucursalDialog, _super);
            function LogPlanogramasEnviaSucursalDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Maestros.LogPlanogramasEnviaSucursalForm(_this.idPrefix);
                return _this;
            }
            LogPlanogramasEnviaSucursalDialog.prototype.getFormKey = function () { return Maestros.LogPlanogramasEnviaSucursalForm.formKey; };
            LogPlanogramasEnviaSucursalDialog.prototype.getIdProperty = function () { return Maestros.LogPlanogramasEnviaSucursalRow.idProperty; };
            LogPlanogramasEnviaSucursalDialog.prototype.getLocalTextPrefix = function () { return Maestros.LogPlanogramasEnviaSucursalRow.localTextPrefix; };
            LogPlanogramasEnviaSucursalDialog.prototype.getNameProperty = function () { return Maestros.LogPlanogramasEnviaSucursalRow.nameProperty; };
            LogPlanogramasEnviaSucursalDialog.prototype.getService = function () { return Maestros.LogPlanogramasEnviaSucursalService.baseUrl; };
            LogPlanogramasEnviaSucursalDialog.prototype.getModifyPermisison = function () { return Maestros.LogPlanogramasEnviaSucursalRow.updatePermission; };
            LogPlanogramasEnviaSucursalDialog.prototype.getReadPermisison = function () { return Maestros.LogPlanogramasEnviaSucursalRow.readPermission; };
            LogPlanogramasEnviaSucursalDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogPlanogramasEnviaSucursalDialog);
            return LogPlanogramasEnviaSucursalDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Maestros.LogPlanogramasEnviaSucursalDialog = LogPlanogramasEnviaSucursalDialog;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasEnviaSucursalGrid = /** @class */ (function (_super) {
            __extends(LogPlanogramasEnviaSucursalGrid, _super);
            function LogPlanogramasEnviaSucursalGrid(container, options) {
                return _super.call(this, container, options, true, false) || this;
            }
            LogPlanogramasEnviaSucursalGrid.prototype.getColumnsKey = function () { return 'Maestros.LogPlanogramasEnviaSucursal'; };
            LogPlanogramasEnviaSucursalGrid.prototype.getDialogType = function () { return Maestros.LogPlanogramasEnviaSucursalDialog; };
            LogPlanogramasEnviaSucursalGrid.prototype.getIdProperty = function () { return Maestros.LogPlanogramasEnviaSucursalRow.idProperty; };
            LogPlanogramasEnviaSucursalGrid.prototype.getLocalTextPrefix = function () { return Maestros.LogPlanogramasEnviaSucursalRow.localTextPrefix; };
            LogPlanogramasEnviaSucursalGrid.prototype.getService = function () { return Maestros.LogPlanogramasEnviaSucursalService.baseUrl; };
            LogPlanogramasEnviaSucursalGrid.prototype.getModifyPermisison = function () { return Maestros.LogPlanogramasEnviaSucursalRow.updatePermission; };
            LogPlanogramasEnviaSucursalGrid.prototype.getReadPermisison = function () { return Maestros.LogPlanogramasEnviaSucursalRow.readPermission; };
            LogPlanogramasEnviaSucursalGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            LogPlanogramasEnviaSucursalGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                    buttons.push({
                        title: 'Enviar',
                        hint: 'Habilitar envio a sucursales a planogramas seleccionados',
                        cssClass: 'apply-changes-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new SiGeC.Detalle.DetBulkProcessAction("UpdtEnvioSucursal", "idMaePlanograma");
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    });
                }
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            LogPlanogramasEnviaSucursalGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            LogPlanogramasEnviaSucursalGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogPlanogramasEnviaSucursalGrid);
            return LogPlanogramasEnviaSucursalGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Maestros.LogPlanogramasEnviaSucursalGrid = LogPlanogramasEnviaSucursalGrid;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasReplicaPDFDialog = /** @class */ (function (_super) {
            __extends(LogPlanogramasReplicaPDFDialog, _super);
            function LogPlanogramasReplicaPDFDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Maestros.LogPlanogramasReplicaPDFForm(_this.idPrefix);
                return _this;
            }
            LogPlanogramasReplicaPDFDialog.prototype.getFormKey = function () { return Maestros.LogPlanogramasReplicaPDFForm.formKey; };
            LogPlanogramasReplicaPDFDialog.prototype.getIdProperty = function () { return Maestros.LogPlanogramasReplicaPDFRow.idProperty; };
            LogPlanogramasReplicaPDFDialog.prototype.getLocalTextPrefix = function () { return Maestros.LogPlanogramasReplicaPDFRow.localTextPrefix; };
            LogPlanogramasReplicaPDFDialog.prototype.getNameProperty = function () { return Maestros.LogPlanogramasReplicaPDFRow.nameProperty; };
            LogPlanogramasReplicaPDFDialog.prototype.getService = function () { return Maestros.LogPlanogramasReplicaPDFService.baseUrl; };
            LogPlanogramasReplicaPDFDialog.prototype.getModifyPermisison = function () { return Maestros.LogPlanogramasReplicaPDFRow.updatePermission; };
            LogPlanogramasReplicaPDFDialog.prototype.getReadPermisison = function () { return Maestros.LogPlanogramasReplicaPDFRow.readPermission; };
            LogPlanogramasReplicaPDFDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogPlanogramasReplicaPDFDialog);
            return LogPlanogramasReplicaPDFDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Maestros.LogPlanogramasReplicaPDFDialog = LogPlanogramasReplicaPDFDialog;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogPlanogramasReplicaPDFGrid = /** @class */ (function (_super) {
            __extends(LogPlanogramasReplicaPDFGrid, _super);
            function LogPlanogramasReplicaPDFGrid(container, options) {
                return _super.call(this, container, options, true, false) || this;
            }
            LogPlanogramasReplicaPDFGrid.prototype.getColumnsKey = function () { return 'Maestros.LogPlanogramasReplicaPDF'; };
            LogPlanogramasReplicaPDFGrid.prototype.getDialogType = function () { return Maestros.LogPlanogramasReplicaPDFDialog; };
            LogPlanogramasReplicaPDFGrid.prototype.getIdProperty = function () { return Maestros.LogPlanogramasReplicaPDFRow.idProperty; };
            LogPlanogramasReplicaPDFGrid.prototype.getLocalTextPrefix = function () { return Maestros.LogPlanogramasReplicaPDFRow.localTextPrefix; };
            LogPlanogramasReplicaPDFGrid.prototype.getService = function () { return Maestros.LogPlanogramasReplicaPDFService.baseUrl; };
            LogPlanogramasReplicaPDFGrid.prototype.getModifyPermission = function () { return Maestros.LogPlanogramasReplicaPDFRow.updatePermission; };
            LogPlanogramasReplicaPDFGrid.prototype.getReadPermisison = function () { return Maestros.LogPlanogramasReplicaPDFRow.readPermission; };
            LogPlanogramasReplicaPDFGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            LogPlanogramasReplicaPDFGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                if (Q.Authorization.hasPermission(this.getModifyPermission())) {
                    buttons.push({
                        title: 'Importa PDF',
                        hint: 'Importa PDF desde \\corporativo\Recursos\sal_suc\Planos\Salidas',
                        cssClass: 'apply-changes-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new SiGeC.Detalle.DetBulkProcessAction("RepPlanogramaPDF", "idMaePlanograma");
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    });
                }
                return buttons;
            };
            LogPlanogramasReplicaPDFGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            LogPlanogramasReplicaPDFGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogPlanogramasReplicaPDFGrid);
            return LogPlanogramasReplicaPDFGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Maestros.LogPlanogramasReplicaPDFGrid = LogPlanogramasReplicaPDFGrid;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogVariablesProcesosDialog = /** @class */ (function (_super) {
            __extends(LogVariablesProcesosDialog, _super);
            function LogVariablesProcesosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Maestros.LogVariablesProcesosForm(_this.idPrefix);
                return _this;
            }
            LogVariablesProcesosDialog.prototype.getFormKey = function () { return Maestros.LogVariablesProcesosForm.formKey; };
            LogVariablesProcesosDialog.prototype.getIdProperty = function () { return Maestros.LogVariablesProcesosRow.idProperty; };
            LogVariablesProcesosDialog.prototype.getLocalTextPrefix = function () { return Maestros.LogVariablesProcesosRow.localTextPrefix; };
            LogVariablesProcesosDialog.prototype.getNameProperty = function () { return Maestros.LogVariablesProcesosRow.nameProperty; };
            LogVariablesProcesosDialog.prototype.getService = function () { return Maestros.LogVariablesProcesosService.baseUrl; };
            LogVariablesProcesosDialog.prototype.getModifyPermisison = function () { return Maestros.LogVariablesProcesosRow.updatePermission; };
            LogVariablesProcesosDialog.prototype.getReadPermisison = function () { return Maestros.LogVariablesProcesosRow.readPermission; };
            LogVariablesProcesosDialog.prototype.dialogOpen = function (asPanel) {
                _super.prototype.dialogOpen.call(this, asPanel);
                this.form.VchDesVariableProceso.element.focus();
            };
            LogVariablesProcesosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LogVariablesProcesosDialog);
            return LogVariablesProcesosDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Maestros.LogVariablesProcesosDialog = LogVariablesProcesosDialog;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Maestros;
    (function (Maestros) {
        var LogVariablesProcesosGrid = /** @class */ (function (_super) {
            __extends(LogVariablesProcesosGrid, _super);
            function LogVariablesProcesosGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogVariablesProcesosGrid.prototype.getColumnsKey = function () { return 'Maestros.LogVariablesProcesos'; };
            LogVariablesProcesosGrid.prototype.getDialogType = function () { return Maestros.LogVariablesProcesosDialog; };
            LogVariablesProcesosGrid.prototype.getIdProperty = function () { return Maestros.LogVariablesProcesosRow.idProperty; };
            LogVariablesProcesosGrid.prototype.getLocalTextPrefix = function () { return Maestros.LogVariablesProcesosRow.localTextPrefix; };
            LogVariablesProcesosGrid.prototype.getService = function () { return Maestros.LogVariablesProcesosService.baseUrl; };
            LogVariablesProcesosGrid.prototype.getModifyPermisison = function () { return Maestros.LogVariablesProcesosRow.updatePermission; };
            LogVariablesProcesosGrid.prototype.getReadPermisison = function () { return Maestros.LogVariablesProcesosRow.readPermission; };
            LogVariablesProcesosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogVariablesProcesosGrid);
            return LogVariablesProcesosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Maestros.LogVariablesProcesosGrid = LogVariablesProcesosGrid;
    })(Maestros = SiGeC.Maestros || (SiGeC.Maestros = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = SiGeC.Membership || (SiGeC.Membership = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = SiGeC.Membership || (SiGeC.Membership = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = SiGeC.Membership || (SiGeC.Membership = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = SiGeC.Membership || (SiGeC.Membership = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var AuditaPlanogramasDialog = /** @class */ (function (_super) {
            __extends(AuditaPlanogramasDialog, _super);
            function AuditaPlanogramasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Reportes.AuditaPlanogramasForm(_this.idPrefix);
                return _this;
            }
            AuditaPlanogramasDialog.prototype.getFormKey = function () { return Reportes.AuditaPlanogramasForm.formKey; };
            AuditaPlanogramasDialog.prototype.getIdProperty = function () { return Reportes.AuditaPlanogramasRow.idProperty; };
            AuditaPlanogramasDialog.prototype.getLocalTextPrefix = function () { return Reportes.AuditaPlanogramasRow.localTextPrefix; };
            AuditaPlanogramasDialog.prototype.getNameProperty = function () { return Reportes.AuditaPlanogramasRow.nameProperty; };
            AuditaPlanogramasDialog.prototype.getService = function () { return Reportes.AuditaPlanogramasService.baseUrl; };
            AuditaPlanogramasDialog.prototype.getModifyPermisison = function () { return Reportes.AuditaPlanogramasRow.updatePermission; };
            AuditaPlanogramasDialog.prototype.getReadPermisison = function () { return Reportes.AuditaPlanogramasRow.readPermission; };
            AuditaPlanogramasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AuditaPlanogramasDialog);
            return AuditaPlanogramasDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Reportes.AuditaPlanogramasDialog = AuditaPlanogramasDialog;
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var AuditaPlanogramasGrid = /** @class */ (function (_super) {
            __extends(AuditaPlanogramasGrid, _super);
            function AuditaPlanogramasGrid(container, options) {
                return _super.call(this, container, options, true, false) || this;
            }
            AuditaPlanogramasGrid.prototype.getColumnsKey = function () { return 'Reportes.AuditaPlanogramas'; };
            AuditaPlanogramasGrid.prototype.getDialogType = function () { return Reportes.AuditaPlanogramasDialog; };
            AuditaPlanogramasGrid.prototype.getIdProperty = function () { return Reportes.AuditaPlanogramasRow.idProperty; };
            AuditaPlanogramasGrid.prototype.getLocalTextPrefix = function () { return Reportes.AuditaPlanogramasRow.localTextPrefix; };
            AuditaPlanogramasGrid.prototype.getService = function () { return Reportes.AuditaPlanogramasService.baseUrl; };
            AuditaPlanogramasGrid.prototype.getModifyPermisison = function () { return Reportes.AuditaPlanogramasRow.updatePermission; };
            AuditaPlanogramasGrid.prototype.getReadPermisison = function () { return Reportes.AuditaPlanogramasRow.readPermission; };
            AuditaPlanogramasGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                //if (Q.Authorization.hasPermission(this.getModifyPermisison())) {
                buttons = _super.prototype.AddProcessButton.call(this, buttons, "Crea Reporte", "Crea Reporte Auditoria Planogramas", "fa fa-download", "RptAuditaPlanos");
                //}
                //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
                return buttons;
            };
            AuditaPlanogramasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AuditaPlanogramasGrid);
            return AuditaPlanogramasGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Reportes.AuditaPlanogramasGrid = AuditaPlanogramasGrid;
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var DetReportesCoberturaDialog = /** @class */ (function (_super) {
            __extends(DetReportesCoberturaDialog, _super);
            function DetReportesCoberturaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Reportes.DetReportesCoberturaForm(_this.idPrefix);
                return _this;
            }
            DetReportesCoberturaDialog.prototype.getFormKey = function () { return Reportes.DetReportesCoberturaForm.formKey; };
            DetReportesCoberturaDialog.prototype.getIdProperty = function () { return Reportes.DetReportesCoberturaRow.idProperty; };
            DetReportesCoberturaDialog.prototype.getLocalTextPrefix = function () { return Reportes.DetReportesCoberturaRow.localTextPrefix; };
            DetReportesCoberturaDialog.prototype.getNameProperty = function () { return Reportes.DetReportesCoberturaRow.nameProperty; };
            DetReportesCoberturaDialog.prototype.getService = function () { return Reportes.DetReportesCoberturaService.baseUrl; };
            DetReportesCoberturaDialog.prototype.getModifyPermisison = function () { return Reportes.DetReportesCoberturaRow.updatePermission; };
            DetReportesCoberturaDialog.prototype.getReadPermisison = function () { return Reportes.DetReportesCoberturaRow.readPermission; };
            DetReportesCoberturaDialog.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
                this.bRefresh = true;
            };
            DetReportesCoberturaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DetReportesCoberturaDialog);
            return DetReportesCoberturaDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Reportes.DetReportesCoberturaDialog = DetReportesCoberturaDialog;
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var DetReportesCoberturaGrid = /** @class */ (function (_super) {
            __extends(DetReportesCoberturaGrid, _super);
            function DetReportesCoberturaGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            DetReportesCoberturaGrid.prototype.getColumnsKey = function () { return 'Reportes.DetReportesCobertura'; };
            DetReportesCoberturaGrid.prototype.getDialogType = function () { return Reportes.DetReportesCoberturaDialog; };
            DetReportesCoberturaGrid.prototype.getIdProperty = function () { return Reportes.DetReportesCoberturaRow.idProperty; };
            DetReportesCoberturaGrid.prototype.getLocalTextPrefix = function () { return Reportes.DetReportesCoberturaRow.localTextPrefix; };
            DetReportesCoberturaGrid.prototype.getService = function () { return Reportes.DetReportesCoberturaService.baseUrl; };
            DetReportesCoberturaGrid.prototype.getModifyPermisison = function () { return Reportes.DetReportesCoberturaRow.updatePermission; };
            DetReportesCoberturaGrid.prototype.getReadPermisison = function () { return Reportes.DetReportesCoberturaRow.readPermission; };
            DetReportesCoberturaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DetReportesCoberturaGrid);
            return DetReportesCoberturaGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Reportes.DetReportesCoberturaGrid = DetReportesCoberturaGrid;
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultDialog.ts"/>
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var LogReportesNecesidadDialog = /** @class */ (function (_super) {
            __extends(LogReportesNecesidadDialog, _super);
            function LogReportesNecesidadDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Reportes.LogReportesNecesidadForm(_this.idPrefix);
                return _this;
            }
            LogReportesNecesidadDialog.prototype.getFormKey = function () { return Reportes.LogReportesNecesidadForm.formKey; };
            LogReportesNecesidadDialog.prototype.getIdProperty = function () { return Reportes.LogReportesNecesidadRow.idProperty; };
            LogReportesNecesidadDialog.prototype.getLocalTextPrefix = function () { return Reportes.LogReportesNecesidadRow.localTextPrefix; };
            LogReportesNecesidadDialog.prototype.getNameProperty = function () { return Reportes.LogReportesNecesidadRow.nameProperty; };
            LogReportesNecesidadDialog.prototype.getService = function () { return Reportes.LogReportesNecesidadService.baseUrl; };
            LogReportesNecesidadDialog.prototype.getModifyPermisison = function () { return Reportes.LogReportesNecesidadRow.updatePermission; };
            LogReportesNecesidadDialog.prototype.getReadPermisison = function () { return Reportes.LogReportesNecesidadRow.readPermission; };
            LogReportesNecesidadDialog.prototype.onDialogOpen = function () {
                _super.prototype.onDialogOpen.call(this);
                this.bRefresh = true;
                //Validamos que solo se puedan subir archivos xlsx
                this.form.VchURLPlanosSucursalesArticulos.element.find("input:file").attr("accept", ".xlsx");
            };
            LogReportesNecesidadDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], LogReportesNecesidadDialog);
            return LogReportesNecesidadDialog;
        }(SiGeC.SiGeCDefaultDialog));
        Reportes.LogReportesNecesidadDialog = LogReportesNecesidadDialog;
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
/// <reference path="../../SiGeCDefaults/SiGeCDefaultFilters.ts" />
/// <reference path="../../SiGeCDefaults/SiGeCDefaultGrid.ts"/>
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var LogReportesNecesidadGrid = /** @class */ (function (_super) {
            __extends(LogReportesNecesidadGrid, _super);
            function LogReportesNecesidadGrid(container, options) {
                return _super.call(this, container, options) || this;
            }
            LogReportesNecesidadGrid.prototype.getColumnsKey = function () { return 'Reportes.LogReportesNecesidad'; };
            LogReportesNecesidadGrid.prototype.getDialogType = function () { return Reportes.LogReportesNecesidadDialog; };
            LogReportesNecesidadGrid.prototype.getIdProperty = function () { return Reportes.LogReportesNecesidadRow.idProperty; };
            LogReportesNecesidadGrid.prototype.getLocalTextPrefix = function () { return Reportes.LogReportesNecesidadRow.localTextPrefix; };
            LogReportesNecesidadGrid.prototype.getService = function () { return Reportes.LogReportesNecesidadService.baseUrl; };
            LogReportesNecesidadGrid.prototype.getModifyPermisison = function () { return Reportes.LogReportesNecesidadRow.updatePermission; };
            LogReportesNecesidadGrid.prototype.getReadPermisison = function () { return Reportes.LogReportesNecesidadRow.readPermission; };
            LogReportesNecesidadGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: Q.text("Plantilla"),
                    cssClass: 'export-xlsx-button',
                    hint: "Descarga plantilla necesaria para realizar Necesidad",
                    onClick: function () {
                        var ServiceEndpoint = _this.getService() + "/GetTemplate";
                        Q.postToService({ service: ServiceEndpoint, request: {}, target: '_blank' });
                    }
                });
                return buttons;
            };
            LogReportesNecesidadGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LogReportesNecesidadGrid);
            return LogReportesNecesidadGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Reportes.LogReportesNecesidadGrid = LogReportesNecesidadGrid;
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Reportes;
    (function (Reportes) {
        var PlanogramasSucursalesArticulosGrid = /** @class */ (function (_super) {
            __extends(PlanogramasSucursalesArticulosGrid, _super);
            function PlanogramasSucursalesArticulosGrid(container, options) {
                return _super.call(this, container, options, true, false) || this;
            }
            PlanogramasSucursalesArticulosGrid.prototype.getColumnsKey = function () { return 'Reportes.PlanogramasSucursalesArticulos'; };
            PlanogramasSucursalesArticulosGrid.prototype.getIdProperty = function () { return Reportes.PlanogramasSucursalesArticulosRow.idProperty; };
            PlanogramasSucursalesArticulosGrid.prototype.getLocalTextPrefix = function () { return Reportes.PlanogramasSucursalesArticulosRow.localTextPrefix; };
            PlanogramasSucursalesArticulosGrid.prototype.getService = function () { return Reportes.PlanogramasSucursalesArticulosService.baseUrl; };
            PlanogramasSucursalesArticulosGrid.prototype.getReadPermisison = function () { return Reportes.PlanogramasSucursalesArticulosRow.readPermission; };
            PlanogramasSucursalesArticulosGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                return buttons;
            };
            PlanogramasSucursalesArticulosGrid.prototype.createQuickSearchInput = function () { };
            PlanogramasSucursalesArticulosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PlanogramasSucursalesArticulosGrid);
            return PlanogramasSucursalesArticulosGrid;
        }(SiGeC.SiGeCDefaultGrid));
        Reportes.PlanogramasSucursalesArticulosGrid = PlanogramasSucursalesArticulosGrid;
    })(Reportes = SiGeC.Reportes || (SiGeC.Reportes = {}));
})(SiGeC || (SiGeC = {}));
var SiGeC;
(function (SiGeC) {
    var Base64DownloadFormatter = /** @class */ (function () {
        function Base64DownloadFormatter() {
        }
        Base64DownloadFormatter.prototype.format = function (ctx) {
            var val = ctx.value;
            var fileName;
            if (typeof (this.FileNameField) === "undefined") {
                this.FileNameField = ctx.column.field;
            }
            if (typeof (this.FileNamePrefix) != "undefined") {
                this.FileNamePrefix = this.FileNamePrefix;
            }
            else {
                this.FileNamePrefix = "";
            }
            if (typeof (this.FileExtension) === "undefined") {
                this.FileExtension = "NoExtension";
            }
            fileName = this.FileNamePrefix + ctx.item[this.FileNameField] + "." + this.FileExtension;
            if (typeof (val) != "undefined") {
                var DataB64 = btoa(val);
                return '<a href="data:' + this.Data + ';base64,' + DataB64 + '" download="' + fileName + '" >' + ctx.item[this.DisplayNameField] + '</a>';
            }
        };
        __decorate([
            Serenity.Decorators.option()
        ], Base64DownloadFormatter.prototype, "FileNameField", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], Base64DownloadFormatter.prototype, "FileExtension", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], Base64DownloadFormatter.prototype, "Data", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], Base64DownloadFormatter.prototype, "DisplayNameField", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], Base64DownloadFormatter.prototype, "FileNamePrefix", void 0);
        Base64DownloadFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], Base64DownloadFormatter);
        return Base64DownloadFormatter;
    }());
    SiGeC.Base64DownloadFormatter = Base64DownloadFormatter;
})(SiGeC || (SiGeC = {}));
//# sourceMappingURL=SiGeC.Web.js.map