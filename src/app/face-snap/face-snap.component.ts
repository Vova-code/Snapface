import {Component, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FaceSnap} from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;
  snapButtonText!: string;

  ngOnInit(): void {
    this.snapped = false;
    this.snapButtonText = 'Oh Snap!';
  }

  handleSnap() {
    if (!this.snapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  private snap() {
    this.faceSnap.removeSnap();
    this.snapped = false;
    this.snapButtonText = 'Oh Snap!';
  }

  private unSnap() {
    this.faceSnap.addSnap();
    this.snapped = true;
    this.snapButtonText = 'Oops, un Snap!'
  }
}
