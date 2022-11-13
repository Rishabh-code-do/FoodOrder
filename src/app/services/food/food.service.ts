import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAllTag():Tag[]{
    return [
      {name:'All',count:8},
      {name:'FastFood',count:5},
      {name:'Beverages',count:1},
      {name:'Chicken',count:2},
      {name:'Lunch',count:7},
      {name:'Pizza', count:1},
      {name:'Pasta',count:1},
    ]
  }
  getAllFoodByTag( tag: string): Foods[]{
    if(tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food=> food.tags?.includes(tag));
  }

  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Chicken Biryani',
        cookTime:'20-30',
        price:3,
        favorite:false,
        origins: ['Hyderabad'],
        stars:4,
        imageUrl:'assets/food-1.jpg',
        tags:['Lunch','Chicken']
      },
      {
        id:2,
        name:'Shahi Paneer',
        cookTime:'20-25',
        price:2,
        favorite:false,
        origins: ['Punjab','Delhi'],
        stars:4,
        imageUrl:'assets/food-2.jpg',
        tags:['Lunch']
      },
      {
        id:3,
        name:'Burger',
        cookTime:'10-15',
        price:1.5,
        favorite:false,
        origins: ['USA','UK'],
        stars:4,
        imageUrl:'assets/food-3.jpg',
        tags:['FastFood','Lunch']
      },
      {
        id:4,
        name:'Coffee',
        cookTime:'10-15',
        price:1,
        favorite:false,
        origins: ['Kerala','USA'],
        stars:4,
        imageUrl:'assets/food-4.jpg',
        tags:['Beverages']
      },
      {
        id:5,
        name:'White Sauce Pasta',
        cookTime:'10-20',
        price:2,
        favorite:false,
        origins: ['Japan'],
        stars:4,
        imageUrl:'assets/food-5.jpg',
        tags:['FastFood','Pasta','Lunch']
      },
      {
        id:6,
        name:'Meat Balls',
        cookTime:'10-20',
        price:2,
        favorite:false,
        origins: ['Germany'],
        stars:4,
        imageUrl:'assets/food-6.jpg',
        tags:['FastFood','Lunch']
      },
      {
        id:7,
        name:'Cheese Burst Pizza',
        cookTime:'10-20',
        price:3,
        favorite:false,
        origins: ['Italy'],
        stars:4,
        imageUrl:'assets/food-7.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id:8,
        name:'Chicken Wings',
        cookTime:'10-20',
        price:4,
        favorite:false,
        origins: ['USA'],
        stars:4,
        imageUrl:'assets/food-8.jpg',
        tags:['FastFood','Lunch','Chicken']
      },
    ];
  }
}
