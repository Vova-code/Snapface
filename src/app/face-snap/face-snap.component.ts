import {Component, Input, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, UpperCasePipe} from '@angular/common';
import {FaceSnap} from '../models/face-snap';
import {FaceSnapsService} from '../services/face-snaps.service';
import {Router} from '@angular/router';

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
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router) {}

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
