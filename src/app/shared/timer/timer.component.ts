import { NgIf } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  time = input<number>(0);
  countdown = computed(() => this.formatTime(this.totalSeconds()));
  private totalSeconds = signal(this.time() * 60); // 25 minutes in seconds
  private timerSubscription!: Subscription;

  isRunning = signal(false);

  ngOnInit(): void {
    this.totalSeconds.set(this.time() * 60);
  }

  startCountdown(): void {
    this.isRunning.set(true);

    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.totalSeconds() > 0) {
        this.totalSeconds.set(this.totalSeconds() - 1);
      } else {
        this.stopCountdown();
      }
    });
  }

  stopCountdown(): void {
    if (this.timerSubscription) {
      this.isRunning.set(false);
      this.timerSubscription.unsubscribe();
    }
  }

  private formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
}
