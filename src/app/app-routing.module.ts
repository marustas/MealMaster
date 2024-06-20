import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'recipes',
    loadChildren: () => import('./pages/recipes/recipes.module').then((m) => m.RecipesModule),
  },
  {
    path: 'fridge',
    loadChildren: () => import('./pages/fridge/fridge.module').then((m) => m.FridgeModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/fallback/fallback.module').then((m) => m.FallbackModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
