import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true
    }
  ]
})
export class CounterComponent implements OnInit, ControlValueAccessor {
  public counter: number = 0;
  public disabled: boolean;
  constructor() {
   }

  ngOnInit() {
    // this.counter.valueChanges.subscribe((data) => {
    //   if (data && !this.disabled) {
    //     this.propagateChange();
    //   }
    // });
  }
  /**
   * Function registered to propagate a change to the parent
   */
  public propagateChange: any = () => {
    console.log(this.counter);
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
    this.counter = obj;
    // this.counterForm.get('email').setValidators([Validators.required, Validators.email]);
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

  public decrement() {
    console.log(this.counter);
    // this.counter.patchValue(this.counter.value - 1);
    this.counter = this.counter - 1;
    this.propagateChange(this.counter);
  }

  public increment() {
    console.log(this.counter);
    this.counter = this.counter + 1;
    // this.counter.patchValue(this.counter.value + 1);
    this.propagateChange(this.counter);
  }
}
