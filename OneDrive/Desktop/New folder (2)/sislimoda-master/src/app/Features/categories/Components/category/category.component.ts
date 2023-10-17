import { Component, OnInit, ElementRef, Renderer2, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CategoriesService } from '../../Services/categories.service';
import { MainCategory } from 'src/assets/interfaces/MainCategory';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, AfterViewInit {
  categories: MainCategory[] = []


  constructor(private _CategoriesService: CategoriesService, private renderer: Renderer2, private el: ElementRef) {

  }

  ngOnInit(): void {
    this._CategoriesService.getAllMainCategories().subscribe((res) => {
      console.log(res);
      this.categories = res
    })
  }

  ngAfterViewInit(): void {
    
  }

}
