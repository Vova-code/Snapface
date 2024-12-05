import {Component, Input, OnInit} from '@angular/core';
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgIf,
  NgStyle,
  PercentPipe,
  UpperCasePipe
} from "@angular/common";
import {FaceSnap} from '../models/face-snap';
import {FaceSnapsService} from '../services/face-snaps.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    UpperCasePipe,
    NgClass,
    NgStyle,
    RouterLink,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  snapButtonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!';
    this.getFaceSnap();
  }

  private getFaceSnap(): void {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  handleSnap(faceSnapId: number) {
    if (this.snapButtonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.snapButtonText = 'Oops, un Snap!')
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.snapButtonText = 'Oh Snap!')
      );
    }
  }
}
