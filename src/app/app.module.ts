import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }