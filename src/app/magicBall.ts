import { Injectable } from "@angular/core";

export class Image {
  constructor(public name: string) { 
    console.log("imageANme " + name)
  }

}

const ALL_IMAGES = [
  '../assets/imgs/8ballDot1.png',
  '../assets/imgs/8ballDot2.png',
  '../assets/imgs/8ballDot3.png'

].map(name => new Image(name));


@Injectable()
export class ImageService {
    
//   public images: Image[] = [];
  

}

