export class FaceSnap {
  location?: string;

  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number) {}

  removeSnap(): void {
    this.snaps--;
  }

  addSnap(): void {
    this.snaps++;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }

  setLocation(location: string): void {
    this.location = location;
  }
}
