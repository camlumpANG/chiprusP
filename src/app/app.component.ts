import { Component } from '@angular/core';
import { Employee } from './models/employee';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTitle:boolean = true;
  pizzaShop = 'Chirpus Pizza';
item:string[] = ["Cam", "Bill", 'Tom'];
currentCash:number = 0.42;
currentDate:Date = new Date();

menuItems:MenuItem[] = [
  {
    item:"chicken Fingers",
    category:"Dinner",
    price:11.99,
    special:false
  },
  {
    item:"Pizza",
    category:"Dinner",
    price:11.99,
    special:true
  },
  {
    item:"Wings",
    category:"Sides",
    price:8.99,
    special:false
  },
  {
    item:"Breadsticks",
    category:"sides",
    price:8.99,
    special:false
  },
  {
    item:"Ceasar Salad",
    category:"Salads",
    price:5.99,
    special:false
  },
  {
    item:"Chocolate Lava Cake",
    category:"Dessert",
    price:6.99,
    special:false
  },
  {
    item:"Apple Cobbler",
    category:"Dessert",
    price:8.99,
    special:false
  },
]



}
