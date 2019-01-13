class MovieFan {
    _id: string;
    name: string;
    email: string;
    favoriteMovie: string; 
    date: Date;
    status: string;
  
  constructor(){
    this.name = ""
    this.email = ""
    this.favoriteMovie = ""
    this.date = new Date()
    this.status = ""
    }

}   
export default MovieFan;