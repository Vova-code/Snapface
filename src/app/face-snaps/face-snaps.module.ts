import { NgModule } from '@angular/core';
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgStyle,
  PercentPipe,
  UpperCasePipe
} from '@angular/common';
import {FaceSnapComponent} from './components/face-snap/face-snap.component';
import {SingleFaceSnapComponent} from './components/single-face-snap/single-face-snap.component';
import {NewFaceSnapComponent} from './components/new-face-snap/new-face-snap.component';
import {FaceSnapListComponent} from './components/face-snap-list/face-snap-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FaceSnapsRoutingModule} from './face-snaps-routing.module';



@NgModule({
  declarations: [
    FaceSnapComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent,
    FaceSnapListComponent,
  ],
  imports: [
    CommonModule,
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    ReactiveFormsModule,
    FaceSnapsRoutingModule
  ],
  exports: [
    FaceSnapComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent,
    FaceSnapListComponent,]
})
export class FaceSnapsModule { }
