import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarTitle!: string;
  @Output() showMobileSidebar = new EventEmitter<boolean>();
  mobileSidebarToggle() { 
    this.showMobileSidebar.emit(true);
    
    if (this.showMobileSidebar) {
      console.log(this.showMobileSidebar)
      document.body.style.overflow = 'hidden';
    }
    
  }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    // console.log(this.titleService.getTitle())
    if (this.titleService.getTitle() === "Dashboard Overview") {
      this.navbarTitle = "Dashboard Overview";
      // console.log(this.navbarTitle)
    }
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const rt = this.getChild(this.activatedRoute);
      rt.data.subscribe(data => {
        this.navbarTitle = data['title'];
        console.log(data,this);
        this.titleService.setTitle(data['title'])
      });
    });
  }
  getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}