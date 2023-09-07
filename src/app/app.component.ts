import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/button-helm'
@Component({
  standalone: true,
  imports: [HlmButtonDirective],
  selector: 'app-root',
  template: `<button hlmBtn>Hello from {{title}}</button>`
})
export class AppComponent {
  title = 'sparta';
}
