import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnap} from '../../../core/models/face-snap';
import {FaceSnapsService} from '../../../core/services/face-snaps.service';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
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
