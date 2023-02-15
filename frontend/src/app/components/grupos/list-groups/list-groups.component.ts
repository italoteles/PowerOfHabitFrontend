import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/Group.model';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.css']
})
export class ListGroupsComponent implements OnInit {
  
  groups : Group[];
  
  constructor(private groupService : GroupService){}

  ngOnInit(): void {
    this.groupService.getAll().subscribe(groups => {
      this.groups = groups;
    })
  }

}
