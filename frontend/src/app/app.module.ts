import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { PainelPrincipalComponent } from './components/painel-principal/painel-principal.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/painel-principal/header/header.component';
import { FooterComponent } from './components/painel-principal/footer/footer.component';
import { MainComponent } from './components/painel-principal/main/main.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { ListGroupsComponent } from './components/grupos/list-groups/list-groups.component';

//components primeng
import { TableModule } from 'primeng/table';
import { AddEditGroupComponent } from './components/grupos/add-edit-group/add-edit-group.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelPrincipalComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GruposComponent,
    ListGroupsComponent,
    AddEditGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
