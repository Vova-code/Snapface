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
  @Input() faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;

  hasBeenSnapped!: boolean;
  snapButtonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  private prepareInterface(): void {
    this.snapButtonText = 'Oh Snap!';
    this.hasBeenSnapped = false;
  }

  private getFaceSnap(): void {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  handleSnap() {
    if (this.hasBeenSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  private unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.hasBeenSnapped = false;
    this.snapButtonText = 'Oh Snap!';
  }

  private snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.hasBeenSnapped = true;
    this.snapButtonText = 'Oops, un Snap!'
  }
}
