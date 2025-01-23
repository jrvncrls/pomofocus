import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { TimerComponent } from '../shared/timer/timer.component';

@Component({
  selector: 'app-break',
  standalone: true,
  imports: [HeaderComponent, TimerComponent],
  templateUrl: './break.component.html',
  styleUrl: './break.component.scss',
})
export class BreakComponent {
  router = inject(Router);

  goToFocus() {
    this.router.navigate(['/']);
  }
}
