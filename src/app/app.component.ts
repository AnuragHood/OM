import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OM, Your online spiritual caretaker';
  breakpoint: number;
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 479) ? 1 : 3;

}

onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 479) ? 1 : 3;
  this.breakpoint = (event.target.innerWidth >= 480 && event.target.innerWidth <= 767) ? 2 : 3;

}
}
