import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  prediction = "Tap 8ball for an answer";
  answered = false;
  predictionList;
  answer: string;
  imageUrl = "../assets/imgs/8ball.png";
  imgArray = ["", "", ""];
  shakeTime = 0;
  num = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  askTeller() {
    this.num = 0 ;
    console.log("clicking")
    this.shakeTime = 0;
    this.answer = ""
    this.prediction = "Tap 8ball for an answer";
    this.imageUrl = "../assets/imgs/8ball.png"

    setTimeout(() => {
      
      this.answer = this.predictionList[Math.floor(Math.random() * this.predictionList.length)];
      

      for (var i = 0; i < 9; i++) {
        this.num = this.num + 1;
        this.imageUrl = "../assets/imgs/8ballDot" + this.num + ".png";
        if (this.num === 3) {
          this.num = 1;
        }
        console.log("imageUrl " + this.imageUrl);
        setTimeout(() => {

          
          if(i===9)this.imageUrl = "../assets/imgs/8ball_blank_ready.png" ;

          this.shakeTime = this.shakeTime + 300;
          console.log("shakeTime = " + this.shakeTime);
        }, 300)
      }
      
    }, 2000);

    //this.imageUrl = "../assets/imgs/8ballDot" + this.num + ".png";
    //this.imageUrl = "../assets/imgs/8ball_blank_ready.png" 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
  }

}
