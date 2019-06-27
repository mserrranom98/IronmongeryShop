import {FormControl} from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export class Validator {

  public static password(control: FormControl): ValidationResult {
    const hasNumber = /\d/.test(control.value);
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    const hasLength = /^.{8,}$/.test(control.value);
    const hasChar = /[^A-Za-z0-9]/.test(control.value);
    // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
    const valid = hasNumber && hasUpper && hasLower && hasChar && hasLength;
    if (!valid) {
      // return what´s not valid
      return { strong: true };
    }
    return null;
  }
}
