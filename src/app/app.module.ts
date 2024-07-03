import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FridgeModule } from './pages/fridge/fridge.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { RecipesModule } from './pages/recipes/recipes.module';
import { UserModule } from './pages/user/user.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    FridgeModule,
    RecipesModule,
    HttpClientModule,
    UserModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
