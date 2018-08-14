import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { IllustratorPageComponent } from './illustrator-page/illustrator-page.component';
import { SoftwareDeveloperPageComponent } from './software-developer-page/software-developer-page.component';
import { GraphicDesignerPageComponent } from './graphic-designer-page/graphic-designer-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { LinksComponent } from './links/links.component';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { EventEmitterService } from './event.emitter.service'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IllustratorPageComponent,
    SoftwareDeveloperPageComponent,
    GraphicDesignerPageComponent,
    ContactPageComponent,
    FooterComponent,
    SkillsComponent,
    ExperienceComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxImageGalleryModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
