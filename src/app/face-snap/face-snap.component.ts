import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgStyle, UpperCasePipe} from '@angular/common';
import {FaceSnap} from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  hasBeenSnapped!: boolean;
  snapButtonText!: string;

  ngOnInit(): void {
    this.hasBeenSnapped = false;
    this.snapButtonText = 'Oh Snap!';
  }

  handleSnap() {
    if (!this.hasBeenSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  private snap() {
    this.faceSnap.removeSnap();
    this.hasBeenSnapped = false;
    this.snapButtonText = 'Oh Snap!';
  }

  private unSnap() {
    this.faceSnap.addSnap();
    this.hasBeenSnapped = true;
    this.snapButtonText = 'Oops, un Snap!'
  }
}
