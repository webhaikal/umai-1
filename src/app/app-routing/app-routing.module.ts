import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from '../simple/simple.component';
import { CompoundComponent } from '../compound/compound.component';

const routes: Routes = [
  { path: 'simple', component: SimpleComponent },
  { path: 'compound', component: CompoundComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}