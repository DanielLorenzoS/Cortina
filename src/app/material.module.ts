import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 

const materialModules = [
  MatButtonModule,
  MatSidenavModule,
  MatButtonToggleModule,
  FormsModule,
  ReactiveFormsModule,
  MatCardModule
];

@NgModule({
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules],
})

export class MaterialModule {}