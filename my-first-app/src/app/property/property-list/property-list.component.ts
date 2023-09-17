import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Sachin House",
      "Type": "House",
      "Price": 30000
    },
    {
      "Id": 2,
      "Name": "White House",
      "Type": "House",
      "Price": 74124
    }, 
    {
      "Id": 3,
      "Name": "Ambani House",
      "Type": "House",
      "Price": 896312
    }, 
    {
      "Id": 4,
      "Name": "Tata House",
      "Type": "House",
      "Price": 140000
    }, 
    {
      "Id": 5,
      "Name": "Ravi House",
      "Type": "House",
      "Price": 1123025
    },
    {
      "Id": 6,
      "Name": "ABC House",
      "Type": "House",
      "Price": 123000
    },


]

  constructor() {}

 
  ngOnInit(): void {
    
  }

}


