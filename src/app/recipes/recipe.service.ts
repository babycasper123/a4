
import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {


    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe("Recipe 1",
            "Test recipe description",
            "https://upload.wikimedia.org/wikipedia/commons/f/fd/Indonesian_Food.png"),
        new Recipe("Recipe2",
            "Recipe2 Details",
            "https://www.hadiah.me/blog/wp-content/uploads/2017/04/160222142607-indonesian-food-bebek-goreng-6558-1900px-super-169.jpg")];


    getRecipes() {
        return this.recipes.slice();
    }






}