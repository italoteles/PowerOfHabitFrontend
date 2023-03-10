import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditGroupComponent } from './components/grupos/add-edit-group/add-edit-group.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { LoginComponent } from './components/login/login.component';
import { PainelPrincipalComponent } from './components/painel-principal/painel-principal.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: "painelPrincipal",
    component: PainelPrincipalComponent,
    children: [
      {
        path: 'grupos',
        component: GruposComponent
      },
      {
        path: 'add-edit-grupos',
        component: AddEditGroupComponent
      }
    ]
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
