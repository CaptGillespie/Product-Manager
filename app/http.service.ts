import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  makeNewRestaurants(newRestaurant){
    return this._http.post('/api/Restaurant', newRestaurant);
  }

  getAllRestaurants(){
    return this._http.get('/api/Restaurant');
  }

  getOneRestaurant(id){
    return this._http.get('/api/Restaurant/'+id)
  }

  updateRestaurant(id, editRestaurant){
    console.log(id);
    return this._http.put('/api/Restaurant/'+id, editRestaurant);
  }

  deleteOneRestaurant(id){
    return this._http.delete('/api/Restaurant/'+id)
  }

 

// OneToMany Routes****************

  addReview(id:String,newreview){
    return this._http.put('/api/review/'+id, newreview)
  }
  deletereview(id:String,qid:String){
    return this._http.delete('/api/review/' + id +'/'+ qid)
  }

}
