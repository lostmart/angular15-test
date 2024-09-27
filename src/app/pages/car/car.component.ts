import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // setTimeout(() => {
    //   this.goHome();
    // }, 2000);
    const indexStr = this.activatedRoute.snapshot.params['index'];
    const index = parseInt(indexStr);
  }

  goHome() {
    this.router.navigate(['../']);
  }
}
