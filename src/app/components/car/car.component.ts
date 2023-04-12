import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/entities/car';
import { CarImage } from 'src/app/models/entities/carImage';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  carImages: CarImage[] = [];
  imageUrl = 'https://localhost:44362/Uploads/Images/';

constructor(private carService:CarService){}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data;
    })
  }
}
