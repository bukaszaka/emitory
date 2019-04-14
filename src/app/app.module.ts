import { SchemeNamePipe } from './scheme_name.pipe';
import { PowerPointsPipe } from './power_points.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmittersComponent } from './emitters/emitters.component';
import { SchemesComponent } from './schemes/schemes.component';
import { InfluenceComponent } from './influence/influence.component';


@NgModule({
  declarations: [
    AppComponent,
    EmittersComponent,
    SchemesComponent,
    InfluenceComponent,
    PowerPointsPipe,
    SchemeNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
