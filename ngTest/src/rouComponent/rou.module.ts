import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'

import { AComponent } from './a.component'
import { BComponent } from './b.component'

@NgModule({
    declarations: [AComponent, BComponent],
    imports:[BrowserModule],
    exports: [AComponent, BComponent]
})
export class RouModule{}