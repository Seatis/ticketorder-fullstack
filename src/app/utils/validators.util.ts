import {FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class AppValidators {

  static numberValidator: ValidatorFn = (control: FormControl): ValidationErrors => {
    const valid: boolean = (/^\d+$/.test(control.value));
    let error: ValidationErrors = null;
    if (control.value && !valid) {
      error = {'érvénytelen': {value: control.value}};
    }
    return error;
  }

}
