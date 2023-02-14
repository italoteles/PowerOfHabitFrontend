import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GruposComponent } from './components/grupos/grupos.component';
import { LoginComponent } from './components/login/login.component';
import { PainelPrincipalComponent } from './components/painel-principal/painel-principal.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: "painelPrincipal",
    component: PainelPrincipalComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registration",
    component: RegisterComponent
  },
  {
    path: "grupos",
    component: GruposComponent,
    outlet : "mainRouter"
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
