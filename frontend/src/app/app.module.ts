import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { PainelPrincipalComponent } from './components/painel-principal/painel-principal.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/painel-principal/header/header.component';
import { FooterComponent } from './components/painel-principal/footer/footer.component';
import { ConteudoComponent } from './components/painel-principal/conteudo/conteudo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelPrincipalComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ConteudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
