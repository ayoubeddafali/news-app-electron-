import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {MaterializeDirective} from "angular2-materialize";
import { NewsService } from './shared/news.service';
@NgModule({
  imports:      [ BrowserModule ,  FormsModule,
    HttpModule ],
  declarations: [ AppComponent, MaterializeDirective ],
  bootstrap:    [ AppComponent ],
  providers:[NewsService]
})
export class AppModule { }