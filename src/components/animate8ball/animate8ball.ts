import { Component, ViewChild, ElementRef, Renderer2,} from '@angular/core';
import { fade } from '../../app/animations';
import { PointerEvents } from 'ionic-angular/umd/gestures/pointer-events';
/**
 * Generated class for the Animate8ballComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  
  selector: 'animate8ball',
  templateUrl: 'animate8ball.html',
  animations: fade
  
})

export class Animate8ballComponent {
  
  text: string;
  images = [];
  image1 = "../assets/imgs/8ball.png";
  image2 = "../assets/imgs/8ballDot1.png";
  counter = 0;
  choice = 2;
  state = "in";
  enableAnimation = false;
  imageSource;
  predictionList;
  answerShowing = false;
  answer;
  @ViewChild('image') image : ElementRef;
  constructor(private renderer: Renderer2) {

    console.log('Hello Animate8ballComponent Component');
    this.predictionList = [
      "Signs point to yes",
      "Yes",
      "Reply hazy, try again",
      "Without a doubt",
      "My sources say no",
      "As I see it, yes",
      "You may rely on it",
      "Concentrate and ask again",
      "Outlook not so good",
      "It is decidedly so",
      "Better not tell you now",
      "Very doubtful",
      "Yes - definitely",
      "It is certain",
      "Cannot predict now",
      "Most likely",
      "Ask again later",
      "My reply is no",
      "Outlook good",
      "Don't count on it"
    ];
    this.imageSource = this.image1;
    console.log("images " + this.images);
  }
  askFortune(){
    this.renderer.setStyle(this.image.nativeElement, 'pointer-events' , 'none');
    if (this.answerShowing === true) {
      this.answer = "";
      this.answerShowing = false;
      
        
    }else{

      setTimeout(() => {
        this.answer = this.predictionList[Math.floor(Math.random() * this.predictionList.length)];
        }, 2000);
        this.answerShowing = true;

      }

      setTimeout(() => {
        this.renderer.setStyle(this.image.nativeElement, 'pointer-events' , 'auto');
      }, 2000);
   
    console.log("askFortune");
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
  }

  toggleImg() {
    if (this.choice === 1) {
      this.imageSource = this.image1;
      this.choice = 2;
    } else {
      this.imageSource = this.image2;
      this.choice = 1;
    }
  }

  onDone($event) {
    console.log("ondone");
    if (this.enableAnimation) {
      
      if (this.counter === 1) {
        this.toggleImg();
      }
      this.toggleState();
      this.enableAnimation = false;
    }
  }

  toggleState() {

    if (this.counter < 2) {
      console.log("boom");
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++; 
    }
     this.enableAnimation = true;
    } 
}
