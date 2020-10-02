import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PropertiesListComponent } from './pages/properties-list/properties-list.component';
import { AngularDashboardComponent } from './angular-dashboard/angular-dashboard.component';
import { AngularNavComponent } from './angular-nav/angular-nav.component';
import { AngularTableComponent } from './angular-table/angular-table.component';
import { AngularAddressFormComponent } from './angular-address-form/angular-address-form.component';
import { AngularTreeComponent } from './angular-tree/angular-tree.component';
import { AngularDragDropComponent } from './angular-drag-drop/angular-drag-drop.component';
import { StepOneComponent } from './layouts/order-form/steps/step-one/step-one.component';
import { OrderFormComponent } from './layouts/order-form/order-form.component';

const routes: Routes = [
  {
    path: 'properties-list',
    component: PropertiesListComponent
  },
  {
    path: 'order-form',
    component: OrderFormComponent
  },
{
  path: 'angular-nav',
  component: AngularNavComponent
},
  {
    path: '',
    component: DefaultComponent,
      children: [{
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
      path: 'step-one',
      component: StepOneComponent
    },
        {
      path: 'posts',
      component: PostsComponent
  },
{
  path: 'angular-dash',
  component: AngularDashboardComponent
},
// {
//   path: 'angular-nav',
//   component: AngularNavComponent
// },
{
  path: 'angular-table',
  component: AngularTableComponent
},
{
  path: 'angular-address-form',
  component: AngularAddressFormComponent
},
{
  path: 'angular-tree',
  component: AngularTreeComponent
},
{
  path: 'properties',
  component: PropertiesListComponent
},
{
  path: 'angular-drag-drop',
  component: AngularDragDropComponent
}],
  }
// {
//   path: 'order-form',
//   component: OrderFormComponent,
//     children: [{
//       path: '',
//       component: AngularDashboardComponent
//     },
//     {
//       path: 'step-one',
//       component: StepOneComponent
//   }]
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
