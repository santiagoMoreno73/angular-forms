import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validatorsService } from 'src/app/shared/service/validators.service';
import { emailValidator } from 'src/app/shared/validators/email-validator.service';
// import * as customValidators from 'src/app/shared/validators/validators';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html'
})

export class RegisterComponent implements OnInit {
    public myForm: FormGroup = this.fb.group({
        name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
        email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
        username: ['', [Validators.required, this.validatorService.cantBeStrider]],
        password: ['', Validators.required, Validators.minLength(6)],
        confirm: ['', Validators.required]
    }, {
        validators: [
            this.validatorService.isFieldOneEqualFieldTwo("password", "confirm"),
        ]
    });

    constructor(private fb: FormBuilder, private validatorService: validatorsService, private emailValidator: emailValidator) { }

    ngOnInit() { }

    isValidField(field: string) {
        return this.validatorService.isValidField(this.myForm, field);
    }

    saveForm() {
        this.myForm.markAllAsTouched();
    }
}