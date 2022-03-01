import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {DragDropModule} from 'primeng/dragdrop';


const modules = [
  FormsModule,
  ReactiveFormsModule,
  ButtonModule,
  CalendarModule,
  DropdownModule,
  InputTextModule,
  InputTextareaModule,
  DragDropModule
]


@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
  ]
})
export class SharedModule { }
