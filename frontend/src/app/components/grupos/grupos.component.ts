import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent {

  constructor(private router:Router){}
  navigateToGroupCreate(){
    this.router.navigate(['/painelPrincipal/add-edit-grupos']);
  }

}
