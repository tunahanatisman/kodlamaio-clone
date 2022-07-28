import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './common/footer/footer.component';
import { LessonCardComponent } from './components/lesson-card/lesson-card.component';
import { RegisterComponent } from './pages/register/register.component';
import { NaviComponent } from './common/navi/navi.component';
import { FilterSearchBarComponent } from './components/filter-search-bar/filter-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    HomepageComponent,
    LoginComponent,
    FooterComponent,
    LessonCardComponent,
    RegisterComponent,
    FilterSearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
