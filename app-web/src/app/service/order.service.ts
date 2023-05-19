import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  produtoDetails = [
    {
      id: 1,
      foodName: "Sanduíche Natural de Frango",
      foodDetails: "Sanduíche feito de frango com catupiri",
      foodPrice: 15,
      foodImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsyO1WWN7NWpSu6X6uV7AsYUWtVlTF0Kizg&usqp=CAU"
    },

    {
      id: 1,
      foodName: "Sanduíche Natural de Frango",
      foodDetails: "Sanduíche feito de frango com catupiri",
      foodPrice: 15,
      foodImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsyO1WWN7NWpSu6X6uV7AsYUWtVlTF0Kizg&usqp=CAU"
    },

    {
      id: 1,
      foodName: "Sanduíche Natural de Frango",
      foodDetails: "Sanduíche feito de frango com catupiri",
      foodPrice: 15,
      foodImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsyO1WWN7NWpSu6X6uV7AsYUWtVlTF0Kizg&usqp=CAU"
    },

    {
      id: 1,
      foodName: "Sanduíche Natural de Frango",
      foodDetails: "Sanduíche feito de frango com catupiri",
      foodPrice: 15,
      foodImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsyO1WWN7NWpSu6X6uV7AsYUWtVlTF0Kizg&usqp=CAU"
    }
  ]

}
