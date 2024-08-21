import { Component } from '@angular/core';

@Component({
  selector: 'app-count-down',
  standalone: true,
  imports: [],
  templateUrl: './count-down.component.html',
  styleUrl: './count-down.component.css',
})
export class CountDownComponent {
  newYear: Date = new Date('09/01/2024');

  days: number = 0;
  hours: number = 0;
  mins: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
    setInterval(() => this.countTimer(), 1000);
  }

  countTimer() {
    const currentDate: Date = new Date();
    const currentDateTotalSeconds: number = currentDate.getTime();

    const totalSeconds =
      (this.newYear.getTime() - currentDateTotalSeconds) / 1000;

    const daysCalc = Math.floor(totalSeconds / 3600 / 24);
    const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
    const minsCalc = Math.floor(totalSeconds / 60) % 60;
    const secondsCalc = Math.floor(totalSeconds % 60);

    this.days = daysCalc;
    this.hours = hoursCalc;
    this.mins = minsCalc;
    this.seconds = secondsCalc;
  }
}
