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
      id: 2,
      foodName: "Cachorro quente de forno",
      foodDetails: "Cachorro quente com salsichas e condimentos",
      foodPrice: 8,
      foodImg: "https://cdn0.tudoreceitas.com/pt/posts/5/7/0/cachorro_quente_de_forno_de_liquidificador_10075_600.jpg"
    },

    {
      id: 3,
      foodName: "Pastel de forno",
      foodDetails: "Pastel feito de frango com catupiria",
      foodPrice: 6,
      foodImg: "https://www.sabornamesa.com.br/media/k2/items/cache/73cfa97422fce7916e3facf08ef108b3_XL.jpg"
    },

    {
      id: 4,
      foodName: "Empadão de carne",
      foodDetails: "Empadão de carne moída com condimentos",
      foodPrice: 5,
      foodImg: "https://anamariabraga.globo.com/wp-content/uploads/2018/11/empadao-de-carne-moida.jpg"
    },

    {
      id: 5,
      foodName: "Coxinha de frango",
      foodDetails: "Coxinha de frango feita com catupiri",
      foodPrice: 3,
      foodImg: "https://receitinhas.com.br/wp-content/uploads/2017/12/coxinha-de-frango-com-queijo.jpg"
    },

    {
      id: 6,
      foodName: "Pizza portuguesa",
      foodDetails: "Pizza portuguesa tradicional feita no forno",
      foodPrice: 20,
      foodImg: "https://img.cybercook.com.br/receitas/819/pizza-a-portuguesa-1.jpeg"
    }
  
  ]

}
