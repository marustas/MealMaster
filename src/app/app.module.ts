import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FridgeModule } from './pages/fridge/fridge.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { LoginModule } from './pages/login/login.module';
import { RecipesModule } from './pages/recipes/recipes.module';
import { UserModule } from './pages/user/user.module';
import { RoleDirective } from './shared/directives/role.directive';
import { AuthInterceptor } from './shared/guards/auth.interceptor';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, RoleDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    FridgeModule,
    RecipesModule,
    HttpClientModule,
    UserModule,
    LoginModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  bootstrap: [AppComponent],
  providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
})
export class AppModule {}
