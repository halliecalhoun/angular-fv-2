import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
// import { PropertiesListComponent } from 'src/app/pages/properties-list/properties-list.component';
// import { Step1Component } from 'src/app/modules/steps/step1/step1.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
// import { MatListModule } from '@angular/material';
// import { MatGridListModule, MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AreaComponent } from 'src/app/shared/widgets/area/area.component';
// import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';
import { MatListModule } from '@angular/material/list';
import { OrderFormComponent } from '../order-form/order-form.component';
// import { OrderFormModule } from '../order-form/order-form.module';
import { MatRadioModule } from '@angular/material/radio';
import { MaterialModule } from 'src/app/material/material.module';
import { SidenavComponent } from 'src/app/shared/components/sidenav/sidenav.component';

// import { MatDrawerContainerModule } from '@angular/material/'
// import { MatGridListModule } from '@angular/material/grid-list/grid-list/MatGridListModule';
// import { MatGridListModule } from '@angular/material/grid-list/grid-list-module';

// import { MatGridList } from '@angsular/material/grid-list/MatGridList';
// import { MatGridTile } from '@angular/material/grid-list/grid-tile/MatGridTile';

@NgModule({
  declarations: [

    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    // SidenavComponent,
    // OrderFormComponent
    // Step1Component
    // TaskViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatRadioModule,
    // AreaComponent,
    MatCardModule,
    MatListModule,
    MaterialModule
   
    // OrderFormModule,
    // MatNavListModule,
    // DashboardModule,
    // AreaComponent
    // MatListModule,
    // MatGridListModule,
    // MatCardModule,
    // MatGridTile,
    // MatGridList,
  ],
  exports: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  //   // MaterialModule,
 
  ]
})
export class DefaultModule { }
