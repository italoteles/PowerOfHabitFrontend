import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PainelPrincipalComponent } from './components/painel-principal/painel-principal.component';

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
