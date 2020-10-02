import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material/material.module';
// MaterialModule
// MatDrawer MatIconModule MatDrawerContainer MatModule
// MatIconModule
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
   showFiller = false;
  // sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  // sideBarToggler() {
  //   this.sideBarOpen = !this.sideBarOpen;
  // }
}
