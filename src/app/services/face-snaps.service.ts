import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {SnapType} from '../models/snap-type.type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis toujours !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    ).withLocation('à la montagne'),
    new FaceSnap(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      new Date(),
      6
    ),
    new FaceSnap(
      'Un bon repas',
      'Mmmh que c\'est bon !',
      'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      new Date(),
      156
    )
  ];

  constructor(private httpClient: HttpClient) {
  }

  getFaceSnaps(): Observable<FaceSnap[]> {
    return this.httpClient.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.httpClient.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(Number(faceSnapId));
  }

  addFaceSnap(formValues: {title: string, description: string, imageUrl: string, location?: string}): void {
    const newFaceSnap = {
      ...formValues,
      snaps: 0,
      createdDate: new Date(),
      id: crypto.randomUUID().substring(0, 8),
    } as FaceSnap;
    this.faceSnaps.push(newFaceSnap);
  }
}
