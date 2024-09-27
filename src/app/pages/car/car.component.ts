import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent {
  currentIndex: number = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // bind to params
    // binds is an observable, so you can subscribe to it
    this.activatedRoute.params.subscribe((params: Params) => {
      const indexStr = params['index'];
      const index = parseInt(indexStr);
      this.currentIndex = index;
    });
  }

  goHome() {
    this.router.navigate(['../']);
  }
}
