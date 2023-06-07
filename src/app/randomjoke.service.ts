import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomjokeService {

  constructor(private http:HttpClient) { }


  getJoke(){
    return this.http.get("https://official-joke-api.appspot.com/jokes/random")
  }
}
