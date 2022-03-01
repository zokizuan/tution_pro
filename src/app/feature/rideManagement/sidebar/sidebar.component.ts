import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { links } from 'src/app/core/routes.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input()
  showMobileSidebar: boolean = false;
  @Output() hideMobileSidebar = new EventEmitter<boolean>();
  
  constructor() { }
  get links() {
    return links;
  }
  hideSidebar() {
    // this.showMobileSidebar = false;
    this.hideMobileSidebar.emit(false);
    document.body.removeAttribute('style');    
  }
  ngOnInit(): void {
    
  }

}
