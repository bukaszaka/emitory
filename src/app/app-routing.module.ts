import { SchemesComponent } from './schemes/schemes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmittersComponent } from './emitters/emitters.component';
import { InfluenceComponent } from './influence/influence.component';

const routes: Routes = [{ path: 'schemes', component: SchemesComponent },
                        { path: 'emitters', component: EmittersComponent },
                        { path: '', redirectTo: '/emitters', pathMatch: 'full' },
                        { path: 'influence', component: InfluenceComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
