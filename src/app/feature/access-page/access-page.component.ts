import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-page',
  templateUrl: './access-page.component.html',
  styleUrls: ['./access-page.component.scss']
})
export class AccessPageComponent implements OnInit {

  constructor(private router: Router) { }
  redirectToRideManagement() {
    this.router.navigate(['/rideManagement']);
  }
  ngOnInit(): void {
  }

}
