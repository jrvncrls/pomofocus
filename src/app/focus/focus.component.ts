import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { TimerComponent } from '../shared/timer/timer.component';

@Component({
  selector: 'app-focus',
  standalone: true,
  imports: [HeaderComponent, TimerComponent],
  templateUrl: './focus.component.html',
  styleUrl: './focus.component.scss',
})
export class FocusComponent {}
