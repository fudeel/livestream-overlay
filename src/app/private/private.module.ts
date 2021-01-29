import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrivateRoutingModule} from './private-routing.module';
import { PrivateComponent } from './private.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [PrivateComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrivateModule { }
