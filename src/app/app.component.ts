import { Component } from '@angular/core';

// Component Decorator
@Component({ // `@Decorator` - TS: provides meta-data to determine how component is processed, meta-data, etc.
  selector: 'app-root', // component name
  templateUrl: './app.component.html',  // Component View/Structure
  styleUrls: ['./app.component.css']  // Component Style Sheet
})
export class AppComponent {
  title = 'Kieran\'s General Assembly App'; // referenced on `app.component.html` on line (approx) 49
  passedFromComponentTS = "I am some meta data passed from the `export` class in `app.component.ts`. Think of me as prop values being passed down." // passed to approx line 60
}
