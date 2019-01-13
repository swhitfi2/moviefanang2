import MovieFan from '../models/moviefan.models'; 
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()//required to allow services to be pasted around
export class MoviefanService {

  api_url = 'http://localhost:3000';
  moviefanUrl = `${this.api_url}/api/moviefans`;

  constructor(private http: HttpClient) { }

//Create moviefan, takes a MovieFan Object

createMoviefan(moviefan: MovieFan): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.moviefanUrl}`, moviefan);
  }

//Read moviefan, takes no arguments
getMovieFans(): Observable<MovieFan[]>{
    return this.http.get(this.moviefanUrl)//this function returns an observable
    .pipe(map(res  => {
      //Maps the response object sent from the server
        //map is success we are not handling errors in this example
      return res["data"].docs as MovieFan[];
    }))
  } 

//Update moviefan, takes a MovieFan Object as parameter makes a put request
editMoviefan(moviefan:MovieFan){
    let editUrl = `${this.moviefanUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, moviefan);
  } 
//delete moviefan
deleteMoviefan(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.moviefanUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

  //currently not being used
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }

}