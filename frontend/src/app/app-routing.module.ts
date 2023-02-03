import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelPrincipalComponent } from './components/painel-principal/painel-principal.component';

const routes: Routes = [
  {
    path: "painelPrincipal",
    component: PainelPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
