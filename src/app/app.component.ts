import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    private router: Router
  ) {

  }

  onPage1() {
    this.router.navigate(['/page1']);
  }

  onPage2() {
    this.router.navigate(['/page2']);
  }
}
