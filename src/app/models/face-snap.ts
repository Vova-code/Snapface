export class FaceSnap {
  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number) {}

  removeSnap() {
    this.snaps--;
  }

  addSnap() {
    this.snaps++;
  }
}
