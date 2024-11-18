import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

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
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped!: boolean;
  snapButtonText!: string;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
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
    this.snaps--;
    this.snapped = false;
    this.snapButtonText = 'Oh Snap!';
  }

  private unSnap() {
    this.snaps++;
    this.snapped = true;
    this.snapButtonText = 'Oops, un Snap!'
  }
}
