import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../carousel/carousel.component';
import { BodyTitlesComponent } from '../body-titles/body-titles.component';
import { ItemComponent } from '../item/item.component';
import { ProductService } from '../services/products.service';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CarouselComponent,
    CommonModule,
    BodyTitlesComponent,
    ItemComponent,
  ],
})
export class HomeComponent implements OnInit{
  images: string[] = ['assets/image1.jpg', 'assets/image2.jpg'];
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
      this.fetchProducts();
  }
  fetchProducts() {
    this.productService.getProducts().subscribe(
      {
        next:(response)=>{
          this.products = response;
          console.log(this.products);
        },
        error:(error)=>{
          console.error("Error in fetching products",error);
        }
      }
    )
  }



}
