import { Component } from '@angular/core';
import { RandomjokeService } from './randomjoke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'randomjokes';

  jokeArray:any[] = []
  buttonText: string = "Başlat ";
  sayac:number = 0
  disabled:boolean = false

  constructor(private jokeService: RandomjokeService) { }

  getRandomJoke() {
    if(this.jokeArray.length !==0 && this.sayac !==0){
      this.buttonText = "Başlat "
      this.sayac +=1 
    }else{
      this.buttonText = "Bir sonraki şaka gelsin "
    }

    setTimeout(() => {
      this.disabled = true;
    });
    this.jokeService.getJoke().subscribe(response=> {
          this.jokeArray.push(response as any[])
    });
    this.jokeArray.splice(0,this.jokeArray.length)

    setTimeout(() => {
      this.disabled = false;
    }, 4000);
  }

  waitForaWhile():boolean{
    return this.disabled
  }
}  
