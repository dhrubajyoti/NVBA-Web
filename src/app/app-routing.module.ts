import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ImagegalleryComponent } from './pages/imagegallery/imagegallery.component';
import { MagazineComponent } from './pages/magazine/magazine.component';
import { HistoryComponent } from './pages/history/history.component';
import { TeamComponent } from './pages/team/team.component';
import { LawComponent } from './pages/law/law.component';
import { Saraswatipujo2020Component } from './pages/saraswatipujo2020/saraswatipujo2020.component';
import { Kobipronam2020Component } from './pages/kobipronam2020/kobipronam2020.component';
import { PresidentComponent } from './pages/president/president.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'

import { LoginComponent } from './pages/auth/login/login.component';
import { UserComponent } from './pages/auth/user/user.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ForgetpasswordComponent } from './pages/auth/forgetpassword/forgetpassword.component';
import { UserResolver } from './pages/auth/user/user.resolver';
import { AuthGuard } from './pages/auth/core/auth.guard';


import { EmailarchiveComponent } from './pages/emailarchive/emailarchive.component';
import { CheckoutComponent} from './pages/checkout/checkout.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent, pathMatch: 'full' },
  { path: "contactus", component: ContactusComponent, pathMatch: 'full' },
  { path: "imagegallery", component: ImagegalleryComponent, pathMatch: 'full' },
  { path: "magazine", component: MagazineComponent, pathMatch: 'full' },
  { path: "history", component: HistoryComponent, pathMatch: 'full' },
  { path: "team", component: TeamComponent,pathMatch: 'full' },
  { path: "law", component: LawComponent, pathMatch: 'full' },
  { path: "saraswatipujo2020", component: Saraswatipujo2020Component, pathMatch: 'full' },
  { path: "kobipronam2020", component: Kobipronam2020Component, pathMatch: 'full' },
  { path: "emailarchive", component:EmailarchiveComponent, pathMatch: 'full'},
  { path: "president", component: PresidentComponent, pathMatch: 'full'},
  // { path: '404', component: NotFoundComponent},
  // { path: '**', redirectTo: '/404'},

  { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent, canActivate: [AuthGuard] },
  { path: "forgetpassword", component: ForgetpasswordComponent, pathMatch: 'full'},
  { path: "user", component: UserComponent,  resolve: { data: UserResolver}},
  { path: "checkout", component: CheckoutComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
