import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  showMobileSidebar:boolean = false;
  constructor() { }
  hideSidebar() {
    this.showMobileSidebar = !this.showMobileSidebar;
    document.body.removeAttribute('style');

  }
  ngOnInit(): void {
  }

}
