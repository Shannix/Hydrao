import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }


title = " Welcom to product cards " ;

  Products = [
    new Product(1, 99, 'MacBook pro', 'petite description', 'macbook.jpeg', 450 , 850 ),
    new Product(2, 99, 'Ecrans 19 pouces ', 'petite description', 'macbook.jpeg', 50 , 80 ),
    new Product(3, 99, 'Sweet M ', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 'macbook.jpeg', 15 , 25 ),
    new Product(3, 99, 'Sweet M ', 'petite description', 'macbook.jpeg', 15 , 25 )
  ];


}




export class Product {

 constructor(
	public idpr: number,
  public idus : number,
	public name : string,
  public description : string,
  public picture : string ,
  public prixmin : number ,
  public prixmax : number

  ) { }



}
