import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {FaceSnapComponent} from '../face-snap/face-snap.component';
import {FaceSnapsService} from '../services/face-snaps.service';
import {interval, Observable, Subject} from 'rxjs';
import {tap, takeUntil} from 'rxjs/operators';
import {AsyncPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps$!: Observable<FaceSnap[]>;
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {
  }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getFaceSnaps();
    this.destroy$ = new Subject<boolean>();
    // interval(1000).pipe(
    //   tap(console.log),
    //   takeUntil(this.destroy$)
    // ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
