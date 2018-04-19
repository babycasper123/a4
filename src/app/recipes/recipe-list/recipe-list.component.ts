import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [new Recipe("Recipe 1",
  "Test recipe description",
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Indonesian_Food.png"),
  new Recipe("Recipe2",
  "Recipe2 Details",
  "https://www.hadiah.me/blog/wp-content/uploads/2017/04/160222142607-indonesian-food-bebek-goreng-6558-1900px-super-169.jpg")] ;


  constructor() { }

  ngOnInit() {
    
  }


  onRecipeSelected(recipe:Recipe){
      this.recipeWasSelected.emit(recipe);
  }

}
