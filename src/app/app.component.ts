import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {delay, interval, of, switchMap, take} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {CoreModule} from './core/core.module';
import {LandingPageModule} from './landing-page/landing-page.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CoreModule,
    LandingPageModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit() {
    interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      switchMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`)),
    )
    // .subscribe()
  }

  translateColor(color: 'rouge' | 'jaune'): string {
    return color === 'rouge' ? 'red' : 'yellow';
  }

  private getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `font-decoration: underline; color: ${this.translateColor(color)}`);

    return of({color, trainIndex}).pipe(
        delay(isRedTrain ? 5000 : 6000),
    );
  }
}
