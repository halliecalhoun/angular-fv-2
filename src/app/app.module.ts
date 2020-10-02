import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AreaComponent } from './shared/widgets/area/area.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { PostsComponent } from './modules/posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { PropertiesListComponent } from './pages/properties-list/properties-list.component';
import { OrderFormComponent } from './layouts/order-form/order-form.component';
import { AngularNavComponent } from './angular-nav/angular-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AngularDashboardComponent } from './angular-dashboard/angular-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AngularTableComponent } from './angular-table/angular-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AngularTreeComponent } from './angular-tree/angular-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { AngularDragDropComponent } from './angular-drag-drop/angular-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularAddressFormComponent } from './angular-address-form/angular-address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrderFormModule } from './layouts/order-form/order-form.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesListComponent,
    // OrderFormComponent,
    AngularNavComponent,
    AngularDashboardComponent,
    AngularTableComponent,
    AngularTreeComponent,
    AngularDragDropComponent,
    AngularAddressFormComponent,
    // LoginPageComponent,
    // AreaComponent,
    // HeaderComponent,
    // FooterComponent,
    // SidebarComponent,
    // PostsComponent,
    // DashboardComponent,
    // DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    DefaultModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatRadioModule,
    OrderFormModule,
    // MatIconModule,
    
    NgbModule,
    MaterialModule
    // AreaComponent
  ],
  exports: [
    // AngularAddressFormComponent,
    PropertiesListComponent,
    // OrderFormComponent,
    AngularNavComponent,
    AngularDashboardComponent,
    AngularTableComponent,
    AngularTreeComponent,
    AngularDragDropComponent,
    AngularAddressFormComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
