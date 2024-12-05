import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {SnapType} from '../models/snap-type.type';
import {HttpClient} from '@angular/common/http';
import {Observable, switchMap} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {

  constructor(private httpClient: HttpClient) {
  }

  getFaceSnaps(): Observable<FaceSnap[]> {
    return this.httpClient.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.httpClient.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`).pipe(
      tap(faceSnap => console.log(faceSnap)),
    );
  }

  snapFaceSnapById(faceSnapId: number, snapType: SnapType): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updateFaceSnap => this.httpClient.put<FaceSnap>(
        `http://localhost:3000/facesnaps/${faceSnapId}`,
        updateFaceSnap
      ))
    );
  }

  addFaceSnap(formValues: {title: string, description: string, imageUrl: string, location?: string}): Observable<FaceSnap> {
    return this.getFaceSnaps().pipe(
      map(faceSnaps => [...faceSnaps].sort((a, b) => a.id - b.id)),
      map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
      map(previousFaceSnap => ({
        ...formValues,
        id: previousFaceSnap.id + 1,
        createdDate: new Date(),
        snaps: 0
      })),
      switchMap(newFaceSnap => this.httpClient.post<FaceSnap>(`http://localhost:3000/facesnaps`, newFaceSnap))
    );
  }
}
