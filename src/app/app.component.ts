import { Component } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [AlertComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  nav_title = 'Title NavBar';
  title = 'App under dev!';

  data = {
    input: {
      text: 'type someting here'
    }
  };

  button() {
    console.log('push');
  }
}
