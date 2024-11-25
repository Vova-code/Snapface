import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {FaceSnap} from '../models/face-snap';
import {map} from 'rxjs/operators';
import {AsyncPipe, DatePipe, NgIf, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UpperCasePipe,
    AsyncPipe,
    DatePipe,
    NgIf
  ],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null],
    });
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdAt: new Date(),
        snaps: 0,
        id: 0
      }))
    );
  }

  onSubmitForm(): void {
    console.log(this.snapForm.value);
  }
}
