import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector     : 'forms-wizards',
    templateUrl  : './wizards.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FormsWizardsComponent implements OnInit
{
    horizontalStepperForm: FormGroup;
    verticalStepperForm: FormGroup;

    /**
     * Constructor
     */
    constructor(private _formBuilder: FormBuilder)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Horizontal stepper form
        this.horizontalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                email   : ['', []],
                country : [''],
                language: ['']
            }),
            step2: this._formBuilder.group({
                firstName: [''],
                lastName : [''],
                userName : [''],
                about    : ['']
            }),
            step3: this._formBuilder.group({
                byEmail          : this._formBuilder.group({
                    companyNews     : [true],
                    featuredProducts: [false],
                    messages        : [true]
                }),
                pushNotifications: ['everything']
            })
        });

        // Vertical stepper form
        this.verticalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                email   : ['', []],
                country : [''],
                language: ['']
            }),
            step2: this._formBuilder.group({
                firstName: [''],
                lastName : [''],
                userName : [''],
                about    : ['']
            }),
            step3: this._formBuilder.group({
                byEmail          : this._formBuilder.group({
                    companyNews     : [true],
                    featuredProducts: [false],
                    messages        : [true]
                }),
                pushNotifications: ['everything']
            })
        });
    }
}
