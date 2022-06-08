(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global.Ng2TelInput = {}, global.i0, global.common));
}(this, (function (exports, i0, common) { 'use strict';

    var __assign = (undefined && undefined.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var defaultUtilScript = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.1/js/utils.js';
    var Ng2TelInput = /** @class */ (function () {
        function Ng2TelInput(el, platformId) {
            this.el = el;
            this.platformId = platformId;
            this.ng2TelInputOptions = {};
            this.hasError = new i0.EventEmitter();
            this.ng2TelOutput = new i0.EventEmitter();
            this.countryChange = new i0.EventEmitter();
            this.intlTelInputObject = new i0.EventEmitter();
        }
        Ng2TelInput.prototype.ngOnInit = function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.ng2TelInputOptions = __assign(__assign({}, this.ng2TelInputOptions), { utilsScript: this.getUtilsScript(this.ng2TelInputOptions) });
                this.ngTelInput = window.intlTelInput(this.el.nativeElement, __assign({}, this.ng2TelInputOptions));
                this.el.nativeElement.addEventListener("countrychange", function () {
                    _this.countryChange.emit(_this.ngTelInput.getSelectedCountryData());
                });
                this.intlTelInputObject.emit(this.ngTelInput);
            }
        };
        Ng2TelInput.prototype.onBlur = function () {
            var isInputValid = this.isInputValid();
            if (isInputValid) {
                var telOutput = this.ngTelInput.getNumber();
                this.hasError.emit(isInputValid);
                this.ng2TelOutput.emit(telOutput);
            }
            else {
                this.hasError.emit(isInputValid);
            }
        };
        Ng2TelInput.prototype.isInputValid = function () {
            return this.ngTelInput.isValidNumber();
        };
        Ng2TelInput.prototype.setCountry = function (country) {
            this.ngTelInput.setCountry(country);
        };
        Ng2TelInput.prototype.getUtilsScript = function (options) {
            return options.utilsScript || defaultUtilScript;
        };
        Ng2TelInput.ɵfac = function Ng2TelInput_Factory(t) { return new (t || Ng2TelInput)(i0["ɵɵdirectiveInject"](i0.ElementRef), i0["ɵɵdirectiveInject"](i0.PLATFORM_ID)); };
        Ng2TelInput.ɵdir = /*@__PURE__*/ i0["ɵɵdefineDirective"]({ type: Ng2TelInput, selectors: [["", "ng2TelInput", ""]], hostBindings: function Ng2TelInput_HostBindings(rf, ctx) { if (rf & 1) {
                i0["ɵɵlistener"]("blur", function Ng2TelInput_blur_HostBindingHandler() { return ctx.onBlur(); });
            } }, inputs: { ng2TelInputOptions: "ng2TelInputOptions" }, outputs: { hasError: "hasError", ng2TelOutput: "ng2TelOutput", countryChange: "countryChange", intlTelInputObject: "intlTelInputObject" } });
        return Ng2TelInput;
    }());
    (function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0["ɵsetClassMetadata"](Ng2TelInput, [{
            type: i0.Directive,
            args: [{
                    selector: '[ng2TelInput]',
                }]
        }], function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: i0.Inject,
                    args: [i0.PLATFORM_ID]
                }] }]; }, { ng2TelInputOptions: [{
                type: i0.Input,
                args: ['ng2TelInputOptions']
            }], hasError: [{
                type: i0.Output,
                args: ['hasError']
            }], ng2TelOutput: [{
                type: i0.Output,
                args: ['ng2TelOutput']
            }], countryChange: [{
                type: i0.Output,
                args: ['countryChange']
            }], intlTelInputObject: [{
                type: i0.Output,
                args: ['intlTelInputObject']
            }], onBlur: [{
                type: i0.HostListener,
                args: ['blur']
            }] }); })();

    var Ng2TelInputModule = /** @class */ (function () {
        function Ng2TelInputModule() {
        }
        Ng2TelInputModule.forRoot = function () {
            return {
                ngModule: Ng2TelInputModule,
                providers: []
            };
        };
        Ng2TelInputModule.ɵfac = function Ng2TelInputModule_Factory(t) { return new (t || Ng2TelInputModule)(); };
        Ng2TelInputModule.ɵmod = /*@__PURE__*/ i0["ɵɵdefineNgModule"]({ type: Ng2TelInputModule });
        Ng2TelInputModule.ɵinj = /*@__PURE__*/ i0["ɵɵdefineInjector"]({});
        return Ng2TelInputModule;
    }());
    (function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0["ɵsetClassMetadata"](Ng2TelInputModule, [{
            type: i0.NgModule,
            args: [{
                    declarations: [Ng2TelInput],
                    exports: [Ng2TelInput]
                }]
        }], null, null); })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0["ɵɵsetNgModuleScope"](Ng2TelInputModule, { declarations: [Ng2TelInput], exports: [Ng2TelInput] }); })();

    exports.Ng2TelInput = Ng2TelInput;
    exports.Ng2TelInputModule = Ng2TelInputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
