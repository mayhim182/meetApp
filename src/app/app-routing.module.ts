import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharingScreenComponent } from './sharing-screen/sharing-screen.component';

const routes: Routes = [
  {path:'',component:SharingScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
