import { Component, OnInit, Input } from '@angular/core';
import {HttpService}from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
@Input() restaurantToShow: any;
selectedRestaurant: any;
id: any;
restaurants: any;
allRestaurants: any;

constructor(
  private _HttpService: HttpService,
  private _route: ActivatedRoute,
  private _router: Router) { } 

  ngOnInit() {
    this.getRestaurantsFromService();
    this.selectedRestaurant ={};
    this._route.params.subscribe((params:Params)=>{
      this.getARestaurant(params['id'])
    })
  }
  getRestaurantsFromService() {
    let observable = this._HttpService.getAllRestaurants();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.restaurants = data;
    });
  }
  getARestaurant(id){
    const obs= this._HttpService.getOneRestaurant(id);
    obs.subscribe(data=>{
      this.selectedRestaurant = data['info'];
    })
  }
  updateARestaurant(updatedrestaurant) {
    console.log("hit comp.ts route")
    const obs = this._HttpService.updateRestaurant(updatedrestaurant._id, updatedrestaurant);
    obs.subscribe(data => {
      console.log(data);
      this._router.navigate(['/home']);
      });
    }


}
