import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ListModule } from '../list/list.module';
import { RouModule } from '../rouComponent/rou.module'
import { AComponent } from '../rouComponent/a.component'
import { BComponent } from '../rouComponent/b.component'


const routes: Routes=[
  {path:'a', component: AComponent},
  {path:'b', component: BComponent},
]

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,ListModule, HttpModule,RouterModule.forRoot(routes), RouModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
