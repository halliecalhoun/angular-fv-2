import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { GraySidebarComponent } from 'src/app/shared/components/gray-sidebar/gray-sidebar.component';
import { QuestionsSet1Component } from 'src/app/shared/components/questions-set1/questions-set1.component';
import { ModalTopbarComponent } from 'src/app/shared/components/modal-topbar/modal-topbar.component';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
