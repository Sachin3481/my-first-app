import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent =1;
  properties:IProperty[];

  constructor( private route:ActivatedRoute,private housingService:HousingService ) {}

 
  ngOnInit(): void {  
      
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; //Meas we are on rent-property URL else we are in base URL
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
        data=>{
        this.properties=data;
      console.log(data);  
      },error =>{
        console.log('httperror:');
        console.log(error);
      }
    );
  }

}


