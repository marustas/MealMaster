import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { FridgeModule } from './pages/fridge/fridge.module';
import { RecipesModule } from './pages/recipes/recipes.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomepageModule, FridgeModule, RecipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
