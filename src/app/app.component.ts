import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {RouterOutlet} from '@angular/router';
import {interval, Observable} from 'rxjs';
import {map, filter, tap} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  interval$!: Observable<string>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ?
        `Je suis ${value} et je suis Pair` :
        `Je suis ${value} et je suis Impair`
      ),
      tap(value => this.logger(value))
    );
  }

  logger(text: string): void {
    console.log(`Log ${text}`)
  }
}
