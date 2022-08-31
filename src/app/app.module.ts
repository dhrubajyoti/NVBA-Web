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
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';

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
import { AngularFireDatabaseModule } from '@angular/fire/database';
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
import { MemberDetailsService } from './services/member-details.service';

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
import { CartmemberComponent } from './pages/cartmember/cartmember.component';
import { Durgapuja2020Component } from './pages/durgapuja2020/durgapuja2020.component';
import { OrderTicketsComponent } from './pages/order-tickets/order-tickets.component';
import { ReportsComponent } from './pages/ec/reports/reports.component';

import { AgGridModule } from 'ag-grid-angular';
import { ResetpasswordComponent } from './pages/auth/resetpassword/resetpassword.component';
import { CartnonmemberComponent } from './pages/cartnonmember/cartnonmember.component';
import { Ameyaa2020Component } from './magazine/ameyaa2020/ameyaa2020.component';
import { FaqComponent } from './magazine/faq/faq.component';
import { SaraswatipujaComponent } from './pages/saraswatipuja/saraswatipuja.component';
import { CaresComponent } from './pages/cares/cares.component';
import { ArtworksComponent } from './pages/archive/artworks/artworks.component';
import { KobipronamComponent } from './pages/kobipronam/kobipronam.component';
import { PicnicComponent } from './pages/picnic/picnic.component';
import { Durgapuja2021Component } from './pages/durgapuja2021/durgapuja2021.component';
import { EarlybirdComponent } from './pages/tickets/earlybird/earlybird.component';
import { RegulargateComponent } from './pages/tickets/regulargate/regulargate.component';
import { RegulargatewithoutculturalComponent } from './pages/tickets/regulargatewithoutcultural/regulargatewithoutcultural.component';
import { EarlybirdwithoutculturalComponent } from './pages/tickets/earlybirdwithoutcultural/earlybirdwithoutcultural.component';
import { EventticketsComponent } from './pages/tickets/eventtickets/eventtickets.component';
import { AdminconsoleComponent } from './pages/ec/adminconsole/adminconsole.component';
import { CountsComponent } from './pages/ec/counts/counts.component';
import { AddmorekkticketsComponent } from './pages/tickets/addmorekktickets/addmorekktickets.component';
import { MemberonlykkticketsComponent } from './pages/tickets/memberonlykktickets/memberonlykktickets.component';
import { CheckinComponent } from './pages/ec/checkin/checkin.component';
import { AgmComponent } from './pages/agm/agm.component';
import { Team20to21Component } from './pages/archive/team20to21/team20to21.component';
import { DurgapujaComponent } from './pages/durgapuja/durgapuja.component';
import { Durgapujatickets2022Component } from './pages/tickets/durgapujatickets2022/durgapujatickets2022.component';
import { NewheaderComponent } from './shared/newheader/newheader.component';
import { NewfooterComponent } from './shared/newfooter/newfooter.component';


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
    NvbatvComponent,
    CartmemberComponent,
    Durgapuja2020Component,
    OrderTicketsComponent,
    ReportsComponent,
    ResetpasswordComponent,
    CartnonmemberComponent,
    Ameyaa2020Component,
    FaqComponent,
    SaraswatipujaComponent,
    CaresComponent,
    ArtworksComponent,
    KobipronamComponent,
    PicnicComponent,
    Durgapuja2021Component,
    EarlybirdComponent,
    RegulargateComponent,
    RegulargatewithoutculturalComponent,
    EarlybirdwithoutculturalComponent,
    EventticketsComponent,
    AdminconsoleComponent,
    CountsComponent,
    AddmorekkticketsComponent,
    MemberonlykkticketsComponent,
    CheckinComponent,
    AgmComponent,
    Team20to21Component,
    DurgapujaComponent,
    Durgapujatickets2022Component,
    NewheaderComponent,
    NewfooterComponent
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
    AngularFireDatabaseModule,  // Firebase database module 
    ReactiveFormsModule,
    // NgxPayPalModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot(), // ToastrModule added
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    AgGridModule.withComponents([]),
    AccordionModule.forRoot()
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard, MemberDetailsService], 
  bootstrap: [AppComponent]
})
export class AppModule { } 
