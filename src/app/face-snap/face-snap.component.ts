import {Component, Input, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, UpperCasePipe} from '@angular/common';
import {FaceSnap} from '../models/face-snap';
import {FaceSnapsService} from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  hasBeenSnapped!: boolean;
  snapButtonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.hasBeenSnapped = false;
    this.snapButtonText = 'Oh Snap!';
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
