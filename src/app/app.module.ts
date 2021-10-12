import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TodoComponent} from "./todo/todo.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule{}
