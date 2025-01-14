import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class Ng2TelInput implements OnInit {
    private el;
    private platformId;
    ng2TelInputOptions: {
        [key: string]: any;
    };
    hasError: EventEmitter<boolean>;
    ng2TelOutput: EventEmitter<any>;
    countryChange: EventEmitter<any>;
    intlTelInputObject: EventEmitter<any>;
    ngTelInput: any;
    constructor(el: ElementRef, platformId: string);
    ngOnInit(): void;
    onBlur(): void;
    isInputValid(): boolean;
    setCountry(country: any): void;
    getUtilsScript(options: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<Ng2TelInput, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Ng2TelInput, "[ng2TelInput]", never, { "ng2TelInputOptions": "ng2TelInputOptions"; }, { "hasError": "hasError"; "ng2TelOutput": "ng2TelOutput"; "countryChange": "countryChange"; "intlTelInputObject": "intlTelInputObject"; }, never>;
}
