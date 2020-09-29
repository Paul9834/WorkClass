export class Tweet {
  id: number;
  text: string;
  date: Date;
  device: string;
  author: string;
  location: string;
  constructor(id?: number) {
    this.id = id;
  }
}
