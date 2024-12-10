import {Component, Input} from '@angular/core';
import {FaceSnap} from '../../../core/models/face-snap';
import {FaceSnapsService} from '../../../core/services/face-snaps.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-face-snap',
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
