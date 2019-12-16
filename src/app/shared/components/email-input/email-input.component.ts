import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

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

  public emailControl: FormControl;
  public disabled: boolean;

  constructor() {
    this.emailControl = new FormControl('', [Validators.required, Validators.email]);
  }

  ngOnInit() {
    this.emailControl.valueChanges.subscribe((data) => {
      if (data && !this.disabled) {
        this.propagateChange();
      }
    });
  }

  /**
   * Function registered to propagate a change to the parent
   */
  public propagateChange: any = () => {};

  /**
   * Function registered to propagate touched to the parent
   */
  public propagateTouched: any = () => {};
  /**
   * ControlValueAccessor Interface Methods to be implemented
   */
  writeValue(obj: any): void {
    this.emailControl.setValue(obj);
    // this.emailForm.get('email').setValidators();
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  /** ControlValueAccessor Interface Methods to be implemented */
}
