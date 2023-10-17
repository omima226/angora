import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/Components/header/header.component';
import { FooterComponent } from './Core/Components/footer/footer.component';
import { NavbarComponent } from './Core/Components/navbar/navbar.component';
import { SideNavbarComponent } from './Core/Components/side-navbar/side-navbar.component';
import { NotFoundComponent } from './Core/Components/not-found/not-found.component';
import { LayoutComponent } from './Core/Components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SideNavbarComponent,
    NotFoundComponent,
    LayoutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
