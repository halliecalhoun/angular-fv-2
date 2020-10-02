import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepOneComponent } from './steps/step-one/step-one.component';
import { StepTwoComponent } from './steps/step-two/step-two.component';
import { StepThreeComponent } from './steps/step-three/step-three.component';
import { StepFourComponent } from './steps/step-four/step-four.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderFormComponent } from './order-form.component';
import { GraySidebarComponent } from 'src/app/shared/components/gray-sidebar/gray-sidebar.component';
import { QuestionsSet1Component } from 'src/app/shared/components/questions-set1/questions-set1.component';
// import { ModalTopbarComponent } from 'src/app/shared/components/modal-topbar/modal-topbar.component';


@NgModule({
  declarations: [
    OrderFormComponent,
    StepOneComponent,
    GraySidebarComponent,
    QuestionsSet1Component,

  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    
  ],
  exports: [
    OrderFormComponent,
    StepOneComponent,
    GraySidebarComponent,
    QuestionsSet1Component,
  ]
})
export class OrderFormModule { }
