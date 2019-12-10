import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'CVA with reactive / template driven form';
  public userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      hasEmail: new FormControl(false),
      email: new FormControl({value: '', disabled: true}, [Validators.email, Validators.required]),
      counter: new FormControl(2)
    });
  }

  ngOnInit(): void {
    let email = this.userForm.get('email');

    this.userForm.controls.hasEmail.valueChanges.subscribe((data) => {
      if(data && email) {
        email.enable();
      } else {
        email.disable();
      }
    });
  }

  public saveForm() {
    console.log('********Form submit********');
    this.userForm.markAsDirty();
    console.log(this.userForm.status);
  }
}
