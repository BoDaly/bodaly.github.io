import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GraphicDesignerPageComponent } from './graphic-designer-page/graphic-designer-page.component'
import { SoftwareDeveloperPageComponent } from './software-developer-page/software-developer-page.component'
import { IllustratorPageComponent } from './illustrator-page/illustrator-page.component'
import { ContactPageComponent } from './contact-page/contact-page.component'



const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  { path: 'graphic-designer', component: GraphicDesignerPageComponent },
  { path: 'software-developer', component: SoftwareDeveloperPageComponent },
  { path: 'illustrator', component: IllustratorPageComponent },
  { path: 'contact', component: ContactPageComponent }

];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
