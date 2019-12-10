import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    }
  ]
})
export class EmailInputComponent implements OnInit, ControlValueAccessor {

  public emailForm: FormGroup;
  public disabled: boolean;

  constructor() {
    this.emailForm = new FormGroup({
      email: new FormControl('')
    });
  }

  ngOnInit() {
    this.emailForm.valueChanges.subscribe((data) => {
      if (data && !this.disabled) {
        this.propagateChange();
      }
    });
  }
  /**
   * Function registered to propagate a change to the parent
   */
  public propagateChange: any = () => {
    console.log(this.emailForm);
  };

  /**
   * Function registered to propagate touched to the parent
   */
  public propagateTouched: any = () => {};
  /**
   * ControlValueAccessor Interface Methods to be implemented
   */
  writeValue(obj: any): void {
    console.log("Write value");
    this.emailForm.get('email').setValue(obj);
    this.emailForm.get('email').setValidators([Validators.required, Validators.email]);
  }
  registerOnChange(fn: any): void {
    console.log("Register on change");
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    console.log("Register on touched");
    this.propagateTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log("Set disabled state");
    this.disabled = isDisabled;
    // throw new Error("Method not implemented.");
  }
  /** ControlValueAccessor Interface Methods to be implemented */

  test() {
    console.log(this.emailForm);
  }
}
