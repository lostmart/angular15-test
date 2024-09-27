import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent {
  constructor(private router: Router) {
    setTimeout(() => {
      this.goHome();
    }, 2000);
  }

  goHome() {
    this.router.navigate(['../']);
  }
}
