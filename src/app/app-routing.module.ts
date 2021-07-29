import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ImagegalleryComponent } from './pages/imagegallery/imagegallery.component';
import { MagazineComponent } from './pages/magazine/magazine.component';
import { Ameyaa2020Component } from './magazine/ameyaa2020/ameyaa2020.component';
import { FaqComponent } from './magazine/faq/faq.component';


import { HistoryComponent } from './pages/history/history.component';
import { TeamComponent } from './pages/team/team.component';
import { LawComponent } from './pages/law/law.component';
import { Saraswatipujo2020Component } from './pages/saraswatipujo2020/saraswatipujo2020.component';
import { SaraswatipujaComponent } from './pages/saraswatipuja/saraswatipuja.component';
import { KobipronamComponent } from './pages/kobipronam/kobipronam.component';
import { Kobipronam2020Component } from './pages/kobipronam2020/kobipronam2020.component';
import { Durgapuja2020Component } from './pages/durgapuja2020/durgapuja2020.component';
import { PresidentComponent } from './pages/president/president.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ChhotoderutsavComponent } from './pages/chhotoderutsav/chhotoderutsav.component';
import { RangamanchaComponent } from './pages/rangamancha/rangamancha.component';
import { NvbatvComponent } from './pages/nvbatv/nvbatv.component';

import { LoginComponent } from './pages/auth/login/login.component';
import { UserComponent } from './pages/auth/user/user.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ForgetpasswordComponent } from './pages/auth/forgetpassword/forgetpassword.component';
import { UserResolver } from './pages/auth/user/user.resolver';
import { AuthGuard } from './pages/auth/core/auth.guard';

import { EmailarchiveComponent } from './pages/emailarchive/emailarchive.component';
import { CheckoutComponent} from './pages/checkout/checkout.component';
import { OrderTicketsComponent } from './pages/order-tickets/order-tickets.component';
import { ReportsComponent } from './pages/ec/reports/reports.component';
import { ResetpasswordComponent } from './pages/auth/resetpassword/resetpassword.component';
import { CaresComponent } from './pages/cares/cares.component';
import { ArtworksComponent } from './pages/archive/artworks/artworks.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' }, 
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent, pathMatch: 'full'  },
  { path: "contactus", component: ContactusComponent, pathMatch: 'full'  },
  { path: "imagegallery", component: ImagegalleryComponent, pathMatch: 'full'  },
  { path: "magazine", component: MagazineComponent, pathMatch: 'full'  },
  { path: "ameyaa2020", component: Ameyaa2020Component, pathMatch: 'full'  },
  { path: "faq", component: FaqComponent, pathMatch: 'full'  },

  { path: "history", component: HistoryComponent, pathMatch: 'full'  },
  { path: "team", component: TeamComponent,pathMatch: 'full'  },
  { path: "law", component: LawComponent, pathMatch: 'full'   },
  { path: "saraswatipujo2020", component: Saraswatipujo2020Component, pathMatch: 'full'  },
  { path: "saraswatipuja", component: SaraswatipujaComponent, pathMatch: 'full'  },
  { path: "kobipronam", component: KobipronamComponent, pathMatch: 'full'  },
  { path: "kobipronam2020", component: Kobipronam2020Component, pathMatch: 'full'  },
  { path: "durgapuja2020", component: Durgapuja2020Component, pathMatch: 'full'  },
  { path: "emailarchive", component:EmailarchiveComponent, pathMatch: 'full' },
  { path: "president", component: PresidentComponent, pathMatch: 'full' },
  { path: "chhotoderutsav", component: ChhotoderutsavComponent, pathMatch: 'full' },
  { path: "rangomancha", component: RangamanchaComponent, pathMatch: 'full' },
  { path: "rangamancha", component: RangamanchaComponent, pathMatch: 'full' },
  { path: "nvbatv", component: NvbatvComponent, pathMatch: 'full' },
  { path: "cares", component: CaresComponent, pathMatch: 'full' }, 
  { path: "artworks", component: ArtworksComponent, pathMatch: 'full' }, 
  // { path: '404', component: NotFoundComponent},
  // { path: '**', redirectTo: '/404'},

  { path: "login", component: LoginComponent, canActivate: [AuthGuard]  },
  { path: "register", component: RegisterComponent, canActivate: [AuthGuard]  },
  { path: "forgetpassword", component: ForgetpasswordComponent, pathMatch: 'full' },
  { path: "user", component: UserComponent,  resolve: { data: UserResolver} },
  { path: "resetpassword", component: ResetpasswordComponent, pathMatch: 'full' },
  { path: "checkout", component: CheckoutComponent,  pathMatch: 'full' },
  { path: "orderfood", component: OrderTicketsComponent,  pathMatch: 'full' },

  { path: "reports", component: ReportsComponent,  pathMatch: 'full', resolve: { data: UserResolver}  },
  
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
