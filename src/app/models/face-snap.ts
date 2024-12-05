import {SnapType} from './snap-type.type';

export class FaceSnap {
  location?: string;

  constructor(public id: number,
              public title: string,
              public description: string,
              public imageUrl: string,
              public createdDate: Date,
              public snaps: number) {
  }

  snap(snapType: SnapType): void {
    if (snapType === 'snap') {
      this.snaps++;
    } else if (snapType === 'unsnap') {
      this.snaps--;
    }
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }

  setLocation(location: string): void {
    this.location = location;
  }
}
