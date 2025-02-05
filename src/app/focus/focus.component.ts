import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { TimerComponent } from '../shared/timer/timer.component';

@Component({
  selector: 'app-focus',
  standalone: true,
  imports: [HeaderComponent, TimerComponent],
  templateUrl: './focus.component.html',
  styleUrl: './focus.component.scss',
})
export class FocusComponent {
  router = inject(Router);

  goToBreak() {
    this.router.navigate(['/break']);
  }
}
