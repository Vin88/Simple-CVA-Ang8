import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmailInputComponent } from './components/email-input/email-input.component';
import {MatInputModule} from '@angular/material/input';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [EmailInputComponent, CounterComponent],
  exports: [EmailInputComponent, CounterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class SharedModule { }
