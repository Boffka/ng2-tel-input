import { EventEmitter, ɵɵdirectiveInject, ElementRef, PLATFORM_ID, ɵɵdefineDirective, ɵɵlistener, ɵsetClassMetadata, Directive, Inject, Input, Output, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const defaultUtilScript = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.1/js/utils.js';
class Ng2TelInput {
    constructor(el, platformId) {
        this.el = el;
        this.platformId = platformId;
        this.ng2TelInputOptions = {};
        this.hasError = new EventEmitter();
        this.ng2TelOutput = new EventEmitter();
        this.countryChange = new EventEmitter();
        this.intlTelInputObject = new EventEmitter();
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.ng2TelInputOptions = Object.assign(Object.assign({}, this.ng2TelInputOptions), { utilsScript: this.getUtilsScript(this.ng2TelInputOptions) });
            this.ngTelInput = window.intlTelInput(this.el.nativeElement, Object.assign({}, this.ng2TelInputOptions));
            this.el.nativeElement.addEventListener("countrychange", () => {
                this.countryChange.emit(this.ngTelInput.getSelectedCountryData());
            });
            this.intlTelInputObject.emit(this.ngTelInput);
        }
    }
    onBlur() {
        let isInputValid = this.isInputValid();
        if (isInputValid) {
            let telOutput = this.ngTelInput.getNumber();
            this.hasError.emit(isInputValid);
            this.ng2TelOutput.emit(telOutput);
        }
        else {
            this.hasError.emit(isInputValid);
        }
    }
    isInputValid() {
        return this.ngTelInput.isValidNumber();
    }
    setCountry(country) {
        this.ngTelInput.setCountry(country);
    }
    getUtilsScript(options) {
        return options.utilsScript || defaultUtilScript;
    }
}
Ng2TelInput.ɵfac = function Ng2TelInput_Factory(t) { return new (t || Ng2TelInput)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PLATFORM_ID)); };
Ng2TelInput.ɵdir = /*@__PURE__*/ ɵɵdefineDirective({ type: Ng2TelInput, selectors: [["", "ng2TelInput", ""]], hostBindings: function Ng2TelInput_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("blur", function Ng2TelInput_blur_HostBindingHandler() { return ctx.onBlur(); });
    } }, inputs: { ng2TelInputOptions: "ng2TelInputOptions" }, outputs: { hasError: "hasError", ng2TelOutput: "ng2TelOutput", countryChange: "countryChange", intlTelInputObject: "intlTelInputObject" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(Ng2TelInput, [{
        type: Directive,
        args: [{
                selector: '[ng2TelInput]',
            }]
    }], function () { return [{ type: ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { ng2TelInputOptions: [{
            type: Input,
            args: ['ng2TelInputOptions']
        }], hasError: [{
            type: Output,
            args: ['hasError']
        }], ng2TelOutput: [{
            type: Output,
            args: ['ng2TelOutput']
        }], countryChange: [{
            type: Output,
            args: ['countryChange']
        }], intlTelInputObject: [{
            type: Output,
            args: ['intlTelInputObject']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }] }); })();

class Ng2TelInputModule {
    static forRoot() {
        return {
            ngModule: Ng2TelInputModule,
            providers: []
        };
    }
}
Ng2TelInputModule.ɵfac = function Ng2TelInputModule_Factory(t) { return new (t || Ng2TelInputModule)(); };
Ng2TelInputModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: Ng2TelInputModule });
Ng2TelInputModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(Ng2TelInputModule, [{
        type: NgModule,
        args: [{
                declarations: [Ng2TelInput],
                exports: [Ng2TelInput]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(Ng2TelInputModule, { declarations: [Ng2TelInput], exports: [Ng2TelInput] }); })();

export { Ng2TelInput, Ng2TelInputModule };
