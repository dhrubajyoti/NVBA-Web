import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common'; 
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LightboxModule } from 'ngx-lightbox';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ImagegalleryComponent } from './pages/imagegallery/imagegallery.component';
import { MagazineComponent } from './pages/magazine/magazine.component';
import { HistoryComponent } from './pages/history/history.component';
import { TeamComponent } from './pages/team/team.component';
import { LawComponent } from './pages/law/law.component';

import { from } from 'rxjs';
import { Saraswatipujo2020Component } from './pages/saraswatipujo2020/saraswatipujo2020.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { LoginComponent } from './pages/auth/login/login.component';
import { UserComponent } from './pages/auth/user/user.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { UserResolver } from './pages/auth/user/user.resolver';
import { AuthGuard } from './pages/auth/core/auth.guard';
import { AuthService } from './pages/auth/core/auth.service';
import { UserService } from './pages/auth/core/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordComponent } from './pages/auth/forgetpassword/forgetpassword.component';

// import { NgxPayPalModule } from 'ngx-paypal';

import { FormsModule } from '@angular/forms';
import { EmailarchiveComponent } from './pages/emailarchive/emailarchive.component';
import { PresidentComponent } from './pages/president/president.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Kobipronam2020Component } from './pages/kobipronam2020/kobipronam2020.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { NvbayouthComponent } from './pages/nvbayouth/nvbayouth.component';
import { ChhotoderutsavComponent } from './pages/chhotoderutsav/chhotoderutsav.component';
import { RangamanchaComponent } from './pages/rangamancha/rangamancha.component';
import { NvbatvComponent } from './pages/nvbatv/nvbatv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    ImagegalleryComponent,
    MagazineComponent,
    HistoryComponent,
    TeamComponent,
    LawComponent,
    SidenavComponent,
    Saraswatipujo2020Component,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    EmailarchiveComponent,
    PresidentComponent,
    NotFoundComponent,
    Kobipronam2020Component,
    CartComponent,
    CheckoutComponent,
    NvbayouthComponent,
    ChhotoderutsavComponent,
    RangamanchaComponent,
    NvbatvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatSidenavModule,
    MatProgressBarModule,
    LightboxModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    ReactiveFormsModule,
    // NgxPayPalModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot(), // ToastrModule added
    CarouselModule.forRoot()
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard], 
  bootstrap: [AppComponent]
})
export class AppModule { }
