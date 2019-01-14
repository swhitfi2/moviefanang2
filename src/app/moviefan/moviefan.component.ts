//import { Response } from '@angular/http';
import { MoviefanService } from '../services/moviefan.services';
import MovieFan from '../models/moviefan.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviefan',
  templateUrl: './moviefan.component.html',
  styleUrls: ['./moviefan.component.scss']
})
export class MoviefanComponent implements OnInit {

  constructor(
    private moviefanService: MoviefanService
  ) { }

  public newMoviefan: MovieFan = new MovieFan()

  moviefansList: MovieFan[];
  editMoviefans: MovieFan[] = []; // the equals [] 
 
//calls the service ask the service for the movie fans
ngOnInit(): void {

  //At component initialization the 
  this.moviefanService.getMovieFans()
    .subscribe(moviefans => {
      //assign the moviefanlist property to the proper http response
      this.moviefansList = moviefans
      console.log(moviefans)
    })
}

//This method will get called on Create button event

create() {
  this.moviefanService.createMoviefan(this.newMoviefan)
    .subscribe((res) => {
      this.moviefansList.push(res.data)
      this.newMoviefan = new MovieFan() /// this allows the new moviefan in form to clear the fields
    })
}

//edit function
editMoviefan(moviefan: MovieFan) {
  console.log(moviefan)//debug code line to see values
   if(this.moviefansList.includes(moviefan)){ // is this a moviefan retrieved from the api
    if(!this.editMoviefans.includes(moviefan)){ //is this in the list to be edited
      this.editMoviefans.push(moviefan) //if not in the list add to edit list
    }else{
      this.editMoviefans.splice(this.editMoviefans.indexOf(moviefan), 1)// remove this element from the array get the right moviefans
      this.moviefanService.editMoviefan(moviefan).subscribe(res => { // call to service
        console.log('Update Succesful')
       }, err => {
          //this.editmoviefan(moviefan)
          console.error('Update Unsuccesful')
        })
      }
    }
  }
//updating the status to complete change status to done //changed from Done
  doneMoviefan(moviefan:MovieFan){
    moviefan.status = 'Complete'
    this.moviefanService.editMoviefan(moviefan).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      //this.editmoviefan(moviefan)
      console.error('Update Unsuccesful')
    })
  }

  //listening for the enter key event if selected edit moviefan field
  submitMoviefan(event, moviefan:MovieFan){
    if(event.keyCode ==13){ // keycode ==13 is the enter key
      this.editMoviefan(moviefan)
    }
  }

  //delete function
  deleteMoviefan(moviefan: MovieFan) {
    this.moviefanService.deleteMoviefan(moviefan._id).subscribe(res => {
      this.moviefansList.splice(this.moviefansList.indexOf(moviefan), 1);
      //betterway can ask api for the list
    })
  }

}
