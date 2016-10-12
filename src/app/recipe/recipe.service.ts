import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from '../shared/ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Hieu', 'Hieu', 'http://us.123rf.com/450wm/zerbor/zerbor1307/zerbor130700001/20744554-%E7%99%BD%E3%81%84%E8%83%8C%E6%99%AF%E3%81%A7%E9%9A%94%E9%9B%A2%E3%81%95%E3%82%8C%E3%81%9F%E8%8F%A9%E6%8F%90%E6%A8%B9.jpg?ver=6', [
        new Ingredient('tree', 2),
        new Ingredient('flower', 1)
    ]),
    new Recipe('Dummy', 'Dummy', 'http://lamcanh.vn/files/large/5c4d3407da200a5', [
        new Ingredient('sun', 3)
    ])
  ];
  constructor() {}

  gerRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
      this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
