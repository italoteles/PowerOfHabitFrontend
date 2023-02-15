import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/Group.model';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.css']
})
export class AddEditGroupComponent implements OnInit{
 
  group: Group = new Group();
  form: FormGroup;
  constructor(private router: Router, private groupService: GroupService) {

  }
  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.form = new FormGroup(
      {
        groupName: new FormControl('', Validators.required),
        groupDescription: new FormControl(''),
        groupUnit: new FormControl(''),
        groupActive: new FormControl(''),

      },
      { updateOn: 'submit' }
    );
  }


  register(): void {

    
    this.group.name = this.form.controls['groupName'].value != '' ? this.form.controls['groupName'].value : null;
    this.group.description = this.form.controls['groupDescription'].value != '' ? this.form.controls['groupDescription'].value : null;
    this.group.unit = this.form.controls['groupUnit'].value != '' ? this.form.controls['groupUnit'].value : null;
    this.group.active = this.form.controls['groupActive'].value != '' ? this.form.controls['groupActive'].value : null;
    
    this.groupService.create(this.group).subscribe(() => {    
      this.router.navigate(['painelPrincipal/grupos']);
    }

    );
  }

  goBack(){
    this.router.navigate(['painelPrincipal/grupos']);
  }


}
